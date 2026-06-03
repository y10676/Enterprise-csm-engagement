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
    ],
  };
}

function dayMeta_2026_06_01() {
  return {
    pills: [
      ['dot-teal',  '11 Calls'],
      ['dot-red',   '⚠️ Varun Paternity Leave'],
      ['dot-green', '5 Expansion Signals'],
      ['dot-amber', 'X-Cov: Rani → Cisco'],
      ['dot-grey',  'Mon Jun 1 · 49 recordings scanned'],
    ],
    tabs: ['Overview', 'Calls (11)', 'Pulses (11)', 'Action Items (9)'],
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
    &#x1F4C5; <strong>Mon Jun 1 &mdash; 49 recordings scanned</strong> via SFDC SOQL &middot; <strong>11 confirmed calls</strong> across 6 CSMs &middot; 1 contextual (Pam/F5) &middot; 3 unconfirmed &middot; First day of June 2026
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

    <div class="csm-card no-calls" data-csm="andy">
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Direct</div></div>
        <div><div class="metric-num m-grey">1</div><div class="metric-lbl">Events</div></div>
        <div><div class="metric-num m-grey">0</div><div class="metric-lbl">Confirmed</div></div>
      </div>
      <div class="csm-account-note">ADP: recording found, no transcript. Unconfirmed.</div>
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
  return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;">
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Infor (US), LLC</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Debrief on urgent data support. Nicole Morgan preparing ELT presentation. Ankar building SF data pull to validate HG lift. BLT readout planned.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">IBM</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">GenAI walkthrough with David Bush and IBM data team. Clayton Cutbush co-presenting. Expansion: new AI capabilities demo at $3.3M ARR.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Rani Guy</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Workday Inc</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Databricks migration: ML team needs HG data for AI agents. Snowflake/Fivetran delivery must stay intact. Awaiting Databricks credentials.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Atisha Waghela</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">TD Synnex</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Recurring Monday sync. Export limits confirmed not burning credits on re-downloads. Steve Markle engaged. Steady platform usage.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Intuit</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Expansion: Hayden Smith (AM) + Nick pitching account scoring + MCP credits to Lorena Fortuna. Annabelle's departure = re-entry window. Formal proposal next step.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Varun Tiwari</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Autodesk Inc</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Recurring scoring sync. MadKudu running fine. David Guo (Autodesk) going on 12-wk pat. leave Jun 9&ndash;Aug 31. Introducing UK colleague to Varun. Action: Varun to establish relationship with new Autodesk contact.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Veeam Software AG</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Expansion: HG CEO + CCO + AI engineering 90-min strategy session. AI/agentic GTM use cases. "Next phase of partnership." Strong executive signal at $822K ARR.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Riley Rogers</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">SAP Inc</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">TR Premium Content Hosting pitched. AI discoverability + SEO + analytics. Helya Barezani evaluating with SAP team. Expansion opportunity in $3M ARR account.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Rani Guy</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Amazon Web Services (AWS)</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Project Rubicon support call. HG Quick Desktop demo by Mike Galyen. Mark Fell managing agenda. Francis not needed. $4.6M ARR strategic account healthy.</div>
    </div>
    <div class="pulse-card concerning">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Rani Guy</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">NetApp</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Data matching issue: company name only (no URLs/DUNS). FAI data ticket submitted. Adrian posting Slack update. Matching accuracy limited until FAI resolves.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Rani Guy (X-cov · Pam Huck)</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Cisco</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Data evaluation: Michael Xu reviewing HG account match rates. Cisco Live week. Rani covering. Pam to be briefed. Cisco pulse = Poor, $2.3M ARR.</div>
    </div>
  </div>`;
}

function dayActionsHTML_2026_06_01() {
  return `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0101]</strong> Varun Tiwari &mdash; Get introduced to David Guo's UK colleague (new Autodesk MadKudu contact) before Jun 9. David sending intro. Build relationship with new contact before David returns Aug 31.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#4a1010;color:#f87171;border:1px solid #ef4444;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">HIGH</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0102]</strong> Nick Johnson &mdash; Send formal Intuit proposal this week. Hayden has pricing calculator. Lorena Fortuna is decision point. Annabelle's departure = window open now.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#4a1010;color:#f87171;border:1px solid #ef4444;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">HIGH</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0103]</strong> Pam Huck &mdash; Get briefed by Rani/Adrian on Cisco data match-rate findings from Michael Xu. Cisco pulse = Poor, $2.3M ARR. Determine follow-up action this week.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0104]</strong> Varun Tiwari &mdash; Send Autodesk intro email (David Guo) before leave. CC named coverage CSM. Include escalation path and "no major changes" guidance.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0105]</strong> Rani Guy &mdash; Submit Databricks delivery config for Workday ML team. Keep Snowflake/Fivetran intact. Coordinate with Austin (HG data eng) who set up original Snowflake path.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0106]</strong> Rani Guy &mdash; Follow up on NetApp FAI data ticket. Confirm v-boo and Yu working it. Adrian posting Slack update. Matching limited until FAI data available.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0107]</strong> Nick Johnson &mdash; IBM GenAI follow-up with Clayton Cutbush. Share capabilities summary with David Bush and Arnav Singh. Identify next steps for IBM AI adoption.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#1e293b;color:#94a3b8;border:1px solid #334155;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">LOW</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0108]</strong> Riley Rogers &mdash; Follow up with Helya Barezani (SAP) on TR Premium Content Hosting in ~1 week. She needs to consult team. Track as expansion opportunity.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;font-size:12px;">
      <span style="background:#1e293b;color:#94a3b8;border:1px solid #334155;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">LOW</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0109]</strong> Nick Johnson &mdash; Infor: confirm Ankar's SF data pull is unblocked. Offer HG Solutions data pulls as needed for ELT readout. India team public holiday Wed.</span>
    </div>
  </div>`;
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
      { ts: '3:00 AM PT', csm: 'nick',  account: 'Accenture',           note: 'Renewal — Avanade expansion access; 24-month term concern flagged by Kelly Gumber', mins: 30, health: 'watch' },
      { ts: '6:00 AM PT', csm: 'varun', account: 'Autodesk Inc',         note: 'Data retrieval Q&A — Snowflake/AWS marketplace; new data platform contacts Matthew Ding + Mohammed Tanveer', mins: 30, health: 'healthy' },
      { ts: '7:30 AM PT', csm: 'nick',  account: 'IBM',                  note: 'HG contact intro — Clayton Cutbush introduced; DQ scoring update delivered', mins: 30, health: 'healthy' },
      { ts: '8:00 AM PT', csm: 'varun', account: "ServiceNow Inc's",     note: 'Custom spend category — 4 new products submitted; monthly tracking cadence proposed', mins: 30, health: 'healthy' },
      { ts: '8:30 AM PT', csm: 'nick',  account: 'Veeam Software AG',    note: 'TR event prep (June 3) — SecurityAI review eligibility Q; Angus + Cassidy attending', mins: 30, health: 'healthy' },
      { ts: '8:30 AM PT', csm: 'rani',  account: 'Meraki (Cisco)',        note: 'Onboarding sync — platform login issue flagged; AI account brief demo well-received', mins: 30, health: 'watch' },
      { ts: '9:30 AM PT', csm: 'nick',  account: 'SAP Inc',              note: 'Biweekly — product mapping refresh delivered; MCP testing update from Shipra Chaudhary', mins: 30, health: 'healthy' },
      { ts: '11:00 AM PT',csm: 'riley', account: 'Paycom Software Inc',  note: 'CSM intro + TR sync — Riley new CSM; Top Rated win; media kit follow-up needed', mins: 30, health: 'healthy' },
    ],
    pulses: [
      { csm: 'nick',  account: 'Accenture',           health: 'watch',   note: 'Renewal contract in approvals. Avanade access expansion flagged 24-month term concern. Kelly Gumber to revert after internal check.' },
      { csm: 'varun', account: 'Autodesk Inc',         health: 'healthy', note: 'Data retrieval Q&A with new data platform team. Snowflake/AWS marketplace clarified. RGIP/RGIF introduced to Matthew Ding + Mohammed Tanveer.' },
      { csm: 'nick',  account: 'IBM',                  health: 'healthy', note: 'Contact intro call. Clayton Cutbush introduced to IBM team. Updated DQ scoring delivered. Long-term system rework pending.' },
      { csm: 'varun', account: "ServiceNow Inc's",     health: 'healthy', note: 'Custom spend category session. 4 products submitted. Monthly tracking cadence proposed. 30-day SLA explained to Santhosh Ronanki.' },
      { csm: 'nick',  account: 'Veeam Software AG',    health: 'healthy', note: 'TR review collection event prep for June 3. SecurityAI under Veeam portfolio confirmed. Abigail Fish engaged.' },
      { csm: 'rani',  account: 'Meraki (Cisco)',        health: 'watch',   note: 'Onboarding sync. Platform login issue flagged — engineering working on fix. AI account brief demo well-received by Melanie.' },
      { csm: 'nick',  account: 'SAP Inc',              health: 'healthy', note: 'Biweekly sync. Product mapping refresh (RGIF-updated counts) delivered. Shipra on MCP testing — early phase, next steps TBD.' },
      { csm: 'riley', account: 'Paycom Software Inc',  health: 'healthy', note: 'Intro call. Met Larisha Hunter (new contact). Top Rated win confirmed. Media kit email follow-up pending for Katie + Larisha.' },
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
  return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;">
    <div class="pulse-card concerning">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Accenture</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Renewal contract in approvals. Avanade access expansion (~$100K/annum) flagged 24-month term concern. Kelly Gumber to revert after internal check. Watch for renewal delay risk.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Varun Tiwari</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Autodesk Inc</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Data retrieval Q&amp;A with new data platform team (Matthew Ding, Mohammed Tanveer). Snowflake/AWS marketplace clarified. RGIP/RGIF introduced to engineering contacts.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">IBM</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">HG contact introduction. Clayton Cutbush introduced to IBM team (Peter Herr, Ishan Sharma, Kruti Desai). Updated DQ scoring delivered. Long-term system rework pending.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Varun Tiwari</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">ServiceNow Inc&rsquo;s</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Custom spend category session. 4 new products submitted. Monthly tracking cadence proposed. 30-day SLA explained to Santhosh Ronanki. Strong team engagement.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Veeam Software AG</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">TrustRadius event prep for Jun 3. HG team (Nick, Angus, Cassidy) attending review collection. SecurityAI review eligibility confirmed under Veeam portfolio. Abigail Fish engaged.</div>
    </div>
    <div class="pulse-card concerning">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Rani Guy</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Meraki (Cisco)</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Onboarding sync. Platform login issue flagged at call start &mdash; engineering working on fix. Melanie already in platform. AI account brief demo well-received as top use case.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Nick Johnson</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">SAP Inc</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">Biweekly sync. Product mapping refresh (RGIF updated counts) delivered. Shipra Chaudhary on MCP testing &mdash; early phase, next steps TBD. Rafiq absent. Steady cadence.</div>
    </div>
    <div class="pulse-card healthy">
      <div style="font-size:10px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;">Riley Rogers</div>
      <div style="font-weight:700;color:#e2e8f0;margin-bottom:6px;">Paycom Software Inc</div>
      <div style="font-size:12px;color:#94a3b8;line-height:1.5;">CSM intro call. Met Larisha Hunter (new contact). Paycom won Top Rated &mdash; media kit follow-up needed for Katie Lenhart + Larisha. TrustRadius AI webinar well-received by Peyton.</div>
    </div>
  </div>`;
}

function dayActionsHTML_2026_06_02() {
  return `<div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#4a1010;color:#f87171;border:1px solid #ef4444;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">HIGH</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0201]</strong> Rani Guy &mdash; Confirm Meraki platform login fix is deployed. Ensure Melanie, Rashad, and Sijac can log in. Newly onboarded contacts are blocked on Day 1.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#4a1010;color:#f87171;border:1px solid #ef4444;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">HIGH</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0202]</strong> Riley Rogers &mdash; Send Paycom Top Rated media kit to Katie Lenhart + Larisha Hunter. Automated email not confirmed received. Confirm with both contacts today.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0203]</strong> Nick Johnson / David Garcia Thomas &mdash; Follow up with Kelly Gumber (Accenture) on Avanade expansion contract term. Clarify 24-month minimum applicability for net-new purchase. Keep renewal on track.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0204]</strong> Nick Johnson &mdash; Confirm Veeam TrustRadius Jun 3 event logistics with Angus and Cassidy. Ensure SecurityAI review guidance is ready for any attendees who raise it.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#3a2a10;color:#fcd34d;border:1px solid #f59e0b;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">MED</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0205]</strong> Varun Tiwari &mdash; Confirm 4 ServiceNow product tracking submissions are in system. Set up monthly check-in cadence with Santhosh Ronanki for ongoing requests.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;border-bottom:1px solid #1a2030;font-size:12px;">
      <span style="background:#1e293b;color:#94a3b8;border:1px solid #334155;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">LOW</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0206]</strong> Varun Tiwari &mdash; Send Autodesk (Matthew Ding) written summary of RGIP/RGIF and AWS marketplace delivery options discussed on the call.</span>
    </div>
    <div style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;font-size:12px;">
      <span style="background:#1e293b;color:#94a3b8;border:1px solid #334155;font-size:10px;font-weight:700;padding:2px 8px;border-radius:4px;white-space:nowrap;min-width:44px;text-align:center;">LOW</span>
      <span style="color:#cbd5e1;line-height:1.5;"><strong>[0207]</strong> Nick Johnson &mdash; IBM: Coordinate with Clayton Cutbush on long-term scoring system rework discussed with Karin Pindle. Track as open action item.</span>
    </div>
  </div>`;
}
