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

function dayData_2026_09_02() {
  return {
    calls: [
      { ts: 'Sep 2 · 7:30 AM', csm: 'rani', account: `Workday Inc`,
        note: `SOW math walkthrough follow-up with Elaina Wasmus + Kraig Kraning + Leo Zunz. 481,746 additional credits at no extra cost as partnership gesture. Presenting both 1-year and 3-year options to finance before long weekend (~20-30% savings needed to justify budget increase).`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday SOW math walkthrough follow-up with Elaina Wasmus, Kraig Kraning, Leo Zunz (Elaina stepping in for Alex). Rani asked Elaina to walk through her math (unclear jump to 4M credits + per-credit cost). Confirmed: ~481,746 additional credits at no extra cost as partnership gesture (buffer for evaluation). 3-year commitment offers significant vs annual renewals w/ capped increases + credit rollover. Finance needs 20-30% savings for budget increase. Both 1-year + 3-year options going to finance before long weekend. Follow-up call tomorrow.` },
      { ts: 'Sep 2 · 10:30 AM', csm: 'pam', account: `F5`,
        note: `Bi-weekly with Sherry Arnold + Mardigan Moffat. Hgeo customer voice platform 2-year discounted pricing pitch for Pascal (budget meeting upcoming). AI-driven content + SEO ranking value framing. Big IP being considered for product list expansion.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `F5 TrustRadius bi-weekly with Sherry Arnold + Mardigan Moffat. Business: Hgeo customer voice platform 2-year option with discounted pricing ready for Pascal ahead of budget meeting. AI-driven solutions + content increasingly important for search-engine ranking; strategic value framing. Review-collection challenge for new AI products w/ small customer bases. Adding &ldquo;Big IP&rdquo; to product list under consideration. Mardigan to send market/competitive report examples.` },
    ],
    pulses: [
      { csm: 'rani', account: `Workday Inc`, health: 'Healthy',
        note: `SOW math walkthrough; 481K bonus credits partnership gesture; 1-yr and 3-yr options to finance before long weekend.` },
      { csm: 'pam', account: `F5`, health: 'Healthy',
        note: `Hgeo 2-year discounted pricing pitch for Pascal budget meeting; AI-driven content value framing; Big IP product-list expansion consideration.` },
    ],
  };
}

function dayMeta_2026_09_02() {
  return {
    pills: [
      ['dot-teal',   '2 Calls'],
      ['dot-amber',  '2 Expansion'],
      ['dot-green',  '2 Vitally Pulses'],
      ['dot-grey',   'Wed Sep 2 &middot; 101 scanned'],
    ],
    tabs: ['Overview', 'Calls (2)', 'Pulses (2)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_09_02() {
  return `<div class="section-label">Team Activity &mdash; Wednesday September 2, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Sep 2 &mdash; 101 recordings scanned</strong> via SFDC SOQL &middot; <strong>2 confirmed calls</strong> (Rani, Pam) &middot; 0 concerning &middot; 2 expansion &middot; Very heavy day for CSM events (39 scheduled) but only 2 confirmed via transcript &mdash; 72 recordings had no transcript synced
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Workday SOW follow-up &mdash; 481K bonus credits + 1-yr/3-yr options to finance before long weekend (Rani) &middot; F5 Hgeo 2-year pricing pitch for Pascal budget meeting + Big IP product-list expansion consideration (Pam)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>DARK DATA:</strong> 39 CSM-owned events but only 2 confirmed via transcript. Widespread no-transcript recordings across Atisha (SFDC, Deloitte, Optiv, Intel, RELEX, EY, Insight Direct, Unily), Rani (Google, AWS, Lenovo, Cisco, Oracle), Divyam (Informatica, Salesforce), Varun (Autodesk, Workspan, Five9, Informatica, Insight), Riley (SAP BTP, Adobe), Andy (RELEX, Cockroach), Pam (Epicor, F5 second slot).
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
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday (&#x1F4C8; SOW walkthrough; 481K bonus credits; finance decision before long weekend) &middot; 5 other events (Google, AWS, Lenovo, Cisco, Oracle) all no-transcript</div>
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
      <div class="csm-account-note">F5 (&#x1F4C8; Hgeo 2-year pricing pitch for Pascal) &middot; Epicor 7:30 AM + F5 second slot 10:30 AM no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">HUGE calendar day (8 events: SFDC ASEAN, Deloitte weekly, EY standing sync, RELEX co-attended, Optiv weekly, Insight Direct AI Sales Coach, Intel, Unily) &mdash; every one no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">6 events (Insight MI Add-on, Workspan, Autodesk biweekly, Five9, Informatica co-w/ Divyam) &mdash; all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Informatica weekly co-w/ Varun 9 AM, Salesforce/Informatica followup 10 AM) &mdash; both no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (RELEX 7 AM co-attended w/ Atisha, Cockroach Labs 9 AM) &mdash; both no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (SAP BTP TR 7 AM, TR-Adobe Success Call 10 AM) &mdash; recordings had no CSM speaker labels</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Still on PTO. 2 events (Veeam team sync, Westcon monthly) had no recording synced</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_02() {
  return `<div class="section-label">Confirmed Calls &mdash; Wednesday September 2, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Workday SOW &mdash; 481K bonus credits + 1-yr/3-yr options to finance before long weekend (Rani) &middot; F5 Hgeo 2-year pitch for Pascal budget meeting + Big IP product-list expansion (Pam)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>WIDESPREAD NO-TRANSCRIPT:</strong> 39 CSM events, 2 confirmed. Notable dark-data day &mdash; Atisha (8 events all no-transcript), Rani (5 additional events no-transcript), Varun (6), Divyam (2), Andy (2), Riley (2 no-CSM-speaker), Pam (2 additional slots). Suspect Weflow-side sync backlog rather than actual no-shows.
  </div>`;
}

function dayPulsesHTML_2026_09_02() {
  const cards = [
    { csm:'rani', health:'Healthy', account:`Workday Inc`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 2 &middot; Healthy`,
      excerpt:`SOW math walkthrough &mdash; 481,746 additional credits offered at no extra cost as partnership gesture. Elaina Wasmus walking finance both 1-year and 3-year options before long weekend. Finance needs 20-30% savings to justify budget increase.` },
    { csm:'pam', health:'Healthy', account:`F5`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`,
      change:`Sep 2 &middot; Healthy`,
      excerpt:`Hgeo 2-year discounted pricing ready for Pascal ahead of budget meeting. AI-driven content + SEO framing gaining traction. Big IP under consideration for product-list expansion.` },
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

function dayActionsHTML_2026_09_02() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0902-1')?'done':''}" data-csm="rani" id="action-0902-1">
      <div class="action-checkbox ${doneActions.has('0902-1')?'checked':''}" onclick="toggleAction('0902-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Workday &mdash; Send updated proposal + historical contract numbers before long weekend</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Kraig Kraning &middot; Send updated proposal with exact savings numbers for both 1-year and 3-year options plus historical contract numbers so finance can see price increase justification. Elaina presenting to finance before long weekend. Follow-up call tomorrow.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-2')?'done':''}" data-csm="pam" id="action-0902-2">
      <div class="action-checkbox ${doneActions.has('0902-2')?'checked':''}" onclick="toggleAction('0902-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; F5 &mdash; Send Hgeo pricing deck to Pascal for budget meeting</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Pam Huck &middot; Send Pascal the Hgeo pricing deck ASAP ahead of Pascal&rsquo;s upcoming budget meeting. Sherry to follow up separately on AI-driven solutions value framing given F5&rsquo;s smaller AI customer base.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-3')?'done':''}" data-csm="pam" id="action-0902-3">
      <div class="action-checkbox ${doneActions.has('0902-3')?'checked':''}" onclick="toggleAction('0902-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; F5 &mdash; Market/competitive report examples + AI review strategy</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Mardigan Moffat &middot; Send Sherry examples of market + competitive reports. Team to strategize on how to best encourage AI customers to write reviews given small customer bases. Consider adding &ldquo;Big IP&rdquo; to product list for review collection.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-4')?'done':''}" data-csm="all" id="action-0902-4">
      <div class="action-checkbox ${doneActions.has('0902-4')?'checked':''}" onclick="toggleAction('0902-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Team &mdash; Investigate Weflow no-transcript backlog</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Ops &middot; 39 CSM events scheduled Sep 2 but only 2 confirmed via transcript. This is the highest dark-data day observed. Check whether Weflow sync is backlogged, whether specific CSMs&rsquo; Zoom/Teams setups changed, or whether new browser plugin issue. If backlog, expect these to re-scan positive in 24-48h.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-5')?'done':''}" data-csm="nick" id="action-0902-5">
      <div class="action-checkbox ${doneActions.has('0902-5')?'checked':''}" onclick="toggleAction('0902-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Nick PTO handoff &mdash; Veeam team sync + Westcon monthly coverage</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Nick Johnson (PTO) / Rani (backup) &middot; Nick&rsquo;s Sept 2 events (Veeam team sync 4:45 AM, Westcon monthly 8 AM) had no recordings synced. Confirm coverage/re-scheduling status for remainder of PTO week.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_03() {
  return {
    calls: [
      { ts: 'Sep 3 · 7:00 AM', csm: 'riley', account: `Adobe Systems Incorporated`,
        note: `Adobe MAX TR event planning with Angel Carvalho. 440 review target (last year&rsquo;s cadence). 6 laptops + designated seating, setup Oct 10-12. Swag: gift cards (TR + G2), 1000 handheld fans, 1500 pins. Riley to add Angel to Adobe Slack channel.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Adobe MAX TR event planning session with Angel Carvalho (TR event mgmt). Target 440 reviews (similar to prior year). Setup on 10th, 11th, 12th (optional 9th). 6 laptops + designated seating. Swag: gift cards from TR + G2 vendors, 1000 rechargeable handheld fans, 1500 enamel pins. Swag distributable regardless of review completion (legal), but framed as incentive. Allison to send shipping label + hotel info + booth final mockup. Riley adding Angel to Adobe Slack channel.` },
      { ts: 'Sep 3 · 7:30 AM', csm: 'rani', account: `Workday Inc`,
        note: `SOW continued &mdash; Elaina personally favoring 3-yr $150 YoY option (cleaner tracking, avoids complex discount math). 10% credit investment covering overages. Legal + budget approvals + team feedback all TODAY. Deal near close.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday SOW continued (3-day thread: Sept 1 redline &rarr; Sept 2 math walkthrough &rarr; Sept 3 finalization). Elaina personally favoring 3-year $150 YoY option for cleaner tracking (slightly worse discount, but avoids complex usage/discount tracking). 10% credit as HG investment acknowledging consumption model + covering potential overages. Future renewals based on 3-yr average usage. All internal work happening TODAY: team feedback, legal review, budget approvals. Rani sending VP Finance contact for signature. Elaina copying Rani + Kraig on all comms.` },
      { ts: 'Sep 3 · 7:30 AM', csm: 'riley', account: `Intuit (Mailchimp)`,
        note: `Mailchimp TR bi-weekly with Spencer Adkins. Review generation now a priority as internal &ldquo;dust settles.&rdquo; Spencer using existing incentive budget; more budget post-Nov renewal. Riley to send campaign examples + self-serve links. Renewal + budget discussion Sept 22.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Mailchimp TR bi-weekly with Spencer Adkins. Review generation moving up as internal priorities settle. Spencer to use existing incentive budget for initial campaigns + assess before adding more. Riley providing tools + links (self-serve campaigns, HG-run campaigns). November renewal approaching &mdash; increased incentive budget will be available post-renewal. Discussion + budget alignment scheduled for Sept 22 with Spencer + Mardigan.` },
      { ts: 'Sep 3 · 10:30 AM', csm: 'pam', account: `ZoomInfo`,
        note: `TR sync with Russell Martin. Product consolidation strategy &mdash; Chorus + NeverBounce being folded into GTM Studio. January new website launch clarifying portfolio. Updating TR/G2 profiles to reflect forward-looking vision. Chorus continues alongside for transition.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: `ZoomInfo TR sync with Russell Martin. Product consolidation initiative: legacy products (Chorus, NeverBounce) folding into GTM Studio to streamline messaging. January website launch will clarify SKU lineup (removing older listings). Third-party review sites (G2, TrustRadius) critical for market perception &mdash; profile updates prioritized around new product strategy. Chorus sold alongside GTM Studio during transition, capabilities + reviews to merge (avoiding EOL status). Sales team enablement key.` },
      { ts: 'Sep 3 · 1:00 PM', csm: 'divyam', account: `OpenAI`,
        note: `Competitive Intelligence Initiative intro with Ziad Amira. HG credit-based pricing walkthrough. Demoed &ldquo;wallet share analyzer&rdquo; (install + functional intel + time series). Delivery options: API, SFTP, data lake. HG can ingest new products/competitors in 2-3 weeks.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `OpenAI Competitive Intelligence Initiative intro with Ziad Amira. Divyam walked HG&rsquo;s credit-based pricing model (transition from entity-based) + data offerings: technographics, install data (usage history + intensity), functional area intelligence, time series for churn mitigation. Demoed &ldquo;wallet share analyzer&rdquo; (install + functional intel + time series showing account growth/decline + competitor adoption). Delivery: API, SFTP, or direct-to-data-lake &mdash; credit consumption tracked regardless. New products/competitors ingestable in 2-3 weeks on request. Next: exports, docs, wallet-share HTML link.` },
    ],
    pulses: [
      { csm: 'riley', account: `Adobe Systems Incorporated`, health: 'Healthy',
        note: `Adobe MAX TR event planning &mdash; 440 review target, setup Oct 10-12, swag/logistics locked.` },
      { csm: 'rani', account: `Workday Inc`, health: 'Healthy',
        note: `SOW continued Day 3 &mdash; 3-yr $150 YoY option, deal near close, legal + budget + team review all TODAY.` },
      { csm: 'riley', account: `Intuit (Mailchimp)`, health: 'Healthy',
        note: `TR review generation priority; Spencer using existing budget; Nov renewal + budget uplift Sept 22.` },
      { csm: 'pam', account: `ZoomInfo`, health: 'Healthy',
        note: `Chorus + NeverBounce folding into GTM Studio; Jan website launch; TR/G2 profile updates in flight.` },
      { csm: 'divyam', account: `OpenAI`, health: 'Healthy',
        note: `Competitive Intelligence intro; wallet-share analyzer demo; credit model + delivery options walkthrough.` },
    ],
  };
}

function dayMeta_2026_09_03() {
  return {
    pills: [
      ['dot-teal',   '5 Calls'],
      ['dot-amber',  '4 Expansion'],
      ['dot-green',  '5 Vitally Pulses'],
      ['dot-grey',   'Thu Sep 3 &middot; 101 scanned'],
    ],
    tabs: ['Overview', 'Calls (5)', 'Pulses (5)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_03() {
  return `<div class="section-label">Team Activity &mdash; Thursday September 3, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Sep 3 &mdash; 101 recordings scanned</strong> via SFDC SOQL &middot; <strong>5 confirmed calls</strong> across 4 CSMs (Riley &times;2, Rani, Pam, Divyam) &middot; 0 concerning &middot; 4 expansion signals &middot; 51 CSM events (high volume) but still elevated no-transcript rate (75%)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Workday SOW near close (Day 3 of thread; 3-yr $150 YoY option; legal + budget + team review all TODAY) (Rani) &middot; Mailchimp TR review-gen priority + Nov renewal uplift (Riley) &middot; ZoomInfo product consolidation (Chorus/NeverBounce &rarr; GTM Studio; Jan website launch) (Pam) &middot; OpenAI Competitive Intelligence intro + wallet-share analyzer demo (Divyam)
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
      <div class="csm-account-note">Adobe MAX (event planning &mdash; 440 review target, Oct 10-12) &middot; Mailchimp (&#x1F4C8; TR review-gen priority + Nov renewal uplift) &middot; SAP Ariba+Fieldglass 11 AM no-transcript</div>
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
      <div class="csm-account-note">Workday (&#x1F4C8; SOW continued Day 3 &mdash; deal near close) &middot; Lenovo, Adobe, Hitachi Vantara no-transcript</div>
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
      <div class="csm-account-note">ZoomInfo (&#x1F4C8; Chorus/NeverBounce &rarr; GTM Studio consolidation; TR/G2 profile updates for Jan website launch)</div>
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
      <div class="csm-account-note">OpenAI (&#x1F4C8; Competitive Intelligence Initiative intro + wallet-share analyzer demo) &middot; Safaricom, Sage, Lumen, Adobe, Dynatrace, Omnissa 8+ events no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">HUGE calendar day (10+ events: Kyndryl monthly, Insight biweekly, Kong weekly, RSM weekly, AMD biweekly, Apple training, Kyndryl MCP hours, Insight Direct GGP) &mdash; all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">4 events (Insight biweekly, Ciena, Autodesk biweekly, HG-Insight sync) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events (Evapure biweekly, Sage biweekly co-w/ Nick, NetApp monthly) &mdash; all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Still on PTO. 3 events (PTC monthly 2 AM, Nuvias/Infinigate 5 AM, Sage biweekly co-w/ Andy) had no recording synced</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_03() {
  return `<div class="section-label">Confirmed Calls &mdash; Thursday September 3, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Workday SOW Day-3 finalization (Rani) &middot; Mailchimp TR review-gen priority + Nov renewal (Riley) &middot; ZoomInfo Chorus/NeverBounce &rarr; GTM Studio consolidation (Pam) &middot; OpenAI Competitive Intelligence intro (Divyam)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>NO-TRANSCRIPT RATE STILL ELEVATED:</strong> 76 of 101 recordings without transcripts (75% vs typical 40-50%). Atisha&rsquo;s 10+ scheduled events all missing transcripts &mdash; suspect Weflow sync backlog persisting from Sept 2 flag. Sept 2 recordings still worth re-scanning in a few days.
  </div>`;
}

function dayPulsesHTML_2026_09_03() {
  const cards = [
    { csm:'rani', health:'Healthy', account:`Workday Inc`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 3 &middot; Healthy`,
      excerpt:`SOW Day 3 near close. Elaina personally favoring 3-yr $150 YoY (cleaner tracking). 10% credit investment covering overages. Legal + budget + team review all TODAY. VP Finance signature next.` },
    { csm:'riley', health:'Healthy', account:`Adobe Systems Incorporated`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 3 &middot; Healthy`,
      excerpt:`Adobe MAX TR event planning w/ Angel Carvalho. 440 review target, setup Oct 10-12, 6 laptops, swag package (gift cards + 1000 fans + 1500 pins). Riley adding Angel to Adobe Slack channel.` },
    { csm:'riley', health:'Healthy', account:`Intuit (Mailchimp)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 3 &middot; Healthy`,
      excerpt:`Mailchimp TR bi-weekly. Review generation now a priority as &ldquo;dust settles.&rdquo; Spencer using existing incentive budget for initial campaigns. Nov renewal + budget uplift discussion Sept 22 w/ Mardigan.` },
    { csm:'pam', health:'Healthy', account:`ZoomInfo`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`,
      change:`Sep 3 &middot; Healthy`,
      excerpt:`ZoomInfo product consolidation strategy: Chorus + NeverBounce folding into GTM Studio. Jan 2027 website launch will clarify portfolio. TR/G2 profile updates being sequenced to align with forward-looking vision.` },
    { csm:'divyam', health:'Healthy', account:`OpenAI`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`,
      change:`Sep 3 &middot; Healthy`,
      excerpt:`OpenAI Competitive Intelligence Initiative intro with Ziad Amira. Credit-based pricing walkthrough, wallet-share analyzer demo (install + functional intel + time series). Delivery via API/SFTP/data lake. Ingest new products in 2-3 weeks.` },
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

function dayActionsHTML_2026_09_03() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0903-1')?'done':''}" data-csm="rani" id="action-0903-1">
      <div class="action-checkbox ${doneActions.has('0903-1')?'checked':''}" onclick="toggleAction('0903-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Workday &mdash; Send VP Finance contact + monitor legal/budget approvals</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Send Elaina the HG VP of Finance contact for signature. Track internal decisions + legal + budget approvals happening today. Elaina copying Rani + Kraig on all comms. Deal near close &mdash; 3-yr $150 YoY structure preferred internally.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-2')?'done':''}" data-csm="divyam" id="action-0903-2">
      <div class="action-checkbox ${doneActions.has('0903-2')?'checked':''}" onclick="toggleAction('0903-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; OpenAI &mdash; Send exports, docs, wallet-share link + confirm API credit tracking</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; Share firmographics/hierarchy export with credit breakdown, technographic descriptions + API usage docs, data-feed/data-lake setup docs, wallet-share analyzer HTML link + detailed data dictionary. Confirm with product engineering whether credit calculations available via API and follow up with Chris.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-3')?'done':''}" data-csm="riley" id="action-0903-3">
      <div class="action-checkbox ${doneActions.has('0903-3')?'checked':''}" onclick="toggleAction('0903-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Adobe MAX &mdash; Coordinate booth logistics + swag delivery</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers &middot; Add Angel to Adobe Slack channel. Track Allison shipping label (pre-Oct 8), booth mockup, hotel info. Angel to send landing page + QR code by end of week; double-check business card quantity with contractors. 440 review target, setup Oct 10-12.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-4')?'done':''}" data-csm="riley" id="action-0903-4">
      <div class="action-checkbox ${doneActions.has('0903-4')?'checked':''}" onclick="toggleAction('0903-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Mailchimp &mdash; Send review-gen campaign toolkit + prep Sept 22 renewal discussion</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers &middot; Send Spencer campaign examples + best practices + self-serve links + spreadsheet of examples. Spencer to build lists + run initial campaigns using existing incentive budget. Prep Sept 22 call with Spencer + Mardigan on renewal terms + budget uplift.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-5')?'done':''}" data-csm="pam" id="action-0903-5">
      <div class="action-checkbox ${doneActions.has('0903-5')?'checked':''}" onclick="toggleAction('0903-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; ZoomInfo &mdash; TR/G2 profile refresh sequencing for Jan website launch</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck &middot; Align TR/G2 profile updates with ZoomInfo&rsquo;s Jan 2027 website launch (Chorus + NeverBounce &rarr; GTM Studio consolidation). Coordinate with sales enablement on framing (Chorus continues alongside during transition &mdash; avoid EOL positioning). Prioritize forward-looking product SKUs.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-6')?'done':''}" data-csm="all" id="action-0903-6">
      <div class="action-checkbox ${doneActions.has('0903-6')?'checked':''}" onclick="toggleAction('0903-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow sync backlog investigation (Day 2)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Ops &middot; No-transcript rate at 75% again (was 71% on Sept 2, typically 40-50%). Atisha&rsquo;s 10+ scheduled events on Sept 3 all missing transcripts. Escalate to Weflow support if not resolving in 24h. Re-scan Sept 2 and Sept 3 in 24-48h to see if backlog processes.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-7')?'done':''}" data-csm="nick" id="action-0903-7">
      <div class="action-checkbox ${doneActions.has('0903-7')?'checked':''}" onclick="toggleAction('0903-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Nick PTO handoff &mdash; PTC + Nuvias/Infinigate + Sage coverage</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Nick Johnson (PTO) / Rani (backup) &middot; Nick&rsquo;s Sept 3 events (PTC monthly 2 AM, Nuvias/Infinigate 5 AM, Sage biweekly co-w/ Andy 6:30 AM) had no recordings synced. Confirm coverage. Nick expected back around Sept 11.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_04() {
  return {
    calls: [
      { ts: 'Sep 4 · 10:30 AM', csm: 'divyam', account: `BILL Operations, LLC`,
        note: `MQL/scoring model education for marketing team. 3 paths to MQL (pure MadKudu, activity-based, hybrid). White paper download example showed negative statistical correlation to conversion. Divyam + Charles building enhanced docs + AI-simplified explanations.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `BILL session with Charles Hawkins + Eric Nguyen. Marketing needs clearer view of how actions correlate to MQL status. Three MQL paths: pure MadKudu-driven, activity-based, hybrid. Explored white paper download example (negative statistical correlation to conversion). Recommend explaining model via segments + point importance (not raw 0-100 score). Divyam finalizing outstanding tickets; Charles preparing educational materials for marketing. GDPR/regional overrides also discussed.` },
    ],
    pulses: [
      { csm: 'divyam', account: `BILL Operations, LLC`, health: 'Healthy',
        note: `MQL/scoring model education for marketing team. 3 paths to MQL. Enhanced docs + AI simplification in flight.` },
    ],
  };
}

function dayMeta_2026_09_04() {
  return {
    pills: [
      ['dot-teal',   '1 Call'],
      ['dot-green',  '1 Vitally Pulse'],
      ['dot-grey',   'Fri Sep 4 &middot; 55 scanned'],
    ],
    tabs: ['Overview', 'Calls (1)', 'Pulses (1)', 'Action Items (3)']
  };
}

function dayOverviewHTML_2026_09_04() {
  return `<div class="section-label">Team Activity &mdash; Friday September 4, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Sep 4 &mdash; 55 recordings scanned</strong> via SFDC SOQL &middot; <strong>1 confirmed call</strong> (Divyam &times; BILL) &middot; 0 concerning &middot; 0 expansion &middot; Very light pre-Labor-Day Friday
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 3:</strong> 55 recordings, 13 with transcripts (24%). Continues Sept 2 + Sept 3 pattern. 6 CSM-owned events with recordings had no transcript (Nick&times;SAP, Pam&times;Oracle, Andy&times;ADP, Rani&times;Hitachi + Google, Atisha&times;Intel).
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
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">BILL (MQL/scoring model education for marketing team &mdash; 3 paths to MQL + white paper correlation example)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Still on PTO. 2 events (Infor onsite 5 AM, SAP 6 AM) &mdash; SAP recorded no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Hitachi sync 9:30 AM, Google bw 10 AM) both no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (Zendesk biweekly 9 AM) &mdash; no recording synced</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events (Intel Platform Training 5:30 AM, Apple Platform Team Call 12 PM, HGI &amp; Intel 12:35 PM) &mdash; all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (Oracle ER Diagram walkthrough 8 AM) &mdash; no transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (ADP Workforce TR monthly 8 AM) &mdash; no transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events scheduled</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_04() {
  return `<div class="section-label">Confirmed Calls &mdash; Friday September 4, 2026</div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>SYNC BACKLOG DAY 3:</strong> Sept 4 hit rate 24% (13/55). Multiple CSM events with recordings but no transcripts: Nick&times;SAP, Pam&times;Oracle, Andy&times;ADP, Rani&times;Hitachi, Rani&times;Google, Atisha&times;Intel.
  </div>`;
}

function dayPulsesHTML_2026_09_04() {
  const cards = [
    { csm:'divyam', health:'Healthy', account:`BILL Operations, LLC`, opp:`Vitally Pulse &mdash; Sep 4 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`,
      change:`Sep 4 &middot; Healthy`,
      excerpt:`MQL/scoring model education for marketing team. 3 paths to MQL (pure MadKudu, activity-based, hybrid). White paper download example showed negative statistical correlation. Enhanced docs + AI-simplified explanations in flight.` },
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

function dayActionsHTML_2026_09_04() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0904-1')?'done':''}" data-csm="divyam" id="action-0904-1">
      <div class="action-checkbox ${doneActions.has('0904-1')?'checked':''}" onclick="toggleAction('0904-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; BILL &mdash; Finalize outstanding tickets + AI-simplified MQL explanations</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan &middot; Finalize open tickets (Aug 26/27 unscored records + override analysis). Coordinate w/ Charles on marketing-team-facing MQL explanation deck (3 paths + segment/point-importance framing). Consider AI-based simplification approach.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0904-2')?'done':''}" data-csm="all" id="action-0904-2">
      <div class="action-checkbox ${doneActions.has('0904-2')?'checked':''}" onclick="toggleAction('0904-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow sync backlog Day 3</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops &middot; Third consecutive day of elevated no-transcript rate (Sept 2 71% → Sept 3 75% → Sept 4 76%). Multiple critical customer meetings unconfirmed: Nick×SAP, Pam×Oracle, Andy×ADP, Rani×Hitachi/Google, Atisha×Intel. Escalate to Weflow support urgently.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0904-3')?'done':''}" data-csm="nick" id="action-0904-3">
      <div class="action-checkbox ${doneActions.has('0904-3')?'checked':''}" onclick="toggleAction('0904-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Nick PTO handoff &mdash; Infor onsite debrief coverage</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Nick Johnson (PTO) / Rani (backup) &middot; Nick&rsquo;s Sept 4 Infor onsite debrief (5 AM) no recording synced. SAP call ran but no transcript. Confirm coverage. Nick expected back ~Sept 11.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_07() {
  return {
    calls: [
      { ts: 'Sep 7 · 9:00 AM', csm: 'varun', account: `Zscaler`,
        note: `Labor Day alignment session with Manoj Parameswara. AI/MCP+LLM (Claude) walkthrough for auto-generating account briefs + technographic intel. Product data coverage expansion (55&rarr;200-300 products). Dec renewal scoping: freeze reqs Sept/Oct, sign Nov.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Zscaler alignment on Labor Day with Manoj Parameswara. Varun demoed MCP integrated with Claude for auto-generated account briefs + technographic intel to support sales planning. Zscaler currently at 55 products in HG data &mdash; potential to expand to 200-300 based on their scale. Spend data coverage &gt;95% for contracted accounts; early amendment discussion possible. Account matching should use URL + country in addition to DUNS. Dec renewal &mdash; scope + requirements freeze in Sept/Oct, contract signature November.` },
    ],
    pulses: [
      { csm: 'varun', account: `Zscaler`, health: 'Healthy',
        note: `Pre-renewal expansion signal &mdash; AI/MCP+LLM demo, 55&rarr;200-300 product data expansion, Dec renewal scoping in flight.` },
    ],
  };
}

function dayMeta_2026_09_07() {
  return {
    pills: [
      ['dot-teal',   '1 Call'],
      ['dot-amber',  '1 Expansion'],
      ['dot-green',  '1 Vitally Pulse'],
      ['dot-grey',   'Mon Sep 7 (Labor Day) &middot; 21 scanned'],
    ],
    tabs: ['Overview', 'Calls (1)', 'Pulses (1)', 'Action Items (2)']
  };
}

function dayOverviewHTML_2026_09_07() {
  return `<div class="section-label">Team Activity &mdash; Monday September 7, 2026 (Labor Day)</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Monday Sep 7 (Labor Day) &mdash; 21 recordings scanned</strong> via SFDC SOQL &middot; <strong>1 confirmed call</strong> (Varun &times; Zscaler) &middot; 0 concerning &middot; 1 expansion &middot; US federal holiday &mdash; expected minimal activity
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Zscaler pre-renewal alignment &mdash; AI/MCP+LLM demo for auto-generated account briefs, 55&rarr;200-300 product data expansion, Dec renewal scoping (Sept/Oct freeze &rarr; Nov signature).
  </div>
  <div class="overview-grid">

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
      <div class="csm-account-note">Zscaler (&#x1F4C8; AI/MCP demo + 55&rarr;200-300 product data expansion + Dec renewal scoping)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">On PTO (Labor Day). 1 event (HCL TR 7:30 AM) &mdash; no recording synced</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events (Blackbaud TR 8:30 AM, Okta TR 9:30 AM, Dynatrace 10 AM) &mdash; all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (Airtel Africa 3 AM) &mdash; no recording synced (Labor Day pattern)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (Filevine TR 11:30 AM) &mdash; no transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events (Labor Day)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events (Labor Day)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events (Labor Day)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_07() {
  return `<div class="section-label">Confirmed Calls &mdash; Monday September 7, 2026 (Labor Day)</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Zscaler AI/MCP demo + 55&rarr;200-300 product data expansion + Dec renewal scoping (Varun)
  </div>`;
}

function dayPulsesHTML_2026_09_07() {
  const cards = [
    { csm:'varun', health:'Healthy', account:`Zscaler`, opp:`Vitally Pulse &mdash; Sep 7 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 7 &middot; Healthy`,
      excerpt:`Labor Day alignment. AI/MCP + Claude demo for auto-generated account briefs + technographic intel. Product data coverage expansion (55 &rarr; 200-300). Dec renewal scoping in flight &mdash; Sept/Oct requirements freeze &rarr; Nov contract signature.` },
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

function dayActionsHTML_2026_09_07() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0907-1')?'done':''}" data-csm="varun" id="action-0907-1">
      <div class="action-checkbox ${doneActions.has('0907-1')?'checked':''}" onclick="toggleAction('0907-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Zscaler &mdash; Send updated product catalog + spend data validation</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari &middot; Send updated HG product catalog covering the expansion path from 55 to 200-300 Zscaler products. Support Manoj on internal data-utilization assessment and prep for Dec renewal leadership discussion. Sept/Oct requirements freeze window is now.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0907-2')?'done':''}" data-csm="varun" id="action-0907-2">
      <div class="action-checkbox ${doneActions.has('0907-2')?'checked':''}" onclick="toggleAction('0907-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Zscaler &mdash; MCP + AI demo assets for internal share</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Package the MCP + Claude demo assets (account brief generation, technographic intel) so Manoj can share internally ahead of the leadership renewal discussion. Reinforce URL + country matching (beyond DUNS) for account validation.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_08() {
  return {
    calls: [
      { ts: 'Sep 8 · 10:00 AM', csm: 'rani', account: `Google Inc.`,
        note: `60-min Google Renewal Discussion with Mark Fell. Credit-based pricing walkthrough: tiered structure, credit carryover, FAI/Gen AI exclusion options. Old platform EOL &rarr; new AI-driven version. Google to do internal analysis; follow-up week of 14th (Wed/Thu).`,
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Google renewal discussion with Mark Fell. Google evaluating transition to credit-based pricing model (from prior consumption/entity-based). Rani + Mark walked: tiered pricing (per-credit cost decreases with volume), credit carryover across years (mitigates &ldquo;use it or lose it&rdquo;), option to exclude FAI + Gen AI to reduce credit usage. Also flagged old platform nearing EOL &mdash; new AI-driven version available but integration + cost need evaluation. Google team to conduct internal catalog analysis + startup propensity model + TrustRadius Customer Voice priorities before next meeting. Natalia sending meeting invite options for week of Sept 14 (Wed/Thu preferred).` },
      { ts: 'Sep 8 · 11:30 AM', csm: 'divyam', account: `BILL Operations, LLC`,
        note: `Weekly sync with Charles Hawkins + Eric Nguyen. Sales conversion analysis: self-service/API vs SNE (digital charge card) vs APAR (accounts payable/receivable) product lines have distinct conversion + deal-size profiles. Clearbit vs SFDC data-source prioritization discussion. V12 engagement model push planning.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `BILL weekly sync with Charles Hawkins + Eric Nguyen. Analyzed low conversion rates by product line: SNE (digital charge card, self-serve-friendly) vs APAR (accounts payable/receivable, larger lift, not self-serve). Self-service/API originations dominate closed-won volume in SMB but skew analysis; recommend excluding from certain reports. Data source prioritization: Divyam checking whether Clearbit is being used for industry + employee size vs SFDC/CRM primary. V12 engagement model push planning (impact on API calls). Disagreement on lead-scoring criteria (ICP fit vs behavior vs blend, override management). Divyam to do product-wise closed-won vs closed-lost analysis excluding self-serve.` },
    ],
    pulses: [
      { csm: 'rani', account: `Google Inc.`, health: 'Healthy',
        note: `Google renewal &mdash; credit-based pricing walkthrough. Old platform EOL, new AI-driven version. Google internal analysis in flight; follow-up week of Sept 14.` },
      { csm: 'divyam', account: `BILL Operations, LLC`, health: 'Healthy',
        note: `SNE vs APAR product-line conversion analysis; V12 engagement model push; Clearbit vs SFDC source prioritization.` },
    ],
  };
}

function dayMeta_2026_09_08() {
  return {
    pills: [
      ['dot-teal',   '2 Calls'],
      ['dot-amber',  '2 Expansion'],
      ['dot-green',  '2 Vitally Pulses'],
      ['dot-grey',   'Tue Sep 8 &middot; 92 scanned'],
    ],
    tabs: ['Overview', 'Calls (2)', 'Pulses (2)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_09_08() {
  return `<div class="section-label">Team Activity &mdash; Tuesday September 8, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Sep 8 &mdash; 92 recordings scanned</strong> via SFDC SOQL &middot; <strong>2 confirmed calls</strong> (Rani, Divyam) &middot; 0 concerning &middot; 2 expansion signals &middot; 35 CSM events but 72% no-transcript rate persists (Day 4 of backlog)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Google renewal discussion (60 min) &mdash; credit-based pricing walkthrough (tiered, carryover, FAI/Gen AI exclusion options) + old platform EOL to new AI-driven version (Rani) &middot; BILL sales conversion analysis + V12 engagement model push + product-line split (Divyam)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 4 (72% no-transcript):</strong> Nick (PTO)&rsquo;s 6 events (Softcat + SAP x2 + Siemens x3 + Hyland + Dintec) all no-transcript. Also Rani&rsquo;s NetApp PTB + Cisco Isovalent + Workday Usage Review, Riley&rsquo;s Red Hat + Iterable + TriNet + Insperity + Piano, Atisha&rsquo;s Apple Strategy, Varun&rsquo;s OpenText + Iron Mountain.
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
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Google (&#x1F4C8; 60-min renewal discussion &mdash; credit-based pricing + AI-driven platform) &middot; NetApp PTB + Cisco Isovalent + Workday Usage Review + NetApp weekly all no-transcript</div>
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
      <div class="csm-account-note">BILL (&#x1F4C8; product-line conversion analysis + V12 engagement push) &middot; Adobe monthly + Paychex Paycor TR all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Still on PTO (back ~Sept 11). 6 events (Softcat 1:30 AM, Siemens x3 at 5 AM, Hyland 7 AM, SAP x2 at 9:30 AM, Dintec 9 AM) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">4 events (OpenText biweekly x2 at 3 AM, HG&amp;Insight sync, Iron Mountain biweekly 8 AM) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">5 events (Iterable, TriNet x2, Red Hat biweekly, Insperity, Piano) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Apple Strategy &amp; Planning 8:30 AM x2) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (Team Sync - Mark Fell Ops 8 AM co-w/ Rani) no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events scheduled</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_08() {
  return `<div class="section-label">Confirmed Calls &mdash; Tuesday September 8, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Google renewal &mdash; credit-based pricing model discussion (Rani) &middot; BILL conversion analysis + V12 engagement push (Divyam)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 4 (72% no-transcript):</strong> Nick (PTO) has 6 events all missing transcripts. Also affects Rani&rsquo;s NetApp/Cisco/Workday slots, Riley&rsquo;s entire TR portfolio (Red Hat, TriNet, Iterable, Insperity), Varun&rsquo;s OpenText + Iron Mountain, Divyam&rsquo;s Adobe + Paychex.
  </div>`;
}

function dayPulsesHTML_2026_09_08() {
  const cards = [
    { csm:'rani', health:'Healthy', account:`Google Inc.`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 8 &middot; Healthy`,
      excerpt:`Google renewal discussion &mdash; credit-based pricing walkthrough (tiered, carryover, FAI/Gen AI exclusion). Old platform EOL, new AI-driven version. Google to do internal catalog + startup propensity + TR CVP priority analysis. Follow-up week of Sept 14.` },
    { csm:'divyam', health:'Healthy', account:`BILL Operations, LLC`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`,
      change:`Sep 8 &middot; Healthy`,
      excerpt:`SNE (digital charge card, self-serve) vs APAR (accounts payable/receivable, larger lift) product-line conversion analysis. Self-service/API originations skew SMB. Clearbit vs SFDC source prioritization. V12 engagement model push planning.` },
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

function dayActionsHTML_2026_09_08() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0908-1')?'done':''}" data-csm="rani" id="action-0908-1">
      <div class="action-checkbox ${doneActions.has('0908-1')?'checked':''}" onclick="toggleAction('0908-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Google &mdash; Prep tailored package + pricing for follow-up week of Sept 14</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Mark Fell &middot; Package + pricing options based on Google&rsquo;s internal analysis (impact of FAI/Gen AI inclusion, credit consumption, budget constraints, build-in growth flexibility). Confirm Natalia&rsquo;s meeting invite for Wed/Thu of Sept 14 week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-2')?'done':''}" data-csm="divyam" id="action-0908-2">
      <div class="action-checkbox ${doneActions.has('0908-2')?'checked':''}" onclick="toggleAction('0908-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; BILL &mdash; Confirm data source hierarchy + V12 push impact</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; By next Monday call: double-check if Clearbit is being used for industry + employee size, and confirm whether SFDC/CRM data can be prioritized. Within 1-2 days: clarify how to push V12 engagement model live + expected API-call impact.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-3')?'done':''}" data-csm="divyam" id="action-0908-3">
      <div class="action-checkbox ${doneActions.has('0908-3')?'checked':''}" onclick="toggleAction('0908-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; BILL &mdash; Product-line closed-won vs closed-lost analysis</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan &middot; Run product-wise closed-won vs closed-lost analysis excluding self-serve/API-originated deals to isolate sales-driven signal for SNE and APAR separately. Support the lead-scoring-criteria discussion (ICP fit vs behavior weighting).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-4')?'done':''}" data-csm="all" id="action-0908-4">
      <div class="action-checkbox ${doneActions.has('0908-4')?'checked':''}" onclick="toggleAction('0908-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow sync backlog Day 4 escalation</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops &middot; Fourth elevated no-transcript day (Sept 2 71% &rarr; Sept 3 75% &rarr; Sept 4 76% &rarr; Sept 8 72%). Sept 7 was Labor Day. Escalate to Weflow support if not already. Consider stopgap: run inferred-from-CSM-event fallback for continuity while sync resolves.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-5')?'done':''}" data-csm="nick" id="action-0908-5">
      <div class="action-checkbox ${doneActions.has('0908-5')?'checked':''}" onclick="toggleAction('0908-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Nick PTO wrap-up &mdash; SAP + Siemens + Hyland + Softcat coverage gaps</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Nick Johnson (returning ~Sept 11) &middot; 6 Nick-owned events on Sept 8 all no-transcript (Softcat 1:30 AM, Siemens monthly x3 at 5 AM, Hyland 7 AM, SAP biweekly x2 9:30 AM, Dintec 9 AM). Confirm Rani + Adrian coverage until Nick returns Thu-Fri this week.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_09() {
  return {
    calls: [
      { ts: 'Sep 9 · 8:00 AM', csm: 'rani', account: `Hitachi Vantara`,
        note: `Clay + universe-feed transition discussion with Rebecca Klein + Umar Farooq Adam (Hitachi) + Adrian Escobar (HG). Anders universe-feed contract terminates Oct 22; Hitachi migrating to credit-based API model. New API charges on data returned, not calls. Follow-up end of Sept for credit projections.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Hitachi transition planning with Rebecca Klein + Umar Farooq Adam + Adrian Escobar. Anders "universe feed" data service ends Oct 22 &mdash; Hitachi must remove all licensed data by that deadline. Transitioning Hitachi to credit-based data access model via API (potentially lower cost + more flexibility). Clarified new API charges based on data returned, not just API calls (important for cost management). Firmographic + technographic needs to be scoped for new credit subscription. Follow-up end of Sept to review credit projections + rate cards.` },
      { ts: 'Sep 9 · 9:30 AM', csm: 'riley', account: `Intuit (Desktop Enterprise)`,
        note: `TR CSM sync on Desktop Enterprise &rarr; Online migration. QB Desktop Enterprise sunsetting; premium content + third-party validation being considered. Buyer&rsquo;s Choice review deadline Oct 16. Concern: awards for Desktop may inadvertently keep users in ecosystem.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Intuit Desktop Enterprise TR CSM sync. QB Online being brought to feature parity with Desktop (inventory + manufacturing). Strategic push to migrate users from Desktop Enterprise (sunsetting product) to online versions. Considering premium content + third-party validation to highlight online benefits. Buyer&rsquo;s Choice review cycle deadline Oct 16 approaching. Strategic tension: winning Desktop Enterprise awards may keep users in Desktop ecosystem, hindering online transition. Riley to sync with Martin + Katie internally; Andy to check with Natalie on content interest/feasibility.` },
    ],
    pulses: [
      { csm: 'rani', account: `Hitachi Vantara`, health: 'Healthy',
        note: `Clay integration + Anders universe-feed termination transition. Oct 22 data-removal deadline. Credit-based API model transition; follow-up end of Sept.` },
      { csm: 'riley', account: `Intuit (Desktop Enterprise)`, health: 'Healthy',
        note: `Desktop&rarr;Online migration push. Premium content + third-party validation. Buyer&rsquo;s Choice deadline Oct 16. Strategic award focus tension to resolve.` },
    ],
  };
}

function dayMeta_2026_09_09() {
  return {
    pills: [
      ['dot-teal',   '2 Calls'],
      ['dot-amber',  '2 Expansion'],
      ['dot-green',  '2 Vitally Pulses'],
      ['dot-grey',   'Wed Sep 9 &middot; 93 scanned'],
    ],
    tabs: ['Overview', 'Calls (2)', 'Pulses (2)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_09_09() {
  return `<div class="section-label">Team Activity &mdash; Wednesday September 9, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Sep 9 &mdash; 93 recordings scanned</strong> via SFDC SOQL &middot; <strong>2 confirmed calls</strong> (Rani, Riley) &middot; 0 concerning &middot; 2 expansion signals &middot; 37 CSM events but 75% no-transcript rate (Weflow backlog Day 5)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Hitachi Clay + Anders universe-feed termination (Oct 22) &mdash; transition to credit-based API model (Rani) &middot; Intuit Desktop Enterprise&rarr;Online migration push + Buyer&rsquo;s Choice review deadline Oct 16 (Riley)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 5 (75% no-transcript):</strong> No improvement post-holiday. Atisha (Deloitte, EY, Intel, Unily), Nick still-PTO (Accenture Projects Connect x2, Siemens biweekly), Varun (CBTS, Insight, Informatica x3, Pegasystems, Exclusive Networks), Pam&rsquo;s entire day (Cisco, Datadog, Epicor, MSFT Security, GoTo, Talkdesk).
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
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Hitachi (&#x1F4C8; Clay + Anders universe-feed transition to credit-based API) &middot; Google + Lenovo + Cisco GRO all no-transcript</div>
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
      <div class="csm-account-note">Intuit (&#x1F4C8; Desktop Enterprise TR sync &mdash; Desktop&rarr;Online migration + Buyer&rsquo;s Choice Oct 16) &middot; BMC + Hootsuite + Litmus all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Last day of PTO (back tomorrow). 4 events (Accenture Projects Connect x2 at 3:30 AM, Siemens biweekly 8 AM, Exclusive Networks 9 AM) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">7 events (SFDC ASEAN 1:30 AM, Deloitte weekly 6 AM, Unily, EY standing sync 6:30 AM, Intel x2 at 7:30 AM, Talkdesk 8:30 AM) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">7 events (Insight, CBTS monthly, Informatica x3 at 9 AM, Exclusive Networks biweekly, Pegasystems biweekly 10:30 AM) all no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">7 events (Cisco TR 7:30 AM, Datadog 9:30 AM, Epicor TR x3 at 11 AM, MSFT Security 11:05 AM, GoTo TR 11:30 AM) &mdash; entire day dark</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (Informatica weekly co-w/ Varun 9 AM) no-transcript</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Catchup 2 AM, FactSet TR walkthrough 9 AM) &mdash; FactSet inferred from event ownership, no transcript</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_09() {
  return `<div class="section-label">Confirmed Calls &mdash; Wednesday September 9, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>EXPANSION:</strong> Hitachi Clay + Anders universe-feed transition &mdash; credit-based API model (Rani) &middot; Intuit Desktop Enterprise&rarr;Online migration push + Buyer&rsquo;s Choice Oct 16 deadline (Riley)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 5 (75% no-transcript):</strong> Sept 2 71% &rarr; Sept 3 75% &rarr; Sept 4 76% &rarr; Sept 8 72% &rarr; Sept 9 75%. Pam had 7 events dark (Cisco, Datadog, Epicor x3, MSFT Security, GoTo). Atisha had 7 events dark. Varun had 7 events dark. Escalate to Weflow if not already.
  </div>`;
}

function dayPulsesHTML_2026_09_09() {
  const cards = [
    { csm:'rani', health:'Healthy', account:`Hitachi Vantara`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 9 &middot; Healthy`,
      excerpt:`Clay + Anders universe-feed termination (Oct 22 data-removal deadline). Transitioning Hitachi to credit-based API model &mdash; new charges on data returned, not calls. Follow-up end of Sept for credit projections + rate cards.` },
    { csm:'riley', health:'Healthy', account:`Intuit (Desktop Enterprise)`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 9 &middot; Healthy`,
      excerpt:`QB Desktop&rarr;Online migration push. Premium content + third-party validation being considered. Buyer&rsquo;s Choice review deadline Oct 16. Strategic tension: Desktop awards may keep users in Desktop ecosystem, hindering online transition.` },
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

function dayActionsHTML_2026_09_09() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0909-1')?'done':''}" data-csm="rani" id="action-0909-1">
      <div class="action-checkbox ${doneActions.has('0909-1')?'checked':''}" onclick="toggleAction('0909-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; Hitachi &mdash; Oct 22 universe-feed data-removal deadline + credit projections</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar &middot; Hitachi must remove all licensed Anders universe-feed data by Oct 22 (43 days). Finalize credit calculations for transition period + provide detailed rate cards. Reconvene end of Sept to solidify path forward and confirm firmographic + technographic subscription scope.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-2')?'done':''}" data-csm="riley" id="action-0909-2">
      <div class="action-checkbox ${doneActions.has('0909-2')?'checked':''}" onclick="toggleAction('0909-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Intuit &mdash; Desktop&rarr;Online strategy + Buyer&rsquo;s Choice Oct 16 push</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers &middot; Confirm w/ Morgan whether PDF example can be shared with Andy (or provide alternate). Sync with Martin + Katie before next week to prep. Andy to check w/ Natalie on content interest + review-campaign feasibility. Address strategic tension: Desktop awards vs Online migration goal ahead of Oct 16 deadline.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-3')?'done':''}" data-csm="all" id="action-0909-3">
      <div class="action-checkbox ${doneActions.has('0909-3')?'checked':''}" onclick="toggleAction('0909-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow backlog Day 5 &mdash; formal escalation needed</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops &middot; Fifth day of elevated no-transcript rate (75% Sept 9). Pam + Atisha + Varun each had 7 events dark. Losing signal on every major account daily (Cisco, Datadog, MSFT Security, Deloitte, EY, Intel, Informatica, Pegasystems). Open Weflow support ticket + consider inferred-from-event-ownership fallback for weekly aggregates.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-4')?'done':''}" data-csm="nick" id="action-0909-4">
      <div class="action-checkbox ${doneActions.has('0909-4')?'checked':''}" onclick="toggleAction('0909-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Nick PTO return prep &mdash; Accenture + Siemens + Exclusive Networks catchup</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson (returning tomorrow) &middot; 4 Nick-owned events on Sept 9 all no-transcript (Accenture Projects Connect x2 at 3:30 AM, Siemens biweekly 8 AM, Exclusive Networks biweekly 9 AM). Brief Nick on coverage decisions + open commitments made during PTO before he re-engages.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-5')?'done':''}" data-csm="riley" id="action-0909-5">
      <div class="action-checkbox ${doneActions.has('0909-5')?'checked':''}" onclick="toggleAction('0909-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; BMC &mdash; TR offering/roadmap review follow-up (from Sept 1 concerning signal)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers &middot; Sept 9 BMC TR offering/roadmap review event (6:30 AM) had no transcript. This is a continuation of the Sept 1 concerning conversation (BMC won&rsquo;t renew at current cost, evaluating G2/PeerSpot). Log outcome + next steps in Vitally regardless of transcript status; loop Augie + Todd.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}








// ============================================================
// Friday September 11, 2026
// ============================================================

function dayData_2026_09_11() {
  return {
    calls: [
      { ts: 'Sep 11 &middot; 9:00 AM', csm: 'riley', account: 'Zoom',
        note: 'Camille Shortridge farewell / handoff to Travis; Buyer’s Choice deadline extended to Oct 16; API + SSO enablement plan for incoming lead',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Final handoff sync ahead of Camille Shortridge’s departure (going to Figma Monday). Riley confirmed Travis has Buyer’s Choice tracker access; SSO and API enablement in flight; free-links doc to be shared for interim reviews. Riley extended the Buyer’s Choice program deadline three weeks to Oct 16 (announcement Nov). Marla intro re-attempted via second handoff email. Watch: successor backfill (colleague going on maternity leave in a few months) and momentum on review-gen without Camille driving.' },

      { ts: 'Sep 11 &middot; 10:00 AM', csm: 'rani', account: 'Google Inc.',
        note: 'Multi-stream: Contact Data POC scoped (1,000 accounts + DPA), Gemini Enterprise MCP intro request, TR Precision Demand pitched; renewal locked to like-for-like for December',
        mins: 45, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Rani ran the agenda with Marianna Prodan (Google contact-data owner), Mark Fell + KP Pindle + Mardigan Moffat + Cole Arutian. Renewal reality-check: Lawrence + procurement pushing like-for-like extension in December (budgets locked for the year, no room for contact-data add-in until 2027 budget cycle). Path forward: execute renewal in December + parallel POC now. POC scoped at ~1,000 accounts across geos/segments (KP owns), MVL requires first/last/title/company/country + validated non-catch-all business emails only (no gmail). DPA is the blocker — Rani driving to attach to Lawrence’s renewal amendment vs standalone. Gemini Enterprise MCP: Rani asked for warm intro (Noah Rowitz indicated ZoomInfo has done this integration already). Precision Demand program pitched by Mardigan as bridge for marketing contacts + intent-driven leads on TR side. Deadline to send DPA + kick off POC list: today.' },
    ],
    pulses: [
      { csm:'riley', health:'Healthy', account:'Zoom',
        opp:'Vitally Pulse &mdash; Sep 11 Call',
        arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
        change:'Sep 11 &middot; Handoff / Transition',
        excerpt:'9/11 RR: Camille Shortridge (primary Zoom sponsor) leaving for Figma; Travis absorbing responsibilities (30 min, 9 AM PT). Buyer’s Choice deadline extended to Oct 16 (announcement Nov). API + SSO enablement in flight. Marla intro re-tried via second handoff email.' },

      { csm:'rani', health:'Healthy', account:'Google Inc.',
        opp:'Vitally Pulse &mdash; Sep 11 Call',
        arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
        change:'Sep 11 &middot; Renewal + POC + MCP',
        excerpt:'9/11 RG: 45 min contact-POC scoping (10 AM PT). Google’s 2026 budget locked — December renewal must be like-for-like; contact-data add-on to be POC’d now, contracted in 2027. 1,000-account POC + DPA in motion. Rani asked for Gemini Enterprise MCP intro (Noah Rowitz hint that ZoomInfo already did the integration).' },
    ],
  };
}

function dayMeta_2026_09_11() {
  return {
    pills: [
      ['dot-teal',   '2 Calls'],
      ['dot-amber',  '1 Expansion'],
      ['dot-green',  '2 Vitally Pulses'],
      ['dot-grey',   'Fri Sep 11 &middot; 52 scanned &middot; 69% no-transcript'],
    ],
    tabs: ['Overview', 'Calls (2)', 'Pulses (2)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_09_11() {
  return `<div class="section-label">Team Activity &mdash; Friday September 11, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Fri Sep 11 &mdash; 52 recordings scanned</strong> via SFDC SOQL &middot; <strong>2 confirmed calls</strong> across 2 CSMs &middot; 0 Concerning &middot; 1 Expansion (Google contact POC + Gemini MCP + TR Precision Demand) &middot; Nick back from PTO (Infor onsite debrief no-recording).
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 7:</strong> 69% no-transcript rate (down from 85% Sept 10, still elevated vs 40-50% typical). Trajectory: Sep 2 71% &rarr; Sep 3 75% &rarr; Sep 4 76% &rarr; Sep 8 72% &rarr; Sep 9 75% &rarr; Sep 10 85% &rarr; <strong>Sep 11 69%</strong>. Improvement but not resolved. 3 no-transcript recordings that were CSM-owned events (Andy&times;SAS renewal 5:30 AM, Varun&times;MongoDB 9 AM, Rani&times;Hitachi Vantara 9:30 AM) &mdash; inferred only, not speaker-verified.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion:</strong> Google (Rani) &mdash; contact-data POC scoped at 1,000 accounts + DPA in motion; Gemini Enterprise MCP intro requested; TR Precision Demand program pitched. December renewal will be like-for-like (budget locked); contact-add expected 2027 budget cycle.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Zoom (Camille Shortridge farewell / Travis handoff; Buyer’s Choice deadline Oct 16)</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">45m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Google (contact POC + Gemini MCP + TR Precision Demand; renewal locked to like-for-like Dec) &middot; Hitachi Vantara 9:30 AM (no transcript)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">Back from PTO (Day 2). 1 event (Infor onsite debrief 5 AM) &mdash; no recording synced</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events scheduled</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (MongoDB 9 AM) &mdash; recorded but no transcript (inferred only)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events scheduled</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events (Intel Platform Training 5:30 AM, AMD Bi-weekly 9:30 AM, Apple Platform Training 12 PM) &mdash; no recordings synced</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event (SAS Team - MI Licenses 2027 Renewal 5:30 AM) &mdash; recorded but no transcript (inferred only)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_11() {
  return `<div class="section-label">Confirmed Calls &mdash; Friday September 11, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>3 CSM events had recordings but no transcript</strong> &mdash; inferred from CSM event ownership only, not speaker-verified: Andy&times;SAS (MI Licenses 2027 Renewal, 5:30 AM PT, 30 min), Varun&times;MongoDB (9 AM PT, 30 min), Rani&times;Hitachi Vantara (9:30 AM PT, 30 min). 4 additional CSM events had no recording at all: Nick&times;Infor onsite debrief (5 AM), Atisha&times;Intel Platform Training (5:30 AM), Atisha&times;AMD Bi-weekly (9:30 AM), Atisha&times;Apple Platform Training (12 PM).
  </div>`;
}

function dayPulsesHTML_2026_09_11() {
  const cards = [
    { csm:'riley', health:'Healthy', account:'Zoom', opp:'Vitally Pulse &mdash; Sep 11 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Sep 11 &middot; Handoff / Transition',
      excerpt:'9/11 RR: Camille Shortridge (primary Zoom sponsor) leaving for Figma; Travis absorbing responsibilities (30 min, 9 AM PT). Buyer’s Choice deadline extended to Oct 16 (announcement Nov). API + SSO enablement in flight. Marla intro re-tried via second handoff email.' },
    { csm:'rani', health:'Healthy', account:'Google Inc.', opp:'Vitally Pulse &mdash; Sep 11 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Sep 11 &middot; Renewal + POC + MCP',
      excerpt:'9/11 RG: 45 min contact-POC scoping (10 AM PT). Google’s 2026 budget locked — December renewal must be like-for-like; contact-data add-on to be POC’d now, contracted in 2027. 1,000-account POC + DPA in motion. Rani asked for Gemini Enterprise MCP intro (Noah Rowitz hint that ZoomInfo already did the integration).' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-size:13px;font-weight:600;color:#e2e8f0;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_09_11() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0911-1')?'done':''}" data-csm="rani" id="action-0911-1">
      <div class="action-checkbox ${doneActions.has('0911-1')?'checked':''}" onclick="toggleAction('0911-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Google &mdash; Send DPA + kick off 1,000-account POC list (TODAY)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Get HG DPA to Rani today so she can attach to Lawrence’s December renewal amendment (Marianna confirmed DPA is normally bundled with contract). KP to spec 1,000-account POC list w/ geo + segment spread. Google 2026 budget is locked — contact-data add-on won’t be contracted until 2027 budget cycle, so POC evidence + amendment path is the play.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0911-2')?'done':''}" data-csm="rani" id="action-0911-2">
      <div class="action-checkbox ${doneActions.has('0911-2')?'checked':''}" onclick="toggleAction('0911-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Google &mdash; Gemini Enterprise MCP intro request via Marianna</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy &middot; Noah Rowitz signaled ZoomInfo already integrated their data into Gemini Enterprise via MCP. Rani asked Marianna for a warm intro to the internal Gemini Enterprise contact. Short window — chase next week if no response.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0911-3')?'done':''}" data-csm="riley" id="action-0911-3">
      <div class="action-checkbox ${doneActions.has('0911-3')?'checked':''}" onclick="toggleAction('0911-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Zoom &mdash; Travis onboarding: SSO, API, free-links doc</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers &middot; Travis (Camille’s successor) taking over Zoom TR ownership Monday. Confirm SSO enablement complete, drop free-links doc in shared folder, and walk Travis through vendor portal on next sync. Backfill for Camille’s role uncertain (colleague also going on maternity leave in a few months) — flag risk to Yuan.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0911-4')?'done':''}" data-csm="all" id="action-0911-4">
      <div class="action-checkbox ${doneActions.has('0911-4')?'checked':''}" onclick="toggleAction('0911-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; CSM team &mdash; Manual Vitally log for 3 inferred + 4 no-recording calls</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy (SAS MI Licenses 2027 Renewal), Varun (MongoDB), Rani (Hitachi Vantara), Nick (Infor onsite debrief), Atisha (Intel Platform Training + AMD Bi-weekly + Apple Platform Training) &middot; With transcripts missing or recordings absent, each CSM should manually log the outcomes + next steps in Vitally so the signal isn’t lost. SAS renewal call in particular is worth capturing.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0911-5')?'done':''}" data-csm="all" id="action-0911-5">
      <div class="action-checkbox ${doneActions.has('0911-5')?'checked':''}" onclick="toggleAction('0911-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Ops &mdash; Weflow sync backlog Day 7 (69%, improving from 85%)</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Ops / Rishi &middot; No-transcript rate dropped from 85% Sept 10 to 69% Sept 11 — recovery starting but still 20+ pts above 40-50% baseline. Keep P0 open with Weflow support; if rate is back to baseline by Sept 14 (Monday), close ticket. Otherwise escalate to product.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}


// ============================================================
// Monday September 14, 2026
// ============================================================

function dayData_2026_09_14() {
  return {
    calls: [
      { ts: 'Sep 14 &middot; 6:30 AM', csm: 'pam', account: 'ADP, Inc',
        note: 'Co-attended with Andy Lim &mdash; Monthly Success Call: TR score analysis 89&rarr;90.5, Buyer&rsquo;s Choice qualified (Nov 10 announce, 2027 badge), review-gen via customer advocacy program, voice-of-customer quotes usage',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Pam ran the monthly success sync with Karena McKenzie and Jill S; Andy Lim (ADP&rsquo;s CSM of record) co-attended. Pam walked through a TR score analysis that lifted ADP from 89 to just above 90, and confirmed ADP is already qualified for Buyer&rsquo;s Choice (announcement Nov 10, 2027 badge for the full year). Review-gen continues to trickle in via the customer advocacy program &mdash; a handful in July/August with more expected. One review flagged for insufficient detail is being re-worked with the reviewer. Voice-of-Customer quotes are actively used in ADP&rsquo;s internal quotes database. Cross-coverage note: Andy is account CSM, Pam drives the TR/Buyer&rsquo;s Choice program work.' },

      { ts: 'Sep 14 &middot; 6:30 AM', csm: 'andy', account: 'ADP, Inc',
        note: 'Co-attended with Pam Huck on ADP Monthly Success Call; Andy is account CSM of record, Pam led the TR/Buyer&rsquo;s Choice content',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Andy is ADP&rsquo;s Enterprise CSM; joined Pam on the monthly TR/Buyer&rsquo;s Choice sync with Karena and Jill. Discussion was Pam-led (TR score, Buyer&rsquo;s Choice qualification, review-gen). See Pam&rsquo;s row for full detail. No net-new action items on Andy&rsquo;s side beyond cadence.' },

      { ts: 'Sep 14 &middot; 7:30 AM', csm: 'nick', account: 'Accenture',
        note: 'Accenture VIP platform team requesting 3&ndash;5 test accounts through full HG data fabric to compare vs current firmographics/installs/spend feed; expansion path toward buying centers, AI/cloud maturity, outsourced positioning, technology momentum',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Sachin (Accenture VIP program lead) with Patrick, Tatiana, Lupe on the customer side. HG side: Nick, Max Shaw, DC (David Crossman), Gavin Padden. Accenture VIP currently receives firmographics, installs, and IT-spend-category data for ~1,400 billion-dollar accounts. Sachin proposed a fast dry-run: Accenture sends 3&ndash;5 test accounts, HG returns the full data-fabric profile, VIP team compares against what they already have and identifies the delta. DC pitched extending the feed with buying centers, patented AI/cloud maturity, outsourced positioning (which regional/global SIs are already engaged), and technology momentum/intensity around specific stacks &mdash; attributes hyperscalers have already asked HG to build. Next step: Sachin sends 3&ndash;5 target accounts, HG returns enriched profiles, Accenture compares.' },

      { ts: 'Sep 14 &middot; 11:00 AM', csm: 'riley', account: 'TriNet Group Inc',
        note: 'Monthly CSM sync &mdash; Buyer&rsquo;s Choice qualified (deadline extended Oct 16, announce Nov 10), TR-score-to-80 plan via unbiased review sourcing, TriNet event campaign audit; Ashley OOO 3 weeks; Jan 2027 renewal on horizon',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Riley met Ashley for the recurring TrustRadius CSM sync (kmaxwell had a brief cameo). TriNet is at 79 TR score across 813 reviews and wants to break 80 &mdash; Ashley&rsquo;s never hit it in her four years. Riley outlined the unbiased-sampling approach (send campaigns to a full sample rather than pulling only NPS 9&ndash;10s so the research team doesn&rsquo;t downweight biased-feeling reviews) and offered to audit the recent TriNet event campaign (five reviews around mid-August tied to a recurring TriNet GCV event) to see whether those reviews qualify for full weighting. Buyer&rsquo;s Choice deadline extended to Oct 16, announcement Nov 10 (badge for 2027). Ashley OOO for three weeks on leave. Renewal is January 2027 &mdash; Riley plans to loop Anderson (AM) in when Ashley returns. Cadence intact, no red flags.' },
    ],
    pulses: [
      { csm:'pam', health:'Healthy', account:'ADP, Inc',
        opp:'Vitally Pulse &mdash; Sep 14 Call',
        arr:'Enterprise &middot; Pam Huck (co-cover)', csmlbl:'Pam Huck',
        change:'Sep 14 &middot; TR Score + Buyer’s Choice',
        excerpt:'9/14 PH+AL: 30 min ADP Monthly Success (6:30 AM PT). TR score lifted 89&rarr;90.5 after analysis. Buyer&rsquo;s Choice already qualified (Nov 10 announce, 2027 badge). Review-gen steady via customer advocacy program. Cross-coverage: Andy is account CSM, Pam drives TR program.' },
      { csm:'andy', health:'Healthy', account:'ADP, Inc',
        opp:'Vitally Pulse &mdash; Sep 14 Call (co-attended)',
        arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
        change:'Sep 14 &middot; Co-attend with Pam',
        excerpt:'9/14 AL: 30 min ADP Monthly Success (6:30 AM PT), co-attended with Pam. Andy account CSM of record; Pam led TR/Buyer&rsquo;s Choice content. Cadence intact, no net-new action items on Andy&rsquo;s side.' },
      { csm:'nick', health:'Healthy', account:'Accenture',
        opp:'Vitally Pulse &mdash; Sep 14 Call',
        arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
        change:'Sep 14 &middot; VIP Expansion',
        excerpt:'9/14 NJ: 30 min Accenture VIP program (7:30 AM PT). Sachin requested 3&ndash;5 test accounts through the full HG data fabric to compare vs current firmographics/installs/spend. DC pitched buying centers, AI/cloud maturity, outsourced positioning, tech momentum. Next step: Sachin sends 3&ndash;5 accounts, HG returns enriched profiles.' },
      { csm:'riley', health:'Healthy', account:'TriNet Group Inc',
        opp:'Vitally Pulse &mdash; Sep 14 Call',
        arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
        change:'Sep 14 &middot; TR Score + Buyer’s Choice',
        excerpt:'9/14 RR: 30 min TriNet Monthly CSM Sync (11 AM PT). Score 79 / 813 reviews &mdash; Ashley wants 80. Riley to audit recent TriNet event campaign for full-weight eligibility + push unbiased sampling. Buyer&rsquo;s Choice qualified (Oct 16 deadline, Nov 10 announce). Ashley OOO 3 weeks. Jan 2027 renewal &mdash; loop Anderson (AM) on return.' },
    ],
  };
}

function dayMeta_2026_09_14() {
  return {
    pills: [
      ['dot-teal',   '4 Calls'],
      ['dot-amber',  '1 Expansion'],
      ['dot-green',  '4 Vitally Pulses'],
      ['dot-grey',   'Mon Sep 14 &middot; 55 scanned &middot; 78% no-transcript'],
    ],
    tabs: ['Overview', 'Calls (4)', 'Pulses (4)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_09_14() {
  return `<div class="section-label">Team Activity &mdash; Monday September 14, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Mon Sep 14 &mdash; 55 recordings scanned</strong> via SFDC SOQL &middot; <strong>4 confirmed calls</strong> (3 unique meetings; ADP co-attended by Pam + Andy) across 4 CSMs &middot; 0 Concerning &middot; 1 Expansion (Accenture VIP data-fabric dry-run) &middot; Cross-coverage: Pam + Andy on ADP.
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 8 (regressing):</strong> 78% no-transcript rate on Sept 14 (regressed from 69% Sept 11). Trajectory: Sep 2 71% &rarr; Sep 3 75% &rarr; Sep 4 76% &rarr; Sep 8 72% &rarr; Sep 9 75% &rarr; Sep 10 85% &rarr; Sep 11 69% &rarr; <strong>Sep 14 78%</strong>. Recovery did not hold through the weekend. 4 CSM-owned recordings had no transcript (Pam&times;Microsoft SFTP 4:15 AM, Andy&times;ADP duplicate recorder 7:00 AM, Rani&times;Cisco WarRoom 8:00 AM, Rani&times;NetApp 1:00 PM) &mdash; inferred only, not speaker-verified. 14 additional CSM events had no recording at all.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion:</strong> Accenture (Nick) &mdash; VIP program team requested 3&ndash;5 test accounts through the full HG data fabric to compare vs their current firmographics/installs/spend feed. DC pitched buying centers, AI/cloud maturity, outsourced positioning, tech momentum. Fast dry-run should close the gap on what VIP needs vs what they get today.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">TriNet Group Inc (Monthly CSM sync; TR-score-to-80 plan; Buyer&rsquo;s Choice qualified; Ashley OOO 3 weeks; Jan 2027 renewal)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Accenture (VIP program dry-run: 3&ndash;5 test accounts through full HG data fabric; expansion path toward buying centers, AI/cloud maturity, outsourced positioning, tech momentum)</div>
    </div>

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ADP, Inc (co-attended with Andy; TR score 89&rarr;90.5; Buyer&rsquo;s Choice qualified) &middot; Microsoft SFTP 4:15 AM (no transcript, inferred)</div>
    </div>

    <div class="csm-card has-calls" data-csm="andy">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ADP, Inc (co-attended with Pam) &middot; SecureWorks Monthly Cadence (no recording)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events scheduled</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events with recordings but no transcript (Cisco WarRoom 8 AM, NetApp weekly 1 PM) &mdash; inferred only</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events scheduled</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">4 events (Airtel &times;2 3 AM, Intel weekly 7 AM, Placeholder Intel 12 PM) &mdash; no recordings synced</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_14() {
  return `<div class="section-label">Confirmed Calls &mdash; Monday September 14, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F91D; <strong>Cross-coverage:</strong> Pam Huck + Andy Lim both on ADP&rsquo;s Monthly Success Call (6:30 AM PT). Andy is account CSM of record; Pam drives the TR/Buyer&rsquo;s Choice content.
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>4 CSM-owned recordings had no transcript</strong> &mdash; inferred from CSM event ownership only, not speaker-verified: Pam&times;Microsoft SFTP (4:15 AM PT, 15 min), Andy&times;ADP duplicate recorder (7:00 AM PT, 30 min &mdash; same call as the confirmed 6:30 AM ADP recording), Rani&times;Cisco WarRoom (8:00 AM PT, 40 min &mdash; renewal war-room), Rani&times;NetApp weekly (1:00 PM PT, 25 min). 14 CSM events had no recording at all (Atisha&times;Airtel&times;2, Nick&times;Softcat&times;3, Andy&times;ADP + SecureWorks, Atisha&times;Intel + Intel-placeholder, Nick&times;NICE&times;2 + TrustRadius&times;Infor&times;2, Rani&times;NetApp-earlier-slot).
  </div>`;
}

function dayPulsesHTML_2026_09_14() {
  const cards = [
    { csm:'pam', health:'Healthy', account:'ADP, Inc',
      opp:'Vitally Pulse &mdash; Sep 14 Call',
      arr:'Enterprise &middot; Pam Huck (co-cover)', csmlbl:'Pam Huck',
      change:'Sep 14 &middot; TR Score + Buyer’s Choice',
      excerpt:'9/14 PH+AL: 30 min ADP Monthly Success (6:30 AM PT). TR score lifted 89&rarr;90.5 after analysis. Buyer&rsquo;s Choice already qualified (Nov 10 announce, 2027 badge). Review-gen steady via customer advocacy program. Cross-coverage: Andy is account CSM, Pam drives TR program.' },
    { csm:'andy', health:'Healthy', account:'ADP, Inc',
      opp:'Vitally Pulse &mdash; Sep 14 Call (co-attended)',
      arr:'Enterprise &middot; Andy Lim', csmlbl:'Andy Lim',
      change:'Sep 14 &middot; Co-attend with Pam',
      excerpt:'9/14 AL: 30 min ADP Monthly Success (6:30 AM PT), co-attended with Pam. Andy account CSM of record; Pam led TR/Buyer’s Choice content. Cadence intact, no net-new action items on Andy’s side.' },
    { csm:'nick', health:'Healthy', account:'Accenture',
      opp:'Vitally Pulse &mdash; Sep 14 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Sep 14 &middot; VIP Expansion',
      excerpt:'9/14 NJ: 30 min Accenture VIP program (7:30 AM PT). Sachin requested 3–5 test accounts through the full HG data fabric to compare vs current firmographics/installs/spend. DC pitched buying centers, AI/cloud maturity, outsourced positioning, tech momentum. Next step: Sachin sends 3–5 accounts, HG returns enriched profiles.' },
    { csm:'riley', health:'Healthy', account:'TriNet Group Inc',
      opp:'Vitally Pulse &mdash; Sep 14 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers',
      change:'Sep 14 &middot; TR Score + Buyer’s Choice',
      excerpt:'9/14 RR: 30 min TriNet Monthly CSM Sync (11 AM PT). Score 79 / 813 reviews — Ashley wants 80. Riley to audit recent TriNet event campaign for full-weight eligibility + push unbiased sampling. Buyer’s Choice qualified (Oct 16 deadline, Nov 10 announce). Ashley OOO 3 weeks. Jan 2027 renewal — loop Anderson (AM) on return.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-size:13px;font-weight:600;color:#e2e8f0;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_09_14() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0914-1')?'done':''}" data-csm="nick" id="action-0914-1">
      <div class="action-checkbox ${doneActions.has('0914-1')?'checked':''}" onclick="toggleAction('0914-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Accenture &mdash; Await 3&ndash;5 test accounts from Sachin, return full data-fabric profile</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Sachin (VIP program lead) is sending 3&ndash;5 test accounts for HG to run through the full data fabric (buying centers, AI/cloud maturity, outsourced positioning, tech momentum). DC + Gavin to enrich; return profiles + rows-and-columns view + interpretive commentary. Fastest path to expansion beyond current firmographics/installs/spend feed.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0914-2')?'done':''}" data-csm="riley" id="action-0914-2">
      <div class="action-checkbox ${doneActions.has('0914-2')?'checked':''}" onclick="toggleAction('0914-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; TriNet &mdash; Audit August TriNet GCV event campaign for full-weight review eligibility</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers &middot; TriNet is at 79 / 813 reviews and wants to break 80. Riley to pull the ~5 recent event-campaign reviews (mid-August, tied to recurring TriNet GCV events), send to research team with note that source is unbiased (event attendees, not NPS-9/10 pulls). If team confirms full weighting, score should nudge up. Report back to Ashley on return from OOO.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0914-3')?'done':''}" data-csm="riley" id="action-0914-3">
      <div class="action-checkbox ${doneActions.has('0914-3')?'checked':''}" onclick="toggleAction('0914-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; TriNet &mdash; Loop Anderson (AM) in on Ashley&rsquo;s return for Jan 2027 renewal prep</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Riley Rogers &middot; Ashley OOO 3 weeks; when she returns, schedule a Riley+Ashley+Anderson three-way to align on Jan 2027 renewal (Enterprise segment, $78K ARR). Riley flagged "let us know if any red flags" &mdash; positive tone but worth the pre-renewal touch.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0914-4')?'done':''}" data-csm="pam" id="action-0914-4">
      <div class="action-checkbox ${doneActions.has('0914-4')?'checked':''}" onclick="toggleAction('0914-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; ADP &mdash; Continue Buyer&rsquo;s Choice review-gen cadence via customer advocacy program</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Pam Huck &middot; ADP already qualified for Buyer&rsquo;s Choice (Nov 10 announce). Program period runs through mid-October &mdash; keep the customer advocacy program pushing steady reviews so no last-minute scramble. Follow up on the flagged short-word-count review that&rsquo;s being re-worked.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0914-5')?'done':''}" data-csm="all" id="action-0914-5">
      <div class="action-checkbox ${doneActions.has('0914-5')?'checked':''}" onclick="toggleAction('0914-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; CSM team &mdash; Manual Vitally log for 4 inferred + 14 no-recording calls</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam (Microsoft SFTP), Rani (Cisco WarRoom, NetApp), Andy (ADP duplicate, SecureWorks), Atisha (Airtel &times;2, Intel weekly, Intel Placeholder), Nick (Softcat &times;3, NICE &times;2, TrustRadius &amp; Infor &times;2) &middot; Transcripts missing or recordings absent for these events. Rani&rsquo;s Cisco WarRoom in particular matters (Cisco renewal Oct 6, pulse is Poor) &mdash; capture outcomes and next steps in Vitally so the signal isn&rsquo;t lost.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0914-6')?'done':''}" data-csm="all" id="action-0914-6">
      <div class="action-checkbox ${doneActions.has('0914-6')?'checked':''}" onclick="toggleAction('0914-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Ops &mdash; Weflow sync backlog Day 8 (78%, regressed from 69% Sept 11)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Ops / Rishi &middot; No-transcript rate jumped back to 78% Sept 14 after improving to 69% Sept 11. Recovery did not hold through the weekend. Keep P0 open with Weflow support, escalate to product owner + Yuan/leadership. Consider standing up event-based inferred fallback report until sync is trustworthy.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}


// ============================================================
// Monday September 15, 2026
// ============================================================

function dayData_2026_09_15() {
  return {
    calls: [
      { ts: 'Sep 15 &middot; 2:00 AM', csm: 'nick', account: 'Lenovo',
        note: 'Secure PC PTB propensity model deep-dive with Batta Pruthvi (Lenovo) + Gavin Padden (HG DS): keyword→product/intent catalog mapping across SentinelOne, Absolute, LDO offerings for scoring grid',
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Nick + Gavin Padden (HG data science) walked Batta Pruthvi (Lenovo) column-by-column through the Secure PC Propensity-To-Buy scoring grid built from Lenovo\'s raw offering keywords (SentinelOne, Absolute, LDO). Framework: keywords map to HG product catalog + intent catalog with relevance scoring; ability to broaden signal via adjacent products (e.g., McAfee/Trellix, Fortinet, Symantec as endpoint-protection theme). This is the pre-work for a customer-shareable propensity model — output goes to Lenovo stakeholders. Ties to Lenovo\'s $695K ARR (per July 20 memory) and the Dec 2026 renewal window. Continuation of the propensity/scoring modeling stream Nick has been running (Aug 27 memory noted Lenovo propensity as an expansion signal).' },

      { ts: 'Sep 15 &middot; 8:00 AM', csm: 'divyam', account: 'Workhuman',
        note: 'TR Buyer\'s Choice + Top Rated award query meeting with Ethan Bukowiec; deadline extended to Oct 16 (announcement Nov); Workhuman got Top Rated 2026, needs 10 reviews (has 4) with 75%+ best-in for Buyer\'s Choice',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Ethan Bukowiec (Workhuman) requested clarity on which TR awards Workhuman is eligible for and how the new vs legacy vendor portal maps to award tracking. Divyam confirmed Workhuman got Top Rated 2026 (badges to be sent post-call) and is tracking to Buyer\'s Choice 2026 with the Oct 16 extended deadline. Current state: 4 reviews with 3 qualified for Buyer\'s Choice; need 10 reviews total, 75%+ saying "best in" (use / value for money / customer relationship). Reviews generated Apr–Sep count toward both Buyer\'s Choice AND Top Rated 2027. Ethan is running the campaign via Workhuman\'s customer advocacy team rather than TR-driven outreach. Ownership: Workhuman customer approvals now unblocked → cadence expected to improve.' },

      { ts: 'Sep 15 &middot; 11:00 AM', csm: 'divyam', account: 'BILL',
        note: 'MadKudu scoring bug (Sept 11 fix — accounts not repositioned after scoring change) + Clearbit vs SFDC data source hierarchy decision for industry/employee-size scoring inputs; Loom walk-through offered',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Divyam updated Eric Nguyen + Charles Hawkins on two open BILL tickets: (1) ICP fit analysis Level 2 delivered; (2) scoring-lower-than-expected root-caused as MadKudu bug (accounts not repositioned after scoring change) — fix landed Sept 11. Underlying model gap: MadKudu currently uses Clearbit as the third-party enrichment source for industry + employee-size and ignores SFDC values. Two remediation paths: (a) set SFDC as primary source (quick), (b) add fallback logic Clearbit→SFDC (slower, more precise). Divyam offered Loom walk-through with engineering support if Eric wants a deeper session. Eric confirmed Clearbit is directly connected to their Salesforce instance. Follow-up: BILL to pick a/b, HG engineering to schedule.' },

      { ts: 'Sep 15 &middot; 1:30 PM', csm: 'varun', account: 'BMC Software',
        note: 'Copilot 2.0 onboarding to BMC field/BDR teams: company context walk-through (products, competitors, intent topics), offering setup, integration path decoupled from user activation; Devin McCarthy (field seal team leads) new to the account',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Varun ran the new-Copilot demo for Louise Eekhof (BMC), Lindsay Saunders (BDR manager), Devin McCarthy (field sales team lead, new intro), and Mark Sweeney. Augie Buettner (HG AE) on the call. Old Copilot users auto-migrated to Copilot 2.0 access — no waiting for integrations (SFDC/ZoomInfo/S3) needed to start prospecting. Walked through: (1) auto-loaded BMC company context (products, competitors, intent topics from domain — Lindsay flagged irrelevant Helix products for admin cleanup); (2) offerings model (product + ICP + competitors + intent + industry bundle used for prospecting); (3) admin vs end-user controls. Louise asked for guidance on how sales plays + playbooks fit in; homework tied to the next call. Integration completion still in flight in background to unlock richer signals — Varun to send the recording link plus company-context edit doc.' },
    ],
    pulses: [
      { csm:'nick', health:'Healthy', account:'Lenovo',
        opp:'Vitally Pulse &mdash; Sep 15 Call',
        arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
        change:'Sep 15 &middot; Propensity Model Deep-Dive',
        excerpt:'9/15 NJ: 60 min Secure PC PTB propensity model walkthrough with Batta Pruthvi (Lenovo) + Gavin Padden (HG DS) at 2 AM PT. Keyword→product/intent catalog mapping across SentinelOne, Absolute, LDO offerings. Output goes to Lenovo stakeholders as customer-shareable model. Ties to $695K ARR + Dec 2026 renewal.' },

      { csm:'divyam', health:'Healthy', account:'Workhuman',
        opp:'Vitally Pulse &mdash; Sep 15 Call',
        arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
        change:'Sep 15 &middot; TR Awards Alignment',
        excerpt:'9/15 DD: 30 min TR Buyer\'s Choice + Top Rated query meeting with Ethan Bukowiec (Workhuman) at 8 AM PT. Workhuman got Top Rated 2026; needs 4→10 reviews with 75%+ best-in for Buyer\'s Choice by Oct 16 extended deadline. Ethan running campaign via internal customer advocacy team, unblocked internally.' },

      { csm:'divyam', health:'Healthy', account:'BILL',
        opp:'Vitally Pulse &mdash; Sep 15 Call',
        arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
        change:'Sep 15 &middot; Scoring Bug Fix + Data Source Decision',
        excerpt:'9/15 DD: 30 min BILL weekly sync with Eric Nguyen + Charles Hawkins at 11 AM PT. MadKudu bug fixed Sept 11 (accounts not repositioned after scoring change). Open decision: Clearbit vs SFDC as primary source for industry + employee-size scoring inputs — two paths on the table, engineering follow-up scheduled.' },

      { csm:'varun', health:'Healthy', account:'BMC Software',
        opp:'Vitally Pulse &mdash; Sep 15 Call',
        arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
        change:'Sep 15 &middot; Copilot 2.0 Onboarding',
        excerpt:'9/15 VT: 30 min Copilot 2.0 onboarding to BMC field/BDR teams (Louise Eekhof, Lindsay Saunders, Devin McCarthy new intro, Mark Sweeney) at 1:30 PM PT. Old users auto-migrated; no integration blocker to start prospecting. Company context walkthrough + offerings setup; sales plays/playbooks homework tied to next call.' },
    ],
  };
}

function dayMeta_2026_09_15() {
  return {
    pills: [
      ['dot-teal',   '4 Calls'],
      ['dot-amber',  '3 Expansion'],
      ['dot-green',  '4 Vitally Pulses'],
      ['dot-grey',   'Mon Sep 15 &middot; 99 scanned &middot; 79% no-transcript'],
    ],
    tabs: ['Overview', 'Calls (4)', 'Pulses (4)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_09_15() {
  return `<div class="section-label">Team Activity &mdash; Monday September 15, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Mon Sep 15 &mdash; 99 recordings scanned</strong> via SFDC SOQL &middot; <strong>4 confirmed calls</strong> across 3 CSMs (Nick, Divyam x2, Varun) &middot; 0 Concerning &middot; 3 Expansion (Lenovo propensity, BMC Copilot 2.0 onboarding, Workhuman Buyer\'s Choice) &middot; 1 Issue-resolved thread (BILL MadKudu bug fixed Sept 11).
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 8 &mdash; regressing:</strong> 79% no-transcript rate (up from 69% Sept 11). Trajectory: Sep 2 71% &rarr; Sep 3 75% &rarr; Sep 4 76% &rarr; Sep 8 72% &rarr; Sep 9 75% &rarr; Sep 10 85% &rarr; Sep 11 69% &rarr; <strong>Sep 15 79%</strong>. Recovery from Sep 10 peak was partial; sync is NOT back to baseline. 7 CSM-owned events with recordings had no transcript (Varun&times;workspan + Pegasystems renewal, Pam&times;HG Insights, Atisha&times;Apple + PANW renewal, Rani&times;AppD, Riley&times;SAP) &mdash; inferred only.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion threads:</strong> Lenovo Secure PC PTB propensity model (Nick, ties to Dec 2026 renewal / $695K ARR); BMC Copilot 2.0 rollout to field teams (Varun, new Devin McCarthy intro); Workhuman Buyer\'s Choice 2026 review-gen (Divyam, Oct 16 extended deadline).
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo (Secure PC PTB propensity model deep-dive with Gavin Padden / HG DS)</div>
    </div>

    <div class="csm-card has-calls" data-csm="divyam">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workhuman (Buyer\'s Choice + Top Rated award query, Oct 16 deadline) &middot; BILL (MadKudu bug fix + Clearbit vs SFDC source decision)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">BMC Software (Copilot 2.0 onboarding to field/BDR teams, Devin McCarthy new intro) &middot; workspan 6:30 AM + Pegasystems 7:30 AM (no transcript)</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events (Workday monthly sync x2 no recording, AppD 10 AM inferred only) &mdash; sync backlog</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events (SAP 10:30 AM inferred only, Quadient TR biweekly no recording, Piano 3 PM no recording)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (HG Insights 8 AM inferred only &mdash; likely internal, Epicor 10:30 AM no recording)</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Apple 8:30 AM inferred only, PANW Central Analy2027 renewal 10:30 AM inferred only)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events (Veracode HG Insights x2 8:30 AM) &mdash; no recordings synced</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_15() {
  return `<div class="section-label">Confirmed Calls &mdash; Monday September 15, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>7 CSM events had recordings with no transcript</strong> &mdash; inferred from event ownership only: Varun&times;workspan (6:30 AM), Varun&times;Pegasystems renewal (7:30 AM), Pam&times;HG Insights (8 AM, likely internal), Atisha&times;Apple (8:30 AM), Rani&times;AppD (10 AM), Atisha&times;PANW Central Analy2027 renewal (10:30 AM), Riley&times;SAP (10:30 AM). Additionally, 9 CSM events had no recording at all (Nick&times;Visionet biweekly, Divyam&times;Adobe GTM Tool Review, Varun&times;Unum biweekly, Rani&times;Workday monthly, Andy&times;Veracode, Pam&times;Epicor, Divyam&times;Quadient TR biweekly [co-w/Riley], Varun&times;SentinelOne monthly, Divyam&times;Dynatrace query meeting, Riley&times;Piano).
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F4CC; <strong>Note on Varun/BMC call:</strong> SFDC linked the recording to a Veritas Technologies event, but the transcript is unambiguously BMC Software (Louise Eekhof, Lindsay Saunders, Devin McCarthy, Mark Sweeney all BMC). Reporting as BMC Software based on speaker/transcript truth.
  </div>`;
}

function dayPulsesHTML_2026_09_15() {
  const cards = [
    { csm:'nick', health:'Healthy', account:'Lenovo', opp:'Vitally Pulse &mdash; Sep 15 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Sep 15 &middot; Propensity Model Deep-Dive',
      excerpt:'9/15 NJ: 60 min Secure PC PTB propensity model walkthrough with Batta Pruthvi (Lenovo) + Gavin Padden (HG DS) at 2 AM PT. Keyword→product/intent catalog mapping across SentinelOne, Absolute, LDO offerings. Output goes to Lenovo stakeholders as customer-shareable model. Ties to $695K ARR + Dec 2026 renewal.' },
    { csm:'divyam', health:'Healthy', account:'Workhuman', opp:'Vitally Pulse &mdash; Sep 15 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Sep 15 &middot; TR Awards Alignment',
      excerpt:'9/15 DD: 30 min TR Buyer\'s Choice + Top Rated query meeting with Ethan Bukowiec (Workhuman) at 8 AM PT. Workhuman got Top Rated 2026; needs 4→10 reviews with 75%+ best-in for Buyer\'s Choice by Oct 16 extended deadline. Ethan running campaign via internal customer advocacy team, unblocked internally.' },
    { csm:'divyam', health:'Healthy', account:'BILL', opp:'Vitally Pulse &mdash; Sep 15 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Sep 15 &middot; Scoring Bug Fix + Data Source Decision',
      excerpt:'9/15 DD: 30 min BILL weekly sync with Eric Nguyen + Charles Hawkins at 11 AM PT. MadKudu bug fixed Sept 11 (accounts not repositioned after scoring change). Open decision: Clearbit vs SFDC as primary source for industry + employee-size scoring inputs — two paths on the table, engineering follow-up scheduled.' },
    { csm:'varun', health:'Healthy', account:'BMC Software', opp:'Vitally Pulse &mdash; Sep 15 Call',
      arr:'Enterprise &middot; Varun Tiwari', csmlbl:'Varun Tiwari',
      change:'Sep 15 &middot; Copilot 2.0 Onboarding',
      excerpt:'9/15 VT: 30 min Copilot 2.0 onboarding to BMC field/BDR teams (Louise Eekhof, Lindsay Saunders, Devin McCarthy new intro, Mark Sweeney) at 1:30 PM PT. Old users auto-migrated; no integration blocker to start prospecting. Company context walkthrough + offerings setup; sales plays/playbooks homework tied to next call.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-size:13px;font-weight:600;color:#e2e8f0;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_09_15() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0915-1')?'done':''}" data-csm="nick" id="action-0915-1">
      <div class="action-checkbox ${doneActions.has('0915-1')?'checked':''}" onclick="toggleAction('0915-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Lenovo &mdash; Finalize Secure PC PTB propensity model for stakeholder share</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Gavin Padden to finalize keyword→product/intent catalog matching + relevance scoring for SentinelOne + Absolute + LDO offerings. Duplicate keywords across matched products (Batta requested for column c/g alignment). Deliverable: customer-shareable propensity model deck. Ties to Dec 2026 renewal ($695K ARR) and prior Aug 27 Lenovo propensity thread.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0915-2')?'done':''}" data-csm="divyam" id="action-0915-2">
      <div class="action-checkbox ${doneActions.has('0915-2')?'checked':''}" onclick="toggleAction('0915-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Workhuman &mdash; Send Top Rated 2026 + Buyer\'s Choice badge assets</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan &middot; Post-call: send Ethan Bukowiec digital-asset links for Top Rated 2026 badges (existing win) + Buyer\'s Choice badges once earned. Ethan updating website + marketing materials, wants current-year assets. Track: 10 reviews target with 75%+ best-in language by Oct 16 (currently at 4 reviews, 3 qualified).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0915-3')?'done':''}" data-csm="divyam" id="action-0915-3">
      <div class="action-checkbox ${doneActions.has('0915-3')?'checked':''}" onclick="toggleAction('0915-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F527; BILL &mdash; Clearbit vs SFDC scoring source decision + Loom walk-through</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan &middot; BILL to pick (a) SFDC as primary source [quick] or (b) Clearbit→SFDC fallback logic [slower, more precise] for industry + employee-size scoring inputs. Divyam to schedule engineering-support session (Loom + live) once BILL confirms path. MadKudu Sept 11 fix already resolved account-repositioning bug.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0915-4')?'done':''}" data-csm="varun" id="action-0915-4">
      <div class="action-checkbox ${doneActions.has('0915-4')?'checked':''}" onclick="toggleAction('0915-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; BMC Software &mdash; Copilot 2.0 admin cleanup + integration completion</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; Send Louise Eekhof (1) recording link + (2) company-context edit doc so BMC admin can strip irrelevant Helix products from auto-loaded context (Lindsay flagged). Continue Copilot 2.0 rollout in background while integration (SFDC/ZoomInfo/S3) completes to unlock richer signals. Devin McCarthy (field seal team lead) newly introduced — get him on the recurring cadence.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0915-5')?'done':''}" data-csm="all" id="action-0915-5">
      <div class="action-checkbox ${doneActions.has('0915-5')?'checked':''}" onclick="toggleAction('0915-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; CSM team &mdash; Manual Vitally log for 7 inferred + 10 no-recording calls</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun (workspan, Pegasystems Users 2026 renewal, Unum biweekly, SentinelOne monthly), Pam (HG Insights, Epicor), Atisha (Apple, PANW Central Analy2027 renewal), Rani (AppD, Workday monthly x2), Riley (SAP, Quadient TR biweekly, Piano), Divyam (Adobe GTM Tool Review, Quadient TR co-w/Riley, Dynatrace query meeting), Nick (Visionet biweekly), Andy (Veracode) &middot; Log outcomes + next steps in Vitally today so nothing is lost while Weflow sync remains degraded. Pegasystems renewal + PANW renewal + Apple/AppD/Workday all warrant capture.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0915-6')?'done':''}" data-csm="all" id="action-0915-6">
      <div class="action-checkbox ${doneActions.has('0915-6')?'checked':''}" onclick="toggleAction('0915-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Ops &mdash; Weflow sync backlog Day 8 (79%, regressing from 69%)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops / Rishi &middot; No-transcript rate jumped from 69% Sept 11 to 79% Sept 15 &mdash; recovery reversed. Sep 2 71% &rarr; Sep 3 75% &rarr; Sep 4 76% &rarr; Sep 8 72% &rarr; Sep 9 75% &rarr; Sep 10 85% &rarr; Sep 11 69% &rarr; Sep 15 79%. This is not a transient backlog — escalate to Weflow product owner + inform Yuan/leadership. Consider standing up a lighter-touch fallback (event-based inferred report) until sync is trustworthy.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}


// ============================================================
// Wednesday September 16, 2026
// ============================================================








// ============================================================
// Thursday September 17, 2026
// ============================================================

function dayData_2026_09_17() {
  return {
    calls: [
      { ts: 'Sep 17 &middot; 12:15 AM', csm: 'divyam', account: 'Xero',
        note: 'Xero Monthly Sync w/ Andrea Gonzalez (EMEA time slot) &mdash; payment cleared Sept 11; walkthrough of Crawl Analytics Cache now available in vendor portal (LLM stats surfaced from Looker to portal, scheduling supported)',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam ran the monthly TrustRadius sync with Andrea Gonzalez (Xero, EMEA). Payment cleared Sept 11 &mdash; Divyam to confirm on HG side. Andrea flagged no issues but limited TR usage this cycle due to competing campaign priorities. Divyam walked through the Crawl Analytics Cache: the LLM-stats dashboard (how prospects find Xero via LLMs, competitor pricing/product visibility) has moved from internal Looker to the vendor portal, with weekly/monthly/quarterly views and scheduled delivery.' },

      { ts: 'Sep 17 &middot; 10:00 AM', csm: 'rani', account: 'Google Inc.',
        note: 'Google Renewal Discussion w/ Mark Fell (HG) + Natalia Pereira Fritz (Google procurement, xWF) &mdash; expansion pitch away from like-for-like: 10M&rarr;55M org universe, new AI-driven analytics + UI, credit-based licensing; 15&ndash;20-user free-trial pilot proposed; Monday on-site with Lawrence + Noah Rowitz',
        mins: 60, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Rani + Mark Fell on with Natalia (Google procurement) ahead of Monday&rsquo;s on-site with Lawrence + Noah Rowitz + Mark&rsquo;s leadership team in the Bay Area. Mark framed the ask: current 3-year agreement was for a &ldquo;rich slice&rdquo; but HG data has matured &mdash; 10M orgs then vs 55M today, new AI-driven analytics, new UI, credit-based licensing. Goal: reframe December renewal away from like-for-like toward capability-based negotiation. Natalia is under Google procurement mandate to move renewals to credit/token-based licensing, wants pilot to model consumption fixes. Proposed: 15&ndash;20 pilot users representative across Rebecca Sanders&rsquo; team, Pramod&rsquo;s org, APAC/LatAm startup segments. Mark: &ldquo;let&rsquo;s give them the entire cart&rdquo; (Market Analyzer, GSI, ISV, AI sales copilot, VDR) for a free trial with biweekly feedback so both sides can prioritize. Rani to work with Roo Heat on training + product feedback loop.' },

      { ts: 'Sep 17 &middot; 10:30 AM', csm: 'pam', account: 'ZoomInfo',
        note: 'ZoomInfo TR sync w/ Russell Martin &mdash; product-profile merges (Chorus still standalone pending go-to-market clarity, NeverBounce awaiting response), Buyer&rsquo;s Choice qualification for GTM AI new product',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Pam met Russell for the TrustRadius sync. Product-profile merges: several completed, Chorus staying standalone until ZoomInfo publicly clarifies GTM strategy, NeverBounce still awaiting response. Buyer&rsquo;s Choice qualification: ZoomInfo qualified for Studio + Workspace products; GTM AI is brand new (1 G2 review) so Pam and Russell agreed likely too early for the mid-October 16 deadline but Russell to check with the GTM AI team for willing reviewers. Pam offered to create tracking link + can help with review sourcing lists if Russell provides.' },

      { ts: 'Sep 17 &middot; 11:00 AM', csm: 'divyam', account: 'Workhuman',
        note: 'Workhuman Monthly Cadence w/ Ethan Bukowiec &mdash; Buyer&rsquo;s Choice review campaign strategy (30 days to Oct 16 deadline); Workhuman to manage all future review campaigns internally via Pendo (privacy policy driven, no HG-side outreach)',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Divyam and Ethan aligned on Buyer&rsquo;s Choice review-gen path. Ethan met with Sophia (Workhuman CE) yesterday: Workhuman will manage all review-campaign outreach internally &mdash; either through their Workhuman ecosystem communications or via Pendo automated workflows &mdash; not through HG-driven campaigns. Reason: privacy policy + CE-team comfort with customer-list sharing. Divyam confirmed she&rsquo;ll continue to provide campaign links; short-term and long-term posture is that Workhuman handles outreach in-house. 30 days to Oct 16 Buyer&rsquo;s Choice deadline; Workhuman expects to hit review quota without issue.' },
    ],
    pulses: [
      { csm:'divyam', health:'Healthy', account:'Xero',
        opp:'Vitally Pulse &mdash; Sep 17 Call',
        arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
        change:'Sep 17 &middot; Payment + Crawl Analytics',
        excerpt:'9/17 DD: 30 min Xero Monthly Sync (12:15 AM PT EMEA slot) w/ Andrea Gonzalez. Payment cleared Sept 11 &mdash; Divyam to confirm on HG side. Crawl Analytics Cache walkthrough: LLM stats now on vendor portal (previously Looker only) with scheduled delivery.' },
      { csm:'rani', health:'Healthy', account:'Google Inc.',
        opp:'Vitally Pulse &mdash; Sep 17 Call',
        arr:'Strategic &middot; Rani Guy', csmlbl:'Rani Guy',
        change:'Sep 17 &middot; Renewal Reframe + Pilot',
        excerpt:'9/17 RG+MF: 60 min Google Renewal Discussion (10 AM PT) w/ Natalia Pereira Fritz (procurement, xWF). HG pitching expansion beyond like-for-like: 10M&rarr;55M org universe, new AI-driven analytics + UI, credit-based licensing. 15&ndash;20-user free-trial pilot proposed. Monday on-site with Lawrence + Noah Rowitz + HG leadership. December renewal execution track parallel.' },
      { csm:'pam', health:'Healthy', account:'ZoomInfo',
        opp:'Vitally Pulse &mdash; Sep 17 Call',
        arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck',
        change:'Sep 17 &middot; Profile Merges + Buyer&rsquo;s Choice',
        excerpt:'9/17 PH: 30 min ZoomInfo TR sync (10:30 AM PT) w/ Russell Martin. Profile merges: Chorus standalone pending GTM clarity, NeverBounce awaiting response. Buyer&rsquo;s Choice: qualified for Studio + Workspace; GTM AI brand new (1 G2 review) likely too early for Oct 16 deadline but Russell to check with GTM AI team.' },
      { csm:'divyam', health:'Healthy', account:'Workhuman',
        opp:'Vitally Pulse &mdash; Sep 17 Call',
        arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
        change:'Sep 17 &middot; Review Campaigns Internal',
        excerpt:'9/17 DD: 30 min Workhuman Monthly Cadence (11 AM PT) w/ Ethan Bukowiec. Confirmed Workhuman will manage all review-gen internally via their ecosystem or Pendo automated workflows (privacy policy + CE-team preference). Divyam continues to provide campaign links. Oct 16 Buyer&rsquo;s Choice deadline &mdash; Workhuman on track to hit quota.' },
    ],
  };
}

function dayMeta_2026_09_17() {
  return {
    pills: [
      ['dot-teal',   '4 Calls'],
      ['dot-amber',  '1 Expansion'],
      ['dot-green',  '4 Vitally Pulses'],
      ['dot-grey',   'Thu Sep 17 &middot; 96 scanned &middot; 84% no-transcript'],
    ],
    tabs: ['Overview', 'Calls (4)', 'Pulses (4)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_09_17() {
  return `<div class="section-label">Team Activity &mdash; Thursday September 17, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thu Sep 17 &mdash; 96 recordings scanned</strong> via SFDC SOQL &middot; <strong>4 confirmed customer calls</strong> (Divyam &times;2, Rani &times;1, Pam &times;1) &middot; 0 Concerning &middot; 1 Expansion (Google renewal reframe with 15&ndash;20-user pilot ahead of Monday on-site).
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F6A8; <strong>Weflow sync backlog Day 11 &mdash; SEVERE:</strong> 84% no-transcript rate on Sept 17 (improved marginally from 92% Sept 16 but still severe). Trajectory: Sep 2 71% &rarr; Sep 10 85% &rarr; Sep 11 69% &rarr; Sep 14 78% &rarr; Sep 15 79% &rarr; Sep 16 92% &rarr; <strong>Sep 17 84%</strong>. 16 CSM-owned recordings had no transcript today &mdash; largest cluster on Pam (F5 GEO/LLM Demo 1 PM 60 min &times;2 slots) and Divyam (Safaricom, Sage, Dynatrace). 24 CSM events had no recording at all. Escalation to Weflow support + Yuan/leadership still warranted.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion:</strong> Google (Rani + Mark Fell) &mdash; renewal-discussion prep for Monday&rsquo;s on-site with Lawrence + Noah Rowitz. HG pitching expansion beyond like-for-like: 10M&rarr;55M org universe, new AI-driven analytics + UI, credit-based licensing. 15&ndash;20-user free-trial pilot proposed (Market Analyzer + GSI + ISV + AI sales copilot + VDR) with biweekly feedback loop. Natalia (Google procurement) under mandate to shift renewals to credit/token licensing.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="divyam">
      <span class="call-badge">2 CALLS</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">2</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">2</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Xero (Monthly TR sync &mdash; payment cleared Sept 11, Crawl Analytics Cache walkthrough) &middot; Workhuman (Monthly cadence &mdash; review campaigns internal via Pendo, Oct 16 Buyer&rsquo;s Choice on track)</div>
    </div>

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Google Inc. (Renewal Discussion &mdash; expansion reframe pre-Monday on-site w/ Lawrence + Noah Rowitz; 15&ndash;20-user pilot proposed; credit-based licensing mandate)</div>
    </div>

    <div class="csm-card has-calls" data-csm="pam">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ZoomInfo (TR sync &mdash; profile merges Chorus/NeverBounce, Buyer&rsquo;s Choice GTM AI qualification too early) &middot; 4 unconfirmed w/ recordings: ZoomInfo 2nd-slot 10:30 AM, Oracle NetSuite 11 AM, F5 GEO/LLM Demo 1 PM &times;2 slots</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 recording no transcript (SAP Events Sync 10:30 AM). No other CSM events</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 recording no transcript (Intuit/Blackbaud sync 9:30 AM) &middot; 3 events no recording (Infinigate biweekly, Sage biweekly, +1)</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">4 recordings no transcript (DXC Renewal Planning 6:30 AM &times;2 slots, MongoDB 8 AM, Iron Mountain biweekly 12:30 PM) &middot; 4 events no recording (Insight sync &times;2, IFS quarterly 8 AM, Insight Marketing)</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 recordings no transcript (Insight Direct biweekly 7 AM, Arben/Atisha 11:30 AM) &middot; 4 events no recording (Kong Weekly Sync &times;2, Saviynt monthly 10 AM, Kyndryl MCP office hours 11:30 AM)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 recording no transcript (Evapure/Pure Storage biweekly 4:30 AM) &middot; 1 event no recording (Sage biweekly 6:30 AM)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_17() {
  return `<div class="section-label">Confirmed Calls &mdash; Thursday September 17, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>16 CSM-owned recordings had no transcript</strong> &mdash; inferred from CSM event ownership only, not speaker-verified. Notable: Pam&times;F5 GEO/LLM Demo (1 PM PT, 60 min, 2 slots &mdash; expansion-adjacent demo topic); Nick&times;Intuit/Blackbaud (9:30 AM); Varun&times;DXC Renewal Planning + New Platform Walkthrough (6:30 AM, 2 slots); Divyam&times;Safaricom biweekly (4 AM); Andy&times;Evapure/Pure Storage biweekly (4:30 AM). 24 additional CSM events had no recording at all.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F551; <strong>EMEA time slot:</strong> Divyam&times;Xero (12:15 AM PT) is the morning-EMEA slot for Andrea Gonzalez (Xero, likely Europe based on weather references). Real customer call &mdash; not a false positive.
  </div>`;
}

function dayPulsesHTML_2026_09_17() {
  const cards = [
    { csm:'divyam', health:'Healthy', account:'Xero',
      opp:'Vitally Pulse &mdash; Sep 17 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Sep 17 &middot; Payment + Crawl Analytics',
      excerpt:'9/17 DD: 30 min Xero Monthly Sync (12:15 AM PT EMEA slot) w/ Andrea Gonzalez. Payment cleared Sept 11 &mdash; Divyam to confirm on HG side. Crawl Analytics Cache walkthrough: LLM stats now on vendor portal (previously Looker only) with scheduled delivery.' },
    { csm:'rani', health:'Healthy', account:'Google Inc.',
      opp:'Vitally Pulse &mdash; Sep 17 Call',
      arr:'Strategic &middot; Rani Guy', csmlbl:'Rani Guy',
      change:'Sep 17 &middot; Renewal Reframe + Pilot',
      excerpt:'9/17 RG+MF: 60 min Google Renewal Discussion (10 AM PT) w/ Natalia Pereira Fritz (procurement, xWF). HG pitching expansion beyond like-for-like: 10M&rarr;55M org universe, new AI-driven analytics + UI, credit-based licensing. 15&ndash;20-user free-trial pilot proposed. Monday on-site with Lawrence + Noah Rowitz + HG leadership. December renewal execution track parallel.' },
    { csm:'pam', health:'Healthy', account:'ZoomInfo',
      opp:'Vitally Pulse &mdash; Sep 17 Call',
      arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck',
      change:'Sep 17 &middot; Profile Merges + Buyer&rsquo;s Choice',
      excerpt:'9/17 PH: 30 min ZoomInfo TR sync (10:30 AM PT) w/ Russell Martin. Profile merges: Chorus standalone pending GTM clarity, NeverBounce awaiting response. Buyer&rsquo;s Choice: qualified for Studio + Workspace; GTM AI brand new (1 G2 review) likely too early for Oct 16 deadline but Russell to check with GTM AI team.' },
    { csm:'divyam', health:'Healthy', account:'Workhuman',
      opp:'Vitally Pulse &mdash; Sep 17 Call',
      arr:'Enterprise &middot; Divyam Dewan', csmlbl:'Divyam Dewan',
      change:'Sep 17 &middot; Review Campaigns Internal',
      excerpt:'9/17 DD: 30 min Workhuman Monthly Cadence (11 AM PT) w/ Ethan Bukowiec. Confirmed Workhuman will manage all review-gen internally via their ecosystem or Pendo automated workflows (privacy policy + CE-team preference). Divyam continues to provide campaign links. Oct 16 Buyer&rsquo;s Choice deadline &mdash; Workhuman on track to hit quota.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-size:13px;font-weight:600;color:#e2e8f0;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_09_17() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0917-1')?'done':''}" data-csm="rani" id="action-0917-1">
      <div class="action-checkbox ${doneActions.has('0917-1')?'checked':''}" onclick="toggleAction('0917-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Google &mdash; Deliver 12-month credit-consumption telemetry to Natalia + identify 15&ndash;20 pilot users pre-Monday on-site</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Rani to pull month-over-month credit usage across data feed + platform users (FAI, spend, install counts) and share with Natalia so procurement can model consumption for the new credit/token licensing model. Also identify 15&ndash;20 pilot users representative across Rebecca Sanders&rsquo; team, Pramod&rsquo;s org, APAC/LatAm startup segments &mdash; Mark wants a broad free-trial (Market Analyzer + GSI + ISV + AI sales copilot + VDR) with biweekly feedback. Deliver before Monday&rsquo;s on-site with Lawrence + Noah Rowitz.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0917-2')?'done':''}" data-csm="pam" id="action-0917-2">
      <div class="action-checkbox ${doneActions.has('0917-2')?'checked':''}" onclick="toggleAction('0917-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; ZoomInfo &mdash; Follow up on NeverBounce merge + GTM AI Buyer&rsquo;s Choice reviews</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck &middot; NeverBounce profile merge is still awaiting response &mdash; chase down. Chorus stays standalone until ZoomInfo publicly clarifies GTM strategy. GTM AI (1 G2 review) likely too early for Oct 16 Buyer&rsquo;s Choice deadline but Russell to check with GTM AI team for willing reviewers; Pam ready with tracking link + list-sourcing support if useful.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0917-3')?'done':''}" data-csm="divyam" id="action-0917-3">
      <div class="action-checkbox ${doneActions.has('0917-3')?'checked':''}" onclick="toggleAction('0917-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Xero &mdash; Confirm Sept 11 payment on HG side + share Crawl Analytics Cache scheduled report</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Divyam Dewan &middot; Divyam to check with HG finance that Xero&rsquo;s Sept 11 payment landed; if not, loop back with Andrea to trace via her accounting team. Set up Crawl Analytics Cache scheduled delivery for Andrea (weekly cadence with LLM stats + competitor visibility).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0917-4')?'done':''}" data-csm="divyam" id="action-0917-4">
      <div class="action-checkbox ${doneActions.has('0917-4')?'checked':''}" onclick="toggleAction('0917-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Workhuman &mdash; Continue providing campaign links; monitor Oct 16 Buyer&rsquo;s Choice quota</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Divyam Dewan &middot; Workhuman managing outreach internally via Workhuman ecosystem + Pendo automated workflows (privacy policy driven). Divyam continues to provide campaign links + monitor review count over the next 30 days. Ethan expects to hit quota without issue.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0917-5')?'done':''}" data-csm="all" id="action-0917-5">
      <div class="action-checkbox ${doneActions.has('0917-5')?'checked':''}" onclick="toggleAction('0917-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; CSM team &mdash; Manual Vitally log for 16 inferred (no-transcript) + 24 no-recording events</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Pam (F5 GEO/LLM Demo &times;2 &mdash; expansion-adjacent, Oracle NetSuite TR, ZoomInfo 2nd-slot), Divyam (Safaricom, Sage, Dynatrace, Adobe &times;3, Lumen &times;2, Paycor), Varun (DXC Renewal &times;2, MongoDB, Iron Mountain, Insight &times;2, IFS quarterly), Atisha (Insight Direct, Arben, Kong &times;2, Saviynt, Kyndryl MCP office hours), Nick (Intuit/Blackbaud, Infinigate, Sage), Andy (Evapure/Pure Storage biweekly, Sage biweekly), Riley (SAP Events Sync) &middot; Weflow sync still at 84% no-transcript on Sept 17 means the daily scan continues to be materially incomplete. Highest priority for manual logging: Pam&times;F5 GEO/LLM Demo (expansion topic!), Varun&times;DXC Renewal (new-platform walkthrough tied to 2026 renewal), Rani/Divyam-adjacent renewal chains (Sage, Safaricom, Adobe RGIP migration, Lumen).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0917-6')?'done':''}" data-csm="all" id="action-0917-6">
      <div class="action-checkbox ${doneActions.has('0917-6')?'checked':''}" onclick="toggleAction('0917-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Ops &mdash; Weflow sync backlog Day 11 (84%, still severe) &mdash; open Vercel fallback discussion</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops / Rishi / Yuan &middot; No-transcript rate improved marginally from 92% Sept 16 to 84% Sept 17 but still severe. Trajectory: Sep 10 85% &rarr; Sep 11 69% &rarr; Sep 14 78% &rarr; Sep 15 79% &rarr; Sep 16 92% &rarr; <strong>Sep 17 84%</strong>. Not resolving reliably. Weflow product escalation still open. Recommend spinning up event-based inferred fallback report (attribute by CSM event ownership + calendar signal, mark as lower-confidence) so the engagement view isn&rsquo;t blind while Weflow stabilizes.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}


// ============================================================
// Friday September 18, 2026
// ============================================================

function dayData_2026_09_18() {
  return {
    calls: [
      { ts: 'Sep 18 &middot; 8:00 AM', csm: 'atisha', account: 'INFUSE',
        note: 'INFUSE Demo &mdash; broad team walkthrough of HG platform (partnerships team, GTM strategy, deal desk, client success) run by Harry Chemla (new HG SE); expected follow-up: separate partnership-team session',
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Atisha co-attended a 60-min HG platform demo with Harry Chemla (new HG SE), Christopher Picanso (HG), and David Verwey (HG) for a broad INFUSE audience. INFUSE side: Petya Dolaptchieva + Mia Dragojlovic (Client Success), Kayla + Chris (GTM Strategy), Max + Connor + Ursula (Deal Desk), Josh + Maurice + Bianca (Partnerships). Petya framed the intro; Harry did the platform demo. Expected next step: separate follow-up session for the partnership team specifically to dive into what HG can do with INFUSE&rsquo;s partner program. INFUSE is not in the current Enterprise CSM account book but the demo puts them on the radar &mdash; classify as prospect/awareness engagement.' },

      { ts: 'Sep 18 &middot; 8:00 AM', csm: 'nick', account: 'Infor (US), LLC',
        note: 'Account-match review with Matt Meyer, Nicole Morgan, Prasanna (Infor) + Max Shaw (HG) &mdash; methodology deep-dive on ~500-account matching exercise from summer, framing quality vs completeness ahead of October renewal',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Nick (back this week from PTO) reconvened with Matt Meyer + Nicole Morgan + Prasanna (Infor) and Max Shaw (HG Solutions) for a match-review of the ~500-account file Infor sent earlier in the summer. Nicole framed two parallel exercises: (1) firmographic deep-dive on new data categories Infor will access post-October renewal, (2) data-quality assessment on the matched account file. Matt&rsquo;s concern: understand HG&rsquo;s matching methodology since Infor is D&B-hierarchy-heavy and matching quality drives whether technographic data is usable. Nick walked through raw match results and noted this is iterative &mdash; will send raw data for Infor to review over a few days, then iterate. Renewal-adjacent (October) so timeline matters &mdash; follows the Aug 3 Concerning signal on Infor renewal pricing/Bain model.' },
    ],
    pulses: [
      { csm:'atisha', health:'Healthy', account:'INFUSE',
        opp:'Vitally Pulse &mdash; Sep 18 Call',
        arr:'Prospect/Awareness &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
        change:'Sep 18 &middot; Platform Demo',
        excerpt:'9/18 AW: 60 min INFUSE Demo (8 AM PT). Broad INFUSE team demo led by Harry Chemla (new HG SE): Client Success + GTM Strategy + Deal Desk + Partnerships. Follow-up ask: separate partnership-team session. Not in current Enterprise book &mdash; classify as prospect/awareness.' },
      { csm:'nick', health:'Healthy', account:'Infor (US), LLC',
        opp:'Vitally Pulse &mdash; Sep 18 Call',
        arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
        change:'Sep 18 &middot; Match Review Pre-Renewal',
        excerpt:'9/18 NJ: 30 min Infor account-match review (8 AM PT) w/ Matt Meyer + Nicole Morgan + Prasanna + Max Shaw. Methodology deep-dive on the ~500-account summer file: quality vs completeness assessment ahead of October renewal. Iterative &mdash; Nick to send raw data for Infor review then iterate. Follows Aug 3 Concerning signal on Infor renewal pricing/Bain model.' },
    ],
  };
}

function dayMeta_2026_09_18() {
  return {
    pills: [
      ['dot-teal',   '2 Calls'],
      ['dot-green',  '2 Vitally Pulses'],
      ['dot-grey',   'Fri Sep 18 &middot; 66 scanned &middot; 71% no-transcript'],
    ],
    tabs: ['Overview', 'Calls (2)', 'Pulses (2)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_09_18() {
  return `<div class="section-label">Team Activity &mdash; Friday September 18, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Fri Sep 18 &mdash; 66 recordings scanned</strong> via SFDC SOQL &middot; <strong>2 confirmed customer calls</strong> (Atisha &times;1 INFUSE demo, Nick &times;1 Infor match review) &middot; 0 Concerning &middot; 0 Expansion &middot; Nick back from PTO Week 3 running Infor renewal-adjacent work.
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 12 &mdash; improving:</strong> 71% no-transcript rate on Sept 18 (down from 84% Sept 17, 92% Sept 16). Trajectory: Sep 10 85% &rarr; Sep 11 69% &rarr; Sep 14 78% &rarr; Sep 15 79% &rarr; Sep 16 92% &rarr; Sep 17 84% &rarr; <strong>Sep 18 71%</strong>. Approaching baseline but still elevated. 4 CSM-owned recordings had no transcript (Nick&times;Westcon 5:30 AM, Riley&times;SAP Ariba+Fieldglass 8 AM, Atisha&times;Apple biweekly 9 AM, Divyam&times;Cotality TR categories query 12:30 PM). 9 CSM events had no recording.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4A1; <strong>Light Friday:</strong> 14 CSM events scheduled today (lowest since Sept 10). Nick, Atisha, Divyam, Riley, Varun accounted for most of the calendar; Rani off (light Friday and prep for Monday&rsquo;s Google on-site).
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Infor (US) &mdash; account-match review pre-October renewal w/ Matt Meyer + Nicole Morgan + Prasanna + Max Shaw &middot; 1 unconfirmed: Westcon 5:30 AM (no transcript). Nick back from PTO Week 3.</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">60m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">INFUSE Demo (broad-team platform walkthrough co-led w/ Harry Chemla new HG SE + Christopher Picanso + David Verwey) &middot; 1 unconfirmed: Apple biweekly 9 AM &middot; 3 events no recording: Intel Platform Training 5:30 AM, AMD biweekly 9:30 AM, Apple Platform Training Team Call 12 PM</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 recording no transcript (SAP Ariba + Fieldglass TR 8 AM &mdash; inferred only)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 recording no transcript (Cotality Query Meeting &mdash; TrustRadius product categories 12:30 PM). 1 event no recording: Quadient biweekly 7:30 AM</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events on calendar &mdash; likely prep for Monday&rsquo;s Google on-site with Lawrence + Noah Rowitz + HG leadership</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event no recording: Zendesk biweekly 9 AM</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events on calendar today</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events on calendar today</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_18() {
  return `<div class="section-label">Confirmed Calls &mdash; Friday September 18, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>4 CSM-owned recordings had no transcript</strong> &mdash; inferred from CSM event ownership only: Nick&times;Westcon Install/Intent (5:30 AM), Riley&times;SAP Ariba + Fieldglass TR (8 AM), Atisha&times;Apple Bi-weekly Sync (9 AM), Divyam&times;Cotality TR Product Categories Query (12:30 PM). 9 additional CSM events had no recording at all.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F91D; <strong>Nick back from PTO Week 3:</strong> Nick Johnson returned this week (previously PTO Sept 1&ndash;Sept 10). Infor account-match review is renewal-adjacent (October renewal, follows Aug 3 Concerning signal). Nick also had Westcon Install + Intent discussion at 5:30 AM (no transcript).
  </div>`;
}

function dayPulsesHTML_2026_09_18() {
  const cards = [
    { csm:'atisha', health:'Healthy', account:'INFUSE',
      opp:'Vitally Pulse &mdash; Sep 18 Call',
      arr:'Prospect/Awareness &middot; Atisha Waghela', csmlbl:'Atisha Waghela',
      change:'Sep 18 &middot; Platform Demo',
      excerpt:'9/18 AW: 60 min INFUSE Demo (8 AM PT). Broad INFUSE team demo led by Harry Chemla (new HG SE): Client Success + GTM Strategy + Deal Desk + Partnerships. Follow-up ask: separate partnership-team session. Not in current Enterprise book &mdash; classify as prospect/awareness.' },
    { csm:'nick', health:'Healthy', account:'Infor (US), LLC',
      opp:'Vitally Pulse &mdash; Sep 18 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Sep 18 &middot; Match Review Pre-Renewal',
      excerpt:'9/18 NJ: 30 min Infor account-match review (8 AM PT) w/ Matt Meyer + Nicole Morgan + Prasanna + Max Shaw. Methodology deep-dive on the ~500-account summer file: quality vs completeness assessment ahead of October renewal. Iterative &mdash; Nick to send raw data for Infor review then iterate. Follows Aug 3 Concerning signal on Infor renewal pricing/Bain model.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-size:13px;font-weight:600;color:#e2e8f0;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_09_18() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0918-1')?'done':''}" data-csm="nick" id="action-0918-1">
      <div class="action-checkbox ${doneActions.has('0918-1')?'checked':''}" onclick="toggleAction('0918-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Infor &mdash; Send raw match-review data + iterate on methodology pre-October renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Send Nicole Morgan + Matt Meyer + Prasanna the raw match results for the ~500-account summer file. Give Infor a few days to review, then reconvene with additional matching approaches Nick can apply. Infor D&B-hierarchy-heavy so matching quality drives whether technographic data is usable post-renewal. October renewal timeline &mdash; follows Aug 3 Concerning signal on renewal pricing/Bain model, so keep momentum on the data-quality story to unblock renewal.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0918-2')?'done':''}" data-csm="atisha" id="action-0918-2">
      <div class="action-checkbox ${doneActions.has('0918-2')?'checked':''}" onclick="toggleAction('0918-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; INFUSE &mdash; Schedule follow-up partnership-team session; confirm account status in book</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela &middot; Petya asked for a separate deeper dive with the INFUSE Partnership team (Josh, Maurice, Bianca). INFUSE isn&rsquo;t in the current Enterprise CSM account book &mdash; check with sales / RevOps whether this is a live opportunity or a prospect-nurture engagement. If live, propose adding to book with an ownership decision.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0918-3')?'done':''}" data-csm="all" id="action-0918-3">
      <div class="action-checkbox ${doneActions.has('0918-3')?'checked':''}" onclick="toggleAction('0918-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; CSM team &mdash; Manual Vitally log for 4 inferred (no-transcript) + 9 no-recording events</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick (Westcon Install/Intent 5:30 AM &mdash; renewal 2028), Riley (SAP Ariba + Fieldglass TR 8 AM), Atisha (Apple biweekly 9 AM + Intel Platform Training 5:30 AM + AMD biweekly 9:30 AM + Apple Platform Training Team 12 PM), Divyam (Cotality TR Product Categories 12:30 PM + Quadient biweekly 7:30 AM), Varun (Zendesk biweekly 9 AM), Nick (Capgemini monthly &times;2 slots 3:30 AM + Infor onsite debrief check-ins 5 AM) &middot; Manual Vitally log for these so the signal isn&rsquo;t lost while Weflow sync recovers. Cotality TR categories query is worth capturing (part of the Cotality CVP + intent 2027 renewal path).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0918-4')?'done':''}" data-csm="rani" id="action-0918-4">
      <div class="action-checkbox ${doneActions.has('0918-4')?'checked':''}" onclick="toggleAction('0918-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Google &mdash; Final prep for Monday on-site with Lawrence + Noah Rowitz + HG leadership</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; Rani had no calendar events on Sept 18 &mdash; likely prep day for Monday&rsquo;s Google renewal on-site (from Sept 17 call: HG pitching expansion beyond like-for-like, 15&ndash;20-user free-trial pilot, credit/token licensing). Confirm 12-mo credit-consumption telemetry pulled + pilot-user shortlist ready across Rebecca Sanders&rsquo; team, Pramod&rsquo;s org, APAC/LatAm startups.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0918-5')?'done':''}" data-csm="all" id="action-0918-5">
      <div class="action-checkbox ${doneActions.has('0918-5')?'checked':''}" onclick="toggleAction('0918-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Ops &mdash; Weflow sync backlog Day 12 (71%, improving) &mdash; keep monitoring, hold P0 open</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Ops / Rishi &middot; No-transcript rate improved from 92% Sept 16 to 71% Sept 18 &mdash; recovery trajectory returning after the Day 10 severe spike. Trajectory: Sep 10 85% &rarr; Sep 11 69% &rarr; Sep 14 78% &rarr; Sep 15 79% &rarr; Sep 16 92% &rarr; Sep 17 84% &rarr; <strong>Sep 18 71%</strong>. Hold P0 open with Weflow support &mdash; if Monday returns to 40-50% baseline, close ticket with post-mortem; if the pattern regresses again, escalate to product owner + leadership.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}


// ============================================================
// Monday September 21, 2026
// ============================================================

function dayData_2026_09_21() {
  return {
    calls: [
      { ts: 'Sep 21 &middot; 9:00 AM', csm: 'nick', account: 'NTT Data Corporation',
        note: 'NTT Strategic Alliances onboarding &mdash; new EVP Murat Aksu (May start) drove introduction; Strategic Alliances team using HG data for "dirty dozen" partner cross-sell strategy (Microsoft/AWS/Google/SAP/Oracle/Salesforce/Databricks/Snowflake/OpenAI/Anthropic/NVIDIA); ~300 export request backlog + bulk export ask',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Nick ran a fresh onboarding for a new HG stakeholder inside NTT: Strategic Alliances / Partner Organization (within NTT&rsquo;s Client Growth Office). New EVP Murat Aksu joined in May and got apprised of HG via the Samol/mega-deals-team lead. This is a new use case for an existing account &mdash; historically NTT used HG via Naveen (data analytics) + Samol&rsquo;s mega-deals team; now Alliances wants a partner-lens view. Their "dirty dozen" partner list mirrors HG&rsquo;s top vendors (MS leading, then AWS/Google/SAP/Oracle/Salesforce/Databricks/Snowflake/OpenAI/Anthropic/NVIDIA). Use cases discussed: install-data + intensity multiplier (Toyota example: heavy AWS transformative partnership but MS-largest footprint due to Office), VMware take-out plays, product-description AI enrichment, industry-flavor tagging. Customer flagged ~300 export request backlog; asked whether bulk-export by geo/list is available. Nick walked through Titus example, Intent (visible not explorable at current tier), Contract tab (less useful than name implies). Location data + FAI both under-utilized. Renewal-adjacent: opportunity to package Alliances expansion + new licensing at renewal.' },
    ],
    pulses: [
      { csm:'nick', health:'Healthy', account:'NTT Data Corporation',
        opp:'Vitally Pulse &mdash; Sep 21 Call',
        arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
        change:'Sep 21 &middot; New Stakeholder + Expansion',
        excerpt:'9/21 NJ: 30 min NTT Strategic Alliances onboarding (9 AM PT). New EVP Murat Aksu (May start) triggered the intro; Alliances team now using HG for "dirty dozen" partner cross-sell strategy. ~300 export backlog + bulk export ask. Location data + FAI under-utilized. Renewal-adjacent expansion vector.' },
    ],
  };
}

function dayMeta_2026_09_21() {
  return {
    pills: [
      ['dot-teal',   '1 Call'],
      ['dot-amber',  '1 Expansion'],
      ['dot-green',  '1 Vitally Pulse'],
      ['dot-grey',   'Mon Sep 21 &middot; 65 scanned &middot; 78% no-transcript'],
    ],
    tabs: ['Overview', 'Calls (1)', 'Pulses (1)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_09_21() {
  return `<div class="section-label">Team Activity &mdash; Monday September 21, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Mon Sep 21 &mdash; 65 recordings scanned</strong> via SFDC SOQL &middot; <strong>1 confirmed customer call</strong> (Nick&times;NTT Strategic Alliances onboarding) &middot; 0 Concerning &middot; 1 Expansion (NTT new-stakeholder + partner-lens use case).
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 13 &mdash; slight regression:</strong> 78% no-transcript rate on Sept 21 (up from 71% Sept 18). Trajectory: Sep 10 85% &rarr; Sep 11 69% &rarr; Sep 14 78% &rarr; Sep 15 79% &rarr; Sep 16 92% &rarr; Sep 17 84% &rarr; Sep 18 71% &rarr; <strong>Sep 21 78%</strong>. Not resolving to baseline. 8 CSM-owned recordings had no transcript today &mdash; notably Pam&times;Microsoft Weekly Sync (11 AM 45m &mdash; Unified Support Renewal & Growth Sales Motion), Rani&times;HPE Cloud Dynamics Mapping (9:30 AM), Riley&times;Zscaler Leads Kickoff (10:30 AM), Divyam&times;BILL Weekly ×2 slots (10 AM). 11 CSM events had no recording.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion:</strong> NTT Data (Nick) &mdash; new stakeholder onboarding for NTT&rsquo;s Strategic Alliances / Partner Organization team (previously HG-inactive; new EVP Murat Aksu joined May). New use case: partner-lens cross-sell for "dirty dozen" partners (MS/AWS/Google/SAP/Oracle/Salesforce/Databricks/Snowflake/OpenAI/Anthropic/NVIDIA). ~300 export backlog surfaced &mdash; bulk-export capability ask. Renewal-adjacent packaging opportunity.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F91D; <strong>Google on-site today:</strong> Rani&rsquo;s major Google renewal on-site with Lawrence + Noah Rowitz + Mark Fell + HG leadership team in the Bay Area today &mdash; NO Weflow recording expected (in-person meeting). Rani&rsquo;s calendar showed only Lenovo Alliance + HPE + workspan monthly + NetApp weekly (no recordings). Outcome/notes to log manually in Vitally.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">1 CALL</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">1</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">1</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">30m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">NTT Data (Strategic Alliances onboarding &mdash; new EVP-driven partner-lens use case, 300 export backlog + bulk export ask) &middot; 1 event no recording: HCL TR Profile Review 7:30 AM</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 recordings no transcript (HPE Cloud Dynamics Mapping 9:30 AM, NetApp weekly 1 PM). 3 events no recording (Lenovo alignment 8 AM, workspan monthly 8:30 AM, NetApp weekly variant 1 PM). <strong>Google on-site (in-person) w/ Lawrence + Noah Rowitz + Mark Fell today</strong> &mdash; no Weflow recording expected.</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 recordings no transcript (Microsoft Weekly Sync 11 AM 45m &mdash; Unified Support renewal/growth topic; Greenhouse candidate interview 7 AM 45m &mdash; internal, not customer)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 recordings no transcript (BILL Weekly Sync ×2 slots 10 AM). 2 events no recording (Blackbaud biweekly 8:30 AM, Dynatrace biweekly 10 AM)</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 recording no transcript (Zscaler Leads Kickoff 10:30 AM &mdash; worth manual log given Sept 7 pre-renewal expansion thread)</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-varun">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 recording no transcript (OpenText biweekly 3 AM Year 2 Renewal + Expansion). 1 event no recording (MadKudu/HG&times;Autodesk 10:30 AM)</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">1 event no recording (Airtel &lt;&gt; HG Insights 3 AM)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events on calendar today</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_21() {
  return `<div class="section-label">Confirmed Calls &mdash; Monday September 21, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F464; <strong>Speaker-detection note:</strong> The NTT customer joined as "K iPhone 12 Pro Max" (device display name) so their turns were not caught by the CSM/name regex. Only Nick Johnson was detected as a name-formatted speaker &mdash; but the call is a real customer engagement.
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>8 CSM-owned recordings had no transcript</strong> &mdash; inferred from CSM event ownership only. Highest-value manual-log candidates: Pam&times;Microsoft Weekly (11 AM 45m &mdash; Unified Support Renewal & Growth Sales Motion), Rani&times;HPE Cloud Dynamics Mapping (9:30 AM &mdash; V2 Follow-up), Riley&times;Zscaler Leads Kickoff (10:30 AM &mdash; follows Sept 7 pre-renewal expansion), Divyam&times;BILL Weekly &times;2 slots (10 AM &mdash; HG API for Clay), Varun&times;OpenText biweekly (3 AM Year 2 Renewal + Expansion). 11 CSM events had no recording at all.
  </div>`;
}

function dayPulsesHTML_2026_09_21() {
  const cards = [
    { csm:'nick', health:'Healthy', account:'NTT Data Corporation',
      opp:'Vitally Pulse &mdash; Sep 21 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson',
      change:'Sep 21 &middot; New Stakeholder + Expansion',
      excerpt:'9/21 NJ: 30 min NTT Strategic Alliances onboarding (9 AM PT). New EVP Murat Aksu (May start) triggered the intro; Alliances team now using HG for "dirty dozen" partner cross-sell strategy. ~300 export backlog + bulk export ask. Location data + FAI under-utilized. Renewal-adjacent expansion vector.' },
  ];
  const bc = h => h==='Healthy'?'badge-healthy':h==='Concerning'?'badge-concerning':'badge-poor';
  const bi = h => h==='Healthy'?'&#128994;':h==='Concerning'?'&#128993;':'&#128308;';
  return `<div class="pulse-grid">${cards.map(c=>`
    <div class="pulse-card" data-csm="${c.csm}" data-health="${c.health}">
      <div class="pulse-card-top">
        <div>
          <div style="font-size:13px;font-weight:600;color:#e2e8f0;">${c.account}</div>
          <div style="font-size:11px;color:#94a3b8;margin-top:2px;">${c.opp}</div>
        </div>
        <span class="badge ${bc(c.health)}">${bi(c.health)} ${c.health}</span>
      </div>
      <div class="pulse-excerpt">${c.excerpt}</div>
      <div class="pulse-footer"><span>${c.csmlbl}</span><span>${c.change}</span></div>
    </div>`).join('')}</div>
  <div class="empty-state" id="pulses-empty" style="display:none">No pulses match the current filter.</div>`;
}

function dayActionsHTML_2026_09_21() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0921-1')?'done':''}" data-csm="nick" id="action-0921-1">
      <div class="action-checkbox ${doneActions.has('0921-1')?'checked':''}" onclick="toggleAction('0921-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; NTT &mdash; Follow up with Strategic Alliances lead on bulk-export capability + Alliances licensing packaging</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; New stakeholder (Alliances team, EVP Murat Aksu) added a fresh use case to the NTT engagement &mdash; partner-lens cross-sell across the "dirty dozen." Customer flagged 300+ export request backlog and asked whether a bulk export by geo/list is possible. Nick to: (1) confirm bulk-export capabilities at current license tier, (2) walk Alliances lead through location data + FAI (currently unused, high leverage for their partner-scoping), (3) map Alliances requirements against current NTT license and quantify what expansion or add-on would unlock the workflow. Renewal-adjacent opportunity to bundle Alliances expansion at next renewal.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0921-2')?'done':''}" data-csm="rani" id="action-0921-2">
      <div class="action-checkbox ${doneActions.has('0921-2')?'checked':''}" onclick="toggleAction('0921-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Google &mdash; Manual Vitally log for today&rsquo;s in-person on-site with Lawrence + Noah Rowitz + Mark Fell</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy &middot; The Sept 21 Google renewal on-site was in-person in the Bay Area (no Weflow recording). Follows the Sept 17 60-min prep call and the Sept 11 contact-POC scoping. Capture: (a) Lawrence&rsquo;s reaction to the expansion pitch (10M&rarr;55M universe, credit/token licensing, new AI-driven UI), (b) alignment on the 15&ndash;20-user free-trial pilot (Market Analyzer + GSI + ISV + AI sales copilot + VDR), (c) DPA + amendment path for the December renewal, (d) any Gemini Enterprise MCP intro progress. Log outcomes + next steps in Vitally today.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0921-3')?'done':''}" data-csm="pam" id="action-0921-3">
      <div class="action-checkbox ${doneActions.has('0921-3')?'checked':''}" onclick="toggleAction('0921-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Microsoft &mdash; Manual Vitally log for Unified Support Renewal & Growth weekly sync</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck &middot; 45-min weekly (11 AM PT) tagged to the Microsoft Unified Support Renewal and Growth Sales Motion opp. No transcript synced &mdash; Pam should manually log outcomes/action items so the signal isn&rsquo;t lost. Companion track to Sept 16&rsquo;s Intent Topic Review (credit-impact quantification for Bryce&rsquo;s recommendations still owed).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0921-4')?'done':''}" data-csm="all" id="action-0921-4">
      <div class="action-checkbox ${doneActions.has('0921-4')?'checked':''}" onclick="toggleAction('0921-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; CSM team &mdash; Manual Vitally log for 8 inferred (no-transcript) + 11 no-recording events</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani (HPE Cloud Dynamics Mapping 9:30 AM, NetApp 1 PM), Riley (Zscaler Leads Kickoff 10:30 AM &mdash; follows Sept 7 pre-renewal expansion thread), Divyam (BILL Weekly HG API for Clay &times;2 slots 10 AM), Varun (OpenText Year 2 Renewal + Expansion biweekly 3 AM), Pam (Microsoft Weekly + Greenhouse candidate interview), plus events with no recording (Nick&times;HCL TR, Rani&times;Lenovo alignment/workspan/NetApp variant, Divyam&times;Blackbaud biweekly + Dynatrace biweekly, Varun&times;MadKudu/HG&times;Autodesk, Atisha&times;Airtel). Highest priority manual captures: Zscaler (expansion), OpenText (renewal + expansion), HPE (V2 follow-up), Microsoft Weekly (Unified Support renewal).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0921-5')?'done':''}" data-csm="all" id="action-0921-5">
      <div class="action-checkbox ${doneActions.has('0921-5')?'checked':''}" onclick="toggleAction('0921-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Ops &mdash; Weflow sync backlog Day 13 (78%, slight regression) &mdash; escalate again if not resolved by Wed</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Ops / Rishi &middot; No-transcript rate ticked back up to 78% on Sept 21 after 71% on Sept 18 &mdash; recovery not holding. Trajectory: Sep 10 85% &rarr; Sep 11 69% &rarr; Sep 14 78% &rarr; Sep 15 79% &rarr; Sep 16 92% &rarr; Sep 17 84% &rarr; Sep 18 71% &rarr; <strong>Sep 21 78%</strong>. If Wed (Sept 23) is still &gt;60%, escalate to Weflow product owner + brief Yuan. Consider ordering the event-based inferred fallback report if there&rsquo;s no clear resolution ETA.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}


// ============================================================
// Tuesday September 22, 2026
// ============================================================








// ============================================================
// Tuesday September 22, 2026
// ============================================================

function dayData_2026_09_22() {
  return {
    calls: [
      { ts: 'Sep 22 &middot; 6:30 AM', csm: 'nick', account: 'IBM',
        note: 'IBM monthly sync w/ Kruti Desai + Bill Onesti + JJ (IBM) + Augie Buettner + Clayton Cutbush (HG) &mdash; database migration keeping teams busy, HashiCorp data-access requests stalled/resolved silently, Red Hat maintains own data feed, Confluent can self-access &mdash; no pressing needs',
        mins: 10, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Attendance from Weflow participants (Nick Johnson, Augie Buettner, Clayton Cutbush on HG side; Kruti Desai, Bill Onesti, JJ on IBM side). Per the Weflow summary: HashiCorp&rsquo;s data-access requests from late July have gone quiet (mirroring their previous "cagey" procurement behavior). IBM&harr;Red Hat alignment tightening &mdash; some Red Hat personnel now report into IBM structures &mdash; but Red Hat continues own separate Cyber data feed with no crossover. Confluent can access data directly, no formal requests. Kruti and Bill both confirmed nothing outstanding. Next: Nick to circle back w/ Sydney on any HashiCorp needs. Future monthlies will pivot to customer examples + product releases + roadmap.' },

      { ts: 'Sep 22 &middot; 7:30 AM', csm: 'rani', account: 'NetApp',
        note: 'NetApp Fit/Need/Intent + AI spend deep-dive w/ Michael Danaher (Rev Ops) + Chris Kim (Ent Business Ops) + Akanksha Jain + Adrian Escobar + Gavin Padden + David Crossman (HG) &mdash; scoring-model integration, modeled-vs-empirical clarification, AI spend hardware/software/services/genAI taxonomy',
        mins: 33, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Attendance from Weflow participants (Rani Guy, Adrian Escobar, Gavin Padden, David Crossman on HG side; Michael Danaher + Chris Kim + Akanksha Jain on NetApp). Per the Weflow summary: HG data can be integrated into NetApp&rsquo;s scoring model to prioritize target accounts. FNI framework layers firmographic + technographic + intent to sharpen the funnel. AI spend data breaks into hardware / software / services / generative AI. Hyper-targeting via location-based tech footprints + influential personnel discussed. First-party + HG combined is the conversion play. Next: Gavin to send ETA-specific FNI examples; Adrian to schedule follow-up deep-dive on AI spend; HG to send AI-spend taxonomy in PDF+Excel + address any data-completeness gaps.' },

      { ts: 'Sep 22 &middot; 7:30 AM', csm: 'riley', account: 'SAP Inc',
        note: 'SAP CX Sync (TrustRadius) w/ Binod Negi + (Erica couldn&rsquo;t join) &mdash; Sales Cloud market report delivered, visibility-gap-to-HubSpot strategy, AI sentiment analysis of TR review corpus, SAP Connect event review-collection push, incentivized invite links',
        mins: 9, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Attendance from Weflow participants (Riley Rogers + Cole Arutian + Mardigan Moffat on HG side; Binod Negi on SAP CX). Per the Weflow summary: Sales Cloud market report ready to upload to SAP&rsquo;s digital library. Review-collection push before year-end, leveraging SAP Connect event. Riley to investigate correlation between review count and AI-visibility score, and provide 12-month TR review data-dump for Binod to run through an AI sentiment engine. Christine filed the Commerce Cloud request form; Janessa working delivery. Riley to follow up with Alejandro on SAP Connect KPIs.' },

      { ts: 'Sep 22 &middot; 8:30 AM', csm: 'riley', account: 'SAP Inc',
        note: 'SAP BTP TR monthly w/ I049275 (SAP BTP product/marketing) &mdash; BTP&rarr;BAIP successor platform in-flight but no final decision; challenge of representing platform of solutions without diluting individual solution credibility or double-counting reviews',
        mins: 10, health: 'Healthy',
        nature: 'Recurring', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Attendance from Weflow participants (Riley Rogers + Cole Arutian + Mardigan Moffat on HG side; SAP participant labeled as I049275). Per the Weflow summary: SAP is transitioning from BTP to a successor "BAIP" but the platform name/marketing decision remains internal. Core challenge: showcase a portfolio-of-solutions as a cohesive platform without double-counting reviews or diluting individual-solution credibility &mdash; past BTP struggle. Success of BAIP hinges on marketing campaigns + IDP-team alignment. I049275 to talk to Alejandro + team leads about pursuing a platform showcase; more clarity on 2027 marketing plans by end-Dec / early 2027; Riley to keep I049275 + Martin posted. Riley also flagged personal leave planned for late December.' },

      { ts: 'Sep 22 &middot; 9:00 AM', csm: 'rani', account: 'Lenovo Group Ltd.',
        note: 'Lenovo Partnership Next Steps &amp; Roadmap w/ Rani Guy + Nick Johnson + Yuan Fang + Erica Yim + Adrian Escobar + James Tudway + Gavin Padden + David Crossman (HG) &mdash; PTB agent for Secure PC deployed, framework-vs-account-list clarification pending, account matching accuracy issues, Sept 30 alignment meeting coming',
        mins: 32, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Cross-coverage: Rani Guy (account CSM) + Nick Johnson both attended alongside Yuan Fang (HG leadership). Attendance from Weflow participants. Per the Weflow summary: PTB (Propensity to Buy) agent for Secure PC has been successfully deployed and prioritized accounts shared with the NA business team &mdash; a live expansion delivery. Ambiguity around whether HG provides a framework or an account list for future PTB models needs clarification; new matching approach using city + additional data points expected mid-week. Ujjaini Mazumdar preparing for the Sept 30 alignment meeting on PTB framework-vs-account-list delivery. AGI team to bring HG&rsquo;s view on matching rigor + &lsquo;news&rsquo; delivery plan (milestones, prioritization). Nick to share updated matching approach + schedule a 1-hour review session, and resend the October data-expectations email.' },

      { ts: 'Sep 22 &middot; 9:30 AM', csm: 'nick', account: 'SAP Inc',
        note: 'SAP biweekly sync w/ Adriana Aguiar + David Garcia Thomas + L&eacute;opold Baudry (SAP) &mdash; hard renewal deadline Sept 30 (contract expires; without signature by Oct 1 the October service can&rsquo;t be delivered AND data-deletion compliance triggers); procurement decision expected mid-next-week',
        mins: 7, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Issue',
        detail: 'Attendance from Weflow participants (Nick Johnson on HG; David Garcia Thomas + L&eacute;opold Baudry + Adriana Aguiar on SAP). Per the Weflow summary: SAP Install Subscription renewal expires Sept 30 &mdash; procurement (Josephine) has business justification + vendor performance case but decision still pending, ETA mid-next-week. Non-renewal by Oct 1 means October service is not delivered AND data-deletion compliance protocols trigger. Both Nick + Adriana + Joaquin committed to push. Nick to keep the Sept 30 deadline in front of procurement + support with leadership case if needed; Joaquin/Adriana to follow up with procurement + ensure they understand implications. Signal is Concerning &mdash; 8 days to renewal with no signature yet.' },

      { ts: 'Sep 22 &middot; 10:00 AM', csm: 'nick', account: 'Intuit',
        note: 'HG / Intuit (Mailchimp) Partner Use-case &amp; HG Overview w/ Nick Johnson + Julian Rojas (HG) + Ashutosh Singh + Eric McKnight (Intuit/Mailchimp) &mdash; Blackbaud + Mailchimp ICP contact analysis, mobile-number + job-title-relevance data-quality discussion, "job changer" targeting use-case explored',
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Mixed',
        detail: 'Attendance from Weflow participants (Nick Johnson + Julian Rojas on HG; Ashutosh Singh + Eric McKnight on Intuit/Mailchimp). Per the Weflow summary: Blackbaud analysis yielded ~124K contacts with verified/likely-valid emails (mobile-number data pending 24-48hr). Preferred contact-data hierarchy: mobile/direct-dial &gt; email, minimize DNC + invalid connections. Job-title targeting: Director+ marketing, owners, CEOs, C-suite &mdash; exclude engineers. Blackbaud + Mailchimp ICP intersection produced ~13K more-targeted contacts. Expansion opportunity: "job changer" use-case &mdash; targeting people who previously used Mailchimp at one company when they move to a new company without Mailchimp. Julian to share current analysis this week + follow up end-of-week with Eric on partner use-case + mobile-number data. Julian + Nick to discuss job-changer use-case with the product team. Eric to loop in a Sales Manager for outreach. Mixed = Check-in + Expansion.' },

      { ts: 'Sep 22 &middot; 10:00 AM', csm: 'riley', account: 'Zoom Video Communications',
        note: 'Zoom TR CSM Sync w/ Travis Sterne + Mardigan Moffat (post-Camille Shortridge handoff intact) &mdash; deadline extended to Oct 16, Zoom 8 crossed threshold, Zoom Rooms 1 pending in moderation, campaign focus on Zoom 8 + Zoom Phone + Zoom Rooms with Zoomtopia incentivized links',
        mins: 21, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: 'Confirmed via SFDC transcript speaker labels (Riley Rogers). Cross-coverage note: Zoom account CSM of record is Andy Lim; Riley owns the TR-side engagement. First real handoff meeting after Camille Shortridge&rsquo;s Sept 12 departure &mdash; Travis Sterne now the primary TR-side contact and rapport is intact from the opening. Buyer&rsquo;s Choice deadline extended to Oct 16 (+3 weeks). Zoom 8 surpassed the 10-review threshold; Zoom Rooms has one review pending moderation. Campaigns focus on Zoom 8, Zoom Phone, potentially Events &amp; Webinars, with incentivized links + Zoomtopia integration to boost review volume. Draft order form + YoY budget split reviewed; new content drafts for Zoom Phone + Zoom 8 in review.' },

      { ts: 'Sep 22 &middot; 11:05 AM', csm: 'pam', account: 'Microsoft',
        note: 'TR Microsoft Security Sync w/ Colleen Nelson (SWIFT GROUP, MS Security marketing) &mdash; resolved market-report confusion (contracted service, not event byproduct), agreed to proceed with combined-product reports, clarified quote-request process for marketing materials',
        mins: 41, health: 'Healthy',
        nature: 'Recurring', initiator: 'Customer', purpose: 'Check-in',
        detail: 'Confirmed via SFDC transcript speaker labels (Pam Huck). Colleen and Pam resolved earlier confusion around market-report creation + distribution &mdash; clarified that market reports are a contracted service, not solely an event byproduct. Decided to proceed with combined product reports (based on client feedback) and clarified the quote-request process for marketing materials. Current assets like video recordings + quotes need to be downloadable for wider social + distribution use. Next steps: Colleen to gather client input on a draft report; Pam to prepare additional combined product reports + schedule regular follow-up meetings to keep alignment.' },

      { ts: 'Sep 22 &middot; 11:30 AM', csm: 'riley', account: 'Red Hat Inc',
        note: 'Red Hat TR biweekly w/ Brianna Gault (Red Hat lead) + Sai A + Cole Arutian + Mardigan Moffat &mdash; lead-tracking issues resolved, MSOF surpassed $1M target, new AI-driven LLM optimization + geo features + prompt tracking, renewal discussions underway with pricing/packaging updates for next year',
        mins: 31, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: 'Attendance from Weflow participants (Riley Rogers + Cole Arutian + Mardigan Moffat on HG/TR; Brianna Gault + Sai A + Genimitis/Mgr on Red Hat). Per the Weflow summary: lead-tracking discrepancies are resolved and all leads correctly attributed to campaigns; MSOF value has surpassed the $1M target &mdash; strong Q3 signal for Red Hat renewal. New AI-driven features (LLM optimization + prompt tracking) introduced for TR platform; geo features + enhanced market reports offer more granular insights + better AI compatibility. Renewal discussions underway &mdash; team looking to incorporate new features + potentially adjust pricing to reflect added value while aiming to maintain current pricing where possible. Next: Sai A to pull DevOps + Red Hat retargeting-account list; Brianna to meet MDR-manager Thursday + invite Genimitis to a follow-up Q&A session next week; Mardigan + Cole to send email w/ new offerings + pricing + schedule the Q&A. Mixed = Check-in + Expansion.' },

      { ts: 'Sep 22 &middot; 12:00 PM', csm: 'atisha', account: 'Equinix, Inc.',
        note: 'Equinix Future of Cloud Dynamics w/ Ram Bala (scope expanded from CRO AI to corp strategy + competitor intel + people/finance/portfolio) + Charles Hawkins (new HG AM ex-MadKudu, took over from promoted Tyler) + Satish Grandhi (HG CTO/AI Excellence) &mdash; RG Fabric intro (60M &rarr; 100M target), December renewal + FY26/FY27 interlock alignment, expansion pitch beyond current Cloud Dynamics',
        mins: 35, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Confirmed via SFDC transcript speaker labels (Atisha Waghela). First Satish&times;Ram meeting &mdash; strategically important pre-December-renewal introduction. Ram Bala&rsquo;s scope at Equinix has expanded from CRO AI to corporate strategy + competitor intelligence + people/finance/portfolio &mdash; a much wider surface for HG data. Charles Hawkins is the new Equinix AM (ex-MadKudu) taking over from Tyler Neubauer post-promotion. HG introduced the new "RG Fabric" data set (merges HG Data + Cloud Dynamics, ~60M company coverage today aiming for 100M by year-end, using LLMs + improved DNS traffic analysis). Discussion focused on how RG Fabric + agentic workflow demand align with Equinix&rsquo;s evolving GTM. Next: intros to Equinix leadership (Zoe McKinsey specifically), and clarifying how HG&rsquo;s updated offerings integrate into future priorities + the December renewal + contractual FY26/FY27 interlock.' },

      { ts: 'Sep 22 &middot; 1:00 PM', csm: 'rani', account: 'CloudFlare Inc',
        note: 'Cloudflare TR (recurring) w/ Andy Mitschke (Cloudflare) + Cole Arutian + Mardigan Moffat + Kraig Kraning (HG/TR) &mdash; dedicated listings for Cloudflare One (SASE/Zero Trust) + potential developer-platform listing being explored to align with Acts 3 &amp; 4 GTM; pricing for expanded profiles + reports being investigated for 2027 planning',
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: 'Attendance from Weflow participants (Rani Guy on HG-CSM side; Cole Arutian + Mardigan Moffat + Kraig Kraning on TR; Andy Mitschke is a Cloudflare Contact per SFDC salesforceLinks &mdash; NOT HG staff). Per the Weflow summary: strategic conversation about Cloudflare&rsquo;s product-listing strategy on TrustRadius &mdash; the current single main listing covers everything but there&rsquo;s a strategic need for more granular product-specific listings to align with GTM + capture specific segments. Priority: dedicated listings for Cloudflare One (SASE/Zero Trust) + a potential Developer Platform listing, particularly to support "Act 3" and "Act 4" initiatives. Impacts intent-data granularity + future AI-driven targeting. Andy Mitschke will investigate pricing for expanded profiles + reports for 2027 planning by November timeframe + sit with Akash + the GTM team to align before building. Cole to put in category-change/addition requests + push edits if users get locked out. Mardigan to provide data + schedule pricing/options discussion.' },
    ],
    pulses: [
      { csm:'nick', account:'IBM', health:'Healthy', note:'Sept 22 monthly &mdash; no pressing data-access asks; HashiCorp went quiet, Red Hat maintains own feed. Cadence shifting toward customer examples + roadmap.' },
      { csm:'rani', account:'NetApp', health:'Healthy', note:'Sept 22 FNI + AI-spend deep-dive w/ NetApp Rev Ops + Business Ops. Follow-ups: ETA FNI examples + AI-spend taxonomy + AI-spend deep-dive session scheduled.' },
      { csm:'riley', account:'SAP Inc', health:'Healthy', note:'Sept 22 SAP CX Sync &mdash; Sales Cloud market report delivered; TR review-corpus AI sentiment analysis + SAP Connect review-collection push in motion.' },
      { csm:'riley', account:'SAP Inc', health:'Healthy', note:'Sept 22 SAP BTP TR monthly &mdash; BTP&rarr;BAIP transition in-flight; platform-vs-solution review-representation challenge; 2027 marketing plans clarify end-Dec / early 2027.' },
      { csm:'rani', account:'Lenovo Group Ltd.', health:'Healthy', note:'Sept 22 Partnership Roadmap &mdash; PTB Secure PC agent DEPLOYED (accounts shared w/ NA business team). Nick+Rani cross-coverage. Sept 30 alignment meeting for PTB framework-vs-list + &lsquo;news&rsquo; delivery.' },
      { csm:'nick', account:'SAP Inc', health:'Concerning', note:'Sept 22 SAP biweekly &mdash; Install Subscription renewal expires Sept 30. No signature yet; procurement decision expected mid-next-week. Non-renewal by Oct 1 = October service NOT delivered + data-deletion compliance triggers. 8 days out.' },
      { csm:'nick', account:'Intuit', health:'Healthy', note:'Sept 22 Intuit Mailchimp Partner Use-case &mdash; job-changer targeting use-case surfaced (expansion vector); ~13K Blackbaud&harr;Mailchimp ICP contacts identified; product-team conversation scheduled.' },
      { csm:'riley', account:'Zoom Video Communications', health:'Healthy', note:'Sept 22 Zoom TR CSM Sync &mdash; Travis Sterne handoff intact post-Camille departure. Zoom 8 threshold crossed, Oct 16 deadline. Riley owns TR side (account CSM is Andy Lim).' },
      { csm:'pam', account:'Microsoft', health:'Healthy', note:'Sept 22 Microsoft Security TR sync w/ Colleen Nelson &mdash; combined product reports agreed; quote-request process clarified; downloadable social-format assets being packaged.' },
      { csm:'riley', account:'Red Hat Inc', health:'Healthy', note:'Sept 22 Red Hat TR biweekly &mdash; MSOF surpassed $1M target, lead-tracking resolved. New AI/LLM optimization + geo features + prompt tracking rolled out; renewal discussions underway.' },
      { csm:'atisha', account:'Equinix, Inc.', health:'Healthy', note:'Sept 22 Equinix &mdash; HG CTO/AI Excellence (Satish) intro to Ram Bala (scope expanded to corp strategy + competitor intel). RG Fabric pitched. December renewal + FY26/FY27 interlock alignment.' },
      { csm:'rani', account:'CloudFlare Inc', health:'Healthy', note:'Sept 22 Cloudflare TR &mdash; dedicated listings for Cloudflare One + Developer Platform being explored to align with Acts 3 &amp; 4 GTM. 2027 pricing/reports review scheduled November.' },
    ]
  };
}

function dayMeta_2026_09_22() {
  return {
    pills: [
      ['dot-teal',   '12 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '6 Expansion'],
      ['dot-green',  '12 Vitally Pulses'],
      ['dot-grey',   'Tue Sep 22 &middot; 100 scanned']
    ],
    tabs: ['Overview', 'Calls (12)', 'Pulses (12)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_09_22() {
  return `<div class="section-label">Team Activity &mdash; Tuesday September 22, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tue Sep 22 &mdash; 100 recordings scanned</strong> via SFDC SOQL + Weflow fallback &middot; <strong>12 confirmed calls</strong> across 5 CSMs &middot; 1 Concerning (SAP Sept 30 renewal) &middot; 6 Expansion signals &middot; 3 CSMs w/o calls (Varun, Divyam, Andy)
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>URGENT &mdash; SAP Install Subscription renewal:</strong> Nick&rsquo;s Sept 22 biweekly sync surfaced hard Sept 30 deadline. Contract expires; without signature by Oct 1 the October service can&rsquo;t be delivered AND data-deletion compliance triggers. Procurement decision expected mid-next-week &mdash; only 8 days out.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>6 Expansion signals:</strong> NetApp (FNI + AI-spend adoption), Intuit (Mailchimp job-changer use-case), Lenovo (PTB Secure PC DEPLOYED + Sept 30 framework-vs-list alignment), Red Hat (MSOF $1M surpassed + AI/LLM feature rollout), Equinix (Satish&times;Ram intro pre-Dec renewal + RG Fabric pitch), Cloudflare (dedicated Cloudflare One + Developer Platform listings for Acts 3 &amp; 4 GTM).
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F91D; <strong>Cross-coverage:</strong> Lenovo Partnership Next Steps &mdash; Nick Johnson + Rani Guy both attended alongside Yuan Fang (HG leadership). Rani is account CSM of record; Nick brings PTB / account-matching lens.
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow sync backlog Day 14 &mdash; plateau (79% no-transcript):</strong> 9 of 12 confirmed calls today came via the Weflow-participants fallback (SFDC had recording but no transcript). Trajectory: Sep 16 92% &rarr; 17 84% &rarr; 18 71% &rarr; 21 78% &rarr; <strong>22 79%</strong>. Two consecutive days on plateau ~30 pts above baseline &mdash; escalation trigger met.
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
        <div><div class="metric-num m-grey">71m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Zoom TR (Camille&rarr;Travis handoff intact) &middot; SAP CX + SAP BTP TR &middot; Red Hat TR (MSOF $1M surpassed, renewal discussions live)</div>
    </div>

    <div class="csm-card has-calls" data-csm="nick">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">NJ</div>
        <div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">79m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM monthly (Healthy) &middot; Lenovo Partnership (co-attended w/ Rani) &middot; SAP biweekly (CONCERNING &mdash; Sept 30 renewal) &middot; Intuit Mailchimp (job-changer expansion)</div>
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
        <div><div class="metric-num m-grey">95m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">NetApp FNI + AI-spend (expansion) &middot; Lenovo Partnership (PTB deployed) &middot; Cloudflare TR (Cloudflare One + Developer Platform listings)</div>
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
        <div><div class="metric-num m-grey">41m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Microsoft Security TR (combined product reports agreed, quote-request process clarified)</div>
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
        <div><div class="metric-num m-grey">35m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Equinix (Satish&times;Ram intro, RG Fabric pitch, December renewal + FY26/FY27 interlock)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">3 events scheduled &mdash; no recordings synced (Adobe GTM Tool Review x2 &middot; Omnissa Data Usage in no-transcript queue)</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">2 events scheduled &mdash; no recordings surfaced (workspan Kickstart 15m + Insight sync)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AL</div>
        <div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No CSM-owned events &mdash; Zoom TR handled by Riley (cross-coverage)</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_22() {
  return `<div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow-attendance fallback drove 9 of 12 confirmations today.</strong> SFDC transcript synced for only 3 calls (Zoom TR, MS Security, Equinix); the remaining 9 recovered via Weflow &lsquo;participants&rsquo; array &mdash; treated as attendance-confirmed and classified from Weflow summaries.
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>SAP Install Subscription renewal &mdash; Concerning:</strong> Nick&rsquo;s Sept 22 biweekly with Adriana Aguiar + David Garcia Thomas + L&eacute;opold Baudry surfaced a hard Sept 30 deadline. Procurement (Josephine) has business justification but no signature yet; ETA mid-next-week. Non-renewal by Oct 1 = October service NOT delivered AND data-deletion compliance triggers.
  </div>`;
}

function dayPulsesHTML_2026_09_22() {
  const cards = [
    { csm:'nick', health:'Healthy', account:'IBM', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 NJ: IBM monthly &mdash; no pressing data-access asks; HashiCorp went quiet, Red Hat maintains own feed (10 AM PT, 10 min). Kruti + Bill confirmed nothing outstanding; cadence pivots toward customer examples + roadmap.' },
    { csm:'rani', health:'Healthy', account:'NetApp', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 RG: NetApp Fit/Need/Intent + AI-spend deep-dive w/ Rev Ops + Ent Business Ops (7:30 AM PT, 33 min). Scoring-model integration path clarified. AI-spend taxonomy + deep-dive session follow-ups scheduled.' },
    { csm:'riley', health:'Healthy', account:'SAP Inc', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 RR: SAP CX Sync (7:30 AM PT, 9 min). Sales Cloud market report delivered. Riley to send 12-mo TR review data-dump for AI sentiment analysis; SAP Connect review-collection push.' },
    { csm:'riley', health:'Healthy', account:'SAP Inc', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 RR: SAP BTP TR monthly (8:30 AM PT, 10 min). BTP&rarr;BAIP transition in-flight; platform-vs-solution review-representation challenge. 2027 marketing plans crystallize end-Dec/early 2027.' },
    { csm:'rani', health:'Healthy', account:'Lenovo Group Ltd.', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 RG+NJ: Lenovo Partnership Next Steps (9 AM PT, 32 min). Nick+Rani cross-coverage w/ Yuan. PTB Secure PC agent DEPLOYED to NA business team. Sept 30 alignment on PTB framework-vs-list + &lsquo;news&rsquo; delivery.' },
    { csm:'nick', health:'Concerning', account:'SAP Inc', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson', change:'Sep 22 &middot; Concerning',
      excerpt:'9/22 NJ: SAP biweekly (9:30 AM PT, 7 min). Install Subscription renewal expires Sept 30. No signature yet; procurement decision mid-next-week. Non-renewal = October service NOT delivered + data-deletion compliance triggers. 8 days out.' },
    { csm:'nick', health:'Healthy', account:'Intuit', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Nick Johnson', csmlbl:'Nick Johnson', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 NJ: HG / Intuit (Mailchimp) Partner Use-case &amp; HG Overview (10 AM PT, 30 min). &ldquo;Job changer&rdquo; targeting use-case surfaced (expansion vector). ~13K Blackbaud&harr;Mailchimp ICP contacts. Product-team convo scheduled.' },
    { csm:'riley', health:'Healthy', account:'Zoom Video Communications', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 RR: Zoom TR CSM Sync (10 AM PT, 21 min). Travis Sterne handoff intact post-Camille departure Sept 12. Zoom 8 crossed threshold, Zoom Rooms 1 in moderation. Oct 16 Buyer&rsquo;s Choice deadline. Riley owns TR side (account CSM Andy Lim).' },
    { csm:'pam', health:'Healthy', account:'Microsoft', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Pam Huck', csmlbl:'Pam Huck', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 PH: Microsoft Security TR (11:05 AM PT, 41 min) w/ Colleen Nelson (SWIFT GROUP). Combined product reports agreed. Quote-request process clarified. Downloadable social-format assets being packaged.' },
    { csm:'riley', health:'Healthy', account:'Red Hat Inc', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Riley Rogers', csmlbl:'Riley Rogers', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 RR: Red Hat TR biweekly (11:30 AM PT, 31 min). MSOF surpassed $1M target, lead-tracking resolved. New AI/LLM optimization + geo + prompt tracking rolled out. Renewal discussions underway w/ new-feature pricing.' },
    { csm:'atisha', health:'Healthy', account:'Equinix, Inc.', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Atisha Waghela', csmlbl:'Atisha Waghela', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 AW: Equinix Future of Cloud Dynamics (12 PM PT, 35 min). Satish (HG CTO/AI Excellence) intro to Ram Bala (scope expanded to corp strategy + competitor intel). RG Fabric pitched (60M&rarr;100M). December renewal + FY26/FY27 interlock alignment.' },
    { csm:'rani', health:'Healthy', account:'CloudFlare Inc', opp:'Vitally Pulse &mdash; Sep 22 Call',
      arr:'Enterprise &middot; Rani Guy', csmlbl:'Rani Guy', change:'Sep 22 &middot; Healthy',
      excerpt:'9/22 RG: Cloudflare TR (1 PM PT, 30 min) w/ Andy Mitschke (Cloudflare) + TR team. Dedicated listings for Cloudflare One + Developer Platform being explored to align w/ Acts 3 &amp; 4 GTM. 2027 pricing/reports review November.' },
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

function dayActionsHTML_2026_09_22() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0922-1')?'done':''}" data-csm="nick" id="action-0922-1">
      <div class="action-checkbox ${doneActions.has('0922-1')?'checked':''}" onclick="toggleAction('0922-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; SAP &mdash; Install Subscription renewal: 8 days to Sept 30 deadline</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Contract expires Sept 30; no signature yet. Procurement decision expected mid-next-week. If not signed by Oct 1: October service is NOT delivered AND data-deletion compliance triggers. Nick to keep the deadline in front of procurement + make a case to SAP leadership if needed; Joaquin/Adriana to follow up + ensure procurement understands implications.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0922-2')?'done':''}" data-csm="rani" id="action-0922-2">
      <div class="action-checkbox ${doneActions.has('0922-2')?'checked':''}" onclick="toggleAction('0922-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Lenovo &mdash; Sept 30 PTB framework-vs-list alignment meeting prep</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Nick Johnson &middot; PTB Secure PC agent has DEPLOYED &mdash; big expansion win. Sept 30 alignment meeting must clarify whether HG provides a framework or an account list for future PTB models. Ujjaini (Lenovo AGI) preparing; Raju Ghosh3 to share account-services assessment before Sept 30 + highlight matching observations. Nick to share updated matching approach w/ city + additional data points by mid-week + schedule a 1-hr review session, and resend the October data-expectations email.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0922-3')?'done':''}" data-csm="atisha" id="action-0922-3">
      <div class="action-checkbox ${doneActions.has('0922-3')?'checked':''}" onclick="toggleAction('0922-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Equinix &mdash; December renewal + FY26/FY27 interlock; broker intros to Zoe McKinsey</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela + Charles Hawkins (new AM) &middot; First Satish&times;Ram Bala meeting landed well &mdash; Ram&rsquo;s scope now spans corp strategy + competitor intel + people/finance/portfolio. RG Fabric pitched (60M &rarr; 100M year-end). Facilitate intros to Zoe McKinsey (new Equinix leadership). Clarify how HG&rsquo;s updated offerings fit December renewal + FY26/FY27 interlock. Expansion beyond current Cloud Dynamics footprint is live.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0922-4')?'done':''}" data-csm="nick" id="action-0922-4">
      <div class="action-checkbox ${doneActions.has('0922-4')?'checked':''}" onclick="toggleAction('0922-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Intuit / Mailchimp &mdash; &lsquo;job changer&rsquo; use-case with product team + mobile-number data</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson + Julian Rojas &middot; Julian to share current Blackbaud+Mailchimp contact analysis this week + connect with Eric McKnight end-of-week on partner use-case + outstanding mobile-number data. Nick + Julian to bring the &ldquo;job changer&rdquo; use-case (target ex-Mailchimp users at new companies without Mailchimp) to HG product team &mdash; this is a novel targeting vector, potentially a differentiator. Eric to loop in a Sales Manager for outreach.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0922-5')?'done':''}" data-csm="rani" id="action-0922-5">
      <div class="action-checkbox ${doneActions.has('0922-5')?'checked':''}" onclick="toggleAction('0922-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cloudflare &mdash; Cloudflare One + Developer Platform dedicated TR listings for Acts 3 &amp; 4 GTM</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Cole Arutian + Mardigan Moffat &middot; Andy Mitschke (Cloudflare) to update main listing edits/review submissions by Monday + investigate pricing for expanded profiles + potential reports for 2027 planning by November. Cole to put in category-change requests + push edits if users get locked out; TR team to prepare options for expanded profiles + reports post-planning. Mardigan to schedule pricing/options discussion. This aligns TR intent-data + AI-targeting with Cloudflare&rsquo;s Acts 3 &amp; 4 initiatives.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0922-6')?'done':''}" data-csm="all" id="action-0922-6">
      <div class="action-checkbox ${doneActions.has('0922-6')?'checked':''}" onclick="toggleAction('0922-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F6A8; Ops &mdash; Weflow sync Day 14 plateau: escalation trigger met (79% no-transcript)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops / Rishi / Yuan &middot; 9 of 12 confirmed calls today came via the Weflow-participants fallback because SFDC had no transcript. No-transcript rate: Sep 21 78% &rarr; <strong>Sep 22 79%</strong> &mdash; two consecutive days on plateau ~30 pts above baseline meets the escalation trigger set Sept 21. Recommend brief to Yuan + Weflow product owner now + stand up event-based inferred fallback report until sync stabilizes.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

// ============================================================
// Wednesday September 23, 2026
// ============================================================











// ============================================================
// Thursday September 10, 2026
// ============================================================

function dayData_2026_09_10() {
  return {
    calls: [
      { ts: 'Sep 10 &middot; 7:00 AM', csm: 'divyam', account: `Infinigate (Nuvias)`,
        note: `Bi-weekly sync with Angus Hyams: new-platform demo (AI scoring, Market Analyzer, credit-based export). Client Abby interested in migrating pre-renewal; blocker is contract/upgrade path + contact-data pricing vs Cognism.`,
        mins: 49, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Full demo of new HG platform to Infinigate (Abby). Highlighted AI-driven account scoring, Market Analyzer for country expansion planning, credit-based export system, and enriched contact data. Client expressed interest in early migration + trial credits for contacts feature; questioned phone-number export + Cognism cost parity. Angus to check current contract renewal for upgrade path + explore test-credits for contact data; Divyam to feed bulk-upload-contacts feedback to product team. Attendance confirmed via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 8:00 AM', csm: 'riley', account: `TIS Treasury Intelligence Solutions`,
        note: `TR monthly CSM sync w/ Kirsten Koppe + Brett Castonguay + Blair Romain. Only 1 review sourced YTD &mdash; jeopardizing award eligibility + renewal. Launching review campaign next Tuesday w/ tiered incentives (~$2,950 budget remaining).`,
        mins: 22, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Issue',
        detail: `Critical review-volume shortage &mdash; only one customer review sourced all year, putting award eligibility + renewal at risk. TR team is launching a proactive review-sourcing campaign starting next Tuesday, using tiered gift-card incentives ($25 / $50) or a charity-donation option (targeting US customers first due to European regulations). Existing review links extended into January. Geo-dashboard activated for the client (3-day full activation). $2,950 of $3,000 incentive budget still available and does NOT carry over past April renewal &mdash; must be spent. Blair Romain to send customer contact list by Monday; Brett to launch campaign Tuesday. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 8:00 AM', csm: 'varun', account: `Hyland`,
        note: `Monthly connect w/ Bryson Littlejohn. New-platform intro (multivariate scoring + AI-driven scoring + Market Analyzer). Trial access being provisioned to Joe for 3-month evaluation; migration + Salesforce reconnection planned by EOY.`,
        mins: 37, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Deep-dive on scoring enhancements &mdash; multivariate + weighted-criteria scores, AI-driven scoring in the new platform, one-to-many score/account relationships, custom segment uploads (customer vs prospect scoring). Also demoed advanced Market Analyzer + AI-assisted search. Varun to provision 3-month trial access for Joe, confirm multi-fit/intent-score population in Salesforce, and plan migration of Salesforce connector + saved searches from old platform by EOY. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 8:00 AM', csm: 'rani', account: `Lenovo Group Ltd.`,
        note: `Strategic interlock w/ Adrian Escobar + Nick Johnson + Gavin Padden + Fiona O&rsquo;Brien (Lenovo Head of Sales Transformation) + Leanne Tolmie. Data-ingestion delays for Customer Engage tool are impacting Lenovo business deadlines. Contract-consolidation ask + direct Rani&harr;Leanne channel to unblock.`,
        mins: 24, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `Significant data-ingestion delays are putting critical Lenovo business deadlines at risk for the Customer Engage rollout. Third-party&rarr;first-party matching + &ldquo;news signals&rdquo; integration also need fixes so sellers see data in the Lenovo ecosystem instead of navigating externally. Fiona (Head of Sales Transformation) asked HG to consolidate multiple Lenovo contracts into one centralized approach for fiscal responsibility. Next steps: Rani to share onboarding project plan + feedback on news categories; Adrian to inventory all Lenovo contracts + ingestion points; direct Rani&harr;Leanne comms channel established; potential Paul Devon inclusion. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 8:00 AM', csm: 'nick', account: `Lenovo Group Ltd. (co-attend)`,
        note: `Nick co-attended Lenovo Strategic Interlock supporting Rani + Adrian. Same concerning signal &mdash; data-ingestion delays impacting business deadlines + contract consolidation ask.`,
        mins: 24, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `Nick joined the Lenovo Strategic Interlock as SAP-account CSM (Lenovo has SAP-adjacent workstreams). Same call summary &mdash; data ingestion for Customer Engage running behind, news-signals integration needs fix, Fiona/Leanne asking HG to consolidate multiple Lenovo contracts. Rani is primary CSM on Lenovo; Nick present to align on cross-account signals. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 8:30 AM', csm: 'divyam', account: `Lumen Technologies`,
        note: `Weekly sync w/ Max Shaw + Julian Rojas + Nathan Der. Confirmed read-only users cannot export (unblocks earlier concern). Demoed AI outbound scoring + Sales Copilot contact enrichment. Billing/payment delays escalated; onboarding new sales+marketing ops team members.`,
        mins: 46, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Multi-thread call. (1) Confirmed read-only user permissions properly restrict export, closing an earlier concern. (2) Demoed new AI-assisted outbound scoring in Market Analyzer + Contacts feature in Sales Copilot (bulk enrichment + net-new contact discovery beyond CRM). (3) Payment/billing delays flagged &mdash; escalated to billing team. (4) Product-list expansion request logged (AT&amp;T Switched Ethernet on Demand for Q3 project). (5) New sales+marketing ops members (Chad, Eric Bailey, George Bailey, Patricia Wallace org) to be onboarded to read-only + walkthrough scheduled. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 9:00 AM', csm: 'atisha', account: `RSM US`,
        note: `Weekly sync w/ Francis Brero + Chlo&eacute; Portier + Julian Rojas + L&eacute;opold Baudry + Ben Vollmer. Renewal decision confirmed &mdash; Option 2, ~$125K, one-year term, funded via Microsoft MDF. COO sign-off required (partner limit $5K). Formal proposal + submit to internal approval by end of month.`,
        mins: 13, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Short but decisive: RSM has landed on Option 2 for the renewal &mdash; approximately $125K, one-year term, funded via Microsoft Market Development Funds. Internal signing limit at RSM is $5K per partner, so anything above that requires COO approval. Atisha to submit formal Option 2 proposal; Ben Vollmer to route through COO + sign + process payment by end of month; Atisha to confirm with Ms. Lewis on required paperwork + check w/ Kelly on FY27 ownership handoff. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 9:00 AM', csm: 'rani', account: `Oracle`,
        note: `Monthly sync w/ Mark Fell + Noah Alford + James Tudway (VP Sales) + Paulette Wahl + Joe Lampitt + Alexi Mouarkach + Kraig Kraning + Erica Yim + Pam Huck. V2 migration in flight (target Oct 1) but contract renewal owner in Data Engineering still unclear &mdash; escalation risk.`,
        mins: 40, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Oracle stressed HG&rsquo;s critical role in GTM + territory planning + account targeting. Paulette pushing V2 migration to be ready by Oct 1 despite contract not yet fully signed &mdash; strong signal of internal urgency. BUT: no clear point person in Oracle Data Engineering has been named to own the contract renewal + procurement liaison. This is now the top-priority action. Additional threads: D&amp;B hierarchy alignment issues, time-series data for momentum analysis, workbook to model &ldquo;with vs without HG&rdquo; impact. Mark Fell to share pre-release strategy doc + workbook; Joe Lampitt to share how other customers use HG + expansion opportunities; follow-up handoff meeting w/ new Data Engineering stakeholder ASAP. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 9:00 AM', csm: 'pam', account: `Oracle (co-attend)`,
        note: `Pam co-attended Oracle monthly sync (Oracle is Pam-owned). Same concerning signal &mdash; Data Engineering renewal owner still unnamed + V2 migration timeline pressure.`,
        mins: 40, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Pam is Oracle account owner and co-attended alongside Rani. Same content &mdash; V2 migration Oct 1 push, contract renewal owner unnamed inside Oracle Data Engineering, D&amp;B hierarchy issues, workbook &ldquo;with vs without HG&rdquo; ask. Pam to follow up on account-owner side for procurement handoff. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 9:00 AM', csm: 'rani', account: `Cisco`,
        note: `Pre-renewal sync w/ Adrian Escobar + Roy Ramakers (incoming budget owner). Renewal Oct 5. Cisco building proprietary agentic AI seller platform (patent-pending) &mdash; discussed how HG&rsquo;s data + credit model fits sellers 2.0 vision + engagement path with John Wonder (VP&rarr;SVP).`,
        mins: 28, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Preparation for Oct 5 Cisco renewal, ~1 month out. Cisco is standing up its own agentic AI seller platform (proprietary, patents pending) &mdash; ingests calls + provides real-time seller prompts, complementing not replacing AlphaSense. Rani + Adrian aligning on how HG&rsquo;s data + new credit-model pricing fit Cisco&rsquo;s seller-2.0 vision. Adrian to break out master budget spreadsheet for leaders tomorrow morning; Adrian+Rani to plan Ops committee credit-model pitch; Steph Eller (Head of Competitive Win Center) preparing John Wonder meeting w/ workflow slide; Roy Ramakers now positioned to lead the renewal + manage the budget. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 9:30 AM', csm: 'varun', account: `BMC Software Inc`,
        note: `Deep 90-min integration session w/ Augie Buettner + Louise Eekhof + Noman Ali + Jagan Rasaputra. New Sales Copilot version (no SFDC integration prerequisite) unlocks near-term rollout. CRM enrichment integration paused pending CPU-timeout investigation + credit-consumption analysis.`,
        mins: 90, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Detailed integration working session. Decision: proceed immediately with new Sales Copilot version (which works without prior SFDC integration setup), while parking CRM-enrichment integration pending: (a) CPU-load investigation for matching-only mode &mdash; disabling triggers had been a temporary workaround, and (b) credit-consumption analysis so enrichment doesn&rsquo;t crowd out planned export use. Varun to send follow-up on additional security-approved integrations + snapshot of new Sales Copilot features; Noman to clarify SFDC integration requirements; team to set up new Sales Copilot access next week. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 10:00 AM', csm: 'varun', account: `ServiceNow`,
        note: `Bi-weekly w/ Kraig Kraning + Santhosh Ronanki. Data-strategy alignment: Option 1 (API/rent) vs Option 2 (MDM/own) &mdash; leaning API integration into MS Teams workflow. Prep for Oct Data Analytics team validation w/ Adesha.`,
        mins: 32, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Strategic discussion on how ServiceNow should consume HG data. Strong preference for &ldquo;rent&rdquo; via API integration (Option 1) over MDM ownership (Option 2). Focus on mapping data to specific Business Units, not just market scenarios. Concerns raised on current data limits for white-space + competitive landscape. Value case must show clear business outcomes / ROI to justify cost + gain procurement approval. Next: Varun+Santhosh to analyze current-vs-potential data (technographics, IT spend, intent, time series); Kraig to perform comparative account-plan visibility analysis; Data Analytics team (Adesha) to be looped in October to validate + discuss presentation layer; explore CRM-workflow integration over new Teams surface. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 10 &middot; 10:30 AM', csm: 'riley', account: `SAP Inc (L&amp;T)`,
        note: `TR Learning &amp; Talent premium-asset renewal + refresh w/ Kristin Mestre + Janessa Rutiaga + Ponti Manolides + Iris Kaminski (SAP). Two market-report versions (mid-market + enterprise) &mdash; mid-market first draft due Sept 28. Autonomous HCM + AI-agent messaging is core theme.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Working session on the TR Learning &amp; Talent market report for SAP. Splitting into two versions &mdash; mid-market (500&ndash;1,000 employees) and enterprise. Core messaging = SAP&rsquo;s autonomous HCM strategy (automate HR tasks, redesign work, reinvent workforce performance) + AI-agent innovations. Plan to capture additional reviews at SAP Connect (Oct 5&ndash;7). Next: Janessa to extract relevant reviews within the week + deliver mid-market first draft by Sept 28; Ponti to share autonomous-HCM slides; Kristin to revamp custom questions on TR for AI-agent themes; Riley to sort custom-questions gap on SAP Jewel. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'divyam', account: `Infinigate (Nuvias)`, health: 'Healthy',
        note: `Full demo of new HG platform pre-renewal. Client Abby leaning toward early migration; contract-upgrade path + contact-data test credits being scoped.` },
      { csm: 'riley', account: `TIS Treasury Intelligence Solutions`, health: 'Concerning',
        note: `Only 1 review sourced YTD &mdash; jeopardizes award eligibility + renewal. Review campaign launches Tuesday w/ $2,950 unused incentive budget.` },
      { csm: 'varun', account: `Hyland`, health: 'Healthy',
        note: `Multivariate + AI scoring intro on new platform. 3-month trial access provisioned; migration + SFDC reconnect planned by EOY.` },
      { csm: 'rani', account: `Lenovo Group Ltd.`, health: 'Concerning',
        note: `Data-ingestion delays impacting business deadlines on Customer Engage rollout. Contract-consolidation ask + direct Rani&harr;Leanne channel established.` },
      { csm: 'nick', account: `Lenovo Group Ltd. (co-attend)`, health: 'Concerning',
        note: `Nick joined Lenovo Strategic Interlock supporting Rani. Same signal &mdash; data ingestion + news-signals integration delays; contract consolidation.` },
      { csm: 'divyam', account: `Lumen Technologies`, health: 'Healthy',
        note: `Read-only export concern closed. AI outbound scoring + Sales Copilot Contacts demoed. Billing delays escalated; new ops team members being onboarded.` },
      { csm: 'atisha', account: `RSM US`, health: 'Healthy',
        note: `Renewal decided &mdash; Option 2, ~$125K, one-year, MDF-funded. COO sign-off needed. Formal proposal + payment by end of month.` },
      { csm: 'rani', account: `Oracle`, health: 'Concerning',
        note: `V2 migration Oct 1 push despite contract not yet signed &mdash; Data Engineering renewal owner still unnamed. Escalation needed on procurement handoff.` },
      { csm: 'pam', account: `Oracle (co-attend)`, health: 'Concerning',
        note: `Pam co-attended as account owner. Same concerning signal &mdash; Data Engineering renewal owner unnamed inside Oracle; V2 migration timeline pressure.` },
      { csm: 'rani', account: `Cisco`, health: 'Healthy',
        note: `Renewal Oct 5. Cisco building proprietary agentic AI seller platform. Adrian+Rani aligning HG credit-model + Roy Ramakers now leading renewal.` },
      { csm: 'varun', account: `BMC Software Inc`, health: 'Healthy',
        note: `New Sales Copilot version rolls out without SFDC-integration prerequisite. CRM enrichment paused pending CPU-load + credit-consumption analysis.` },
      { csm: 'varun', account: `ServiceNow`, health: 'Healthy',
        note: `Data-strategy decision: API/rent (Option 1) over MDM/own. BU-mapping approach + Oct validation w/ Adesha (Data Analytics). ROI framing being drafted.` },
      { csm: 'riley', account: `SAP Inc (L&amp;T)`, health: 'Healthy',
        note: `TR Learning &amp; Talent report split into mid-market + enterprise. Mid-market first draft Sept 28. Autonomous HCM + AI-agents = core theme.` },
    ],
  };
}

function dayMeta_2026_09_10() {
  return {
    pills: [
      ['dot-teal',   '13 Calls'],
      ['dot-red',    '3 Concerning'],
      ['dot-amber',  '5 Expansion'],
      ['dot-green',  '13 Vitally Pulses'],
      ['dot-grey',   'Thu Sep 10 &middot; 118 scanned'],
    ],
    tabs: ['Overview', 'Calls (13)', 'Pulses (13)', 'Action Items (8)']
  };
}

function dayOverviewHTML_2026_09_10() {
  return `<div class="section-label">Team Activity &mdash; Thursday September 10, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Sep 10 &mdash; 118 recordings scanned</strong> via SFDC SOQL &middot; <strong>13 confirmed calls</strong> (11 unique + 2 co-attend) across 7 CSMs &middot; 3 concerning &middot; 5 expansion signals &middot; SFDC alone confirmed 0 calls (0/17 transcripts had CSM speakers) &mdash; all confirmations via Weflow fallback
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>3 CONCERNING:</strong> Lenovo (data-ingestion delays impacting business deadlines &mdash; Fiona escalation, contract consolidation ask) &middot; Oracle (Data Engineering renewal owner still unnamed, V2 migration pushing Oct 1 without signed contract) &middot; TIS (only 1 review YTD &mdash; award eligibility + renewal risk)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Cisco (Oct 5 renewal + agentic AI seller platform + credit model pitch) &middot; Infinigate (pre-renewal migration + contact-data trial) &middot; Hyland (new platform + AI scoring 3-mo trial) &middot; BMC (new Sales Copilot rollout unblocked) &middot; RSM (renewal Option 2 confirmed &mdash; ~$125K MDF-funded)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 6 (86% no-transcript):</strong> Sept 2 71% &rarr; Sept 3 75% &rarr; Sept 4 76% &rarr; Sept 8 72% &rarr; Sept 9 75% &rarr; Sept 10 86% (101/118). Zero CSM speakers found in SFDC transcripts &mdash; Weflow fallback recovered all 11 confirmations. Formal escalation to Weflow support long overdue.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-red">2</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">92m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo (&#x1F534; data-ingestion delays + contract consolidation) &middot; Oracle (&#x1F534; DE renewal owner unnamed) &middot; Cisco (&#x1F4C8; Oct 5 renewal + agentic AI platform)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">159m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">BMC (&#x1F4C8; new Sales Copilot rollout) &middot; ServiceNow (data-strategy API/rent Option 1) &middot; Hyland (&#x1F4C8; new platform + AI scoring 3-mo trial)</div>
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
        <div><div class="metric-num m-grey">49m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">TIS (&#x1F534; only 1 review YTD &mdash; award + renewal risk) &middot; SAP L&amp;T (TR mid-market report + AI-agent messaging &mdash; draft Sept 28)</div>
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
        <div><div class="metric-num m-grey">95m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Infinigate (&#x1F4C8; pre-renewal migration + contact-data trial) &middot; Lumen (read-only closed + AI outbound scoring demoed)</div>
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
        <div><div class="metric-num m-grey">13m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">RSM US (&#x1F4C8; Option 2 renewal ~$125K MDF-funded &mdash; COO sign-off in flight)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">40m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Oracle co-attend (&#x1F534; account owner &mdash; DE renewal owner unnamed + V2 migration Oct 1 pressure)</div>
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
        <div><div class="metric-num m-grey">24m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo co-attend (&#x1F534; supporting Rani &mdash; data-ingestion delays + contract consolidation ask)</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed calls. SFDC events had zero CSM-speaker transcripts &mdash; Weflow participants list did not surface Andy on any Sept 10 recording.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_10() {
  return `<div class="section-label">Confirmed Calls &mdash; Thursday September 10, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>3 CONCERNING:</strong> Lenovo (data-ingestion delays + contract consolidation ask &mdash; Fiona/Leanne escalation) &middot; Oracle (DE renewal owner unnamed + V2 migration Oct 1 without signed contract) &middot; TIS (only 1 review YTD &mdash; award + renewal risk)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Cisco &middot; Infinigate &middot; Hyland &middot; BMC &middot; RSM (renewal Option 2 confirmed)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>All 11 unique confirmations via Weflow fallback (Step 4b):</strong> 0/17 SFDC transcripts contained a CSM speaker label. Attendance sourced from Weflow &lsquo;participants&rsquo; array; classification from Weflow summaries. This is why per-call detail cites summary content rather than verbatim transcript quotes.
  </div>`;
}

function dayPulsesHTML_2026_09_10() {
  const cards = [
    { csm:'divyam', health:'Healthy', account:`Infinigate (Nuvias)`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`New platform demo (AI scoring + Market Analyzer + credit-based export). Client Abby interested in early migration; contract-upgrade path + contact-data trial credits being scoped. Bulk-upload-contacts feedback going to product.` },
    { csm:'riley', health:'Concerning', account:`TIS Treasury Intelligence Solutions`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 10 &middot; Concerning`,
      excerpt:`Only 1 review sourced all year &mdash; jeopardizes award eligibility + renewal. Review campaign starts Tuesday w/ tiered incentives ($25/$50) + charity donation option. $2,950 of $3,000 budget unused; does not carry past April renewal.` },
    { csm:'varun', health:'Healthy', account:`Hyland`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`Multivariate + AI scoring intro on new platform. One-to-many score/account + custom segment uploads. 3-month trial access being provisioned for Joe; migration + SFDC reconnect planned by EOY.` },
    { csm:'rani', health:'Concerning', account:`Lenovo Group Ltd.`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 10 &middot; Concerning`,
      excerpt:`Data-ingestion delays impacting business deadlines on Customer Engage rollout. Third-party&rarr;first-party matching + news-signals integration need fixes. Fiona asking HG to consolidate multiple Lenovo contracts. Rani&harr;Leanne direct channel now open.` },
    { csm:'nick', health:'Concerning', account:`Lenovo Group Ltd. (co-attend)`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`,
      change:`Sep 10 &middot; Concerning`,
      excerpt:`Nick joined Lenovo Strategic Interlock supporting Rani + Adrian. Same signal &mdash; data ingestion + news-signals delays; contract-consolidation ask from Fiona; establishing direct Rani&harr;Leanne channel.` },
    { csm:'divyam', health:'Healthy', account:`Lumen Technologies`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`Read-only-user export concern closed. AI outbound scoring + Sales Copilot Contacts (bulk enrichment + net-new discovery) demoed. Payment delays escalated to billing. New sales+marketing ops members onboarding to read-only.` },
    { csm:'atisha', health:'Healthy', account:`RSM US`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`Renewal decision confirmed &mdash; Option 2, ~$125K, one-year term, funded via Microsoft MDF. Partner limit $5K &rarr; COO approval required. Formal proposal + sign-off + payment targeted by end of month. FY27 ownership handoff being scoped.` },
    { csm:'rani', health:'Concerning', account:`Oracle`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 10 &middot; Concerning`,
      excerpt:`V2 migration pushing Oct 1 despite contract not yet signed. Data Engineering renewal owner still unnamed inside Oracle &mdash; procurement handoff blocked. Mark Fell to share &lsquo;with vs without HG&rsquo; workbook; Joe Lampitt to share adjacent-customer examples.` },
    { csm:'pam', health:'Concerning', account:`Oracle (co-attend)`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`,
      change:`Sep 10 &middot; Concerning`,
      excerpt:`Pam co-attended as account owner. Same concerning signal &mdash; Data Engineering renewal owner unnamed inside Oracle; V2 migration timeline pressure. Pam to follow up on account-owner side for procurement handoff.` },
    { csm:'rani', health:'Healthy', account:`Cisco`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`Renewal Oct 5. Cisco building proprietary agentic AI seller platform (patents pending) &mdash; complements not replaces AlphaSense. Adrian+Rani aligning HG data + credit-model fit. Roy Ramakers now leading renewal + budget; John Wonder meeting being prepped.` },
    { csm:'varun', health:'Healthy', account:`BMC Software Inc`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`New Sales Copilot version works without prior SFDC integration &mdash; team green-lit for immediate rollout. CRM enrichment integration paused pending CPU-load investigation (matching-only mode) + credit-consumption analysis.` },
    { csm:'varun', health:'Healthy', account:`ServiceNow`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`Data-strategy alignment &mdash; API/rent (Option 1) preferred over MDM/own (Option 2). Map data to BUs, not market scenarios. Oct validation w/ Adesha (Data Analytics). Value case must show clear ROI to gain procurement approval.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (L&amp;T)`, opp:`Vitally Pulse &mdash; Sep 10 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 10 &middot; Healthy`,
      excerpt:`TR L&amp;T market report split into mid-market (500&ndash;1,000 emp) + enterprise. Autonomous HCM + AI-agent messaging = core theme. Mid-market first draft Sept 28; additional reviews to be captured at SAP Connect (Oct 5&ndash;7).` },
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

function dayActionsHTML_2026_09_10() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0910-1')?'done':''}" data-csm="rani" id="action-0910-1">
      <div class="action-checkbox ${doneActions.has('0910-1')?'checked':''}" onclick="toggleAction('0910-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; Lenovo &mdash; unblock Customer Engage data ingestion + return contract-consolidation proposal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar (+ Nick Johnson) &middot; Data-ingestion delays are hitting Lenovo business deadlines. Rani to share onboarding project plan + news-category feedback by early next week. Adrian to inventory all Lenovo contracts + ingestion points and come back with a consolidation proposal to Fiona/Leanne. HG internal: investigate third-party&rarr;first-party matching + news-signals integration to keep data inside Lenovo ecosystem.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0910-2')?'done':''}" data-csm="rani" id="action-0910-2">
      <div class="action-checkbox ${doneActions.has('0910-2')?'checked':''}" onclick="toggleAction('0910-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; Oracle &mdash; force clarity on Data Engineering renewal owner before V2 Oct 1 cutover</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Pam Huck &middot; Paulette is pushing V2 migration to be ready Oct 1 but contract is not signed and no Data Engineering owner has been named for renewal + procurement liaison. Mark Fell to share pre-release strategy + &ldquo;with vs without HG&rdquo; workbook; Joe Lampitt to share expansion examples; schedule handoff meeting with new DE stakeholder ASAP. Escalation risk if renewal owner not named this week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0910-3')?'done':''}" data-csm="riley" id="action-0910-3">
      <div class="action-checkbox ${doneActions.has('0910-3')?'checked':''}" onclick="toggleAction('0910-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; TIS &mdash; launch review-sourcing campaign Tuesday + spend $2,950 incentive budget by April</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers + Brett Castonguay &middot; Blair Romain owes customer contact list by Monday; Brett to launch tiered-incentive campaign next Tuesday ($25 / $50 gift cards, or charity donation, US-first). Existing review links extended into January. Geo dashboard activated (3-day activation). $2,950 of $3,000 budget must be spent before April renewal &mdash; award eligibility + renewal both at risk if review volume stays at YTD=1.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0910-4')?'done':''}" data-csm="rani" id="action-0910-4">
      <div class="action-checkbox ${doneActions.has('0910-4')?'checked':''}" onclick="toggleAction('0910-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cisco &mdash; Oct 5 renewal prep + credit-model pitch to Ops committee</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar (+ Roy Ramakers) &middot; Renewal is ~4 weeks out. Adrian to break out master budget spreadsheet for leaders tomorrow morning; Adrian+Rani to prep Ops committee pitch for new credit-model pricing; Steph Eller to send John Wonder workflow slide + prep seller-enablement-vs-Gartner mapping. Roy now leading renewal &mdash; loop him into all renewal + strategic calls going forward.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0910-5')?'done':''}" data-csm="varun" id="action-0910-5">
      <div class="action-checkbox ${doneActions.has('0910-5')?'checked':''}" onclick="toggleAction('0910-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; BMC &mdash; ship new Sales Copilot access + resolve CRM-enrichment CPU-load question</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari &middot; New Sales Copilot version does not require SFDC integration &mdash; team to set up access next week. Varun to (a) investigate CPU load for matching-only CRM enrichment mode, (b) send follow-up email on additional security-approved integrations, (c) share snapshot of new Sales Copilot features. Noman to clarify SFDC integration requirements.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0910-6')?'done':''}" data-csm="divyam" id="action-0910-6">
      <div class="action-checkbox ${doneActions.has('0910-6')?'checked':''}" onclick="toggleAction('0910-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Infinigate &mdash; pre-renewal migration path + contact-data test credits</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Angus Hyams &middot; Client Abby is leaning toward early migration. Angus to reach out to leadership for test credits on new contact-data feature + investigate current contract for upgrade path / like-for-like on new platform. Divyam+Angus to discuss moving Infinigate earlier as goodwill; share bulk-upload-contacts feedback with product team.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0910-7')?'done':''}" data-csm="atisha" id="action-0910-7">
      <div class="action-checkbox ${doneActions.has('0910-7')?'checked':''}" onclick="toggleAction('0910-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; RSM &mdash; submit Option 2 formal proposal + COO sign-off by end of month</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela + Julian Rojas &middot; Renewal decided &mdash; Option 2, ~$125K, one-year, MDF-funded. Atisha to submit formal proposal + confirm w/ Ms. Lewis on required paperwork + check w/ Kelly on FY27 ownership. Ben Vollmer to route through COO (partner limit $5K), sign, and process payment by end of month.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0910-8')?'done':''}" data-csm="all" id="action-0910-8">
      <div class="action-checkbox ${doneActions.has('0910-8')?'checked':''}" onclick="toggleAction('0910-8')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow SFDC-sync backlog Day 6 (86% no-transcript, 0 CSM speakers in SFDC)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops &middot; Sept 10 hit 86% no-transcript rate (101/118) &mdash; worst of the 6-day backlog. Zero of the 17 transcribed recordings contained a CSM speaker label; all 11 confirmations recovered via Weflow fallback. SFDC path is effectively blind. Open formal Weflow support ticket if not already; without transcripts in SFDC the daily scan depends entirely on Weflow participant metadata &mdash; brittle if that changes.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Wednesday September 23, 2026
// ============================================================

function dayData_2026_09_23() {
  return {
    calls: [
      { ts: 'Sep 23 &middot; 1:30 AM', csm: 'atisha', account: `Salesforce Inc.`,
        note: `SFDC ASEAN weekly sync w/ Rishabh Wadhwa. Zscaler blockage resolved (workaround in place) unlocking credit adoption. Demoed AI Scoring + Functional Area Intelligence (FAI) + Intent data. Team wants variety of use cases before deep-diving into FAI.`,
        mins: 26, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Weekly sync w/ Bangalore-Torrey Pines Salesforce team. (1) Zscaler blockage identified &mdash; workaround in place, tool is now accessible &mdash; credit adoption unlocked. (2) AI Scoring + FAI + Intent demoed for sales-play use cases (competitive displacement + market expansion). (3) Intent data value framed as reducing account-research time by prioritizing high-purchase-likelihood accounts. Atisha to send: Context Unboxed virtual event registration + collateral w/ speaker/topic details + 5-10 use case examples + a document on reading insights into workflows. Follow-up deep-dive on intent+FAI to be scheduled. Attendance via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 23 &middot; 7:00 AM', csm: 'riley', account: `IBM (TR Biweekly)`,
        note: `TrustRadius biweekly team sync w/ Ruxandra Marin + Mihaela Nedelescu + Cole Arutian + Mardigan Moffat. Push for reviews to qualify products for TR Buyer&rsquo;s Choice awards (5-9 needed). 2 new products qualified. Gift-card incentive extended to $50 through Oct 16.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `IBM TR biweekly. Goal: increase product reviews to qualify for Buyer&rsquo;s Choice awards (need 5-9 per product). 2 additional products have qualified since last update. Top Rated badges valued more than Buyer&rsquo;s Choice for category ranking (but B&rsquo;s C efforts contribute to Top Rated too). Gift-card incentive: $50 until Oct 16, $25 after. Riley to (a) ask campaigns team for additional review generation, (b) DM Angel re Tech Exchange arrival/departure dates, (c) add Angel + Caslin + Becky to Oct 21 enablement call, (d) update meeting invite w/ Tech Exchange details. Ruxandra to loop in client story strategists globally. Attendance via Weflow (SFDC transcript synced, CSM speaker also confirmed).`, source: 'sfdc' },

      { ts: 'Sep 23 &middot; 8:30 AM', csm: 'riley', account: `SAP Inc (IBP)`,
        note: `TR SAP IBP market report finalization w/ Alejandro Barajas + Cristina Stamati + Guido Kaup + Cole Arutian + Mardigan Moffat. Core messaging = &ldquo;agentic AI playing reimagined&rdquo; + decision support. 2-week turnaround post-paperwork. Buyer&rsquo;s Choice target 10 reviews by Oct 16.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `SAP IBP TR market report finalization. Focus: agentic AI + decision support messaging w/ Intelligent Supply Chain Planning (IVP) emphasis. Translations being addressed (Alejandro submitting update; Mardigan syncing tomorrow). Timeline: ~2 weeks to build report after paperwork/SOW finalized (ideally before end of September). Report built entirely on TrustRadius verified metrics + customer quotes. Key challenge: bridging industry AI noise vs actual customer adoption/use-case maturity. Buyer&rsquo;s Choice: aiming for 10 reviews by Oct 16. Leverage SAP Connect (Oct 5-7) to drive reviews + gather insights. Custom questions being developed w/ Alejandro. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 23 &middot; 9:00 AM', csm: 'divyam', account: `Snowflake Inc.`,
        note: `Renewal scoping w/ Alpesh Jain (SNOW GTM Strategy) + Ziad Amira (HG AE) + Gavin Padden. Snowflake needs install data for China + India market sizing beyond current cloud-spend usage. HG proposing potential one-off analysis for immediate priority.`,
        mins: 23, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: `Cloud Dynamics-Snowflake Renewal 2028 scoping. Snowflake currently uses HG cloud-spend data only (feeding APS model), lacks install/technographic data access. Immediate ask: high-level market sizing + segmentation for China (CSP, domestic vs global, state-owned vs MNC) and India (domestic vs GCC/competency centers) &mdash; short timeline. Ziad to explore one-off analysis feasibility w/ leadership + follow up via email; also seek intro to Field Ops + Data team (Beck Madden's team) for broader account-level intelligence discussion. Alpesh to ping Matt on Snowflake data team about full HG data set. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 23 &middot; 9:00 AM', csm: 'nick', account: `SAP Inc (intro)`,
        note: `Intro call w/ Satish Grandhi (SAP CTO track) + Anish + Scott Martin. SAP wants to leverage existing HG data more deeply within Crystal Ball + dashboards for demand-gen. Credit-based pricing + bulk file uploads discussed.`,
        mins: 25, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Introduction call to expand SAP's use of HG data beyond current bulk-delivery for commercial teams + Crystal Ball. SAP exploring: (a) API-access via existing contracted credits, (b) weekly bulk file uploads for dashboard integration, (c) technographic data on target companies (installs, verification dates, intensity) to spot tech shifts. Nick to (i) share contact info for SAP's current internal data-strategy team, (ii) provide HG documentation + website asset, (iii) facilitate intro to Franklin Herbert (main SAP contact from prior HG-built models), (iv) provide data on Rise Baking Company as requested example. SAP team to investigate existing credit contract for API activation + explore dashboard integration paths. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 23 &middot; 9:00 AM', csm: 'varun', account: `Exclusive Networks`,
        note: `Bi-weekly w/ Matt Tinker + Ben Abraham + Angus Hyams + Nick Johnson. Budget clearance pending; API sandbox testing prep. USER OVER-EXPORT INCIDENT &mdash; two users had excess data exports; access changed to read-only immediately.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Multi-thread bi-weekly. (1) Budget for next phase pending &mdash; shifting to digital budget w/ country-level finance implications. (2) API sandbox testing prioritized; plan to build Databricks pipeline w/ Lewis + Paulina + Margot + Morgan next week. (3) Managing consumption-based costs on new platform PostgreSQL architecture. (4) IMMEDIATE ACTION: Vanessa + Sandrine had excessive data exports depleting credits &mdash; Varun changed their access to read-only immediately. (5) Flexible contract options being explored (later start date, AWS Marketplace payment). Angus to arrange API sandbox access + brief Morgan on HG methodology before API call. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 23 &middot; 9:00 AM', csm: 'nick', account: `Exclusive Networks (co-attend)`,
        note: `Nick co-attended Exclusive Networks bi-weekly supporting Varun + Angus. Same content &mdash; budget pending, API sandbox prep, user over-export incident restricted to read-only.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Nick co-attended Exclusive Networks bi-weekly. Same call &mdash; budget clearance pending, API sandbox testing prep w/ technical teams next week, and same immediate action on Vanessa+Sandrine over-export incident (restricted to read-only). Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 23 &middot; 9:30 AM', csm: 'varun', account: `MongoDB Inc`,
        note: `Renewal scoping w/ Steven Harbron. Flat renewal decided but major price reduction (0.01 vs 0.05 credits per install data) gives MongoDB more capacity in same budget. Follow-up in ~1 month on future expansion (new product categories + embedding models).`,
        mins: 12, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Short but decisive renewal scoping. Pricing has dropped substantially &mdash; install data now 0.01 credits (from 0.05), 40k min threshold. MongoDB gets more data for same budget. Decision: proceed w/ flat renewal + current account/technology list, use the increased credit capacity. Steven expressed interest in future expansion (additional product categories, embedding models, other platforms). Next: Ziad + team to send follow-up email recap + updated renewal terms ASAP. Steven + Will Bracken to revise account lists + technologies for potential future expansion and circle back in ~1 month. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 23 &middot; 9:30 AM', csm: 'pam', account: `Epicor Software Corporation`,
        note: `Discovery call w/ Anthea Louie + Anderson Duncan + KP Pindle + Leo Zunz + Will Merman. HG data pitched for demand-gen &mdash; target-account IDs, RFP intent, technographics. POC scoped for manufacturing vertical (Americas + UK + SEA).`,
        mins: 31, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Epicor demand-gen discovery. HG data pitched for: (1) target-account identification in key markets, (2) TrustRadius buyer intent for RFP visibility + involvement, (3) technographic data from job postings + resumes for ERP install visibility, (4) buying centers + FAI for stakeholder ID, (5) executive-move tracking correlated w/ past tech implementations for predictive adoption. POC scope: single use case operationalizing technographics + fabric data, focused on manufacturing vertical w/ global footprint. Anderson to follow up via email w/ Anthea to structure POC. Consider BDR-first testing period before sales expansion. Mark Roussin + Will Merman + Natalie as key contacts for requirements. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 23 &middot; 9:30 AM', csm: 'riley', account: `IBM (TR Precision Demand + GEO)`,
        note: `TR follow-up w/ Rebecca Green + Chaitali Pramanik + Cole Arutian + Mardigan Moffat. Tiered licensing model discussion (maintenance mode for mature offerings, robust support for emerging). Geo-dashboard deep-dive scheduled. Precision Demand pilot for Q4/Q1.`,
        mins: 34, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `IBM TR follow-up on Precision Demand Program + GEO Initiatives. Shift from one-size-fits-all licensing to flexible, tiered approach aligned w/ product lifecycle: maintenance mode for mature offerings; robust support for emerging + market-leading. Growing importance of geo-insights + AI search traction &mdash; leverage reviews + content for actionable insights + LLM optimization. Chaitali to push global pods for 50-link + prioritize products. Cole to schedule geo-dashboards deep-dive w/ Ruxandra + Mihaila. Rebecca + Chaitali + Mardigan to explore + present tiered licensing/support options in the next 2 weeks. Chaitali to Slack Bill Engel + Sasha re AG insights + intent-data pre-meeting. Precision Demand pilot: Q4/Q1 target. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 23 &middot; 10:00 AM', csm: 'varun', account: `BMC Software Inc`,
        note: `Sales Copilot Salesforce integration follow-up w/ Louise Eekhof + Rafael Mueller + Augie Buettner. Field mapping + configuration steps to unlock Copilot value. Louise to identify minimum required fields + coordinate w/ Noman + Amrit for tech mapping.`,
        mins: 40, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Sales Copilot integration follow-up. Copilot value significantly diminished without SFDC integration &mdash; blocks leveraging existing customer data + territory info. Integration enables filtering accounts by segment (growth/enterprise), providing sellers w/ context. Copilot primarily read-only on SFDC data (minimal rate-limit concerns). Rafael to provide Excel file listing all available SFDC fields for mapping. Louise to identify minimum required fields + coordinate w/ Noman + Amrit/Jagan on tech mapping + review the configuration deck by Friday. Varun to schedule live config session (company context, offerings, scoring) + share detailed deck. Meeting next week to activate the system. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 23 &middot; 10:30 AM', csm: 'nick', account: `VASS (SAP MDF)`,
        note: `Renewal call w/ Jessica Utley + David Garcia Thomas. Contract expires Oct 12; internal adoption low; Jessica on vacation until early Nov &mdash; likely COVERAGE LAPSE. Delay past current cohort model may cost the discount tier.`,
        mins: 13, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Issue',
        detail: `SAP MDF Funds VASS renewal &mdash; SAP partner agreement expires Oct 12. Jessica Utley (VASS) flagged: (1) internal HG-tool adoption has NOT been as high as needed &mdash; needs justification to renew, (2) she's on vacation and won't be able to decide with team until early November, (3) coverage lapse likely, (4) SAP dev fund deadline for new requests approaching + funds may already be fully utilized, (5) delaying past current cohort model risks losing current discount tier from HG leadership. Nick to (i) provide usage data for VASS team, (ii) share success stories + updated materials on HG value, (iii) confirm SAP dev fund deadline w/ PMM. Jessica to review internal usage + check SAP dev fund status. Reconnect first week of November. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 23 &middot; 12:30 PM', csm: 'riley', account: `Paylocity`,
        note: `TR monthly w/ Matt Doyle + Olivia McFadden + Anderson Duncan. New features: live incentive budget in vendor portal, Google sign-in for reviewers, flexible event review system. Geo-dashboard deep-dive: mentions + citations + AI crawl data. Grayscale acquisition needs merge.`,
        mins: 22, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Paylocity TR monthly. Product updates: (1) live incentive budget tracking in vendor portal, (2) Google sign-in for reviewer frictionless UX, (3) flexible event-review system for attendee feedback without full review. Geo-dashboard deep-dive: content mentions + citations + sentiment + AI-crawl data + scheduled delivery. Paylocity enhancing AI (recruiting tools + embedded AI agents in workflows) &mdash; needs mapping to relevant TR platform categories. Riley to (a) audit Paylocity's categories, (b) notify team about Grayscale acquisition + combine Grayscale profile under Paylocity, (c) pass expanded scope details to team for category identification. Anderson to send Matt + Olivia more info on premium content offerings. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },
    ],
    pulses: [
      { csm: 'atisha', account: `Salesforce Inc.`, health: 'Healthy',
        note: `SFDC ASEAN sync &mdash; Zscaler blockage resolved (workaround), AI Scoring + FAI + Intent demoed, use-case collateral + deep-dive follow-up owed.` },
      { csm: 'riley', account: `IBM (TR Biweekly)`, health: 'Healthy',
        note: `TR Buyer&rsquo;s Choice review push (5-9 needed per product). 2 new qualifiers. $50 incentive through Oct 16. Tech Exchange enablement scheduled Oct 21.` },
      { csm: 'riley', account: `SAP Inc (IBP)`, health: 'Healthy',
        note: `SAP IBP TR market report finalization &mdash; "agentic AI + decision support" messaging, 2-week turnaround post-SOW. Buyer&rsquo;s Choice: 10 reviews target by Oct 16 (SAP Connect Oct 5-7).` },
      { csm: 'divyam', account: `Snowflake Inc.`, health: 'Healthy',
        note: `Renewal scoping &mdash; Snowflake needs install data for China + India market sizing (beyond current cloud-spend). HG exploring one-off analysis + intro to Field Ops/Data team (Beck Madden).` },
      { csm: 'nick', account: `SAP Inc (intro)`, health: 'Healthy',
        note: `Intro call w/ Satish Grandhi + Anish + Scott. Expanding SAP HG-data usage beyond Crystal Ball &mdash; API/bulk file uploads for dashboards + technographic data on target companies.` },
      { csm: 'varun', account: `Exclusive Networks`, health: 'Healthy',
        note: `Bi-weekly &mdash; budget pending, API sandbox next week (Databricks pipeline). USER OVER-EXPORT: Vanessa + Sandrine access changed to read-only immediately. Flexible contract options being explored.` },
      { csm: 'nick', account: `Exclusive Networks (co-attend)`, health: 'Healthy',
        note: `Nick co-attended Exclusive Networks bi-weekly supporting Varun + Angus. Same content &mdash; budget pending, API sandbox prep, user over-export restricted to read-only.` },
      { csm: 'varun', account: `MongoDB Inc`, health: 'Healthy',
        note: `Flat renewal + major price cut (0.01 vs 0.05 credits per install data) unlocks more capacity in same budget. Future expansion (categories + embedding models) in ~1 month.` },
      { csm: 'pam', account: `Epicor Software Corporation`, health: 'Healthy',
        note: `Demand-gen discovery &mdash; HG data pitched for target-accounts + RFP intent + technographics + executive-moves. POC scoped for manufacturing vertical (Americas + UK + SEA).` },
      { csm: 'riley', account: `IBM (TR Precision Demand)`, health: 'Healthy',
        note: `TR follow-up on tiered licensing + geo-dashboard + Precision Demand pilot (Q4/Q1). Framework proposal in 2 weeks; geo-dashboard deep-dive scheduled.` },
      { csm: 'varun', account: `BMC Software Inc`, health: 'Healthy',
        note: `Sales Copilot SFDC integration follow-up &mdash; field mapping + configuration steps. Live config session + activation next week; Louise to identify minimum required fields by Friday.` },
      { csm: 'nick', account: `VASS (SAP MDF)`, health: 'Concerning',
        note: `Oct 12 renewal + low internal adoption + Jessica on vacation until early Nov = likely coverage lapse. Delay past cohort model may cost discount tier. Reconnect first week of Nov.` },
      { csm: 'riley', account: `Paylocity`, health: 'Healthy',
        note: `TR monthly &mdash; live incentive budget + Google sign-in + flexible event reviews. Geo-dashboard deep-dive. Grayscale acquisition profile merge needed.` },
    ],
  };
}

function dayMeta_2026_09_23() {
  return {
    pills: [
      ['dot-teal',   '13 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '7 Expansion'],
      ['dot-green',  '13 Vitally Pulses'],
      ['dot-grey',   'Wed Sep 23 &middot; 145 scanned'],
    ],
    tabs: ['Overview', 'Calls (13)', 'Pulses (13)', 'Action Items (8)']
  };
}

function dayOverviewHTML_2026_09_23() {
  return `<div class="section-label">Team Activity &mdash; Wednesday September 23, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Sep 23 &mdash; 145 recordings scanned</strong> via SFDC SOQL &middot; <strong>13 confirmed calls</strong> (12 unique + 1 co-attend) across 6 CSMs &middot; 1 concerning &middot; 7 expansion signals &middot; SFDC alone confirmed 5 customer calls (1 GTM enablement excluded internal) &middot; Weflow fallback added 7 recoveries
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> VASS SAP MDF (Nick) &mdash; Oct 12 renewal + low internal adoption + Jessica on vacation until early Nov = likely coverage lapse; delay past current cohort model may cost the discount tier
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>7 EXPANSION:</strong> Snowflake (China+India market-sizing one-off + broader data-team intro) &middot; MongoDB (flat renewal + 5x price cut on install data unlocks capacity + future categories) &middot; BMC (Sales Copilot SFDC integration activation) &middot; SAP IBP (agentic-AI TR market report + Oct 16 review target) &middot; SAP intro (dashboard/API expansion beyond Crystal Ball) &middot; Epicor (demand-gen POC scoped for manufacturing vertical) &middot; IBM Precision Demand (tiered licensing + geo-dashboard + Q4/Q1 pilot)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 15+ (86% no-transcript):</strong> Sept 23 = 145 recordings, 21 with transcripts, 124 without. Only 5 of 13 confirmed customer calls surfaced via SFDC speaker detection; the remaining 8 were recovered from Weflow &lsquo;participants&rsquo; fallback (Riley on 3 TR calls, Nick on 2 SAP calls, Atisha SFDC, Pam Epicor, Nick+Varun on Exclusive Networks). Formal Weflow escalation long overdue.
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
        <div><div class="metric-num m-grey">113m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM x2 (TR biweekly + Precision Demand + geo) &middot; SAP IBP (&#x1F4C8; agentic-AI market report) &middot; Paylocity (TR monthly + Grayscale merge)</div>
    </div>

    <div class="csm-card has-calls" data-csm="varun">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-varun">VT</div>
        <div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">79m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">MongoDB (&#x1F4C8; flat renewal + 5x price cut) &middot; BMC (Sales Copilot SFDC integration) &middot; Exclusive Networks (user over-export incident + API sandbox prep)</div>
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">65m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP intro (&#x1F4C8; dashboard/API expansion) &middot; Exclusive Networks co-attend &middot; VASS SAP MDF (&#x1F534; Oct 12 renewal + coverage lapse risk)</div>
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
        <div><div class="metric-num m-grey">26m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Salesforce ASEAN (Zscaler workaround unblocks credit adoption; AI Scoring + FAI demoed; collateral + deep-dive owed)</div>
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
        <div><div class="metric-num m-grey">23m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Snowflake (&#x1F4C8; China + India market-sizing one-off + broader data-team intro pending)</div>
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
        <div><div class="metric-num m-grey">31m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Epicor (&#x1F4C8; demand-gen discovery &mdash; POC scoped for manufacturing vertical)</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. SFDC transcripts contained no Rani speaker label; Weflow participants did not surface Rani on any Sept 23 recording.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. SFDC transcripts contained no Andy speaker label; Weflow participants did not surface Andy on any Sept 23 recording.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_23() {
  return `<div class="section-label">Confirmed Calls &mdash; Wednesday September 23, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> VASS SAP MDF (Nick) &mdash; Oct 12 renewal + low internal adoption + vacation delay until early Nov = coverage lapse risk + potential discount-tier loss
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>7 EXPANSION:</strong> Snowflake &middot; MongoDB &middot; BMC &middot; SAP IBP &middot; SAP intro &middot; Epicor &middot; IBM Precision Demand
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weekly GTM Enablement Session excluded as INTERNAL:</strong> 95+ HG employees on the recording (rebrand to &lsquo;Contextual Intelligence&rsquo; Oct 6 launch prep). Pam Huck present as Q&amp;A participant but no customer &mdash; not counted in daily engagement metrics.
  </div>`;
}

function dayPulsesHTML_2026_09_23() {
  const cards = [
    { csm:'atisha', health:'Healthy', account:`Salesforce Inc.`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`SFDC ASEAN weekly sync &mdash; Zscaler blockage resolved (workaround in place) unblocks credit adoption. Demoed AI Scoring + FAI + Intent for sales-play use cases. Atisha to send 5-10 use case collateral + insights-into-workflow doc; deep-dive on intent+FAI TBD.` },
    { csm:'riley', health:'Healthy', account:`IBM (TR Biweekly)`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`TR Buyer&rsquo;s Choice review push &mdash; 5-9 needed per product. 2 new qualifiers this cycle. $50 gift-card incentive through Oct 16. Tech Exchange enablement call scheduled Oct 21 (adding Angel + Caslin + Becky).` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (IBP)`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`SAP IBP TR market report &mdash; agentic-AI + decision-support messaging, 2-week turnaround post-SOW. Buyer&rsquo;s Choice: 10 reviews target by Oct 16. Leverage SAP Connect (Oct 5-7) for reviews. Alejandro handling translations + custom questions.` },
    { csm:'divyam', health:'Healthy', account:`Snowflake Inc.`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`Cloud Dynamics-Snowflake renewal scoping. Snowflake needs install data for China (CSP + state-owned vs MNC) + India (domestic vs GCC) market sizing. HG exploring one-off analysis + intro to Field Ops/Data team (Beck Madden).` },
    { csm:'nick', health:'Healthy', account:`SAP Inc (intro)`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`Intro call w/ Satish Grandhi + Anish + Scott. SAP wants deeper HG data use in Crystal Ball + dashboards + API. Nick to share HG docs + facilitate intro to Franklin Herbert + provide sample data on Rise Baking Company.` },
    { csm:'varun', health:'Healthy', account:`Exclusive Networks`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`Bi-weekly &mdash; budget clearance pending. API sandbox testing prep w/ Lewis + Paulina + Margot + Morgan next week (Databricks pipeline). USER OVER-EXPORT: Vanessa + Sandrine access changed to read-only immediately. Flexible contract options being explored.` },
    { csm:'nick', health:'Healthy', account:`Exclusive Networks (co-attend)`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`Nick co-attended Exclusive Networks bi-weekly supporting Varun + Angus. Same call &mdash; budget clearance pending, API sandbox testing next week, user over-export incident restricted to read-only.` },
    { csm:'varun', health:'Healthy', account:`MongoDB Inc`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`Flat renewal decided + major price reduction (0.01 vs 0.05 credits per install data). MongoDB gets more data for same budget. Future expansion (product categories + embedding models + other platforms) planned for revisit in ~1 month.` },
    { csm:'pam', health:'Healthy', account:`Epicor Software Corporation`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`Demand-gen discovery w/ Anthea Louie + Anderson Duncan + KP Pindle + Leo Zunz. POC scoped for manufacturing vertical (Americas + UK + SEA), operationalizing HG technographics + fabric data. BDR-first testing before sales expansion.` },
    { csm:'riley', health:'Healthy', account:`IBM (TR Precision Demand)`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`TR follow-up on Precision Demand + GEO. Tiered licensing model discussion (maintenance mode for mature offerings, robust support for emerging). Geo-dashboards deep-dive to be scheduled. Precision Demand pilot targeted for Q4/Q1.` },
    { csm:'varun', health:'Healthy', account:`BMC Software Inc`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`Sales Copilot SFDC integration follow-up. Rafael to provide Excel field list. Louise to identify minimum required fields + review config deck by Friday. Live config session next week + activation the following week.` },
    { csm:'nick', health:'Concerning', account:`VASS (SAP MDF)`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`,
      change:`Sep 23 &middot; Concerning`,
      excerpt:`Oct 12 renewal expiration. Internal adoption low + Jessica Utley on vacation until early Nov &mdash; likely coverage lapse. Delaying past current cohort model risks losing discount tier. Nick to send usage data + success stories; reconnect first week of Nov.` },
    { csm:'riley', health:'Healthy', account:`Paylocity`, opp:`Vitally Pulse &mdash; Sep 23 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`,
      change:`Sep 23 &middot; Healthy`,
      excerpt:`TR monthly &mdash; live incentive budget in vendor portal + Google sign-in + flexible event review system. Geo-dashboard mentions + citations + AI-crawl data. Grayscale acquisition profile to be merged. Category audit + expanded-scope handoff to team.` },
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

function dayActionsHTML_2026_09_23() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0923-1')?'done':''}" data-csm="nick" id="action-0923-1">
      <div class="action-checkbox ${doneActions.has('0923-1')?'checked':''}" onclick="toggleAction('0923-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; VASS SAP MDF &mdash; Oct 12 renewal + likely coverage lapse (Jessica on vacation)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Contract expires Oct 12 but Jessica Utley on vacation until early Nov = coverage lapse. Nick to (1) send VASS usage data by end of week, (2) share success stories + updated HG value materials, (3) confirm SAP dev-fund deadline w/ PMM (funds may already be exhausted). Flag risk to leadership: delay past current cohort model may cost the discount tier. Reconnect first week of November.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0923-2')?'done':''}" data-csm="divyam" id="action-0923-2">
      <div class="action-checkbox ${doneActions.has('0923-2')?'checked':''}" onclick="toggleAction('0923-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Snowflake &mdash; scope one-off China + India market-sizing analysis + broader data-team intro</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan + Ziad Amira &middot; Snowflake needs install-data breakdown for China (CSP, domestic vs global, state-owned vs MNC) + India (domestic vs GCC/competency centers). Ziad to discuss one-off analysis feasibility w/ leadership + follow up w/ Alpesh by email. Also seek intro to Field Ops + Data team (Beck Madden). Alpesh will loop in Matt on Snowflake data team.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0923-3')?'done':''}" data-csm="varun" id="action-0923-3">
      <div class="action-checkbox ${doneActions.has('0923-3')?'checked':''}" onclick="toggleAction('0923-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; BMC &mdash; Sales Copilot SFDC integration activation next week</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Rafael Mueller &middot; Rafael to provide Excel file listing all SFDC fields for mapping ASAP. Louise Eekhof to identify minimum required fields + coordinate w/ Noman + Amrit/Jagan on tech mapping + review config deck by Friday. Varun to schedule live config session (company context, offerings, scoring) + meeting next week to activate the system.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0923-4')?'done':''}" data-csm="varun" id="action-0923-4">
      <div class="action-checkbox ${doneActions.has('0923-4')?'checked':''}" onclick="toggleAction('0923-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; Exclusive Networks &mdash; user over-export incident + API sandbox prep</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Angus Hyams &middot; Two users (Vanessa + Sandrine) had excessive data exports depleting credits &mdash; Varun already restricted access to read-only. Angus to arrange API sandbox access for Lewis + Paulina + Margot + Morgan next week and brief Morgan on HG methodology before API call. Angus to discuss flexible contract options (later start date, AWS Marketplace payment) w/ deal desk. Monitor consumption ongoing.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0923-5')?'done':''}" data-csm="riley" id="action-0923-5">
      <div class="action-checkbox ${doneActions.has('0923-5')?'checked':''}" onclick="toggleAction('0923-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; SAP IBP + IBM &mdash; Buyer&rsquo;s Choice Oct 16 push (multi-account TR review drive)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers &middot; SAP IBP target: 10 reviews by Oct 16 (leverage SAP Connect Oct 5-7). IBM target: qualify remaining products (need 5-9 per product; 2 new qualifiers this week). $50 gift-card incentive live through Oct 16 &rarr; drops to $25. Riley to (a) ask campaigns team for additional review generation efforts across both accounts, (b) update Tech Exchange enablement invite + add Angel + Caslin + Becky by Oct 21, (c) audit Paylocity categories + merge Grayscale profile.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0923-6')?'done':''}" data-csm="nick" id="action-0923-6">
      <div class="action-checkbox ${doneActions.has('0923-6')?'checked':''}" onclick="toggleAction('0923-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; SAP intro &mdash; expand SAP HG-data usage beyond Crystal Ball (Franklin Herbert intro)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson &middot; Nick to (1) share contact info for SAP's internal data-strategy team, (2) provide HG documentation + website asset, (3) facilitate intro to Franklin Herbert (main SAP contact from prior HG-built models), (4) provide sample technographic data on Rise Baking Company. SAP team to investigate existing credit contract for API activation + explore dashboard integration paths.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0923-7')?'done':''}" data-csm="pam" id="action-0923-7">
      <div class="action-checkbox ${doneActions.has('0923-7')?'checked':''}" onclick="toggleAction('0923-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Epicor &mdash; structure manufacturing-vertical POC (Americas + UK + SEA)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck + Anderson Duncan &middot; Anderson to follow up via email w/ Anthea to structure POC. Focus on single use case demonstrating operationalization of HG technographics + fabric data for manufacturing vertical (global footprint). Consider BDR-first testing period before sales expansion. Mark Roussin + Will Merman + Natalie identified as key contacts for requirements (employee count limits, etc.). Mark Roussin to be added to automated email drip.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0923-8')?'done':''}" data-csm="all" id="action-0923-8">
      <div class="action-checkbox ${doneActions.has('0923-8')?'checked':''}" onclick="toggleAction('0923-8')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow SFDC-sync backlog persisting (86% no-transcript)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops &middot; Sept 23 &mdash; 124 of 145 recordings had no SFDC transcript (86%). Only 5 of 13 confirmed customer calls surfaced via SFDC speaker detection; 8 recovered via Weflow &lsquo;participants&rsquo; fallback. This has been at 70-86% no-transcript for 15+ consecutive days. Open/escalate formal Weflow support ticket if not already; daily scan relies entirely on Weflow participant metadata which is brittle.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Wednesday September 16, 2026
// ============================================================

function dayData_2026_09_16() {
  return {
    calls: [
      { ts: 'Sep 16 &middot; 6:00 AM', csm: 'atisha', account: `Deloitte`,
        note: `Weekly syncup w/ Rakesh Reddy + Angus Hyams + Augie Buettner + Omkar Hunuswadkar (Deloitte India Global GTM). Data updates for SHM/ZS/WM accounts, manual delivery workflow, intent-data retention for consulting firms, quantitative tracking of intelligence utilization.`,
        mins: 21, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Deloitte India Global GTM Strategy Team weekly. Threads: (1) SHM/ZS/WM account data will be updated w/ potential manual delivery before next scheduled drop, (2) Wamspoo demographic data unreliable — verification issue, (3) consulting firms (Deloitte, etc.) retained in intent data even if marked as tickers, (4) two data deliveries/month continues for 2 more months to evaluate effectiveness, (5) building quantitative measures for intelligence utilization tracking beyond qualitative feedback. Himanshu Walia to send new account info (Duns ID) for FY27 list. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 7:00 AM', csm: 'riley', account: `FactSet Research Systems`,
        note: `TR Onboarding call w/ Lin Zuo + Andy co-attend. FactSet instance needs re-enable for renewal (target tomorrow). Riley walked TR vendor portal (TR scores, Buyer&rsquo;s Choice + Top Rated qualification, competitor dashboard vs G2/Capterra).`,
        mins: 28, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Onboarding Lin Zuo (FactSet) to TR vendor portal. Riley&rsquo;s team to re-enable FactSet instance for renewal by tomorrow. Riley to send vendor-portal invite after Lin provides email today. Demoed TR scores, award qualification criteria (Buyer&rsquo;s Choice / Top Rated), analytics dashboards, competitor dashboards, product-listing editing (CTAs, descriptions, integrations). Follow-up call planned this/next week for review strategy + campaigns. Advanced features (prompt tracking, crawl analytics) in future calls. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 7:00 AM', csm: 'andy', account: `FactSet Research Systems (co-attend)`,
        note: `Andy co-attended FactSet TR Onboarding supporting Riley. Same content &mdash; Lin Zuo portal onboarding, FactSet instance re-enable for renewal, TR portal walkthrough.`,
        mins: 28, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Andy co-attended FactSet TR Onboarding as Riley's onboarding backup. Same content — Lin Zuo access to TR vendor portal, FactSet instance re-enable target tomorrow, TR portal walkthrough. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 7:30 AM', csm: 'rani', account: `Cisco WebEx`,
        note: `Monthly sync w/ Adrian Escobar + Roy Ramakers. Renewal SOW pending internal approval due to business-model change (significant cost differences). Consolidating AI tools into unified Sales AI front-end. Account snapshot moving to self-serve.`,
        mins: 18, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Cisco WebEx monthly sync. SOW pending Cisco internal approval — business-model change caused significant cost differences requiring leadership reconciliation. Renewal urgency: end of fiscal month (5 weeks). Consolidating multiple AI tools into unified Sales AI front-end for streamlined seller experience. GSI contract data utilization being questioned — may be removed if not driving value (Adrian+Rainey to check w/ Mara). Account snapshot tool transitioning from dedicated team to self-serve model. Interest in incorporating historical vendor/product change data for vendor establishment tracking. Follow-up call w/ Mara + Andre for new AI capabilities deep-dive. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 8:00 AM', csm: 'rani', account: `Lenovo Group Ltd.`,
        note: `Account Match Analysis w/ Nick Johnson + Alexi Mouarkach + Antaleena Ganguly. D-U-N-S mismatches causing duplicate records &mdash; data UNUSABLE, blocking downstream + risking project timelines. Fixing matching logic w/ city-level + account-alias fallback.`,
        mins: 32, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `Lenovo Data Team escalation. Core issue: D-U-N-S number mismatches causing duplicate records &mdash; data is unusable, blocking downstream processes, jeopardizing project timelines + trust issues among internal Lenovo users. Root causes: (a) D-U-N-S inconsistently available or at different hierarchical levels (HQ vs site), (b) fallback matching on name+country+URL insufficient, (c) too many records lack D-U-N-S at all. Solutions being explored: (1) enhance matching logic w/ city-level info, (2) use account aliases as primary matching field w/ party name as fallback. Antaleena/Alexi to rework match-rate reports (D-U-N-S mismatches no longer counted as matches). Follow-up meeting scheduled this week for solutions + timelines. Nick to understand data-set growth process for Lenovo where D-U-N-S missing. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 8:00 AM', csm: 'nick', account: `Lenovo Group Ltd. (co-attend)`,
        note: `Nick co-attended Lenovo Account Match Analysis supporting Rani. Same D-U-N-S mismatch escalation &mdash; data unusable, downstream processes blocked, project-timeline risk.`,
        mins: 32, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `Nick co-attended Lenovo Account Match Analysis. Same D-U-N-S mismatch escalation. Nick&rsquo;s specific ask: understand HD-side process for growing/enhancing data set for companies where Lenovo lacks D-U-N-S. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 8:30 AM', csm: 'andy', account: `SAS Institute Inc.`,
        note: `Weekly Sync w/ Adrian Carr + Bhargavi Joshi (SAS EMEA). Agentic AI implementation, data hygiene + AI governance frameworks. Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters.`,
        mins: 26, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAS EMEA weekly. Discussion: agentic-AI implementation challenges (need central AI activity oversight to avoid "wild west"; data hygiene paramount; AI Navigators governance tool being built starting w/ internal SAS use cases). Sales enablement: forecasting methodology refresh, ICP creation on HG platform (Mark Ivy + Tarsia next week or two). Bhargavi + Adrian dig into emails to identify topics to drop/bring in for negotiations. IMPORTANT: Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 9:00 AM', csm: 'riley', account: `SAP Inc (SuccessFactors)`,
        note: `TR SuccessFactors Progress w/ Kristin Mestre + Cole Arutian + Mardigan Moffat. Booth space pilot at SAP Connect for reviews. PO automation issue &mdash; manual follow-up needed. Kristin OOO around Oct 1-2 (brother&rsquo;s wedding + Vegas).`,
        mins: 20, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP SuccessFactors + TR Progress call. Booth-space pilot at SAP Connect strategic for review capture despite distance from main customer engagement areas. Automated PO receiving issue &mdash; manual follow-up + investigation (Mardigan). Kristin heading to brother&rsquo;s wedding + Vegas &mdash; impacts availability around Oct 1-2. Janessa working on Learning Italian report + analyzing incoming reviews for enterprise-version quotes. Kristin got travel-agency license (side hustle). Next: Riley+Angel+Alejandro meet tomorrow for event details; alignment call on Oct 30. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 9:00 AM', csm: 'rani', account: `Amazon Web Services (AWS)`,
        note: `Monthly cadence w/ Nishat Akhter + Chris Deever + Mark Fell + KP Pindle + Cole Arutian + Alexi Mouarkach + Mardigan Moffat. V2 data-feed migration Q4 deadline critical. Qwik platform development. Renewal end of June. Q1 roadmap review + MCP pricing.`,
        mins: 55, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `AWS Monthly. Multi-thread: (1) V2 data-feed migration critical Q4 deadline &mdash; risk of service disruption if missed; essential for new datasets + product dev, (2) Qwik platform under development &mdash; not day-one use case but significant future direction, (3) rapid HG data-asset expansion on v2, (4) TR portfolio discussion for AWS visibility + opt-in leads via precision demand intelligence, (5) contract renewal end of June &mdash; roadmap discussions + vendor consolidation opportunities. Next: Mark Fell to share docs on data assets + pricing + data dictionaries; Q1 meeting to be scheduled by Nishat; Noah to summarize past notes for onsite meeting agenda; Rani to share updated data dictionary + Cloud Dynamics utilization info; onsite meeting in Seattle to be coordinated by Jhansi. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 9:30 AM', csm: 'pam', account: `Microsoft`,
        note: `HG Intent Topic Review w/ Will Norris + Mark Fell + Rishabh Wadhwa. Reconciling 256 tracked topics vs new Bryce recommendations (152 may drop) + append vs replace decision. Additional competitor products for tracking. Credit-impact clarity needed before implementation.`,
        mins: 14, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Microsoft intent-topic + product-data review for Cloud AI Platforms + Security + AI Business Solutions propositions. Reconciling: 256 current tracked topics vs Bryce&rsquo;s recommendations (152 may drop). Decision needed: append or replace existing lists. Additional competitor products + installation data to be identified. Recent Microsoft org changes + new strategies may influence priorities. Will Norris to consult Cloud AI Platforms + Security + AI Business Solutions areas today; Rishabh to send current product list + requested additions. Pam+Rishabh to provide credit-impact clarity before any changes. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 16 &middot; 9:30 AM', csm: 'riley', account: `Intuit (IES)`,
        note: `TR CSM Sync w/ Natalie Pratt + Sydnee Brooker + Mardigan. Intuit pivoting to ABM (Demandbase). Building custom-content report on Desktop Enterprise&rarr;IES/Online Advance migration. Buyer&rsquo;s Choice drive for IES + Online Advance by November.`,
        mins: 29, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Intuit IES TR sync. Intuit shifting to Account-Based Marketing (Demandbase as chosen ABM tool). Need to integrate TR w/ Demandbase for paid-media campaigns. Custom content initiative: report on Desktop Enterprise&rarr;IES/Online Advance migration to support ABM + upgrade efforts. Natalie to (i) run custom-report idea by Amy, (ii) check master NDA w/ TR, (iii) work with marketing ops on audience list of customers who upgraded, (iv) check Eliza on data-passing to TR. Riley to (i) send TR-Demandbase help article, (ii) schedule Janessa call for custom question updates. Buyer&rsquo;s Choice drive for IES + Online Advance by November. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 10:00 AM', csm: 'riley', account: `Adobe`,
        note: `TR Success Call w/ Allison + Cole Arutian + Mardigan Moffat. Marketing org changes + budget updates pending. Deck being prepped for Ashley. Erica intro for Precision Demand Program. Frame.io + Real-Time CDP need 2+5 reviews by Oct 16.`,
        mins: 7, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Adobe TR success touch. Marketing org changes + budget implications still pending. Deck being prepared for Ashley for budget + resource clarity. Deal-desk approvals awaited (2 deal-desk personnel OOO). Frame.io needs 2 reviews + Real-Time CDP needs 5 reviews by Oct 16 for Buyer&rsquo;s Choice. Internal ownership discussion for ad-hoc review campaign requests. Allison to facilitate intro to Erica for Precision Demand Program today. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 10:00 AM', csm: 'divyam', account: `Informatica (SFDC-driven)`,
        note: `Weekly Partnership Sync w/ Ziad Amira + Alexi Mouarkach + Hemraj Singh. HG in Salesforce "Batteries Included" partner initiative. New "company_group_id" column for credit consumption. Phase 2 integration March 2027. ROI data (impact + AOV percentages) to be shared.`,
        mins: 11, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Informatica-Salesforce partnership sync. HG recognized in Salesforce&rsquo;s "batteries is included" partner initiative (potential data marketplace inclusion). Salesforce received Informatica recommendation for HG (influential vs Demandbase). New "company_group_id" column being added to data feed for credit consumption tracking under new credit-consumption model. Client focus: platform + process + tools integration (new capability additions on hold unless critical). Phase 2 integration targeted March 2027, potential Phase 3 to follow. HG developing new AI-driven capabilities for tech-usage analysis beyond identifying tech usage. Next: Hemraj to review coverage numbers; Divyam to share new column name + write-up via email; Ziad to reach out to Zane for ROI (impact + AOV percentages). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 10:30 AM', csm: 'pam', account: `F5`,
        note: `TR Bi-Weekly w/ Sherry Arnold + Mardigan Moffat. F5 AI Security Platform review strategy (existing profile, module tagging). Appworld + RSA event participation planning. Buyer&rsquo;s Choice Oct 16 for Network Connect.`,
        mins: 15, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `F5 TR bi-weekly. F5 AI Security Platform has existing profile &mdash; simplifies setup for modules (AI Red Team, AI Guardrails, Sensitivity, Data Detection). Review challenges for products w/ limited customer base. Event strategy: smaller footprints + audio-only reviews for Appworld + RSA. Correct product tagging in Gartner for review funnelling. Payment/name updates streamlined (preference: rename to "HG"). Sherry to update F5 AI Security Platform profile + find Network Connect reviewer by Oct 16. Pam to provide Buyer&rsquo;s Choice details. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 16 &middot; 11:30 AM', csm: 'varun', account: `Alight Solutions LLC`,
        note: `Competitor List Refresh + SFDC Config Review w/ Betsy Turnbaugh + Augie Buettner. AI leave management product analysis. Two-level product mapping analysis (vendor data + refined SFDC list). White space for new client acquisition. Renewal discussion Oct 7.`,
        mins: 23, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Alight product-alignment + white-space discovery. Varun presented detailed analyses of current SFDC product alignment + suggested outdated-product replacements. White-space opportunity: companies using leave-management services but not Alight&rsquo;s offerings. Alight developing new AI-powered leave management product &mdash; HG data to support market launch + strategy. Two levels of analysis: (a) initial product mapping via vendor data, (b) refining SFDC current product list. Betsy to review analyses w/ Carolyn + Paul Thompson (new commercial ops lead). Varun+Augie to provide trial access to new AI-driven HG platform for Betsy + 2-3 colleagues. Monthly sync starting Oct 7. Betsy to prepare renewal business case (competitor mapping + absence-management + GTM value). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 12:00 PM', csm: 'atisha', account: `Optiv Security Inc`,
        note: `Weekly sync w/ Roger Conarroe + Augie Buettner. AI Scoring feature demoed for CrowdStrike displacement identification &mdash; generates target-account lists + sales plays via fit/need/intent/displacement signals. Context 2026 Oct 6 invite pending.`,
        mins: 35, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Optiv sales-play discovery for CrowdStrike. Atisha demoed AI Scoring feature to identify clients using competing/homegrown AI tools for security &mdash; potential CrowdStrike displacement targets. AI Scoring generates target account lists + sales plays via fit + need + intent + displacement signals. Buyer activity intent (from TR reviews) captures active research/evaluation. Feature customizable via natural-language chat. Roger to (i) play w/ AI Scoring using CrowdStrike + other sales plays, (ii) investigate license access + credit usage for exports, (iii) share feedback, (iv) discuss w/ sales teams for new displacement plays. Atisha to research more products for targeting + send Context 2026 invite (Oct 6). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 12:30 PM', csm: 'riley', account: `SAP Inc (Custom Questions)`,
        note: `SAP Custom Questions Sync w/ Alejandro Barajas + Janessa Rutiaga. New content-strategy model &mdash; content strategists as gatekeepers driving pipeline. Update outdated custom questions across product groups (AI + Juul focus). Feedback deadline Sept 25-28 for SAP Connect.`,
        mins: 28, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP Custom Questions Sync. New model implemented &mdash; content strategists as gatekeepers for content creation to proactively drive pipeline (product marketing now a byproduct of content strategy). Updating outdated custom questions across SAP product groups w/ AI use cases + Juul integration focus. Priority product groups: Finance, SAP Supply Chain Management, Sustainability, Business AI (including Juul). Alejandro to email Janessa+Riley w/ list of solutions/products by Sept 25-28 for SAP Connect prep. Janessa to compile outdated custom questions list. Riley to loop Alejandro into Business Network email so content strategy team is engaged. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 16 &middot; 1:00 PM', csm: 'riley', account: `Databricks Inc.`,
        note: `TrustRadius/HG&lt;&gt;Databricks Day-in-the-Life / CSM Walkthrough w/ Sara Steffen + Estelle Hayes + Charles Hawkins + Atisha Waghela. NEW-PROSPECT sales call. TR positioned as long-form review platform complementing G2. $30k/yr starting price + $10k geo add-on.`,
        mins: 31, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Databricks sales discovery / walkthrough. TR positioned as complement to G2 w/ long-form reviews (400+ words), decision-maker demographics (managers, directors, VPs, C-suite), premium content + reference candidates for customer advocacy. Pricing: $30k/yr per product + $10k/yr for custom geo monitoring + prompt-level pieces; incentive management + basic review campaigns included. Event-based review generation strategies. Charles to send pricing details in writing to Sara + Estelle by EOD + follow up in 2-3 weeks. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 16 &middot; 1:00 PM', csm: 'atisha', account: `Databricks Inc. (co-attend)`,
        note: `Atisha co-attended Databricks TR walkthrough supporting Riley + Charles. Same content &mdash; new-prospect sales call on TR positioning + pricing.`,
        mins: 31, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Atisha co-attended Databricks TR day-in-the-life walkthrough. Same content &mdash; new-prospect discovery of TR long-form reviews vs G2, event-review strategies, $30k/yr starting price, premium content offerings. Attendance via Weflow participants.`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'atisha', account: `Deloitte`, health: 'Healthy',
        note: `Deloitte India Global GTM weekly &mdash; SHM/ZS/WM account updates + intent-data delivery frequency (2/month for 2 more months) + consulting-firm retention.` },
      { csm: 'riley', account: `FactSet Research Systems`, health: 'Healthy',
        note: `TR portal onboarding for Lin Zuo. FactSet instance re-enable for renewal targeted tomorrow. Follow-up review-strategy call this/next week.` },
      { csm: 'andy', account: `FactSet Research Systems (co-attend)`, health: 'Healthy',
        note: `Andy co-attended FactSet TR Onboarding supporting Riley. Same content &mdash; portal walkthrough + instance re-enable for renewal.` },
      { csm: 'rani', account: `Cisco WebEx`, health: 'Healthy',
        note: `Monthly &mdash; renewal SOW pending Cisco internal approval (business-model cost differences). AI-tools consolidation. Account snapshot moving to self-serve.` },
      { csm: 'rani', account: `Lenovo Group Ltd.`, health: 'Concerning',
        note: `Account Match Analysis: D-U-N-S mismatches causing duplicate records &mdash; data UNUSABLE, blocking downstream, risking project timelines. Fix via city-level + account-alias matching.` },
      { csm: 'nick', account: `Lenovo Group Ltd. (co-attend)`, health: 'Concerning',
        note: `Nick co-attended Lenovo AMA supporting Rani. Same D-U-N-S mismatch escalation. Nick&rsquo;s ask: understand HG data-set growth process where Lenovo lacks D-U-N-S.` },
      { csm: 'andy', account: `SAS Institute Inc.`, health: 'Healthy',
        note: `SAS EMEA weekly &mdash; agentic AI + AI governance framework discussion. Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters.` },
      { csm: 'riley', account: `SAP Inc (SuccessFactors)`, health: 'Healthy',
        note: `SAP Connect booth-space pilot for review capture. PO automation issue &mdash; manual follow-up needed. Kristin OOO Oct 1-2 (wedding + Vegas).` },
      { csm: 'rani', account: `Amazon Web Services (AWS)`, health: 'Healthy',
        note: `Monthly &mdash; V2 data-feed migration critical Q4 deadline. Qwik platform dev. Renewal end of June &mdash; Q1 roadmap review + MCP pricing. Onsite meeting in Seattle planned.` },
      { csm: 'pam', account: `Microsoft`, health: 'Healthy',
        note: `Intent Topic Review &mdash; reconcile 256 current tracked topics vs Bryce recommendations (152 may drop). Credit-impact clarity needed before append-vs-replace decision.` },
      { csm: 'riley', account: `Intuit (IES)`, health: 'Healthy',
        note: `Intuit pivoting to ABM (Demandbase). Building custom migration report (Desktop Enterprise&rarr;IES/Online Advance). Buyer&rsquo;s Choice drive for IES + Online Advance by November.` },
      { csm: 'riley', account: `Adobe`, health: 'Healthy',
        note: `TR success touch &mdash; marketing org changes + budget pending. Deck for Ashley in prep. Erica intro for Precision Demand Program. Frame.io + Real-Time CDP need reviews by Oct 16.` },
      { csm: 'divyam', account: `Informatica (SFDC-driven)`, health: 'Healthy',
        note: `HG in SFDC "Batteries Included" partner initiative. New company_group_id column for credit consumption tracking. Phase 2 integration March 2027. ROI data pending.` },
      { csm: 'pam', account: `F5`, health: 'Healthy',
        note: `TR bi-weekly &mdash; F5 AI Security Platform review strategy + module tagging. Appworld + RSA event planning. Buyer&rsquo;s Choice Oct 16 for Network Connect.` },
      { csm: 'varun', account: `Alight Solutions LLC`, health: 'Healthy',
        note: `Competitor refresh + SFDC config review. White-space for AI leave management. Renewal business case in prep &mdash; monthly sync starting Oct 7. Trial access to new HG platform for Betsy + colleagues.` },
      { csm: 'atisha', account: `Optiv Security Inc`, health: 'Healthy',
        note: `AI Scoring demoed for CrowdStrike displacement targeting via fit/need/intent/displacement signals. Roger to test w/ sales teams; Context 2026 Oct 6 invite pending.` },
      { csm: 'riley', account: `SAP Inc (Custom Questions)`, health: 'Healthy',
        note: `New content-strategy model &mdash; strategists as gatekeepers driving pipeline. AI + Juul question updates for Finance/SCM/Sustainability/Business AI. Feedback deadline Sept 25-28.` },
      { csm: 'riley', account: `Databricks Inc.`, health: 'Healthy',
        note: `NEW-PROSPECT sales call &mdash; TR positioned as long-form review complement to G2. $30k/yr + $10k geo add-on. Follow-up 2-3 weeks.` },
      { csm: 'atisha', account: `Databricks Inc. (co-attend)`, health: 'Healthy',
        note: `Atisha co-attended Databricks new-prospect TR sales call. Same content &mdash; TR positioning + pricing + event-review strategies.` },
    ],
  };
}

function dayMeta_2026_09_16() {
  return {
    pills: [
      ['dot-teal',   '19 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '4 Expansion'],
      ['dot-green',  '19 Vitally Pulses'],
      ['dot-grey',   'Wed Sep 16 &middot; 100 scanned'],
    ],
    tabs: ['Overview', 'Calls (19)', 'Pulses (19)', 'Action Items (8)']
  };
}

function dayOverviewHTML_2026_09_16() {
  return `<div class="section-label">Team Activity &mdash; Wednesday September 16, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Sep 16 &mdash; 100 recordings scanned</strong> via SFDC SOQL &middot; <strong>19 confirmed calls</strong> (16 unique + 3 co-attend) across 8 CSMs (all CSMs active) &middot; 1 concerning &middot; 4 expansion signals &middot; SFDC confirmed 2 (Microsoft + F5); Weflow fallback added 14 unique recoveries
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> Lenovo Account Match Analysis (Rani + Nick) &mdash; D-U-N-S mismatches causing duplicate records; data is UNUSABLE, blocking downstream processes and jeopardizing project timelines. Fixing via city-level + account-alias matching logic. Follow-up meeting this week for solutions + timelines.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>4 EXPANSION:</strong> Databricks NEW-PROSPECT TR sales call ($30k/yr starting) &middot; Intuit IES (custom migration report Desktop&rarr;IES/Online Advance for ABM/Demandbase) &middot; Alight (AI leave management white-space + monthly sync Oct 7 + renewal business case) &middot; Optiv (AI Scoring for CrowdStrike displacement targeting)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    <strong>Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters</strong> &mdash; coverage across SAS + FactSet + Andy&rsquo;s other accounts. Coverage handoff coordinated in SAS EMEA sync.
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 8 (92% no-transcript):</strong> Sept 16 = 100 recordings, 8 with transcripts, 92 without. Of the 8 SFDC transcripts, only 3 contained a CSM speaker (Microsoft, F5 + Weekly GTM internal). 14 additional confirmations recovered via Weflow fallback.
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
        <div><div class="metric-num m-grey">143m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">FactSet TR onboarding &middot; SAP SuccessFactors &middot; Intuit IES (&#x1F4C8; ABM+Demandbase) &middot; Adobe TR &middot; SAP Custom Q Sync &middot; Databricks (&#x1F4C8; NEW-PROSPECT)</div>
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
        <div><div class="metric-num m-grey">105m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Cisco WebEx (renewal SOW pending) &middot; Lenovo AMA (&#x1F534; D-U-N-S data unusable) &middot; AWS Monthly (V2 migration Q4 + Qwik + Jun renewal)</div>
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
        <div><div class="metric-num m-grey">87m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Deloitte weekly (SHM/ZS/WM updates) &middot; Optiv (&#x1F4C8; AI Scoring for CrowdStrike) &middot; Databricks co-attend (&#x1F4C8; new prospect)</div>
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
        <div><div class="metric-num m-grey">54m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">FactSet TR co-attend &middot; SAS EMEA (agentic AI + AI governance). Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters.</div>
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
        <div><div class="metric-num m-grey">29m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Microsoft (intent topic review 256&rarr;? reconciliation) &middot; F5 (TR bi-weekly + Appworld/RSA event prep)</div>
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
        <div><div class="metric-num m-grey">32m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo Account Match Analysis co-attend (&#x1F534; supporting Rani &mdash; D-U-N-S data unusable escalation)</div>
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
        <div><div class="metric-num m-grey">23m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Alight Solutions (&#x1F4C8; competitor refresh + SFDC config + AI leave management white-space + renewal prep)</div>
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
        <div><div class="metric-num m-grey">11m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Informatica (SFDC-driven) &mdash; HG in SFDC "Batteries Included" + new company_group_id column + Phase 2 March 2027</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_16() {
  return `<div class="section-label">Confirmed Calls &mdash; Wednesday September 16, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> Lenovo Account Match Analysis &mdash; D-U-N-S mismatches causing duplicate records; data unusable, blocking downstream, project-timeline risk (Rani + Nick)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>4 EXPANSION:</strong> Databricks NEW-PROSPECT (Riley + Atisha, TR sales call) &middot; Intuit IES (Riley, ABM+Demandbase custom migration report) &middot; Alight (Varun, AI leave management white-space + renewal prep) &middot; Optiv (Atisha, AI Scoring for CrowdStrike displacement)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    <strong>Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters</strong> across SAS + FactSet + Andy&rsquo;s other accounts. Coverage handoff coordinated in SAS EMEA sync.
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weekly GTM Enablement Session excluded as INTERNAL:</strong> 95+ HG-only participants; no customer. Rani + Pam + Andy present but no customer engagement &mdash; not counted.
  </div>`;
}

function dayPulsesHTML_2026_09_16() {
  const cards = [
    { csm:'atisha', health:'Healthy', account:`Deloitte`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 16 &middot; Healthy`,
      excerpt:`Deloitte India Global GTM weekly. SHM/ZS/WM account updates + potential manual delivery. Consulting firms retained in intent data. Two deliveries/month continues for 2 more months to evaluate impact.` },
    { csm:'riley', health:'Healthy', account:`FactSet Research Systems`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 16 &middot; Healthy`,
      excerpt:`TR portal onboarding for Lin Zuo (FactSet). Instance re-enable for renewal targeted tomorrow. Follow-up call this/next week for review-strategy + campaigns.` },
    { csm:'andy', health:'Healthy', account:`FactSet Research Systems (co-attend)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 16 &middot; Healthy`,
      excerpt:`Andy co-attended FactSet TR Onboarding supporting Riley. Same content &mdash; portal walkthrough + FactSet instance re-enable for renewal by tomorrow.` },
    { csm:'rani', health:'Healthy', account:`Cisco WebEx`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 16 &middot; Healthy`,
      excerpt:`Cisco WebEx monthly &mdash; renewal SOW pending Cisco internal approval (business-model cost differences). Consolidating AI tools into Sales AI front-end. Account snapshot self-serve. Renewal urgency: end of fiscal month (5 wks).` },
    { csm:'rani', health:'Concerning', account:`Lenovo Group Ltd.`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 16 &middot; Concerning`,
      excerpt:`Account Match Analysis: D-U-N-S mismatches causing duplicate records &mdash; data UNUSABLE, blocking downstream processes, jeopardizing project timelines, trust issues among Lenovo users. Solutions: city-level matching + account-alias fallback. Follow-up meeting this week.` },
    { csm:'nick', health:'Concerning', account:`Lenovo Group Ltd. (co-attend)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 16 &middot; Concerning`,
      excerpt:`Nick co-attended Lenovo Account Match Analysis. Same D-U-N-S mismatch escalation. Nick to understand HG data-set growth process for Lenovo where D-U-N-S is missing.` },
    { csm:'andy', health:'Healthy', account:`SAS Institute Inc.`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 16 &middot; Healthy`,
      excerpt:`SAS EMEA weekly &mdash; agentic AI + AI governance (AI Navigators). ICP creation on HG platform next week or two. Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (SuccessFactors)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 16 &middot; Healthy`,
      excerpt:`SAP Connect booth-space pilot for review capture. PO automation issue &mdash; manual follow-up (Mardigan). Kristin OOO Oct 1-2 (brother&rsquo;s wedding + Vegas). Learning Italian report + enterprise-version quotes in progress.` },
    { csm:'rani', health:'Healthy', account:`Amazon Web Services (AWS)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 16 &middot; Healthy`,
      excerpt:`AWS Monthly &mdash; V2 data-feed migration critical Q4 deadline. Qwik platform dev. Renewal end of June. Q1 roadmap review + MCP pricing. Onsite meeting in Seattle planned. TR portfolio for AWS visibility.` },
    { csm:'pam', health:'Healthy', account:`Microsoft`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 16 &middot; Healthy`,
      excerpt:`Intent Topic Review &mdash; reconcile 256 currently tracked topics vs Bryce&rsquo;s recommendations (152 may drop). Credit-impact clarity needed before append-vs-replace decision. Additional competitor products to track.` },
    { csm:'riley', health:'Healthy', account:`Intuit (IES)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 16 &middot; Healthy`,
      excerpt:`Intuit pivoting to ABM (Demandbase). Building custom migration report (Desktop Enterprise&rarr;IES/Online Advance) to support upgrade efforts. Buyer&rsquo;s Choice drive for IES + Online Advance by November.` },
    { csm:'riley', health:'Healthy', account:`Adobe`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 16 &middot; Healthy`,
      excerpt:`TR success touch &mdash; marketing org changes + budget pending. Deck for Ashley in prep. Erica intro for Precision Demand Program. Frame.io + Real-Time CDP need reviews by Oct 16.` },
    { csm:'divyam', health:'Healthy', account:`Informatica (SFDC-driven)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 16 &middot; Healthy`,
      excerpt:`HG in SFDC "Batteries Included" partner initiative. New company_group_id column for credit consumption tracking. Phase 2 integration March 2027. ROI data (impact + AOV %s) to be shared.` },
    { csm:'pam', health:'Healthy', account:`F5`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 16 &middot; Healthy`,
      excerpt:`F5 TR bi-weekly &mdash; F5 AI Security Platform review strategy + module tagging (AI Red Team + AI Guardrails + Sensitivity + Data Detection). Appworld + RSA event planning. Buyer&rsquo;s Choice Oct 16 for Network Connect.` },
    { csm:'varun', health:'Healthy', account:`Alight Solutions LLC`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 16 &middot; Healthy`,
      excerpt:`Competitor refresh + SFDC config review. White-space for AI leave management. Renewal business case in prep. Monthly sync starting Oct 7. Trial access to new HG AI platform for Betsy + 2-3 colleagues.` },
    { csm:'atisha', health:'Healthy', account:`Optiv Security Inc`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 16 &middot; Healthy`,
      excerpt:`AI Scoring feature demoed for CrowdStrike displacement targeting &mdash; fit/need/intent/displacement signals. Roger to test w/ sales teams; Context 2026 Oct 6 invite pending.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (Custom Questions)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 16 &middot; Healthy`,
      excerpt:`New content-strategy model &mdash; strategists as gatekeepers driving pipeline. AI + Juul question updates for Finance/SCM/Sustainability/Business AI product groups. Feedback deadline Sept 25-28 for SAP Connect prep.` },
    { csm:'riley', health:'Healthy', account:`Databricks Inc.`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 16 &middot; Healthy`,
      excerpt:`NEW-PROSPECT sales call &mdash; TR positioned as long-form review complement to G2 (400+ words, decision-maker demographics). $30k/yr per product + $10k geo add-on. Follow-up 2-3 weeks; pricing written by EOD.` },
    { csm:'atisha', health:'Healthy', account:`Databricks Inc. (co-attend)`, opp:`Vitally Pulse &mdash; Sep 16 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 16 &middot; Healthy`,
      excerpt:`Atisha co-attended Databricks new-prospect TR sales walkthrough. Same content &mdash; TR positioning + event-review strategies + $30k/yr pricing.` },
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

function dayActionsHTML_2026_09_16() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('0916-1')?'done':''}" data-csm="rani" id="action-0916-1">
      <div class="action-checkbox ${doneActions.has('0916-1')?'checked':''}" onclick="toggleAction('0916-1')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F534; Lenovo &mdash; unblock D-U-N-S data-matching escalation this week</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Nick Johnson + Alexi Mouarkach &middot; Antaleena / Alexi to rework match-rate reports (D-U-N-S mismatches no longer counted). Follow-up meeting this week for timelines. Alexi to explore account aliases as primary matching field + investigate city-level logic w/ engineering. Nick to understand HG data-set growth process for accounts lacking D-U-N-S. Data currently unusable + downstream blocked; project timelines at risk.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0916-2')?'done':''}" data-csm="andy" id="action-0916-2">
      <div class="action-checkbox ${doneActions.has('0916-2')?'checked':''}" onclick="toggleAction('0916-2')"></div>
      <div class="action-body">
        <div class="action-title">Andy Lim out Sept 17-23 &mdash; Nick Johnson (UK) covering for urgent matters</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Andy Lim + Nick Johnson &middot; Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters. Andy to provide Nick&rsquo;s email to SAS + FactSet + other Andy accounts before Sept 17. Nick to monitor incoming customer escalations. Cover: SAS Institute EMEA (Adrian Carr + Bhargavi Joshi), FactSet Research Systems (Lin Zuo TR onboarding), + other Andy accounts.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0916-3')?'done':''}" data-csm="rani" id="action-0916-3">
      <div class="action-checkbox ${doneActions.has('0916-3')?'checked':''}" onclick="toggleAction('0916-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Cisco WebEx &mdash; SOW submission today + follow through on business-model cost reconciliation</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar &middot; SOW pending Cisco internal approval (business-model change causing cost differences requiring leadership reconciliation). Renewal urgency: end of fiscal month (5 weeks). Roy Ramakers to provide quote + submit renewal paperwork. Adrian+Rani to check w/ Mara on GSI contract data utilization + follow up with Roy. Schedule follow-up w/ Mara + Andre for new AI capabilities deep-dive.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0916-4')?'done':''}" data-csm="rani" id="action-0916-4">
      <div class="action-checkbox ${doneActions.has('0916-4')?'checked':''}" onclick="toggleAction('0916-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; AWS &mdash; V2 data-feed migration Q4 deadline + Q1 roadmap prep + Seattle onsite</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Mark Fell + Noah Alford &middot; V2 migration critical Q4 deadline &mdash; risk of service disruption. Mark Fell to share data-asset docs + pricing + data dictionaries + fabric overview. Rani to share updated data dictionary + Cloud Dynamics utilization. Nishat to schedule Q1 meeting for roadmap + renewal planning. Jhansi to coordinate Seattle onsite. Noah to summarize past notes for onsite agenda.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0916-5')?'done':''}" data-csm="riley" id="action-0916-5">
      <div class="action-checkbox ${doneActions.has('0916-5')?'checked':''}" onclick="toggleAction('0916-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Databricks NEW-PROSPECT TR sales &mdash; pricing follow-up + 2-3 week check-in</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers + Charles Hawkins &middot; Charles to send pricing details in writing to Sara + Estelle by EOD ($30k/yr per product + $10k geo add-on). Follow-up meeting scheduled in 2-3 weeks to address questions + discuss decision-making timeline. Follow up on email detailing what's included at $30k / $40k price points.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0916-6')?'done':''}" data-csm="riley" id="action-0916-6">
      <div class="action-checkbox ${doneActions.has('0916-6')?'checked':''}" onclick="toggleAction('0916-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Intuit IES &mdash; custom migration report (Desktop Enterprise&rarr;IES) + Demandbase integration</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers + Natalie Pratt &middot; Natalie to (a) run custom report idea by Amy, (b) check master NDA w/ TR, (c) work with marketing ops on audience list of Desktop Enterprise&rarr;QBOAV/IES upgraders, (d) check Eliza on data-passing to TR. Riley to send TR-Demandbase help article + schedule Janessa call for custom question updates. Buyer&rsquo;s Choice for IES + Online Advance by November.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0916-7')?'done':''}" data-csm="atisha" id="action-0916-7">
      <div class="action-checkbox ${doneActions.has('0916-7')?'checked':''}" onclick="toggleAction('0916-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Optiv AI Scoring &mdash; CrowdStrike displacement play + Context 2026 Oct 6 follow-through</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela + Roger Conarroe &middot; Roger to play with AI Scoring using CrowdStrike + other sales plays, investigate license access + credit-usage for exports, share feedback, and discuss w/ sales teams for new displacement plays. Atisha to research more products for targeting + send Context 2026 Oct 6 virtual event invite.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0916-8')?'done':''}" data-csm="all" id="action-0916-8">
      <div class="action-checkbox ${doneActions.has('0916-8')?'checked':''}" onclick="toggleAction('0916-8')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow SFDC-sync backlog persisting (92% no-transcript &mdash; worst-yet)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Ops &middot; Sept 16 &mdash; 92 of 100 recordings had no SFDC transcript (92% &mdash; worst rate in the backlog). Only 2 customer calls confirmed via SFDC speaker detection (Microsoft + F5); 14 additional confirmations recovered via Weflow &lsquo;participants&rsquo; fallback. Formal Weflow support ticket long overdue; daily scan entirely dependent on Weflow participant metadata.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}
