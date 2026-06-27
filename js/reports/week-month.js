// ─── WEEK & MONTH REPORT FUNCTIONS ────────────────────────────────────
// Stable — only update these when the weekly/monthly content changes.
// DO NOT touch when adding new daily reports.
// ──────────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════
// WEEK VIEW — HTML functions
// ═══════════════════════════════════════════════════════════════

function weekSummaryHTML() {
  return `
  <div class="section-label">Week of Apr 20–26, 2026 · Overview</div>
  <div class="summary-cards">
    <div class="sum-card c-teal" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">24</div><div class="sum-lbl">Calls w/ Transcripts</div><div class="sum-sub">22 accounts · Mon–Thu</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('wpulses','all','all')"><div class="sum-val">21</div><div class="sum-lbl">Pulse Notes Created</div><div class="sum-sub">18 Healthy · 3 Concerning</div></div>
    <div class="sum-card c-purple" onclick="jumpToTab('wcsm','all','all')"><div class="sum-val">6</div><div class="sum-lbl">Active CSMs</div><div class="sum-sub">of 8 on the team</div></div>
    <div class="sum-card c-amber" onclick="jumpToTab('wpulses','all','Concerning')"><div class="sum-val">4</div><div class="sum-lbl">Concerning Signals</div><div class="sum-sub">Cisco · Datadog CD · eHouse · DXC</div></div>
    <div class="sum-card c-red" onclick="jumpToTab('wpulses','atisha','Concerning')"><div class="sum-val">1</div><div class="sum-lbl">Churn Risk Escalated</div><div class="sum-sub">eHouse Studio — no engagement</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('wpulses','riley','Healthy')"><div class="sum-val">3</div><div class="sum-lbl">Pulse Upgrades</div><div class="sum-sub">Intuit: Concerning→Healthy</div></div>
    <div class="sum-card c-blue" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">3</div><div class="sum-lbl">Expansion Signals</div><div class="sum-sub">Workday MCP &middot; Lenovo &middot; Cloudflare onsite</div></div>
  </div>

  <div class="section-label">Active Accounts This Week</div>
  <div class="account-highlights">
    <div class="acct-card ac-amber"><div class="acct-name">Datadog</div><div class="acct-csm">CSM: Varun Tiwari</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">2</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#d97706">⚠</div><div class="l">Risk</div></div></div><div class="acct-note">Cloud Dynamics data trust concern flagged — SMB firmographic accuracy questioned. TR/ICP call healthy — ICP refinement to commercial/SMB progressing.</div></div>
    <div class="acct-card"><div class="acct-name">Rani's Portfolio</div><div class="acct-csm">Workday · Lenovo · Elastic · Cloudflare</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">4</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">↑H</div><div class="l">Trend</div></div></div><div class="acct-note">Strong week: Workday MCP expansion (Mon), Lenovo onboarding new stakeholder Kristen (Wed), Elastic TAM/SAM deep-dive (Wed), Cloudflare May onsite confirmed (Wed).</div></div>
    <div class="acct-card"><div class="acct-name">Quadient Software</div><div class="acct-csm">CSM: Divyam Dewan</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">4</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">↑H</div><div class="l">Trend</div></div></div><div class="acct-note">TR review campaign on track for May Top Rated. IDL Germany + DACH onboarding advancing. Thomson Reuters churn model deep-dive also covered this week.</div></div>
    <div class="acct-card"><div class="acct-name">Intuit Mailchimp</div><div class="acct-csm">CSM: Riley Rogers</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">3</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">↑H</div><div class="l">Trend</div></div></div><div class="acct-note">Champion Bianca Gause re-engaged. GEO dashboard early access driving positive momentum. All 3 opps upgraded from Concerning → Healthy.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">Cisco</div><div class="acct-csm">CSM: Pam Huck</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">1</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#d97706">⚠</div><div class="l">Risk</div></div></div><div class="acct-note">No committed Q4 budget. Attribution unclear. Contract ends May 15 — scoped proposal urgently needed. Downgrade or churn risk without exec direction.</div></div>
  </div>

  <div class="section-label">Daily Call Activity — Week of Apr 20–26</div>
  <div class="heatmap-card">
    <table class="hm-table">
      <thead><tr><th class="row-lbl">CSM</th><th>Mon Apr 20</th><th>Tue Apr 21</th><th>Wed Apr 22</th><th>Thu Apr 23</th><th>Fri Apr 24</th><th>Sat Apr 25</th><th>Sun Apr 26</th></tr></thead>
      <tbody>
        <tr class="hm-csm-row" data-csm="riley"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Riley Rogers</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="varun"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Varun Tiwari</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="divyam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Divyam Dewan</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="nick"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Nick Johnson</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="rani"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Rani Guy</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="pam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Pam Huck</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="atisha"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Atisha Waghela</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="andy"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Andy Lim</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section-label">Pulse Health Distribution</div>
  <div class="health-dist">
    <div class="health-bar-wrap">
      <div class="health-bar-title">All Pulses Created This Week (21)</div>
      <div class="health-bar-row"><div class="health-bar-label">🟢 Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:86%"></div></div><div class="health-bar-count">18</div></div>
      <div class="health-bar-row"><div class="health-bar-label">🟡 Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:14%"></div></div><div class="health-bar-count">3</div></div>
      <div class="health-bar-row"><div class="health-bar-label">🔴 Poor</div><div class="health-bar-track"><div class="health-bar-fill hf-red" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
    <div class="health-bar-wrap">
      <div class="health-bar-title">Calls by Day</div>
      <div class="health-bar-row"><div class="health-bar-label">Mon Apr 20</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:23%"></div></div><div class="health-bar-count">3</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Tue Apr 21</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:38%"></div></div><div class="health-bar-count">5</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Wed Apr 22</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:62%"></div></div><div class="health-bar-count">8</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Thu Apr 23</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:100%"></div></div><div class="health-bar-count">13</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Fri Apr 24</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:38%"></div></div><div class="health-bar-count">5</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Sat Apr 25</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Sun Apr 26</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
  </div>`;
}

function weekCSMHTML() {
  return `<div class="section-label">CSM Contributions — Week of Apr 20–26</div>
  <div class="csm-leaderboard">
    <div class="csm-row csm-total" data-csm="all"><div class="avatar">Σ</div><div style="flex:1"><div class="csm-row-name">Total — All CSMs</div><div class="csm-row-sub">8 Enterprise CSMs · 120 accounts · $47.3M ARR</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">34</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">21</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">3</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">120</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">240</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="varun"><div class="avatar av-varun">VT</div><div style="flex:1"><div class="csm-row-name">Varun Tiwari</div><div class="csm-row-sub">Datadog · DXC · Zendesk — Cloud Dynamics Concerning; others Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">26</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="pam"><div class="avatar av-grey">PH</div><div style="flex:1"><div class="csm-row-name">Pam Huck</div><div class="csm-row-sub">Cisco · Microsoft · Epicor Kinetic · Epicor Eclipse — Cisco Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">7</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">17</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="rani"><div class="avatar av-grey">RG</div><div style="flex:1"><div class="csm-row-name">Rani Guy</div><div class="csm-row-sub">Workday · Lenovo · Elastic · Cloudflare — all Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">27</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="divyam"><div class="avatar av-divyam">DD</div><div style="flex:1"><div class="csm-row-name">Divyam Dewan</div><div class="csm-row-sub">Thomson Reuters · Quadient — all Healthy · IDL + reviews on track</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">28</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="riley"><div class="avatar av-riley">RR</div><div style="flex:1"><div class="csm-row-name">Riley Rogers</div><div class="csm-row-sub">Intuit Mailchimp · Champion re-engaged · 3 pulses upgraded Concerning→Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">3</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">6</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">59</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="nick"><div class="avatar av-grey">NJ</div><div style="flex:1"><div class="csm-row-name">Nick Johnson</div><div class="csm-row-sub">HCL Software — usage deep-dive · Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">27</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">43</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row inactive" data-csm="atisha"><div class="avatar av-grey">AW</div><div style="flex:1"><div class="csm-row-name">Atisha Waghela</div><div class="csm-row-sub">eHouse Studio — no call logged · pulse flagged Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">18</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">22</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row inactive" data-csm="andy"><div class="avatar av-grey">AL</div><div style="flex:1"><div class="csm-row-name">Andy Lim</div><div class="csm-row-sub">No activity logged this week</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">13</div><div class="l">Opps</div></div></div></div>
  </div>`;
}

function weekCallsHTML() {
  return `<div class="table-card"><table>
    <thead><tr><th>Date & Time</th><th class="sortable" data-sort-field="csm">CSM <span class="sort-arrow">⇅</span></th><th class="sortable" data-sort-field="account">Account <span class="sort-arrow">⇅</span></th><th>Duration</th><th class="sortable" data-sort-field="health">Signal <span class="sort-arrow">⇅</span></th></tr></thead>
    <tbody>
      <tr style="background:#f8f9fc;pointer-events:none"><td colspan="5" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;padding:8px 12px">MONDAY APR 20 — 3 CALLS</td></tr>
      <tr data-csm="pam" onclick="openModal('call-cisco-tr')"><td style="color:#9ca3af;font-size:12px">Mon Apr 20 · 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">QBR Prep</span></td><td>45 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="pam" onclick="openModal('call-msft-gtm')"><td style="color:#9ca3af;font-size:12px">Mon Apr 20 · 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Microsoft</strong> <span style="font-size:11px;color:#9ca3af">GTM Alignment</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" onclick="openModal('call-workday-phoenix')"><td style="color:#9ca3af;font-size:12px">Mon Apr 20 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Workday</strong> <span style="font-size:11px;color:#9ca3af">Project Phoenix</span></td><td>45 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr style="background:#f8f9fc;pointer-events:none"><td colspan="5" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;padding:8px 12px">TUESDAY APR 21 — 5 CALLS</td></tr>
      <tr data-csm="riley" onclick="openModal('call-intuit')"><td style="color:#9ca3af;font-size:12px">Tue Apr 21 · 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>Intuit Mailchimp</strong></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam" onclick="openModal('call-tr-apr22')"><td style="color:#9ca3af;font-size:12px">Tue Apr 21 · 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Thomson Reuters</strong> <span style="font-size:11px;color:#9ca3af">Churn + Intent</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam" onclick="openModal('call-quad')"><td style="color:#9ca3af;font-size:12px">Tue Apr 21 · 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Quadient Software</strong></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" onclick="openModal('call-dd-cd')"><td style="color:#9ca3af;font-size:12px">Tue Apr 21 · 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Datadog</strong> <span style="font-size:11px;color:#9ca3af">Cloud Dynamics</span></td><td>45 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="varun" onclick="openModal('call-dd-tr')"><td style="color:#9ca3af;font-size:12px">Tue Apr 21 · 12:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Datadog</strong> <span style="font-size:11px;color:#9ca3af">TR / ICP</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr style="background:#f8f9fc;pointer-events:none"><td colspan="5" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;padding:8px 12px">WEDNESDAY APR 22 — 8 CALLS</td></tr>
      <tr data-csm="nick" onclick="openModal('call-hcl-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>HCL Software</strong> <span style="font-size:11px;color:#9ca3af">Usage Deep-dive</span></td><td>45 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" onclick="openModal('call-dxc-intent-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>DXC Technology</strong> <span style="font-size:11px;color:#9ca3af">Intent Review</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" onclick="openModal('call-lenovo-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 10:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Lenovo</strong> <span style="font-size:11px;color:#9ca3af">QBR</span></td><td>60 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" onclick="openModal('call-elastic-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 11:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Elastic</strong> <span style="font-size:11px;color:#9ca3af">Renewal Prep</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="rani" onclick="openModal('call-cloudflare-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 1:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cloudflare</strong> <span style="font-size:11px;color:#9ca3af">Expansion</span></td><td>45 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" onclick="openModal('call-zendesk-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 1:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Zendesk</strong> <span style="font-size:11px;color:#9ca3af">Health Check</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="pam" onclick="openModal('call-epicor-kinetic-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Epicor</strong> <span style="font-size:11px;color:#9ca3af">Kinetic</span></td><td>45 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="pam" onclick="openModal('call-epicor-eclipse-apr23')"><td style="color:#9ca3af;font-size:12px">Wed Apr 22 · 3:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Epicor</strong> <span style="font-size:11px;color:#9ca3af">Eclipse</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr style="background:#f8f9fc;pointer-events:none"><td colspan="5" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;padding:8px 12px">THURSDAY APR 23 — 13 CALLS</td></tr>
      <tr data-csm="andy" onclick="openModal('call-colt-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 1:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AL</div>Andy Lim</div></td><td><strong>Colt Technology Services</strong> <span style="font-size:11px;color:#9ca3af">Bombora Intent Contract</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="riley" onclick="openModal('call-bmc-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 1:45 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>BMC Software</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius EBR Review</span></td><td>15 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" onclick="openModal('call-dxc-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>DXC Technology</strong> <span style="font-size:11px;color:#9ca3af">Gabriella &amp; HG Quarterly</span></td><td>30 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="nick" onclick="openModal('call-ntt-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>NTT Data</strong> <span style="font-size:11px;color:#9ca3af">POC Discussion</span></td><td>30 min</td><td><span style="font-size:11px;color:#9ca3af">— No transcript</span></td></tr>
      <tr data-csm="rani" onclick="openModal('call-cf-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cloudflare</strong> <span style="font-size:11px;color:#9ca3af">Connect</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="atisha" onclick="openModal('call-strada-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Strada</strong> <span style="font-size:11px;color:#9ca3af">Alignment Call</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="nick" onclick="openModal('call-checkpoint-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Check Point Software</strong> <span style="font-size:11px;color:#9ca3af">Platform Onboarding</span></td><td>60 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam" onclick="openModal('call-dynatrace-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Dynatrace</strong> <span style="font-size:11px;color:#9ca3af">Datafeed Collaboration</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" onclick="openModal('call-autodesk-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 5:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Autodesk</strong> <span style="font-size:11px;color:#9ca3af">Whitespace File</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="pam" onclick="openModal('call-msft-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 5:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Microsoft</strong> <span style="font-size:11px;color:#9ca3af">Bi-Weekly</span></td><td>60 min</td><td><span style="font-size:11px;color:#9ca3af">— No transcript</span></td></tr>
      <tr data-csm="atisha" onclick="openModal('call-tds-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 6:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela <span style="font-size:10px;background:#fff7ed;color:#9a3412;border:1px solid #fed7aa;border-radius:3px;padding:1px 5px;margin-left:4px;">AM</span></div></td><td><strong>TD Synnex</strong> <span style="font-size:11px;color:#9ca3af">Event Planning &amp; Intent Review</span></td><td>15 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="pam" onclick="openModal('call-cisco-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 7:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">Connect</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="atisha" onclick="openModal('call-palo-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 8:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Palo Alto Networks</strong> <span style="font-size:11px;color:#9ca3af">Chronosphere Renewal</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr style="background:#f8f9fc;pointer-events:none"><td colspan="5" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;padding:8px 12px">FRIDAY APR 24 — 5 CALLS</td></tr>
      <tr data-csm="atisha"><td style="color:#9ca3af;font-size:12px">Fri Apr 24 · 6:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Salesforce Inc. (ASEAN)</strong> <span style="font-size:11px;color:#9ca3af">Credit &amp; Export Resolution</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="nick"><td style="color:#9ca3af;font-size:12px">Fri Apr 24 · 3:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson <span style="font-size:10px;background:#fff7ed;color:#9a3412;border:1px solid #fed7aa;border-radius:3px;padding:1px 5px;margin-left:4px;">Cross</span></div></td><td><strong>Intuit</strong> <span style="font-size:11px;color:#9ca3af">CSM Handover (Leo &rarr; Nick)</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam"><td style="color:#9ca3af;font-size:12px">Fri Apr 24 · 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Lumen Technologies</strong> <span style="font-size:11px;color:#9ca3af">Business Review</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="atisha"><td style="color:#9ca3af;font-size:12px">Fri Apr 24 · 5:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Palo Alto Networks</strong> <span style="font-size:11px;color:#9ca3af">FY26 Strategic Alignment</span></td><td>30 min</td><td><span class="badge badge-pending">&#9898; Pending</span></td></tr>
      <tr data-csm="atisha"><td style="color:#9ca3af;font-size:12px">Fri Apr 24 · 8:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Apple Inc.</strong> <span style="font-size:11px;color:#9ca3af">Customer Sync</span></td><td>30 min</td><td><span class="badge badge-pending">&#9898; Pending</span></td></tr>
    </tbody>
  </table></div>`;
}

function weekPulsesHTML() {
  const strip = s => {
    const idx = s.indexOf('<div class="empty-state" id="pulses-empty"');
    return idx >= 0 ? s.substring(0, idx) : s;
  };
  return `
    <div class="section-label" style="margin-top:0">Monday Apr 20 — 4 Pulses</div>
    ${strip(dayPulsesHTML_Apr21())}
    <div class="section-label">Tuesday Apr 21 — 9 Pulses</div>
    ${strip(dayPulsesHTML())}
    <div class="section-label">Wednesday Apr 22 — 8 Pulses</div>
    ${strip(dayPulsesHTML_Apr23())}
    <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">🔍</div>No pulses match these filters.</div>
  `;
}

function applyWeekPulseFilters() {
  let v=0;
  document.querySelectorAll('.pulse-card').forEach(c=>{
    const s=(activeCsm==='all'||c.dataset.csm===activeCsm)&&(activeHealth==='all'||c.dataset.health===activeHealth);
    c.classList.toggle('hidden',!s); if(s)v++;
  });
  const e=document.getElementById('pulses-empty'); if(e)e.style.display=v===0?'':'none';
}

function applyWeekCSMFilter() {
  document.querySelectorAll('.csm-row').forEach(r=>{
    r.style.display = (activeCsm==='all'||r.dataset.csm===activeCsm)?'':'none';
  });
}



// ═══════════════════════════════════════════════════════════════
// MONTH VIEW — Dynamic generators (aggregate from dayData_* functions)
// If no dayData_* functions exist for the month, falls back to static HTML.
// ═══════════════════════════════════════════════════════════════

function _healthBadge(h) {
  return h === 'Healthy'
    ? '<span class="badge badge-healthy">&#128994; Healthy</span>'
    : h === 'Concerning'
    ? '<span class="badge badge-concerning">&#128993; Concerning</span>'
    : `<span class="badge">${h}</span>`;
}

function monthCallsHTML() {
  const md = getMonthData(currentKey);
  if (!md.hasData) return weekCallsHTML().replace('Week 17', isoToDate(currentKey+'-01').toLocaleDateString('en-US',{month:'long',year:'numeric'})+' · Month-to-Date');
  const hasPurpose = md.calls.some(c => c.purpose || c.nature || c.initiator);
  const purposeHeader = hasPurpose ? '<th class="sortable" data-sort-field="purpose">Purpose <span class="sort-arrow">⇅</span></th>' : '';
  const rows = _callTableRows(md.calls, hasPurpose);
  return `<div class="table-card"><table>
    <thead><tr><th>Time (PT)</th><th class="sortable" data-sort-field="csm">CSM <span class="sort-arrow">⇅</span></th><th class="sortable" data-sort-field="account">Account <span class="sort-arrow">⇅</span></th><th>Duration</th><th class="sortable" data-sort-field="health">Signal <span class="sort-arrow">⇅</span></th>${purposeHeader}<th>Detail</th></tr></thead>
    <tbody>${rows}</tbody>
  </table>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">&#128269;</div>No calls match these filters.</div>
  </div>`;
}

function monthPulsesHTML() {
  const md = getMonthData(currentKey);
  if (!md.hasData) return weekPulsesHTML();
  const cards = md.pulses.map(p => {
    const csm = CSM_DISPLAY[p.csm] || { name: p.csm, initials: '?', cls: 'av-grey' };
    const hClass = p.health === 'Healthy' ? 'pulse-healthy' : 'pulse-concerning';
    return `<div class="pulse-card ${hClass}" data-csm="${p.csm}" data-health="${p.health}">
      <div class="pulse-header">
        <div class="csm-chip-inline"><div class="mini-av ${csm.cls}">${csm.initials}</div>${csm.name}</div>
        ${_healthBadge(p.health)}
      </div>
      <div class="pulse-account"><strong>${p.account}</strong></div>
      <div class="pulse-note">${p.note}</div>
    </div>`;
  }).join('');
  return `<div class="pulse-grid">${cards}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#128269;</div>No pulses match these filters.</div>`;
}

function applyMonthCallFilters() {
  document.querySelectorAll('.table-card tbody tr[data-csm]').forEach(r=>{
    const okCsm = (activeCsm==='all' || r.dataset.csm===activeCsm);
    const okHealth = (activeHealth==='all' || r.dataset.health===activeHealth);
    r.classList.toggle('hidden', !(okCsm && okHealth));
  });
}

function monthSummaryHTML() {
  const md = getMonthData(currentKey);
  const monthLabel = isoToDate(currentKey+'-01').toLocaleDateString('en-US',{month:'long',year:'numeric'});

  if (md.hasData) {
    const healthyPulses    = md.pulses.filter(p => p.health === 'Healthy').length;
    const concerningPulses = md.pulses.filter(p => p.health === 'Concerning').length;
    const activeCsms       = new Set(md.calls.map(c => c.csm)).size;
    const expansionCalls   = md.calls.filter(c => c.purpose === 'Expansion').length;
    const healthPct        = md.pulses.length ? Math.round(healthyPulses / md.pulses.length * 100) : 0;
    const concerningPct    = md.pulses.length ? Math.round(concerningPulses / md.pulses.length * 100) : 0;

    // Per-day, per-CSM call counts for heatmap
    const dayCallMap = {};
    md.calls.forEach(c => {
      dayCallMap[c.date] = dayCallMap[c.date] || {};
      dayCallMap[c.date][c.csm] = (dayCallMap[c.date][c.csm] || 0) + 1;
    });
    const days = [...md.days].sort();

    const heatmapHeaders = days.map(d => {
      const dt = isoToDate(d);
      return `<th>${dt.toLocaleDateString('en-US',{month:'short',day:'numeric'})}</th>`;
    }).join('');

    const heatmapRows = CSM_ORDER.map(id => {
      const csm = CSM_DISPLAY[id];
      const cells = days.map(d => {
        const n = (dayCallMap[d]||{})[id] || 0;
        const cls = n === 0 ? 'hm-0' : n === 1 ? 'hm-1' : n <= 2 ? 'hm-2' : 'hm-3';
        return `<td class="hm-cell ${cls}">${n || '—'}</td>`;
      }).join('');
      return `<tr class="hm-csm-row" data-csm="${id}"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">${csm.name}</td>${cells}</tr>`;
    }).join('');

    const totalRow = days.map(d => {
      const t = Object.values(dayCallMap[d]||{}).reduce((a,b)=>a+b,0);
      const cls = t === 0 ? 'hm-0' : t <= 3 ? 'hm-1' : t <= 6 ? 'hm-2' : 'hm-3';
      return `<td class="hm-cell ${cls}">${t}</td>`;
    }).join('');

    // Optional editorial content from monthEditorial_YYYY_MM() if provided
    const editFn = window['monthEditorial_' + currentKey.replace('-','_')];
    const editorial = editFn ? editFn() : '';

    return `
    <div class="section-label">${monthLabel} · Summary</div>
    <div class="summary-cards">
      <div class="sum-card c-teal"   onclick="jumpToTab('mcalls','all','all')"><div class="sum-val">${md.calls.length}</div><div class="sum-lbl">Calls Logged</div><div class="sum-sub">${days.length} day${days.length!==1?'s':''} with data · ${activeCsms} CSMs</div></div>
      <div class="sum-card c-green"  onclick="jumpToTab('mpulses','all','all')"><div class="sum-val">${md.pulses.length}</div><div class="sum-lbl">Pulse Notes</div><div class="sum-sub">${healthyPulses} Healthy · ${concerningPulses} Concerning</div></div>
      <div class="sum-card c-purple" onclick="jumpToTab('mcsm','all','all')"><div class="sum-val">${activeCsms}</div><div class="sum-lbl">Active CSMs</div><div class="sum-sub">of 8 on the team</div></div>
      ${concerningPulses > 0 ? `<div class="sum-card c-amber" onclick="jumpToTab('mpulses','all','Concerning')"><div class="sum-val">${concerningPulses}</div><div class="sum-lbl">Concerning Signals</div><div class="sum-sub">Require follow-up</div></div>` : ''}
      ${expansionCalls > 0 ? `<div class="sum-card c-blue" onclick="jumpToTab('mcalls','all','all')"><div class="sum-val">${expansionCalls}</div><div class="sum-lbl">Expansion Signals</div><div class="sum-sub">Calls with expansion intent</div></div>` : ''}
    </div>
    ${editorial}
    <div class="section-label">Daily Call Activity — ${monthLabel}</div>
    <div class="heatmap-card"><table class="hm-table">
      <thead><tr><th class="row-lbl">CSM</th>${heatmapHeaders}</tr></thead>
      <tbody>
        ${heatmapRows}
        <tr style="background:#f8f9fc;font-weight:700"><td style="font-size:12px;font-weight:700">Day total</td>${totalRow}</tr>
      </tbody>
    </table></div>
    <div class="section-label">Health Distribution</div>
    <div class="health-dist"><div class="health-bar-wrap">
      <div class="health-bar-title">Pulse Notes by Signal (${md.pulses.length} total)</div>
      <div class="health-bar-row"><div class="health-bar-label">🟢 Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:${healthPct}%"></div></div><div class="health-bar-count">${healthyPulses}</div></div>
      <div class="health-bar-row"><div class="health-bar-label">🟡 Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:${concerningPct}%"></div></div><div class="health-bar-count">${concerningPulses}</div></div>
      <div class="health-bar-row"><div class="health-bar-label">🔴 Poor</div><div class="health-bar-track"><div class="health-bar-fill hf-red" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
    ${(()=>{ const arrFn = window['monthArrHTML_' + currentKey.replace('-','_')]; return arrFn ? arrFn() : ''; })()}
    </div>`;
  }

  // ── Static fallback (months without dayData_* functions) ──────
  return `
  <div class="section-label">April 2026 · Month-to-Date Summary</div>
  <div class="summary-cards">
    <div class="sum-card c-teal" onclick="jumpToTab('mcalls','all','all')"><div class="sum-val">24</div><div class="sum-lbl">Calls w/ Transcripts</div><div class="sum-sub">Apr 20–23 · 7 CSMs</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('mpulses','all','all')"><div class="sum-val">21</div><div class="sum-lbl">Pulse Notes</div><div class="sum-sub">18 Healthy · 3 Concerning</div></div>
    <div class="sum-card c-purple" onclick="jumpToTab('mcsm','all','all')"><div class="sum-val">7</div><div class="sum-lbl">CSMs w/ Activity</div><div class="sum-sub">of 8 on the team</div></div>
    <div class="sum-card c-amber" onclick="jumpToTab('mhealth','all','all')"><div class="sum-val">$826K</div><div class="sum-lbl">ARR w/ Pulse Coverage</div><div class="sum-sub">Quadient · Datadog · Intuit</div></div>
    <div class="sum-card c-red" onclick="jumpToTab('mpulses','all','Concerning')"><div class="sum-val">4</div><div class="sum-lbl">Open Risk Signals</div><div class="sum-sub">Datadog · Cisco · eHouse · DXC</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('mpulses','riley','Healthy')"><div class="sum-val">3</div><div class="sum-lbl">Pulse Upgrades</div><div class="sum-sub">Concerning → Healthy</div></div>
  </div>

  <div class="section-label">Top Accounts by Engagement</div>
  <div class="account-highlights">
    <div class="acct-card"><div class="acct-name">Quadient Software</div><div class="acct-csm">CSM: Divyam Dewan · $320K ARR</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">All H</div><div class="l">Health</div></div></div><div class="acct-note">Most pulse coverage this month. IDL Germany + DACH pilots launched. Review campaigns targeting May Top Rated across 3 products.</div></div>
    <div class="acct-card"><div class="acct-name">Rani Guy's Portfolio</div><div class="acct-csm">CSM: Rani Guy · Workday · Lenovo · Elastic · Cloudflare</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">All H</div><div class="l">Health</div></div></div><div class="acct-note">4 calls in a single day (Apr 22) — QBR prep, renewal, and expansion coverage across all four accounts. All healthy.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">Datadog</div><div class="acct-csm">CSM: Varun Tiwari · $329K ARR</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#d97706">Split</div><div class="l">Signal</div></div></div><div class="acct-note">Highest call volume this month across Datadog, DXC, and Zendesk. Cloud Dynamics data trust concern unresolved — SE follow-up required.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">Cisco</div><div class="acct-csm">CSM: Pam Huck</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">1</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#d97706">⚠️</div><div class="l">Signal</div></div></div><div class="acct-note">QBR prep call flagged Concerning — budget scrutiny and stakeholder changes noted. Follow-up action plan required before next executive touchpoint.</div></div>
  </div>

  <div class="section-label">Weekly Call Activity — April 2026</div>
  <div class="heatmap-card">
    <table class="hm-table">
      <thead><tr><th class="row-lbl">CSM</th><th>Apr 1–5<br><span style="font-size:10px;color:#9ca3af;font-weight:400">(Wk 14)</span></th><th>Apr 6–12<br><span style="font-size:10px;color:#9ca3af;font-weight:400">(Wk 15)</span></th><th>Apr 13–19<br><span style="font-size:10px;color:#9ca3af;font-weight:400">(Wk 16)</span></th><th>Apr 20–26<br><span style="font-size:10px;color:#9ca3af;font-weight:400">(Wk 17, MTD)</span></th></tr></thead>
      <tbody>
        <tr class="hm-csm-row" data-csm="varun"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Varun Tiwari</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">6</td></tr>
        <tr class="hm-csm-row" data-csm="pam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Pam Huck</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">6</td></tr>
        <tr class="hm-csm-row" data-csm="rani"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Rani Guy</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">5</td></tr>
        <tr class="hm-csm-row" data-csm="divyam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Divyam Dewan</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">3</td></tr>
        <tr class="hm-csm-row" data-csm="nick"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Nick Johnson</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td></tr>
        <tr class="hm-csm-row" data-csm="riley"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Riley Rogers</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td></tr>
        <tr class="hm-csm-row" data-csm="atisha"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Atisha Waghela</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td></tr>
        <tr class="hm-csm-row" data-csm="andy"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Andy Lim</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr style="background:#f8f9fc;font-weight:700"><td style="font-size:12px;font-weight:700">Week total</td><td class="hm-cell hm-0">0</td><td class="hm-cell hm-0">0</td><td class="hm-cell hm-0">0</td><td class="hm-cell hm-3">24</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section-label">Monthly Health Distribution</div>
  <div class="health-dist">
    <div class="health-bar-wrap">
      <div class="health-bar-title">Pulse Notes by Signal (21 total)</div>
      <div class="health-bar-row"><div class="health-bar-label">🟢 Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:86%"></div></div><div class="health-bar-count">18</div></div>
      <div class="health-bar-row"><div class="health-bar-label">🟡 Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:14%"></div></div><div class="health-bar-count">3</div></div>
      <div class="health-bar-row"><div class="health-bar-label">🔴 Poor</div><div class="health-bar-track"><div class="health-bar-fill hf-red" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
    <div class="health-bar-wrap">
      <div class="health-bar-title">ARR Coverage by Signal — all 21 pulses itemized</div>
      <div class="health-bar-row"><div class="health-bar-label">🟢 Healthy (18)</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:70%"></div></div><div class="health-bar-count" style="width:50px">$576K*</div></div>
      <div style="margin:4px 0 10px 24px;padding:8px 12px;background:#f0fdf4;border-left:3px solid #059669;border-radius:4px;font-size:11px;color:#374151;line-height:1.7">
        • Intuit CVP x2 · <strong>$76,590</strong><br>
        • Intuit Enterprise Suite · <strong>$50,000</strong><br>
        • Intuit CVP x2 (Written) · <strong>$50,000</strong><br>
        • Datadog TR Lead Accel · <strong>$78,800</strong><br>
        • Quadient Marketing Leadership · <strong>$180,000</strong><br>
        • Quadient IDL Co-sell · <strong>$120,000</strong><br>
        • Quadient Germany IDL · <strong>$10,000</strong><br>
        • Quadient DACH IDL · <strong>$10,000</strong><br>
        • Microsoft — GTM alignment healthy · <em style="color:#9ca3af">account-level ARR</em><br>
        • Workday — Project Phoenix on track · <em style="color:#9ca3af">account-level ARR</em><br>
        • Lenovo — QBR positive · <em style="color:#9ca3af">account-level ARR</em><br>
        • Elastic — renewal engaged · <em style="color:#9ca3af">account-level ARR</em><br>
        • Cloudflare — expansion scoped · <em style="color:#9ca3af">account-level ARR</em><br>
        • DXC Technology — intent aligned · <em style="color:#9ca3af">account-level ARR</em><br>
        • Zendesk — health check clear · <em style="color:#9ca3af">account-level ARR</em><br>
        • Epicor Kinetic — Healthy · <em style="color:#9ca3af">account-level ARR</em><br>
        • Epicor Eclipse — Healthy · <em style="color:#9ca3af">account-level ARR</em><br>
        • HCL Software — usage strong · <em style="color:#9ca3af">account-level ARR</em>
      </div>
      <div class="health-bar-row"><div class="health-bar-label">🟡 Concerning (3)</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:30%"></div></div><div class="health-bar-count" style="width:50px">$250K*</div></div>
      <div style="margin:4px 0 10px 24px;padding:8px 12px;background:#fffbeb;border-left:3px solid #d97706;border-radius:4px;font-size:11px;color:#374151;line-height:1.7">
        • Datadog Cloud Dynamics + Universe 150 · <strong>$250,000</strong><br>
        • Cisco — QBR Prep · Budget scrutiny + stakeholder change · <em style="color:#9ca3af">account-level ARR</em><br>
        • eHouse Studio — Atisha Waghela · No call logged · <em style="color:#9ca3af">account-level ARR</em>
      </div>
      <div style="margin-top:8px;font-size:10px;color:#9ca3af;font-style:italic">* Bar widths reflect the $826K in itemized opp-level ARR (8 Healthy + 1 Concerning opps). Remaining 10 Healthy and 2 Concerning pulses are tracked at account level — their ARR isn't included in the $826K.</div>
    </div>
  </div>`;
}

function monthCSMHTML() {
  const md = getMonthData(currentKey);
  const monthLabel = isoToDate(currentKey+'-01').toLocaleDateString('en-US',{month:'long',year:'numeric'});

  if (md.hasData) {
    // Tally per-CSM
    const stats = {};
    CSM_ORDER.forEach(id => { stats[id] = { calls:0, pulses:0, concerning:0, accounts:new Set() }; });
    md.calls.forEach(c => {
      if (!stats[c.csm]) stats[c.csm] = { calls:0, pulses:0, concerning:0, accounts:new Set() };
      stats[c.csm].calls++;
      stats[c.csm].accounts.add(c.account);
    });
    md.pulses.forEach(p => {
      if (!stats[p.csm]) stats[p.csm] = { calls:0, pulses:0, concerning:0, accounts:new Set() };
      stats[p.csm].pulses++;
      if (p.health === 'Concerning') stats[p.csm].concerning++;
    });

    const totalCalls      = md.calls.length;
    const totalPulses     = md.pulses.length;
    const totalConcerning = md.pulses.filter(p => p.health === 'Concerning').length;
    const totalAccounts   = Object.values(CSM_DISPLAY).reduce((s,d) => s+(d.accounts||0), 0);
    const totalOpps       = Object.values(CSM_DISPLAY).reduce((s,d) => s+(d.opps||0), 0);

    const sorted = [...CSM_ORDER].sort((a,b) => (stats[b]?.calls||0) - (stats[a]?.calls||0));

    const totalRow = `<div class="csm-row csm-total" data-csm="all"><div class="avatar">Σ</div><div style="flex:1"><div class="csm-row-name">Total — All CSMs</div><div class="csm-row-sub">8 Enterprise CSMs · ${totalAccounts} accounts · $47.3M ARR</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">${totalCalls}</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">${totalPulses}</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">${totalConcerning}</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">${totalAccounts}</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">${totalOpps}</div><div class="l">Opps</div></div></div></div>`;

    const csmRows = sorted.map(id => {
      const csm = CSM_DISPLAY[id];
      const s   = stats[id] || { calls:0, pulses:0, concerning:0, accounts:new Set() };
      const cls = s.calls === 0 && s.pulses === 0 ? ' inactive' : '';
      const accountList = [...s.accounts].join(' · ') || 'No calls logged this month';
      return `<div class="csm-row${cls}" data-csm="${id}"><div class="avatar ${csm.cls}">${csm.initials}</div><div style="flex:1"><div class="csm-row-name">${csm.name}</div><div class="csm-row-sub">${accountList}</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ${s.calls>0?'ct':'cgr'}">${s.calls}</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:${s.concerning?'#d97706':'#059669'}">${s.pulses}</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:${s.concerning?'#d97706':'#6b7280'}">${s.concerning||0}</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">${csm.accounts}</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">${csm.opps}</div><div class="l">Opps</div></div></div></div>`;
    }).join('');

    return `<div class="section-label">CSM Engagement — ${monthLabel}</div>
    <div class="csm-leaderboard">${totalRow}${csmRows}</div>`;
  }

  // ── Static fallback ────────────────────────────────────────────
  return `<div class="section-label">CSM Engagement — April 2026</div>
  <div class="csm-leaderboard">
    <div class="csm-row csm-total" data-csm="all"><div class="avatar">Σ</div><div style="flex:1"><div class="csm-row-name">Total — All CSMs</div><div class="csm-row-sub">8 Enterprise CSMs · 120 accounts · $47.3M ARR</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">24</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">21</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">3</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">120</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">240</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="varun"><div class="avatar av-varun">VT</div><div style="flex:1"><div class="csm-row-name">Varun Tiwari <span style="font-size:11px;color:#d97706;font-weight:600">Action Needed</span></div><div class="csm-row-sub">Datadog · DXC · Zendesk · Autodesk — Cloud Dynamics data trust follow-up outstanding</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">6</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">26</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="pam"><div class="avatar av-grey">PH</div><div style="flex:1"><div class="csm-row-name">Pam Huck <span style="font-size:11px;color:#d97706;font-weight:600">Action Needed</span></div><div class="csm-row-sub">Cisco · Microsoft · Epicor Kinetic · Epicor Eclipse — Cisco Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">6</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">7</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">17</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="rani"><div class="avatar av-grey">RG</div><div style="flex:1"><div class="csm-row-name">Rani Guy <span style="font-size:11px;color:#059669;font-weight:600">Strong Week</span></div><div class="csm-row-sub">Workday · Lenovo · Elastic · Cloudflare — 4 calls Apr 22 + Cloudflare sync Apr 23</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">5</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">27</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="divyam"><div class="avatar av-divyam">DD</div><div style="flex:1"><div class="csm-row-name">Divyam Dewan <span style="font-size:11px;color:#0ea5a0;font-weight:600">Most Pulses</span></div><div class="csm-row-sub">Thomson Reuters · Quadient · Dynatrace — IDL + review campaigns + datafeed upsell</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">3</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">28</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="riley"><div class="avatar av-riley">RR</div><div style="flex:1"><div class="csm-row-name">Riley Rogers <span style="font-size:11px;color:#059669;font-weight:600">Pulse Upgrades</span></div><div class="csm-row-sub">Intuit Mailchimp · 3 opps upgraded Concerning→Healthy · champion re-engaged</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">3</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">6</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">59</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="nick"><div class="avatar av-grey">NJ</div><div style="flex:1"><div class="csm-row-name">Nick Johnson</div><div class="csm-row-sub">HCL Software · NTT Data — usage deep-dive + POC scoping · 27 accounts in portfolio</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">27</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">43</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="atisha"><div class="avatar av-grey">AW</div><div style="flex:1"><div class="csm-row-name">Atisha Waghela <span style="font-size:11px;color:#d97706;font-weight:600">Active</span></div><div class="csm-row-sub">Strada · Palo Alto · TD Synnex · Salesforce ASEAN · Apple — 6 calls Apr 23–24; Palo Alto renewal pending May 3</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">6</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">18</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">22</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row inactive" data-csm="andy"><div class="avatar av-grey">AL</div><div style="flex:1"><div class="csm-row-name">Andy Lim</div><div class="csm-row-sub">No activity logged in April</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">13</div><div class="l">Opps</div></div></div></div>
  </div>`;
}

function monthHealthHTML() {
  const md = getMonthData(currentKey);
  const monthLabel = isoToDate(currentKey+'-01').toLocaleDateString('en-US',{month:'long',year:'numeric'});

  if (md.hasData) {
    const healthy    = md.pulses.filter(p => p.health === 'Healthy');
    const concerning = md.pulses.filter(p => p.health === 'Concerning');
    const fmt = arr => arr.map(p => {
      const csm = CSM_DISPLAY[p.csm] || { name: p.csm };
      return `• <strong>${p.account}</strong> (${csm.name}) — ${p.note}`;
    }).join('<br>') || '—';

    // Optional editorial action items from monthEditorial_YYYY_MM()
    const editFn = window['monthEditorial_' + currentKey.replace('-','_')];
    const editorial = editFn ? editFn() : '';

    return `<div class="section-label">Pulse Health Deep Dive — ${monthLabel}</div>
    <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px;margin-bottom:20px;">
      <div style="font-size:13px;font-weight:600;margin-bottom:14px;">Pulse Notes This Month (${md.pulses.length})</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;">
        <div style="padding:12px;background:#f0fdf4;border-radius:8px;border-left:3px solid #059669">
          <div style="font-size:11px;font-weight:700;color:#059669;text-transform:uppercase;margin-bottom:4px">🟢 Healthy (${healthy.length})</div>
          <div style="font-size:12px;color:#374151;line-height:1.6">${fmt(healthy)}</div>
        </div>
        ${concerning.length > 0 ? `<div style="padding:12px;background:#fffbeb;border-radius:8px;border-left:3px solid #d97706">
          <div style="font-size:11px;font-weight:700;color:#d97706;text-transform:uppercase;margin-bottom:4px">🟡 Concerning (${concerning.length})</div>
          <div style="font-size:12px;color:#374151;line-height:1.6">${fmt(concerning)}</div>
        </div>` : ''}
      </div>
    </div>
    ${editorial}`;
  }

  // ── Static fallback ────────────────────────────────────────────
  return `<div class="section-label">Pulse Health Deep Dive — April 2026</div>
  <div style="background:#fff;border:1px solid #e5e7eb;border-radius:10px;padding:16px;margin-bottom:20px;">
    <div style="font-size:13px;font-weight:600;margin-bottom:14px;">Pulse Notes Created This Month (21)</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;">
      <div style="padding:12px;background:#f0fdf4;border-radius:8px;border-left:3px solid #059669"><div style="font-size:11px;font-weight:700;color:#059669;text-transform:uppercase;margin-bottom:4px">🟢 Healthy (18)</div><div style="font-size:12px;color:#374151;line-height:1.6">• Intuit CVP x2 · $76,590<br>• Intuit Enterprise Suite · $50,000<br>• Intuit CVP x2 (Written) · $50,000<br>• Datadog TR Lead Accel · $78,800<br>• Quadient Marketing Leadership · $180,000<br>• Quadient IDL Co-sell · $120,000<br>• Quadient Germany IDL · $10,000<br>• Quadient DACH IDL · $10,000<br>• Microsoft — GTM alignment healthy<br>• Workday — Project Phoenix on track<br>• Lenovo — QBR positive<br>• Elastic — renewal engaged<br>• Cloudflare — expansion scoped<br>• DXC Technology — intent aligned<br>• Zendesk — health check clear<br>• Epicor Kinetic — Healthy<br>• Epicor Eclipse — Healthy<br>• HCL Software — usage strong</div></div>
      <div style="padding:12px;background:#fffbeb;border-radius:8px;border-left:3px solid #d97706"><div style="font-size:11px;font-weight:700;color:#d97706;text-transform:uppercase;margin-bottom:4px">🟡 Concerning (3)</div><div style="font-size:12px;color:#374151;line-height:1.6">• Datadog Cloud Dynamics + Universe 150 · $250,000<br><span style="color:#9ca3af;font-size:11px">Data trust concerns. SE follow-up required within 5 business days.</span><br><br>• Cisco — QBR Prep · Budget scrutiny + stakeholder change<br><span style="color:#9ca3af;font-size:11px">Executive touchpoint action plan needed before next QBR.</span><br><br>• eHouse Studio — Atisha Waghela · No call logged<br><span style="color:#9ca3af;font-size:11px">Pulse flagged without corresponding call. Outreach recommended.</span></div></div>
    </div>
  </div>
  <div class="section-label">Open Action Items Carried Into May</div>
  <div class="action-list">
    <div class="action-item ${doneActions.has(1)?'done':''}"><div class="action-checkbox ${doneActions.has(1)?'checked':''}" onclick="toggleAction(1)"></div><div class="action-body"><div class="action-title">Datadog Cloud Dynamics — technical data accuracy follow-up</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Varun Tiwari · Originated Apr 21 · Loop in Solutions Engineering</div></div></div>
    <div class="action-item ${doneActions.has(3)?'done':''}"><div class="action-checkbox ${doneActions.has(3)?'checked':''}" onclick="toggleAction(3)"></div><div class="action-body"><div class="action-title">Quadient — UTM/trackable links + review cut-offs before May Top Rated</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Divyam Dewan · Originated Apr 22 · Deadline: May Top Rated window</div></div></div>
    <div class="action-item"><div class="action-checkbox" onclick="this.classList.toggle('checked');this.closest('.action-item').classList.toggle('done')"></div><div class="action-body"><div class="action-title">Cisco — QBR prep action plan · address budget scrutiny and stakeholder changes</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Pam Huck · Originated Apr 20 · Prepare before next executive touchpoint</div></div></div>
    <div class="action-item"><div class="action-checkbox" onclick="this.classList.toggle('checked');this.closest('.action-item').classList.toggle('done')"></div><div class="action-body"><div class="action-title">eHouse Studio — outreach to account · no call logged despite Concerning pulse</div><div class="action-meta"><span class="urgency-badge urgency-med">MED</span>Atisha Waghela · Schedule discovery call this week</div></div></div>
  </div>`;
}

// ═══════════════════════════════════════════════════════════════
// APRIL 2026 — ARR BY PULSE SIGNAL
// monthArrHTML_2026_04() is injected into the dynamic monthly
// summary view by the monthArrHTML_* hook in monthSummaryHTML().
// Itemized opp-level ARR drawn from Apr 21 pulse cards (the only
// day with structured per-opp ARR amounts); all other April pulses
// are tracked at account level.
// ═══════════════════════════════════════════════════════════════
function monthArrHTML_2026_04() {
  return `<div class="health-bar-wrap">
    <div class="health-bar-title">ARR Coverage by Pulse Signal — April 2026</div>
    <div class="health-bar-row"><div class="health-bar-label">🟢 Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:70%"></div></div><div class="health-bar-count" style="width:50px">$576K*</div></div>
    <div style="margin:4px 0 10px 24px;padding:8px 12px;background:#f0fdf4;border-left:3px solid #059669;border-radius:4px;font-size:11px;color:#374151;line-height:1.7">
      <strong>Opp-level ARR (itemized)</strong><br>
      • Intuit CVP x2 · <strong>$76,590</strong><br>
      • Intuit Enterprise Suite · <strong>$50,000</strong><br>
      • Intuit CVP x2 (Written) · <strong>$50,000</strong><br>
      • Datadog TR Lead Accel · <strong>$78,800</strong><br>
      • Quadient Marketing Leadership · <strong>$180,000</strong><br>
      • Quadient IDL Co-sell · <strong>$120,000</strong><br>
      • Quadient Germany IDL · <strong>$10,000</strong><br>
      • Quadient DACH IDL · <strong>$10,000</strong><br>
      <em style="color:#9ca3af">Subtotal: $575,390</em><br><br>
      <strong>Account-level ARR (pulses without opp-level $)</strong><br>
      • Microsoft · Workday · ServiceNow · Equinix · Epicor (x3) · SAP Inc<br>
      • HCL SW · DXC Technology · Zendesk · Salesforce ASEAN · Lumen Technologies<br>
      • Intuit (handover) · Lenovo · Elastic · Cloudflare · BMC Software (x2)<br>
      • NTT Data · Infor · TD Synnex · Siemens AG · Red Hat · Accenture<br>
      • Veeam · Insight Direct · FactSet · Check Point · zScaler · Cvent<br>
      • OpenAI · Autodesk · Digital Realty · Palo Alto Networks · Apple · Intel
    </div>
    <div class="health-bar-row"><div class="health-bar-label">🟡 Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:30%"></div></div><div class="health-bar-count" style="width:50px">$250K*</div></div>
    <div style="margin:4px 0 10px 24px;padding:8px 12px;background:#fffbeb;border-left:3px solid #d97706;border-radius:4px;font-size:11px;color:#374151;line-height:1.7">
      • Datadog Cloud Dynamics + Universe 150 · <strong>$250,000</strong><br>
      <span style="color:#9ca3af">Data trust concerns. SE follow-up required.</span><br><br>
      • Cisco (CVP/Media + Splunk/IDL) — budget risk · renewal May 15<br>
      • TD Synnex — poor health post Dec 2025 RFP loss · IBM agent re-engagement<br>
      • NetApp — no exec sponsor confirmed · spend model accuracy disputes<br>
      • Korcomptenz — HubSpot connector; first documented call Apr 2026<br>
      • eHouse Studio — no call logged; Mitch Gilroy repeatedly declining<br>
      • Deloitte — vendor consolidation push; direct CSM re-engagement needed<br>
      <span style="color:#9ca3af;font-size:10px">Account-level ARR for Cisco, TD Synnex, NetApp, Korcomptenz, eHouse, Deloitte not itemized here.</span>
    </div>
    <div style="margin-top:8px;font-size:10px;color:#9ca3af;font-style:italic">* Bar widths reflect the $826K in itemized opp-level ARR (8 healthy opps, 1 concerning opp). Account-level pulses cover an additional ~35 accounts whose ARR is tracked in Vitally but not broken out here.</div>
  </div>`;
}


// ═══════════════════════════════════════════════════════════════
// WEEK 18 — Apr 27–May 3, 2026
// ═══════════════════════════════════════════════════════════════

function weekSummaryHTML_2026_W18() {
  return `
  <div class="section-label">Week of Apr 27&ndash;May 3, 2026 &middot; Overview</div>
  <div class="summary-cards">
    <div class="sum-card c-teal" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">36</div><div class="sum-lbl">Calls w/ Transcripts</div><div class="sum-sub">28 accounts &middot; Mon&ndash;Fri</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('wpulses','all','all')"><div class="sum-val">27</div><div class="sum-lbl">Pulse Notes Created</div><div class="sum-sub">20 Healthy &middot; 7 Concerning</div></div>
    <div class="sum-card c-purple" onclick="jumpToTab('wcsm','all','all')"><div class="sum-val">8</div><div class="sum-lbl">Active CSMs</div><div class="sum-sub">All 8 on the team</div></div>
    <div class="sum-card c-amber" onclick="jumpToTab('wpulses','all','Concerning')"><div class="sum-val">7</div><div class="sum-lbl">Concerning Signals</div><div class="sum-sub">Cisco &middot; NetApp &middot; TD Synnex &middot; +4</div></div>
    <div class="sum-card c-red" onclick="jumpToTab('wpulses','pam','Concerning')"><div class="sum-val">1</div><div class="sum-lbl">Renewal Deadline</div><div class="sum-sub">Cisco CVP &mdash; May 15</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('wcalls','nick','all')"><div class="sum-val">10</div><div class="sum-lbl">Nick Johnson Calls</div><div class="sum-sub">Most active CSM this week</div></div>
    <div class="sum-card c-blue" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">4</div><div class="sum-lbl">Expansion Signals</div><div class="sum-sub">Workday &middot; Elastic TAM &middot; Cloudflare &middot; HCLSoftware</div></div>
  </div>

  <div class="section-label">Active Accounts This Week</div>
  <div class="account-highlights">
    <div class="acct-card ac-amber"><div class="acct-name">Cisco</div><div class="acct-csm">CSM: Pam Huck</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">2</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#ef4444">!</div><div class="l">May 15</div></div></div><div class="acct-note">CVP Media renewal May 15 &mdash; Cisco AI Board approval still required. Splunk/IDL quarterly has no committed budget. Rani Guy covered May 1 cadence call (Healthy signal).</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">TD Synnex</div><div class="acct-csm">CSM: Atisha Waghela</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#7c3aed">IBM</div><div class="l">Re-engage</div></div></div><div class="acct-note">Poor health post Dec 2025 RFP loss. IBM agent re-engagement strategy discussed Apr 28. Apr 27 call was strategy sync with Lisa &mdash; Healthy. Apr 28 went Concerning after IBM path review.</div></div>
    <div class="acct-card"><div class="acct-name">Red Hat</div><div class="acct-csm">CSM: Nick Johnson</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">2</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">V2</div><div class="l">Done</div></div></div><div class="acct-note">V2 migration completed Apr 28 &mdash; spend roll-ups running. IBM renewal PO pending (Mar delivery). May 1: AI agents roadmap &amp; IBM time series POC reviewed. PO still in-flight; delivery cadence paused.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">NetApp</div><div class="acct-csm">CSM: Rani Guy</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#d97706">&#x26a0;</div><div class="l">Exec TBD</div></div></div><div class="acct-note">Apr 27: HG Insights Connect kickoff &mdash; initial Healthy signal. Apr 28: No confirmed exec sponsor; spend model disputes unresolved &mdash; shifted Concerning. Rani escalating.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">Hitachi Vantara</div><div class="acct-csm">CSM: Rani Guy</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#7c3aed">QBR</div><div class="l">May 13</div></div></div><div class="acct-note">May 1: QBR scheduled May 13 with Anders + Miguel. Renewal consolidation (intent Sep 28 + install Oct 22 into single contract). Phoenix/MCP expansion positioned. V3 intent migration in progress.</div></div>
    <div class="acct-card"><div class="acct-name">Nick&apos;s Portfolio</div><div class="acct-csm">Infor &middot; NTT Data &middot; Siemens &middot; Accenture &middot; +5</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">10</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">8</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">&#x2191;</div><div class="l">Active</div></div></div><div class="acct-note">Busiest CSM this week. Red Hat V2 complete, Siemens MCP expansion ($50K opp active), Accenture/Veeam/Check Point cadences maintained. Korcomptenz first call &mdash; setup Concerning.</div></div>
  </div>

  <div class="section-label">Daily Call Activity &mdash; Week of Apr 27&ndash;May 3</div>
  <div class="heatmap-card">
    <table class="hm-table">
      <thead><tr><th class="row-lbl">CSM</th><th>Mon Apr 27</th><th>Tue Apr 28</th><th>Wed Apr 29</th><th>Thu Apr 30</th><th>Fri May 1</th><th>Sat May 2</th><th>Sun May 3</th></tr></thead>
      <tbody>
        <tr class="hm-csm-row" data-csm="nick"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Nick Johnson</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="atisha"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Atisha Waghela</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-3">4</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="riley"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Riley Rogers</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="rani"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Rani Guy</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="varun"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Varun Tiwari</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="pam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Pam Huck</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="andy"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Andy Lim</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="divyam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Divyam Dewan</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section-label">Pulse Health Distribution</div>
  <div class="health-dist">
    <div class="health-bar-wrap">
      <div class="health-bar-title">All Pulses Created This Week (27)</div>
      <div class="health-bar-row"><div class="health-bar-label">&#128994; Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:74%"></div></div><div class="health-bar-count">20</div></div>
      <div class="health-bar-row"><div class="health-bar-label">&#128993; Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:26%"></div></div><div class="health-bar-count">7</div></div>
      <div class="health-bar-row"><div class="health-bar-label">&#128308; Poor</div><div class="health-bar-track"><div class="health-bar-fill hf-red" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
    <div class="health-bar-wrap">
      <div class="health-bar-title">Calls by Day</div>
      <div class="health-bar-row"><div class="health-bar-label">Mon Apr 27</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:58%"></div></div><div class="health-bar-count">7</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Tue Apr 28</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:58%"></div></div><div class="health-bar-count">7</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Wed Apr 29</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:100%"></div></div><div class="health-bar-count">12</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Thu Apr 30</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:58%"></div></div><div class="health-bar-count">7</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Fri May 1</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:25%"></div></div><div class="health-bar-count">3</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Sat May 2</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Sun May 3</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
  </div>`;
}

function weekCSMHTML_2026_W18() {
  return `<div class="section-label">CSM Contributions &mdash; Week of Apr 27&ndash;May 3</div>
  <div class="csm-leaderboard">
    <div class="csm-row csm-total" data-csm="all"><div class="avatar">&Sigma;</div><div style="flex:1"><div class="csm-row-name">Total &mdash; All CSMs</div><div class="csm-row-sub">8 Enterprise CSMs &middot; 120 accounts &middot; $47.3M ARR</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">36</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">27</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">7</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">120</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">240</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="nick"><div class="avatar av-grey">NJ</div><div style="flex:1"><div class="csm-row-name">Nick Johnson</div><div class="csm-row-sub">Infor &middot; NTT Data &middot; Siemens AG &middot; Korcomptenz &middot; Red Hat &middot; Accenture &middot; Veeam &middot; Check Point &middot; SAP Inc &mdash; 1 Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">10</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">8</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">27</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">43</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="atisha"><div class="avatar av-grey">AW</div><div style="flex:1"><div class="csm-row-name">Atisha Waghela</div><div class="csm-row-sub">TD Synnex &middot; Intel &middot; Insight Direct &middot; Deloitte &middot; Digital Realty &middot; Equinix &mdash; 2 Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">7</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">6</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">2</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">18</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">22</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="rani"><div class="avatar av-grey">RG</div><div style="flex:1"><div class="csm-row-name">Rani Guy</div><div class="csm-row-sub">NetApp (x2) &middot; Workday &middot; Cisco (x-cov) &middot; Hitachi Vantara &mdash; 2 Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">5</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">2</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">27</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="riley"><div class="avatar av-riley">RR</div><div style="flex:1"><div class="csm-row-name">Riley Rogers</div><div class="csm-row-sub">BMC Software (EBR walkthrough) &middot; Intuit TR sync &middot; Red Hat + SAP SF cross-coverage for Nick</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">6</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">59</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="varun"><div class="avatar av-varun">VT</div><div style="flex:1"><div class="csm-row-name">Varun Tiwari</div><div class="csm-row-sub">BMC Software FY27 plan &middot; zScaler &middot; Autodesk &middot; ServiceNow TAM model (May 27 deadline)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">3</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">26</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="pam"><div class="avatar av-grey">PH</div><div style="flex:1"><div class="csm-row-name">Pam Huck</div><div class="csm-row-sub">Cisco CVP renewal May 15 &middot; Cisco Splunk/IDL budget risk &middot; Epicor Insights conference prep</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">3</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">3</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">2</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">7</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">17</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="andy"><div class="avatar av-grey">AL</div><div style="flex:1"><div class="csm-row-name">Andy Lim</div><div class="csm-row-sub">FactSet renewal engagement &middot; Cvent 30-day extension &mdash; both Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">2</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">13</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="divyam"><div class="avatar av-divyam">DD</div><div style="flex:1"><div class="csm-row-name">Divyam Dewan</div><div class="csm-row-sub">OpenAI active engagement &mdash; Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">28</div><div class="l">Opps</div></div></div></div>
  </div>`;
}

function weekCallsHTML_2026_W18() {
  return `<div class="table-card"><table>
    <thead><tr><th>Day</th><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Min</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">Apr 27 &middot; 1:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Infor</strong> <span style="font-size:11px;color:#9ca3af">Data ingestion session</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">Apr 27 &middot; 1:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>TD Synnex</strong> <span style="font-size:11px;color:#9ca3af">Lisa &amp; HGI strategy sync</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">Apr 27 &middot; 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>BMC Software</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius EBR walkthrough</span></td><td>60</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">Apr 27 &middot; 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>NTT Data</strong> <span style="font-size:11px;color:#9ca3af">Monthly session</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">Apr 27 &middot; 4:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>BMC Software</strong> <span style="font-size:11px;color:#9ca3af">HG Insights FY27 plan</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">Apr 27 &middot; 5:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>Intuit</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius sync</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">Apr 27 &middot; 8:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>NetApp</strong> <span style="font-size:11px;color:#9ca3af">HG Insights Connect kickoff</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="pam" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">Apr 28 &middot; 7:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">CVP Media renewal &middot; May 15 deadline</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">Apr 28 &middot; 7:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Siemens AG</strong> <span style="font-size:11px;color:#9ca3af">Time series execution &middot; MCP expansion</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">Apr 28 &middot; 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Korcomptenz</strong> <span style="font-size:11px;color:#9ca3af">HubSpot connector &amp; scoring setup</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="rani" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">Apr 28 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>NetApp</strong> <span style="font-size:11px;color:#9ca3af">HG Insights sync &middot; exec sponsor TBD</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">Apr 28 &middot; 10:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Red Hat</strong> <span style="font-size:11px;color:#9ca3af">Spend roll-ups &middot; V2 migration complete</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="pam" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">Apr 28 &middot; 12:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">Splunk/IDL renewal &middot; budget risk</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="atisha" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">Apr 28 &middot; 1:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>TD Synnex</strong> <span style="font-size:11px;color:#9ca3af">HGI strategy &middot; IBM agent re-engage</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 7:05 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Intel</strong> <span style="font-size:11px;color:#9ca3af">Intel-side participants &middot; pulse from recording</span></td><td>25</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Accenture</strong> <span style="font-size:11px;color:#9ca3af">Regular cadence maintained</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 12:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Veeam</strong> <span style="font-size:11px;color:#9ca3af">Active engagement &middot; product value</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 12:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Insight Direct</strong> <span style="font-size:11px;color:#9ca3af">RGIF pricing ~$40K &middot; cross-cov Augie</span></td><td>15</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="andy" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AL</div>Andy Lim</div></td><td><strong>FactSet</strong> <span style="font-size:11px;color:#9ca3af">Renewal engagement &middot; AE-covered</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Deloitte</strong> <span style="font-size:11px;color:#9ca3af">Vendor consolidation risk</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Check Point</strong> <span style="font-size:11px;color:#9ca3af">Renewal tracking in progress</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 4:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>zScaler</strong> <span style="font-size:11px;color:#9ca3af">Renewal tracking &middot; active usage</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="andy" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 6:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AL</div>Andy Lim</div></td><td><strong>Cvent</strong> <span style="font-size:11px;color:#9ca3af">30-day extension granted</span></td><td>15</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 6:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>OpenAI</strong> <span style="font-size:11px;color:#9ca3af">Active account engagement</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 7:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Autodesk</strong> <span style="font-size:11px;color:#9ca3af">Account health stable</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">Apr 29 &middot; 7:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Digital Realty</strong> <span style="font-size:11px;color:#9ca3af">Direct CSM engagement</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">Apr 30 &middot; 6:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Equinix</strong> <span style="font-size:11px;color:#9ca3af">APAC competitive intel request</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">Apr 30 &middot; 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>SAP Inc</strong> <span style="font-size:11px;color:#9ca3af">Partner program &middot; Jake Eisbart new role</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">Apr 30 &middot; 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>ServiceNow</strong> <span style="font-size:11px;color:#9ca3af">TAM model &middot; May 27 data deadline</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="pam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">Apr 30 &middot; 4:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Epicor</strong> <span style="font-size:11px;color:#9ca3af">2 intent SQLs &middot; Insights conf prep</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">Apr 30 &middot; 5:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers <span style="font-size:11px">(X-cov for NJ)</span></div></td><td><strong>Red Hat</strong> <span style="font-size:11px;color:#9ca3af">Cross-coverage call</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">Apr 30 &middot; 5:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Workday</strong> <span style="font-size:11px;color:#9ca3af">Databricks delivery &middot; MCP agentic workflow</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">Apr 30 &middot; 6:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers <span style="font-size:11px">(X-cov for NJ)</span></div></td><td><strong>SAP SuccessFactors</strong> <span style="font-size:11px;color:#9ca3af">Cross-coverage</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 1 &middot; 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Red Hat</strong> <span style="font-size:11px;color:#9ca3af">AI agents roadmap &middot; IBM time series POC</span></td><td>60</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 1 &middot; 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy <span style="font-size:11px">(X-cov for PH)</span></div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">Install base + intent &middot; time series demo</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 1 &middot; 4:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Hitachi Vantara</strong> <span style="font-size:11px;color:#9ca3af">QBR May 13 &middot; renewal timelines</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
    </tbody>
  </table></div>
  <div style="background:#eff6ff;border:1px solid #bfdbfe;border-left:3px solid #3b82f6;border-radius:6px;padding:10px 14px;margin:10px 0;font-size:12px;color:#1e40af;">
    &#x2139;&#xfe0f; <strong>Note:</strong> Mon Apr 27 had 7 calls captured but 0 pulses logged (Monday scans often log pulses retroactively). &nbsp;|&nbsp; <strong>3 cross-coverage calls:</strong> Riley &rarr; Red Hat &amp; SAP SF for Nick (Apr 30); Rani &rarr; Cisco for Pam (May 1). &nbsp;|&nbsp; <strong>2 pending transcripts:</strong> Palo Alto Networks &amp; SAP Build (Apr 30, still processing).
  </div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">&#128269;</div>No calls match these filters.</div>`;
}

function weekPulsesHTML_2026_W18() {
  const cards = [
    { csm:'pam',    health:'Concerning', account:'Cisco',           opp:'Apr 28 &middot; CVP Media renewal',         arr:'Enterprise &middot; Pam Huck',    excerpt:'CVP renewal deadline May 15. Cisco AI Board approval still required. No committed budget confirmed. Risk of churn without exec direction this week.' },
    { csm:'pam',    health:'Concerning', account:'Cisco',           opp:'Apr 28 &middot; Splunk/IDL renewal',         arr:'Enterprise &middot; Pam Huck',    excerpt:'Splunk/IDL quarterly renewal has no committed budget. Attribution unclear. Downgrade or loss risk without budget commitment.' },
    { csm:'rani',   health:'Concerning', account:'NetApp',          opp:'Apr 28 &middot; Exec sponsor TBD',           arr:'Enterprise &middot; Rani Guy',    excerpt:'No confirmed exec sponsor after Apr 28 sync. Spend model disputes unresolved. Rani escalating. Apr 27 kickoff was Healthy; Apr 28 shifted Concerning.' },
    { csm:'nick',   health:'Concerning', account:'Korcomptenz',     opp:'Apr 28 &middot; HubSpot connector setup',    arr:'Enterprise &middot; Nick Johnson', excerpt:'First documented Apr 2026 call. HubSpot connector and scoring setup in progress. Early engagement &mdash; no confirmed activation yet. Monitoring.' },
    { csm:'atisha', health:'Concerning', account:'TD Synnex',       opp:'Apr 28 &middot; IBM agent re-engagement',    arr:'Enterprise &middot; Atisha Waghela', excerpt:'Poor health since Dec 2025 RFP loss. IBM agent re-engagement strategy discussed. Apr 27 strategy sync was Healthy; Apr 28 IBM review went Concerning.' },
    { csm:'atisha', health:'Concerning', account:'Deloitte',        opp:'Apr 29 &middot; Vendor consolidation risk',  arr:'Enterprise &middot; Atisha Waghela', excerpt:'Vendor consolidation push in progress. Renewal outcome uncertain. Cross-covered by Atisha. Risk requires proactive executive outreach.' },
    { csm:'rani',   health:'Concerning', account:'Hitachi Vantara', opp:'May 1 &middot; QBR prep &middot; May 13',    arr:'Enterprise &middot; Rani Guy',    excerpt:'QBR May 13 with Anders + Miguel confirmed. Renewal consolidation: intent Sep 28 &amp; install Oct 22 into single contract. Phoenix/MCP expansion positioned. V3 intent migration in progress.' },
    { csm:'nick',   health:'Healthy',    account:'Red Hat',         opp:'Apr 28 &middot; V2 migration complete',      arr:'Enterprise &middot; Nick Johnson', excerpt:'V2 migration complete; IBM renewal PO pending from Mar delivery. May 1: AI agents roadmap &amp; IBM time series POC reviewed. PO still in-flight; delivery cadence paused.' },
    { csm:'nick',   health:'Healthy',    account:'Siemens AG',      opp:'Apr 28 &middot; MCP expansion opp',          arr:'Enterprise &middot; Nick Johnson', excerpt:'Time series session completed. MCP/Agent $50K expansion opportunity actively scoped. Strong executive engagement.' },
    { csm:'nick',   health:'Healthy',    account:'Accenture',       opp:'Apr 29 &middot; Regular cadence',            arr:'Enterprise &middot; Nick Johnson', excerpt:'Regular cadence maintained. Product engagement active. Renewal tracking steady.' },
    { csm:'nick',   health:'Healthy',    account:'Veeam',           opp:'Apr 29 &middot; Product value discussion',   arr:'Enterprise &middot; Nick Johnson', excerpt:'Active engagement. Product value discussion completed. Account health maintained.' },
    { csm:'nick',   health:'Healthy',    account:'Check Point',     opp:'Apr 29 &middot; Renewal tracking',           arr:'Enterprise &middot; Nick Johnson', excerpt:'Renewal tracking in progress. Ongoing account management. Platform onboarding from prior week continues.' },
    { csm:'nick',   health:'Healthy',    account:'SAP Inc',         opp:'Apr 30 &middot; Partner program',            arr:'Enterprise &middot; Nick Johnson', excerpt:'Partner program next steps with Jake Eisbart in new NA partner recruitment role. Pipeline development discussion underway.' },
    { csm:'varun',  health:'Healthy',    account:'zScaler',         opp:'Apr 29 &middot; Renewal tracking',           arr:'Enterprise &middot; Varun Tiwari',  excerpt:'Renewal tracking confirmed. Active usage discussion. Account health stable.' },
    { csm:'varun',  health:'Healthy',    account:'Autodesk',        opp:'Apr 29 &middot; Account health stable',      arr:'Enterprise &middot; Varun Tiwari',  excerpt:'Account health stable. Product engagement ongoing. Whitespace file delivery from prior week confirmed as received.' },
    { csm:'varun',  health:'Healthy',    account:'ServiceNow',      opp:'Apr 30 &middot; TAM model &middot; May 27',  arr:'Enterprise &middot; Varun Tiwari',  excerpt:'TAM model update for risk/security product focus. Historical data delivery requested by May 27 deadline. Coordinate with data team urgently.' },
    { csm:'atisha', health:'Healthy',    account:'Intel',           opp:'Apr 29 &middot; Intel-side recording',       arr:'Enterprise &middot; Atisha Waghela', excerpt:'Intel-side participants confirmed in recording. Pulse logged from Weflow transcript. Engagement maintained.' },
    { csm:'atisha', health:'Healthy',    account:'Insight Direct',  opp:'Apr 29 &middot; RGIF pricing ~$40K',         arr:'Enterprise &middot; Atisha Waghela', excerpt:'RGIF pricing at approximately $40K discussed. Cross-covered with Augie. Atisha to follow up on pricing confirmation.' },
    { csm:'atisha', health:'Healthy',    account:'Digital Realty',  opp:'Apr 29 &middot; CSM engagement',             arr:'Enterprise &middot; Atisha Waghela', excerpt:'Direct CSM engagement maintained. Account health stable.' },
    { csm:'atisha', health:'Healthy',    account:'Equinix',         opp:'Apr 30 &middot; APAC competitive intel',     arr:'Enterprise &middot; Atisha Waghela', excerpt:'APAC competitive intel request from Garrett &amp; Sharath. One-off data request being processed.' },
    { csm:'pam',    health:'Healthy',    account:'Epicor',          opp:'Apr 30 &middot; Insights conference prep',   arr:'Enterprise &middot; Pam Huck',    excerpt:'2 SQLs confirmed from intent campaign. Profile updates needed for P21, Eclipse, Kinetic before Insights conference. Booth logistics progressing.' },
    { csm:'rani',   health:'Healthy',    account:'Workday',         opp:'Apr 30 &middot; MCP agentic workflow',       arr:'Enterprise &middot; Rani Guy',    excerpt:'Databricks file delivery confirmed. MCP agentic workflow discussion with Kendall Stauffer &mdash; potential HG MCP integration in WD data science pipeline.' },
    { csm:'andy',   health:'Healthy',    account:'FactSet',         opp:'Apr 29 &middot; Renewal engagement',         arr:'Enterprise &middot; Andy Lim',    excerpt:'AE-covered renewal engagement. CSM follow-up needed to confirm direct touchpoint and next steps.' },
    { csm:'andy',   health:'Healthy',    account:'Cvent',           opp:'Apr 29 &middot; 30-day extension',           arr:'Enterprise &middot; Andy Lim',    excerpt:'30-day extension granted. Renewal decision still pending. Monitor closely.' },
    { csm:'divyam', health:'Healthy',    account:'OpenAI',          opp:'Apr 29 &middot; Active engagement',          arr:'Enterprise &middot; Divyam Dewan', excerpt:'Active account engagement. Product value ongoing.' },
    { csm:'nick',   health:'Healthy',    account:'Red Hat',         opp:'May 1 &middot; AI agents roadmap',           arr:'Enterprise &middot; Nick Johnson', excerpt:'IT spend hierarchy updates and wallet share taxonomy alignment. AI agents roadmap discussion &mdash; HG data integration into AI pipelines. IBM time series POC progress reviewed.' },
    { csm:'rani',   health:'Healthy',    account:'Cisco',           opp:'May 1 &middot; X-cov for Pam',               arr:'Enterprise &middot; Rani Guy (covering Pam Huck)', excerpt:'X-cov for Pam: install base + intent data for Cisco internal market prediction model. Buyer intent signal layering. Time series data demo. API access requirements reviewed.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':'badge-concerning';
  const bi = h => h==='Healthy'?'&#128994;':'&#128993;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top"><div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div><span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span></div>
      <div class="pulse-excerpt">${c.excerpt}</div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#128269;</div>No pulses match these filters.</div>`;
}


// ═══════════════════════════════════════════════════════════════
// WEEK 20 — May 11–15, 2026
// Mon/Tue: light (3 + 11 calls). Wed May 13: 12 calls. Thu May 14: 15 calls.
// Fri May 15: 6 Weflow calls (SFDC-only events excluded). Total W20: 47 Weflow calls.
// 7/8 CSMs active (Andy = 0). Weflow-confirmed calls only.
// ═══════════════════════════════════════════════════════════════

function weekSummaryHTML_2026_W20() {
  return `
  <div class="section-label">Week of May 11&ndash;15, 2026 &middot; Overview (W20)</div>
  <div class="summary-cards">
    <div class="sum-card c-teal" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">47</div><div class="sum-lbl">Weflow Calls</div><div class="sum-sub">Mon&ndash;Fri &middot; 13 accounts confirmed Fri</div></div>
    <div class="sum-card c-blue" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">47</div><div class="sum-lbl">Total Touchpoints</div><div class="sum-sub">Weflow-confirmed calls only</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('wpulses','all','all')"><div class="sum-val">42</div><div class="sum-lbl">Pulse Notes Created</div><div class="sum-sub">3 Healthy &middot; 4 Concerning W20</div></div>
    <div class="sum-card c-purple" onclick="jumpToTab('wcsm','all','all')"><div class="sum-val">7</div><div class="sum-lbl">Active CSMs</div><div class="sum-sub">Andy Lim = 0 calls all week</div></div>
    <div class="sum-card c-amber" onclick="jumpToTab('wpulses','all','Concerning')"><div class="sum-val">4</div><div class="sum-lbl">Concerning Signals</div><div class="sum-sub">BILL &middot; Hitachi &middot; Salesforce &middot; ZoomInfo</div></div>
    <div class="sum-card c-red"><div class="sum-val">1</div><div class="sum-lbl">Churn-Risk Departure</div><div class="sum-sub">BILL Operations &mdash; Jeremiah Clark out</div></div>
    <div class="sum-card c-blue" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">5</div><div class="sum-lbl">Expansion Signals</div><div class="sum-sub">HCLSoftware &middot; Zendesk &middot; Dynatrace &middot; +2</div></div>
  </div>

  <div class="section-label">Key Accounts This Week</div>
  <div class="account-highlights">
    <div class="acct-card ac-amber"><div class="acct-name">BILL Operations</div><div class="acct-csm">CSM: Divyam Dewan</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#ef4444">!</div><div class="l">Departure</div></div><div class="acct-stat"><div class="n" style="color:#d97706">&#x26A0;</div><div class="l">SF Down</div></div></div><div class="acct-note">Jeremiah Clark departing &mdash; key internal champion leaving the account. Salesforce integration currently disconnected. Divyam hosting Monday handover with Eric &amp; Kristen. High churn risk if handover is not executed cleanly.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">Hitachi Vantara</div><div class="acct-csm">CSM: Rani Guy</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#059669">EBR</div><div class="l">May 13</div></div></div><div class="acct-note">Strong EBR on May 13 (Healthy). May 15 call went Concerning: marketing strategy &amp; contact data concerns surfaced. Adrian Escobar present. Rani needs follow-up to resolve data quality issues before next QBR.</div></div>
    <div class="acct-card"><div class="acct-name">AWS</div><div class="acct-csm">CSM: Rani Guy</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">1</div><div class="l">Pulse</div></div><div class="acct-stat"><div class="n" style="color:#059669">&#x2714;</div><div class="l">Healthy</div></div></div><div class="acct-note">Two sessions on May 15: MES sync (7 AM, 45 min) and file review / cloud adoption metrics (9 AM). Both Healthy. Data deliverables confirmed and in progress.</div></div>
    <div class="acct-card"><div class="acct-name">Thu May 14 Block</div><div class="acct-csm">Nick (4) &middot; Divyam (3) &middot; Riley (2) &middot; Atisha (2)</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">15</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">15</div><div class="l">Pulses</div></div><div class="acct-stat"><div class="n" style="color:#059669">&#x2714;</div><div class="l">All Healthy</div></div></div><div class="acct-note">Busiest day of the week: 15 calls across 15 accounts. All 15 pulses Healthy. Nick led: Accenture renewal, IBM CDO strategy, Infor TAM, UKG automation. No Concerning signals on Thu.</div></div>
    <div class="acct-card"><div class="acct-name">Salesforce (Atisha)</div><div class="acct-csm">CSM: Atisha Waghela</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#9ca3af">MKD</div><div class="l">Blocker</div></div></div><div class="acct-note">May 13: MadKudu integration blocker surfaced in call (Concerning). Atisha to resolve friction with Salesforce ASEAN team. Technical integration dependency needs SE engagement.</div></div>
  </div>

  <div class="section-label">Daily Weflow Call Activity &mdash; Week of May 11&ndash;15</div>
  <div class="heatmap-card">
    <table class="hm-table">
      <thead><tr><th class="row-lbl">CSM</th><th>Mon May 11</th><th>Tue May 12</th><th>Wed May 13</th><th>Thu May 14</th><th>Fri May 15</th><th>Sat May 16</th><th>Sun May 17</th></tr></thead>
      <tbody>
        <tr class="hm-csm-row" data-csm="rani"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Rani Guy</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-3">4</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="nick"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Nick Johnson</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-3">4</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="atisha"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Atisha Waghela</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="divyam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Divyam Dewan</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="riley"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Riley Rogers</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="varun"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Varun Tiwari</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="pam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Pam Huck</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="andy"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Andy Lim</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section-label">Pulse Health Distribution</div>
  <div class="health-dist">
    <div class="health-bar-wrap">
      <div class="health-bar-title">All Pulses Created This Week (37)</div>
      <div class="health-bar-row"><div class="health-bar-label">&#128994; Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:89%"></div></div><div class="health-bar-count">33</div></div>
      <div class="health-bar-row"><div class="health-bar-label">&#128993; Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:11%"></div></div><div class="health-bar-count">4</div></div>
      <div class="health-bar-row"><div class="health-bar-label">&#128308; Poor</div><div class="health-bar-track"><div class="health-bar-fill hf-red" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
    <div class="health-bar-wrap">
      <div class="health-bar-title">Calls by Day (Weflow)</div>
      <div class="health-bar-row"><div class="health-bar-label">Mon May 11</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:20%"></div></div><div class="health-bar-count">3</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Tue May 12</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:73%"></div></div><div class="health-bar-count">11</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Wed May 13</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:80%"></div></div><div class="health-bar-count">12</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Thu May 14</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:100%"></div></div><div class="health-bar-count">15</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Fri May 15</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:40%"></div></div><div class="health-bar-count">6</div></div>
    </div>
  </div>`;
}

function weekCSMHTML_2026_W20() {
  return `<div class="section-label">CSM Contributions &mdash; Week of May 11&ndash;15, 2026 (W20)</div>
  <div class="csm-leaderboard">
    <div class="csm-row csm-total" data-csm="all"><div class="avatar">&Sigma;</div><div style="flex:1"><div class="csm-row-name">Total &mdash; All CSMs</div><div class="csm-row-sub">7 of 8 Enterprise CSMs active &middot; 123 accounts &middot; 47 Weflow calls (confirmed)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">47</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">42</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">4</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">123</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">240</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="nick"><div class="avatar av-grey">NJ</div><div style="flex:1"><div class="csm-row-name">Nick Johnson <span style="font-size:11px;color:#059669;font-weight:600">Most Active Thu</span></div><div class="csm-row-sub">NTT Data &middot; HCL &middot; Siemens &middot; Accenture &middot; IBM &middot; Infor &middot; UKG &middot; Red Hat</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">10</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">10</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">27</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">43</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="rani"><div class="avatar av-grey">RG</div><div style="flex:1"><div class="csm-row-name">Rani Guy <span style="font-size:11px;color:#059669;font-weight:600">Most Weflow Calls</span></div><div class="csm-row-sub">AWS (x2 Fri) &middot; Hitachi Vantara EBR (Wed) &middot; Hitachi Vantara Fri (Concerning) &middot; Google x2 (Wed) &middot; Workday</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">11</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">8</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">27</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="divyam"><div class="avatar av-divyam">DD</div><div style="flex:1"><div class="csm-row-name">Divyam Dewan <span style="font-size:11px;color:#d97706;font-weight:600">Action Needed</span></div><div class="csm-row-sub">BILL Operations (&#x26A0; departure + SF down) &middot; Safaricom &middot; Procore &middot; Lumen &middot; Adobe &middot; Xero</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">7</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">7</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">28</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="atisha"><div class="avatar av-grey">AW</div><div style="flex:1"><div class="csm-row-name">Atisha Waghela</div><div class="csm-row-sub">RSM US (Fri &middot; FY27 plan) &middot; Salesforce (Wed &#x26A0;) &middot; Insight Direct &middot; Strada &middot; Apple</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">6</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">6</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">18</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">22</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="riley"><div class="avatar av-riley">RR</div><div style="flex:1"><div class="csm-row-name">Riley Rogers</div><div class="csm-row-sub">Intuit IES (x-cov) &middot; BMC Software &middot; TriNet &middot; IBM (x-cov for Nick) &middot; Adobe TR (x-cov for Divyam) &middot; ZScaler (x-cov) &middot; Paycom</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">7</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">5</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">6</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">59</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="varun"><div class="avatar av-varun">VT</div><div style="flex:1"><div class="csm-row-name">Varun Tiwari</div><div class="csm-row-sub">Iron Mountain (x2) &middot; Five9 &middot; Capital One</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">26</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="pam"><div class="avatar av-grey">PH</div><div style="flex:1"><div class="csm-row-name">Pam Huck</div><div class="csm-row-sub">ZoomInfo (Mon &#x26A0; renewal risk) &middot; Cisco (Thu &middot; TR sync)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">2</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">7</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">17</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row inactive" data-csm="andy"><div class="avatar av-grey">AL</div><div style="flex:1"><div class="csm-row-name">Andy Lim</div><div class="csm-row-sub">No calls logged this week</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">13</div><div class="l">Opps</div></div></div></div>
  </div>`;
}

function weekCallsHTML_2026_W20() {
  return `<div class="table-card"><table>
    <thead><tr><th>Day</th><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Min</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="pam" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">May 11 &middot; 8:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>ZoomInfo</strong> <span style="font-size:11px;color:#9ca3af">Profile consolidation &middot; July 1 renewal risk</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">May 11 &middot; 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers <span style="font-size:11px">(X-cov AW)</span></div></td><td><strong>Intuit IES</strong> <span style="font-size:11px;color:#9ca3af">TR Top Rated &middot; intent data strategy</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">May 11 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Xero</strong> <span style="font-size:11px;color:#9ca3af">Internal pre-call &middot; customer no-show</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 11 &middot; 8:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>NTT Data</strong> <span style="font-size:11px;color:#9ca3af">EMEA demo &middot; AI account scoring</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 1:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Workday</strong> <span style="font-size:11px;color:#9ca3af">Monthly customer sync</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 1:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Iron Mountain</strong> <span style="font-size:11px;color:#9ca3af">Bi-weekly cadence</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 3:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>BMC Software</strong> <span style="font-size:11px;color:#9ca3af">HG targeting enrichment</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 3:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Omnissa</strong> <span style="font-size:11px;color:#9ca3af">Platform cadence call</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 4:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Insight Direct</strong> <span style="font-size:11px;color:#9ca3af">VMware SMB/Ent/PS segmentation &middot; ICP mapping</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 4:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>AWS</strong> <span style="font-size:11px;color:#9ca3af">Competitive intensity by country &middot; 27 Summit markets</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 4:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>TriNet</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius cadence</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 7:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>HCL</strong> <span style="font-size:11px;color:#9ca3af">ITSM intent data &middot; BigFix &middot; exports sign-off</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Siemens AG</strong> <span style="font-size:11px;color:#9ca3af">RGIP onboarding &middot; Market Analyzer &middot; Sales Copilot</span></td><td>60</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 12 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Five9</strong> <span style="font-size:11px;color:#9ca3af">Clay vs HG economics &middot; SF reauth resolved</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 1:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson <span style="font-size:11px">(X-cov for AW)</span></div></td><td><strong>Intuit</strong> <span style="font-size:11px;color:#9ca3af">Cross-coverage &middot; Nick confirmed</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 1:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>NTT Data</strong> <span style="font-size:11px;color:#9ca3af">France partnership &middot; expansion strategy</span></td><td>60</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 6:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Insight Direct USA</strong> <span style="font-size:11px;color:#9ca3af">CSV delimiter issue &middot; data cleanup</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 8:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Adobe</strong> <span style="font-size:11px;color:#9ca3af">Monthly strategic &middot; India pilot update</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 8:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers <span style="font-size:11px">(X-cov for NJ)</span></div></td><td><strong>IBM</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius POC &middot; cross-coverage</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 8:15 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Hitachi Vantara</strong> <span style="font-size:11px;color:#9ca3af">EBR/QBR &middot; strong exec engagement</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Google</strong> <span style="font-size:11px;color:#9ca3af">Clay partnership &middot; BigQuery migration &middot; Gemini agents</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Iron Mountain</strong> <span style="font-size:11px;color:#9ca3af">Intro meeting &middot; Varun confirmed</span></td><td>60</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 10:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Salesforce</strong> <span style="font-size:11px;color:#9ca3af">MadKudu blocker &middot; integration friction</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 10:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers <span style="font-size:11px">(X-cov for DD)</span></div></td><td><strong>Adobe</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius success call &middot; cross-coverage</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 11:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Workday</strong> <span style="font-size:11px;color:#9ca3af">GTM Companion &amp; Agentforce</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 13 &middot; 12:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Google</strong> <span style="font-size:11px;color:#9ca3af">Weekly sync &middot; Matt Harb on leave</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 2:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Accenture</strong> <span style="font-size:11px;color:#9ca3af">AI data points &middot; renewal negotiation &middot; DGT present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 4:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Safaricom</strong> <span style="font-size:11px;color:#9ca3af">Bi-weekly sync</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 6:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>IBM</strong> <span style="font-size:11px;color:#9ca3af">CDO AI data strategy &middot; Augie &amp; Clayton present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 6:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers <span style="font-size:11px">(X-cov for VT)</span></div></td><td><strong>ZScaler</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius contract &middot; Anderson Duncan present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 6:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Strada</strong> <span style="font-size:11px;color:#9ca3af">HGI &amp; Strada Global sync</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="pam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 7:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius sync &middot; renewal &amp; intent data</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>Paycom</strong> <span style="font-size:11px;color:#9ca3af">SHRM event support planning &middot; Mark Fell present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Infor</strong> <span style="font-size:11px;color:#9ca3af">Money map replication &middot; TAM modeling &middot; Augie present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 10:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>UKG</strong> <span style="font-size:11px;color:#9ca3af">HG automation discussion</span></td><td>60</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 10:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Procore</strong> <span style="font-size:11px;color:#9ca3af">Monthly TrustRadius sync</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Apple</strong> <span style="font-size:11px;color:#9ca3af">Apple / HG Insights session &middot; platform engagement</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Lenovo</strong> <span style="font-size:11px;color:#9ca3af">RGIP UI platform walkthrough &middot; new features demo</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 11:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Capital One</strong> <span style="font-size:11px;color:#9ca3af">Intro &amp; RGIP walkthrough &middot; new stakeholder</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 12:30 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Lumen</strong> <span style="font-size:11px;color:#9ca3af">Weekly sync &middot; renewal discussion &middot; Hayden present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 14 &middot; 1:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cloudflare</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius renewal &middot; org restructuring &middot; Mardigan present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 15 &middot; 7:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>AWS</strong> <span style="font-size:11px;color:#9ca3af">MES sync &middot; 45 min &middot; no transcript</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 15 &middot; 7:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Red Hat</strong> <span style="font-size:11px;color:#9ca3af">Time series analysis &middot; Augie present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 15 &middot; 8:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>RSM US</strong> <span style="font-size:11px;color:#9ca3af">FY26/27 partnership planning &middot; Leo Zunz present</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 15 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>AWS</strong> <span style="font-size:11px;color:#9ca3af">File review &middot; cloud adoption metrics confirmed</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 15 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Hitachi Vantara</strong> <span style="font-size:11px;color:#9ca3af">Marketing strategy &middot; contact data concerns &middot; Adrian present</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="divyam" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 15 &middot; 10:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>BILL Operations</strong> <span style="font-size:11px;color:#9ca3af">Handover &middot; Jeremiah departing &middot; SF disconnected</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
    </tbody>
  </table></div>
  <div style="background:#1c1f26;border:1px solid #3b82f6;border-left:3px solid #3b82f6;border-radius:6px;padding:10px 14px;margin:10px 0;font-size:12px;color:#93c5fd;">
    &#x2139;&#xfe0f; <strong>Table shows Weflow-confirmed calls only.</strong> SFDC-only calendar events (no Weflow recording) are excluded from all counts. &nbsp;|&nbsp; <strong>5 cross-coverage calls W20</strong>: Riley &rarr; Intuit IES (AW), IBM (NJ), Adobe TR (DD), ZScaler (VT) &middot; Nick &rarr; Intuit (AW).
  </div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">&#128269;</div>No calls match these filters.</div>`;
}

// ═══════════════════════════════════════════════════════════════
// W21 — Week of May 18–24, 2026
// ═══════════════════════════════════════════════════════════════

function weekSummaryHTML_2026_W21() {
  return `
  <div class="section-label">Week of May 18&ndash;24, 2026 &middot; Overview (W21)</div>
  <div class="summary-cards">
    <div class="sum-card c-teal" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">36</div><div class="sum-lbl">Weflow Calls</div><div class="sum-sub">Mon&ndash;Fri &middot; 7 CSMs active</div></div>
    <div class="sum-card c-green" onclick="jumpToTab('wpulses','all','all')"><div class="sum-val">36</div><div class="sum-lbl">Pulse Notes Created</div><div class="sum-sub">29 Healthy &middot; 7 Concerning</div></div>
    <div class="sum-card c-purple" onclick="jumpToTab('wcsm','all','all')"><div class="sum-val">7</div><div class="sum-lbl">Active CSMs</div><div class="sum-sub">Andy Lim = 0 calls all week</div></div>
    <div class="sum-card c-amber" onclick="jumpToTab('wpulses','all','Concerning')"><div class="sum-val">7</div><div class="sum-lbl">Concerning Signals</div><div class="sum-sub">Elastic &times;2 &middot; Splunk &middot; NetApp &middot; Dayforce &middot; Blackbaud &middot; Yubico</div></div>
    <div class="sum-card c-red"><div class="sum-val">1</div><div class="sum-lbl">High-Risk Account</div><div class="sum-sub">Dayforce US &mdash; POC offer extended</div></div>
    <div class="sum-card c-blue" onclick="jumpToTab('wcalls','all','all')"><div class="sum-val">4</div><div class="sum-lbl">Expansion Signals</div><div class="sum-sub">HCLSoftware $780K &middot; Elastic TAM &middot; Dynatrace &middot; Zendesk</div></div>
  </div>

  <div class="section-label">Key Accounts This Week</div>
  <div class="account-highlights">
    <div class="acct-card ac-amber"><div class="acct-name">Dayforce US</div><div class="acct-csm">CSM: Varun Tiwari</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#ef4444">!</div><div class="l">High Risk</div></div><div class="acct-stat"><div class="n" style="color:#d97706">&#x26A0;</div><div class="l">POC Offer</div></div></div><div class="acct-note">2Q ROI review with Kory Himmer (Thu May 21, 60 min). High Risk &mdash; POC offer extended to retain account. Varun flagged Concerning; outcome of POC decision TBD. Close monitoring required through Q3.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">Elastic Portfolio</div><div class="acct-csm">CSM: Rani Guy</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">3</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">2</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#d97706">&#x26A0;</div><div class="l">Data Issues</div></div></div><div class="acct-note">Two Concerning calls on Fri May 22: custom spend data (David Adamson team) and account matching (Sriraman Narayanan). Mon healthy spend call preceded these. Rani needs to resolve data quality concerns with SE support before Q3 renewal.</div></div>
    <div class="acct-card"><div class="acct-name">HCLSoftware</div><div class="acct-csm">CSM: Nick Johnson</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">1</div><div class="l">Pulse</div></div><div class="acct-stat"><div class="n" style="color:#059669">$780K</div><div class="l">Proposal</div></div></div><div class="acct-note">Fri May 22 &mdash; $780K proposal review for data feed + MCP package. 5 HCL teams (Poonam Fotedar, Alex Knaani, Harry Pandarathil, Abeer Sharma + others). Decision target: first week of June. Angus Hyams (AE) led; Nick in CSM support.</div></div>
    <div class="acct-card"><div class="acct-name">Autodesk</div><div class="acct-csm">CSM: Varun Tiwari</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n cg">1</div><div class="l">Pulse</div></div><div class="acct-stat"><div class="n" style="color:#059669">4M</div><div class="l">Records</div></div></div><div class="acct-note">Wed May 20 &mdash; 4M CRM records matching + enrichment discussion with Jessica Hayek. Expansion-scale data engagement confirmed. Healthy signal; strategic account with significant data volume upside.</div></div>
    <div class="acct-card ac-amber"><div class="acct-name">Blackbaud</div><div class="acct-csm">CSM: Divyam Dewan</div><div class="acct-stats"><div class="acct-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="acct-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="acct-stat"><div class="n" style="color:#d97706">41d</div><div class="l">Renewal</div></div></div><div class="acct-note">Mon May 18 &mdash; Renewal in 41 days, IDL campaign paused. Concerning flag. Divyam needs to accelerate renewal conversation and reactivate IDL engagement before contract expires.</div></div>
  </div>

  <div class="section-label">Daily Weflow Call Activity &mdash; Week of May 18&ndash;24</div>
  <div class="heatmap-card">
    <table class="hm-table">
      <thead><tr><th class="row-lbl">CSM</th><th>Mon May 18</th><th>Tue May 19</th><th>Wed May 20</th><th>Thu May 21</th><th>Fri May 22</th><th>Sat May 23</th><th>Sun May 24</th></tr></thead>
      <tbody>
        <tr class="hm-csm-row" data-csm="varun"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Varun Tiwari</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-3">5</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="rani"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Rani Guy</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="divyam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Divyam Dewan</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="nick"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Nick Johnson</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="riley"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Riley Rogers</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="atisha"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Atisha Waghela</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="pam"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Pam Huck</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
        <tr class="hm-csm-row" data-csm="andy"><td style="font-size:12px;font-weight:600;color:#2563eb;cursor:pointer">Andy Lim</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td><td class="hm-cell hm-0">&mdash;</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section-label">Pulse Health Distribution</div>
  <div class="health-dist">
    <div class="health-bar-wrap">
      <div class="health-bar-title">All Pulses Created This Week (36)</div>
      <div class="health-bar-row"><div class="health-bar-label">&#128994; Healthy</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:81%"></div></div><div class="health-bar-count">29</div></div>
      <div class="health-bar-row"><div class="health-bar-label">&#128993; Concerning</div><div class="health-bar-track"><div class="health-bar-fill hf-amber" style="width:19%"></div></div><div class="health-bar-count">7</div></div>
      <div class="health-bar-row"><div class="health-bar-label">&#128308; Poor</div><div class="health-bar-track"><div class="health-bar-fill hf-red" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
    <div class="health-bar-wrap">
      <div class="health-bar-title">Calls by Day (Weflow)</div>
      <div class="health-bar-row"><div class="health-bar-label">Mon May 18</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:33%"></div></div><div class="health-bar-count">4</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Tue May 19</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:67%"></div></div><div class="health-bar-count">8</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Wed May 20</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:100%"></div></div><div class="health-bar-count">12</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Thu May 21</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:50%"></div></div><div class="health-bar-count">6</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Fri May 22</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:50%"></div></div><div class="health-bar-count">6</div></div>
    </div>
  </div>`;
}

function weekCSMHTML_2026_W21() {
  return `<div class="section-label">CSM Contributions &mdash; Week of May 18&ndash;24, 2026 (W21)</div>
  <div class="csm-leaderboard">
    <div class="csm-row csm-total" data-csm="all"><div class="avatar">&Sigma;</div><div style="flex:1"><div class="csm-row-name">Total &mdash; All CSMs</div><div class="csm-row-sub">7 of 8 Enterprise CSMs active &middot; 120 accounts &middot; 36 Weflow calls (confirmed)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">36</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">36</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">7</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">120</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">240</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="varun"><div class="avatar av-varun">VT</div><div style="flex:1"><div class="csm-row-name">Varun Tiwari <span style="font-size:11px;color:#d97706;font-weight:600">High-Risk Flagged</span></div><div class="csm-row-sub">OpenText &middot; Exclusive Networks &middot; Iron Mountain &middot; MongoDB &middot; Datadog &middot; Autodesk &middot; Pegasystems &middot; CBTS &middot; Dayforce US (&#x26A0; POC offer)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">9</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">9</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">26</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="rani"><div class="avatar av-grey">RG</div><div style="flex:1"><div class="csm-row-name">Rani Guy <span style="font-size:11px;color:#d97706;font-weight:600">3 Concerning Fri</span></div><div class="csm-row-sub">Elastic (Mon healthy) &middot; Workday &middot; Cisco (x2) &middot; Lenovo &middot; NetApp (&#x26A0;) &middot; Splunk (&#x26A0;) &middot; Elastic Custom Spend (&#x26A0;) &middot; Elastic Acct Matching (&#x26A0;)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">9</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">9</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">4</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">27</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="divyam"><div class="avatar av-divyam">DD</div><div style="flex:1"><div class="csm-row-name">Divyam Dewan <span style="font-size:11px;color:#d97706;font-weight:600">Renewal Risk</span></div><div class="csm-row-sub">Blackbaud (&#x26A0; 41d renewal) &middot; Dynatrace &middot; Infinigate &middot; Lumen Technologies &middot; TrustRadius &middot; Informatica</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">6</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">6</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">28</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="nick"><div class="avatar av-grey">NJ</div><div style="flex:1"><div class="csm-row-name">Nick Johnson <span style="font-size:11px;color:#059669;font-weight:600">$780K Proposal</span></div><div class="csm-row-sub">Chambers &middot; SAP Inc (MCP) &middot; Siemens AG (ACP launch) &middot; HCLSoftware ($780K proposal &middot; Poonam Fotedar)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">27</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">43</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="riley"><div class="avatar av-riley">RR</div><div style="flex:1"><div class="csm-row-name">Riley Rogers</div><div class="csm-row-sub">Intuit Mailchimp (TR bi-weekly) &middot; Zoom Video (TR) &middot; IBM (WatsonX Orchestrate banners) &middot; Yubico (&#x26A0; 6 reviews / 5K contacts)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">6</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">59</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="atisha"><div class="avatar av-grey">AW</div><div style="flex:1"><div class="csm-row-name">Atisha Waghela</div><div class="csm-row-sub">Kyndryl (RGIP India training) &middot; RSM US (7K account list) &middot; OPISystems (credits bug resolved)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">3</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">3</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">18</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">22</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row" data-csm="pam"><div class="avatar av-grey">PH</div><div style="flex:1"><div class="csm-row-name">Pam Huck</div><div class="csm-row-sub">Oracle NetSuite (IDL 117 MQLs &middot; 3 SQLs &middot; Top Rated on track)</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">7</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">17</div><div class="l">Opps</div></div></div></div>
    <div class="csm-row inactive" data-csm="andy"><div class="avatar av-grey">AL</div><div style="flex:1"><div class="csm-row-name">Andy Lim</div><div class="csm-row-sub">No calls logged this week</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Concerning</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div><div class="row-stat"><div class="n" style="color:#2563eb">13</div><div class="l">Opps</div></div></div></div>
  </div>`;
}

function weekCallsHTML_2026_W21() {
  return `<div class="table-card"><table>
    <thead><tr><th>Day</th><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Min</th><th>Signal</th></tr></thead>
    <tbody>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">May 18 &middot; 3:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>OpenText</strong> <span style="font-size:11px;color:#9ca3af">Data file update &middot; renewal planning</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">May 18 &middot; 6:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Kyndryl</strong> <span style="font-size:11px;color:#9ca3af">RGIP India team training scheduling</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">May 18 &middot; 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Blackbaud</strong> <span style="font-size:11px;color:#9ca3af">Renewal in 41 days &middot; IDL paused</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Mon</td><td style="color:#9ca3af;font-size:12px">May 18 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Elastic</strong> <span style="font-size:11px;color:#9ca3af">Custom spend data request &middot; David Adamson + Adrian</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 3:45 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Exclusive Networks</strong> <span style="font-size:11px;color:#9ca3af">Platform walkthrough &middot; Robin Oakley</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 6:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Chambers</strong> <span style="font-size:11px;color:#9ca3af">Re-intro after 3-year gap &middot; Bruno</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>Intuit Mailchimp</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius bi-weekly</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>SAP Inc</strong> <span style="font-size:11px;color:#9ca3af">Bi-weekly sync &middot; Ian Phoenix MCP</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 10:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>Zoom Video</strong> <span style="font-size:11px;color:#9ca3af">Bi-weekly TrustRadius &middot; Camille Shortridge</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>RSM US</strong> <span style="font-size:11px;color:#9ca3af">Account list finalization &middot; 7K US &amp; Canada</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Dynatrace</strong> <span style="font-size:11px;color:#9ca3af">Bulk data ingestion scoping &middot; Roger Steffen</span></td><td>60</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Tue</td><td style="color:#9ca3af;font-size:12px">May 19 &middot; 11:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>CBTS</strong> <span style="font-size:11px;color:#9ca3af">New customer kick-off &middot; Mitchell VanderKam + Timothy Selaty</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 5:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Infinigate</strong> <span style="font-size:11px;color:#9ca3af">Expansion to other regions &middot; Abolfazl Akhondi</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 6:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Iron Mountain</strong> <span style="font-size:11px;color:#9ca3af">New C&amp;MI team &middot; Peter Rush &middot; propensity-to-buy</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 7:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>IBM</strong> <span style="font-size:11px;color:#9ca3af">Banner designs finalized &middot; WatsonX Orchestrate</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="atisha" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 7:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>OPISystems</strong> <span style="font-size:11px;color:#9ca3af">Credits display bug fixed &middot; ~60K credits remain</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 7:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Workday</strong> <span style="font-size:11px;color:#9ca3af">MCP server + Contact Data &middot; Market Analyzer</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>MongoDB</strong> <span style="font-size:11px;color:#9ca3af">Data methodology + FAI walkthrough &middot; Tracy York present</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 9:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">Pre-presentation prep &middot; internal meeting</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Datadog</strong> <span style="font-size:11px;color:#9ca3af">TrustRadius sync &middot; Caio Dicenzo + Scott Stater</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 10:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Autodesk</strong> <span style="font-size:11px;color:#9ca3af">4M CRM records matching + enrichment &middot; Jessica Hayek</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="varun" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 10:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Pegasystems</strong> <span style="font-size:11px;color:#9ca3af">Himalee mat leave Jul 1 &middot; license changes</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 12:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Lenovo</strong> <span style="font-size:11px;color:#9ca3af">Onboarding follow-up &middot; tile overview doc owed</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="riley" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Wed</td><td style="color:#9ca3af;font-size:12px">May 20 &middot; 12:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-riley">RR</div>Riley Rogers</div></td><td><strong>Yubico</strong> <span style="font-size:11px;color:#9ca3af">Only 6 reviews from 5K contacts &middot; launch date delayed</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="varun" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 21 &middot; 7:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Dayforce US</strong> <span style="font-size:11px;color:#9ca3af">2Q ROI review &middot; Kory Himmer &middot; High Risk &middot; POC offer extended</span></td><td>60</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 21 &middot; 7:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>Siemens AG</strong> <span style="font-size:11px;color:#9ca3af">ACP launch &middot; Pat Loftus &middot; one-pagers needed</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 21 &middot; 8:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Lumen Technologies</strong> <span style="font-size:11px;color:#9ca3af">BCG driving expansion &middot; full universe &middot; pricing discussion</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 21 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>NetApp</strong> <span style="font-size:11px;color:#9ca3af">Wallet number methodology discrepancy &middot; Doug Oliver-Watts</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="pam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 21 &middot; 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Oracle NetSuite</strong> <span style="font-size:11px;color:#9ca3af">IDL 117 MQLs &middot; 3 SQLs &middot; Top Rated on track &middot; Nia mat leave</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Thu</td><td style="color:#9ca3af;font-size:12px">May 21 &middot; 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">Wallet share proposal &middot; Priten Gandecha</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 22 &middot; 6:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>TrustRadius</strong> <span style="font-size:11px;color:#9ca3af">Joan Fabregat + Abdur check-in</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 22 &middot; 8:15 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Splunk</strong> <span style="font-size:11px;color:#9ca3af">SIEM worksheet issue &middot; Vince Vasquez &middot; sponsor tentative</span></td><td>45</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="rani" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 22 &middot; 9:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Elastic</strong> <span style="font-size:11px;color:#9ca3af">Custom spend data &middot; David Adamson + team</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="divyam" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 22 &middot; 11:00 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Informatica</strong> <span style="font-size:11px;color:#9ca3af">Expansion reconnect &middot; Heather Quesnel</span></td><td>45</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
      <tr data-csm="rani" data-health="Concerning"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 22 &middot; 11:30 AM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Elastic</strong> <span style="font-size:11px;color:#9ca3af">Account matching &middot; Sriraman Narayanan</span></td><td>30</td><td><span class="badge badge-concerning">&#128993; Concerning</span></td></tr>
      <tr data-csm="nick" data-health="Healthy"><td style="color:#9ca3af;font-size:11px">Fri</td><td style="color:#9ca3af;font-size:12px">May 22 &middot; 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>HCLSoftware</strong> <span style="font-size:11px;color:#9ca3af">$780K proposal review &middot; Poonam Fotedar + 5 HCL teams &middot; Angus Hyams (AE) led</span></td><td>30</td><td><span class="badge badge-healthy">&#128994; Healthy</span></td></tr>
    </tbody>
  </table></div>
  <div style="background:#1c1f26;border:1px solid #3b82f6;border-left:3px solid #3b82f6;border-radius:6px;padding:10px 14px;margin:10px 0;font-size:12px;color:#93c5fd;">
    &#x2139;&#xfe0f; <strong>Table shows Weflow-confirmed calls only.</strong> SFDC-only calendar events (no Weflow recording) are excluded from all counts. &nbsp;|&nbsp; <strong>W21 note:</strong> Varun busiest Wed (5 calls) &middot; Rani had 3 Concerning calls on Fri May 22 &middot; Nick $780K proposal HCL Fri.
  </div>
  <div class="empty-state" id="calls-empty" style="display:none"><div class="empty-icon">&#128269;</div>No calls match these filters.</div>`;
}

// ─── Pulse Coverage Snapshots ─────────────────────────────────────────────────
// Each monthCoverageHTML_YYYY_MM() freezes coverage at the end of that month's
// /update-enterprise-opportunity-pulse run. core.js checks for this hook before
// falling back to the live pulseCoverageHTML(). Add a new function here after
// each monthly pulse refresh.

function _renderCoverageTable(stats, snapshotLabel) {
  const totalOpps = stats.reduce((s, r) => s + r.total, 0);
  const totalBoth = stats.reduce((s, r) => s + r.both, 0);
  const teamPct   = totalOpps > 0 ? Math.round(totalBoth / totalOpps * 100) : 0;
  const barColor  = p => p >= 80 ? '#059669' : p >= 50 ? '#d97706' : '#dc2626';
  const textColor = p => p >= 80 ? '#059669' : p >= 50 ? '#d97706' : '#dc2626';
  const rows = stats.map(({ csm, name, total, both, pulseOnly, noteOnly, neither, pct }) => {
    const bar = `<div style="background:#e5e7eb;border-radius:4px;height:8px;width:110px;display:inline-block;vertical-align:middle"><div style="background:${barColor(pct)};height:8px;border-radius:4px;width:${pct}%"></div></div>`;
    const missingAny = total - both;
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
  const snapshotBadge = snapshotLabel
    ? `<span style="display:inline-block;background:#eff6ff;color:#2563eb;border:1px solid #bfdbfe;border-radius:4px;padding:2px 10px;font-size:11px;font-weight:600;margin-left:10px;">📸 Snapshot: ${snapshotLabel}</span>`
    : '';
  return `
  <div class="section-label">Pulse Coverage — Opportunity Tracking Quality ${snapshotBadge}</div>
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

// June 2026 -- snapshot from Jun 19, 2026 Vitally refresh
function monthCoverageHTML_2026_06() {
  const stats = [
  {
    "csm": "riley",
    "name": "Riley Rogers",
    "total": 60,
    "both": 40,
    "pulseOnly": 2,
    "noteOnly": 2,
    "neither": 16,
    "pct": 67
  },
  {
    "csm": "varun",
    "name": "Varun Tiwari",
    "total": 27,
    "both": 27,
    "pulseOnly": 0,
    "noteOnly": 0,
    "neither": 0,
    "pct": 100
  },
  {
    "csm": "divyam",
    "name": "Divyam Dewan",
    "total": 29,
    "both": 21,
    "pulseOnly": 3,
    "noteOnly": 0,
    "neither": 5,
    "pct": 72
  },
  {
    "csm": "nick",
    "name": "Nick Johnson",
    "total": 43,
    "both": 38,
    "pulseOnly": 0,
    "noteOnly": 0,
    "neither": 5,
    "pct": 88
  },
  {
    "csm": "rani",
    "name": "Rani Guy",
    "total": 27,
    "both": 25,
    "pulseOnly": 0,
    "noteOnly": 0,
    "neither": 2,
    "pct": 93
  },
  {
    "csm": "pam",
    "name": "Pam Huck",
    "total": 17,
    "both": 17,
    "pulseOnly": 0,
    "noteOnly": 0,
    "neither": 0,
    "pct": 100
  },
  {
    "csm": "atisha",
    "name": "Atisha Waghela",
    "total": 26,
    "both": 22,
    "pulseOnly": 0,
    "noteOnly": 0,
    "neither": 4,
    "pct": 85
  },
  {
    "csm": "andy",
    "name": "Andy Lim",
    "total": 14,
    "both": 12,
    "pulseOnly": 0,
    "noteOnly": 1,
    "neither": 1,
    "pct": 86
  }
];
  return _renderCoverageTable(stats, 'Jun 19, 2026');
}
