// ─── CORE APP LOGIC ─────────────────────────────────────────────────
// This file contains all stable infrastructure.
// When adding a new daily report, ONLY touch:
//   - REPORTS.day  (add new date entry)
//   - getDayData() (add new case)
//   - currentKey   (update to latest date)
//   - modals       (add modal entries for new calls)
// Everything else must stay untouched.
// ─────────────────────────────────────────────────────────────────────

// ─── REPORT DATA ───────────────────────────────────────────────
const REPORTS = {
  day: {},  // auto-populated at init by probing for dayOverviewHTML_* functions
  week: { '2026-W17': true, '2026-W18': true },   // W17 = Apr 20-26 · W18 = Apr 27–May 3
  month: { '2026-04': true, '2026-05': true },
};

// ─── STATE ─────────────────────────────────────────────────────
let gran = 'day';
let currentKey = '2026-05-12';
let activeTab = '';
let activeCsm = 'all';
let activeHealth = 'all';
const doneActions = new Set();
let accountsSortColumn = 'arr';
let accountsSortDesc = true;

// ─── PERIOD KEYS ───────────────────────────────────────────────
function dayKey(iso) { return iso; }
function weekKey(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  // Use UTC midnight for both dates so DST offset differences (e.g. EST vs EDT)
  // don't corrupt the millisecond diff and cause off-by-one week numbers.
  const target = Date.UTC(y, m - 1, d);
  const jan4Day = new Date(y, 0, 4).getDay(); // local getDay() is fine for day-of-week
  const startOfWeek = Date.UTC(y, 0, 4) - ((jan4Day + 6) % 7) * 86400000;
  const diff = target - startOfWeek;
  const week = Math.floor(diff / 604800000) + 1;
  return y + '-W' + String(week).padStart(2, '0');
}
function monthKey(iso) { return iso.slice(0,7); }
function currentPeriodKey(iso) {
  if (gran==='day') return dayKey(iso);
  if (gran==='week') return weekKey(iso);
  return monthKey(iso);
}

// ─── DATE UTILS ────────────────────────────────────────────────
function isoToDate(s) { const [y,m,d]=s.split('-').map(Number); return new Date(y,m-1,d); }
function dateToISO(d) { return d.toISOString().slice(0,10); }
function formatLabel(iso) {
  if (gran==='day') {
    return isoToDate(iso).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  }
  if (gran==='week') {
    const d=isoToDate(iso);
    const day=d.getDay(), diff=d.getDate()-day+(day===0?-6:1);
    const mon=new Date(d); mon.setDate(diff);
    const sun=new Date(mon); sun.setDate(mon.getDate()+6);
    return mon.toLocaleDateString('en-US',{month:'short',day:'numeric'})+' – '+sun.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  }
  return isoToDate(iso+'-01').toLocaleDateString('en-US',{month:'long',year:'numeric'});
}

function shiftPeriod(delta) {
  // Always use the date picker's ISO value as anchor — it stays valid for all gran modes
  // (currentKey for week gran is '2026-W19' which can't be parsed directly as a date)
  const anchor = document.getElementById('date-picker').value;
  const d = isoToDate(anchor);
  if (gran==='day') d.setDate(d.getDate()+delta);
  else if (gran==='week') d.setDate(d.getDate()+delta*7);
  else d.setMonth(d.getMonth()+delta);
  applyDate(dateToISO(d));
}
function onPickerChange(val) { if(val) applyDate(val); }
function applyDate(iso) {
  currentKey = gran==='day' ? iso : gran==='week' ? weekKey(iso) : monthKey(iso);
  // keep picker aligned to a valid ISO date within period (picker never holds a week key)
  document.getElementById('date-picker').value = iso.length===10 ? iso : iso+'-01';
  document.getElementById('date-label').textContent = formatLabel(iso.length===10?iso:iso+'-01');
  render();
}

// ─── GRANULARITY ───────────────────────────────────────────────
function setGran(g) {
  gran = g;
  document.querySelectorAll('.gran-btn').forEach(b=>b.classList.toggle('active',b.dataset.gran===g));
  // Use the date picker's ISO value as anchor — always valid regardless of prior gran mode
  applyDate(document.getElementById('date-picker').value);
}

// ─── RENDER ────────────────────────────────────────────────────
function render() {
  const hasReport = REPORTS[gran]?.[currentKey];
  const tabsRow = document.getElementById('tabs-row');
  const filtersBar = document.getElementById('filters-bar');
  const statPills = document.getElementById('stat-pills');
  const mc = document.getElementById('main-content');

  // Global Accounts tab — always first, always visible
  const acctTabHtml = `<div class="tab${activeTab==='accounts'?' active':''}" onclick="switchTab('accounts')">Accounts (123)</div>`;

  // Build period tabs HTML without calling the full renderer (avoids activeTab side-effects)
  function periodTabsHtml() {
    if (gran === 'day' && hasReport) {
      const dd = getDayData(currentKey);
      return ['overview','calls','pulses','actions'].map((k,i) =>
        `<div class="tab${activeTab===k?' active':''}" onclick="switchTab('${k}')">${dd.tabs[i]}</div>`
      ).join('');
    }
    if (gran === 'week' && hasReport) {
      return ['wsummary','wcsm','wcalls','wpulses','wcoverage'].map((k,i) =>
        `<div class="tab${activeTab===k?' active':''}" onclick="switchTab('${k}')">${['Summary','CSM Breakdown','Call Log (24)','Pulse Log (21)','Pulse Coverage'][i]}</div>`
      ).join('');
    }
    if (gran === 'month' && hasReport) {
      return ['msummary','mcsm','mcalls','mpulses','mhealth','mcoverage'].map((k,i) =>
        `<div class="tab${activeTab===k?' active':''}" onclick="switchTab('${k}')">${['Summary','CSM Breakdown','Call Log (24)','Pulse Notes (21)','Pulse Health','Pulse Coverage'][i]}</div>`
      ).join('');
    }
    return '';
  }

  if (activeTab === 'accounts') {
    tabsRow.innerHTML = acctTabHtml + periodTabsHtml();
    filtersBar.style.display = 'none';
    statPills.innerHTML = '';
    accountSearchQuery = '';
    mc.innerHTML = `<div class="content">${accountsHTML()}</div>`;
    return;
  }

  if (!hasReport) {
    tabsRow.innerHTML = acctTabHtml;
    filtersBar.style.display = 'none';
    statPills.innerHTML = '';
    mc.innerHTML = renderNoReport();
    return;
  }

  filtersBar.style.display = '';
  if (gran === 'day') renderDay(mc, tabsRow, statPills);
  else if (gran === 'week') renderWeek(mc, tabsRow, statPills);
  else renderMonth(mc, tabsRow, statPills);

  // Prepend the global Accounts tab to whatever the period renderer set
  tabsRow.innerHTML = acctTabHtml + tabsRow.innerHTML;
}

function renderNoReport() {
  const label = gran==='day'?'this date':gran==='week'?'this week':'this month';
  return `<div class="no-report">
    <div class="no-report-icon">📭</div>
    <div class="no-report-title">No report for ${label}</div>
    <div class="no-report-sub">Daily CSM engagement reports are generated automatically each morning and rolled up weekly and monthly. No report was found for the selected period.</div>
    <div class="no-report-hint" onclick="jumpToLatest()">← Go to most recent report</div>
  </div>`;
}


// Navigate from summary view to CSM breakdown tab filtered to one CSM.
// Called by direct onclick on CSM name cells in weekSummaryHTML / monthSummaryHTML.
window.csmClickSummary = function(csmKey) {
  const tab = gran === 'month' ? 'mcsm' : 'wcsm';
  jumpToTab(tab, csmKey, 'all');
};

function jumpToDetail(type, csm) {
  const isMonth = gran === 'month';
  const isWeek = gran === 'week';
  let tab = '', health = 'all';
  if (type === 'calls')   tab = isMonth ? 'mcalls'  : (isWeek ? 'wcalls'  : 'calls');
  else if (type === 'pulses') tab = isMonth ? 'mpulses' : (isWeek ? 'wpulses' : 'pulses');
  else if (type === 'risks')  { tab = isMonth ? 'mpulses' : (isWeek ? 'wpulses' : 'pulses'); health = 'Concerning'; }
  if (!tab) return;
  jumpToTab(tab, csm || 'all', health);
}

function jumpToTab(tab, csm, health) {
  activeTab = tab;
  if (csm !== undefined && csm !== null) activeCsm = csm;
  if (health !== undefined && health !== null) activeHealth = health;
  document.querySelectorAll('[data-filter-csm]').forEach(c =>
    c.classList.toggle('active-chip', c.dataset.filterCsm === activeCsm)
  );
  document.querySelectorAll('[data-filter-health]').forEach(c =>
    c.classList.toggle('active-chip', c.dataset.filterHealth === activeHealth)
  );
  render();
}

function jumpToLatest() {
  if (gran==='day') {
    const latest = Object.keys(REPORTS.day).sort().reverse()[0];
    if (latest) { applyDate(latest); return; }
  } else if (gran==='week') {
    const latest = Object.keys(REPORTS.week).sort().reverse()[0];
    if (latest) { currentKey = latest; document.getElementById('date-label').textContent = formatLabel(latest + '-01'); render(); return; }
  } else {
    const latest = Object.keys(REPORTS.month).sort().reverse()[0];
    if (latest) { currentKey = latest; document.getElementById('date-label').textContent = formatLabel(latest + '-01'); render(); return; }
  }
  render();
}

// ─── STAT PILLS ────────────────────────────────────────────────
function setPills(items) {
  document.getElementById('stat-pills').innerHTML = items.map(([dot,text])=>
    `<div class="stat-pill"><span class="dot ${dot}"></span>${text}</div>`
  ).join('');
}

// ═══════════════════════════════════════════════════════════════
// DAY VIEW
// ═══════════════════════════════════════════════════════════════
function renderDay(mc, tabsRow, statPills) {
  const dd = getDayData(currentKey);
  setPills(dd.pills);
  if (!activeTab || !['overview','calls','pulses','actions'].includes(activeTab)) activeTab='overview';
  tabsRow.innerHTML = dd.tabs.map((t,i)=>{
    const k=['overview','calls','pulses','actions'][i];
    return `<div class="tab ${activeTab===k?'active':''}" onclick="switchTab('${k}')">${t}</div>`;
  }).join('');
  const showHealth = activeTab==='calls'||activeTab==='pulses';
  document.getElementById('health-divider').style.display = showHealth?'':'none';
  document.getElementById('health-label').style.display = showHealth?'':'none';
  ['h-all','h-healthy','h-concerning'].forEach(id=>{ document.getElementById(id).style.display=showHealth?'':'none'; });

  mc.innerHTML = `<div class="content">
    <div id="pane-overview" style="display:${activeTab==='overview'?'':'none'}">
      ${dd.overviewHTML()}
    </div>
    <div id="pane-calls" style="display:${activeTab==='calls'?'':'none'}">
      ${dd.callsHTML()}
    </div>
    <div id="pane-pulses" style="display:${activeTab==='pulses'?'':'none'}">
      ${dd.pulsesHTML()}
    </div>
    <div id="pane-actions" style="display:${activeTab==='actions'?'':'none'}">
      ${dd.actionsHTML()}
    </div>
  </div>`;
  applyDayFilters();
}

// ─── CSM REGISTRY ──────────────────────────────────────────────
// Stable display metadata for all 8 Enterprise CSMs.
// Update accounts/opps counts here if the book changes.
const CSM_DISPLAY = {
  atisha: { name: 'Atisha Waghela', initials: 'AW', cls: 'av-grey',   accounts: 18, opps: 22 },
  nick:   { name: 'Nick Johnson',   initials: 'NJ', cls: 'av-grey',   accounts: 27, opps: 43 },
  varun:  { name: 'Varun Tiwari',   initials: 'VT', cls: 'av-varun',  accounts: 21, opps: 26 },
  pam:    { name: 'Pam Huck',       initials: 'PH', cls: 'av-grey',   accounts:  7, opps: 17 },
  rani:   { name: 'Rani Guy',       initials: 'RG', cls: 'av-grey',   accounts: 10, opps: 27 },
  riley:  { name: 'Riley Rogers',   initials: 'RR', cls: 'av-riley',  accounts:  6, opps: 59 },
  andy:   { name: 'Andy Lim',       initials: 'AL', cls: 'av-grey',   accounts: 10, opps: 13 },
  divyam: { name: 'Divyam Dewan',   initials: 'DD', cls: 'av-divyam', accounts: 21, opps: 28 },
};
const CSM_ORDER = ['varun','pam','rani','divyam','riley','nick','atisha','andy'];

// ─── MONTH AGGREGATOR ──────────────────────────────────────────
// Collects all dayData_YYYY_MM_DD() calls for the given month key.
// Returns { hasData, days[], calls[], pulses[] }.
// Days without a dayData_* function are silently skipped.
function getMonthData(monthKey) {
  const [year, month] = monthKey.split('-').map(Number);
  const daysInMonth = new Date(year, month, 0).getDate();
  const out = { hasData: false, days: [], calls: [], pulses: [] };
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const fn = window['dayData_' + iso.replace(/-/g, '_')];
    if (typeof fn === 'function') {
      const day = fn();
      out.hasData = true;
      out.days.push(iso);
      (day.calls  || []).forEach(c => out.calls.push({...c, date: iso}));
      (day.pulses || []).forEach(p => out.pulses.push({...p, date: iso}));
    }
  }
  return out;
}

// ─── WEEK AGGREGATOR ──────────────────────────────────────────
// Collects all dayData_YYYY_MM_DD() calls for the given ISO week key (e.g. '2026-W18').
// Returns { hasData, days[], calls[], pulses[] }.
// Uses the same UTC-based week arithmetic as weekKey() to avoid DST shifts.
function getWeekData(wk) {
  const [year, weekNum] = wk.split('-W').map(Number);
  const jan4Day = new Date(year, 0, 4).getDay();
  const startOfW1Ms = Date.UTC(year, 0, 4) - ((jan4Day + 6) % 7) * 86400000;
  const weekStartMs = startOfW1Ms + (weekNum - 1) * 7 * 86400000;
  const out = { hasData: false, days: [], calls: [], pulses: [] };
  for (let d = 0; d < 7; d++) {
    const dt = new Date(weekStartMs + d * 86400000);
    const iso = `${dt.getUTCFullYear()}-${String(dt.getUTCMonth()+1).padStart(2,'0')}-${String(dt.getUTCDate()).padStart(2,'0')}`;
    const fn = window['dayData_' + iso.replace(/-/g, '_')];
    if (typeof fn === 'function') {
      const day = fn();
      out.hasData = true;
      out.days.push(iso);
      (day.calls  || []).forEach(c => out.calls.push({...c, date: iso}));
      (day.pulses || []).forEach(p => out.pulses.push({...p, date: iso}));
    }
  }
  return out;
}

function getDayData(key) {
  // Auto-discover: if dayMeta_ + dayOverviewHTML_ functions exist, use them directly
  const k = key.replace(/-/g, '_');
  const metaFn = window['dayMeta_' + k];
  const ovFn   = window['dayOverviewHTML_' + k];
  if (metaFn && ovFn) {
    const meta = metaFn();
    // Use autoDayCallsHTML when dayData_ has purpose fields (overrides manual dayCallsHTML_).
    // Fall back to manual dayCallsHTML_ for backward compat, then auto as last resort.
    const dataFn = window['dayData_' + k];
    const hasPurposeInData = dataFn && (dataFn().calls || []).some(c => c.purpose || c.nature || c.initiator);
    const callsHTML = hasPurposeInData
      ? () => autoDayCallsHTML(key)
      : (window['dayCallsHTML_' + k] || (() => autoDayCallsHTML(key)));
    return {
      pills:       meta.pills,
      tabs:        meta.tabs,
      overviewHTML: ovFn,
      callsHTML,
      pulsesHTML:  window['dayPulsesHTML_'  + k] || (() => ''),
      actionsHTML: window['dayActionsHTML_' + k] || (() => ''),
    };
  }
  // Drive-discovered report (no embedded content)
  const rep = REPORTS.day[key];
  if (rep && rep.driveOnly) return {
    pills: [['dot-teal','\u{1F4C1} Drive']],
    tabs: ['Report'],
    overviewHTML: () => `<div style="padding:24px;text-align:center"><p style="font-size:14px;color:#374151;margin-bottom:16px;">This report is stored in Google Drive.</p><a href="${rep.viewUrl}" target="_blank" style="display:inline-block;background:#1e2d45;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">Open Report in Drive</a><div style="margin-top:16px"><iframe src="${rep.embedUrl}" width="100%" height="600" style="border:1px solid #e5e7eb;border-radius:6px;"></iframe></div></div>`,
    callsHTML: () => '', pulsesHTML: () => '', actionsHTML: () => '',
  };
  if (key === '2026-04-30') return {
    pills: [['dot-teal','7 Calls'],['dot-purple','5 Vitally Notes'],['dot-grey','2 Pending Transcripts']],
    tabs: ['Overview','Calls (9)','Notes (5)','Action Items (4)'],
    overviewHTML: dayOverviewHTML_2026_04_30,
    callsHTML: dayCallsHTML_2026_04_30,
    pulsesHTML: dayPulsesHTML_2026_04_30,
    actionsHTML: dayActionsHTML_2026_04_30,
  };
  if (key === '2026-04-29') return {
    pills: [['dot-teal','7 Confirmed Calls'],['dot-purple','12 Pulses'],['dot-amber','5 Cross-Coverage'],['dot-red','1 Concerning']],
    tabs: ['Overview','Calls (12)','Pulses (12)','Action Items (4)'],
    overviewHTML: dayOverviewHTML_2026_04_29,
    callsHTML: dayCallsHTML_2026_04_29,
    pulsesHTML: dayPulsesHTML_2026_04_29,
    actionsHTML: dayActionsHTML_2026_04_29,
  };
  if (key === '2026-04-28') return {
    pills: [['dot-teal','7 Verified Calls'],['dot-purple','7 Pulses'],['dot-amber','4 Processing'],['dot-red','1 Excluded']],
    tabs: ['Overview','Calls (11)','Pulses (7)','Action Items (3)'],
    overviewHTML: dayOverviewHTML_2026_04_28,
    callsHTML: dayCallsHTML_2026_04_28,
    pulsesHTML: dayPulsesHTML_2026_04_28,
    actionsHTML: dayActionsHTML_2026_04_28,
  };
  if (key === '2026-04-27') return {
    pills: [['dot-teal','7 Calls'],['dot-purple','0 Pulses'],['dot-amber','2 Warnings'],['dot-green','5 Active CSMs']],
    tabs: ['Overview','Calls (7)','Pulses (0)','Action Items (2)'],
    overviewHTML: dayOverviewHTML_2026_04_27,
    callsHTML: dayCallsHTML_2026_04_27,
    pulsesHTML: dayPulsesHTML_2026_04_27,
    actionsHTML: dayActionsHTML_2026_04_27,
  };
    if (key === '2026-04-24') return {
    pills: [['dot-teal','3 Calls'],['dot-purple','3 Pulses'],['dot-amber','1 Action'],['dot-grey','3 Active CSMs']],
    tabs: ['Overview','Calls (3)','Pulses (3)','Action Items (1)'],
    overviewHTML: dayOverviewHTML_2026_04_24,
    callsHTML: dayCallsHTML_2026_04_24,
    pulsesHTML: dayPulsesHTML_2026_04_24,
    actionsHTML: dayActionsHTML_2026_04_24,
  };
    if (key === '2026-04-23') return {
    pills: [['dot-teal','8 Calls'],['dot-purple','0 Pulses'],['dot-amber','4 Actions'],['dot-grey','6 Active CSMs']],
    tabs: ['Overview','Calls (8)','Pulses (0)','Action Items (4)'],
    overviewHTML: dayOverviewHTML_2026_04_23,
    callsHTML: dayCallsHTML_2026_04_23,
    pulsesHTML: dayPulsesHTML_2026_04_23,
    actionsHTML: dayActionsHTML_2026_04_23,
  };
  if (key === '2026-04-22') return {
    pills: [['dot-teal','8 Calls'],['dot-purple','8 Pulses'],['dot-amber','4 Actions']],
    tabs: ['Overview','Calls (8)','Pulses (8)','Action Items (4)'],
    overviewHTML: dayOverviewHTML_Apr23,
    callsHTML: dayCallsHTML_Apr23,
    pulsesHTML: dayPulsesHTML_Apr23,
    actionsHTML: dayActionsHTML_Apr23,
  };
  if (key === '2026-04-20') return {
    pills: [['dot-teal','3 Calls'],['dot-purple','4 Pulses'],['dot-amber','3 Actions']],
    tabs: ['Overview','Calls (3)','Pulses (4)','Action Items (3)'],
    overviewHTML: dayOverviewHTML_Apr21,
    callsHTML: dayCallsHTML_Apr21,
    pulsesHTML: dayPulsesHTML_Apr21,
    actionsHTML: dayActionsHTML_Apr21,
  };
  if (key === '2026-04-19') return {
    pills: [['dot-amber','Sunday — No team activity']],
    tabs: ['Overview','Calls (0)','Pulses (0)','Action Items (0)'],
    overviewHTML: dayOverviewHTML_Apr20,
    callsHTML: dayCallsHTML_Apr20,
    pulsesHTML: dayPulsesHTML_Apr20,
    actionsHTML: dayActionsHTML_Apr20,
  };
  // Default: Apr 21 activity
  return {
    pills: [['dot-teal','5 Calls'],['dot-purple','9 Pulses'],['dot-amber','4 Actions']],
    tabs: ['Overview','Calls (5)','Pulses (9)','Action Items (4)'],
    overviewHTML: dayOverviewHTML,
    callsHTML: dayCallsHTML,
    pulsesHTML: dayPulsesHTML,
    actionsHTML: dayActionsHTML,
  };
}

function switchTab(tab) {
  activeTab = tab;
  render();
}

function applyDayFilters() {
  const showHealth = activeTab==='calls'||activeTab==='pulses';
  document.querySelectorAll('[data-filter-health]').forEach(el=>{ el.style.display=showHealth?'':'none'; });
  document.getElementById('health-divider').style.display = showHealth?'':'none';
  document.getElementById('health-label').style.display = showHealth?'':'none';

  if (activeTab==='overview') {
    document.querySelectorAll('.csm-card').forEach(c=>{ c.classList.toggle('hidden', activeCsm!=='all' && c.dataset.csm!==activeCsm); });
  }
  if (activeTab==='calls') {
    let v=0; document.querySelectorAll('#pane-calls tbody tr').forEach(r=>{ const s=(activeCsm==='all'||r.dataset.csm===activeCsm)&&(activeHealth==='all'||r.dataset.health===activeHealth); r.classList.toggle('hidden',!s); if(s)v++; });
    const e=document.getElementById('calls-empty'); if(e)e.style.display=v===0?'':'none';
  }
  if (activeTab==='pulses') {
    let v=0; document.querySelectorAll('.pulse-card').forEach(c=>{ const s=(activeCsm==='all'||c.dataset.csm===activeCsm)&&(activeHealth==='all'||c.dataset.health===activeHealth); c.classList.toggle('hidden',!s); if(s)v++; });
    const e=document.getElementById('pulses-empty'); if(e)e.style.display=v===0?'':'none';
  }
  if (activeTab==='actions') {
    let v=0; document.querySelectorAll('.action-item').forEach(i=>{ const s=activeCsm==='all'||i.dataset.csm===activeCsm; i.classList.toggle('hidden',!s); if(s)v++; });
    const e=document.getElementById('actions-empty'); if(e)e.style.display=v===0?'':'none';
  }
}

function toggleAction(n) {
  doneActions.has(n)?doneActions.delete(n):doneActions.add(n);
  const item=document.getElementById('action-'+n); const cb=document.getElementById? document.querySelector('#action-'+n+' .action-checkbox'):null;
  if(item){ item.classList.toggle('done',doneActions.has(n)); const c=item.querySelector('.action-checkbox'); if(c)c.classList.toggle('checked',doneActions.has(n)); }
}

// ═══════════════════════════════════════════════════════════════
// WEEK VIEW
// ═══════════════════════════════════════════════════════════════
// Returns week-specific function if one exists (e.g. weekSummaryHTML_2026_W18),
// falling back to the baseline W17 function. Scales to any future week automatically.
function getWeekFn(base) {
  // First: week-specific function (e.g. weekSummaryHTML_2026_W18)
  const specific = window[base + '_' + currentKey.replace(/-/g, '_')];
  if (typeof specific === 'function') return specific;
  // Second: fall back to base (W17) function ONLY when viewing W17
  if (currentKey === '2026-W17') return window[base] || null;
  // For all other weeks without a specific function → return null → caller uses auto-derivation
  return null;
}

const WEEK_META = {
  '2026-W17': {
    pills: [['dot-teal','24 Calls'],['dot-green','21 Pulses'],['dot-purple','6 Active CSMs'],['dot-amber','4 Concerning']],
    tabs:  ['Summary','CSM Breakdown','Call Log (24)','Pulse Log (21)','Pulse Coverage'],
  },
  '2026-W18': {
    pills: [['dot-teal','36 Calls'],['dot-green','27 Pulses'],['dot-purple','8 Active CSMs'],['dot-amber','7 Concerning']],
    tabs:  ['Summary','CSM Breakdown','Call Log (36)','Pulse Log (27)','Pulse Coverage'],
  },
};

// ─── AUTO WEEK HTML ────────────────────────────────────────────
// Generate week views from dayData_* structured data.
// Used automatically for any week without hand-written weekXxxHTML_YYYY_Www functions.
// Add dayData_YYYY_MM_DD() to each daily report to enable auto-derivation.

const _DAY_NAMES  = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const _MON_NAMES  = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

// ─── CALL PURPOSE HELPERS ──────────────────────────────────────
// Renders purpose badge + nature/initiator micro-tags for a call.
function _callPurposeBadge(purpose, nature, initiator) {
  if (!purpose && !nature && !initiator) return '';
  const clsMap = { Issue:'purpose-issue', 'Check-in':'purpose-checkin', Expansion:'purpose-expansion', Mixed:'purpose-mixed' };
  const iconMap = { Issue:'&#x1F534;', 'Check-in':'&#x1F4CB;', Expansion:'&#x1F4C8;', Mixed:'&#x1F500;' };
  let html = '';
  if (purpose) {
    const cls = clsMap[purpose] || 'purpose-checkin';
    const icon = iconMap[purpose] || '';
    html += `<span class="badge ${cls}" style="font-size:10px;padding:2px 7px">${icon} ${purpose}</span>`;
  }
  const tags = [];
  if (nature) {
    const nc = nature === 'Routine' ? 'nature-routine' : 'nature-adhoc';
    tags.push(`<span class="call-meta-tag ${nc}">${nature}</span>`);
  }
  if (initiator) {
    const ic = initiator === 'HG CS' ? 'init-hgcs' : initiator === 'Customer' ? 'init-customer' : 'init-unknown';
    tags.push(`<span class="call-meta-tag ${ic}">${initiator}</span>`);
  }
  if (tags.length) html += `<div style="display:flex;gap:3px;flex-wrap:wrap;margin-top:3px">${tags.join('')}</div>`;
  return html;
}

// Builds call table rows from an array of call objects.
// hasPurpose: whether to render the Purpose column at all.
function _callTableRows(calls, hasPurpose) {
  let rows = '';
  calls.forEach(c => {
    const csm = CSM_DISPLAY[c.csm] || {name:c.csm, initials:(c.csm||'?').slice(0,2).toUpperCase(), cls:'av-grey'};
    const xcovCsm = c.xcov && CSM_DISPLAY[c.xcov];
    const xcovLabel = xcovCsm ? ` <span style="font-size:11px">(X-cov for ${xcovCsm.initials})</span>` : '';
    const hBadge = c.health==='Healthy'
      ? '<span class="badge badge-healthy">&#128994; Healthy</span>'
      : c.health==='Concerning'
      ? '<span class="badge badge-concerning">&#128993; Concerning</span>'
      : `<span class="badge" style="background:#fef3c7;color:#92400e">&#128336; ${c.health||'—'}</span>`;
    const purposeCell = hasPurpose
      ? `<td style="vertical-align:top">${_callPurposeBadge(c.purpose, c.nature, c.initiator)}</td>`
      : '';
    const colspan = hasPurpose ? 6 : 5;
    rows += `<tr data-csm="${c.csm}" data-health="${c.health||''}">
      <td style="color:#9ca3af;font-size:12px">${c.ts||''}</td>
      <td><div class="csm-chip-inline"><div class="mini-av ${csm.cls}">${csm.initials}</div>${csm.name}${xcovLabel}</div></td>
      <td><strong>${c.account}</strong>${c.note?` <span style="font-size:11px;color:#9ca3af">${c.note}</span>`:''}</td>
      <td>${c.mins||'—'} min</td>
      <td>${hBadge}</td>
      ${purposeCell}
    </tr>`;
    if (c.detail) {
      rows += `<tr class="call-detail-row" data-csm="${c.csm}" data-health="${c.health||''}">
        <td colspan="${colspan}"><div class="call-detail-body">${c.detail}</div></td>
      </tr>`;
    }
  });
  return rows;
}

// Renders the calls table from dayData_* structured data (used for day view).
function autoDayCallsHTML(key) {
  const k = key.replace(/-/g, '_');
  const fn = window['dayData_' + k];
  if (!fn) return '';
  const data = fn();
  const calls = data.calls || [];
  if (!calls.length) return '<div style="padding:32px;text-align:center;color:#6b7280">No calls logged for this day.</div>';
  const hasPurpose = calls.some(c => c.purpose || c.nature || c.initiator);
  const purposeHeader = hasPurpose ? '<th>Purpose</th>' : '';
  const rows = _callTableRows(calls, hasPurpose);
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th>${purposeHeader}</tr></thead>
    <tbody>${rows}</tbody>
  </table></div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">&#128269;</div>No calls match these filters.</div>`;
}

function autoWeekCallsHTML(data) {
  if (!data.hasData) return '<div style="padding:32px;text-align:center;color:#6b7280;font-size:13px">No structured call data for this week. Add <code>dayData_YYYY_MM_DD()</code> functions to enable auto-derivation.</div>';
  const hasPurpose = data.calls.some(c => c.purpose || c.nature || c.initiator);
  const purposeHeader = hasPurpose ? '<th>Purpose</th>' : '';
  const byDay = {};
  data.calls.forEach(c => { (byDay[c.date] = byDay[c.date] || []).push(c); });
  let rows = '';
  Object.keys(byDay).sort().forEach(date => {
    const calls = byDay[date];
    const dt = isoToDate(date);
    const label = `${_DAY_NAMES[dt.getDay()].toUpperCase()} ${_MON_NAMES[dt.getMonth()].toUpperCase()} ${dt.getDate()} — ${calls.length} CALL${calls.length!==1?'S':''}`;
    const colspan = hasPurpose ? 6 : 5;
    rows += `<tr style="background:#f8f9fc;pointer-events:none"><td colspan="${colspan}" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;padding:8px 12px">${label}</td></tr>`;
    rows += _callTableRows(calls, hasPurpose);
  });
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th>${purposeHeader}</tr></thead>
    <tbody>${rows}</tbody>
  </table></div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">&#128269;</div>No calls match these filters.</div>`;
}

function autoWeekPulsesHTML(data) {
  if (!data.hasData) return '<div style="padding:32px;text-align:center;color:#6b7280">No pulse data for this week.</div>';
  const sorted = [...data.pulses].sort((a,b) => a.health===b.health?0:a.health==='Concerning'?-1:1);
  const cards = sorted.map(p => {
    const csm = CSM_DISPLAY[p.csm] || {name:p.csm};
    const dt = isoToDate(p.date);
    const dateLabel = `${_DAY_NAMES[dt.getDay()]} ${_MON_NAMES[dt.getMonth()]} ${dt.getDate()}`;
    const bc = p.health==='Healthy'?'badge-healthy':'badge-concerning';
    const bi = p.health==='Healthy'?'&#128994;':'&#128993;';
    return `<div class="pulse-card" data-csm="${p.csm}" data-health="${p.health}">
      <div class="pulse-card-top"><div><div class="pulse-account">${p.account}</div><div class="pulse-opp">Vitally Pulse &mdash; ${dateLabel}</div><div class="pulse-arr">Enterprise &middot; ${csm.name}</div></div><span class="badge ${bc}">${bi} ${p.health}</span></div>
      <div class="pulse-excerpt">${p.note||''}</div>
      <div class="pulse-footer"><span>${csm.name}</span><span>Auto-derived</span></div>
    </div>`;
  }).join('');
  return `<div class="pulse-grid">${cards}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#128269;</div>No pulses match these filters.</div>`;
}

function autoWeekCSMHTML(data) {
  if (!data.hasData) return '<div style="padding:32px;text-align:center;color:#6b7280">No data for this week.</div>';
  const stats = {};
  CSM_ORDER.forEach(k => { stats[k] = {calls:0, pulses:0, concerning:0, accounts:new Set()}; });
  data.calls.forEach(c => {
    if (!stats[c.csm]) stats[c.csm] = {calls:0, pulses:0, concerning:0, accounts:new Set()};
    stats[c.csm].calls++;
    stats[c.csm].accounts.add(c.account);
  });
  data.pulses.forEach(p => {
    if (!stats[p.csm]) stats[p.csm] = {calls:0, pulses:0, concerning:0, accounts:new Set()};
    stats[p.csm].pulses++;
    if (p.health==='Concerning') stats[p.csm].concerning++;
  });
  const totalCalls = data.calls.length;
  const totalPulses = data.pulses.length;
  const totalConcerning = data.pulses.filter(p=>p.health==='Concerning').length;
  const totalAccounts = Object.values(CSM_DISPLAY).reduce((s,d)=>s+(d.accounts||0), 0);
  const totalOpps     = Object.values(CSM_DISPLAY).reduce((s,d)=>s+(d.opps||0), 0);
  let rows = `<div class="csm-row csm-total" data-csm="all"><div class="avatar">Σ</div><div style="flex:1"><div class="csm-row-name">Total — All CSMs</div><div class="csm-row-sub">8 Enterprise CSMs · ${totalAccounts} accounts · $47.3M ARR</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">${totalCalls}</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">${totalPulses}</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">${totalConcerning}</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">${totalAccounts}</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">${totalOpps}</div><div class="l">Opps</div></div></div></div>`;
  const sorted = CSM_ORDER.slice().sort((a,b) => (stats[b]?.calls||0) - (stats[a]?.calls||0));
  sorted.forEach(k => {
    const s = stats[k] || {calls:0, pulses:0, concerning:0, accounts:new Set()};
    const d = CSM_DISPLAY[k];
    if (!d) return;
    const cls = s.calls > 0 ? '' : ' inactive';
    const accountList = [...s.accounts].join(' · ') || 'No calls logged this week';
    rows += `<div class="csm-row${cls}" data-csm="${k}"><div class="avatar ${d.cls}">${d.initials}</div><div style="flex:1"><div class="csm-row-name">${d.name}</div><div class="csm-row-sub">${accountList}</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">${s.calls}</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:${s.concerning?'#d97706':'#059669'}">${s.pulses}</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:${s.concerning?'#d97706':'#6b7280'}">${s.concerning||0}</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">${d.accounts}</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">${d.opps}</div><div class="l">Opps</div></div></div></div>`;
  });
  const pickerVal = document.getElementById('date-picker')?.value || '';
  const label = pickerVal ? formatLabel(pickerVal) : currentKey;
  return `<div class="section-label">CSM Contributions — ${label}</div><div class="csm-leaderboard">${rows}</div>`;
}

function showWeekConcerningModal() {
  const data = getWeekData(currentKey);
  const concerning = data.pulses.filter(p => p.health === 'Concerning');
  const pickerVal = document.getElementById('date-picker')?.value || '';
  document.getElementById('modal-title').textContent =
    `Concerning Signals — ${concerning.length} Account${concerning.length !== 1 ? 's' : ''}`;
  document.getElementById('modal-subtitle').textContent =
    `Week of ${pickerVal ? formatLabel(pickerVal) : currentKey}`;
  document.getElementById('modal-body').innerHTML = concerning.length === 0
    ? '<div style="padding:24px;text-align:center;color:#6b7280;font-size:13px">No concerning signals this week.</div>'
    : concerning.map(p => {
        const csm = CSM_DISPLAY[p.csm] || { name: p.csm, initials: (p.csm||'?').slice(0,2).toUpperCase(), cls: 'av-grey' };
        const dt = isoToDate(p.date);
        const dateLabel = `${_DAY_NAMES[dt.getDay()]} ${_MON_NAMES[dt.getMonth()]} ${dt.getDate()}`;
        return `<div style="border:1px solid #fde68a;border-left:3px solid #f59e0b;background:#fffbeb;border-radius:8px;padding:14px 16px;margin-bottom:12px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
            <div style="font-size:15px;font-weight:700;color:#111827">${p.account}</div>
            <span class="badge badge-concerning">&#128993; Concerning</span>
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <div class="mini-av ${csm.cls}" style="width:20px;height:20px;font-size:9px;flex-shrink:0">${csm.initials}</div>
            <span style="font-size:12px;color:#6b7280">${csm.name} &middot; ${dateLabel}</span>
          </div>
          <div style="font-size:13px;color:#374151;line-height:1.6">${p.note || 'No additional notes.'}</div>
        </div>`;
      }).join('');
  document.getElementById('modal-overlay').classList.add('open');
}

function autoWeekSummaryHTML(data) {
  if (!data.hasData) return '<div style="padding:32px;text-align:center;color:#6b7280;font-size:14px">No daily data for this week. To enable auto-derivation, ensure each day\'s report includes a <code>dayData_YYYY_MM_DD()</code> function.</div>';
  const calls = data.calls;
  const pulses = data.pulses;
  const activeCsms = new Set(calls.map(c=>c.csm)).size;
  const concerning = pulses.filter(p=>p.health==='Concerning');
  const healthy = pulses.filter(p=>p.health==='Healthy');
  // Build week date list using same UTC arithmetic as getWeekData
  const [year, weekNum] = currentKey.split('-W').map(Number);
  const jan4Day = new Date(year, 0, 4).getDay();
  const startOfW1Ms = Date.UTC(year, 0, 4) - ((jan4Day + 6) % 7) * 86400000;
  const weekStartMs = startOfW1Ms + (weekNum - 1) * 7 * 86400000;
  const weekDates = [];
  for (let d = 0; d < 7; d++) {
    const dt = new Date(weekStartMs + d * 86400000);
    weekDates.push(`${dt.getUTCFullYear()}-${String(dt.getUTCMonth()+1).padStart(2,'0')}-${String(dt.getUTCDate()).padStart(2,'0')}`);
  }
  const dateLabels = weekDates.map(iso => { const dt = isoToDate(iso); return `${_DAY_NAMES[dt.getDay()]} ${_MON_NAMES[dt.getMonth()]} ${dt.getDate()}`; });
  // Heatmap data
  const hmData = {};
  CSM_ORDER.forEach(k => { hmData[k] = {}; weekDates.forEach(d => { hmData[k][d] = 0; }); });
  calls.forEach(c => { if (hmData[c.csm]) hmData[c.csm][c.date] = (hmData[c.csm][c.date]||0)+1; });
  const hmHeaders = dateLabels.map(l=>`<th>${l}</th>`).join('');
  const hmRows = CSM_ORDER.map(k => {
    const d = CSM_DISPLAY[k];
    const cells = weekDates.map(date => {
      const n = hmData[k]?.[date] || 0;
      return `<td class="hm-cell hm-${Math.min(n,3)}">${n||'—'}</td>`;
    }).join('');
    return `<tr class="hm-csm-row" data-csm="${k}"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">${d?.name||k}</td>${cells}</tr>`;
  }).join('');
  // Day bars
  const maxDay = Math.max(1, ...weekDates.map(d => calls.filter(c=>c.date===d).length));
  const dayBars = weekDates.map((d,i) => {
    const n = calls.filter(c=>c.date===d).length;
    return `<div class="health-bar-row"><div class="health-bar-label">${dateLabels[i]}</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:${Math.round(n/maxDay*100)}%"></div></div><div class="health-bar-count">${n}</div></div>`;
  }).join('');
  return `
  <div class="summary-cards">
    <div class="sum-card c-teal" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">${calls.length}</div><div class="sum-lbl">Calls w/ Transcripts</div><div class="sum-sub">${new Set(calls.map(c=>c.account)).size} accounts</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('wpulses','all','all')"><div class="sum-val">${pulses.length}</div><div class="sum-lbl">Pulse Notes Created</div><div class="sum-sub">${healthy.length} Healthy · ${concerning.length} Concerning</div></div>
    <div class="sum-card c-purple" onclick="jumpToTab('wcsm','all','all')"><div class="sum-val">${activeCsms}</div><div class="sum-lbl">Active CSMs</div><div class="sum-sub">of 8 on the team</div></div>
    <div class="sum-card c-amber" onclick="showWeekConcerningModal()" style="cursor:pointer"><div class="sum-val">${concerning.length}</div><div class="sum-lbl">Concerning Signals</div><div class="sum-sub">${concerning.length ? concerning.map(p=>p.account).join(' · ') : 'None this week'}</div></div>
  </div>
  <div class="section-label">Daily Call Activity</div>
  <div class="heatmap-card">
    <table class="hm-table">
      <thead><tr><th class="row-lbl">CSM</th>${hmHeaders}</tr></thead>
      <tbody>${hmRows}</tbody>
    </table>
  </div>
  <div class="section-label">Pulse Health Distribution</div>
  <div class="health-dist">
    <div class="health-bar-wrap">
      <div class="health-bar-title">All Pulses (${pulses.length})</div>
      <div class="health-bar-row"><div class="health-bar-label">&#128994; Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:${pulses.length?Math.round(healthy.length/pulses.length*100):0}%"></div></div><div class="health-bar-count">${healthy.length}</div></div>
      <div class="health-bar-row"><div class="health-bar-label">&#128993; Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:${pulses.length?Math.round(concerning.length/pulses.length*100):0}%"></div></div><div class="health-bar-count">${concerning.length}</div></div>
    </div>
    <div class="health-bar-wrap">
      <div class="health-bar-title">Calls by Day</div>
      ${dayBars}
    </div>
  </div>`;
}

function renderWeek(mc, tabsRow, statPills) {
  // Aggregate dayData_* for this week (used when no hand-written override exists)
  const weekData = getWeekData(currentKey);

  // Compute meta: prefer WEEK_META entry, fall back to auto-computed from data
  let meta = WEEK_META[currentKey];
  if (!meta && weekData.hasData) {
    const activeCsms = new Set(weekData.calls.map(c=>c.csm)).size;
    const concerning = weekData.pulses.filter(p=>p.health==='Concerning').length;
    meta = {
      pills: [
        ['dot-teal',   `${weekData.calls.length} Calls`],
        ['dot-green',  `${weekData.pulses.length} Pulses`],
        ['dot-purple', `${activeCsms} Active CSMs`],
        ['dot-amber',  `${concerning} Concerning`],
      ],
      tabs: [
        'Summary',
        'CSM Breakdown',
        `Call Log (${weekData.calls.length})`,
        `Pulse Log (${weekData.pulses.length})`,
        'Pulse Coverage',
      ],
    };
  }
  meta = meta || { pills: [], tabs: ['Summary','CSM Breakdown','Call Log','Pulse Log','Pulse Coverage'] };

  setPills(meta.pills);
  if (!activeTab || !['wsummary','wcsm','wcalls','wpulses','wcoverage'].includes(activeTab)) activeTab='wsummary';
  tabsRow.innerHTML = ['wsummary','wcsm','wcalls','wpulses','wcoverage'].map((k,i)=>
    `<div class="tab ${activeTab===k?'active':''}" onclick="switchTab('${k}')">${meta.tabs[i]}</div>`
  ).join('');
  ['h-all','h-healthy','h-concerning','health-divider','health-label'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.style.display = activeTab==='wpulses'?'':'none';
  });

  let html = '<div class="content">';
  if (activeTab==='wsummary') {
    const fn = getWeekFn('weekSummaryHTML');
    html += fn ? fn() : autoWeekSummaryHTML(weekData);
  } else if (activeTab==='wcsm') {
    const fn = getWeekFn('weekCSMHTML');
    html += fn ? fn() : autoWeekCSMHTML(weekData);
  } else if (activeTab==='wcalls') {
    const fn = getWeekFn('weekCallsHTML');
    html += fn ? fn() : autoWeekCallsHTML(weekData);
  } else if (activeTab==='wcoverage') {
    html += pulseCoverageHTML();
  } else {
    const fn = getWeekFn('weekPulsesHTML');
    html += fn ? fn() : autoWeekPulsesHTML(weekData);
  }
  html += '</div>';
  mc.innerHTML = html;
  if (activeTab==='wpulses') applyWeekPulseFilters();
  else if (activeTab==='wsummary') {
    document.querySelectorAll('.hm-csm-row[data-csm]').forEach(row => {
      row.addEventListener('click', () => jumpToTab('wcsm', row.dataset.csm, 'all'));
    });
  }
  else if (activeTab==='wcoverage') { /* no filter needed */ }
  else applyWeekCSMFilter();
}

function renderMonth(mc, tabsRow, statPills) {
  const md = getMonthData(currentKey);
  const nCalls    = md.calls.length;
  const nPulses   = md.pulses.length;
  const nAccounts = new Set(md.calls.map(c => c.account)).size;
  const nConcerning = md.pulses.filter(p => p.health === 'Concerning').length;
  setPills([
    ['dot-teal',  `${nCalls} Call${nCalls !== 1 ? 's' : ''}`],
    ['dot-green', `${nPulses} Pulse${nPulses !== 1 ? 's' : ''}`],
    ['dot-purple',`${nAccounts} Account${nAccounts !== 1 ? 's' : ''}`],
    ['dot-amber', `${nConcerning} Concerning`],
  ]);
  const tabs = ['Summary','CSM Breakdown',`Call Log (${nCalls})`,`Pulse Notes (${nPulses})`,'Pulse Health','Pulse Coverage'];
  if (!activeTab || !['msummary','mcsm','mcalls','mpulses','mhealth','mcoverage'].includes(activeTab)) activeTab='msummary';
  tabsRow.innerHTML = ['msummary','mcsm','mcalls','mpulses','mhealth','mcoverage'].map((k,i)=>
    `<div class="tab ${activeTab===k?'active':''}" onclick="switchTab('${k}')">${tabs[i]}</div>`
  ).join('');
  const showHealth = activeTab==='mpulses' || activeTab==='mcalls';
  ['h-all','h-healthy','h-concerning','health-divider','health-label'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.style.display = showHealth ? '' : 'none';
  });

  let html = '<div class="content">';
  if (activeTab==='msummary') html += monthSummaryHTML();
  else if (activeTab==='mcsm') html += monthCSMHTML();
  else if (activeTab==='mcalls') html += monthCallsHTML();
  else if (activeTab==='mpulses') html += monthPulsesHTML();
  else if (activeTab==='mcoverage') html += pulseCoverageHTML();
  else if (activeTab==='macct') html += accountsHTML();
  else html += monthHealthHTML();
  html += '</div>';
  mc.innerHTML = html;
  if (activeTab==='mpulses') applyWeekPulseFilters();
  else if (activeTab==='mcalls') applyMonthCallFilters();
  else if (activeTab==='msummary') {
    document.querySelectorAll('.hm-csm-row[data-csm]').forEach(row => {
      row.addEventListener('click', () => jumpToTab('mcsm', row.dataset.csm, 'all'));
    });
  }
  else if (activeTab==='mcoverage') { /* no filter needed */ }
  else if (activeTab==='mcsm') applyWeekCSMFilter();
}

// ─── CSM FILTER (all views) ─────────────────────────────────────
document.querySelectorAll('[data-filter-csm]').forEach(chip => {
  chip.addEventListener('click', () => {
    activeCsm = chip.dataset.filterCsm;
    document.querySelectorAll('[data-filter-csm]').forEach(c=>c.classList.toggle('active-chip',c.dataset.filterCsm===activeCsm));
    if (gran==='day') applyDayFilters();
    else if (gran==='week') { if(activeTab==='wpulses') applyWeekPulseFilters(); else if(activeTab==='wcalls') applyMonthCallFilters(); else applyWeekCSMFilter(); }
    else if (gran==='month') { if(activeTab==='mpulses') applyWeekPulseFilters(); else if(activeTab==='mcalls') applyMonthCallFilters(); else applyWeekCSMFilter(); }
  });
});
document.querySelectorAll('[data-filter-health]').forEach(chip => {
  chip.addEventListener('click', () => {
    activeHealth = chip.dataset.filterHealth;
    document.querySelectorAll('[data-filter-health]').forEach(c=>c.classList.toggle('active-chip',c.dataset.filterHealth===activeHealth));
    if (gran==='day') applyDayFilters();
    else if (gran==='week') { if(activeTab==='wcalls') applyMonthCallFilters(); else applyWeekPulseFilters(); }
    else if (gran==='month') { if(activeTab==='mcalls') applyMonthCallFilters(); else applyWeekPulseFilters(); }
  });
});

// ─── CSM CARD CLICK (click-to-filter) ─────────────────────────
document.addEventListener('click', function(ev) {
  // Clickable .row-stat inside a CSM breakdown → jump to detail tab filtered by CSM
  const stat = ev.target.closest('.csm-row-stats .row-stat');
  if (stat) {
    const row = stat.closest('[data-csm]');
    const csm = row ? row.dataset.csm : 'all';
    const lblEl = stat.querySelector('.l');
    const label = (lblEl && lblEl.textContent || '').toLowerCase();
    let type = null;
    if (label.includes('account')) { ev.stopPropagation(); openCsmAccounts(csm); return; }
    if (label.includes('opp')) { ev.stopPropagation(); openCsmOpps(csm); return; }
    if (label.includes('call')) type = 'calls';
    else if (label.includes('pulse')) type = 'pulses';
    else if (label.includes('risk')) type = 'risks';
    if (type) { ev.stopPropagation(); jumpToDetail(type, csm); return; }
  }

  const card = ev.target.closest('.csm-card[data-csm], .csm-row[data-csm], .hm-csm-row[data-csm], .acct-csm[data-csm]');
  if (!card) return;
  if (ev.target.closest('a,button,input,.action-checkbox')) return;
  const csm = card.dataset.csm;
  if (!csm) return;
  activeCsm = csm;
  document.querySelectorAll('[data-filter-csm]').forEach(c =>
    c.classList.toggle('active-chip', c.dataset.filterCsm === activeCsm)
  );
  if (gran === 'day') applyDayFilters();
  else if (gran === 'week') {
    if (activeTab === 'wpulses') applyWeekPulseFilters();
    else if (activeTab === 'wcalls') applyMonthCallFilters();
    else if (activeTab !== 'wsummary') applyWeekCSMFilter();
  }
  else if (gran === 'month') {
    if (activeTab === 'mpulses') applyWeekPulseFilters();
    else if (activeTab === 'mcalls') applyMonthCallFilters();
    else if (activeTab !== 'msummary') applyWeekCSMFilter();
  }
});

function accountsHTML() {
  const oppPulseColor = p => {
    if (!p) return null;
    const lp = p.toLowerCase();
    if (lp === 'healthy' || lp.includes('very satisfied') || lp.includes('extremely')) return '#059669';
    if (lp.includes('concerning') || lp.includes('some risk')) return '#d97706';
    if (lp.includes('severe') || lp.includes('high risk') || lp.includes('at risk')) return '#dc2626';
    return '#6b7280';
  };
  // Returns the worst pulse across all opps for an account (highest risk score).
  const worstOppPulse = opps => {
    if (!opps || !opps.length) return { pulse: null, color: null };
    let worst = null, worstScore = -1;
    opps.forEach(o => {
      if (!o.pulse || o.pulse === '—') return;
      const score = pulseRiskScore(o.pulse);
      if (score > worstScore) { worstScore = score; worst = o.pulse; }
    });
    if (!worst) return { pulse: null, color: null };
    return { pulse: worst, color: oppPulseColor(worst) };
  };
  // Renders a pulse note cell with truncation + inline expand for long SFDC notes
  const oppNoteUID = (() => { let n = 0; return () => 'opn' + (++n); })();
  const oppNoteCell = (note) => {
    if (!note) return `<td style="padding:4px 10px;font-size:11px;color:#9ca3af">—</td>`;
    const LIMIT = 160;
    const lines = note.replace(/\r/g,'').split('\n').filter(l => l.trim());
    const firstLine = lines[0] || '';
    const isLong = note.length > LIMIT || lines.length > 1;
    if (!isLong) return `<td style="padding:4px 10px;font-size:11px;color:#6b7280;max-width:320px">${firstLine}</td>`;
    const uid = oppNoteUID();
    const preview = firstLine.length > LIMIT ? firstLine.slice(0, LIMIT) + '…' : firstLine;
    const full = note.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
    return `<td style="padding:4px 10px;font-size:11px;color:#6b7280;max-width:320px">
      <span id="${uid}-short">${preview} <span onclick="document.getElementById('${uid}-short').style.display='none';document.getElementById('${uid}-full').style.display='block'" style="color:#2563eb;cursor:pointer;font-size:10px;white-space:nowrap">▼ more</span></span>
      <span id="${uid}-full" style="display:none;white-space:pre-wrap;line-height:1.5">${full} <span onclick="document.getElementById('${uid}-full').style.display='none';document.getElementById('${uid}-short').style.display='block'" style="color:#2563eb;cursor:pointer;font-size:10px">▲ less</span></span>
    </td>`;
  };

  const tableRows = ACCOUNTS_DATA.map((acct, idx) => {
    const opps = acct.opportunities || [];
    const oppCount = opps.length;
    const hasOpps = oppCount > 0;
    const wp = worstOppPulse(opps);
    const oppRows = opps.map(opp => {
      const pc = opp.pulse ? oppPulseColor(opp.pulse) : null;
      const pulseCell = pc
        ? `<td style="padding:4px 10px;font-size:11px;background-color:${pc};color:white;border-radius:4px;text-align:center">${opp.pulse}</td>`
        : `<td style="padding:4px 10px;font-size:11px;color:#9ca3af">—</td>`;
      return `
      <tr class="opp-row" data-account-idx="${idx}" data-opp-csm="${opp.csm || ''}" style="display:none;background:#fafbfc">
        <td style="padding:4px 10px 4px 28px;font-size:11px;color:#374151;font-weight:500;border-left:3px solid #e5e7eb">↳ ${opp.name}</td>
        <td style="padding:4px 10px;font-size:11px;color:${opp.csm ? '#2563eb' : '#9ca3af'};cursor:${opp.csm ? 'pointer' : 'default'}" onclick="${opp.csm ? `event.stopPropagation();window.filterByCsmName('${opp.csm.replace(/'/g,"\\'")}')` : ''}" title="${opp.csm ? `Show only ${opp.csm}'s opps` : ''}">${opp.csm || '—'}</td>
        <td style="padding:4px 10px;font-size:11px;color:#9ca3af">—</td>
        <td style="padding:4px 10px;font-size:11px;color:#9ca3af">${opp.deal_type || '—'}</td>
        <td style="padding:4px 10px;font-size:11px;text-align:right;font-variant-numeric:tabular-nums;color:#374151">${fmtArr(opp.arr||0)}</td>
        <td style="padding:4px 10px;font-size:11px;color:#9ca3af">—</td>
        <td style="padding:4px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${opp.pulseDate || '—'}</td>
        ${pulseCell}
        ${oppNoteCell(opp.pulseNote)}
        <td style="padding:4px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${opp.contract_end || '—'}</td>
      </tr>
    `}).join('');

    const chevron = hasOpps
      ? `<span class="acct-chev" data-account-idx="${idx}" style="display:inline-block;width:12px;color:#6b7280;font-size:10px;margin-right:4px;transition:transform 0.15s">▶</span>`
      : `<span style="display:inline-block;width:12px;margin-right:4px"></span>`;
    const oppCountBadge = hasOpps
      ? `<span style="font-size:11px;color:#6b7280;font-weight:500;margin-left:6px">(${oppCount})</span>`
      : '';
    const cursorStyle = hasOpps ? 'cursor:pointer' : '';

    return `
      <tr class="acct-row" data-account-idx="${idx}" data-arr="${acct.arr || 0}" data-expanded="false" ${hasOpps ? `onclick="window.toggleAccountOpps(${idx})"` : ''} style="${cursorStyle}">
        <td style="padding:6px 10px;font-size:12px;font-weight:600;color:#1f2937">${chevron}${acct.accountName}${oppCountBadge}</td>
        <td style="padding:6px 10px;font-size:11px;color:${acct.csm ? '#2563eb' : '#9ca3af'};cursor:${acct.csm ? 'pointer' : 'default'}" onclick="${acct.csm ? `event.stopPropagation();window.filterByCsmName('${acct.csm.replace(/'/g,"\\'")}')` : ''}" title="${acct.csm ? `Show only ${acct.csm}'s opps` : ''}">${acct.csm || '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280">${acct.am || '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280">${acct.segment || '—'}</td>
        <td style="padding:6px 10px;font-size:12px;text-align:right;font-variant-numeric:tabular-nums;color:#1f2937">${fmtArr(acct.arr || 0)}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280">${acct.lastOutbound ? isoToDate(acct.lastOutbound).toLocaleDateString('en-US', {month:'short', day:'numeric'}) : '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${acct.latestPulseDate ? isoToDate(acct.latestPulseDate).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'}) : '—'}</td>
        <td style="${wp.pulse && wp.color ? `padding:4px 10px;font-size:11px;background-color:${wp.color};color:white;border-radius:4px;text-align:center;font-weight:500` : 'padding:6px 10px;font-size:11px;color:#9ca3af'}">${wp.pulse || '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280">${acct.pulseNote || '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${acct.renewalDate || '—'}</td>
      </tr>
      ${oppRows}
    `;
  }).join('');

  return `
    <div class="section-label">Accounts · 123 Total · $47.2M ARR · 240 Opportunities</div>
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <div style="position:relative;display:flex;align-items:center">
          <span style="position:absolute;left:8px;font-size:13px;color:#9ca3af;pointer-events:none">🔍</span>
          <input id="accounts-search" type="text" placeholder="Search accounts…" oninput="window.searchAccounts(this.value)" style="font-size:12px;padding:4px 10px 4px 28px;border:1px solid #d1d5db;background:#fff;border-radius:6px;color:#374151;min-width:200px;outline:none" />
        </div>
        <label for="accounts-csm-filter" style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;font-weight:600">CSM</label>
        <select id="accounts-csm-filter" onchange="window.filterAccountsByCsm(this.value)" style="font-size:12px;padding:4px 10px;border:1px solid #d1d5db;background:#fff;border-radius:6px;cursor:pointer;color:#374151;min-width:180px">
          <option value="all">All CSMs (123)</option>
          <option value="riley">Riley Rogers (6)</option>
          <option value="varun">Varun Tiwari (22)</option>
          <option value="divyam">Divyam Dewan (22)</option>
          <option value="nick">Nick Johnson (27)</option>
          <option value="rani">Rani Guy (10)</option>
          <option value="pam">Pam Huck (7)</option>
          <option value="atisha">Atisha Waghela (18)</option>
          <option value="andy">Andy Lim (10)</option>
        </select>
        <span id="accounts-filter-count" style="font-size:11px;color:#9ca3af"></span>
      </div>
      <button id="accounts-expand-toggle" onclick="window.toggleAllAccountOpps()" style="font-size:11px;padding:4px 12px;border:1px solid #d1d5db;background:#fff;border-radius:6px;cursor:pointer;color:#374151">▼ Show all opportunities</button>
    </div>
    <div style="overflow:auto;border:1px solid #e5e7eb;border-radius:8px;margin-bottom:20px">
      <table style="width:100%;border-collapse:collapse;font-size:13px" id="accounts-table">
        <thead style="position:sticky;top:0;background:#f9fafb;border-bottom:1px solid #e5e7eb">
          <tr>
            <th data-sort-col="name" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('name')">Account</th>
            <th data-sort-col="csm" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('csm')">CSM</th>
            <th data-sort-col="am" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('am')">AM</th>
            <th data-sort-col="segment" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('segment')">Segment</th>
            <th data-sort-col="arr" style="padding:8px 10px;text-align:right;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('arr')">ARR <span class="sort-arrow" style="color:#1d4ed8">↓</span></th>
            <th data-sort-col="lastOutbound" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('lastOutbound')">Last Outbound</th>
            <th data-sort-col="pulseDate" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('pulseDate')">Pulse Date</th>
            <th data-sort-col="pulse" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('pulse')">Pulse</th>
            <th data-sort-col="pulseNote" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('pulseNote')">Pulse Note</th>
            <th data-sort-col="renewalDate" style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;cursor:pointer;user-select:none;white-space:nowrap" onclick="window.sortAccountsTable('renewalDate')">Renewal Date</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  `;
}

let accountsCsmFilter = 'all';
let oppCsmNameFilter = null; // active opp-level CSM name filter
let accountSearchQuery = '';  // active text search query

window.filterAccountsByCsm = function(csmKey) {
  if (!csmKey || csmKey === 'all') {
    window.clearCsmNameFilter();
    return;
  }
  // Look up full CSM name from data, then delegate to opp-level filter
  const match = ACCOUNTS_DATA.find(a => a.csmKey === csmKey);
  const csmName = match ? match.csm : null;
  if (csmName) {
    window.filterByCsmName(csmName);
    // Keep dropdown in sync (filterByCsmName resets it to 'all', put it back)
    const sel = document.getElementById('accounts-csm-filter');
    if (sel) sel.value = csmKey;
  }
};

window.filterByCsmName = function(csmName) {
  if (!csmName) return;
  oppCsmNameFilter = csmName;
  accountsCsmFilter = 'all'; // will be overridden by caller if driven from dropdown

  let acctCount = 0, oppCount = 0;
  document.querySelectorAll('tr.acct-row').forEach(r => {
    const idx = r.dataset.accountIdx;
    if (idx === undefined) return;
    const acct = ACCOUNTS_DATA[parseInt(idx)];
    if (!acct) return;

    // Check if this account has any opp belonging to this CSM
    const matchingOpps = (acct.opportunities || []).filter(o => o.csm === csmName);
    const hasMatch = matchingOpps.length > 0;

    r.style.display = hasMatch ? '' : 'none';
    if (hasMatch) { acctCount++; oppCount += matchingOpps.length; }

    // Show/hide opp rows: expand the account and show only matching opp rows
    const oppRows = document.querySelectorAll(`tr.opp-row[data-account-idx="${idx}"]`);
    if (hasMatch) {
      r.dataset.expanded = 'true';
      const chev = r.querySelector('.acct-chev');
      if (chev) chev.textContent = '▼';
      oppRows.forEach(or => {
        or.style.display = (or.dataset.oppCsm === csmName) ? '' : 'none';
      });
    } else {
      r.dataset.expanded = 'false';
      oppRows.forEach(or => { or.style.display = 'none'; });
    }
  });

  const counter = document.getElementById('accounts-filter-count');
  if (counter) counter.innerHTML = `${acctCount} account${acctCount !== 1 ? 's' : ''} · ${oppCount} opp${oppCount !== 1 ? 's' : ''} &nbsp;<span style="color:#2563eb;cursor:pointer;text-decoration:underline" onclick="window.clearCsmNameFilter()">✕ ${csmName}</span>`;
};

window.clearCsmNameFilter = function() {
  oppCsmNameFilter = null;
  accountsCsmFilter = 'all';
  const sel = document.getElementById('accounts-csm-filter');
  if (sel) sel.value = 'all';
  // Restore all accounts and their opp rows to natural state
  document.querySelectorAll('tr.acct-row').forEach(r => {
    r.style.display = '';
    const idx = r.dataset.accountIdx;
    const expanded = r.dataset.expanded === 'true';
    document.querySelectorAll(`tr.opp-row[data-account-idx="${idx}"]`).forEach(or => {
      or.style.display = expanded ? '' : 'none';
    });
  });
  const counter = document.getElementById('accounts-filter-count');
  if (counter) counter.textContent = '';
};

window.searchAccounts = function(query) {
  accountSearchQuery = (query || '').toLowerCase().trim();
  const q = accountSearchQuery;
  let visible = 0;

  document.querySelectorAll('tr.acct-row').forEach(r => {
    const idx = r.dataset.accountIdx;
    if (idx === undefined) return;
    const acct = ACCOUNTS_DATA[parseInt(idx)];
    if (!acct) return;

    // CSM filter: respect active oppCsmNameFilter if set, otherwise accountsCsmFilter
    let csmPass = true;
    if (oppCsmNameFilter) {
      csmPass = (acct.opportunities || []).some(o => o.csm === oppCsmNameFilter);
    } else if (accountsCsmFilter !== 'all') {
      csmPass = acct.csmKey === accountsCsmFilter;
    }

    // Search filter: match account name (case-insensitive)
    const searchPass = !q || acct.accountName.toLowerCase().includes(q);

    const show = csmPass && searchPass;
    r.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  // Update counter
  const counter = document.getElementById('accounts-filter-count');
  if (counter) {
    if (q) counter.textContent = `${visible} account${visible !== 1 ? 's' : ''} matching "${query}"`;
    else counter.textContent = '';
  }
};

window.toggleAccountOpps = function(idx) {
  const acctRow = document.querySelector(`tr.acct-row[data-account-idx="${idx}"]`);
  if (!acctRow) return;
  const expanded = acctRow.dataset.expanded === 'true';
  const next = !expanded;
  acctRow.dataset.expanded = next ? 'true' : 'false';
  document.querySelectorAll(`tr.opp-row[data-account-idx="${idx}"]`).forEach(r => {
    if (!next) {
      r.style.display = 'none';
    } else {
      // Respect active opp CSM filter when expanding
      r.style.display = (oppCsmNameFilter && r.dataset.oppCsm !== oppCsmNameFilter) ? 'none' : '';
    }
  });
  const chev = acctRow.querySelector('.acct-chev');
  if (chev) chev.textContent = next ? '▼' : '▶';
};

// Toggle: if `expand` is omitted, infer from whether the majority of expandable rows are currently collapsed.
// Only applies to accounts currently visible under the active CSM filter.
window.toggleAllAccountOpps = function(expand) {
  const isVisible = (r) => {
    const idx = r.dataset.accountIdx;
    if (idx === undefined) return false;
    const acct = ACCOUNTS_DATA[parseInt(idx)];
    if (!acct) return false;
    return accountsCsmFilter === 'all' || acct.csmKey === accountsCsmFilter;
  };
  if (typeof expand !== 'boolean') {
    let anyCollapsed = false;
    document.querySelectorAll('tr.acct-row').forEach(r => {
      if (!isVisible(r)) return;
      const idx = r.dataset.accountIdx;
      const oppRows = document.querySelectorAll(`tr.opp-row[data-account-idx="${idx}"]`);
      if (oppRows.length === 0) return;
      if (r.dataset.expanded !== 'true') anyCollapsed = true;
    });
    expand = anyCollapsed;
  }
  document.querySelectorAll('tr.acct-row').forEach(r => {
    if (!isVisible(r)) return;
    const idx = r.dataset.accountIdx;
    const oppRows = document.querySelectorAll(`tr.opp-row[data-account-idx="${idx}"]`);
    if (oppRows.length === 0) return;
    r.dataset.expanded = expand ? 'true' : 'false';
    oppRows.forEach(or => { or.style.display = expand ? '' : 'none'; });
    const chev = r.querySelector('.acct-chev');
    if (chev) chev.textContent = expand ? '▼' : '▶';
  });
  const btn = document.getElementById('accounts-expand-toggle');
  if (btn) {
    btn.textContent = expand ? '▶ Collapse all opportunities' : '▼ Show all opportunities';
  }
};

function pulseRiskScore(p) {
  // Higher = more at-risk. Default desc puts worst first.
  if (!p) return 2;
  const s = String(p).toLowerCase();
  if (s.includes('severe')) return 5;
  if (s.includes('high risk')) return 4;
  if (s.includes('some risk')) return 3;
  if (s.includes('extremely')) return 0;
  if (s.includes('very satisfied') || s.includes('healthy')) return 1;
  return 2;
}

window.sortAccountsTable = function(col) {
  const table = document.getElementById('accounts-table');
  if (!table) return;

  if (accountsSortColumn === col) {
    accountsSortDesc = !accountsSortDesc;
  } else {
    accountsSortColumn = col;
    // Columns that default to descending on first click (largest/worst/most-recent first).
    // Renewal Date defaults to ascending (soonest renewal first).
    accountsSortDesc = (col === 'arr' || col === 'pulseDate' || col === 'lastOutbound' || col === 'pulseNote');
    // pulse now sorts by date (most recent first = desc)
  }

  const rows = Array.from(table.querySelectorAll('tbody tr.acct-row'));
  const oppRowsByAcct = {};

  table.querySelectorAll('tbody tr.opp-row').forEach(row => {
    const idx = row.dataset.accountIdx;
    if (!oppRowsByAcct[idx]) oppRowsByAcct[idx] = [];
    oppRowsByAcct[idx].push(row);
  });

  rows.sort((a, b) => {
    const idxA = parseInt(a.dataset.accountIdx);
    const idxB = parseInt(b.dataset.accountIdx);
    const acctA = ACCOUNTS_DATA[idxA];
    const acctB = ACCOUNTS_DATA[idxB];

    let valA, valB;

    if (col === 'arr') {
      valA = acctA.arr || 0;
      valB = acctB.arr || 0;
    } else if (col === 'name') {
      valA = acctA.accountName || '';
      valB = acctB.accountName || '';
    } else if (col === 'csm') {
      valA = acctA.csm || '';
      valB = acctB.csm || '';
    } else if (col === 'am') {
      valA = acctA.am || '';
      valB = acctB.am || '';
    } else if (col === 'segment') {
      valA = acctA.segment || '';
      valB = acctB.segment || '';
    } else if (col === 'lastOutbound') {
      // Sort by date (numeric). Missing dates always sort to the bottom.
      const ta = acctA.lastOutbound ? Date.parse(acctA.lastOutbound) : NaN;
      const tb = acctB.lastOutbound ? Date.parse(acctB.lastOutbound) : NaN;
      const aMissing = isNaN(ta), bMissing = isNaN(tb);
      if (aMissing && bMissing) return 0;
      if (aMissing) return 1;
      if (bMissing) return -1;
      valA = ta; valB = tb;
    } else if (col === 'pulseDate') {
      // Sort by latestPulseDate (most recent first). Accounts with no date sink to the bottom.
      const ta = acctA.latestPulseDate ? Date.parse(acctA.latestPulseDate) : NaN;
      const tb = acctB.latestPulseDate ? Date.parse(acctB.latestPulseDate) : NaN;
      const aMissing = isNaN(ta), bMissing = isNaN(tb);
      if (aMissing && bMissing) return 0;
      if (aMissing) return 1;
      if (bMissing) return -1;
      valA = ta; valB = tb;
    } else if (col === 'pulse') {
      // Sort by risk severity: High Risk first, Extremely Satisfied last
      const pulseRank = p => {
        if (!p) return 99;
        const lp = p.toLowerCase();
        if (lp.includes('high risk')) return 0;
        if (lp === 'at risk' || lp.includes('at risk')) return 1;
        if (lp.includes('concerning')) return 2;
        if (lp.includes('some risk') || lp.includes('poor')) return 3;
        if (lp === 'healthy' || lp.includes('healthy')) return 4;
        if (lp.includes('satisfied')) return 5;
        return 6;
      };
      const worstPulse = acct => {
        const opps = acct.opportunities || [];
        let worst = null, worstScore = -1;
        opps.forEach(o => {
          if (!o.pulse || o.pulse === '—') return;
          const s = pulseRiskScore(o.pulse);
          if (s > worstScore) { worstScore = s; worst = o.pulse; }
        });
        return worst;
      };
      valA = pulseRank(worstPulse(acctA)); valB = pulseRank(worstPulse(acctB));
    } else if (col === 'pulseNote') {
      valA = acctA.pulseNote || '';
      valB = acctB.pulseNote || '';
    } else if (col === 'renewalDate') {
      const ta = acctA.renewalDate ? Date.parse(acctA.renewalDate) : NaN;
      const tb = acctB.renewalDate ? Date.parse(acctB.renewalDate) : NaN;
      const aMissing = isNaN(ta), bMissing = isNaN(tb);
      if (aMissing && bMissing) return 0;
      if (aMissing) return 1;
      if (bMissing) return -1;
      valA = ta; valB = tb;
    }

    if (typeof valA === 'number' && typeof valB === 'number') {
      return accountsSortDesc ? (valB - valA) : (valA - valB);
    } else {
      const cmp = String(valA).localeCompare(String(valB));
      return accountsSortDesc ? -cmp : cmp;
    }
  });

  const tbody = table.querySelector('tbody');
  rows.forEach((row, idx) => {
    tbody.appendChild(row);
    const acctIdx = row.dataset.accountIdx;
    if (oppRowsByAcct[acctIdx]) {
      oppRowsByAcct[acctIdx].forEach(oppRow => {
        tbody.appendChild(oppRow);
      });
    }
  });

  // Update header sort arrows
  table.querySelectorAll('thead th[data-sort-col]').forEach(th => {
    const thCol = th.dataset.sortCol;
    // Remove any existing arrow span
    const existing = th.querySelector('.sort-arrow');
    if (existing) existing.remove();
    if (thCol === accountsSortColumn) {
      const arrow = document.createElement('span');
      arrow.className = 'sort-arrow';
      arrow.style.cssText = 'color:#1d4ed8;margin-left:3px';
      arrow.textContent = accountsSortDesc ? '↓' : '↑';
      th.appendChild(arrow);
    }
  });
};

function csmAccountCount(csm) { return (CSM_ACCOUNTS[csm] || []).length; }
function csmTotalAccounts() { return Object.values(CSM_ACCOUNTS).reduce((s,a)=>s+a.length,0); }
function fmtArr(n) { return n>=1e6 ? '$'+(n/1e6).toFixed(1)+'M' : n>=1e3 ? '$'+Math.round(n/1e3)+'K' : '$'+n; }
function pulseColor(p) {
  if (!p || p==='—') return '#9ca3af';
  if (/Severe|High Risk/.test(p)) return '#dc2626';
  if (/Some Risk/.test(p)) return '#d97706';
  if (/Extremely|Very Satisfied/.test(p)) return '#059669';
  return '#6b7280';
}
function openCsmAccounts(csm) {
  let accounts, name;
  if (csm === 'all') {
    name = 'All Enterprise CSMs';
    accounts = [];
    Object.keys(CSM_ACCOUNTS).forEach(k => CSM_ACCOUNTS[k].forEach(a => accounts.push({...a, csm: CSM_NAME_MAP[k]})));
    accounts.sort((x,y) => (y.arr||0) - (x.arr||0));
  } else {
    name = CSM_NAME_MAP[csm] || csm;
    accounts = (CSM_ACCOUNTS[csm] || []).slice().sort((x,y) => (y.arr||0) - (x.arr||0));
  }
  const totalArr = accounts.reduce((s,a)=>s+(a.arr||0),0);
  const showCsm = csm === 'all';
  const rows = accounts.map(a => `
    <tr>
      <td style="padding:6px 10px;font-size:12px;font-weight:600;color:#1f2937">${a.name}</td>
      ${showCsm ? `<td style="padding:6px 10px;font-size:11px;color:#6b7280">${a.csm||''}</td>` : ''}
      <td style="padding:6px 10px;font-size:11px;color:#6b7280">${a.seg||'—'}</td>
      <td style="padding:6px 10px;font-size:12px;text-align:right;font-variant-numeric:tabular-nums;color:#1f2937">${fmtArr(a.arr||0)}</td>
      <td style="padding:6px 10px;font-size:11px;color:${pulseColor(a.pulse)}">${a.pulse||'—'}</td>
      <td style="padding:6px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${a.renewal||'—'}</td>
    </tr>
  `).join('');
  document.getElementById('modal-title').textContent = `${name} — Accounts (${accounts.length})`;
  document.getElementById('modal-subtitle').textContent = `Portfolio total: ${fmtArr(totalArr)} ARR`;
  document.getElementById('modal-body').innerHTML = `
    <div style="overflow:auto;max-height:60vh;border:1px solid #e5e7eb;border-radius:8px">
      <table style="width:100%;border-collapse:collapse">
        <thead style="position:sticky;top:0;background:#f9fafb;border-bottom:1px solid #e5e7eb">
          <tr>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Account</th>
            ${showCsm ? '<th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">CSM</th>' : ''}
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Segment</th>
            <th style="padding:8px 10px;text-align:right;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">ARR</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Pulse</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Renewal</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
}

function openCsmOpps(csm) {
  const name = csm === 'all' ? 'All Enterprise CSMs' : (CSM_NAME_MAP[csm] || csm);
  const csmName = CSM_NAME_MAP[csm];
  const opps = [];
  ACCOUNTS_DATA.forEach(acct => {
    (acct.opportunities || []).forEach(opp => {
      const oppOwner = opp.csm || acct.csm;
      if (csm !== 'all' && oppOwner !== csmName) return;
      opps.push({ accountName: acct.accountName, csmName: oppOwner, ...opp });
    });
  });
  opps.sort((a, b) => (b.arr || 0) - (a.arr || 0));
  const totalArr = opps.reduce((s, o) => s + (o.arr || 0), 0);
  const showCsm = csm === 'all';
  const rows = opps.map(o => `
    <tr>
      <td style="padding:6px 10px;font-size:12px;color:#6b7280">${o.accountName}</td>
      <td style="padding:6px 10px;font-size:12px;font-weight:600;color:#1f2937">${o.name || '—'}</td>
      ${showCsm ? `<td style="padding:6px 10px;font-size:11px;color:#6b7280">${o.csmName || ''}</td>` : ''}
      <td style="padding:6px 10px;font-size:11px;color:#6b7280">${o.deal_type || '—'}</td>
      <td style="padding:6px 10px;font-size:12px;text-align:right;font-variant-numeric:tabular-nums;color:#1f2937">${fmtArr(o.arr || 0)}</td>
      <td style="padding:6px 10px;font-size:11px;color:${pulseColor(o.pulse)}">${o.pulse || '—'}</td>
      <td style="padding:6px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${o.contract_end || '—'}</td>
    </tr>
  `).join('');
  document.getElementById('modal-title').textContent = `${name} — Opportunities (${opps.length})`;
  document.getElementById('modal-subtitle').textContent = `Total opp ARR: ${fmtArr(totalArr)}`;
  document.getElementById('modal-body').innerHTML = `
    <div style="overflow:auto;max-height:60vh;border:1px solid #e5e7eb;border-radius:8px">
      <table style="width:100%;border-collapse:collapse">
        <thead style="position:sticky;top:0;background:#f9fafb;border-bottom:1px solid #e5e7eb">
          <tr>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Account</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Opportunity</th>
            ${showCsm ? '<th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">CSM</th>' : ''}
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Type</th>
            <th style="padding:8px 10px;text-align:right;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">ARR</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Pulse</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Renewal</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
  document.getElementById('modal-overlay').classList.add('open');
}

// ─── PULSE COVERAGE ────────────────────────────────────────────
function pulseCoverageHTML() {
  const csmKeys = ['riley','varun','divyam','nick','rani','pam','atisha','andy'];
  const hasPulse = o => !!(o.pulse && o.pulse !== '—');
  const hasNote  = o => !!(o.pulseNote && o.pulseNote !== '—');

  const stats = csmKeys.map(csm => {
    const opps = [];
    const csmName = CSM_NAME_MAP[csm];
    ACCOUNTS_DATA.forEach(a => {
      (a.opportunities || []).forEach(o => {
        const oppOwner = o.csm || a.csm;
        if (oppOwner === csmName) opps.push({ ...o, accountName: a.accountName });
      });
    });
    const total     = opps.length;
    const both      = opps.filter(o => hasPulse(o) && hasNote(o)).length;
    const pulseOnly = opps.filter(o => hasPulse(o) && !hasNote(o)).length;
    const noteOnly  = opps.filter(o => !hasPulse(o) && hasNote(o)).length;
    const neither   = opps.filter(o => !hasPulse(o) && !hasNote(o)).length;
    const pct       = total > 0 ? Math.round(both / total * 100) : 0;
    return { csm, total, both, pulseOnly, noteOnly, neither, pct };
  });

  const totalOpps = stats.reduce((s, r) => s + r.total, 0);
  const totalBoth = stats.reduce((s, r) => s + r.both, 0);
  const teamPct   = totalOpps > 0 ? Math.round(totalBoth / totalOpps * 100) : 0;

  const barColor  = p => p >= 80 ? '#059669' : p >= 50 ? '#d97706' : '#dc2626';
  const textColor = p => p >= 80 ? '#059669' : p >= 50 ? '#d97706' : '#dc2626';
  const bgChip    = p => p >= 80 ? '#dcfce7' : p >= 50 ? '#fef3c7' : '#fee2e2';

  const rows = stats.map(({ csm, total, both, pulseOnly, noteOnly, neither, pct }) => {
    const name = CSM_NAME_MAP[csm];
    const bar = `<div style="background:#e5e7eb;border-radius:4px;height:8px;width:110px;display:inline-block;vertical-align:middle"><div style="background:${barColor(pct)};height:8px;border-radius:4px;width:${pct}%"></div></div>`;
    const missingAny = total - both; // opps missing pulse, note, or both
    const missingChip = missingAny > 0
      ? `<span onclick="window.openMissingOpps('${csm}')" style="cursor:pointer;background:#fee2e2;color:#dc2626;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600">${missingAny} missing →</span>`
      : `<span style="background:#dcfce7;color:#059669;padding:2px 10px;border-radius:12px;font-size:11px;font-weight:600">✓ Complete</span>`;
    return `<tr style="border-bottom:1px solid #f3f4f6">
      <td style="padding:10px 16px;font-size:13px;font-weight:600;color:#1f2937">${name}</td>
      <td style="padding:10px 16px"><div style="display:flex;align-items:center;gap:8px">${bar}<span style="font-size:13px;font-weight:700;color:${textColor(pct)}">${pct}%</span></div></td>
      <td style="padding:10px 16px;font-size:12px;text-align:center;color:#1f2937;font-weight:600">${both} / ${total}</td>
      <td style="padding:10px 16px;font-size:12px;text-align:center;color:#6b7280">${pulseOnly}</td>
      <td style="padding:10px 16px;font-size:12px;text-align:center;color:#6b7280">${noteOnly}</td>
      <td style="padding:10px 16px">${missingChip}</td>
    </tr>`;
  }).join('');

  return `
  <div class="section-label">Pulse Coverage — Opportunity Tracking Quality</div>
  <div style="display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap">
    <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px 20px;min-width:130px">
      <div style="font-size:22px;font-weight:700;color:${textColor(teamPct)}">${teamPct}%</div>
      <div style="font-size:11px;color:#6b7280;margin-top:2px;text-transform:uppercase;letter-spacing:.5px">Team Coverage</div>
    </div>
    <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px 20px;min-width:160px">
      <div style="font-size:22px;font-weight:700;color:#1f2937">${totalBoth} / ${totalOpps}</div>
      <div style="font-size:11px;color:#6b7280;margin-top:2px;text-transform:uppercase;letter-spacing:.5px">Opps with Pulse + Note</div>
    </div>
    <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px 20px;min-width:160px">
      <div style="font-size:22px;font-weight:700;color:#dc2626">${totalOpps - totalBoth}</div>
      <div style="font-size:11px;color:#6b7280;margin-top:2px;text-transform:uppercase;letter-spacing:.5px">Missing Coverage</div>
    </div>
  </div>
  <div style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:10px">
    <table style="width:100%;border-collapse:collapse">
      <thead style="background:#f9fafb;border-bottom:1px solid #e5e7eb">
        <tr>
          <th style="padding:10px 16px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">CSM</th>
          <th style="padding:10px 16px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Coverage</th>
          <th style="padding:10px 16px;text-align:center;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Full (Pulse + Note)</th>
          <th style="padding:10px 16px;text-align:center;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Pulse Only</th>
          <th style="padding:10px 16px;text-align:center;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Note Only</th>
          <th style="padding:10px 16px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Neither</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
  <div style="font-size:11px;color:#9ca3af">Full coverage = opportunity has both a pulse status and a pulse note. Click "N missing →" to review which opportunities need attention.</div>`;
}

window.openMissingOpps = function(csmKey) {
  const name = CSM_NAME_MAP[csmKey] || csmKey;
  const opps = [];
  const csmName = CSM_NAME_MAP[csmKey] || csmKey;
  ACCOUNTS_DATA.forEach(acct => {
    (acct.opportunities || []).forEach(opp => {
      const oppOwner = opp.csm || acct.csm;
      if (oppOwner !== csmName) return;
      const hp = !!(opp.pulse && opp.pulse !== '—');
      const hn = !!(opp.pulseNote && opp.pulseNote !== '—');
      if (!hp || !hn) opps.push({ accountName: acct.accountName, ...opp, _missingPulse: !hp, _missingNote: !hn });
    });
  });
  opps.sort((a, b) => (b.arr || 0) - (a.arr || 0));
  const rows = opps.map(o => {
    const tag = o._missingPulse && o._missingNote
      ? `<span style="background:#fee2e2;color:#dc2626;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600">Missing both</span>`
      : o._missingPulse
        ? `<span style="background:#fef3c7;color:#d97706;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600">No pulse</span>`
        : `<span style="background:#fef3c7;color:#d97706;padding:2px 8px;border-radius:10px;font-size:10px;font-weight:600">No note</span>`;
    return `<tr>
      <td style="padding:6px 10px;font-size:12px;color:#6b7280">${o.accountName}</td>
      <td style="padding:6px 10px;font-size:12px;font-weight:600;color:#1f2937">${o.name || '—'}</td>
      <td style="padding:6px 10px;font-size:11px;color:#6b7280">${o.deal_type || '—'}</td>
      <td style="padding:6px 10px;font-size:12px;text-align:right;font-variant-numeric:tabular-nums;color:#1f2937">${fmtArr(o.arr || 0)}</td>
      <td style="padding:6px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${o.contract_end || '—'}</td>
      <td style="padding:6px 10px">${tag}</td>
    </tr>`;
  }).join('');
  document.getElementById('modal-title').textContent = `${name} — Missing Coverage (${opps.length} opps)`;
  document.getElementById('modal-subtitle').textContent = 'Opportunities missing pulse status and/or pulse note';
  document.getElementById('modal-body').innerHTML = `
    <div style="overflow:auto;max-height:60vh;border:1px solid #e5e7eb;border-radius:8px">
      <table style="width:100%;border-collapse:collapse">
        <thead style="position:sticky;top:0;background:#f9fafb;border-bottom:1px solid #e5e7eb">
          <tr>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Account</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Opportunity</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Type</th>
            <th style="padding:8px 10px;text-align:right;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">ARR</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Renewal</th>
            <th style="padding:8px 10px;text-align:left;font-size:10px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px">Missing</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
  document.getElementById('modal-overlay').classList.add('open');
};

// ─── MODAL ─────────────────────────────────────────────────────
const modals = {
  'call-intuit':{ title:'Intuit Mailchimp — Apr 21 · 8:30 AM UTC', subtitle:'Riley Rogers · 30 min · Zoom · Signal: Healthy', sections:[{label:'What Happened',body:'Bianca Gause (Product Marketing) introduced to GEO dashboard early access. Confirmed she is championing the initiative internally. Engagement signals clearly positive heading into May TrustRadius cycle.'},{label:'Key Signals',body:'✅ New champion Bianca Gause actively engaged\
✅ GEO dashboard early access confirmed\
✅ Expansion trajectory intact\
⚠️ SSO delays at Intuit still unresolved'}]},
  'call-dd-cd':{ title:'Datadog — Cloud Dynamics · Apr 21 · 11:00 AM UTC', subtitle:'Varun Tiwari · 45 min · Zoom · Signal: Concerning', sections:[{label:'What Happened',body:'Datadog reps raised concerns about Cloud Dynamics firmographic accuracy for SMB matching. Internal usage pulling back while teams await resolution.'},{label:'Issues Raised',body:'❌ SMB firmographic accuracy questioned\
❌ Data freshness SLA unclear\
❌ Validation methodology unresolved\
⚠️ Usage reducing pending clarification'},{label:'Action Required',body:'Technical follow-up within 5 business days. Loop in Solutions Engineering.'}]},
  'call-dd-tr':{ title:'Datadog — TR / ICP · Apr 21 · 12:30 PM UTC', subtitle:'Varun Tiwari · 30 min · Zoom · Signal: Healthy', sections:[{label:'What Happened',body:'ICP refinement discussion — Datadog shifting to commercial/SMB. Active IDL expansion and Lead Acceleration use case alignment.'},{label:'Key Signals',body:'✅ Constructive ICP refinement\
✅ IDL expansion actively discussed\
✅ Lead Acceleration use case confirmed'}]},
  'call-quad':{ title:'Quadient Software · Apr 21 · 11:00 AM UTC', subtitle:'Divyam Dewan · 30 min · Zoom · Signal: Healthy', sections:[{label:'What Happened',body:'Covered TR review generation for Inspire/AP/AR; IDL onboarding for Germany and DACH; HG platform data roadmap.'},{label:'Key Signals',body:'✅ Review campaign on track for May Top Rated\
✅ AP TrustRadius score improving\
✅ IDL onboarding progressing\
✅ Expansion conversation on roadmap'}]},
  'call-tr-apr22':{ title:'Thomson Reuters — Churn + Intent Deep-dive · Apr 21 · 8:30 AM PT', subtitle:'Divyam Dewan + Hayden Smith · 30 min · Zoom · Signal: Healthy', sections:[
    {label:'What Happened',body:'Vibhuti (TR Data Science) walked through how Thomson Reuters embeds HG time-series and competitor data into their churn and propensity-to-buy models. Focused on the ACES dashboard (LangGraph + AWS SageMaker) which generates SWOTs, discovery questions, and partner insights for reps from HG install + contract data.'},
    {label:'Key Use Cases Confirmed',body:'✅ Churn model: time-series + competitor mindshare mapped against top-3 risk buckets (prime / most likely / neutral) for LexisNexis competitive displacement\
✅ Propensity model: HG data combined with ZoomInfo for competitive conquesting\
✅ ACES dashboard using HG install + contract data for rep discovery flows\
✅ TrustRadius second-party intent flagged as priority upgrade at renewal (vs. ZoomInfo third-party intent)'},
    {label:'Open Items',body:'⚠️ Data sparsity persists — HG recently added 10M companies; TR team to re-check match rates\
⚠️ Contract data underutilized — TR interested in vendor-specific subsets\
⚠️ Anushri and Blake unable to attend; follow-up needed for ACES walkthrough\
⚠️ TR product-to-competitor mapping status unclear — Divyam to confirm with data team'},
    {label:'Next Steps',body:'Divyam to schedule follow-up with Anushri + Blake for ACES deep-dive. Coordinate with HG data team on contract data specifics and coverage. Divyam to follow up on TR product mapping status with competitor product mapping.'},
  ]},
  'pulse-intuit1':{ title:'TR - Intuit CVP x2 · 03.01.2025', subtitle:'$76,590 ARR · Healthy · Riley Rogers', sections:[{label:'Pulse Explanation',body:'Bianca Gause expressed enthusiasm about GEO dashboard early access and confirmed she is championing the program internally. Reverses prior renewal-lag risk.'},{label:'Previous State',body:'Concerning (since Mar 5, 2026)'}]},
  'pulse-intuit2':{ title:'TR - Enterprise Suite CVP · 10.24.2025', subtitle:'$50,000 ARR · Healthy · Riley Rogers', sections:[{label:'Pulse Explanation',body:'Champion re-engaged and excited about GEO early access. Category Intent Data aligned with demand gen plans. Updated from Concerning to Healthy.'},{label:'Previous State',body:'Concerning (since Mar 5, 2026)'}]},
  'pulse-intuit3':{ title:'TR - Intuit CVP x2 · 10.21.2025 (Written)', subtitle:'$50,000 ARR · Healthy · Riley Rogers', sections:[{label:'Pulse Explanation',body:'GEO early access resets prior adoption-gap risk. Champion re-engaged and coordinating with HG.'},{label:'Previous State',body:'Concerning (since Mar 5, 2026)'}]},
  'pulse-dd-cd':{ title:'Datadog Cloud Dynamics + Universe 150', subtitle:'$250,000 ARR · Concerning · Varun Tiwari', sections:[{label:'Pulse Explanation',body:'Reps pulling back SMB usage due to data trust/accuracy concerns. Firmographic matching questions unresolved.'},{label:'Action Required',body:'Technical follow-up within 5 business days. Involve Solutions Engineering.'}]},
  'pulse-dd-tr':{ title:'TR Lead Acceleration + Intent Data Trial', subtitle:'$78,800 ARR · Healthy · Varun Tiwari', sections:[{label:'Pulse Explanation',body:'Constructive ICP refinement to commercial/SMB. IDL expansion actively discussed. Positive engagement signal.'}]},
  'pulse-quad-ml':{ title:'TR Marketing Leadership', subtitle:'$180,000 ARR · Healthy · Divyam Dewan', sections:[{label:'Pulse Explanation',body:'Review campaign on track for May Top Rated. AP TR score improving. Expansion conversation on roadmap.'}]},
  'pulse-quad-idl':{ title:'IDL Co-sell 2025', subtitle:'$120,000 ARR · Healthy · Divyam Dewan', sections:[{label:'Pulse Explanation',body:'IDL co-sell advancing — Lia/Lauren engaged on SFDC integration. Regional splits and webhook routing being finalized.'}]},
  'pulse-quad-de':{ title:'TR IDL Pilot — Germany', subtitle:'$10,000 ARR · Healthy · Divyam Dewan', sections:[{label:'Pulse Explanation',body:'Ashlin coordinating review cadence for Germany pilot. Onboarding on track for Top Rated threshold.'}]},
  'pulse-quad-dach':{ title:'TR IDL Pilot — DACH', subtitle:'$10,000 ARR · Healthy · Divyam Dewan', sections:[{label:'Pulse Explanation',body:'DACH IDL Pilot onboarding progressing. Lia/Lauren engaged on suppression lists and SFDC routing. 70/30 split being finalized.'}]},
  // ── Apr 21 Report Modals ────────────────────────────────────
  'call-cisco-tr':{ title:'Cisco — TrustRadius Sync · Apr 20 · 8:00 AM PT', subtitle:'Pam Huck · 30 min · Zoom · Signal: Concerning', sections:[
    {label:'What Happened',body:'Renewal sync focused on Q4 budget planning. Cisco\'s paid media team (Romana Klinger, Matt) confirmed they cannot demonstrate direct ROI from TrustRadius intent data investments. Attribution remains unclear. Contract ends May 15.'},
    {label:'Key Concerns',body:'❌ No committed Q4 or FY27 budget\
❌ Attribution methodology unclear\
⚠️ Risk of downgrade from full partnership to quarterly or no engagement\
⚠️ Budget decisions made quarterly — annual commitment unlikely without exec direction (Anna/Ben)'},
    {label:'Positive Signals',body:'✅ Team values intent-driven leads program\
✅ Uptick in product research when campaigns run\
✅ Partnership sentiment from Matt/Romana is strong'},
    {label:'Next Steps',body:'Mardigan to deliver scoped proposal by May 15. Melissa\'s team to finalize product scope (mid-market, LDOS, data center) by Wednesday call. Cisco paid media to confirm Q4 budget direction.'},
  ]},
  'call-msft-gtm':{ title:'Microsoft — GTM/Marketplace for MCP/Agents · Apr 20 · 1:00 PM PT', subtitle:'Pam Huck / Mark Fell · 30 min · Teams · Signal: Healthy', sections:[
    {label:'What Happened',body:'Strategic GTM alignment call on integrating HG Insights MCP into Microsoft ecosystem (Teams, Dynamics, Copilot). Target segment: B2B technology companies using Microsoft platforms.'},
    {label:'Key Signals',body:'✅ Mark Fell active executive champion\
✅ Azure marketplace commercial partnership in discussion (Kevin Boyle, Zach Jones)\
✅ Talis and Adobe identified as lighthouse customers\
✅ Francis Brero (HG VP AI) engaged on customer pipeline\
⚠️ Business case with ROI needed for Satish/Rohini before Azure commitment'},
    {label:'Next Steps',body:'HG to develop business case with projected ROI. Finalize Power Automate technical integration. Establish collaborative sales/marketing approach. Renewal ($574K) due June. Target May 19 announcement.'},
  ]},
  'call-workday-phoenix':{ title:'Workday — Project Phoenix Technical Deep Dive · Apr 20 · 1:30 PM PT', subtitle:'Rani Guy · 60 min · Zoom · Signal: Healthy', sections:[
    {label:'What Happened',body:'Technical deep dive on HG MCP with Workday\'s EDATA team (Phoenix Majumder Sr. Director, Tamil Tamilmani, Kendall Stauffer). Workday is actively building GTM agentic workflows and evaluating HG\'s MCP to augment agents with richer account intelligence.'},
    {label:'Key Signals',body:'✅ Workday evaluating HG MCP to power GTM agentic workflows\
✅ HG expanded dataset (SMB + AI spend) addresses data sparsity in mid-market + international\
✅ Interest in contact-level and buying center insights\
✅ Technical pathways: direct API + Databricks integration\
✅ Relationship deeply collaborative with mutual roadmap investment'},
    {label:'Contractual',body:'⚠️ AI addendum needed\
⚠️ Consumption-based MCP credits need formal evaluation\
⚠️ Security review required'},
    {label:'Next Steps',body:'Workday to test MCP use cases (Databricks pathway likely fastest). Legal/security to review AI addendum. Schedule QBR with Phoenix Majumder and Winston Wu. Renewal Sept 14, $815K ARR.'},
  ]},
  'pulse-cisco-tr':{ title:'Cisco — TrustRadius Paid Media Partnership', subtitle:'Concerning · Pam Huck · Contract ends May 15', sections:[
    {label:'Pulse Explanation',body:'Renewal sync on Apr 20 surfaced no committed Q4 or FY27 budget. Attribution for intent data ROI remains unclear. Risk of downgrade from full partnership to quarterly or no engagement. Contract ends May 15.'},
    {label:'Risk Factors',body:'❌ No hard budget committed for Q4 or FY27\
❌ ROI attribution unclear\
⚠️ Annual commitment unlikely without executive direction from Anna/Ben'},
    {label:'Next Steps',body:'Scoped proposal due by May 15. Finalize product scope (mid-market, LDOS, data center) with Melissa\'s team by Wednesday. Cisco paid media to confirm Q4 budget direction.'},
  ]},
  'pulse-workday-phoenix':{ title:'Workday — HG Platform (Project Phoenix)', subtitle:'$815K ARR · Healthy · Rani Guy · Renews Sept 14', sections:[
    {label:'Pulse Explanation',body:'Workday\'s EDATA team is actively building GTM agentic workflows and evaluating HG MCP to augment agents with richer account intelligence. Strong expansion signals — SMB/AI spend data addresses data sparsity gaps in mid-market and international segments.'},
    {label:'Expansion Signals',body:'✅ Direct evaluation of HG MCP for GTM agentic workflows\
✅ Interest in SMB + AI spend categories (new datasets)\
✅ Contact-level and buying center insights requested\
✅ Mutual investment in joint roadmap development'},
    {label:'Next Steps',body:'MCP testing via Databricks pathway. AI addendum review. Schedule QBR with Phoenix Majumder + Winston Wu.'},
  ]},
  'pulse-msft-gtm':{ title:'Microsoft — GTM/Marketplace for MCP/Agents', subtitle:'$574K ARR · Healthy · Pam Huck · Renews June', sections:[
    {label:'Pulse Explanation',body:'Strategic alignment call on integrating HG Insights MCP into Microsoft ecosystem (Teams, Dynamics, Copilot). Azure marketplace commercial partnership actively in discussion. Mark Fell is executive champion. Talis and Adobe identified as lighthouse customers.'},
    {label:'Expansion Signals',body:'✅ Azure marketplace partnership in discussion (Kevin Boyle, Zach Jones at Microsoft)\
✅ Demandbase partnership layer adds content syndication dimension\
✅ Executive champion (Mark Fell) and HG VP AI (Francis Brero) engaged'},
    {label:'Next Steps',body:'Business case with ROI projections for Satish/Rohini. Power Automate technical integration. Collaborative sales/marketing approach. Target May 19 announcement. Renewal June must progress in parallel.'},
  ]},
  'pulse-ehouse':{ title:'eHouse Studio — HG Platform Renewal', subtitle:'Poor — Churn Risk Escalated', sections:[
    {label:'Pulse Explanation',body:'Escalating to churn risk. Mitch Gilroy has refused to get on a call multiple times — most recently canceled a booked call on Feb 12, 2026 the same day. No product usage signals or engagement to anchor a renewal conversation. Account is trending toward churn.'},
    {label:'Risk Factors',body:'❌ Primary contact (Mitch Gilroy) repeatedly declines meetings\
❌ No product usage signals\
❌ No engagement to anchor renewal conversation\
❌ Atisha (previous CSM) confirmed account not keen on continuing HG platform'},
    {label:'Next Steps',body:'Determine if executive outreach to Justin Poole is warranted. Explore if any remaining stakeholders are reachable.'},
  ]},
  // ── Apr 23 Report Modals ────────────────────────────────────
  'call-dxc-apr23':{ title:'DXC Technology — Gabriella & HG Quarterly · Apr 23 · 2:00 PM PT', subtitle:'Varun Tiwari · 30 min · Zoom · Signal: Concerning', sections:[
    {label:'What Happened',body:'Quarterly sync with Gabriella Aston (returned from vacation, platform access reactivated). Discussion covered AI spending opportunities and HG agent strategy integration with AWS QuickSight. Stakeholder alignment pending.'},
    {label:'Key Signals',body:`✅ Platform access successfully reactivated
✅ AI/AWS integration opportunities explored
⚠️ AWS QuickSight / agent integration stakeholder alignment still pending
⚠️ November renewal risk ongoing: $816K + $80K in Discovery stage`},
    {label:'Next Steps',body:'Continue budget approval and AWS integration discussions. Coordinate stakeholder alignment meeting. Monitor November renewal timing.'},
  ]},
  'call-ntt-apr23':{ title:'NTT Data — HGi / POC Discussion · Apr 23 · 2:00 PM PT', subtitle:'Nick Johnson · 30 min · Zoom · No Transcript', sections:[
    {label:'What Happened',body:'POC scoping call — part of ongoing AI-driven pipeline generation engine series. Prior calls covered seller workflow automation and account insights platform design. Transcript not yet available.'},
    {label:'Key Signals',body:`✅ POC series progressing through discovery phases
✅ Multi-call engagement indicates serious evaluation
⚠️ Transcript unavailable for sentiment analysis`},
    {label:'Next Steps',body:'Follow up on POC scope and timeline. Expect transcript to be available in next run.'},
  ]},
  'call-cf-apr23':{ title:'Cloudflare — HG Insights Connect · Apr 23 · 3:00 PM PT', subtitle:'Rani Guy · 30 min · Zoom · Signal: Healthy', sections:[
    {label:'What Happened',body:'Data hierarchy and source-of-truth definition session. Building foundational data structure to support AI-driven sales and marketing. Data harmonization challenges identified. May NYC onsite prep continuing.'},
    {label:'Key Signals',body:`✅ Strong strategic momentum with multi-stakeholder engagement
✅ May onsite confirmed with clear agenda
✅ Data harmonization pathway emerging
✅ Healthy sentiment throughout`},
    {label:'Next Steps',body:'Resolve APAC/Japan hierarchy issues. Prepare pre-onsite scoring model gap analysis. Finalize May onsite agenda.'},
  ]},
  'call-strada-apr23':{ title:'Strada U.S. — HG / Alignment Call · Apr 23 · 3:00 PM PT', subtitle:'Atisha Waghela · 30 min · Zoom · Signal: Healthy', sections:[
    {label:'What Happened',body:'Post-renewal alignment and HG data optimization discussion. Covered sales and territory management use cases. Salesforce integration challenges surfaced. Advanced analytics capabilities and new data fabric model explored for increased coverage. LATAM data questions ongoing.'},
    {label:'Key Signals',body:`✅ Post-renewal engagement active and strong
✅ Salesforce integration roadmap clarified
✅ Advanced analytics capabilities interest noted
✅ LATAM expansion opportunity identified`},
    {label:'Next Steps',body:'Address Salesforce integration gaps. Develop data fabric model for expanded coverage. Follow up on LATAM data questions.'},
  ]},
  'call-dynatrace-apr23':{ title:'Dynatrace → HG Datafeed Collaboration · Apr 23 · 4:00 PM PT', subtitle:'Divyam Dewan · 30 min · Zoom · Signal: Healthy', sections:[
    {label:'What Happened',body:'Dynatrace strategy session on data feed integration for new logo readiness and propensity-to-buy modeling. Evaluating delivery method: data feed vs. API/direct. Datafeed upsell opportunity active (~$178K potential). 2028 renewal anchors long-term expansion.'},
    {label:'Key Signals',body:`✅ High-value upsell opportunity ($178K) actively being scoped
✅ New logo readiness use case validated
✅ 2028 renewal provides long expansion trajectory
✅ Healthy engagement throughout`},
    {label:'Next Steps',body:'Finalize delivery method decision (feed vs API). Quantify ROI for $178K upsell. Schedule implementation planning session.'},
  ]},
  'call-autodesk-apr23':{ title:'Autodesk — HG Whitespace File · Apr 23 · 5:00 PM PT', subtitle:'Varun Tiwari · 30 min · Zoom · Signal: Healthy', sections:[
    {label:'What Happened',body:'Whitespace account analysis with data filter refinement and one-time export deliverable for Autodesk field team. Renewal conversation initiated; price increase justification underway. $1.48M renewal in Validation stage, close date Apr 30.'},
    {label:'Key Signals',body:`✅ Renewal conversation initiated with pricing discussion
✅ $1.48M in Validation — high-value opportunity
✅ Apr 30 close date sets urgency
✅ One-time export deliverable demonstrates value`},
    {label:'Next Steps',body:'Complete price increase justification. Finalize renewal terms before Apr 30. Schedule final approval call this week.'},
  ]},
  'call-msft-apr23':{ title:'Microsoft / HG Insights Bi-Weekly · Apr 23 · 5:00 PM PT', subtitle:'Pam Huck · 60 min · Teams · No Transcript', sections:[
    {label:'What Happened',body:'Recurring bi-weekly cadence call. Teams recording — transcript not available. Active open opportunities include Contract Consolidation ($3M), AIBS Expansion ($500K), and Americas Region renewal ($675K). ICP Builder skill discussion noted in Vitally.'},
    {label:'Key Signals',body:`✅ $4.175M in active opportunities across three initiatives
✅ Regular cadence maintained — strong engagement
✅ ICP Builder capability of interest
⚠️ Transcript unavailable for sentiment analysis`},
    {label:'Next Steps',body:'Expect transcript in next run. Prioritize opportunity progress tracking. Advance ICP Builder discussion.'},
  ]},
  'call-cisco-apr23':{ title:'Cisco — HG Insights Connect · Apr 23 · 7:00 PM PT', subtitle:'Pam Huck · 30 min · Zoom · Signal: Healthy', sections:[
    {label:'What Happened',body:'Granular market share intelligence discussion for networking and security. Bridging regional vs. country-level wallet share gap. Proposed solution for country-specific data advancing. Project Phoenix data use case active. $2.3M ARR account with multiple renewals.'},
    {label:'Key Signals',body:`✅ $2.3M ARR account — significant strategic importance
✅ Country-level market share solution advancing
✅ Project Phoenix use case validation
✅ Multiple renewals converging Nov 2026 (IDL, WarRoom, TR)`},
    {label:'Next Steps',body:'Finalize country-level data structure. Coordinate multi-product renewal planning. Align Project Phoenix roadmap with Cisco requirements.'},
  ]},
};

function openModal(key) {
  const data=modals[key]; if(!data) return;
  document.getElementById('modal-title').textContent=data.title;
  document.getElementById('modal-subtitle').textContent=data.subtitle;
  document.getElementById('modal-body').innerHTML=data.sections.map(s=>`<div class="modal-section"><div class="modal-section-label">${s.label}</div><div class="modal-section-body">${s.body.replace(/\n/g,'<br>')}</div></div>`).join('');
  document.getElementById('modal-overlay').classList.add('open');
}
function closeModal() { document.getElementById('modal-overlay').classList.remove('open'); }
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

// ─── AUTH GATE ──────────────────────────────────────────────────
// ─── AUTH (Google Identity Services) ────────────────────────────────────────
const GIS_CLIENT_ID = '1094206518379-qbd9moklpm5i67kmkgnp2k45ki2dai8j.apps.googleusercontent.com';

function handleGISCredential(response) {
  const errEl = document.getElementById('auth-err');
  try {
    if (!response || !response.credential) {
      errEl.textContent = 'No credential returned — please try again.';
      return;
    }
    const parts = response.credential.split('.');
    const b64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const padded = b64 + '==='.slice(0, (4 - b64.length % 4) % 4);
    const payload = JSON.parse(decodeURIComponent(
      atob(padded).split('').map(c => '%' + c.charCodeAt(0).toString(16).padStart(2,'0')).join('')
    ));
    const email = (payload.email || '').toLowerCase();
    if (email.endsWith('@hginsights.com')) {
      sessionStorage.setItem('hg-auth', email);
      document.getElementById('auth-gate').style.display = 'none';
    } else {
      errEl.textContent = 'Access restricted to @hginsights.com. Signed in as: ' + (email || '(unknown)');
    }
  } catch(e) {
    errEl.textContent = 'Sign-in error: ' + e.message;
  }
}



function handleOAuthCallback() { /* no-op */ }

const GOOGLE_ICON = `<svg width="20" height="20" viewBox="0 0 48 48" style="flex-shrink:0"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>`;

if (sessionStorage.getItem('hg-auth')) {
  document.getElementById('auth-gate').style.display = 'none';
} else {
  handleOAuthCallback();
}

// ─── INIT ───────────────────────────────────────────────────────
// Auto-detect available day reports by probing for dayOverviewHTML_* function names.
// Scans the last 180 days so reports from any loaded monthly JS file are discovered.
(function detectDayReports() {
  const today = new Date();
  for (let i = 0; i < 180; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const iso = d.toISOString().slice(0, 10);
    if (typeof window['dayOverviewHTML_' + iso.replace(/-/g, '_')] === 'function') {
      REPORTS.day[iso] = true;
    }
  }
  // Point currentKey at the most recent available report and sync the UI
  const latest = Object.keys(REPORTS.day).sort().reverse()[0];
  if (latest) currentKey = latest;
})();

// Auto-detect available week reports by scanning:
// 1. weekSummaryHTML_YYYY_Www function names (hand-written weeks like W18)
// 2. dayData_YYYY_MM_DD function names (auto-derived weeks like W19+)
// W17 stays in REPORTS.week from its hardcoded init entry (uses un-suffixed base functions).
(function detectWeekReports() {
  Object.keys(window).forEach(k => {
    // Suffixed hand-written week functions
    let m = k.match(/^weekSummaryHTML_(\d{4})_(W\d{2})$/);
    if (m) { REPORTS.week[`${m[1]}-${m[2]}`] = true; return; }
    // Any day with structured data contributes to its week
    m = k.match(/^dayData_(\d{4})_(\d{2})_(\d{2})$/);
    if (m) REPORTS.week[weekKey(`${m[1]}-${m[2]}-${m[3]}`)] = true;
  });
})();

// applyDate syncs the date label + picker to currentKey, then calls render()
applyDate(currentKey);
