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
      { ts: 'Jul 7 · 5:15 AM', csm: 'andy', account: 'Zycus',
        note: 'SF connector onboarding — segment creation demo, CRM enrichment config. Platform upload bug escalated; managed package install pending.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Andy walked Puneet Singh and Ishwarya (SF admin) through segment creation via CSV upload and CRM enrichment configuration (products, IT spend). A platform upload bug was escalated to support. Managed package (HG Salesforce object) install pending before next session.' },
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
      ['dot-teal',   '15 Calls'],
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
      <span class="call-badge">2 CALLS</span>
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
      { ts: 'Jul 8 · 7:30 AM', csm: 'andy', account: 'Cockroach Labs',
        note: 'Regular sync — no transcript. Recording exists in Weflow but speaker not verified.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Unknown', purpose: 'Check-in',
        detail: 'No transcript synced — Andy Lim speaker presence cannot be confirmed. Inferred from Weflow recording linked to CSM calendar event.' },
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
      ['dot-teal',  '13 Calls'],
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
      <span class="call-badge">2 CALLS</span>
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
      { ts: 'Jul 9 · 4:30 AM', csm: 'andy', account: 'Evapure',
        note: 'Bi-weekly sync — no transcript. Recording exists in Weflow but speaker not verified.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Unknown', purpose: 'Check-in',
        detail: 'No transcript synced — Andy Lim speaker presence cannot be confirmed. Inferred from Weflow recording linked to CSM calendar event.' },
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
      ['dot-teal', '7 Calls'],
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
      <span class="call-badge">1 CALL</span>
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

// ─── July 13, 2026 ───────────────────────────────────────────────────────────

function dayData_2026_07_13() {
  return {
    calls: [
      { ts: 'Jul 13 · 2:00 AM', csm: 'nick', account: 'Check Point',
        note: 'Data quality gaps in 2,000-company dataset: 104 missing employee counts, 102 flagged across revenue/IT budget. HG updated 51 of 102. Hadas Arazi drove call with summary table.',
        mins: 60, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Hadas Arazi (Check Point) drove a data quality review against HG\'s 2,000-company enrichment dataset. 104 companies had missing employee counts; 102 were flagged across revenue and IT budget fields. HG has remediated 51 of the 102 flagged records. Check Point presented a summary table and is tracking the remaining gaps. Nick to confirm resolution timeline and escalate any systematic data coverage issues.' },
      { ts: 'Jul 13 · 6:30 AM', csm: 'pam', account: 'ADP',
        note: 'Monthly Success Call: TechCares nomination submitted for Karena McKenzie (ADP-wide); TR score campaign link strategy discussed.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Pam led the Monthly Success Call with ADP. TechCares nomination submitted for Karena McKenzie covering ADP\'s global organization. The team discussed TR score campaign link strategy — comparing webinar vs. client advisory board vs. a new approach for driving review generation. Pam to follow up on preferred channel and next campaign timing.' },
      { ts: 'Jul 13 · 6:30 AM', csm: 'riley', account: 'SAP CIAM',
        note: 'Webhook/API rejecting leads in SAP CIAM campaign. Manual upload test showed first row rejection. Second webhook with same endpoint may be conflicting across campaigns.',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'SAP CIAM campaign leads are being rejected at the webhook/API level. Manual upload test confirmed the first row is rejected on submission. A second webhook sharing the same endpoint may be creating a conflict across campaigns. Riley to investigate the conflicting webhook configuration, isolate the failing campaign, and test a clean submission. Urgent — lead delivery is blocked.' },
      { ts: 'Jul 13 · 7:30 AM', csm: 'riley', account: 'SAP Cloud ERP',
        note: 'Premium content bundle concall — final call with all teams. 2027 planning starts end-August/early-September. Alejandro Barajas raised new AI SEO opportunity: Conductor integration for LLM citation analysis.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Final concall for the SAP Cloud ERP premium content bundle with all stakeholder teams. 2027 planning is set to kick off end-August/early-September. Alejandro Barajas (SAP) raised a new expansion opportunity: integrating Conductor with HG data for LLM citation analysis by product — enabling SAP to track which products appear in AI-generated answers. Riley to capture this as a formal expansion signal and surface it to HG leadership.' },
      { ts: 'Jul 13 · 8:00 AM', csm: 'rani', account: 'Cloudflare',
        note: 'Renewal procurement update: Chandra back from PTO Wednesday to complete BI use case for procurement packet. Security requirements attached; hoping to piggyback on existing HG/TR approvals.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Rani updated the Cloudflare team on renewal procurement status. Chandra returns from PTO on Wednesday and will complete the BI use case documentation needed for the procurement packet. Security requirements have been attached to the submission. Cloudflare is hoping to leverage existing HG and TrustRadius security approvals to streamline the vendor approval process. Rani to follow up Wednesday once Chandra is back.' },
      { ts: 'Jul 13 · 8:00 AM', csm: 'andy', account: 'Toast',
        note: 'Model review team introduction: Andy introduced Claire Renaud (MadKudu) to Dan Pacifico. Kavin Regu (MadKudu, Mumbai) shadowing.',
        mins: 45, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Andy facilitated a team introduction call for Toast\'s model review engagement. Claire Renaud (MadKudu), who previously worked on Toast\'s inbound lead scoring model, was introduced to Dan Pacifico (Toast). Kavin Regu (MadKudu, Mumbai) joined to shadow and is being onboarded to the project. Andy to ensure Claire and Dan align on scope and timeline for the model review work.' },
      { ts: 'Jul 13 · 8:30 AM', csm: 'divyam', account: 'Blackbaud',
        note: 'Biweekly sync: renewal past due, approver expected back Tuesday July 14. New contact Annie Baierl joining to own review generation (previously Christine Newman\'s team).',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam led the biweekly Blackbaud sync. Renewal is past due — the approver is expected back on Tuesday July 14 and renewal completion is expected shortly after. Annie Baierl is being introduced as the new primary contact for review generation, taking over from Christine Newman\'s team under Blackbaud Customer Advocacy. Divyam to confirm renewal signature on Wednesday and schedule an onboarding call with Annie.' },
      { ts: 'Jul 13 · 8:30 AM', csm: 'riley', account: 'Intuit IES',
        note: 'Review campaign status: IES campaign started July 7; QuickBooks Online Advanced also running. Riley to confirm active campaigns and report back.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley checked in on Intuit IES\'s review campaign status. The IES campaign launched July 7 and is running alongside a QuickBooks Online Advanced campaign. Riley to confirm which campaigns are currently active, verify lead flow and review generation rates, and report back to the Intuit team with a status summary.' },
      { ts: 'Jul 13 · 9:00 AM', csm: 'pam', account: 'Oracle NetSuite',
        note: 'NetSuite API use case scoping session: Oracle team (Ranga Bodla, Drew Broussard, Tom Germack) + HG (KP Pindle SE ex-Oracle, Noah Alford, Mark Fell). Strong new expansion opportunity.',
        mins: 45, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Pam led a dedicated API use case scoping session for Oracle NetSuite. The Oracle side included Ranga Bodla, Drew Broussard, and Tom Germack. HG brought KP Pindle (SE, ex-Oracle, added for domain credibility), Noah Alford, and Mark Fell. The session explored how NetSuite could consume HG data via API to enrich their CRM and targeting workflows. This is a strong new expansion opportunity — Pam and the team to document use case requirements and draft a technical proposal.' },
      { ts: 'Jul 13 · 9:00 AM', csm: 'nick', account: 'Infor',
        note: 'H1 QBR results shared (positive), H2 pipeline strong. Nick shared TrustRadius AI/LLM optimization work; nominated Infor for early access AI visibility impact report.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Nick led a recurring sync with Infor sharing H1 QBR results — positive outcomes across key metrics and a strong H2 pipeline. Nick introduced TrustRadius AI/LLM optimization work and nominated Infor for early access to the AI visibility impact report. The nomination is a proactive expansion signal — Infor is an engaged account with leadership visibility.' },
      { ts: 'Jul 13 · 12:00 PM', csm: 'rani', account: 'AWS',
        note: 'AWS (Luis Garcia, Madhavi Mallajoshyula, Mike Galyen) asked how to license HG MCP after seeing it on Anthropic marketplace at NY Summit. Qwik is primary use case. Key H2 expansion signal.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: 'AWS reached out after seeing the HG MCP server on the Anthropic marketplace at the New York AI Summit. Luis Garcia, Madhavi Mallajoshyula, and Mike Galyen asked how to license and deploy HG MCP for their Qwik use case. This is a significant H2 expansion signal — AWS discovered HG organically through the Anthropic channel and is ready to explore a licensing conversation. Rani to loop in sales/leadership and set up a formal scoping call.' },
    ],
    pulses: [
      { csm: 'nick', account: 'Check Point', health: 'Concerning',
        note: 'Data quality issue: 104 missing employee counts, 102 revenue/IT budget flags in 2,000-company dataset. HG remediated 51/102. Remaining gap open — Nick to confirm resolution timeline.' },
      { csm: 'pam', account: 'ADP', health: 'Healthy',
        note: 'Monthly Success Call complete. TechCares nomination submitted for Karena McKenzie. TR score campaign link strategy in discussion — evaluating webinar vs. client advisory vs. new approach.' },
      { csm: 'riley', account: 'SAP CIAM', health: 'Concerning',
        note: 'Webhook/API blocking lead delivery — first row rejected on manual test. Second webhook with shared endpoint may be conflicting. Riley investigating conflicting webhook configuration.' },
      { csm: 'riley', account: 'SAP Cloud ERP', health: 'Healthy',
        note: 'Premium content bundle final concall complete. 2027 planning Q4. New AI SEO/Conductor expansion opportunity surfaced by Alejandro Barajas — LLM citation analysis by product.' },
      { csm: 'rani', account: 'Cloudflare', health: 'Healthy',
        note: 'Renewal procurement in progress. Chandra back Wednesday to complete BI use case doc. Leveraging existing HG/TR security approvals to accelerate vendor approval.' },
      { csm: 'andy', account: 'Toast', health: 'Healthy',
        note: 'MadKudu model review team intro complete — Claire Renaud introduced to Dan Pacifico. Kavin Regu (Mumbai) shadowing. Model review engagement initiated.' },
      { csm: 'divyam', account: 'Blackbaud', health: 'Healthy',
        note: 'Renewal past due — approver back Tue Jul 14; expected to sign shortly. Annie Baierl onboarding as new primary review generation contact (replacing Christine Newman\'s team).' },
      { csm: 'riley', account: 'Intuit IES', health: 'Healthy',
        note: 'IES review campaign active since Jul 7; QuickBooks Online Advanced also running. Riley to confirm campaign status and report back to Intuit team.' },
      { csm: 'pam', account: 'Oracle NetSuite', health: 'Healthy',
        note: 'API use case scoping session complete with Oracle (Ranga Bodla, Drew Broussard, Tom Germack) and HG (KP Pindle, Noah Alford, Mark Fell). Strong expansion opportunity — documenting requirements for technical proposal.' },
      { csm: 'nick', account: 'Infor', health: 'Healthy',
        note: 'H1 QBR: positive results, strong H2 pipeline. Infor nominated for early access to AI visibility impact report. TrustRadius AI/LLM optimization work shared with account.' },
      { csm: 'rani', account: 'AWS', health: 'Healthy',
        note: 'AWS discovered HG MCP on Anthropic marketplace at NY Summit. Luis Garcia + team asking how to license HG MCP for Qwik use case. Key H2 expansion — loop in sales/leadership for scoping call.' },
    ],
  };
}

function dayMeta_2026_07_13() {
  return {
    pills: [
      ['dot-teal',   '11 Calls'],
      ['dot-red',    '2 Concerning'],
      ['dot-amber',  '3 Expansion'],
      ['dot-green',  '11 Pulses'],
      ['dot-grey',   'Mon Jul 13 · 50 scanned'],
    ],
    tabs: ['Overview', 'Calls (11)', 'Pulses (11)', 'Action Items (7)'],
  };
}

function dayOverviewHTML_2026_07_13() {
  return `<div class="section-label">Team Activity &mdash; Monday July 13, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Monday Jul 13 &mdash; 50 recordings scanned</strong> via SFDC SOQL &middot; <strong>11 confirmed calls</strong> across 6 CSMs &middot; 3 expansion signals (SAP Cloud ERP AI SEO, Oracle NetSuite API, AWS MCP licensing) &middot; 2 concerning signals (Check Point data quality, SAP CIAM webhook)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F6A8; <strong>SAP CIAM (Riley Rogers) &mdash; URGENT:</strong> Webhook/API rejecting leads — manual upload test shows first row rejection. Second webhook sharing same endpoint may be conflicting across campaigns. Lead delivery blocked.
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F4E1; <strong>AWS (Rani Guy) &mdash; H2 Expansion Signal:</strong> AWS discovered HG MCP on Anthropic marketplace at NY Summit. Luis Garcia + team asking how to license HG MCP for Qwik use case. Loop in sales/leadership immediately.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge" style="background:#dc2626;">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">&#128308; SAP CIAM (webhook lead rejection &mdash; urgent) &middot; SAP Cloud ERP (AI SEO expansion, 2027 planning) &middot; Intuit IES (campaign status check)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge" style="background:#dc2626;">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">&#128308; Check Point (data quality &mdash; 51 of 102 flags remediated, gap open) &middot; Infor (H1 QBR positive, AI visibility report nomination)</div>
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
      <div class="csm-account-note">Blackbaud (biweekly &mdash; renewal past due, approver back Tue; Annie Baierl onboarding as review contact)</div>
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
      <div class="csm-account-note">Cloudflare (renewal procurement &mdash; Chandra back Wed) &middot; &#x1F4E1; AWS (MCP licensing inquiry from Anthropic marketplace)</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed recordings detected for this date</div>
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
        <div><div class="metric-num m-grey">75m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ADP (Monthly Success Call &mdash; TechCares nomination, TR campaign strategy) &middot; Oracle NetSuite (API scoping &mdash; strong expansion)</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Intel recording found but no transcript synced &mdash; unconfirmed</div>
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
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Toast (model review intro &mdash; Claire Renaud/MadKudu introduced to Dan Pacifico)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_13() {
  return `<div style="background:#1c2333;border:1px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4CA; Call data is auto-rendered from dayData. 2 unconfirmed (no transcript): Intel Weekly Sync (Atisha, ~8 AM), Bill Weekly Sync (Divyam, ~9 AM).
  </div>`;
}

function dayPulsesHTML_2026_07_13() {
  const cards = [
    { csm: 'nick', health: 'Concerning', account: 'Check Point',
      opp: 'Vitally Pulse &mdash; Jul 13 Call &#x1F534;',
      arr: 'Enterprise &middot; Nick Johnson',
      csmlbl: 'Nick Johnson',
      change: 'Jul 13 &middot; Data quality issue',
      excerpt: 'Jul 13 NJ: Data quality review call (2:00 AM PT, 60 min). 2,000-company dataset: 104 missing employee counts, 102 flagged revenue/IT budget records. HG remediated 51 of 102. Remaining 51 open. Hadas Arazi driving. Nick to confirm resolution timeline.' },
    { csm: 'pam', health: 'Healthy', account: 'ADP',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Pam Huck',
      csmlbl: 'Pam Huck',
      change: 'Jul 13 &middot; Monthly Success Call',
      excerpt: 'Jul 13 PH: Monthly Success Call (6:30 AM PT, 30 min). TechCares nomination submitted for Karena McKenzie (ADP-wide). TR score campaign link strategy discussed: webinar vs. client advisory vs. new approach under evaluation.' },
    { csm: 'riley', health: 'Concerning', account: 'SAP CIAM',
      opp: 'Vitally Pulse &mdash; Jul 13 Call &#x1F534;',
      arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers',
      change: 'Jul 13 &middot; Webhook issue',
      excerpt: 'Jul 13 RR: SAP CIAM webhook/API issue (6:30 AM PT, 30 min). Leads rejected at API — first row fails on manual upload test. Second webhook sharing same endpoint may be conflicting across campaigns. Lead delivery blocked. Riley to investigate and fix.' },
    { csm: 'riley', health: 'Healthy', account: 'SAP Cloud ERP',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers',
      change: 'Jul 13 &middot; Expansion signal',
      excerpt: 'Jul 13 RR: Premium content bundle final concall (7:30 AM PT, 30 min). 2027 planning starts end-Aug/early-Sep. Alejandro Barajas raised AI SEO opportunity: Conductor + HG data for LLM citation analysis by product. Significant new expansion signal.' },
    { csm: 'rani', health: 'Healthy', account: 'Cloudflare',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy',
      change: 'Jul 13 &middot; Renewal update',
      excerpt: 'Jul 13 RG: Renewal procurement update (8:00 AM PT, 30 min). Chandra back from PTO Wednesday to complete BI use case doc for procurement packet. Leveraging existing HG/TR security approvals to accelerate vendor process.' },
    { csm: 'andy', health: 'Healthy', account: 'Toast',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Andy Lim',
      csmlbl: 'Andy Lim',
      change: 'Jul 13 &middot; Model review intro',
      excerpt: 'Jul 13 AL: Model review team intro (8:00 AM PT, 45 min). Claire Renaud (MadKudu, prior Toast inbound model) introduced to Dan Pacifico. Kavin Regu (Mumbai) shadowing. MadKudu model review engagement initiated.' },
    { csm: 'divyam', health: 'Healthy', account: 'Blackbaud',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Divyam Dewan',
      csmlbl: 'Divyam Dewan',
      change: 'Jul 13 &middot; Biweekly sync',
      excerpt: 'Jul 13 DD: Biweekly sync (8:30 AM PT, 30 min). Renewal past due — approver back Tue Jul 14. Annie Baierl onboarding as new primary review generation contact (replacing Christine Newman\'s team under Blackbaud Customer Advocacy).' },
    { csm: 'riley', health: 'Healthy', account: 'Intuit IES',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers',
      change: 'Jul 13 &middot; Campaign check-in',
      excerpt: 'Jul 13 RR: Review campaign status check (8:30 AM PT, 30 min). IES campaign active since Jul 7; QuickBooks Online Advanced also running. Riley to confirm which campaigns are active and report back to Intuit team.' },
    { csm: 'pam', health: 'Healthy', account: 'Oracle NetSuite',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Pam Huck',
      csmlbl: 'Pam Huck',
      change: 'Jul 13 &middot; API expansion scoping',
      excerpt: 'Jul 13 PH: NetSuite API use case scoping (9:00 AM PT, 45 min). Oracle: Ranga Bodla, Drew Broussard, Tom Germack. HG: KP Pindle (SE, ex-Oracle), Noah Alford, Mark Fell. Strong new expansion opportunity. Documenting requirements for technical proposal.' },
    { csm: 'nick', health: 'Healthy', account: 'Infor',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Nick Johnson',
      csmlbl: 'Nick Johnson',
      change: 'Jul 13 &middot; H1 QBR + expansion',
      excerpt: 'Jul 13 NJ: Recurring sync (9:00 AM PT, 30 min). H1 QBR: positive results, strong H2 pipeline. TrustRadius AI/LLM optimization work shared. Infor nominated for early access to AI visibility impact report.' },
    { csm: 'rani', health: 'Healthy', account: 'AWS',
      opp: 'Vitally Pulse &mdash; Jul 13 Call',
      arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy',
      change: 'Jul 13 &middot; MCP expansion signal',
      excerpt: 'Jul 13 RG: AWS inbound (12:00 PM PT, 30 min). Luis Garcia, Madhavi Mallajoshyula, Mike Galyen discovered HG MCP on Anthropic marketplace at NY Summit. Asking how to license for Qwik use case. Key H2 expansion — loop in sales/leadership.' },
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

function dayActionsHTML_2026_07_13() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0713-1') ? 'done' : ''}" data-csm="riley" id="action-0713-1">
      <div class="action-checkbox ${doneActions.has('0713-1') ? 'checked' : ''}" onclick="toggleAction('0713-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; SAP CIAM &mdash; URGENT: Investigate conflicting webhooks; restore lead delivery</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Riley Rogers &middot; Leads are being rejected at the webhook/API level — first row fails on manual upload test. A second webhook sharing the same endpoint may be conflicting across campaigns. Isolate the failing campaign, audit both webhook configurations, deconflict the endpoints, and test a clean submission. Lead delivery is blocked — resolve before next campaign send.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0713-2') ? 'done' : ''}" data-csm="rani" id="action-0713-2">
      <div class="action-checkbox ${doneActions.has('0713-2') ? 'checked' : ''}" onclick="toggleAction('0713-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E1; AWS &mdash; Loop in sales/leadership on HG MCP licensing inquiry; set up formal scoping call</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy &middot; AWS (Luis Garcia, Madhavi Mallajoshyula, Mike Galyen) discovered HG MCP on the Anthropic marketplace at the NY AI Summit and asked how to license it for their Qwik use case. This is an organic, high-intent H2 expansion signal. Loop in sales and leadership immediately. Schedule a formal scoping call to define use case, licensing model, and commercial terms.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0713-3') ? 'done' : ''}" data-csm="pam" id="action-0713-3">
      <div class="action-checkbox ${doneActions.has('0713-3') ? 'checked' : ''}" onclick="toggleAction('0713-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4BB; Oracle NetSuite &mdash; Document API use case requirements; draft technical scoping proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Pam Huck / Noah Alford / KP Pindle &middot; Scoping session with Ranga Bodla, Drew Broussard, and Tom Germack surfaced a strong new API expansion opportunity. Capture and document the NetSuite use case requirements from today's session. Draft a technical proposal outlining how HG data can be consumed via API to enrich CRM and targeting workflows. Share with Oracle team within the week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0713-4') ? 'done' : ''}" data-csm="riley" id="action-0713-4">
      <div class="action-checkbox ${doneActions.has('0713-4') ? 'checked' : ''}" onclick="toggleAction('0713-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F916; SAP Cloud ERP &mdash; Capture AI SEO/Conductor expansion signal; advance to 2027 planning</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Riley Rogers &middot; Alejandro Barajas raised a new opportunity: integrating Conductor with HG data for LLM citation analysis by product — enabling SAP to track which products appear in AI-generated answers. Log this as a formal expansion signal in SFDC/Vitally. Surface to HG product and sales leadership. Confirm SAP's 2027 planning timeline (end-Aug/early-Sep) and schedule an advance planning call.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0713-5') ? 'done' : ''}" data-csm="nick" id="action-0713-5">
      <div class="action-checkbox ${doneActions.has('0713-5') ? 'checked' : ''}" onclick="toggleAction('0713-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Check Point &mdash; Confirm data quality remediation timeline for remaining 51 flagged records</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; HG remediated 51 of 102 flagged records in the 2,000-company dataset. Remaining 51 records (revenue/IT budget gaps) are still open. Confirm resolution timeline with the data team. Communicate a clear ETA to Hadas Arazi at Check Point. If a systematic coverage issue exists, escalate to data ops.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0713-6') ? 'done' : ''}" data-csm="divyam" id="action-0713-6">
      <div class="action-checkbox ${doneActions.has('0713-6') ? 'checked' : ''}" onclick="toggleAction('0713-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Blackbaud &mdash; Confirm renewal signature Wed Jul 16; onboard Annie Baierl for review generation</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Divyam Dewan &middot; Renewal approver returns Tuesday Jul 14. Follow up Wednesday to confirm signature. Once renewal is closed, schedule an onboarding session with Annie Baierl as the new primary review generation contact (replacing Christine Newman&rsquo;s team under Blackbaud Customer Advocacy). Log renewal closure in SFDC/Vitally.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0713-7') ? 'done' : ''}" data-csm="atisha" id="action-0713-7">
      <div class="action-checkbox ${doneActions.has('0713-7') ? 'checked' : ''}" onclick="toggleAction('0713-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x2753; Atisha + Divyam &mdash; Flag Intel and Bill recordings with no transcript; verify calls occurred</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Atisha Waghela / Divyam Dewan &middot; Intel Weekly Sync and Bill Weekly Sync recordings were found in SFDC but no transcripts synced. Confirm whether both calls occurred. If yes, manually log outcomes in Vitally. If Weflow failed to transcribe, flag the sync issue to Yuan so the integration can be investigated.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─── July 14, 2026 ────────────────────────────────────────────────────────────

function dayData_2026_07_14() {
  return {
    calls: [
      { ts: 'Jul 14 · 2:00 AM', csm: 'varun', account: 'OpenText',
        note: 'Bi-weekly cadence; OpenText GTM regional kickoffs (Berlin EMEA, Canada); new FY July 15.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Varun and Sujay (OpenText) bi-weekly sync. OpenText running regional GTM kickoffs — Sujay heading to Berlin EMEA event, David to Canada. New financial year begins July 15. Company pivoting to intimate regional settings (300 AEs + managers) over large US all-hands.' },
      { ts: 'Jul 14 · 4:30 AM', csm: 'divyam', account: 'Adobe',
        note: 'India pilot expansion discussion; Adobe asking to grow beyond 1,500-license pilot scope.',
        mins: 45, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Abhishek Srivastava (Adobe India) reported: 1,500-license pilot feedback was positive — sales ops team using the data. India team is now pushing to expand the license; Abhishek went back to Jill and Sumit internally with the expansion ask. Leadership changes and travel delays slowed progress but expansion signal is confirmed. Divyam joined solo to capture feedback for Mark (David canceled).' },
      { ts: 'Jul 14 · 6:30 AM', csm: 'riley', account: 'SAP',
        note: 'Technical session: manually uploading test leads (CSV) for SAP CX product lines to TrustRadius.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Working session with Riley, Abhilasha Poliwal (MSIGHTS), Alex Soh (SAP), Scott Stater, Alejandro Barajas. Goal: upload SAP test leads via CSV for Commerce Cloud, Sales Cloud, Service Cloud. Manual upload chosen over API for this batch. CSV format validated; Alex Soh to send remaining offer codes tomorrow after today\'s test. Data importer workflow confirmed working.' },
      { ts: 'Jul 14 · 7:00 AM', csm: 'divyam', account: 'Paychex/Paycor',
        note: 'Monthly sync; new contacts Taylor Lohmann + Nick Berta joining after Eli and Alyssa departed.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam met new Paychex/Paycor contacts: Taylor Lohmann (Corporate Brand Strategist, 3 weeks in, representing both brands) and Nick Berta (stepping in for Eli short-term). Both Eli and Alyssa left the company. Divyam re-introduced CVP + IDL subscription and re-established monthly cadence (second Tuesday). Full re-onboarding required given significant contact churn.' },
      { ts: 'Jul 14 · 7:30 AM', csm: 'nick', account: 'Veeam',
        note: 'HCL expansion update; CRO intro via Rahul in progress; AI spend data Q from Sid Subramany.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Angus Hyams (Veeam) updated: HCL centralized alignment failed (Poonam pushback), now pivoting to individual product lines. CRO Rahul intro arranged via Kk chain; email to William Alessi active. Sid Subramany asked clarifying questions about AI spend data — whether it represents deployment intent or a budget approximation. Angus sharing the AI spend document with Sid and Michael Ries for team review.' },
      { ts: 'Jul 14 · 7:30 AM', csm: 'riley', account: 'SAP',
        note: 'CX sync: newsletter embed links for SAP Commerce Cloud + Sales/Service newsletter campaigns.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Binod Negi (SAP) requested two separate TrustRadius review newsletter links: one for Commerce Cloud and one for Sales+Service Cloud (multi-product selection). Content deadline: Tuesday July 21. Riley committed to deliver the Commerce Cloud link immediately post-call and the multi-product Sales/Service link by end of week. Cole Arutian (HG AM) confirmed the team may turn it around same-day.' },
      { ts: 'Jul 14 · 8:00 AM', csm: 'rani', account: 'Workday',
        note: 'Databricks migration technical session; 6+ Workday DevOps engineers scoping legacy→Databricks feed.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Workday DevOps team (Tiago Corcelli, Lucas Grigolon Varela, Ravi Jumle, Shubhang Srivastava, Aniruddha Vishnupurikar, Siva Inapakolla + Alexi Mouarkach from HG) joined for Databricks migration scoping. Multiple new technical contacts — Rani facilitated introductions. Malika Pothukuchi (usual contact) joined late. HG engineering present to support. Migration scope and timeline being established.' },
      { ts: 'Jul 14 · 8:30 AM', csm: 'nick', account: 'Intuit',
        note: 'Transition call: Hayden Smith departing HG; Augie Buettner + Max taking over Intuit IES account.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Account handoff for Intuit IES. Hayden Smith (departing) introduced Augie Buettner (5+ yrs HG) and Max as new AM contacts. Nick Johnson and Karin/KP Pindle (HG NY) also on call. Britton Farrelly, Suja Unnikrishnan, Ravi Teja Allaparthi from Intuit. Agenda: transition overview, contacts data update, scoring model deep-dive. Smooth handoff focus confirmed.' },
      { ts: 'Jul 14 · 10:00 AM', csm: 'riley', account: 'Zoom',
        note: 'Expansion: Zoom interested in review management services + Discuss product; Travis wants pricing.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Camille Shortridge and Mardigan Moffat (Zoom) confirmed strong interest following recent in-person meeting: review management services and expanding footprint to the Discuss product. Travis (not on call) requested an itemized pricing breakdown per expansion line item. Riley\'s follow-up presentation includes pricing but it\'s not prominently surfaced. Expansion proposal needs a cleaner pricing section before Travis review.' },
      { ts: 'Jul 14 · 10:00 AM', csm: 'rani', account: 'Cisco',
        note: 'Cisco (Isovalent) onboarding: Market Analyzer, TAM/SAM, white space analysis walkthrough.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Rani ran platform onboarding for Cisco (Isovalent) with Tu-Anh. Outstanding engineering issue (data export capability) still being investigated — no update yet from HG engineering team. Platform walkthrough covered: Market Analyzer (TAM/SAM), white space analysis, account segmentation, campaign targeting. Cisco is grandfathered into multiple modules. Melanie joined late. Strong engagement from Tu-Anh.' },
      { ts: 'Jul 14 · 11:00 AM', csm: 'riley', account: 'TriNet',
        note: 'Regular CSM sync; met new contact Ashley; standard check-in, no issues raised.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley met with kmaxwell and new contact Ashley (TriNet) for the regular TrustRadius CSM sync. Relationship rapport maintained; Ashley joined as new stakeholder. No product issues or escalations raised. Standard cadence call with personal rapport-building.' },
      { ts: 'Jul 14 · 11:30 AM', csm: 'riley', account: 'Red Hat',
        note: 'PaaS taxonomy update in progress; CVP lead campaign scoped at 160 accounts (~70–80 leads).',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley updated Brianna Gault and Sai A (Red Hat) on PaaS taxonomy changes for OpenChef market report — taxonomy team reviewing new categories, no ETA yet. CVP lead campaign scoped: 160 target accounts, max 10 leads/company, ~10% response rate = 70–80 leads (~30% of quota). Red Hat team aligned. Campaign will begin once taxonomy updates are confirmed.' },
      { ts: 'Jul 14 · 12:30 PM', csm: 'rani', account: 'NetApp',
        note: '⚠️ Key contact Elise McMorrow leaving NetApp in a few weeks — succession plan needed.',
        mins: 25, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Elise McMorrow announced she is leaving NetApp within the next few weeks. She is working to identify a successor for the HG relationship. Tracy York (also present) is getting married this Saturday — last call before time off. Adrian Escobar attending. Megan could not join. The departure of Elise, a long-standing relationship champion, creates immediate continuity and renewal risk.' },
    ],
    pulses: [
      { csm: 'varun', health: 'Healthy', account: 'OpenText',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Varun Tiwari',
        csmlbl: 'Varun Tiwari', change: 'Jul 14 &middot; Bi-weekly cadence',
        excerpt: 'Jul 14 VT: Bi-weekly sync (2:00 AM PT, 30 min). OpenText running regional GTM kickoffs — Berlin (Sujay) and Canada (David). New financial year begins July 15. Pivot to intimate 300-person regional settings vs. large US all-hands.' },
      { csm: 'divyam', health: 'Healthy', account: 'Adobe',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Divyam Dewan',
        csmlbl: 'Divyam Dewan', change: 'Jul 14 &middot; Expansion signal',
        excerpt: 'Jul 14 DD: Adobe India expansion discussion (4:30 AM PT, 45 min). 1,500-license pilot feedback positive — sales ops team using data. India org pushing to expand license with Jill/Sumit. Expansion ask confirmed; formal proposal next step.' },
      { csm: 'riley', health: 'Healthy', account: 'SAP',
        opp: 'Vitally Pulse &mdash; Jul 14 Test Leads', arr: 'Enterprise &middot; Riley Rogers',
        csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Technical session',
        excerpt: 'Jul 14 RR: SAP test lead CSV upload session (6:30 AM PT, 30 min). Products: Commerce Cloud, Sales Cloud, Service Cloud. Manual upload workflow validated. Alex Soh sending remaining offer codes tomorrow.' },
      { csm: 'divyam', health: 'Healthy', account: 'Paychex/Paycor',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Divyam Dewan',
        csmlbl: 'Divyam Dewan', change: 'Jul 14 &middot; New contacts onboarded',
        excerpt: 'Jul 14 DD: Paychex/Paycor monthly sync (7:00 AM PT, 30 min). Eli and Alyssa left; Taylor Lohmann and Nick Berta joining. CVP + IDL subscription re-onboarded with new stakeholders. Monthly cadence re-confirmed (2nd Tuesday).' },
      { csm: 'nick', health: 'Healthy', account: 'Veeam',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Nick Johnson',
        csmlbl: 'Nick Johnson', change: 'Jul 14 &middot; HCL expansion + AI data Q',
        excerpt: 'Jul 14 NJ: Veeam recurring sync (7:30 AM PT, 30 min). HCL centralized alignment stalled; pivoting to product lines. CRO Rahul/William Alessi intro in progress. Sid asked AI spend data clarifying questions (budget proxy vs. intent). Expansion momentum maintained.' },
      { csm: 'riley', health: 'Healthy', account: 'SAP',
        opp: 'Vitally Pulse &mdash; Jul 14 CX Sync', arr: 'Enterprise &middot; Riley Rogers',
        csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Newsletter links',
        excerpt: 'Jul 14 RR: SAP CX sync (7:30 AM PT, 30 min). Binod Negi requested two review newsletter links — Commerce Cloud + Sales/Service. Content deadline Jul 21. Commerce Cloud link delivered same-day; multi-product link by end of week.' },
      { csm: 'rani', health: 'Healthy', account: 'Workday',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Rani Guy',
        csmlbl: 'Rani Guy', change: 'Jul 14 &middot; Databricks migration',
        excerpt: 'Jul 14 RG: Workday Databricks migration session (8:00 AM PT, 30 min). 6+ Workday DevOps engineers scoping legacy feed → Databricks migration. Multiple new technical contacts on both sides. HG engineering present. Scope and timeline being established.' },
      { csm: 'nick', health: 'Healthy', account: 'Intuit',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Nick Johnson',
        csmlbl: 'Nick Johnson', change: 'Jul 14 &middot; Account transition',
        excerpt: 'Jul 14 NJ: Intuit IES transition call (8:30 AM PT, 30 min). Hayden Smith departing; Augie Buettner + Max taking over. Britton Farrelly and Suja Unnikrishnan from Intuit. Contacts + scoring review on agenda. Smooth handoff in progress.' },
      { csm: 'riley', health: 'Healthy', account: 'Zoom',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Riley Rogers',
        csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Expansion signal',
        excerpt: 'Jul 14 RR: Zoom expansion sync (10:00 AM PT, 30 min). Camille Shortridge and Mardigan Moffat confirmed interest in review management + Discuss product expansion. Travis needs clearer itemized pricing. Expansion proposal in motion.' },
      { csm: 'rani', health: 'Healthy', account: 'Cisco',
        opp: 'Vitally Pulse &mdash; Jul 14 Onboarding', arr: 'Enterprise &middot; Rani Guy',
        csmlbl: 'Rani Guy', change: 'Jul 14 &middot; Platform onboarding',
        excerpt: 'Jul 14 RG: Cisco (Isovalent) onboarding (10:00 AM PT, 30 min). Walked Tu-Anh through Market Analyzer, TAM/SAM, white space analysis, segmentation. One open engineering issue (data export). Strong onboarding engagement.' },
      { csm: 'riley', health: 'Healthy', account: 'TriNet',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Riley Rogers',
        csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Monthly cadence',
        excerpt: 'Jul 14 RR: TriNet monthly sync (11:00 AM PT, 30 min). Met new contact Ashley. Standard cadence maintained. No issues raised. Relationship in good standing.' },
      { csm: 'riley', health: 'Healthy', account: 'Red Hat',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Riley Rogers',
        csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Biweekly check-in',
        excerpt: 'Jul 14 RR: Red Hat biweekly (11:30 AM PT, 30 min). PaaS taxonomy update in progress. CVP lead campaign: 160 target accounts, projected 70–80 leads (~30% of quota). Red Hat aligned; campaign pending taxonomy confirmation.' },
      { csm: 'rani', health: 'Concerning', account: 'NetApp',
        opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Rani Guy',
        csmlbl: 'Rani Guy', change: 'Jul 14 &middot; Key contact departing',
        excerpt: 'Jul 14 RG: NetApp weekly sync (12:30 PM PT, 25 min). ⚠️ Elise McMorrow announced departure from NetApp in a few weeks. Working on succession plan. Tracy York on wedding leave starting this week. Relationship continuity risk — identify successor immediately.' },
    ],
  };
}

function dayMeta_2026_07_14() {
  return {
    pills: [
      ['dot-teal',  '13 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-amber', '3 Expansion'],
      ['dot-green', '13 Pulses'],
      ['dot-grey',  'Tue Jul 14 · 76 scanned'],
    ],
    tabs: ['Overview', 'Calls (13)', 'Pulses (13)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_14() {
  return `<div class="section-label">Team Activity &mdash; Tuesday July 14, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Jul 14 &mdash; 76 recordings scanned</strong> via SFDC SOQL &middot; <strong>13 confirmed calls</strong> across 5 CSMs &middot; 1 Concerning (NetApp) &middot; 3 Expansion signals (Adobe, Veeam, Zoom)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>NetApp &mdash; Key contact departing:</strong> Elise McMorrow announced she is leaving NetApp in a few weeks. Succession planning underway. Rani must identify and engage a new champion before Elise's last day.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Adobe India pilot confirmed positive &mdash; Abhishek advancing license expansion ask internally &middot; Veeam HCL product-line expansion in motion &middot; Zoom interested in review management + Discuss product expansion
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">5 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">5</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">5</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">150m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP test leads (ad-hoc issue) &middot; SAP CX Sync (newsletter links) &middot; Zoom (expansion) &middot; TriNet (check-in) &middot; Red Hat (biweekly)</div>
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
        <div><div class="metric-num m-grey">85m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday (Databricks migration) &middot; Cisco onboarding &middot; &#x26A0;&#xFE0F; NetApp (Elise departing)</div>
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
      <div class="csm-account-note">Veeam (HCL expansion + AI data Q) &middot; Intuit IES (account transition, Hayden departing)</div>
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
        <div><div class="metric-num m-grey">75m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Adobe (&#x1F4C8; pilot expansion) &middot; Paychex/Paycor (new contacts onboarded)</div>
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
      <div class="csm-account-note">OpenText bi-weekly &middot; 2 events unrecorded (OpenText SFDC event missing Weflow ID)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event &mdash; Team Sync / Mark Fell Ops (internal, HG Insights account, no transcript)</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 Apple events + Converge Tech Solutions &mdash; 1 unconfirmed (Apple Strategy, no transcript); 2 events with no recording</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event &mdash; ConnectWise/HGI Bi-weekly (no recording found)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_14() {
  return `
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>NetApp &mdash; Key contact departing:</strong> Elise McMorrow leaving in a few weeks. Rani must identify and engage successor before departure.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals on 3 calls:</strong> Adobe (India pilot expansion) &middot; Veeam (HCL product-line + AI spend interest) &middot; Zoom (review management + Discuss product)
  </div>
  <div style="background:#1a1f2e;border:1px solid #4b5563;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F5D2;&#xFE0F; <strong>Unconfirmed (no transcript):</strong> Atisha &mdash; Apple Strategy &amp; Planning (8:30 AM PT, recording exists, no transcript) &middot; Nick &mdash; Siemens, Hyland (events with no recording) &middot; Andy &mdash; ConnectWise (no recording)
  </div>`;
}

function dayPulsesHTML_2026_07_14() {
  const cards = [
    { csm: 'varun', health: 'Healthy', account: 'OpenText',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Varun Tiwari',
      csmlbl: 'Varun Tiwari', change: 'Jul 14 &middot; Bi-weekly cadence',
      excerpt: 'Jul 14 VT: Bi-weekly sync (2:00 AM PT, 30 min). OpenText running regional GTM kickoffs &mdash; Berlin (Sujay) and Canada (David). New FY begins July 15. Company pivoting to intimate 300-person regional events.' },
    { csm: 'divyam', health: 'Healthy', account: 'Adobe',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Divyam Dewan',
      csmlbl: 'Divyam Dewan', change: 'Jul 14 &middot; Expansion signal',
      excerpt: 'Jul 14 DD: Adobe India expansion discussion (4:30 AM PT, 45 min). 1,500-license pilot feedback positive. India org pushing to expand license scope with Jill/Sumit. Expansion ask confirmed; formal proposal is next step.' },
    { csm: 'riley', health: 'Healthy', account: 'SAP',
      opp: 'Vitally Pulse &mdash; Jul 14 Test Leads', arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Technical session',
      excerpt: 'Jul 14 RR: SAP test lead CSV upload session (6:30 AM PT, 30 min). Products: Commerce Cloud, Sales Cloud, Service Cloud. Manual upload workflow validated. Alex Soh to send remaining offer codes tomorrow.' },
    { csm: 'divyam', health: 'Healthy', account: 'Paychex/Paycor',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Divyam Dewan',
      csmlbl: 'Divyam Dewan', change: 'Jul 14 &middot; New contacts onboarded',
      excerpt: 'Jul 14 DD: Paychex/Paycor monthly sync (7:00 AM PT, 30 min). Eli and Alyssa left; Taylor Lohmann + Nick Berta joining. CVP + IDL subscription re-onboarded. Monthly cadence confirmed (2nd Tuesday).' },
    { csm: 'nick', health: 'Healthy', account: 'Veeam',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Nick Johnson',
      csmlbl: 'Nick Johnson', change: 'Jul 14 &middot; HCL expansion + AI Q',
      excerpt: 'Jul 14 NJ: Veeam sync (7:30 AM PT, 30 min). HCL centralized alignment failed; pivoting to product lines. CRO William Alessi intro via Rahul in progress. Sid asked AI spend data questions (budget vs. intent). Expansion momentum maintained.' },
    { csm: 'riley', health: 'Healthy', account: 'SAP',
      opp: 'Vitally Pulse &mdash; Jul 14 CX Sync', arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Newsletter links',
      excerpt: 'Jul 14 RR: SAP CX sync (7:30 AM PT, 30 min). Binod Negi requested two newsletter embed links &mdash; Commerce Cloud + Sales/Service. Deadline Jul 21. Commerce Cloud link same-day; multi-product link by end of week.' },
    { csm: 'rani', health: 'Healthy', account: 'Workday',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy', change: 'Jul 14 &middot; Databricks migration',
      excerpt: 'Jul 14 RG: Workday Databricks migration session (8:00 AM PT, 30 min). 6+ Workday DevOps engineers scoping legacy feed &rarr; Databricks. Multiple new technical contacts. HG engineering present. Scope and timeline being established.' },
    { csm: 'nick', health: 'Healthy', account: 'Intuit',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Nick Johnson',
      csmlbl: 'Nick Johnson', change: 'Jul 14 &middot; Account transition',
      excerpt: 'Jul 14 NJ: Intuit IES transition call (8:30 AM PT, 30 min). Hayden Smith departing HG; Augie Buettner + Max taking over. Britton Farrelly and Suja Unnikrishnan from Intuit. Contacts + scoring review on agenda.' },
    { csm: 'riley', health: 'Healthy', account: 'Zoom',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Expansion signal',
      excerpt: 'Jul 14 RR: Zoom expansion sync (10:00 AM PT, 30 min). Camille Shortridge + Mardigan Moffat confirmed interest in review management + Discuss product. Travis needs clearer itemized pricing. Expansion proposal in motion.' },
    { csm: 'rani', health: 'Healthy', account: 'Cisco',
      opp: 'Vitally Pulse &mdash; Jul 14 Onboarding', arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy', change: 'Jul 14 &middot; Platform onboarding',
      excerpt: 'Jul 14 RG: Cisco (Isovalent) onboarding (10:00 AM PT, 30 min). Walked Tu-Anh through Market Analyzer, TAM/SAM, white space, segmentation. One open engineering issue (data export). Strong onboarding engagement.' },
    { csm: 'riley', health: 'Healthy', account: 'TriNet',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Monthly cadence',
      excerpt: 'Jul 14 RR: TriNet monthly sync (11:00 AM PT, 30 min). Met new contact Ashley. Standard cadence maintained. No issues raised. Relationship in good standing.' },
    { csm: 'riley', health: 'Healthy', account: 'Red Hat',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers', change: 'Jul 14 &middot; Biweekly check-in',
      excerpt: 'Jul 14 RR: Red Hat biweekly (11:30 AM PT, 30 min). PaaS taxonomy update in progress (no ETA). CVP lead campaign: 160 target accounts, projected 70–80 leads (~30% of quota). Red Hat aligned; campaign pending taxonomy confirmation.' },
    { csm: 'rani', health: 'Concerning', account: 'NetApp',
      opp: 'Vitally Pulse &mdash; Jul 14 Call', arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy', change: 'Jul 14 &middot; Key contact departing',
      excerpt: 'Jul 14 RG: NetApp weekly sync (12:30 PM PT, 25 min). ⚠️ Elise McMorrow announced departure in a few weeks. Succession plan underway. Tracy York on wedding leave. Identify and engage successor immediately to protect renewal.' },
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

function dayActionsHTML_2026_07_14() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0714-1') ? 'done' : ''}" data-csm="rani" id="action-0714-1">
      <div class="action-checkbox ${doneActions.has('0714-1') ? 'checked' : ''}" onclick="toggleAction('0714-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; NetApp &mdash; URGENT: Identify successor for Elise McMorrow before her departure</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Rani Guy &middot; Elise McMorrow announced she is leaving NetApp within the next few weeks. She is the primary HG relationship champion. Rani must identify who will own the HG relationship going forward (likely Megan or another team member), meet with Elise to get a warm introduction to the successor, and ensure the renewal process is not interrupted by the transition. Log risk in Vitally immediately.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0714-2') ? 'done' : ''}" data-csm="riley" id="action-0714-2">
      <div class="action-checkbox ${doneActions.has('0714-2') ? 'checked' : ''}" onclick="toggleAction('0714-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Zoom &mdash; Resend expansion proposal with itemized pricing for Travis review</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Riley Rogers &middot; Travis (Zoom) requested a clear line-item pricing breakdown for the expansion: review management services + Discuss product addition. The pricing is buried in the current follow-up presentation. Create a dedicated pricing summary page (or separate one-pager) showing each expansion component and its cost. Resend to Camille and Mardigan for Travis&rsquo;s review. Expansion is warm and moving — don&rsquo;t let friction slow it down.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0714-3') ? 'done' : ''}" data-csm="divyam" id="action-0714-3">
      <div class="action-checkbox ${doneActions.has('0714-3') ? 'checked' : ''}" onclick="toggleAction('0714-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Adobe &mdash; Respond to India team expansion ask with formal proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Divyam Dewan &middot; Adobe India (Abhishek Srivastava, Sumit, Jill) has confirmed the 1,500-license pilot was successful and is now pushing internally to expand. Divyam should work with Mark to prepare a formal expansion proposal: define the expanded scope, pricing for additional licenses, and implementation pathway. Respond to Abhishek this week while the internal momentum is active.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0714-4') ? 'done' : ''}" data-csm="rani" id="action-0714-4">
      <div class="action-checkbox ${doneActions.has('0714-4') ? 'checked' : ''}" onclick="toggleAction('0714-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F527; Workday &mdash; Share Databricks migration plan and timeline from HG engineering team</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; The Workday DevOps team joined today to scope the migration from the legacy data feed to Databricks. Follow up with HG&rsquo;s data engineering team (Alexi Mouarkach) to get a clear migration plan and timeline. Share with Workday&rsquo;s new technical contacts (Tiago Corcelli, Ravi Jumle, Malika Pothukuchi). Ensure Malika receives the plan even though she joined late today.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0714-5') ? 'done' : ''}" data-csm="riley" id="action-0714-5">
      <div class="action-checkbox ${doneActions.has('0714-5') ? 'checked' : ''}" onclick="toggleAction('0714-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAP &mdash; Confirm test lead upload success; coordinate remaining batch with Alex Soh</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Riley Rogers &middot; Today&rsquo;s manual CSV upload session tested one batch of leads for Commerce Cloud, Sales Cloud, Service Cloud. Alex Soh (SAP) will send subsequent offer codes tomorrow. Riley should confirm the first batch processed successfully in the data importer, then coordinate with Alex and Abhilasha to receive and upload the remaining lead batches. Confirm all product lines are covered before closing out the task.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0714-6') ? 'done' : ''}" data-csm="nick" id="action-0714-6">
      <div class="action-checkbox ${doneActions.has('0714-6') ? 'checked' : ''}" onclick="toggleAction('0714-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F91D; Veeam &mdash; Follow up on HCL CRO introduction with William Alessi; confirm product-line approach</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Nick Johnson &middot; HCL centralized alignment fell through (Poonam&rsquo;s pushback); the team is now pursuing individual product lines. Angus Hyams has email in flight to William Alessi (CRO) via the Rahul/Kk chain. Nick should follow up with Angus to confirm when the CRO intro materializes and align on the product-line targeting strategy. Also: ensure Sid Subramany&rsquo;s AI spend data question is answered with clear documentation of what the metric represents.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─────────────────────────────────────────────────────────────
// JULY 15, 2026
// 87 recordings scanned · 10 confirmed CSM calls · 6 CSMs active
// Concerning: Accenture (Nick), Databricks (Atisha), Zscaler (Riley)
// Expansion: AWS AI portfolio gap (Rani), Zendesk renewal (Varun)
// ─────────────────────────────────────────────────────────────

function dayData_2026_07_15() {
  return {
    calls: [
      { ts: 'Jul 15 · 4:30 AM', csm: 'nick', account: 'Accenture',
        note: 'Procurement renewal docs stuck; Accenture leadership raised signature questions.',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Accenture leadership (Nitin Kapoor) escalated that three renewal docs — Accenture order form, Avanade order form, and affiliate addendum — are pending signature but held up by leadership questions. Accenture research team (Praveen Kumar) present to discuss data impact reporting for their user base.' },
      { ts: 'Jul 15 · 7:00 AM', csm: 'riley', account: 'IBM',
        note: 'Biweekly TR sync: campaigns launched, review counts, Buyer\'s Choice pipeline.',
        mins: 45, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Reviewed persona targeting and product overlap campaigns launched end of June; current review counts by product (Cognos, SPSS, Storage Flash System, Verify, Watson X Data/Governance); Buyer\'s Choice eligibility across IBM portfolio. Mihala back from vacation. Riley confirmed all model reports delivered.' },
      { ts: 'Jul 15 · 7:30 AM', csm: 'atisha', account: 'Databricks Inc.',
        note: 'Data delivery S3 endpoint issue — Databricks wants previous data share format restored.',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Petar Zoric (Databricks) does not want to use the current S3 endpoint HG delivers; he wants the previous data share format. Atisha and Rishabh Wadhwa (Customer Solutions) investigating discrepancy. Rachna from Databricks data team had prior discussions about this two weeks ago — follow-up needed to resolve the correct endpoint configuration.' },
      { ts: 'Jul 15 · 7:30 AM', csm: 'varun', account: 'CBTS',
        note: 'Bi-weekly sync: contact data delivery feedback positive after 2 months.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Varun gathered contact data quality feedback from Mitchell VanderKam and Timothy Selaty (CBTS) after two months of delivery. Mitchell: no negative feedback, data looks good, already activated some contacts. HG contact specialist Ishan also joined. Discussed AI-driven workload increases at CBTS (Timothy now managing 12–16 critical tasks daily).' },
      { ts: 'Jul 15 · 9:00 AM', csm: 'rani', account: 'Amazon Web Services',
        note: 'Bi-weekly cadence: renewal mid-July, TR review gap for AWS AI portfolio flagged.',
        mins: 45, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Renewal contract timing confirmed for mid-July (50% per Rani, full details with Luis/Madavi). Critical finding: only 2 reviews across AWS\'s entire AI portfolio in TrustRadius in 2026 — a major gap vs. competitors. Case study pipeline (Swenson/Qwik) in progress; Mark Fell to provide updates. Rani flagged limited visibility into case study progress due to communication gaps.' },
      { ts: 'Jul 15 · 9:00 AM', csm: 'varun', account: 'Zendesk',
        note: 'Renewal discussion and strategic alignment; Riley Rogers and new AM Charles Hawkins co-hosted.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Joint call with Joyce Chang (Zendesk) — Varun Tiwari, Riley Rogers, new AM Charles Hawkins attended. Discussed renewal terms, product updates on HG and TrustRadius sides, and strategic alignment following Zendesk internal changes. Varun asked about Zendesk receipt of additional HG data feeds. Tiana DeNeen also joined. Riley Rogers co-hosted as TR CSM.' },
      { ts: 'Jul 15 · 10:00 AM', csm: 'riley', account: 'zScaler',
        note: 'Renewal call partially aborted — key stakeholders (Vivian, Max) absent; reschedule required.',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Scheduled renewal discussion but key decision-makers Vivian and Max from Zscaler were absent. Sarah Gamino confirmed the meeting needs rescheduling with the full stakeholder set (Vivian + Max required). Riley also noted a $45K commission discrepancy on this account that needs finance resolution. Anderson (AM) attended.' },
      { ts: 'Jul 15 · 10:30 AM', csm: 'riley', account: 'Paylocity',
        note: 'Part 2 TR platform overview: walked through Matt\'s open items list with Olivia McFadden.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Second session of TrustRadius platform overview with Olivia McFadden. Riley worked through open items provided by Matt (internal Paylocity stakeholder). Olivia explored the platform after Part 1 with no major blockers. Session part of ongoing onboarding progression for Paylocity\'s TR subscription.' },
      { ts: 'Jul 15 · 11:00 AM', csm: 'pam', account: 'Epicor',
        note: 'Bi-weekly: TrustQuotes widget setup walkthrough and review response guidance.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Sam Malecek (Epicor) asked about the TrustQuotes widget. Pam walked through Reviews → Quotes → Trust Quotes for Web → widget builder → JS code snippet for the web design team. Also covered review response best practices via previously sent email. Sam still needs to review that email and implement the widget.' },
      { ts: 'Jul 15 · 11:45 AM', csm: 'pam', account: 'Microsoft',
        note: 'Black Hat VIP mixer event logistics — case studies confirmed OK; video placement TBD.',
        mins: 15, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Event planning call with Maryann Okonkwo (MSFT SCI) and Dynamic Events (Caitlin, Hannah) for TrustRadius participation in the Black Hat VIP mixer. Case studies confirmed approved (Elliot). Screen placement for video content still TBD — Dynamic Events to confirm. Pam had mic issues at start but participated throughout.' },
    ],
    pulses: [
      { csm: 'nick',   account: 'Accenture',          health: 'Concerning', note: 'Procurement renewal stuck — 3 docs pending signature, Accenture leadership questions unresolved.' },
      { csm: 'riley',  account: 'IBM',                 health: 'Healthy',   note: 'Biweekly TR sync — campaigns running, review counts healthy, Buyer\'s Choice pipeline active.' },
      { csm: 'atisha', account: 'Databricks Inc.',     health: 'Concerning', note: 'Data S3 endpoint issue — Petar wants previous data share format; Atisha + Rishabh investigating.' },
      { csm: 'varun',  account: 'CBTS',                health: 'Healthy',   note: 'Contact data feedback positive after 2 months; Mitchell activated data; no issues reported.' },
      { csm: 'rani',   account: 'Amazon Web Services', health: 'Healthy',   note: 'Bi-weekly — renewal mid-July; AWS AI portfolio has near-zero TR reviews (expansion gap flagged).' },
      { csm: 'varun',  account: 'Zendesk',             health: 'Healthy',   note: 'Renewal discussion with Joyce Chang; joint call with Riley + AM Charles Hawkins; strategic alignment.' },
      { csm: 'riley',  account: 'zScaler',             health: 'Concerning', note: 'Renewal call failed to include key stakeholders — reschedule required with Vivian + Max.' },
      { csm: 'riley',  account: 'Paylocity',           health: 'Healthy',   note: 'Part 2 TR platform overview complete; Olivia McFadden progressing onboarding smoothly.' },
      { csm: 'pam',    account: 'Epicor',              health: 'Healthy',   note: 'Bi-weekly — TrustQuotes widget JS snippet shared; review response guidance sent to Sam.' },
      { csm: 'pam',    account: 'Microsoft',           health: 'Healthy',   note: 'Black Hat VIP mixer planning — case studies approved; video screen placement to confirm.' },
    ],
  };
}

function dayMeta_2026_07_15() {
  return {
    pills: [
      ['dot-teal',  '10 Calls'],
      ['dot-red',   '3 Concerning'],
      ['dot-amber', '2 Expansion'],
      ['dot-green', '10 Pulses'],
      ['dot-grey',  'Wed Jul 15 · 87 scanned'],
    ],
    tabs: ['Overview', 'Calls (10)', 'Pulses (10)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_15() {
  return `<div class="section-label">Team Activity &mdash; Wednesday July 15, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Jul 15 &mdash; 87 recordings scanned</strong> via SFDC SOQL &middot; <strong>10 confirmed calls</strong> across 6 CSMs &middot; 3 Concerning signals &middot; 2 Expansion opportunities
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>3 Concerning:</strong> Accenture &mdash; procurement renewal docs stalled with signature gap &middot; Databricks &mdash; S3 data delivery endpoint mismatch &middot; Zscaler &mdash; renewal call missing key decision-makers
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>2 Expansion signals:</strong> AWS &mdash; near-zero TR reviews across AI portfolio (2 reviews in all of 2026) &middot; Zendesk &mdash; renewal + strategic alignment discussion with new AM
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">105m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM (biweekly TR sync, campaigns) &middot; Zscaler (renewal call aborted &mdash; reschedule) &middot; Paylocity (Part 2 TR overview)</div>
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
      <div class="csm-account-note">CBTS (contact data feedback positive) &middot; Zendesk (renewal + strategic alignment, joint w/ Riley)</div>
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
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Epicor (TrustQuotes widget walkthrough) &middot; Microsoft (Black Hat VIP mixer planning)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Accenture (procurement renewal docs stalled &mdash; 4:30 AM APAC call)</div>
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
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">AWS (biweekly cadence &mdash; renewal mid-Jul, TR review gap in AI portfolio)</div>
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
      <div class="csm-account-note">Databricks (S3 data endpoint mismatch &mdash; Petar wants previous data share format)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled &mdash; no recordings with transcript (Informatica Weekly &#215;2)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events matched recordings &mdash; SAS Institute (no transcript) &middot; Cockroach Labs (speaker label mismatch: &ldquo;Andy via superpowered.me&rdquo;)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_15() {
  return `<div class="calls-table">
  <div style="background:#1c1f26;border:1px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CB; <strong>10 confirmed calls</strong> &middot; 87 recordings scanned via SFDC SOQL &middot; 42 with transcripts, 45 without &middot; <strong>3 Concerning</strong> &middot; <strong>2 Expansion</strong>
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 8px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Unconfirmed calls:</strong> Andy Lim / Cockroach Labs &mdash; transcript shows &ldquo;Andy (via superpowered.me)&rdquo; — not formally confirmed by speaker label &middot; Andy Lim / SAS Institute &mdash; recording matched, no transcript &middot; Atisha Waghela / Deloitte &mdash; recording matched, no transcript &middot; Pam Huck / Datadog &mdash; recording matched, no transcript
  </div>
  </div>`;
}

function dayPulsesHTML_2026_07_15() {
  const cards = [
    { csm: 'nick',   health: 'Concerning', account: 'Accenture',          opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 15 &middot; Ad-hoc',
      excerpt: 'Jul 15 NJ: Accenture procurement renewal stalled (4:30 AM PT, 30 min). Three renewal docs (Accenture, Avanade, affiliate addendum) pending signature. Accenture leadership raised questions; Nitin Kapoor escalated. Praveen Kumar (research team) present.' },
    { csm: 'riley',  health: 'Healthy',    account: 'IBM',                 opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jul 15 &middot; Recurring',
      excerpt: 'Jul 15 RR: IBM biweekly TR sync (7:00 AM PT, 45 min). Persona targeting + product overlap campaigns launched end of June. Buyer\'s Choice pipeline review: Cognos, SPSS, Storage Flash, Verify, Watson X products. Mihala back from vacation; all model reports delivered.' },
    { csm: 'atisha', health: 'Concerning', account: 'Databricks Inc.',     opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jul 15 &middot; Ad-hoc',
      excerpt: 'Jul 15 AW: Databricks data delivery issue (7:30 AM PT, 30 min). Petar Zoric does not want current S3 endpoint; wants previous data share format. Atisha + Rishabh Wadhwa (Customer Solutions) investigating. Rachna from Databricks data team had prior discussions ~2 weeks ago.' },
    { csm: 'varun',  health: 'Healthy',    account: 'CBTS',                opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 15 &middot; Recurring',
      excerpt: 'Jul 15 VT: CBTS bi-weekly sync (7:30 AM PT, 30 min). Contact data feedback positive after 2 months of delivery. Mitchell VanderKam: no issues, already activated data. Timothy Selaty managing significantly increased AI workload. Ishan (contact specialist) joined.' },
    { csm: 'rani',   health: 'Healthy',    account: 'Amazon Web Services', opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jul 15 &middot; Recurring',
      excerpt: 'Jul 15 RG: AWS bi-weekly cadence (9:00 AM PT, 45 min). Renewal timing: mid-July (contract ~50% per Rani). Critical gap: only 2 TR reviews across AWS entire AI portfolio in 2026. Case study pipeline (Swenson/Qwik) in progress. Outreach to Luis + Madavi for multi-threading.' },
    { csm: 'varun',  health: 'Healthy',    account: 'Zendesk',             opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 15 &middot; Ad-hoc',
      excerpt: 'Jul 15 VT: Zendesk renewal + strategic alignment (9:00 AM PT, 30 min). Joint call with Riley Rogers + new AM Charles Hawkins. Joyce Chang (Zendesk) + Tiana DeNeen attended. Discussed renewal terms, HG/TR product updates, and strategic alignment post-Zendesk internal changes.' },
    { csm: 'riley',  health: 'Concerning', account: 'zScaler',             opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jul 15 &middot; Ad-hoc',
      excerpt: 'Jul 15 RR: Zscaler renewal call (10:00 AM PT, 30 min). Key decision-makers Vivian and Max absent. Sarah Gamino confirmed reschedule required. Riley + Anderson (AM) present. $45K commission discrepancy on this account also flagged for finance resolution.' },
    { csm: 'riley',  health: 'Healthy',    account: 'Paylocity',           opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jul 15 &middot; Ad-hoc',
      excerpt: 'Jul 15 RR: Paylocity Part 2 TR platform overview (10:30 AM PT, 30 min). Walked through Matt\'s open items list with Olivia McFadden. No major blockers; onboarding progressing. Part of ongoing TR subscription onboarding sequence.' },
    { csm: 'pam',    health: 'Healthy',    account: 'Epicor',              opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Pam Huck', csmlbl: 'Pam Huck',
      change: 'Jul 15 &middot; Recurring',
      excerpt: 'Jul 15 PH: Epicor bi-weekly TR sync (11:00 AM PT, 30 min). Sam Malecek asked about TrustQuotes widget. Pam walked through JS code snippet for web design team. Review response guidance email sent; Sam to read and implement. Good engagement.' },
    { csm: 'pam',    health: 'Healthy',    account: 'Microsoft',           opp: 'Vitally Pulse &mdash; Jul 15 Call',
      arr: 'Enterprise &middot; Pam Huck', csmlbl: 'Pam Huck',
      change: 'Jul 15 &middot; Ad-hoc',
      excerpt: 'Jul 15 PH: MSFT Black Hat VIP mixer planning (11:45 AM PT, 15 min). Case studies approved by Elliot. Video screen placement at venue TBD — Dynamic Events to confirm. Pam joining as TR partner at the event.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div><strong>${c.account}</strong><span style="color:#94a3b8;font-size:11px;margin-left:8px;">${c.opp}</span></div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_15() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0715-1') ? 'done' : ''}" data-csm="nick" id="action-0715-1">
      <div class="action-checkbox ${doneActions.has('0715-1') ? 'checked' : ''}" onclick="toggleAction('0715-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Accenture &mdash; Unblock procurement renewal signature logjam</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Nick Johnson &middot; Three renewal docs (Accenture order form, Avanade order form, affiliate addendum) are pending signatures but held up by Accenture leadership questions. Nick should identify the specific objections from Nitin Kapoor&rsquo;s leadership, work with the HG legal/sales team to provide clarifying answers, and re-engage Kelly Gumber and Praveen Kumar to unblock signature. Escalate to HG leadership if needed given the dollar size.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0715-2') ? 'done' : ''}" data-csm="riley" id="action-0715-2">
      <div class="action-checkbox ${doneActions.has('0715-2') ? 'checked' : ''}" onclick="toggleAction('0715-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F501; Zscaler &mdash; Reschedule renewal call with complete stakeholder set</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Riley Rogers &middot; Today&rsquo;s renewal call was aborted due to absence of key decision-makers Vivian and Max. Sarah Gamino confirmed reschedule is needed. Riley and Anderson (AM) should coordinate a new meeting date that includes Vivian, Max, and Christian from Zscaler. Also: resolve the $45K commission discrepancy with finance (appears it was logged under Varun from last month).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0715-3') ? 'done' : ''}" data-csm="atisha" id="action-0715-3">
      <div class="action-checkbox ${doneActions.has('0715-3') ? 'checked' : ''}" onclick="toggleAction('0715-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F527; Databricks &mdash; Resolve S3 data delivery endpoint with Petar and Rachna</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH</span>Atisha Waghela &middot; Petar Zoric wants to revert to the previous data share format instead of the current S3 endpoint. Atisha and Rishabh Wadhwa need to reconnect with Rachna from the Databricks data team (who had discussed this ~2 weeks ago) to determine the correct S3 endpoint configuration, document what changed, and confirm the fix before next delivery cycle. Keep Petar updated with a clear ETA.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0715-4') ? 'done' : ''}" data-csm="rani" id="action-0715-4">
      <div class="action-checkbox ${doneActions.has('0715-4') ? 'checked' : ''}" onclick="toggleAction('0715-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; AWS &mdash; Build TR review campaign for AI portfolio (near-zero coverage gap)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Rani Guy &middot; AWS has only 2 TrustRadius reviews across its entire AI portfolio in 2026 &mdash; a significant gap versus competitors who are actively collecting reviews. Rani should work with Mark Fell and the AWS product teams to design a targeted review collection campaign for the AI product portfolio (Amazon Bedrock, SageMaker, etc.). Also: confirm renewal contract terms with Luis and Madavi this week (mid-July timing).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0715-5') ? 'done' : ''}" data-csm="varun" id="action-0715-5">
      <div class="action-checkbox ${doneActions.has('0715-5') ? 'checked' : ''}" onclick="toggleAction('0715-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F91D; Zendesk &mdash; Follow up on renewal terms and HG data feed confirmation</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM</span>Varun Tiwari &middot; After today&rsquo;s renewal discussion with Joyce Chang, Varun should send a follow-up email confirming the HG data feed question (what additional data Zendesk is currently receiving from HG) and any specific renewal terms discussed. Loop in Riley Rogers and new AM Charles Hawkins on the follow-up. Confirm Tiana DeNeen&rsquo;s role in the renewal process.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0715-6') ? 'done' : ''}" data-csm="andy" id="action-0715-6">
      <div class="action-checkbox ${doneActions.has('0715-6') ? 'checked' : ''}" onclick="toggleAction('0715-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4AC; Cockroach Labs &mdash; Confirm Vishnu provisioning access and fix speaker label issue</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW</span>Andy Lim &middot; Today&rsquo;s Cockroach Labs call (confirmed by Tracie Hart: &ldquo;Andy from HG is resending the invite&rdquo;) focused on resending provisioning access for Vishnu. Andy should confirm Vishnu received and accepted the new invite. Note: Andy&rsquo;s Weflow speaker label shows as &ldquo;Andy (via superpowered.me)&rdquo; &mdash; flag to IT to update Zoom display name so future calls are auto-confirmed by transcript detection.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─── July 16, 2026 ───────────────────────────────────────────────────────────

function dayData_2026_07_16() {
  return {
    calls: [
      { ts: 'Jul 16 · 7:30 AM', csm: 'nick', account: 'Siemens',
        note: 'Biweekly sync — Siemens reorg, HG Contacts pitch',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Checked in on Siemens restructuring and reorg impact on SDR team activity. Q4 is slow for outbound. Nick introduced HG Contacts as an alternative to ZoomInfo — real-time validated emails and phone numbers at the point of delivery vs. static database approach.' },
      { ts: 'Jul 16 · 7:30 AM', csm: 'riley', account: 'Intuit',
        note: 'TR renewal + premium content upsell discussion',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Renewal discussion for two TrustRadius agreements renewing in October. Riley also raised premium content offering and geo optimization options. Natalie Pratt noted Intuit FY is ending this month and finance decisions are still in flight.' },
      { ts: 'Jul 16 · 8:00 AM', csm: 'nick', account: 'UKG',
        note: 'Project Nova AI enrichment — HG scope discussion',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Gautam Gupta (UKG) shared Project Nova AI EP initiative. Augie confirmed HG delivers on the enrichment layer but not CRM deduplication/orchestration. Gautam evaluating Clay and Traction Complete as complementary tools alongside HG.' },
      { ts: 'Jul 16 · 8:00 AM', csm: 'rani', account: 'Lenovo',
        note: 'Monthly sync — RGIP new platform adoption, Nidhi re-engaged',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Monthly sync to drive RGIP new platform adoption for Nidhi\'s Lenovo APAC team. Nidhi rejoined after a busy stretch; Adrian and Rani confirmed platform parity and encouraged migration. Nidhi also raised a question about Fiona O\'Brien from a separate team.' },
      { ts: 'Jul 16 · 8:00 AM', csm: 'rani', account: 'Amazon Business',
        note: 'V2 migration schema — 5→4 file format review',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Amazon reviewing V2 data delivery schema: currently receives 5 files (URL, spend, install, IV, URL map), moving to 4 in V2. David Larson asked about IV/URL overlap. Rani had a double-booking and handed off to Alexi Mouarkach (HG SE) partway through.' },
      { ts: 'Jul 16 · 9:00 AM', csm: 'pam', account: 'Oracle',
        note: 'Monthly sync — major Oracle team reorg still settling',
        mins: 45, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Oracle team in flux: Karen moved to EMEA-specific group, Laura transitioned out of vendor management roles entirely. Joe Lampitt back from PTO Tuesday and now reports to John Malone (recently returned). Joe hasn\'t spoken with John yet — team structure still unsettled.' },
      { ts: 'Jul 16 · 9:00 AM', csm: 'varun', account: 'OpenText',
        note: 'Intro call — competitor install data validation',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Intro call with Kirk Koskey (OpenText OEM Sales) to validate HG competitor install data. Kirk pushed back before the pitch, wanting to set context about OpenText\'s 25K-person, 40-product-group structure. Strong interest in embedded threat intel feeds; outcome: discovery mode.' },
      { ts: 'Jul 16 · 9:30 AM', csm: 'rani', account: 'NetApp',
        note: 'Monthly sync — FY end wrap, Bay Area event preview',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'NetApp end-of-fiscal-year wrap with Ross Ackerman. HG discussed upcoming Bay Area customer event planned for September (similar to prior year Palo Alto event). Relationship strong; Ross open to attending.' },
      { ts: 'Jul 16 · 10:00 AM', csm: 'rani', account: 'Hitachi Vantara',
        note: 'Renewal at risk — budget cuts, new-logo focus shift',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Hitachi shifting marketing focus to new logo acquisition with a specific numerical target for the first time. Budget cuts across the industry noted. Adrian and Rani presenting renewal options and new TR products (Contacts, MCP) at flexible pricing to avoid downsell. Rani later revealed on Cloudflare call: ~$500K downsell expected.' },
      { ts: 'Jul 16 · 10:30 AM', csm: 'rani', account: 'Cloudflare',
        note: 'Post-Hitachi debrief + Cloudflare renewal prep',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Post-Hitachi debrief: Rani flagged ~$500K downsell risk. Pivoted to Cloudflare renewal planning with Mardigan (TrustRadius) — goal to establish cadence with Brooke Leslie, discuss geo/SEO value, and navigate on-prem product deprecation (customers consolidating to cloud). Cisco situation also flagged as at risk.' },
      { ts: 'Jul 16 · 11:00 AM', csm: 'rani', account: 'Workday',
        note: 'TR renewal contract review — new Workday procurement contact',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'TrustRadius renewal discussion: two agreements (one auto-renew, one not), reviewed master agreement from Dec 2019. Andrea Poljakovic is new to the account — previous contact Jason left without full knowledge transfer. Ron from procurement reviewed contract terms. Mardigan working to reset and requalify value delivery.' },
      { ts: 'Jul 16 · 11:00 AM', csm: 'pam', account: 'Oracle NetSuite',
        note: 'TR sync — intent data walkthrough, AI dashboard preview',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Pam shared 90-day TrustRadius data: 10K+ page views, 865 companies showing intent — zero CTA clicks noted by David Kearney as a gap. Pam introduced AI dashboard (LLM citation/sentiment tracking) and Geo dashboard at no additional cost. Invited David to buyer disconnect report event July 21.' },
      { ts: 'Jul 16 · 12:00 PM', csm: 'rani', account: 'Cloudflare',
        note: 'Renewal at risk — ROI gap, BDR-heavy usage base',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Robert Goldfarb (Cloudflare) flagged ROI justification gap: 70-80% of users are BDRs, hard to show pipeline attribution to pass procurement approval. Robert exploring expanding API-side product coverage. Renewal requires a demonstrable ROI story or procurement will not approve.' },
      { ts: 'Jul 16 · 12:00 PM', csm: 'riley', account: 'SAP Concur',
        note: 'Recurring cadence — Ella Teets new contact onboarding',
        mins: 60, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Recurring TrustRadius cadence call. Riley welcomed Ella Teets as a new SAP Concur contact joining Stephanie Mair. Ella will onboard to the TrustRadius partnership and has questions forthcoming. World Cup discussion opened the call (Argentina win in Atlanta).' },
    ],
    pulses: [
      { csm: 'nick', account: 'Siemens', health: 'Healthy', note: 'Biweekly sync — Siemens reorg underway, Q4 slow for outbound. Nick pitched HG Contacts as ZoomInfo alternative (validated at point of delivery).' },
      { csm: 'riley', account: 'Intuit', health: 'Healthy', note: 'TR renewal discussion — October renewals flagged, premium content and geo optimization options raised. Intuit FY ending this month.' },
      { csm: 'nick', account: 'UKG', health: 'Healthy', note: 'Project Nova AI enrichment scope call — HG confirmed on enrichment layer; Gautam evaluating Clay and Traction Complete alongside HG.' },
      { csm: 'rani', account: 'Lenovo', health: 'Healthy', note: 'Monthly sync — Nidhi re-engaged after busy period. RGIP new platform adoption discussion; parity confirmed. Nidhi raises Fiona O\'Brien cross-team question.' },
      { csm: 'rani', account: 'Amazon Business', health: 'Healthy', note: 'V2 schema review — Amazon mapping from 5 to 4 files. Rani handed off to Alexi Mouarkach (HG SE) mid-call due to double-booking.' },
      { csm: 'pam', account: 'Oracle', health: 'Healthy', note: 'Monthly sync — Karen and Laura both transitioned out. Joe Lampitt now reports to John Malone. Team structure still unsettled.' },
      { csm: 'varun', account: 'OpenText', health: 'Healthy', note: 'Intro call — Kirk Koskey (OEM Sales) engaged on competitor install data. Discovery mode; Kirk set context before pitch. Strong potential.' },
      { csm: 'rani', account: 'NetApp', health: 'Healthy', note: 'Monthly sync — FY end wrap with Ross Ackerman. Bay Area customer event planned for September. Relationship strong.' },
      { csm: 'rani', account: 'Hitachi Vantara', health: 'Concerning', note: 'Renewal risk — Hitachi shifting to new-logo focus, budget cuts across industry. ~$500K downsell expected. Adrian/Rani presenting flexible renewal options.' },
      { csm: 'rani', account: 'Cloudflare', health: 'Concerning', note: 'Pre-call debrief with Mardigan — post-Hitachi debrief, Cloudflare renewal planning. On-prem product deprecation complicating consolidation.' },
      { csm: 'rani', account: 'Workday', health: 'Healthy', note: 'TR renewal contract review — Andrea Poljakovic new to account (Jason left). Ron from procurement reviewed master agreement. Reset in progress.' },
      { csm: 'pam', account: 'Oracle NetSuite', health: 'Healthy', note: 'TR sync — 10K+ page views, 865 intent companies in 90 days, zero CTA clicks. AI + Geo dashboard introduced at no additional cost. Buyer disconnect event July 21.' },
      { csm: 'rani', account: 'Cloudflare', health: 'Concerning', note: 'Renewal at risk — 70-80% BDR usage, ROI gap flagged by Robert Goldfarb. Procurement approval blocked without ROI proof. API expansion being explored.' },
      { csm: 'riley', account: 'SAP Concur', health: 'Healthy', note: 'Recurring cadence — Ella Teets onboarding as new contact alongside Stephanie Mair. Riley managing relationship, questions forthcoming.' },
    ],
  };
}

function dayMeta_2026_07_16() {
  return {
    pills: [
      ['dot-teal',  '14 Calls'],
      ['dot-red',   '3 Concerning'],
      ['dot-amber', '3 Expansion'],
      ['dot-green', '14 Pulses'],
      ['dot-grey',  'Thu Jul 16 · 81 scanned'],
    ],
    tabs: ['Overview', 'Calls (14)', 'Pulses (14)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_16() {
  return `<div class="section-label">Team Activity &mdash; Thursday July 16, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Jul 16 &mdash; 81 recordings scanned</strong> via SFDC SOQL &middot; <strong>14 confirmed calls</strong> across 5 CSMs &middot; 3 concerning signals &middot; 3 expansion signals
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Hitachi Vantara</strong> renewal at risk &mdash; ~$500K downsell expected; budget cuts, new-logo focus shift &middot; <strong>Cloudflare</strong> ROI gap flagged by Robert Goldfarb; BDR-heavy usage, procurement approval blocked &middot; Both accounts need urgent action plans this week
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> UKG/Gautam (Project Nova AI enrichment) &middot; OpenText (Kirk Koskey intro, competitor install data validation) &middot; Oracle NetSuite (AI + Geo dashboard upsell by Pam)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">7 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">7</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">7</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">3</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">210m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Hitachi (renewal risk, $500K downsell) &middot; Cloudflare x2 (ROI gap, BDR usage) &middot; Lenovo (RGIP adoption) &middot; Amazon Business (V2 schema) &middot; NetApp (FY wrap) &middot; Workday (TR renewal reset)</div>
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
      <div class="csm-account-note">Siemens (biweekly, Contacts pitch) &middot; UKG/Gautam (Project Nova AI enrichment, expansion signal)</div>
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
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Intuit (TR renewal + premium content) &middot; SAP Concur (recurring, Ella Teets onboarding)</div>
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
        <div><div class="metric-num m-grey">75m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Oracle (monthly sync, team reorg) &middot; Oracle NetSuite (TR sync, AI dashboard upsell)</div>
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
      <div class="csm-account-note">OpenText (intro call, Kirk Koskey, competitor install data validation)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">6 events scheduled &mdash; OpenAI recording found (no transcript) &mdash; Sage, Lumen, Lumen 2.0, Paycor, delaware Netherlands: no recording matched</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">6 events scheduled &mdash; Insight Direct recording (4:30 AM PDT, no transcript) &mdash; SysPro, Kong, Apple, Saviynt, Versa: no matching recording</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; Pipeline Group recording found, no CSM speaker detected in transcript</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_16() {
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Hitachi Vantara &amp; Cloudflare</strong> — 3 concerning signals today. Hitachi: ~$500K downsell expected (budget cuts, new-logo pivot). Cloudflare: ROI gap flagged by Robert Goldfarb; BDR-heavy usage base cannot demonstrate pipeline attribution.
  </div>
  <div style="background:#162032;border:1px solid #475569;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x26A0; <strong>Unconfirmed (no transcript):</strong> Atisha / Insight Direct (4:30 AM PT early call) &middot; Riley / Arcoro (11:30 AM PT) &middot; Divyam / OpenAI Weekly (10:30 AM PT)
  </div>
  <div class="calls-table"></div>`;
}

function dayPulsesHTML_2026_07_16() {
  const cards = [
    { csm:'nick', health:'Healthy', account:'Siemens',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Nick Johnson',
      csmlbl:'Nick Johnson',
      change:'Jul 16 &middot; Biweekly Sync',
      excerpt:'7/16 NJ: Biweekly sync (7:30 AM, 30 min). Siemens reorg ongoing — Q4 slow for outbound. Nick introduced HG Contacts as ZoomInfo alternative with real-time validated data.' },
    { csm:'riley', health:'Healthy', account:'Intuit',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Riley Rogers',
      csmlbl:'Riley Rogers',
      change:'Jul 16 &middot; TR Renewal Discussion',
      excerpt:'7/16 RR: TR renewal discussion (7:30 AM, 30 min). Two October renewals flagged. Premium content offering and geo optimization raised. Intuit FY ending this month — finance decisions pending.' },
    { csm:'nick', health:'Healthy', account:'UKG',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Nick Johnson',
      csmlbl:'Nick Johnson',
      change:'Jul 16 &middot; Quick Sync (Expansion)',
      excerpt:'7/16 NJ: Project Nova AI enrichment scope call (8:00 AM, 30 min). Gautam confirmed HG for enrichment layer; not CRM dedup/orchestration. Gautam evaluating Clay and Traction Complete alongside HG.' },
    { csm:'rani', health:'Healthy', account:'Lenovo',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 16 &middot; Monthly Sync',
      excerpt:'7/16 RG: Monthly sync (8:00 AM, 30 min). Nidhi re-engaged from Lenovo APAC. RGIP new platform adoption discussed — parity confirmed. Fiona O\'Brien cross-team query raised.' },
    { csm:'rani', health:'Healthy', account:'Amazon Business',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 16 &middot; V2 Schema Review',
      excerpt:'7/16 RG: V2 migration schema review (8:00 AM, 30 min). Amazon mapping 5→4 files in V2. Rani handed off to HG SE Alexi Mouarkach due to double-booking. Customer-initiated technical session.' },
    { csm:'pam', health:'Healthy', account:'Oracle',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Pam Huck',
      csmlbl:'Pam Huck',
      change:'Jul 16 &middot; Monthly Sync',
      excerpt:'7/16 PH: Monthly sync (9:00 AM, 45 min). Major Oracle team reorg: Karen → EMEA, Laura → out of vendor roles. Joe Lampitt now reports to John Malone. Team structure still unsettled.' },
    { csm:'varun', health:'Healthy', account:'OpenText',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Varun Tiwari',
      csmlbl:'Varun Tiwari',
      change:'Jul 16 &middot; Intro (Expansion)',
      excerpt:'7/16 VT: Intro call with Kirk Koskey (OpenText OEM Sales, 9:00 AM, 30 min). Competitor install data validation focus. Kirk set context on OpenText\'s scope before pitch — discovery mode. Strong potential.' },
    { csm:'rani', health:'Healthy', account:'NetApp',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 16 &middot; Monthly Sync',
      excerpt:'7/16 RG: Monthly sync (9:30 AM, 30 min). FY end wrap with Ross Ackerman. Upcoming Bay Area customer event discussed for September. Relationship strong; Ross open to attending.' },
    { csm:'rani', health:'Concerning', account:'Hitachi Vantara',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 16 &middot; Renewal Risk',
      excerpt:'7/16 RG: Renewal sync (10:00 AM, 30 min). Hitachi pivoting to new-logo focus with first-ever numerical target. Budget cuts. ~$500K downsell expected. Rani/Adrian presenting flexible renewal options and new TR products.' },
    { csm:'rani', health:'Concerning', account:'Cloudflare',
      opp:'Vitally Pulse &mdash; Jul 16 Call (connect)',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 16 &middot; Connect + Renewal Prep',
      excerpt:'7/16 RG: Pre-call debrief (10:30 AM, 30 min). Post-Hitachi: $500K downsell. Cloudflare renewal planning with Mardigan — on-prem product deprecation complicating consolidation. Cisco also flagged as at risk.' },
    { csm:'rani', health:'Healthy', account:'Workday',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 16 &middot; TR Renewal Reset',
      excerpt:'7/16 RG: TR renewal contract review (11:00 AM, 30 min). Andrea Poljakovic new to account (Jason left). Ron from procurement reviewed master agreement (Dec 2019). Reset and requalification in progress.' },
    { csm:'pam', health:'Healthy', account:'Oracle NetSuite',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Pam Huck',
      csmlbl:'Pam Huck',
      change:'Jul 16 &middot; TR Sync',
      excerpt:'7/16 PH: TR sync (11:00 AM, 30 min). 10K+ page views, 865 intent companies in 90 days, zero CTA clicks. AI + Geo dashboard introduced at no cost. Buyer disconnect event July 21 shared.' },
    { csm:'rani', health:'Concerning', account:'Cloudflare',
      opp:'Vitally Pulse &mdash; Jul 16 Call (renewal)',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 16 &middot; Renewal At Risk',
      excerpt:'7/16 RG: Cloudflare renewal discussion (12:00 PM, 30 min). Robert Goldfarb: 70-80% BDR usage, ROI gap, procurement won\'t approve without attribution proof. Exploring API-side expansion to build ROI case.' },
    { csm:'riley', health:'Healthy', account:'SAP Concur',
      opp:'Vitally Pulse &mdash; Jul 16 Call',
      arr:'Enterprise &middot; Riley Rogers',
      csmlbl:'Riley Rogers',
      change:'Jul 16 &middot; Recurring Cadence',
      excerpt:'7/16 RR: Recurring TR cadence (12:00 PM, 60 min). Ella Teets onboarding as new SAP Concur contact alongside Stephanie Mair. Riley managing relationship. Ella has questions forthcoming.' },
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

function dayActionsHTML_2026_07_16() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0716-1')?'done':''}" data-csm="rani" id="action-0716-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0716-1')?'checked':''}" onclick="toggleAction('0716-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Hitachi Vantara &mdash; Build renewal retention plan to prevent $500K downsell</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Hitachi shifting to new-logo focus with budget cuts. Present creative bundle with TR Contacts/MCP at flat or minimal pricing. Loop in Adrian Escobar. Target: proposal by Jul 18.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0716-2')?'done':''}" data-csm="rani" id="action-0716-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0716-2')?'checked':''}" onclick="toggleAction('0716-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Cloudflare &mdash; Develop ROI proof case to unblock procurement approval</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Robert Goldfarb flagged: 70-80% BDR users, no pipeline attribution story. Work with Mardigan to build ROI narrative (API usage + BDR pipeline impact). Explore product coverage expansion. Target: ROI deck by Jul 21.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0716-3')?'done':''}" data-csm="varun" id="action-0716-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0716-3')?'checked':''}" onclick="toggleAction('0716-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; OpenText &mdash; Send tailored follow-up for Kirk Koskey post-intro</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Kirk set context on OpenText OEM Sales scope before letting the pitch proceed. Send materials tailored to embedded threat intel use case and competitor install data validation for 25K+ employee, 40-product-group structure.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0716-4')?'done':''}" data-csm="pam" id="action-0716-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0716-4')?'checked':''}" onclick="toggleAction('0716-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F3DB; Oracle &mdash; Monitor team reorg and re-establish stakeholder map</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck &middot; Karen and Laura both transitioned out; Joe Lampitt now reports to John Malone (recently returned). Joe hasn't spoken with John yet. Ensure new stakeholder contacts are mapped and onboarded before next sync.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0716-5')?'done':''}" data-csm="nick" id="action-0716-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0716-5')?'checked':''}" onclick="toggleAction('0716-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Siemens &mdash; Schedule HG Contacts demo while team is in slow Q4 period</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; Kaden confirmed Q4 is slow at Siemens (reorg, admin focus, minimal outbound). Good window to get a Contacts demo on the calendar. Kaden uses ZoomInfo for US; Lucia for LATAM/EMEA — HG Contacts can be differentiated as real-time-validated alternative.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0716-6')?'done':''}" data-csm="rani" id="action-0716-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0716-6')?'checked':''}" onclick="toggleAction('0716-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C4; Workday &mdash; Complete contract audit and confirm auto-renew terms with Andrea</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Rani Guy + Mardigan &middot; Two TR agreements: one auto-renews, one does not. Andrea Poljakovic is new to account — Jason left without knowledge transfer. Confirm which agreement auto-renews, align on value delivery, and schedule follow-up with Andrea to requalify.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─── 2026-07-17 ──────────────────────────────────────────────────────────────

function dayData_2026_07_17() {
  return {
    calls: [
      { ts: 'Jul 17 · 7:30 AM', csm: 'atisha', account: 'Insight',
        note: 'Walked Insight France team through custom HG platform guide for Microsoft opp identification and ABM/sales planning workflows.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha led Insight France team through a step-by-step HG platform guide to identify Microsoft opportunities and implement HG data into ABM/sales planning workflows. France team had a complex cross-regional use case; Atisha pre-built the guide before the call.' },
      { ts: 'Jul 17 · 9:00 AM', csm: 'atisha', account: 'Apple Inc.',
        note: 'Bi-weekly cadence: AI outreach follow-up (Francis→Juan), HG leadership summit update, early September event planning.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Standing bi-weekly sync. HG AI head Francis reached out to Juan (Apple) after Austin meeting—awaiting response. HG leadership summit coming up (enterprise customers invited, Atisha not attending). Early-stage planning for September HG event—no confirmed logistics yet.' },
      { ts: 'Jul 17 · 9:30 AM', csm: 'rani', account: 'Hitachi Vantara',
        note: 'Hitachi disclosed full contract budget reduction. Team pivoting to champion-expansion strategy to recover lost value.',
        mins: 30, health: 'Concerning',
        nature: 'Recurring', initiator: 'Customer', purpose: 'Issue',
        detail: 'Hitachi (Miguel Ortega) disclosed significant companywide budget cuts and delivered an unexpected full contract reduction request. Adrian Escobar (HG) surprised by the magnitude. Team is pivoting to an internal champion-expansion play: identify Hitachi employees who consume HG data but are not on the current contract, then get in front of them to rebuild contract value.' },
    ],
    pulses: [
      { csm: 'atisha', account: 'Insight', health: 'Healthy',
        note: 'Value-demo session: HG Microsoft-opp identification guide delivered to France team.' },
      { csm: 'atisha', account: 'Apple Inc.', health: 'Healthy',
        note: 'Bi-weekly sync: AI outreach, leadership summit, September event in early planning.' },
      { csm: 'rani', account: 'Hitachi Vantara', health: 'Concerning',
        note: 'Full contract reduction requested. Budget cuts companywide. Champion expansion strategy initiated.' },
    ],
  };
}

function dayMeta_2026_07_17() {
  return {
    pills: [
      ['dot-teal',  '3 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-green', '3 Pulses'],
      ['dot-grey',  'Fri Jul 17 · 46 scanned'],
    ],
    tabs: ['Overview', 'Calls (3)', 'Pulses (3)', 'Action Items (5)'],
  };
}

function dayOverviewHTML_2026_07_17() {
  return `<div class="section-label">Team Activity &mdash; Friday July 17, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Jul 17 &mdash; 46 recordings scanned</strong> via SFDC SOQL &middot; <strong>3 confirmed calls</strong> across 2 CSMs &middot; 1 Concerning (Hitachi Vantara) &middot; 1 unconfirmed no-transcript (Westcon &times; Nick)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Hitachi Vantara (Rani Guy) &mdash; Full contract reduction requested.</strong> Miguel Ortega cited companywide budget cuts; full downsell now confirmed. Team pivoting to champion-expansion play to recover value. Immediate executive attention may be needed.
  </div>
  <div class="overview-grid">

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
      <div class="csm-account-note">Hitachi Vantara (full contract reduction, budget cuts &mdash; CRITICAL)</div>
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
      <div class="csm-account-note">Insight (Microsoft-opp guide, ABM planning) &middot; Apple Inc. (bi-weekly, AI outreach, Sep event)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; no recording (SAP/MSIGHTS 6:30 AM PT)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events + 1 unconfirmed &mdash; no transcripts (Capgemini 3:30 AM, Infor 5:00 AM, Westcon 8:00 AM)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">0 CSM events scheduled</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">0 CSM events scheduled</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; no recording (Cisco Renewal Sync 8:00 AM PT)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">0 CSM events scheduled</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_17() {
  return `
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Hitachi Vantara (Concerning):</strong> Full contract budget reduction confirmed. Miguel Ortega cited companywide cuts. Adrian Escobar surprised by magnitude. Champion-expansion strategy initiated.
  </div>
  <div style="background:#1c2333;border:1px solid #64748b;border-left:3px solid #64748b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F4DE; <strong>Unconfirmed (no transcript):</strong> Westcon &times; Nick Johnson (8:00 AM PT, 30 min) &mdash; Recording exists but no transcript synced. Attributed to Nick via SFDC event ownership.
  </div>`;
}

function dayPulsesHTML_2026_07_17() {
  const cards = [
    { csm:'rani', health:'Concerning', account:'Hitachi Vantara',
      opp:'Vitally Pulse &mdash; Jul 17 Call',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 17 &middot; Contract Reduction',
      excerpt:'7/17 RG: Hitachi sync (9:30 AM, 30 min). Miguel Ortega confirmed companywide budget cuts + full contract reduction request. Adrian Escobar surprised by magnitude. Strategy: identify internal HG data consumers not on contract; champion expansion play to recover value. Critical renewal risk.' },
    { csm:'atisha', health:'Healthy', account:'Insight',
      opp:'Vitally Pulse &mdash; Jul 17 Call',
      arr:'Enterprise &middot; Atisha Waghela',
      csmlbl:'Atisha Waghela',
      change:'Jul 17 &middot; Value Demo',
      excerpt:'7/17 AW: Ad-hoc platform session (7:30 AM, 30 min). Insight France team requested complex ABM + sales planning workflow for Microsoft opp identification. Atisha pre-built step-by-step HG platform guide. Strong value demonstration ahead of renewal.' },
    { csm:'atisha', health:'Healthy', account:'Apple Inc.',
      opp:'Vitally Pulse &mdash; Jul 17 Call',
      arr:'Enterprise &middot; Atisha Waghela',
      csmlbl:'Atisha Waghela',
      change:'Jul 17 &middot; Bi-weekly Cadence',
      excerpt:'7/17 AW: Apple bi-weekly sync (9:00 AM, 30 min). Francis (HG AI head) reached out to Juan post-Austin — awaiting response. HG leadership summit update (enterprise customers invited). Early planning for September HG event — logistics TBD.' },
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

function dayActionsHTML_2026_07_17() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0717-1')?'done':''}" data-csm="rani" id="action-0717-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0717-1')?'checked':''}" onclick="toggleAction('0717-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Hitachi Vantara &mdash; Escalate full contract reduction — initiate champion expansion play</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar &middot; Miguel Ortega confirmed full reduction. Immediately identify Hitachi employees consuming HG data who are NOT on current contract. Build list and get in front of those champions (referencing "Anders" idea from call). Loop in leadership given magnitude of downsell risk.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0717-2')?'done':''}" data-csm="atisha" id="action-0717-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0717-2')?'checked':''}" onclick="toggleAction('0717-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Insight &mdash; Follow up to confirm France team can execute the Microsoft-opp workflow</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Custom step-by-step HG platform guide delivered in today's call. Send the guide doc as a follow-up email and ask Shahbaz to confirm the France team ran a test. Timely follow-up reinforces value before renewal conversation.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0717-3')?'done':''}" data-csm="atisha" id="action-0717-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0717-3')?'checked':''}" onclick="toggleAction('0717-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F34E; Apple &mdash; Monitor Francis/Juan AI outreach response and September event logistics</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela &middot; Francis (HG AI head) reached out to Juan post-Austin meeting — no response yet. Flag if no reply within a week. Also track September event planning: Atisha not attending the leadership summit but should have visibility once logistics are confirmed.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0717-4')?'done':''}" data-csm="nick" id="action-0717-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0717-4')?'checked':''}" onclick="toggleAction('0717-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DE; Westcon &mdash; Confirm outcome of company-counts call (no transcript synced)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; Recording exists for Westcon call (8:00 AM PT, 30 min) but transcript did not sync to SFDC. Log call notes in Vitally — confirm what was discussed regarding company counts and any follow-on actions. Also check Capgemini and Infor calls (no recordings found for either).</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0717-5')?'done':''}" data-csm="pam" id="action-0717-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0717-5')?'checked':''}" onclick="toggleAction('0717-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Cisco &mdash; Confirm Renewal Progress Sync occurred and log outcome</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck &middot; SFDC event "TrustRadius: Renewal Progress Sync - Cisco" was scheduled for 8:00 AM PT but no recording was found in today's scan. Confirm whether call happened, log notes in Vitally, and ensure renewal progress is documented.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─── 2026-07-20 (Monday) ───────────────────────────────────────────────────

function dayData_2026_07_20() {
  return {
    calls: [
      { ts: 'Jul 20 · 4:00 AM', csm: 'varun', account: 'Exclusive Networks',
        note: 'CSV format issue resolved — column headers (Company Name, URL) fixed for partner data upload',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Robin Oakley reached out for urgent help formatting a CSV file before a partner meeting. Column headers were wrong — Varun guided him through renaming to Company Name, URL, and encoding as CSV UTF-8. Issue resolved live on call.' },
      { ts: 'Jul 20 · 8:30 AM', csm: 'rani', account: 'Lenovo Group Ltd.',
        note: 'RGIP platform migration — scope confirmed to Market Analyzer + Segments only; data studio blocked',
        mins: 25, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Platform migration discussion with Adrian Escobar and Shante (Lenovo). Rani confirmed migration scope: Market Analyzer and Segments only — Data Studio excluded due to integration blockers. High Risk account ($695K ARR): model currently not using HG data, renewal Dec 2026.' },
      { ts: 'Jul 20 · 10:00 AM', csm: 'divyam', account: 'BILL Operations, LLC',
        note: 'API quota issue persists post-backfill — scoring scope or MadKudu allocation decision needed',
        mins: 30, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Weekly sync. Backfill completed and confirmed by Thomas Greshi. API quota issue unresolved: every future model update triggers a full score recalculation, hitting MadKudu API limits. Decision needed: reduce scoring scope OR increase MadKudu allocation in SFDC. Eric to align with Ishaan on path forward.' },
      { ts: 'Jul 20 · 11:00 AM', csm: 'varun', account: 'Alight Solutions LLC',
        note: 'Competitor mapping refined — 44 unique products across 6 benefit categories; Salesforce connector next',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun reviewed competitor product mapping with Betsy Turnbaugh and Carolyn Marshall. Mapped 44 unique products from 169 vendors across 6 benefit admin subcategories (benefits admin, DC/DB admin, leave management, healthcare nav). Salesforce connector discussion deferred. Follow-up sync scheduled for next week.' },
      { ts: 'Jul 20 · 1:00 PM', csm: 'rani', account: 'NetApp',
        note: 'Weekly sync — new contact Megan Santiago-Gould introduced; renewal Aug 31 approaching',
        mins: 25, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Weekly check-in with growing NetApp stakeholder group. Megan Santiago-Gould (sales compensation and planning lead) introduced herself — growing team breadth is a positive signal. Ryan Maas also attended. Renewal due August 31 — value demonstration urgency remains high at $840K ARR.' },
    ],
    pulses: [
      { csm: 'varun', account: 'Exclusive Networks', health: 'Healthy',
        note: 'Jul 20 · VT: CSV format issue resolved live on call — Robin ready for partner meeting. No open blockers.' },
      { csm: 'rani', account: 'Lenovo Group Ltd.', health: 'Concerning',
        note: 'Jul 20 · RG: RGIP migration scoped to Market Analyzer + Segments. Data Studio blocked. Model not using HG data — High Risk.' },
      { csm: 'divyam', account: 'BILL Operations, LLC', health: 'Concerning',
        note: 'Jul 20 · DD: Backfill complete but API quota issue unresolved. Scoring scope or allocation decision needed from customer.' },
      { csm: 'varun', account: 'Alight Solutions LLC', health: 'Healthy',
        note: 'Jul 20 · VT: Competitor product mapping refined — 44 products across 6 subcategories. Expansion momentum building.' },
      { csm: 'rani', account: 'NetApp', health: 'Concerning',
        note: 'Jul 20 · RG: Weekly sync with growing stakeholder group. New contact Megan joined. Renewal Aug 31 — high urgency.' },
    ],
  };
}

function dayMeta_2026_07_20() {
  return {
    pills: [
      ['dot-teal',   '5 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '1 Expansion'],
      ['dot-green',  '5 Vitally Pulses'],
      ['dot-grey',   'Mon Jul 20 · 38 scanned'],
    ],
    tabs: ['Overview', 'Calls (5)', 'Pulses (5)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_20() {
  return `<div class="section-label">Team Activity &mdash; Monday July 20, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Monday July 20 &mdash; 38 recordings scanned</strong> via SFDC SOQL &middot; <strong>5 confirmed calls</strong> across 3 CSMs (Varun &times;2, Rani &times;2, Divyam &times;1) &middot; 1 expansion (Alight) &middot; Lenovo concerning (High Risk, platform migration)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Lenovo (High Risk)</strong> &mdash; RGIP platform migration blocked. Data Studio integration issue preventing full activation. Model currently not using HG data. Renewal December 2026 &mdash; $695K ARR at risk.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signal &mdash; Alight</strong> &mdash; Competitor product mapping refined to 44 unique products across 6 benefit admin subcategories. Salesforce connector conversation in progress. Strong use-case momentum.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="divyam">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">BILL Operations (API quota issue — scoring scope decision needed)</div>
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
        <div><div class="metric-num m-red">2</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">50m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo (High Risk, migration blocked) &middot; NetApp (renewal Aug 31)</div>
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
      <div class="csm-account-note">Exclusive Networks (CSV fix, healthy) &middot; Alight (expansion, competitor mapping)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">0 events scheduled &mdash; no recordings</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events &mdash; recordings found (Softcat, HCL) but no transcripts synced &middot; NICE: no recording</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">0 events scheduled &mdash; no recordings</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Airtel Africa 3:00 AM PT, KPMG 10:00 AM PT) &mdash; no recordings found</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (SlashExperts 8:30 AM PT) &mdash; recording found, no transcript synced</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_20() {
  return `<div style="background:#1a1f2e;border:1px solid #334155;border-radius:6px;padding:10px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    <strong>&#x26A0;&#xFE0F; Unconfirmed calls (no transcript synced):</strong>
    Nick Johnson &mdash; Softcat biweekly (6:30 AM PT, 30 min) &middot; HCL TrustRadius (7:30 AM PT, 30 min) &middot; NICE biweekly had no recording.
    Andy Lim &mdash; SlashExperts (8:30 AM PT, 25 min) &mdash; recording exists, no transcript.
    Atisha Waghela &mdash; Airtel Africa (3:00 AM PT) &middot; KPMG (10:00 AM PT) &mdash; no recordings found.
  </div>`;
}

function dayPulsesHTML_2026_07_20() {
  const cards = [
    { csm:'varun', health:'Healthy', account:'Exclusive Networks',
      opp:'Vitally Pulse &mdash; Jul 20 Call',
      arr:'Enterprise &middot; Varun Tiwari',
      csmlbl:'Varun Tiwari',
      change:'Jul 20 &middot; Issue resolved',
      excerpt:'Jul 20 · VT: Robin needed urgent help formatting a CSV for partner meeting — column headers wrong. Varun guided through Company Name/URL format and CSV UTF-8 encoding. Issue resolved live (4:00 AM PT, 30 min). No open blockers.' },
    { csm:'rani', health:'Concerning', account:'Lenovo Group Ltd.',
      opp:'Vitally Pulse &mdash; Jul 20 Call',
      arr:'Strategic &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 20 &middot; High Risk',
      excerpt:'Jul 20 · RG: RGIP platform migration scoped to Market Analyzer + Segments only. Data Studio integration blocked — cannot integrate into customer systems. Model not using HG data. Shante joined. Renewal Dec 2026, $695K ARR (8:30 AM PT, 25 min).' },
    { csm:'divyam', health:'Concerning', account:'BILL Operations, LLC',
      opp:'Vitally Pulse &mdash; Jul 20 Call',
      arr:'Enterprise &middot; Divyam Dewan',
      csmlbl:'Divyam Dewan',
      change:'Jul 20 &middot; Issue open',
      excerpt:'Jul 20 · DD: Weekly sync. Backfill confirmed complete by Thomas Greshi. API quota issue persists — future model updates trigger full score recalculation hitting MadKudu limits. Decision needed: reduce scoring scope or increase allocation. Eric to align with Ishaan (10:00 AM PT, 30 min).' },
    { csm:'varun', health:'Healthy', account:'Alight Solutions LLC',
      opp:'Vitally Pulse &mdash; Jul 20 Call',
      arr:'Enterprise &middot; Varun Tiwari',
      csmlbl:'Varun Tiwari',
      change:'Jul 20 &middot; Expansion',
      excerpt:'Jul 20 · VT: Competitor mapping refined — 44 unique products from 169 vendors across 6 benefit subcategories (benefits admin, DC/DB, leave mgmt, healthcare nav). Salesforce connector deferred. Follow-up sync next week with Lisa, Carolyn, Augie (11:00 AM PT, 30 min).' },
    { csm:'rani', health:'Concerning', account:'NetApp',
      opp:'Vitally Pulse &mdash; Jul 20 Call',
      arr:'Enterprise &middot; Rani Guy',
      csmlbl:'Rani Guy',
      change:'Jul 20 &middot; Some Risk',
      excerpt:'Jul 20 · RG: Weekly sync. Megan Santiago-Gould (sales comp & planning) introduced. Ryan Maas attended. Growing stakeholder breadth is positive. Renewal Aug 31, $840K ARR — urgency high (1:00 PM PT, 25 min).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div style="font-weight:600;font-size:13px;color:#f1f5f9;">${c.account}</div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div style="font-size:11px;color:#64748b;margin:2px 0 6px;">${c.opp}</div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_20() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0720-1')?'done':''}" data-csm="rani" id="action-0720-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0720-1')?'checked':''}" onclick="toggleAction('0720-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Lenovo &mdash; Escalate platform migration blocker and confirm market analyzer activation path</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Data Studio integration blocked — scope narrowed to Market Analyzer + Segments. Model not using HG data ($695K ARR, renewal Dec 2026). Confirm activation timeline with Shante and Adrian. Loop in technical team on Data Studio blocker. Get clear milestone dates before next sync.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0720-2')?'done':''}" data-csm="rani" id="action-0720-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0720-2')?'checked':''}" onclick="toggleAction('0720-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C5; NetApp &mdash; Accelerate value story ahead of August 31 renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Renewal Aug 31, $840K ARR. Megan Santiago-Gould (new contact, sales comp/planning) joined today — build a tailored value story for her team's use case. Confirm platform usage data to share with Ryan Maas and Megan. Renewal conversation needs to start immediately.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0720-3')?'done':''}" data-csm="divyam" id="action-0720-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0720-3')?'checked':''}" onclick="toggleAction('0720-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F527; BILL Operations &mdash; Drive scoring scope decision with Eric and Ishaan</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; Backfill complete but API quota issue will recur on every future model update. Two options: reduce scoring scope OR increase MadKudu allocation in SFDC. Eric to align with Ishaan. Divyam to document recommendation and get decision confirmed before next model update cycle.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0720-4')?'done':''}" data-csm="varun" id="action-0720-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0720-4')?'checked':''}" onclick="toggleAction('0720-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Alight &mdash; Share refined competitor mapping list and schedule Salesforce connector discussion</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Send finalized 44-product competitor mapping list to Lisa and Betsy by end of week. Schedule follow-up sync (next week, 3 PM Central) with Lisa, Carolyn, Augie. Put Salesforce connector back on the agenda — this was deferred from today's call.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0720-5')?'done':''}" data-csm="nick" id="action-0720-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0720-5')?'checked':''}" onclick="toggleAction('0720-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4DE; Nick Johnson &mdash; Log Softcat, HCL, NICE call outcomes (transcripts missing)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; Softcat biweekly (6:30 AM) and HCL TrustRadius (7:30 AM) both had recordings but no transcripts synced. NICE biweekly had no recording at all. Log call outcomes in Vitally for all three accounts. Confirm NICE call occurred or reschedule.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0720-6')?'done':''}" data-csm="varun" id="action-0720-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0720-6')?'checked':''}" onclick="toggleAction('0720-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x2705; Exclusive Networks &mdash; Confirm Robin successfully uploaded corrected CSV</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Varun Tiwari &middot; Robin was in a rush for a partner meeting — send a quick follow-up to confirm the CSV uploaded correctly and the partner presentation went smoothly. Relationship touchpoint for a healthy, high-ARR account ($125K).</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─── 2026-07-21 ───────────────────────────────────────────────────────────────

function dayData_2026_07_21() {
  return {
    calls: [
      { ts: 'Jul 21 · 7:00 AM', csm: 'nick', account: 'hibob',
        note: 'Contact Adi raised $100K ROI concerns; considering Clay alternative — churn risk',
        mins: 15, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Nick called to request a CheckPoint customer reference from Adi. The call shifted when Adi flagged leadership concerns about the $100K data feed ROI and an incoming Clay integration project as a potential alternative for install data. Renewal November 2026 — churn risk elevated.' },

      { ts: 'Jul 21 · 8:00 AM', csm: 'nick', account: 'OPISystems',
        note: 'SAP/Microsoft partnership strategy session with external advisor Neil Holloway',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'David Garcia-Thomas (HG) and Nick connected with Neil Holloway (external advisor with SAP executive relationships) to explore HG partnerships in the SAP and Microsoft hyperscaler ecosystem. Discussion covered joint go-to-market angles and warm introductions to SAP and Google stakeholders.' },

      { ts: 'Jul 21 · 8:30 AM', csm: 'rani', account: 'Workday',
        note: 'Monthly sync — renewal credit model and data feed pricing with Patrycja Levey',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Recurring monthly sync with Patrycja Levey (Workday). Patrycja raised questions about platform credit allocation and data feed pricing tiers ahead of renewal. Topics: credit usage model, flat file delivery options, renewal scope. No red flags — standard renewal prep discussion.' },

      { ts: 'Jul 21 · 9:00 AM', csm: 'rani', account: 'Workday',
        note: 'EBR — AI strategy with Vibhu Pratap + Susan Torrey; Yuan Fang as exec sponsor',
        mins: 150, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Full 2.5-hour Executive Business Review with Workday leadership (Vibhu Pratap, Susan Torrey). Francis Brero (HG) opened with HG agentic AI roadmap. Key themes: Workday AI adoption maturity, Sana AI deployment, and how HG technographic data supports Workday AI strategy. Yuan Fang attended as executive sponsor. EBR action items to be logged.' },

      { ts: 'Jul 21 · 9:30 AM', csm: 'pam', account: 'ADP',
        note: 'TrustRadius GEO product walkthrough — base vs premium features, upsell opportunity',
        mins: 45, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Pam led an educational session on TrustRadius GEO (Generative Engine Optimization) for ADP. Reviewed base GEO features in ADP\'s current plan and premium GEO add-on options. ROI framework for AI-search visibility discussed. ADP is a strong candidate for premium GEO upsell — follow-up proposal recommended.' },

      { ts: 'Jul 21 · 10:00 AM', csm: 'varun', account: 'Dayforce',
        note: 'Monthly connect — right-to-win analysis + demand intelligence expansion discussion',
        mins: 50, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Kory Himmer (Dayforce) opened with two items: (1) right-to-win analysis with HG data — strong fit but data gaps noted for smaller vendors; (2) demand intelligence expansion — using HG intent signals to prioritize Dayforce enterprise sales outreach. Varun and Karin Pindle (HG) co-presented the expansion framework.' },

      { ts: 'Jul 21 · 11:00 AM', csm: 'riley', account: 'SAP Business Network',
        note: 'Biweekly TrustRadius sync — Katherine transitioning teams, new contacts introduced',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Katherine is moving internally at SAP Business Network and introduced Adrian Sirolli and Stephanie as new TrustRadius relationship contacts. Invoice status reviewed (pending with GPO). Market report update discussed. Contact transition risk — Riley to onboard Adrian and Stephanie promptly to maintain engagement continuity.' },

      { ts: 'Jul 21 · 11:00 AM', csm: 'varun', account: 'Zendesk',
        note: 'Account Snapshot Intelligence demo — key contact Rodrigo Stefan absent',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun presented the Account Snapshot Intelligence use case to Zendesk contacts (Chloe Portier, Charles Hawkins, Leopold). Key stakeholder Rodrigo Stefan did not accept the invite and was absent. Partial demo delivered to available attendees. Full presentation with Rodrigo required to advance adoption.' },

      { ts: 'Jul 21 · 11:30 AM', csm: 'atisha', account: 'Kyndryl',
        note: 'MCP office hours — Project Phoenix: customer intelligence brief agent using HG MCP',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'First HG MCP office hours with Kyndryl Consult. Augie Buettner (HG) hosted; Atisha attended as CSM. Kyndryl is building "Project Phoenix" — a customer intelligence brief agent ingesting CRM data, external news, and telemetry via HG MCP. Strong production adoption signal. Follow-up session to be scheduled.' },

      { ts: 'Jul 21 · 12:00 PM', csm: 'divyam', account: 'Quadient',
        note: 'Monthly sync — IDL lead delivery alignment, nurture email review, TrustRadius widget',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam opened with IDL campaign status. Topics: lead delivery alignment (progressing), nurture email content review pending approval, TrustRadius review widget embed on Quadient website, and upcoming brand campaign timeline. No blockers — steady IDL program progress.' },
    ],

    pulses: [
      { csm: 'nick', health: 'Concerning', account: 'hibob',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
        change: 'Jul 21 · Concerning',
        excerpt: 'Jul 21 NJ: Contact Adi raised $100K ROI concerns during reference call — leadership questioning HG data feed value vs. Clay alternative. Churn risk elevated. Renewal Nov 2026. Immediate value conversation + executive alignment needed (7:00 AM, 15 min).' },

      { csm: 'nick', health: 'Healthy', account: 'OPISystems',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 NJ: SAP partnership strategy call with advisor Neil Holloway. Exploring HG joint GTM in SAP/Microsoft ecosystem. Expansion opportunity identified (8:00 AM, 30 min).' },

      { csm: 'rani', health: 'Healthy', account: 'Workday',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Rani Guy', csmlbl: 'Rani Guy',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 RG: Monthly sync (8:30 AM, 30 min) — renewal credit model discussion with Patrycja Levey. EBR (9:00 AM, 150 min) — executive review with Vibhu Pratap + Susan Torrey; HG AI roadmap presented; Yuan Fang as exec sponsor.' },

      { csm: 'pam', health: 'Healthy', account: 'ADP',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Pam Huck', csmlbl: 'Pam Huck',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 PH: TrustRadius GEO product walkthrough (9:30 AM, 45 min). Base vs. premium GEO reviewed. ADP strong upsell candidate for premium GEO tier — follow-up proposal recommended.' },

      { csm: 'varun', health: 'Healthy', account: 'Dayforce',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Varun Tiwari', csmlbl: 'Varun Tiwari',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 VT: Monthly connect (10:00 AM, 50 min). Right-to-win analysis (data gaps for smaller vendors) + demand intelligence expansion use case presented. Karin Pindle co-presented. Follow-up on data gaps + use case proposal needed.' },

      { csm: 'riley', health: 'Healthy', account: 'SAP Business Network',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Riley Rogers', csmlbl: 'Riley Rogers',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 RR: Biweekly TrustRadius sync (11:00 AM, 30 min). Katherine transitioning internally — introduced Adrian Sirolli + Stephanie as new contacts. Invoice pending GPO. Riley to onboard new contacts to maintain engagement continuity.' },

      { csm: 'varun', health: 'Healthy', account: 'Zendesk',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Varun Tiwari', csmlbl: 'Varun Tiwari',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 VT: Account Snapshot Intelligence demo (11:00 AM, 30 min). Key contact Rodrigo Stefan absent. Partial demo with Chloe Portier + Charles Hawkins. Follow-up with Rodrigo required to advance use case adoption.' },

      { csm: 'atisha', health: 'Healthy', account: 'Kyndryl',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Atisha Waghela', csmlbl: 'Atisha Waghela',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 AW: MCP office hours (11:30 AM, 30 min). Kyndryl Consult building "Project Phoenix" — customer intelligence agent via HG MCP. Strong production adoption signal. First of ongoing sessions.' },

      { csm: 'divyam', health: 'Healthy', account: 'Quadient',
        opp: 'Vitally Pulse — Jul 21 Call',
        arr: 'Enterprise · Divyam Dewan', csmlbl: 'Divyam Dewan',
        change: 'Jul 21 · Healthy',
        excerpt: 'Jul 21 DD: Monthly sync (12:00 PM, 30 min). IDL lead delivery progressing; nurture email pending approval; TrustRadius widget embed + brand campaign update discussed. No blockers.' },
    ],
  };
}

function dayMeta_2026_07_21() {
  return {
    pills: [
      ['dot-teal',  '10 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-amber', '3 Expansion'],
      ['dot-green', '9 Vitally Pulses'],
      ['dot-grey',  'Tue Jul 21 · 67 scanned'],
    ],
    tabs: ['Overview', 'Calls (10)', 'Pulses (9)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_07_21() {
  return `<div class="section-label">Team Activity &mdash; Tuesday July 21, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Jul 21 &mdash; 67 recordings scanned</strong> via SFDC SOQL &middot; <strong>10 confirmed calls</strong> across 7 CSMs &middot; 1 Concerning (hibob churn risk) &middot; 3 Expansion signals (Kyndryl MCP, ADP GEO, Dayforce demand intelligence)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>hibob (Nick Johnson) &mdash; Churn Risk:</strong> Contact Adi raised concerns about $100K data feed ROI — leadership questioning value vs. Clay as an alternative install data source. Renewal November 2026. Immediate executive alignment and ROI conversation required.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Kyndryl (Project Phoenix — production HG MCP agent under development) &middot; ADP (premium GEO upsell opportunity surfaced) &middot; Dayforce (demand intelligence use case expansion discussion)
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
      <div class="csm-account-note">SAP Business Network (contact transition — Katherine moving teams, new contacts introduced)</div>
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
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">hibob (&#x26A0;&#xFE0F; churn risk — $100K ROI concern, Clay alternative) &middot; OPISystems (SAP partnership expansion)</div>
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
      <div class="csm-account-note">Quadient (IDL campaign sync — lead delivery progressing, nurture email pending)</div>
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
        <div><div class="metric-num m-grey">180m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday Monthly Sync (renewal credit model) &middot; Workday EBR (2.5hr executive review, Yuan Fang present)</div>
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
        <div><div class="metric-num m-grey">80m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Dayforce (demand intelligence expansion) &middot; Zendesk (Account Snapshot demo, Rodrigo absent)</div>
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
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ADP (TrustRadius GEO walkthrough — premium GEO upsell opportunity)</div>
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
      <div class="csm-account-note">Kyndryl (MCP office hours — Project Phoenix agent build, strong expansion signal)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled &mdash; no recording synced (Veracode biweekly)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_21() {
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>hibob (Nick Johnson) &mdash; Churn Risk:</strong> Contact Adi flagged $100K data feed ROI concerns and leadership interest in Clay as an alternative for install data. Renewal November 2026 — proactive executive escalation required.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion (3):</strong> Kyndryl &mdash; Project Phoenix HG MCP agent in active development (Atisha) &middot; ADP &mdash; premium GEO upsell opportunity identified (Pam) &middot; Dayforce &mdash; demand intelligence use case expansion in scope (Varun)
  </div>
  <div style="background:#111827;border:1px solid #374151;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F4CB; <strong>Unconfirmed (3, no transcript):</strong> Varun &times; Absolute Industrial Supplies (6:30 AM, Kickstart the Day, 15 min) &middot; Varun &times; Iron Mountain (8:30 AM, Fortnightly Sync, 30 min) &middot; Atisha &times; Apple (8:30 AM, Strategy &amp; Planning, 30 min)
  </div>`;
}

function dayPulsesHTML_2026_07_21() {
  const cards = [
    { csm: 'nick', health: 'Concerning', account: 'hibob',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 21 &middot; Concerning',
      excerpt: 'Jul 21 NJ: Contact Adi raised $100K ROI concerns during reference call &mdash; leadership questioning HG data feed value vs. Clay alternative. Churn risk elevated. Renewal Nov 2026. Immediate value conversation + exec alignment needed (7:00 AM, 15 min).' },

    { csm: 'nick', health: 'Healthy', account: 'OPISystems',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 NJ: SAP partnership strategy call with advisor Neil Holloway. Exploring HG joint GTM in SAP/Microsoft ecosystem. Expansion opportunity identified (8:00 AM, 30 min).' },

    { csm: 'rani', health: 'Healthy', account: 'Workday',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 RG: Monthly sync (8:30 AM, 30 min) &mdash; renewal credit model discussion with Patrycja Levey. EBR (9:00 AM, 150 min) &mdash; executive review with Vibhu Pratap + Susan Torrey; HG AI roadmap presented; Yuan Fang as exec sponsor.' },

    { csm: 'pam', health: 'Healthy', account: 'ADP',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Pam Huck', csmlbl: 'Pam Huck',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 PH: TrustRadius GEO product walkthrough (9:30 AM, 45 min). Base vs. premium GEO reviewed. ADP strong candidate for premium GEO upsell &mdash; follow-up proposal recommended.' },

    { csm: 'varun', health: 'Healthy', account: 'Dayforce',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 VT: Monthly connect (10:00 AM, 50 min). Right-to-win analysis (data gaps for smaller vendors) + demand intelligence expansion use case. Karin Pindle co-presented. Follow-up on gaps + proposal needed.' },

    { csm: 'riley', health: 'Healthy', account: 'SAP Business Network',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 RR: Biweekly TrustRadius sync (11:00 AM, 30 min). Katherine transitioning &mdash; introduced Adrian Sirolli + Stephanie as new contacts. Invoice pending GPO. Riley to onboard new contacts promptly to maintain continuity.' },

    { csm: 'varun', health: 'Healthy', account: 'Zendesk',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 VT: Account Snapshot Intelligence demo (11:00 AM, 30 min). Key contact Rodrigo Stefan absent. Partial demo with Chloe Portier + Charles Hawkins. Follow-up with Rodrigo needed to advance adoption.' },

    { csm: 'atisha', health: 'Healthy', account: 'Kyndryl',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 AW: MCP office hours (11:30 AM, 30 min). Kyndryl Consult building "Project Phoenix" &mdash; customer intelligence agent via HG MCP. Strong production adoption signal. First of ongoing sessions.' },

    { csm: 'divyam', health: 'Healthy', account: 'Quadient',
      opp: 'Vitally Pulse &mdash; Jul 21 Call',
      arr: 'Enterprise &middot; Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jul 21 &middot; Healthy',
      excerpt: 'Jul 21 DD: Monthly sync (12:00 PM, 30 min). IDL lead delivery progressing; nurture email pending approval; TrustRadius widget embed + brand campaign update discussed. No blockers.' },
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

function dayActionsHTML_2026_07_21() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0721-1')?'done':''}" data-csm="nick" id="action-0721-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0721-1')?'checked':''}" onclick="toggleAction('0721-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; hibob &mdash; Initiate executive ROI conversation and renewal risk mitigation plan</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Contact Adi raised $100K data feed ROI concerns and flagged Clay as an alternative. Renewal November 2026. Build a concrete ROI story using hibob's actual platform outcomes. Loop in leadership if needed. Do not let this sit — churn risk is real.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0721-2')?'done':''}" data-csm="rani" id="action-0721-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0721-2')?'checked':''}" onclick="toggleAction('0721-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Workday EBR &mdash; Log action items and send follow-up summary to Vibhu Pratap + Susan Torrey</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; 2.5-hour EBR concluded with exec team. Log all action items in Vitally and send a structured follow-up email summarizing HG AI roadmap commitments and agreed next steps. Yuan Fang was present as exec sponsor &mdash; coordinate on any executive-level commitments made.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0721-3')?'done':''}" data-csm="riley" id="action-0721-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0721-3')?'checked':''}" onclick="toggleAction('0721-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F91D; SAP Business Network &mdash; Formally onboard Adrian Sirolli + Stephanie as new TrustRadius contacts</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers &middot; Katherine is transitioning internally &mdash; introduced Adrian Sirolli and Stephanie in today's biweekly. Send a formal welcome email to both new contacts with TrustRadius program overview, GPO invoice status, and market report update. Ensure continuity before Katherine fully steps away.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0721-4')?'done':''}" data-csm="varun" id="action-0721-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0721-4')?'checked':''}" onclick="toggleAction('0721-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; Dayforce &mdash; Resolve right-to-win data gaps and deliver demand intelligence use case proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Kory flagged data gaps for smaller vendors in the right-to-win analysis. Diagnose gaps and provide a resolution timeline. Separately, formalize the demand intelligence use case proposal (HG intent signals for Dayforce's enterprise sales team prioritization). Coordinate with Karin Pindle on next steps.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0721-5')?'done':''}" data-csm="atisha" id="action-0721-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0721-5')?'checked':''}" onclick="toggleAction('0721-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F916; Kyndryl &mdash; Schedule Project Phoenix follow-up and document MCP use case</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela &middot; First HG MCP office hours session complete. Kyndryl Consult is actively building Project Phoenix (customer intelligence brief agent). Schedule the next session with Augie Buettner. Document the use case in Vitally as an expansion signal &mdash; this is a strong reference candidate if successful.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0721-6')?'done':''}" data-csm="pam" id="action-0721-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0721-6')?'checked':''}" onclick="toggleAction('0721-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; ADP &mdash; Send premium GEO feature summary and upsell proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck &middot; GEO walkthrough completed today. ADP is a strong premium GEO candidate. Send a written summary of premium GEO features reviewed, ROI framework for AI-search visibility, and proposed next steps for upsell conversation. Include case studies or reference examples if available.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2026-07-22  Wednesday  |  80 recordings scanned  |  14 confirmed calls
// ─────────────────────────────────────────────────────────────────────────────

function dayData_2026_07_22() {
  return {
    calls: [
      { ts: 'Jul 22 · 1:00 AM', csm: 'nick', account: 'Softcat',
        note: 'SMB strategy session — Nick facilitates with Sara Ewen, David Garcia Thomas, Jade Parry.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Nick facilitates Softcat SMB strategy session with Sara Ewen, David Garcia Thomas, and Jade Parry. Topics covered SMB go-to-market approach and account planning.' },
      { ts: 'Jul 22 · 5:00 AM', csm: 'andy', account: 'SAS Institute',
        note: 'New HG UI overview for Steven White — expanding platform use cases to new departments.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Andy Lim and Augie Buettner walked Steven White (SAS) through the new HG platform UI. Steven is a heavy user doing account planning and is exploring expansion to new use cases and departments (new go-to-market team under Neil).' },
      { ts: 'Jul 22 · 6:00 AM', csm: 'atisha', account: 'Deloitte',
        note: 'Data quality review — Deloitte leadership requesting stats on noise removal for internal reporting.',
        mins: 25, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Atisha shares child account data file to S3 data feed; Rajesh Shetty (Deloitte US, Mumbai) reviews Excel showing clean vs dirty data sets and asks for quantified stats on noise removed. Leadership needs these metrics for internal justification — stats not yet prepared.' },
      { ts: 'Jul 22 · 7:00 AM', csm: 'riley', account: 'IBM',
        note: 'Biweekly TR sync — Buyer\'s Choice gift card campaign, multi-product review links.',
        mins: 45, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley creates multi-product review links for IBM. IBM running $50 gift card referral campaign via client voice team colleagues to qualify for Buyer\'s Choice; deadline Sept 10. Call includes Ruxandra Marin and MihaelaN (IBM Romania).' },
      { ts: 'Jul 22 · 7:30 AM', csm: 'nick', account: 'Westcon',
        note: 'Company counts discussion — Victoria Thoman (Westcon) and Augie Buettner on the call.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Nick Johnson joins with Augie Buettner and Victoria Thoman (Westcon) to discuss company count data. Opening involved personal conversation; business topics focused on specific account universe and company count accuracy.' },
      { ts: 'Jul 22 · 8:30 AM', csm: 'andy', account: 'SAS Institute',
        note: 'EMEA weekly sync — second Andy call with Steven today; RGIP platform discussion for separate budget.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Andy\'s second call with Steven White (SAS) today. Anna (going on maternity leave Aug 7) also present. Andy notes Steven is exploring RGIP platform as a separate budget/license expansion beyond the existing HG data subscription. Andy to facilitate RGIP access for Steven.' },
      { ts: 'Jul 22 · 9:00 AM', csm: 'divyam', account: 'Thomson Reuters',
        note: 'Renewal confirmed — Joan (TR procurement) confirms 2-year renewal, no change in scope.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Joan (Thomson Reuters procurement) confirms TR intends to renew for 2 years with no change in scope. Joan was not previously looped in on Divyam as the new account contact (replacing Arun Jam). Augie Buettner and Max Shaw also present. Divyam to follow up with Ziad on final terms.' },
      { ts: 'Jul 22 · 9:00 AM', csm: 'riley', account: 'SAP SuccessFactors',
        note: 'Progress call — events discussion, review video campaign, Riley introduces new events manager Angel Carvalho.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley introduces Angel Carvalho as new events manager. Discussion covers SuccessFactors review video email campaign (Rajiv, Todd, marketing controller DeepD) and preparation for an upcoming SAP event. SOW submitted for MAX support at Adobe MAX in November.' },
      { ts: 'Jul 22 · 9:30 AM', csm: 'riley', account: 'Paylocity',
        note: 'Monthly TR sync — vendor portal follow-up with Olivia, TechCares reminder, GeoDashboard registration.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley monthly sync with Matt Doyle and Olivia (Paylocity). Vendor portal follow-up — Olivia is now up to speed. TechCares reminder sent. GeoDashboard registration confirmed. Riley\'s wife expecting first baby girl Dec 13.' },
      { ts: 'Jul 22 · 10:00 AM', csm: 'atisha', account: 'Apple',
        note: 'Data delivery confusion — Simone waiting on S3 data feed; test file date dispute (2025 vs 2026 delivery).',
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Simone Amorim (Apple) and Adi join to resolve confusion over child account data delivery to S3. Adi raises email exchange with Giuseppe about test file dates — 2025 test file vs expected 2026 monthly delivery. Atisha offers SharePoint link as alternative access point.' },
      { ts: 'Jul 22 · 10:00 AM', csm: 'divyam', account: 'Informatica',
        note: 'Weekly sync — MSA red-line status, renewal early August, ad-hoc data re-feed completed.',
        mins: 30, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Heather Quesnel (Informatica) asks about MSA red-line status — Informatica procurement expects same T&Cs as January (no red lines), but legal review still pending. Renewal date is early August. Divyam confirms July ad-hoc data re-feed for Hemra\'s updated account list is complete.' },
      { ts: 'Jul 22 · 10:00 AM', csm: 'riley', account: 'Adobe',
        note: 'Success call — Buyer\'s Choice tracker for 3 products, TechCares nomination done, SOW for Adobe MAX.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Buyer\'s Choice tracker: 3 Adobe products need support (Real-Time CDP, FrameIO, Adobe Commerce — need 4/4/2 more reviews; deadline Sept 26). TechCares nomination completed. SOW submitted for MAX support at Adobe MAX November. GEO custom questions update discussed with Alyson.' },
      { ts: 'Jul 22 · 10:30 AM', csm: 'pam', account: 'F5',
        note: 'Bi-weekly TR sync — Top Rated post, TechCares renewal, budget season calendar coordination.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Pam syncs with Sherry (F5) on Top Rated post (live and performing well) and TechCares renewal (Pam to resubmit). Budget season prep — Pam chasing Pascal to get access to Sarah\'s calendar. Sherry managing family situation (mother\'s shoulder injury).' },
      { ts: 'Jul 22 · 10:30 AM', csm: 'varun', account: 'Datadog',
        note: 'TR sync — GeoDashboard early access registered for Datadog, market report survey deadline.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun introduces GeoDashboard (LLM crawl analytics and TrustRadius AI citations) to Caio Dicenzo (Datadog). Datadog registered for early access at no additional cost. Caio owes market report survey (agreed 7-day deadline). Scott (TR) on PTO — leads summary to follow.' },
    ],
    pulses: [
      { csm: 'nick',   account: 'Softcat',          health: 'Healthy',    note: 'SMB strategy session — go-to-market planning with Sara Ewen, David Garcia Thomas, Jade Parry.' },
      { csm: 'andy',   account: 'SAS Institute',     health: 'Healthy',    note: 'New HG UI overview — Steven White exploring expansion to new departments; RGIP platform also discussed.' },
      { csm: 'atisha', account: 'Deloitte',           health: 'Concerning', note: 'Data quality review — Deloitte leadership needs quantified noise-removal stats for internal reporting.' },
      { csm: 'riley',  account: 'IBM',               health: 'Healthy',    note: 'Biweekly TR sync — Buyer\'s Choice gift card campaign active, multi-product review links created.' },
      { csm: 'nick',   account: 'Westcon',            health: 'Healthy',    note: 'Company counts discussion — Victoria Thoman present; specific account universe data requested.' },
      { csm: 'andy',   account: 'SAS Institute',     health: 'Healthy',    note: 'EMEA weekly sync — RGIP platform expansion discussed as separate budget/license for Steven White.' },
      { csm: 'divyam', account: 'Thomson Reuters',   health: 'Healthy',    note: 'Renewal confirmed — Joan (procurement) confirms 2-year renewal, no change in scope; Divyam introduced as new contact.' },
      { csm: 'riley',  account: 'SAP SuccessFactors',health: 'Healthy',    note: 'Progress call — event prep, review video campaign, new events manager Angel Carvalho introduced.' },
      { csm: 'riley',  account: 'Paylocity',          health: 'Healthy',    note: 'Monthly TR sync — vendor portal, TechCares, GeoDashboard registration confirmed.' },
      { csm: 'atisha', account: 'Apple',              health: 'Concerning', note: 'Data delivery issue — S3 data feed confusion, test file date dispute (2025 vs 2026 delivery).' },
      { csm: 'divyam', account: 'Informatica',        health: 'Concerning', note: 'Weekly sync — MSA legal review pending, renewal early August; re-feed for Hemra\'s accounts complete.' },
      { csm: 'riley',  account: 'Adobe',              health: 'Healthy',    note: 'Success call — Buyer\'s Choice tracker, TechCares done, Adobe MAX SOW submitted.' },
      { csm: 'pam',    account: 'F5',                 health: 'Healthy',    note: 'Bi-weekly TR sync — Top Rated live, TechCares to resubmit, budget season calendar coordination.' },
      { csm: 'varun',  account: 'Datadog',            health: 'Healthy',    note: 'TR sync — GeoDashboard early access registered for Datadog at no cost; market report survey agreed.' },
    ],
  };
}

function dayMeta_2026_07_22() {
  return {
    pills: [
      ['dot-teal',  '14 Calls'],
      ['dot-red',   '3 Concerning'],
      ['dot-amber', '4 Expansion'],
      ['dot-green', '14 Pulses'],
      ['dot-grey',  'Wed Jul 22 · 80 scanned'],
    ],
    tabs: ['Overview', 'Calls (14)', 'Pulses (14)', 'Action Items (7)'],
  };
}

function dayOverviewHTML_2026_07_22() {
  return `<div class="section-label">Team Activity &mdash; Wednesday July 22, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday July 22 &mdash; 80 recordings scanned</strong> via SFDC SOQL &middot; <strong>14 confirmed calls</strong> across 7 CSMs &middot; 3 Concerning &middot; 4 Expansion signals &middot; Thomson Reuters 2-yr renewal confirmed
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>3 Concerning signals:</strong> <strong>Informatica</strong> — MSA legal review pending, renewal early August &middot; <strong>Deloitte</strong> — leadership needs data quality stats not yet prepared &middot; <strong>Apple</strong> — S3 data delivery date confusion (2025 test vs 2026 delivery)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>4 Expansion signals:</strong> <strong>SAS Institute ×2</strong> (Andy — new UI overview + RGIP as separate budget) &middot; <strong>Adobe</strong> (Riley — Buyer's Choice momentum + Adobe MAX SOW) &middot; <strong>Datadog</strong> (Varun — GeoDashboard early access)
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
        <div><div class="metric-num m-grey">135m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM (biweekly TR, Buyer's Choice) &middot; SAP SuccessFactors (event prep) &middot; Paylocity (monthly) &middot; Adobe (Buyer's Choice + MAX SOW)</div>
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
      <div class="csm-account-note">Softcat (SMB strategy session 1am PT) &middot; Westcon (company counts)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Thomson Reuters (2-yr renewal confirmed) &middot; Informatica (MSA legal pending &#x26A0;)</div>
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
      <div class="csm-account-note">Datadog (GeoDashboard early access registered)</div>
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
      <div class="csm-account-note">F5 (bi-weekly TR, Top Rated live, TechCares resubmit)</div>
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
      <div class="csm-account-note">Deloitte (data quality stats needed &#x26A0;) &middot; Apple (S3 delivery confusion &#x26A0;)</div>
    </div>

    <div class="csm-card has-calls" data-csm="andy">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAS Institute (new UI overview, RGIP expansion) &middot; SAS Institute EMEA (weekly sync)</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">6 events scheduled &mdash; no recordings with transcripts (ServiceNow, Google ×2, Lenovo ×2, Cisco, Workday — all unconfirmed)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_22() {
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Informatica</strong> — MSA legal review still pending; renewal date is early August. Escalate timeline urgently.
  </div>
  <div style="background:#1c1117;border:1px solid #f97316;border-left:3px solid #f97316;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fdba74;">
    &#x26A0;&#xFE0F; <strong>7 unconfirmed calls</strong> (no transcript): Xero/Divyam &middot; Zendesk/Varun &middot; Autodesk/Varun &middot; Cockroach Labs/Andy (recording failed) &middot; F5 Sync/Pam &middot; Optiv/Atisha &middot; Lenovo/Rani
  </div>
  <div class="calls-table"><!-- auto-table rendered by core.js from dayData --></div>`;
}

function dayPulsesHTML_2026_07_22() {
  const cards = [
    { csm:'riley',  health:'Healthy',    account:'IBM',               opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 22 · Biweekly TR Sync',
      excerpt:'RR: IBM biweekly sync (Jul 22, 7:00 AM, 45 min). Buyer\'s Choice gift card campaign active — $50 gift cards via client voice team, deadline Sept 10. Multi-product review links created for IBM.' },
    { csm:'riley',  health:'Healthy',    account:'SAP SuccessFactors', opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 22 · Progress Call',
      excerpt:'RR: SAP SuccessFactors progress call (Jul 22, 9:00 AM, 30 min). Events discussion, review video campaign with Rajiv/Todd/DeepD. Angel Carvalho introduced as new events manager. SOW submitted for Adobe MAX November support.' },
    { csm:'riley',  health:'Healthy',    account:'Paylocity',          opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 22 · Monthly TR Sync',
      excerpt:'RR: Paylocity monthly TR sync (Jul 22, 9:30 AM, 30 min). Vendor portal updated — Olivia is up to speed. TechCares reminder sent. GeoDashboard registration confirmed.' },
    { csm:'riley',  health:'Healthy',    account:'Adobe',              opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 22 · Success Call',
      excerpt:'RR: Adobe success call (Jul 22, 10:00 AM, 30 min). Buyer\'s Choice: 3 products need reviews (Real-Time CDP, FrameIO, Commerce — deadline Sept 26). TechCares nomination done. Adobe MAX SOW submitted.' },
    { csm:'nick',   health:'Healthy',    account:'Softcat',            opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 22 · SMB Strategy',
      excerpt:'NJ: Softcat SMB strategy session (Jul 22, 1:00 AM, 30 min). Nick facilitates with Sara Ewen, David Garcia Thomas (unwell, Nick driving), and Jade Parry. SMB go-to-market planning.' },
    { csm:'nick',   health:'Healthy',    account:'Westcon',            opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 22 · Company Counts',
      excerpt:'NJ: Westcon company counts discussion (Jul 22, 7:30 AM, 30 min). Victoria Thoman (Westcon) and Augie Buettner on call. Customer-initiated — specific account universe data requested.' },
    { csm:'divyam', health:'Healthy',    account:'Thomson Reuters',    opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 22 · Renewal Confirmed',
      excerpt:'DD: Thomson Reuters renewal confirmed (Jul 22, 9:00 AM, 30 min). Joan (procurement) confirms 2-year renewal, no change in scope. Reconnecting after Arun Jam departure; Divyam introduced as new contact to Joan.' },
    { csm:'divyam', health:'Concerning', account:'Informatica',        opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 22 · Weekly Sync',
      excerpt:'DD: Informatica weekly sync (Jul 22, 10:00 AM, 30 min). MSA legal review still pending — renewal date early August. Informatica procurement expects no red lines but legal not signed. Ad-hoc data re-feed for Hemra\'s accounts complete.' },
    { csm:'atisha', health:'Concerning', account:'Deloitte',           opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 22 · Data Quality Review',
      excerpt:'AW: Deloitte connect (Jul 22, 6:00 AM, 25 min). Rajesh Shetty (Deloitte US) reviewing clean vs dirty data sets in Excel. Needs quantified noise-removal stats for leadership internal reporting — stats not yet prepared.' },
    { csm:'atisha', health:'Concerning', account:'Apple',              opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 22 · Data Delivery Issue',
      excerpt:'AW: Apple data delivery call (Jul 22, 10:00 AM, 30 min). Simone Amorim and Adi raise S3 data feed confusion — dispute over test file date (2025 test vs 2026 delivery). Atisha offered SharePoint as alternative access point pending resolution.' },
    { csm:'pam',    health:'Healthy',    account:'F5',                 opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Pam Huck', csmlbl:'Pam Huck',
      change:'Jul 22 · Bi-Weekly TR',
      excerpt:'PH: F5 bi-weekly TR sync (Jul 22, 10:30 AM, 30 min). Top Rated post live and performing well. TechCares renewal — Pam to resubmit. Chasing Pascal for Sarah\'s calendar access for budget season prep.' },
    { csm:'varun',  health:'Healthy',    account:'Datadog',            opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 22 · TR Sync',
      excerpt:'VT: Datadog TR sync (Jul 22, 10:30 AM, 30 min). Varun introduces GeoDashboard (LLM crawl analytics, TrustRadius AI citations) — Datadog registered for early access at no cost. Market report survey: Caio to complete in 7 days.' },
    { csm:'andy',   health:'Healthy',    account:'SAS Institute',      opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Andy Lim', csmlbl:'Andy Lim',
      change:'Jul 22 · New UI Overview',
      excerpt:'AL: SAS new HG UI overview (Jul 22, 5:00 AM, 30 min). Andy + Augie Buettner demo new platform to Steven White (SAS). Steven exploring expansion to new departments (new GTM team under Neil). RGIP platform also surfaced as separate license opportunity.' },
    { csm:'andy',   health:'Healthy',    account:'SAS Institute',      opp:'Vitally Pulse — Jul 22 Call',
      arr:'Enterprise · Andy Lim', csmlbl:'Andy Lim',
      change:'Jul 22 · EMEA Weekly Sync',
      excerpt:'AL: SAS EMEA weekly sync (Jul 22, 8:30 AM, 30 min). Second call with Steven White today. Anna (going on mat leave Aug 7) present. Andy confirms RGIP platform is a separate budget/license — facilitating access for Steven to expand use cases.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-weight:600;font-size:13px;">${c.account}</div>
          <div style="color:#94a3b8;font-size:11px;">${c.arr}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_22() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0722-1')?'done':''}" data-csm="divyam" id="action-0722-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0722-1')?'checked':''}" onclick="toggleAction('0722-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Informatica &mdash; Escalate MSA legal review and confirm renewal by Aug deadline</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; MSA red-line is in legal review; Informatica procurement expects same T&Cs as January. Renewal date is early August. Confirm legal sign-off status with Heather Quesnel and escalate internally if stalled. Loop in Ziad (returning from OOO) immediately.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0722-2')?'done':''}" data-csm="atisha" id="action-0722-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0722-2')?'checked':''}" onclick="toggleAction('0722-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E6; Apple &mdash; Resolve S3 data delivery date confusion with Giuseppe and Adi</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Simone and Adi are confused about whether the test file date was 2025 or 2026 delivery. Atisha offered SharePoint as interim access. Follow up on Giuseppe's email thread with Adi to clarify delivery date expectations and confirm next monthly delivery is on schedule.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0722-3')?'done':''}" data-csm="atisha" id="action-0722-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0722-3')?'checked':''}" onclick="toggleAction('0722-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; Deloitte &mdash; Prepare data quality noise-removal stats for Rajesh's leadership report</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Rajesh Shetty needs quantified stats on how much noise was removed from the dataset (clean vs dirty data comparison) for a Deloitte leadership report. These stats were not available on the call. Prepare and send within 48h.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0722-4')?'done':''}" data-csm="andy" id="action-0722-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0722-4')?'checked':''}" onclick="toggleAction('0722-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F680; SAS Institute &mdash; Facilitate RGIP platform access for Steven White and scope expansion</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim &middot; Steven White (SAS, new GTM team under Neil) is interested in RGIP as a separate budget/license. Andy confirmed this is a distinct product line. Coordinate with Augie Buettner and the RGIP team to get Steven a proper demo and scoping call. Document as an expansion opportunity in Vitally.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0722-5')?'done':''}" data-csm="divyam" id="action-0722-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0722-5')?'checked':''}" onclick="toggleAction('0722-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F91D; Thomson Reuters &mdash; Confirm 2-year renewal terms and document Divyam as primary contact</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan &middot; Joan (TR procurement) verbally confirmed 2-year renewal, no change in scope. Follow up in writing to formalize renewal terms. Ensure Joan has Divyam's contact info and introduce him properly to all TR stakeholders who previously worked with Arun Jam.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0722-6')?'done':''}" data-csm="nick" id="action-0722-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0722-6')?'checked':''}" onclick="toggleAction('0722-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; IBM &mdash; Confirm DPA signature for HG Contacts pilot with Anita/Kruti</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; IBM's contact data pilot (Kruti Desai) requires a DPA signature before real data can be shared (currently only dummy data). Anita is handling the DPA. Follow up on signature timeline; pilot spec calls for 1K accounts across geos, emails + phone required. Note: Nick was not on this call — Augie Buettner and Karin Pindle represented HG.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0722-7')?'done':''}" data-csm="rani" id="action-0722-7">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0722-7')?'checked':''}" onclick="toggleAction('0722-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F50D; Rani Guy &mdash; Verify 0 confirmed calls and check if Lenovo/ServiceNow/Google recordings were captured</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Rani Guy &middot; Rani had 6+ events scheduled (ServiceNow, Google ×2, Lenovo ×2 incl. Onboarding, Cisco, Workday) with no confirmed call recordings. Verify with Rani whether calls occurred, and if so why Weflow recordings did not sync. Lenovo ($695K ARR, renewal Dec 2026) and ServiceNow should not go unmonitored.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// 2026-07-23  Thursday  |  71 recordings scanned  |  11 confirmed calls
// ─────────────────────────────────────────────────────────────────────────────

function dayData_2026_07_23() {
  return {
    calls: [
      { ts: 'Jul 23 · 4:30 AM', csm: 'andy', account: 'Pure Storage',
        note: 'Bi-weekly sync with Evapure UK team — new accounts to onboard (Charlie Morgans), Andy on holiday soon.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Bi-weekly sync with Charlie Morgans (Evapure UK team within Pure Storage). Charlie flagged new accounts recently acquired and will send list via email for HG data onboarding by end of month. Andy confirmed availability post-holiday return.' },
      { ts: 'Jul 23 · 7:00 AM', csm: 'andy', account: 'Zycus',
        note: 'Ad-hoc Salesforce enrichment troubleshoot — 3 issues raised. HG VP Support Matthieu Courtin present to unblock.',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Customer-initiated troubleshoot for Zycus CRM/Salesforce enrichment integration. Puneet (Zycus Salesforce admin) and Ishwarya raised three issues: (1) feature request with existing workaround, (2) configuration fix needed, (3) Excel file upload question. HG VP Support Matthieu Courtin joined to unblock directly.' },
      { ts: 'Jul 23 · 8:00 AM', csm: 'nick', account: 'UKG',
        note: 'HG recommendations session — Max Shaw (HCM background) introduced as new dedicated resource to Gautam Gupta and Barbie Espinosa.',
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'HG strategy and recommendations session with UKG. Nick and Augie Buettner introduced Max Shaw — a new dedicated HG resource with HCM domain background added specifically for UKG. HG stated "we\'ve made an effort to add more resources to our enterprise clientele." Recommendations deck to be shared post-call.' },
      { ts: 'Jul 23 · 8:00 AM', csm: 'varun', account: 'MongoDB',
        note: 'Recurring sync — team still running campaigns from ZoomInfo primarily; HG POC stalled by resource and complexity concerns.',
        mins: 30, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Recurring sync with Ale Dimitriu (MongoDB, Germany) and Ziad Amira. MongoDB marketing team runs technographic data campaigns primarily from ZoomInfo. HG POC stalled — Ale cites resource constraints and perceived data complexity as blockers. Varun to simplify POC proposal and lower onboarding friction.' },
      { ts: 'Jul 23 · 8:30 AM', csm: 'divyam', account: 'Lumen',
        note: 'Weekly sync — AM transition: Hayden left HG (joined Clay), Augie Buettner taking over. Nathan briefed.',
        mins: 28, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Weekly sync with Nathan (Lumen). Divyam disclosed that Hayden Anderson left HG and joined Clay. New AM is Augie Buettner, who has more HG tenure. Divyam remains CS contact. Nathan receptive — Augie to be added to the recurring series and formally introduced.' },
      { ts: 'Jul 23 · 9:00 AM', csm: 'nick', account: 'UKG',
        note: 'Market Analyzer check-in — Greg Pridgeon active, Dan Pasch not yet engaged. Users want raw data export capability.',
        mins: 30, health: 'Warn',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Market Analyzer adoption check-in with Greg Pridgeon (Atlanta) and Dan Pasch (New York). Greg has logged in and is active; Dan has not yet engaged. Users flagged a core platform gap: "what we need is all this data so we can manipulate it on the back end" — raw data export request logged for product team.' },
      { ts: 'Jul 23 · 9:30 AM', csm: 'divyam', account: 'HubSpot',
        note: 'Monthly TR sync with Jordan Montgomery — AI crawl data walkthrough, Inbound event (Sep) as next review gen window.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'TrustRadius monthly sync with Jordan Montgomery (HubSpot). Divyam presented updated TrustRadius performance deck including AI crawl data and ratings overview. Jordan has no active campaigns running. Inbound event (mid-to-late September) identified as best upcoming window for review generation outreach.' },
      { ts: 'Jul 23 · 10:00 AM', csm: 'pam', account: 'Epicor',
        note: 'EBR with new DG leader Anthea Louie at 90-day mark. HG East Coast ops Leo Zunz present.',
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Executive Business Review (EBR) with Epicor stakeholders. Key participants: Anthea Louie (new DG leader, just hit 90-day mark) and Rohini Kasturi. HG East Coast operations lead Leo Zunz joined. Anthea\'s first EBR as DG leader — session covered program performance, H2 planning, and alignment with new leadership.' },
      { ts: 'Jul 23 · 11:00 AM', csm: 'divyam', account: 'Workhuman',
        note: 'First meeting with Ethan Bukowiec — budget uncertainty for H2 review gen. AI crawl dashboards introduced.',
        mins: 60, health: 'Warn',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'First formal meeting with Ethan Bukowiec (Workhuman, Framingham MA). Divyam presented TrustRadius AI crawl dashboards and proposed H2 review generation plan. Ethan raised a key gap: "do we have a budget with you for review generation?" — unclear whether contract includes review gen budget. Must resolve before H2 campaigns launch.' },
      { ts: 'Jul 23 · 11:00 AM', csm: 'riley', account: 'SAP (Ariba)',
        note: 'Monthly TR sync — Fieldglass >10 reviews, Subscription Billing momentum, HG overlap campaign strategy discussed.',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Monthly TrustRadius sync with Ashleigh (SAP, calling from car). Fieldglass exceeded 10 reviews in the past year. Subscription Billing received 4 reviews at Sapphire + 3 more since. One AI-written Treasury & Risk Management review was rejected. Riley proposed overlap campaign analysis using HG-powered targeting tool; will prepare slides for Alejandro.' },
      { ts: 'Jul 23 · 12:30 PM', csm: 'atisha', account: 'Apple',
        note: 'ML Model data mapping with Aditi Saluja. CRITICAL: Atisha\'s emails not reaching Apple — Rishabh Wadhwa stepping in.',
        mins: 30, health: 'Warn',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Data mapping session for Apple\'s ML model with Aditi Saluja and Rishabh Wadhwa (HG customer solutions). Critical issue: Atisha\'s emails are not being delivered to Aditi or Simone Amorim at Apple (likely spam filter or security block). Rishabh to send emails as workaround. Session mapped HG data fields (revenue, employee size, industry) to Apple ML model requirements.' },
    ],
    pulses: [
      { csm: 'andy',   account: 'Pure Storage',  health: 'Healthy',    note: 'Bi-weekly sync (Evapure UK team, Charlie Morgans). New accounts to onboard by month-end; Andy on holiday shortly.' },
      { csm: 'andy',   account: 'Zycus',          health: 'Healthy',    note: 'Ad-hoc Salesforce enrichment troubleshoot. 3 issues raised; HG VP Support Matthieu Courtin joined to unblock Puneet.' },
      { csm: 'nick',   account: 'UKG',            health: 'Healthy',    note: 'Recommendations session — Max Shaw introduced as new dedicated HG resource with HCM background to Gautam Gupta.' },
      { csm: 'varun',  account: 'MongoDB',        health: 'Concerning', note: 'Still using ZoomInfo as primary technographic source. HG POC stalled — resource constraints and complexity cited as blockers.' },
      { csm: 'divyam', account: 'Lumen',          health: 'Healthy',    note: 'AM transition: Hayden left for Clay, Augie Buettner taking over. Nathan briefed; Augie to be added to recurring series.' },
      { csm: 'nick',   account: 'UKG',            health: 'Warn',       note: 'Market Analyzer: Greg active, Dan not yet logged in. Raw data export request flagged for product team.' },
      { csm: 'divyam', account: 'HubSpot',        health: 'Healthy',    note: 'Monthly TR sync with Jordan. AI crawl overview delivered. Inbound event (Sep) targeted as next review gen window.' },
      { csm: 'pam',    account: 'Epicor',         health: 'Healthy',    note: 'EBR with new DG leader Anthea Louie (90-day mark). Leo Zunz present. H2 planning and program health reviewed.' },
      { csm: 'divyam', account: 'Workhuman',      health: 'Warn',       note: 'First meeting with Ethan Bukowiec. Review gen budget unclear — must confirm contract scope before H2 campaigns launch.' },
      { csm: 'riley',  account: 'SAP (Ariba)',    health: 'Healthy',    note: 'Monthly TR sync. Fieldglass >10 reviews. HG overlap campaign analysis to be shared with Alejandro.' },
      { csm: 'atisha', account: 'Apple',          health: 'Warn',       note: 'ML model mapping session. CRITICAL: Atisha emails not reaching Apple — Rishabh Wadhwa stepping in as workaround.' },
    ],
  };
}

function dayMeta_2026_07_23() {
  return {
    pills: [
      ['dot-teal',  '11 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-amber', '1 Expansion'],
      ['dot-green', '11 Pulses'],
      ['dot-grey',  'Thu Jul 23 · 71 scanned'],
    ],
    tabs: ['Overview', 'Calls (11)', 'Pulses (11)', 'Action Items (8)'],
  };
}

function dayOverviewHTML_2026_07_23() {
  return `<div class="section-label">Team Activity &mdash; Thursday July 23, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday July 23 &mdash; 71 recordings scanned</strong> via SFDC SOQL &middot; <strong>11 confirmed calls</strong> across 7 of 8 CSMs &middot; 1 Concerning (MongoDB) &middot; 1 Expansion (UKG) &middot; 3 Warn signals &middot; Rani: 2 Adobe events, no recordings found
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>MongoDB (Varun) &mdash; Concerning:</strong> Marketing team runs campaigns from ZoomInfo as primary technographic source. HG POC blocked by resource constraints and data complexity. Risk of abandonment if onboarding friction isn&rsquo;t reduced urgently.
  </div>
  <div style="background:#1c2022;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>3 Warn signals:</strong> <strong>Apple</strong> (Atisha &mdash; emails not reaching Apple team, Rishabh as workaround) &middot; <strong>Workhuman</strong> (Divyam &mdash; Ethan unsure if review gen budget exists) &middot; <strong>UKG Market Analyzer</strong> (Nick &mdash; Dan Pasch not yet engaged, raw data export gap)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion:</strong> <strong>UKG</strong> (Nick &mdash; Max Shaw introduced as dedicated HG resource with HCM expertise) &middot; 1 internal call excluded (&ldquo;Rohit and HG intros&rdquo; &mdash; Nick + Augie only, no customer)
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
      <div class="csm-account-note">SAP (Ariba + Fieldglass) &mdash; monthly TR sync; Fieldglass &gt;10 reviews; overlap campaign analysis to follow</div>
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
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">UKG Recommendations (Max Shaw intro, 60m) &middot; UKG Market Analyzer (Dan not engaged, raw data request &#x26A0;, 30m)</div>
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
        <div><div class="metric-num m-grey">118m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lumen (AM transition: Augie replacing Hayden) &middot; HubSpot (monthly TR) &middot; Workhuman (budget unclear &#x26A0;)</div>
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
      <div class="csm-account-note">MongoDB &mdash; ZoomInfo still primary; HG POC blocked by resource constraints &#x26A0;&#xFE0F;</div>
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
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Epicor Software Corp &mdash; EBR with new DG leader Anthea Louie (90-day mark); Leo Zunz (HG East) present</div>
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
      <div class="csm-account-note">Apple &mdash; ML model data mapping; emails from Atisha not reaching Apple team &#x26A0;</div>
    </div>

    <div class="csm-card has-calls" data-csm="andy">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Pure Storage (Evapure UK bi-weekly, new accounts to onboard) &middot; Zycus (Salesforce enrichment troubleshoot, Matthieu Courtin present)</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 Adobe events scheduled (bi-weekly 9:00 AM &amp; weekly 9:30 AM) &mdash; no recordings found in Weflow</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_23() {
  return `<div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>MongoDB (Varun) &mdash; Concerning:</strong> Team runs campaigns from ZoomInfo as primary technographic source. HG POC stalled &mdash; Ale Dimitriu cites resource constraints and data complexity. Risk of POC abandonment without a simplified onboarding path.
  </div>
  <div style="background:#1c2022;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Apple email deliverability (Atisha):</strong> Atisha&rsquo;s emails not reaching Aditi Saluja or Simone Amorim at Apple. Rishabh Wadhwa stepping in as workaround. Deliverability issue must be escalated to restore direct CSM-to-customer communication.
  </div>
  <div style="background:#111827;border:1px solid #374151;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x1F512; <strong>1 internal call excluded:</strong> &ldquo;Rohit and HG intros&rdquo; (Nick Johnson + Augie Buettner only, no customer present) &middot; <strong>Unconfirmed (no transcript):</strong> Divyam &times; Safaricom (4:00 AM, 30 min) &middot; Divyam &times; OpenAI (10:30 AM, 30 min) &middot; Andy &times; Sage Global Services (8:00 AM, 22 min)
  </div>
  <div class="calls-table"><!-- auto-table rendered by core.js from dayData --></div>`;
}

function dayPulsesHTML_2026_07_23() {
  const cards = [
    { csm:'andy',   health:'Healthy',    account:'Pure Storage',
      arr:'Enterprise · Andy Lim', csmlbl:'Andy Lim',
      change:'Jul 23 · Bi-Weekly Sync',
      excerpt:'AL: Pure Storage bi-weekly sync (Jul 23, 4:30 AM, 30 min). Evapure UK team (Charlie Morgans). Charlie to send list of newly acquired accounts for HG data onboarding by month-end. Andy on holiday shortly — confirmed post-return availability.' },
    { csm:'andy',   health:'Healthy',    account:'Zycus',
      arr:'Enterprise · Andy Lim', csmlbl:'Andy Lim',
      change:'Jul 23 · Enrichment Troubleshoot',
      excerpt:'AL: Zycus Salesforce enrichment troubleshoot (Jul 23, 7:00 AM, 30 min). Customer-initiated — Puneet and Ishwarya raised 3 issues (feature request workaround, config fix, Excel upload question). HG VP Support Matthieu Courtin joined to unblock directly.' },
    { csm:'nick',   health:'Healthy',    account:'UKG',
      arr:'Enterprise · Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 23 · Recommendations Session',
      excerpt:'NJ: UKG HG recommendations session (Jul 23, 8:00 AM, 60 min). Nick and Augie Buettner introduced Max Shaw — new dedicated HG resource with HCM domain background — to Gautam Gupta and Barbie Espinosa. Recommendations deck to follow.' },
    { csm:'varun',  health:'Concerning', account:'MongoDB',
      arr:'Enterprise · Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 23 · Concerning',
      excerpt:'VT: MongoDB recurring sync (Jul 23, 8:00 AM, 30 min). Ale Dimitriu (Germany) and Ziad Amira. Marketing team still running technographic campaigns from ZoomInfo as primary source. HG POC stalled — resource constraints and data complexity cited. Varun to simplify POC proposal.' },
    { csm:'divyam', health:'Healthy',    account:'Lumen',
      arr:'Enterprise · Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 23 · Weekly Sync',
      excerpt:'DD: Lumen weekly sync (Jul 23, 8:30 AM, 28 min). Divyam disclosed Hayden Anderson left HG and joined Clay; new AM Augie Buettner taking over. Nathan receptive to transition — Augie to be added to recurring series and formally introduced.' },
    { csm:'nick',   health:'Warn',       account:'UKG',
      arr:'Enterprise · Nick Johnson', csmlbl:'Nick Johnson',
      change:'Jul 23 · Market Analyzer Check-in',
      excerpt:'NJ: UKG Market Analyzer check-in (Jul 23, 9:00 AM, 30 min). Greg Pridgeon active; Dan Pasch not yet logged in. Users flagged platform gap: want raw data access beyond the UI for back-end manipulation. Product feedback logged.' },
    { csm:'divyam', health:'Healthy',    account:'HubSpot',
      arr:'Enterprise · Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 23 · Monthly TR Sync',
      excerpt:'DD: HubSpot monthly TR sync (Jul 23, 9:30 AM, 30 min). Jordan Montgomery. AI crawl data and ratings overview presented. No active campaigns. Inbound event (mid-late September) identified as next review generation window.' },
    { csm:'pam',    health:'Healthy',    account:'Epicor',
      arr:'Enterprise · Pam Huck', csmlbl:'Pam Huck',
      change:'Jul 23 · EBR',
      excerpt:'PH: Epicor EBR (Jul 23, 10:00 AM, 60 min). New DG leader Anthea Louie at 90-day mark — first EBR. Leo Zunz (HG East Coast ops) present. Session covered program performance, H2 planning, and alignment with new DG leadership team.' },
    { csm:'divyam', health:'Warn',       account:'Workhuman',
      arr:'Enterprise · Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 23 · First Meeting',
      excerpt:'DD: Workhuman first formal meeting (Jul 23, 11:00 AM, 60 min). Ethan Bukowiec (Framingham MA). Divyam presented AI crawl dashboards and H2 review gen plan. Ethan raised budget uncertainty: "do we have a budget with you for review generation?" — must confirm contract scope before H2 campaigns launch.' },
    { csm:'riley',  health:'Healthy',    account:'SAP (Ariba)',
      arr:'Enterprise · Riley Rogers', csmlbl:'Riley Rogers',
      change:'Jul 23 · Monthly TR Sync',
      excerpt:'RR: SAP monthly TR sync (Jul 23, 11:00 AM, 30 min). Ashleigh (in car). Fieldglass exceeded 10 reviews past year. Subscription Billing: 4 at Sapphire + 3 since. 1 AI-written Treasury & Risk review rejected. Riley to send HG overlap campaign analysis slides to Alejandro.' },
    { csm:'atisha', health:'Warn',       account:'Apple',
      arr:'Enterprise · Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 23 · ML Model Mapping',
      excerpt:'AW: Apple ML model data mapping (Jul 23, 12:30 PM, 30 min). Aditi Saluja + Rishabh Wadhwa. CRITICAL: Atisha\'s emails not being delivered to Aditi or Simone Amorim at Apple. Rishabh sending workaround emails. HG data fields (revenue, employee size, industry) mapped to Apple ML model requirements.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-weight:600;font-size:13px;">${c.account}</div>
          <div style="color:#94a3b8;font-size:11px;">${c.arr}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_23() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-1')?'done':''}" data-csm="atisha" id="action-0723-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-1')?'checked':''}" onclick="toggleAction('0723-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Apple &mdash; Resolve email deliverability issue blocking Atisha&rsquo;s communication</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Atisha&rsquo;s emails are not being delivered to Aditi Saluja or Simone Amorim at Apple &mdash; suspected spam filter or IT security block. Rishabh Wadhwa is covering as a workaround but this cannot be a long-term fix. Escalate to IT/email admin, identify the block, and restore direct CSM-to-customer communication immediately.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-2')?'done':''}" data-csm="varun" id="action-0723-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-2')?'checked':''}" onclick="toggleAction('0723-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; MongoDB &mdash; Redesign HG POC to reduce complexity and schedule dedicated kickoff</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari &middot; MongoDB team is still running campaigns from ZoomInfo as primary technographic source. HG POC blocked by resource constraints and perceived complexity. Build a simplified onboarding path &mdash; reduce required steps, provide pre-built templates, and schedule a dedicated POC kickoff call with Ale Dimitriu and Ziad Amira. Without action this POC risks abandonment.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-3')?'done':''}" data-csm="andy" id="action-0723-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-3')?'checked':''}" onclick="toggleAction('0723-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x2705; Zycus &mdash; Confirm all 3 enrichment issues resolved and send session summary</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Andy Lim &middot; Puneet and Ishwarya raised three Salesforce enrichment issues on today&rsquo;s ad-hoc call: (1) feature request &mdash; confirm workaround documented and sent, (2) configuration fix &mdash; confirm applied, (3) Excel upload question &mdash; confirm resolved. Send a written summary of all three issues and resolutions to Puneet. CC Matthieu Courtin.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-4')?'done':''}" data-csm="nick" id="action-0723-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-4')?'checked':''}" onclick="toggleAction('0723-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F91D; UKG &mdash; Share recommendations deck and formalize Max Shaw introduction</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; Max Shaw was verbally introduced to Gautam Gupta and Barbie Espinosa on today&rsquo;s call. Send a formal follow-up email from Max introducing himself, share the HG recommendations deck reviewed on the call, and set expectations for Max&rsquo;s ongoing role as dedicated HG resource for UKG. Formalizes the expansion investment HG made in this account.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-5')?'done':''}" data-csm="divyam" id="action-0723-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-5')?'checked':''}" onclick="toggleAction('0723-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F504; Lumen &mdash; Add Augie Buettner to recurring series and send formal AM transition note to Nathan</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan &middot; Hayden Anderson has left HG and joined Clay. Augie Buettner is the incoming AM. Update the recurring calendar invite to include Augie, and send a brief transition email to Nathan (Lumen) formally introducing Augie with context on his HG tenure and role. Ensure no continuity gap during the handoff.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-6')?'done':''}" data-csm="divyam" id="action-0723-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-6')?'checked':''}" onclick="toggleAction('0723-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4B0; Workhuman &mdash; Confirm review gen budget and send H2 activation plan to Ethan</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan &middot; Ethan Bukowiec raised uncertainty about whether Workhuman&rsquo;s contract includes a review generation budget. Check contract terms and confirm with Ethan what is included (CVP budget, incentive credits, etc.). Once confirmed, send a written H2 review generation plan with campaign timeline, Inbound event integration, and expected review targets. Budget ambiguity must not block H2 activation.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-7')?'done':''}" data-csm="nick" id="action-0723-7">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-7')?'checked':''}" onclick="toggleAction('0723-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; UKG Market Analyzer &mdash; Escalate raw data export request and activate Dan Pasch</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; Greg Pridgeon and Dan Pasch expressed need to access raw Market Analyzer data for back-end manipulation beyond what the UI provides. Log as a product feedback item (raw data export / API access). Separately, Dan Pasch has not yet logged in &mdash; send direct outreach to Dan with a quick-start guide and offer a 1:1 onboarding session to get him activated.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0723-8')?'done':''}" data-csm="riley" id="action-0723-8">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0723-8')?'checked':''}" onclick="toggleAction('0723-8')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E4; SAP Ariba &mdash; Prepare and share HG overlap campaign analysis with Alejandro</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Riley Rogers &middot; Riley proposed sending overlap campaign analysis slides to Alejandro using HG&rsquo;s targeting tool. Prepare a concise analysis showing SAP&rsquo;s target account overlap with competitor install data and send to Alejandro ahead of the next sync. Could open a new campaign strategy conversation and demonstrate HG data value beyond reviews.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ─────────────────────────────────────────────────────────────────────────────
// July 24, 2026 — Friday
// 39 recordings scanned · 5 confirmed CSM calls · 3 expansion signals
// ─────────────────────────────────────────────────────────────────────────────

function dayData_2026_07_24() {
  return {
    calls: [
      { ts: 'Jul 24 · 2:00 AM', csm: 'andy',   account: 'Colt Technology Services',
        note: 'Monthly sync — Bombura/Demandbase usage check-in; MCP agent demo opportunity surfaced',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Monthly cadence with Arkadiusz Wolinski (Colt). Andy and AM David Garcia-Thomas reviewed Bombura/Demandbase usage progress and discussed scheduling an MCP/AI agent demo for Colt — similar to the SAS Institute engagement that generated strong results.' },

      { ts: 'Jul 24 · 8:00 AM', csm: 'divyam', account: 'Thomson Reuters',
        note: 'Pre-renewal partnership review — RGIF upgrade, AM transition Hayden→Augie, Lumen cadence',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Partnership review with Blake (Thomson Reuters) and new AM Augie Buettner ahead of July 30 renewal. Covered RGIF upgrade (252K accounts vs universe data feed), expansion of Lumen weekly cadence to 30 min, and AM transition from Hayden Anderson to Augie. Renewal on track.' },

      { ts: 'Jul 24 · 9:00 AM', csm: 'varun',  account: 'Zendesk, Inc.',
        note: 'Bi-weekly sync — MCP/AI agent trial offered; Zendesk migrating to ChatGPT Codex next week',
        mins: 30, health: 'Warn',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Bi-weekly sync surfaced an MCP integration opportunity. Rodrigo Gomez confirmed Zendesk is rolling out ChatGPT (Codex + Coworker) to all CS employees starting next week. Charles Hawkins offered a trial to automate account brief/snapshot generation via HG MCP connected to a custom GPT — replacing their current manual workflow.' },

      { ts: 'Jul 24 · 9:00 AM', csm: 'rani',   account: 'Docusign, Inc.',
        note: 'OpenGTM x Docusign kickoff — HG technographic depth for intelligence layer, scoring & targeting',
        mins: 25, health: 'Warn',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: 'First formal call with OpenGTM (Ben Salzman) and Docusign AI Innovation PM Adam Melamed to explore HG technographic depth for powering Docusign\'s scoring, targeting, and segmentation. OpenGTM kicked off a formal Docusign engagement last week. HG AE Ziad Amira noted a parallel AI go-to-market agent project underway with OpenAI as proof of concept.' },

      { ts: 'Jul 24 · 11:00 AM', csm: 'atisha', account: 'Apple Inc.',
        note: 'Weekly sync — ML model progress; Apple asked to expand fast-growth scoring to healthcare & other sectors',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Atisha presented progress on the HG fast-growth account scoring model built on 30M+ company universe. Simone Amorim and Adrian Escobar asked to expand scope beyond AI-native accounts (Anthropic model) to fast-growing healthcare and other industry verticals. Atisha will build multi-industry win-rate analysis to identify accounts outside Apple\'s current managed coverage.' },
    ],
    pulses: [
      { csm: 'andy',   account: 'Colt Technology Services', health: 'Healthy',
        note: 'Monthly sync on Bombura/Demandbase usage; MCP agent demo opportunity discussed with David Garcia-Thomas.' },
      { csm: 'divyam', account: 'Thomson Reuters',           health: 'Healthy',
        note: 'Pre-renewal partnership review with Blake and AM Augie Buettner. RGIF upgrade discussed. Renewal July 30.' },
      { csm: 'varun',  account: 'Zendesk, Inc.',             health: 'Warn',
        note: 'MCP/AI trial offered via bi-weekly sync. Zendesk rolling out ChatGPT Codex next week — HG custom GPT integration opportunity.' },
      { csm: 'rani',   account: 'Docusign, Inc.',            health: 'Warn',
        note: 'OpenGTM x Docusign kickoff: exploring HG technographic depth for intelligence layer, scoring, and targeting.' },
      { csm: 'atisha', account: 'Apple Inc.',                 health: 'Healthy',
        note: 'Weekly sync: ML model fast-growth scoring expanded to healthcare and non-AI verticals at Apple\'s request.' },
    ],
  };
}

function dayMeta_2026_07_24() {
  return {
    pills: [
      ['dot-teal',   '5 Calls'],
      ['dot-purple', '3 Expansion'],
      ['dot-green',  '5 Pulses'],
      ['dot-grey',   'Fri Jul 24 · 39 scanned'],
    ],
    tabs: ['Overview', 'Calls (5)', 'Pulses (5)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_24() {
  return `<div class="section-label">Team Activity &mdash; Friday July 24, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Jul 24 &mdash; 39 recordings scanned</strong> via SFDC SOQL &middot; <strong>5 confirmed customer calls</strong> across 5 CSMs &middot; 3 expansion signals (Zendesk MCP trial, Docusign/OpenGTM, Apple ML scope expansion) &middot; Thomson Reuters renewal due July 30
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #818cf8;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#a5b4fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Varun offered Zendesk an MCP/ChatGPT trial &middot; Rani joined OpenGTM x Docusign intelligence kickoff &middot; Atisha expanded Apple ML scoring to healthcare &amp; multi-industry verticals
  </div>
  <div class="overview-grid">

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
      <div class="csm-account-note">Colt Technology Services (monthly sync, Bombura check-in, MCP demo opportunity)</div>
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
      <div class="csm-account-note">Thomson Reuters (pre-renewal review, renewal July 30, RGIF upgrade, AM transition)</div>
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
      <div class="csm-account-note">Zendesk (bi-weekly sync + MCP trial offer; ChatGPT Codex rollout next week)</div>
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
        <div><div class="metric-num m-grey">25m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Docusign (OpenGTM kickoff — technographic intelligence layer exploration, expansion)</div>
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
      <div class="csm-account-note">Apple (weekly sync — ML model scope expanded to healthcare &amp; multi-industry verticals)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No events or recordings detected on Jul 24</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (Infor debrief check-in, 5:00 AM PT) &mdash; no recording found</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled (ZI-TR Sync, ADP Smart Compliance) &mdash; no recordings confirmed</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_24() {
  return `<div class="calls-table">
  <div style="background:#1c2333;border:1px solid #818cf8;border-left:3px solid #818cf8;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#a5b4fc;">
    &#x1F4C8; <strong>3 expansion signals today:</strong> Varun offered Zendesk an MCP/ChatGPT trial &middot; Rani joined OpenGTM x Docusign intelligence kickoff &middot; Atisha expanded Apple ML scoring to healthcare &amp; multi-industry verticals
  </div>
  <div style="background:#1a1a2e;border:1px solid #475569;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#94a3b8;">
    &#x26A0;&#xFE0F; <strong>Unconfirmed (no transcript):</strong> Rani Guy &mdash; Hitachi Vantara sync (9:30 AM PT, 30 min) &mdash; EventId match to SFDC event but no transcript synced. Varun Tiwari &mdash; HG &lt;&gt; Zendesk (10:30 AM PT, 30 min) &mdash; EventId matched but speaker labeled &ldquo;Varun&rsquo;s iPhone&rdquo;, not name-verified.
  </div>
  </div>`;
}

function dayPulsesHTML_2026_07_24() {
  const cards = [
    { csm:'andy',   health:'Healthy',    account:'Colt Technology Services',
      arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
      change:'Jul 24 &middot; Monthly Sync',
      excerpt:'AL: Colt monthly check-in (Jul 24, 2:00 AM PT, 30 min). Arkadiusz Wolinski. Reviewed Bombura/Demandbase usage progress. MCP/AI agent demo opportunity surfaced &mdash; Andy to coordinate with David Garcia-Thomas and Francis Brero to schedule similar to SAS Institute engagement.' },
    { csm:'divyam', health:'Healthy',    account:'Thomson Reuters',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Jul 24 &middot; Pre-Renewal Review',
      excerpt:'DD: Thomson Reuters pre-renewal partnership review (Jul 24, 8:00 AM PT, 30 min). Blake + AM Augie Buettner. RGIF upgrade discussed (252K accounts). Lumen weekly extended to 30 min. AM transition from Hayden Anderson to Augie Buettner confirmed. Renewal due July 30.' },
    { csm:'varun',  health:'Warn',       account:'Zendesk, Inc.',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Jul 24 &middot; Bi-Weekly + MCP Trial',
      excerpt:'VT: Zendesk bi-weekly sync (Jul 24, 9:00 AM PT, 30 min). Rodrigo Gomez + Charles Hawkins. Zendesk rolling out ChatGPT Codex to all CS employees next week. HG offered MCP trial via custom GPT to automate account brief generation. Renewal Aug 26.' },
    { csm:'rani',   health:'Warn',       account:'Docusign, Inc.',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Jul 24 &middot; OpenGTM Kickoff',
      excerpt:'RG: OpenGTM x Docusign intelligence kickoff (Jul 24, 9:00 AM PT, 25 min). Ben Salzman (OpenGTM) + Adam Melamed (Docusign AI Innovation PM). Early-stage exploration of HG technographic depth for scoring, targeting, segmentation. AE Ziad Amira also on call.' },
    { csm:'atisha', health:'Healthy',    account:'Apple Inc.',
      arr:'Strategic &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Jul 24 &middot; ML Model Expansion',
      excerpt:'AW: Apple weekly sync (Jul 24, 11:00 AM PT, 30 min). Simone Amorim + Adrian Escobar. ML fast-growth scoring model scope expanded to healthcare &amp; non-AI verticals. Atisha to run multi-industry win-rate analysis to identify accounts outside Apple&rsquo;s managed coverage.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-weight:600;font-size:13px;">${c.account}</div>
          <div style="color:#94a3b8;font-size:11px;">${c.arr}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_07_24() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0724-1')?'done':''}" data-csm="varun" id="action-0724-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0724-1')?'checked':''}" onclick="toggleAction('0724-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F916; Zendesk &mdash; Activate MCP trial via custom ChatGPT connection before Codex rollout</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari &middot; Zendesk is rolling out ChatGPT Codex to all CS employees next week. Charles Hawkins offered an MCP trial to automate account brief generation. Set up the technical connection (custom GPT + HG MCP) and schedule a hands-on session with Rodrigo Gomez and Stephen Micek before the Codex rollout to capture this window of momentum. Renewal is Aug 26.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0724-2')?'done':''}" data-csm="divyam" id="action-0724-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0724-2')?'checked':''}" onclick="toggleAction('0724-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C5; Thomson Reuters &mdash; Confirm renewal signed by July 30 and brief Augie on RGIF upgrade path</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; Thomson Reuters renewal is due July 30 &mdash; 6 days away. Confirm the renewal is moving through procurement, brief Augie Buettner on the RGIF upgrade proposal (252K accounts), and ensure Blake has everything needed to sign. Do not let the renewal slip past July 30 without a clear commitment or extension in writing.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0724-3')?'done':''}" data-csm="andy" id="action-0724-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0724-3')?'checked':''}" onclick="toggleAction('0724-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F916; Colt &mdash; Schedule MCP/AI agent demo with Francis Brero and Chloe</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim &middot; David Garcia-Thomas suggested scheduling an MCP/AI agent call for Colt similar to the SAS Institute engagement. Andy agreed. Coordinate with David, Francis Brero, and Chloe to find a time that works for Arkadiusz Wolinski and the Colt team. Follow up with a calendar invite this week.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0724-4')?'done':''}" data-csm="rani" id="action-0724-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0724-4')?'checked':''}" onclick="toggleAction('0724-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; Docusign &mdash; Send OpenGTM next-steps recap and propose technographic depth demo</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy &middot; First formal call with OpenGTM (Ben Salzman) and Docusign AI Innovation PM (Adam Melamed) went well. Send a recap of today&rsquo;s discussion, outline HG&rsquo;s technographic depth (installs, spend, intent, time series), and propose a focused demo on Docusign&rsquo;s target account universe. Coordinate with AE Ziad Amira on the follow-up plan to keep momentum.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0724-5')?'done':''}" data-csm="atisha" id="action-0724-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0724-5')?'checked':''}" onclick="toggleAction('0724-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F3E5; Apple &mdash; Build multi-industry win-rate analysis (healthcare + non-AI fast-growth)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela &middot; Simone Amorim and Adrian Escobar asked to expand the ML fast-growth scoring model beyond AI accounts to healthcare and other high-growth industries. Run an industry win-rate analysis against Apple&rsquo;s historical data to identify top industries to prioritize, then layer HG scoring signals (tech stack, employee growth, competitors) to produce a shortlist of unmanaged accounts per industry.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0724-6')?'done':''}" data-csm="rani" id="action-0724-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0724-6')?'checked':''}" onclick="toggleAction('0724-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F3AF; Hitachi Vantara &mdash; Confirm Hitachi sync occurred and log pulse note</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Rani Guy &middot; SFDC EventId matched a Hitachi Vantara recording (16:30 UTC, 30 min) but no transcript synced to SFDC. Verify with Rani whether the call took place, and if so, log a Vitally pulse note with the key topics discussed. Unconfirmed without transcript.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No actions match the current filter.</div>`;
}

// ── July 27, 2026 ──────────────────────────────────────────────────────────

function dayData_2026_07_27() {
  return {
    calls: [
      { ts: 'Jul 27 · 3:00 AM', csm: 'varun', account: 'OpenText',
        note: 'Bi-weekly cadence; renewal status with David, RGIP migration walkthrough planned for Aug 17+.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Renewal budget confirmed with David (returning Aug 17). Varun discussing RGIP platform migration (deadline Dec 31) and offering to send pre-read materials. Sujay shared OpenText new fiscal year focus on organic growth and key product suites from Berlin conference.' },
      { ts: 'Jul 27 · 7:00 AM', csm: 'atisha', account: 'Apple',
        note: 'FY27 industry insights collaboration; account ranking list and marketing team data deliverable.',
        mins: 60, health: 'Healthy',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Simone (Apple) requested FY27 industry insights and a ranked account list (target ~100 accounts, not 2000). Atisha committed to delivering ranking by end of day and coordinating with HG marketing team for industry insights data.' },
      { ts: 'Jul 27 · 9:00 AM', csm: 'atisha', account: 'RSM US',
        note: 'Pre-renewal check-in; Andrea adoption update and renewal business case prep for Friday full call.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Kristin returning from 2.5 weeks PTO. Andrea (new pilot user) successfully using HG data for NFL team research — positive signal. Renewal strengthening: Atisha and Kristin to reconnect Friday with Leo. Atisha working to expand Andrea\'s use case awareness for the renewal case.' },
      { ts: 'Jul 27 · 11:00 AM', csm: 'riley', account: 'Paycom',
        note: 'Weekly sync; EBR scheduling, review video delivery, June campaign metrics review.',
        mins: 30, health: 'Healthy',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley scheduling virtual EBR (in-person Oklahoma trip cancelled). TrustRadius review videos in production — Riley coordinating with event manager to deliver to Peyton/Alexis/Katie before YouTube/TR go-live. New reviewer behavior dashboard rolling out August. June campaign metrics shared.' },
      { ts: 'Jul 27 · 1:00 PM', csm: 'rani', account: 'NetApp',
        note: 'Weekly sync; champion Elise departed NetApp, renewal ~60 days out, ownership transition in progress.',
        mins: 25, health: 'Concerning',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Key champion Elise has departed NetApp. Renewal is ~50–60 days away. Bini Valsala and Megan Santiago-Gould indicate ownership is TBD — likely moving to a different team. Renewal proposal sent to Ross and Ryan last Friday. Match rate improved from 30% to 52% (expanded dataset to 43M accounts). Elise\'s target of 80% match rate remains the benchmark.' },
    ],
    pulses: [
      { csm: 'varun', account: 'OpenText', health: 'Healthy', note: 'Renewal budget confirmed with David; RGIP migration demo scheduled for post-Aug 17.' },
      { csm: 'atisha', account: 'Apple', health: 'Healthy', note: 'FY27 industry insights in progress; account ranking deliverable committed for EOD today.' },
      { csm: 'atisha', account: 'RSM US', health: 'Healthy', note: 'Andrea onboarding positive; renewal prep call scheduled for Friday with Kristin and Leo.' },
      { csm: 'riley', account: 'Paycom', health: 'Healthy', note: 'Engaged — EBR scheduling active, review videos in pipeline, new dashboard rollout August.' },
      { csm: 'rani', account: 'NetApp', health: 'Concerning', note: 'Champion Elise departed. Renewal ~60 days out with no clear owner. Proposal sent to Ross/Ryan.' },
    ],
  };
}

function dayMeta_2026_07_27() {
  return {
    pills: [
      ['dot-teal',  '5 Calls'],
      ['dot-red',   '1 Concerning'],
      ['dot-amber', '1 Expansion'],
      ['dot-green', '5 Vitally Pulses'],
      ['dot-grey',  'Mon Jul 27 · 65 scanned'],
    ],
    tabs: ['Overview', 'Calls (5)', 'Pulses (5)', 'Action Items (6)'],
  };
}

function dayOverviewHTML_2026_07_27() {
  return `<div class="section-label">Team Activity &mdash; Monday July 27, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Monday Jul 27 &mdash; 65 recordings scanned</strong> via SFDC SOQL &middot; <strong>5 confirmed customer calls</strong> across 4 CSMs &middot; 2 internal sessions excluded &middot; 5 unconfirmed (no transcript)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>NetApp &mdash; Champion Departed:</strong> Rani Guy's key champion Elise has left NetApp. Renewal is ~50&ndash;60 days out with ownership TBD. Renewal proposal sent to Ross &amp; Ryan &mdash; no response confirmed yet.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>OpenText &mdash; RGIP Migration &amp; Renewal:</strong> Varun Tiwari confirmed renewal budget with David (returns Aug 17). RGIP platform demo and migration in motion &mdash; Dec 31 migration deadline.
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
      <div class="csm-account-note">Paycom (Check-in: EBR scheduling, video delivery, Aug dashboard rollout)</div>
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
      <div class="csm-account-note">OpenText (Expansion: RGIP migration + renewal prep, David back Aug 17) &middot; Ciena unconfirmed</div>
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
        <div><div class="metric-num m-grey">25m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">NetApp &#x1F534; (champion Elise departed, renewal ~60 days out, ownership TBD)</div>
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
      <div class="csm-account-note">Apple (FY27 insights, account ranking deliverable) &middot; RSM (renewal prep, Friday call)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">4 events scheduled — no confirmed recordings (Infor debrief, HCL, Intuit IES, NTT — all unconfirmed/no transcript)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled — no confirmed recordings (Blackbaud unconfirmed/no transcript, Dynatrace no recording)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Attended internal GTM Enablement session (excluded) &mdash; no customer calls detected</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Infoblox recording found (AM-led call, Andy not detected as speaker) &mdash; no confirmed calls</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_27() {
  return `<div class="calls-table">
  <div style="background:#1c1117;border:1px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Concerning:</strong> NetApp &mdash; Elise (key champion) has departed. Renewal ~60 days out. Ownership unknown. Rani sent renewal proposal to Ross &amp; Ryan last Friday.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion:</strong> OpenText &mdash; RGIP platform migration in motion. Dec 31 deadline. Renewal budget confirmed with David (returns Aug 17).
  </div>
  <div style="background:#1c1f26;border:1px solid #64748b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#94a3b8;">
    &#x26A0; <strong>5 unconfirmed calls</strong> (no transcript): Varun/Ciena &middot; Nick/Infor debrief &middot; Nick/Intuit IES &middot; Atisha/DRT &middot; Divyam/Blackbaud
  </div>
  <div style="background:#1c1f26;border:1px solid #64748b;border-radius:6px;padding:8px 14px;margin:0 0 6px 0;font-size:12px;color:#94a3b8;">
    &#x1F512; <strong>2 internal sessions excluded:</strong> Weekly GTM Enablement (Rani/Pam/Riley + HG staff, 8:00 AM PT) &middot; Workday Renewal Prep (Rani + Mardigan Moffat HG/TR staff only, 1:30 PM PT)
  </div>
  </div>`;
}

function dayPulsesHTML_2026_07_27() {
  const cards = [
    { csm: 'varun', health: 'Healthy', account: 'OpenText',
      opp: 'Vitally Pulse &mdash; Jul 27 Call',
      arr: 'Enterprise &middot; Varun Tiwari',
      csmlbl: 'Varun Tiwari',
      change: 'Jul 27 &middot; Expansion signal',
      excerpt: '7/27 VT: Bi-weekly cadence with Sujay Kodagali (3:00 AM, 30 min). Renewal budget confirmed with David (returns Aug 17). Varun preparing RGIP platform pre-read + demo to migrate OpenText from legacy OpGen/MI to new RGIP module before Sep renewal.' },
    { csm: 'atisha', health: 'Healthy', account: 'Apple',
      opp: 'Vitally Pulse &mdash; Jul 27 Call',
      arr: 'Enterprise &middot; Atisha Waghela',
      csmlbl: 'Atisha Waghela',
      change: 'Jul 27 &middot; Check-in',
      excerpt: '7/27 AW: ML Model call with Simone Amorim and Aditi Saluja (7:00 AM, 60 min). Active FY27 industry insights collaboration. Atisha committed to delivering account ranking list (≤100) EOD today and coordinating HG marketing industry data.' },
    { csm: 'atisha', health: 'Healthy', account: 'RSM US',
      opp: 'Vitally Pulse &mdash; Jul 27 Call',
      arr: 'Enterprise &middot; Atisha Waghela',
      csmlbl: 'Atisha Waghela',
      change: 'Jul 27 &middot; Renewal prep',
      excerpt: '7/27 AW: Weekly sync with Kristin Lewis (9:00 AM, 30 min). Kristin returning from PTO. Andrea (new pilot user) successfully using HG data for NFL team research. Renewal strengthening call scheduled Friday with Leo and Kristin.' },
    { csm: 'riley', health: 'Healthy', account: 'Paycom',
      opp: 'Vitally Pulse &mdash; Jul 27 Call',
      arr: 'Enterprise &middot; Riley Rogers',
      csmlbl: 'Riley Rogers',
      change: 'Jul 27 &middot; Check-in',
      excerpt: '7/27 RR: TrustRadius sync with Peyton VanCuren and Alexis Correa (11:00 AM, 30 min). Virtual EBR being scheduled (Oklahoma in-person cancelled). Review videos in production, Riley coordinating priority delivery. Aug dashboard rollout discussed.' },
    { csm: 'rani', health: 'Concerning', account: 'NetApp',
      opp: 'Vitally Pulse &mdash; Jul 27 Call',
      arr: 'Enterprise &middot; Rani Guy',
      csmlbl: 'Rani Guy',
      change: 'Jul 27 &middot; &#x1F534; Concerning',
      excerpt: '7/27 RG: Weekly sync with Bini Valsala and Megan Santiago-Gould (1:00 PM, 25 min). Key champion Elise has departed NetApp. Renewal ~50-60 days out. Ownership TBD — likely moving to different team. Renewal proposal sent to Ross/Ryan last Friday. Match rate improved 30%→52% (43M accounts).' },
  ];
  const bc = h => h === 'Healthy' ? 'badge-healthy' : h === 'Concerning' ? 'badge-concerning' : 'badge-poor';
  const bi = h => h === 'Healthy' ? '&#128994;' : h === 'Concerning' ? '&#128993;' : '&#128308;';
  return `<div class="pulse-grid">${cards.map(c => `
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div class="pulse-account">${c.account}</div>
          <div class="pulse-opp">${c.opp}</div>
          <div class="pulse-arr">${c.arr}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filters.</div>`;
}

function dayActionsHTML_2026_07_27() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0727-1')?'done':''}" data-csm="rani" id="action-0727-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0727-1')?'checked':''}" onclick="toggleAction('0727-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; NetApp &mdash; Identify New Champion + Confirm Renewal Process</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Elise departed NetApp. Renewal is ~50&ndash;60 days away. Confirm with Ross and Ryan that they received last Friday's renewal proposal and have authority to move forward. If not, escalate to identify the new decision-maker and relationship owner before the renewal window closes. Set a 10-day deadline for a response commitment.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0727-2')?'done':''}" data-csm="varun" id="action-0727-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0727-2')?'checked':''}" onclick="toggleAction('0727-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; OpenText &mdash; Send RGIP Pre-Read to Sujay and Schedule David Demo (Aug 17+)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari &middot; Send RGIP platform materials and brochure to Sujay Kodagali this week for David to review before his return Aug 17. Schedule the formal live RGIP walkthrough demo (new unified module replacing OpGen + MI) for week of Aug 17. Migration deadline is Dec 31 &mdash; OpenText renewal is in September, so migrate contract and platform simultaneously.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0727-3')?'done':''}" data-csm="atisha" id="action-0727-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0727-3')?'checked':''}" onclick="toggleAction('0727-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F34E; Apple &mdash; Deliver Account Ranking List and Industry Insights to Simone (Today)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Simone Amorim is waiting for the FY27 industry insights and a ranked account list (50&ndash;100 accounts, not 2000). Atisha committed to delivering by EOD today (Jul 27). Also share HG marketing team's FY27 industry insights once received today. This is a time-sensitive deliverable for Apple's planning cycle.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0727-4')?'done':''}" data-csm="atisha" id="action-0727-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0727-4')?'checked':''}" onclick="toggleAction('0727-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; RSM &mdash; Prepare Renewal Business Case for Friday Call with Kristin and Leo</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela &middot; Full renewal prep call with Kristin Lewis and Leo on Friday. Prepare: (1) Andrea's new use case as renewal evidence (NFL team data research &mdash; unconventional use case that demonstrates HG data breadth), (2) expanded use case suggestions for Andrea to strengthen multi-stakeholder adoption, (3) overall renewal business case doc.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0727-5')?'done':''}" data-csm="rani" id="action-0727-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0727-5')?'checked':''}" onclick="toggleAction('0727-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; NetApp &mdash; Share Match Rate Progress Report with Ross and Ryan</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy &middot; Reinforce renewal value by sending Ross and Ryan a summary of the match rate improvement work: 30% → 52% match rate, expanded dataset from 10M to 43M accounts. Frame as progress toward Elise's 80% target. Include data quality analysis (99% of accounts had name-only, no URL) to contextualize the remaining gap. This gives new stakeholders context before the renewal conversation.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0727-6')?'done':''}" data-csm="riley" id="action-0727-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0727-6')?'checked':''}" onclick="toggleAction('0727-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F3A5; Paycom &mdash; Coordinate Video Delivery and Schedule Virtual EBR</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Riley Rogers &middot; (1) Have event coordinator Angel send TrustRadius review videos to Peyton VanCuren, Alexis Correa, and Katie before they go live on YouTube/TR site. (2) Lock in date for virtual EBR — Oklahoma in-person trip cancelled. Riley is OOO Wed&ndash;next Wed, so confirm EBR date before departing or coordinate for the week of Aug 3.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filters.</div>`;
}

// ─── 2026-07-28 ─────────────────────────────────────────────────────────────

function dayData_2026_07_28() {
  return {
    calls: [
      { ts: 'Jul 28 · 5:00 AM', csm: 'varun', account: 'DXC', note: 'Brief renewal planning check; rescheduled to Thursday afternoon. Credit model transition discussed.', mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in', detail: 'Varun Tiwari and Augie Buettner (AM) connected with Gabriella at DXC for renewal planning. Augie rescheduled the full discussion to Thursday afternoon. Topics included DXC credit model transition and invoice procurement routing issue (invoice sent to Prithi\'s team in error). Renewal due Nov 30, 2026.' },
      { ts: 'Jul 28 · 6:30 AM', csm: 'nick', account: 'IBM', note: 'Monthly sync on HashiCorp install data and IBM\'s data strategy for HashiCorp-related decisions.', mins: 30, health: 'Healthy', nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in', detail: 'Nick Johnson and Clayton Cutbush (HG AE) joined IBM contacts Kruti Desai, JJ, and William Onesti for monthly sync. Primary agenda: IBM email from Sid at HashiCorp and context on IBM-HashiCorp relationship. Nick referenced prior conversations with Sid and directed discussion toward how HG install data can support IBM\'s HashiCorp go-to-market decisions.' },
      { ts: 'Jul 28 · 9:00 AM', csm: 'nick', account: 'Red Hat', note: 'Catch-up after 6-week gap; Julia Schwartz connected to AI segmentation pilots and Salesforce recommendation object program.', mins: 60, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed', detail: 'Nick Johnson and Augie Buettner reconnected with Julia Schwartz after a 6-week gap (Augie\'s honeymoon + Julia\'s PTO). Max Shaw introduced to help evangelize HG pilot programs. Julia flagged difficulty centralizing segmentation pilots across Red Hat\'s large sales org. Nick offered to connect field teams to existing AI segmentation pilot work streams and Salesforce recommendation object. Expansion: broader pilot adoption across Red Hat field sales.' },
      { ts: 'Jul 28 · 9:00 AM', csm: 'rani', account: 'Cloudflare', note: 'Continued expansion conversation with Robert Goldfarb and Martin Kielczewski; down 8 headcount but expansion momentum continues.', mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion', detail: 'Rani Guy continued the Cloudflare expansion conversation with Robert Goldfarb and Martin Kielczewski (Mardigan Moffat of TrustRadius also attended). Martin noted Cloudflare is down 8 people and dealing with high context-switching load. Despite resource constraints flagged in the Jul 7 signal (60% ops resource loss, build-vs-buy eval), expansion conversation is actively progressing — a positive reversal from last month\'s concerning flag.' },
      { ts: 'Jul 28 · 9:30 AM', csm: 'nick', account: 'SAP', note: 'Biweekly sync; Rob Nute (Dir. Advanced Analytics) demoed vendor centricity capability; renewal direction discussed.', mins: 30, health: 'Healthy', nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed', detail: 'Nick Johnson hosted biweekly SAP sync with Adriana Aguiar and David Garcia-Thomas. Rob Nute (HG Director of Advanced Analytics) joined to demo the vendor centricity capability developed over several months. Adriana requested starting with renewal direction before the vendor centricity demo. Both renewal path and new capability expansion are on the table.' },
      { ts: 'Jul 28 · 10:00 AM', csm: 'riley', account: 'Zoom', note: 'TR CSM sync; GEO dashboard vendor portal update; Camille Shortridge prepping for customer webinar on GEO metrics.', mins: 30, health: 'Healthy', nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in', detail: 'Riley Rogers held recurring Zoom Video Communications TrustRadius CSM sync with Camille Shortridge and Cole Arutian. Riley updated Camille that the GEO dashboard in the vendor portal is still being finalized but will be available soon. Camille is preparing for a customer webinar and needs a briefing on the new GEO metrics. Riley connected her to Grace for a pre-webinar walkthrough.' },
      { ts: 'Jul 28 · 10:00 AM', csm: 'rani', account: 'Cisco (Isovalent)', note: 'Onboarding status check with Tu-Anh; inbound account scoring discussed but declined due to cost; onboarding nearing completion.', mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in', detail: 'Rani Guy held onboarding check-in with Tu-Anh at Cisco Isovalent (Mel on PTO). Rani clarified inbound account scoring is a separate paid product not included in current Cisco subscription — Tu-Anh deferred to Mel for cost evaluation. This was the last outstanding onboarding item. Account is part of Cisco-Marimuthu MK Platform & Data 05.27.2026 opportunity.' },
      { ts: 'Jul 28 · 10:00 AM', csm: 'atisha', account: 'Equinix', note: 'New contact Hassan Ali (ex-CrowdStrike, new to Equinix) discovered HG subscription; Atisha and Charles Hawkins oriented him to platform and data use cases.', mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in', detail: 'Atisha Waghela and Charles Hawkins (HG, new account owner) connected with Hassan Ali, who recently joined Equinix and discovered they are an HG customer. Hassan previously used HG at CrowdStrike for competitive displacement plays. Atisha helped orient Hassan to data-center and managed-services use cases relevant to Equinix GTM. Charles noted significant personnel changes at Equinix over the last 6 months. New high-intent stakeholder is a positive account health signal.' },
      { ts: 'Jul 28 · 10:30 AM', csm: 'rani', account: 'SAP (Partner)', note: 'Strategic SAP-HG upsell analysis partnership call; Michael Harding (SAP Rise GTM) exploring deeper HG data integration into SAP\'s upsell motion.', mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion', detail: 'Rani Guy and Mark Fell (HG VP) joined Everett Oliven and KP Pindle in a strategic call with Michael Harding (SAP, manages global GTM for SAP Rise on Google Cloud). Everett (ex-AWS) facilitated the introduction, noting SAP already has HG data embedded in its propensity model. Goal: ensure SAP is fully consuming HG data and identify upsell/cross-sell expansion opportunities in SAP\'s global GTM motion. Significant expansion signal — HG data potentially embedded deeper in SAP\'s worldwide upsell analytics.' },
      { ts: 'Jul 28 · 11:00 AM', csm: 'divyam', account: 'Lumen', note: 'RGIP platform onboarding session with Nathan, Kunal Jha, Julie Chalk, Eric Bailey; new acquisition capabilities covered; multiple lookalike models requested.', mins: 60, health: 'Healthy', nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in', detail: 'Divyam Dewan led a structured RGIP platform onboarding session for Lumen Technologies team (Nathan, Kunal Jha, Julie Chalk, Eric Bailey, Yatin Chalke). Covered new platform capabilities added through HG acquisitions; sessions kept interactive and use-case relevant. Nathan flagged several upcoming lookalike model requests from Lumen\'s internal teams. Lumen renewed Jul 1 (175K credits) and onboarding is progressing on schedule.' },
      { ts: 'Jul 28 · 11:30 AM', csm: 'riley', account: 'Red Hat', note: 'Biweekly TrustRadius sync; GEO dashboard update; layoff discussion (Stacy departed HG); Riley departing Aruba vacation tomorrow.', mins: 30, health: 'Healthy', nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in', detail: 'Riley Rogers held biweekly Red Hat TrustRadius sync with Brianna Gault and Abhilasha (HG). The team discussed recent HG layoffs — Stacy\'s departure was noted and the team processed it together. Riley covered the GEO dashboard vendor portal update. Riley departs for Aruba vacation tomorrow. Mardigan Moffat (TrustRadius) also attended. Relationship continuity noted as strong despite org changes.' },
      { ts: 'Jul 28 · 12:30 PM', csm: 'riley', account: 'Intuit', note: 'TrustRadius reengagement call with Rana Hannoush; AI increasing TrustRadius value; budget constraints and org shifts noted.', mins: 30, health: 'Healthy', nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in', detail: 'Riley Rogers and Mardigan Moffat (TrustRadius) reconnected with Rana Hannoush (Intuit QuickBooks Workforce) after an extended gap. Mardigan noted TrustRadius acquisition by HG has brought new products and changes. Discussion: AI is increasing the value of social proof as AI engines crawl review content — TrustRadius is well-positioned. Budget constraints and project ownership shifts in Intuit marketing org noted as ongoing friction.' },
    ],
    pulses: [
      { csm: 'varun', account: 'DXC', health: 'Healthy', note: 'Renewal planning call with Augie and Gabriella. Credit model transition discussed; invoice routing issue being resolved. Renewal Nov 30.' },
      { csm: 'nick', account: 'IBM', health: 'Healthy', note: 'Monthly sync. HashiCorp install data strategy discussed with Kruti Desai and JJ. Directing IBM toward HG data for HashiCorp GTM decisions.' },
      { csm: 'nick', account: 'Red Hat', health: 'Healthy', note: 'Reconnect after 6-week gap. Julia Schwartz connected to AI segmentation pilot work streams and Salesforce recommendation object. Max Shaw introduced.' },
      { csm: 'rani', account: 'Cloudflare', health: 'Healthy', note: 'Continued expansion conversation. Martin Kielczewski (down 8 headcount) still engaged. Positive reversal from Jul 7 concerning flag.' },
      { csm: 'nick', account: 'SAP', health: 'Healthy', note: 'Biweekly sync. Rob Nute demoed vendor centricity. Renewal direction discussed with Adriana Aguiar.' },
      { csm: 'riley', account: 'Zoom', health: 'Healthy', note: 'TR CSM sync. GEO dashboard in vendor portal coming soon. Camille Shortridge connected to Grace for pre-webinar briefing.' },
      { csm: 'rani', account: 'Cisco (Isovalent)', health: 'Healthy', note: 'Onboarding check-in with Tu-Anh. Inbound account scoring declined (cost). Onboarding nearing completion.' },
      { csm: 'atisha', account: 'Equinix', health: 'Healthy', note: 'New stakeholder Hassan Ali (ex-CrowdStrike) engaged. Oriented to HG platform. New high-intent contact signals strong account health.' },
      { csm: 'rani', account: 'SAP (Partner)', health: 'Healthy', note: 'Strategic SAP-HG upsell partnership call. Michael Harding (SAP Rise GTM) engaged. HG data already in SAP propensity model — deeper integration opportunity.' },
      { csm: 'divyam', account: 'Lumen', health: 'Healthy', note: 'RGIP onboarding session. New acquisition capabilities covered. Nathan flagging multiple lookalike model requests from internal teams.' },
      { csm: 'riley', account: 'Red Hat', health: 'Healthy', note: 'Biweekly TR sync. GEO dashboard update. Layoff discussion (Stacy). Riley on Aruba vacation starting tomorrow.' },
      { csm: 'riley', account: 'Intuit', health: 'Healthy', note: 'TR reengagement with Rana Hannoush. AI increasing TrustRadius value. Budget constraints and org changes noted.' },
    ],
  };
}

function dayMeta_2026_07_28() {
  return {
    pills: [
      ['dot-teal',  '12 Calls'],
      ['dot-amber', '3 Expansion'],
      ['dot-green', '12 Pulses'],
      ['dot-grey',  'Tue Jul 28 · 89 scanned'],
    ],
    tabs: ['Overview', 'Calls (12)', 'Pulses (12)', 'Action Items (7)'],
  };
}

function dayOverviewHTML_2026_07_28() {
  return `<div class="section-label">Team Activity &mdash; Tuesday July 28, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Jul 28 &mdash; 89 recordings scanned</strong> via SFDC SOQL &middot; <strong>12 confirmed calls</strong> across 6 CSMs &middot; <span style="color:#f59e0b;">3 Expansion signals</span> (Cloudflare, SAP Partner, Red Hat) &middot; 0 Concerning
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signals:</strong> Cloudflare expansion conversation with Robert Goldfarb &amp; Martin Kielczewski (positive reversal from Jul 7 concerning flag) &middot; SAP upsell analysis partnership call with SAP Rise GTM (Michael Harding) &middot; Red Hat segmentation pilot expansion (Julia Schwartz connected to AI pilot work streams)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Zoom (GEO dashboard) &middot; Red Hat TR (biweekly) &middot; Intuit (reengagement)</div>
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
        <div><div class="metric-num m-grey">120m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM (monthly) &middot; Red Hat (pilots expansion) &middot; SAP (vendor centricity demo)</div>
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
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lumen (RGIP onboarding, multiple lookalike models requested)</div>
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
        <div><div class="metric-num m-grey">90m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Cloudflare (expansion &uarr;) &middot; Cisco Isovalent (onboarding) &middot; SAP Partner (upsell &uarr;)</div>
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
      <div class="csm-account-note">DXC (brief renewal planning; rescheduled to Thu afternoon)</div>
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
      <div class="csm-account-note">Equinix (new stakeholder Hassan Ali engaged, high intent)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (internal HG team sync &mdash; Mark Fell Ops) &mdash; no external customer recordings</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event scheduled (ConnectWise biweekly) &mdash; no recording synced</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_28() {
  return `<div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>3 Expansion signals today:</strong> Cloudflare (Robert Goldfarb + Martin Kielczewski, positive reversal from Jul 7 concerning) &middot; SAP Partner (Michael Harding, SAP Rise GTM upsell analytics) &middot; Red Hat (Julia Schwartz, AI segmentation pilot expansion)
  </div>
  <div style="background:#1c1f26;border:1px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#94a3b8;">
    &#x26A0; <strong>Unconfirmed (no transcript):</strong> Unum biweekly (Varun &mdash; recording exists, no transcript) &middot; Apple Strategy &amp; Planning (Atisha &mdash; recording exists, no transcript) &middot; ConnectWise biweekly (Andy &mdash; no recording)<br>
    &#x1F534; <strong>Internal excluded:</strong> Team Sync &mdash; Mark Fell Ops (Pam Huck, WhatId = HG Insights account)
  </div>
  <div class="calls-table"><!-- auto-table rendered by core.js from dayData fields --></div>`;
}

function dayPulsesHTML_2026_07_28() {
  const cards = [
    { csm: 'varun', health: 'Healthy', account: 'DXC',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 VT: Renewal planning with Augie &amp; Gabriella (5:00 AM, 30 min). Call briefly rescheduled to Thursday afternoon by Augie. Credit model transition discussed; invoice routing issue (Prithi\'s team) being resolved. Renewal Nov 30, ~$40K. Lookahead: full renewal meeting Thu.' },
    { csm: 'nick', health: 'Healthy', account: 'IBM',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 NJ: Monthly sync with Kruti Desai, JJ, William Onesti (6:30 AM, 30 min). Discussed IBM email from Sid at HashiCorp; Nick directed team toward HG install data to support IBM\'s HashiCorp GTM. Clayton Cutbush (HG AE) also on call.' },
    { csm: 'nick', health: 'Healthy', account: 'Red Hat',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 28 &middot; Expansion signal',
      excerpt: '7/28 NJ: Reconnect with Julia Schwartz after 6-week gap (9:00 AM, 60 min). Introduced Max Shaw to evangelize HG pilots. Julia working to centralize AI segmentation pilots across Red Hat field. Nick + Augie connecting her to existing AI pilot work streams and Salesforce recommendation object.' },
    { csm: 'rani', health: 'Healthy', account: 'Cloudflare',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jul 28 &middot; Expansion signal',
      excerpt: '7/28 RG: Continued expansion conversation with Robert Goldfarb &amp; Martin Kielczewski (9:00 AM, 30 min). Martin noted Cloudflare is down 8 headcount. Positive reversal from Jul 7 concerning flag (build-vs-buy eval). Expansion momentum continues despite resource constraints.' },
    { csm: 'nick', health: 'Healthy', account: 'SAP',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 28 &middot; Mixed',
      excerpt: '7/28 NJ: Biweekly SAP sync with Adriana Aguiar &amp; David Garcia-Thomas (9:30 AM, 30 min). Rob Nute (HG Dir. Advanced Analytics) demoed vendor centricity capability. Renewal direction discussed — Adriana prioritized renewal discussion before the demo. Both renewal path and expansion on table.' },
    { csm: 'riley', health: 'Healthy', account: 'Zoom',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 RR: TR CSM sync with Camille Shortridge &amp; Cole Arutian (10:00 AM, 30 min). GEO dashboard in vendor portal launching soon. Camille prepping for customer webinar on GEO metrics; connected to Grace for pre-webinar walkthrough.' },
    { csm: 'rani', health: 'Healthy', account: 'Cisco (Isovalent)',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 RG: Onboarding check-in with Tu-Anh (10:00 AM, 30 min). Mel on PTO. Inbound account scoring discussed; Tu-Anh declined at current cost. Last outstanding onboarding item resolved. Account onboarding nearing completion.' },
    { csm: 'atisha', health: 'Healthy', account: 'Equinix',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 AW: New stakeholder call with Hassan Ali (10:00 AM, 30 min). Hassan is new to Equinix, previously used HG at CrowdStrike. Atisha + Charles Hawkins (new HG owner) oriented him to HG platform and data-center displacement use cases. High-intent new contact.' },
    { csm: 'rani', health: 'Healthy', account: 'SAP (Partner)',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jul 28 &middot; Expansion signal',
      excerpt: '7/28 RG: Strategic SAP-HG upsell analysis call with Michael Harding (SAP Rise GTM) (10:30 AM, 30 min). HG data already in SAP propensity model. Everett Oliven (ex-AWS) facilitated. Goal: deepen HG data consumption and identify upsell/cross-sell in SAP\'s global GTM motion. Significant expansion opportunity.' },
    { csm: 'divyam', health: 'Healthy', account: 'Lumen',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 DD: RGIP platform onboarding session with Nathan, Kunal Jha, Julie Chalk, Eric Bailey (11:00 AM, 60 min). New acquisition capabilities covered interactively. Nathan flagging multiple lookalike model requests incoming from internal teams. Lumen renewal (Jul 1, 175K credits) progressing well.' },
    { csm: 'riley', health: 'Healthy', account: 'Red Hat',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 RR: Biweekly TR sync with Brianna Gault &amp; Abhilasha HG (11:30 AM, 30 min). Discussed HG layoffs (Stacy departed). GEO dashboard vendor portal update. Riley departing for Aruba vacation tomorrow.' },
    { csm: 'riley', health: 'Healthy', account: 'Intuit',
      opp: 'Vitally Pulse &mdash; Jul 28 Call',
      arr: 'Enterprise &middot; Riley Rogers', csmlbl: 'Riley Rogers',
      change: 'Jul 28 &middot; Check-in',
      excerpt: '7/28 RR: TR reengagement with Rana Hannoush (12:30 PM, 30 min). First reconnect in a while with Mardigan Moffat (TR). AI increasing TrustRadius value as AI engines crawl reviews. Budget constraints and org ownership shifts noted at Intuit.' },
  ];
  const bc = h => h === 'Healthy' ? 'badge-healthy' : h === 'Concerning' ? 'badge-concerning' : 'badge-poor';
  const bi = h => h === 'Healthy' ? '&#128994;' : h === 'Concerning' ? '&#128993;' : '&#128308;';
  return `<div class="pulse-grid">${cards.map(c => `
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-weight:600;font-size:13px;color:#f1f5f9;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filters.</div>`;
}

function dayActionsHTML_2026_07_28() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0728-1')?'done':''}" data-csm="rani" id="action-0728-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0728-1')?'checked':''}" onclick="toggleAction('0728-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cloudflare &mdash; Advance Expansion Conversation with Robert Goldfarb &amp; Martin</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Jul 28 expansion call progressed despite Martin being down 8 headcount. This is a direct reversal of the Jul 7 concerning flag (build-vs-buy eval, 60% ops resource loss). Rani should document the expansion scope discussed, identify what product/feature expansion is on the table, and set a concrete follow-up timeline with Robert and Martin. The momentum is real &mdash; keep it moving before resource constraints stall it again.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0728-2')?'done':''}" data-csm="rani" id="action-0728-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0728-2')?'checked':''}" onclick="toggleAction('0728-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F91D; SAP (Partner) &mdash; Document HG-SAP Upsell Analytics Partnership Next Steps</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Mark Fell &middot; Strategic call with Michael Harding (SAP Rise GTM) is a significant expansion signal. HG data is already embedded in SAP\'s propensity model. Next step: Rani and Mark Fell should prepare a clear proposal or one-pager on how HG data can be more deeply integrated into SAP\'s global upsell/cross-sell motion. Clarify the scope, commercial structure, and next decision-maker meeting. Everett Oliven should be kept in the loop as facilitator.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0728-3')?'done':''}" data-csm="nick" id="action-0728-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0728-3')?'checked':''}" onclick="toggleAction('0728-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; Red Hat &mdash; Connect Julia Schwartz to AI Segmentation Pilot &amp; Salesforce Recommendation Object</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Julia Schwartz is returning from a 6-week gap and is ready to centralize Red Hat\'s segmentation pilots. Nick and Augie committed to connecting her to the existing AI pilot work stream and Salesforce recommendation object program. Nick should send Julia a direct intro to the relevant pilot work stream lead and provide a brief overview of the recommendation object already deployed in Red Hat\'s SFDC. Move this week to capture momentum while Julia is re-engaged.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0728-4')?'done':''}" data-csm="varun" id="action-0728-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0728-4')?'checked':''}" onclick="toggleAction('0728-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; DXC &mdash; Confirm Thursday Afternoon Renewal Meeting Agenda with Augie</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Today\'s call was rescheduled to Thursday afternoon by Augie. Varun should confirm the time with Augie and prepare the renewal agenda: (1) credit model transition ($40K subscription = ~40K credits), (2) vendor onboarding paperwork timeline, (3) Gabriella\'s individual usage stats (Augie to share), (4) outstanding invoice resolution status from Prithi\'s manager. Renewal is Nov 30, 2026 &mdash; procurement timelines require early action.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0728-5')?'done':''}" data-csm="nick" id="action-0728-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0728-5')?'checked':''}" onclick="toggleAction('0728-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E4; SAP &mdash; Send Vendor Centricity Materials to Adriana After Rob Nute Demo</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; Rob Nute (Dir. Advanced Analytics) presented the vendor centricity capability in the biweekly SAP sync. Nick should follow up with Adriana Aguiar and David Garcia-Thomas with the vendor centricity deck or materials and confirm next steps on the renewal direction discussed. Two parallel tracks: (1) renewal pricing and structure, (2) vendor centricity capability expansion. Separate follow-ups may be needed for each track.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0728-6')?'done':''}" data-csm="atisha" id="action-0728-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0728-6')?'checked':''}" onclick="toggleAction('0728-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F5FA; Equinix &mdash; Follow Up with Hassan Ali on Platform Access and Use Case Setup</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela &middot; Hassan Ali is a new high-intent contact at Equinix (previously used HG at CrowdStrike for competitive displacement). Atisha should send Hassan a follow-up with: (1) instructions for accessing the HG platform via his Equinix credentials, (2) a 1-pager on data-center and managed services displacement use cases, (3) an offer for a dedicated onboarding call with Equinix\'s relevant team. This is a strong new stakeholder opportunity given Hassan\'s prior HG experience and stated use case fit.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0728-7')?'done':''}" data-csm="divyam" id="action-0728-7">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0728-7')?'checked':''}" onclick="toggleAction('0728-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F9E9; Lumen &mdash; Queue Lookalike Model Requests from Nathan and Confirm Next Onboarding Session</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Divyam Dewan &middot; Nathan flagged multiple lookalike model requests coming through from Lumen\'s internal teams. Divyam should confirm: (1) queue the incoming model requests and set turnaround expectations with Nathan, (2) send a session recap with the new platform capabilities covered today, (3) confirm schedule for the next onboarding session. Lumen is tracking well post-renewal (Jul 1, 175K credits).</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filters.</div>`;
}

// ─── July 29, 2026 ────────────────────────────────────────────────────────────

function dayData_2026_07_29() {
  return {
    calls: [
      { ts: 'Jul 29 · 5:00 AM', csm: 'Varun Tiwari', account: 'BMC Software', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Post-advisory session action review; license renewal planning; invoice routing resolution with Prithi\'s team' },
      { ts: 'Jul 29 · 7:30 AM', csm: 'Varun Tiwari', account: 'CBTS', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Bi-weekly sync; platform engagement and usage review' },
      { ts: 'Jul 29 · 8:30 AM', csm: 'Nick Johnson', account: 'Siemens AG', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Bi-weekly cadence; HG data usage and strategic alignment; Max Shaw (HG inside sales) also present' },
      { ts: 'Jul 29 · 10:00 AM', csm: 'Atisha Waghela', account: 'Apple', duration: '30 min',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'ML model use case review; data prop team engagement discussion; platform check-in' },
      { ts: 'Jul 29 · 12:00 PM', csm: 'Divyam Dewan', account: 'Blackbaud', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'TrustRadius biweekly sync; review status and engagement next steps' },
      { ts: 'Jul 29 · 12:00 PM', csm: 'Rani Guy', account: 'Lenovo Group Ltd.', duration: '30 min',
        nature: 'Routine', initiator: 'Customer', purpose: 'Expansion',
        detail: 'Kam (ISV BD) exploring HG data for ISV market penetration and workstation sales plays; new use case — quantify TAM, activate ISV account-based sales plays' },
      { ts: 'Jul 29 · 1:00 PM', csm: 'Atisha Waghela', account: 'Databricks Inc.', duration: '30 min',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: 'Custom spend model concerns; app development criteria questions; expert Doug on leave until Aug 11; Tracy Chong covering' },
    ],
    pulses: [
      { account: 'BMC Software',      csm: 'Varun Tiwari',  health: 'Healthy' },
      { account: 'CBTS',              csm: 'Varun Tiwari',  health: 'Healthy' },
      { account: 'Siemens AG',        csm: 'Nick Johnson',  health: 'Healthy' },
      { account: 'Apple',             csm: 'Atisha Waghela',health: 'Healthy' },
      { account: 'Blackbaud',         csm: 'Divyam Dewan',  health: 'Healthy' },
      { account: 'Lenovo Group Ltd.', csm: 'Rani Guy',      health: 'Healthy' },
      { account: 'Databricks Inc.',   csm: 'Atisha Waghela',health: 'Concerning' },
    ]
  };
}

function dayMeta_2026_07_29() {
  return {
    pills: [
      ['dot-teal',  '7 Calls'],
      ['dot-green', '5 CSMs Active'],
      ['dot-blue',  '1 Expansion'],
      ['dot-red',   '1 Issue'],
    ],
    tabs: ['Overview', 'Calls', 'Pulses', 'Actions']
  };
}

function dayOverviewHTML_2026_07_29() {
  return `<div class="section-label">Team Activity &mdash; Wednesday July 29, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Jul 29 &mdash; 90 recordings scanned</strong> via SFDC SOQL &middot; <strong>7 confirmed calls</strong> across 5 CSMs &middot; <span style="color:#f59e0b;">1 Expansion signal</span> (Lenovo ISV BD) &middot; 1 Issue flag (Databricks)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion signal:</strong> Lenovo ISV BD &mdash; Kam developing ISV market penetration plan to quantify TAM &amp; activate workstation sales plays with Rani Guy &amp; Adrian Escobar &middot; &#x26A0; <strong>Issue flag:</strong> Databricks custom spend model &mdash; Doug on leave until Aug 11; Tracy Chong covering
  </div>
  <div class="overview-grid">

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
      <div class="csm-account-note">Siemens (bi-weekly cadence; Max Shaw on call)</div>
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
      <div class="csm-account-note">Blackbaud (TrustRadius biweekly sync)</div>
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
      <div class="csm-account-note">Lenovo (Kam ISV BD &mdash; new use case expansion signal)</div>
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
      <div class="csm-account-note">BMC (post-advisory action review + renewal) &middot; CBTS (bi-weekly)</div>
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
      <div class="csm-account-note">Apple (ML model check-in) &middot; Databricks (custom spend issue &mdash; Doug on leave)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No customer calls &mdash; on Aruba vacation (departed Jul 28)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">PH</div>
        <div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer recordings</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer recordings</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_29() {
  return `<div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>1 Expansion signal:</strong> Lenovo &mdash; Kam (ISV BD) exploring HG data to quantify TAM, map market penetration, and activate workstation ISV sales plays with Rani Guy &amp; Adrian Escobar
  </div>
  <div style="background:#1c1f26;border:1px solid #334155;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#94a3b8;">
    &#x26A0; <strong>1 Issue flag:</strong> Databricks &mdash; Customer concerns about custom spend model criteria (app development segmentation); expert Doug on leave until Aug 11; Tracy Chong covering
  </div>
  <div class="calls-table"><!-- auto-table rendered by core.js from dayData fields --></div>`;
}

function dayPulsesHTML_2026_07_29() {
  const cards = [
    { csm: 'varun', health: 'Healthy', account: 'BMC Software',
      opp: 'Vitally Pulse &mdash; Jul 29 Call',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 29 &middot; Check-in',
      excerpt: '7/29 VT: Post-advisory session action review with David Bartholomew and Augie Buettner (5:00 AM, 30 min). David debriefed from the HG Advisory event; identified key action items on license renewal. Discussion around credit model transition and outstanding invoice routing issue (Prithi\'s team). Renewal planning continuing; specific follow-up actions from advisory session being tracked.' },
    { csm: 'varun', health: 'Healthy', account: 'CBTS',
      opp: 'Vitally Pulse &mdash; Jul 29 Call',
      arr: 'Enterprise &middot; Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 29 &middot; Check-in',
      excerpt: '7/29 VT: Bi-weekly sync (7:30 AM, 30 min). Routine cadence call; platform engagement and usage review with CBTS team. No critical escalations. Engagement ongoing.' },
    { csm: 'nick', health: 'Healthy', account: 'Siemens AG',
      opp: 'Vitally Pulse &mdash; Jul 29 Call',
      arr: 'Enterprise &middot; Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 29 &middot; Check-in',
      excerpt: '7/29 NJ: Bi-weekly cadence call (8:30 AM, 30 min). Nick Johnson confirmed as speaker; Max Shaw (HG inside sales) and Chloé Portier (HG) also present. Regular HG data usage and strategic alignment review with Siemens team. Steady engagement; no escalations noted.' },
    { csm: 'atisha', health: 'Healthy', account: 'Apple',
      opp: 'Vitally Pulse &mdash; Jul 29 Call',
      arr: 'Enterprise &middot; Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jul 29 &middot; Check-in',
      excerpt: '7/29 AW: ML model use case review (10:00 AM, 30 min). Customer-initiated check-in focused on data prop team engagement and ML model criteria. Atisha covered the full scope of Apple\'s HG data deployment and addressed questions from the data prop team. Healthy engagement with focus on advanced use cases.' },
    { csm: 'divyam', health: 'Healthy', account: 'Blackbaud',
      opp: 'Vitally Pulse &mdash; Jul 29 Call',
      arr: 'Enterprise &middot; Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jul 29 &middot; Check-in',
      excerpt: '7/29 DD: TrustRadius biweekly sync (12:00 PM, 30 min). Regular cadence with Blackbaud TrustRadius contacts. Review status update and engagement next steps discussed. Ongoing relationship maintenance; no flags surfaced.' },
    { csm: 'rani', health: 'Healthy', account: 'Lenovo Group Ltd.',
      opp: 'Vitally Pulse &mdash; Jul 29 Call',
      arr: 'Enterprise &middot; Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jul 29 &middot; Expansion signal',
      excerpt: '7/29 RG: Expansion discovery call with Kam (ISV BD), Ryan Warren, Adrian Escobar (12:00 PM, 30 min). Kam is developing an ISV market plan to drive workstation hardware sales and is exploring HG data to quantify TAM, measure ISV market penetration, and activate targeted account-based sales plays with ISV partners. Ryan has been working with HG for ~2 years; Kam is net new to the platform. Clear expansion use case with committed internal sponsor. Rani and Adrian should define data scope and next steps.' },
    { csm: 'atisha', health: 'Concerning', account: 'Databricks Inc.',
      opp: 'Vitally Pulse &mdash; Jul 29 Call',
      arr: 'Enterprise &middot; Atisha Waghela', csmlbl: 'Atisha Waghela',
      change: 'Jul 29 &middot; Issue',
      excerpt: '7/29 AW: Custom spend model issue call with Ryan Comstock, Charles Hawkins (1:00 PM, 30 min). Customer raised concerns about app development criteria in the custom spend model &mdash; specifically how AI workload segmentation overlaps with the broader TAN model. Doug (custom spend expert) is the sole builder of the model and is on leave until Aug 11. Tracy Chong covering. Risk: customer decisions about model configuration may be delayed 2+ weeks. Atisha should ensure Tracy is fully briefed and set a follow-up meeting for Aug 11.' },
  ];
  const bc = h => h === 'Healthy' ? 'badge-healthy' : h === 'Concerning' ? 'badge-concerning' : 'badge-poor';
  const bi = h => h === 'Healthy' ? '&#128994;' : h === 'Concerning' ? '&#128993;' : '&#128308;';
  return `<div class="pulse-grid">${cards.map(c => `
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div class="pulse-account">${c.account}</div>
          <div class="pulse-opp">${c.opp}</div>
          <div class="pulse-arr">${c.arr}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filters.</div>`;
}
function dayActionsHTML_2026_07_29() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0729-1')?'done':''}" data-csm="rani" id="action-0729-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0729-1')?'checked':''}" onclick="toggleAction('0729-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Lenovo &mdash; Define ISV BD Expansion Scope with Kam and Advance to Commercial Discussion</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar &middot; Kam (Lenovo ISV BD) is building a structured ISV market plan to grow workstation hardware sales and came with specific data needs: TAM quantification, ISV market penetration analysis, and account-based sales play activation with ISV partners. This is a clear, sponsored new use case that sits outside Lenovo&apos;s current HG footprint. Rani and Adrian should send a follow-up scoping doc or deck to Kam defining what HG data can address (install data for ISV account targeting, spend signals, competitive displacement), confirm whether this requires a seat expansion or new product, and set a next discovery call. Ryan Warren can facilitate internal alignment on Lenovo&apos;s side.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0729-2')?'done':''}" data-csm="atisha" id="action-0729-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0729-2')?'checked':''}" onclick="toggleAction('0729-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0; Databricks &mdash; Brief Tracy on Custom Spend Model &amp; Set Aug 11 Follow-Up with Doug</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela &middot; Databricks raised specific concerns about app development criteria in the custom spend model, particularly around AI workload segmentation overlap. Doug, the sole model expert, is on leave until Aug 11. Tracy Chong is covering but may not have full context on the model build decisions. Atisha should: (1) send Tracy a written summary of the customer&apos;s questions from today&apos;s call so she can respond to anything time-sensitive, (2) advise Ryan Comstock and Charles Hawkins not to make model configuration changes until Doug returns, (3) schedule a follow-up call with Doug, Atisha, and Databricks for the week of Aug 11 to resolve the criteria questions. Do not let this sit without a clear timeline communicated to the customer.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0729-3')?'done':''}" data-csm="varun" id="action-0729-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0729-3')?'checked':''}" onclick="toggleAction('0729-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; BMC &mdash; Send Advisory Session Action Summary to Augie and Schedule Next Renewal Meeting</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Today&apos;s call with David Bartholomew and Augie Buettner was explicitly a post-advisory action review. Key items discussed: credit model transition ($40K subscription mapping), invoice routing issue (Prithi&apos;s team), and renewal planning (Nov 30, 2026). Varun should send Augie a written action log from the advisory session with owner and due date for each item, confirm status of the invoice routing escalation, and schedule the formal renewal planning meeting with Augie and Gabriella to complete what today&apos;s call set up.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0729-4')?'done':''}" data-csm="nick" id="action-0729-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0729-4')?'checked':''}" onclick="toggleAction('0729-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4E4; Siemens &mdash; Send Bi-Weekly Recap and Confirm Next Meeting</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Nick Johnson &middot; Routine bi-weekly call completed. Nick (and Max Shaw) should send a brief recap email confirming any action items or data requests surfaced during the call. Confirm the next bi-weekly cadence date to maintain momentum. No escalations flagged.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0729-5')?'done':''}" data-csm="divyam" id="action-0729-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0729-5')?'checked':''}" onclick="toggleAction('0729-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Blackbaud &mdash; Follow Up on Any TR Review Program Action Items from Biweekly</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Divyam Dewan &middot; Routine TrustRadius biweekly sync completed. Divyam should send a brief follow-up with any review program action items or next steps discussed. Confirm the next biweekly cadence. Healthy engagement; no flags.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filters.</div>`;
}

function dayData_2026_07_30() {
  return {
    calls: [
      { ts: 'Jul 30 · 2:00 AM', csm: 'Nick Johnson', account: 'Telefonica', duration: '30 min',
        nature: 'Routine', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Lorena assessing HG data value for new BI area ahead of renewal; David (AM) introduced new Fabric dataset (42M companies Spain+Brazil vs. current V2 10M) as upgrade path' },
      { ts: 'Jul 30 · 3:30 AM', csm: 'Nick Johnson', account: 'Sopra Steria', duration: '30 min',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'New pricing discussion with Peter Quinn (new stakeholder); Angus (AM) leading commercial conversation; HCL BigFix TrustRadius premium listing surfaced as parallel opportunity' },
      { ts: 'Jul 30 · 5:00 AM', csm: 'Varun Tiwari', account: 'DXC', duration: '30 min',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Preethi outlined renewal planning priorities: data module coverage, usage metrics, data refresh timeline, and future connector/integration options for FY27 automation scaling' },
      { ts: 'Jul 30 · 5:00 AM', csm: 'Divyam Dewan', account: 'Infinigate', duration: '30 min',
        nature: 'Routine', initiator: 'Customer', purpose: 'Issue',
        detail: 'Abolfazl flagged drastic decrease in search results from data export; caused by backend data replugging (unforeseen outage); EMEA intent data degraded across Germany, France, Netherlands, Austria, UK — no fix timeline confirmed' },
      { ts: 'Jul 30 · 6:30 AM', csm: 'Varun Tiwari', account: 'Exclusive Networks', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Matt Tinker managing simultaneous major transformation projects: Salesforce implementation, MDM setup, new sales performance tools, partner data, vendor onboarding — platform usage on hold during transformation period' },
      { ts: 'Jul 30 · 7:30 AM', csm: 'Nick Johnson', account: 'Siemens', duration: '30 min',
        nature: 'Routine', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Siemens Process & Technology reorg effective Aug 1: Hayden to AI-focused role; Christina to strategic land initiative + social selling (Account Compass); Pat to zone-level key initiatives — HG tool usage shifting to new owners' },
      { ts: 'Jul 30 · 7:30 AM', csm: 'Varun Tiwari', account: 'ServiceNow', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Varun introducing Kraig Kraning (new this week, replaces Ravi who moved to new role; formerly ZoomInfo); 7+ year partnership review with Santhosh' },
      { ts: 'Jul 30 · 8:30 AM', csm: 'Divyam Dewan', account: 'Lumen', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Training session earlier this week went well (Julie Chalk positive); AM transition — new AM joining next Thursday (Augie being replaced); Nathan\'s team adoption growing with each member finding their niche' },
      { ts: 'Jul 30 · 9:00 AM', csm: 'Nick Johnson', account: 'Veeam', duration: '45 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Propensity model sync: Angus (AM) and JBI (Jean-Baptiste Vermersch) reviewing 500+ technology signals to curate model scope; Tricia Greenwald (Corporate Tech, back from PTO) joined; Sid Subramany also on call' },
      { ts: 'Jul 30 · 11:00 AM', csm: 'Divyam Dewan', account: 'Genesys', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'TrustRadius sync with Erica Heil; sustainability award application submitted (awaiting results); historical ratings-to-reviews campaign review; Divyam proactively clearing any open items' },
      { ts: 'Jul 30 · 11:00 AM', csm: 'Rani Guy', account: 'Cloudflare', duration: '60 min',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Open Price batch matching methodology deep-dive; 4 parallel batch files queued (Omkar config\'d), results expected early next week; quarterly matching cadence and credits expansion scope to be defined post-results' },
      { ts: 'Jul 30 · 11:00 AM', csm: 'Varun Tiwari', account: 'Pega', duration: '30 min',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Frank Collette wants ICP expansion from ~2,900 to up to 25K companies using DUNS numbers; co-term two existing agreements into one deal; credit accuracy issue from prior agreement to resolve before signing' },
      { ts: 'Jul 30 · 11:30 AM', csm: 'Pam Huck', account: 'Epicor', duration: '30 min',
        nature: 'Routine', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Pre-meeting prep for in-person Epicor DG team meeting; Sam Malecek flagged CMO priority: LLM/GEO visibility as top-of-funnel driver — GEO dashboard a key interest; TrustRadius review gen, September event, renewal justification also on agenda' },
    ],
    pulses: [
      { account: 'Telefonica',         csm: 'Nick Johnson',   health: 'Healthy' },
      { account: 'Sopra Steria',       csm: 'Nick Johnson',   health: 'Healthy' },
      { account: 'DXC',                csm: 'Varun Tiwari',   health: 'Healthy' },
      { account: 'Infinigate',         csm: 'Divyam Dewan',   health: 'Concerning' },
      { account: 'Exclusive Networks', csm: 'Varun Tiwari',   health: 'Healthy' },
      { account: 'Siemens',            csm: 'Nick Johnson',   health: 'Healthy' },
      { account: 'ServiceNow',         csm: 'Varun Tiwari',   health: 'Healthy' },
      { account: 'Lumen',              csm: 'Divyam Dewan',   health: 'Healthy' },
      { account: 'Veeam',              csm: 'Nick Johnson',   health: 'Healthy' },
      { account: 'Genesys',            csm: 'Divyam Dewan',   health: 'Healthy' },
      { account: 'Cloudflare',         csm: 'Rani Guy',       health: 'Healthy' },
      { account: 'Pega',               csm: 'Varun Tiwari',   health: 'Healthy' },
      { account: 'Epicor',             csm: 'Pam Huck',       health: 'Healthy' },
    ]
  };
}

function dayMeta_2026_07_30() {
  return {
    pills: [
      ['dot-teal',  '13 Calls'],
      ['dot-amber', '5 Expansion'],
      ['dot-red',   '1 Issue'],
      ['dot-grey',  'Thu Jul 30 · 72 scanned'],
    ],
    tabs: ['Overview', 'Calls', 'Pulses', 'Actions']
  };
}

function dayOverviewHTML_2026_07_30() {
  return `<div class="section-label">Team Activity &mdash; Thursday July 30, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Jul 30 &mdash; 72 recordings scanned</strong> via SFDC SOQL &middot; <strong>13 confirmed calls</strong> across 5 CSMs &middot; <span style="color:#f59e0b;">5 Expansion signals</span> (Telefonica, Sopra Steria, Cloudflare, Pega, Epicor) &middot; <span style="color:#ef4444;">1 Issue</span> (Infinigate EMEA intent data)
  </div>
  <div style="background:#1c2333;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fbbf24;">
    &#x1F4C8; <strong>Expansion signals:</strong> Telefonica &mdash; Fabric dataset (42M co.) upgrade path surfaced &middot; Sopra Steria &mdash; Peter Quinn new pricing meeting &middot; Cloudflare &mdash; Open Price batch matching + quarterly cadence &middot; Pega &mdash; Frank Collette wants ICP 2,900 &rarr; 25K + co-term &middot; Epicor &mdash; CMO priority: LLM/GEO visibility (GEO dashboard interest)
  </div>
  <div style="background:#1c1f26;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0; <strong>Issue flag:</strong> Infinigate &mdash; Drastic search results drop (backend data replugging); EMEA intent data degraded across Germany, France, Netherlands, Austria, UK &mdash; no fix timeline confirmed
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
        <div><div class="metric-num m-grey">135m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Telefonica (Fabric upgrade path &mdash; expansion) &middot; Sopra Steria (new pricing &mdash; expansion) &middot; Siemens (reorg Aug 1) &middot; Veeam (propensity model sync)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">120m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">DXC (renewal planning) &middot; Exclusive Networks (transformation) &middot; ServiceNow (new contact intro) &middot; Pega (ICP expansion &rarr; 25K &mdash; expansion)</div>
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
      <div class="csm-account-note">Infinigate (EMEA data issue &mdash; flag) &middot; Lumen (training + AM transition) &middot; Genesys (TR sustainability award)</div>
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
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Cloudflare (Open Price batch matching + credits expansion &mdash; expansion signal)</div>
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
      <div class="csm-account-note">Epicor (in-person prep; CMO LLM/GEO visibility priority &mdash; expansion signal)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Red Hat recording found &mdash; no transcript synced; 2 other events (Jama, Apptio) &mdash; no recordings found</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Insight Direct recording found &mdash; no transcript synced; 4 events (SysPro, Kong, Apple, Versa) &mdash; no recordings found</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer recordings</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_07_30() {
  return `<div style="background:#1c2333;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#fbbf24;">
    &#x1F4C8; <strong>5 Expansion signals:</strong> Telefonica &mdash; Fabric dataset upgrade &middot; Sopra Steria &mdash; Peter Quinn new pricing &middot; Cloudflare &mdash; Open Price matching + credits &middot; Pega &mdash; ICP 2,900 &rarr; 25K + co-term &middot; Epicor &mdash; CMO LLM/GEO dashboard interest
  </div>
  <div style="background:#1c1f26;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 12px 0;font-size:12px;color:#fca5a5;">
    &#x26A0; <strong>Issue flag:</strong> Infinigate &mdash; EMEA intent data degradation (5 countries); drastic search results drop from backend data replugging &mdash; no fix timeline communicated to customer
  </div>`;
}

function dayPulsesHTML_2026_07_30() {
  const cards = [
    { csm: 'nick', health: 'Healthy', account: 'Telefonica',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 30 · Mixed (Check-in + Expansion)',
      excerpt: '7/30 NJ: Renewal planning check-in (2:00 AM, 30 min). Lorena recently moved to a new BI area within Telefonica and is assessing the value of HG data for her team ahead of renewal. David (AM) introduced the new Fabric dataset (42M companies in Spain and Brazil) as an upgrade from the current V2 license (10M companies). Clear expansion opportunity to be developed ahead of renewal conversation.' },
    { csm: 'nick', health: 'Healthy', account: 'Sopra Steria',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 30 · Expansion',
      excerpt: '7/30 NJ: New pricing discussion (3:30 AM, 30 min). Ad-hoc call with Peter Quinn (new Sopra Steria stakeholder) led by Angus (AM) with Nick participating. Commercial options discussed. HCL BigFix TrustRadius premium listing also surfaced as a parallel opportunity — warm interest from an interested party. Two distinct expansion paths now open.' },
    { csm: 'varun', health: 'Healthy', account: 'DXC',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 30 · Check-in',
      excerpt: '7/30 VT: Renewal planning session (5:00 AM, 30 min). Preethi (DXC, India) outlined four renewal priorities: data module coverage, usage metrics, data refresh timeline, and future integration/connector options for FY27 automation scaling. She is managing CI workflows using HG data for account planning and pursuit support. Varun and Augie Buettner (AM) to respond with a structured proposal addressing each item.' },
    { csm: 'divyam', health: 'Concerning', account: 'Infinigate',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jul 30 · Issue',
      excerpt: '7/30 DD: Platform data issue (5:00 AM, 30 min). Abolfazl (Infinigate) opened the call immediately with a report of a drastic decrease in search results during data export. Divyam explained a backend data replugging event that caused a temporary drop — an unforeseen platform issue. Separately, EMEA intent data is degraded across Germany, France, Netherlands, Austria, and the UK with no fix timeline confirmed. Divyam needs to escalate the EMEA coverage gap and communicate a remediation timeline to the customer.' },
    { csm: 'varun', health: 'Healthy', account: 'Exclusive Networks',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 30 · Check-in',
      excerpt: '7/30 VT: Bi-weekly sync (6:30 AM, 30 min). Matt Tinker described an intense parallel transformation period: Salesforce implementation, MDM project, new sales performance management tools, partner data work, and new vendor onboarding all running simultaneously. Platform usage is effectively on hold during this period. Varun and Angus (AM) acknowledged the capacity constraints. Monitor for re-engagement post-transformation.' },
    { csm: 'nick', health: 'Healthy', account: 'Siemens',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 30 · Check-in',
      excerpt: '7/30 NJ: Bi-weekly cadence (7:30 AM, 30 min). Major reorg effective August 1: Hayden moving to an AI-focused role; Christina taking on the strategic land initiative (Account Compass) plus social selling; Pat focusing on zone-level key initiatives. Pat noted HG tools will remain in use but role and ownership changes will shift who accesses the platform and how. Nick should map new owners to their HG use cases and ensure continuity post-reorg.' },
    { csm: 'varun', health: 'Healthy', account: 'ServiceNow',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 30 · Check-in',
      excerpt: '7/30 VT: Monthly partnership sync (7:30 AM, 30 min). Varun introduced Kraig Kraning as the new account support resource replacing Ravi (who moved to a new internal role). Kraig joined HG this week and comes from ZoomInfo. Santhosh (ServiceNow) has managed the HG partnership for 7+ years and welcomed the new contact warmly. Transition being handled proactively. Healthy long-term partnership.' },
    { csm: 'divyam', health: 'Healthy', account: 'Lumen',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jul 30 · Check-in',
      excerpt: '7/30 DD: Weekly sync (8:30 AM, 30 min). Platform training session held earlier this week was well received — Julie Chalk said she really enjoyed it and the team is looking forward to diving deeper. AM transition underway: Augie being replaced by a new AM who joins next Thursday. Nathan\'s team adoption growing with each member finding their preferred use cases. No flags.' },
    { csm: 'nick', health: 'Healthy', account: 'Veeam',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Nick Johnson', csmlbl: 'Nick Johnson',
      change: 'Jul 30 · Check-in',
      excerpt: '7/30 NJ: Propensity model sync (9:00 AM, 45 min). Angus (AM) and JBI (Jean-Baptiste Vermersch) leading a structured review of 500+ technology signals to curate the propensity model scope. Tricia Greenwald (Corporate Tech) joined on her first day back from PTO. Sid Subramany working through recommended additions and removals. Process methodical — final model decisions still being arbitrated. Steady progress.' },
    { csm: 'divyam', health: 'Healthy', account: 'Genesys',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Divyam Dewan', csmlbl: 'Divyam Dewan',
      change: 'Jul 30 · Check-in',
      excerpt: '7/30 DD: TrustRadius monthly sync (11:00 AM, 30 min). Erica Heil confirmed sustainability award application was submitted (last week) and is awaiting results (expected in ~2 weeks). Divyam reviewed historical ratings-to-reviews campaign activity and cleared any open items. Proactive, maintenance-focused call. No issues surfaced.' },
    { csm: 'rani', health: 'Healthy', account: 'Cloudflare',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Rani Guy', csmlbl: 'Rani Guy',
      change: 'Jul 30 · Expansion',
      excerpt: '7/30 RG: Matching methodology deep-dive (11:00 AM, 60 min). Rani led a technical session on Open Price batch matching for Cloudflare\'s expanded dataset with Omkar (HG data team), Tracy York, and Gavin Padden. Omkar configured OP to run 4 batch files in parallel; results expected early next week. Next steps: define quarterly matching cadence, scope credits needed for the expansion. Strong expansion signal with active data team collaboration.' },
    { csm: 'varun', health: 'Healthy', account: 'Pega',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Varun Tiwari', csmlbl: 'Varun Tiwari',
      change: 'Jul 30 · Expansion',
      excerpt: '7/30 VT: Renewal + expansion options meeting (11:00 AM, 30 min). Frank Collette wants to expand the ICP company count from the current ~2,900 to up to 25,000 using DUNS numbers, and co-term two existing agreements into one deal. Varun and KP presented multiple renewal scenarios. A credit accuracy issue from a prior agreement also needs resolution before the new deal is signed. Strong expansion signal — Frank is engaged and motivated to close.' },
    { csm: 'pam', health: 'Healthy', account: 'Epicor',
      opp: 'Vitally Pulse — Jul 30 Call',
      arr: 'Enterprise · Pam Huck', csmlbl: 'Pam Huck',
      change: 'Jul 30 · Mixed (Check-in + Expansion)',
      excerpt: '7/30 PH: In-person prep call (11:30 AM, 30 min). Sam Malecek flagged a key CMO priority: driving top-of-funnel through LLM/AI search visibility. The GEO dashboard was identified as a high-value tool for this goal. Pam is prepping an agenda for the in-person DG team meeting: TrustRadius review gen, September event, results from prior events, and renewal justification. Sam committed to attending the full afternoon. Clear expansion signal around GEO dashboard.' },
  ];
  const bc = h => h === 'Healthy' ? 'badge-healthy' : h === 'Concerning' ? 'badge-concerning' : 'badge-poor';
  const bi = h => h === 'Healthy' ? '&#128994;' : h === 'Concerning' ? '&#128993;' : '&#128308;';
  return `<div class="pulse-grid">${cards.map(c => `
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div class="pulse-account">${c.account}</div>
          <div class="pulse-opp">${c.opp}</div>
          <div class="pulse-arr">${c.arr}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filters.</div>`;
}

function dayActionsHTML_2026_07_30() {
  return `<div class="action-list">

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0730-1')?'done':''}" data-csm="nick" id="action-0730-1">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0730-1')?'checked':''}" onclick="toggleAction('0730-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Sopra Steria &mdash; Send Peter Quinn Pricing Proposal + Follow Up on HCL BigFix TrustRadius Listing</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson + Angus Hyams (AM) &middot; Today&apos;s ad-hoc call introduced Peter Quinn (new Sopra Steria stakeholder) to commercial options. Nick and Angus should send a written pricing proposal addressing the new package options discussed. Separately, the interest in a TrustRadius premium listing for HCL BigFix should be followed up directly &mdash; confirm who the decision-maker is and what the next step looks like. Two distinct expansion paths to advance in parallel.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0730-2')?'done':''}" data-csm="varun" id="action-0730-2">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0730-2')?'checked':''}" onclick="toggleAction('0730-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Pega &mdash; Send ICP Expansion Proposal to Frank Collette + Resolve Credit Accuracy Issue</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + KP &middot; Frank Collette is ready to move on expanding the ICP from ~2,900 to up to 25,000 companies using DUNS numbers and co-terming two existing agreements. Varun should send Frank a formal written proposal with at least two pricing scenarios (current tier vs. 25K DUNS bucket) and a co-term structure that collapses the two agreements into one clean renewal date. Before the proposal is accepted, the credit accuracy discrepancy from the prior agreement must be resolved &mdash; get Finance/Ops confirmation on the credit number so there are no blockers at signing.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0730-3')?'done':''}" data-csm="rani" id="action-0730-3">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0730-3')?'checked':''}" onclick="toggleAction('0730-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CA; Cloudflare &mdash; Confirm Batch Matching Results Delivery with Omkar + Schedule Post-Results Scoping Call</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Omkar (HG Data Team) &middot; Omkar configured 4 parallel Open Price batch files for Cloudflare&apos;s expanded dataset; results expected early next week. Rani should confirm the delivery date directly with Omkar and share that timeline with Cloudflare (Tracy York, Gavin Padden, Craig). As soon as results are in, schedule a scoping call to define the quarterly matching cadence and determine what credits will be needed for the expansion. This is an active expansion in motion &mdash; don&apos;t let it stall between now and results delivery.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0730-4')?'done':''}" data-csm="divyam" id="action-0730-4">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0730-4')?'checked':''}" onclick="toggleAction('0730-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0; Infinigate &mdash; Escalate EMEA Intent Data Gap + Communicate Remediation Timeline to Abolfazl</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; Two issues were surfaced on today&apos;s call: (1) a short-term data export drop caused by backend replugging &mdash; Divyam should confirm whether this is fully resolved and send a brief confirmation to Abolfazl; (2) the ongoing EMEA intent data degradation across Germany, France, Netherlands, Austria, and the UK, for which no fix timeline was given. Divyam must escalate the EMEA coverage gap to the data or product team internally and get a realistic remediation timeline. Then send Abolfazl a written update with: what happened, current status, and when to expect resolution. Do not leave the customer without a timeline on an ongoing data quality issue.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0730-5')?'done':''}" data-csm="varun" id="action-0730-5">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0730-5')?'checked':''}" onclick="toggleAction('0730-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; DXC &mdash; Send Preethi Renewal Proposal Addressing Her 4 Agenda Items</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Augie Buettner (AM) &middot; Preethi (DXC India) came to today&apos;s call with a written agenda covering four renewal planning topics: (1) current data module coverage, (2) maximum track usage and platform engagement metrics, (3) data refresh cadence and coverage scope, and (4) connector/integration options and costs for FY27 automation scaling. She asked Augie to address each point so she can bring the right stakeholders to the next conversation. Varun and Augie should collaborate on a structured proposal or one-pager that directly maps to Preethi&apos;s four bullets and schedule a follow-up within 1&ndash;2 weeks.</div>
      </div>
    </div>

    <div class="action-item ${typeof doneActions!=='undefined'&&doneActions.has('0730-6')?'done':''}" data-csm="pam" id="action-0730-6">
      <div class="action-checkbox ${typeof doneActions!=='undefined'&&doneActions.has('0730-6')?'checked':''}" onclick="toggleAction('0730-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Epicor &mdash; Finalize In-Person Agenda + Confirm GEO Dashboard Timeline for Sam&apos;s CMO Update</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck &middot; The upcoming in-person meeting with Epicor&apos;s demand gen team is an important engagement touchpoint. Sam Malecek has committed to attending all afternoon and flagged a CMO-driven priority: LLM/AI search visibility as top-of-funnel driver, with the GEO dashboard as the key vehicle. Pam should: (1) finalize the meeting agenda with review gen advocacy, September event planning, and renewal justification as confirmed sections; (2) check with the product team on the GEO dashboard release timeline so Sam can bring a concrete update to the CMO; (3) confirm any pre-meeting logistics with Sam. Strong CMO-level interest in GEO is an expansion signal that should be captured and developed.</div>
      </div>
    </div>

  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filters.</div>`;
}
