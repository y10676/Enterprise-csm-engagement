// ============================================================
// Daily reports — July 2026
// ============================================================

function dayData_2026_07_01() {
  return {
    calls: [
      { ts: 'Jul 1 · 1:30 AM', csm: 'atisha', account: 'Salesforce',
        note: 'Standing renewal sync escalated into an issue call — persistent login failures and data-extraction errors on the new platform are blocking Salesforce\'s own stakeholder deliverables.',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Salesforce reported ongoing login failures and inability to extract data on the new HG platform, especially during afternoon/night windows, which is jeopardizing timelines they\'ve already committed to their own stakeholders. Atisha committed to investigate developer logs, escalate to the product team, and follow up within a day.' },
      { ts: 'Jul 1 · 7:30 AM', csm: 'varun', account: 'CBTS',
        note: 'Bi-weekly sync — confirmed delivery of the refreshed account-list feed to CBTS\'s S3 and clarified expected account-matching duplication.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Varun confirmed the refreshed account-list data feed was delivered to CBTS\'s S3 storage and flagged expected duplication in account matching (multiple URLs resolving to a single company ID) for the client to account for on their end. Offered a deeper data-feed walkthrough on an upcoming call.' },
      { ts: 'Jul 1 · 7:30 AM', csm: 'nick', account: 'Freshworks',
        note: 'Ad-hoc support call — walked the data team through vendor-penetration filters and match-confidence tiers after export-column confusion. Account not found in the day\'s SFDC event pull — flagged for book verification.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Freshworks\' data team (led by Dhrubajyoti Das, looped in by Meghan Whiteman) was frustrated by unexpectedly large, unfiltered data exports and reached out for help. Nick walked them through vendor-penetration analysis (Salesforce/HubSpot/Intercom/Zoho competitive footprint), match-confidence tiers, and filter application, resolving the confusion and aligning exports to their sales-intelligence use case. Note: Freshworks did not appear among Nick\'s 36 SFDC events for this date — worth confirming this account sits in his current book / is correctly tracked in SFDC.' },
      { ts: 'Jul 1 · 8:30 AM', csm: 'varun', account: 'Five9',
        note: 'Recurring sync — delivered a 373-partner analysis and pitched HG\'s internal EDG data over paid platforms like Clay for 10-25x cost savings.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun delivered a completed analysis of 373 partner companies (371 active, M&A changes flagged and HQ data updated) and made the case for Five9 to rely on HG\'s internal EDG data instead of paying for external platforms like Clay, citing 10-25x potential cost savings. Next step is a meeting with Five9\'s strategy team on optimal data utilization.' },
      { ts: 'Jul 1 · 9:30 AM', csm: 'rani', account: 'Docusign',
        note: 'Demo — MadKudu/HG Copilot account-intelligence walkthrough; exploring activation of 100 already-approved but dormant seats.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Rani and the HG SME team demoed the MadKudu/HG Copilot tool\'s account-intelligence and Salesforce-embedded features to Docusign\'s Bianca Ferri, aiming to activate 100 already-approved but dormant Copilot seats and explore a pilot with SMB/Commercial sales teams. Bianca to investigate data overlays and clarify internal ownership for adoption.' },
      { ts: 'Jul 1 · 11:00 AM', csm: 'atisha', account: 'Palo Alto Networks',
        note: 'Partnership kickoff — "unified AI sales vision" leveraging HG technographic/firmographic data to power a seller copilot; pilot and success metrics discussed.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Kickoff conversation on a "unified AI sales vision" (a revival of the Sales Workbench concept) leveraging HG\'s technographic and firmographic data to power a seller copilot for PANW\'s enterprise reps. Discussed running a pilot program and defining success metrics around freeing seller bandwidth and surfacing new opportunities.' },
    ],
    pulses: [
      { csm: 'atisha', account: 'Salesforce', health: 'Concerning',
        note: 'Persistent login failures and data-extraction errors on the new platform are blocking Salesforce\'s own stakeholder deliverables. Atisha escalating to product; follow-up committed within a day.' },
      { csm: 'varun', account: 'CBTS', health: 'Healthy',
        note: 'Refreshed account-list feed delivered to S3; account-matching duplication expectations clarified. Deeper data-feed walkthrough offered.' },
      { csm: 'nick', account: 'Freshworks', health: 'Healthy',
        note: 'Resolved data team confusion over export columns/filters via a walkthrough of vendor-penetration and match-confidence tooling. Account not in today\'s SFDC event pull — flag for book verification.' },
      { csm: 'varun', account: 'Five9', health: 'Healthy',
        note: '373-partner analysis delivered; pitched HG EDG data as a 10-25x cheaper alternative to Clay. Strategy-team follow-up planned.' },
      { csm: 'rani', account: 'Docusign', health: 'Healthy',
        note: 'MadKudu/HG Copilot demo delivered; exploring activation of 100 dormant seats for SMB/Commercial teams. Bianca to confirm data overlays and ownership.' },
      { csm: 'atisha', account: 'Palo Alto Networks', health: 'Healthy',
        note: 'Partnership kickoff on unified AI sales vision (Sales Workbench revival). Pilot scope and success metrics under discussion.' },
    ],
  };
}

function dayMeta_2026_07_01() {
  return {
    pills: [
      ['dot-teal',   '6 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '3 Expansion'],
      ['dot-green',  '6 Pulses'],
      ['dot-grey',   'Wed Jul 1 · 100 scanned'],
    ],
    tabs: ['Overview', 'Calls (6)', 'Pulses (6)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_07_01() {
  return `<div class="section-label">Team Activity &mdash; Wednesday July 1, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Jul 1 &mdash; 100 recordings scanned</strong> via SFDC SOQL &middot; <strong>6 confirmed calls</strong> across 4 CSMs &middot; 3 expansion signals (Five9, Docusign, PANW) &middot; 1 concerning (Salesforce platform issue)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Concerning:</strong> Salesforce reported persistent login failures and data-extraction errors on the new platform, blocking their own stakeholder deliverables (Atisha escalating to product)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Five9 (EDG data vs. Clay, 10-25x cost savings) &middot; Docusign (100 dormant Copilot seats) &middot; Palo Alto Networks (unified AI sales vision pilot)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Salesforce (login/data-extraction issue &#x26A0;) &middot; Palo Alto Networks (AI sales vision kickoff &#x1F4C8;)</div>
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
      <div class="csm-account-note">CBTS (data feed check-in) &middot; Five9 (EDG vs. Clay expansion pitch &#x1F4C8;)</div>
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
      <div class="csm-account-note">Freshworks (export confusion resolved &mdash; account not in today's SFDC event pull, flagged for book check)</div>
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
      <div class="csm-account-note">Docusign (MadKudu/Copilot demo &#x1F4C8;)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled (IBM Biweekly Sync, TrustRadius | IBM Biweekly Team Sync) &mdash; no recording found</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled (Informatica Weekly Partnership Sync) &mdash; no recording found</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Appeared only on an internal Weekly GTM Enablement Session (TrustRadius GEO launch briefing) &mdash; no customer calls; Cisco Win Ctr &amp; GoTo-TrustRadius events had no recording</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events matched recordings but no transcript synced (SAS Institute, Cockroach Labs) &mdash; unconfirmed, not speaker-verified</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_01() {
  return `<div class="calls-table">
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x26A0;&#xFE0F; <strong>Unconfirmed (no transcript, attributed via CSM event ownership):</strong> Andy &times; SAS Institute (2:00 AM PT, 30 min) &middot; Andy &times; Cockroach Labs (7:30 AM PT, 30 min) &middot; Atisha &times; Deloitte (6:00 AM PT, 30 min) &middot; Varun &times; Pegasystems (10:30 AM PT, 30 min) &mdash; SFDC events matched recordings by EventId, but no transcript synced to confirm CSM presence.
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>No CSM detected on calendar-linked recording:</strong> "HG CAC debrief" (matches Nick Johnson's IBM event by EventId, but transcript shows only Kerri Cole and Augie Buettner &mdash; an internal HG-only debrief, not Nick's call)
  </div>
  <div style="background:#1c1f26;border:1px solid #374151;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    <strong>No recording found for CSM event:</strong> Riley &times; IBM (Biweekly Sync) &middot; Riley &times; IBM (TrustRadius Biweekly Team Sync) &middot; Divyam &times; Informatica (Weekly Partnership Sync) &middot; Pam &times; Servicios Alestra (GoTo-TrustRadius Sync) &middot; Rani &times; Cisco WarRoom (Win Ctr Monthly Sync) &middot; Rani &times; Lenovo (OneSix Onboarding sync)
  </div>
  </div>`;
}

function dayPulsesHTML_2026_07_01() {
  const cards = [
    { csm:'atisha', health:'Concerning', account:'Salesforce',
      opp:'Vitally Pulse &mdash; Jul 1 Call', arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 1 &middot; Platform Issue',
      excerpt:'AW/Jul 1: Renewal sync escalated into issue call (1:30 AM, 30 min). Persistent login failures and data-extraction errors on the new platform blocking Salesforce\'s own stakeholder deliverables. Escalating to product; follow-up within a day.' },
    { csm:'varun', health:'Healthy', account:'CBTS',
      opp:'Vitally Pulse &mdash; Jul 1 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 1 &middot; Data Feed Check-in',
      excerpt:'VT/Jul 1: Bi-weekly sync (7:30 AM, 30 min). Refreshed account-list feed delivered to S3; account-matching duplication expectations clarified. Deeper data-feed walkthrough offered next call.' },
    { csm:'nick', health:'Healthy', account:'Freshworks',
      opp:'Vitally Pulse &mdash; Jul 1 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 1 &middot; Export Support',
      excerpt:'NJ/Jul 1: Ad-hoc support call (7:30 AM, 30 min). Resolved data team confusion over export columns/filters via vendor-penetration and match-confidence walkthrough. Account not in today\'s SFDC event pull &mdash; flag for book verification.' },
    { csm:'varun', health:'Healthy', account:'Five9',
      opp:'Vitally Pulse &mdash; Jul 1 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 1 &middot; EDG Expansion Pitch',
      excerpt:'VT/Jul 1: Recurring sync (8:30 AM, 30 min). 373-partner analysis delivered; pitched HG EDG data as a 10-25x cheaper alternative to Clay. Strategy-team follow-up planned.' },
    { csm:'rani', health:'Healthy', account:'Docusign',
      opp:'Vitally Pulse &mdash; Jul 1 Call', arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 1 &middot; Copilot Seat Demo',
      excerpt:'RG/Jul 1: Ad-hoc demo (9:30 AM, 30 min). MadKudu/HG Copilot account-intelligence demoed; exploring activation of 100 dormant seats for SMB/Commercial teams. Bianca to confirm data overlays and ownership.' },
    { csm:'atisha', health:'Healthy', account:'Palo Alto Networks',
      opp:'Vitally Pulse &mdash; Jul 1 Call', arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 1 &middot; Partnership Kickoff',
      excerpt:'AW/Jul 1: Partnership kickoff (11:00 AM, 30 min). Unified AI sales vision (Sales Workbench revival) discussed leveraging HG data for a seller copilot. Pilot scope and success metrics under discussion.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div class="pulse-account">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_01() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0701-1') ? 'done' : ''}" data-csm="atisha" id="action-0701-1">
      <div class="action-checkbox ${doneActions.has('0701-1') ? 'checked' : ''}" onclick="toggleAction('0701-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Salesforce &mdash; Escalate Login/Data-Extraction Failures to Product</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Persistent login failures and inability to extract data on the new platform are blocking Salesforce's own committed stakeholder timelines. Pull developer logs, escalate to product, and follow up within a day as promised.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0701-2') ? 'done' : ''}" data-csm="nick" id="action-0701-2">
      <div class="action-checkbox ${doneActions.has('0701-2') ? 'checked' : ''}" onclick="toggleAction('0701-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F50D; Freshworks &mdash; Verify Account Ownership / SFDC Event Tracking</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; Freshworks call was confirmed via transcript but the account did not appear among today's 36 SFDC CSM events. Confirm the account sits correctly in Nick's book and that future calls sync to SFDC.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0701-3') ? 'done' : ''}" data-csm="varun" id="action-0701-3">
      <div class="action-checkbox ${doneActions.has('0701-3') ? 'checked' : ''}" onclick="toggleAction('0701-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Five9 &mdash; Schedule Strategy-Team Follow-Up on EDG vs. Clay</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; 373-partner analysis delivered; Five9 open to using HG's internal EDG data instead of Clay for 10-25x cost savings. Schedule the next meeting with Five9's strategy team to drive adoption.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0701-4') ? 'done' : ''}" data-csm="rani" id="action-0701-4">
      <div class="action-checkbox ${doneActions.has('0701-4') ? 'checked' : ''}" onclick="toggleAction('0701-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DA; Docusign &mdash; Confirm Copilot Seat Activation Plan</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; Bianca Ferri to investigate data overlays and clarify internal ownership for activating 100 already-approved but dormant MadKudu/HG Copilot seats. Follow up to keep the pilot moving.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0701-5') ? 'done' : ''}" data-csm="atisha" id="action-0701-5">
      <div class="action-checkbox ${doneActions.has('0701-5') ? 'checked' : ''}" onclick="toggleAction('0701-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F916; Palo Alto Networks &mdash; Define Pilot Scope for AI Sales Vision</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Atisha Waghela &middot; Partnership kickoff introduced a unified AI sales vision (Sales Workbench revival) for PANW's enterprise sellers. Define pilot scope and success metrics (seller bandwidth freed, opportunities surfaced) with Tyler Neubauer and PANW stakeholders.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0701-6') ? 'done' : ''}" data-csm="andy" id="action-0701-6">
      <div class="action-checkbox ${doneActions.has('0701-6') ? 'checked' : ''}" onclick="toggleAction('0701-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DD; SAS Institute &amp; Cockroach Labs &mdash; Confirm Call Notes (No Transcript Synced)</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Andy Lim &middot; Both calls matched recordings by EventId but no transcript synced, so CSM presence is unconfirmed. Log manual notes in Vitally to keep the account record current.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ============================================================
// Jul 2, 2026
// ============================================================

function dayData_2026_07_02() {
  return {
    calls: [
      { ts: 'Jul 2 · 4:30 AM', csm: 'atisha', account: 'Insight Direct USA Ltd',
        note: 'Recurring biweekly sync — ZoomInfo vs. HG data-gap discussion; interest in a sample dataset to evaluate expanding HG\'s role in contact enrichment.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Recurring biweekly sync between HG (Atisha Waghela, Augie Buettner) and Insight Direct\'s Rakesh Pathak. Discussion covered ZoomInfo vs. HG data gaps for contact data, an internal AI sales-coach initiative pulling HG data, and interest in a sample dataset for ~100 accounts to evaluate expanding HG\'s role in contact enrichment.' },
      { ts: 'Jul 2 · 5:30 AM', csm: 'atisha', account: 'Kyndryl',
        note: 'Monthly sync surfaced an ownership gap — primary contact moved teams two months ago with no successor named in the account stream.',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Monthly Kyndryl sync where Atisha learned the primary account contact (Louise) has moved teams and no successor has been named on the customer\'s account stream, creating an ownership gap. Atisha worked to re-establish who owns the relationship and how the marketing dashboard is being used.' },
      { ts: 'Jul 2 · 6:00 AM', csm: 'nick', account: 'Softcat Ltd',
        note: 'Presented an expanded UK dataset (26M companies) plus SMB spend/install data points ahead of a potential upsell.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'HG team (Nick Johnson, Rishabh, David Garcia Thomas) presented Softcat an expanded UK dataset (26M companies) plus additional SMB spend/install data points, walking through feed growth options and recommendations ahead of a potential upsell.' },
      { ts: 'Jul 2 · 7:00 AM', csm: 'riley', account: 'Red Hat Inc',
        note: 'Recurring TrustRadius check-in — landing-page write-ups, tracking-fix delay, and reusing customer collateral in nurture campaigns.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Recurring biweekly TrustRadius check-in with Red Hat (Brianna Gault, Sai A). Reviewed outstanding landing page write-ups for RHEL/OpenShift/Ansible, an integrate.com tracking fix delay, and how customer story/quote collateral can be reused in nurture campaigns.' },
      { ts: 'Jul 2 · 7:30 AM', csm: 'nick', account: 'Siemens AG',
        note: 'Positive feedback on Account Compass one-pagers; discussed expanding the strategic-land pilot to more accounts.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Recurring biweekly Siemens sync (Nick Johnson, David Garcia-Thomas with Pat Loftus, Kaden). Positive feedback on Account Compass-generated one-pagers for the strategic land initiative; team discussed identifying more AOs/accounts to expand the pilot and enhancing rep-facing opportunity justification.' },
      { ts: 'Jul 2 · 8:00 AM', csm: 'varun', account: 'Exclusive Networks',
        note: 'Customer flagged their manual data-request process as suboptimal and asked about a self-serve API/credit model ahead of renewal.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Exclusive Networks (Ben Abraham) raised that their current manual data-request process is suboptimal and asked about a self-serve API/credit-based model ahead of renewal; Angus Hyams and Varun Tiwari discussed legacy-platform API limitations, sandbox testing, and how platform migration would change credit consumption.' },
      { ts: 'Jul 2 · 9:00 AM', csm: 'nick', account: 'Veeam',
        note: 'Propensity-model working session — scoring accounts not currently in the feed for the contract-renewal proposal.',
        mins: 45, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Recurring propensity-model working session for Veeam (Nick Johnson, Angus Hyams, Sid Subramany, Brandon Cosley) covering new technology additions, account scoring not currently in the customer\'s feed for the contract renewal proposal, and refining technographic intensity-signal granularity.' },
      { ts: 'Jul 2 · 11:30 AM', csm: 'riley', account: 'zScaler',
        note: 'Review-generation sync — tracking product-line review counts ahead of the Sept 26 Buyer\'s Choice deadline; ~$900 incentive surplus.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Recurring TrustRadius review-generation sync with Zscaler (Vivian Chan). Reviewed review counts by product line ahead of the Sept. 26 Buyer\'s Choice deadline, remaining incentive budget by product (~$900 surplus), and campaign ideas (webinars, review-recovery outreach) to lift lagging product lines.' },
      { ts: 'Jul 2 · 1:00 PM', csm: 'rani', account: 'Hewlett Packard Enterprise Co',
        note: 'Resolved contract-language questions on SLAs/data-consumption terms; confirmed HG delivering ~3x contracted value. Legal sign-off in motion.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'HPE sync (Rani Guy, Adrian Escobar with Tracy York, Evan Miller) to resolve contract-language questions on SLAs and data-consumption terms (identity resolution / HG company ID), noting HG is delivering roughly 3x the contracted value; concluded with legal sign-off and signature routing steps.' },
    ],
    pulses: [
      { csm: 'atisha', account: 'Insight Direct USA Ltd', health: 'Healthy',
        note: 'ZoomInfo vs. HG data-gap discussion; sample dataset requested to evaluate expanded contact-enrichment role.' },
      { csm: 'atisha', account: 'Kyndryl', health: 'Concerning',
        note: 'Primary contact moved off the account with no successor named — ownership gap. Atisha re-establishing relationship owner.' },
      { csm: 'nick', account: 'Softcat Ltd', health: 'Healthy',
        note: 'Expanded UK dataset (26M companies) proposal presented for upsell.' },
      { csm: 'riley', account: 'Red Hat Inc', health: 'Healthy',
        note: 'Landing-page write-ups and tracking-fix follow-ups on track.' },
      { csm: 'nick', account: 'Siemens AG', health: 'Healthy',
        note: 'Account Compass one-pagers well received; expanding the strategic-land pilot.' },
      { csm: 'varun', account: 'Exclusive Networks', health: 'Healthy',
        note: 'Self-serve API/credit model requested ahead of renewal; sandbox testing discussed.' },
      { csm: 'nick', account: 'Veeam', health: 'Healthy',
        note: 'Propensity-model scoring session for contract-renewal proposal.' },
      { csm: 'riley', account: 'zScaler', health: 'Healthy',
        note: 'Review-generation push ahead of Sept 26 Buyer\'s Choice deadline; ~$900 incentive budget surplus.' },
      { csm: 'rani', account: 'Hewlett Packard Enterprise Co', health: 'Healthy',
        note: 'Contract-language questions resolved; HG confirmed delivering ~3x contracted value. Legal sign-off in motion.' },
    ],
  };
}

function dayMeta_2026_07_02() {
  return {
    pills: [
      ['dot-teal',   '9 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '6 Expansion'],
      ['dot-green',  '9 Pulses'],
      ['dot-grey',   'Thu Jul 2 · 53 scanned'],
    ],
    tabs: ['Overview', 'Calls (9)', 'Pulses (9)', 'Action Items (8)']
  };
}

function dayOverviewHTML_2026_07_02() {
  return `<div class="section-label">Team Activity &mdash; Thursday July 2, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Jul 2 &mdash; 53 recordings scanned</strong> via SFDC SOQL &middot; <strong>9 confirmed calls</strong> across 5 CSMs &middot; 6 expansion signals &middot; 1 concerning (Kyndryl ownership gap)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Concerning:</strong> Kyndryl's primary contact (Louise) moved teams two months ago with no successor named — an ownership gap Atisha is working to close.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Insight Direct (contact-enrichment sample dataset) &middot; Softcat (expanded UK dataset, 26M companies) &middot; Siemens (Account Compass pilot expansion) &middot; Exclusive Networks (self-serve API/credit model) &middot; Veeam (propensity-model scoring for renewal) &middot; HPE (confirmed ~3x contracted value delivered)
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
      <div class="csm-account-note">Red Hat Inc (check-in) &middot; zScaler (review-generation push)</div>
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
        <div><div class="metric-num m-grey">105m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Softcat Ltd (expanded UK dataset &#x1F4C8;) &middot; Siemens AG (Account Compass pilot &#x1F4C8;) &middot; Veeam (propensity-model scoring &#x1F4C8;)</div>
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
      <div class="csm-account-note">Hewlett Packard Enterprise Co (contract questions resolved, ~3x value confirmed)</div>
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
      <div class="csm-account-note">Exclusive Networks (self-serve API/credit model &#x1F4C8;) &middot; zScaler (Varun/Manoj sync — no transcript, unconfirmed)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Insight Direct USA Ltd (contact-enrichment expansion &#x1F4C8;) &middot; Kyndryl (ownership gap &#x26A0;) &middot; RSM (no transcript, unconfirmed)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">5 events scheduled (delaware Netherlands, Sage, Lumen Weekly x2, OpenAI Weekly) &mdash; OpenAI matched a recording but no transcript synced (unconfirmed); other 4 have no recording found</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events in SFDC for this date</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 duplicate NetApp calendar entries (Monthly Sync) &mdash; neither has a matching recording</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_02() {
  return `<div class="calls-table">
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x2139;&#xFE0F; <strong>Unconfirmed (no transcript, attributed via CSM event ownership):</strong> Atisha &times; RSM (9:00 AM PT, 30 min) &middot; Divyam &times; OpenAI (10:30 AM PT, 30 min) &middot; Varun &times; zScaler / Varun-Manoj Sync (11:15 AM PT, 30 min) &mdash; SFDC events matched recordings by EventId, but no transcript synced to confirm CSM presence.
  </div>
  <div style="background:#1c1f26;border:1px solid #374151;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    <strong>CSM events with no recording:</strong> Nick &times; PTC (2:00 AM PT) &middot; Varun &times; Insight (5:02 AM PT) &middot; Atisha &times; Kong (7:30 AM PT) &middot; Atisha &times; Apple (9:00 AM PT) &middot; Atisha &times; Versa (10:30 AM PT) &middot; Riley &times; Apptio (10:00 AM PT) &middot; Divyam &times; delaware Netherlands / Sage / Lumen Weekly / Lumen Weekly 2.0 &middot; Andy &times; NetApp (9:00 AM PT, 2 duplicate entries).
  </div>
  </div>`;
}

function dayPulsesHTML_2026_07_02() {
  const cards = [
    { csm:'atisha', health:'Healthy', account:'Insight Direct USA Ltd',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 2 &middot; Contact Enrichment',
      excerpt:'AW/Jul 2: Recurring biweekly sync (4:30 AM, 30 min). ZoomInfo vs. HG data-gap discussion; sample dataset requested to evaluate expanded contact-enrichment role.' },
    { csm:'atisha', health:'Concerning', account:'Kyndryl',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 2 &middot; Ownership Gap',
      excerpt:'AW/Jul 2: Monthly sync (5:30 AM, 30 min). Primary contact moved off the account two months ago with no successor named. Atisha re-establishing relationship owner.' },
    { csm:'nick', health:'Healthy', account:'Softcat Ltd',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 2 &middot; Expanded Dataset Pitch',
      excerpt:'NJ/Jul 2: Recurring sync (6:00 AM, 30 min). Expanded UK dataset (26M companies) plus SMB spend/install data points presented ahead of upsell.' },
    { csm:'riley', health:'Healthy', account:'Red Hat Inc',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 2 &middot; TrustRadius Check-in',
      excerpt:'RR/Jul 2: Recurring biweekly check-in (7:00 AM, 30 min). Landing-page write-ups (RHEL/OpenShift/Ansible) and tracking-fix follow-ups on track.' },
    { csm:'nick', health:'Healthy', account:'Siemens AG',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 2 &middot; Pilot Expansion',
      excerpt:'NJ/Jul 2: Recurring biweekly sync (7:30 AM, 30 min). Account Compass one-pagers well received; expanding the strategic-land pilot to more accounts.' },
    { csm:'varun', health:'Healthy', account:'Exclusive Networks',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 2 &middot; Self-Serve Model',
      excerpt:'VT/Jul 2: Ad-hoc, customer-initiated (8:00 AM, 30 min). Requested a self-serve API/credit model ahead of renewal; sandbox testing and platform migration credit-usage discussed.' },
    { csm:'nick', health:'Healthy', account:'Veeam',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 2 &middot; Propensity Model',
      excerpt:'NJ/Jul 2: Recurring working session (9:00 AM, 45 min). Scoring accounts not currently in the feed for the contract-renewal proposal; refining technographic signal granularity.' },
    { csm:'riley', health:'Healthy', account:'zScaler',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 2 &middot; Review Generation',
      excerpt:'RR/Jul 2: Recurring sync (11:30 AM, 30 min). Review counts tracked ahead of Sept 26 Buyer\'s Choice deadline; ~$900 incentive surplus; campaign ideas for lagging product lines.' },
    { csm:'rani', health:'Healthy', account:'Hewlett Packard Enterprise Co',
      opp:'Vitally Pulse &mdash; Jul 2 Call', arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 2 &middot; Contract Resolution',
      excerpt:'RG/Jul 2: Recurring sync (1:00 PM, 30 min). Contract-language questions on SLAs/data-consumption resolved; HG confirmed delivering ~3x contracted value. Legal sign-off in motion.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div class="pulse-account">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_02() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0702-1') ? 'done' : ''}" data-csm="atisha" id="action-0702-1">
      <div class="action-checkbox ${doneActions.has('0702-1') ? 'checked' : ''}" onclick="toggleAction('0702-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Kyndryl &mdash; Re-establish Account Ownership</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Primary contact moved teams two months ago with no successor named in the account stream. Identify the new point of contact before the relationship goes dark.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702-2') ? 'done' : ''}" data-csm="nick" id="action-0702-2">
      <div class="action-checkbox ${doneActions.has('0702-2') ? 'checked' : ''}" onclick="toggleAction('0702-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Softcat &mdash; Follow Up on Expanded UK Dataset Proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; Expanded UK dataset (26M companies) plus SMB spend/install data points was presented — move the upsell forward.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702-3') ? 'done' : ''}" data-csm="nick" id="action-0702-3">
      <div class="action-checkbox ${doneActions.has('0702-3') ? 'checked' : ''}" onclick="toggleAction('0702-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Siemens &mdash; Identify Accounts to Expand Account Compass Pilot</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; Account Compass one-pagers well received; identify more AOs/accounts to expand the strategic-land pilot.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702-4') ? 'done' : ''}" data-csm="varun" id="action-0702-4">
      <div class="action-checkbox ${doneActions.has('0702-4') ? 'checked' : ''}" onclick="toggleAction('0702-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Exclusive Networks &mdash; Advance Self-Serve API/Credit Model Discussion</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Customer requested a self-serve model ahead of renewal. Progress sandbox testing and clarify credit consumption under platform migration.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702-5') ? 'done' : ''}" data-csm="nick" id="action-0702-5">
      <div class="action-checkbox ${doneActions.has('0702-5') ? 'checked' : ''}" onclick="toggleAction('0702-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Veeam &mdash; Finalize Propensity-Model Scoring for Renewal Proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; Complete scoring of accounts not currently in the feed to support the contract-renewal proposal.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702-6') ? 'done' : ''}" data-csm="rani" id="action-0702-6">
      <div class="action-checkbox ${doneActions.has('0702-6') ? 'checked' : ''}" onclick="toggleAction('0702-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DD; HPE &mdash; Complete Legal Sign-Off and Signature Routing</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; Contract-language questions resolved; HG confirmed delivering ~3x contracted value. Route for signature.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702-7') ? 'done' : ''}" data-csm="riley" id="action-0702-7">
      <div class="action-checkbox ${doneActions.has('0702-7') ? 'checked' : ''}" onclick="toggleAction('0702-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DA; zScaler &mdash; Support Review-Generation Push</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Riley Rogers &middot; Coordinate webinars and review-recovery outreach for lagging product lines ahead of the Sept 26 Buyer's Choice deadline.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702-8') ? 'done' : ''}" data-csm="atisha" id="action-0702-8">
      <div class="action-checkbox ${doneActions.has('0702-8') ? 'checked' : ''}" onclick="toggleAction('0702-8')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DD; RSM, OpenAI, zScaler (Varun-Manoj) &mdash; Log Manual Vitally Notes</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Atisha Waghela, Divyam Dewan, Varun Tiwari &middot; All 3 calls matched a CSM event by EventId but no transcript synced, so CSM presence is unconfirmed. Log manual notes to keep the account record current.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ============================================================
// July 3, 2026 — Pre-holiday Friday (no confirmed calls)
// 7 recordings scanned · 0 transcripts · 0 confirmed CSM calls
// 3 unconfirmed (recording + CSM event link, no transcript)
// 7 CSM events with no matching recording (Atisha heavy day)
// ============================================================

function dayData_2026_07_03() {
  return {
    calls: [],
    pulses: [],
  };
}

function dayMeta_2026_07_03() {
  return {
    pills: [
      ['dot-teal',  '0 Confirmed Calls'],
      ['dot-amber', '3 Unconfirmed'],
      ['dot-grey',  'Fri Jul 3 · 7 scanned · Pre-holiday'],
    ],
    tabs: ['Overview', 'Calls (0)', 'Pulses (0)', 'Action Items (4)']
  };
}

function dayOverviewHTML_2026_07_03() {
  return `<div class="section-label">Team Activity &mdash; Friday July 3, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Jul 3 &mdash; 7 recordings scanned</strong> via SFDC SOQL &middot; <strong>0 confirmed calls</strong> (no transcripts synced on any recording) &middot; Pre-July&nbsp;4 holiday &mdash; reduced team activity expected
  </div>
  <div style="background:#1e1a0e;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>3 unconfirmed calls</strong> (recording matched CSM event via EventId, no transcript synced): Atisha&nbsp;Waghela / Salesforce&nbsp;ASEAN (1:30&nbsp;AM&nbsp;PT &middot; 30&nbsp;min) &middot; Andy&nbsp;Lim / ADP (8:00&nbsp;AM&nbsp;PT &middot; 30&nbsp;min) &middot; Pam&nbsp;Huck / ADP cross-coverage (same recording). Manual Vitally notes recommended.
  </div>
  <div style="background:#1c1f26;border:1px solid #64748b;border-left:3px solid #64748b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CB; <strong>Atisha Waghela had 7 CSM events scheduled</strong> (Salesforce, Intel, Apple &times;4, AMD) but only 1 matched a recording and none had transcripts. Weflow coverage gap likely due to non-Zoom/Meet sessions or recording not enabled.
  </div>
  <div class="overview-grid">

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM events or recordings &mdash; pre-holiday</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; Infor onsite debrief (5:00&nbsp;AM&nbsp;PT) &mdash; no recording found</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM events or recordings &mdash; pre-holiday</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM events or recordings &mdash; pre-holiday</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM events or recordings &mdash; pre-holiday</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">ADP Workforce &lt;&gt; TrustRadius call (8:00&nbsp;AM&nbsp;PT) &mdash; recording exists, no transcript &mdash; unconfirmed cross-coverage of Andy's ADP account</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">7 events scheduled (Salesforce, Intel, Apple &times;4, AMD) &mdash; 1 recording matched (Salesforce ASEAN), no transcripts synced. &#x26A0;&#xFE0F; Apple renewal due Jul&nbsp;22.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">ADP Workforce &lt;&gt; TrustRadius call (8:00&nbsp;AM&nbsp;PT) &mdash; recording exists, no transcript &mdash; unconfirmed</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_03() {
  return `<div class="calls-table">
  <div style="background:#1e1a0e;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:10px 14px;margin:0 0 12px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>0 confirmed calls on Jul 3</strong> &mdash; no transcripts synced across all 7 recordings. 3 calls are unconfirmed (recording + CSM event matched by EventId, no speaker verification possible):
    <ul style="margin:6px 0 0 16px;padding:0;line-height:1.8;">
      <li><strong>Atisha Waghela / Salesforce Inc (ASEAN)</strong> &mdash; 1:30&nbsp;AM&nbsp;PT &middot; 30&nbsp;min &middot; "HG Insights Zendesk connect" &middot; EventId match confirmed</li>
      <li><strong>Andy Lim / ADP, Inc</strong> &mdash; 8:00&nbsp;AM&nbsp;PT &middot; 30&nbsp;min &middot; "ADP Workforce &lt;&gt; TrustRadius: Monthly Success Call" &middot; EventId match confirmed</li>
      <li><strong>Pam Huck / ADP, Inc (cross-coverage)</strong> &mdash; 8:00&nbsp;AM&nbsp;PT &middot; 30&nbsp;min &middot; Same recording &middot; EventId match confirmed</li>
    </ul>
  </div>
  <div style="background:#1c1f26;border:1px solid #64748b;border-left:3px solid #64748b;border-radius:6px;padding:10px 14px;margin:0 0 12px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CB; <strong>CSM events with no recording (7)</strong> &mdash; Atisha Waghela:
    Intel &amp; HGI Platform Training (5:30&nbsp;AM&nbsp;PT) &middot;
    Apple Bi-weekly Sync (8:00&nbsp;AM&nbsp;PT) &middot;
    Apple Bi-weekly Sync (9:00&nbsp;AM&nbsp;PT) &middot;
    AMD Bi-weekly Touchpoint (9:30&nbsp;AM&nbsp;PT) &middot;
    Apple Market Intelligence Training (11:00&nbsp;AM&nbsp;PT) &middot;
    Apple Platform Training Team Call (12:00&nbsp;PM&nbsp;PT) &middot;
    Nick Johnson: Infor Onsite Debrief (5:00&nbsp;AM&nbsp;PT)
  </div>
  <div style="background:#1c1f26;border:1px solid #334155;border-radius:6px;padding:10px 14px;font-size:12px;color:#64748b;">
    &#x1F512; <strong>Internal / non-enterprise recordings excluded (5)</strong>:
    "tORS Friday schedule block" (675&nbsp;min, operational block) &middot;
    "Jayesh / Ted &mdash; Forecast Review" (internal HG exec) &middot;
    "Weekly learning series" (internal training) &middot;
    "ARB" (Architecture Review Board) &middot;
    "HG Insights / Telefonica Enablement Sync" (Telefonica not in enterprise book &mdash; non-CSM team)
  </div>
  </div>`;
}

function dayPulsesHTML_2026_07_03() {
  const cards = [];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div class="pulse-account">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_03() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0703-1') ? 'done' : ''}" data-csm="atisha" id="action-0703-1">
      <div class="action-checkbox ${doneActions.has('0703-1') ? 'checked' : ''}" onclick="toggleAction('0703-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F34E; Apple &mdash; Log Pre-Holiday Touchpoints Before Jul&nbsp;22 Renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Apple renewal is due Jul 22 (19 days). Four Apple events on Jul&nbsp;3 had no recordings. Manually log Vitally notes for each touchpoint (Bi-weekly Sync, Market Intel Training, Platform Training Team Call) so engagement history is current ahead of the renewal conversation.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0703-2') ? 'done' : ''}" data-csm="atisha" id="action-0703-2">
      <div class="action-checkbox ${doneActions.has('0703-2') ? 'checked' : ''}" onclick="toggleAction('0703-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DD; Salesforce ASEAN &amp; Intel &mdash; Log Vitally Notes for Unrecorded Calls</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Atisha Waghela &middot; "HG Insights Zendesk connect" (Salesforce ASEAN, 1:30&nbsp;AM) had a recording but no transcript. Intel Platform Training (5:30&nbsp;AM) had no recording at all. Log manual Vitally notes for both to maintain account record continuity.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0703-3') ? 'done' : ''}" data-csm="andy" id="action-0703-3">
      <div class="action-checkbox ${doneActions.has('0703-3') ? 'checked' : ''}" onclick="toggleAction('0703-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DD; ADP &mdash; Log Manual Vitally Note for Monthly Success Call</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Andy Lim (+ Pam Huck cross-coverage) &middot; "ADP Workforce &lt;&gt; TrustRadius: Monthly Success Call" (8:00&nbsp;AM) recording matched by EventId but transcript did not sync. Log a manual note in Vitally with call date, attendees, and key discussion points.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0703-4') ? 'done' : ''}" data-csm="nick" id="action-0703-4">
      <div class="action-checkbox ${doneActions.has('0703-4') ? 'checked' : ''}" onclick="toggleAction('0703-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Infor &mdash; Log Onsite Debrief Note</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Nick Johnson &middot; "HG onsite debrief check ins" for Infor (5:00&nbsp;AM&nbsp;PT) had no Weflow recording. If an onsite visit occurred, log debrief notes in Vitally to keep the $850K account record current.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2026-07-06 (Monday) — 41 recordings scanned · 3 confirmed · Nick on PTO
// ─────────────────────────────────────────────────────────────────────────────

function dayData_2026_07_06() {
  return {
    calls: [
      { ts: 'Jul 06 · 7:00 AM', csm: 'varun', account: 'DXC Technology',
        note: 'Invoice not properly processed in DXC system — Gabriella working with finance to resolve cross-charge.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Weekly sync with DXC contact Gabriella Aston (AM Augie Buettner joined). Outstanding invoice was not associated correctly with Gabriella\'s license due to a DXC system integration gap; she is working with finance to get approval for cross-charge resolution. Also discussed upcoming renewal model and World Cup.' },
      { ts: 'Jul 06 · 8:00 AM', csm: 'riley', account: 'Intuit',
        note: 'New Mailchimp contact Spencer Adkins onboarded; 38 reviews YTD qualifies for Buyer\'s Choice Award.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Bi-weekly TrustRadius success call. Spencer Adkins is the new Mailchimp/Intuit point of contact replacing Bianca. 38 reviews YTD — Buyer\'s Choice Award in the fall is already confirmed. Discussed monthly review campaigns for 2027 Top Rated; Riley introduced Spencer to Natalie Pratt from Intuit Enterprise Suite. Potential future in-person visit to Intuit ATL office.' },
      { ts: 'Jul 06 · 9:00 AM', csm: 'divyam', account: 'Lumen Technologies',
        note: 'Post-renewal RGIP onboarding — PO received July 1; Nathan being provisioned on new platform with 175k credits.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Weekly sync following Lumen renewal close (PO received July 1). Divyam provisioning Nathan\'s RGIP access today — 175k credits allocated, migrating from legacy platform. New platform unlocks 35M company records (vs ~12M before), user management, and usage tracking. Nathan had session-expiry issues on old platform; full RGIP onboarding session to be scheduled this week.' },
    ],
    pulses: [
      { csm: 'varun', account: 'DXC Technology', health: 'Healthy',
        note: 'Weekly sync — invoice resolution in progress with DXC finance; renewal model discussion.' },
      { csm: 'riley', account: 'Intuit', health: 'Healthy',
        note: 'Bi-weekly TrustRadius call — Buyer\'s Choice Award qualified (38 reviews YTD); new contact Spencer Adkins onboarded.' },
      { csm: 'divyam', account: 'Lumen Technologies', health: 'Healthy',
        note: 'Post-renewal RGIP onboarding — 175k credits, 35M company database; full onboarding session to be scheduled.' },
    ],
  };
}

function dayMeta_2026_07_06() {
  return {
    pills: [
      ['dot-teal',   '3 Calls'],
      ['dot-amber',  '1 Expansion'],
      ['dot-grey',   'Mon Jul 6 · 41 scanned'],
    ],
    tabs: ['Overview', 'Calls (3)', 'Pulses (3)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_07_06() {
  return `<div class="section-label">Team Activity &mdash; Monday July 6, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Monday Jul 6 &mdash; 41 recordings scanned</strong> via SFDC SOQL &middot; <strong>3 confirmed calls</strong> across 3 CSMs &middot; 1 expansion signal (Lumen renewal + RGIP onboarding) &middot; Nick Johnson on PTO
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion Signal:</strong> Divyam Dewan &mdash; Lumen Technologies renewal closed (PO July 1). RGIP access provisioning underway &mdash; 175k credits, 35M company database unlocked.
  </div>
  <div style="background:#1c1a17;border:1px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F3D5;&#xFE0F; <strong>Nick Johnson on PTO</strong> &mdash; Confirmed by Softcat transcript: "nick's on pto he's out camping up in the lakes." Softcat biweekly call proceeded with AM David Garcia Thomas. KPMG event was covered by Atisha Waghela.
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
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Intuit (Mailchimp bi-weekly &mdash; new contact Spencer Adkins; Buyer&rsquo;s Choice Award qualified)</div>
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
      <div class="csm-account-note">DXC Technology (weekly sync &mdash; invoice processing issue; finance team resolving)</div>
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
      <div class="csm-account-note">Lumen Technologies (post-renewal RGIP onboarding &mdash; 175k credits, 35M records unlocked)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#fcd34d;font-size:11px;">&#x1F3D5;&#xFE0F; ON PTO &mdash; Confirmed by Softcat transcript. KPMG event covered by Atisha Waghela. Softcat biweekly and NICE biweekly had no CSM present.</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; no recording (NetApp weekly sync at 1:00 PM PT)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events or recordings found</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events scheduled &mdash; Intel (recording, no transcript &mdash; unconfirmed), Airtel Africa (no recording), KPMG (covering Nick on PTO, no recording)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events or recordings found</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_06() {
  return `<div style="background:#1c1a17;border:1px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F3D5;&#xFE0F; <strong>Nick Johnson on PTO</strong> &mdash; Softcat biweekly (6:30 AM PT) proceeded without Nick; AM David Garcia Thomas ran the call. Transcript confirms: &ldquo;nick&rsquo;s on pto he&rsquo;s out camping up in the lakes.&rdquo;
  </div>
  <div style="background:#1e1e2e;border:1px solid #6366f1;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#a5b4fc;">
    &#x26A0;&#xFE0F; <strong>Atisha Waghela &mdash; Intel call unconfirmed</strong> &mdash; Recording found (Intel &lt;&gt; HGI: Weekly Sync, 7:00 AM PT, 30 min) but transcript did not sync. Inferred from CSM event ownership only.
  </div>`;
}

function dayPulsesHTML_2026_07_06() {
  const cards = [
    { csm:'varun', health:'Healthy', account:'DXC Technology',
      opp:'Vitally Pulse &mdash; Jul 6 Call', arr:'Strategic &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 6 &middot; Check-in + Issue',
      excerpt:'VT/Jul 6: Weekly sync with Gabriella Aston; AM Augie Buettner joined. Invoice not correctly processed in DXC system &mdash; Gabriella coordinating with finance for cross-charge approval. Renewal model discussion (7:00 AM PT, 30 min).' },
    { csm:'riley', health:'Healthy', account:'Intuit',
      opp:'Vitally Pulse &mdash; Jul 6 Call', arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 6 &middot; Check-in',
      excerpt:'RR/Jul 6: Bi-weekly TrustRadius success call. Spencer Adkins is new Mailchimp/Intuit contact (replacing Bianca). 38 reviews YTD &mdash; Buyer\'s Choice Award qualified for fall. Monthly review campaigns for 2027 Top Rated planned. Natalie Pratt (Intuit Enterprise Suite) intro facilitated (8:00 AM PT, 30 min).' },
    { csm:'divyam', health:'Healthy', account:'Lumen Technologies',
      opp:'Vitally Pulse &mdash; Jul 6 Call', arr:'Strategic &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 6 &middot; Check-in + Expansion',
      excerpt:'DD/Jul 6: Post-renewal weekly sync. PO received July 1. RGIP new platform access being provisioned today &mdash; 175k credits, 35M company records, user management, usage tracking unlocked. Full onboarding session to be scheduled this week (9:00 AM PT, 30 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div class="pulse-account">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_06() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0706-1') ? 'done' : ''}" data-csm="divyam" id="action-0706-1">
      <div class="action-checkbox ${doneActions.has('0706-1') ? 'checked' : ''}" onclick="toggleAction('0706-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E6; Lumen Technologies &mdash; Provision RGIP Access for Nathan Today</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Divyam Dewan &middot; Divyam committed on the call to provisioning Nathan&rsquo;s RGIP access before EOD July 6. Confirm access was granted and send Nathan a confirmation with login instructions.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0706-2') ? 'done' : ''}" data-csm="divyam" id="action-0706-2">
      <div class="action-checkbox ${doneActions.has('0706-2') ? 'checked' : ''}" onclick="toggleAction('0706-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Lumen Technologies &mdash; Schedule RGIP Onboarding Session with Nathan</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Divyam Dewan &middot; Promised Nathan a dedicated onboarding session to cover the new RGIP UI, credit calculator, user management, and usage tracking. Schedule this week to capitalize on post-renewal momentum.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0706-3') ? 'done' : ''}" data-csm="varun" id="action-0706-3">
      <div class="action-checkbox ${doneActions.has('0706-3') ? 'checked' : ''}" onclick="toggleAction('0706-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4B3; DXC Technology &mdash; Follow Up on Invoice Resolution</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Gabriella Aston confirmed the invoice is being handled by DXC finance; she needs her manager&rsquo;s approval before cross-charging. Follow up this week to confirm the invoice has been approved and processed.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0706-4') ? 'done' : ''}" data-csm="riley" id="action-0706-4">
      <div class="action-checkbox ${doneActions.has('0706-4') ? 'checked' : ''}" onclick="toggleAction('0706-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C5; Intuit &mdash; Share 2027 Top Rated Campaign Plan with Spencer Adkins</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; Spencer Adkins is new to the account (replacing Bianca). Send a campaign plan for monthly review requests to build toward 2027 Top Rated qualification. Also connect Spencer with Natalie Pratt (Intuit Enterprise Suite).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0706-5') ? 'done' : ''}" data-csm="atisha" id="action-0706-5">
      <div class="action-checkbox ${doneActions.has('0706-5') ? 'checked' : ''}" onclick="toggleAction('0706-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DD; Intel &mdash; Log Manual Vitally Note (Unconfirmed Call)</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Atisha Waghela &middot; Intel &lt;&gt; HGI Weekly Sync recording found (7:00 AM PT, 30 min) but transcript did not sync &mdash; CSM presence unconfirmed. If the call occurred, log a manual Vitally note with discussion points to maintain account record continuity.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// July 7, 2026 — 14 confirmed calls · 3 unconfirmed · 67 recordings scanned
// ─────────────────────────────────────────────────────────────────────────────

function dayData_2026_07_07() {
  return {
    calls: [
      { ts: 'Jul 7 · 6:00 AM', csm: 'andy', account: 'SAS Institute',
        note: 'Phoenix MCP 404 errors on cloud_spend and FAI tools; customer testing API directly.',
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Customer Mike testing Phoenix MCP via Python hit 404 errors on company_cloud_spend and company_fai endpoints. HG (Chloé Portier) confirmed a key-rotation issue caused 403/404s the prior week and committed to fix the same day. Customer also troubleshooting screen-share in Zoom.' },

      { ts: 'Jul 7 · 6:30 AM', csm: 'varun', account: 'Zscaler',
        note: 'Account list data-matching working session — 122k of 125k accounts matched.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Manoj Parameswara (Zscaler) and Varun worked through Google Sheet showing blank/zero records on account data. 122k of 125k accounts matched but some GID-to-account-ID VLOOKUP issues remain. Varun suggested appending GID to disambiguate multi-GID accounts.' },

      { ts: 'Jul 7 · 6:30 AM', csm: 'riley', account: 'SAP (CIAM)',
        note: 'Peer review lead pilot end-of-contract — uploading 2700+ leads to Marketo via MSights.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Mixed',
        detail: 'SAP CIAM pilot at contract end. ~2700 leads collected via TrustRadius and waiting to upload to Marketo through MSights for nurture. Test upload this week before bulk transfer. Alejandro Barajas (SAP) driving discussion; Riley and Scott (TR) providing status. Expansion signal: renewal and second phase of the program are the next milestone.' },

      { ts: 'Jul 7 · 7:00 AM', csm: 'atisha', account: 'TD Synnex',
        note: 'Intent topic recommendation walkthrough — reduced from 500 to priority topics only.',
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha led a walkthrough of the intent topic recommendation file built by Clayton Cutbush (HG Customer Solutions). TD Synnex had 500 intent topics selected; file was rebuilt to reduce noise and surface only high-priority topics aligned to their product use cases. Lisa Fults (TD Synnex) had set up the pipeline to receive intent files but had not yet downloaded the recommendation file — Atisha to reshare.' },

      { ts: 'Jul 7 · 8:00 AM', csm: 'riley', account: 'SAP (S/4HANA)',
        note: 'Monthly sync — most SAP team no-showed; renewal timing discussion with Cole.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'S/4HANA monthly cadence meeting. SAP team (Melanie, Eric) largely did not attend. Riley and Cole Arutian (TR AM) discussed bridge agreement renewals expiring after 7/27, CX reports coming up for renewal, and a potential 17-month renewal extension. Riley noted she had not yet discussed CX renewal with margin and planned to do so the following week.' },

      { ts: 'Jul 7 · 10:00 AM', csm: 'riley', account: 'SAP (Joule)',
        note: 'Monthly sync — introduced new stakeholder Lerato Manatsa from SAP Joule.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Monthly Joule TrustRadius sync. New SAP contact Lerato Manatsa joined for the first time. Cole Arutian and Mardigan Moffat (TR) made introductions; Riley shared her role. Discussed how Lerato interfaces with other SAP stakeholders working on the Joule solution. SAP has been a TrustRadius partner for ~8 years across multiple business units.' },

      { ts: 'Jul 7 · 10:00 AM', csm: 'rani', account: 'Cisco (Isovalent)',
        note: 'Onboarding follow-up — HubSpot integration confirmed as personal-level scoring only.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Rani followed up with Tu-Anh (Cisco Isovalent) on outstanding technical questions about HubSpot integration. Key finding: HG does not push account scores to HubSpot — only personal-level scoring is available. HG engineering team is still investigating additional integration questions raised by Tu-Anh. Rani to follow up with engineering lead once full answers are ready.' },

      { ts: 'Jul 7 · 10:00 AM', csm: 'divyam', account: 'BILL',
        note: 'Weekly sync — documentation walkthrough for BILL sales team on MadKudu customer fit model.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam walked Eric Nguyen (BILL) through HG/MadKudu help center articles covering the Customer Fit model, Likelihood to Buy, and Lead Grade. Eric\'s goal is to help BILL\'s sales team understand scoring outputs. Divyam noted MadKudu has the most comprehensive documentation of the three platforms (HG, TR, MK). Articles shared in chat.' },

      { ts: 'Jul 7 · 10:30 AM', csm: 'varun', account: 'Zscaler',
        note: 'Pre-renewal data audit — Zscaler wants to expand product data before contract renewal.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Manoj Parameswara (Zscaler RevOps) is building a summary document for Dennis before their contract renewal. Currently contracted for 50 products, HG ships data for ~55. Manoj wants to understand current spend data consumption across teams (Anurag, Parvinder) and make the case for additional product data sets. Varun to help scope the full product data offering.' },

      { ts: 'Jul 7 · 11:00 AM', csm: 'riley', account: 'SAP (Business Network)',
        note: 'Biweekly sync — Kathryn Zwack had Zoom audio issues; vacation coverage coordination.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Biweekly SAP Business Network TrustRadius sync. Customer Kathryn Zwack had repeated Zoom connectivity issues (firewall + Zoom update). Riley coordinated with Cole Arutian on vacation coverage for end-of-July — Thursday sync with Mardigan to determine which SAP calls to keep, reschedule, or reassign (Riley out Wed–Wed end of month).' },

      { ts: 'Jul 7 · 11:00 AM', csm: 'pam', account: 'Microsoft',
        note: 'Black Hat conference logistics — TrustRadius content booth planning with Microsoft.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Pam Huck and Mardigan Moffat (TR) met with Maryann (Microsoft) and Mark Barrera (TR events team) to finalize TrustRadius booth logistics for Black Hat. Discussed video vs. audio-only format (RSA precedent used as reference), laptop accessibility in-booth, and event setup. Pam joining from her mother\'s rehab facility. All parties confirmed green light on execution.' },

      { ts: 'Jul 7 · 12:00 PM', csm: 'rani', account: 'Cloudflare',
        note: 'Renewal at risk — 60% ops resource loss, build-vs-buy evaluation required.',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Robert Goldfarb (Cloudflare) detailed significant internal disruption: operations lost 60% of resources, bringing forward planning from September to now. Cloudflare\'s procurement process now requires a formal build-vs-buy evaluation for all renewals with a 1-year contract limit. Robert acknowledged being behind on this renewal and said it will take multiple internal cycles. Rani and James Tudway (HG VP) are managing this renewal. Concerning signal: internal instability + delayed evaluation process = renewal risk.' },

      { ts: 'Jul 7 · 1:30 PM', csm: 'rani', account: 'Workday',
        note: 'Renewal scope discussion — new procurement contact, potential expansion of scope.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Rani met with Alexandra Wilson (Senior Sourcing Manager, Workday) and David Crossman (HG SE) + James Tudway (HG VP). Alexandra is the new procurement contact taking over from prior renewal owner. Workday has had reorganizations and a change in business ownership. Alexandra wants to understand current scope and explore potential expansion. James Tudway noted long-term relationship across multiple Workday orgs (Kelly de Courti history).' },

      { ts: 'Jul 7 · 2:30 PM', csm: 'atisha', account: 'Databricks',
        note: 'Custom spend model update — HTTP delta delivery confirmed; AI Summit context discussed.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha met with Tyler Neubauer and Eva Li (Databricks) along with Charles Hawkins and Ryan Comstock (HG). Eva shared context from Databricks AI Summit (30K attendees — approaching Dreamforce scale). Tyler confirmed HG is delivering the custom spend model in HTTP delta format. Meeting covered model update status and next steps for the Databricks custom data configuration.' },
    ],
    pulses: [
      { csm: 'andy',   health: 'Healthy',    account: 'SAS Institute',        note: 'Phoenix MCP API issue (404 on cloud_spend/FAI) — HG committed to fix same day.' },
      { csm: 'varun',  health: 'Healthy',    account: 'Zscaler',              note: 'Account list data-matching session — 122k/125k matched; GID VLOOKUP issue being resolved.' },
      { csm: 'riley',  health: 'Healthy',    account: 'SAP (CIAM)',           note: 'Peer review pilot end-of-contract; 2700+ leads uploading to Marketo via MSights this week.' },
      { csm: 'atisha', health: 'Healthy',    account: 'TD Synnex',            note: 'Intent topic walkthrough — file rebuilt from 500 topics to priority set; Atisha to reshare file.' },
      { csm: 'riley',  health: 'Healthy',    account: 'SAP (S/4HANA)',        note: 'Monthly cadence — mostly no-show; bridge renewals post-7/27 and CX reports renewal under review.' },
      { csm: 'riley',  health: 'Healthy',    account: 'SAP (Joule)',          note: 'Monthly sync — new stakeholder Lerato Manatsa introduced; relationship building underway.' },
      { csm: 'rani',   health: 'Healthy',    account: 'Cisco (Isovalent)',     note: 'HubSpot integration clarified (no account score push); engineering addressing remaining questions.' },
      { csm: 'divyam', health: 'Healthy',    account: 'BILL',                 note: 'Weekly sync — MadKudu customer fit model docs shared for BILL sales team enablement.' },
      { csm: 'varun',  health: 'Healthy',    account: 'Zscaler',              note: 'Pre-renewal expansion discussion — Manoj building summary doc for additional product data sets.' },
      { csm: 'riley',  health: 'Healthy',    account: 'SAP (Business Network)', note: 'Biweekly — vacation coverage coordination; Zoom audio issues with Catherine Zwack.' },
      { csm: 'pam',    health: 'Healthy',    account: 'Microsoft',            note: 'Black Hat booth logistics finalized with Microsoft and TR events team.' },
      { csm: 'rani',   health: 'Concerning', account: 'Cloudflare',           note: 'Renewal at risk — 60% ops loss, build-vs-buy evaluation required, behind schedule.' },
      { csm: 'rani',   health: 'Healthy',    account: 'Workday',              note: 'New procurement contact engaged; renewal scope + expansion discussion initiated.' },
      { csm: 'atisha', health: 'Healthy',    account: 'Databricks',           note: 'Custom spend model update — HTTP delta delivery confirmed; AI Summit context.' },
    ],
  };
}

function dayMeta_2026_07_07() {
  return {
    pills: [
      ['dot-teal',   '14 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '3 Expansion'],
      ['dot-green',  '14 Pulses'],
      ['dot-grey',   'Tue Jul 7 · 67 scanned'],
    ],
    tabs: ['Overview', 'Calls (14)', 'Pulses (14)', 'Action Items (7)'],
  };
}

function dayOverviewHTML_2026_07_07() {
  return `<div class="section-label">Team Activity &mdash; Tuesday July 7, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday July 7 &mdash; 67 recordings scanned</strong> via SFDC SOQL &middot; <strong>14 confirmed CSM calls</strong> across 7 CSMs &middot; 1 Concerning (Cloudflare renewal at risk) &middot; 3 Expansion signals (Zscaler, Workday, Microsoft/Black Hat)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Cloudflare &mdash; Renewal Risk (Rani Guy):</strong> Robert Goldfarb disclosed 60% ops resource loss and a mandatory build-vs-buy procurement evaluation for all renewals. He acknowledged being behind on this renewal. James Tudway (HG VP) is aligned. Escalation path and timeline needed urgently.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">120m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP CIAM (pilot end-of-contract) &middot; SAP S/4HANA (monthly, renewal timing) &middot; SAP Joule (new stakeholder) &middot; SAP Biz Network (biweekly)</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">&#x26A0;&#xFE0F; Cloudflare (renewal at risk) &middot; &#x1F4C8; Workday (expansion) &middot; Cisco Isovalent (onboarding issue)</div>
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
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">TD Synnex (intent topic walkthrough) &middot; Databricks (custom spend model update)</div>
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
      <div class="csm-account-note">&#x1F4C8; Zscaler &times;2 (data issue + pre-renewal expansion discussion)</div>
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
      <div class="csm-account-note">BILL (weekly sync, MadKudu docs walkthrough)</div>
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
      <div class="csm-account-note">&#x1F4C8; Microsoft (Black Hat conference expansion)</div>
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
      <div class="csm-account-note">SAS Institute (Phoenix MCP API 404 issue)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">5 events scheduled &mdash; no CSM speaker label detected in any transcript (Siemens, NTT transcripts had non-CSM speakers only; KPMG had no recording; Visionet and Intuit IES had no recording/transcript)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_07() {
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Cloudflare &mdash; CONCERNING:</strong> Robert Goldfarb disclosed 60% ops team resource reduction and a mandatory build-vs-buy procurement evaluation for all renewals (1-year contract cap). Renewal is behind schedule. Immediate risk management required. James Tudway aligned.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Zscaler (Varun/Manoj pre-renewal data expansion, 10:30 AM) &middot; Workday (Alexandra Wilson new procurement, scope expansion, 1:30 PM) &middot; Microsoft (Black Hat conference expansion, 11:00 AM)
  </div>
  <div style="background:#111827;border:1px solid #374151;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#9ca3af;">
    &#x1F4CB; <strong>Unconfirmed (no transcript):</strong> Andy Lim / Toast (8:00 AM, 30 min) &middot; Atisha Waghela / Apple Inc. (8:30 AM, 30 min) &middot; Nick Johnson / Intuit IES (8:30 AM, 30 min) &mdash; inferred from CSM event ownership only
  </div>`;
}

function dayPulsesHTML_2026_07_07() {
  const cards = [
    { csm:'andy',   health:'Healthy',    account:'SAS Institute',          opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
      change:'Jul 7 &middot; Issue',
      excerpt:'7/7 AL: Phoenix MCP API 404 errors on company_cloud_spend and company_fai (6:00 AM PT, 60 min). Customer Mike testing MCP via Python; key-rotation issue confirmed by HG — fix committed same day.' },
    { csm:'varun',  health:'Healthy',    account:'Zscaler',                opp:'Vitally Pulse &mdash; Jul 7 Call (Data Matching)',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 7 &middot; Issue',
      excerpt:'7/7 VT: Account list data-matching session (6:30 AM PT, 30 min). 122k/125k accounts matched; GID VLOOKUP issue being resolved. Manoj driving; Varun to help disambiguate multi-GID accounts.' },
    { csm:'riley',  health:'Healthy',    account:'SAP (CIAM)',             opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 7 &middot; Mixed',
      excerpt:'7/7 RR: SAP CIAM peer review lead pilot end-of-contract (6:30 AM PT, 30 min). 2700+ leads uploading to Marketo via MSights. Test run this week. Alejandro Barajas driving; renewal and Phase 2 expansion next.' },
    { csm:'atisha', health:'Healthy',    account:'TD Synnex',              opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 7 &middot; Check-in',
      excerpt:'7/7 AW: Intent topic recommendation walkthrough (7:00 AM PT, 60 min). Clayton Cutbush rebuilt file from 500 to priority topics. Lisa Fults (TD Synnex) had set up pipeline but had not received file yet — Atisha to reshare.' },
    { csm:'riley',  health:'Healthy',    account:'SAP (S/4HANA)',          opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 7 &middot; Mixed',
      excerpt:'7/7 RR: S/4HANA monthly (8:00 AM PT, 30 min). SAP team mostly no-showed. Bridge renewal timing post-7/27 discussed with Cole Arutian; CX reports renewal and potential 17-month extension flagged.' },
    { csm:'riley',  health:'Healthy',    account:'SAP (Joule)',            opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 7 &middot; Check-in',
      excerpt:'7/7 RR: Joule monthly (10:00 AM PT, 30 min). New SAP stakeholder Lerato Manatsa introduced to TR/HG team. Cole Arutian and Mardigan Moffat led intros. SAP/TR 8-year partnership.' },
    { csm:'rani',   health:'Healthy',    account:'Cisco (Isovalent)',       opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 7 &middot; Issue',
      excerpt:'7/7 RG: Cisco Isovalent onboarding follow-up (10:00 AM PT, 30 min). Confirmed: HG does not push account scores to HubSpot (personal-level only). Additional integration questions still under HG engineering review.' },
    { csm:'divyam', health:'Healthy',    account:'BILL',                   opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 7 &middot; Check-in',
      excerpt:'7/7 DD: BILL weekly sync (10:00 AM PT, 30 min). Divyam walked Eric Nguyen through MadKudu Customer Fit model and Lead Grade documentation for BILL sales team enablement.' },
    { csm:'varun',  health:'Healthy',    account:'Zscaler',                opp:'Vitally Pulse &mdash; Jul 7 Call (Expansion)',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 7 &middot; Expansion',
      excerpt:'7/7 VT: Zscaler pre-renewal expansion (10:30 AM PT, 30 min). Manoj building summary doc for Dennis. Currently 50 products contracted; wants additional product data sets. Varun to scope full offering.' },
    { csm:'riley',  health:'Healthy',    account:'SAP (Business Network)',  opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 7 &middot; Check-in',
      excerpt:'7/7 RR: SAP Business Network biweekly (11:00 AM PT, 30 min). Customer Kathryn Zwack had Zoom audio issues. Riley coordinating vacation coverage (end-of-July, Wed–Wed) with Cole and Mardigan.' },
    { csm:'pam',    health:'Healthy',    account:'Microsoft',              opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck',
      change:'Jul 7 &middot; Expansion',
      excerpt:'7/7 PH: Microsoft Black Hat planning (11:00 AM PT, 30 min). TrustRadius booth at Black Hat confirmed. Format: video or audio. Mark Barrera (TR events) + Maryann (Microsoft) aligned. Green light on execution.' },
    { csm:'rani',   health:'Concerning', account:'Cloudflare',             opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 7 &middot; Concerning',
      excerpt:'7/7 RG: Cloudflare renewal discussion (12:00 PM PT, 30 min). Robert Goldfarb: 60% ops resource loss, mandatory build-vs-buy eval, 1-year contract cap, behind on renewal. James Tudway on call. Escalation path needed.' },
    { csm:'rani',   health:'Healthy',    account:'Workday',                opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 7 &middot; Expansion',
      excerpt:'7/7 RG: Workday renewal scope discussion (1:30 PM PT, 30 min). Alexandra Wilson (new Senior Sourcing Manager) aligned on scope. Potential expansion of contract. James Tudway and David Crossman (HG SE) on call.' },
    { csm:'atisha', health:'Healthy',    account:'Databricks',             opp:'Vitally Pulse &mdash; Jul 7 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 7 &middot; Check-in',
      excerpt:'7/7 AW: Databricks custom spend model update (2:30 PM PT, 30 min). HTTP delta delivery confirmed. Eva Li shared AI Summit context (30K attendees). Tyler Neubauer + Ryan Comstock on call.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-weight:600;font-size:13px;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_07() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0707-1') ? 'done' : ''}" data-csm="rani" id="action-0707-1">
      <div class="action-checkbox ${doneActions.has('0707-1') ? 'checked' : ''}" onclick="toggleAction('0707-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Cloudflare &mdash; Initiate Formal Renewal Risk Plan with James Tudway</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy &middot; Robert Goldfarb disclosed 60% ops resource loss and a mandatory build-vs-buy evaluation. Renewal is already behind. Rani and James Tudway should align on a 2-week action plan: prepare HG's ROI brief, identify Cloudflare exec sponsor, and set a hard renewal deadline before build-vs-buy window closes.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0707-2') ? 'done' : ''}" data-csm="rani" id="action-0707-2">
      <div class="action-checkbox ${doneActions.has('0707-2') ? 'checked' : ''}" onclick="toggleAction('0707-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Workday &mdash; Send Renewal Scope Summary to Alexandra Wilson</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy &middot; Alexandra Wilson is the new procurement contact and wants to understand current scope + potential expansion. Send a 1-pager on current contract scope, usage highlights, and expansion options before their next conversation to keep momentum on the renewal.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0707-3') ? 'done' : ''}" data-csm="andy" id="action-0707-3">
      <div class="action-checkbox ${doneActions.has('0707-3') ? 'checked' : ''}" onclick="toggleAction('0707-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F527; SAS Institute &mdash; Confirm Phoenix MCP API Fix Applied</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Andy Lim &middot; Chloé Portier committed to fixing the 404 errors on company_cloud_spend and company_fai same day (July 7). Follow up with the SAS team (Mike) to confirm the fix is live and they can resume testing the MCP without errors.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0707-4') ? 'done' : ''}" data-csm="varun" id="action-0707-4">
      <div class="action-checkbox ${doneActions.has('0707-4') ? 'checked' : ''}" onclick="toggleAction('0707-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Zscaler &mdash; Send Expanded Product Data Scope to Manoj for Pre-Renewal Review</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Manoj is building a summary doc for Dennis before renewal. Varun to send a breakdown of all available product data sets beyond the current 50 contracted — include spend data, technographic categories, and additional product coverage — so Manoj can make the case internally for expanded data access.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0707-5') ? 'done' : ''}" data-csm="atisha" id="action-0707-5">
      <div class="action-checkbox ${doneActions.has('0707-5') ? 'checked' : ''}" onclick="toggleAction('0707-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C4; TD Synnex &mdash; Reshare Intent Topic Recommendation File with Lisa Fults</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Atisha Waghela &middot; Lisa Fults confirmed the pipeline to receive intent files is set up, but she had not yet received or opened the recommendation file. Atisha committed on the call to resharing. Do this today and confirm receipt.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0707-6') ? 'done' : ''}" data-csm="rani" id="action-0707-6">
      <div class="action-checkbox ${doneActions.has('0707-6') ? 'checked' : ''}" onclick="toggleAction('0707-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4AC; Cisco (Isovalent) &mdash; Follow Up on Engineering Questions from Tu-Anh</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; HG engineering is investigating additional integration questions raised by Tu-Anh (beyond HubSpot account scores). Rani committed to sending a follow-up once engineering responds. Check in with engineering lead and send Tu-Anh a status update this week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0707-7') ? 'done' : ''}" data-csm="riley" id="action-0707-7">
      <div class="action-checkbox ${doneActions.has('0707-7') ? 'checked' : ''}" onclick="toggleAction('0707-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C5; SAP (S/4HANA) &mdash; Discuss CX Reports Renewal with Margin Before End of Week</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; Riley noted on the call that margin told her the CX reports are up for renewal, but she hadn&rsquo;t yet discussed it. Cole Arutian confirmed these are funded separately by BU content strategists. Riley to connect with margin this week to understand the CX report renewal scope before the 7/27 bridge agreement deadline.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ============================================================
// July 8, 2026 — Wednesday
// 12 confirmed calls · 5 CSMs active · 1 Concerning · 3 Expansion
// ============================================================

function dayData_2026_07_08() {
  return {
    calls: [
      { ts: 'Jul 8 · 5:30 AM', csm: 'atisha', account: 'IBM (TDS EMEA)',
        note: 'Intent data EMEA coverage issue — near-zero European signals when filtering by location',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'Customer', purpose: 'Issue',
        detail: 'Montse (IBM) raised an ongoing issue with intent data showing near-zero results for European countries when filtered by location. She is using HG Insights to help IBM resellers identify companies with complementary or competitor products, but EMEA intent signals are insufficient. Atisha offered to walk through the intent location filter and share a workaround for EMEA coverage gaps.' },
      { ts: 'Jul 8 · 6:00 AM', csm: 'atisha', account: 'Deloitte',
        note: 'Weekly Data Studio product exclusion review — filtering vendor list to clean products for model',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha and Omkar Hunuswadkar joined Rajesh Shetty (Deloitte) to review the product exclusion list for Deloitte\'s HG Data Studio configuration. Rajesh reviewed the exclusion list and confirmed application development tools (Python, TypeScript) should remain as clean products. SPC for Excel was flagged as miscategorized under web conferencing and needs remapping.' },
      { ts: 'Jul 8 · 7:30 AM', csm: 'riley', account: 'Adobe (TrustRadius)',
        note: 'Geo dashboard rollout demo — Adobe is early access; next phase may include additional product profiles',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Riley showed Allyson (Adobe) the updated geo dashboard — Adobe has early access before the July 15 general rollout. Current initiative phase is wrapping up; customer mentioned the next phase may include additional product profile copy for new products. Riley demoed new GEO dashboard features and confirmed Allyson was invited to the HG Insider event.' },
      { ts: 'Jul 8 · 8:30 AM', csm: 'andy', account: 'SAS Institute',
        note: 'Weekly EMEA sync — customer asked about M&A tracking and company hierarchy update capabilities',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Andy joined the weekly SAS Institute EMEA sync (Steven, Adrian Carr, Richard in San Francisco). The main business question from the customer was about M&A tracking — whether HG can surface new subsidiary acquisitions and roll them up to global accounts. Andy explained HG\'s hierarchy maintenance process and that customers can flag new acquisitions to the research team for updates.' },
      { ts: 'Jul 8 · 9:30 AM', csm: 'atisha', account: 'Strada Global',
        note: 'Expansion call — data feed (S3) integration back on the table following renewal; data scientist Nyla driving ask',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Atisha briefed Augie Buettner before Pedro Crespo (Strada Global, Spain) joined. Internal briefing covered that Nyla (Strada data scientist) had previously used HG data via S3 buckets at a prior company and initiated the data feed conversation. The expansion was deferred from the last renewal — now being pushed forward to move Strada to the data feed delivery model. Arben Morina also joining from Strada.' },
      { ts: 'Jul 8 · 9:30 AM', csm: 'riley', account: 'Intuit (TrustRadius)',
        note: 'Regular TrustRadius CSM sync with Andrew Lum — established relationship cadence',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley met with Andrew Lum (Intuit) for their regular TrustRadius CSM sync. Established relationship maintained through consistent cadence. Post-4th of July check-in before getting into business updates.' },
      { ts: 'Jul 8 · 10:00 AM', csm: 'riley', account: 'ZScaler (TrustRadius)',
        note: 'Monthly TrustRadius sync with Vivian Chan and team — post-holiday relationship check-in',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley joined Vivian Chan, Josh Mercer, Scott Stater, Andrea Fong, Sarah Gamino, and Tiffani Nichols for the ZScaler TrustRadius CSM sync. Post-4th of July relationship catch-up before reviewing program status.' },
      { ts: 'Jul 8 · 10:00 AM', csm: 'varun', account: 'Autodesk',
        note: 'Bi-weekly sync — Varun presented product catalog matching analysis showing 90% match rate on 11k products',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun presented a product mapping analysis against Autodesk\'s wishlist of 1,228 products. 11,000 matched with 90% match rate using exact and fuzzy matching. Varun included rebrand tracking (e.g., Agisoft PhotoScan). Trishna Patel asked about 4 specific unmatched products including Bexel added by the India team. Varun to do final validation and share the analysis file.' },
      { ts: 'Jul 8 · 10:30 AM', csm: 'riley', account: 'BMC (TrustRadius)',
        note: 'Monthly TrustRadius sync — review submission status (mostly rejected), geo dashboard review',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley, Augie Buettner, and Katie Allison (BMC) joined Claire Murphy for the monthly TrustRadius sync. Riley walked through recent review submissions — most were rejected in the latest incentive cycle. Geo dashboard update shared. Riley confirmed two were added.' },
      { ts: 'Jul 8 · 11:00 AM', csm: 'riley', account: 'SAP SuccessFactors (TrustRadius)',
        note: 'Progress call — addressed event support email; review reports (SuccessFactors/Workday) in progress with formatting fixes',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley joined Kristin, Cole Arutian, and Mardigan Moffat for the SAP SuccessFactors TrustRadius progress call. Riley addressed an event support email from the prior day. Kristin confirmed two reports are complete; the SuccessFactors/Workday report is being updated with formatting feedback. CX reports renewal came up — funded separately by BU content strategists.' },
      { ts: 'Jul 8 · 12:00 PM', csm: 'rani', account: 'Lenovo',
        note: 'Regular Lenovo HG sync — relationship check-in with Adrian Escobar and Ryan',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Rani joined Adrian Escobar and Ryan for the regular Lenovo HG sync. Call opened with relationship catch-up (Ryan\'s Montana trip) before transitioning to business updates.' },
      { ts: 'Jul 8 · 1:30 PM', csm: 'riley', account: 'Paylocity (TrustRadius)',
        note: 'TrustRadius orientation for Olivia McFadden — new client advocacy hire (week 2), focused on reviews and case studies',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Riley gave a TrustRadius platform overview to Olivia McFadden (Paylocity client advocacy team, week 2). Matt Doyle also joined. Olivia\'s role focuses on case study work and review solicitation. Riley walked through TrustRadius capabilities and the partnership history since 2022.' },
    ],
    pulses: [
      { csm: 'atisha', account: 'IBM (TDS EMEA)', health: 'Concerning' },
      { csm: 'atisha', account: 'Deloitte', health: 'Healthy' },
      { csm: 'riley', account: 'Adobe (TrustRadius)', health: 'Healthy' },
      { csm: 'andy', account: 'SAS Institute', health: 'Healthy' },
      { csm: 'atisha', account: 'Strada Global', health: 'Healthy' },
      { csm: 'riley', account: 'Intuit (TrustRadius)', health: 'Healthy' },
      { csm: 'riley', account: 'ZScaler (TrustRadius)', health: 'Healthy' },
      { csm: 'varun', account: 'Autodesk', health: 'Healthy' },
      { csm: 'riley', account: 'BMC (TrustRadius)', health: 'Healthy' },
      { csm: 'riley', account: 'SAP SuccessFactors (TrustRadius)', health: 'Healthy' },
      { csm: 'rani', account: 'Lenovo', health: 'Healthy' },
      { csm: 'riley', account: 'Paylocity (TrustRadius)', health: 'Healthy' },
    ],
  };
}

function dayMeta_2026_07_08() {
  return {
    pills: [
      ['dot-teal',  '12 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-amber', '3 Expansion'],
      ['dot-green', '12 Pulses'],
      ['dot-grey',  'Wed Jul 8 · 89 scanned'],
    ],
    tabs: ['Overview', 'Calls (12)', 'Pulses (12)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_08() {
  return `<div class="section-label">Team Activity &mdash; Wednesday July 8, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Jul 8 &mdash; 89 recordings scanned</strong> via SFDC SOQL &middot; <strong>12 confirmed calls</strong> across 5 CSMs &middot; 3 expansion signals (Adobe geo dashboard, Strada Global data feed, Autodesk product catalog) &middot; 1 concerning (IBM EMEA intent coverage)
  </div>
  <div style="background:#1c1117;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>IBM (TDS EMEA) &mdash; Concerning:</strong> Montse (IBM) reports near-zero intent signals for European countries when filtering by location. Customer is using HG data for reseller campaign targeting and EMEA coverage is insufficient. Atisha to follow up with workaround guidance.
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
      <div class="csm-account-note">Adobe (geo dashboard early access + expansion) &middot; Intuit (regular sync) &middot; ZScaler (monthly) &middot; BMC (review status) &middot; SAP SF (progress) &middot; Paylocity (new hire intro)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM/TDS EMEA &#128308; (EMEA intent issue) &middot; Deloitte (Data Studio config) &middot; Strada Global &#128994; (data feed expansion)</div>
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
      <div class="csm-account-note">SAS Institute EMEA (weekly sync, M&amp;A tracking Q)</div>
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
      <div class="csm-account-note">Lenovo (regular HG sync)</div>
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
      <div class="csm-account-note">Autodesk (product catalog matching analysis, 90% match rate)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events scheduled &mdash; Veeam recording found but no transcript; Capgemini and Accenture events had no recordings</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; Adobe Monthly Strategic Sync recording found, no transcript synced</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled (Datadog, F5) &mdash; F5 recording found but no transcript</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_08() {
  return `<div style="background:#1c1117;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Concerning &mdash; IBM (TDS EMEA):</strong> Atisha Waghela at 5:30 AM PT. EMEA intent data coverage gap flagged by customer.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Adobe geo dashboard early access + potential new product profiles (Riley) &middot; Strada Global data feed/S3 expansion (Atisha) &middot; Autodesk product catalog analysis 90% match rate (Varun)
  </div>
  <div style="background:#1a2133;border:1px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    <strong>Unconfirmed (no transcript):</strong> Veeam &mdash; Nick Johnson &middot; Adobe Monthly Strategic Sync &mdash; Divyam Dewan &middot; F5 &mdash; Pam Huck
  </div>`;
}

function dayPulsesHTML_2026_07_08() {
  const cards = [
    { csm:'atisha', health:'Concerning', account:'IBM (TDS EMEA)', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 8 &middot; Issue',
      excerpt:'7/8 AW: IBM TDS EMEA customer (Montse) raised EMEA intent coverage issue (5:30 AM PT, 30 min). Near-zero intent results for European countries when filtering by location. Customer using HG data for IBM reseller campaign targeting. Atisha offered workaround guidance for EMEA intent location filter.' },
    { csm:'atisha', health:'Healthy', account:'Deloitte', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 AW: Weekly Deloitte Data Studio sync (6:00 AM PT, 30 min). Reviewed product exclusion list with Rajesh Shetty — application dev tools (Python, TypeScript) confirmed as clean products. SPC for Excel miscategorization flagged for remapping.' },
    { csm:'riley', health:'Healthy', account:'Adobe (TrustRadius)', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 8 &middot; Mixed',
      excerpt:'7/8 RR: TrustRadius Adobe success call (7:30 AM PT, 30 min). Demoed geo dashboard early access (general rollout Jul 15). Customer wrapping current initiative phase; next phase may include additional product profiles. Expansion opportunity flagged.' },
    { csm:'andy', health:'Healthy', account:'SAS Institute', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 AL: SAS Institute EMEA weekly sync (8:30 AM PT, 30 min). Customer raised M&A tracking question — whether HG can surface new acquisitions rolled up to global accounts. Andy explained hierarchy maintenance process and customer flagging workflow.' },
    { csm:'atisha', health:'Healthy', account:'Strada Global', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 8 &middot; Expansion',
      excerpt:'7/8 AW: Strada Global expansion discussion (9:30 AM PT, 30 min). Data feed (S3) integration back on table — data scientist Nyla used HG via S3 at prior company and initiated ask. Deferred from last renewal; now moving forward to migrate Strada to data feed delivery model.' },
    { csm:'riley', health:'Healthy', account:'Intuit (TrustRadius)', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 RR: Regular Intuit TrustRadius CSM sync with Andrew Lum (9:30 AM PT, 30 min). Established relationship cadence maintained. Post-4th of July check-in.' },
    { csm:'riley', health:'Healthy', account:'ZScaler (TrustRadius)', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 RR: ZScaler TrustRadius monthly sync (10:00 AM PT, 30 min). Full team present — Vivian Chan, Josh Mercer, Scott Stater, Andrea Fong, Sarah Gamino, Tiffani Nichols. Post-holiday relationship check-in.' },
    { csm:'varun', health:'Healthy', account:'Autodesk', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 8 &middot; Expansion',
      excerpt:'7/8 VT: Autodesk bi-weekly sync (10:00 AM PT, 30 min). Varun presented product catalog matching analysis — 90% match rate on 11k products with exact+fuzzy matching and rebrand tracking. Trishna asked about 4 unmatched products (incl. Bexel). Varun to validate and share file.' },
    { csm:'riley', health:'Healthy', account:'BMC (TrustRadius)', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 RR: BMC TrustRadius monthly sync (10:30 AM PT, 30 min). Review submission status reviewed — most recent rejections noted. Geo dashboard update shared with Katie Allison and Claire Murphy. Two new reviews confirmed added.' },
    { csm:'riley', health:'Healthy', account:'SAP SuccessFactors (TrustRadius)', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 RR: SAP SuccessFactors TrustRadius progress call (11:00 AM PT, 30 min). Event support email addressed with Kristin and Cole Arutian. Review reports in progress — SuccessFactors/Workday report getting formatting fixes. CX reports renewal noted.' },
    { csm:'rani', health:'Healthy', account:'Lenovo', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 RG: Regular Lenovo HG sync with Adrian Escobar and Ryan (12:00 PM PT, 30 min). Relationship-first cadence with business review. Montana trip discussion noted.' },
    { csm:'riley', health:'Healthy', account:'Paylocity (TrustRadius)', opp:'Vitally Pulse &mdash; Jul 8 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 8 &middot; Check-in',
      excerpt:'7/8 RR: TrustRadius platform overview for Olivia McFadden — new Paylocity client advocacy hire (week 2) (1:30 PM PT, 30 min). Matt Doyle also present. Olivia\'s role: case study and review solicitation. Platform capabilities and partnership history (since 2022) covered.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><div style="font-weight:600;font-size:13px;">${c.account}</div><div style="font-size:11px;color:#94a3b8;">${c.opp}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_08() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0708-1') ? 'done' : ''}" data-csm="atisha" id="action-0708-1">
      <div class="action-checkbox ${doneActions.has('0708-1') ? 'checked' : ''}" onclick="toggleAction('0708-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; IBM (TDS EMEA) &mdash; Address EMEA Intent Coverage Gap with Montse</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Atisha Waghela &middot; Montse reported near-zero intent signals for European countries. Atisha committed to sharing a workaround for the intent location filter. Follow up with specific EMEA coverage guidance and confirm whether the customer&#39;s target countries (Spain, Europe) are supported at the resolution needed for their reseller campaign use case.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0708-2') ? 'done' : ''}" data-csm="atisha" id="action-0708-2">
      <div class="action-checkbox ${doneActions.has('0708-2') ? 'checked' : ''}" onclick="toggleAction('0708-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Strada Global &mdash; Advance Data Feed (S3) Expansion Conversation</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Atisha Waghela &middot; Data feed expansion was deferred from the last renewal and is now active. Nyla (data scientist) is the technical champion. Connect Nyla and Dominic with the HG data delivery team to scope the S3 migration, establish a timeline, and confirm whether this expands the contract value ahead of the 2027 renewal.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0708-3') ? 'done' : ''}" data-csm="varun" id="action-0708-3">
      <div class="action-checkbox ${doneActions.has('0708-3') ? 'checked' : ''}" onclick="toggleAction('0708-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; Autodesk &mdash; Share Product Catalog Matching Analysis with Trishna Patel</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Varun Tiwari &middot; Varun presented the 90% match rate analysis on the call and committed to sharing the file after final validation. Validate the 4 unmatched products (Bexel + 3 from India team), add them to the sheet, and send to Trishna and Ola today.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0708-4') ? 'done' : ''}" data-csm="riley" id="action-0708-4">
      <div class="action-checkbox ${doneActions.has('0708-4') ? 'checked' : ''}" onclick="toggleAction('0708-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Adobe (TrustRadius) &mdash; Follow Up on Next Phase Additional Product Profiles</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; Allyson mentioned the team is working on a next phase that may include additional product profiles/copy on TrustRadius. Now that the geo dashboard has been demoed (early access), send Allyson a note to confirm when the next phase product additions will be scoped so TrustRadius can plan for the profile updates.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0708-5') ? 'done' : ''}" data-csm="riley" id="action-0708-5">
      <div class="action-checkbox ${doneActions.has('0708-5') ? 'checked' : ''}" onclick="toggleAction('0708-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E7; SAP SuccessFactors &mdash; Respond to Event Support Email and Clarify CX Reports Renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; Riley acknowledged the event support email on the call. Send a formal response addressing the event support request. Separately, connect with Kristin and Cole to understand the CX reports renewal scope (noted as funded by BU content strategists) before it overlaps with the 7/27 bridge deadline.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0708-6') ? 'done' : ''}" data-csm="riley" id="action-0708-6">
      <div class="action-checkbox ${doneActions.has('0708-6') ? 'checked' : ''}" onclick="toggleAction('0708-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F44B; Paylocity &mdash; Send Olivia McFadden Post-Call TrustRadius Resource Packet</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Riley Rogers &middot; Olivia is new (week 2) and getting up to speed on TrustRadius. Send a brief follow-up email with links to TrustRadius review management resources, the review campaign playbook, and the case study submission process so she has reference materials as she ramps up.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ============================================================
// July 9, 2026
// ============================================================

function dayData_2026_07_09() {
  return {
    calls: [
      { ts: 'Jul 9 · 7:30 AM', csm: 'varun', account: 'MongoDB',
        note: 'Credit pool exceeded — MongoDB at 315K+ credits vs 300K limit (since May). Two options proposed (early renewal or freeze installs). Decision deferred to Ziad (PTO until mid-Aug); renewal October.',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'MongoDB has exceeded its 300K credit pool (now 315K+, overrun since May). Varun walked Will Bracken through the overrun and proposed two options: (a) early renewal, or (b) freeze incremental installs. Key stakeholder Ziad is on PTO until mid-August; October renewal deadline creates urgency.' },
      { ts: 'Jul 9 · 8:00 AM', csm: 'divyam', account: 'Sage',
        note: 'Recurring cadence sync — reviewed June AI Geo Report and TrustRadius campaign performance. Cadence moving to monthly at customer request. Next meeting August 13.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam reviewed the June AI Geo Report results with Brock (Sage) and discussed TrustRadius campaign performance. Sage requested reducing cadence from bi-weekly to monthly. Next meeting August 13.' },
      { ts: 'Jul 9 · 9:00 AM', csm: 'atisha', account: 'RSM US',
        note: 'Weekly sync — MCP adoption pending (Aaron not onboarded); J&J account brief in progress; dashboard fixes needed (Duke taking over).',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha reviewed RSM MCP adoption status (Aaron not started), J&J account brief progress, dashboard fixes (predecessor-built, Duke taking over). Atisha asked Ben to push Aaron for account list; Christian out all week.' },
      { ts: 'Jul 9 · 11:00 AM', csm: 'riley', account: 'SAP (Ariba+Fieldglass)',
        note: 'TrustRadius Geo Dashboard walkthrough (AI visibility). SAP 2027 renewal progressing through budget reorg; 3 profile updates pending; Ashleigh inherited 3 more.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley walked Ashleigh Riehl through TrustRadius Geo Dashboard (AI visibility: TR mentions, citation rates, sentiment scores). SAP 2027 renewal progressing through Alejandro amid internal budget reorg. 3 profile updates pending + 3 inherited.' },
      { ts: 'Jul 9 · 1:00 PM', csm: 'rani', account: 'Workday',
        note: 'Renewal discussion — primary contact Alexandra absent. Brief call with Cole Arutian and Mardigan Moffat; renewal follow-up email needed.',
        mins: 45, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Rani met with Cole Arutian and Mardigan Moffat (Workday) for renewal discussion, but primary contact Alexandra did not join. Cole and Rani planned follow-up note. SKO venue (Santa Barbara Hilton) briefly mentioned. Rani removed automatic notetaker.' },
      { ts: 'Jul 9 · 1:30 PM', csm: 'rani', account: 'GTM Fabric',
        note: 'CONCERNING: Steve (NetApp champion) leaving July 18. Budget cuts eliminated propensity analytics at NetApp. Opt-out clause in deal tied to coverage thresholds. Account at risk.',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Steve revealed he is leaving NetApp on July 18. New CCO leadership cut propensity data/analytics budget, eliminating Steve\'s function. Work transitions to Gabriel (Sales Ops) and Buren\'s team. Deal contains opt-out clause tied to coverage thresholds — flagged as risk by Rani. Steve exploring GTMFabric/independent opportunities.' },
    ],
    pulses: [
      { csm: 'rani', account: 'GTM Fabric', health: 'Concerning',
        note: 'Key champion Steve leaving July 18. NetApp budget cuts eliminated propensity analytics function. Opt-out clause risk flagged. Immediate escalation needed.' },
      { csm: 'varun', account: 'MongoDB', health: 'Concerning',
        note: 'Credit pool exceeded (315K+ vs 300K). Two resolution options tabled. Decision deferred to Ziad (back mid-Aug). October renewal window at risk.' },
      { csm: 'divyam', account: 'Sage', health: 'Healthy',
        note: 'June AI Geo Report reviewed. Cadence moving to monthly. TrustRadius campaign performing well. Next meeting August 13.' },
      { csm: 'atisha', account: 'RSM US', health: 'Healthy',
        note: 'MCP adoption pending for Aaron. Dashboard fixes underway (Duke). J&J account brief in progress.' },
      { csm: 'riley', account: 'SAP (Ariba+Fieldglass)', health: 'Healthy',
        note: 'Geo Dashboard walkthrough completed. Renewal progressing through SAP budget reorg. 3 profile updates pending + 3 inherited.' },
      { csm: 'rani', account: 'Workday', health: 'Healthy',
        note: 'Renewal discussion — Alexandra absent. Follow-up email needed to Cole/Mardigan.' },
    ],
  };
}

function dayMeta_2026_07_09() {
  return {
    pills: [
      ['dot-teal', '6 Calls'],
      ['dot-red',  '2 Concerning'],
      ['dot-green','6 Pulses'],
      ['dot-grey', 'Wed Jul 9 · 60 scanned'],
    ],
    tabs: ['Overview', 'Calls (6)', 'Pulses (6)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_09() {
  return `<div class="section-label">Team Activity &mdash; Wednesday July 9, 2026</div>
  <div style="background:#1c1f26;border:1px solid #334155;border-left:3px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#94a3b8;">
    &#x1F4C5; <strong>Wednesday Jul 9 &mdash; 60 recordings scanned</strong> via SFDC SOQL &middot; <strong>6 confirmed calls</strong> across 5 CSMs &middot; 2 concerning signals (GTM Fabric champion departure, MongoDB credit overrun)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#fca5a5;">
    &#x1F6A8; <strong>GTM Fabric (Rani Guy) &mdash; URGENT:</strong> Steve (NetApp champion via GTM Fabric) confirmed departing July 18. New CCO budget cuts eliminated propensity analytics function. Deal has opt-out clause tied to coverage thresholds. Escalate to leadership before July 18.
  </div>
  <div style="background:#1c1117;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>MongoDB (Varun Tiwari) &mdash; Concerning:</strong> 315K+ credits consumed vs 300K pool (overrun since May). Key decision-maker Ziad on PTO until mid-August. October renewal at risk without early alignment on resolution path.
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
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP (Ariba+Fieldglass) &mdash; Geo Dashboard walkthrough; 2027 renewal in progress</div>
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
      <div class="csm-account-note">Sage &mdash; AI Geo Report reviewed; cadence to monthly; next Aug 13</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">75m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">GTM Fabric &#128308; (Steve departure, opt-out risk) &middot; Workday &#128994; (renewal, Alexandra absent)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">MongoDB &#128308; (315K+ credits vs 300K pool; Ziad on PTO; Oct renewal)</div>
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
      <div class="csm-account-note">RSM US &mdash; weekly sync; MCP adoption pending; J&amp;J brief in progress</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled &mdash; Infinigate (no recording found); Sage biweekly (no confirmed recording with transcript)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; Oracle NetSuite TrustRadius Sync (no confirmed transcript)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled &mdash; Evapure (recording exists, no transcript &mdash; unconfirmed); Sage biweekly (no recording found)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_09() {
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F6A8; <strong>URGENT &mdash; GTM Fabric (Rani Guy):</strong> Steve (NetApp champion) leaving July 18. Opt-out clause risk. Escalate immediately.
  </div>
  <div style="background:#1c1117;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>MongoDB (Varun Tiwari) &mdash; Concerning:</strong> 315K+ credits vs 300K pool. Ziad on PTO until mid-August. October renewal at risk.
  </div>
  <div style="background:#1a2133;border:1px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    <strong>Internal (excluded):</strong> Safaricom &mdash; Divyam Dewan + AM Angus Hyams only (customer no-show) &nbsp;|&nbsp; <strong>Unconfirmed (no transcript):</strong> Evapure &mdash; Andy Lim
  </div>`;
}

function dayPulsesHTML_2026_07_09() {
  const cards = [
    { csm:'rani', health:'Concerning', account:'GTM Fabric', opp:'Vitally Pulse &mdash; Jul 9 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 9 &middot; Issue',
      excerpt:'7/9 RG: Steve (NetApp/GTMFabric champion) departing July 18 (1:30 PM PT, 30 min). New CCO cut propensity analytics budget at NetApp. Work transitions to Gabriel/Buren\'s team. Deal opt-out clause tied to coverage thresholds. Escalation required before July 18.' },
    { csm:'varun', health:'Concerning', account:'MongoDB', opp:'Vitally Pulse &mdash; Jul 9 Call',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 9 &middot; Issue',
      excerpt:'7/9 VT: Credit pool exceeded &mdash; 315K+ vs 300K limit (7:30 AM PT, 30 min). Overrun since May. Early renewal or freeze installs proposed to Will Bracken. Ziad on PTO until mid-August. October renewal at risk without early alignment.' },
    { csm:'divyam', health:'Healthy', account:'Sage', opp:'Vitally Pulse &mdash; Jul 9 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 9 &middot; Check-in',
      excerpt:'7/9 DD: June AI Geo Report reviewed with Brock (8:00 AM PT, 30 min). Sage requested monthly cadence (from bi-weekly). TrustRadius campaign performing well; new list deployed. Next sync August 13.' },
    { csm:'atisha', health:'Healthy', account:'RSM US', opp:'Vitally Pulse &mdash; Jul 9 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 9 &middot; Check-in',
      excerpt:'7/9 AW: Weekly RSM sync (9:00 AM PT, 30 min). MCP adoption pending for Aaron &mdash; Ben to nudge for account list. J&J account brief in progress. Dashboard fixes: Duke taking over from predecessor. Christian out all week.' },
    { csm:'riley', health:'Healthy', account:'SAP (Ariba+Fieldglass)', opp:'Vitally Pulse &mdash; Jul 9 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 9 &middot; Check-in',
      excerpt:'7/9 RR: Geo Dashboard walkthrough with Ashleigh Riehl (11:00 AM PT, 30 min). AI visibility metrics: TR mentions, citation rates, sentiment by region. 2027 renewal progressing through Alejandro amid SAP budget reorg. 3 profile updates pending + 3 inherited.' },
    { csm:'rani', health:'Healthy', account:'Workday', opp:'Vitally Pulse &mdash; Jul 9 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 9 &middot; Mixed',
      excerpt:'7/9 RG: Renewal call with Cole Arutian and Mardigan Moffat (1:00 PM PT, 45 min). Primary contact Alexandra Wilson absent. Rani and Cole to send Alexandra follow-up note on renewal next steps.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><div style="font-weight:600;font-size:13px;">${c.account}</div><div style="font-size:11px;color:#94a3b8;">${c.opp}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_09() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0709-1') ? 'done' : ''}" data-csm="rani" id="action-0709-1">
      <div class="action-checkbox ${doneActions.has('0709-1') ? 'checked' : ''}" onclick="toggleAction('0709-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; GTM Fabric &mdash; Escalate Steve departure &amp; opt-out clause risk to leadership</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy &middot; Steve leaves NetApp July 18. Review the opt-out clause; identify successors (Gabriel &mdash; Sales Ops, Buren&apos;s team). Flag to VP CS before Steve&apos;s last day. Confirm whether coverage thresholds are at risk and what remediation options exist.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0709-2') ? 'done' : ''}" data-csm="varun" id="action-0709-2">
      <div class="action-checkbox ${doneActions.has('0709-2') ? 'checked' : ''}" onclick="toggleAction('0709-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; MongoDB &mdash; Prepare credit resolution brief; align with Ziad before October renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Varun Tiwari &middot; 315K+ vs 300K credit pool (overrun since May). Ziad on PTO until mid-August. Draft options brief (early renewal vs freeze installs) with finance/PM input now &mdash; don&apos;t wait until August.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0709-3') ? 'done' : ''}" data-csm="rani" id="action-0709-3">
      <div class="action-checkbox ${doneActions.has('0709-3') ? 'checked' : ''}" onclick="toggleAction('0709-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E7; Workday &mdash; Send renewal follow-up to Alexandra Wilson</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; Alexandra did not attend the July 9 renewal call. Send her a summary note (Cole Arutian and Mardigan Moffat in CC) covering what was discussed and the renewal next steps.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0709-4') ? 'done' : ''}" data-csm="atisha" id="action-0709-4">
      <div class="action-checkbox ${doneActions.has('0709-4') ? 'checked' : ''}" onclick="toggleAction('0709-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4BB; RSM &mdash; Push MCP adoption for Aaron; reconnect with Christian next week</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Atisha Waghela &middot; Confirm Ben nudged Aaron on account list and MCP setup. Christian returns next week &mdash; reconnect to check dashboard fixes (Duke) and J&amp;J account brief progress.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0709-5') ? 'done' : ''}" data-csm="riley" id="action-0709-5">
      <div class="action-checkbox ${doneActions.has('0709-5') ? 'checked' : ''}" onclick="toggleAction('0709-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAP (Ariba+Fieldglass) &mdash; Send 3+3 pending profile updates; follow up with Alejandro on 2027 renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; 3 original profile updates pending + 3 inherited by Ashleigh. Complete and send. Loop in Alejandro on 2027 renewal approval progress through SAP&apos;s internal budget reorg.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0709-6') ? 'done' : ''}" data-csm="divyam" id="action-0709-6">
      <div class="action-checkbox ${doneActions.has('0709-6') ? 'checked' : ''}" onclick="toggleAction('0709-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C5; Sage &mdash; Confirm August 13 meeting; share June AI Geo Report summary</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Divyam Dewan &middot; Send calendar invite for August 13 monthly sync and share the June AI Geo Report + TrustRadius campaign summary to Brock ahead of the meeting.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ============================================================
// July 10, 2026
// ============================================================

function dayData_2026_07_10() {
  return {
    calls: [
      { ts: 'Jul 10 · 4:00 AM', csm: 'andy', account: 'SAS Institute',
        note: 'Commercial discussion on upcoming December renewal — customer exploring trade-off of read-only licenses for access licenses; senior-level visibility confirmed by Jasper.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Andy and Augie met with the SAS customer to map the commercial path for the December renewal. The customer wants to trade off ~90 read-only licenses for access licenses, citing low field uptake on current seats. Senior stakeholders (Jasper, Mike Turner) are enthusiastic about HG content for segmentation and AE prospecting. Andy probing on whether a partial trade-off is viable; usage data pull needed.' },
      { ts: 'Jul 10 · 7:30 AM', csm: 'rani', account: 'Hewlett Packard Enterprise',
        note: 'ERD data walk-through and V2 migration planning — HPE Databricks team introduced; Rani and Alexi coordinating on migration strategy.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Rani orchestrated a dual-agenda session with HPE: (1) ERD data walk-through led by Alexi Mouarkach for the HPE data team including new Databricks contact Maximiliano Fonseca, who ingests HG data into HPE\'s Databricks environment; (2) laying groundwork for V2 migration, with Tracy York handling the commercial/migration conversation separately. HG is strategizing on how to guide HPE toward V2 without an abrupt pitch.' },
      { ts: 'Jul 10 · 8:00 AM', csm: 'pam', account: 'Cisco',
        note: 'TrustRadius renewal sync — Cisco cutting FY27 VoC budget (millions → ~$800K) and consolidating TR contract into PureSpot via Splunk/Security. Mardigan to prepare reduced-scope counter-proposal (7–10 core products) for Jul 17.',
        mins: 40, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Mellissa Jensen disclosed FY27 budget reduction: VoC spend dropping from millions to ~$800K (not yet confirmed). Cisco is consolidating review contracts with Splunk/Security into PureSpot, which offers long-form conversational interview reviews and built-in AI content repurposing. Mardigan challenged the switch (crawl data value, trusted reviews, 500 event reviews at Cisco Live). James Tudway explored a separate HG intent/technographic data opportunity with Venkat. Mardigan to prepare reduced-scope proposal (7–10 core products) by Jul 17 call. Pam was present in a supportive role.' },
      { ts: 'Jul 10 · 9:00 AM', csm: 'varun', account: 'Zendesk',
        note: 'Bi-weekly sync — new AM Charles Hawkins (ex-MadKudu) introduced; MCP trial access pitched; Zendesk\'s field account-snapshot automation shown.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Varun introduced Charles Hawkins (replacing Ravi, came from MadKudu acquisition) to Rodrigo Gomez and Stephen Micek. Varun offered MCP trial enrollment and demoed a retail industry landscape report built with MCP. Stephen asked about future cost; Varun clarified it is not in the current order form but positioned the trial as a value demonstration. Rodrigo shared progress on an account-snapshot automation project using HG Insights data.' },
      { ts: 'Jul 10 · 9:30 AM', csm: 'rani', account: 'Hitachi',
        note: 'Recurring sync — renewal alignment: intent (end of Sept) + core (mid-Oct); 3-year partnership proposal in development; FAI+contact data positioned as future expansion.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Rani and Adrian Escobar synced with Miguel Ortega on Hitachi\'s upcoming dual renewal: intent module (end of September) and core (mid-October). Anders returns next week and Adrian will discuss renewal alignment. Rani is working toward a 3-year partnership proposal. Sales Copilot enablement sessions had mixed energy. FAI + contact data positioned as future expansion anchor once generally available.' },
      { ts: 'Jul 10 · 10:30 AM', csm: 'atisha', account: 'Intel',
        note: 'Stakeholder transition — Ryan Melton introduced as new primary Intel contact for ongoing AI agents project; platform training for Ryan planned.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha brought in the full HG team (Adrian Escobar, Fernanda Oliveira) to introduce Ryan Melton as Intel\'s new primary stakeholder. Fernanda explained the ongoing AI agents project that relies on HG IT spending data. Ryan needs platform training from Atisha. Fernanda requested switching recurring meetings to Teams for easier transcript access on Intel\'s end.' },
    ],
    pulses: [
      { csm: 'andy', account: 'SAS Institute', health: 'Healthy',
        note: 'December renewal commercial scoping — customer wants to trade read-only seats for access licenses; senior visibility confirmed. Andy to share usage data and explore partial trade-off structure.' },
      { csm: 'rani', account: 'Hewlett Packard Enterprise', health: 'Healthy',
        note: 'ERD data walk-through completed with Databricks team; V2 migration strategy being developed in parallel. Tracy York leading commercial track.' },
      { csm: 'pam', account: 'Cisco', health: 'Concerning',
        note: 'FY27 VoC budget cut (millions → ~$800K) driving Cisco to consolidate TrustRadius contract into PureSpot via Splunk/Security. Mardigan preparing reduced-scope counter-proposal (7–10 core products) for Jul 17 call. Churn risk — needs escalation.' },
      { csm: 'varun', account: 'Zendesk', health: 'Healthy',
        note: 'MCP trial access pitched and welcomed; Zendesk is building field account-snapshot automation using HG Insights data. New AM Charles Hawkins (ex-MadKudu) onboarded.' },
      { csm: 'rani', account: 'Hitachi', health: 'Healthy',
        note: 'Intent renewal (Sept) + core renewal (Oct) alignment discussion initiated; 3-year partnership proposal in development. FAI + contact data positioned as future expansion.' },
      { csm: 'atisha', account: 'Intel', health: 'Healthy',
        note: 'Ryan Melton introduced as new primary Intel contact; platform training scheduled. AI agents project ongoing, dependent on HG IT spending data downloads.' },
    ],
  };
}

function dayMeta_2026_07_10() {
  return {
    pills: [
      ['dot-teal',   '6 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '3 Expansion'],
      ['dot-green',  '6 Pulses'],
      ['dot-grey',   'Fri Jul 10 · 41 scanned'],
    ],
    tabs: ['Overview', 'Calls (6)', 'Pulses (6)', 'Action Items (8)'],
  };
}

function dayOverviewHTML_2026_07_10() {
  return `<div class="section-label">Team Activity &mdash; Friday July 10, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Jul 10 &mdash; 41 recordings scanned</strong> via SFDC SOQL &middot; <strong>6 confirmed calls</strong> across 5 CSMs &middot; 3 expansion signals (SAS renewal, HPE V2, Zendesk MCP) &middot; Hitachi dual renewal (Sept intent + Oct core) in active discussion
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F6A8; <strong>Cisco (Pam Huck) &mdash; URGENT:</strong> Mellissa Jensen confirmed FY27 VoC budget cut (millions &rarr; ~$800K). Cisco consolidating TrustRadius into PureSpot via Splunk/Security. Mardigan to prepare reduced-scope counter-proposal (7&ndash;10 core products) before Jul 17. Escalate churn risk to leadership.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">55m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">HPE (ERD + V2 migration strategy) &middot; Hitachi (dual renewal alignment Sept/Oct)</div>
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
      <div class="csm-account-note">Intel (stakeholder transition &mdash; Ryan Melton introduced as new primary contact)</div>
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
      <div class="csm-account-note">Zendesk (bi-weekly sync &mdash; MCP trial pitched, new AM Charles Hawkins onboarded)</div>
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
      <div class="csm-account-note">SAS Institute (commercial discussion &mdash; Dec renewal license trade-off)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No events or recordings detected for this date</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Infor debrief, Intuit contacts+scoring) &mdash; no CSM speaker confirmed in transcripts</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Thomson Reuters no transcript, Quadient no recording) &mdash; unconfirmed</div>
    </div>

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge" style="background:#dc2626;">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">40m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">&#128308; Cisco &mdash; FY27 VoC budget cut (millions &rarr; ~$800K); consolidating TR into PureSpot; Jul 17 counter-proposal deadline</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_10() {
  return `<div style="background:#1c2333;border:1px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4CA; Call data is auto-rendered from dayData. 4 unconfirmed (no transcript): Thomson Reuters (Divyam 8 AM), Google (Rani 10 AM), Apple Weekly Syncup (Atisha 11 AM), Workday renewal (Rani 12 PM).
  </div>`;
}

function dayPulsesHTML_2026_07_10() {
  const cards = [
    { csm: 'pam', health: 'Concerning', account: 'Cisco',
      opp: 'Vitally Pulse &mdash; Jul 10 Call &#x1F534;',
      arr: 'Enterprise &middot; Pam Huck',
      csmlbl: 'Pam Huck',
      change: 'Jul 10 &middot; TR renewal risk',
      excerpt: 'Jul 10 PH: TrustRadius renewal sync (8:00 AM PT, 40 min). Mellissa Jensen: FY27 VoC budget cut millions → ~$800K. Consolidating TR contract into PureSpot via Splunk/Security org. Mardigan preparing reduced-scope counter-proposal (7–10 core products) for Jul 17. Churn risk — escalate.' },
    { csm: 'andy', health: 'Healthy', account: 'SAS Institute',
      opp: 'Vitally Pulse &mdash; Jul 10 Call',
      arr: 'Enterprise &middot; Andy Lim',
      csmlbl: 'Andy Lim',
      change: 'Jul 10 &middot; Commercial sync',
      excerpt: 'Jul 10 AL: December renewal scoping (4:00 AM PT, 30 min). Customer wants to trade ~90 read-only licenses for access licenses; senior visibility confirmed (Jasper, Mike Turner). Andy to pull usage data and explore partial trade-off structure.' },
    { csm: 'rani', health: 'Healthy', account: 'Hewlett Packard Enterprise',
      opp: 'Vitally Pulse &mdash; Jul 10 Call',
      arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy',
      change: 'Jul 10 &middot; ERD + V2 strategy',
      excerpt: 'Jul 10 RG: ERD data walkthrough + V2 migration planning (7:30 AM PT, 30 min). Databricks contact Max Fonseca introduced. Tracy York handling commercial/migration track separately. Phased V2 pitch strategy being developed.' },
    { csm: 'varun', health: 'Healthy', account: 'Zendesk',
      opp: 'Vitally Pulse &mdash; Jul 10 Call',
      arr: 'Enterprise &middot; Varun Tiwari',
      csmlbl: 'Varun Tiwari',
      change: 'Jul 10 &middot; Bi-weekly sync',
      excerpt: 'Jul 10 VT: Bi-weekly sync (9:00 AM PT, 30 min). New AM Charles Hawkins (ex-MadKudu) introduced. MCP trial pitched; Rodrigo building account-snapshot automation with HG data. Stephen asked about future MCP cost.' },
    { csm: 'rani', health: 'Healthy', account: 'Hitachi',
      opp: 'Vitally Pulse &mdash; Jul 10 Call',
      arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy',
      change: 'Jul 10 &middot; Renewal alignment',
      excerpt: 'Jul 10 RG: Recurring sync (9:30 AM PT, 30 min). Intent renewal end-Sept + core mid-Oct. Anders returns next week. 3-year partnership proposal in development. FAI + contact data as future expansion anchor once GA.' },
    { csm: 'atisha', health: 'Healthy', account: 'Intel',
      opp: 'Vitally Pulse &mdash; Jul 10 Call',
      arr: 'Enterprise &middot; Atisha Waghela',
      csmlbl: 'Atisha Waghela',
      change: 'Jul 10 &middot; Stakeholder intro',
      excerpt: 'Jul 10 AW: Stakeholder transition (10:30 AM PT, 30 min). Ryan Melton introduced as new primary Intel contact for AI agents project. Platform training needed. Recurring sync to move to Teams per Fernanda Oliveira.' },
  ];
  const bc = h => h === 'Healthy' ? 'badge-healthy' : h === 'Concerning' ? 'badge-concerning' : 'badge-poor';
  const bi = h => h === 'Healthy' ? '&#128994;' : h === 'Concerning' ? '&#128993;' : '&#128308;';
  return `<div class="pulse-grid">${cards.map(c => `
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><div class="pulse-account">${c.account}</div><div class="pulse-opp">${c.opp}</div></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_10() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0710-1') ? 'done' : ''}" data-csm="andy" id="action-0710-1">
      <div class="action-checkbox ${doneActions.has('0710-1') ? 'checked' : ''}" onclick="toggleAction('0710-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4B0; SAS Institute &mdash; Pull license usage data; prepare trade-off proposal for December renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Andy Lim &middot; Customer wants to trade ~90 read-only licenses for access licenses. Pull current usage stats. Draft partial trade-off options with commercial framing to share ahead of the Dec renewal negotiation. Confirm senior stakeholder names (Jasper, Mike Turner) in SFDC.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0710-2') ? 'done' : ''}" data-csm="rani" id="action-0710-2">
      <div class="action-checkbox ${doneActions.has('0710-2') ? 'checked' : ''}" onclick="toggleAction('0710-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F504; HPE &mdash; Align Alexi and Tracy York on phased V2 migration pitch strategy</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy &middot; ERD walkthrough completed. Now coordinate with Alexi Mouarkach and Tracy York on the V2 migration approach for HPE. Build the case by exploring their current pain points first. Set agenda for next HPE sync. Max Fonseca (Databricks) is the key technical contact.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0710-3') ? 'done' : ''}" data-csm="rani" id="action-0710-3">
      <div class="action-checkbox ${doneActions.has('0710-3') ? 'checked' : ''}" onclick="toggleAction('0710-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C5; Hitachi &mdash; Schedule Anders renewal discussion to align Sept intent + Oct core into 3-year proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy / Adrian Escobar &middot; Anders returns next week. Schedule meeting to discuss aligning intent (end-Sept) and core (mid-Oct) renewals. Prepare the 3-year partnership proposal. FAI + contact data as future expansion pitch once GA. Renew context before pitch.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0710-4') ? 'done' : ''}" data-csm="varun" id="action-0710-4">
      <div class="action-checkbox ${doneActions.has('0710-4') ? 'checked' : ''}" onclick="toggleAction('0710-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F916; Zendesk &mdash; Send MCP trial enrollment links and retail landscape report</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; Follow through on MCP trial offer — send enrollment links and the retail industry landscape report to Rodrigo Gomez and Stephen Micek. Address Stephen's cost question proactively. Confirm trial duration and define success metrics for the trial period.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0710-5') ? 'done' : ''}" data-csm="atisha" id="action-0710-5">
      <div class="action-checkbox ${doneActions.has('0710-5') ? 'checked' : ''}" onclick="toggleAction('0710-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4BB; Intel &mdash; Set up Teams recurring invite for Ryan Melton; schedule platform training</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Atisha Waghela &middot; Ryan Melton is the new primary Intel stakeholder for the AI agents project. Switch recurring sync to Teams (Fernanda Oliveira's request for transcript access). Schedule a dedicated HG platform training session for Ryan covering IT spending data, filters, and AI spend categories.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0710-6') ? 'done' : ''}" data-csm="divyam" id="action-0710-6">
      <div class="action-checkbox ${doneActions.has('0710-6') ? 'checked' : ''}" onclick="toggleAction('0710-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Divyam &mdash; Verify Thomson Reuters + Quadient meetings; capture notes in Vitally</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Divyam Dewan &middot; Thomson Reuters Partnership Review (8 AM PT) had a recording but no transcript synced — flag Weflow sync issue. Quadient Bi-Weekly Sync had an SFDC event but no recording. Confirm both meetings occurred and log outcomes in Vitally. Report any blockers to Yuan.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0710-7') ? 'done' : ''}" data-csm="nick" id="action-0710-7">
      <div class="action-checkbox ${doneActions.has('0710-7') ? 'checked' : ''}" onclick="toggleAction('0710-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x2753; Nick Johnson &mdash; Clarify Intuit call attendance; verify Infor debrief outcomes</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Nick Johnson &middot; Intuit recording (8:30 AM) shows Hayden Smith (HG Insights) led the session — confirm whether Nick attended or Hayden covered. Capture Intuit session outcomes in SFDC/Vitally. Also verify Infor debrief (5 AM PT) — CSM event existed but no recording matched.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0710-8') ? 'done' : ''}" data-csm="pam" id="action-0710-8">
      <div class="action-checkbox ${doneActions.has('0710-8') ? 'checked' : ''}" onclick="toggleAction('0710-8')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; Cisco (Pam Huck) &mdash; URGENT: Prepare reduced-scope TR counter-proposal for Jul 17; flag churn risk to leadership</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Pam Huck / Mardigan Moffat / James Tudway &middot; Mellissa Jensen confirmed FY27 VoC budget cut (millions &rarr; ~$800K) and intent to consolidate TrustRadius into PureSpot via Splunk/Security contract. Mardigan to prepare reduced-scope proposal (7&ndash;10 core products) prioritizing crawl data value, trusted reviews, and event review collection. Separately, James Tudway to advance intent data discussion with Venkat. Deadline: before Jul 17 budget meeting. Escalate to leadership.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}
