// September 2026 daily reports

function dayData_2026_09_01() {
  return {
    calls: [
      { ts: 'Sep 1 · 5:30 AM', csm: 'varun', account: `Autodesk Inc`,
        note: `Data Feed Migration session with Mohammed Tanveer + Rishabh Wadhwa. Null product IDs + duplicate CRM IDs traced to spend/install pipeline. Tanveer rebuilding pipeline from scratch with correct unique keys (CRM ID for spend, CompanyID+ProductID for install).`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Issue',
        detail: `Autodesk Data Feed Migration technical session with Mohammed Tanveer (Autodesk) + Rishabh Wadhwa (HG solutions). Root cause: null product IDs + duplicates in Snowflake ingest. Confirmed: install files always contain product IDs; spend files keyed on CRM ID. Tanveer to rebuild pipeline, remove test files, use correct unique keys. GZ file format preserved for whitespace-analysis team readability. Follow-up cadence adjusted for availability.` },
      { ts: 'Sep 1 · 6:30 AM', csm: 'riley', account: `BMC Software Inc`,
        note: `TrustRadius product feedback session &mdash; BMC evaluating G2/PeerSpot alternatives. Perceived cost/value gap, weak SEO/geo-ranking impact, inconsistent review approval, HG acquisition trust erosion. Won&rsquo;t renew at current cost.`,
        mins: 30, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `BMC Software TR product feedback with Claire Murphy, Katie Allison, Michael Garside + Augie Buettner (HG AM), Todd Detmold. Customer signaled clear churn risk: G2 review-managed service saves time, competitors rank higher on Perplexity + core SEO, PeerSpot AI innovation gap, inconsistent review approval (high rejection + low-quality approvals). HG acquisition perceived as TR becoming &ldquo;secondary brand.&rdquo; Explicit intent not to renew at current cost. Riley owes plan back to address all points.` },
      { ts: 'Sep 1 · 7:30 AM', csm: 'rani', account: `Workday Inc`,
        note: `Redline feedback discussion with Elaina Wasmus + Leo Zunz. 3-year deal structure proposal: 11M credit base, front-loading 400K buffer year 1 (=1.5M total year 1), credit rollover flex being negotiated with ops committee before Friday.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday redline discussion with Elaina Wasmus + Leo Zunz. Customer concerned about &ldquo;use it or lose it&rdquo; credit policy given acquisition activity + new product launches. Rani proposed 3-year deal with front-loaded credits year 1 (400K buffer on 11M base = 1.5M) and negotiating rollover flexibility with ops committee. Discount rate significantly better than prior pricing. Follow-up before Friday to finalize.` },
      { ts: 'Sep 1 · 9:00 AM', csm: 'rani', account: `Workday Inc`,
        note: `Platform migration + AI scoring intro with Patrycja Levey (Workday data mgmt eng team lead) + Margo Rey (HG/MadKudu PM). Contract nearing finalization (call tomorrow, procurement by Fri). Users migrating to RGIP end of next week; new data feed kickoff Sept 15.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday platform migration session with Patrycja Levey (data management engineering lead, Workday) + Paulina O&rsquo;Callaghan + Margo Rey (HG/MadKudu PM). Contract nearing final (call w/ Elena tomorrow AM; procurement Thu/Fri). RGIP migration for Patrycja&rsquo;s team end of next week. New AI-assisted scoring model demo &mdash; fit/need/intent scoring, custom profiles, transparency in score calculation. New contract + data feed kickoff Sept 15. Okta authentication + product-list refresh in flight.` },
      { ts: 'Sep 1 · 10:30 AM', csm: 'atisha', account: `Palo Alto Networks`,
        note: `Reset call with new stakeholder Alfredo Corral (Palo Alto contact for renewals). S3 bucket consumption &ldquo;blind spot&rdquo; identified. Restarting bi-weekly 15-min check-ins for 2 months to rebuild communication after renewal delay + priority reshuffle.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Palo Alto Networks re-engagement with new central contact Alfredo Corral (owning renewals + business req gathering next year). Both sides acknowledged communication breakdown after renewal delays + sales workbench de-prioritization. Palo Alto blind spot: unclear who is consuming data via S3 bucket + what ROI. Committed to bi-weekly 15-min check-ins for next 2 months. Atisha to share stakeholder list + past use cases; reach out to prior AM Tyler for context.` },
      { ts: 'Sep 1 · 12:30 PM', csm: 'riley', account: `Apptio (IBM)`,
        note: `Apptio TBMC26 event logistics with Angel Carvalho + Janie Carothers + Kendall Stadelman. Same venue as prior year, 200 plushies + Starbucks gift cards for reviewers, target 80 reviews (prior years mid-60s). Signage/laptops/business cards being finalized.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Apptio TBMC26 event planning with Angel Carvalho (event mgmt lead) + Janie Carothers + Kendall Stadelman. Same venue as prior year. Event kit: table, 4 chairs, signage, business cards, laptops (monitor dropped in favor of extra laptops). Incentives: 200 plushies + Starbucks gift cards for reviewers. Review goal: 80 (prior years low 60s). Angel to gather 200 plushies + coordinate Tara/Becky. Registration landing page + prior year review counts to confirm by EOD tomorrow.` },
      { ts: 'Sep 1 · 1:00 PM', csm: 'rani', account: `Cloudflare`,
        note: `TR recurring sync with Andy Mitschke, Cole Arutian, Mardigan Moffat. Refocusing content + QA sections on strategic Act 3/Act 4 (SASE, Developer Platform, AI Gateway). Test report output planned; on-page copy update by EOW; TR-to-Gartner Peer Insights filter strategy.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Cloudflare TR recurring sync with Andy Mitschke, Cole Arutian, Mardigan Moffat. Cloudflare shifting focus to &ldquo;Act 3/Act 4&rdquo; priorities (SASE, Developer Platform) &mdash; needs updated GTM narrative + TR content refresh, especially AI Gateway. Strategy: TR as filter for high-quality reviewers &rarr; funnel satisfied customers to Gartner Peer Insights (not duplicating Gartner&rsquo;s event-based collection). Andy to test report output + budget allocation next week; on-page copy + QA updates by EOW.` },
      { ts: 'Sep 1 · 2:00 PM', csm: 'pam', account: `Microsoft`,
        note: `TR newsletter follow-up with Colleen Nelson. Clarified &ldquo;subscribed products&rdquo; wording, event KPIs (attendance + review counts for RSA/Ignite), award categorization (Tech Cares, Top Rated, Buyer&rsquo;s Choice, fiscal year alignment).`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Microsoft TR newsletter follow-up (from Aug 26 call) with Colleen Nelson. Pam sending: award graphic template, Tech Cares media kit, Top Rated 2026 links, Buyer&rsquo;s Choice info. Colleen to rebuild newsletter with clarified event KPIs (RSA/Ignite attendance + reviews), simplify &ldquo;subscribed products&rdquo; to &ldquo;products,&rdquo; create award graphics from template. Content going to fiscal-year framing.` },
      { ts: 'Sep 1 · 2:00 PM', csm: 'rani', account: `Docusign, Inc.`,
        note: `Sync with Anuj Jain + Ziad Amira. Current 50K account scope too small to demonstrate value; team under-resourced post personnel changes. Broadening use-case list + stakeholder mapping (Katie, Ashish for territory planning); pivoting from ICP-change ask to install data value.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Mixed',
        detail: `Docusign sync with Anuj Jain + Ziad Amira. Anuj flagged: 50K account scope too small for meaningful business impact, team under-resourced post personnel changes, unclear project direction. Discussion pivoted: instead of ICP changes for Katie, focus on install data + territory balancing conversation. Ziad to share use case list, connect with Ashish for territory work, build broader stakeholder + use-case map to move beyond initial POC.` },
    ],
    pulses: [
      { csm: 'varun', account: `Autodesk Inc`, health: 'Healthy',
        note: `Data pipeline rebuild in flight &mdash; Tanveer owning fix for null product IDs + duplicates.` },
      { csm: 'riley', account: `BMC Software Inc`, health: 'Concerning',
        note: `TR churn signal &mdash; won&rsquo;t renew at current cost; considering G2/PeerSpot. Riley owes plan back.` },
      { csm: 'rani', account: `Workday Inc`, health: 'Healthy',
        note: `3-year deal negotiation + platform migration in parallel. RGIP migration end of next week; new data feed Sept 15.` },
      { csm: 'atisha', account: `Palo Alto Networks`, health: 'Healthy',
        note: `Renewal re-engagement kickoff with new contact Alfredo Corral. Bi-weekly cadence restart for 2 months.` },
      { csm: 'riley', account: `Apptio (IBM)`, health: 'Healthy',
        note: `TBMC26 event logistics locked &mdash; 200 plushies, 80 review target (prior year mid-60s).` },
      { csm: 'rani', account: `Cloudflare`, health: 'Healthy',
        note: `TR content refresh for SASE + Act 3/4 priorities. AI Gateway QA updates by EOW.` },
      { csm: 'pam', account: `Microsoft`, health: 'Healthy',
        note: `TR newsletter finalization &mdash; award graphics template + Tech Cares/Top Rated/Buyer&rsquo;s Choice content.` },
      { csm: 'rani', account: `Docusign, Inc.`, health: 'Healthy',
        note: `Scope-expansion signal &mdash; 50K account scope insufficient; broadening use cases + install data value story.` },
    ],
  };
}

function dayMeta_2026_09_01() {
  return {
    pills: [
      ['dot-teal',   '9 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '3 Expansion'],
      ['dot-green',  '8 Vitally Pulses'],
      ['dot-grey',   'Tue Sep 1 &middot; 81 scanned'],
    ],
    tabs: ['Overview', 'Calls (9)', 'Pulses (8)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_01() {
  return `<div class="section-label">Team Activity &mdash; Tuesday September 1, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Sep 1 &mdash; 81 recordings scanned</strong> via SFDC SOQL &middot; <strong>9 confirmed calls</strong> across 5 CSMs (Rani &times;4, Riley &times;2, Varun/Atisha/Pam &times;1) &middot; 1 concerning (BMC churn risk) &middot; 3 expansion signals &middot; Rani strong day &mdash; Workday redline + migration + Cloudflare + Docusign
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F6A8; <strong>CONCERNING:</strong> BMC Software &mdash; explicit TR churn intent (won&rsquo;t renew at current cost). Cited G2/PeerSpot alternatives, weak SEO/Perplexity ranking, inconsistent review approval, HG acquisition trust erosion. Riley owes plan back.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Workday 3-year deal (11M credit base, front-loaded year 1 + rollover flex) + platform migration to RGIP + new data feed Sept 15 (Rani) &middot; Cloudflare TR content refresh for SASE/Act 3&ndash;4/AI Gateway (Rani) &middot; Palo Alto Networks re-engagement + bi-weekly cadence restart (Atisha)
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">120m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday redline (&#x1F4C8; 3-year, 11M base) &middot; Workday migration (&#x1F4C8; RGIP + Sept 15 data feed) &middot; Cloudflare (&#x1F4C8; SASE/Act 3-4 TR refresh) &middot; Docusign (scope-expansion + use-case broadening)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">BMC Software (&#x26A0;&#xFE0F; TR churn intent &mdash; G2/PeerSpot eval) &middot; Apptio TBMC26 event logistics (200 plushies, 80 review target)</div>
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
      <div class="csm-account-note">Autodesk (data pipeline rebuild &mdash; null product IDs + duplicates)</div>
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
      <div class="csm-account-note">Palo Alto Networks (&#x1F4C8; renewal re-engagement kickoff w/ new contact Alfredo Corral)</div>
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
      <div class="csm-account-note">Microsoft (TR newsletter finalization &mdash; award graphics + Tech Cares/Top Rated content)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">On PTO (week 2 of 2) &mdash; 2 CSM-owned events (Visionet biweekly 3 AM, HG-Dintec 9 AM) had no recording synced</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events (Adobe GTM review 4:30 AM, Quadient TR biweekly 12 PM co-attended w/ Riley, Dynatrace Query Meeting 12:30 PM) &mdash; none had confirmed transcript speakers</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">4 events (Colt 5:15 AM, Toast Connect 8 AM, Veracode 8:30 AM, SAS AI market sizing 10 AM) &mdash; recordings had no CSM speaker labels detected</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_01() {
  return `<div class="section-label">Confirmed Calls &mdash; Tuesday September 1, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F6A8; <strong>CONCERNING:</strong> BMC Software &mdash; explicit TR churn intent, considering G2/PeerSpot alternatives (Riley)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Workday 3-year deal + RGIP migration + Sept 15 data feed (Rani &times;2) &middot; Cloudflare SASE/Act 3-4 TR refresh (Rani) &middot; Palo Alto Networks renewal re-engagement (Atisha)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>UNCONFIRMED (recordings w/o CSM speakers):</strong> Andy &times; Colt (5:15 AM) &middot; Andy &times; Toast Connect (8 AM) &middot; Varun &times; OpenText Renewal Scoping (8:30 AM) &middot; Atisha &times; Apple Strategy &amp; Planning (8:30 AM) &middot; Rani &times; Google Renewal Intro (10 AM) &middot; Andy &times; SAS AI Market Sizing (10 AM) &middot; Atisha &times; Intel ISVs project (10 AM)
  </div>`;
}

function dayPulsesHTML_2026_09_01() {
  const cards = [
    { csm:'rani', health:'Healthy', account:`Workday Inc`, opp:`Vitally Pulse &mdash; Sep 1 Calls`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 1 &middot; Healthy`,
      excerpt:`Redline discussion + platform migration in one day. 3-year deal (11M base + 400K buffer year 1 = 1.5M) with rollover flex; RGIP migration end of next week; new data feed Sept 15. Contract in procurement Thu/Fri.` },
    { csm:'rani', health:'Healthy', account:`Cloudflare`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 1 &middot; Healthy`,
      excerpt:`TR content strategy refresh for SASE + Act 3/4 (Developer Platform, AI Gateway). TR-to-Gartner Peer Insights filter model. Test report + on-page/QA updates by EOW.` },
    { csm:'rani', health:'Healthy', account:`Docusign, Inc.`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 1 &middot; Healthy`,
      excerpt:`Scope-expansion signal from customer (Anuj Jain): 50K accounts too small. Pivoting from ICP-change conversation to install data value + territory-planning conversation with Katie + Ashish.` },
    { csm:'riley', health:'Concerning', account:`BMC Software Inc`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 1 &middot; Concerning`,
      excerpt:`Explicit non-renewal intent at current cost. G2/PeerSpot competitive gaps (review-managed service, Perplexity/SEO ranking, AI innovation), inconsistent review approval (high rejection + low-quality approvals), HG acquisition trust erosion. Riley owes recovery plan.` },
    { csm:'riley', health:'Healthy', account:`Apptio (IBM)`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 1 &middot; Healthy`,
      excerpt:`TBMC26 event logistics locked. 200 plushies + Starbucks gift cards; target 80 reviews (prior mid-60s). Registration landing page + prior year review counts finalizing tomorrow.` },
    { csm:'varun', health:'Healthy', account:`Autodesk Inc`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 1 &middot; Healthy`,
      excerpt:`Data pipeline rebuild in flight &mdash; Tanveer owning fix for null product IDs + duplicate CRM IDs. Confirmed correct unique keys: CRM ID for spend, CompanyID+ProductID for install.` },
    { csm:'atisha', health:'Healthy', account:`Palo Alto Networks`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`,
      change:`Sep 1 &middot; Healthy`,
      excerpt:`Renewal re-engagement kickoff with new central contact Alfredo Corral. Bi-weekly 15-min check-ins restarting for 2 months. S3 consumption blind spot to close.` },
    { csm:'pam', health:'Healthy', account:`Microsoft`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`,
      change:`Sep 1 &middot; Healthy`,
      excerpt:`TR newsletter follow-up. Sending award graphic template, Tech Cares media kit, Top Rated 2026 + Buyer&rsquo;s Choice links. Colleen rebuilding newsletter with clarified event KPIs.` },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
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
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_09_01() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0901-1')?'done':''}" data-csm="riley" id="action-0901-1">
      <div class="action-checkbox ${doneActions.has('0901-1')?'checked':''}" onclick="toggleAction('0901-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; BMC Software &mdash; Deliver TR retention/recovery plan</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers &middot; BMC explicit: won&rsquo;t renew at current cost. Build response plan addressing: review-managed service parity vs G2, SEO/Perplexity ranking recovery, AI feature roadmap vs PeerSpot, review approval transparency, and HG-brand vs TR-brand positioning. Loop Augie + Todd on commercials.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-2')?'done':''}" data-csm="rani" id="action-0901-2">
      <div class="action-checkbox ${doneActions.has('0901-2')?'checked':''}" onclick="toggleAction('0901-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Workday &mdash; Close 3-year deal + RGIP migration coordination</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Get ops committee sign-off on credit rollover exception before Friday. Finish paper Thu; procurement Thu/Fri (customer team out Fri/Mon). Coordinate RGIP migration for Patrycja&rsquo;s data-mgmt-eng team by end of next week + Okta setup. Kick off new data feed Sept 15.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-3')?'done':''}" data-csm="varun" id="action-0901-3">
      <div class="action-checkbox ${doneActions.has('0901-3')?'checked':''}" onclick="toggleAction('0901-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; Autodesk &mdash; Pipeline rebuild coordination + email thread cleanup</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Update running email threads on the data-feed migration; loop Tanveer + Rishabh into one canonical thread. Confirm Tanveer&rsquo;s rebuilt pipeline uses correct unique keys (CRM ID for spend, CompanyID+ProductID for install). Rishabh on standby for error-trace review.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-4')?'done':''}" data-csm="atisha" id="action-0901-4">
      <div class="action-checkbox ${doneActions.has('0901-4')?'checked':''}" onclick="toggleAction('0901-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Palo Alto Networks &mdash; Stakeholder list + prior-AM context to Alfredo</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela &middot; Share stakeholder list + past use cases with Alfredo Corral ahead of the next bi-weekly. Reach out to prior AM Tyler for context on how past stakeholder data was gathered. Confirm the 2-month 15-min check-in cadence is booked.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-5')?'done':''}" data-csm="rani" id="action-0901-5">
      <div class="action-checkbox ${doneActions.has('0901-5')?'checked':''}" onclick="toggleAction('0901-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cloudflare &mdash; TR content refresh coordination (SASE + AI Gateway)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy &middot; Confirm Andy Mitschke&rsquo;s test-report budget allocation and pick 1-2 business areas to pilot next week. Track on-page copy + QA-section updates by EOW. Cole Arutian to email the product differentiation questionnaire; align TR-to-Gartner Peer Insights filter workflow.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-6')?'done':''}" data-csm="riley" id="action-0901-6">
      <div class="action-checkbox ${doneActions.has('0901-6')?'checked':''}" onclick="toggleAction('0901-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Apptio TBMC26 &mdash; Registration + plushie shipment coordination</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Riley Rogers &middot; Angel to send landing page for registration by EOD Wed + coordinate 200 plushies + Starbucks gift cards + laptop/signage kit shipment. Confirm prior year review counts to finalize the 80-review target. Loop Tara + Becky (Angel&rsquo;s team) with Janie/Kendall.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-7')?'done':''}" data-csm="rani" id="action-0901-7">
      <div class="action-checkbox ${doneActions.has('0901-7')?'checked':''}" onclick="toggleAction('0901-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Docusign &mdash; Broaden use cases + territory-planning intro with Ashish</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Rani Guy &middot; Ziad to send use-case list to Anuj. Anuj introducing Ziad to Ashish for territory-balancing conversation. Reposition Katie conversation: focus on install data value, not ICP changes. Build a broader stakeholder + use-case map to move past initial POC.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

// Monthly summary — August 2026 (first workday of September triggers this)
function weeklyOrMonthlyHTML_2026_09_01() {
  return `<div class="section-label">Monthly Summary &mdash; August 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:12px 16px;margin:0 0 12px 0;font-size:12px;color:#7dd3fc;">
    &#x1F5D3;&#xFE0F; <strong>August 2026 &mdash; 15 report days</strong> (weekdays only; Sundays excluded) &middot; <strong>~133 confirmed customer calls</strong> &middot; ~52 expansion signals &middot; ~17 concerning signals
  </div>

  <div class="overview-grid">
    <div class="csm-card has-calls">
      <div class="csm-card-header">
        <div class="avatar av-grey">&#x1F4CA;</div>
        <div><div class="csm-name">By CSM (approx totals)</div><div class="csm-role">Confirmed calls, Aug 2026</div></div>
      </div>
      <div class="csm-account-note">
        <strong>Nick Johnson</strong> ~35 (heaviest volume; SAP MDF partner blitz Aug 26, Lenovo PTO handoff Aug 27; on PTO Aug 28+) &middot;
        <strong>Riley Rogers</strong> ~19 (SAP portfolio TR sync cadence, Red Hat cross-coverage) &middot;
        <strong>Varun Tiwari</strong> ~17 (BMC, Iron Mountain, Zendesk RGIP, OpenText, IFS/HubSpot) &middot;
        <strong>Atisha Waghela</strong> ~15 (Insight Direct MSFT stall, Apple sync, RSM IDL, Equinix scoping) &middot;
        <strong>Divyam Dewan</strong> ~11 (BILL Ops, Blackbaud, Lumen RGIP, Sage, Genesys, Nuvias) &middot;
        <strong>Rani Guy</strong> ~10 (Cloudflare, Workday, NetApp, AWS TR) &middot;
        <strong>Pam Huck</strong> ~9 (ADP, F5, Microsoft Security, Oracle) &middot;
        <strong>Andy Lim</strong> ~7 (SAS scoring pilot, FactSet handoff, Everpure)
      </div>
    </div>

    <div class="csm-card has-calls">
      <div class="csm-card-header">
        <div class="avatar av-grey">&#x1F534;</div>
        <div><div class="csm-name">Top concerning threads</div><div class="csm-role">August 2026</div></div>
      </div>
      <div class="csm-account-note">
        <strong>Cloudflare</strong> &rarr; Concerning early month (60% ops loss, mandatory build-vs-buy eval), reversed to expansion Aug 28 (Cloud Dynamics consolidation) &middot;
        <strong>Lenovo</strong> &rarr; RGIP migration blocked, Data Studio integration issue (Jul carryover, closing Aug) &middot;
        <strong>Informatica</strong> &rarr; Renewal expired Aug 7, SPA not processed &middot;
        <strong>Insight Direct</strong> &rarr; Microsoft sales-accelerate 4-week adoption stall &middot;
        <strong>Siemens</strong> &rarr; Post-reorg platform disengagement (data-feed only) &middot;
        <strong>Veeam</strong> &rarr; MCP pilot not started &middot;
        <strong>Oracle</strong> &rarr; 45-day renewal deadline w/ reorg-driven budget ownership gap &middot;
        <strong>Pure Storage/Portworx</strong> &rarr; Completely unresponsive
      </div>
    </div>

    <div class="csm-card has-calls">
      <div class="csm-card-header">
        <div class="avatar av-grey">&#x1F4C8;</div>
        <div><div class="csm-name">Top expansion threads</div><div class="csm-role">August 2026</div></div>
      </div>
      <div class="csm-account-note">
        <strong>SAP portfolio</strong> (Concur, Build, Business Network, Ariba, Joule, Integration Suite, MDF partner cohort &mdash; Riley + Nick heavy August cadence) &middot;
        <strong>AMD</strong> AI maturity data + 12K named accounts + sales restructuring &middot;
        <strong>Microsoft</strong> 78% TPID match + Black Hat 51-55 reviews (6 security products) + Unified Support &middot;
        <strong>Autodesk</strong> product expansion 350&rarr;1100 &middot;
        <strong>Iron Mountain</strong> Julian Rojas new AM + intent topics &middot;
        <strong>Zendesk</strong> RGIP Market Analyzer to Competitive Intel team &middot;
        <strong>NTT Data</strong> contract expansion (users + exports) &middot;
        <strong>Argano / Phoenix / Kloud Data / LTI</strong> SAP MDF Oct 12 renewal packaging (5 partners in 1 day Aug 26)
      </div>
    </div>

    <div class="csm-card has-calls">
      <div class="csm-card-header">
        <div class="avatar av-grey">&#x1F5D3;&#xFE0F;</div>
        <div><div class="csm-name">Notable operational events</div><div class="csm-role">August 2026</div></div>
      </div>
      <div class="csm-account-note">
        <strong>Aug 27&ndash;28:</strong> Nick begins 2-week PTO handoff (Rani + Adrian backing) &middot;
        <strong>Aug 31:</strong> NTT Data 9 AM held without Nick during PTO gap (customer + HG AM only) &middot;
        <strong>Sundays</strong> Aug 9 + Aug 16 no activity &middot;
        <strong>Late-syncing recordings</strong> observed multiple times &mdash; scan-time drift required rev updates (e.g., Aug 31 rev 2 with Equinix late add) &middot;
        <strong>Weflow no-transcript rate</strong> ~40-50% most days &mdash; unconfirmed calls carry over into inferred-from-CSM-event section
      </div>
    </div>
  </div>`;
}
