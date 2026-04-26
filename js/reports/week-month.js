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
        <tr class="hm-csm-row" data-csm="riley"><td style="font-size:12px;font-weight:600">Riley Rogers</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="varun"><td style="font-size:12px;font-weight:600">Varun Tiwari</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="divyam"><td style="font-size:12px;font-weight:600">Divyam Dewan</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="nick"><td style="font-size:12px;font-weight:600">Nick Johnson</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="rani"><td style="font-size:12px;font-weight:600">Rani Guy</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">3</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="pam"><td style="font-size:12px;font-weight:600">Pam Huck</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-2">2</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="atisha"><td style="font-size:12px;font-weight:600">Atisha Waghela</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
        <tr class="hm-csm-row" data-csm="andy"><td style="font-size:12px;font-weight:600">Andy Lim</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
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
      <div class="health-bar-row"><div class="health-bar-label">Mon Apr 20</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:12.5%"></div></div><div class="health-bar-count">3</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Tue Apr 21</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:20.8%"></div></div><div class="health-bar-count">5</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Wed Apr 22</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:33.3%"></div></div><div class="health-bar-count">8</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Thu Apr 23</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:33.3%"></div></div><div class="health-bar-count">8</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Fri Apr 24</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Sat Apr 25</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
      <div class="health-bar-row"><div class="health-bar-label">Sun Apr 26</div><div class="health-bar-track"><div class="health-bar-fill hf-green" style="width:0%"></div></div><div class="health-bar-count">0</div></div>
    </div>
  </div>`;
}

function weekCSMHTML() {
  return `<div class="section-label">CSM Contributions — Week of Apr 20–26</div>
  <div class="csm-leaderboard">
    <div class="csm-row csm-total" data-csm="all"><div class="avatar">Σ</div><div style="flex:1"><div class="csm-row-name">Total — All CSMs</div><div class="csm-row-sub">8 Enterprise CSMs · 120 accounts · $47.3M ARR</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">16</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">21</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">3</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">120</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="varun"><div class="avatar av-varun">VT</div><div style="flex:1"><div class="csm-row-name">Varun Tiwari</div><div class="csm-row-sub">Datadog · DXC · Zendesk — Cloud Dynamics Concerning; others Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="pam"><div class="avatar av-grey">PH</div><div style="flex:1"><div class="csm-row-name">Pam Huck</div><div class="csm-row-sub">Cisco · Microsoft · Epicor Kinetic · Epicor Eclipse — Cisco Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">7</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="rani"><div class="avatar av-grey">RG</div><div style="flex:1"><div class="csm-row-name">Rani Guy</div><div class="csm-row-sub">Workday · Lenovo · Elastic · Cloudflare — all Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">4</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="divyam"><div class="avatar av-divyam">DD</div><div style="flex:1"><div class="csm-row-name">Divyam Dewan</div><div class="csm-row-sub">Thomson Reuters · Quadient — all Healthy · IDL + reviews on track</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="riley"><div class="avatar av-riley">RR</div><div style="flex:1"><div class="csm-row-name">Riley Rogers</div><div class="csm-row-sub">Intuit Mailchimp · Champion re-engaged · 3 pulses upgraded Concerning→Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">3</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">6</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="nick"><div class="avatar av-grey">NJ</div><div style="flex:1"><div class="csm-row-name">Nick Johnson</div><div class="csm-row-sub">HCL Software — usage deep-dive · Healthy</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">27</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row inactive" data-csm="atisha"><div class="avatar av-grey">AW</div><div style="flex:1"><div class="csm-row-name">Atisha Waghela</div><div class="csm-row-sub">eHouse Studio — no call logged · pulse flagged Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">18</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row inactive" data-csm="andy"><div class="avatar av-grey">AL</div><div style="flex:1"><div class="csm-row-name">Andy Lim</div><div class="csm-row-sub">No activity logged this week</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div></div></div>
  </div>`;
}

function weekCallsHTML() {
  return `<div class="table-card"><table>
    <thead><tr><th>Date & Time</th><th>CSM</th><th>Account</th><th>Duration</th><th>Signal</th></tr></thead>
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
      <tr style="background:#f8f9fc;pointer-events:none"><td colspan="5" style="font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.6px;padding:8px 12px">THURSDAY APR 23 — 8 CALLS</td></tr>
      <tr data-csm="varun" onclick="openModal('call-dxc-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>DXC Technology</strong> <span style="font-size:11px;color:#9ca3af">Gabriella &amp; HG Quarterly</span></td><td>30 min</td><td><span class="badge badge-concerning">🟡 Concerning</span></td></tr>
      <tr data-csm="nick" onclick="openModal('call-ntt-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 2:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">NJ</div>Nick Johnson</div></td><td><strong>NTT Data</strong> <span style="font-size:11px;color:#9ca3af">POC Discussion</span></td><td>30 min</td><td><span style="font-size:11px;color:#9ca3af">— No transcript</span></td></tr>
      <tr data-csm="rani" onclick="openModal('call-cf-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">RG</div>Rani Guy</div></td><td><strong>Cloudflare</strong> <span style="font-size:11px;color:#9ca3af">Connect</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="atisha" onclick="openModal('call-strada-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 3:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">AW</div>Atisha Waghela</div></td><td><strong>Strada</strong> <span style="font-size:11px;color:#9ca3af">Alignment Call</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="divyam" onclick="openModal('call-dynatrace-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 4:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-divyam">DD</div>Divyam Dewan</div></td><td><strong>Dynatrace</strong> <span style="font-size:11px;color:#9ca3af">Datafeed Collaboration</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="varun" onclick="openModal('call-autodesk-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 5:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-varun">VT</div>Varun Tiwari</div></td><td><strong>Autodesk</strong> <span style="font-size:11px;color:#9ca3af">Whitespace File</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
      <tr data-csm="pam" onclick="openModal('call-msft-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 5:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Microsoft</strong> <span style="font-size:11px;color:#9ca3af">Bi-Weekly</span></td><td>60 min</td><td><span style="font-size:11px;color:#9ca3af">— No transcript</span></td></tr>
      <tr data-csm="pam" onclick="openModal('call-cisco-apr23')"><td style="color:#9ca3af;font-size:12px">Thu Apr 23 · 7:00 PM</td><td><div class="csm-chip-inline"><div class="mini-av av-grey">PH</div>Pam Huck</div></td><td><strong>Cisco</strong> <span style="font-size:11px;color:#9ca3af">Connect</span></td><td>30 min</td><td><span class="badge badge-healthy">🟢 Healthy</span></td></tr>
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
// MONTH VIEW — HTML functions
// ═══════════════════════════════════════════════════════════════

function monthCallsHTML() {
  // April 2026 MTD — all 24 calls live in Week 17 (Mon–Thu)
  return weekCallsHTML().replace('Week 17','April 2026 · Month-to-Date');
}
function monthPulsesHTML() {
  return weekPulsesHTML();
}
function applyMonthCallFilters() {
  document.querySelectorAll('.table-card tbody tr[data-csm]').forEach(r=>{
    const okCsm = (activeCsm==='all' || r.dataset.csm===activeCsm);
    const okHealth = (activeHealth==='all' || r.dataset.health===activeHealth);
    r.classList.toggle('hidden', !(okCsm && okHealth));
  });
}

function monthSummaryHTML() {
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
        <tr class="hm-csm-row" data-csm="varun"><td style="font-size:12px;font-weight:600">Varun Tiwari</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">6</td></tr>
        <tr class="hm-csm-row" data-csm="pam"><td style="font-size:12px;font-weight:600">Pam Huck</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">6</td></tr>
        <tr class="hm-csm-row" data-csm="rani"><td style="font-size:12px;font-weight:600">Rani Guy</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">5</td></tr>
        <tr class="hm-csm-row" data-csm="divyam"><td style="font-size:12px;font-weight:600">Divyam Dewan</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-3">3</td></tr>
        <tr class="hm-csm-row" data-csm="nick"><td style="font-size:12px;font-weight:600">Nick Johnson</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-2">2</td></tr>
        <tr class="hm-csm-row" data-csm="riley"><td style="font-size:12px;font-weight:600">Riley Rogers</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td></tr>
        <tr class="hm-csm-row" data-csm="atisha"><td style="font-size:12px;font-weight:600">Atisha Waghela</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-1">1</td></tr>
        <tr class="hm-csm-row" data-csm="andy"><td style="font-size:12px;font-weight:600">Andy Lim</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td><td class="hm-cell hm-0">—</td></tr>
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
  return `<div class="section-label">CSM Engagement — April 2026</div>
  <div class="csm-leaderboard">
    <div class="csm-row csm-total" data-csm="all"><div class="avatar">Σ</div><div style="flex:1"><div class="csm-row-name">Total — All CSMs</div><div class="csm-row-sub">8 Enterprise CSMs · 120 accounts · $47.3M ARR</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">24</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">21</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">3</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">120</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="varun"><div class="avatar av-varun">VT</div><div style="flex:1"><div class="csm-row-name">Varun Tiwari <span style="font-size:11px;color:#d97706;font-weight:600">Action Needed</span></div><div class="csm-row-sub">Datadog · DXC · Zendesk · Autodesk — Cloud Dynamics data trust follow-up outstanding</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">6</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="pam"><div class="avatar av-grey">PH</div><div style="flex:1"><div class="csm-row-name">Pam Huck <span style="font-size:11px;color:#d97706;font-weight:600">Action Needed</span></div><div class="csm-row-sub">Cisco · Microsoft · Epicor Kinetic · Epicor Eclipse — Cisco Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">6</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">7</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="rani"><div class="avatar av-grey">RG</div><div style="flex:1"><div class="csm-row-name">Rani Guy <span style="font-size:11px;color:#059669;font-weight:600">Strong Week</span></div><div class="csm-row-sub">Workday · Lenovo · Elastic · Cloudflare — 4 calls Apr 22 + Cloudflare sync Apr 23</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">5</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="divyam"><div class="avatar av-divyam">DD</div><div style="flex:1"><div class="csm-row-name">Divyam Dewan <span style="font-size:11px;color:#0ea5a0;font-weight:600">Most Pulses</span></div><div class="csm-row-sub">Thomson Reuters · Quadient · Dynatrace — IDL + review campaigns + datafeed upsell</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">3</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">4</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">21</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="riley"><div class="avatar av-riley">RR</div><div style="flex:1"><div class="csm-row-name">Riley Rogers <span style="font-size:11px;color:#059669;font-weight:600">Pulse Upgrades</span></div><div class="csm-row-sub">Intuit Mailchimp · 3 opps upgraded Concerning→Healthy · champion re-engaged</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">3</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">6</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="nick"><div class="avatar av-grey">NJ</div><div style="flex:1"><div class="csm-row-name">Nick Johnson</div><div class="csm-row-sub">HCL Software · NTT Data — usage deep-dive + POC scoping · 27 accounts in portfolio</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">2</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#059669">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">27</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row" data-csm="atisha"><div class="avatar av-grey">AW</div><div style="flex:1"><div class="csm-row-name">Atisha Waghela <span style="font-size:11px;color:#d97706;font-weight:600">Monitor</span></div><div class="csm-row-sub">Strada — Apr 23 alignment call · eHouse Studio still no call · pulse Concerning</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n ct">1</div><div class="l">Calls</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n" style="color:#d97706">1</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">18</div><div class="l">Accounts</div></div></div></div>
    <div class="csm-row inactive" data-csm="andy"><div class="avatar av-grey">AL</div><div style="flex:1"><div class="csm-row-name">Andy Lim</div><div class="csm-row-sub">No activity logged in April</div></div><div class="csm-row-stats"><div class="row-stat"><div class="n cgr">0</div><div class="l">Calls</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Pulses</div></div><div class="row-stat"><div class="n cgr">0</div><div class="l">Risks</div></div><div class="row-stat"><div class="n" style="color:#7c3aed">10</div><div class="l">Accounts</div></div></div></div>
  </div>`;
}

function monthHealthHTML() {
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

