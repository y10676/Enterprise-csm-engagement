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
        note: `Bi-weekly with Sherry Arnold + Mardigan Moffat. Hgeo customer voice platform 2-year discounted pricing pitch for Pascal (budget meeting upcoming). AI-driven content + SEO ranking value framing. Big IP being considered for product list expansion. Personal note: Sherry&rsquo;s mom recent ovarian cancer diagnosis.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `F5 TrustRadius bi-weekly with Sherry Arnold + Mardigan Moffat. Personal update: Sherry&rsquo;s mom broken shoulder + ovarian cancer dx (port placement scheduled Sept 18). Business: Hgeo customer voice platform 2-year option with discounted pricing ready for Pascal ahead of budget meeting. AI-driven solutions + content increasingly important for search-engine ranking; strategic value framing. Review-collection challenge for new AI products w/ small customer bases. Adding &ldquo;Big IP&rdquo; to product list under consideration. Mardigan to send market/competitive report examples.` },
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
      excerpt:`Hgeo 2-year discounted pricing ready for Pascal ahead of budget meeting. AI-driven content + SEO framing gaining traction. Big IP under consideration for product-list expansion. Personal: Sherry&rsquo;s mom ovarian cancer dx, port placement Sept 18.` },
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

