// ─── APRIL 2026 DAILY REPORT FUNCTIONS ────────────────────────────────
// One file per calendar month. Add new day functions to the current month's file.
//
// HOW TO ADD A NEW DAY (e.g. 2026-04-27):
//   1. Add 4 functions here:
//        function dayOverviewHTML_2026_04_27() { return `...`; }
//        function dayCallsHTML_2026_04_27()    { return `...`; }
//        function dayPulsesHTML_2026_04_27()   { return `...`; }
//        function dayActionsHTML_2026_04_27()  { return `...`; }
//   2. In js/core.js → update REPORTS.day, getDayData(), currentKey, resetToLatest()
//   3. Validate: node --check index.html (and each .js file)
//   4. Push to GitHub
//
// ⚠️  String escaping rules:
//   - Use \" (escaped) for double-quotes inside double-quoted strings
//   - Use \n (escaped) for newlines inside double-quoted strings
//   - Never use literal newlines inside double-quoted JS strings (SyntaxError in Chrome)
// ──────────────────────────────────────────────────────────────────────

function dayOverviewHTML() {
  return `<div class="section-label">Team Activity — Monday Apr 21</div>
  <div class="overview-grid">
    <div class="csm-card has-calls" data-csm="riley"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Intuit Mailchimp · Champion re-engaged · GEO early access</div></div>
    <div class="csm-card has-calls" data-csm="varun"><span class="call-badge">2 CALLS</span><div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">75m</div><div class="metric-lbl">Total</div></div></div><div class="csm-account-note" style="color:#d97706">Datadog · Data trust concern flagged ⚠️</div></div>
    <div class="csm-card has-calls" data-csm="divyam"><span class="call-badge">2 CALLS</span><div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Total</div></div></div><div class="csm-account-note">Quadient · Thomson Reuters · churn model + intent deep-dive</div></div>
    <div class="csm-card no-calls" data-csm="nick"><div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">28 accounts</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="rani"><div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="pam"><div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="atisha"><div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="andy"><div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
  </div>`;
}

function dayCallsHTML() {
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="riley" data-health="Healthy" onclick="openModal('call-intuit')"><td style="color:#9ca3af;font-size:12px">Apr 21 · 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>Intuit Mailchimp</strong></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy" onclick="openModal('call-tr-apr22')"><td style="color:#9ca3af;font-size:12px">Apr 21 · 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Thomson Reuters</strong> <span style="font-size:11px;color:#9ca3af">Churn + Intent</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Concerning" onclick="openModal('call-dd-cd')"><td style="color:#9ca3af;font-size:12px">Apr 21 · 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Datadog</strong> <span style="font-size:11px;color:#9ca3af">Cloud Dynamics</span></td><td>45 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="varun" data-health="Healthy" onclick="openModal('call-dd-tr')"><td style="color:#9ca3af;font-size:12px">Apr 21 · 12:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Datadog</strong> <span style="font-size:11px;color:#9ca3af">TR / ICP</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy" onclick="openModal('call-quad')"><td style="color:#9ca3af;font-size:12px">Apr 21 · 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Quadient Software</strong></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
    </tbody>
  </table></div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">🔍</div>No calls match these filters.</div>`;
}

function dayPulsesHTML() {
  const cards = [
    {csm:'riley',health:'Healthy',account:'Intuit Mailchimp',opp:'TR - Intuit CVP x2 · 03.01.2025',arr:'$76,590 ARR',excerpt:'Bianca Gause re-engaged; excited about GEO dashboard early access.',csmlbl:'Riley Rogers',change:'Updated from Concerning',modal:'pulse-intuit1'},
    {csm:'riley',health:'Healthy',account:'Intuit Mailchimp',opp:'TR - Enterprise Suite CVP · 10.24.2025',arr:'$50,000 ARR',excerpt:'Champion re-engaged; Category Intent Data aligned with demand gen plans.',csmlbl:'Riley Rogers',change:'Updated from Concerning',modal:'pulse-intuit2'},
    {csm:'riley',health:'Healthy',account:'Intuit Mailchimp',opp:'TR - Intuit CVP x2 · 10.21.2025 (Written)',arr:'$50,000 ARR',excerpt:'GEO early access resets prior adoption-gap risk. SSO remains watch item.',csmlbl:'Riley Rogers',change:'Updated from Concerning',modal:'pulse-intuit3'},
    {csm:'varun',health:'Concerning',account:'Datadog',opp:'Cloud Dynamics + Universe 150 · S2026',arr:'$250,000 ARR',excerpt:'Reps pulling back SMB usage; data trust concerns unresolved.',csmlbl:'Varun Tiwari',change:'New · was null',modal:'pulse-dd-cd'},
    {csm:'varun',health:'Healthy',account:'Datadog',opp:'TR Lead Acceleration · CVP Intent Trial',arr:'$78,800 ARR',excerpt:'Constructive ICP refinement; active IDL expansion discussion.',csmlbl:'Varun Tiwari',change:'New · was null',modal:'pulse-dd-tr'},
    {csm:'divyam',health:'Healthy',account:'Quadient Software',opp:'TR Marketing Leadership',arr:'$180,000 ARR',excerpt:'Review campaign on track for May Top Rated. AP TR score improving.',csmlbl:'Divyam Dewan',change:'New · was null',modal:'pulse-quad-ml'},
    {csm:'divyam',health:'Healthy',account:'Quadient Software',opp:'IDL Co-sell 2025',arr:'$120,000 ARR',excerpt:'IDL program advancing — SFDC integration and webhook routing in progress.',csmlbl:'Divyam Dewan',change:'New · was null',modal:'pulse-quad-idl'},
    {csm:'divyam',health:'Healthy',account:'Quadient Software',opp:'TR IDL Pilot — Germany',arr:'$10,000 ARR',excerpt:'Ashlin coordinating review cadence for Top Rated threshold.',csmlbl:'Divyam Dewan',change:'New · was null',modal:'pulse-quad-de'},
    {csm:'divyam',health:'Healthy',account:'Quadient Software',opp:'TR IDL Pilot — DACH',arr:'$10,000 ARR',excerpt:'DACH IDL onboarding progressing — 70/30 targeting split being finalized.',csmlbl:'Divyam Dewan',change:'New · was null',modal:'pulse-quad-dach'},
  ];
  const bc = h => h==='Healthy'?'badge-healthy':'badge-concerning';
  const bi = h => h==='Healthy'?'🟢':'🟡';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}" onclick="openModal('${c.modal}')">
      <div class="pulse-card-top"><div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div><span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span></div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">🔍</div>No pulses match these filters.</div>`;
}

function dayActionsHTML() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(1)?'done':''}" data-csm="varun" id="action-1"><div class="action-checkbox ${doneActions.has(1)?'checked':''}" onclick="toggleAction(1)"></div><div class="action-body"><div class="action-title">Datadog Cloud Dynamics — technical follow-up on data accuracy</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Varun Tiwari · Within 5 business days · Loop in Solutions Engineering on SMB firmographic methodology + freshness SLA</div></div></div>
    <div class="action-item ${doneActions.has(2)?'done':''}" data-csm="riley" id="action-2"><div class="action-checkbox ${doneActions.has(2)?'checked':''}" onclick="toggleAction(2)"></div><div class="action-body"><div class="action-title">Intuit Mailchimp — confirm SSO resolution timeline with Bianca Gause</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers · SSO delays remain open; confirm status on next call</div></div></div>
    <div class="action-item ${doneActions.has(3)?'done':''}" data-csm="divyam" id="action-3"><div class="action-checkbox ${doneActions.has(3)?'checked':''}" onclick="toggleAction(3)"></div><div class="action-body"><div class="action-title">Quadient — share UTM/trackable links and review submission cut-offs</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Divyam Dewan · Send Ashlin segmented lists + links before May Top Rated deadline</div></div></div>
    <div class="action-item ${doneActions.has(4)?'done':''}" data-csm="divyam" id="action-4"><div class="action-checkbox ${doneActions.has(4)?'checked':''}" onclick="toggleAction(4)"></div><div class="action-body"><div class="action-title">Quadient — finalize IDL suppression lists and SFDC routing for DACH + Germany</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Divyam Dewan / Lia / Ethan · Confirm targeting split and webhook setup</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">🔍</div>No action items match these filters.</div>`;
}

// ═══════════════════════════════════════════════════════════════
// APR 21 REPORT — Activity from Mon Apr 20
// ═══════════════════════════════════════════════════════════════
function dayOverviewHTML_Apr21() {
  return `<div class="section-label">Team Activity — Monday Apr 20</div>
  <div class="overview-grid">
    <div class="csm-card has-calls" data-csm="pam"><span class="call-badge">2 CALLS</span><div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-red">1</div><div class="metric-lbl">At Risk</div></div><div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Total</div></div></div><div class="csm-account-note" style="color:#d97706">Cisco · Renewal May 15 · no committed Q4 budget ⚠️</div></div>
    <div class="csm-card has-calls" data-csm="rani"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Workday · MCP expansion signals · $815K renewal Sept</div></div>
    <div class="csm-card no-calls" data-csm="riley"><div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="varun"><div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="divyam"><div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="nick"><div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="atisha"><div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note" style="color:#dc2626">eHouse Studio · Churn risk escalated 🔴</div></div>
    <div class="csm-card no-calls" data-csm="andy"><div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
  </div>`;
}

function dayCallsHTML_Apr21() {
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="pam" data-health="Concerning" onclick="openModal('call-cisco-tr')"><td style="color:#9ca3af;font-size:12px">Apr 20 · 8:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius Sync</span></td><td>30 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="pam" data-health="Healthy" onclick="openModal('call-msft-gtm')"><td style="color:#9ca3af;font-size:12px">Apr 20 · 1:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Microsoft</strong> <span style="font-size:11px;color:#9ca3af">GTM/Marketplace</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy" onclick="openModal('call-workday-phoenix')"><td style="color:#9ca3af;font-size:12px">Apr 20 · 1:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Workday</strong> <span style="font-size:11px;color:#9ca3af">Project Phoenix</span></td><td>60 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
    </tbody>
  </table></div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">🔍</div>No calls match these filters.</div>`;
}

function dayPulsesHTML_Apr21() {
  const cards = [
    {csm:'pam',health:'Concerning',account:'Cisco',opp:'TrustRadius Paid Media Partnership',arr:'Contract ends May 15',excerpt:'No committed Q4 budget. Attribution unclear; downgrade or churn risk without exec direction.',csmlbl:'Pam Huck',change:'New · was null',modal:'pulse-cisco-tr'},
    {csm:'rani',health:'Healthy',account:'Workday',opp:'HG Platform — Project Phoenix (EDATA)',arr:'$815K ARR · Renews Sept 14',excerpt:'Strong MCP expansion signals. Workday evaluating HG data to power GTM agentic workflows.',csmlbl:'Rani Guy',change:'New · was null',modal:'pulse-workday-phoenix'},
    {csm:'pam',health:'Healthy',account:'Microsoft',opp:'GTM/Marketplace for MCP/Agents',arr:'$574K ARR · Renews June',excerpt:'Strategic alignment on HG+Microsoft ecosystem integration. Azure marketplace partnership in discussion.',csmlbl:'Pam Huck',change:'New · was null',modal:'pulse-msft-gtm'},
    {csm:'atisha',health:'Concerning',account:'eHouse Studio',opp:'HG Platform Renewal',arr:'Churn Risk',excerpt:'Mitch Gilroy repeatedly declines calls. No product usage or engagement. Trending toward churn.',csmlbl:'CSM Review',change:'Escalated to Churn Risk',modal:'pulse-ehouse'},
  ];
  const bc = h => h==='Healthy'?'badge-healthy':'badge-concerning';
  const bi = h => h==='Healthy'?'🟢':'🟡';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}" onclick="openModal('${c.modal}')">
      <div class="pulse-card-top"><div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div><span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span></div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">🔍</div>No pulses match these filters.</div>`;
}

function dayActionsHTML_Apr21() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(21)?'done':''}" data-csm="pam" id="action-21"><div class="action-checkbox ${doneActions.has(21)?'checked':''}" onclick="toggleAction(21)"></div><div class="action-body"><div class="action-title">Cisco — deliver scoped proposal by May 15; confirm Q4 budget direction with Cisco paid media</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Pam Huck · Mardigan to scope; Melissa's team to finalize product scope (mid-market, LDOS, data center) by Wednesday</div></div></div>
    <div class="action-item ${doneActions.has(22)?'done':''}" data-csm="rani" id="action-22"><div class="action-checkbox ${doneActions.has(22)?'checked':''}" onclick="toggleAction(22)"></div><div class="action-body"><div class="action-title">Workday — schedule QBR with Phoenix Majumder + Winston Wu; legal/security to review AI addendum</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy · Workday to test MCP use cases; AI addendum + consumption-based MCP credits need formal evaluation</div></div></div>
    <div class="action-item ${doneActions.has(23)?'done':''}" data-csm="pam" id="action-23"><div class="action-checkbox ${doneActions.has(23)?'checked':''}" onclick="toggleAction(23)"></div><div class="action-body"><div class="action-title">Microsoft — develop business case with ROI projections for Satish/Rohini before Azure commitment</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Pam Huck / Mark Fell / Francis Brero · Finalize Power Automate integration; target May 19 announcement</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">🔍</div>No action items match these filters.</div>`;
}

// ═══════════════════════════════════════════════════════════════
// APR 20 REPORT — Activity from Sun Apr 19 (no team activity)
// ═══════════════════════════════════════════════════════════════
function dayOverviewHTML_Apr20() {
  return `<div class="section-label">Team Activity — Sunday Apr 19</div>
  <div class="overview-grid">
    <div class="csm-card no-calls" data-csm="riley"><div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
    <div class="csm-card no-calls" data-csm="varun"><div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
    <div class="csm-card no-calls" data-csm="divyam"><div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
    <div class="csm-card no-calls" data-csm="nick"><div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
    <div class="csm-card no-calls" data-csm="rani"><div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
    <div class="csm-card no-calls" data-csm="pam"><div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
    <div class="csm-card no-calls" data-csm="atisha"><div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
    <div class="csm-card no-calls" data-csm="andy"><div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No activity — weekend</div></div>
  </div>`;
}

function dayCallsHTML_Apr20() {
  return `<div class="empty-state"><div class="empty-icon">📅</div>No call recordings found for Apr 19, 2026 (Sunday).</div>
  <div class="empty-state" id="calls-empty" style="display:none"></div>`;
}

function dayPulsesHTML_Apr20() {
  return `<div class="empty-state"><div class="empty-icon">📋</div>No pulse notes were logged for Apr 19, 2026.</div>
  <div class="empty-state" id="pulses-empty" style="display:none"></div>`;
}

function dayActionsHTML_Apr20() {
  return `<div class="empty-state"><div class="empty-icon">✅</div>No action items logged for Apr 19, 2026.</div>
  <div class="empty-state" id="actions-empty" style="display:none"></div>`;
}

// ═══════════════════════════════════════════════════════════════
// APR 23 REPORT — Activity from Wed Apr 22
// ═══════════════════════════════════════════════════════════════
function dayOverviewHTML_Apr23() {
  return `<div class="section-label">Team Activity — Wednesday Apr 22</div>
  <div class="overview-grid">
    <div class="csm-card has-calls" data-csm="rani"><span class="call-badge">3 CALLS</span><div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">85m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Lenovo · Elastic · Cloudflare — May onsite with Cloudflare confirmed</div></div>
    <div class="csm-card has-calls" data-csm="varun"><span class="call-badge">2 CALLS</span><div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">DXC · Zendesk — Intent data into AI agent + TR renewal planning</div></div>
    <div class="csm-card has-calls" data-csm="pam"><span class="call-badge">2 CALLS</span><div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Epicor Kinetic · Eclipse — Product listings + Insights Nashville prep</div></div>
    <div class="csm-card has-calls" data-csm="nick"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">HCL SW — AI retention via MCP + Clay + LLM stack</div></div>
    <div class="csm-card no-calls" data-csm="riley"><div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="divyam"><div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="atisha"><div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="andy"><div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
  </div>`;
}

function dayCallsHTML_Apr23() {
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="nick" data-health="Healthy" onclick="openModal('call-hcl-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 2:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>HCL SW</strong> <span style="font-size:11px;color:#9ca3af">MCP + Clay + LLM Strategy</span></td><td>45 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy" onclick="openModal('call-dxc-intent-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 4:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>DXC Technology</strong> <span style="font-size:11px;color:#9ca3af">Intent Data Integration</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy" onclick="openModal('call-lenovo-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 7:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Lenovo</strong> <span style="font-size:11px;color:#9ca3af">RGIP Platform Overview</span></td><td>25 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy" onclick="openModal('call-elastic-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 8:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Elastic</strong> <span style="font-size:11px;color:#9ca3af">TAM/SAM Alignment</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy" onclick="openModal('call-cloudflare-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cloudflare</strong> <span style="font-size:11px;color:#9ca3af">May Onsite Prep</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy" onclick="openModal('call-zendesk-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Zendesk</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius CSM Sync</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="pam" data-health="Healthy" onclick="openModal('call-epicor-kinetic-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Epicor Kinetic</strong> <span style="font-size:11px;color:#9ca3af">Product Listings + Event Prep</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="pam" data-health="Healthy" onclick="openModal('call-epicor-eclipse-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 22 · 11:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Epicor Eclipse</strong> <span style="font-size:11px;color:#9ca3af">Campaign Evaluation</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
    </tbody>
  </table></div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">🔍</div>No calls match these filters.</div>`;
}

function dayPulsesHTML_Apr23() {
  const cards = [
    {csm:'nick',health:'Healthy',account:'HCL SW',opp:'HG Platform — Customer Intelligence',arr:'Enterprise · Nick Johnson',excerpt:'Strong engagement from Alexander Knaani Klein on MCP + Clay + LLM retention workflows. Data quality questions on Charles Schwab flagged vs ZoomInfo — follow-up needed.',csmlbl:'Nick Johnson',change:'Healthy — active expansion interest',modal:'pulse-hcl-apr23'},
    {csm:'varun',health:'Healthy',account:'DXC Technology',opp:'HG Intent Data Integration',arr:'Enterprise · Varun Tiwari',excerpt:'Productive session on integrating buying intent into DXC\'s AQS/MCP AI agent. AWS Marketplace funding path emerging. Contract amendment progressing with Preethi coordinating.',csmlbl:'Varun Tiwari',change:'Healthy — strong strategic alignment',modal:'pulse-dxc-apr23'},
    {csm:'rani',health:'Healthy',account:'Lenovo',opp:'HG Platform — RGIP',arr:'Enterprise · Rani Guy',excerpt:'New stakeholder Kristen successfully onboarded to RGIP. Covered firmographics, tech installs, GSI contracts, Cloud maturity, spend modeling. Follow-up sessions scheduled.',csmlbl:'Rani Guy',change:'Healthy — new champion engaged',modal:'pulse-lenovo-apr23'},
    {csm:'rani',health:'Healthy',account:'Elastic',opp:'HG Platform — Market Intelligence',arr:'Enterprise · Rani Guy',excerpt:'Working session to bridge Elastic\'s IDC category definitions with HG data taxonomy for unified TAM/SAM view. Session with David Adamson, Sydney, Sriraman, Noelle.',csmlbl:'Rani Guy',change:'Healthy — deep technical collaboration',modal:'pulse-elastic-apr23'},
    {csm:'rani',health:'Healthy',account:'Cloudflare',opp:'HG + TrustRadius Platform',arr:'Enterprise · Rani Guy',excerpt:'May onsite confirmed. Scoring model gaps identified: firmographic coverage + APAC/Japan hierarchy issues. HG + TR data blending for seller intelligence explored.',csmlbl:'Rani Guy',change:'Healthy — May onsite locked in',modal:'pulse-cloudflare-apr23'},
    {csm:'varun',health:'Healthy',account:'Zendesk',opp:'TrustRadius CSM Sync',arr:'Enterprise · Varun Tiwari',excerpt:'Forethought TrustRadius profile inactive/unclaimed. Integration direction pending mid-May decision post-Relate. 6 April reviews added; Top Rated secured. Aug renewal in planning.',csmlbl:'Varun Tiwari',change:'Healthy — renewal planning underway',modal:'pulse-zendesk-apr23'},
    {csm:'pam',health:'Healthy',account:'Epicor Kinetic',opp:'TrustRadius Lead Acceleration',arr:'Enterprise · Pam Huck',excerpt:'Kinetic product listings being updated ahead of Insights Nashville. Content refresh underway, targeting event deadline. Booth logistics confirmed with Pam\'s team assisting.',csmlbl:'Pam Huck',change:'Healthy — active product engagement',modal:'pulse-epicor-kinetic-apr23'},
    {csm:'pam',health:'Healthy',account:'Epicor Eclipse',opp:'TrustRadius Bundled Package',arr:'Enterprise · Pam Huck',excerpt:'Bundled campaign evaluation for P21 and lead gen via API integrations. Meeting rescheduled to include Libby and Ben Halverson for full product scope review.',csmlbl:'Pam Huck',change:'Healthy — expansion scoping in progress',modal:'pulse-epicor-eclipse-apr23'},
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'🟢':h==='Concerning'?'🟡':'🔴';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}" onclick="openModal('${c.modal}')">
      <div class="pulse-card-top"><div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div><span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span></div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">🔍</div>No pulses match these filters.</div>`;
}

function dayActionsHTML_Apr23() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(31)?'done':''}" data-csm="rani" id="action-31"><div class="action-checkbox ${doneActions.has(31)?'checked':''}" onclick="toggleAction(31)"></div><div class="action-body"><div class="action-title">Lenovo — schedule new UI demo + Microsoft Dynamics integration deep-dive for Kristen</div><div class="action-meta"><span class="urgency-badge urgency-med">MED</span>Rani Guy · Kristen is net-new stakeholder with strong first impression — momentum is high, follow-up session to be booked this week</div></div></div>
    <div class="action-item ${doneActions.has(32)?'done':''}" data-csm="nick" id="action-32"><div class="action-checkbox ${doneActions.has(32)?'checked':''}" onclick="toggleAction(32)"></div><div class="action-body"><div class="action-title">HCL SW — share HG MCP + Clay use cases; schedule data quality deep dive on ZoomInfo competitive questions</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Nick Johnson · Alexander Knaani Klein and Mohan K raised Charles Schwab data contradictions — resolving builds trust and supports expansion</div></div></div>
    <div class="action-item ${doneActions.has(33)?'done':''}" data-csm="rani" id="action-33"><div class="action-checkbox ${doneActions.has(33)?'checked':''}" onclick="toggleAction(33)"></div><div class="action-body"><div class="action-title">Cloudflare — resolve APAC/Japan firmographic hierarchy gaps; deliver pre-onsite scoring model gap analysis</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy · May onsite confirmed — data gaps must be resolved before the session to ensure the agenda lands well</div></div></div>
    <div class="action-item ${doneActions.has(34)?'done':''}" data-csm="varun" id="action-34"><div class="action-checkbox ${doneActions.has(34)?'checked':''}" onclick="toggleAction(34)"></div><div class="action-body"><div class="action-title">Zendesk — confirm Forethought integration direction by mid-May; coordinate SEO early-access with James; book June renewal alignment session</div><div class="action-meta"><span class="urgency-badge urgency-med">MED</span>Varun Tiwari · Aug renewal — June alignment sets scope; Forethought positioning decision impacts subscription structure</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">🔍</div>No action items match these filters.</div>`;
}

function dayOverviewHTML_2026_04_23() {
  return `<div class="section-label">Team Activity — Thursday Apr 23</div>
  <div class="overview-grid">
    <div class="csm-card has-calls" data-csm="varun"><span class="call-badge">2 CALLS</span><div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">DXC Technology · Autodesk — Quarterly review + whitespace file delivery</div></div>
    <div class="csm-card has-calls" data-csm="pam"><span class="call-badge">2 CALLS</span><div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Microsoft · Cisco — Bi-weekly syncs + renewal alignment</div></div>
    <div class="csm-card has-calls" data-csm="rani"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Cloudflare — Data hierarchy alignment; May NYC onsite</div></div>
    <div class="csm-card has-calls" data-csm="atisha"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Strada — Post-renewal alignment; Salesforce integration</div></div>
    <div class="csm-card has-calls" data-csm="divyam"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Dynatrace — Datafeed upsell strategy; new logo propensity</div></div>
    <div class="csm-card has-calls" data-csm="nick"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-grey">—</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">NTT Data — POC scoping; no transcript yet</div></div>
    <div class="csm-card no-calls" data-csm="riley"><div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="andy"><div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
  </div>`;
}
function dayCallsHTML_2026_04_23() {
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="varun" data-health="Concerning" onclick="openModal('call-dxc-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>DXC Technology</strong> <span style="font-size:11px;color:#9ca3af">Quarterly Review</span></td><td>30 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="nick" data-health="Pending" onclick="openModal('call-ntt-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>NTT Data</strong> <span style="font-size:11px;color:#9ca3af">POC Discussion</span></td><td>30 min</td><td><span class="badge badge-pending">⚪ Pending</span></td></tr>
      <tr data-csm="rani" data-health="Healthy" onclick="openModal('call-cf-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cloudflare</strong> <span style="font-size:11px;color:#9ca3af">Data Hierarchy Alignment</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy" onclick="openModal('call-strada-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Strada U.S. Professional Services</strong> <span style="font-size:11px;color:#9ca3af">Post-Renewal Alignment</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy" onclick="openModal('call-dynatrace-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Dynatrace</strong> <span style="font-size:11px;color:#9ca3af">Datafeed Strategy</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy" onclick="openModal('call-autodesk-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 5:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Autodesk Inc</strong> <span style="font-size:11px;color:#9ca3af">Whitespace File</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="pam" data-health="Pending" onclick="openModal('call-msft-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 5:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Microsoft</strong> <span style="font-size:11px;color:#9ca3af">Bi-Weekly Sync</span></td><td>60 min</td><td><span class="badge badge-pending">⚪ Pending</span></td></tr>
      <tr data-csm="pam" data-health="Healthy" onclick="openModal('call-cisco-apr23')"><td style="color:#9ca3af;font-size:12px">Apr 23 · 7:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">Market Share Intelligence</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
    </tbody>
  </table></div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">🔍</div>No calls match these filters.</div>`;
}

function dayPulsesHTML_2026_04_23() {
  return `<div class="pulse-grid"></div>
  <div class="empty-state" id="pulses-empty"><div class="empty-icon">∼</div>No pulses created on Apr 23. Sentiment cannot be auto-assigned; create manually in Vitally if needed.</div>`;
}

function dayActionsHTML_2026_04_23() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(51)?'done':''}" data-csm="system" id="action-51"><div class="action-checkbox ${doneActions.has(51)?'checked':''}" onclick="toggleAction(51)"></div><div class="action-body"><div class="action-title">✅ Cross-coverage clean: All 8 calls attributed to correct CSM owners</div><div class="action-meta"><span class="urgency-badge urgency-success">CLEAR</span>No conflicts detected. Clean window.</div></div></div>
    <div class="action-item ${doneActions.has(52)?'done':''}" data-csm="system" id="action-52"><div class="action-checkbox ${doneActions.has(52)?'checked':''}" onclick="toggleAction(52)"></div><div class="action-body"><div class="action-title">⚠️ NTT Data & Microsoft — No transcripts available</div><div class="action-meta"><span class="urgency-badge urgency-warning">WARNING</span>Both returned has_transcript: false. May be picked up in tomorrow's run.</div></div></div>
    <div class="action-item ${doneActions.has(53)?'done':''}" data-csm="varun" id="action-53"><div class="action-checkbox ${doneActions.has(53)?'checked':''}" onclick="toggleAction(53)"></div><div class="action-body"><div class="action-title">🔴 DXC Technology — November renewal risk ongoing</div><div class="action-meta"><span class="urgency-badge urgency-critical">CRITICAL</span>Varun Tiwari · AWS QuickSight/agent integration stakeholder alignment pending. $816K + $80K renewal in Discovery.</div></div></div>
    <div class="action-item ${doneActions.has(54)?'done':''}" data-csm="varun" id="action-54"><div class="action-checkbox ${doneActions.has(54)?'checked':''}" onclick="toggleAction(54)"></div><div class="action-body"><div class="action-title">🔴 Autodesk & Cisco renewals converging</div><div class="action-meta"><span class="urgency-badge urgency-critical">CRITICAL</span>Autodesk $1.48M (Apr 30 close, price increase discussion). Cisco $2.3M ARR (Nov 2026, Project Phoenix active).</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">🔍</div>No action items match these filters.</div>`;
}

function dayOverviewHTML_2026_04_24() {
  return `<div class="section-label">Team Activity — Friday Apr 24</div>
  <div class="overview-grid">
    <div class="csm-card has-calls" data-csm="atisha"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Salesforce ASEAN &mdash; Credit consumption &amp; export issue resolution; ASEAN platform access</div></div>
    <div class="csm-card has-calls" data-csm="divyam"><span class="call-badge">1 CALL</span><div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Lumen Technologies &mdash; Business review: firmographics, spend/install, market intelligence &amp; intent data</div></div>
    <div class="csm-card has-calls" data-csm="nick"><span class="call-badge">1 CALL (cross)</span><div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div><div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div><div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div></div><div class="csm-account-note">Intuit (Atisha account) &mdash; Cross-coverage: Nick introduced as incoming CSM replacing Leo Zunz</div></div>
    <div class="csm-card no-calls" data-csm="varun"><div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="rani"><div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="pam"><div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="riley"><div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
    <div class="csm-card no-calls" data-csm="andy"><div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div><div class="csm-metrics"><div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div></div><div class="csm-account-note">No calls logged this period</div></div>
  </div>`;
}

function dayCallsHTML_2026_04_24() {
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:12px">Apr 24 &middot; 6:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Salesforce Inc. (ASEAN)</strong> <span style="font-size:11px;color:#9ca3af">Credit &amp; Export Resolution</span></td><td>30 min</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:12px">Apr 24 &middot; 3:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson <span style="font-size:10px;background:#fff7ed;color:#9a3412;border:1px solid #fed7aa;border-radius:3px;padding:1px 5px;margin-left:4px;">Cross</span></div></td><td><strong>Intuit</strong> <span style="font-size:11px;color:#9ca3af">CSM Handover (Leo &rarr; Nick)</span></td><td>30 min</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:12px">Apr 24 &middot; 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Lumen Technologies</strong> <span style="font-size:11px;color:#9ca3af">Business Review</span></td><td>30 min</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
    </tbody>
  </table></div>
  <div style="background:#fff7ed;border:1px solid #fed7aa;border-left:3px solid #f97316;border-radius:6px;padding:10px 14px;margin:10px 0;font-size:12px;color:#7c2d12;">
    &#9888; <strong>Cross-coverage:</strong> Nick Johnson on Atisha's Intuit account (handover &mdash; Leo Zunz &rarr; Nick Johnson). Apple Inc. disqualified (CSM absent). Palo Alto Networks pending (transcript not ready at scan time).
  </div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">&#128269;</div>No calls match these filters.</div>`;
}

function dayPulsesHTML_2026_04_24() {
  return `<div class="pulse-grid">
    <div class="pulse-card" data-csm="atisha" data-health="Healthy"><div class="pulse-header"><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div><span class="badge badge-healthy">&#128994; Healthy</span></div><div class="pulse-account"><strong>Salesforce Inc. (ASEAN)</strong></div><div class="pulse-note">Credit consumption issue resolved; ASEAN platform access confirmed. Pulse <code>a0f5433b</code></div></div>
    <div class="pulse-card" data-csm="divyam" data-health="Healthy"><div class="pulse-header"><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div><span class="badge badge-healthy">&#128994; Healthy</span></div><div class="pulse-account"><strong>Lumen Technologies</strong></div><div class="pulse-note">Business review walkthrough completed. Pulse <code>0ba3095c</code></div></div>
    <div class="pulse-card" data-csm="nick" data-health="Healthy"><div class="pulse-header"><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div><span class="badge badge-healthy">&#128994; Healthy</span></div><div class="pulse-account"><strong>Intuit</strong> <span style="font-size:10px;color:#9a3412;">(cross-coverage)</span></div><div class="pulse-note">Handover call complete &mdash; Nick Johnson introduced as incoming CSM. Pulse <code>131c5068</code></div></div>
  </div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#128269;</div>No pulses match these filters.</div>`;
}

function dayActionsHTML_2026_04_24() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(61)?'done':''}" data-csm="atisha" id="action-61"><div class="action-checkbox ${doneActions.has(61)?'checked':''}" onclick="toggleAction(61)"></div><div class="action-body"><div class="action-title">&#9888; Confirm CRM ownership transfer: Intuit &rarr; Nick Johnson</div><div class="action-meta"><span class="urgency-badge urgency-warning">ACTION NEEDED</span> Nick Johnson covered as cross-CSM on Apr 24 handover call. Verify Vitally &amp; Salesforce CSM assignment reflects Nick Johnson as primary owner going forward.</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#128269;</div>No action items match these filters.</div>`;
}


