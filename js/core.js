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
  day: { '2026-04-24': true, '2026-04-23': true, '2026-04-22': true, '2026-04-21': true, '2026-04-20': true, '2026-04-19': true },
  week: { '2026-W17': true },   // ISO week 17 = Apr 20-26
  month: { '2026-04': true },
};

// ─── STATE ─────────────────────────────────────────────────────
let gran = 'day';
let currentKey = '2026-04-24';
let activeTab = '';
let activeCsm = 'all';
let activeHealth = 'all';
const doneActions = new Set();
let accountsSortColumn = 'arr';
let accountsSortDesc = true;

// ─── PERIOD KEYS ───────────────────────────────────────────────
function dayKey(iso) { return iso; }
function weekKey(iso) {
  const d = isoToDate(iso);
  const jan4 = new Date(d.getFullYear(), 0, 4);
  const startOfWeek = new Date(jan4);
  startOfWeek.setDate(jan4.getDate() - ((jan4.getDay() + 6) % 7));
  const diff = d - startOfWeek;
  const week = Math.floor(diff / 604800000) + 1;
  return d.getFullYear() + '-W' + String(week).padStart(2,'0');
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
  const d = isoToDate(currentKey.length===10 ? currentKey : currentKey+'-01');
  if (gran==='day') d.setDate(d.getDate()+delta);
  else if (gran==='week') d.setDate(d.getDate()+delta*7);
  else d.setMonth(d.getMonth()+delta);
  applyDate(dateToISO(d));
}
function onPickerChange(val) { if(val) applyDate(val); }
function applyDate(iso) {
  currentKey = gran==='day' ? iso : gran==='week' ? weekKey(iso) : monthKey(iso);
  // keep picker aligned to a valid date within period
  document.getElementById('date-picker').value = iso.length===10 ? iso : iso+'-01';
  document.getElementById('date-label').textContent = formatLabel(iso.length===10?iso:iso+'-01');
  render();
}

// ─── GRANULARITY ───────────────────────────────────────────────
function setGran(g) {
  gran = g;
  document.querySelectorAll('.gran-btn').forEach(b=>b.classList.toggle('active',b.dataset.gran===g));
  // Convert currentKey back to a day so we can recompute
  let dayIso = currentKey.length===10 ? currentKey : (currentKey.length===7 ? currentKey+'-01' : '2026-04-24');
  currentKey = currentPeriodKey(dayIso);
  document.getElementById('date-label').textContent = formatLabel(dayIso);
  render();
}

// ─── RENDER ────────────────────────────────────────────────────
function render() {
  const hasReport = REPORTS[gran]?.[currentKey];
  const tabsRow = document.getElementById('tabs-row');
  const filtersBar = document.getElementById('filters-bar');
  const statPills = document.getElementById('stat-pills');
  const mc = document.getElementById('main-content');

  // Global Accounts tab — always first, always visible
  const acctTabHtml = `<div class="tab${activeTab==='accounts'?' active':''}" onclick="switchTab('accounts')">Accounts (120)</div>`;

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
  if (gran==='day') { currentKey='2026-04-24'; document.getElementById('date-label').textContent='Apr 24, 2026'; }
  else if (gran==='week') { currentKey='2026-W17'; document.getElementById('date-label').textContent='Apr 20 – Apr 26, 2026'; }
  else { currentKey='2026-04'; document.getElementById('date-label').textContent='April 2026'; }
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

function getDayData(key) {
  // Drive-discovered report (no embedded content)
  const rep = REPORTS.day[key];
  if (rep && rep.driveOnly) return {
    pills: [['dot-teal','\u{1F4C1} Drive']],
    tabs: ['Report'],
    overviewHTML: () => `<div style="padding:24px;text-align:center"><p style="font-size:14px;color:#374151;margin-bottom:16px;">This report is stored in Google Drive.</p><a href="${rep.viewUrl}" target="_blank" style="display:inline-block;background:#1e2d45;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">Open Report in Drive</a><div style="margin-top:16px"><iframe src="${rep.embedUrl}" width="100%" height="600" style="border:1px solid #e5e7eb;border-radius:6px;"></iframe></div></div>`,
    callsHTML: () => '', pulsesHTML: () => '', actionsHTML: () => '',
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
function renderWeek(mc, tabsRow, statPills) {
  setPills([['dot-teal','24 Calls'],['dot-green','21 Pulses'],['dot-purple','6 Active CSMs'],['dot-amber','4 Concerning']]);
  const tabs = ['Summary','CSM Breakdown','Call Log (24)','Pulse Log (21)','Pulse Coverage'];
  if (!activeTab || !['wsummary','wcsm','wcalls','wpulses','wcoverage'].includes(activeTab)) activeTab='wsummary';
  tabsRow.innerHTML = ['wsummary','wcsm','wcalls','wpulses','wcoverage'].map((k,i)=>
    `<div class="tab ${activeTab===k?'active':''}" onclick="switchTab('${k}')">${tabs[i]}</div>`
  ).join('');
  ['h-all','h-healthy','h-concerning','health-divider','health-label'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.style.display = activeTab==='wpulses'?'':'none';
  });

  let html = '<div class="content">';
  if (activeTab==='wsummary') html += weekSummaryHTML();
  else if (activeTab==='wcsm') html += weekCSMHTML();
  else if (activeTab==='wcalls') html += weekCallsHTML();
  else if (activeTab==='wcoverage') html += pulseCoverageHTML();
  else if (activeTab==='wacct') html += accountsHTML();
  else html += weekPulsesHTML();
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
  setPills([['dot-teal','24 Calls'],['dot-green','21 Pulses'],['dot-purple','22 Accounts'],['dot-amber','4 Concerning']]);
  const tabs = ['Summary','CSM Breakdown','Call Log (24)','Pulse Notes (21)','Pulse Health','Pulse Coverage'];
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
    if (lp.includes('at risk')) return '#dc2626';
    return '#6b7280';
  };
  const tableRows = ACCOUNTS_DATA.map((acct, idx) => {
    const opps = acct.opportunities || [];
    const oppCount = opps.length;
    const hasOpps = oppCount > 0;
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
        <td style="padding:4px 10px;font-size:11px;color:#6b7280">${opp.pulseNote || '—'}</td>
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
        <td style="padding:6px 10px;font-size:11px;color:#6b7280">${acct.lastOutbound ? new Date(acct.lastOutbound).toLocaleDateString('en-US', {month:'short', day:'numeric'}) : '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${acct.latestPulseDate ? new Date(acct.latestPulseDate).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'}) : '—'}</td>
        <td style="${acct.pulse && acct.pulseColor ? `padding:4px 10px;font-size:11px;background-color:${acct.pulseColor};color:white;border-radius:4px;text-align:center;font-weight:500` : 'padding:6px 10px;font-size:11px;color:#9ca3af'}">${acct.pulse || '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280">${acct.pulseNote || '—'}</td>
        <td style="padding:6px 10px;font-size:11px;color:#6b7280;font-variant-numeric:tabular-nums">${acct.renewalDate || '—'}</td>
      </tr>
      ${oppRows}
    `;
  }).join('');

  return `
    <div class="section-label">Accounts · 120 Total · $47.2M ARR · 240 Opportunities</div>
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
        <div style="position:relative;display:flex;align-items:center">
          <span style="position:absolute;left:8px;font-size:13px;color:#9ca3af;pointer-events:none">🔍</span>
          <input id="accounts-search" type="text" placeholder="Search accounts…" oninput="window.searchAccounts(this.value)" style="font-size:12px;padding:4px 10px 4px 28px;border:1px solid #d1d5db;background:#fff;border-radius:6px;color:#374151;min-width:200px;outline:none" />
        </div>
        <label for="accounts-csm-filter" style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;font-weight:600">CSM</label>
        <select id="accounts-csm-filter" onchange="window.filterAccountsByCsm(this.value)" style="font-size:12px;padding:4px 10px;border:1px solid #d1d5db;background:#fff;border-radius:6px;cursor:pointer;color:#374151;min-width:180px">
          <option value="all">All CSMs (120)</option>
          <option value="riley">Riley Rogers (6)</option>
          <option value="varun">Varun Tiwari (21)</option>
          <option value="divyam">Divyam Dewan (21)</option>
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
      valA = pulseRank(acctA.pulse); valB = pulseRank(acctB.pulse);
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


render();
