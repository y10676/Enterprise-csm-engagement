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
