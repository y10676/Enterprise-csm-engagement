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
      { ts: 'Jun 1 · 10:00 AM', csm: 'pam', account: 'F5 (NGINX)',
        note: 'NGINX profile fix — reviews going to generic Nginx instead of subscribed Nginx One; Pam to merge + rename',
        mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Sherry Arnold (F5) convened call with Karthik Krishnaswamy (F5 NGINX product expert). Pam to merge generic Nginx profile into Nginx One and rename. Sherry drafting updated product copy.' },
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
      { csm: 'pam',   account: 'F5 (NGINX)',              health: 'Healthy',    note: 'Profile attribution fix confirmed — reviews going to generic Nginx vs Nginx One. Pam to merge + rename; Sherry Arnold drafting updated copy.' },
      { csm: 'andy',  account: 'Ever Pure',                health: 'Healthy',    note: 'Biweekly sync (2:00 AM PT, 27 min, Four/Four). Charlie Morgans evaluating HG platform — install/spend data, Snowflake integration, product taxonomy. Missing cloud columns suspected ETL gap. Andy + Angus supporting full onboarding.' },
    ],
  };
}

function dayMeta_2026_06_01() {
  return {
    pills: [
      ['dot-teal',  '13 Calls'],
      ['dot-red',   '⚠️ Varun Paternity Leave'],
      ['dot-green', '5 Expansion Signals'],
      ['dot-amber', 'X-Cov: Rani → Cisco'],
      ['dot-grey',  'Mon Jun 1 · 49 Weflow + 1 Four/Four'],
    ],
    tabs: ['Overview', 'Calls (13)', 'Pulses (13)', 'Action Items (10)'],
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
    &#x1F4C5; <strong>Mon Jun 1 &mdash; 49 Weflow recordings + 1 Four/Four call</strong> &middot; <strong>13 confirmed calls</strong> across 8 CSMs &middot; 3 unconfirmed &middot; First day of June 2026
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

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar" style="background:#4a1942;color:#f9a8d4;">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num" style="color:#f9a8d4;">1</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">2</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">1</div><div class="metric-lbl">Contextual</div></div>
      </div>
      <div class="csm-account-note">F5/NGINX: confirmed call (10:00 AM, 30 min) — profile attribution fix. ADP: recording, no transcript (unconfirmed). Cisco: covered by Rani (poor pulse).</div>
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
        <td style="padding:6px 10px;color:#94a3b8;">10:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#4a1942;color:#f9a8d4;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Pam</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">F5 (NGINX)</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">NGINX profile fix — reviews going to generic Nginx instead of Nginx One; Pam to merge + rename</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
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
    { csm:'pam',    health:'Healthy',    account:'F5 (NGINX)',
      opp:'Vitally Pulse — Jun 1 Call', arr:'Enterprise · Pam Huck', csmlbl:'Pam Huck',
      change:'Jun 1 · Issue — NGINX profile attribution',
      excerpt:'6/1 PH: NGINX profile fix call (10:00 AM PT, 30 min). Reviews going to generic Nginx product instead of subscribed Nginx One. Sherry Arnold (F5) + Karthik Krishnaswamy on call. Pam to merge + rename. Sherry drafting updated copy.' },
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
        Pam Huck: <strong style="color:#0ea5e9;">3</strong><br>
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
      { ts: 'Jun 2 · 7:00 AM', csm: 'pam', account: 'Cisco',
        note: 'FY27 planning sync — Cisco not renewing 2-yr contract; wants quarterly extension through Jul 25; $200K bridge ARR secured',
        mins: 30, health: 'Concerning', nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Pam Huck met with Matthew Sallis + Romana Klinger (Cisco) for FY27 planning. Cisco will not renew 2-year deal; requesting quarterly extension through July 2025. $200K bridge ARR confirmed. Renewal risk flagged.' },
      { ts: 'Jun 2 · 9:00 AM', csm: 'pam', account: 'Cisco',
        note: 'Cisco Live Day 1 update — 100+ reviews milestone; IDL/data strategy with Matt Sallis & Romana Klinger',
        mins: 21, health: 'Healthy', nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Pam Huck ran Cisco Live Day 1 debrief. 100+ reviews hit during conference. IDL data strategy and tech spend categories discussed. Positive momentum.' },
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
      { csm: 'pam',  account: 'Cisco',                  health: 'Concerning', note: 'FY27 planning sync — Cisco not renewing 2-yr; quarterly extension through Jul 25 secured. $200K bridge ARR. Renewal risk active.' },
      { csm: 'pam',  account: 'Cisco',                  health: 'Healthy',    note: 'Cisco Live Day 1 debrief — 100+ reviews hit. IDL/data strategy reviewed with Matt Sallis + Romana Klinger. Positive momentum.' },
    ]
  };
}

function dayMeta_2026_06_02() {
  return {
    pills: [
      ['dot-teal',  '11 Calls'],
      ['dot-amber', '⚠️ Platform Issue · Meraki login'],
      ['dot-red',   '2 Watch Signals'],
      ['dot-grey',  'Tue Jun 2 · 76 recordings scanned'],
    ],
    tabs: ['Overview', 'Calls (11)', 'Pulses (11)', 'Action Items (8)'],
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
    &#x1F4C5; <strong>Tue Jun 2 &mdash; 76 recordings scanned</strong> via SFDC SOQL &middot; <strong>10 confirmed calls</strong> across 5 CSMs &middot; 3 unconfirmed (no transcript) &middot; 1 internal HG meeting excluded
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

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar" style="background:#4a1942;color:#f9a8d4;">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num" style="color:#f9a8d4;">2</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">2</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num" style="color:#f9a8d4;">2</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">Cisco: 2 confirmed calls (7:00 AM FY27 planning — bridge ARR secured; 9:00 AM Cisco Live Day 1 — 100+ reviews). Transcript-confirmed via Weflow.</div>
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
        <td style="padding:6px 10px;color:#94a3b8;">7:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#4a1942;color:#f9a8d4;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Pam</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Cisco</td>
        <td style="padding:6px 10px;color:#64748b;">30m</td>
        <td style="padding:6px 10px;color:#94a3b8;">FY27 planning — Cisco not renewing 2-yr; quarterly extension through Jul 25; $200K bridge ARR secured</td>
        <td style="padding:6px 10px;color:#f59e0b;">&#x1F7E1; Watch</td>
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
        <td style="padding:6px 10px;color:#94a3b8;">9:00 AM</td>
        <td style="padding:6px 10px;"><span style="background:#4a1942;color:#f9a8d4;padding:2px 8px;border-radius:10px;font-size:11px;font-weight:600;">Pam</span></td>
        <td style="padding:6px 10px;color:#e2e8f0;">Cisco</td>
        <td style="padding:6px 10px;color:#64748b;">21m</td>
        <td style="padding:6px 10px;color:#94a3b8;">Cisco Live Day 1 update — 100+ reviews milestone; IDL/data strategy with Matt Sallis & Romana Klinger</td>
        <td style="padding:6px 10px;color:#22c55e;">&#x1F7E2; Healthy</td>
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
    { csm:'pam',    health:'Concerning', account:'Cisco',
      opp:'Vitally Pulse — Jun 2 FY27 Sync', arr:'Enterprise · Pam Huck', csmlbl:'Pam Huck',
      change:'Jun 2 · Check-in — FY27 renewal risk',
      excerpt:'6/2 PH: FY27 planning sync (7:00 AM PT, 30 min). Cisco not renewing 2-year deal. Requesting quarterly extension through Jul 2025. $200K bridge ARR secured. Matthew Sallis + Romana Klinger on call. Renewal risk flagged.' },
    { csm:'pam',    health:'Healthy',    account:'Cisco',
      opp:'Vitally Pulse — Jun 2 Cisco Live', arr:'Enterprise · Pam Huck', csmlbl:'Pam Huck',
      change:'Jun 2 · Check-in — Cisco Live Day 1',
      excerpt:'6/2 PH: Cisco Live Day 1 debrief (9:00 AM PT, 21 min). 100+ reviews hit during conference. IDL data strategy and tech spend categories reviewed with Matt Sallis + Romana Klinger. Positive momentum.' },
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
      <tr><td>5:00 AM</td><td><span class="csm-chip csm-divyam">Divyam Dewan</span></td><td>Infinigate</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>Customer</td><td>Check-in</td><td><span class="badge badge-healthy">&#x2705; Healthy</span></td></tr>
      <tr><td>5:00 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>Check Point</td><td>45m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>HG CS</td><td>Expansion</td><td><span class="badge" style="background:#ede9fe;color:#5b21b6;">&#x1F680; Expansion</span></td></tr>
      <tr><td>7:00 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>Check Point</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Issue</td><td><span class="signal-badge signal-yellow">&#x26A0; Watch</span></td></tr>
      <tr><td>7:30 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>HCL Technologies</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>HG CS</td><td>Check-in</td><td><span class="badge badge-healthy">&#x2705; Healthy</span></td></tr>
      <tr><td>8:30 AM</td><td><span class="csm-chip csm-pam">Pam Huck</span> <span class="csm-chip csm-andy">Andy Lim</span></td><td>ADP, Inc.</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>HG CS</td><td>Check-in</td><td><span class="badge badge-healthy">&#x2705; Healthy</span></td></tr>
      <tr><td>8:30 AM</td><td><span class="csm-chip csm-varun">Varun Tiwari</span></td><td>Zscaler</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>HG CS</td><td>Expansion</td><td><span class="badge" style="background:#ede9fe;color:#5b21b6;">&#x1F680; Expansion</span></td></tr>
      <tr><td>9:30 AM</td><td><span class="csm-chip csm-nick">Nick Johnson</span></td><td>Infor (US), LLC</td><td>15m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Expansion</td><td><span class="badge" style="background:#ede9fe;color:#5b21b6;">&#x1F680; Expansion</span></td></tr>
      <tr><td>11:30 AM</td><td><span class="csm-chip csm-divyam">Divyam Dewan</span></td><td>BILL</td><td>30m</td><td><span class="badge-nature adhoc">Ad-hoc</span></td><td>Customer</td><td>Issue</td><td><span class="signal-badge signal-red">&#x1F534; Concerning</span></td></tr>
      <tr><td>11:30 AM</td><td><span class="csm-chip csm-riley">Riley Rogers</span></td><td>Zoom</td><td>30m</td><td><span class="badge-nature recurring">Recurring</span></td><td>HG CS</td><td>Check-in</td><td><span class="badge badge-healthy">&#x2705; Healthy</span></td></tr>
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
      { ts: 'Jun 5 · 8:00 AM',  csm: 'pam',    account: 'Cisco (TrustRadius)',    note: 'Renewal sync — Top Rated badges delivered (40 wins/80+ cats); SOW in approval queue',                                              mins: 30, health: 'Healthy',    nature: 'Routine', initiator: 'HG CS',     purpose: 'Check-in', detail: 'Renewal Progress Sync. Cisco Live wrapped; Top Rated badges delivered across 40 wins and 80+ categories. SOW in approval queue. Renewal on track.' },
      { ts: 'Jun 5 · 9:00 AM',  csm: 'divyam', account: 'Informatica',            note: 'Reconnect ahead of renewal — 81% match rate on 450K accounts, procurement added',                                                   mins: 30, health: 'Healthy',    nature: 'Ad-hoc',  initiator: 'HG CS',     purpose: 'Mixed',    detail: 'Reconnect ahead of renewal. Informatica flexible on RGIF pricing. 81% match rate on 450K accounts. David Connors (procurement) added to deal. Renewal expected to close in good shape.' },
      { ts: 'Jun 5 · 9:30 AM',  csm: 'atisha', account: 'AMD',                    note: 'Bi-weekly touchpoint — HG Customer Summit pitched, new AM Ravi Sharma introduced',                                                  mins: 30, health: 'Healthy',    nature: 'Routine', initiator: 'HG CS',     purpose: 'Expansion', detail: 'Bi-weekly sync. HG Customer Summit (July, Palo Alto) pitched to David Rockwell — open pending dates. New AM Ravi Sharma introduced. Account briefs under review end of next week.' },
      { ts: 'Jun 5 · 9:30 AM',  csm: 'varun',  account: 'Five9',                  note: 'New use case — entity status checks for ~300 tech partners, VP Tracy York engaged',                                                  mins: 30, health: 'Healthy',    nature: 'Ad-hoc',  initiator: 'HG CS',     purpose: 'Expansion', detail: 'New use case walkthrough: entity status/active-inactive checks for ~300 technology partners. VP Tracy York engaged. HG active/inactive product flag confirmed on roadmap. Strong expansion signal.' },
      { ts: 'Jun 5 · 10:30 AM', csm: 'divyam', account: 'Cotality (TrustRadius)', note: 'Pre-kickoff intro — Divyam introduced as CSM, formal kickoff w/ Jolene for 6Sense integration',                                   mins: 30, health: 'Healthy',    nature: 'Ad-hoc',  initiator: 'HG CS',     purpose: 'Check-in', detail: 'Pre-kickoff intro call. Divyam introduced as new CSM. Shannon (Cotality) engaged. Formal kickoff scheduled with Jolene for 6Sense integration.' },
      { ts: 'Jun 5 · 11:00 AM', csm: 'pam',    account: 'ZoomInfo (TrustRadius)', note: 'Renewal sync — Top Rated badges confirmed, TechCares award form to send, profile consolidation 9→5',                               mins: 30, health: 'Healthy',    nature: 'Routine', initiator: 'Customer',  purpose: 'Mixed',    detail: 'Renewal sync. Top Rated badges confirmed. TechCares award form to be sent. ZoomInfo consolidating vendor profiles from 9 down to 5. Renewal conversation healthy.' },
      { ts: 'Jun 5 · 11:00 AM', csm: 'atisha', account: 'Apple',                  note: 'Weekly sync — expanding child accounts under 6 parents, net new account discovery targeting August',                                 mins: 30, health: 'Healthy',    nature: 'Routine', initiator: 'HG CS',     purpose: 'Expansion', detail: 'Weekly syncup. Expanding child accounts under 6 parent companies: Blackstone, UnitedHealth, HCA, Platinum Equity, Vista Equity, Berkshire. Net new account discovery planning — August target.' },
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
      ['dot-teal',   '7 Calls'],
      ['dot-purple', '3 Expansion'],
      ['dot-green',  '7 Vitally Pulses'],
      ['dot-grey',   'Fri Jun 5'],
    ],
    tabs: ['Overview', 'Calls (7)', 'Pulses (7)', 'Action Items (7)'],
  };
}

function dayOverviewHTML_2026_06_05() {
  return `<div class="section-label">Team Activity &mdash; Friday June 5, 2026</div>
  <div style="background:#131a18;border:1px solid #10b981;border-left:3px solid #10b981;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#6ee7b7;">
    &#x1F680; <strong>Expansion (3):</strong> Atisha/AMD &mdash; HG Customer Summit pitch (July, Palo Alto) &middot; Varun/Five9 &mdash; Entity status use case, VP Tracy York engaged &middot; Atisha/Apple &mdash; Child account expansion (6 parents) + net new discovery (August target)
  </div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Fri Jun 5 &mdash; 7 confirmed calls</strong> across 4 CSMs &middot; 4 unconfirmed (no transcript / not speaker-detected) &middot; 8 unrecorded CSM events
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>4 CSMs with no confirmed calls:</strong> Riley Rogers &middot; Rani Guy (2 events, not speaker-detected) &middot; Nick Johnson (1 event, no recording) &middot; Andy Lim (Sage recording, not confirmed as speaker)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Cisco (TR) &mdash; Renewal sync, Top Rated badges delivered (40 wins) &middot; 8:00 AM &middot; ZoomInfo (TR) &mdash; Renewal + profile consolidation (9&rarr;5) &middot; 11:00 AM</div>
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
      <div class="csm-account-note">Informatica &mdash; &#x2705; Renewal reconnect, 81% match rate on 450K accounts &middot; 9:00 AM &middot; Cotality (TR) &mdash; Pre-kickoff intro, 6Sense integration &middot; 10:30 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">AMD &mdash; &#x1F680; Customer Summit pitch, new AM Ravi Sharma introduced &middot; 9:30 AM &middot; Apple &mdash; &#x1F680; Child account expansion (6 parents, Aug target) &middot; 11:00 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Five9 &mdash; &#x1F680; Entity status use case for ~300 tech partners, VP Tracy York engaged &middot; 9:30 AM</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">No confirmed calls on Jun 5</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">2 events (Google 10:30 AM) &mdash; not speaker-detected in transcripts</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">1 event (Infor 5:00 AM) &mdash; no recording synced</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">Sage recording present but Andy not detected as transcript speaker</div>
    </div>

  </div>`;
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
          <td><span class="badge badge-healthy">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>9:00 AM</td>
          <td><span class="csm-chip csm-divyam">Divyam Dewan</span></td>
          <td>Informatica</td><td>30m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>HG CS</td><td>Check-in + Expansion</td>
          <td><span class="badge badge-healthy">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>9:30 AM</td>
          <td><span class="csm-chip csm-atisha">Atisha Waghela</span></td>
          <td>AMD</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Check-in + Expansion</td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">🚀 Expansion</span></td>
        </tr>
        <tr>
          <td>9:30 AM</td>
          <td><span class="csm-chip csm-varun">Varun Tiwari</span></td>
          <td>Five9</td><td>30m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>HG CS</td><td>Expansion</td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">🚀 Expansion</span></td>
        </tr>
        <tr>
          <td>10:30 AM</td>
          <td><span class="csm-chip csm-divyam">Divyam Dewan</span></td>
          <td>Cotality (TR)</td><td>30m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>HG CS</td><td>Check-in (Onboarding)</td>
          <td><span class="badge badge-healthy">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td><span class="csm-chip csm-pam">Pam Huck</span></td>
          <td>ZoomInfo (TrustRadius)</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>Customer</td><td>Check-in + Renewal</td>
          <td><span class="badge badge-healthy">✅ Healthy</span></td>
        </tr>
        <tr>
          <td>11:00 AM</td>
          <td><span class="csm-chip csm-atisha">Atisha Waghela</span></td>
          <td>Apple</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Expansion</td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">🚀 Expansion</span></td>
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
  const cards = [
    { csm:'pam',    health:'Healthy', account:'Cisco (TrustRadius)',    opp:'Vitally Pulse &mdash; Jun 5 Call',        arr:'Enterprise &middot; Pam Huck',    csmlbl:'Pam Huck',    change:'Jun 5 &middot; Renewal sync',    excerpt:'PH: Renewal Progress Sync. Cisco Live wrapped; Top Rated badges delivered (40 wins/80+ cats); SOW in approval queue. On track (8:00 AM, 30 min).' },
    { csm:'divyam', health:'Healthy', account:'Informatica',            opp:'Vitally Pulse &mdash; Jun 5 Call',        arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan', change:'Jun 5 &middot; Renewal reconnect', excerpt:'DD: Reconnect ahead of renewal. RGIF pricing flexible; 81% match rate on 450K accounts. David Connors (procurement) added. Renewal expected to close well (9:00 AM, 30 min).' },
    { csm:'atisha', health:'Healthy', account:'AMD',                    opp:'Vitally Pulse &mdash; Jun 5 Call',        arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela', change:'Jun 5 &middot; Expansion signal', excerpt:'AW: Bi-weekly touchpoint. HG Customer Summit (July, Palo Alto) pitched — David Rockwell open pending dates. New AM Ravi Sharma introduced (9:30 AM, 30 min).' },
    { csm:'varun',  health:'Healthy', account:'Five9',                  opp:'Vitally Pulse &mdash; Jun 5 Call',        arr:'Enterprise &middot; Varun Tiwari',  csmlbl:'Varun Tiwari',  change:'Jun 5 &middot; Expansion signal', excerpt:'VT: New use case: entity status/active-inactive checks for ~300 tech partners. VP Tracy York engaged. Active/inactive flag on roadmap (9:30 AM, 30 min).' },
    { csm:'divyam', health:'Healthy', account:'Cotality (TrustRadius)', opp:'Vitally Pulse &mdash; Jun 5 Call',        arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan', change:'Jun 5 &middot; Pre-kickoff',      excerpt:'DD: Pre-kickoff intro. Divyam introduced as CSM. Shannon engaged. Formal kickoff w/ Jolene scheduled for 6Sense integration (10:30 AM, 30 min).' },
    { csm:'pam',    health:'Healthy', account:'ZoomInfo (TrustRadius)', opp:'Vitally Pulse &mdash; Jun 5 Call',        arr:'Enterprise &middot; Pam Huck',    csmlbl:'Pam Huck',    change:'Jun 5 &middot; Renewal sync',    excerpt:'PH: Renewal sync. Top Rated badges confirmed. TechCares award form to send. ZoomInfo consolidating profiles 9&rarr;5 (11:00 AM, 30 min).' },
    { csm:'atisha', health:'Healthy', account:'Apple',                  opp:'Vitally Pulse &mdash; Jun 5 Call',        arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela', change:'Jun 5 &middot; Expansion signal', excerpt:'AW: Weekly sync. Expanding child accounts under 6 parent companies (Blackstone, UnitedHealth, HCA, Platinum Equity, Vista Equity, Berkshire). Net new discovery — August target (11:00 AM, 30 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">💓</div>No pulses match the current filter.</div>`;
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

// ============================================================
// June 8, 2026
// ============================================================

function dayData_2026_06_08() {
  return {
    calls: [
      { csm: 'nick',   account: 'NTT Data',   ts: 'Jun 8 · 1:30 AM',  mins: 30, health: 'Healthy',    nature: 'Ad-hoc',    initiator: 'Customer', purpose: 'Expansion',  detail: 'Boris Bohn (new Head of GTM, DACH) re-engaging lapsed HG data contract. HG proposed credit-based consumption model for Modelizer ABM platform. Follow-up needed to scope exact data needs.' },
      { csm: 'nick',   account: 'Softcat',    ts: 'Jun 8 · 6:30 AM',  mins: 30, health: 'Healthy',    nature: 'Recurring', initiator: 'HG CS',    purpose: 'Expansion',  detail: 'Biweekly sync. Softcat evaluating Americas + Europe data expansion. Full-dataset multi-year deal at ~$6M/yr discussed. Nick + AE David Garcia Thomas building pricing ticket.' },
      { csm: 'rani',   account: 'NetApp',     ts: 'Jun 8 · 9:00 AM',  mins: 60, health: 'Some Risk',  nature: 'Ad-hoc',    initiator: 'HG CS',    purpose: 'Check-in',   detail: 'Deep dive on 5-layer matching methodology. Current rate 51% (up from 30%), target 80%. HG data files shared by Ryan Maas. Rani to send firmographic data format follow-up. Aug 2026 renewal ($840K) at risk.' },
      { csm: 'riley',  account: 'Intuit',     ts: 'Jun 8 · 9:30 AM',  mins: 30, health: 'Healthy',    nature: 'Recurring', initiator: 'HG CS',    purpose: 'Check-in',   detail: 'TrustRadius IES CSM Sync. June 10 Top Rated announcement on track. Intuit layoffs affected contacts (Annabelle out, Spencer Adkins picking up MailChimp). Natalie building unified contacts list.' },
      { csm: 'divyam', account: 'BILL',       ts: 'Jun 8 · 10:00 AM', mins: 30, health: 'Some Risk',  nature: 'Recurring', initiator: 'Customer', purpose: 'Issue',      detail: 'Weekly sync. MadKudu model simulation expected today. Customer has 1-week window to push to Salesforce (Jun 15-17). Eric Nguyen needs rollout best-practices guide. Divyam following up with Peter.' },
      { csm: 'rani',   account: 'NetApp',     ts: 'Jun 8 · 1:00 PM',  mins: 25, health: 'Healthy',    nature: 'Recurring', initiator: 'HG CS',    purpose: 'Expansion',  detail: 'Weekly sync / post-morning debrief. Planning AI spend + SMB spend data addition to push match rate 51% to 65%+. AI spend model updating end of June. Rani sending follow-up data file.' }
    ],
    pulses: [
      { account: 'NTT Data',  csm: 'nick',   health: 'Healthy',    note: 'Boris Bohn re-engaging lapsed contract; credit-based model proposed for Modelizer' },
      { account: 'Softcat',   csm: 'nick',   health: 'Healthy',    note: 'Multi-million dollar Americas+Europe data expansion in scope; pricing ticket in progress' },
      { account: 'NetApp',    csm: 'rani',   health: 'Some Risk',  note: 'Match rate 51% vs 80% target; Aug 2026 renewal ($840K) active; AI+SMB spend data being added' },
      { account: 'Intuit',    csm: 'riley',  health: 'Healthy',    note: 'Top Rated June 10 on track; updating contact list post-Intuit layoffs (Spencer Adkins picking up)' },
      { account: 'BILL',      csm: 'divyam', health: 'Some Risk',  note: 'MadKudu simulation expected Jun 8; 1-week SFDC push deadline (Jun 15-17)' }
    ]
  };
}

function dayMeta_2026_06_08() {
  return {
    pills: [
      ['dot-teal',   '6 Calls'],
      ['dot-purple', '3 Expansion'],
      ['dot-yellow', '2 At Risk'],
      ['dot-grey',   'Mon Jun 8'],
    ],
    tabs: ['Overview', 'Calls (6)', 'Pulses (5)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_06_08() {
  return `<div class="section-label">Team Activity &mdash; Monday June 8, 2026</div>
  <div style="background:#131a18;border:1px solid #10b981;border-left:3px solid #10b981;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#6ee7b7;">
    &#x1F680; <strong>Expansion (3):</strong> Nick/NTT Data &mdash; Boris Bohn re-engaging lapsed contract, credit-based model proposed &middot; Nick/Softcat &mdash; Americas+Europe data expansion (~$6M/yr, pricing ticket in progress) &middot; Rani/NetApp &mdash; AI+SMB spend layer to push match rate 51%&rarr;65%+
  </div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Mon Jun 8 &mdash; 6 confirmed calls</strong> across 4 CSMs &middot; 3 unconfirmed (no transcript / not speaker-detected)
  </div>
  <div style="background:#1c1910;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>NetApp renewal at risk:</strong> Match rate 51% vs 80% target &middot; $840K renewal due Aug 2026 &middot; <strong>BILL deadline:</strong> MadKudu simulation due today, SFDC push Jun 15&ndash;17
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">NTT Data &mdash; &#x1F680; Boris Bohn re-engaging lapsed contract, credit-based model &middot; 1:30 AM &middot; Softcat &mdash; &#x1F680; Americas+Europe expansion, pricing ticket in progress &middot; 6:30 AM</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">85m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">NetApp &mdash; &#x26A0;&#xFE0F; Matching deep dive, 51% rate vs 80% target, $840K Aug renewal &middot; 9:00 AM &middot; NetApp &mdash; &#x1F680; Post-debrief, AI+SMB spend expansion plan &middot; 1:00 PM</div>
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
      <div class="csm-account-note">Intuit (TrustRadius) &mdash; June 10 Top Rated on track; updating contacts post-Intuit layoffs &middot; 9:30 AM</div>
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
      <div class="csm-account-note">BILL &mdash; &#x23F0; MadKudu simulation due today; SFDC push deadline Jun 15&ndash;17 &middot; 10:00 AM</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <div class="csm-card-header">
        <div class="avatar av-riley">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">No confirmed calls on Jun 8</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">No confirmed calls on Jun 8</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">Intel Weekly Sync (7:00 AM) &mdash; no transcript, not speaker-verified</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Calls</div></div>
      </div>
      <div class="csm-account-note">No confirmed calls on Jun 8</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_08() {
  return `
    <table class="calls-table">
      <thead><tr><th>Time</th><th>CSM</th><th>Account</th><th>Dur</th><th>Nature</th><th>Initiated By</th><th>Purpose</th><th>Signal</th></tr></thead>
      <tbody>
        <tr>
          <td>1:30 AM</td>
          <td><span class="csm-chip csm-nick">Nick Johnson</span></td>
          <td>NTT Data</td><td>30m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>Customer</td><td>Expansion</td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">&#x1F680; Expansion</span></td>
        </tr>
        <tr>
          <td>6:30 AM</td>
          <td><span class="csm-chip csm-nick">Nick Johnson</span></td>
          <td>Softcat</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Expansion</td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">&#x1F680; Expansion</span></td>
        </tr>
        <tr>
          <td>9:00 AM</td>
          <td><span class="csm-chip csm-rani">Rani Guy</span></td>
          <td>NetApp</td><td>60m</td>
          <td><span class="badge-nature adhoc">Ad-hoc</span></td>
          <td>HG CS</td><td>Check-in</td>
          <td><span class="badge" style="background:#fef3c7;color:#92400e;">&#x26A0;&#xFE0F; Some Risk</span></td>
        </tr>
        <tr>
          <td>9:30 AM</td>
          <td><span class="csm-chip csm-riley">Riley Rogers</span></td>
          <td>Intuit (TrustRadius)</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Check-in</td>
          <td><span class="badge badge-healthy">&#x2705; Healthy</span></td>
        </tr>
        <tr>
          <td>10:00 AM</td>
          <td><span class="csm-chip csm-divyam">Divyam Dewan</span></td>
          <td>BILL</td><td>30m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>Customer</td><td>Issue</td>
          <td><span class="badge" style="background:#fef3c7;color:#92400e;">&#x26A0;&#xFE0F; Some Risk</span></td>
        </tr>
        <tr>
          <td>1:00 PM</td>
          <td><span class="csm-chip csm-rani">Rani Guy</span></td>
          <td>NetApp</td><td>25m</td>
          <td><span class="badge-nature recurring">Recurring</span></td>
          <td>HG CS</td><td>Check-in + Expansion</td>
          <td><span class="badge" style="background:#ede9fe;color:#5b21b6;">&#x1F680; Expansion</span></td>
        </tr>
      </tbody>
    </table>
    <h3 style="margin:16px 0 8px;font-size:12px;color:var(--muted-text,#94a3b8);">Unconfirmed &mdash; No CSM Speaker Detected</h3>
    <div class="unconfirmed-item">Nick Johnson &times; HG Onsite Debrief &mdash; 5:00 AM &middot; Internal debrief; no external account transcript</div>
    <div class="unconfirmed-item">Atisha Waghela &times; Intel Weekly Sync &mdash; 7:00 AM &middot; No transcript; attributed via SFDC Event ownership only</div>
    <div class="unconfirmed-item">Riley Rogers &times; Intuit (Hayden/Max w/ Marisol) &mdash; 12:30 PM &middot; AM-led meeting; Riley event owner but not confirmed as speaker</div>
  `;
}

function dayPulsesHTML_2026_06_08() {
  const cards = [
    { csm:'nick',   health:'Healthy',   account:'NTT Data',             opp:'Vitally Pulse &mdash; Jun 8 Call',  arr:'Enterprise &middot; Nick Johnson',  csmlbl:'Nick Johnson',  change:'Jun 8 &middot; Expansion signal',  excerpt:'NJ: Boris Bohn (new Head of GTM, DACH) re-engaging lapsed HG data contract. HG proposing credit-based consumption model for Modelizer ABM platform. Follow-up to scope data needs and pricing (1:30 AM, 30 min).' },
    { csm:'nick',   health:'Healthy',   account:'Softcat',              opp:'Vitally Pulse &mdash; Jun 8 Call',  arr:'Enterprise &middot; Nick Johnson',  csmlbl:'Nick Johnson',  change:'Jun 8 &middot; Expansion signal',  excerpt:'NJ: Biweekly sync. Softcat evaluating Americas + Europe data expansion. Full-dataset multi-year deal at ~$6M/yr discussed. Nick + AE David Garcia Thomas building pricing ticket (6:30 AM, 30 min).' },
    { csm:'rani',   health:'Some Risk', account:'NetApp',               opp:'Vitally Pulse &mdash; Jun 8 Call',  arr:'Enterprise &middot; Rani Guy',     csmlbl:'Rani Guy',     change:'Jun 8 &middot; At risk',           excerpt:'RG: Two calls. Morning: 5-layer matching deep dive, rate 51% (up from 30%) vs 80% target. Aug 2026 renewal ($840K) in focus. Afternoon: planning AI spend + SMB data addition to push rate to 65%+. Data file to follow (9:00 AM + 1:00 PM).' },
    { csm:'riley',  health:'Healthy',   account:'Intuit (TrustRadius)', opp:'Vitally Pulse &mdash; Jun 8 Call',  arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers', change:'Jun 8 &middot; Check-in',          excerpt:'RR: IES CSM Sync with Natalie Pratt. June 10 Top Rated announcement on track. Intuit layoffs: Annabelle out, Spencer Adkins picking up MailChimp. Building unified contacts list (9:30 AM, 30 min).' },
    { csm:'divyam', health:'Some Risk', account:'BILL',                 opp:'Vitally Pulse &mdash; Jun 8 Call',  arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan', change:'Jun 8 &middot; Deadline risk',     excerpt:'DD: Weekly sync. MadKudu simulation expected Jun 8; SFDC push by Jun 15&ndash;17. Eric Nguyen needs rollout best-practices guide. Divyam following up with Peter on timeline (10:00 AM, 30 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128308;':'&#128993;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div><div class="pulse-arr">${c.arr}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#x1F493;</div>No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_08() {
  return `
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0608-1]</div>
        <div class="action-title">&#x23F0; BILL &mdash; Follow up with Peter on MadKudu simulation results + send rollout best-practices guide to Eric Nguyen</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Divyam Dewan &middot; Simulation results expected Jun 8; SFDC push deadline Jun 15&ndash;17. Eric needs best-practices doc for rollout. Confirm timeline with Peter today.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0608-2]</div>
        <div class="action-title">&#x26A0;&#xFE0F; NetApp &mdash; Send firmographic + SMB spend + AI spend data file to Elise / Vibhu</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Rani Guy &middot; Per commitment on 1:00 PM call. Provide base firmographic file + SMB spend + regular spend. AI spend model updating end of June &mdash; include timeline. Goal: push match rate 51%&rarr;65%+.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0608-3]</div>
        <div class="action-title">&#x1F680; NTT Data &mdash; Schedule follow-up with Boris Bohn to scope data needs + credit-based pricing for Modelizer</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Nick Johnson &middot; Boris is new Head of GTM (DACH), ready to re-engage on lapsed contract. Co-own with AE David Garcia Thomas. Define data points needed, run pricing through consumption model.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0608-4]</div>
        <div class="action-title">&#x1F680; Softcat &mdash; Complete data pricing ticket (Americas + Europe breakdown) for James</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Nick Johnson + David Garcia Thomas &middot; Full-dataset multi-year deal in scope. David finalizing pricing ticket; Nick to present to James at Softcat. Key input for multi-million dollar expansion decision.</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0608-5]</div>
        <div class="action-title">&#x1F3C6; Intuit &mdash; Confirm June 10 Top Rated materials reach Spencer Adkins (MailChimp) + correct contacts</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Riley Rogers &middot; Annabelle out due to layoffs; Spencer Adkins picking up MailChimp. Riley + Natalie Pratt building unified Intuit contacts list (IES + MailChimp).</div>
      </div>
    </div>
    <div class="action-item">
      <div class="action-body">
        <div class="action-id">[0608-6]</div>
        <div class="action-title">&#x26A0;&#xFE0F; NetApp &mdash; Review Vibhu&apos;s matching logic + validate against HG unmatched/matched files from Ryan Maas</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Rani Guy &middot; Vibhu to share matching logic post-call. Compare to HG Layer 3/4 approach. Identify which variables (domain, subsidiary, alias) can move match rate 51%&rarr;65%.</div>
      </div>
    </div>
  `;
}

// ============================================================
// June 9, 2026
// 62 recordings scanned · 11 confirmed CSM calls · 6 CSMs active
// ============================================================

function dayData_2026_06_09() {
  return {
    calls: [
      { ts: 'Jun 9 · 3:30 AM', csm: 'nick', account: 'SAP',
        note: 'Data upload format issue — CSV encoding troubleshooting',
        mins: 25, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Customer Adriana Aguiar reached out to Nick Johnson for help with a recurring data upload format issue. The file was not in the correct UTF-8 CSV structure for the HG platform upload tool. Nick walked her through reformatting it live during the session.' },
      { ts: 'Jun 9 · 7:00 AM', csm: 'divyam', account: 'Paychex / Paycor',
        note: 'Post-merger account alignment — TrustRadius IDL contract scope',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam Dewan led a monthly sync to align Paychex and Paycor teams following the Paycor acquisition of Paychex. Discussed merged contract status, IDL scope for the combined entity, and introduced the teams to one another. Follow-up call with Scott scheduled to finalize IDL contract scope.' },
      { ts: 'Jun 9 · 8:00 AM', csm: 'atisha', account: 'RSM US',
        note: 'Key contact Ben no-show; rescheduled via Ellis for Wed 10:30 AM ET',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha Waghela organized a recurring sync with RSM US but key contact Ben did not attend and had not responded to the email invite. Atisha and Ellis Millwood (RSM) coordinated to reschedule to Wednesday 10:30 AM Eastern. Short call; engagement risk flagged.' },
      { ts: 'Jun 9 · 9:00 AM', csm: 'divyam', account: 'Adobe',
        note: 'PE Portfolio data expansion — MCP vs. full data set pricing',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Divyam Dewan joined Mark Fell and Rob Nute (HG) for a working session with the Adobe Private Capital team on PE portfolio data use cases. Discussed MCP capabilities vs. full data set pricing, vendor momentum scores, and constructive metrics. Current contract ~$150K; full data set would run $500K–$1M. Next step: assess whether MCP path meets their needs before scoping a full-data proposal.' },
      { ts: 'Jun 9 · 9:00 AM', csm: 'nick', account: 'IBM',
        note: 'Pricing request for GenAI / AI Spend data — market demand gen focus',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Nick Johnson presented a pricing breakdown for Generative AI and AI Spend data products to David Bush and Leo Zunz (IBM), requested for IBM\'s Select Territory market demand gen program. IBM is evaluating cost for a potential new subscription. Leo ill; Nick to follow up via email with full pricing detail.' },
      { ts: 'Jun 9 · 10:00 AM', csm: 'andy', account: 'SAS Institute',
        note: 'MCP agentic capabilities demo — evaluating GTM workflow automation use case',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Andy Lim led an agentic/MCP capabilities demo for SAS Institute (confirmed via SFDC EventId match; Andy transcribed via Superpowered.me AI notetaker). Demo covered MCP integration for agentic GTM workflows. SAS Institute evaluating potential new use case for AI-driven data enrichment. Follow-up on interest level and scoping needed.' },
      { ts: 'Jun 9 · 11:00 AM', csm: 'riley', account: 'SAP Business Network',
        note: 'TrustRadius biweekly — POs received, Top Rated prep, market report kickoff',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley Rogers held a biweekly TrustRadius sync with SAP Business Network. POs for both the market report and subscription renewal have been received. Team is preparing a blog post for the Top Rated award announcement. Riley confirmed Buyer\'s Choice qualification for fall (11 reviews in 2026 already). Discussed product page updates and plan to drive more reviews for next year\'s Top Rated cycle.' },
      { ts: 'Jun 9 · 11:30 AM', csm: 'atisha', account: 'Cognizant',
        note: 'AE-led expansion scoping — churn analytics and buyer propensity modeling',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Atisha Waghela joined Max Shaw (AE) in an exploratory call with Akash Pratap Singh and Sandhya Gangadharan (Cognizant) to scope new HG use cases. Akash\'s manager wants to understand specific use cases: buyer propensity to buy and churn analytics. Existing contract currently in redlining; Atisha supporting to validate value ahead of close. Next step: send scoping materials.' },
      { ts: 'Jun 9 · 12:30 PM', csm: 'riley', account: 'TriNet',
        note: 'TrustRadius monthly sync — Top Rated announcement, Buyer\'s Choice status',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley Rogers held a monthly TrustRadius sync with TriNet (K. Maxwell and Ashley). TriNet is excited about the upcoming Top Rated announcement (already has a quote ready). Riley confirmed Buyer\'s Choice qualification for fall with 11 reviews in 2026. Discussed planning for next year\'s review campaign to maintain Top Rated status.' },
      { ts: 'Jun 9 · 12:30 PM', csm: 'atisha', account: 'Treasure AI',
        note: 'Renewal sync after ~1-year gap — renewal scope + intent/product data use cases',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Atisha Waghela joined Nandini Yamdagni (HG) for a renewal sync with James Weinberg (Treasure AI Senior Director, GTM Systems). James noted it had been about a year since last HG contact. Two topics: upcoming renewal and a new potential data use case (intent categories and product data). Atisha flagged this as a high-value account worth focused re-engagement. Renewal timeline and scope TBD.' },
      { ts: 'Jun 9 · 2:15 PM', csm: 'rani', account: 'Cisco (Isovalent)',
        note: 'Onboarding call — introductions post-Cisco Live, team off-site next week',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Rani Guy led an onboarding session with the Cisco Isovalent team (Adrian Escobar and melmoff). Most of the Isovalent team is headed to a Canada off-site next week. Call focused on introductions and relationship-building. Strong rapport established in the opening session.' },
    ],
    pulses: [
      { csm: 'nick', account: 'SAP', health: 'Concerning',
        note: 'Customer encountered recurring CSV upload format error; Nick walked through UTF-8 encoding fix during session.' },
      { csm: 'divyam', account: 'Paychex / Paycor', health: 'Healthy',
        note: 'Monthly merger-alignment sync. IDL contract scope follow-up scheduled with Scott.' },
      { csm: 'atisha', account: 'RSM US', health: 'Concerning',
        note: 'Key contact Ben no-show; rescheduled to Wednesday 10:30 AM ET via Ellis Millwood.' },
      { csm: 'divyam', account: 'Adobe', health: 'Healthy',
        note: 'Expansion: Adobe Private Capital exploring PE portfolio data. MCP vs. full-data ($500K–$1M) in scope.' },
      { csm: 'nick', account: 'IBM', health: 'Healthy',
        note: 'Expansion: IBM evaluating GenAI/AI Spend data pricing for Select Territory market demand gen program.' },
      { csm: 'andy', account: 'SAS Institute', health: 'Healthy',
        note: 'Expansion: MCP agentic demo delivered. SAS Institute evaluating new GTM automation use case. Follow-up on interest scoping needed.' },
      { csm: 'riley', account: 'SAP Business Network', health: 'Healthy',
        note: 'POs received for renewal + market report. Buyer\'s Choice qualified for fall (11 reviews in 2026).' },
      { csm: 'atisha', account: 'Cognizant', health: 'Healthy',
        note: 'Expansion: churn analytics and buyer propensity scoping with AE Max Shaw. Contract in redlining.' },
      { csm: 'riley', account: 'TriNet', health: 'Healthy',
        note: 'Monthly TR sync — Top Rated announcement imminent. Buyer\'s Choice qualified for fall 2026.' },
      { csm: 'atisha', account: 'Treasure AI', health: 'Concerning',
        note: 'Renewal sync after ~1-year gap. First re-engagement; renewal + intent/product data scope TBD.' },
      { csm: 'rani', account: 'Cisco (Isovalent)', health: 'Healthy',
        note: 'Onboarding call post-Cisco Live. Strong start; team off-site next week in Canada.' },
    ],
  };
}

function dayMeta_2026_06_09() {
  return {
    pills: [
      ['dot-teal',  '11 Calls'],
      ['dot-red',   '3 Concerning'],
      ['dot-amber', '4 Expansion'],
      ['dot-green', '11 Pulses'],
      ['dot-grey',  'Tue Jun 9 · 62 scanned'],
    ],
    tabs: ['Overview', 'Calls (11)', 'Pulses (11)', 'Action Items (8)'],
  };
}

function dayOverviewHTML_2026_06_09() {
  return `<div class="section-label">Team Activity &mdash; Tuesday June 9, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday June 9 &mdash; 62 recordings scanned</strong> via SFDC SOQL &middot; <strong>11 confirmed calls</strong> across 6 CSMs &middot; 4 expansion signals (Adobe APC, IBM, SAS Institute, Cognizant) &middot; 3 concerning (SAP upload issue, RSM no-show, Treasure AI renewal after ~1-year gap)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Adobe Private Capital exploring PE portfolio data ($500K–$1M full-data vs. MCP path) &middot; IBM evaluating GenAI/AI Spend pricing for Select Territory demand gen &middot; Cognizant scoping churn analytics + propensity modeling (contract in redlining)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 14px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Attention:</strong> Treasure AI renewal sync after ~1-year engagement gap &mdash; James Weinberg noted it&apos;s been about a year since last HG contact; renewal scope and pricing TBD &middot; RSM key contact Ben no-show on scheduled sync; rescheduled to Wed 10:30 AM ET
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP Business Network (TrustRadius biweekly, POs received) &middot; TriNet (Top Rated announcement, Buyer&apos;s Choice qualified)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">55m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP (upload format issue &#x1F534;) &middot; IBM (GenAI/AI Spend pricing expansion &#x1F4C8;)</div>
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
      <div class="csm-account-note">Paychex/Paycor (merger alignment monthly) &middot; Adobe Private Capital (PE data expansion &#x1F4C8;)</div>
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
      <div class="csm-account-note">Cisco Isovalent (onboarding call post-Cisco Live)</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">2</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">RSM US (key contact no-show &#x1F534;) &middot; Cognizant (expansion scoping &#x1F4C8;) &middot; Treasure AI (renewal after ~1-yr gap &#x1F534;)</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled &mdash; no recordings (Unum biweekly, MongoDB recurring sync)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 internal team sync (HG Insights / Mark Fell Ops) &mdash; excluded as internal</div>
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
      <div class="csm-account-note">SAS Institute (MCP agentic demo, expansion &#x1F4C8;) &middot; 2 events no recording (memoryBlue, Veracode)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_09() {
  return `
  <div style="background:#1c1f26;border:1px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CB; 11 confirmed calls &middot; Table auto-generated from <code>dayData</code> &middot; Sortable by CSM, Account, Signal, Purpose
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Unconfirmed / No Transcript:</strong> Softcat (Nick, 1:30 AM PT &mdash; no transcript); memoryBlue Office Hours (Andy, 6:00 AM PT &mdash; no transcript); HG Insights &amp; Apple: Strategy &amp; Planning (Atisha, 8:30 AM PT &mdash; no transcript, linked SFDC event). SAS Institute confirmed via SFDC EventId match (Andy via Superpowered.me notetaker).
  </div>
  <div style="background:#1c2333;border:1px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CC; <strong>No recordings found for:</strong> Varun Tiwari &mdash; Unum biweekly (7:30 AM PT), MongoDB recurring (8:00 AM PT); Nick Johnson &mdash; Visionet biweekly (3:00 AM PT), Siemens monthly (5:00 AM PT), Hyland monthly (7:00 AM PT); Atisha Waghela &mdash; Apple sessions (8:30 AM, 9:00 AM), Converge Tech Solutions (12:00 PM PT); Andy Lim &mdash; Veracode (8:30 AM PT); Divyam Dewan &mdash; Adobe GTM Tool Review (4:30 AM PT), DynaTrace Query (12:30 PM PT); Riley Rogers &mdash; Insperity TR sync (12:30 PM PT; recording found for TriNet at same time slot). Internal excluded: Pam Huck &mdash; Team Sync Mark Fell Ops (HG Insights account).
  </div>`;
}

function dayPulsesHTML_2026_06_09() {
  const cards = [
    { csm:'nick', health:'Concerning', account:'SAP',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 9 &middot; Upload Issue',
      excerpt:'NJ/Jun 9: Adriana Aguiar (SAP) could not upload data file due to incorrect CSV encoding format. Nick walked through UTF-8 reformatting live (3:30 AM PT, 25 min). Issue addressed in session; follow up to confirm fully resolved.' },
    { csm:'divyam', health:'Healthy', account:'Paychex / Paycor',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jun 9 &middot; Monthly Sync',
      excerpt:'DD/Jun 9: Monthly post-merger alignment sync for Paychex/Paycor teams. IDL contract scope to be finalized with Scott. Paycor side fully engaged; Paychex contacts partially attending. Follow-up call scheduled (7:00 AM PT, 30 min).' },
    { csm:'atisha', health:'Concerning', account:'RSM US',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 9 &middot; No-Show',
      excerpt:'AW/Jun 9: Scheduled recurring sync; key contact Ben did not attend and had not responded to email invite. Atisha and Ellis Millwood rescheduled to Wednesday 10:30 AM ET. Engagement gap flagged (8:00 AM PT, 30 min).' },
    { csm:'divyam', health:'Healthy', account:'Adobe',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jun 9 &middot; Expansion',
      excerpt:'DD/Jun 9: Adobe Private Capital team exploring PE portfolio data use cases. MCP vs. full data set ($500K&ndash;$1M vs. current ~$150K contract) in scope. Vendor momentum scores and constructive metrics discussed. Next step: validate MCP path (9:00 AM PT, 30 min).' },
    { csm:'nick', health:'Healthy', account:'IBM',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 9 &middot; Expansion',
      excerpt:'NJ/Jun 9: David Bush (IBM) requested GenAI and AI Spend data pricing for Select Territory market demand gen program. Nick presented pricing breakdown; Leo Zunz (IBM East) also on call. Follow-up pricing detail to be sent via email (9:00 AM PT, 30 min).' },
    { csm:'andy', health:'Healthy', account:'SAS Institute',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
      change:'Jun 9 &middot; Expansion',
      excerpt:'AL/Jun 9: MCP agentic capabilities demo for SAS Institute GTM team. Confirmed via SFDC EventId match; Andy transcribed via Superpowered.me. SAS Institute evaluating new agentic GTM workflow automation use case. Follow-up on interest level needed (10:00 AM PT, 30 min).' },
    { csm:'riley', health:'Healthy', account:'SAP Business Network',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 9 &middot; Biweekly Sync',
      excerpt:'RR/Jun 9: POs received for subscription renewal and market report. Top Rated announcement imminent; SAP BN preparing blog post and quote. Buyer\'s Choice qualified for fall (11 reviews in 2026). Product page updates sent (11:00 AM PT, 30 min).' },
    { csm:'atisha', health:'Healthy', account:'Cognizant',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 9 &middot; Expansion',
      excerpt:'AW/Jun 9: Exploratory call with Akash (Cognizant) and Max Shaw (AE). Manager wants specific use cases: buyer propensity and churn analytics. Existing contract in redlining. Atisha to send scoping materials to support deal close (11:30 AM PT, 30 min).' },
    { csm:'riley', health:'Healthy', account:'TriNet',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 9 &middot; Monthly Sync',
      excerpt:'RR/Jun 9: Monthly TR sync with K. Maxwell and Ashley (TriNet). Excited for Top Rated announcement tomorrow; quote ready. Buyer\'s Choice qualified for fall 2026 (11 reviews in 2026). Planning next year review campaign (12:30 PM PT, 30 min).' },
    { csm:'atisha', health:'Concerning', account:'Treasure AI',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 9 &middot; Renewal Risk',
      excerpt:'AW/Jun 9: Renewal sync with James Weinberg (Sr. Dir. GTM Systems, Treasure AI) after ~1-year gap. James noted it had been ~1 year since last HG contact. Renewal and intent/product data expansion both on table. Atisha flagged as high-value re-engagement priority (12:30 PM PT, 30 min).' },
    { csm:'rani', health:'Healthy', account:'Cisco (Isovalent)',
      opp:'Vitally Pulse &mdash; Jun 9 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 9 &middot; Onboarding',
      excerpt:'RG/Jun 9: Onboarding call with Cisco Isovalent team (Adrian Escobar, melmoff). Team returning from Cisco Live; off-site in Canada next week. Strong rapport and intro established. No blockers noted (2:15 PM PT, 30 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><strong>${c.account}</strong><div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#x1F493;</div>No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_09() {
  return `
  <div class="action-list">
    <div class="action-item" data-csm="atisha" id="action-0609-1">
      <div class="action-body">
        <div class="action-id">[0609-1]</div>
        <div class="action-title">&#x1F534; RSM US &mdash; Reschedule Ben for Wednesday 10:30 AM ET</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Atisha Waghela &middot; Ben did not attend today&apos;s recurring sync and had not responded to email. Ellis Millwood has confirmed the Wednesday 10:30&ndash;11:30 AM ET window. Send calendar invite to Ben today and ping Ellis to confirm.</div>
      </div>
    </div>
    <div class="action-item" data-csm="atisha" id="action-0609-2">
      <div class="action-body">
        <div class="action-id">[0609-2]</div>
        <div class="action-title">&#x26A0;&#xFE0F; Treasure AI &mdash; Send renewal proposal and intent/product data scope brief</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Atisha Waghela + Nandini Yamdagni &middot; James Weinberg flagged ~1-year engagement gap. Renewal timing TBD; intent and product data categories identified as expansion use case. Draft proposal and scope summary to send within 48 hours. Coordinate with Nandini on pricing.</div>
      </div>
    </div>
    <div class="action-item" data-csm="nick" id="action-0609-3">
      <div class="action-body">
        <div class="action-id">[0609-3]</div>
        <div class="action-title">&#x1F4C8; IBM &mdash; Send full GenAI / AI Spend pricing breakdown to David Bush</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Nick Johnson (+ Leo Zunz to CC) &middot; David Bush requested detailed pricing for Generative AI and AI Spend data for Select Territory market demand gen. Leo was ill on the call. Send pricing email today; CC Leo Zunz. IBM can move quickly once pricing looks right.</div>
      </div>
    </div>
    <div class="action-item" data-csm="divyam" id="action-0609-4">
      <div class="action-body">
        <div class="action-id">[0609-4]</div>
        <div class="action-title">&#x1F4C8; Adobe Private Capital &mdash; Assess MCP vs. full-data path for APC team + send next steps</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Divyam Dewan + Mark Fell + Rob Nute &middot; APC team currently on ~$150K contract; full data set would be $500K&ndash;$1M. Per Rob: first determine if MCP meets their needs before scoping full-data proposal. Divyam to follow up with vendor momentum score assets and next-step framing.</div>
      </div>
    </div>
    <div class="action-item" data-csm="nick" id="action-0609-5">
      <div class="action-body">
        <div class="action-id">[0609-5]</div>
        <div class="action-title">&#x1F527; SAP &mdash; Confirm upload issue resolved; send formatted CSV guide</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Nick Johnson &middot; Adriana Aguiar was working through upload formatting live on the call. Confirm via follow-up that the reformatted file uploaded successfully. Send a short CSV formatting guide (UTF-8, correct delimiters) to prevent recurrence.</div>
      </div>
    </div>
    <div class="action-item" data-csm="atisha" id="action-0609-6">
      <div class="action-body">
        <div class="action-id">[0609-6]</div>
        <div class="action-title">&#x1F4C8; Cognizant &mdash; Send expansion use case scoping deck to Akash for manager review</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Atisha Waghela + Max Shaw &middot; Akash&apos;s reporting manager wants documented use cases: buyer propensity and churn analytics. Contract is in redlining. Atisha to coordinate with Max on sending a scoping deck that Akash can share with his manager to unblock the deal.</div>
      </div>
    </div>
    <div class="action-item" data-csm="riley" id="action-0609-7">
      <div class="action-body">
        <div class="action-id">[0609-7]</div>
        <div class="action-title">&#x1F3C6; SAP Business Network &mdash; Confirm market report kickoff timeline with Cole / Catherine</div>
        <div class="action-meta"><span class="urgency urgency-low">LOW</span> Riley Rogers &middot; PO received; market report subscription renewed. Catherine mentioned the report kickoff should start soon and they have some bandwidth now post-Sapphire. Riley to confirm timeline and kick off data pull process. Also ensure product page geo-content update is coordinated with Alejandro.</div>
      </div>
    </div>
        <div class="action-item" data-csm="andy" id="action-0609-8">
      <div class="action-body">
        <div class="action-id">[0609-8]</div>
        <div class="action-title">&#x1F4C8; SAS Institute &mdash; Follow up on MCP agentic demo interest + scope next steps</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Andy Lim &middot; Delivered MCP agentic capabilities demo to SAS Institute GTM team. SAS evaluating potential new use case for AI-driven data enrichment via agentic workflows. Andy to send follow-up summarizing demo highlights, relevant use cases, and proposed next steps for scoping a potential expansion.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#x2705;</div>All action items completed.</div>`;
}

// ─── June 10, 2026 ───────────────────────────────────────────────────────────

function dayData_2026_06_10() {
  return {
    calls: [
      { ts: 'Jun 10 · 6:00 AM', csm: 'atisha', account: 'Deloitte',
        note: 'Monthly strategic sync — 50K credits usage plan + renewal prep discussion',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Atisha Waghela led a monthly sync with Rajesh (Deloitte GTM) to review account health and plan the 50K credits allocation. Rajesh confirmed the team has not yet deployed a credits usage strategy; Atisha walked through recommended use cases and proposed a structured activation plan. Also touched on upcoming renewal scope and timeline.' },
      { ts: 'Jun 10 · 7:30 AM', csm: 'atisha', account: 'RSM US',
        note: 'Rescheduled sync with Ben — confirmed attendance, ran through CSP review agenda',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha Waghela held the rescheduled sync with Ben (RSM US) that had been moved from Monday after his no-show. Ben attended and the call covered platform utilization, upcoming use case priorities, and CSP program status. Ellis Millwood (RSM) confirmed the new time window; solid re-engagement after the missed meeting.' },
      { ts: 'Jun 10 · 8:00 AM', csm: 'divyam', account: 'Adobe',
        note: 'Data feed evaluation follow-up with Abhishek — feedback overdue by 6 days',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Divyam Dewan reconnected with Abhishek (Adobe Private Capital) to follow up on a data feed evaluation that was 6 days past the expected feedback deadline. Divyam walked through the evaluation summary and collected questions on data coverage and format compatibility. Also revisited MCP vs. full-data path options discussed June 9. Next step: send evaluation report revision.' },
      { ts: 'Jun 10 · 8:30 AM', csm: 'andy', account: 'SAS Institute',
        note: 'Phoenix pricing discussion — customer initiated with formal pricing questions',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Andy Lim joined an expansion conversation with SAS Institute initiated by the customer team following the June 9 MCP agentic demo. The SAS team came back with specific questions about Phoenix pricing tiers and bundle structures. Andy walked through available packages but acknowledged a formal AE conversation is needed to scope the commercial structure. Flagged as expansion signal for AE handoff.' },
      { ts: 'Jun 10 · 8:30 AM', csm: 'pam', account: 'Cisco',
        note: 'Monthly check-in — platform adoption review and use case prioritization',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Pam Huck held a monthly sync with the Cisco CS team covering platform adoption metrics, active use cases, and upcoming roadmap questions. Call confirmed steady usage with no blockers surfaced. Team expressed interest in expanding the data categories tracked for competitive displacement analysis. Pam noted next sync scheduled in 4 weeks.' },
      { ts: 'Jun 10 · 9:30 AM', csm: 'divyam', account: 'Paychex',
        note: 'IDL content + landing pages expansion discussion — new use case identified',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Divyam Dewan led an ad-hoc scoping call with the Paychex marketing team around IDL-powered content and landing page customization as a new use case. Divyam introduced how HG intent signals can drive dynamic landing page personalization and targeted content delivery. Paychex team engaged positively; next steps include a content audit and IDL configuration review.' },
      { ts: 'Jun 10 · 9:30 AM', csm: 'rani', account: 'AWS',
        note: 'Vision 360 expansion signal — customer proposing new use case for buyer journey mapping',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Rani Guy held a recurring sync with the AWS GTM Insights team. The AWS team proactively raised a new potential use case: leveraging Vision 360 data for buyer journey stage mapping across their enterprise pipeline. Rani walked through available data fields and confirmed the use case is technically viable. Discussed current renewal status and noted positive engagement signal. Flagged for expansion documentation.' },
      { ts: 'Jun 10 · 10:00 AM', csm: 'divyam', account: 'Informatica',
        note: 'Renewal sync — customer overwhelmed by scope, unsigned renewal in progress',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam Dewan met with the Informatica procurement team for a renewal sync. The customer expressed that the renewal paperwork and multi-product scope was more complex than anticipated and the team was behind on reviews. The renewal is unsigned. Divyam offered to simplify the scope summary and coordinate directly with the buyer champion to unblock the signature process.' },
      { ts: 'Jun 10 · 10:00 AM', csm: 'nick', account: 'IBM',
        note: 'GenAI/AI Spend pricing follow-up — David Bush responded with commercial questions',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Nick Johnson connected with David Bush (IBM) in an ad-hoc follow-up to the June 9 GenAI pricing email. David had reviewed the pricing breakdown and came back with questions about data coverage, subscription tiers, and integration options for the Select Territory demand gen program. Nick walked through specifics and outlined next steps for getting a formal proposal to IBM procurement.' },
      { ts: 'Jun 10 · 10:00 AM', csm: 'riley', account: 'ZScaler',
        note: 'Biweekly TrustRadius sync — review pipeline health and upcoming awards cycle',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley Rogers held a biweekly TrustRadius sync with the ZScaler marketing team. Call covered current review velocity, status on the upcoming awards cycle, and review campaign planning for the remainder of the year. ZScaler is tracking toward Top Rated qualification. Riley confirmed all product page details are current and no open support issues.' },
      { ts: 'Jun 10 · 10:30 AM', csm: 'riley', account: 'BMC',
        note: 'Monthly TrustRadius check-in — review count review and campaign next steps',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: "Riley Rogers held a monthly sync with BMC Software's TrustRadius program owner. Reviewed current review count trajectory, discussed the Q3 review campaign strategy, and confirmed product page content is up to date. BMC team is planning a customer outreach campaign to drive reviews ahead of the next awards cycle. No blockers; steady relationship." },
      { ts: 'Jun 10 · 11:30 AM', csm: 'nick', account: 'Westcon',
        note: 'Quick customer-initiated check-in — account status and pending questions',
        mins: 15, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Nick Johnson took a brief ad-hoc check-in call from the Westcon team who had a few follow-up questions about their subscription scope and data access parameters. Nick addressed the questions directly in the session. Short call; no action items surfaced beyond confirming the next scheduled sync is in two weeks.' },
      { ts: 'Jun 10 · 12:00 PM', csm: 'varun', account: 'Autodesk',
        note: 'Monthly sync — technical call prep for tomorrow, column spec requirements',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Varun Tiwari held a monthly sync with the Autodesk data team in preparation for a technical integration call scheduled for June 11. The Autodesk team requested a specific column spec list for the planned data feed integration before the technical session. Varun committed to sending the spec list EOD today. Confirmed technical call participants and agenda structure for tomorrow.' },
      { ts: 'Jun 10 · 12:00 PM', csm: 'rani', account: 'Lenovo',
        note: 'Monthly check-in — account review, product usage update, no blockers',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: "Rani Guy held a monthly account sync with Lenovo's GTM data team. Reviewed platform usage metrics, discussed any data freshness questions, and confirmed the team's current focus areas for HG data consumption. No escalations or blockers surfaced. Positive check-in with strong engagement; Lenovo team noted data is being actively used in campaign targeting." },
    ],
    pulses: [
      { csm: 'atisha', account: 'Deloitte', health: 'Healthy',
        note: 'Monthly sync. 50K credits usage plan TBD; Rajesh to confirm activation approach. Renewal timeline also discussed.' },
      { csm: 'atisha', account: 'RSM US', health: 'Healthy',
        note: 'Rescheduled sync with Ben attended. CSP program review completed; solid re-engagement after Monday no-show.' },
      { csm: 'divyam', account: 'Adobe', health: 'Healthy',
        note: 'Data feed evaluation follow-up with Abhishek — 6 days overdue. Feedback collected; evaluation report revision to be sent.' },
      { csm: 'andy', account: 'SAS Institute', health: 'Healthy',
        note: 'Expansion: customer-initiated Phoenix pricing questions. AE handoff needed for formal commercial scoping.' },
      { csm: 'pam', account: 'Cisco', health: 'Healthy',
        note: 'Monthly check-in. Steady adoption; interest in expanding competitive displacement data categories.' },
      { csm: 'divyam', account: 'Paychex', health: 'Healthy',
        note: 'Expansion: IDL content + landing page personalization use case introduced. Content audit and IDL config review as next steps.' },
      { csm: 'rani', account: 'AWS', health: 'Healthy',
        note: 'Mixed: renewal confirmed positive + Vision 360 buyer journey mapping expansion signal raised by customer.' },
      { csm: 'divyam', account: 'Informatica', health: 'Healthy',
        note: 'Renewal unsigned; customer overwhelmed by scope complexity. Divyam to simplify scope summary and engage buyer champion directly.' },
      { csm: 'nick', account: 'IBM', health: 'Healthy',
        note: 'Expansion: David Bush reviewed GenAI/AI Spend pricing and returned with commercial questions. Formal proposal in progress.' },
      { csm: 'riley', account: 'ZScaler', health: 'Healthy',
        note: 'Biweekly TR sync. Review velocity on track for Top Rated. No open issues.' },
      { csm: 'riley', account: 'BMC', health: 'Healthy',
        note: 'Monthly TR check-in. Q3 review campaign strategy set; product page current. Steady engagement.' },
      { csm: 'nick', account: 'Westcon', health: 'Healthy',
        note: 'Short ad-hoc check-in; subscription scope questions answered. Next scheduled sync in 2 weeks.' },
      { csm: 'varun', account: 'Autodesk', health: 'Healthy',
        note: 'Monthly sync + technical call prep. Column spec list to be sent EOD today. Technical call confirmed for Jun 11.' },
      { csm: 'rani', account: 'Lenovo', health: 'Healthy',
        note: 'Monthly check-in. Active data usage for campaign targeting confirmed; no blockers.' },
    ],
  };
}

function dayMeta_2026_06_10() {
  return {
    pills: [
      ['dot-teal',  '14 Calls'],
      ['dot-amber', '4 Expansion'],
      ['dot-green', '14 Vitally Pulses'],
      ['dot-grey',  'Wed Jun 10 · 167 scanned'],
    ],
    tabs: ['Overview', 'Calls (14)', 'Pulses (14)', 'Action Items (8)']
  };
}

function dayOverviewHTML_2026_06_10() {
  return `<div class="section-label">Team Activity &mdash; Wednesday June 10, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Jun 10 &mdash; 167 recordings scanned</strong> via SFDC SOQL &middot; <strong>14 confirmed calls</strong> across all 8 CSMs &middot; 4 expansion signals (SAS Phoenix pricing, IBM GenAI, Paychex IDL, AWS Vision 360) &middot; Informatica renewal unsigned &middot; 6 unconfirmed (no transcript)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> SAS Institute Phoenix pricing (customer-initiated) &middot; IBM GenAI/AI Spend pricing follow-up (David Bush) &middot; Paychex IDL content + landing pages (ad-hoc) &middot; AWS Vision 360 buyer journey mapping (customer-raised)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ZScaler (biweekly TR sync, Top Rated on track) &middot; BMC (monthly check-in, Q3 campaign set)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM (GenAI pricing follow-up, formal proposal next) &middot; Westcon (quick ad-hoc check-in)</div>
    </div>

    <div class="csm-card has-calls" data-csm="divyam">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Adobe (data feed eval follow-up, 6 days overdue) &middot; Paychex (IDL expansion) &middot; Informatica (renewal unsigned)</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">AWS (Vision 360 expansion signal raised) &middot; Lenovo (monthly check-in, active usage confirmed)</div>
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
      <div class="csm-account-note">Autodesk (monthly sync + technical call prep, column spec needed before Jun 11)</div>
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
      <div class="csm-account-note">Cisco (monthly check-in, steady adoption, displacement data interest noted)</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Deloitte (50K credits usage + renewal prep) &middot; RSM US (rescheduled sync with Ben, strong re-engagement)</div>
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
      <div class="csm-account-note">SAS Institute (customer-initiated Phoenix pricing discussion, AE handoff needed)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_10() {
  return `<div style="background:#1c2333;border:1px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>4 expansion signals today:</strong> SAS Institute (Phoenix pricing, customer-initiated) &middot; IBM (GenAI/AI Spend pricing follow-up) &middot; Paychex (IDL content + landing pages) &middot; AWS (Vision 360 buyer journey mapping raised by customer)
  </div>`;
}

function dayPulsesHTML_2026_06_10() {
  const cards = [
    { csm:'atisha', health:'Healthy', account:'Deloitte',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 10 &middot; Monthly Sync',
      excerpt:'AW/Jun 10: Monthly strategic sync with Rajesh (Deloitte GTM). 50K credits activation plan still TBD; Atisha walked through recommended use cases. Renewal scope and timeline also discussed. No blockers (6:00 AM PT, 30 min).' },
    { csm:'atisha', health:'Healthy', account:'RSM US',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 10 &middot; Rescheduled Sync',
      excerpt:'AW/Jun 10: Rescheduled sync with Ben (RSM US) — attended after Monday no-show. CSP review completed; strong re-engagement signal. Ellis Millwood confirmed the new time. No open issues (7:30 AM PT, 30 min).' },
    { csm:'divyam', health:'Healthy', account:'Adobe',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jun 10 &middot; Eval Follow-Up',
      excerpt:'DD/Jun 10: Data feed evaluation follow-up with Abhishek (Adobe APC) — feedback was 6 days overdue. Collected questions on data coverage and format compatibility; revisited MCP vs. full-data options. Evaluation report revision to be sent (8:00 AM PT, 30 min).' },
    { csm:'andy', health:'Healthy', account:'SAS Institute',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
      change:'Jun 10 &middot; Expansion',
      excerpt:'AL/Jun 10: SAS Institute team initiated call with Phoenix pricing questions following Jun 9 MCP demo. Andy walked through packages; AE handoff needed for formal commercial scoping. Strong expansion signal (8:30 AM PT, 30 min).' },
    { csm:'pam', health:'Healthy', account:'Cisco',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck',
      change:'Jun 10 &middot; Monthly Sync',
      excerpt:'PH/Jun 10: Monthly check-in with Cisco CS team. Steady platform adoption; team interested in expanding competitive displacement data categories tracked. No blockers or escalations. Next sync in 4 weeks (8:30 AM PT, 30 min).' },
    { csm:'divyam', health:'Healthy', account:'Paychex',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jun 10 &middot; Expansion',
      excerpt:'DD/Jun 10: Ad-hoc IDL content + landing page personalization scoping call. Paychex team positively engaged with use case of HG intent signals driving dynamic content. Content audit and IDL config review scheduled as next steps (9:30 AM PT, 30 min).' },
    { csm:'rani', health:'Healthy', account:'AWS',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 10 &middot; Expansion Signal',
      excerpt:'RG/Jun 10: Recurring sync with AWS GTM Insights. Customer proactively raised Vision 360 data use case for buyer journey stage mapping across enterprise pipeline. Rani confirmed technical viability. Expansion opportunity to document and route to AE (9:30 AM PT, 30 min).' },
    { csm:'divyam', health:'Healthy', account:'Informatica',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jun 10 &middot; Renewal Risk',
      excerpt:'DD/Jun 10: Renewal sync. Informatica team overwhelmed by multi-product renewal scope complexity; paperwork unsigned. Divyam to simplify scope summary and engage buyer champion directly to unblock signature (10:00 AM PT, 30 min).' },
    { csm:'nick', health:'Healthy', account:'IBM',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 10 &middot; Expansion',
      excerpt:'NJ/Jun 10: Ad-hoc follow-up after Jun 9 pricing email. David Bush (IBM) reviewed GenAI/AI Spend pricing and returned with commercial questions on coverage, tiers, and integration. Formal proposal for procurement to follow (10:00 AM PT, 30 min).' },
    { csm:'riley', health:'Healthy', account:'ZScaler',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 10 &middot; Biweekly Sync',
      excerpt:'RR/Jun 10: Biweekly TrustRadius sync. Review velocity on track for Top Rated qualification. Awards cycle and campaign planning confirmed. No open support issues or page updates needed (10:00 AM PT, 30 min).' },
    { csm:'riley', health:'Healthy', account:'BMC',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 10 &middot; Monthly Sync',
      excerpt:'RR/Jun 10: Monthly TR check-in. Q3 review campaign strategy confirmed. Product page current. BMC planning customer outreach campaign to drive reviews before next awards cycle. Steady relationship (10:30 AM PT, 30 min).' },
    { csm:'nick', health:'Healthy', account:'Westcon',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 10 &middot; Quick Check-In',
      excerpt:'NJ/Jun 10: Customer-initiated ad-hoc check-in on subscription scope and data access parameters. Questions addressed in session. Next scheduled sync in 2 weeks; no action items (11:30 AM PT, 15 min).' },
    { csm:'varun', health:'Healthy', account:'Autodesk',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 10 &middot; Technical Prep',
      excerpt:'VT/Jun 10: Monthly sync + technical call prep ahead of Jun 11 integration session. Autodesk requested column spec list for data feed integration. Varun committed to sending EOD today. Call agenda and participants confirmed for tomorrow (12:00 PM PT, 30 min).' },
    { csm:'rani', health:'Healthy', account:'Lenovo',
      opp:'Vitally Pulse &mdash; Jun 10 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 10 &middot; Monthly Sync',
      excerpt:'RG/Jun 10: Monthly check-in with Lenovo GTM data team. Active data usage for campaign targeting confirmed by customer team. No blockers or escalations. Positive engagement; strong account health (12:00 PM PT, 30 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><strong>${c.account}</strong><div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#x1F493;</div>No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_10() {
  return `
  <div class="action-list">
    <div class="action-item" data-csm="divyam" id="action-0610-1">
      <div class="action-body">
        <div class="action-id">[0610-1]</div>
        <div class="action-title">&#x1F534; Informatica &mdash; Simplify Renewal Scope + Engage Buyer Champion Directly</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Divyam Dewan &middot; Customer team overwhelmed by multi-product renewal complexity; paperwork unsigned. Divyam to create a simplified 1-page renewal summary and coordinate directly with buyer champion to unblock signature this week. Escalate to AE if no movement by end of week.</div>
      </div>
    </div>
    <div class="action-item" data-csm="divyam" id="action-0610-2">
      <div class="action-body">
        <div class="action-id">[0610-2]</div>
        <div class="action-title">&#x1F534; Adobe &mdash; Send Revised Data Feed Evaluation Report to Abhishek</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Divyam Dewan &middot; Data feed evaluation feedback was 6 days overdue; collected today. Divyam to revise and send the evaluation report incorporating Abhishek&apos;s coverage and format questions. Include MCP vs. full-data path comparison. Target: send within 24 hours to keep expansion momentum.</div>
      </div>
    </div>
    <div class="action-item" data-csm="nick" id="action-0610-3">
      <div class="action-body">
        <div class="action-id">[0610-3]</div>
        <div class="action-title">&#x1F534; IBM &mdash; Send Formal GenAI / AI Spend Proposal to David Bush for Procurement</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Nick Johnson &middot; David Bush reviewed initial pricing and returned with commercial questions on coverage, tiers, and integration. Nick to prepare and send a formal proposal document suitable for IBM procurement. Include data coverage summary, subscription tier breakdown, and integration options. Target: EOD today.</div>
      </div>
    </div>
    <div class="action-item" data-csm="andy" id="action-0610-4">
      <div class="action-body">
        <div class="action-id">[0610-4]</div>
        <div class="action-title">&#x1F4C8; SAS Institute &mdash; Bring in AE for Formal Phoenix Pricing Discussion</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Andy Lim &middot; SAS Institute came back with formal Phoenix pricing questions after yesterday&apos;s MCP demo. Andy walked through available packages but formal commercial scoping requires AE involvement. Coordinate with AE to set up a dedicated pricing and scoping conversation this week.</div>
      </div>
    </div>
    <div class="action-item" data-csm="divyam" id="action-0610-5">
      <div class="action-body">
        <div class="action-id">[0610-5]</div>
        <div class="action-title">&#x1F4C8; Paychex &mdash; Schedule IDL Content Audit + Landing Pages Config Review</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Divyam Dewan &middot; Paychex team positively engaged with IDL-powered content and landing page personalization use case. Next steps: content audit of existing Paychex assets and IDL configuration review. Divyam to send agenda for both sessions and schedule with Paychex marketing team within this week.</div>
      </div>
    </div>
    <div class="action-item" data-csm="rani" id="action-0610-6">
      <div class="action-body">
        <div class="action-id">[0610-6]</div>
        <div class="action-title">&#x1F4C8; AWS &mdash; Document Vision 360 Buyer Journey Mapping Use Case + Route to AE</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Rani Guy &middot; AWS team proactively raised Vision 360 data for buyer journey stage mapping across enterprise pipeline. Rani confirmed technical viability in-session. Document the use case spec and route to AE as a formal expansion signal. Include Vision 360 fields applicable to pipeline stage mapping in the brief.</div>
      </div>
    </div>
    <div class="action-item" data-csm="atisha" id="action-0610-7">
      <div class="action-body">
        <div class="action-id">[0610-7]</div>
        <div class="action-title">&#x1F4CB; Deloitte &mdash; Clarify 50K Credits Activation Plan with Rajesh</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Atisha Waghela &middot; Rajesh confirmed no deployment plan exists yet for the 50K credits. Atisha walked through recommended use cases on the call. Send a follow-up with the top 3 recommended activation use cases and a proposed timeline for Rajesh to review and confirm with his team before next monthly sync.</div>
      </div>
    </div>
    <div class="action-item" data-csm="varun" id="action-0610-8">
      <div class="action-body">
        <div class="action-id">[0610-8]</div>
        <div class="action-title">&#x1F4CB; Autodesk &mdash; Send Column Spec List Before Tomorrow&apos;s Technical Call</div>
        <div class="action-meta"><span class="urgency urgency-low">LOW</span> Varun Tiwari &middot; Autodesk data team requested the column spec list for the planned data feed integration before the June 11 technical call. Varun committed to sending EOD today. Confirm receipt with the Autodesk technical lead before the call starts tomorrow.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#x2705;</div>All action items completed.</div>`;
}

// ─── June 11, 2026 ────────────────────────────────────────────────────────────

function dayData_2026_06_11() {
  return {
    calls: [
      { ts: 'Jun 11 · 7:30 AM', csm: 'varun', account: 'Autodesk Inc',
        note: 'V2 data feed migration & account matching discussion',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Issue',
        detail: 'V2 data feed migration timeline and account matching process reviewed. Autodesk wants product count specs before cutover. Solution team to confirm migration timeline; Varun to send column spec list.' },
      { ts: 'Jun 11 · 7:35 AM', csm: 'atisha', account: 'Intel Corporation',
        note: 'Customer flagging IT spend data gaps vs. PitchBook',
        mins: 25, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Fernanda Oliveira raised missing IT/AI spend data for major enterprise accounts that PitchBook covers. Customer questioning HG data comprehensiveness for prospecting targets with no HG IT spend signal.' },
      { ts: 'Jun 11 · 8:00 AM', csm: 'divyam', account: 'Sage Global Services',
        note: 'Bi-weekly sync: all 4 campaigns live, AI crawler recap',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'All 4 Sage campaigns confirmed live. AI crawler session with TrustRadius recapped. Cross-data insights shared. Strong engagement and positive momentum across active campaign portfolio.' },
      { ts: 'Jun 11 · 8:00 AM', csm: 'varun', account: 'MongoDB Inc',
        note: 'New digital ops & acquisition stakeholders introduced to HG data',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Recurring sync with new MongoDB contacts from digital ops and digital acquisition teams. AE Ziad Amira led introductions. New stakeholders exploring ABM and pipeline telemetry use cases — strong expansion signal.' },
      { ts: 'Jun 11 · 8:30 AM', csm: 'pam', account: 'ZoomInfo',
        note: 'TR renewal sync with Sylvia Livingston and Anderson',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'TrustRadius renewal sync. First meeting between Pam and Anderson. Sylvia Livingston joined. Renewal terms reviewed and expansion scope discussed. Positive tone; renewal on track.' },
      { ts: 'Jun 11 · 9:00 AM', csm: 'atisha', account: 'RSM US',
        note: 'HG connector blocked by RSM DLP policy — security doc request',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'RSM\'s Data Loss Prevention (DLP) policy is blocking the HG connector. Ellis (RSM) needs HG security documentation to route through IT/security approval. Adoption completely blocked until unresolved.' },
      { ts: 'Jun 11 · 9:30 AM', csm: 'riley', account: 'SAP Inc',
        note: 'SAP SuccessFactors TR progress: summer cadence + SAP Connect',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'SAP SuccessFactors TrustRadius progress review. Summer review cadence confirmed. SAP Connect event upcoming — customer engagement plans discussed. Steady relationship; no blockers.' },
      { ts: 'Jun 11 · 11:00 AM', csm: 'riley', account: 'SAP Inc',
        note: 'SAP Ariba + Fieldglass: 1,000+ leads identified with new sourcing process',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'SAP Ariba and Fieldglass review sourcing progress reviewed. New dedicated resource confirmed; automated tactics yielding 1,000+ net new leads identified. Executive alignment in place on review sourcing strategy.' },
      { ts: 'Jun 11 · 12:30 PM', csm: 'pam', account: 'ADP, Inc',
        note: 'ADP expansion: adding products + LLM/GEO optimization demo',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Pam led expansion conversation with ADP HRO team — actively exploring adding additional ADP products to TR subscription. Tanner (HG product) presented GEO and LLM optimization capabilities for ADP review profiles.' },
    ],
    pulses: [
      { csm: 'varun',  account: 'Autodesk Inc',        health: 'Concerning' },
      { csm: 'atisha', account: 'Intel Corporation',    health: 'Concerning' },
      { csm: 'divyam', account: 'Sage Global Services', health: 'Healthy'   },
      { csm: 'varun',  account: 'MongoDB Inc',          health: 'Healthy'   },
      { csm: 'pam',    account: 'ZoomInfo',             health: 'Healthy'   },
      { csm: 'atisha', account: 'RSM US',               health: 'Concerning' },
      { csm: 'riley',  account: 'SAP Inc',              health: 'Healthy'   },
      { csm: 'riley',  account: 'SAP Inc',              health: 'Healthy'   },
      { csm: 'pam',    account: 'ADP, Inc',             health: 'Healthy'   },
    ],
  };
}

function dayMeta_2026_06_11() {
  return {
    pills: [
      ['dot-teal',  '9 Calls'],
      ['dot-red',   '3 Concerning'],
      ['dot-amber', '3 Expansion'],
      ['dot-green', '9 Vitally Pulses'],
      ['dot-grey',  'Thu Jun 11 · 62 scanned'],
    ],
    tabs: ['Overview', 'Calls (9)', 'Pulses (9)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_06_11() {
  return `<div class="section-label">Team Activity &mdash; Thursday June 11, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Jun 11 &mdash; 62 recordings scanned</strong> via SFDC SOQL &middot; <strong>9 confirmed calls</strong> across 5 CSMs &middot; 3 concerning (Autodesk V2 migration, Intel data gaps, RSM DLP blocker) &middot; 3 expansion signals (MongoDB new stakeholders, ZoomInfo renewal, ADP product add)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>RSM US &mdash; Connector Blocked:</strong> HG connector blocked by RSM DLP policy. Atisha needs to send HG security documentation to Ellis for IT approval. Adoption at risk until resolved.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 14px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion Activity:</strong> MongoDB (new digital ops / acquisition stakeholders engaged) &middot; ZoomInfo (TR renewal + expansion scope) &middot; ADP (product add-on discussion + LLM/GEO demo)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP SuccessFactors (summer cadence, SAP Connect) &middot; SAP Ariba+Fieldglass (1,000+ leads with new sourcing process)</div>
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
      <div class="csm-account-note">Sage Global Services (all 4 campaigns live, AI crawler recap)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Autodesk (V2 migration timeline &amp; account matching &#x26A0;) &middot; MongoDB (new stakeholders from digital ops + acquisition)</div>
    </div>

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ZoomInfo (TR renewal sync, expansion discussed) &middot; ADP (product add-on + LLM/GEO demo)</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">2</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">55m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Intel (data gaps vs. PitchBook &#x26A0;) &middot; RSM US (HG connector blocked by DLP &#x1F534;)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Events scheduled &mdash; no recordings confirmed (Infinigate, GTM Fabric, Sage biweekly, RevOps Speed Demo)</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Events scheduled &mdash; no recordings confirmed (Lenovo, Adobe biweekly, Adobe weekly, PANW Cloud Dynamics)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Events scheduled &mdash; no recordings confirmed (Sage biweekly, ADP — TR side covered by Pam Huck)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_11() {
  // Auto-table rendered by core.js via dayData fields. Banners only.
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>RSM US:</strong> HG connector completely blocked by DLP policy. Atisha to send security docs to Ellis for IT approval — adoption at risk.
  </div>
  <div style="background:#1c1f26;border:1px solid #6b7280;border-left:3px solid #6b7280;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#9ca3af;">
    &#x26A0;&#xFE0F; <strong>Note:</strong> SAP Ariba + Fieldglass call (11:00 AM) detected via transcript only — no linked SFDC event found. Attributed to Riley Rogers by speaker label.
  </div>`;
}

function dayPulsesHTML_2026_06_11() {
  const cards = [
    { csm:'varun', health:'Concerning', account:'Autodesk Inc',
      opp:'Vitally Pulse &mdash; Jun 11 V2 Migration Call',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 11 &middot; Ad-hoc Technical',
      excerpt:'VT/Jun 11: Ad-hoc call on V2 data feed migration. Autodesk requesting column specs and product count clarity before cutover. Account matching process walkthrough completed; solution team to confirm migration timeline. Varun to send column spec list (7:30 AM PT, 30 min).' },
    { csm:'atisha', health:'Concerning', account:'Intel Corporation',
      opp:'Vitally Pulse &mdash; Jun 11 Data Quality Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 11 &middot; Customer-Initiated',
      excerpt:'AW/Jun 11: Fernanda Oliveira (Intel) flagging IT/AI spend data gaps — major enterprise names missing from HG where PitchBook has coverage. Customer questioning data comprehensiveness for prospecting. Atisha to investigate data coverage gaps and prepare response (7:35 AM PT, 25 min).' },
    { csm:'divyam', health:'Healthy', account:'Sage Global Services',
      opp:'Vitally Pulse &mdash; Jun 11 Bi-Weekly',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jun 11 &middot; Bi-Weekly Sync',
      excerpt:'DD/Jun 11: All 4 Sage campaigns confirmed live. AI crawler session with TrustRadius recapped. Cross-data insights shared. Positive engagement and strong campaign momentum across all active programs (8:00 AM PT, 30 min).' },
    { csm:'varun', health:'Healthy', account:'MongoDB Inc',
      opp:'Vitally Pulse &mdash; Jun 11 Expansion Sync',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 11 &middot; Expansion Signal',
      excerpt:'VT/Jun 11: Recurring sync with new MongoDB stakeholders from digital ops and digital acquisition teams. AE Ziad Amira led introductions. New contacts exploring ABM and pipeline telemetry use cases — strong expansion signal for HG data (8:00 AM PT, 30 min).' },
    { csm:'pam', health:'Healthy', account:'ZoomInfo',
      opp:'Vitally Pulse &mdash; Jun 11 Renewal Sync',
      arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck',
      change:'Jun 11 &middot; Renewal / Expansion',
      excerpt:'PH/Jun 11: TR renewal sync with Sylvia Livingston and Anderson (ZoomInfo). First meeting between Pam and Anderson. Renewal terms and expansion scope reviewed. Positive tone; renewal on track (8:30 AM PT, 30 min).' },
    { csm:'atisha', health:'Concerning', account:'RSM US',
      opp:'Vitally Pulse &mdash; Jun 11 Weekly Sync',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jun 11 &middot; Blocker &mdash; DLP',
      excerpt:'AW/Jun 11: HG connector blocked by RSM DLP (Data Loss Prevention) policy. Ellis confirmed cannot use the HG connector in current state. Atisha to send HG security documentation for RSM IT/security approval process. Adoption completely blocked (9:00 AM PT, 30 min).' },
    { csm:'riley', health:'Healthy', account:'SAP Inc',
      opp:'Vitally Pulse &mdash; Jun 11 SuccessFactors Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 11 &middot; SAP SuccessFactors',
      excerpt:'RR/Jun 11: SAP SuccessFactors TR progress call. Summer review cadence confirmed. SAP Connect event upcoming — customer engagement plans discussed. Cole Arutian joined. Steady relationship; no blockers (9:30 AM PT, 30 min).' },
    { csm:'riley', health:'Healthy', account:'SAP Inc',
      opp:'Vitally Pulse &mdash; Jun 11 Ariba + Fieldglass Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 11 &middot; SAP Ariba + Fieldglass',
      excerpt:'RR/Jun 11: SAP Ariba + Fieldglass review sourcing progress. New dedicated resource confirmed with automated tactics — 1,000+ net new leads identified. Executive alignment on review sourcing strategy in place. Detected via transcript; no linked SFDC event (11:00 AM PT, 30 min).' },
    { csm:'pam', health:'Healthy', account:'ADP, Inc',
      opp:'Vitally Pulse &mdash; Jun 11 Expansion Call',
      arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck',
      change:'Jun 11 &middot; Expansion Signal',
      excerpt:'PH/Jun 11: Pam led expansion discussion with ADP HRO team — exploring adding additional ADP products to TR subscription. Tanner (HG product) presented GEO and LLM optimization capabilities. Active expansion conversation in progress (12:30 PM PT, 30 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><strong>${c.account}</strong><div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#x1F493;</div>No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_11() {
  return `
  <div class="action-list">
    <div class="action-item ${doneActions.has('0611-1')?'done':''}" data-csm="atisha" id="action-0611-1">
      <div class="action-body">
        <div class="action-id">[0611-1]</div>
        <div class="action-title">&#x1F534; RSM US &mdash; Send HG Security Documentation to Unblock DLP</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Atisha Waghela &middot; HG connector blocked by RSM DLP policy. Ellis needs HG security docs to route through RSM IT/security approval. Send security documentation package to Ellis today; follow up on IT ticket status by EOW. Adoption is completely blocked until resolved.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0611-2')?'done':''}" data-csm="varun" id="action-0611-2">
      <div class="action-body">
        <div class="action-id">[0611-2]</div>
        <div class="action-title">&#x1F534; Autodesk &mdash; Confirm V2 Migration Timeline with Solution Team</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Varun Tiwari &middot; Autodesk needs product count specs and migration timeline confirmation before V2 cutover. Varun to coordinate with solution team for timeline sign-off and send the complete column spec list to Autodesk technical lead. Confirm with customer within 24 hours.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0611-3')?'done':''}" data-csm="atisha" id="action-0611-3">
      <div class="action-body">
        <div class="action-id">[0611-3]</div>
        <div class="action-title">&#x26A0;&#xFE0F; Intel &mdash; Investigate IT/AI Spend Data Coverage Gaps vs. PitchBook</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Atisha Waghela &middot; Fernanda Oliveira (Intel) flagged major enterprise names missing IT spend in HG where PitchBook has coverage. Atisha to run a spot-check of the flagged companies, understand the data gap, and prepare a written response explaining HG coverage methodology and any known gaps. Send to Fernanda within 48 hours.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0611-4')?'done':''}" data-csm="pam" id="action-0611-4">
      <div class="action-body">
        <div class="action-id">[0611-4]</div>
        <div class="action-title">&#x1F4C8; ADP &mdash; Send LLM/GEO Optimization Summary + Product Add-On Proposal</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Pam Huck &middot; ADP HRO team engaged on expansion — adding products and exploring LLM/GEO optimization. Pam to send a follow-up summary of Tanner&apos;s LLM/GEO overview and a product add-on proposal outlining pricing and next steps. Target: within this week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0611-5')?'done':''}" data-csm="varun" id="action-0611-5">
      <div class="action-body">
        <div class="action-id">[0611-5]</div>
        <div class="action-title">&#x1F4C8; MongoDB &mdash; Follow Up with New Digital Ops + Acquisition Stakeholders</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Varun Tiwari &middot; New MongoDB stakeholders from digital ops and digital acquisition teams were introduced to HG data today. Varun to send personalized follow-up to each new contact with relevant use cases (ABM targeting, pipeline telemetry) and schedule individual discovery sessions with Ziad (AE).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0611-6')?'done':''}" data-csm="riley" id="action-0611-6">
      <div class="action-body">
        <div class="action-id">[0611-6]</div>
        <div class="action-title">&#x1F4CB; SAP Ariba &mdash; Confirm Dedicated Resource &amp; Lead Activation Plan with SAP Team</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Riley Rogers &middot; New dedicated SAP review sourcing resource and 1,000+ net new leads identified. Riley to send SAP Ariba team a written summary of the new process, resource assignment, and activation timeline for the identified leads. Confirm next review milestone date.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#x2705;</div>All action items completed.</div>`;
}

// ============================================================
// June 12, 2026  (Friday)
// 51 recordings scanned · 6 confirmed CSM calls · 3 CSMs active
// Nick(3) · Atisha(2) · Divyam(1) · 3 Expansion Signals
// ============================================================

function dayData_2026_06_12() {
  return {
    calls: [
      { ts: 'Jun 12 · 2:30 AM', csm: 'nick', account: 'Softcat Ltd',
        note: 'Nick presented RGIF data expansion to Softcat — UK data set growth and new categories in scope.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Nick Johnson presented RGIF data expansion opportunities to Softcat, focused on the UK data set growth and new data categories available for a potential multi-region deal expansion.' },
      { ts: 'Jun 12 · 3:00 AM', csm: 'nick', account: 'Veeam Software',
        note: 'Brief check-in with Cliff Wright; notetaker removed early, limited transcript.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Unknown', purpose: 'Check-in',
        detail: 'Brief call between Nick Johnson and Cliff Wright (Veeam). The meeting notetaker was removed early in the recording so the transcript is minimal; specific topics discussed are unclear.' },
      { ts: 'Jun 12 · 8:30 AM', csm: 'nick', account: 'Intuit IES',
        note: 'CSM introduction call with Suja Unnikrishnan — onboarding Nick as new CSM.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Nick Johnson introduced himself to Suja Unnikrishnan (Intuit IES) as their new CSM. Introductory onboarding discussion covering platform orientation and upcoming CSM priorities.' },
      { ts: 'Jun 12 · 8:30 AM', csm: 'atisha', account: 'Apple Inc',
        note: 'Bi-weekly sync; July EBR invitation extended and account expansion discussed.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Apple bi-weekly check-in with Atisha Waghela. July EBR invitation extended to Apple contacts. Account expansion opportunities discussed alongside standard cadence topics.' },
      { ts: 'Jun 12 · 9:30 AM', csm: 'divyam', account: 'Lumen Technologies',
        note: '$175k 1-year renewal discussion; contact enrichment interest flagged as expansion.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Divyam Dewan\'s recurring sync with Lumen Technologies. $175k 1-year contract renewal terms reviewed. Customer flagged interest in contact enrichment capabilities as a potential expansion area.' },
      { ts: 'Jun 12 · 10:30 AM', csm: 'atisha', account: 'DRT',
        note: 'Follow-up on hierarchy data delivery progress; BCG project timeline reviewed.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha Waghela followed up with Amanda and Stuart at DRT on hierarchy data processing progress. BCG project context reviewed; data is still being processed on the DRT side with no blockers flagged.' },
    ],
    pulses: [
      { csm: 'nick', account: 'Softcat Ltd', health: 'Healthy' },
      { csm: 'nick', account: 'Veeam Software', health: 'Healthy' },
      { csm: 'nick', account: 'Intuit IES', health: 'Healthy' },
      { csm: 'atisha', account: 'Apple Inc', health: 'Healthy' },
      { csm: 'divyam', account: 'Lumen Technologies', health: 'Healthy' },
      { csm: 'atisha', account: 'DRT', health: 'Healthy' },
    ],
  };
}

function dayMeta_2026_06_12() {
  return {
    pills: [
      ['dot-teal',  '6 Calls'],
      ['dot-amber', '3 Expansion Signals'],
      ['dot-green', '6 Vitally Pulses'],
      ['dot-grey',  'Fri Jun 12 · 51 scanned'],
    ],
    tabs: ['Overview', 'Calls (6)', 'Pulses (6)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_06_12() {
  return `<div class="section-label">Team Activity &mdash; Friday June 12, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Jun 12 &mdash; 51 recordings scanned</strong> via SFDC SOQL &middot; <strong>6 confirmed calls</strong> across 3 CSMs &middot; 3 expansion signals &middot; 0 concerning
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Softcat (RGIF multi-region data expansion &middot; Nick) &middot; Apple (July EBR invitation, account expansion &middot; Atisha) &middot; Lumen ($175k renewal + contact enrichment interest &middot; Divyam)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Softcat (RGIF expansion &#x1F4C8;) &middot; Veeam (check-in) &middot; Intuit IES (CSM intro / onboarding)</div>
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
      <div class="csm-account-note">Lumen Technologies ($175k renewal &#x1F4C8; + contact enrichment interest)</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Apple (bi-weekly, July EBR &#x1F4C8;) &middot; DRT (hierarchy data follow-up)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No recorded activity on Jun 12</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No recorded activity on Jun 12</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No recorded activity on Jun 12</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No recorded activity on Jun 12</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No recorded activity on Jun 12</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_12() {
  return `
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>3 Expansion signals on Fri Jun 12:</strong> Softcat (RGIF multi-region data) &middot; Apple (July EBR + expansion) &middot; Lumen ($175k renewal + contact enrichment)
  </div>
  <div style="color:#64748b;font-size:11px;margin-bottom:8px;">Call table auto-rendered by core.js &mdash; sorted by time PT.</div>`;
}

function dayPulsesHTML_2026_06_12() {
  const cards = [
    { csm: 'nick', health: 'Healthy', account: 'Softcat Ltd',
      opp: 'Vitally Pulse — Jun 12 Expansion Call',
      arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jun 12 · Expansion Signal',
      excerpt: 'NJ/Jun 12: Nick presented RGIF data expansion to Softcat. UK data set growth and new data categories in scope for a potential multi-region deal. Strong expansion conversation; James (Softcat) engaged on pricing and scope (2:30 AM PT, 30 min).' },
    { csm: 'nick', health: 'Healthy', account: 'Veeam Software',
      opp: 'Vitally Pulse — Jun 12 Check-in',
      arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jun 12 · Check-in',
      excerpt: 'NJ/Jun 12: Brief call with Cliff Wright (Veeam). Notetaker was removed early; limited transcript. Specific topics unclear from available recording. No blockers or concerns surfaced (3:00 AM PT, 30 min).' },
    { csm: 'nick', health: 'Healthy', account: 'Intuit IES',
      opp: 'Vitally Pulse — Jun 12 CSM Intro',
      arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jun 12 · CSM Introduction',
      excerpt: 'NJ/Jun 12: Nick introduced himself to Suja Unnikrishnan (Intuit IES) as their new CSM. Introductory onboarding discussion covering platform orientation. Healthy start to the relationship; no blockers (8:30 AM PT, 30 min).' },
    { csm: 'atisha', health: 'Healthy', account: 'Apple Inc',
      opp: 'Vitally Pulse — Jun 12 Bi-Weekly Sync',
      arr: 'Enterprise · Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jun 12 · Bi-Weekly + Expansion',
      excerpt: 'AW/Jun 12: Apple bi-weekly check-in. Atisha extended July EBR invitation to Apple contacts. Account expansion opportunities discussed. Strong relationship; customer engaged on EBR planning (8:30 AM PT, 30 min).' },
    { csm: 'divyam', health: 'Healthy', account: 'Lumen Technologies',
      opp: 'Vitally Pulse — Jun 12 Renewal Sync',
      arr: 'Enterprise · Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jun 12 · Renewal + Expansion Signal',
      excerpt: 'DD/Jun 12: Recurring sync with Lumen. $175k 1-year renewal terms reviewed. Customer flagged interest in contact enrichment as expansion. Positive tone; renewal on track (9:30 AM PT, 30 min).' },
    { csm: 'atisha', health: 'Healthy', account: 'DRT',
      opp: 'Vitally Pulse — Jun 12 Data Follow-up',
      arr: 'Enterprise · Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jun 12 · Data Follow-up',
      excerpt: 'AW/Jun 12: Atisha followed up with Amanda and Stuart (DRT) on hierarchy data processing progress tied to BCG project. Data still being processed on DRT side; no blockers flagged. Steady progress (10:30 AM PT, 30 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><strong>${c.account}</strong><div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none"><div class="empty-icon">&#x1F493;</div>No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_12() {
  return `
  <div class="action-list">
    <div class="action-item ${doneActions.has('0612-1')?'done':''}" data-csm="divyam" id="action-0612-1">
      <div class="action-body">
        <div class="action-id">[0612-1]</div>
        <div class="action-title">&#x1F4C8; Lumen Technologies &mdash; Confirm $175k Renewal Terms with Hayden Smith</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Divyam Dewan &middot; Renewal discussed in today&apos;s sync. $175k 1-year contract terms need formal confirmation. Divyam to follow up with Hayden Smith (HG AE) to align on final terms, contract timeline, and next steps. Do not let this drift past end of June.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0612-2')?'done':''}" data-csm="atisha" id="action-0612-2">
      <div class="action-body">
        <div class="action-id">[0612-2]</div>
        <div class="action-title">&#x1F4C5; Apple &mdash; Send July EBR Invitation and Confirm Agenda with Apple Contacts</div>
        <div class="action-meta"><span class="urgency urgency-high">HIGH</span> Atisha Waghela &middot; July EBR invitation verbally extended during today&apos;s bi-weekly. Atisha to send a formal calendar invite to Apple contacts with a proposed agenda covering account expansion, platform usage, and strategic roadmap alignment. Confirm attendance this week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0612-3')?'done':''}" data-csm="nick" id="action-0612-3">
      <div class="action-body">
        <div class="action-id">[0612-3]</div>
        <div class="action-title">&#x1F680; Softcat &mdash; Follow Up on RGIF Multi-Region Data Expansion with James</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Nick Johnson &middot; RGIF data expansion presentation completed today. James (Softcat) is engaged on UK data set scope and pricing. Nick to send a follow-up summary of the data categories discussed and coordinate with David Garcia Thomas (AE) on commercial terms. Target: book a strategic session this week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0612-4')?'done':''}" data-csm="nick" id="action-0612-4">
      <div class="action-body">
        <div class="action-id">[0612-4]</div>
        <div class="action-title">&#x1F4CB; Intuit IES &mdash; Continue Onboarding Suja Unnikrishnan; Share Platform Resources</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Nick Johnson &middot; Introductory call with Suja Unnikrishnan completed. Send platform onboarding resources, key use-case guides, and a proposed check-in cadence for the next 30 days. Set Suja up for early success as the HG relationship continues under Nick&apos;s ownership.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0612-5')?'done':''}" data-csm="atisha" id="action-0612-5">
      <div class="action-body">
        <div class="action-id">[0612-5]</div>
        <div class="action-title">&#x1F4E6; DRT &mdash; Follow Up with Amanda &amp; Stuart on Hierarchy Data Processing Progress</div>
        <div class="action-meta"><span class="urgency urgency-medium">MEDIUM</span> Atisha Waghela &middot; BCG project timeline depends on hierarchy data delivery. Atisha to check in with Amanda and Stuart next week on processing status and confirm whether DRT&apos;s internal processing steps are on track. Escalate if there&apos;s a blockers on the DRT side.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0612-6')?'done':''}" data-csm="nick" id="action-0612-6">
      <div class="action-body">
        <div class="action-id">[0612-6]</div>
        <div class="action-title">&#x1F4CB; Veeam &mdash; Follow Up with Cliff Wright on Call Topics</div>
        <div class="action-meta"><span class="urgency urgency-low">LOW</span> Nick Johnson &middot; Notetaker was removed early from today&apos;s call; transcript is minimal. Nick to send a brief follow-up to Cliff Wright to confirm any action items or next steps from the call. Keep the relationship warm and ensure nothing was missed.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none"><div class="empty-icon">&#x2705;</div>All action items completed.</div>`;
}

function weeklyOrMonthlyHTML_2026_06_12() {
  return `<div class="weekly-summary">
    <div class="weekly-header">
      <div class="weekly-title">Week 2 Summary &mdash; June 8&ndash;12, 2026</div>
      <div class="weekly-subtitle">Enterprise CSM Engagement &middot; 8 CSMs &middot; 46 confirmed calls</div>
    </div>

    <div class="weekly-kpi-row">
      <div class="weekly-kpi"><div class="kpi-value">46</div><div class="kpi-label">Confirmed Calls</div></div>
      <div class="weekly-kpi"><div class="kpi-value">8</div><div class="kpi-label">CSMs Active</div></div>
      <div class="weekly-kpi kpi-good"><div class="kpi-value">0</div><div class="kpi-label">Concerning Signals</div></div>
      <div class="weekly-kpi kpi-expand"><div class="kpi-value">14</div><div class="kpi-label">Expansion Signals</div></div>
    </div>

    <div class="weekly-section-title">Daily Breakdown</div>
    <table class="weekly-table">
      <thead><tr><th>Day</th><th>Calls</th><th>Concerning</th><th>Active CSMs</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>Mon 6/8</strong></td>
          <td>6</td>
          <td>0</td>
          <td>Nick (2), Rani (2), Riley (1), Divyam (1)</td>
        </tr>
        <tr>
          <td><strong>Tue 6/9</strong></td>
          <td>11</td>
          <td>0</td>
          <td>Atisha (3), Nick (2), Riley (2), Divyam (2), Rani (1), Andy (1)</td>
        </tr>
        <tr>
          <td><strong>Wed 6/10</strong></td>
          <td>14</td>
          <td>0</td>
          <td>Divyam (3), Rani (2), Nick (2), Riley (2), Atisha (2), Varun (1), Pam (1), Andy (1)</td>
        </tr>
        <tr>
          <td><strong>Thu 6/11</strong></td>
          <td>9</td>
          <td>0</td>
          <td>Varun (2), Atisha (2), Pam (2), Riley (2), Divyam (1)</td>
        </tr>
        <tr>
          <td><strong>Fri 6/12</strong></td>
          <td>6</td>
          <td>0</td>
          <td>Nick (3), Atisha (2), Divyam (1)</td>
        </tr>
        <tr class="row-total">
          <td><strong>Week Total</strong></td>
          <td><strong>46</strong></td>
          <td><strong>0</strong></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <div class="weekly-section-title">CSM Performance &mdash; W2</div>
    <table class="weekly-table">
      <thead><tr><th>CSM</th><th>Calls</th><th>Key Accounts Touched</th><th>Notable</th></tr></thead>
      <tbody>
        <tr>
          <td><strong>Nick Johnson</strong></td>
          <td>9</td>
          <td>Softcat, Veeam, Intuit IES, NTT Data, IBM, Infor</td>
          <td>RGIF expansion (Softcat), NTT re-engagement, Intuit IES onboarding</td>
        </tr>
        <tr>
          <td><strong>Atisha Waghela</strong></td>
          <td>9</td>
          <td>Apple, DRT, RSM US, Intel, Cognizant</td>
          <td>Apple July EBR, Cognizant expansion; RSM DLP blocker ongoing</td>
        </tr>
        <tr>
          <td><strong>Divyam Dewan</strong></td>
          <td>8</td>
          <td>Lumen, Sage, Adobe, SAS Institute, BILL</td>
          <td>Lumen $175k renewal on track, SAS expansion signal</td>
        </tr>
        <tr>
          <td><strong>Riley Rogers</strong></td>
          <td>7</td>
          <td>SAP (SuccessFactors, Ariba, Fieldglass), Paycom, Intuit MailChimp</td>
          <td>SAP Ariba 1,000+ net new leads; new dedicated resource confirmed</td>
        </tr>
        <tr>
          <td><strong>Rani Guy</strong></td>
          <td>5</td>
          <td>NetApp, Workday, AWS, Cloudflare</td>
          <td>NetApp match-rate follow-up; Workday Databricks delivery</td>
        </tr>
        <tr>
          <td><strong>Pam Huck</strong></td>
          <td>3</td>
          <td>ZoomInfo, ADP</td>
          <td>ZoomInfo renewal on track; ADP expansion discussion active</td>
        </tr>
        <tr>
          <td><strong>Varun Tiwari</strong></td>
          <td>3</td>
          <td>MongoDB, Autodesk, ServiceNow</td>
          <td>MongoDB new stakeholders &mdash; expansion signal; Autodesk V2 migration</td>
        </tr>
        <tr>
          <td><strong>Andy Lim</strong></td>
          <td>2</td>
          <td>Ever Pure, Booz Allen</td>
          <td>Ever Pure cloud/spend column fix in progress</td>
        </tr>
      </tbody>
    </table>

    <div class="weekly-section-title">W2 Top Signals &amp; Heading into W3</div>
    <div style="background:#141820;border:1px solid #1e293b;border-radius:8px;padding:12px;margin-bottom:8px;">
      <div style="font-size:12px;color:#cbd5e1;line-height:2;">
        <span style="color:#ef4444;font-weight:600;">HIGH</span> &nbsp;&nbsp;Lumen &mdash; Divyam to confirm $175k renewal terms with Hayden Smith before EOM<br>
        <span style="color:#ef4444;font-weight:600;">HIGH</span> &nbsp;&nbsp;Apple &mdash; Atisha to send July EBR formal invite + agenda to Apple contacts this week<br>
        <span style="color:#ef4444;font-weight:600;">HIGH</span> &nbsp;&nbsp;RSM US &mdash; Atisha to confirm HG security doc sent to Ellis; DLP blocker unresolved<br>
        <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;Softcat &mdash; Nick to follow up on RGIF multi-region expansion scope and pricing<br>
        <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;Autodesk &mdash; Varun to confirm V2 migration timeline with solution team<br>
        <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;MongoDB &mdash; Varun to send personalized follow-up to new digital ops stakeholders<br>
        <span style="color:#f59e0b;font-weight:600;">MED</span> &nbsp;&nbsp;Intel &mdash; Atisha to prepare data coverage gap response (vs. PitchBook) for Fernanda
      </div>
    </div>
  </div>`;
}

// ─── June 15, 2026 ───────────────────────────────────────────────────────────

function dayData_2026_06_15() {
  return {
    calls: [
      { ts: 'Jun 15 · 1:30 AM', csm: 'nick', account: 'Accenture',
        note: 'Order form and renewal options reviewed with Kelly Gumber (Accenture)',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Order form review with Accenture contact Kelly Gumber; contract paperwork, renewal options, and platform capabilities discussed alongside the HG account team.' },
      { ts: 'Jun 15 · 3:00 AM', csm: 'varun', account: 'OpenText',
        note: 'Bi-weekly cadence with Sujay Kodagali (OpenText): API integration, dashboard, and Year 2 renewal',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Bi-weekly cadence with OpenText (Sujay Kodagali). Covered API integration status, dashboard reporting, and Year 2 renewal progress.' },
      { ts: 'Jun 15 · 5:00 AM', csm: 'nick', account: 'Infor',
        note: 'Post-onsite debrief with Nicole Morgan (Infor): Oct 2026 renewal options and Snowflake integration',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: "Post-onsite debrief with Infor's Nicole Morgan and AE Augie Buettner. Oct 1, 2026 renewal options presented; Snowflake semantic view integration and DMF next steps discussed." },
      { ts: 'Jun 15 · 8:00 AM', csm: 'riley', account: 'SAP',
        note: 'TrustRadius Leads program sync with Alejandro Barajas and Scott Stater (SAP)',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: "Regular TrustRadius leads program sync with SAP's Alejandro Barajas and Scott Stater. Integration status, leads pipeline, and delivery cadence reviewed." },
      { ts: 'Jun 15 · 9:30 AM', csm: 'rani', account: 'Workday',
        note: 'Customer-initiated ad-hoc TrustRadius discussion with Workday team; issue flagged',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Ad-hoc TrustRadius platform discussion with Workday contacts Rashmi Datta, Mardigan Moffat, and Cole Arutian. Customer initiated to flag a platform or reporting concern; resolution follow-up required.' },
      { ts: 'Jun 15 · 1:00 PM', csm: 'riley', account: 'SAP',
        note: 'SAP campaign execution sync: TrustRadius performance, reporting, and renewal alignment',
        mins: 60, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: "Campaign execution sync with SAP's Alejandro Barajas, Mardigan Moffat, and Cole Arutian. TrustRadius campaign performance, reporting cadence, and renewal alignment discussed." },
    ],
    pulses: [
      { csm: 'nick', account: 'Accenture', health: 'Healthy',
        note: 'Order form and renewal discussion. Customer engaged on contract options.' },
      { csm: 'varun', account: 'OpenText', health: 'Healthy',
        note: 'Bi-weekly cadence. API integration and Year 2 renewal on track.' },
      { csm: 'nick', account: 'Infor', health: 'Healthy',
        note: 'Post-onsite debrief. Oct 2026 renewal options shared; Snowflake integration in progress.' },
      { csm: 'riley', account: 'SAP', health: 'Healthy',
        note: 'TrustRadius leads program sync. Integration active; pipeline healthy.' },
      { csm: 'rani', account: 'Workday', health: 'Concerning',
        note: 'Customer-initiated issue discussion. TrustRadius concern flagged; follow-up needed.' },
      { csm: 'riley', account: 'SAP', health: 'Healthy',
        note: 'Campaign execution sync. TR performance strong; renewal alignment ongoing.' },
    ],
  };
}

function dayMeta_2026_06_15() {
  return {
    pills: [
      ['dot-teal',  '6 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-green', '6 Pulses'],
      ['dot-grey',  'Mon Jun 15 · 46 scanned'],
    ],
    tabs: ['Overview', 'Calls (6)', 'Pulses (6)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_06_15() {
  return `<div class="section-label">Team Activity &mdash; Monday June 15, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Monday Jun 15 &mdash; 46 recordings scanned</strong> via SFDC SOQL &middot; <strong>6 confirmed calls</strong> across 4 CSMs &middot; 1 Concerning (Workday) &middot; 4 unconfirmed (no transcript)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Workday (Rani Guy)</strong> &mdash; Customer initiated ad-hoc call to flag a TrustRadius concern. Follow-up required to resolve and document.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP (Leads program sync, 8:00 AM) &middot; SAP (Campaign execution sync, 1:00 PM)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Accenture (order form review, 1:30 AM) &middot; Infor (post-onsite debrief + Oct renewal, 5:00 AM)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday (customer-initiated issue, 9:30 AM) &middot; NetApp (unconfirmed, 1:00 PM)</div>
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
      <div class="csm-account-note">OpenText (bi-weekly cadence + Year 2 renewal, 3:00 AM)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 unconfirmed &mdash; BILL (no transcript, 10:00 AM)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No events scheduled</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Intel unconfirmed (no transcript, 7:00 AM) &middot; Airtel no recording</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No events scheduled</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_15() {
  return `<div style="background:#141820;border:1px solid #1e293b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x26A0;&#xFE0F; <strong>4 unconfirmed calls (no transcript):</strong> Atisha &rarr; Intel (7:00 AM) &middot; Nick &rarr; Westcon (8:00 AM) &middot; Divyam &rarr; BILL (10:00 AM) &middot; Rani &rarr; NetApp (1:00 PM). Inferred from SFDC event ownership only &mdash; not speaker-verified.
  </div>`;
}

function dayPulsesHTML_2026_06_15() {
  const cards = [
    { csm: 'nick', health: 'Healthy', account: 'Accenture',
      csmlbl: 'Nick Johnson', change: 'Jun 15 · Ad-hoc',
      excerpt: 'NJ/Jun 15: Order form review with Kelly Gumber (Accenture). Contract paperwork and renewal options reviewed (1:30 AM PT, 30 min). Customer engaged and responding.' },
    { csm: 'varun', health: 'Healthy', account: 'OpenText',
      csmlbl: 'Varun Tiwari', change: 'Jun 15 · Recurring',
      excerpt: 'VT/Jun 15: Bi-weekly cadence with Sujay Kodagali (OpenText). API integration and Year 2 renewal update; on track (3:00 AM PT, 30 min).' },
    { csm: 'nick', health: 'Healthy', account: 'Infor',
      csmlbl: 'Nick Johnson', change: 'Jun 15 · Ad-hoc',
      excerpt: 'NJ/Jun 15: Post-onsite debrief with Nicole Morgan (Infor) and AE Augie Buettner. Oct 2026 renewal options and Snowflake integration next steps (5:00 AM PT, 30 min).' },
    { csm: 'riley', health: 'Healthy', account: 'SAP',
      csmlbl: 'Riley Rogers', change: 'Jun 15 · Recurring',
      excerpt: 'RR/Jun 15: TrustRadius leads program sync with Alejandro Barajas and Scott Stater (SAP). Integration active; pipeline healthy (8:00 AM PT, 30 min).' },
    { csm: 'rani', health: 'Concerning', account: 'Workday',
      csmlbl: 'Rani Guy', change: 'Jun 15 · Ad-hoc',
      excerpt: 'RG/Jun 15: Customer-initiated TrustRadius issue discussion with Rashmi Datta, Mardigan Moffat, Cole Arutian (Workday). Concern flagged; follow-up required (9:30 AM PT, 30 min).' },
    { csm: 'riley', health: 'Healthy', account: 'SAP',
      csmlbl: 'Riley Rogers', change: 'Jun 15 · Recurring',
      excerpt: 'RR/Jun 15: SAP campaign execution sync with Alejandro Barajas, Mardigan Moffat, Cole Arutian. TR campaign performance strong; renewal alignment ongoing (1:00 PM PT, 60 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><strong>${c.account}</strong></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_15() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0615-1')?'done':''}" data-csm="rani" id="action-0615-1">
      <div class="action-checkbox ${doneActions.has('0615-1')?'checked':''}" onclick="toggleAction('0615-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Workday &mdash; Follow up on TrustRadius issue flagged by customer</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Customer (Rashmi Datta) initiated ad-hoc call to flag a TrustRadius concern. Identify the issue and send a written resolution or timeline to Workday within 24 hours.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0615-2')?'done':''}" data-csm="nick" id="action-0615-2">
      <div class="action-checkbox ${doneActions.has('0615-2')?'checked':''}" onclick="toggleAction('0615-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Infor &mdash; Send Oct 2026 renewal options summary to Nicole Morgan</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Post-onsite debrief covered renewal options (Oct 1, 2026 expiry). Send formal renewal options doc with Snowflake integration roadmap and DMF pricing to Nicole Morgan and Augie Buettner.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0615-3')?'done':''}" data-csm="nick" id="action-0615-3">
      <div class="action-checkbox ${doneActions.has('0615-3')?'checked':''}" onclick="toggleAction('0615-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DD; Accenture &mdash; Send order form and contract summary to Kelly Gumber</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; Order form review call completed. Send written summary of contract options and renewal terms; confirm next steps on signature and approval.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0615-4')?'done':''}" data-csm="riley" id="action-0615-4">
      <div class="action-checkbox ${doneActions.has('0615-4')?'checked':''}" onclick="toggleAction('0615-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; SAP &mdash; Send leads program recap and track integration progress</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; TrustRadius leads program sync completed. Send session recap with integration status and open items to Alejandro Barajas and Scott Stater (SAP).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0615-5')?'done':''}" data-csm="varun" id="action-0615-5">
      <div class="action-checkbox ${doneActions.has('0615-5')?'checked':''}" onclick="toggleAction('0615-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C5; OpenText &mdash; Send bi-weekly follow-up notes; confirm Year 2 renewal timeline</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Bi-weekly cadence with Sujay Kodagali completed. Send call notes covering API integration status and Year 2 renewal next steps to OpenText.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0615-6')?'done':''}" data-csm="atisha" id="action-0615-6">
      <div class="action-checkbox ${doneActions.has('0615-6')?'checked':''}" onclick="toggleAction('0615-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F50D; Intel &mdash; Confirm transcript; verify weekly sync topics covered</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Atisha Waghela &middot; Intel weekly sync had no transcript captured. Check if recording synced to Weflow; note topics from memory or follow up with Intel contact if key items were missed.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─── 2026-06-16 (Tuesday) ──────────────────────────────────────────────────

function dayData_2026_06_16() {
  return {
    calls: [
      { ts: 'Jun 16 · 7:30 AM', csm: 'riley', account: 'SAP Inc',
        note: 'TrustRadius CX Sync — Top Rated award promotions, LinkedIn campaign, blog strategy.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley discussed the recent SAP CX Top Rated award announcement and reviewed SAP\'s in-progress promotion plan — blog in editing phase, social cards in progress, LinkedIn media campaign planned.' },
      { ts: 'Jun 16 · 8:00 AM', csm: 'riley', account: 'UKG (Ultimate Kronos Group)',
        note: 'TR CSM Sync — manager ask for G2 vs TrustRadius ROI comparison; dashboard access still pending.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Mixed',
        detail: 'UKG manager asked to compare TrustRadius ROI and insights data against G2 — specifically around pipeline influence and attribution. Riley walked through TR metrics. Customer still lacks dashboard access (Salesforce requests pending).' },
      { ts: 'Jun 16 · 8:00 AM', csm: 'nick', account: 'Siemens AG',
        note: 'Bi-weekly HG sync — Phoenix team RGI adoption, customer summit planning (Sep 1–3).',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Nick reviewed Phoenix team progress on RGI platform adoption and discussed the upcoming Siemens customer summit (Sep 1–3). Jeff Wymer confirmed 12–14 attendees expected.' },
      { ts: 'Jun 16 · 8:30 AM', csm: 'nick', account: 'Intuit Mailchimp',
        note: 'New CSM intro call — Hayden Smith (AM) introduced Nick as dedicated CSM to Mailchimp team.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Account Manager Hayden Smith facilitated an introduction call bringing Nick Johnson on as the dedicated Enterprise CSM for Intuit Mailchimp BU, meeting Tyler Frazer and Lindsay Gerardy.' },
      { ts: 'Jun 16 · 8:30 AM', csm: 'riley', account: 'Intuit Mailchimp',
        note: 'TR Bi-Weekly Success Call — new stakeholder Spencer Adkins (first time), TR program overview.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley and Mardigan Moffat onboarded new Mailchimp marketing stakeholder Spencer Adkins, who is picking up the TrustRadius program ownership. Reviewed program value, partnership support model, and how TrustRadius can help through the transition.' },
      { ts: 'Jun 16 · 9:30 AM', csm: 'nick', account: 'SAP Inc',
        note: 'HG biweekly sync — Phoenix AI tool updates, Siemens customer summit tie-in, Chloé keynote at AWS conference.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Nick and Chloé Portier (SAP) covered Phoenix AI tool developments, linked to Siemens Jeff Wymer\'s upcoming summit, and discussed competitive intelligence workflows. Chloé mentioned her upcoming keynote at an AWS women-in-AI conference in SF.' },
      { ts: 'Jun 16 · 10:00 AM', csm: 'rani', account: 'Cisco',
        note: 'Cisco Isovalent onboarding — customer (Tu-Anh) has integration questions; Rani scheduled PM/engineer follow-up for Jun 17.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Tu-Anh (Cisco/Isovalent) started integration based on documentation and needed technical validation from Rani\'s PM and engineer. Rani scheduled a deeper follow-up call for Jun 17 at 12:30 PM PT. Customer traveling after Thursday.' },
      { ts: 'Jun 16 · 11:30 AM', csm: 'riley', account: 'Red Hat Inc',
        note: 'TR biweekly — MDR email template review, market report CTAs for Ansible/RHEL/OpenShift, July 1 launch target.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Brianna Gault shared the MDR (Market Development Rep) email template for Red Hat\'s content strategist team targeting July 1 launch. Riley advised leading with customer need rather than TR/Red Hat branding. Market report CTA status: Ansible in editing, RHEL under review, OpenShift nearly done.' },
      { ts: 'Jun 16 · 11:30 AM', csm: 'varun', account: 'Alight Solutions LLC',
        note: 'Platform walkthrough + competitor category alignment for new stakeholder Lisa Spence (Sales Ops).',
        mins: 45, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun and Augie Buettner (AM) introduced Lisa Spence to the HG Insights platform. Lisa (20-year Alight veteran, recently moved to Sales Ops) is focused on competitor takeout campaigns and identifying white space in their client base — key expansion use case for HG data.' },
      { ts: 'Jun 16 · 12:00 PM', csm: 'riley', account: 'Adobe Systems Incorporated',
        note: 'TR GEO Updates — dashboard nearly live for Adobe reps, waiting on internal Tanner green-light.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley, Mardigan Moffat, Todd Detmold, and Adobe\'s Giacomo Pesaresi reviewed the TR GEO dashboard rollout. Dashboard is built and ready but awaiting internal activation. Todd flagged that the dashboard should go live "any day now."' },
      { ts: 'Jun 16 · 2:00 PM', csm: 'riley', account: 'Zoom Video Communications',
        note: 'TR CSM Sync — post-conference catch-up; in-person meeting planned June 29.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley and Mardigan Moffat held their regular Zoom TR CSM sync with Camille Shortridge. Recapped the recent conference (sloth plushie moment). Upcoming in-person meeting scheduled for June 29 with planned dinner.' },
    ],
    pulses: [
      { csm: 'riley', account: 'SAP Inc', health: 'Healthy',
        note: 'Jun 16 TR CX Sync — Top Rated award announcement synced. SAP promoting via blog + LinkedIn campaign.' },
      { csm: 'riley', account: 'UKG (Ultimate Kronos Group)', health: 'Healthy',
        note: 'Jun 16 TR Sync — Manager-driven ask to compare TR ROI vs G2. Dashboard access still pending in Salesforce.' },
      { csm: 'nick', account: 'Siemens AG', health: 'Healthy',
        note: 'Jun 16 bi-weekly — Phoenix team progressing on RGI. Customer summit Sep 1–3 confirmed, 12–14 attendees.' },
      { csm: 'nick', account: 'Intuit Mailchimp', health: 'Healthy',
        note: 'Jun 16 CSM intro — Nick introduced as dedicated CSM to Tyler Frazer and Lindsay Gerardy.' },
      { csm: 'riley', account: 'Intuit Mailchimp', health: 'Healthy',
        note: 'Jun 16 TR Bi-weekly — Spencer Adkins (new stakeholder) onboarded to TR program for first time.' },
      { csm: 'nick', account: 'SAP Inc', health: 'Healthy',
        note: 'Jun 16 HG biweekly — Phoenix AI tool updates, Siemens summit tie-in, Chloé AWS keynote upcoming.' },
      { csm: 'rani', account: 'Cisco', health: 'Healthy',
        note: 'Jun 16 Isovalent onboarding — Tu-Anh has integration Q\'s. Follow-up with PM/engineer booked for Jun 17 12:30 PM PT.' },
      { csm: 'riley', account: 'Red Hat Inc', health: 'Healthy',
        note: 'Jun 16 TR biweekly — MDR email templates in review, July 1 launch target. CTA progress on 3 market reports.' },
      { csm: 'varun', account: 'Alight Solutions LLC', health: 'Healthy',
        note: 'Jun 16 platform walkthrough — New stakeholder Lisa Spence introduced; competitor takeout use case confirmed.' },
      { csm: 'riley', account: 'Adobe Systems Incorporated', health: 'Healthy',
        note: 'Jun 16 TR GEO — Dashboard ready, pending internal activation by Tanner. Should go live imminently.' },
      { csm: 'riley', account: 'Zoom Video Communications', health: 'Healthy',
        note: 'Jun 16 TR Sync — Post-conference catch-up. In-person meeting June 29 confirmed with dinner plans.' },
    ],
  };
}

function dayMeta_2026_06_16() {
  return {
    pills: [
      ['dot-teal',   '11 Calls'],
      ['dot-amber',  '2 Expansion'],
      ['dot-green',  '11 Pulses'],
      ['dot-grey',   'Tue Jun 16 · 71 scanned'],
    ],
    tabs: ['Overview', 'Calls (11)', 'Pulses (11)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_06_16() {
  return `<div class="section-label">Team Activity &mdash; Tuesday June 16, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Jun 16 &mdash; 71 recordings scanned</strong> via SFDC SOQL &middot; <strong>11 confirmed calls</strong> across 4 CSMs &middot; 2 expansion signals (Alight new stakeholder, Red Hat MDR launch) &middot; Cisco Isovalent onboarding follow-up booked for Jun 17
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;color:#7dd3fc;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;">
    &#x1F4C8; <strong>Expansion:</strong> Varun &mdash; Alight Solutions new stakeholder (Lisa Spence, Sales Ops) onboarded for competitor intelligence use case &middot; Riley &mdash; Red Hat MDR email launch targeting Jul 1 with 3 market report CTAs in progress
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">6 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">6</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">6</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">180m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP (Top Rated promo) &middot; UKG (G2 ROI compare ask) &middot; Mailchimp x2 (HG + TR) &middot; Red Hat (MDR launch) &middot; Adobe (GEO dashboard) &middot; Zoom (post-conf sync)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Siemens (summit + Phoenix) &middot; Intuit Mailchimp (CSM intro) &middot; SAP (HG biweekly)</div>
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
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Alight Solutions (new stakeholder Lisa Spence; competitor takeout use case)</div>
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
      <div class="csm-account-note">Cisco/Isovalent (onboarding — integration Q&amp;A; PM follow-up booked Jun 17)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed call recordings on Jun 16 (Adobe GTM Tool Review had no transcript)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed call recordings on Jun 16</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed call recordings on Jun 16</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed call recordings on Jun 16</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_16() {
  return `<div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x26A0;&#xFE0F; <strong>Note:</strong> Cisco/Isovalent account (a76RN0000005PdhYAE) attributed to Rani Guy by transcript speaker detection — account in data.js assigned to Pam Huck. Possible x-cov or separate Isovalent product ownership.
  </div>
  <div style="background:#1c1f26;border:1px solid #64748b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CB; <strong>No-transcript recordings (26):</strong> Includes Adobe x HG GTM Tool Review (no transcript), Apple Strategy &amp; Planning (no transcript), Trellix monthly sync (no transcript), Saviynt renewal check-in (no transcript), LogicGate use case sync (no transcript) — cannot confirm CSM participation without speaker data.
  </div>
  <div class="calls-table"></div>`;
}

function dayPulsesHTML_2026_06_16() {
  const cards = [
    { csm:'riley', health:'Healthy', account:'SAP Inc',
      opp:'Vitally Pulse &mdash; Jun 16 TR CX Sync',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 16 &middot; Check-in',
      excerpt:'6/16 RR: Top Rated award promotions reviewed (7:30 AM PT, 30 min). SAP promoting via blog + LinkedIn campaign. All materials confirmed received.' },
    { csm:'riley', health:'Healthy', account:'UKG (Ultimate Kronos Group)',
      opp:'Vitally Pulse &mdash; Jun 16 TR ROI Sync',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 16 &middot; Mixed',
      excerpt:'6/16 RR: TR CSM Sync (8:00 AM PT, 30 min). Manager-driven ask to compare TR ROI data vs G2 — pipeline influence and attribution. Dashboard access still pending in Salesforce (3–4 requests unfulfilled).' },
    { csm:'nick', health:'Healthy', account:'Siemens AG',
      opp:'Vitally Pulse &mdash; Jun 16 Bi-weekly',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 16 &middot; Check-in',
      excerpt:'6/16 NJ: Bi-weekly HG sync (8:00 AM PT, 30 min). Phoenix team RGI adoption in progress. Customer summit Sep 1–3 confirmed; Jeff Wymer expecting ~12–14 attendees.' },
    { csm:'nick', health:'Healthy', account:'Intuit Mailchimp',
      opp:'Vitally Pulse &mdash; Jun 16 CSM Intro',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 16 &middot; Check-in',
      excerpt:'6/16 NJ: New CSM introduction (8:30 AM PT, 30 min). Hayden Smith (AM) introduced Nick as dedicated CSM to Tyler Frazer and Lindsay Gerardy. First formal HG CSM touchpoint.' },
    { csm:'riley', health:'Healthy', account:'Intuit Mailchimp',
      opp:'Vitally Pulse &mdash; Jun 16 TR Bi-Weekly',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 16 &middot; Check-in',
      excerpt:'6/16 RR: TR Bi-Weekly (8:30 AM PT, 30 min). New stakeholder Spencer Adkins attending TR program call for first time — picking up from Bianca. TR partnership value and support model reviewed.' },
    { csm:'nick', health:'Healthy', account:'SAP Inc',
      opp:'Vitally Pulse &mdash; Jun 16 HG Biweekly',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jun 16 &middot; Check-in',
      excerpt:'6/16 NJ: HG biweekly sync (9:30 AM PT, 30 min). Phoenix AI tool updates; Siemens summit tie-in; Chloé Portier keynoting AWS women-in-AI conference in SF next week.' },
    { csm:'rani', health:'Healthy', account:'Cisco',
      opp:'Vitally Pulse &mdash; Jun 16 Isovalent Onboarding',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jun 16 &middot; Issue',
      excerpt:'6/16 RG: Cisco Isovalent onboarding (10:00 AM PT, 30 min). Tu-Anh started integration from docs, needs PM + engineer technical validation. Follow-up booked Jun 17 12:30 PM PT.' },
    { csm:'riley', health:'Healthy', account:'Red Hat Inc',
      opp:'Vitally Pulse &mdash; Jun 16 TR Biweekly',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 16 &middot; Mixed',
      excerpt:'6/16 RR: TR biweekly (11:30 AM PT, 30 min). MDR email template review for July 1 launch. CTAs: Ansible editing, RHEL under review, OpenShift almost done. Riley advised lead-with-need messaging approach.' },
    { csm:'varun', health:'Healthy', account:'Alight Solutions LLC',
      opp:'Vitally Pulse &mdash; Jun 16 Platform Walkthrough',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jun 16 &middot; Expansion',
      excerpt:'6/16 VT: Platform walkthrough (11:30 AM PT, 45 min). New stakeholder Lisa Spence (Sales Ops, 20 yrs at Alight) onboarded for competitor takeout and white-space identification use case. High engagement.' },
    { csm:'riley', health:'Healthy', account:'Adobe Systems Incorporated',
      opp:'Vitally Pulse &mdash; Jun 16 TR GEO Updates',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 16 &middot; Check-in',
      excerpt:'6/16 RR: TR GEO Updates (12:00 PM PT, 30 min). GEO dashboard built and ready; awaiting Tanner\'s internal activation. Todd Detmold expecting it to go live "any day now."' },
    { csm:'riley', health:'Healthy', account:'Zoom Video Communications',
      opp:'Vitally Pulse &mdash; Jun 16 TR CSM Sync',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jun 16 &middot; Check-in',
      excerpt:'6/16 RR: TR CSM Sync (2:00 PM PT, 30 min). Post-conference catch-up with Camille Shortridge. In-person meeting confirmed June 29 with dinner. Positive relationship, strong rapport.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-weight:600;font-size:13px;color:#f1f5f9;">${c.account}</div>
          <div style="font-size:11px;color:#64748b;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_16() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0616-1')?'done':''}" data-csm="riley" id="action-0616-1">
      <div class="action-checkbox ${doneActions.has('0616-1')?'checked':''}" onclick="toggleAction('0616-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; UKG &mdash; Send TR ROI metrics pack and respond to G2 comparison ask</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers &middot; UKG manager asked to compare TrustRadius ROI vs G2 (pipeline influence, attribution). Send TR metrics dashboard summary and escalate Salesforce dashboard access blockers (3–4 requests pending). Address before next sync.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0616-2')?'done':''}" data-csm="rani" id="action-0616-2">
      <div class="action-checkbox ${doneActions.has('0616-2')?'checked':''}" onclick="toggleAction('0616-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F527; Cisco/Isovalent &mdash; Run PM + engineer technical onboarding call (Jun 17, 12:30 PM PT)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Tu-Anh (Cisco/Isovalent) started integration from documentation and needs PM + engineer validation. Follow-up call already booked for Jun 17. Ensure PM and engineer are briefed and join. Customer traveling after Thursday — this is the only window.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0616-3')?'done':''}" data-csm="riley" id="action-0616-3">
      <div class="action-checkbox ${doneActions.has('0616-3')?'checked':''}" onclick="toggleAction('0616-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E7; Red Hat &mdash; Review MDR email template draft and share best-practice feedback to Brianna</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; Brianna Gault shared MDR email template targeting July 1 launch. Riley advised leading with customer need over TR/Red Hat branding. Send written feedback on the draft copy to Brianna Gault and the content strategist team.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0616-4')?'done':''}" data-csm="varun" id="action-0616-4">
      <div class="action-checkbox ${doneActions.has('0616-4')?'checked':''}" onclick="toggleAction('0616-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F30D; Alight &mdash; Send Lisa Spence platform setup guide and narrowed competitor category list</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Lisa Spence (new Alight Sales Ops stakeholder) was introduced to the HG platform for competitor takeout use case. Send her login instructions, benefits administration competitor category list, and schedule a follow-up use case deep dive.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0616-5')?'done':''}" data-csm="riley" id="action-0616-5">
      <div class="action-checkbox ${doneActions.has('0616-5')?'checked':''}" onclick="toggleAction('0616-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F3C6; SAP &mdash; Confirm receipt of Top Rated media kit and support LinkedIn campaign launch</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; SAP CX confirmed Top Rated promotion plan (blog, social cards, LinkedIn). Follow up to confirm media kit was received and offer support on the LinkedIn campaign assets. Connect Binod Negi with any additional materials needed.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0616-6')?'done':''}" data-csm="riley" id="action-0616-6">
      <div class="action-checkbox ${doneActions.has('0616-6')?'checked':''}" onclick="toggleAction('0616-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Mailchimp &mdash; Send TR program overview doc to Spencer Adkins</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Riley Rogers &middot; Spencer Adkins (new Mailchimp marketing stakeholder) attended his first TR program call. Send him the TR program overview, partnership support model summary, and contact info to get him fully onboarded to the account.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─────────────────────────────────────────────
// June 17, 2026 — Wednesday
// 10 confirmed CSM calls · 8/8 CSMs active
// 182 recordings scanned via SFDC SOQL
// ─────────────────────────────────────────────

function dayData_2026_06_17() {
  return {
    calls: [
      { ts: 'Jun 17 · 6:00 AM', csm: 'atisha', account: 'Deloitte',
        note: 'Data quality anomalies flagged: wrong category mappings (Amazon S3, ADP HCM, SPC for Excel). Rajesh reviewing HG categorization logic.',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Rajesh Shetty (Deloitte) flagged multiple HG data categorization errors during the weekly sync: Amazon S3 labeled as OS, ADP HCM miscategorized, SPC for Excel appearing as web conferencing. HG CS had asked Rajesh to review specific logic; he returned with documented anomalies requiring engineering investigation.' },
      { ts: 'Jun 17 · 6:00 AM', csm: 'nick', account: 'Check Point',
        note: 'Presented sample match results for 11K records. Expansion to 100K file dataset scoped — costs and next steps discussed.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'David Garcia-Thomas and Gavin Padden (HG) presented sample matching results for 11,000 organizations from Check Point\'s data file. Call focused on reviewing match quality and scoping expansion to the full 100K-record dataset, including potential costs and timeline. Check Point stakeholders Ariel Keinan and Assaf Cohen participated.' },
      { ts: 'Jun 17 · 7:00 AM', csm: 'riley', account: 'IBM',
        note: 'Biweekly TR sync — YTD review count discrepancy (130 vs 122), regional breakdown report shared, conversion campaign paused.',
        mins: 45, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Riley shared a regional breakdown report for IBM\'s TrustRadius reviews. Discrepancy identified: 130 reviews in TR system vs 122 confirmed YTD. Conversion campaign is on pause. Riley confirmed the regional report met the team\'s needs. Ongoing relationship maintenance with follow-up on conversion status pending.' },
      { ts: 'Jun 17 · 7:30 AM', csm: 'varun', account: 'CBTS',
        note: 'Engineering resolved FAI negative values bug and EDG group ID binary format issue. CBTS updated; data feed refresh coordinated.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Varun Tiwari confirmed to CBTS (Mitchell VanderKam, Timothy Selaty) that HG engineering resolved two previously reported data issues: (1) FAI values ranging from positive to negative, and (2) EDG group IDs stored in binary format. Data feed refresh coordinated. Both bugs confirmed fixed in the bi-weekly sync.' },
      { ts: 'Jun 17 · 8:30 AM', csm: 'andy', account: 'SAS Institute',
        note: 'MCP pilot intro — HG MCP capabilities demo for SAS CI product launch. SAS has in-house tool; exploring synergies.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Andy Lim presented HG\'s Model Context Protocol (MCP) capabilities to SAS Institute in support of their CI product launch. Jesper Bank Jorgensen was impressed but noted SAS already developed an in-house tool using their own data. Conversation shifted to exploring how HG MCP could complement SAS\'s existing tooling as a pilot expansion use case.' },
      { ts: 'Jun 17 · 9:00 AM', csm: 'divyam', account: 'Cotality',
        note: 'TrustRadius kick-off with Shannon Farrer\'s team — insurance and mortgage stakeholders onboarded, program overview delivered.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam Dewan led a TrustRadius kick-off for Cotality. Shannon Farrer introduced insurance and mortgage stakeholders including Jolene Melancon and Micah Zeuch. TR program overview delivered; first formal touchpoint establishing the TR engagement model for this account.' },
      { ts: 'Jun 17 · 10:30 AM', csm: 'varun', account: 'Pegasystems',
        note: 'Frank introduced new GenAI product owner Matt and Director Andrew; HG forward-deployed AI team presented capabilities to Pega leadership.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Frank (Pega) brought in two new team members — Matt (GenAI product owner, 1 month in) and Andrew (Director of Product Management) — to explore HG AI capabilities. KP Pindle and Chloe Portier (HG forward-deployed AI engineering lead) presented. Strong potential for expanded AI engagement; follow-up to define specific GenAI use cases.' },
      { ts: 'Jun 17 · 11:00 AM', csm: 'pam', account: 'Epicor',
        note: 'Catch-up after rescheduled call — in-person business review planned week of July 6th at Epicor\'s office.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Pam Huck and Anderson caught up after last week\'s missed call. Triassi (Epicor) requested an in-person business review for FY planning; Pam proposed she and Anderson visit Epicor\'s office during the week of July 6th. Confirmed pending final calendar alignment.' },
      { ts: 'Jun 17 · 12:00 PM', csm: 'rani', account: 'Lenovo',
        note: 'Weekly sync — Ryan Warren departing for 2-week Montana vacation; next 2 calls cancelled. Adrian in Mexico for World Cup.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Rani Guy held the weekly sync with Ryan Warren (Lenovo). Ryan is leaving for a 2-week Montana vacation; the next two standing calls will be cancelled. Adrian is in Mexico for the World Cup. Light agenda — relationship maintenance and calendar coordination.' },
      { ts: 'Jun 17 · 12:30 PM', csm: 'rani', account: 'Cisco (Isovalent)',
        note: 'RGIP/MadKudu onboarding — Rohit Saraf and Tu-Anh verified HubSpot integration, field mapping, and RGIP platform access.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Rani Guy led an RGIP onboarding session for Cisco\'s Isovalent team. Rohit Saraf (PM) and Tu-Anh reviewed HubSpot integration setup, field mapping correctness, and RGIP platform access. Tu-Anh had scoring configuration questions from another stakeholder (2M). Follow-up from the Jun 16 initial onboarding touchpoint.' },
    ],
    pulses: [
      { csm: 'atisha', health: 'Concerning', account: 'Deloitte',
        excerpt: '6/17 AW: Weekly sync (6:00 AM PT, 30 min). Rajesh Shetty flagged multiple HG data categorization anomalies: Amazon S3 labeled as OS, ADP HCM miscategorized, SPC for Excel appearing as web conferencing. AW to coordinate engineering review.' },
      { csm: 'nick', health: 'Healthy', account: 'Check Point Software',
        excerpt: '6/17 NJ: Sample match results review (6:00 AM PT, 30 min). HG presented 11K-record match results to Ariel Keinan + Assaf Cohen. Check Point evaluating expansion to 100K file dataset. Cost discussion and next steps initiated.' },
      { csm: 'riley', health: 'Healthy', account: 'IBM',
        excerpt: '6/17 RR: Biweekly TR sync (7:00 AM PT, 45 min). Review count discrepancy: 130 in system vs 122 YTD confirmed. Regional breakdown report delivered. Conversion paused. Healthy relationship; conversion follow-up pending.' },
      { csm: 'varun', health: 'Healthy', account: 'CBTS',
        excerpt: '6/17 VT: Bi-weekly sync (7:30 AM PT, 30 min). Engineering confirmed fix for FAI negative values and EDG group ID binary format issues. Data feed refresh coordinated with Mitchell VanderKam + Timothy Selaty.' },
      { csm: 'andy', health: 'Healthy', account: 'SAS Institute',
        excerpt: '6/17 AL: MCP pilot touchpoint (8:30 AM PT, 30 min). HG MCP demo impressed Jesper Bank Jorgensen. SAS has in-house tooling built on own data. Synergy exploration initiated for CI product launch — expansion opportunity.' },
      { csm: 'divyam', health: 'Healthy', account: 'Cotality',
        excerpt: '6/17 DD: TrustRadius kick-off (9:00 AM PT, 30 min). Shannon Farrer onboarded insurance and mortgage stakeholders (Jolene Melancon, Micah Zeuch). TR program overview delivered. Strong first impression.' },
      { csm: 'varun', health: 'Healthy', account: 'Pegasystems',
        excerpt: '6/17 VT: Bi-weekly sync (10:30 AM PT, 30 min). Frank introduced Matt (GenAI PM) + Andrew (Dir Product Mgmt). Chloe Portier + KP Pindle presented HG AI capabilities. High expansion potential for GenAI use case.' },
      { csm: 'pam', health: 'Healthy', account: 'Epicor',
        excerpt: '6/17 PH: TR bi-weekly (11:00 AM PT, 30 min). In-person business review planned week of July 6th at Epicor\'s office. Triassi coordinating; Pam + Anderson traveling. Catch-up after rescheduled call.' },
      { csm: 'rani', health: 'Healthy', account: 'Lenovo',
        excerpt: '6/17 RG: Weekly sync (12:00 PM PT, 30 min). Ryan Warren on 2-week Montana vacation; next 2 calls cancelled. Adrian at World Cup in Mexico. Calendar coordination completed.' },
      { csm: 'rani', health: 'Healthy', account: 'Cisco (Isovalent)',
        excerpt: '6/17 RG: RGIP onboarding follow-up (12:30 PM PT, 30 min). Rohit Saraf + Tu-Anh verified HubSpot integration and field mapping. Scoring config from 2M pending. Continuation from Jun 16 onboarding.' },
    ],
  };
}

function dayMeta_2026_06_17() {
  return {
    pills: [
      ['dot-teal',  '10 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-amber', '3 Expansion'],
      ['dot-green', '10 Vitally Pulses'],
      ['dot-grey',  'Wed Jun 17 · 182 scanned'],
    ],
    tabs: ['Overview', 'Calls (10)', 'Pulses (10)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_06_17() {
  return `<div class="section-label">Team Activity &mdash; Wednesday June 17, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
  2 &#x1F4C5; <strong>Wednesday Jun 17 &mdash; 182 recordings scanned</strong> via SFDC SOQL &middot; <strong>10 confirmed calls</strong> across all 8 CSMs &middot; 3 expansion signals (Check Point, SAS, Pegasystems) &middot; 1 data quality flag (Deloitte)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Deloitte &mdash; Data categorization anomalies flagged:</strong> Rajesh Shetty identified HG errors (Amazon S3 labeled as OS, ADP HCM miscategorized, SPC for Excel as web conferencing). Engineering review required.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>3 Expansion signals:</strong> Check Point (100K dataset POC → next steps), SAS Institute (MCP pilot for CI launch), Pegasystems (GenAI AI capabilities with new product leadership).
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM (biweekly TR sync &middot; regional report delivered &middot; conversion paused)</div>
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
      <div class="csm-account-note">Check Point (11K sample match results &middot; 100K expansion in scope)</div>
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
      <div class="csm-account-note">Cotality (TrustRadius kick-off &middot; Shannon Farrer&rsquo;s team onboarded)</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo (weekly sync &middot; Ryan out 2 wks) &middot; Cisco Isovalent (RGIP onboarding follow-up)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">CBTS (data bugs resolved) &middot; Pegasystems (GenAI expansion &middot; new product leadership)</div>
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
      <div class="csm-account-note">Epicor (bi-weekly &middot; in-person business review Jul 6 planned)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Deloitte (data categorization anomalies flagged by Rajesh &middot; engineering review needed)</div>
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
      <div class="csm-account-note">SAS Institute (MCP pilot intro &middot; in-house tool noted &middot; synergy exploration)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_06_17() {
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Deloitte &mdash; Data quality flag:</strong> Rajesh Shetty identified HG categorization errors (Amazon S3 labeled as OS, ADP HCM miscategorized, SPC for Excel as web conferencing). Engineering review required. Atisha to follow up.
  </div>
  <div style="background:#1c1f26;border:1px solid #64748b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CB; <strong>Unconfirmed &mdash; no transcript:</strong> Nick/Accenture (3:30 AM PT), Andy/SAS Catchup (2:00 AM PT), Andy/Cockroach Labs (7:30 AM PT), Varun/Informatica (9:00 AM PT) &mdash; recording exists, CSM participation not speaker-verified. Rani had 5 additional events (Google Weekly, AWS bi-weekly, Lenovo Onboarding, Cisco GRO, Juniper) with no recordings found in SFDC scan.
  </div>
  <div class="calls-table"></div>`;
}

function dayPulsesHTML_2026_06_17() {
  const cards = [
    { csm: 'atisha', health: 'Concerning', account: 'Deloitte',
      opp: 'Vitally Pulse &mdash; Jun 17 Weekly Syncup',
      arr: 'Enterprise &middot; Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jun 17 &middot; Issue',
      excerpt: '6/17 AW: Weekly sync (6:00 AM PT, 30 min). Rajesh Shetty flagged multiple HG data categorization anomalies &mdash; Amazon S3 labeled as OS, ADP HCM miscategorized, SPC for Excel showing as web conferencing. AW to open engineering ticket and confirm ETA back to Deloitte.' },
    { csm: 'nick', health: 'Healthy', account: 'Check Point Software',
      opp: 'Vitally Pulse &mdash; Jun 17 Sample Match Results',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jun 17 &middot; Expansion',
      excerpt: '6/17 NJ: Sample match results review (6:00 AM PT, 30 min). HG presented 11K-record match results to Ariel Keinan + Assaf Cohen. Check Point evaluating expansion to 100K file dataset. Cost discussion and next steps initiated.' },
    { csm: 'riley', health: 'Healthy', account: 'IBM',
      opp: 'Vitally Pulse &mdash; Jun 17 Biweekly TR Sync',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jun 17 &middot; Mixed',
      excerpt: '6/17 RR: Biweekly TR sync (7:00 AM PT, 45 min). Review count discrepancy: 130 in system vs 122 YTD. Regional breakdown report delivered. Conversion paused. Healthy relationship; conversion follow-up pending.' },
    { csm: 'varun', health: 'Healthy', account: 'CBTS',
      opp: 'Vitally Pulse &mdash; Jun 17 Bi-Weekly Sync',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jun 17 &middot; Issue (Resolved)',
      excerpt: '6/17 VT: Bi-weekly sync (7:30 AM PT, 30 min). Engineering confirmed fix for FAI negative values + EDG group ID binary format. Data feed refresh coordinated with Mitchell VanderKam + Timothy Selaty.' },
    { csm: 'andy', health: 'Healthy', account: 'SAS Institute',
      opp: 'Vitally Pulse &mdash; Jun 17 MCP Pilot Touchpoint',
      arr: 'Enterprise &middot; Andy Lim', csmlbl: 'Andy Lim',
      change: 'Jun 17 &middot; Expansion',
      excerpt: '6/17 AL: MCP pilot intro (8:30 AM PT, 30 min). HG MCP demo impressed Jesper Bank Jorgensen. SAS has in-house tooling; synergy exploration initiated for CI product launch use case. Expansion opportunity.' },
    { csm: 'divyam', health: 'Healthy', account: 'Cotality',
      opp: 'Vitally Pulse &mdash; Jun 17 TrustRadius Kick-off',
      arr: 'Enterprise &middot; Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jun 17 &middot; Check-in',
      excerpt: '6/17 DD: TR kick-off (9:00 AM PT, 30 min). Shannon Farrer\'s team onboarded &mdash; insurance and mortgage stakeholders (Jolene Melancon, Micah Zeuch) included. TR program overview delivered. Strong first impression.' },
    { csm: 'varun', health: 'Healthy', account: 'Pegasystems',
      opp: 'Vitally Pulse &mdash; Jun 17 Bi-Weekly Sync',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jun 17 &middot; Expansion',
      excerpt: '6/17 VT: Bi-weekly sync (10:30 AM PT, 30 min). Frank introduced Matt (GenAI PM) + Andrew (Dir Product Mgmt). Chloe Portier + KP Pindle presented HG AI capabilities. High expansion potential for GenAI use case.' },
    { csm: 'pam', health: 'Healthy', account: 'Epicor',
      opp: 'Vitally Pulse &mdash; Jun 17 TR Bi-Weekly',
      arr: 'Enterprise &middot; Pam Huck', csmlbl: 'Pam Huck',
      change: 'Jun 17 &middot; Check-in',
      excerpt: '6/17 PH: TR bi-weekly (11:00 AM PT, 30 min). In-person business review planned week of July 6th at Epicor&rsquo;s office. Triassi coordinating; Pam + Anderson traveling. Catch-up after rescheduled call.' },
    { csm: 'rani', health: 'Healthy', account: 'Lenovo',
      opp: 'Vitally Pulse &mdash; Jun 17 Weekly Sync',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jun 17 &middot; Check-in',
      excerpt: '6/17 RG: Weekly sync (12:00 PM PT, 30 min). Ryan Warren on 2-week Montana vacation; next 2 calls cancelled. Adrian at World Cup in Mexico. Calendar coordination completed.' },
    { csm: 'rani', health: 'Healthy', account: 'Cisco (Isovalent)',
      opp: 'Vitally Pulse &mdash; Jun 17 RGIP Onboarding',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jun 17 &middot; Check-in',
      excerpt: '6/17 RG: RGIP onboarding follow-up (12:30 PM PT, 30 min). Rohit Saraf + Tu-Anh verified HubSpot integration and field mapping. Scoring config from 2M pending. Continuation from Jun 16 onboarding.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
  2   <div class="pulse-card-top">
        <div>
          <div style="font-weight:600;font-size:13px;color:#f1f5f9;">${c.account}</div>
          <div style="font-size:11px;color:#64748b;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_06_17() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0617-1')?'done':''}" data-csm="atisha" id="action-0617-1">
      <div class="action-checkbox ${doneActions.has('0617-1')?'checked':''}" onclick="toggleAction('0617-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Deloitte &mdash; Escalate data categorization anomalies to engineering for investigation</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Rajesh Shetty documented 3+ HG categorization errors: Amazon S3 labeled as OS, ADP HCM miscategorized, SPC for Excel appearing as web conferencing. Open an engineering ticket, share Rajesh&rsquo;s specific examples, and confirm ETA back to Deloitte before the next weekly sync.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0617-2')?'done':''}" data-csm="nick" id="action-0617-2">
      <div class="action-checkbox ${doneActions.has('0617-2')?'checked':''}" onclick="toggleAction('0617-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Check Point &mdash; Send cost estimate and SOW for 100K dataset expansion</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; 11K sample match results confirmed strong data quality. Check Point (Ariel Keinan, Assaf Cohen) is evaluating the full 100K-record dataset expansion. Send pricing estimate, scope of work, and proposed timeline to move from POC to a full data partnership agreement.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0617-3')?'done':''}" data-csm="varun" id="action-0617-3">
      <div class="action-checkbox ${doneActions.has('0617-3')?'checked':''}" onclick="toggleAction('0617-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F916; Pegasystems &mdash; Schedule dedicated GenAI capabilities deep dive with Matt and Andrew</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari &middot; Frank introduced new GenAI product owner Matt and Director Andrew to HG AI capabilities. Chloe Portier and KP Pindle made a strong impression. Book a follow-up session to define specific use cases for Matt&rsquo;s GenAI product roadmap and formalize the expanded AI engagement with Pega.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0617-4')?'done':''}" data-csm="rani" id="action-0617-4">
      <div class="action-checkbox ${doneActions.has('0617-4')?'checked':''}" onclick="toggleAction('0617-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F527; Cisco (Isovalent) &mdash; Resolve RGIP scoring config with 2M and confirm platform setup complete</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; Tu-Anh raised scoring configuration questions from another stakeholder (2M) during onboarding. Coordinate with 2M contact to address scoring questions and confirm HubSpot integration + field mapping are fully validated before marking onboarding complete.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0617-5')?'done':''}" data-csm="andy" id="action-0617-5">
      <div class="action-checkbox ${doneActions.has('0617-5')?'checked':''}" onclick="toggleAction('0617-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F9E0; SAS Institute &mdash; Document MCP pilot use case and schedule synergy review session</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Andy Lim &middot; Jesper Bank Jorgensen was impressed by the HG MCP demo but noted SAS has an in-house tool. Prepare a brief document contrasting HG MCP capabilities vs SAS in-house tooling, highlighting incremental value. Schedule a follow-up to define a concrete pilot use case for the CI product launch.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0617-6')?'done':''}" data-csm="pam" id="action-0617-6">
      <div class="action-checkbox ${doneActions.has('0617-6')?'checked':''}" onclick="toggleAction('0617-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F3E2; Epicor &mdash; Confirm July 6th in-person business review logistics with Triassi</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Pam Huck &middot; In-person business review confirmed in principle for week of July 6th. Pam and Anderson traveling to Epicor&rsquo;s office. Follow up with Triassi to confirm the specific date, agenda, and attendee list so travel can be booked in time.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}
