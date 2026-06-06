// ============================================================
// daily-2026-06.js — June 2026 daily report functions
// ============================================================

// ---- June 1, 2026 ----

function dayData_2026_06_01() {
  return {
    calls: [
      { ts: 'Jun 1 · 5:00 AM', csm: 'nick', account: 'Infor (US), LLC',
        note: 'Customer debrief — ELT value-of-HG prep, Ankar running Salesforce data pull',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Nicole Morgan (Infor) debriefed Nick on an urgent HG Solutions data request. Her team member Ankar is building a Salesforce data pull to run alongside HG data — goal: show Infor ELT the lift from HG Insights and validate accuracy. Plan to run through Claude for executive-level breakdown, then BLT readout. India team has public holiday Wed.' },
      { ts: 'Jun 1 · 6:30 AM', csm: 'nick', account: 'IBM',
        note: 'GenAI capabilities walkthrough with David Bush and IBM data team',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Nick Johnson and Clayton Cutbush (HG) ran GenAI capabilities walkthrough for David Bush (IBM), Arnav Singh, Patty Rozaklis Stern, and Gavin Padden. Demonstrated HG\'s GenAI features to IBM\'s data team. IBM at $3.3M ARR.' },
      { ts: 'Jun 1 · 8:00 AM', csm: 'rani', account: 'Workday Inc',
        note: 'Databricks datafeed migration request — ML team building AI agents',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Workday ML team (Kendall, Winston, Vivian — building AI agents) needs HG data in Databricks, separate from existing Snowflake/Fivetran delivery. Critical: existing Snowflake delivery for business team must stay intact. Alexi Mouarkach (HG SE) ran requirements. Workday to provide Databricks credentials.' },
      { ts: 'Jun 1 · 8:00 AM', csm: 'atisha', account: 'TD Synnex',
        note: 'Recurring Monday sync — export limits confirmed, usage review',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Recurring Monday cadence with Steve Markle. Atisha confirmed export limits do not consume additional credits for re-downloads of same data. Running through action items from last week.' },
      { ts: 'Jun 1 · 8:30 AM', csm: 'nick', account: 'Intuit',
        note: 'Expansion meeting — account scoring + MCP pricing, proposal for Lorena Fortuna',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'AM Hayden Smith organized meeting with Nick, Max Shaw, and Karin/KP Pindle (HG) to pitch account scoring and MCP credits to Lorena Fortuna (Intuit). Hayden prepared scores spreadsheet and pricing calculator. Goal: Lorena requests formal proposal. "Annabelle\'s gone" — prior champion left — creating re-entry window.' },
      { ts: 'Jun 1 · 10:30 AM', csm: 'varun', account: 'Autodesk Inc',
        note: 'Recurring scoring sync — David Guo (Autodesk) going on 12-wk pat. leave Jun 9, introducing UK colleague to Varun',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'MadKudu scoring running fine — leads flowing, no major anomalies in months. David Guo (Autodesk MadKudu contact) is going on 12-week paternity leave June 9–August 31. His wife\'s maternity leave ends June 8. David introducing his UK-based colleague to Varun before leaving. Varun remains the HG point of contact for escalations.' },
      { ts: 'Jun 1 · 10:30 AM', csm: 'nick', account: 'Veeam Software AG',
        note: 'HG CEO + AI engineering — AI/agentic use case expansion, "next phase of partnership"',
        mins: 90, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Executive-level 90-min session. HG-side: Francis Brero (CEO), Rohini Kasturi (CCO), Nick (CSM), Angus Hyams (AM), David Crossman (SE), Nitin Kapoor, Chloe Portier (AI Engineering). Veeam-side: Jean-Baptiste Vermersch (Marketing Ops), Michael Ries (GTM Planning), Tommy Bligh (Data Science), Brandon Cosley (AI Engineering). Topic: how HG AI engineering helps Veeam build agentic GTM motions. Veeam IQ products fed by HG data.' },
      { ts: 'Jun 1 · 11:00 AM', csm: 'riley', account: 'SAP Inc',
        note: 'TR Premium Content Hosting feature pitch — AI discoverability + SEO',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Mardigan Moffat (TR CSM) and Katie Allison presented TR Premium Content Hosting to SAP\'s Helya Barezani. Feature: hosts SAP content on TR platform for AI discoverability + traditional SEO. Gated-content toggle, translated versions, analytics built in. Helya evaluating with team.' },
      { ts: 'Jun 1 · 11:30 AM', csm: 'rani', account: 'Amazon Web Services (AWS)',
        note: 'Project Rubicon support — HG Quick Desktop demo by Mike Galyen',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Project Rubicon ongoing support series. Mark Fell (AWS) manages agenda — proactively decided Francis Brero not needed. Mike Galyen demoing HG Quick Desktop. Raquel Okanla also present.' },
      { ts: 'Jun 1 · 1:00 PM', csm: 'rani', account: 'NetApp',
        note: 'Data matching issue — no URLs/DUNS, FAI data ticket submitted',
        mins: 25, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'NetApp only matches on company name — no URLs or DUNS. Limiting HG data matching accuracy. Rani submitted ticket tagging v-boo and Yu. FAI data critical for country/state/city/postal-code matching. Elise McMorrow dialed in from Seattle airport. Adrian Escobar posting Slack update.' },
      { ts: 'Jun 1 · 2:00 PM', csm: 'rani', account: 'Cisco',
        note: 'Data file review — account match rate analysis (X-cov for Pam Huck)',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Adrian Escobar (AM) + Gavin Padden with Michael Xu (Cisco) during Cisco Live week (Las Vegas). Michael reviewed HG data files, analyzing account match rates. Rani confirmed in transcript. Note: Cisco\'s assigned CSM is Pam Huck per data.js — Rani covering. Pam to be briefed on Michael Xu findings.' },
      { ts: 'Jun 1 · 2:00 AM', csm: 'andy', account: 'Ever Pure',
        note: 'Biweekly sync — install/spend data, Snowflake integration, missing cloud columns (Source: Four/Four)',
        mins: 27, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Andy Lim + Angus Hyams with Charlie Morgans (Ever Pure — evaluation customer). Biweekly cadence. Cloud columns missing from received data — ETL/ingestion gap suspected. Snowflake integration flagged for company-wide adoption. Product taxonomy catalog requested. Captured by Four/Four only — Weflow bot did not join this customer-hosted EMEA meeting.' },
    ],
    pulses: [
      { csm: 'nick',   account: 'Infor (US), LLC',         health: 'Healthy',    note: 'Customer debrief on urgent data support. Nicole Morgan preparing ELT presentation. Ankar building SF data pull to validate HG lift. BLT readout planned.' },
      { csm: 'nick',   account: 'IBM',                     health: 'Healthy',    note: 'GenAI walkthrough with David Bush and IBM data team. Expansion: new AI capabilities demo. Clayton Cutbush (HG) co-presenting.' },
      { csm: 'rani',   account: 'Workday Inc',             health: 'Healthy',    note: 'Databricks migration: ML team needs HG data for AI agents. Snowflake/Fivetran delivery must stay intact. Awaiting Databricks credentials.' },
      { csm: 'atisha', account: 'TD Synnex',               health: 'Healthy',    note: 'Recurring Monday sync. Export limits confirmed not burning credits on re-downloads. Steve Markle engaged. Steady usage.' },
      { csm: 'nick',   account: 'Intuit',                  health: 'Healthy',    note: 'Expansion: Hayden Smith (AM) + Nick pitching account scoring + MCP credits to Lorena Fortuna. Annabelle\'s departure = re-entry window. Proposal next step.' },
      { csm: 'varun',  account: 'Autodesk Inc',            health: 'Healthy',    note: 'Recurring scoring sync. MadKudu running fine. David Guo (Autodesk) going on 12-wk paternity leave Jun 9–Aug 31. Introducing UK colleague to Varun before leaving. Varun to establish relationship with new contact.' },
      { csm: 'nick',   account: 'Veeam Software AG',       health: 'Healthy',    note: 'Expansion: HG CEO Francis Brero + CCO + AI engineering 90-min strategy session. AI/agentic GTM use cases for Veeam IQ products. "Next phase of partnership."' },
      { csm: 'riley',  account: 'SAP Inc',                 health: 'Healthy',    note: 'TR Premium Content Hosting pitched to Helya Barezani. AI discoverability + SEO + analytics. Helya evaluating with SAP team. Expansion opportunity.' },
      { csm: 'rani',   account: 'Amazon Web Services (AWS)', health: 'Healthy',  note: 'Project Rubicon support call. HG Quick Desktop demo by Mike Galyen. Mark Fell managing agenda. Francis not needed. $4.6M ARR strategic account healthy.' },
      { csm: 'rani',   account: 'NetApp',                  health: 'Healthy',    note: 'Data matching issue: company name only (no URLs/DUNS). FAI data ticket submitted. Adrian posting Slack update. Matching accuracy limited until FAI resolves.' },
      { csm: 'rani',   account: 'Cisco',                   health: 'Healthy',    note: 'X-cov (Pam Huck\'s account): data evaluation with Michael Xu — account match rate analysis. Cisco Live week. Pam to be briefed. Cisco pulse=Poor, $2.3M ARR.' },
      { csm: 'andy',  account: 'Ever Pure',                health: 'Healthy',    note: 'Biweekly sync (2:00 AM PT, 27 min, Four/Four). Charlie Morgans evaluating HG platform — install/spend data, Snowflake integration, product taxonomy. Missing cloud columns suspected ETL gap. Andy + Angus supporting full onboarding.' },
    ],
  };
}

function dayMeta_2026_06_01() {
  return {
    pills: [
      ['dot-teal',  '12 Calls'],
      ['dot-red',   '⚠️ Varun Paternity Leave'],
      ['dot-green', '5 Expansion Signals'],
      ['dot-amber', 'X-Cov: Rani → Cisco'],
      ['dot-grey',  'Mon Jun 1 · 49 Weflow + 1 Four/Four'],
    ],
    tabs: ['Overview', 'Calls (12)', 'Pulses (12)', 'Action Items (10)'],
  };
}

function dayOverviewHTML_2026_06_01() {
  return `<div class="section-label">Team Activity &mdash; Monday June 1, 2026</div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F7E1; <strong>Autodesk — David Guo (customer) going on 12-week paternity leave Jun 9&ndash;Aug 31.</strong> David introducing his UK colleague to Varun before leaving. Action: Varun to get introduced and establish contact before Jun 9.
  </div>
  <div style="background:#0d1c14;border:1px solid #22c55e;border-left:3px solid #22c55e;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#86efac;">
    &#x1F4C8; <strong>5 Expansion Signals:</strong> Veeam (HG CEO + AI engineering &middot; 90 min &middot; Nick) &middot; IBM (GenAI walkthrough &middot; Nick) &middot; Intuit (account scoring + proposal &middot; Nick + Hayden) &middot; SAP TR Premium Content (Riley) &middot; SAP deal-book AI
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F504; <strong>Cross-Coverage:</strong> Rani Guy confirmed on Cisco sync (assigned CSM = Pam Huck &middot; pulse=Poor &middot; $2.3M ARR). Pam to be briefed on Michael Xu match-rate findings.
  </div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Mon Jun 1 &mdash; 49 Weflow recordings + 1 Four/Four call</strong> &middot; <strong>12 confirmed calls</strong> across 8 CSMs &middot; 1 contextual (Pam/F5) &middot; 3 unconfirmed &middot; First day of June 2026
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">180m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Infor (ELT value prep) &middot; IBM (GenAI walkthrough) &middot; Intuit (expansion proposal) &middot; Veeam (CEO + AI engineering &middot; 90 min)</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">115m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday (Databricks migration) &middot; AWS (Project Rubicon) &middot; NetApp (matching issue) &middot; Cisco (x-cov for Pam &middot; Poor pulse)</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">TD Synnex (recurring Monday sync &middot; export limits confirmed)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Autodesk &mdash; recurring scoring sync. David Guo (Autodesk) going on pat. leave Jun 9&ndash;Aug 31. Introducing UK colleague to Varun. Account stable.</div>
    </div>

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP (TR Premium Content Hosting pitch &middot; &#x1F4C8; expansion)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <div class="csm-card-header">
        <div class="avatar av-grey">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">4</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">4 SFDC events (Blackbaud, Okta, BILL, Dynatrace) &mdash; 0 transcript-confirmed. BILL: recording, no transcript. Blackbaud: no Divyam in speakers. Dynatrace: no recording found.</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">2</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">1*</div><div class="metric-lbl">Contextual</div></div>
      </div>
      <div class="csm-account-note">ADP: recording, no transcript (unconfirmed). F5/NGINX: speaker "Pam" in transcript — contextually confirmed. Cisco: covered by Rani (poor pulse).</div>
    </div>

    <div class="csm-card has-calls" data-csm="andy">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">27m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Ever Pure &mdash; biweekly sync (2:00 AM PT &middot; 27 min). Install/spend data, Snowflake integration, missing cloud columns flagged. <em style="color:#6366f1;font-size:11px;">[Four/Four only]</em></div>
    </div>


  </div>`;
}

function dayCallsHTML_2026_06_01() {
  return `<div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    ⚠️ <strong>Autodesk &mdash; David Guo (customer) going on pat. leave Jun 9&ndash;Aug 31.</strong> David introducing UK colleague to Varun. Get intro before Jun 9.
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F504; Cross-coverage: Rani Guy confirmed on Cisco sync (assigned CSM = Pam Huck). Pam to be briefed.
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:12px;">
    <thead>
      <tr style="border-bottom:1px solid #1e2533;">
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Time (PT)</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">CSM</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Account</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Dur</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Note</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Signal</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">5:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Infor (US), LLC</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">ELT value-of-HG prep, Ankar building SF data pull</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">6:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">IBM</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">GenAI capabilities walkthrough — expansion pitch</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F4C8; Expansion</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">8:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1a3a1a;color:#86efac;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Rani</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Workday Inc</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Databricks migration request — ML team/AI agents</td>
        <td style="padding:6px 10px;color:#f59e0b;">&#x1F7E1; Technical</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">8:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1a2a3a;color:#93c5fd;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Atisha</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">TD Synnex</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Recurring Monday sync, export limits confirmed</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">8:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Intuit</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Expansion: account scoring + MCP pricing, proposal for Lorena</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F4C8; Expansion</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">10:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#3a1f1a;color:#fca5a5;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Varun</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Autodesk Inc</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Recurring sync &mdash; David Guo (Autodesk) going on pat. leave Jun 9, new contact intro</td>
        <td style="padding:6px 10px;color:#94a3b8;">&#x1F7E1; Watch</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">10:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Veeam Software AG</td>
        <td style="padding:6px 10px;color:#64748b;">90m</td>
        <td style="padding:6px 10px;color:#94a3b8;">HG CEO + AI engineering — "next phase" agentic use cases</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F4C8;&#x1F4C8; Strong</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">11:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#2d1e4f;color:#c4b5fd;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Riley</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">SAP Inc (TR)</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">TR Premium Content Hosting feature pitch to SAP</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F4C8; Expansion</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">11:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1a3a1a;color:#86efac;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Rani</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Amazon Web Services</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Project Rubicon — HG Quick Desktop demo</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">1:00 PM</td>
        <td style="padding:6px 10px;"><span style="background:#1a3a1a;color:#86efac;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Rani</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">NetApp</td>
        <td style="padding:6px 10px;color:#64748b;">25m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Matching issue — no URLs/DUNS, FAI ticket submitted</td>
        <td style="padding:6px 10px;color:#f59e0b;">&#x1F7E1; Data Issue</td>
      </tr>
      <tr>
        <td style="padding:6px 10px;color:#94a3b8;">2:00 PM</td>
        <td style="padding:6px 10px;"><span style="background:#1a3a1a;color:#86efac;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Rani</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Cisco <span style="font-size:10px;color:#64748b;font-style:italic;">(X-cov Pam)</span></td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Data file review, match rate analysis — Cisco Live week</td>
        <td style="padding:6px 10px;color:#0ea5e9;">&#x1F535; X-Coverage</td>
      </tr>
    </tbody>
  </table>`;
}

function dayPulsesHTML_2026_06_01() {
  const cards = [
    { csm:'nick',   health:'Healthy',    account:'Infor (US), LLC',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 1 &middot; Check-in',
      excerpt:'6/1 NJ: Data exercise debrief (5:00 AM PT, 30 min). Nicole Morgan preparing ELT presentation for board readout. Ankar building Salesforce data pull to validate HG lift metrics. BLT readout planned this week. No blockers raised.' },
    { csm:'nick',   health:'Healthy',    account:'IBM',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 1 &middot; &#x1F4C8; Expansion &mdash; GenAI capabilities',
      excerpt:'6/1 NJ: GenAI capabilities walkthrough with David Bush and IBM data team (6:30 AM PT, 30 min). Clayton Cutbush (HG) co-presenting. New AI use cases demoed. Expansion signal at $3.3M ARR — IBM evaluating next steps for deeper GenAI integration.' },
    { csm:'rani',   health:'Healthy',    account:'Workday Inc',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 1 &middot; Check-in &mdash; Databricks migration',
      excerpt:'6/1 RG: Databricks delivery migration request (8:00 AM PT, 30 min). Workday ML team (Kendall, Winston, Vivian) building AI agents and needs HG data in Databricks. Snowflake/Fivetran delivery must remain intact. Awaiting Databricks credentials from Workday team. Technical coordination underway.' },
    { csm:'atisha', health:'Healthy',    account:'TD Synnex',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 1 &middot; Check-in',
      excerpt:'6/1 AW: Recurring Monday sync (8:00 AM PT, 30 min). Export limits confirmed not burning credits on re-downloads. Steve Markle actively engaged. Steady platform usage, no issues raised. Account healthy.' },
    { csm:'nick',   health:'Healthy',    account:'Intuit',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Strategic &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 1 &middot; &#x1F4C8; Expansion &mdash; Account scoring + MCP',
      excerpt:'6/1 NJ: Expansion pitch — account scoring + MCP credits to Lorena Fortuna (8:30 AM PT, 30 min). Hayden Smith (HG AE) co-attended with pricing calculator. Annabelle\'s departure opened a re-entry window. Formal proposal next step this week.' },
    { csm:'varun',  health:'Healthy',    account:'Autodesk Inc',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 1 &middot; Check-in &mdash; Key contact on leave Jun 9',
      excerpt:'6/1 VT: Recurring scoring sync (10:30 AM PT, 30 min). MadKudu running fine. David Guo (Autodesk) going on 12-week paternity leave Jun 9&ndash;Aug 31. Introducing his UK colleague to Varun before leaving. Action: Varun to build relationship with new contact before Jun 9.' },
    { csm:'nick',   health:'Healthy',    account:'Veeam Software AG',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 1 &middot; &#x1F4C8;&#x1F4C8; Strong Expansion &mdash; CEO + AI engineering',
      excerpt:'6/1 NJ: 90-min strategy session with HG CEO, CCO, and Veeam AI engineering team (10:30 AM PT). AI/agentic GTM use cases discussed. "Next phase of partnership." Strong executive engagement signal at $822K ARR. Highest-priority expansion call of the day.' },
    { csm:'riley',  health:'Healthy',    account:'SAP Inc',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 1 &middot; &#x1F4C8; Expansion &mdash; TR Premium Content Hosting',
      excerpt:'6/1 RR: TR Premium Content Hosting feature pitch (11:00 AM PT, 30 min). AI discoverability + SEO + analytics presented to Helya Barezani. She needs to consult SAP team; follow-up in ~1 week. Expansion opportunity in $3M ARR account.' },
    { csm:'rani',   health:'Healthy',    account:'Amazon Web Services (AWS)',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Strategic &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 1 &middot; Check-in',
      excerpt:'6/1 RG: Project Rubicon support call (11:30 AM PT, 30 min). HG Quick Desktop demo by Mike Galyen. Mark Fell managing agenda. Francis not needed. $4.6M ARR strategic account stable and healthy.' },
    { csm:'rani',   health:'Concerning', account:'NetApp',
      opp:'Vitally Pulse &mdash; Jun 1 Call', arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 1 &middot; Check-in &mdash; Data matching issue',
      excerpt:'6/1 RG: Data matching issue surfaced (1:00 PM PT, 25 min). NetApp company name only — no URLs or DUNS provided. FAI data ticket submitted. Adrian posting Slack update to v-boo and Yu. Matching accuracy limited until FAI resolves. Monitor closely.' },
    { csm:'rani',   health:'Healthy',    account:'Cisco',
      opp:'Vitally Pulse &mdash; Jun 1 Call (X-cov &middot; Pam Huck)', arr:'Enterprise &middot; Rani Guy (covering Pam Huck)', csmlbl:'Rani Guy (X-cov)',
      change:'Jun 1 &middot; Check-in &mdash; Data file review',
      excerpt:'6/1 RG (x-cov for Pam): Data file review with Michael Xu (2:00 PM PT, 30 min). HG account match rates under evaluation during Cisco Live week. Rani covering Pam. Pam to be briefed on findings. Cisco pulse = Poor, $2.3M ARR. Follow-up needed.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top"><div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div><span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span></div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="pulse-card" data-csm="andy" data-health="Healthy">
    <div class="pulse-card-top"><div><div class="pulse-account">Ever Pure</div><div class="pulse-opp">Vitally Pulse &mdash; Jun 1 Call</div><div class="pulse-arr">Evaluation &middot; Andy Lim</div></div><span class="badge badge-healthy">&#128994; Healthy</span></div>
    <div class="pulse-excerpt">6/1 AL: Biweekly sync (2:00 AM PT, 27 min, Source: Four/Four). Charlie Morgans (Ever Pure) evaluating HG platform. Reviewed install and spend data &mdash; cloud columns missing, suspected ETL/ingestion gap. Snowflake integration discussed for company-wide adoption. Product taxonomy catalog requested. Proactive customer; expanding use cases. Andy + Angus supporting.</div>
    <div class="pulse-footer"><span>Andy Lim</span><span>Jun 1 &middot; Check-in &mdash; Platform evaluation sync</span></div>
  </div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#128269;</div>No pulses match these filters.</div>`;
}

function dayActionsHTML_2026_06_01() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(102)?'done':''}" data-csm="nick" id="action-102"><div class="action-checkbox ${doneActions.has(102)?'checked':''}" onclick="toggleAction(102)"></div><div class="action-body"><div class="action-title">&#x1F4C8; Intuit &mdash; Send formal expansion proposal to Lorena Fortuna this week</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Hayden Smith (HG AE) has the pricing calculator ready. Annabelle\'s departure opened a re-entry window. Nick to finalize proposal covering account scoring + MCP credits and send to Lorena Fortuna. Window is open now — move this week.</div></div></div>
    <div class="action-item ${doneActions.has(103)?'done':''}" data-csm="pam" id="action-103"><div class="action-checkbox ${doneActions.has(103)?'checked':''}" onclick="toggleAction(103)"></div><div class="action-body"><div class="action-title">&#x1F534; Cisco &mdash; Pam Huck to get briefed on Michael Xu match-rate findings</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Pam Huck &middot; Rani Guy covered the Cisco sync and surfaced data match-rate concerns from Michael Xu. Cisco pulse = Poor, $2.3M ARR. Pam to be briefed on findings from Rani and Adrian and determine follow-up action this week. Critical account.</div></div></div>
    <div class="action-item ${doneActions.has(101)?'done':''}" data-csm="varun" id="action-101"><div class="action-checkbox ${doneActions.has(101)?'checked':''}" onclick="toggleAction(101)"></div><div class="action-body"><div class="action-title">&#x1F4CB; Autodesk &mdash; Get introduced to David Guo's UK colleague before Jun 9</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; David Guo is sending an intro to his UK colleague who will be the Autodesk MadKudu contact during his 12-week paternity leave (Jun 9&ndash;Aug 31). Varun to accept intro, establish relationship, and get up to speed on account context before David leaves. Do not let this slip.</div></div></div>
    <div class="action-item ${doneActions.has(104)?'done':''}" data-csm="varun" id="action-104"><div class="action-checkbox ${doneActions.has(104)?'checked':''}" onclick="toggleAction(104)"></div><div class="action-body"><div class="action-title">&#x1F4E4; Autodesk &mdash; Send coverage handoff email before David Guo's leave</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Draft and send a handoff email to David Guo and his UK colleague. Include: escalation path, coverage CSM contact, guidance to flag any major changes, and "no significant changes planned" assurance. Deadline: before Jun 9.</div></div></div>
    <div class="action-item ${doneActions.has(105)?'done':''}" data-csm="rani" id="action-105"><div class="action-checkbox ${doneActions.has(105)?'checked':''}" onclick="toggleAction(105)"></div><div class="action-body"><div class="action-title">&#x1F4E6; Workday &mdash; Submit Databricks delivery config; keep Snowflake intact</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; Workday ML team needs HG data in Databricks for AI agent pipeline. Rani to coordinate with Austin (HG data engineering) who set up the original Snowflake/Fivetran path, then submit Databricks delivery configuration. Snowflake pipeline must not be disrupted.</div></div></div>
    <div class="action-item ${doneActions.has(106)?'done':''}" data-csm="rani" id="action-106"><div class="action-checkbox ${doneActions.has(106)?'checked':''}" onclick="toggleAction(106)"></div><div class="action-body"><div class="action-title">&#x1F4CB; NetApp &mdash; Follow up on FAI data ticket with v-boo and Yu</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; NetApp matching is limited to company name only — no URLs or DUNS. FAI data ticket submitted. Rani to confirm v-boo and Yu are working the ticket. Adrian posting Slack update. Matching accuracy will remain limited until FAI data is available.</div></div></div>
    <div class="action-item ${doneActions.has(107)?'done':''}" data-csm="nick" id="action-107"><div class="action-checkbox ${doneActions.has(107)?'checked':''}" onclick="toggleAction(107)"></div><div class="action-body"><div class="action-title">&#x1F4C8; IBM &mdash; GenAI follow-up with Clayton Cutbush and David Bush team</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; Share a capabilities summary with David Bush and Arnav Singh following the GenAI walkthrough. Clayton Cutbush to coordinate next steps internally. Identify concrete expansion use cases and track as active opportunity at $3.3M ARR.</div></div></div>
    <div class="action-item ${doneActions.has(108)?'done':''}" data-csm="riley" id="action-108"><div class="action-checkbox ${doneActions.has(108)?'checked':''}" onclick="toggleAction(108)"></div><div class="action-body"><div class="action-title">&#x1F4CB; SAP &mdash; Follow up with Helya Barezani on TR Premium Content Hosting</div><div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Riley Rogers &middot; Helya Barezani needs to consult with the SAP team on TR Premium Content Hosting. Follow up in approximately one week. Track as expansion opportunity in the $3M ARR account.</div></div></div>
    <div class="action-item ${doneActions.has(109)?'done':''}" data-csm="nick" id="action-109"><div class="action-checkbox ${doneActions.has(109)?'checked':''}" onclick="toggleAction(109)"></div><div class="action-body"><div class="action-title">&#x1F4CB; Infor &mdash; Confirm Ankar's Salesforce data pull is unblocked</div><div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Nick Johnson &middot; Ankar is building a Salesforce data pull to validate HG lift for Nicole Morgan's ELT presentation. Offer HG Solutions assistance if needed. India team public holiday Wednesday — plan timeline accordingly.</div></div></div>
  </div>
    <div class="action-item ${doneActions.has(110)?'done':''}" data-csm="andy" id="action-110"><div class="action-checkbox ${doneActions.has(110)?'checked':''}" onclick="toggleAction(110)"></div><div class="action-body"><div class="action-title">&#x1F4CB; Ever Pure &mdash; Fix missing cloud/spend columns + send taxonomy catalog</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Andy Lim &middot; Charlie Morgans (Ever Pure) could not find cloud columns in the received data. Andy to: (1) raise a ticket to enable cloud and spend columns for Charlie\'s views, (2) send the product dimension/taxonomy catalog to help Charlie map HG products to their internal naming, (3) support Snowflake integration with Charlie\'s data team.</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#128269;</div>No action items match these filters.</div>`;
}

function weeklyOrMonthlyHTML_2026_06_01() {
  return `<div class="section-label">June 2026 &mdash; Monthly Summary (First Day)</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>June 2026 in progress &mdash; Day 1 of ~21 workdays.</strong> Data will accumulate throughout the month as daily reports are added.
  </div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:12px;">
    <div style="background:#141820;border:1px solid #1e293b;border-radius:8px;padding:12px;">
      <div style="color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;">June 1 Calls by CSM</div>
      <div style="font-size:12px;color:#cbd5e1;line-height:1.8;">
        Nick Johnson: <strong style="color:#0ea5e9;">4</strong><br>
        Rani Guy: <strong style="color:#0ea5e9;">4</strong><br>
        Atisha Waghela: <strong style="color:#0ea5e9;">1</strong><br>
        Varun Tiwari: <strong style="color:#0ea5e9;">1</strong><br>
        Riley Rogers: <strong style="color:#0ea5e9;">1</strong><br>
        Pam Huck: <strong style="color:#64748b;">1 (contextual)</strong><br>
        Divyam Dewan: <strong style="color:#475569;">0</strong><br>
        Andy Lim: <strong style="color:#475569;">0</strong>
      </div>
    </div>
    <div style="background:#141820;border:1px solid #1e293b;border-radius:8px;padding:12px;">
      <div style="color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px;">June 1 Accounts Touched</div>
      <div style="font-size:12px;color:#cbd5e1;line-height:1.8;">
        Veeam (Nick &middot; &#x1F4C8;&#x1F4C8; CEO + AI engineering)<br>
        IBM (Nick &middot; &#x1F4C8; GenAI walkthrough)<br>
        Intuit (Nick &middot; &#x1F4C8; expansion proposal)<br>
        SAP (Riley &middot; &#x1F4C8; TR Premium Content)<br>
        Autodesk (Varun &middot; &#x1F7E1; David Guo on leave Jun 9)<br>
        Workday (Rani &middot; &#x1F7E1; Databricks migration)<br>
        NetApp (Rani &middot; &#x1F7E1; matching issue)<br>
        AWS / Infor / TD Synnex / Cisco
      </div>
    </div>
  </div>
  <div style="background:#141820;border:1px solid #1e293b;border-radius:8px;padding:12px;margin-bottom:8px;">
    <div style="color:#64748b;font-size:10px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">Top Action Items Heading into June Week 1</div>
    <div style="font-size:12px;color:#cbd5e1;line-height:2;">
      <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;Autodesk &mdash; Varun to get introduced to David Guo's UK colleague before Jun 9 (David on leave Jun 9&ndash;Aug 31)<br>
      <span style="color:#ef4444;font-weight:600;">HIGH</span> &nbsp;Intuit &mdash; Nick + Hayden to send formal proposal to Lorena Fortuna this week<br>
      <span style="color:#ef4444;font-weight:600;">HIGH</span> &nbsp;Cisco &mdash; Pam Huck to get briefed on Michael Xu match-rate findings (Rani covered)<br>
      <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;Workday &mdash; Rani to set up Databricks delivery (keep Snowflake intact)<br>
      <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;NetApp &mdash; Rani to confirm FAI data ticket progress with v-boo and Yu<br>
      <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;IBM &mdash; Nick to confirm GenAI follow-up next steps with Clayton Cutbush
    </div>
  </div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// June 2, 2026
// 8 confirmed calls · Nick(4) Varun(2) Rani(1) Riley(1) · 2 Watch signals
// ─────────────────────────────────────────────────────────────────────────────

function dayData_2026_06_02() {
  return {
    calls: [
      {
        ts: 'Jun 2 · 3:00 AM', csm: 'nick', account: 'Accenture',
        note: 'Renewal — Avanade expansion access; 24-month minimum term concern flagged by Kelly Gumber',
        mins: 30, health: 'Concerning', nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Kelly Gumber (Accenture procurement) flagged that the required 24-month minimum contract term may be a blocker for the Avanade access expansion (~$100K/annum additional). Contract currently under approvals. David Garcia Thomas (HG AM, London) and Nick on the call. Kelly to revert internally.',
      },
      {
        ts: 'Jun 2 · 6:00 AM', csm: 'varun', account: 'Autodesk Inc',
        note: 'Data retrieval Q&A — Snowflake/AWS marketplace; new eng. contacts Matthew Ding + Mohammed Tanveer',
        mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Varun + Alexi Mouarkach (HG SE) met with Matthew Ding (Sr. Engineering Manager, Autodesk data platform) and Mohammed Tanveer (Principal Engineer). Clarified: only contextual intent on Snowflake; RGIP/RGIF available on AWS marketplace. New data platform team introduced to HG.',
      },
      {
        ts: 'Jun 2 · 7:30 AM', csm: 'nick', account: 'IBM',
        note: 'HG contact introduction — Clayton Cutbush introduced; updated DQ scoring delivered to Peter Herr team',
        mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'HG team (Nick Johnson, Karin Pindle NY, Clayton Cutbush) introduced Clayton to IBM contacts (Peter Herr, Ishan Sharma, Kruti Desai, Nicole Jackson). Clayton shared updated DQ/disqualification scoring — records now show "DQ" with hard disqualify criteria. Long-term system rework still pending.',
      },
      {
        ts: 'Jun 2 · 8:00 AM', csm: 'varun', account: "ServiceNow Inc's",
        note: 'Custom spend categories — 4 new products submitted; monthly tracking cadence proposed',
        mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Varun + Doug Oliver-Watts (HG) with Santhosh Ronanki, Ramya Dudala, Anwesha Basu, Ravi Sharma (ServiceNow). 4 new products already submitted for tracking. Varun proposed monthly cadence for ongoing requests. SLA: submit before 15th of month, ~30-day publish cycle.',
      },
      {
        ts: 'Jun 2 · 8:30 AM', csm: 'nick', account: 'Veeam Software AG',
        note: 'TR event prep (Jun 3) — SecurityAI review eligibility Q; last-minute ask from Abigail Fish',
        mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Nick + Angus (HG) attending Veeam TrustRadius review collection event June 3, alongside Cassidy (HG). Abigail Fish asked about SecurityAI (Veeam acquisition) — not a paid vendor yet but falls under Veeam portfolio for review purposes. Last-minute request turned around quickly.',
      },
      {
        ts: 'Jun 2 · 8:30 AM', csm: 'rani', account: 'Meraki (Cisco)',
        note: 'Onboarding sync — platform login issue at call start; AI account brief demo well-received by Melanie',
        mins: 30, health: 'Concerning', nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Rani + Adrian Escobar + Max Paulus (HG) onboarding Meraki team (Melanie, Rashad, Sijac). Platform login issue flagged at call start — engineering working on fix. Melanie already in platform via welcome email. AI account brief demo was the customer\'s top ask and well-received.',
      },
      {
        ts: 'Jun 2 · 9:30 AM', csm: 'nick', account: 'SAP Inc',
        note: 'Biweekly — product mapping refresh (RGIF updated counts); MCP testing update from Shipra Chaudhary',
        mins: 30, health: 'Healthy', nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Nick + Joaquin + Adriana Aguiar + Shipra Chaudhary (SAP co-host). Nick delivered product mapping refresh: Column A updated to current data feed, counts updated from RGIF. Shipra briefing on MCP testing — early phase, next steps TBD. Rafiq absent.',
      },
      {
        ts: 'Jun 2 · 11:00 AM', csm: 'riley', account: 'Paycom Software Inc',
        note: 'CSM intro (Riley replacing Sasha since Jan 2026) — Top Rated win; media kit follow-up needed',
        mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley\'s first meeting with Paycom team. Met Larisha Hunter (new contact), plus Peyton VanCuren, Katie Lenhart, Alexis Correa. Paycom won TrustRadius Top Rated — automated media kit email not confirmed received by Katie or Larisha. TrustRadius AI webinar well-received by Peyton.',
      },
    ],
    pulses: [
      { csm: 'nick',  account: 'Accenture',           health: 'Concerning', note: 'Renewal contract in approvals. Avanade access expansion (~$100K/annum) flagged 24-month term concern. Kelly Gumber to revert after internal check. Watch for renewal delay risk.' },
      { csm: 'varun', account: 'Autodesk Inc',         health: 'Healthy',    note: 'Data retrieval Q&A with new data platform team (Matthew Ding, Mohammed Tanveer). Snowflake/AWS marketplace clarified. RGIP/RGIF introduced to new engineering contacts.' },
      { csm: 'nick',  account: 'IBM',                  health: 'Healthy',    note: 'HG contact introduction. Clayton Cutbush introduced to IBM team (Peter Herr, Ishan Sharma, Kruti Desai). Updated DQ scoring delivered. Long-term system rework pending.' },
      { csm: 'varun', account: "ServiceNow Inc's",     health: 'Healthy',    note: 'Custom spend category session. 4 new products submitted. Monthly tracking cadence proposed. 30-day SLA explained to Santhosh Ronanki. Strong team engagement.' },
      { csm: 'nick',  account: 'Veeam Software AG',    health: 'Healthy',    note: 'TrustRadius event prep for Jun 3. HG team (Nick, Angus, Cassidy) attending review collection. SecurityAI review eligibility confirmed under Veeam portfolio. Abigail Fish engaged.' },
      { csm: 'rani',  account: 'Meraki (Cisco)',        health: 'Concerning', note: 'Onboarding sync. Platform login issue flagged at call start — engineering working on fix. Melanie already in platform. AI account brief demo well-received as top use case.' },
      { csm: 'nick',  account: 'SAP Inc',              health: 'Healthy',    note: 'Biweekly sync. Product mapping refresh (RGIF updated counts) delivered. Shipra Chaudhary on MCP testing — early phase, next steps TBD. Rafiq absent. Steady cadence.' },
      { csm: 'riley', account: 'Paycom Software Inc',  health: 'Healthy',    note: 'CSM intro call. Met Larisha Hunter (new contact). Paycom won Top Rated — media kit follow-up needed for Katie Lenhart + Larisha. TrustRadius AI webinar well-received by Peyton.' },
    ]
  };
}

function dayMeta_2026_06_02() {
  return {
    pills: [
      ['dot-teal',  '8 Calls'],
      ['dot-amber', '⚠️ Platform Issue · Meraki login'],
      ['dot-red',   '2 Watch Signals'],
      ['dot-grey',  'Tue Jun 2 · 76 recordings scanned'],
    ],
    tabs: ['Overview', 'Calls (8)', 'Pulses (8)', 'Action Items (7)'],
  };
}

function dayOverviewHTML_2026_06_02() {
  return `<div class="section-label">Team Activity &mdash; Tuesday June 2, 2026</div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Platform Login Issue &mdash; Meraki (Cisco):</strong> Adrian Escobar reported the platform login was not working at the start of Rani Guy&rsquo;s onboarding sync. Engineering working on fix. Newly onboarded contacts (Melanie, Rashad, Sijac) may be blocked. Confirm resolution today.
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Accenture Renewal Watch:</strong> Kelly Gumber flagged 24-month minimum term concern for Avanade expansion access (~$100K/annum additional). Contract in approvals. David Garcia Thomas (HG AM, London) presenting justification. Resolution TBD.
  </div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tue Jun 2 &mdash; 76 recordings scanned</strong> via SFDC SOQL &middot; <strong>8 confirmed calls</strong> across 4 CSMs &middot; 5 unconfirmed (no transcript) &middot; 1 internal HG meeting excluded
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">120m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Accenture (renewal &middot; Avanade 24-month concern) &middot; IBM (HG contact intro &middot; DQ scoring) &middot; Veeam (TR event prep Jun 3) &middot; SAP (biweekly &middot; product mapping refresh)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Autodesk (data retrieval Q&amp;A &middot; new eng. contacts Matthew Ding + Mohammed Tanveer) &middot; ServiceNow (custom spend categories &middot; 4 products submitted)</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Meraki / Cisco &mdash; onboarding sync. &#x26A0;&#xFE0F; Platform login issue at call start. AI account brief demo well-received by Melanie (new contact).</div>
    </div>

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Paycom &mdash; CSM intro call (Riley replacing Sasha since Jan 2026). Top Rated win. Media kit follow-up needed for Katie Lenhart + Larisha Hunter.</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <div class="csm-card-header">
        <div class="avatar av-grey">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">2</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">2 Adobe SFDC events (GTM Tool Review + New Role Discussion) &mdash; no transcript on any recording. Calls may have occurred without Weflow transcript.</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">2</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">2 Cisco SFDC events (TR Quick Sync 7AM + TR Logistics Sync 9AM) &mdash; no transcript on either recording. Calls likely held but unconfirmed.</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">4</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">3+ SFDC events (Apple &times;2, Converge, SFDC ASEAN 11PM APAC) &mdash; none with transcripts. Highest unverified event count today.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">4</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">4+ SFDC events (memoryBlue &times;2, ConnectWise, Toast, FactSet) &mdash; no recordings or transcripts linked. Highest unverified event count of the day.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_02() {
  return `<div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Platform Login Issue &mdash; Meraki:</strong> Login not working at call start. Engineering working on fix. Confirm resolution for newly onboarded contacts.
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Accenture Renewal Watch:</strong> Avanade expansion (~$100K/annum) stalled on 24-month minimum term. Kelly Gumber to revert after internal check.
  </div>
  <table style="width:100%;border-collapse:collapse;font-size:12px;">
    <thead>
      <tr style="border-bottom:1px solid #1e2533;">
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Time (PT)</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">CSM</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Account</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Dur</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Note</th>
        <th style="padding:6px 10px;color:#64748b;text-transform:uppercase;font-size:10px;letter-spacing:.07em;text-align:left;">Signal</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">3:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Accenture</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Renewal &mdash; Avanade expansion access; Kelly Gumber flagged 24-month term concern</td>
        <td style="padding:6px 10px;color:#f59e0b;">&#x1F7E1; Watch</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">6:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#3a1f1a;color:#fca5a5;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Varun</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Autodesk Inc</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Data retrieval Q&amp;A &mdash; Snowflake/AWS marketplace; new contacts Matthew Ding + Mohammed Tanveer</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">7:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">IBM</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">HG contact intro &mdash; Clayton Cutbush introduced; DQ scoring update delivered to Peter Herr team</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">8:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#3a1f1a;color:#fca5a5;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Varun</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">ServiceNow Inc</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Custom spend categories &mdash; 4 new products submitted; monthly tracking cadence proposed</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">8:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Veeam Software AG</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">TR event prep (Jun 3) &mdash; SecurityAI review Q; last-minute ask from Abigail Fish</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">8:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1a3a1a;color:#86efac;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Rani</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Meraki (Cisco)</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Onboarding sync &mdash; &#x26A0;&#xFE0F; platform login issue at call start; AI account brief demo well-received</td>
        <td style="padding:6px 10px;color:#f59e0b;">&#x1F7E1; Watch</td>
      </tr>
      <tr style="border-bottom:1px solid #1a2030;">
        <td style="padding:6px 10px;color:#94a3b8;">9:30 AM</td>
        <td style="padding:6px 10px;"><span style="background:#1e3a5f;color:#7dd3fc;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Nick</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">SAP Inc</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Biweekly &mdash; product mapping refresh (RGIF updated counts); MCP testing update from Shipra</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
      <tr>
        <td style="padding:6px 10px;color:#94a3b8;">11:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#2d1e4f;color:#c4b5fd;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Riley</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Paycom Software Inc</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">CSM intro (replacing Sasha since Jan 2026) &mdash; Top Rated win; media kit follow-up needed</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
      </tr>
    </tbody>
  </table>`;
}

function dayPulsesHTML_2026_06_02() {
  const cards = [
    { csm:'nick',   health:'Concerning', account:'Accenture',
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 2 &middot; Renewal Watch &mdash; 24-month term concern',
      excerpt:'6/2 NJ: Renewal / Avanade expansion access call (3:00 AM PT, 30 min). Kelly Gumber (Accenture procurement) flagged that the 24-month minimum contract term may block the Avanade access expansion (~$100K/annum). Contract currently under approvals. Kelly to revert after internal check. David Garcia Thomas (HG AM London) co-attended.' },
    { csm:'varun',  health:'Healthy',    account:'Autodesk Inc',
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 2 &middot; Check-in &mdash; New data platform contacts',
      excerpt:'6/2 VT: Data retrieval Q&A with new Autodesk data platform team (6:00 AM PT, 30 min). Matthew Ding (Sr. Engineering Manager) and Mohammed Tanveer (Principal Engineer) introduced to HG. Clarified: only contextual intent on Snowflake; RGIP/RGIF available on AWS marketplace. Alexi Mouarkach (HG SE) co-attended.' },
    { csm:'nick',   health:'Healthy',    account:'IBM',
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 2 &middot; Check-in &mdash; HG contact introduction',
      excerpt:'6/2 NJ: HG contact introduction call (7:30 AM PT, 30 min). Clayton Cutbush (HG) introduced to IBM team — Peter Herr, Ishan Sharma, Kruti Desai, Nicole Jackson. Updated DQ scoring delivered: records now show "DQ" with hard disqualify criteria instead of blank fields. Long-term system rework still pending with Karin Pindle.' },
    { csm:'varun',  health:'Healthy',    account:"ServiceNow Inc's",
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 2 &middot; Check-in &mdash; Custom spend categories',
      excerpt:'6/2 VT: Custom spend category validation session (8:00 AM PT, 30 min). 4 new products submitted for tracking. Varun proposed monthly cadence for ongoing requests. SLA explained: submit before 15th, ~30-day publish cycle. Santhosh Ronanki, Ramya Dudala, Anwesha Basu, Ravi Sharma (ServiceNow) attended. Doug Oliver-Watts (HG) co-attended.' },
    { csm:'nick',   health:'Healthy',    account:'Veeam Software AG',
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 2 &middot; Check-in &mdash; TrustRadius event prep',
      excerpt:'6/2 NJ: TrustRadius event prep call (8:30 AM PT, 30 min). HG team (Nick, Angus, Cassidy) attending Veeam review collection event Jun 3. Last-minute ask from Abigail Fish (Veeam) turned around quickly. SecurityAI (Veeam acquisition) review eligibility confirmed — falls under Veeam portfolio.' },
    { csm:'rani',   health:'Concerning', account:'Meraki (Cisco)',
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 2 &middot; Check-in &mdash; Platform login issue',
      excerpt:'6/2 RG: Onboarding sync with new Meraki contacts (8:30 AM PT, 30 min). Platform login issue flagged at call start — engineering team working on fix. Melanie already in platform via welcome email. AI account brief demo was the customer\'s top interest and well-received. Adrian Escobar + Max Paulus (HG) co-attended.' },
    { csm:'nick',   health:'Healthy',    account:'SAP Inc',
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 2 &middot; Check-in',
      excerpt:'6/2 NJ: Biweekly sync (9:30 AM PT, 30 min). Product mapping refresh delivered — Column A updated to current data feed, counts refreshed from RGIF. Shipra Chaudhary briefed on MCP testing status: early phase, next steps TBD. Joaquin + Adriana Aguiar (SAP) attended. Rafiq absent.' },
    { csm:'riley',  health:'Healthy',    account:'Paycom Software Inc',
      opp:'Vitally Pulse &mdash; Jun 2 Call', arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 2 &middot; Check-in &mdash; CSM intro + Top Rated',
      excerpt:'6/2 RR: CSM intro call replacing Sasha (left Jan 2026) (11:00 AM PT, 30 min). Met Larisha Hunter (new Paycom contact) for the first time. Peyton VanCuren, Katie Lenhart, Alexis Correa also attended. Paycom won TrustRadius Top Rated — media kit follow-up needed for Katie + Larisha. TrustRadius AI webinar well-received by Peyton.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top"><div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div><span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span></div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#128269;</div>No pulses match these filters.</div>`;
}

function dayActionsHTML_2026_06_02() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(201)?'done':''}" data-csm="rani" id="action-201"><div class="action-checkbox ${doneActions.has(201)?'checked':''}" onclick="toggleAction(201)"></div><div class="action-body"><div class="action-title">&#x26A0;&#xFE0F; Meraki (Cisco) &mdash; Confirm platform login fix deployed for new onboarded contacts</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Platform login was not working at the start of today\'s onboarding call. Engineering team working on fix. Rani to confirm the fix is deployed and that Melanie, Rashad, and Sijac can all successfully log in. Newly onboarded contacts are blocked on Day 1.</div></div></div>
    <div class="action-item ${doneActions.has(202)?'done':''}" data-csm="riley" id="action-202"><div class="action-checkbox ${doneActions.has(202)?'checked':''}" onclick="toggleAction(202)"></div><div class="action-body"><div class="action-title">&#x1F3C6; Paycom &mdash; Send Top Rated media kit to Katie Lenhart and Larisha Hunter</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers &middot; Paycom won TrustRadius Top Rated. Automated media kit email was sent but neither Katie Lenhart nor Larisha Hunter confirmed receipt. Riley to send directly to both contacts today and confirm they have the media kit and badge assets.</div></div></div>
    <div class="action-item ${doneActions.has(203)?'done':''}" data-csm="nick" id="action-203"><div class="action-checkbox ${doneActions.has(203)?'checked':''}" onclick="toggleAction(203)"></div><div class="action-body"><div class="action-title">&#x1F4CB; Accenture &mdash; Follow up with Kelly Gumber on Avanade 24-month contract term</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson + David Garcia Thomas &middot; Kelly Gumber flagged that the 24-month minimum term may block the Avanade expansion (~$100K/annum additional). Kelly to check internally. Nick and David to follow up and ensure the renewal doesn\'t stall in approvals. Clarify whether a shorter initial term is feasible.</div></div></div>
    <div class="action-item ${doneActions.has(204)?'done':''}" data-csm="nick" id="action-204"><div class="action-checkbox ${doneActions.has(204)?'checked':''}" onclick="toggleAction(204)"></div><div class="action-body"><div class="action-title">&#x1F4C5; Veeam &mdash; Confirm TrustRadius Jun 3 event logistics with Angus and Cassidy</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; HG team (Nick, Angus, Cassidy) attending Veeam TrustRadius review collection event tomorrow June 3. Confirm all logistics are in place. SecurityAI review eligibility guidance ready for any attendees who ask.</div></div></div>
    <div class="action-item ${doneActions.has(205)?'done':''}" data-csm="varun" id="action-205"><div class="action-checkbox ${doneActions.has(205)?'checked':''}" onclick="toggleAction(205)"></div><div class="action-body"><div class="action-title">&#x1F4CB; ServiceNow &mdash; Confirm 4 product submissions; establish monthly tracking cadence</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Confirm the 4 new product tracking submissions are in the internal system. Set up a formal monthly check-in cadence with Santhosh Ronanki so ServiceNow can submit ongoing product tracking requests before the 15th of each month.</div></div></div>
    <div class="action-item ${doneActions.has(206)?'done':''}" data-csm="varun" id="action-206"><div class="action-checkbox ${doneActions.has(206)?'checked':''}" onclick="toggleAction(206)"></div><div class="action-body"><div class="action-title">&#x1F4E4; Autodesk &mdash; Send written summary of RGIP/RGIF and AWS marketplace options</div><div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Varun Tiwari &middot; Matthew Ding (Autodesk) had questions about Snowflake vs. AWS marketplace data delivery. Send a written follow-up covering: contextual intent on Snowflake only, RGIP/RGIF availability on AWS, and recommended delivery path for Autodesk's use case.</div></div></div>
    <div class="action-item ${doneActions.has(207)?'done':''}" data-csm="nick" id="action-207"><div class="action-checkbox ${doneActions.has(207)?'checked':''}" onclick="toggleAction(207)"></div><div class="action-body"><div class="action-title">&#x1F4CB; IBM &mdash; Coordinate with Clayton Cutbush on long-term scoring system rework</div><div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Nick Johnson &middot; Clayton Cutbush discussed a long-term system rework on the DQ scoring model with Karin Pindle. Nick to ensure this is tracked and coordinate next steps with Clayton. Do not let this fall through the cracks after the introduction call.</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#128269;</div>No action items match these filters.</div>`;
}


// ---- June 3, 2026 ----

function dayData_2026_06_03() {
  return {
    calls: [
      { ts: 'Jun 3 · 6:00 AM', csm: 'andy', account: 'SAS Institute',
        note: 'HG platform demo walkthrough for global SAS team (~25 attendees, UK to Asia-Pacific)',
        mins: 60, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Andy Lim and Anna Fokina (Solutions) led recurring demo walkthrough for SAS Institute global team. ~25 attendees spanning UK, Japan, and US East Coast time zones. Multi-timezone scheduling accommodated range from "minus to plus eight London".' },
      { ts: 'Jun 3 · 7:00 AM', csm: 'riley', account: 'IBM',
        note: 'Biweekly TR sync — business cards shipped to IBM NA for events, Chaitali re-engaged',
        mins: 45, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley Rogers biweekly TR sync with IBM team (Cole Arutian, Janie Carothers, MihaelaN from Romania, Chaitali re-engaging after missing several calls). Riley confirmed business cards shipped to IBM NA for event distribution. Address confirmed, cards arrived. Program on track.' },
      { ts: 'Jun 3 · 7:30 AM', csm: 'varun', account: 'CBTS',
        note: 'Data delivery ready except contacts — DPI/PII contract not yet signed, follow-up needed',
        mins: 30, health: 'Some Risk',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Varun Tiwari bi-weekly with Mitchell VanderKam (CBTS) and Omkar Hunuswadkar (HG Customer Solutions Engineering). Data delivery complete except contact/PII fields — requires separate DPI contract. Mitchell unsure if CBTS signed; Varun to confirm and send via DZiat (returning next day). Contacts blocked pending signature.' },
      { ts: 'Jun 3 · 8:00 AM', csm: 'nick', account: 'Westcon',
        note: 'Monthly sync live from Veeam/TR London event — AccountIQ Tableau friction flagged',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Nick Johnson conducted monthly sync with Andre Armstrong (Westcon) while attending the Veeam/TrustRadius London event. Discussed Veeam\'s model built on HG data (AccountIQ in Tableau). Key friction: reps using AccountIQ must leave Salesforce to access Tableau — data gets forgotten. TR review gen activities also discussed.' },
      { ts: 'Jun 3 · 9:00 AM', csm: 'varun', account: 'Exclusive Networks',
        note: 'HG leadership approved forgoing 25K marketing exports — constraint removed ahead of renewal',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Varun Tiwari bi-weekly with M. Tinker and Angus Hyams (joining from live event). HG leadership approved forgoing 25K exports previously used by Exclusive Networks\' marketing team. Constraint removed ahead of year-end renewal. Customer expressed strong relief and appreciation. Varun and Angus noted limits will apply going forward; M. Tinker will inform the two team members who had export access.' },
      { ts: 'Jun 3 · 9:00 AM', csm: 'pam', account: 'Epicor',
        note: 'Post-Insights conference debrief — review gen blew out targets, Becky & Colby praised',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Pam Huck bi-weekly with Sam Malecek (Epicor). Post-Insights (Nashville) conference debrief. Review generation exceeded targets — TR event staff Becky and Colby praised highly. Sam walked 7 miles/day at the conference. Pam discusses "next steps" for review volume program. Strong account momentum post-event.' },
      { ts: 'Jun 3 · 9:30 AM', csm: 'riley', account: 'Paylocity',
        note: 'Top Rated announcement June 10 — renewal discussion ~$47.5K + $10K incentives',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Riley Rogers monthly sync with Matt Doyle (Paylocity). Ensured readiness for Top Rated announcement June 10 — badges ready, blog scheduled, business cards received in Chicago. Anderson (renewal decision-maker) not available today; to reschedule. Pre-renewal discussion: ~$47.5K + $10K incentive add-on; same structure as prior year expected.' },
      { ts: 'Jun 3 · 10:30 AM', csm: 'varun', account: 'Pegasystems Inc',
        note: 'Strategic expansion session — introducing KP (Solutions Engineering), new contact Taylor Crosby onboarded',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun Tiwari bi-weekly with Taylor Crosby (new Pega contact, joined 2 months ago — dual platform admin + data analytics role), Frank, Ishan Sharma, Leo Zunz. Varun introduced Karin/KP Pindle (HG Solutions Engineering) to ideate on broader strategic objectives. KP to partner on next expansion discussion. Frank invited but not confirmed present.' },
      { ts: 'Jun 3 · 12:00 PM', csm: 'divyam', account: 'Quadient Software, Inc',
        note: 'TrustQuotes API not yet implemented + Inspired document naming dispute',
        mins: 30, health: 'Some Risk',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Divyam Dewan ad-hoc call with Ashlin Haley and Lia Holmes (Quadient). Two open items: (1) TrustQuotes JS/API integration not yet completed — Divyam walked through via email and live call. (2) Naming dispute: Quadient content team uses "customer stories" (long format); TR uses "customer use case" in Inspired documents. Lia to check with content team.' }
    ],
    pulses: [
      { csm: 'Andy Lim', account: 'SAS Institute', health: 'Healthy', note: 'Global demo walkthrough delivered. ~25 attendees, multi-timezone.' },
      { csm: 'Riley Rogers', account: 'IBM', health: 'Healthy', note: 'Biweekly TR sync. Business cards shipped to IBM NA. Chaitali re-engaged.' },
      { csm: 'Varun Tiwari', account: 'CBTS', health: 'Some Risk', note: 'DPI/PII contract pending — contact delivery blocked. DZiat to follow up.' },
      { csm: 'Nick Johnson', account: 'Westcon', health: 'Healthy', note: 'Monthly sync from London event. AccountIQ Tableau friction flagged.' },
      { csm: 'Varun Tiwari', account: 'Exclusive Networks', health: 'Healthy', note: '25K export constraint resolved — leadership approved. Customer relieved ahead of renewal.' },
      { csm: 'Pam Huck', account: 'Epicor', health: 'Healthy', note: 'Post-Insights review gen blew out targets. Strong post-event momentum.' },
      { csm: 'Riley Rogers', account: 'Paylocity', health: 'Healthy', note: 'Top Rated June 10 announcement ready. Pre-renewal ~$47.5K + $10K incentives.' },
      { csm: 'Varun Tiwari', account: 'Pegasystems Inc', health: 'Healthy', note: 'Strategic expansion session. KP (SE) introduced. New contact Taylor Crosby onboarded.' },
      { csm: 'Divyam Dewan', account: 'Quadient Software, Inc', health: 'Some Risk', note: 'TrustQuotes API incomplete. Inspired document naming dispute with content team.' }
    ]
  };
}

function dayMeta_2026_06_03() {
  return {
    pills: [
      ['dot-teal',   '9 Calls'],
      ['dot-amber',  '⚠ CBTS · Quadient Issues'],
      ['dot-purple', '3 Expansion Signals'],
      ['dot-grey',   'Wed Jun 3 · 72 recordings scanned'],
    ],
    tabs: ['Overview', 'Calls (9)', 'Pulses (9)', 'Action Items (5)'],
  };
}

function dayOverviewHTML_2026_06_03() {
  return `<div class="section-label">Team Activity &mdash; Wednesday June 3, 2026</div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>CBTS &mdash; DPI/PII Contract Pending:</strong> Varun Tiwari reported data delivery is ready except contact/PII fields &mdash; blocked pending DPI contract signature. Mitchell VanderKam (CBTS) unsure if signed. DZiat to send contract on return (Jun 4). Contact data sharing blocked until signed.
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Quadient &mdash; TrustQuotes Implementation Issue:</strong> Divyam Dewan &mdash; customer hasn&rsquo;t completed JS/API integration. Dispute over Inspired document naming convention (&ldquo;customer stories&rdquo; vs &ldquo;customer use case&rdquo;). Lia Holmes to check with content team.
  </div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wed Jun 3 &mdash; 72 recordings scanned</strong> via SFDC SOQL &middot; <strong>9 confirmed calls</strong> across 6 CSMs &middot; 4 unconfirmed (no transcript) &middot; internal HG meetings excluded
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">CBTS (&#x26A0;&#xFE0F; DPI contract pending &middot; 7:30 AM) &middot; Exclusive Networks (&#x2705; export constraint resolved &middot; 9:00 AM) &middot; Pegasystems (&#x1F4C8; KP SE introduced &middot; 10:30 AM)</div>
    </div>

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">75m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM (biweekly TR sync &middot; business cards shipped &middot; 7:00 AM) &middot; Paylocity (Top Rated Jun 10 &middot; pre-renewal ~$47.5K &middot; 9:30 AM)</div>
    </div>

    <div class="csm-card has-calls" data-csm="andy">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAS Institute &mdash; global demo/training walkthrough (~25 attendees from UK to Asia-Pacific &middot; 6:00 AM)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Westcon &mdash; monthly sync conducted live from Veeam/TR London event. AccountIQ Tableau friction flagged &middot; 8:00 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Epicor &mdash; &#x2705; post-Insights conference review gen blew out targets. Becky &amp; Colby praised. Strong post-event momentum &middot; 9:00 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="divyam">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Quadient &mdash; &#x26A0;&#xFE0F; TrustQuotes JS/API not yet implemented &middot; Inspired document naming dispute with content team &middot; 12:00 PM</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">5</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">5 SFDC events (Google, Cisco Win Ctr, Lenovo, Oracle, Cisco GRO) &mdash; no matching recordings with transcripts. Calls likely held but unconfirmed.</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">2</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">EY Standing Sync &mdash; recording exists but no transcript. Salesforce Weekly Sync &mdash; no recording found. Both unconfirmed.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_03() {
  return `
<table class="calls-table">
  <thead>
    <tr><th>Time (PT)</th><th>CSM</th><th>Account</th><th>Duration</th><th>Nature</th><th>Initiator</th><th>Purpose</th><th>Signal</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>6:00 AM</td>
      <td><span class="csm-chip">Andy Lim</span></td>
      <td>SAS Institute</td>
      <td>60 min</td>
      <td>Recurring</td>
      <td>HG CS</td>
      <td>Check-in · Demo</td>
      <td><span class="badge healthy">Healthy</span></td>
    </tr>
    <tr>
      <td>7:00 AM</td>
      <td><span class="csm-chip riley">Riley Rogers</span></td>
      <td>IBM</td>
      <td>45 min</td>
      <td>Recurring</td>
      <td>HG CS</td>
      <td>Check-in</td>
      <td><span class="badge healthy">Healthy</span></td>
    </tr>
    <tr>
      <td>7:30 AM</td>
      <td><span class="csm-chip varun">Varun Tiwari</span></td>
      <td>CBTS</td>
      <td>30 min</td>
      <td>Recurring</td>
      <td>HG CS</td>
      <td>Check-in · Issue</td>
      <td><span class="badge risk">⚠ Issue</span></td>
    </tr>
    <tr>
      <td>8:00 AM</td>
      <td><span class="csm-chip">Nick Johnson</span></td>
      <td>Westcon</td>
      <td>30 min</td>
      <td>Recurring</td>
      <td>HG CS</td>
      <td>Check-in</td>
      <td><span class="badge healthy">Healthy</span></td>
    </tr>
    <tr>
      <td>9:00 AM</td>
      <td><span class="csm-chip varun">Varun Tiwari</span></td>
      <td>Exclusive Networks</td>
      <td>30 min</td>
      <td>Recurring</td>
      <td>HG CS</td>
      <td>Check-in</td>
      <td><span class="badge healthy">✅ Positive</span></td>
    </tr>
    <tr>
      <td>9:00 AM</td>
      <td><span class="csm-chip pam">Pam Huck</span></td>
      <td>Epicor</td>
      <td>30 min</td>
      <td>Recurring</td>
      <td>Customer</td>
      <td>Check-in · Expansion</td>
      <td><span class="badge healthy">✅ Positive</span></td>
    </tr>
    <tr>
      <td>9:30 AM</td>
      <td><span class="csm-chip riley">Riley Rogers</span></td>
      <td>Paylocity</td>
      <td>30 min</td>
      <td>Recurring</td>
      <td>HG CS</td>
      <td>Check-in · Expansion</td>
      <td><span class="badge expansion">📈 Renewal</span></td>
    </tr>
    <tr>
      <td>10:30 AM</td>
      <td><span class="csm-chip varun">Varun Tiwari</span></td>
      <td>Pegasystems</td>
      <td>30 min</td>
      <td>Recurring</td>
      <td>HG CS</td>
      <td>Check-in · Expansion</td>
      <td><span class="badge expansion">📈 Expansion</span></td>
    </tr>
    <tr>
      <td>12:00 PM</td>
      <td><span class="csm-chip divyam">Divyam Dewan</span></td>
      <td>Quadient</td>
      <td>30 min</td>
      <td>Ad-hoc</td>
      <td>Customer</td>
      <td>Issue</td>
      <td><span class="badge risk">⚠ Issue</span></td>
    </tr>
  </tbody>
</table>
<div class="callout-banner unconfirmed">
  <strong>Unconfirmed (no transcript, inferred from event):</strong>
  Nick Johnson / Capgemini (1:00 AM) · Andy Lim / SAS Training (6:15 AM) · Atisha Waghela / EY (6:30 AM) · Varun Tiwari / Five9 (8:30 AM)
</div>`;
}

function dayPulsesHTML_2026_06_03() {
  const cards = [
    { csm:'andy',   health:'Healthy',    account:'SAS Institute',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
      change:'Jun 3 &middot; Check-in &mdash; Global demo/training',
      excerpt:'6/3 AL: Recurring global demo/training walkthrough (6:00 AM PT, 60 min). ~25 attendees from UK, Japan, and US East Coast. Andy Lim and Anna Fokina (Solutions) hosted. Multi-timezone scheduling: "stretching from minus to plus eight London". Healthy engagement across the global SAS team.' },
    { csm:'riley',  health:'Healthy',    account:'IBM',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 3 &middot; Check-in &mdash; Business cards shipped',
      excerpt:'6/3 RR: Biweekly TrustRadius sync (7:00 AM PT, 45 min). Business cards confirmed shipped to IBM North America for event distribution — address sent by Chaitali. Chaitali re-engaged after missing several recent calls. Riley confirmed business card receipt. Program cadence on track.' },
    { csm:'varun',  health:'Concerning', account:'CBTS',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 3 &middot; Issue &mdash; DPI/PII contract pending',
      excerpt:'6/3 VT: Bi-weekly sync (7:30 AM PT, 30 min). Data delivery complete except contact/PII fields — blocked on unsigned DPI contract. Mitchell VanderKam (CBTS) unsure if signed. Varun to confirm via DZiat (returning Jun 4). Omkar Hunuswadkar (HG CSE) introduced. Contact data sharing cannot proceed until contract is signed.' },
    { csm:'nick',   health:'Healthy',    account:'Westcon',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Strategic &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 3 &middot; Check-in &mdash; Live from London event',
      excerpt:'6/3 NJ: Monthly sync conducted live from the Veeam/TrustRadius London event (8:00 AM PT, 30 min). Discussed Veeam\'s AccountIQ model built on HG data — friction: reps must leave Salesforce to access Tableau. Nick + Angus attending the event. Strong relationship signal; Veeam customers spoke positively about HG data quality.' },
    { csm:'varun',  health:'Healthy',    account:'Exclusive Networks',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 3 &middot; Check-in &mdash; Export constraint resolved',
      excerpt:'6/3 VT: Bi-weekly sync (9:00 AM PT, 30 min). HG leadership approved forgoing 25K exports previously used by Exclusive Networks\' marketing team. Constraint removed ahead of year-end renewal. M. Tinker expressed strong relief. Angus Hyams joined briefly from a live event. Positive relationship signal heading into renewal season.' },
    { csm:'pam',    health:'Healthy',    account:'Epicor',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck',
      change:'Jun 3 &middot; Check-in &mdash; Post-event review gen win',
      excerpt:'6/3 PH: Bi-weekly TrustRadius sync (9:00 AM PT, 30 min). Post-Insights Nashville conference debrief — review generation blew out targets. TR event staff Becky and Colby received high praise from Sam Malecek (Epicor). Pam proactively secured strong staff. Next steps for review volume program discussed. Strong post-event momentum.' },
    { csm:'riley',  health:'Healthy',    account:'Paylocity',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 3 &middot; Expansion &mdash; Top Rated + pre-renewal',
      excerpt:'6/3 RR: Monthly TrustRadius sync (9:30 AM PT, 30 min). Top Rated announcement ready for June 10 &mdash; badges delivered, blog scheduled, business cards arrived in Chicago. Pre-renewal discussion: ~$47.5K + $10K incentive add-on, same structure as prior year expected. Anderson (renewal decision-maker) to join separately for sign-off.' },
    { csm:'varun',  health:'Healthy',    account:'Pegasystems Inc',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 3 &middot; Expansion &mdash; Strategic objectives + new contact',
      excerpt:'6/3 VT: Bi-weekly sync (10:30 AM PT, 30 min). New contact Taylor Crosby (dual platform admin + data analytics role, joined Pega 2 months ago) introduced to Varun. KP/Karin Pindle (HG Solutions Engineering) brought in to ideate on broader strategic objectives. Frank also on call. Expansion discussion to be formalised in next session.' },
    { csm:'divyam', health:'Concerning', account:'Quadient Software, Inc',
      opp:'Vitally Pulse &mdash; Jun 3 Call', arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jun 3 &middot; Issue &mdash; TrustQuotes API + naming dispute',
      excerpt:'6/3 DD: Ad-hoc call (12:00 PM PT, 30 min). Two open items: (1) TrustQuotes JS/API integration not yet completed by Quadient — Divyam walked through via email and live. (2) Naming dispute: Quadient content team uses "customer stories" (long format) and objects to TR\'s "customer use case" label in Inspired documents. Lia Holmes to check with content team.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top"><div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div><span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span></div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#128269;</div>No pulses match these filters.</div>`;
}

function dayActionsHTML_2026_06_03() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(301)?'done':''}" data-csm="varun" id="action-301"><div class="action-checkbox ${doneActions.has(301)?'checked':''}" onclick="toggleAction(301)"></div><div class="action-body"><div class="action-title">&#x26A0;&#xFE0F; CBTS &mdash; Confirm DPI/PII contract sent and signed before contact data delivery</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari &middot; Data delivery is fully ready except contact/PII fields. Blocked on unsigned DPI contract. DZiat returning Jun 4 &mdash; Varun to confirm contract is sent to Mitchell VanderKam (CBTS) and get a signature timeline. Contact data cannot be shared without signed contract.</div></div></div>
    <div class="action-item ${doneActions.has(302)?'done':''}" data-csm="divyam" id="action-302"><div class="action-checkbox ${doneActions.has(302)?'checked':''}" onclick="toggleAction(302)"></div><div class="action-body"><div class="action-title">&#x1F4CB; Quadient &mdash; Follow up with Lia Holmes on TrustQuotes API and Inspired document naming</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Divyam Dewan &middot; Two open items from today\'s call: (1) TrustQuotes JS/API integration status &mdash; confirm Quadient has what they need to complete it. (2) Inspired document naming &mdash; customer content team to decide on &ldquo;customer use case&rdquo; vs &ldquo;customer stories&rdquo; label. Lia Holmes to revert after checking internally.</div></div></div>
    <div class="action-item ${doneActions.has(303)?'done':''}" data-csm="riley" id="action-303"><div class="action-checkbox ${doneActions.has(303)?'checked':''}" onclick="toggleAction(303)"></div><div class="action-body"><div class="action-title">&#x1F3C6; Paylocity &mdash; Schedule Anderson renewal call + confirm Top Rated blog June 10</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; Anderson (renewal decision-maker) was unable to join today. Riley to schedule a separate call to discuss renewal (~$47.5K + $10K incentive add-on, same structure as prior year). Also confirm Top Rated announcement blog is live on June 10 and Paylocity team has everything they need.</div></div></div>
    <div class="action-item ${doneActions.has(304)?'done':''}" data-csm="varun" id="action-304"><div class="action-checkbox ${doneActions.has(304)?'checked':''}" onclick="toggleAction(304)"></div><div class="action-body"><div class="action-title">&#x1F4C8; Pegasystems &mdash; Schedule strategic objectives session with KP (Solutions Engineering)</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; KP/Karin Pindle (HG Solutions Engineering) was introduced to Taylor Crosby and Frank (Pega) today. Next step: schedule a dedicated session to ideate on broader strategic objectives. Confirm KP availability and what Pega needs covered &mdash; data analytics use cases and expansion scope.</div></div></div>
    <div class="action-item ${doneActions.has(305)?'done':''}" data-csm="nick" id="action-305"><div class="action-checkbox ${doneActions.has(305)?'checked':''}" onclick="toggleAction(305)"></div><div class="action-body"><div class="action-title">&#x1F4E4; Westcon/Veeam &mdash; Share AccountIQ Tableau friction feedback with product/AM team</div><div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Nick Johnson &middot; Veeam reps are forgetting to use AccountIQ because it lives in Tableau outside of Salesforce. This is a real adoption friction point flagged by multiple attendees at the London event today. Nick to share this feedback with the HG product or AM team so it can be surfaced as a product integration opportunity.</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#128269;</div>No action items match these filters.</div>`;
}

// ---- June 4, 2026 ----

function dayData_2026_06_04() {
  return {
    calls: [
      { ts: 'Jun 4 · 3:00 AM', csm: 'nick', account: 'Sopra Steria',
        note: 'Customer asking about relative employees data by geography — v2 platform limitation flagged',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Ivy (Sopra Steria) requested session to understand relative employee data by country (e.g. HSBC UK employees). Nick explained current v2 platform does not support this easily — relative employees field available in newer platform and via MCP. Follow-up needed to provide access or workaround.' },
      { ts: 'Jun 4 · 5:00 AM', csm: 'divyam', account: 'Infinigate',
        note: 'Bi-weekly sync — Abolfazl questions on exported data field logic and column sources',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Routine bi-weekly with Abolfazl Akhondi (Infinigate). Strong rapport — Divyam working EST hours from India. Abolfazl shared screen with opportunity generator export and had questions about source and logic behind specific column values. Divyam walked through data methodology.' },
      { ts: 'Jun 4 · 5:00 AM', csm: 'nick', account: 'Check Point Software',
        note: 'Snowflake + 6Sense integration deep dive — multi-stakeholder first technical session',
        mins: 45, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Multi-stakeholder technical call: Check Point RevOps (Ariel Keinan AI/tech lead, Uri Nishry, David Garcia Thomas PM, Hadas Arazi data mgmt). HG: Nick (CSM), David Garcia Thomas (AM), Gavin Padden (SE). First joint session — focus on Snowflake and 6Sense integrations to advance data infrastructure footprint within Check Point.' },
      { ts: 'Jun 4 · 7:00 AM', csm: 'nick', account: 'Check Point Software',
        note: 'SFDC selective enrichment upgrade — Thomas Capello working through sandbox configuration',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Thomas Capello (Check Point) following up on SFDC enrichment upgrade. Prior duplicate-data display bug resolved. Now advancing to selective enrichment — Thomas building Salesforce report to filter enrichment scope, working through sandbox first. Next step: move to production instance.' },
      { ts: 'Jun 4 · 7:30 AM', csm: 'nick', account: 'HCL Technologies',
        note: 'TrustRadius portal review — 50 IDL leads delivered, APAC/EMEA pivot, TechCares open',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Routine Q2-end cadence with Angus Hyams and Sai A (HCL). 50 IDL leads delivered in two batches. HCL pivoting campaign focus to APAC and EMEA. Nick shared TechCares awards calendar — now open for submission. Patrick at Smart Compliance may have already submitted. Lead conversion timeline: ~2–3 weeks to opportunity.' },
      { ts: 'Jun 4 · 8:30 AM', csm: 'pam', account: 'ADP, Inc.',
        note: 'Monthly success call — Top Rated confirmed received, TechCares award submission open',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Monthly TrustRadius success call with Jennifer (ADP). Pam confirmed ADP received Top Rated announcement from Grace (TR marketing). TechCares award submission opened — Pam shared awards calendar in chat. Andy Lim (UK) joined mid-call and was introduced to Jennifer. Patrick (Smart Compliance) may have already submitted TechCares.' },
      { ts: 'Jun 4 · 8:30 AM', csm: 'andy', account: 'ADP, Inc.',
        note: 'Monthly success call (co-attended with Pam Huck) — ADP Top Rated + TechCares',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Andy Lim joined the ADP monthly success call alongside Pam Huck. Introduced to Jennifer (ADP) for the first time. Andy based in UK. Pam covering TrustRadius awards updates. Both CSMs now connected to the ADP contact.' },
      { ts: 'Jun 4 · 8:30 AM', csm: 'varun', account: 'Zscaler',
        note: 'Opp Gen platform demo — 37M+ entity market analyzer, TAM/opp discovery walkthrough',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun ran live Market Analyzer demo for Jamie Cromer (Zscaler) to support opp gen use case. Key highlights: 37M+ entities now tracked (up from 16M in Q1 2026), projected to 100M by year-end. Covered global HQ hierarchies, entity discovery, permissions model. Jamie evaluating platform for opportunity generation. Varun preferred call over recording for live Q&A.' },
      { ts: 'Jun 4 · 9:30 AM', csm: 'nick', account: 'Infor (US), LLC',
        note: 'TAM model evaluation — Zachary assessing HG SMB data vs. Bain for next-gen taz model',
        mins: 15, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Short-notice call — Zachary Dunlevy (Infor) activated HG account 1 hour prior. Evaluating for next-gen TAM/taz model: 3 dimensions under consideration: (1) SMB segment addition, (2) additional geographies, (3) new product line. Assessing whether data gap is in HG or Bain. Nick walked through Market Analyzer live. Ranjit (HG) had set up the account.' },
      { ts: 'Jun 4 · 11:30 AM', csm: 'divyam', account: 'BILL',
        note: '🔴 RGIP-SFDC integration broken — MadKudu acquisition sunset connected app, needs reinstall',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Jaymee Parson (BILL) reported SFDC connected app no longer exists in their org. Root cause: MadKudu/HG acquisition sunset the old connected app. Rafa Mueller (HG eng) confirmed new "RGIP Platform" connected app now in HG SFDC instance. BILL Salesforce admin must install and authorize the new app — first login requires admin due to March 2026 Salesforce security change. Divyam to follow up with step-by-step.' },
      { ts: 'Jun 4 · 11:30 AM', csm: 'riley', account: 'Zoom Video Communications',
        note: 'Weekly TrustRadius CSM sync — strong rapport, casual cadence with Cole Arutian and Camille Shortridge',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Routine weekly CSM sync between Riley Rogers and Zoom TrustRadius contacts Cole Arutian and Camille Shortridge. Strong personal rapport — personal conversation (bathroom remodel, Wyoming wedding). Well-established relationship cadence. Business topics followed pleasantries.' },
      { ts: 'Jun 4 · 4:30 PM', csm: 'rani', account: 'Workday Inc',
        note: 'FAI data structure deep dive — Tracy York (co-founder) brought in to explain FAI methodology',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Workday team (Kendall Stauffer, Peng Qu) had specific questions about HG\'s Functional Area Intelligence (FAI) file structure. Questions complex enough that Rani brought in co-founder Tracy York to explain FAI methodology and data organization. International time zones involved — late PT slot. Rani coordinating across Workday contacts.' },
    ],
    pulses: [
      { csm: 'nick',   account: 'Sopra Steria',           health: 'Healthy',    note: 'Customer asking about relative employees by country. v2 platform limitation. Nick referencing newer platform and MCP. Follow-up needed with solution.' },
      { csm: 'divyam', account: 'Infinigate',             health: 'Healthy',    note: 'Bi-weekly sync. Abolfazl reviewing exported data column logic with Divyam. Strong rapport. Active usage of opportunity generator.' },
      { csm: 'nick',   account: 'Check Point Software',   health: 'Healthy',    note: 'Snowflake + 6Sense integration deep dive with RevOps + data management leaders. First multi-stakeholder technical call. Next: integration design session.' },
      { csm: 'nick',   account: 'Check Point Software',   health: 'Healthy',    note: 'SFDC selective enrichment in progress — sandbox testing complete. Thomas Capello moving to production next. Duplicate-data bug resolved.' },
      { csm: 'nick',   account: 'HCL Technologies',       health: 'Healthy',    note: '50 IDL leads delivered in two batches. APAC/EMEA pivot confirmed. TechCares award calendar shared. Q2-end cadence strong.' },
      { csm: 'pam',    account: 'ADP, Inc.',               health: 'Healthy',    note: 'Monthly success call. Top Rated announcement confirmed received. TechCares submission open. Andy Lim introduced to ADP contact Jennifer (UK-based intro).' },
      { csm: 'andy',   account: 'ADP, Inc.',               health: 'Healthy',    note: 'Co-attended monthly success call with Pam Huck. Met Jennifer (ADP) for first time. Awards calendar and Top Rated updates shared.' },
      { csm: 'varun',  account: 'Zscaler',                 health: 'Healthy',    note: 'Opp Gen platform demo — 37M+ entities (up from 16M Q1, proj. 100M YE). Jamie Cromer evaluating for TAM/opp discovery. Live Market Analyzer walkthrough.' },
      { csm: 'nick',   account: 'Infor (US), LLC',         health: 'Healthy',    note: 'Zachary Dunlevy evaluating HG for next-gen TAM model — SMB + geo expansion + new product line. Short-notice activation. HG vs. Bain data gap assessment underway.' },
      { csm: 'divyam', account: 'BILL',                    health: 'Concerning', note: '🔴 RGIP-SFDC connected app broken post MadKudu acquisition. HG eng (Rafa Mueller) on call. BILL Salesforce admin must install "RGIP Platform" app and re-authorize. Integration fully blocked.' },
      { csm: 'riley',  account: 'Zoom Video Communications', health: 'Healthy',  note: 'Weekly TR CSM sync. Strong rapport with Cole Arutian + Camille Shortridge. Well-established relationship cadence.' },
      { csm: 'rani',   account: 'Workday Inc',              health: 'Healthy',   note: 'FAI deep-dive — Workday questions on FAI file structure required co-founder Tracy York to explain. Kendall Stauffer + Peng Qu. Late PT slot (4:30 PM). Follow-up on outstanding FAI questions.' },
    ],
  };
}

function dayMeta_2026_06_04() {
  return {
    pills: [
      ['dot-teal',  '11 Calls'],
      ['dot-red',   '🔴 BILL SFDC Integration Down'],
      ['dot-purple','3 Expansion Signals'],
      ['dot-amber', '1 CSM — No Confirmed Calls'],
      ['dot-grey',  'Thu Jun 4 · 71 Recordings Scanned'],
    ],
    tabs: ['Overview', 'Calls (11)', 'Pulses (12)', 'Action Items (7)'],
  };
}

function dayOverviewHTML_2026_06_04() {
  return `<div class="section-label">Team Activity &mdash; Thursday June 4, 2026</div>
  <div style="background:#1c1010;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>BILL &mdash; RGIP-SFDC Integration Down:</strong> Divyam Dewan &mdash; BILL's Salesforce connected app was sunset during the MadKudu/HG acquisition. Jaymee Parson (BILL) + Rafa Mueller (HG eng) on call. BILL Salesforce admin must install "RGIP Platform" connected app and re-authorize. Integration completely blocked.
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Check Point SFDC Enrichment (Nick):</strong> Thomas Capello working through selective enrichment configuration in sandbox. Moving to production next. Duplicate-data bug resolved.
  </div>
  <div style="background:#131a18;border:1px solid #10b981;border-left:3px solid #10b981;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#6ee7b7;">
    &#x1F680; <strong>Expansion — Zscaler + Check Point + Infor:</strong> Varun demoed 37M+ entity platform for Zscaler opp gen. Nick ran multi-stakeholder Snowflake+6Sense technical session with Check Point. Zachary Dunlevy (Infor) evaluating HG for next-gen SMB TAM model.
  </div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thu Jun 4 &mdash; 71 recordings scanned</strong> via SFDC SOQL &middot; <strong>11 confirmed calls</strong> across 7 CSMs &middot; 4 unconfirmed (no transcript) &middot; internal/yoga/interview recordings excluded
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">5 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">5</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">5</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">150m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Sopra Steria (&#x26A0;&#xFE0F; relative employees data &middot; 3:00 AM) &middot; Check Point x2 (&#x1F680; Snowflake+6Sense + SFDC enrichment &middot; 5:00/7:00 AM) &middot; HCL TrustRadius (IDL leads review &middot; 7:30 AM) &middot; Infor (&#x1F4C8; TAM model eval &middot; 9:30 AM)</div>
    </div>

    <div class="csm-card has-calls" data-csm="divyam">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Infinigate (&#x2705; bi-weekly data walkthrough &middot; 5:00 AM) &middot; BILL (&#x1F534; SFDC integration broken &middot; 11:30 AM)</div>
    </div>

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ADP &mdash; monthly TrustRadius success call. Top Rated confirmed. TechCares awards open. Andy Lim joined &middot; 8:30 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="andy">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ADP &mdash; co-attended monthly success call with Pam Huck. Introduced to ADP contact Jennifer &middot; 8:30 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Zscaler &mdash; &#x1F680; opp gen platform demo. 37M+ entities. Jamie Cromer evaluating for TAM discovery &middot; 8:30 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Zoom &mdash; weekly TrustRadius CSM sync with Cole Arutian + Camille Shortridge. Strong rapport &middot; 11:30 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday &mdash; &#x26A0;&#xFE0F; FAI deep-dive. Co-founder Tracy York brought in to explain FAI structure. Kendall Stauffer + Peng Qu &middot; 4:30 PM</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
        <div><div class="metric-num m-grey">4+</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">2</div><div class="metric-lbl">Unconfirmed</div></div>
      </div>
      <div class="csm-account-note">Kyndryl (no transcript) &middot; RSM (no transcript) &middot; 6 CSM events with no recordings (Insight Direct, SysPro, Kong, Apple, Versa, more). Likely active but unconfirmed — Weflow coverage gap.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_04() {
  return `<div class="calls-table-wrap">
  <div style="background:#1c1010;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">&#x1F534; <strong>BILL Integration Blocked:</strong> Divyam Dewan &mdash; RGIP-SFDC connected app broken post MadKudu acquisition. Salesforce admin action required at BILL to install new "RGIP Platform" app.</div>
  <div style="background:#131a18;border:1px solid #10b981;border-left:3px solid #10b981;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#6ee7b7;">&#x1F680; <strong>Expansion Signals:</strong> Zscaler opp gen demo (Varun) &middot; Check Point Snowflake+6Sense (Nick) &middot; Infor next-gen TAM model (Nick)</div>
  <div style="background:#1c1f26;border:1px solid #3b82f6;border-left:3px solid #3b82f6;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#93c5fd;">&#x26A0;&#xFE0F; <strong>4 Unconfirmed (no transcript):</strong> Atisha Waghela &mdash; Kyndryl (5:30 AM) &middot; Atisha &mdash; RSM (9:00 AM) &middot; Pam+Rani &mdash; Microsoft (10:00 AM, 60 min) &middot; Varun &mdash; Zscaler dup recording (8:30 AM)</div>
  <table class="calls-table">
    <thead><tr><th>Time&nbsp;(PT)</th><th>CSM</th><th>Account</th><th>Dur</th><th>Nature</th><th>By</th><th>Purpose</th><th>Signal</th></tr></thead>
    <tbody>
      <tr><td>3:00 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>Sopra Steria</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Issue</td><td><span class="signal-badge signal-yellow">&#x26A0; Watch</span></td></tr>
      <tr><td>5:00 AM</td><td><span class="csm-chip csm-divyam">Divyam Dewan</span></td><td>Infinigate</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>Customer</td><td>Check-in</td><td><span class="signal-badge signal-green">&#x2705; Healthy</span></td></tr>
      <tr><td>5:00 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>Check Point</td><td>45m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>HG CS</td><td>Expansion</td><td><span class="signal-badge signal-purple">&#x1F680; Expansion</span></td></tr>
      <tr><td>7:00 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>Check Point</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Issue</td><td><span class="signal-badge signal-yellow">&#x26A0; Watch</span></td></tr>
      <tr><td>7:30 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>HCL Technologies</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>HG CS</td><td>Check-in</td><td><span class="signal-badge signal-green">&#x2705; Healthy</span></td></tr>
      <tr><td>8:30 AM</td><td><span class="csm-chip csm-pam">Pam Huck</span> <span class="csm-chip csm-andy">Andy Lim</span></td><td>ADP, Inc.</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>HG CS</td><td>Check-in</td><td><span class="signal-badge signal-green">&#x2705; Healthy</span></td></tr>
      <tr><td>8:30 AM</td><td><span class="csm-chip csm-varun">Varun Tiwari</span></td><td>Zscaler</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>HG CS</td><td>Expansion</td><td><span class="signal-badge signal-purple">&#x1F680; Expansion</span></td></tr>
      <tr><td>9:30 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>Infor (US), LLC</td><td>15m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Expansion</td><td><span class="signal-badge signal-purple">&#x1F680; Expansion</span></td></tr>
      <tr><td>11:30 AM</td><td><span class="csm-chip csm-divyam">Divyam Dewan</span></td><td>BILL</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Issue</td><td><span class="signal-badge signal-red">&#x1F534; Concerning</span></td></tr>
      <tr><td>11:30 AM</td><td><span class="csm-chip csm-riley">Riley Rogers</span></td><td>Zoom</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>HG CS</td><td>Check-in</td><td><span class="signal-badge signal-green">&#x2705; Healthy</span></td></tr>
      <tr><td>4:30 PM</td><td><span class="csm-chip csm-rani">Rani Guy</span></td><td>Workday Inc.</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Issue</td><td><span class="signal-badge signal-yellow">&#x26A0; Watch</span></td></tr>
    </tbody>
  </table>
  </div>`;
}

function dayPulsesHTML_2026_06_04() {
  const cards = dayData_2026_06_04().pulses;
  const csmLabels = {nick:'Nick Johnson',divyam:'Divyam Dewan',pam:'Pam Huck',andy:'Andy Lim',varun:'Varun Tiwari',riley:'Riley Rogers',rani:'Rani Guy',atisha:'Atisha Waghela'};
  const bc = h => h==='Healthy'?'signal-green':h==='Concerning'?'signal-red':'signal-yellow';
  const bi = h => h==='Healthy'?'&#x2705;':h==='Concerning'?'&#x1F534;':'&#x26A0;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card ${c.health==='Concerning'?'pulse-concerning':''}" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><div class="pulse-account">${c.account}</div></div>
        <span class="signal-badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.note}</div>
      <div class="pulse-footer"><span>${csmLabels[c.csm]||c.csm}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#x1F50D;</div>No pulses match these filters.</div>`;
}

function dayActionsHTML_2026_06_04() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has(4041)?'done':''}" data-csm="divyam" id="action-4041"><div class="action-checkbox ${doneActions.has(4041)?'checked':''}" onclick="toggleAction(4041)"></div><div class="action-body"><div class="action-title">&#x1F534; BILL &mdash; Coordinate SFDC admin to install "RGIP Platform" connected app and re-authorize</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; Jaymee Parson (BILL) + Rafa Mueller (HG eng) confirmed root cause: old MadKudu connected app sunset during acquisition. New app named "RGIP Platform" in HG SFDC instance. BILL Salesforce admin must install it — first login must be admin-level (March 2026 Salesforce security change). Send Rafa's step-by-step to Jaymee. Confirm resolution ASAP.</div></div></div>
    <div class="action-item ${doneActions.has(4042)?'done':''}" data-csm="nick" id="action-4042"><div class="action-checkbox ${doneActions.has(4042)?'checked':''}" onclick="toggleAction(4042)"></div><div class="action-body"><div class="action-title">&#x26A0;&#xFE0F; Check Point &mdash; Follow up with Thomas Capello on SFDC selective enrichment production rollout</div><div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Thomas Capello is working through selective enrichment in sandbox. Duplicate-data bug is resolved. Next step: confirm sandbox results and provide production rollout guidance. Check on report-based account filter upload approach and any blockers.</div></div></div>
    <div class="action-item ${doneActions.has(4043)?'done':''}" data-csm="nick" id="action-4043"><div class="action-checkbox ${doneActions.has(4043)?'checked':''}" onclick="toggleAction(4043)"></div><div class="action-body"><div class="action-title">&#x1F4CA; Sopra Steria &mdash; Provide relative employees data solution (new platform or MCP access)</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; Ivy (Sopra Steria) struggling to get relative employee counts by country from v2 platform. Nick referenced newer platform and MCP as solutions. Follow up with access details or guide Sopra to the appropriate data endpoint for geographic employee breakdown (HSBC use case).</div></div></div>
    <div class="action-item ${doneActions.has(4044)?'done':''}" data-csm="rani" id="action-4044"><div class="action-checkbox ${doneActions.has(4044)?'checked':''}" onclick="toggleAction(4044)"></div><div class="action-body"><div class="action-title">&#x1F4CB; Workday &mdash; Confirm FAI questions resolved after Tracy York session</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; Workday team (Kendall, Peng Qu) had deep enough FAI questions to require co-founder Tracy York. Rani to follow up and confirm all outstanding FAI file structure questions are answered. Consider documenting FAI FAQ for reuse with other accounts asking similar questions.</div></div></div>
    <div class="action-item ${doneActions.has(4045)?'done':''}" data-csm="nick" id="action-4045"><div class="action-checkbox ${doneActions.has(4045)?'checked':''}" onclick="toggleAction(4045)"></div><div class="action-body"><div class="action-title">&#x1F4E4; Check Point &mdash; Send integration next steps for Snowflake + 6Sense to Uri Nishry + RevOps team</div><div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; First technical call with Check Point RevOps (Ariel, Uri, David, Hadas). Strong interest in Snowflake and 6Sense integrations. Follow up with technical requirements doc, proposed integration design session, and next steps timeline.</div></div></div>
    <div class="action-item ${doneActions.has(4046)?'done':''}" data-csm="varun" id="action-4046"><div class="action-checkbox ${doneActions.has(4046)?'checked':''}" onclick="toggleAction(4046)"></div><div class="action-body"><div class="action-title">&#x1F4C8; Zscaler &mdash; Follow up with Jamie Cromer post platform demo</div><div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Varun Tiwari &middot; Jamie Cromer (Zscaler) saw live platform demo — 37M+ entity data, market analyzer, entity discovery. Confirm next steps for opp gen use case evaluation. Share entity data overview and TAM discovery methodology.</div></div></div>
    <div class="action-item ${doneActions.has(4047)?'done':''}" data-csm="nick" id="action-4047"><div class="action-checkbox ${doneActions.has(4047)?'checked':''}" onclick="toggleAction(4047)"></div><div class="action-body"><div class="action-title">&#x1F4CA; Infor &mdash; Send SMB data coverage analysis for next-gen TAM model evaluation</div><div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Nick Johnson &middot; Zachary Dunlevy (Infor) evaluating HG vs. Bain for SMB + new geo + product line TAM model expansion. Send relevant SMB data coverage overview and geographic expansion details to inform the Bain vs. HG decision.</div></div></div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#x1F50D;</div>No action items match these filters.</div>`;
}

// ============================================================
// June 5, 2026
// 7 confirmed calls: Pam x Cisco, Divyam x Informatica,
// Atisha x AMD, Varun x Five9, Divyam x Cotality,
// Pam x ZoomInfo, Atisha x Apple
// ============================================================

function dayData_2026_06_05() {
  return {
    calls: [
      { csm: 'pam',    account: 'Cisco (TrustRadius)',     time: '8:00 AM',  duration: 30, nature: 'recurring', initiator: 'hg',       purpose: 'check-in',              signal: 'green'  },
      { csm: 'divyam', account: 'Informatica',             time: '9:00 AM',  duration: 30, nature: 'adhoc',     initiator: 'hg',       purpose: 'check-in + expansion',  signal: 'green'  },
      { csm: 'atisha', account: 'AMD',                     time: '9:30 AM',  duration: 30, nature: 'recurring', initiator: 'hg',       purpose: 'check-in + expansion',  signal: 'purple' },
      { csm: 'varun',  account: 'Five9',                   time: '9:30 AM',  duration: 30, nature: 'adhoc',     initiator: 'hg',       purpose: 'expansion',             signal: 'purple' },
      { csm: 'divyam', account: 'Cotality (TR)',            time: '10:30 AM', duration: 30, nature: 'adhoc',     initiator: 'hg',       purpose: 'check-in (onboarding)', signal: 'green'  },
      { csm: 'pam',    account: 'ZoomInfo (TrustRadius)',  time: '11:00 AM', duration: 30, nature: 'recurring', initiator: 'customer', purpose: 'check-in + renewal',    signal: 'green'  },
      { csm: 'atisha', account: 'Apple',                   time: '11:00 AM', duration: 30, nature: 'recurring', initiator: 'hg',       purpose: 'expansion',             signal: 'purple' },
    ],
    pulses: [
      { account: 'Cisco (TrustRadius)',    signal: 'green',  csm: 'pam',    note: 'Renewal Progress Sync. Cisco Live wrapped; Top Rated badges delivered (40 wins/80+ categories); SOW in approval queue. On track.' },
      { account: 'Informatica',           signal: 'green',  csm: 'divyam', note: 'Reconnect ahead of renewal. Informatica flexible on RGIF pricing; 81% match rate on 450K accounts. Procurement contact added. Renewal expected to close in good shape.' },
      { account: 'AMD',                   signal: 'purple', csm: 'atisha', note: 'Bi-weekly touchpoint. HG Customer Summit (July, Palo Alto) pitched — David Rockwell open pending dates. New AM Ravi Sharma introduced.' },
      { account: 'Five9',                 signal: 'purple', csm: 'varun',  note: 'New use case: entity status/active-inactive checks for ~300 tech partners. VP Tracy York engaged. HG active/inactive flag confirmed on roadmap.' },
      { account: 'Cotality (TrustRadius)', signal: 'green',  csm: 'divyam', note: 'Pre-kickoff intro. Divyam introduced as CSM. Shannon engaged. Formal kickoff scheduled with Jolene for 6Sense integration.' },
      { account: 'ZoomInfo (TrustRadius)', signal: 'green',  csm: 'pam',    note: 'Renewal sync. Top Rated badges confirmed; TechCares award form to be sent. ZoomInfo consolidating profiles 9→5.' },
      { account: 'Apple',                 signal: 'purple', csm: 'atisha', note: 'Weekly syncup. Expanding child accounts under 6 parent companies (Blackstone, UnitedHealth, HCA, Platinum Equity, Vista Equity, Berkshire). Net new account discovery planning — August target.' },
    ]
  };
}

function dayMeta_2026_06_05() {
  return {
    pills: [
      { label: '7 Calls', type: 'green' },
      { label: '4 CSMs Active', type: 'green' },
      { label: '3 Expansion', type: 'purple' },
      { label: '0 Concerning', type: 'neutral' },
    ],
    tabs: ['Overview', 'Calls', 'Pulses', 'Actions']
  };
}

function dayOverviewHTML_2026_06_05() {
  return `
    <div class="day-kpi-row">
      <div class="day-kpi green"><div class="day-kpi-num">7</div><div class="day-kpi-lbl">Confirmed Calls</div></div>
      <div class="day-kpi green"><div class="day-kpi-num">4</div><div class="day-kpi-lbl">CSMs Active</div></div>
      <div class="day-kpi purple"><div class="day-kpi-num">3</div><div class="day-kpi-lbl">Expansion Signals</div></div>
      <div class="day-kpi neutral"><div class="day-kpi-num">0</div><div class="day-kpi-lbl">Concerning</div></div>
    </div>
    <div class="alert-banner expansion">🚀 <strong>Expansion (3):</strong> Atisha/AMD — HG Customer Summit (July, Palo Alto) · Varun/Five9 — Entity status use case (VP-level) · Atisha/Apple — Child account expansion (6 parents) + net new discovery</div>
    <div class="alert-banner info">ℹ️ <strong>4 CSMs with no confirmed calls:</strong> Riley Rogers · Rani Guy (2 events, no speaker) · Nick Johnson (1 event, no recording) · Andy Lim (Sage recording, not confirmed as speaker)</div>
    <div class="alert-banner warn">⚠️ <strong>8 unrecorded CSM events:</strong> Intel Platform Training (Atisha 5:30 AM) · ADP Monthly Success Call (Andy+Pam 8 AM) · Google Platform Overview (Rani 8 AM) · Apple Bi-weekly (Atisha 8 AM) · Workday connect (Rani 11 AM) · Apple MI Training (Atisha 11 AM) · Apple Platform Training (Atisha 12 PM) · Infor Debrief (Nick 5 AM)</div>
    <h3 style="margin:16px 0 8px;font-size:13px;color:var(--muted-text,#94a3b8);">Active CSMs</h3>
    <div class="csm-activity-row">
      <div class="csm-activity-card"><span class="csm-chip csm-pam">Pam Huck</span><div class="csm-call-count">2 calls</div><div class="csm-accounts">Cisco (TR) · ZoomInfo (TR)</div></div>
      <div class="csm-activity-card"><span class="csm-chip csm-divyam">Divyam Dewan</span><div class="csm-call-count">2 calls</div><div class="csm-accounts">Informatica · Cotality (TR)</div></div>
      <div class="csm-activity-card"><span class="csm-chip csm-atisha">Atisha Waghela</span><div class="csm-call-count">2 calls</div><div class="csm-accounts">AMD · Apple</div></div>
      <div class="csm-activity-card"><span class="csm-chip csm-varun">Varun Tiwari</span><div class="csm-call-count">1 call</div><div class="csm-accounts">Five9</div></div>
    </div>
  `;
}

function dayCallsHTML_2026_06_05() {
  return `
    <table class="calls-table">
      <thead><tr><th>Time</th><th>CSM</th><th>Account</th><th>Dur</th><th>Nature</th><th>Initiated By</th><th>Purpose</th><th>Signal</th></tr></thead>
      <tbody>
        <tr>
          <td>8:00 AM</td>
          <td><span class="csm-chip csm-pam">Pam Huck</span></td>
          <td>Cisco (TrustRadius)</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Check-in</td>
          <td><span class="signal-badge signal-green">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>9:00 AM</td>
          <td><span class="csm-chip csm-divyam">Divyam Dewan</span></td>
          <td>Informatica</td><td>30m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>HG CS</td><td>Check-in + Expansion</td>
          <td><span class="signal-badge signal-green">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>9:30 AM</td>
          <td><span class="csm-chip csm-atisha">Atisha Waghela</span></td>
          <td>AMD</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Check-in + Expansion</td>
          <td><span class="signal-badge signal-purple">🚀 Expansion</span></td>
        </tr>
        <tr>
          <td>9:30 AM</td>
          <td><span class="csm-chip csm-varun">Varun Tiwari</span></td>
          <td>Five9</td><td>30m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>HG CS</td><td>Expansion</td>
          <td><span class="signal-badge signal-purple">🚀 Expansion</span></td>
        </tr>
        <tr>
          <td>10:30 AM</td>
          <td><span class="csm-chip csm-divyam">Divyam Dewan</span></td>
          <td>Cotality (TR)</td><td>30m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>HG CS</td><td>Check-in (Onboarding)</td>
          <td><span class="signal-badge signal-green">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td><span class="csm-chip csm-pam">Pam Huck</span></td>
          <td>ZoomInfo (TrustRadius)</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>Customer</td><td>Check-in + Renewal</td>
          <td><span class="signal-badge signal-green">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td><span class="csm-chip csm-atisha">Atisha Waghela</span></td>
          <td>Apple</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Expansion</td>
          <td><span class="signal-badge signal-purple">🚀 Expansion</span></td>
        </tr>
      </tbody>
    </table>
    <h3 style="margin:16px 0 8px;font-size:12px;color:var(--muted-text,#94a3b8);">Unconfirmed — No CSM Speaker Detected</h3>
    <div class="unconfirmed-item">Andy Lim × Sage Global Services — 6:30 AM · 60 min · Transcript present; Andy not detected as speaker (mentioned as expected but not confirmed)</div>
    <div class="unconfirmed-item">Varun Tiwari × Iron Mountain — 7:00 AM · 30 min · No transcript; attributed via SFDC Event ownership only</div>
    <div class="unconfirmed-item">Rani Guy × Google — 10:30 AM · 25 min · Transcript has Mark Fell/Ravi Sharma only; Rani owns SFDC Event but not in transcript</div>
    <div class="unconfirmed-item">Rani Guy × [account "E"] — 10:30 AM · 30 min · No transcript; attributed via SFDC Event ownership only</div>
  `;
}

function dayPulsesHTML_2026_06_05() {
  return `
    <div class="pulse-grid">
      <div class="pulse-card">
        <div class="pulse-card-top"><div class="pulse-account">Cisco (TrustRadius)</div><span class="signal-badge signal-green">✅ Healthy</span></div>
        <div class="pulse-note">Renewal Progress Sync. Cisco Live wrapped; Top Rated badges delivered (40 wins/80+ categories); SOW in approval queue. Renewal on track.</div>
        <div class="pulse-footer">Pam Huck · 8:00 AM · 30 min</div>
      </div>
      <div class="pulse-card">
        <div class="pulse-card-top"><div class="pulse-account">Informatica</div><span class="signal-badge signal-green">✅ Healthy</span></div>
        <div class="pulse-note">Reconnect ahead of renewal. Informatica flexible on RGIF pricing transition (81% match rate on 450K accounts). David Connors (procurement) added. Renewal expected to close in good shape.</div>
        <div class="pulse-footer">Divyam Dewan · 9:00 AM · 30 min</div>
      </div>
      <div class="pulse-card">
        <div class="pulse-card-top"><div class="pulse-account">AMD</div><span class="signal-badge signal-purple">🚀 Expansion</span></div>
        <div class="pulse-note">Bi-weekly touchpoint. HG Customer Summit (July, Palo Alto) pitched — David Rockwell open pending dates. New AM Ravi Sharma introduced. Account briefs under review end of next week.</div>
        <div class="pulse-footer">Atisha Waghela · 9:30 AM · 30 min</div>
      </div>
      <div class="pulse-card">
        <div class="pulse-card-top"><div class="pulse-account">Five9</div><span class="signal-badge signal-purple">🚀 Expansion</span></div>
        <div class="pulse-note">New use case walkthrough: entity status/active-inactive checks for ~300 technology partners. VP Tracy York engaged. HG active/inactive product flag on roadmap. Strong expansion signal.</div>
        <div class="pulse-footer">Varun Tiwari · 9:30 AM · 30 min</div>
      </div>
      <div class="pulse-card">
        <div class="pulse-card-top"><div class="pulse-account">Cotality (TrustRadius)</div><span class="signal-badge signal-green">✅ Healthy</span></div>
        <div class="pulse-note">Pre-kickoff intro call. Divyam introduced as CSM. Shannon (Cotality) engaged. Formal kickoff scheduled with Jolene added for 6Sense integration.</div>
        <div class="pulse-footer">Divyam Dewan · 10:30 AM · 30 min</div>
      </div>
      <div class="pulse-card">
        <div class="pulse-card-top"><div class="pulse-account">ZoomInfo (TrustRadius)</div><span class="signal-badge signal-green">✅ Healthy</span></div>
        <div class="pulse-note">Renewal sync. Top Rated 2026 badges confirmed; TechCares award form to be sent (5 min). ZoomInfo consolidating profiles 9→5 (GTM Workspace/Studio/AI + 2). Renewal in progress with Russell Martin.</div>
        <div class="pulse-footer">Pam Huck · 11:00 AM · 30 min</div>
      </div>
      <div class="pulse-card">
        <div class="pulse-card-top"><div class="pulse-account">Apple</div><span class="signal-badge signal-purple">🚀 Expansion</span></div>
        <div class="pulse-note">Weekly syncup. Active expansion: 6 parent accounts adding child companies (Blackstone, UnitedHealth, HCA, Platinum Equity, Vista Equity, Berkshire). Net new account discovery planning — August target. ~14K+ current accounts.</div>
        <div class="pulse-footer">Atisha Waghela · 11:00 AM · 30 min</div>
      </div>
    </div>
  `;
}

function dayActionsHTML_2026_06_05() {
  return `
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0605-1]</div>
        <div class="action-title">🚀 Five9 — Follow up on entity status/partner active-inactive use case</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Varun Tiwari · Send Five9 a proposal with current domain status capabilities + roadmap timeline for active/inactive flags. VP Tracy York engaged. Act before interest cools.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0605-2]</div>
        <div class="action-title">🏢 Apple — Receive + process expanded child account list from Simone Amorim</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Atisha Waghela · Simone sending spreadsheet with child company names for 6 parent accounts. Run matching → report back match rate. August target for net new discovery setup.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0605-3]</div>
        <div class="action-title">📋 Informatica — Track procurement + RGIF paperwork to close</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Divyam Dewan · Ensure SOW/contract sent to David Connors (procurement). No implementation changes for RGIF per Alexi. Set timeline expectation with Tom Mirrione. Close before end of month.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0605-4]</div>
        <div class="action-title">📅 AMD — Send HG Customer Summit details (July, Palo Alto) to David Rockwell</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Atisha Waghela · HG covering lodging. Send dates when marketing finalizes (Ravi Sharma has details). Confirm attendees from AMD.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0605-5]</div>
        <div class="action-title">🏆 ZoomInfo — Send TechCares award form + coordinate product profile consolidation</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Pam Huck · TechCares form — 5 min fill, send to Russell Martin today. Coordinate with TR taxonomy team on 9→5 profile consolidation.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0605-6]</div>
        <div class="action-title">📞 Cotality — Schedule formal kickoff with Jolene for 6Sense integration</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Divyam Dewan · Shannon confirmed Jolene needs to be on the formal kickoff. Samuel Vargas to coordinate calendar.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0605-7]</div>
        <div class="action-title">📋 AMD — Account brief follow-up with David Rockwell (end of next week)</div>
        <div class="action-meta"><span class="urgency urgency-low">LOW</span> Atisha Waghela · David confirmed he'll review end of next week. Check in at next bi-weekly.</div>
      </div>
    </div>
  `;
}
