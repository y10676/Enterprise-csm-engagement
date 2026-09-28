// September 2026 daily reports







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












































// ============================================================
// Friday September 11, 2026
// ============================================================








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








// ============================================================
// Wednesday September 16, 2026
// ============================================================








// ============================================================
// Thursday September 17, 2026
// ============================================================








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




// ============================================================
// Wednesday September 9, 2026
// ============================================================

function dayData_2026_09_09() {
  return {
    calls: [
      { ts: 'Sep 9 &middot; 7:00 AM', csm: 'riley', account: `IBM (TR Biweekly)`,
        note: `TrustRadius IBM biweekly w/ Ruxandra Marin + Mihaela Nedelescu + Cole Arutian + Mardigan Moffat. Buyer&rsquo;s Choice deadline extended to Oct 16 (+3 weeks). New Slack channel + client story strategists channels for review generation. AI-initiative metrics + crawler analytics discussion.`,
        mins: 21, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `IBM TR biweekly. Buyer&rsquo;s Choice reviews deadline extended to Oct 16 &mdash; extra 3 weeks. New review-gen channels: Slack channel w/ CSMs + architects for data + AI products; client story strategists engaged w/ incentive for review promotion. Direct outreach to G2 reviewers to solicit TR reviews (replacing prior respondents). TR value for AI initiatives being measured via vendor-portal mentions, citations, sentiment, prompt data. Crawler analytics: understanding &lsquo;training&rsquo; vs &lsquo;grounding&rsquo; AI models + how often chatbots reference TR reviews. Riley to investigate "2026 champs" campaign code; check category-level dashboard issue; explore consolidated IBM portfolio reporting. Mihaela to post in AI/data Slack channel tomorrow. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 7:30 AM', csm: 'pam', account: `Cisco (TR Recurring)`,
        note: `TR Recurring w/ Ross Marchant + Mellissa Jensen + Mardigan Moffat. Cisco UCS product family restructuring on TR (X/C/S/B series + UCS Manager). Reporting shift to monthly (reviews + ratings + traffic + crawler info). Geo-dashboard + custom questions refresh for Cisco Live.`,
        mins: 23, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Cisco UCS product-listing restructuring on TR. Deciding between consolidating UCS X/C/S/B series into single profile vs maintaining separate listings. Old intent-data reporting being discontinued; shifting to monthly delivery of reviews + ratings + page traffic + crawler info. Geo-dashboard + product monitoring features (citations + sentiment) available but not yet integrated into standard reporting &mdash; expert session planned. Custom questions for 13 products being revisited for Cisco Live alignment. Ross to research UCS family structure + product representation options by end of month; Pam to schedule monitoring-expert call + pull custom questions for 13 products by end of month. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 7:30 AM', csm: 'varun', account: `CBTS`,
        note: `Monthly Sync w/ Mitchell VanderKam + Zach King + Ziad Amira + Omkar Hunuswadkar. Data-feed walkthrough (spend projections + installation signals + time-series adoption + FAI + Gen AI navigator). Cadence changing to monthly. Contact-data offering feedback needed. ICP file due before the 20th.`,
        mins: 14, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Varun walked Mitchell + Zach through monthly programmatic data feed elements: spend projections (12-month, dedupe corporate-parent double-counting), installation signals (first/last detected + location + intensity), time-series technographic adoption (competitor + prioritization analysis), FAI/buying centers (departmental usage hotspots), Gen AI navigator. Cadence shifting from bi-weekly to monthly placeholder. Varun to share collateral + knowledge-ops + website link + prepared file + use-case reports. Mitchell to provide feedback on new contact data offering + share ICP file this month (before the 20th) + attempt to automate monthly file this week. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 8:00 AM', csm: 'rani', account: `Hitachi Vantara`,
        note: `Clay + Anders universe-feed transition discussion w/ Rebecca Klein + Umar Farooq Adam + Adrian Escobar. Anders universe-feed contract terminates Oct 22 &mdash; ALL licensed data must be removed. Transitioning to credit-based API model. Follow-up Sept 30 tentative.`,
        mins: 41, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Hitachi Vantara transition planning. Anders universe-feed contract NOT renewing post-Oct 22 &mdash; Anders will only renew intent portion for marketing. ALL ingested contract + spend data from universe-feed license MUST be removed from Hitachi systems by Oct 22. New credit-based model proposed for ongoing needs (potentially lower cost vs Clay/third-party). API access being explored to bridge gap + facilitate ongoing post-contract access. Provisional estimate: ~68K credits for initial needs (80K firmographics + 100K technographics). Rani to send official data-removal letter to Miguel + legal docs; Rani+Adrian to calculate credit costs + confirm API details + credit-charging mechanism (per API call vs per result returned). Follow-up meeting Sept 30 tentative. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 9 &middot; 8:00 AM', csm: 'nick', account: `Siemens AG`,
        note: `Bi-weekly w/ Jeff Wymer + David Garcia Thomas + Max Shaw + Gavin Padden + Chlo&eacute; Portier. Account Compass expansion to DI Automation; Siemens reshifting progress; renewal quarter-end push (discount tied to quarter-end alignment).`,
        mins: 17, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Siemens bi-weekly. Account Compass expansion to DI Automation pending data-source identification from Mitchell + Ross. Siemens reshifting progressing (current team ring-fenced for at least next year). ABM initiative w/ 75 pharma accounts showing high intent signals post-pre-warming. Renewal nearing official date &mdash; efforts to process before quarter-end for discount alignment. Next: Jeff to wait on Mitchell + Ross for data sources; David to set up prototype call w/ Chloe + Francis (on-demand live report generation from MCP); David to coordinate w/ Nick on December piece + MCP credits; Max to follow up w/ intent teams on DI Automation + Smart Infrastructure topics; Jeff to get on Fred (Finance) calendar today re renewal status. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 9:00 AM', csm: 'andy', account: `FactSet Research Systems`,
        note: `TR Walkthrough w/ Riley co-attend + Greta Wilson Spiess + Shea Williams + Lin Zuo + Anderson Duncan. Contract clarification: $30K Customer Voice Package base + $10K content bundle add-on decision deferred until Aiden returns Sept 17. Vendor portal re-enable + native lead forms setup.`,
        mins: 63, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: `FactSet TR contract clarification + customer voice package walkthrough. Proceeding with base $30K Customer Voice Package. $10K content bundle decision deferred pending Aiden's return Sept 17 &mdash; Greta + Anderson to follow up w/ Aiden on intended use before finalizing. Intent data + intent-driven leads discussed as future add-ons (not immediate). Anderson to submit ticket to re-enable vendor portal access ASAP + send content-type list to Greta + confirm ability to reach net-new reviewers + update negative-review notifications from Aiden to Lin. Lin taking over TR relationship day-to-day. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 9:00 AM', csm: 'riley', account: `FactSet Research Systems (co-attend)`,
        note: `Riley co-attended FactSet TR Walkthrough supporting Andy + Anderson. Same content &mdash; $30K Customer Voice Package base + $10K content bundle deferred until Aiden returns Sept 17. Lin taking over day-to-day TR relationship.`,
        mins: 63, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: `Riley co-attended FactSet TR walkthrough providing historical context (previously worked with Aiden on the account). Same content &mdash; contract package clarification, vendor portal re-enable, native lead forms setup, Lin as new day-to-day owner. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 9:00 AM', csm: 'varun', account: `Exclusive Networks`,
        note: `Bi-weekly w/ Matt Tinker + Angus Hyams + Nick co-attend. Safaricom account gone quiet (main contact leaving, no successor). Angus to lead Safaricom renewal &mdash; target November. Digital initiative proposal submitted + awaiting feedback.`,
        mins: 7, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Exclusive Networks bi-weekly. Safaricom account has become inactive &mdash; main contact leaving, no successor identified. Angus to lead Safaricom renewal w/ target sign-off November. Q3+Q4 renewal volume increasing; early contract finalization preferred to avoid end-of-year stress. Matt updated on digital initiative proposal (submitted + awaiting response). Moving from platform to API/data feed indicates higher market maturity + better utilization. Matt to sync w/ Ben by next week on digital initiative mapping. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 9:00 AM', csm: 'nick', account: `Exclusive Networks (co-attend)`,
        note: `Nick co-attended Exclusive Networks bi-weekly supporting Varun + Angus. Same content &mdash; Safaricom account inactive, Angus leading renewal to November, digital initiative proposal submitted.`,
        mins: 7, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Nick co-attended Exclusive Networks bi-weekly. Same content &mdash; Safaricom account gone quiet (contact leaving), Angus to lead Safaricom renewal to November, digital initiative proposal submitted + awaiting feedback. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 9:30 AM', csm: 'riley', account: `Intuit (Desktop Enterprise)`,
        note: `TR CSM sync on Desktop Enterprise&rarr;Online migration. Premium content + third-party validation strategy for switch narrative. Buyer&rsquo;s Choice review deadline Oct 16 approaching. Strategic tension: Desktop awards may keep users in Desktop ecosystem.`,
        mins: 21, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Intuit Desktop Enterprise TR sync w/ Andrew Lum + Mardigan. QB Online being brought to feature parity w/ Desktop (inventory + manufacturing). Strategic push to migrate users from Desktop Enterprise (sunsetting product) to online. Premium content (case studies + testimonials) + third-party validation being considered to highlight online benefits. Buyer&rsquo;s Choice review cycle deadline Oct 16 approaching. Strategic tension flagged: winning Desktop Enterprise awards may inadvertently keep users in Desktop ecosystem, hindering online transition. Riley to confirm w/ Morgan whether existing premium-content PDF example can be shared w/ Andy + meet w/ Mardigan + Katie to review premium-content idea + meet w/ Natalie Pratt (IES team) Monday to gauge online-advance team interest. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 9 &middot; 10:00 AM', csm: 'rani', account: `NetApp`,
        note: `IT Spend + PTB Models discussion w/ Adrian Escobar + Gavin Padden + David Crossman + NetApp team (Madhup Tibrewala + Jieun Chung + Akanksha Jain). Fit/need/intent PTB framework walkthrough. Data dictionary + specific field definitions being shared.`,
        mins: 60, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `NetApp PTB modeling session. HG&rsquo;s data supports building Propensity-to-Buy (PTB) models via fit/need/intent framework: firmographics + IT spend + technology + contracts + intent. Firmographic accuracy high for large orgs, banded for SMBs. IT spend +/-6% accuracy. Technology data 90%+ accuracy (coverage varies for end-user devices). GSI contracts 100% accurate but limited to announced. Intent data (TR) captures active research + evaluation. Next: Gavin to share HG data dictionary + fields used in scoring models (by EoW); Madhup/Akanksha to provide definitions for digital-native + sovereign-cloud + neo-cloud; Adrian + Megan + Gabe to discuss incorporating intent data (top + bottom of funnel) tomorrow; Gavin to share fit/need/intent model slide w/ Akanksha for internal discussion refinement. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 9 &middot; 11:00 AM', csm: 'pam', account: `Epicor Software Corporation`,
        note: `TR sync w/ Scott Olson + Michelle Graham + Anderson Duncan. Final proposal alignment: same base services as prior year + geo-offering consultation added + 46-47% discount (highest among customers). Procurement navigation the main challenge.`,
        mins: 12, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Epicor final proposal review. Proposal aligned w/ previous agreements + core services intact. Buyer intent data integrated into leads offering (drives PPLs, not a separate signal). 46-47% discount secured (highest among customers). Value add: consultation for custom prompts w/ new geo offering at no additional cost. Main challenge: new Epicor procurement process may cause short-term delays. Anderson to send final executable proposal ASAP (hopefully today). Scott to send proposal to Stephanie + flag for procurement + immediately submit to Wrike requesting PO. Scott/Anderson to connect Anderson w/ procurement if needed. Ensure order form has capitalized 'T' in 'Biz Track'. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'riley', account: `IBM (TR Biweekly)`, health: 'Healthy',
        note: `Buyer&rsquo;s Choice deadline extended to Oct 16. New Slack + client story strategist channels for review gen. AI-initiative metrics + crawler analytics discussion.` },
      { csm: 'pam', account: `Cisco (TR Recurring)`, health: 'Healthy',
        note: `Cisco UCS product family restructuring on TR (X/C/S/B series + UCS Manager). Reporting shift to monthly. Geo-dashboard + custom questions refresh for Cisco Live.` },
      { csm: 'varun', account: `CBTS`, health: 'Healthy',
        note: `Data-feed walkthrough (spend projections + installation signals + time-series + FAI). Cadence changing to monthly. Contact-data feedback needed; ICP file before the 20th.` },
      { csm: 'rani', account: `Hitachi Vantara`, health: 'Healthy',
        note: `Clay + Anders universe-feed termination Oct 22 &mdash; all licensed data must be removed. Transitioning to credit-based API model. Follow-up Sept 30 tentative.` },
      { csm: 'nick', account: `Siemens AG`, health: 'Healthy',
        note: `Bi-weekly &mdash; Account Compass expansion to DI Automation; Siemens reshifting progressing; renewal quarter-end push (discount tied to alignment).` },
      { csm: 'andy', account: `FactSet Research Systems`, health: 'Healthy',
        note: `TR Walkthrough &mdash; $30K Customer Voice Package base + $10K content bundle decision deferred until Aiden returns Sept 17. Vendor portal re-enable + Lin new day-to-day owner.` },
      { csm: 'riley', account: `FactSet Research Systems (co-attend)`, health: 'Healthy',
        note: `Riley co-attended FactSet TR Walkthrough providing historical context. Same content &mdash; contract package clarification + Lin as new day-to-day owner.` },
      { csm: 'varun', account: `Exclusive Networks`, health: 'Healthy',
        note: `Bi-weekly &mdash; Safaricom account inactive (main contact leaving). Angus to lead Safaricom renewal to November. Digital initiative proposal submitted + awaiting feedback.` },
      { csm: 'nick', account: `Exclusive Networks (co-attend)`, health: 'Healthy',
        note: `Nick co-attended Exclusive Networks bi-weekly supporting Varun + Angus. Same content &mdash; Safaricom account inactive; Angus leading Safaricom renewal to November.` },
      { csm: 'riley', account: `Intuit (Desktop Enterprise)`, health: 'Healthy',
        note: `Desktop&rarr;Online migration push. Premium content + third-party validation. Buyer&rsquo;s Choice deadline Oct 16. Strategic tension: Desktop awards vs Online migration.` },
      { csm: 'rani', account: `NetApp`, health: 'Healthy',
        note: `PTB modeling session &mdash; fit/need/intent framework walkthrough. Data dictionary + field definitions being shared. NetApp exploring bottom-up modeling approach.` },
      { csm: 'pam', account: `Epicor Software Corporation`, health: 'Healthy',
        note: `Final proposal aligned w/ prior year + geo-offering consultation added + 46-47% discount (highest among customers). Procurement navigation is the main challenge.` },
    ],
  };
}

function dayMeta_2026_09_09() {
  return {
    pills: [
      ['dot-teal',   '12 Calls'],
      ['dot-amber',  '4 Expansion'],
      ['dot-green',  '12 Vitally Pulses'],
      ['dot-grey',   'Wed Sep 9 &middot; 93 scanned'],
    ],
    tabs: ['Overview', 'Calls (12)', 'Pulses (12)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_09() {
  return `<div class="section-label">Team Activity &mdash; Wednesday September 9, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Sep 9 &mdash; 93 recordings scanned</strong> via SFDC SOQL &middot; <strong>12 confirmed calls</strong> (10 unique + 2 co-attend) across 6 CSMs &middot; 0 concerning &middot; 4 expansion signals &middot; SFDC confirmed 2 (Hitachi + Intuit); Weflow fallback added 8 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>4 EXPANSION:</strong> Hitachi (Anders universe-feed termination Oct 22 &mdash; credit-based API transition) &middot; Intuit (Desktop&rarr;Online migration + premium content strategy; Buyer&rsquo;s Choice Oct 16) &middot; FactSet (Customer Voice Package $30K base + $10K content bundle decision Sept 17) &middot; Epicor (final proposal + 46-47% discount + procurement navigation)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 5 (75% no-transcript):</strong> Sept 9 = 93 recordings, 23 with transcripts, 70 without. SFDC speaker detection confirmed only 2 customer calls (Hitachi + Intuit); 8 additional confirmations recovered via Weflow &lsquo;participants&rsquo; fallback.
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
        <div><div class="metric-num m-grey">105m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IBM TR (Buyer&rsquo;s Choice Oct 16 push) &middot; FactSet TR co-attend (&#x1F4C8; $30K base + $10K bundle Sept 17) &middot; Intuit (&#x1F4C8; Desktop&rarr;Online migration + Oct 16 Buyer&rsquo;s Choice)</div>
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
        <div><div class="metric-num m-grey">101m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Hitachi (&#x1F4C8; Anders universe-feed termination Oct 22 + credit-based transition) &middot; NetApp (PTB modeling fit/need/intent framework)</div>
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
        <div><div class="metric-num m-grey">35m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Cisco TR (UCS restructuring + monthly reporting shift) &middot; Epicor (&#x1F4C8; final proposal + 46-47% discount)</div>
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
        <div><div class="metric-num m-grey">24m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Siemens bi-weekly (Account Compass DI Automation + renewal quarter-end push) &middot; Exclusive Networks co-attend</div>
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
        <div><div class="metric-num m-grey">21m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">CBTS (monthly programmatic data-feed walkthrough) &middot; Exclusive Networks (Safaricom inactive + digital initiative)</div>
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
        <div><div class="metric-num m-grey">63m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">FactSet TR Walkthrough (&#x1F4C8; $30K Customer Voice Package + $10K content bundle decision Sept 17)</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. SFDC transcripts contained no Atisha speaker label; Weflow participants did not surface Atisha on any Sept 9 recording. Deloitte + Intel events had no transcript synced.</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. SFDC transcripts contained no Divyam speaker label; Weflow participants did not surface Divyam on any Sept 9 recording.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_09() {
  return `<div class="section-label">Confirmed Calls &mdash; Wednesday September 9, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>4 EXPANSION:</strong> Hitachi (universe-feed transition + credit-based API model) &middot; Intuit (Desktop&rarr;Online migration + premium content strategy) &middot; FactSet ($30K Customer Voice Package + $10K bundle decision) &middot; Epicor (proposal finalization + procurement navigation)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weekly GTM Enablement Session excluded as INTERNAL:</strong> HG-only participants, no customer engagement &mdash; not counted in daily metrics.
  </div>`;
}

function dayPulsesHTML_2026_09_09() {
  const cards = [
    { csm:'riley', health:'Healthy', account:`IBM (TR Biweekly)`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Buyer&rsquo;s Choice deadline extended to Oct 16 (+3 weeks). New Slack channels + client story strategists for review gen. AI initiative measurement via vendor portal mentions + citations + sentiment + prompt data. Crawler analytics discussion (training vs grounding).` },
    { csm:'pam', health:'Healthy', account:`Cisco (TR Recurring)`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Cisco UCS product family restructuring on TR (X/C/S/B series + UCS Manager). Reporting shift to monthly (reviews + ratings + traffic + crawler). Geo-dashboard + custom questions refresh for Cisco Live. Decisions by end of month.` },
    { csm:'varun', health:'Healthy', account:`CBTS`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Monthly programmatic data-feed walkthrough w/ Mitchell + Zach: spend projections + installation signals + time-series adoption + FAI + Gen AI navigator. Cadence changing to monthly. Contact-data offering feedback needed; ICP file before the 20th.` },
    { csm:'rani', health:'Healthy', account:`Hitachi Vantara`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Anders universe-feed termination Oct 22 &mdash; all licensed data must be removed by that date. Transitioning to credit-based API model (estimated ~68K credits for initial firmographics + technographics needs). Follow-up Sept 30 tentative.` },
    { csm:'nick', health:'Healthy', account:`Siemens AG`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Siemens bi-weekly &mdash; Account Compass expansion to DI Automation pending data sources. Siemens reshifting progressing (team ring-fenced for at least next year). Renewal quarter-end push (discount tied to alignment).` },
    { csm:'andy', health:'Healthy', account:`FactSet Research Systems`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 9 &middot; Healthy`,
      excerpt:`TR Walkthrough &mdash; proceeding with $30K Customer Voice Package base. $10K content bundle decision deferred pending Aiden return Sept 17. Anderson to submit vendor-portal re-enable ticket + send content-type list. Lin new day-to-day TR owner.` },
    { csm:'riley', health:'Healthy', account:`FactSet Research Systems (co-attend)`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Riley co-attended FactSet TR walkthrough providing historical context. Same content &mdash; $30K + $10K contract clarification, vendor portal re-enable, Lin new day-to-day owner.` },
    { csm:'varun', health:'Healthy', account:`Exclusive Networks`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Bi-weekly &mdash; Safaricom account inactive (main contact leaving, no successor). Angus to lead Safaricom renewal &mdash; target November sign-off. Q3+Q4 renewal volume increasing. Digital initiative proposal submitted + awaiting feedback.` },
    { csm:'nick', health:'Healthy', account:`Exclusive Networks (co-attend)`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Nick co-attended Exclusive Networks bi-weekly supporting Varun + Angus. Same content &mdash; Safaricom inactive, Angus leading renewal to November, digital initiative proposal in review.` },
    { csm:'riley', health:'Healthy', account:`Intuit (Desktop Enterprise)`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Desktop Enterprise&rarr;Online migration push. Premium content + third-party validation strategy for switch narrative. Buyer&rsquo;s Choice review deadline Oct 16 approaching. Strategic tension: Desktop awards may keep users in Desktop ecosystem.` },
    { csm:'rani', health:'Healthy', account:`NetApp`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 9 &middot; Healthy`,
      excerpt:`PTB modeling session &mdash; fit/need/intent framework walkthrough w/ Madhup + Akanksha + Jieun (NetApp). Firmographics + IT spend + technology + contracts + intent layers. Data dictionary + field definitions being shared. Bottom-up modeling approach.` },
    { csm:'pam', health:'Healthy', account:`Epicor Software Corporation`, opp:`Vitally Pulse &mdash; Sep 9 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 9 &middot; Healthy`,
      excerpt:`Final Epicor proposal aligned w/ prior-year services + geo-offering consultation added at no additional cost. 46-47% discount (highest among customers). Main challenge: new Epicor procurement process may cause short-term delays.` },
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
        <div class="action-title">&#x1F4C8; Hitachi &mdash; Anders universe-feed termination Oct 22 + credit-based API transition</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar &middot; Anders universe-feed contract non-renewing Oct 22. Rani to send official data-removal letter to Miguel + legal docs. Rani + Adrian to calculate credit costs (80K firmographics + 100K technographics est.) + confirm API details + charging mechanism (per API call vs per result). Rebecca + Umar to model costs internally. Follow-up meeting Sept 30 tentative.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-2')?'done':''}" data-csm="riley" id="action-0909-2">
      <div class="action-checkbox ${doneActions.has('0909-2')?'checked':''}" onclick="toggleAction('0909-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Intuit &mdash; Desktop&rarr;Online migration content strategy + Oct 16 Buyer&rsquo;s Choice</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers + Andy Lum &middot; Riley to confirm w/ Morgan on sharing existing premium-content PDF example w/ Andy + meet w/ Mardigan + Katie on premium-content idea + meet w/ Natalie Pratt (IES team) Monday to gauge online-advance team interest. Andy to check in w/ Natalie on interest + potential funding for transition-focused premium content. Resolve strategic tension on Desktop awards ahead of Oct 16 deadline.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-3')?'done':''}" data-csm="riley" id="action-0909-3">
      <div class="action-checkbox ${doneActions.has('0909-3')?'checked':''}" onclick="toggleAction('0909-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; IBM TR &mdash; Buyer&rsquo;s Choice Oct 16 push + new review-gen channels</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers + Mihaela Nedelescu &middot; Buyer&rsquo;s Choice deadline extended to Oct 16 (+3 weeks). Mihaela to post in AI/data Slack channel tomorrow. Ruxandra engaging client story strategists globally. Riley to investigate "2026 champs" campaign code + fix category-level dashboard + explore consolidated IBM portfolio reporting. Direct outreach to G2 reviewers ongoing.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-4')?'done':''}" data-csm="andy" id="action-0909-4">
      <div class="action-checkbox ${doneActions.has('0909-4')?'checked':''}" onclick="toggleAction('0909-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; FactSet &mdash; $30K Customer Voice Package + $10K bundle decision Sept 17</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim + Riley Rogers + Anderson Duncan &middot; Anderson to submit ticket to re-enable FactSet vendor portal ASAP + send content-type list to Greta + confirm ability to reach net-new reviewers + update negative-review notifications from Aiden to Lin. Greta + Anderson to follow up w/ Aiden on intended content-bundle use before finalizing $10K portion after his return Sept 17. Lin new day-to-day TR relationship owner.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-5')?'done':''}" data-csm="pam" id="action-0909-5">
      <div class="action-checkbox ${doneActions.has('0909-5')?'checked':''}" onclick="toggleAction('0909-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Epicor &mdash; final proposal submission + procurement navigation</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck + Anderson Duncan &middot; Anderson to send final executable proposal ASAP (hopefully today). Scott to send proposal to Stephanie + flag for procurement + immediately submit to Wrike requesting PO. Scott/Anderson to connect Anderson w/ new procurement contact if needed. Ensure order form has capitalized 'T' in 'Biz Track'. 46-47% discount (highest among customers) at stake.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-6')?'done':''}" data-csm="nick" id="action-0909-6">
      <div class="action-checkbox ${doneActions.has('0909-6')?'checked':''}" onclick="toggleAction('0909-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Siemens &mdash; renewal quarter-end push + Account Compass DI Automation expansion</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson + David Garcia Thomas + Jeff Wymer &middot; Jeff to try to get on Fred (Finance) calendar today re Siemens renewal status &mdash; discount tied to quarter-end alignment. David to set up prototype call w/ Chloe + Francis (on-demand live report generation from MCP) + coordinate w/ Nick on December piece + MCP credits. Max to follow up w/ intent teams on DI Automation + Smart Infrastructure topics. Jeff waiting on Mitchell + Ross for Account Compass data sources.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0909-7')?'done':''}" data-csm="all" id="action-0909-7">
      <div class="action-checkbox ${doneActions.has('0909-7')?'checked':''}" onclick="toggleAction('0909-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Ops &mdash; Weflow SFDC-sync backlog Day 5 (75% no-transcript)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Ops &middot; Sept 9 &mdash; 70 of 93 recordings had no SFDC transcript (75%). SFDC speaker detection confirmed only 2 of 10 unique customer calls; 8 recovered via Weflow &lsquo;participants&rsquo; fallback. Consider formal Weflow support ticket if pattern persists across the week.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Tuesday September 8, 2026
// ============================================================

function dayData_2026_09_08() {
  return {
    calls: [
      { ts: 'Sep 8 &middot; 3:00 AM', csm: 'varun', account: `Open Text Corporation`,
        note: `Bi-weekly cadence w/ Sujay Kodagali + David De nazareth. Revised renewal quote $233K&rarr;$240K reflecting long-term partnership + 3% uplift. Export credits + monthly-report process. AWS Marketplace alt route being explored. Renewal close before Oct 23.`,
        mins: 23, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `OpenText bi-weekly cadence. Initial quote revised from $233K w/ 3% uplift to $240K reflecting longer-term partnership commitment + value. Export functionality + credit management: monthly reports for consumption tracking + additional credits (120K-130K) assigned for spend + install data points. Transition to new platform gradual (UI changes on new, data consistent across both). AWS Marketplace alternative execution route available (private offer + 7 extra days). Varun to close renewal one week ahead of Oct 23 deadline + schedule call w/ David re export functionality + push new AM Julian intro post-renewal. Sujay to align w/ Pratik on approach + explore CRM file upload automation. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 4:30 AM', csm: 'divyam', account: `Adobe Systems Incorporated`,
        note: `Monthly w/ Abhishek Srivastava + Man Hon Ding. V2 platform&rarr;RGIP migration prep. Credit-based data-type consumption model. Proposed annual $187K vs current $165K. RGIP demo for stakeholders (Jill + Manon + Marson) week of Oct 21 or 28.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Adobe monthly migration prep. Migrating from legacy V2 platform to new RGIP (Revenue Growth Intelligence Platform). New features: Market Analyzer (AI-ready market sizing) + AI Scoring (AI-powered signals). Consumption model shifting from entity-based to data-type-based credits (spend data most expensive). Proposed annual commitment: $187K (fractional increase from $165K current); further discounts for multi-year/prepaid. 20-day dual-platform-access window during migration. Divyam/Mark to provide apples-to-apples comparison of current (100K entities) vs proposed credit model by end of October. Divyam to schedule 45-min RGIP demo for key stakeholders (Jill, Manon, Marson) week of Oct 21 or 28. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 7:00 AM', csm: 'divyam', account: `Paychex + Paycor`,
        note: `TR Monthly Sync w/ Nick Berta + Taylor Lohmann + Anderson Duncan. First batch intent-driven leads expected soon (post-holiday delay). Paychex closer to review criteria; Paycor needs more reviews on capabilities/value-for-money. New paid-programs hire onboarding this month.`,
        mins: 14, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Paychex + Paycor TR monthly. Intent-driven leads program first batch expected shortly (potentially tomorrow) post-holiday delay. Customer review collection ongoing: Paychex closer to meeting review criteria; Paycor needs more reviews highlighting capabilities or value-for-money. New hire joining later this month to manage paid programs across both brands (profile management + review generation campaigns). HG Insights + TrustRadius integration educational sessions being offered to customers. Scott to confirm lead delivery timeline by next Tuesday; Divyam to follow up w/ Michelle re lead confirmation. Nick Berta to send campaign user list for review generation. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 7:30 AM', csm: 'riley', account: `SAP Inc (CX Sync)`,
        note: `SAP & TR CX Sync w/ Binod Negi + Christin Untenzu + Cole Arutian + Mardigan Moffat. First draft Commerce Cloud survey report Sept 21; Sales Cloud draft EoD today. Buyer&rsquo;s Choice extended Oct 16 (all 3 products qualified). TR review volume dropped &mdash; SAP Connect push.`,
        mins: 16, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP CX Sync w/ TR team. First draft Commerce Cloud survey report expected Sept 21; Sales Cloud draft EoD today. Differentiate SAP market reports to avoid similarity. Buyer&rsquo;s Choice deadline extended to Oct 16 (all 3 products Commerce/Sales/Service qualified). Overall TR review volume has dropped &mdash; drive more reviews at upcoming SAP Connect. Riley to (a) share previously-generated Sales Cloud report w/ Binod, (b) generate single incentivized review link for Sales+Service+Commerce ("Q3" or "H2" tracking), (c) initiate campaign for rating-only users to submit full reviews, (d) share Binod's LinkedIn post w/ TR team. Binod to reach out to Milan re fresh Sales Cloud quotes + review report drafts. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 7:30 AM', csm: 'rani', account: `NetApp (PTB Capabilities)`,
        note: `NetApp PTB Capabilities discussion w/ Adrian Escobar + Gavin Padden + Jieun Chung + Madhup Tibrewala + Akanksha Jain. IT install + IT spend + intensity-score walkthrough. Follow-up scheduled Sept 9 10 AM PST for Jieun deep-dive on AI + storage spend + PTB model inputs/outputs.`,
        mins: 32, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `NetApp PTB Capabilities discussion. HG's IT install + IT spend data provide granular view beyond simple wallet size. Intensity-score indicates depth + longevity of tech adoption (vendor incumbency + upsell/cross-sell/displacement opportunities). PTB models leverage multiple signals: spend + installs + firmographics + intent. NetApp interested in AI spend + cloud-storage spend field specifics for market sizing + account prioritization. Adrian to provide data catalogs + dictionaries + docs before follow-up. Follow-up meeting scheduled Sept 9 at 10 AM PST (first 30 mins for Jieun) w/ Adrian + Gavin to walk through PTB model inputs/outputs. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 8:00 AM', csm: 'varun', account: `Iron Mountain Incorporated`,
        note: `Bi-weekly w/ Peter Rush + Kimberly Hardin + Julian Rojas + Karin Pindle + Leo Zunz + Max Shaw + Francis Brero + Chlo&eacute; Portier + David Crossman. ML PTB model + market sizing walkthrough. Potential 2-month contract extension to align w/ longer-term renewal plans.`,
        mins: 95, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Iron Mountain bi-weekly. Iron Mountain building new ML propensity-to-buy model &mdash; integrating HG data w/ Salesforce signals + customer interactions. Market sizing: 2500+ employees or $1B+ revenue focus for digital business + asset lifecycle management units. HG clarified contextual intent (company-level) vs buyer intent (granular TR signals). Product catalog coverage evaluation + interest in adding more products/geos. Potential 2-month contract extension being considered to align w/ longer-term renewal plans. HG to share: corporate hierarchy docs + TR intent-data docs + country-level counts + Market Analyzer PDF + time-series data link. Iron Mountain to provide: 4 defined size-segment criteria + list of all IRM products for validation. Follow-up call early next week + confirm 2-month contract extension viability. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 9:30 AM', csm: 'nick', account: `SAP Inc (biweekly)`,
        note: `SAP biweekly w/ David Garcia Thomas + L&eacute;opold Baudry. Target company revenue threshold lowered 50M&rarr;20M (expands customer base). Procurement leaning 1-year contract due to price hikes vs multi-year price locks. David to provide 1yr vs 3yr pricing comparison this week.`,
        mins: 8, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short SAP biweekly sync. Target revenue threshold revised downwards from 50M to 20M &mdash; significantly expanding potential customer base. Contract-length tension: procurement leaning 1-year term due to recent substantial business-model cost increases, but multi-year offers price certainty + potentially deeper discounts. Pricing model discounts originally based on multi-year agreements &mdash; shift to 1-year may require adjustments. David to (a) provide updated numbers/figures by EoD, (b) provide 1yr vs 3yr pricing comparison before end of week, (c) discuss commercial model for 20M+ revenue vendors w/ James ASAP. Franklin to address Jocelyn (or Jo Raheem Zaman) re calculations. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 10:00 AM', csm: 'rani', account: `Google Inc.`,
        note: `Renewal Discussion w/ Natalia Fritz + Mark Fell. Credit-based consumption model transition &mdash; tiered pricing + annual credit carry-over. FAI + Gen AI considered for scope removal to manage costs. Natalia running internal analysis w/ Lawrence early next week; follow-up week of 14th.`,
        mins: 45, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Google renewal transition to credit-based consumption model. Tiered pricing (cost/credit decreases as volume increases) + annual credit carry-over for budget predictability. FAI + Gen AI being considered for removal from initial scope to manage costs (possible re-add later). New platform (RGIP) is AI-driven, replacing older V2 which is going EOL &mdash; enhanced capabilities but requiring different access approach. Natalia (client rep + decision maker) to conduct internal analysis w/ Lawrence (business stakeholder) + Sohana (procurement) early next week to align on critical data needs + product priorities. Mark to schedule follow-up meeting week of Sep 14th (Wed/Thu) to discuss finalized package + pricing + share TR Customer Voice + platform info. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 8 &middot; 10:00 AM', csm: 'rani', account: `Cisco (Isovalent onboarding)`,
        note: `Cisco Isovalent onboarding w/ Melmoff + Adrian Escobar. AI Scoring positive feedback + HubSpot integration interest. Credits needed for AI Scoring &mdash; potentially replace ZoomInfo. Budget constraints prevent immediate acquisition (H2 or next year budget). Adrian to share AI scoring cost + rate card.`,
        mins: 17, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Cisco Isovalent onboarding + AI scoring feedback. Melmoff (user) satisfied w/ AI scoring &mdash; potential integration w/ HubSpot; interest in replacing ZoomInfo. Budget constraint: no immediate credits available; expected budget H2 or following year. AI Scoring can be tailored by sales plays; plan to develop 4 distinct scoring mechanisms. ~1000 accounts for initial A/B tiers scoring. Adrian to (i) get sales + CS approval for AI Scoring credits by EoD/tomorrow, (ii) share AI scoring cost estimates w/ Melmoff, (iii) share credit rate card for future reference, (iv) chat w/ Rainy re potential credit arrangements, (v) get leadership approval on AI credit solutions. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 11:00 AM', csm: 'rani', account: `Workday Inc`,
        note: `Usage Review w/ Elaina Wasmus + Joe DosSantos + Kraig Kraning + Rishabh Wadhwa + Leo Zunz. 3-year deal finalization &mdash; credit usage reconciled to ~1.2M credits. Buffer + rollover options to provide cost predictability. Workday submitting for internal approvals by tomorrow; target close end of week.`,
        mins: 36, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday 3-year deal finalization. Credit usage reconciled from initial 1.5M-14M range down to ~1.2M revised estimate. HG clarified UI opportunity generator + monthly data fee methodology; excluded contract + spend data feeds from calculations to align w/ Workday's adjusted numbers. Buffer + rollover options being explored for cost predictability + flexibility over 3-year term. Elaina to review contract for internal approvals (Alex + team) + submit into Workday system by tomorrow. Target: finalize by end of this week pending internal finance approval. Workday planning onsite workshop for use-case + collaborative topics. Kraig/Rani to reshare MCP materials + side-by-side comparison of data offerings. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 11:30 AM', csm: 'divyam', account: `BILL Operations`,
        note: `Weekly Sync w/ Charles Hawkins. Sales conversion data analysis &mdash; self-serve/API accounts skewing scoring metrics (lower deal sizes). MRR vs VAS metric separation needed. SNE vs APAR product-family conversion differences. Lead engagement model v12 refinements in flight.`,
        mins: 44, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `BILL weekly sync. Sales conversion analysis: self-service + API-originated accounts represent significant lower-scoring closed-won deal share (small deal sizes) &mdash; skewing overall conversion metrics. Revenue metrics: MRR vs Verified Addressable Spend need separate consideration for average deal size interpretation. Product-family disparities: SNE (digital, self-serve) vs APAR (larger lift, less self-serve) require tailored approaches. Data hygiene: incorrect account associations skew scoring accuracy. Current lead scoring model effectiveness being questioned re ICP fit vs behavioral data balance. Divyam to verify Clearbit data usage + investigate SFDC/CRM data as primary source by next Monday's meeting; conduct advanced product-wise closed-won vs closed-lost analysis (excluding self-serve/API) within 1-2 days. Eric to finish tweaking engagement model. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 8 &middot; 11:30 AM', csm: 'riley', account: `Red Hat, LLC`,
        note: `TR biweekly w/ Brianna Gault + Cole Arutian + Mardigan Moffat. Ansible + OpenShift + RHPL lead-gen campaign performance review. Lead-number reporting discrepancy between Brianna dashboard vs Sai integrate view. Tech Tiers + Buyer&rsquo;s Choice + Red Hat update prep.`,
        mins: 32, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Red Hat TR biweekly. Lead-gen campaign performance review: Ansible (Senior Directors 41% + VPs 3%), OpenShift (Architects 48% + Directors 37% + VPs 21%), RHPL largest pullback due to "architect"/"product manager" ambiguity. Reporting discrepancy: Brianna's sales cloud dashboard shows 132 leads vs Sai's integrate view showing 134 (OpenShift) + higher for RHPL. Sai + Abby to address RHEL leads mis-categorized under "Power of Linux ebook discovery" sessions. Riley to send vendor portal form link to Brianna + ensure products activated in prompt tracking. Tech Tiers alignment w/ Red Hat Week internally. Buyer&rsquo;s Choice ongoing prep. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 8 &middot; 12:30 PM', csm: 'rani', account: `NetApp (weekly sync)`,
        note: `Weekly sync w/ Adrian Escobar + Megan Santiago + Gabe Weske + Bini Valsala. Contract renewal lapsed due to recent holidays but approvals in progress (expected EoD or tomorrow). Intent data (top-of-funnel Bitstream + bottom-of-funnel TR) discussion. SMB + AI spend future add-on discussion.`,
        mins: 19, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `NetApp weekly sync. Contract renewal has lapsed due to recent holidays &mdash; approvals in progress, expected EoD or early tomorrow. Intent data available: top-of-funnel (Bitstream) + bottom-of-funnel (TrustRadius) for buyer behavior understanding. HG doesn't build PTB models by default but offers consulting + data scoring best practices. Verified install dates (first/last) leveraged for contract-renewal timeline prediction + service-switching opportunity ID. Ongoing initiative to refine company + operational hierarchies for legal-ownership + decision-making alignment. Megan to stay close to EAs for leader sign-offs by end of week; Adrian to send collateral on TR + Bitstream intent data to Gabe + info on differentiation between two intent-data types. Post-contract execution: schedule AI + SMB data discussion. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'varun', account: `Open Text Corporation`, health: 'Healthy',
        note: `Bi-weekly cadence &mdash; renewal quote revised $233K&rarr;$240K. Export credits + monthly-report process. AWS Marketplace alt route. Renewal close before Oct 23.` },
      { csm: 'divyam', account: `Adobe Systems Incorporated`, health: 'Healthy',
        note: `V2&rarr;RGIP platform migration prep. Credit-based data-type consumption. Proposed $187K vs current $165K. RGIP demo for stakeholders week of Oct 21 or 28.` },
      { csm: 'divyam', account: `Paychex + Paycor`, health: 'Healthy',
        note: `TR Monthly &mdash; first batch intent-driven leads expected soon (post-holiday delay). Paychex closer to review criteria; Paycor needs more capabilities/value reviews. New paid-programs hire this month.` },
      { csm: 'riley', account: `SAP Inc (CX Sync)`, health: 'Healthy',
        note: `Commerce Cloud draft Sept 21; Sales Cloud draft EoD. Buyer&rsquo;s Choice extended Oct 16 (all 3 products qualified). TR review volume dropped &mdash; SAP Connect push.` },
      { csm: 'rani', account: `NetApp (PTB Capabilities)`, health: 'Healthy',
        note: `PTB capabilities discussion &mdash; IT install + IT spend + intensity score walkthrough. Follow-up Sept 9 10 AM PST for Jieun deep-dive on AI + storage spend + PTB model.` },
      { csm: 'varun', account: `Iron Mountain Incorporated`, health: 'Healthy',
        note: `ML PTB model + market sizing walkthrough. Potential 2-month contract extension to align w/ longer-term renewal plans. Product catalog + geo coverage evaluation. Follow-up early next week.` },
      { csm: 'nick', account: `SAP Inc (biweekly)`, health: 'Healthy',
        note: `Target revenue threshold lowered 50M&rarr;20M (expanded customer base). Procurement leaning 1-year vs multi-year price-lock tension. David to provide 1yr vs 3yr pricing comparison this week.` },
      { csm: 'rani', account: `Google Inc.`, health: 'Healthy',
        note: `Renewal discussion &mdash; credit-based consumption transition + tiered pricing + annual credit carry-over. FAI + Gen AI considered for scope removal. Natalia internal analysis early next week; follow-up week of 14th.` },
      { csm: 'rani', account: `Cisco (Isovalent onboarding)`, health: 'Healthy',
        note: `AI Scoring positive feedback + HubSpot integration interest. Credits potentially to replace ZoomInfo. Budget constraint (H2 or next year). Adrian to share AI scoring cost + rate card.` },
      { csm: 'rani', account: `Workday Inc`, health: 'Healthy',
        note: `3-year deal finalization &mdash; usage reconciled to ~1.2M credits. Buffer + rollover for cost predictability. Elaina submitting internal approvals tomorrow; target close end of week.` },
      { csm: 'divyam', account: `BILL Operations`, health: 'Healthy',
        note: `Sales conversion data analysis &mdash; self-serve/API accounts skewing scoring. MRR vs VAS separation. SNE vs APAR product-family conversion differences. Lead engagement model v12 refinements.` },
      { csm: 'riley', account: `Red Hat, LLC`, health: 'Healthy',
        note: `TR biweekly &mdash; Ansible + OpenShift + RHPL lead-gen review. Lead-number reporting discrepancy investigation (Sai + Abhilasha). Tech Tiers + Buyer&rsquo;s Choice + Red Hat update prep.` },
      { csm: 'rani', account: `NetApp (weekly sync)`, health: 'Healthy',
        note: `Weekly sync &mdash; contract renewal lapsed post-holiday but approvals in progress (EoD/tomorrow). Intent data walkthrough (Bitstream + TR). SMB + AI spend future add-on.` },
    ],
  };
}

function dayMeta_2026_09_08() {
  return {
    pills: [
      ['dot-teal',   '13 Calls'],
      ['dot-amber',  '5 Expansion'],
      ['dot-green',  '13 Vitally Pulses'],
      ['dot-grey',   'Tue Sep 8 &middot; 92 scanned'],
    ],
    tabs: ['Overview', 'Calls (13)', 'Pulses (13)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_08() {
  return `<div class="section-label">Team Activity &mdash; Tuesday September 8, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Sep 8 &mdash; 92 recordings scanned</strong> via SFDC SOQL &middot; <strong>13 confirmed calls</strong> across 5 CSMs &middot; 0 concerning &middot; 5 expansion signals &middot; SFDC confirmed 2 (Google + BILL); Weflow fallback added 11 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Google (credit-based consumption model transition + FAI/Gen AI scope decision) &middot; Adobe (V2&rarr;RGIP migration + $187K proposed) &middot; OpenText (renewal quote $240K reflecting long-term partnership) &middot; Cisco Isovalent (AI Scoring credits to potentially replace ZoomInfo) &middot; Workday (3-year deal finalization + ~1.2M credits + buffer/rollover)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 4 (73% no-transcript):</strong> Sept 8 = 92 recordings, 25 with transcripts, 67 without. SFDC speaker detection confirmed only 2 customer calls (Google + BILL); 11 additional confirmations recovered via Weflow &lsquo;participants&rsquo; fallback.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">5 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">5</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">5</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">149m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">NetApp PTB (fit/need/intent) &middot; Google (&#x1F4C8; credit-model transition + FAI/GenAI scope) &middot; Cisco Isovalent (&#x1F4C8; AI Scoring + ZoomInfo replace) &middot; Workday (&#x1F4C8; 3yr deal + 1.2M credits) &middot; NetApp weekly (renewal lapsed but approvals in progress)</div>
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
        <div><div class="metric-num m-grey">85m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Adobe (&#x1F4C8; V2&rarr;RGIP migration + $187K) &middot; Paychex+Paycor (TR Monthly + intent-driven leads batch soon) &middot; BILL (sales conversion analysis + lead scoring model v12)</div>
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
        <div><div class="metric-num m-grey">118m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">OpenText (&#x1F4C8; renewal $240K + AWS Marketplace alt + Oct 23 close) &middot; Iron Mountain (ML PTB + market sizing + 2-month extension)</div>
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
        <div><div class="metric-num m-grey">48m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP CX Sync (Commerce+Sales+Service draft prep + Buyer&rsquo;s Choice Oct 16) &middot; Red Hat TR (Ansible+OpenShift+RHPL lead-gen review)</div>
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
        <div><div class="metric-num m-grey">8m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP biweekly (revenue threshold 50M&rarr;20M + procurement 1yr vs multi-year price-lock tension)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Team Sync w/ Mark Fell (SAP IBP) was an internal HG sync per event; no CSM speaker in customer transcripts; Weflow participants did not surface Pam.</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Apple Strategy & Planning event had no transcript synced; no Weflow-participant hits.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Andy speaker in SFDC transcripts; no Weflow-participant hits.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_08() {
  return `<div class="section-label">Confirmed Calls &mdash; Tuesday September 8, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Google (credit-model transition) &middot; Adobe (V2&rarr;RGIP migration $187K proposed) &middot; OpenText (renewal $240K + AWS Marketplace) &middot; Cisco Isovalent (AI Scoring credits to replace ZoomInfo) &middot; Workday (3-year deal + 1.2M credits + buffer/rollover)
  </div>`;
}

function dayPulsesHTML_2026_09_08() {
  const cards = [
    { csm:'varun', health:'Healthy', account:`Open Text Corporation`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 8 &middot; Healthy`,
      excerpt:`OpenText bi-weekly cadence &mdash; renewal quote revised $233K&rarr;$240K reflecting long-term partnership + 3% uplift. Export credits + monthly-report process. AWS Marketplace alt route (private offer + 7 extra days). Renewal close before Oct 23.` },
    { csm:'divyam', health:'Healthy', account:`Adobe Systems Incorporated`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 8 &middot; Healthy`,
      excerpt:`V2&rarr;RGIP platform migration prep. Credit-based data-type consumption (spend data most expensive). Proposed $187K vs current $165K (fractional increase). 20-day dual-platform-access window. RGIP demo for stakeholders (Jill+Manon+Marson) week of Oct 21 or 28.` },
    { csm:'divyam', health:'Healthy', account:`Paychex + Paycor`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 8 &middot; Healthy`,
      excerpt:`TR Monthly &mdash; first batch intent-driven leads expected soon (post-holiday delay). Paychex closer to meeting review criteria; Paycor needs more reviews on capabilities/value-for-money. New paid-programs hire onboarding later this month.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (CX Sync)`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 8 &middot; Healthy`,
      excerpt:`SAP CX Sync &mdash; Commerce Cloud survey report first draft Sept 21; Sales Cloud draft EoD today. Buyer&rsquo;s Choice extended Oct 16 (all 3 products Commerce/Sales/Service qualified). TR review volume dropped &mdash; SAP Connect push.` },
    { csm:'rani', health:'Healthy', account:`NetApp (PTB Capabilities)`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 8 &middot; Healthy`,
      excerpt:`NetApp PTB Capabilities discussion &mdash; IT install + IT spend + intensity-score walkthrough beyond wallet size. Follow-up scheduled Sept 9 10 AM PST for Jieun deep-dive on AI + storage spend + PTB model inputs/outputs.` },
    { csm:'varun', health:'Healthy', account:`Iron Mountain Incorporated`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 8 &middot; Healthy`,
      excerpt:`Iron Mountain building ML PTB model + market sizing (2500+ emp or $1B+ rev focus). Product catalog + geo coverage evaluation. Potential 2-month contract extension to align w/ longer-term renewal plans. Follow-up early next week.` },
    { csm:'nick', health:'Healthy', account:`SAP Inc (biweekly)`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 8 &middot; Healthy`,
      excerpt:`SAP biweekly &mdash; target company revenue threshold lowered 50M&rarr;20M (expanded customer base). Procurement leaning 1-year vs multi-year price-lock tension. David to provide 1yr vs 3yr pricing comparison before end of week.` },
    { csm:'rani', health:'Healthy', account:`Google Inc.`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 8 &middot; Healthy`,
      excerpt:`Google renewal &mdash; credit-based consumption model transition + tiered pricing + annual credit carry-over. FAI + Gen AI considered for removal from initial scope. Natalia internal analysis w/ Lawrence early next week; follow-up week of 14th (Wed/Thu).` },
    { csm:'rani', health:'Healthy', account:`Cisco (Isovalent onboarding)`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 8 &middot; Healthy`,
      excerpt:`Cisco Isovalent onboarding &mdash; AI Scoring positive feedback + HubSpot integration interest. Credits needed for AI Scoring, potentially to replace ZoomInfo. Budget constraint (H2 or next year). Adrian to share AI Scoring cost + credit rate card.` },
    { csm:'rani', health:'Healthy', account:`Workday Inc`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 8 &middot; Healthy`,
      excerpt:`Workday 3-year deal finalization &mdash; credit usage reconciled 1.5M-14M range down to ~1.2M revised estimate. Buffer + rollover for cost predictability. Elaina submitting internal approvals tomorrow; target close end of week. Onsite workshop planned.` },
    { csm:'divyam', health:'Healthy', account:`BILL Operations`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 8 &middot; Healthy`,
      excerpt:`BILL Weekly Sync &mdash; sales conversion data analysis. Self-serve/API accounts skewing scoring (small deal sizes). MRR vs VAS separation needed. SNE vs APAR product-family conversion differences. Lead engagement model v12 refinements in flight.` },
    { csm:'riley', health:'Healthy', account:`Red Hat, LLC`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 8 &middot; Healthy`,
      excerpt:`Red Hat TR biweekly &mdash; Ansible + OpenShift + RHPL lead-gen review. Lead-number reporting discrepancy investigation (Sai + Abhilasha). Tech Tiers alignment w/ Red Hat Week internally. Buyer&rsquo;s Choice + Red Hat update prep ongoing.` },
    { csm:'rani', health:'Healthy', account:`NetApp (weekly sync)`, opp:`Vitally Pulse &mdash; Sep 8 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 8 &middot; Healthy`,
      excerpt:`Weekly sync &mdash; contract renewal lapsed due to recent holidays but approvals in progress (EoD or early tomorrow). Intent data walkthrough: Bitstream (top-of-funnel) + TR (bottom-of-funnel). SMB + AI spend future add-on discussion post-contract.` },
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
        <div class="action-title">&#x1F4C8; Google &mdash; credit-based consumption transition + week-of-14th follow-up</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Mark Fell &middot; Natalia (client decision maker) to conduct internal analysis w/ Lawrence + Sohana (procurement) early next week to align on critical data needs + product priorities. Mark to schedule follow-up meeting week of Sep 14 (Wed/Thu) to finalize package + pricing; share TR Customer Voice + platform info + exciting new-platform videos/demos. FAI + Gen AI scope decision needed to manage costs.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-2')?'done':''}" data-csm="rani" id="action-0908-2">
      <div class="action-checkbox ${doneActions.has('0908-2')?'checked':''}" onclick="toggleAction('0908-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Workday &mdash; 3-year deal finalization by end of this week</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Kraig Kraning + Elaina Wasmus &middot; Credit usage reconciled to ~1.2M. Elaina to review contract for internal approvals (Alex + team) + submit into Workday system by tomorrow. Target finalize by end of this week pending internal finance approval. Kraig/Rani to reshare MCP materials + side-by-side data-offerings comparison. Plan onsite workshop for use cases + collaborative topics.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-3')?'done':''}" data-csm="varun" id="action-0908-3">
      <div class="action-checkbox ${doneActions.has('0908-3')?'checked':''}" onclick="toggleAction('0908-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; OpenText &mdash; renewal close before Oct 23 + export functionality alignment</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Sujay Kodagali + David De nazareth &middot; Renewal quote $240K (revised from $233K + 3% uplift). Varun to close renewal one week ahead of Oct 23 deadline + schedule call w/ David re export functionality + share monthly-export reports. Assign additional credits (120K-130K) for spend + install data points post-renewal. Sujay to align w/ Pratik on approach + schedule Pratik call for platform alignment.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-4')?'done':''}" data-csm="divyam" id="action-0908-4">
      <div class="action-checkbox ${doneActions.has('0908-4')?'checked':''}" onclick="toggleAction('0908-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Adobe &mdash; V2&rarr;RGIP migration + apples-to-apples credit comparison by EoM</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Abhishek Srivastava &middot; Divyam/Mark to provide apples-to-apples comparison of current 100K entities consumption vs proposed credit model for same usage by end of October. Divyam to schedule 45-min RGIP demo for Jill + Manon + Marson week of Oct 21 or 28. Abhishek to forward apples-to-apples email to stakeholders + confirm if Mark can meet directly w/ Jill or Glenn.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-5')?'done':''}" data-csm="rani" id="action-0908-5">
      <div class="action-checkbox ${doneActions.has('0908-5')?'checked':''}" onclick="toggleAction('0908-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cisco Isovalent &mdash; AI Scoring credits approval + cost estimates</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Adrian Escobar &middot; Adrian to get sales + customer success approval for AI Scoring credits by EoD/tomorrow + share AI scoring cost estimates + credit rate card w/ Melmoff. Chat w/ Rainy re potential credit arrangements + get leadership approval on AI credit solutions. Melmoff to determine specific number of accounts for AI Scoring (~1000 for A/B tiers initially) + explore using ZoomInfo usage as credit-estimation basis.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-6')?'done':''}" data-csm="rani" id="action-0908-6">
      <div class="action-checkbox ${doneActions.has('0908-6')?'checked':''}" onclick="toggleAction('0908-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; NetApp &mdash; contract renewal approvals close + PTB model follow-up Sept 9</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Adrian Escobar + Megan Santiago &middot; Megan to stay close to EAs for NetApp leader sign-offs by end of week. Adrian to send TR + Bitstream intent-data collateral + differentiation info to Gabe Weske. PTB follow-up meeting Sept 9 10 AM PST (first 30 mins for Jieun) to walk through PTB model inputs/outputs + AI spend + storage spend + data dictionaries. Post-contract execution: schedule AI + SMB data discussion.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0908-7')?'done':''}" data-csm="divyam" id="action-0908-7">
      <div class="action-checkbox ${doneActions.has('0908-7')?'checked':''}" onclick="toggleAction('0908-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; BILL &mdash; sales conversion analysis + lead engagement model v12 tweaks</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Charles Hawkins + Eric Nguyen &middot; Divyam to (a) verify Clearbit data usage + investigate SFDC/CRM data as primary source by next Monday, (b) conduct advanced product-wise closed-won vs closed-lost analysis (excluding self-serve/API) within 1-2 days. Eric to finish tweaking engagement model + review together w/ Charles before next call + check if field exists that stamps when enrichment data has been applied to SFDC record.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Tuesday September 1, 2026
// ============================================================
// Note: weeklyOrMonthlyHTML_2026_09_01 (Aug 2026 monthly summary) exists above.

function dayData_2026_09_01() {
  return {
    calls: [
      { ts: 'Sep 1 &middot; 5:30 AM', csm: 'varun', account: `Autodesk Inc`,
        note: `Data Feed Migration call w/ Mohammed Tanveer + Rishabh Wadhwa. Install data confirmed clean (no missing product IDs). Spend data null-product-ID issue &mdash; Tanveer rebuilding pipeline w/ correct unique keys (CRM ID for spend, Company ID + Product ID for install). GZ format preferred over Parquet.`,
        mins: 11, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Autodesk data pipeline cleanup. Rishabh confirmed install files do not have missing product IDs. Spend data has potential null-product-ID issues (may originate from install file per initial assumptions). Tanveer to rebuild pipeline w/ cleaned data + logic based on correct unique identifiers (CRM ID for spend; Company ID + Product ID for install). GZ file format preferred over Parquet for current data delivery (accommodates another team's analysis). Future call cadence set to 4-6 PM IST. Varun to loop Tanveer into relevant email threads for consolidated communication. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 1 &middot; 6:30 AM', csm: 'riley', account: `BMC Software Inc`,
        note: `TR Product Feedback w/ Michael Garside (BMC) + Claire Murphy + Todd Detmold + Yuan Fang + Erica Yim + Augie Buettner. BMC DISSATISFIED w/ TR: no review managed service, poor SEO vs competitors, HG acquisition trust drop, inconsistent review rejection. BMC considering G2 + SourceForge + PeerSpot.`,
        mins: 32, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `BMC dissatisfaction w/ TrustRadius escalation. Key concerns: (1) TR lacks review-managed service that competitors offer, (2) TR SEO significantly lower than competitors &mdash; impacting visibility in key search + LLM platforms (Perplexity), (3) HG Insights acquisition led to perceived trust drop &mdash; TR messaging shifted toward HG during critical customer executive roundtable, (4) inconsistent review rejection rates + slow approval times, (5) competitors (SourceForge + PeerSpot) more innovative w/ better value + AI tools + integrated marketplaces. Michael Garside now a BLOCKER; Leslie (BMC VP) also negative post-acquisition. TR team to schedule follow-up + demonstrate plan to regain BMC trust: improve product offerings, pricing, address service gaps before renewal. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 1 &middot; 6:30 AM', csm: 'atisha', account: `Equinix, Inc.`,
        note: `Equinix target-list refinement w/ Garrett Dee + Alexi Mouarkach. Narrow focus to direct competitors (colocation + data center outsourcing + interconnection) vs adjacent (CDNs + IaaS). Cloud Dynamics identified as more promising data source for competitive intelligence.`,
        mins: 24, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Equinix target-list refinement session. Decision: focus on direct competitors (colocation + data center outsourcing + interconnection) rather than adjacent services (CDNs + IaaS). Initial broad scoping was too wide + would lead to unmanageable list. AI-driven insights valuable but current data set effectiveness for identifying specific competitors needs validation. Spend data valuable for market opportunity sizing + wallet-share expansion. Cloud Dynamics identified as potentially more suitable data source for competitive intelligence vs current HG Insights data. Atisha to (a) consult w/ account manager for pricing details by EoD, (b) investigate Cloud Dynamics data for competitor analysis by EoD/tomorrow, (c) provide vendor + company counts bifurcation from Cloud Dynamics, (d) share Cloud Dynamics pricing if viable. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 1 &middot; 7:30 AM', csm: 'rani', account: `Workday Inc (redline feedback)`,
        note: `Contract redline feedback w/ Elaina Wasmus + Leo Zunz + Kraig Kraning. Proposed 3-year deal w/ front-loaded credits year 1 (15M vs 11.4M baseline) to address Workday no-rollover concerns. Elaina to regroup internally re 3-year interest + rollover-flex exception. Docusign target Fri.`,
        mins: 31, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday contract redline. Workday concerned about unpredictable credit needs under strict no-rollover policy. Proposed solution: 3-year deal w/ flexibility &mdash; front-load credits year 1 as buffer (baseline 11M + built-in 400K buffer = 11.4M; proposed 15M for year 1). Maintain current discount rate even w/ multi-year credit-usage variance. Rani to (a) send updated response from other form after call, (b) discuss w/ ops committee re rollover exception across years for 3-year commit. Elaina to regroup w/ team on 3-year interest + provide final negotiations + T&Cs + dollar amounts + send Docusign before Friday. Elaina + Leo set standing 7:30 AM PT call for tomorrow. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 1 &middot; 8:00 AM', csm: 'rani', account: `Lenovo Group Ltd.`,
        note: `Teams Meeting w/ Adrian Escobar + James Tudway + Yuan Fang + Nick Johnson + Gavin Padden + Anuradha Sathe (Lenovo) + Sharath Chittyana + Niranjan George Marx + Raju Ghosh + Ujjaini Mazumdar. News data feed + roadmap partnership discussion. Long-term commitment (>3 years) envisioned.`,
        mins: 55, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Lenovo partnership discussion. Initial data delivery faced structural challenges (redevelopment needed &mdash; acknowledged teething problems). Focus shifting to remaining data (news + intent) + how consumption should work &mdash; current offered solution not practical. Long-term partnership envisioned &gt;3 years. News categories needed: M&A + financial reports + legal implications + government benefits + new market entries + executive movements. Anuradha to send mock data structure + news categories to HGI by EoW + provide tentative timelines. HGI team to define plans for roadmap items beyond Q4 + provide recency/timestamp info for data fields + weekly/EoW stock price data for listed companies + clarify quarterly filings extracts + schedule quarterly reviews. Lenovo team to prioritize news categories + identify gaps vs other providers. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 1 &middot; 8:00 AM', csm: 'nick', account: `Lenovo Group Ltd. (co-attend)`,
        note: `Nick co-attended Lenovo partnership Teams meeting supporting Rani + Adrian + James. Same content &mdash; news data feed structure + roadmap + long-term partnership commitment >3 years.`,
        mins: 55, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Nick co-attended Lenovo partnership Teams meeting. Same content &mdash; news data structure discussion + Q4+ roadmap alignment + quarterly review cadence + Anuradha (Lenovo) to send mock data structure by EoW. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 1 &middot; 8:30 AM', csm: 'varun', account: `Open Text Corporation`,
        note: `Renewal Scoping w/ Prateek Gautam + Simin Anbaran + Leo Zunz + Julian Rojas. TENTATIVE 3-year deal at $240K annual (6% uplift) + 4x export capabilities + new-platform POC. Shannon (client leadership) needs approval; David + Sujay to justify internally. Feedback by EoW Friday.`,
        mins: 29, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `OpenText 3-year deal negotiation. Tentative agreement: 3-year term at $240K annually (6% uplift, aggressive best-effort pricing) + 4x export capabilities + tracking features. New platform feature for tracking + managing exports w/ 100K unique entity limit proposed. Shannon (leadership) approval needed; David + Sujay to justify internally. POC for new platform being considered so users like Sujay can test new functionality + get comfortable pre-migration. PO process sequential: contract signing precedes PO issuance (+~1 week). Next: Varun/Julian to share updated contract after call. Simi/Prateek to review w/ David + Sujay Thu/Fri + share feedback by EoW or early next week. Varun to share monthly export reports + assign credits for POC. Julian to send Rajiv (final signer) contact details to Simi. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 1 &middot; 9:00 AM', csm: 'rani', account: `Workday Inc (PM sync)`,
        note: `Product sync w/ Margo Rey (HG PM) + Patrycja Levey (Workday Data Management Engineering). Contract finalizing Thursday (before Fri time-off); user migration to new platform end of next week; new contract kicks off Sep 15. New scoring platform features + AI-assisted model + fit/need/intent transparency.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday-side product/migration sync w/ Patrycja Levey (Data Management Engineering) + Margo Rey (HG PM). Contract call scheduled tomorrow; expected completion by Thursday (before team's Friday time-off) &mdash; allows procurement processing before end of week. Platform migration end of next week; new contract officially kicks off Sept 15. New scoring platform: AI-assisted model building + transparent breakdowns across fit/need/intent + net-new account ID + existing account scoring in CRM. Data enrichment: Patrycja's team uses raw data transformed pre-consumption (accounts + contacts). API access self-serve via key generation. Admin vs standard user roles; Okta integration supported (setup needed for new platform). Next: Rani to sync w/ Elena tomorrow + finalize contract by Thursday + migrate users by end of next week; Patrycja to provide new list of products by EoM (sooner is better) + submit ticket for new-platform access + Okta setup; Margo to demo new scoring option on request. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 1 &middot; 10:00 AM', csm: 'andy', account: `SAS Institute Inc.`,
        note: `AI market sizing session w/ Steven White + Augie Buettner + Max Shaw. Preparing slides for VP Sales meeting tomorrow. AI Navigator + Market Analyzer copilot + AI-attribute filters (agentic-app-builder + API-management + chatbot + gen-AI). Neil back from OOO &mdash; Steven to brief.`,
        mins: 28, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `SAS AI market-sizing exercise. Preparing compelling presentation for VP Sales tomorrow via AI Navigator tool insights. Market Analyzer copilot for refining spend categories + identifying relevant AI development tools markets. Specific AI attributes crucial for filtering: agentic-app-builder + API-management + chatbot + generative AI. Analyzing AI maturity via investment in AI tools + AI product prevalence + company age (identifying leaders + laggards). AI Navigator provides stack ranking of maturity scores &mdash; valuable perspective on AI adoption beyond installed products. Augie to prepare slides for VP Sales tomorrow + send AI + Gen AI Navigator deck to Steven for talking points + relay feedback to product team re inability to apply product filters at market level. Steven to brief Neil upon his return; resync w/ Neil once caught up on investment recommendations. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 1 &middot; 10:30 AM', csm: 'atisha', account: `Palo Alto Networks Inc`,
        note: `Intro w/ Alfredo Corral (new POC) + Erica Yim (new HG Enterprise CS Leader) + Charles Hawkins. Rebuild engagement loop &mdash; comms previously broken due to renewal delays + reprioritization. Bi-weekly 15-min check-ins next 2 months. May 2027 renewal.`,
        mins: 26, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `PANW re-engagement intro. Erica Yim (new HG Enterprise CS Leader) + Alfredo Corral (new PANW POC, involved in original HG purchase) rebuild communication. Previous engagement loop broken due to renewal delays + PANW reprioritization to sales workbench. PANW has blind spot: who internally uses data delivered via S3 bucket + how it's consumed. Alfredo to investigate internally to identify all beneficiaries + specific use cases by initial sync in 2 weeks. Atisha to share key stakeholder list + use cases from prior engagements + reach out to former AM Tyler for past-data-usage insights. Bi-weekly 15-min check-ins scheduled for next 2 months. Alfredo to conduct initial stakeholder outreach within 2 weeks. May 2027 renewal timeline. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 1 &middot; 12:30 PM', csm: 'riley', account: `IBM (Apptio TBMC26)`,
        note: `TBM Conference planning w/ Janie Carothers + Kendall Stadelman + Angel Carvalho (TR Events) + Cole Arutian. Booth logistics + 80-review event target. 200 plushies + 10 Starbucks gift cards + 25 review-generated gift cards. Aptio team registering ASAP for room block.`,
        mins: 20, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `TBM conference (TBMC26) planning for IBM/Aptio. Same location as last year. Review goal: 80 (exceeding prior 60s). Aptio booth: 1 table + 4 chairs + signage + slides (monitor removed) + business cards. Aptio providing: 200 plushies + 10 Starbucks gift cards for reviewers + 25 additional gift cards via review generation. Angel Carvalho (TR Events Mgr) handling business cards + landing page + ensuring contractors wear TR shirts. Next: Aptio team to register for event ASAP for room block; Angel to provide full names + emails for Tara + Becky immediately; Janie to send planning doc as attachment; Angel to confirm last-year review numbers to finalize goal by EoD tomorrow; Kendall to provide Aptio zone setup rendering. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 1 &middot; 1:00 PM', csm: 'rani', account: `CloudFlare Inc`,
        note: `TR Recurring w/ Andy Mitschke + Cole Arutian + Mardigan Moffat. Cloudflare priority pivot to SASE + Developer Platform + AI Gateway (less established competition, larger opportunity). Website + TR content updates + AI Q&A prompts. Gartner already at event &mdash; TR to filter high-quality reviews.`,
        mins: 25, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Cloudflare TR recurring &mdash; strategic priority shift. Cloudflare pivoting business priority toward newer areas: SASE + Developer Platform + AI Gateway (less established competition, larger opportunities). Need to update GTM strategy + website content to reflect new priorities + better engage enterprise audience. Testing report outputs for select business areas + updating on-page copy + Q&As focusing on AI capabilities. Gartner already collecting reviews at upcoming event &mdash; Cloudflare reconsidering their own event review efforts; TR to serve as filter for high-quality reviews for Gartner Pure Insights. Andy to (i) ask Janelle re Gartner review-collection observation opportunity, (ii) discuss testing report outputs w/ events team (pending budget), (iii) reach out to TR for questionnaire on product differentiation, (iv) update on-page copy + Q&As focused on AI capabilities by end of week. Cole to email questionnaire + help w/ product listing updates. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 1 &middot; 2:00 PM', csm: 'pam', account: `Microsoft`,
        note: `August newsletter finalization w/ Colleen Nelson (SWIFT Group / Microsoft). Black Hat (55 reviews) + RSA event KPIs. Tech Cares + Buyer&rsquo;s Choice + Top Rated awards. Media kits + review-graphics templates + recurring Teams cadence being set up.`,
        mins: 22, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Microsoft August newsletter finalization. Event KPIs to include attendance + review collection goals: Black Hat = 55 reviews; RSA + Ignite specifics being confirmed. Distinction needed between "subscribed products" vs products included as favor for newsletter accuracy. Award updates for current fiscal year: Tech Cares (July/August) + Buyer's Choice + Top Rated. Product listing updates: Copilot + Purview Data Loss Prevention placement decisions. Bonus item to move down + label. Pam to send: template for review graphics + Tech Cares media kit info + updated Top Rated links + Buyer's Choice info + all media kits ASAP. Colleen to clean up formatting + start on newsletter content using provided materials + pull review quotes using template. Recurring Teams meetings being set up. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 1 &middot; 2:00 PM', csm: 'rani', account: `Docusign, Inc.`,
        note: `Data utilization sync w/ Anuj Jain + Ziad Amira. 50K account project scope seen as insufficient. Team resource constraints. Territory balancing + ICP profiling use cases to explore w/ Katie Bueller. January renewal urgency.`,
        mins: 33, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Docusign data utilization discussion. Current 50K accounts project scope seen as insufficient by some teams &mdash; hindering adoption + value demonstration. Anuj's team faces resource constraints due to personnel changes + high workload &mdash; impacting strategic initiatives like expanding data usage. Need to move beyond initial POC to identify diverse use cases aligned w/ business goals. January renewal creates urgency to solidify value proposition. Katie Bueller engagement needs refinement &mdash; focus on specific needs like install data (vs solely ICP). Next: Ziad to share use cases via email w/ Anuj. Anuj to facilitate intro between Ziad + Ashish for territory-balancing discussions. Anuj + Ziad to identify use cases + stakeholders + schedule follow-up w/ Katie focused on install data + territory planning. Rani + Ziad to discuss territory planning + TAM/SAM analysis w/ Anuj. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },
    ],
    pulses: [
      { csm: 'varun', account: `Autodesk Inc`, health: 'Healthy',
        note: `Data Feed Migration &mdash; install data clean; spend data null-product-ID pipeline rebuild w/ correct unique keys (CRM ID + Company/Product ID). GZ format preferred.` },
      { csm: 'riley', account: `BMC Software Inc`, health: 'Concerning',
        note: `TR Product Feedback &mdash; BMC dissatisfied. No review-managed service. SEO gap. HG acquisition perceived trust drop. Considering G2 + SourceForge + PeerSpot. Renewal at risk.` },
      { csm: 'atisha', account: `Equinix, Inc.`, health: 'Healthy',
        note: `Target-list refinement &mdash; focus on direct competitors (colocation + data center outsourcing) vs adjacent. Cloud Dynamics identified as more promising competitive-intelligence data source.` },
      { csm: 'rani', account: `Workday Inc (redline feedback)`, health: 'Healthy',
        note: `Redline feedback &mdash; proposed 3-year deal w/ front-loaded credits year 1 (15M vs 11.4M baseline) + rollover flexibility. Elaina to regroup internally; Docusign target by Friday.` },
      { csm: 'rani', account: `Lenovo Group Ltd.`, health: 'Healthy',
        note: `Teams Meeting &mdash; news data feed structure + roadmap. Long-term partnership (>3 years). News categories: M&A + financial + legal + gov benefits + market entries + exec moves.` },
      { csm: 'nick', account: `Lenovo Group Ltd. (co-attend)`, health: 'Healthy',
        note: `Nick co-attended Lenovo partnership Teams meeting. Same content &mdash; news data structure + Q4+ roadmap + quarterly review cadence.` },
      { csm: 'varun', account: `Open Text Corporation`, health: 'Healthy',
        note: `Renewal Scoping &mdash; TENTATIVE 3-year deal at $240K annual (6% uplift) + 4x export capabilities + new-platform POC. Shannon approval needed. Feedback by EoW Friday.` },
      { csm: 'rani', account: `Workday Inc (PM sync)`, health: 'Healthy',
        note: `Product sync w/ Margo Rey (HG PM) + Patrycja Levey (Workday DME). Contract finalizing Thursday. User migration end of next week; new contract kicks off Sept 15.` },
      { csm: 'andy', account: `SAS Institute Inc.`, health: 'Healthy',
        note: `AI market sizing prep for VP Sales meeting tomorrow. AI Navigator + Market Analyzer copilot + AI-attribute filters. Neil back from OOO &mdash; Steven to brief on findings.` },
      { csm: 'atisha', account: `Palo Alto Networks Inc`, health: 'Healthy',
        note: `Intro w/ Alfredo Corral (new POC) + Erica Yim (new HG Enterprise CS Leader). Rebuild engagement loop. Bi-weekly 15-min check-ins next 2 months. May 2027 renewal.` },
      { csm: 'riley', account: `IBM (Apptio TBMC26)`, health: 'Healthy',
        note: `TBM Conference planning &mdash; 80-review event target. 200 plushies + 10 Starbucks gift cards + 25 review-generated cards. Aptio team registering ASAP for room block.` },
      { csm: 'rani', account: `CloudFlare Inc`, health: 'Healthy',
        note: `TR Recurring &mdash; priority pivot to SASE + Developer Platform + AI Gateway. Website + TR content updates + AI Q&As. Gartner at event &mdash; TR filters for high-quality reviews.` },
      { csm: 'pam', account: `Microsoft`, health: 'Healthy',
        note: `August newsletter finalization &mdash; Black Hat 55 reviews + RSA KPIs. Tech Cares + Buyer&rsquo;s Choice + Top Rated awards. Media kits + review-graphics templates.` },
      { csm: 'rani', account: `Docusign, Inc.`, health: 'Healthy',
        note: `Data utilization discussion. 50K account scope insufficient. Territory balancing + ICP profiling use cases w/ Katie Bueller. January renewal urgency.` },
    ],
  };
}

function dayMeta_2026_09_01() {
  return {
    pills: [
      ['dot-teal',   '14 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '5 Expansion'],
      ['dot-green',  '14 Vitally Pulses'],
      ['dot-grey',   'Tue Sep 1 &middot; 81 scanned'],
    ],
    tabs: ['Monthly', 'Overview', 'Calls (14)', 'Pulses (14)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_01() {
  return `<div class="section-label">Team Activity &mdash; Tuesday September 1, 2026 (First workday of September)</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Sep 1 &mdash; 81 recordings scanned</strong> via SFDC SOQL &middot; <strong>14 confirmed calls</strong> (13 unique + 1 co-attend) across 7 CSMs &middot; 1 concerning &middot; 5 expansion signals &middot; SFDC confirmed 9; Weflow fallback added 4 unique recoveries
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> BMC Software Product Feedback (Riley) &mdash; BMC dissatisfied w/ TR: no review-managed service, SEO gap vs competitors, HG acquisition perceived trust drop, inconsistent review rejection rates. BMC considering G2 + SourceForge + PeerSpot. Michael Garside (BMC) now Blocker; Leslie (BMC VP) also negative. Renewal at risk.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Workday redline (3-year deal + front-load credits 15M vs 11.4M baseline + rollover flex) &middot; Workday PM sync (new platform migration + Sept 15 kickoff + AI-assisted scoring) &middot; OpenText (TENTATIVE 3-year $240K annual + 4x export + POC) &middot; Cloudflare (SASE + Developer Platform + AI Gateway priority pivot + TR content updates) &middot; SAS Institute (AI Navigator VP Sales prep)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F5D3;&#xFE0F; <strong>First workday of September:</strong> August 2026 monthly summary available in the Monthly tab.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="rani">
      <span class="call-badge">5 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">RG</div>
        <div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">5</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">5</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">174m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday redline (&#x1F4C8; 3yr + front-load credits) &middot; Lenovo Teams (news + roadmap) &middot; Workday PM (&#x1F4C8; migration Sept 15) &middot; Cloudflare (&#x1F4C8; SASE + AI Gateway pivot) &middot; Docusign (data utilization + Jan renewal)</div>
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
        <div><div class="metric-num m-grey">52m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">BMC (&#x1F534; TR dissatisfaction &mdash; considering G2/SourceForge/PeerSpot) &middot; IBM Apptio TBMC26 (conference planning + 80-review target)</div>
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
        <div><div class="metric-num m-grey">50m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Equinix (target-list refinement + Cloud Dynamics for competitive intel) &middot; PANW (Alfredo new POC + Erica Yim new CS Leader + bi-weekly check-ins)</div>
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
        <div><div class="metric-num m-grey">40m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Autodesk (data pipeline unique-keys cleanup) &middot; OpenText (&#x1F4C8; tentative 3yr $240K annual + 4x export)</div>
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
        <div><div class="metric-num m-grey">22m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Microsoft (August newsletter finalization + event KPIs + Tech Cares/Buyer&rsquo;s Choice/Top Rated awards)</div>
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
        <div><div class="metric-num m-grey">55m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo Teams co-attend (news data feed + long-term partnership &gt;3 years)</div>
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
        <div><div class="metric-num m-grey">28m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAS Institute (&#x1F4C8; AI Navigator + Market Analyzer prep for VP Sales meeting)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. SFDC transcripts contained no Divyam speaker label; Weflow participants did not surface Divyam on any Sept 1 recording.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_01() {
  return `<div class="section-label">Confirmed Calls &mdash; Tuesday September 1, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> BMC Software Product Feedback &mdash; BMC dissatisfied w/ TR (Michael Garside blocker + Leslie VP negative); considering G2 + SourceForge + PeerSpot; renewal at risk
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Workday redline (3yr + front-load credits) &middot; Workday PM (platform migration Sept 15) &middot; OpenText ($240K 3yr + 4x export) &middot; Cloudflare (SASE/Dev/AI Gateway pivot) &middot; SAS Institute (AI Navigator VP Sales)
  </div>`;
}

function dayPulsesHTML_2026_09_01() {
  const cards = [
    { csm:'varun', health:'Healthy', account:`Autodesk Inc`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Data Feed Migration &mdash; install data confirmed clean (no missing product IDs). Spend data null-product-ID issue &mdash; Tanveer rebuilding pipeline w/ correct unique keys (CRM ID for spend; Company + Product ID for install). GZ format preferred over Parquet.` },
    { csm:'riley', health:'Concerning', account:`BMC Software Inc`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 1 &middot; Concerning`,
      excerpt:`TR Product Feedback &mdash; BMC DISSATISFIED. No review-managed service, poor SEO vs competitors, HG acquisition perceived trust drop, inconsistent review rejection rates. Considering G2 + SourceForge + PeerSpot. Michael Garside now Blocker; Leslie (BMC VP) negative. Renewal at risk.` },
    { csm:'atisha', health:'Healthy', account:`Equinix, Inc.`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Target-list refinement &mdash; narrow focus to direct competitors (colocation + data center outsourcing + interconnection) vs adjacent (CDNs + IaaS). Cloud Dynamics identified as more promising competitive-intelligence data source.` },
    { csm:'rani', health:'Healthy', account:`Workday Inc (redline feedback)`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Contract redline &mdash; proposed 3-year deal w/ front-loaded credits year 1 (15M vs 11.4M baseline + 400K built-in buffer). Rollover exception being explored. Elaina regrouping internally + Docusign target by Friday.` },
    { csm:'rani', health:'Healthy', account:`Lenovo Group Ltd.`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Teams Meeting &mdash; news data feed structure + roadmap partnership discussion. Long-term commitment envisioned >3 years. News categories: M&A + financial + legal + gov benefits + market entries + exec moves. Anuradha to send mock data structure by EoW.` },
    { csm:'nick', health:'Healthy', account:`Lenovo Group Ltd. (co-attend)`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Nick co-attended Lenovo partnership Teams meeting. Same content &mdash; news data structure + Q4+ roadmap alignment + quarterly review cadence.` },
    { csm:'varun', health:'Healthy', account:`Open Text Corporation`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Renewal Scoping &mdash; TENTATIVE 3-year deal at $240K annual (6% uplift) + 4x export capabilities + tracking features (100K unique entity limit) + new-platform POC. Shannon (leadership) approval needed. Feedback by EoW Friday.` },
    { csm:'rani', health:'Healthy', account:`Workday Inc (PM sync)`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Product sync w/ Margo Rey (HG PM) + Patrycja Levey (Workday Data Management Engineering). Contract call scheduled tomorrow; completion by Thursday. User migration end of next week; new contract kicks off Sept 15. AI-assisted scoring + fit/need/intent breakdowns.` },
    { csm:'andy', health:'Healthy', account:`SAS Institute Inc.`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 1 &middot; Healthy`,
      excerpt:`AI market sizing prep for VP Sales meeting tomorrow. AI Navigator + Market Analyzer copilot + AI-attribute filters (agentic-app-builder + API-management + chatbot + gen-AI). Neil back from OOO &mdash; Steven to brief on findings.` },
    { csm:'atisha', health:'Healthy', account:`Palo Alto Networks Inc`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Intro w/ Alfredo Corral (new POC) + Erica Yim (new HG Enterprise CS Leader). Rebuild engagement loop &mdash; previously broken due to renewal delays + sales-workbench reprioritization. Bi-weekly 15-min check-ins next 2 months. May 2027 renewal.` },
    { csm:'riley', health:'Healthy', account:`IBM (Apptio TBMC26)`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 1 &middot; Healthy`,
      excerpt:`TBM Conference planning &mdash; 80-review event target. 200 plushies + 10 Starbucks gift cards + 25 review-generated cards. Aptio team registering ASAP for room block. Angel Carvalho handling business cards + landing page.` },
    { csm:'rani', health:'Healthy', account:`CloudFlare Inc`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 1 &middot; Healthy`,
      excerpt:`TR Recurring &mdash; Cloudflare priority pivot to SASE + Developer Platform + AI Gateway (less established competition, larger opportunities). GTM + website content updates + AI Q&As. Gartner at event &mdash; TR filters for high-quality reviews for Pure Insights.` },
    { csm:'pam', health:'Healthy', account:`Microsoft`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 1 &middot; Healthy`,
      excerpt:`August newsletter finalization &mdash; Black Hat 55 reviews + RSA + Ignite KPIs. Tech Cares + Buyer&rsquo;s Choice + Top Rated award updates. Media kits + review-graphics templates. Recurring Teams cadence being set up.` },
    { csm:'rani', health:'Healthy', account:`Docusign, Inc.`, opp:`Vitally Pulse &mdash; Sep 1 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 1 &middot; Healthy`,
      excerpt:`Data utilization discussion &mdash; 50K account project scope seen as insufficient. Anuj's team resource-constrained. Territory balancing + ICP profiling use cases w/ Katie Bueller. January renewal urgency.` },
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
        <div class="action-title">&#x1F534; BMC &mdash; regain trust before renewal + demonstrate plan vs G2/SourceForge/PeerSpot</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers + Todd Detmold + Augie Buettner &middot; TR team to schedule follow-up call to walk through TR offerings + address specific competitor comparison points. Demonstrate plan to regain BMC trust: improve product offerings, address service gaps (review-managed service, SEO, review rejection consistency). Provide more value at current price point OR reduce cost to be competitive vs G2/SourceForge/PeerSpot. Michael Garside blocker + Leslie (BMC VP) negative; renewal at risk.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-2')?'done':''}" data-csm="rani" id="action-0901-2">
      <div class="action-checkbox ${doneActions.has('0901-2')?'checked':''}" onclick="toggleAction('0901-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Workday &mdash; finalize 3-year deal + Docusign by Friday + Sept 15 platform kickoff</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Leo Zunz + Elaina Wasmus + Margo Rey &middot; Rani to (a) send updated response from other form, (b) discuss w/ ops committee re rollover exception across years, (c) sync w/ Elena tomorrow, (d) finalize contract by Thursday, (e) migrate users by end of next week. Elaina to regroup w/ team on 3-year interest + provide final negotiations + T&Cs + dollar amounts + Docusign before Friday. New contract officially kicks off Sept 15.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-3')?'done':''}" data-csm="varun" id="action-0901-3">
      <div class="action-checkbox ${doneActions.has('0901-3')?'checked':''}" onclick="toggleAction('0901-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; OpenText &mdash; 3-year $240K deal + Shannon approval + POC provisioning</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Julian Rojas + Leo Zunz &middot; Share updated contract after call. Simi/Prateek to review w/ David + Sujay Thu/Fri + share feedback by EoW Friday or early next week. Varun to share monthly export reports + assign credits for POC on new platform for Sujay. Julian to send Rajiv (final signer) contact details to Simi. Prateek to connect w/ Rajiv + David before Friday + schedule call w/ Sujay + David for early next week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-4')?'done':''}" data-csm="rani" id="action-0901-4">
      <div class="action-checkbox ${doneActions.has('0901-4')?'checked':''}" onclick="toggleAction('0901-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cloudflare &mdash; SASE/Developer Platform/AI Gateway content updates by end of week</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Andy Mitschke + Cole Arutian &middot; Andy to (a) ask Janelle re Gartner review-collection observation opportunity, (b) discuss testing report outputs w/ events team pending budget, (c) reach out to TR for questionnaire on product differentiation for custom review questions, (d) begin updates within TR platform to on-page copy + Q&As focusing on AI capabilities by end of week. Cole to email Andy the questionnaire + help w/ product-listing + messaging + question updates.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-5')?'done':''}" data-csm="rani" id="action-0901-5">
      <div class="action-checkbox ${doneActions.has('0901-5')?'checked':''}" onclick="toggleAction('0901-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Lenovo &mdash; news data feed structure + Q4+ roadmap + quarterly reviews</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Nick Johnson + Adrian Escobar + James Tudway &middot; Anuradha to send mock data structure + categories of news to HGI by EoW + provide tentative timelines. HGI team to define plans for roadmap items beyond Q4 + provide recency/timestamp info for data fields + weekly/EoW stock price data + clarify quarterly filings extracts + schedule quarterly reviews. Lenovo team to prioritize news categories + identify gaps vs other providers.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-6')?'done':''}" data-csm="atisha" id="action-0901-6">
      <div class="action-checkbox ${doneActions.has('0901-6')?'checked':''}" onclick="toggleAction('0901-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; PANW &mdash; rebuild engagement loop + bi-weekly cadence + prep for May 2027 renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela + Erica Yim + Alfredo Corral &middot; Alfredo to investigate internally to identify all HG-data beneficiaries + specific use cases by initial sync in 2 weeks. Atisha to share key stakeholder list + use cases from prior engagements + reach out to former AM Tyler for past-data-usage insights. Bi-weekly 15-min check-ins for next 2 months.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0901-7')?'done':''}" data-csm="andy" id="action-0901-7">
      <div class="action-checkbox ${doneActions.has('0901-7')?'checked':''}" onclick="toggleAction('0901-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; SAS Institute &mdash; VP Sales meeting tomorrow + AI Navigator investment recommendations</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim + Steven White + Augie Buettner + Max Shaw &middot; Augie to prepare slides w/ data for VP Sales meeting tomorrow + send AI + Gen AI Navigator deck to Steven for additional talking points + relay feedback to product team re inability to apply product filters at market level in new Market Analyzer. Steven to brief Neil upon his return; resync w/ Neil once caught up on investment recommendations.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Wednesday September 2, 2026
// ============================================================

function dayData_2026_09_02() {
  return {
    calls: [
      { ts: 'Sep 2 &middot; 5:30 AM', csm: 'atisha', account: `Insight Direct USA Ltd`,
        note: `AI Sales Coach + Marketing Assistant quick sync w/ Stephan Kuiper + Augie Buettner. Cloud consumption data integration w/ install data. "Resolved thing" clarified as v2 (not RJF). Follow-up needed w/ Bogdan on specific use case.`,
        mins: 7, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Insight Direct sync. Cloud consumption data being combined w/ install data by Stephen. Prior confusion about "resolved thing" resolved &mdash; confirmed on v2, not RJF as initially thought. Atisha to reach out to Bogdan to set up call to understand use case + build relationship today. Augie to work w/ attendees to reschedule missed meeting due to conflicting availability. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 6:00 AM', csm: 'atisha', account: `Deloitte`,
        note: `Weekly syncup w/ Rakesh Reddy + Angus Hyams + Augie Buettner + Omkar Hunuswadkar. Product catalog expanded from current installs to entire catalog. Data IQ license expiring soon &mdash; expedite data delivery. Continuous product-list refinement via Claude feedback.`,
        mins: 23, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Deloitte India Global GTM Strategy Team weekly. Product catalog expanded from current-installs focus to entire catalog based on user feedback. "Sketchbook" inclusion explained via AI rationalization for industrial use. Continuous refinement of product list + prompts for relevance/accuracy. Data IQ license expiry impending &mdash; urgency for current data drop. Both full universe + filtered list to be provided. Next: Omkar to provide updated data feed w/ new accounts by EoD + send mapping file w/ GHQ redirect explanations by EoD. Atisha to share Sketchbook classification feedback w/ Claude for refinement + refine product list for future deliveries. Rakesh + Rajesh to review provided data sets. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 6:30 AM', csm: 'varun', account: `DXC Technology Services`,
        note: `HGI Renewal + AQS connector integration session (91 min) w/ Preethi Vaidyanathan + Antoine Voiry + Jorge Pimentel + Augie Buettner + Mike Galyen. Client Lens + AQS integration exploration + MCP AI credits + Quick integration + Nov renewal timeframe.`,
        mins: 91, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `DXC deep-dive on HG Insights data integration w/ Client Lens + AQS. Current process is manual (Excel export + manual ingestion) &mdash; not architecturally sound. HG MCP offers advanced consumption via AI credits &mdash; direct insights (account briefs, sales plays) vs current platform access. Direct integration w/ Quick as potential end goal &mdash; different pricing model based on AI credit consumption for specific queries/outputs vs raw data access. AI credit model focuses on paying for answers + insights (efficient vs processing raw data). HG proprietary + public data = "secret sauce" for actionable insights. Next: Augie + Preethi to schedule technical deep-dive tomorrow or early next week; Augie to send recap of data refresh schedule; Mike to show Quick pricing model diff vs current contract + explore credit allocation per user w/ Jorge + show credit consumption examples + demo Quick plugin + provide verified contact data if resolution enabled. All: iron out MCP integration details before November renewal. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 7:00 AM', csm: 'riley', account: `SAP Inc (BTP)`,
        note: `TR Monthly w/ Chris Grundy + Cole Arutian + Mardigan Moffat. SAP Dual Studio launching end of September &mdash; will supersede existing build solutions. Recent SAP org changes: teams merged into larger Business AI Platform (BAIP) marketing org. BTP already qualified for Buyer&rsquo;s Choice.`,
        mins: 8, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short SAP BTP TR monthly. SAP Dual Studio launching end of September &mdash; eventual replacement for existing build solutions. Recent SAP org changes: multiple teams merged into larger Business AI Platform (BAIP) marketing organization &mdash; more coordinated messaging. Early-access programs for Dual Studio running &mdash; hopes for customer reviews from participants. SAP BTP already qualified for Buyer&rsquo;s Choice award. Efforts underway for next year's Top Rated. Next: SAP team to identify customers for Dual Studio reviews (by mid-November) + start pursuing reviews once launched end of September. Riley + Chris to schedule follow-up late September / early October + continue conversations on BAIP presence. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 7:30 AM', csm: 'rani', account: `Workday Inc`,
        note: `SOW discussion w/ Elaina Wasmus + Kraig Kraning + Leo Zunz. Additional 400K credits at no additional cost as partnership incentive tied to multi-year commitment. 3-year deal (3% cap y2/y3 vs 5% annual on 1yr) + 50% rollover of unused credits addressing finance concerns.`,
        mins: 34, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Workday SOW discussion. Justification for additional 400K credits: partnership incentive at no additional cost tied to multi-year commitment (flexibility to evaluate credit usage). 3-year commitment offers significant savings vs 1-year (5% annual): 3% capped increase years 2/3 + rollover of unused credits. Blended cost per credit based on consumption tiers (not flat rate) &mdash; jumping to 4M credits doesn't auto-yield expected cost due to tiered pricing steps. Workday finance requires strong business case + demonstrable value/savings for spending exceeding budgeted amounts. 50% rollover of unused credits addresses finance concerns re unpredictable costs + surprise bills. Rani + Kraig to provide previous year contract numbers for comparison ASAP + firm up + send exact multi-year pricing ASAP + provide additional assets (discount details) to Elaina. Elaina to discuss w/ internal team + finance before four-day weekend. Rani to schedule follow-up call tomorrow. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 2 &middot; 7:30 AM', csm: 'pam', account: `Epicor Software Corporation`,
        note: `TR Monthly w/ Rachel Abasi + Sam Malecek + Anderson Duncan. Event planning Sept 25-28 (potential Sept 24 Propello boot camp) &mdash; review generation strategy for Propello + Biztrack. Welcome party Fri Sept 25 4-5:30 PM = review-collection opportunity. Angel Carvalho managing onsite.`,
        mins: 21, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Epicor TR monthly. Event dates confirmed Sept 25-28 + potential Sept 24 focus for Propello boot camp (prime niche audience for review collection). Angel Carvalho manages onsite events team + coordinating logistics. Team bringing laptops + iPads + signage + QR-coded business cards (requires designated table space). Welcome party Fri Sept 25 4-5:30 PM = review-collection opportunity. Biztrack review gathering treated as test case for potential partnership + shared booth space. Next: Breanna to confirm event hours + expected Propello customer count + Sally Smith (Events) + Sunny Kennedy (Demand Gen) contact info + attempt to secure 4-seater table + confirm power needs. Pam to send registration link + QR code + team contact info + confirm incentive details ($25 gift card upon processing, $10 on-site). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 8:00 AM', csm: 'rani', account: `Amazon Web Services (AWS)`,
        note: `AWS + TrustRadius introductions w/ Kris Durantet + Mark Fell + Karin Pindle + Cole Arutian + Mardigan Moffat. Potential TR+AWS partnership on account intelligence + ABM &mdash; consolidating tools + enhancing account intelligence layer. TR Quick integration collaboration + one-to-one/one-to-few ABM personalization.`,
        mins: 27, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `AWS + TrustRadius partnership exploration for account intelligence + ABM. AWS focused on ABM + consolidating MarTech stack &mdash; wants unified experience for marketers + reduced tool count. TR offers broad contact data + generating engaged leads through targeted outbound campaigns using gated assets (market reports). AWS uses one-to-one/one-to-few ABM &mdash; requires highly personalized messaging + outreach vs broader scaled approaches. Contact acquisition key challenge for AWS ABM (identifying + engaging contacts in white-space accounts). TR Quick integration = potential collaboration avenue (currently seller-centric but adaptable for ABM). Next: Kris to reach out to internal stakeholders re how insights integrate into account intelligence layer + send TR materials for internal conversations + understand TR competitive differentiation vs ZoomInfo + 6sense. Mark to include Greg Schwartz + Diego for HG + Quick integration discussions in follow-on email + collaborate w/ AWS on Quick integration. Mardigan/Kris to schedule follow-up w/ AWS IDP/IDC teams re scaled marketing + contact acquisition. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 8:30 AM', csm: 'varun', account: `Five9 Inc`,
        note: `Trial-access grant + demo w/ Jordan Curtis + Ziad Amira + Brett Castonguay. New platform: better UI + AI-assisted outbound scoring + Market Analyzer w/ TAM/SAM/SOM. Jordan on PTO exploring during time-off; deep-dive w/ Varun 2-3 weeks after return.`,
        mins: 26, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Five9 new-platform trial demo. Enhanced UI + functionality vs current platform. Market Intelligence tool: direct TAM/SAM/SOM definition + interactive AI support + advanced filtering. AI-assisted outbound scoring more sophisticated than current quick-start account scoring. Admin capabilities: manage access + track usage + control credits (reduces dependency on external support). Potential cost savings for Five9 via advanced product roadmaps + better integration possibilities. Jordan to explore during PTO + upon return + reach out to partner marketing team for project details by Thursday + upload account list for analysis (optional) + explore Market Sizing + Market Analyzer modules + investigate use cases + discuss pricing/purchase w/ team post-exploration. Varun to schedule deep-dive within 2-3 weeks of Jordan's return + monitor for product-team requests during PTO + extend trial period if needed. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 10:00 AM', csm: 'divyam', account: `Informatica (SFDC-driven)`,
        note: `Weekly Partnership Sync w/ Ziad Amira + Alexi Mouarkach + Hemraj Singh. Data feed delivered w/ new company_group_id column for install credits tracking (starting Dec 1). ROI matrix revisit &mdash; quantify AOV + win-rate for HG vs non-HG accounts. Teams + Slack delivery methods launching.`,
        mins: 8, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Informatica-SFDC partnership weekly. Data feed delivered (originally scheduled today, slight delay). Includes new company_group_id column for tracking install credits &mdash; necessitated by shift to credit-consumption model. New column implementation starts Dec 1; next feed after that date. ROI matrix revisit needed to quantify subscription value: how high-scoring accounts perform on AOV + win rate for HG vs non-HG accounts (referenced April 14 account distribution analysis by ICP band). HG introducing new delivery methods: Microsoft Teams + Slack integrations for human-language querying (account summaries + sales call prep). Zelmasry team to make arrangements for new column by Dec 1 + investigate ROI matrix re-eval + consider attending "Edging Cider" session Nov 8 or register for recording. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 10:00 AM', csm: 'riley', account: `Adobe Systems Incorporated`,
        note: `TR Success Call w/ Allison + Giacomo Pesaresi + Cole Arutian + Mardigan Moffat. Buyer&rsquo;s Choice extended Oct 16 (several products qualified). Commerce (11 reviews), Frame.io (8), Real-Time CDP (5). New Precision Demand Leads program leveraging AI + specific account data.`,
        mins: 20, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Adobe TR success call. Buyer&rsquo;s Choice deadline extended to Oct 16 &mdash; several products already qualified. Current review counts: Commerce (11) + Frame.io (8) + Real-Time CDP (5). New Precision Demand Leads program leveraging AI + specific account data for high-quality leads. Need to understand cost-effectiveness + conversion rates of additional review programs vs existing strategies (events). Product renewals underway: potentially consolidating/upgrading Brand Visibility coverage for FY27. Next: Giacomo + Allison to schedule market-reports review early next week. Allison to (a) connect w/ Giacomo async re market reports + review program details, (b) explore renewal options for 12/1 renewal by next week, (c) schedule sync w/ Mardigan later next week, (d) connect w/ Erica re Precision Demand Leads program post-renewal, (e) ask sales-ops liaison team about internal AI tools for sellers tomorrow. Riley to reschedule Angel meeting to tomorrow 10 AM EST + send Allison typical-questions doc pre-meeting. Cole to create Firefly example brief for Allison. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 2 &middot; 10:30 AM', csm: 'pam', account: `F5`,
        note: `F5 TrustRadius bi-weekly with Sherry Arnold + Mardigan Moffat. Renewal positive: Pascal considering 2-year option w/ better value + discounts. Hgeo customer voice platform + geo crawlers + AI section. "Big IP" being explored as new product. AI-review strategy for small AI-product customer bases.`,
        mins: 25, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `F5 TrustRadius bi-weekly. Pascal (client decision maker) very positive re current services + intends to renew + considering adding more products + events. 2-year contract option available w/ payment term similar to current one &mdash; best value + discounts. Hgeo customer voice platform includes standard features + new additions: geo crawlers + AI section to enhance LLM interactions. New reports hostable on trustradius.com + crawled by search engines &mdash; aids ranking for geo-specific LLM questions. Need to strategize on review generation for AI products (current customer base small; initial attempts faced challenges). Sherry to (a) follow up on geo item responsibility + schedule meetings, (b) follow up w/ Pascal re renewal + expansion, (c) investigate "Big IP" as product + review potential, (d) reach out to Pascal re TrustRadius presentation for her budget meeting, (e) develop AI-customer review strategy (campaigns/events). Pam to (i) ensure Pascal receives updated pricing + contract options, (ii) correct one-year slide indicating "one" not "two", (iii) coordinate w/ Sherry to process renewal paperwork, (iv) explore adding "Big IP" as product, (v) work w/ Sherry to create distributed-cloud sessions slide encouraging reviews at F5 Insiders booth. Mardigan to send Pascal hgeo customer voice platform overview + discuss AI use cases (product feedback from reviews). Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 2 &middot; 12:00 PM', csm: 'atisha', account: `Optiv Security Inc`,
        note: `Weekly sync w/ Roger Conarroe + Augie Buettner. Data expounding successful (incl. medium-strength signals). New CRL Sean joined (AI-focused strategy) taking over from John Hurley. AI tools discussion &mdash; Microsoft Copilot + internal "ag" tool for sales insights + fastback automation.`,
        mins: 12, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Optiv weekly sync. Data expounding successful including medium-strength signals. Org change: new CRL Sean brings AI-focused strategy (John Hurley stepping down to advisory). AI tools potential for enriching sales insights + automating content creation: Microsoft Copilot + internal "ag" tool for fastbacks. AI integration can significantly reduce sales team time on research + content generation. Considerations: sales reps' data understanding + bandwidth for advanced AI tools. Next: Roger to discuss "ag" + data tools w/ sales rep today + conduct similar reviews w/ other sales reps before next week + provide update on sales-rep conversation + potential HG impact + follow up on AI tool adoption + feedback. Atisha to share link for "edgy insider" MCP + agents integration w/ Slack + Microsoft Copilot session. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'atisha', account: `Insight Direct USA Ltd`, health: 'Healthy',
        note: `AI Sales Coach quick sync &mdash; cloud consumption + install data integration. "Resolved thing" clarified on v2. Bogdan use-case discussion to be set up.` },
      { csm: 'atisha', account: `Deloitte`, health: 'Healthy',
        note: `Weekly &mdash; product catalog expanded to entire catalog. Data IQ license expiry urgency. Continuous product-list refinement via Claude feedback loop.` },
      { csm: 'varun', account: `DXC Technology Services`, health: 'Healthy',
        note: `Deep integration session (91 min) &mdash; Client Lens + AQS + MCP + Quick integration + AI credit consumption model. Nov renewal timeframe.` },
      { csm: 'riley', account: `SAP Inc (BTP)`, health: 'Healthy',
        note: `TR Monthly &mdash; SAP Dual Studio launching end of Sept. SAP teams merged into larger BAIP marketing org. BTP already qualified for Buyer&rsquo;s Choice.` },
      { csm: 'rani', account: `Workday Inc`, health: 'Healthy',
        note: `SOW discussion &mdash; 400K credits at no additional cost partnership incentive. 3-year deal (3% cap y2/y3 vs 5% annual on 1yr) + 50% credit rollover addressing finance concerns.` },
      { csm: 'pam', account: `Epicor Software Corporation`, health: 'Healthy',
        note: `TR Monthly &mdash; event planning Sept 25-28 + Propello boot camp Sept 24. Review generation strategy for Propello + Biztrack. Welcome party Fri Sept 25 = review-collection opportunity.` },
      { csm: 'rani', account: `Amazon Web Services (AWS)`, health: 'Healthy',
        note: `TR intros &mdash; potential partnership on account intelligence + ABM. Consolidating MarTech stack. TR Quick integration collaboration + one-to-one/one-to-few ABM personalization.` },
      { csm: 'varun', account: `Five9 Inc`, health: 'Healthy',
        note: `Trial access + demo &mdash; new platform w/ better UI + AI-assisted outbound scoring + Market Analyzer TAM/SAM/SOM. Jordan exploring during OOO; deep-dive 2-3 weeks post-return.` },
      { csm: 'divyam', account: `Informatica (SFDC-driven)`, health: 'Healthy',
        note: `Partnership sync &mdash; data feed delivered w/ new company_group_id column for credit tracking (Dec 1). ROI matrix revisit for AOV + win-rate quantification. Teams + Slack delivery launching.` },
      { csm: 'riley', account: `Adobe Systems Incorporated`, health: 'Healthy',
        note: `TR Success &mdash; Buyer&rsquo;s Choice extended Oct 16. Commerce (11) + Frame.io (8) + Real-Time CDP (5) reviews. New Precision Demand Leads program leveraging AI.` },
      { csm: 'pam', account: `F5`, health: 'Healthy',
        note: `Bi-weekly &mdash; renewal positive (2-year option preferred). Hgeo customer voice platform + geo crawlers + AI section. "Big IP" being explored as new product. AI-review strategy for small AI-product customer bases.` },
      { csm: 'atisha', account: `Optiv Security Inc`, health: 'Healthy',
        note: `Weekly &mdash; data expounding successful. New CRL Sean AI-focused (from John Hurley). Microsoft Copilot + internal "ag" tool discussion for sales insights + fastback automation.` },
    ],
  };
}

function dayMeta_2026_09_02() {
  return {
    pills: [
      ['dot-teal',   '12 Calls'],
      ['dot-amber',  '5 Expansion'],
      ['dot-green',  '12 Vitally Pulses'],
      ['dot-grey',   'Wed Sep 2 &middot; 101 scanned'],
    ],
    tabs: ['Overview', 'Calls (12)', 'Pulses (12)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_02() {
  return `<div class="section-label">Team Activity &mdash; Wednesday September 2, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Wednesday Sep 2 &mdash; 101 recordings scanned</strong> via SFDC SOQL &middot; <strong>12 confirmed calls</strong> across 6 CSMs &middot; 0 concerning &middot; 5 expansion signals &middot; SFDC confirmed 2 (Workday + F5); Weflow fallback added 10 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Workday (SOW + 400K credits partnership incentive + 3-year cap + 50% rollover) &middot; F5 (renewal + 2-year option + hgeo platform + "Big IP" new product) &middot; AWS (potential TR partnership on account intelligence + ABM + Quick integration) &middot; DXC (integration deep-dive + MCP + Quick + AI credit model + Nov renewal) &middot; Five9 (new platform trial + AI-assisted outbound scoring)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 1 (71% no-transcript):</strong> Sept 2 = 101 recordings, 29 with transcripts, 72 without. SFDC speaker detection confirmed only 2 customer calls (Workday + F5); 10 additional confirmations recovered via Weflow &lsquo;participants&rsquo; fallback.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">3 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">3</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">3</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">42m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Insight Direct (cloud + install integration) &middot; Deloitte weekly (product catalog expansion + Data IQ license urgency) &middot; Optiv (new CRL AI-focused + AI tools for sales)</div>
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
        <div><div class="metric-num m-grey">117m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">DXC (&#x1F4C8; 91-min integration deep-dive + Client Lens + AQS + MCP + Quick + Nov renewal) &middot; Five9 (&#x1F4C8; new platform trial + AI-assisted scoring)</div>
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
        <div><div class="metric-num m-grey">61m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday SOW (&#x1F4C8; 400K credits partnership incentive + 3yr cap + 50% rollover) &middot; AWS (&#x1F4C8; TR partnership on account intel + ABM + Quick integration)</div>
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
        <div><div class="metric-num m-grey">46m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Epicor TR (Sept 25-28 event + Propello + Biztrack review-gen strategy) &middot; F5 (&#x1F4C8; 2-year option + hgeo + "Big IP" new product)</div>
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
        <div><div class="metric-num m-grey">28m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP BTP (Dual Studio launch end of Sept + BAIP org merger) &middot; Adobe (Buyer&rsquo;s Choice Oct 16 + Precision Demand Leads program)</div>
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
        <div><div class="metric-num m-grey">8m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Informatica (SFDC-driven) &mdash; new company_group_id column for credit tracking (Dec 1) + Teams + Slack delivery methods launching</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Nick speaker in SFDC transcripts; no Weflow-participant hits on any Sept 2 recording.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Andy speaker in SFDC transcripts; no Weflow-participant hits on any Sept 2 recording.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_02() {
  return `<div class="section-label">Confirmed Calls &mdash; Wednesday September 2, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Workday SOW (400K credits + 3yr cap + rollover) &middot; F5 (2-year renewal + hgeo + Big IP) &middot; AWS (TR partnership on account intel + ABM) &middot; DXC (91-min integration deep-dive + Nov renewal) &middot; Five9 (new platform trial)
  </div>`;
}

function dayPulsesHTML_2026_09_02() {
  const cards = [
    { csm:'atisha', health:'Healthy', account:`Insight Direct USA Ltd`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 2 &middot; Healthy`,
      excerpt:`AI Sales Coach + Marketing Assistant quick sync &mdash; cloud consumption + install data integration. "Resolved thing" clarified as v2 (not RJF). Atisha to reach out to Bogdan to build relationship + understand use case.` },
    { csm:'atisha', health:'Healthy', account:`Deloitte`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 2 &middot; Healthy`,
      excerpt:`Weekly syncup &mdash; product catalog expanded from current-installs to entire catalog. Data IQ license expiry impending &mdash; expedited data delivery urgency. Continuous product-list refinement via Claude feedback loop.` },
    { csm:'varun', health:'Healthy', account:`DXC Technology Services`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 2 &middot; Healthy`,
      excerpt:`HGI Renewal + AQS connector integration deep-dive (91 min) &mdash; Client Lens + AQS integration exploration + MCP AI credits + Quick integration + AI credit consumption model vs raw data access. Nov renewal timeframe.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (BTP)`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 2 &middot; Healthy`,
      excerpt:`TR Monthly &mdash; SAP Dual Studio launching end of September, will supersede existing build solutions. SAP org changes: teams merged into larger BAIP (Business AI Platform) marketing org. BTP already qualified for Buyer&rsquo;s Choice award.` },
    { csm:'rani', health:'Healthy', account:`Workday Inc`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 2 &middot; Healthy`,
      excerpt:`SOW discussion &mdash; 400K credits at no additional cost as partnership incentive (multi-year commitment). 3-year commitment offers 3% cap y2/y3 vs 5% annual on 1-year + 50% rollover of unused credits addressing finance concerns.` },
    { csm:'pam', health:'Healthy', account:`Epicor Software Corporation`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 2 &middot; Healthy`,
      excerpt:`TR Monthly &mdash; event planning Sept 25-28 + potential Sept 24 Propello boot camp. Review generation strategy for Propello + Biztrack. Welcome party Fri Sept 25 4-5:30 PM = review-collection opportunity. Angel Carvalho managing onsite.` },
    { csm:'rani', health:'Healthy', account:`Amazon Web Services (AWS)`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 2 &middot; Healthy`,
      excerpt:`TR + AWS introductions &mdash; potential partnership on account intelligence + ABM. AWS consolidating MarTech stack. TR Quick integration collaboration + one-to-one/one-to-few ABM personalization. Contact acquisition key challenge for white-space accounts.` },
    { csm:'varun', health:'Healthy', account:`Five9 Inc`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 2 &middot; Healthy`,
      excerpt:`Trial access + demo &mdash; new platform w/ better UI + AI-assisted outbound scoring + Market Analyzer TAM/SAM/SOM. Jordan exploring during OOO; deep-dive w/ Varun 2-3 weeks after return. Potential cost savings via better integration possibilities.` },
    { csm:'divyam', health:'Healthy', account:`Informatica (SFDC-driven)`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 2 &middot; Healthy`,
      excerpt:`Partnership sync &mdash; data feed delivered w/ new company_group_id column for install credits tracking (starting Dec 1). ROI matrix revisit for AOV + win-rate quantification. Teams + Slack delivery methods launching for human-language querying.` },
    { csm:'riley', health:'Healthy', account:`Adobe Systems Incorporated`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 2 &middot; Healthy`,
      excerpt:`TR Success &mdash; Buyer&rsquo;s Choice extended Oct 16. Commerce (11) + Frame.io (8) + Real-Time CDP (5) reviews. New Precision Demand Leads program leveraging AI + specific account data. 12/1 renewal discussion + Brand Visibility consolidation.` },
    { csm:'pam', health:'Healthy', account:`F5`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 2 &middot; Healthy`,
      excerpt:`Bi-weekly &mdash; renewal positive w/ Pascal considering 2-year option (better value + discounts). Hgeo customer voice platform + geo crawlers + AI section for LLM interactions. "Big IP" being explored as new product. AI-review strategy for small AI-product customer bases.` },
    { csm:'atisha', health:'Healthy', account:`Optiv Security Inc`, opp:`Vitally Pulse &mdash; Sep 2 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 2 &middot; Healthy`,
      excerpt:`Weekly sync &mdash; data expounding successful. New CRL Sean joined w/ AI-focused strategy (from John Hurley). Microsoft Copilot + internal "ag" tool discussion for enriching sales insights + fastback automation.` },
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
        <div class="action-title">&#x1F4C8; Workday &mdash; SOW pricing + Docusign before four-day weekend</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Kraig Kraning + Leo Zunz &middot; Provide previous-year contract numbers for comparison ASAP + firm up + send exact multi-year pricing numbers ASAP + provide additional assets (discount details) to Elaina. Elaina to discuss w/ internal team + finance before four-day weekend. Rani to schedule follow-up call tomorrow. 400K credits at no additional cost partnership incentive + 3% cap y2/y3 + 50% rollover.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-2')?'done':''}" data-csm="varun" id="action-0902-2">
      <div class="action-checkbox ${doneActions.has('0902-2')?'checked':''}" onclick="toggleAction('0902-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; DXC &mdash; technical deep-dive + MCP integration decisions before Nov renewal</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Augie Buettner + Mike Galyen + Preethi Vaidyanathan &middot; Schedule tech deep-dive tomorrow or early next week. Augie to send data-refresh schedule recap. Mike to (a) show Quick pricing model diff vs current contract, (b) explore credit allocation per user w/ Jorge, (c) show credit consumption examples (account brief + outreach sequence), (d) demo Quick plugin, (e) provide verified contact data if resolution enabled. Iron out MCP integration details before Nov renewal.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-3')?'done':''}" data-csm="pam" id="action-0902-3">
      <div class="action-checkbox ${doneActions.has('0902-3')?'checked':''}" onclick="toggleAction('0902-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; F5 &mdash; 2-year renewal option + hgeo customer voice + "Big IP" new product</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck + Sherry Arnold + Mardigan Moffat &middot; Pam to ensure Pascal receives updated pricing + contract options + correct one-year slide indicating "one" not "two" + coordinate renewal paperwork + explore adding "Big IP" as product + create distributed-cloud sessions slide for F5 Insiders booth. Sherry to follow up on geo item responsibility + Pascal renewal/expansion + investigate "Big IP" review potential + AI-customer review strategy. Mardigan to send Pascal hgeo overview + discuss AI use cases.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-4')?'done':''}" data-csm="rani" id="action-0902-4">
      <div class="action-checkbox ${doneActions.has('0902-4')?'checked':''}" onclick="toggleAction('0902-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; AWS &mdash; TR partnership follow-up + Quick integration + ABM contact acquisition</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Mark Fell + Mardigan Moffat &middot; Kris to reach out to internal stakeholders re insights integration into account intelligence layer + send TR materials + understand TR competitive differentiation vs ZoomInfo + 6sense. Mark to include Greg Schwartz + Diego for HG + Quick integration discussions + collaborate w/ AWS on Quick integration. Mardigan/Kris to schedule follow-up w/ AWS IDP/IDC teams re scaled marketing + contact acquisition.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-5')?'done':''}" data-csm="varun" id="action-0902-5">
      <div class="action-checkbox ${doneActions.has('0902-5')?'checked':''}" onclick="toggleAction('0902-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Five9 &mdash; new platform trial exploration + deep-dive 2-3 weeks post-Jordan return</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Jordan Curtis &middot; Jordan to explore new platform during PTO + upon return + reach out to partner marketing team for project details by Thursday + upload account list for analysis + explore Market Sizing + Market Analyzer + investigate use cases + discuss pricing/purchase w/ team post-exploration. Varun to schedule deep-dive within 2-3 weeks of Jordan's return + monitor for product-team requests during PTO + extend trial period if needed.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-6')?'done':''}" data-csm="atisha" id="action-0902-6">
      <div class="action-checkbox ${doneActions.has('0902-6')?'checked':''}" onclick="toggleAction('0902-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Deloitte &mdash; expedite data feed before Data IQ license expiry</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela + Omkar Hunuswadkar &middot; Omkar to provide updated data feed w/ new accounts by EoD + send mapping file w/ GHQ redirect explanations by EoD. Atisha to share "Sketchbook" classification feedback w/ Claude for refinement + refine product list for future deliveries. Rakesh + Rajesh to review provided full + filtered data sets. Data Team to resolve issues re accounts linked to different GHQs.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0902-7')?'done':''}" data-csm="pam" id="action-0902-7">
      <div class="action-checkbox ${doneActions.has('0902-7')?'checked':''}" onclick="toggleAction('0902-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Epicor &mdash; event logistics + review-generation setup for Sept 25-28</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck + Breanna Maloney + Anderson Duncan &middot; Breanna to confirm event hours + expected Propello customer count + Sally Smith (Events) + Sunny Kennedy (Demand Gen) contact info + secure 4-seater table w/ power. Pam to send registration link + QR code + team contact info + confirm review-incentive details ($25 gift card upon processing, $10 on-site) + discuss tagging strategy + widget priorities in future meeting.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Thursday September 3, 2026
// ============================================================

function dayData_2026_09_03() {
  return {
    calls: [
      { ts: 'Sep 3 &middot; 5:30 AM', csm: 'atisha', account: `Kyndryl`,
        note: `Louise & HGI Monthly w/ Louis Selvaraj + Augie Buettner. Focus shifted from account-level to business + event performance. LTV platform now primary; Edge insights feeding in. 56M company DB + AI + AI-spend enhancements. Intent data can push to Louis's data feed for digital campaigns.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Kyndryl Louise & HGI monthly. Team's focus shifted from account-level details to business + event performance &mdash; LTV platform now primary destination; Edge insights feed in. Platform updates: expanded to 56M companies + more AI products + refreshed AI spend data. Intent data can be pushed to Louis's data feed for improved digital campaign targeting + ROI. Louis to check if intent signals available in older version this week. Atisha to enable intent from backend if needed + collaborate w/ Louis on intent-data event program experiment. Louis to discuss w/ campaign + event teams re platform usage next week. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 7:00 AM', csm: 'riley', account: `Adobe Systems Incorporated`,
        note: `Adobe MAX + TR Sync (short 14m). Event prep + Buyer&rsquo;s Choice Oct 16 deadline extension + Precision Demand Leads program discussion.`,
        mins: 14, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Adobe MAX + TR sync. Riley confirmed as SFDC transcript speaker. Content focused on Adobe MAX event coordination + Buyer&rsquo;s Choice deadline extended to Oct 16 (from earlier deadline; more time for reviews) + Precision Demand Leads program leveraging enhanced data (technographic + spend + competitor installs) for high-potential account identification. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 3 &middot; 7:00 AM', csm: 'atisha', account: `Insight Direct USA (Shahbaz Bi-weekly)`,
        note: `Bi-weekly w/ Shahbaz Shah + JohnAlvin Baylon + Augie Buettner. HG data expanded to 56M companies (target 100M by year-end). New AI sales copilot w/ agents building account briefs + MCP integration w/ Microsoft Copilot + Claude. 360-plan strategic implementation guide for ABM + SDR + sales demoed.`,
        mins: 32, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Insight Direct bi-weekly. HG company database expanded to 56M (target 100M by EOY) via data-vendor partnerships + internal scaling; APAC focus driving substantial niche-market growth. New AI capabilities: sales copilot w/ agents building account briefs + MCP integration w/ Microsoft Copilot + Claude. 360-plan strategic implementation guide for ABM + SDR + sales demoed integrating marketing campaigns + sales insights. UI feedback: product search + data export options + recently-added products display. Atisha to (a) check breakdown of new accounts by sector + location, (b) check SMB spend data timeline (10-50M revenue bracket), (c) share user feedback re product collection improvements + "new products added" filter, (d) explore excluding firmographics on data export, (e) discuss w/ BCG + Cooper re Azure Radar to GGBI mapping, (f) explore MCP account briefs as Claude/Copilot plugin, (g) discuss integrating HGI into RSM's Copilot, (h) present MCP capabilities to J + Meldin. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 7:30 AM', csm: 'rani', account: `Workday Inc (SOW continued)`,
        note: `Short 9-min follow-up on Workday SOW discussion from Sept 2. Multi-year credit deal terms + 3-year cap + 50% rollover discussion continued.`,
        mins: 9, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Short Workday SOW continuation from prior day. Multi-year credit deal terms + 3-year cap (3% y2/y3 vs 5% annual on 1yr) + 50% credit rollover of unused credits. Discussion continued from Sept 2 SOW review; brief touchpoint before more detailed follow-up. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 3 &middot; 7:30 AM', csm: 'riley', account: `Mailchimp`,
        note: `Bi-Weekly Success call &mdash; short 7m touchpoint. Confirmed via SFDC transcript speaker detection.`,
        mins: 7, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Mailchimp TR bi-weekly success call. Riley confirmed via SFDC transcript speaker detection. Brief touchpoint &mdash; no significant new topics or action items surfaced in the short exchange.`, source: 'sfdc' },

      { ts: 'Sep 3 &middot; 8:30 AM', csm: 'rani', account: `Hitachi Vantara (Clay API)`,
        note: `Clay API disruption escalation w/ Adrian Escobar + Satish Grandhi + Miguel + Umar Farooq Adam. Data enrichment services disrupted due to Clay partnership + API change &mdash; impacting Hitachi campaigns. Bridge access needed through Oct 22.`,
        mins: 37, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `Hitachi Vantara Clay API disruption escalation. Primary issue: data enrichment services disrupted due to changed Clay partnership + API. IMPACTING Hitachi campaigns. Hitachi has existing Clay credits that need to be used before expiry &mdash; adding complexity. Original contract provided API access as partnership benefit, but that changed. Exploring options: direct credit purchase from Hitachi at lower cost + leveraging existing contracts. Need to secure data access through Oct 22 while long-term solutions determined. Adrian + Rani to work w/ ops committee on API access approval through Oct 22 by tomorrow. Follow-up meeting scheduled next Wed 11 AM EST w/ Rebecca Klein + Umar to discuss capabilities + long-term solutions + budgeting. Satish to provide info on available API data sets not available through native Clay actions immediately. Rani to send Umar API data-sets info. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 8:30 AM', csm: 'divyam', account: `Lumen Technologies`,
        note: `Weekly sync w/ Nathan Der + Julie Chalk + Max Shaw + Julian Rojas. Login troubleshooting (proof-point verification stuck &mdash; likely browser). AT&T product export (4 products) via DP + US filter. Contact-data demo + Feb evaluation prep.`,
        mins: 31, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Lumen weekly sync. Users experiencing login difficulties (stuck on proof-point verification step &mdash; potential browser/system-side issues). Clarified filtering: 'US' geography filter for companies w/ global HQ in US vs companies w/ US presence. Explained DP (Domestic Parent) vs CP (Corporate Parent) vs GHQ (Global Headquarters) &mdash; DP highest entity in country holding decision-makers. AT&T product export: 4 products of interest, filter by 'DP' + 'US' to capture decision-makers under subsidiary. Nathan's export encountering 'failed to submit' error &mdash; Divyam suggested browser settings (try Chrome or clear cookies). Next: Divyam to troubleshoot Nathan's export via saving current view as segment + confirm w/ team on read-only user type + provide updated Sept product install file + demo contact data + waterfall enrichment + relevant departments/job functions next week. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 9:00 AM', csm: 'atisha', account: `RSM US`,
        note: `Weekly Sync w/ Kristin Lewis + Ben Vollmer + Francis Brero + Chlo&eacute; Portier + L&eacute;opold Baudry. AI tools pricing pivot to credit-based model (from tech packages) for flexibility + scale. Target close by end-of-month for quarter-end forecasting.`,
        mins: 12, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `RSM AI tools pricing pivot. Decision: move away from specific tech packages toward credit-based model for greater flexibility + scalability. Credit model expected to accelerate usage + potentially reduce costs by eliminating per-seat licenses. Need proper governance for credit management. Target: close deal by end of month (quarter-end forecasting). Next: Atisha to revise pricing removing "universe technologies" + focus on credits by end of month / next week's call. Kristin to review updated pricing + provide feedback + brainstorm w/ Kelly re project ownership + budget allocation. Ben to confirm budget ownership for credit model. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 9:00 AM', csm: 'riley', account: `SAP Inc (SuccessFactors Progress)`,
        note: `SAP SuccessFactors + TR Progress w/ Kristin Mestre + Cole Arutian + Mardigan Moffat. SAP Connect logistics + contractor Caslin registration. Buyer&rsquo;s Choice extended Oct 16. HG Precision Demand Leads Program launched &mdash; enhanced data for high-potential accounts.`,
        mins: 29, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP SuccessFactors TR progress call. SAP Connect major focus: Monday networking event + show floor opens Tuesday. Team capturing video + audio reviews during event. Contractor Caslin confirmed registration; badge pickup process clarified. Buyer&rsquo;s Choice extended to Oct 16 &mdash; potentially allowing more SAP product submissions. NEW: HG Precision Demand Leads Program launched leveraging enhanced data (technographic + spend + competitor installs) to identify high-potential accounts + comprehensive brief w/ outreach examples. Riley to (i) confirm Caslin's SAP Connect email w/ Angel, (ii) follow up re contractor questions, (iii) invite Angel to Sept 30 meeting for SAP Connect loose ends. Kristin to (a) send Angel Monday networking event details CC'ing Riley, (b) coordinate w/ Caslin pre-networking-event, (c) follow up w/ IDP team re premium content PO, (d) connect w/ Alejandro re next year's budget consolidation + renewal, (e) flag HG Insights license renewal w/ CMO. Mardigan/Cole to share Precision Demand Leads Program decks w/ Kristin's team + provide overview to Brandy in Bellevue 2nd/3rd week of Sept. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 9:00 AM', csm: 'varun', account: `Autodesk Inc`,
        note: `Bi-Weekly Sync w/ Ameya Kambli + Trishna Patel + John Ghaly + Adrian Escobar + Ravi Sharma + Rishabh Wadhwa. Data refresh cadence + DNB matching threshold + white space + subsidiaries handling + S3 delivery.`,
        mins: 34, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Autodesk bi-weekly. Monthly full-file uploads for CRM + white space w/ recent signals + outdated entries removed. DNB matching primarily direct input Duns to stored Duns; other parameters if direct fails. CRM records already excluded from white space &mdash; overlap not expected high. File delivery: single S3 bucket per customer w/ different ingestion pipelines. Subsidiaries may be in white space list; analysis needed if excluded based on shared domains/URLs. Next: Ameya to provide MVP of minimum info from white space (product ID + CSN mapping + URL + installed products). Rishabh to (a) confirm DNB matching like-for-like vs configurable threshold, (b) investigate Edge DNB matching threshold, (c) discuss internally changing freeze date + exceptions for 25M+ revenue companies in white space, (d) provide analysis on white-space vs CRM overlap, (e) confirm subsidiary handling, (f) break install file into 3 parts + upload to OneDrive. Varun to coordinate w/ Tanvir on ETL logic + production S3 keys + share webinar registration link. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 10:30 AM', csm: 'pam', account: `ZoomInfo`,
        note: `TR CVP renewal opportunity discussion (details limited &mdash; SFDC transcript speaker detection confirmed Pam; full context not surfaced in search).`,
        mins: 32, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `ZoomInfo TR bi-weekly (Renewal - ZoomInfo - CVP x4 - 07.01.2026 Written Rene2028). Pam confirmed as SFDC transcript speaker. Full call details not deeply surfaced in the search but the SFDC event context indicates ongoing TR CVP renewal engagement. Continue standard renewal cadence + monitor for expansion opportunities. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 3 &middot; 11:00 AM', csm: 'riley', account: `SAP Inc (Ariba + Fieldglass)`,
        note: `SAP Ariba + Fieldglass TR w/ Ashleigh Riehl + Cole Arutian + Mardigan Moffat. Buyer&rsquo;s Choice extended Oct 16 + SAP Connect reviews now count. Ariba 30 reviews (qualified). Fieldglass 17 YTD. Finance profiles need more (Adv Financial Closing +4, CPQ +3, Treasury +9).`,
        mins: 20, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP Ariba + Fieldglass TR sync. Buyer&rsquo;s Choice extended to Oct 16 &mdash; SAP Connect reviews now count toward the deadline (resolves prior issue). Ariba: 30 reviews already (needs 10 for Buyer&rsquo;s Choice &mdash; qualified). Fieldglass: 17 YTD reviews. Finance profiles need more reviews: Advanced Financial Closing (+4), CPQ (+3), Treasury and Risk Management (+9). New automated monthly reporting system introduced to track review numbers + scores across products. Next: Riley to push internally for mid-Oct deadline + send Ashleigh report breakdown as deadline approaches. Ashleigh to follow up w/ Stephanie Coupland + Adrian Ceroli re product category alignment + set up monthly metrics-section report + confirm report costs + SOW requirements w/ Mardigan by Monday. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 12:00 PM', csm: 'divyam', account: `Omnissa`,
        note: `Continued Omnissa Sync (43m) w/ Srinivasan Muthu + Veerappan Murugappan + Raymond Ruan + Ziad Amira. Two use cases: platform download (firmographic + product install; export limits 25K/100K rows) vs data feed (broader + no limits + separate contract).`,
        mins: 43, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Omnissa continued sync. Two use cases clarified: (1) existing platform for firmographics + product install (25K entity + 100K row export limits), (2) data feed for broader data + no export limits (requires separate contract + potentially additional costs). Buyer intent data exclusively via data feed. Immediate priority: download essential firmographic + product install from existing platform (no new contract). Data feed evaluation continues. Next: Srinivasan to download firmographic + product install files immediately. Divyam to (a) assist w/ downloads, (b) provide credit estimation for data feed based on requested data points, (c) discuss data feed contract + costs, (d) clarify historical employee count data availability, (e) share regression analysis for propensity modeling w/ Veerappan, (f) apply search criteria for Veerappan's sales play, (g) provide product-collections setup details, (h) confirm w/ team on read-only user role distinction. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 12:00 PM', csm: 'rani', account: `Hitachi Vantara (Intent PO)`,
        note: `Short 11-min SOW clarification w/ Adrian Escobar + Miguel Ortega. Clarifying SOW services section + special-terms language. Existing template to be updated. Renewal-expiration deadline noted. Alex reaching out re HG Insights.`,
        mins: 11, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Hitachi Intent PO / SOW clarification. Confusion re origin of specific SOW language (Hitachi vs client). Decision: update existing SOW template w/ new terms (Adrian leads). Certain SOW parts (two-page attachment) confirmed from Hitachi templates. Renewal expiration critical for SOW finalization + signing. Recent personnel changes: Jason Heckler manages US strategic accounts at Hitachi; Alex reaching out to contacts re HG Insights. Adrian to update template + forward to Miguel ASAP + potentially work w/ Eduardo on PDF SOW + discuss w/ Nathan Ditton re Jason Heckler involvement. Miguel to research who added specific SOW content last year + notify internal teams re update plan. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 12:30 PM', csm: 'atisha', account: `Insight Direct USA (GGP-SoldTo Analysis)`,
        note: `GGP-SoldTo Analysis w/ Daniel Gray + Augie Buettner + Clayton Cutbush. Data matching + franchise/subsidiary discrepancies + master data strategy discussion. Select 5-10 companies for deeper analysis + rebuild client master data consideration.`,
        mins: 34, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Insight Direct data-matching analysis session. Match accuracy impacted by franchise + ship-to location inclusion inflating unmatched numbers. Consensus: current internal data structure (built years ago) may not be optimal for current business needs + segmentation &mdash; potential need to rebuild client master data. Understanding revenue coverage + missing data nodes from external sources (HG Insights) crucial for effective segmentation. Current matching 'on par' but significant investment often required by other companies for higher match rates. Strategic shift needed: distinguish between GTM hierarchies vs legal/AR hierarchies for accurate client profiling. Next: Daniel to select 5-10 companies for deeper analysis (data gaps + HG coverage) by next working session. Augie + Clayton to dive into selected companies (e.g., 3M, AAA) within 90 days. Augie to set up strategy session w/ Clayton on master data cleanup + share updated SharePoint w/ match analysis today. Sergio to build leadership case for master data strategy improvements + investment. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 1:00 PM', csm: 'divyam', account: `OpenAI`,
        note: `OpenAI/HGI Competitive Intelligence Initiative &mdash; NEW PROSPECT engagement. 27-min discussion on competitive intel needs.`,
        mins: 27, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `OpenAI Competitive Intelligence Initiative &mdash; NEW PROSPECT engagement. Divyam confirmed via SFDC transcript speaker detection. Discussion focused on OpenAI's competitive intelligence needs + how HG can support. Full context not deeply surfaced in the summary but this represents a significant new-prospect opportunity given OpenAI's profile. Continue engagement + qualify opportunity + explore use cases. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 3 &middot; 1:00 PM', csm: 'varun', account: `Iron Mountain Incorporated`,
        note: `Renewal Meeting Alignment (33m) w/ Juan Camilo Carre&ntilde;o + Julian Rojas + Karin Pindle. Iron Mountain transitioning from static algorithmic to ML PTB model. Contract renewal + potential 2-month extension for model testing. Main stakeholder meeting Tue.`,
        mins: 33, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Iron Mountain renewal pre-briefing for Tuesday's main stakeholder meeting. Iron Mountain seeking to transition current static algorithmic model to ML-based propensity to buy. Detailed HG intent methodology understanding needed &mdash; specific variables + data access + costs. Market sizing solutions being explored: HG vs build internal tool. Business objectives: account prioritization + targeted marketing + cross-sell/upsell + sales territory assignment. Contract renewal key concern &mdash; potential extension discussion + fiscal year alignment. Meeting may split into 2 sessions (propensity modeling + market sizing vs "Phoenix" technical). Next: Juan to share detailed questions doc today. Julian + Varun to prep internally tomorrow. Schedule Phoenix call separately if needed before Tuesday. Kimberly to email market sizing answers today. Discuss contract extension options + fiscal year alignment. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 3 &middot; 1:30 PM', csm: 'rani', account: `Docusign, Inc.`,
        note: `OpenGTM/HGI Sync (18m) w/ Ziad Amira + Ben Salzman + David Lumley (OpenGTm). HG technographic integration into Docusign's sales stack &mdash; encoded ICP + FAI + scoring + competitive analysis. Docusign leadership presentation Mon/Tomorrow.`,
        mins: 18, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Docusign / OpenGTM data-integration sync. HG technographic data integrated into comprehensive table w/ core attributes + signals + vendor data types &mdash; enhances Docusign's target-account understanding. Encoded ICP translates targeting into binary data for sales plays + scoring (competitor ID + selling-difficulty assessment). Data density improved: better coverage + more signals per company &mdash; crucial for Logitech spend + tech-purchasing behavior. Unique technologies vs other vendors + combined data = robust intelligence layer. FAI confirms key-buyer presence for personas &mdash; scoring + engagement nuance. Next: Ben + David to present findings + value to Docusign leadership tomorrow/Monday. Ziad to share interactive data dictionary website today + reach out mid-next-week to discuss further steps. Ben to confirm w/ stakeholders re Ziad intro to G2 owner + provide org chart. Explore G2 data integration long-term. David to explore Docusign spend data integration + FAI utilization. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'atisha', account: `Kyndryl`, health: 'Healthy',
        note: `Louise & HGI monthly &mdash; focus shift to business + event performance. Intent data pushed to Louis's data feed for digital campaigns. 56M company DB update.` },
      { csm: 'riley', account: `Adobe Systems Incorporated`, health: 'Healthy',
        note: `Adobe MAX + TR sync &mdash; event prep + Buyer&rsquo;s Choice Oct 16 deadline extension + Precision Demand Leads Program discussion.` },
      { csm: 'atisha', account: `Insight Direct (Shahbaz)`, health: 'Healthy',
        note: `Bi-weekly &mdash; 56M company DB (target 100M EOY) + AI sales copilot + MCP + Microsoft Copilot/Claude integration. 360-plan strategic guide demoed.` },
      { csm: 'rani', account: `Workday Inc (SOW cont.)`, health: 'Healthy',
        note: `Short SOW follow-up from Sept 2 &mdash; multi-year credit deal + 3-year cap + 50% credit rollover.` },
      { csm: 'riley', account: `Mailchimp`, health: 'Healthy',
        note: `Short 7m bi-weekly TR success touchpoint. Riley confirmed via SFDC transcript speaker detection.` },
      { csm: 'rani', account: `Hitachi Vantara (Clay API)`, health: 'Concerning',
        note: `Clay API disruption escalation &mdash; data enrichment disrupted + Hitachi campaigns impacted. Bridge access needed through Oct 22. Ops committee approval by tomorrow.` },
      { csm: 'divyam', account: `Lumen Technologies`, health: 'Healthy',
        note: `Weekly &mdash; login troubleshooting + AT&T product export (4 products via DP + US filter). Contact-data demo next week; Feb evaluation prep.` },
      { csm: 'atisha', account: `RSM US`, health: 'Healthy',
        note: `Weekly &mdash; AI tools pricing pivot to credit-based (from tech packages) for flexibility + scale. Target close by end of month for quarter-end forecasting.` },
      { csm: 'riley', account: `SAP Inc (SuccessFactors)`, health: 'Healthy',
        note: `TR Progress &mdash; SAP Connect logistics + contractor registration + Buyer&rsquo;s Choice Oct 16. HG Precision Demand Leads Program launched.` },
      { csm: 'varun', account: `Autodesk Inc`, health: 'Healthy',
        note: `Bi-weekly &mdash; data refresh cadence + DNB matching threshold + white space + subsidiaries handling + S3 delivery.` },
      { csm: 'pam', account: `ZoomInfo`, health: 'Healthy',
        note: `TR CVP renewal opportunity discussion. Confirmed via SFDC transcript speaker detection.` },
      { csm: 'riley', account: `SAP Inc (Ariba + Fieldglass)`, health: 'Healthy',
        note: `TR sync &mdash; Buyer&rsquo;s Choice extended Oct 16 + SAP Connect reviews count. Ariba 30 reviews (qualified). Fieldglass 17. Finance profiles need more reviews.` },
      { csm: 'divyam', account: `Omnissa`, health: 'Healthy',
        note: `Continued sync &mdash; two use cases: platform download (25K/100K limits) vs data feed (broader + no limits + separate contract). Buyer intent exclusively via feed.` },
      { csm: 'rani', account: `Hitachi Vantara (Intent PO)`, health: 'Healthy',
        note: `Short SOW clarification &mdash; existing template updated w/ new terms. Renewal expiration deadline critical. Personnel change: Jason Heckler manages US strategic accounts.` },
      { csm: 'atisha', account: `Insight Direct (GGP-SoldTo)`, health: 'Healthy',
        note: `Analysis session &mdash; data matching + franchise/subsidiary discrepancies + master data strategy. Select 5-10 companies for deeper analysis. Rebuild client master data consideration.` },
      { csm: 'divyam', account: `OpenAI`, health: 'Healthy',
        note: `NEW PROSPECT &mdash; Competitive Intelligence Initiative. Divyam confirmed via SFDC transcript speaker detection. Continue engagement + qualify opportunity.` },
      { csm: 'varun', account: `Iron Mountain Incorporated`, health: 'Healthy',
        note: `Renewal Meeting Alignment &mdash; Iron Mountain transitioning to ML PTB model. Contract renewal + potential 2-month extension for model testing. Main stakeholder meeting Tuesday.` },
      { csm: 'rani', account: `Docusign, Inc.`, health: 'Healthy',
        note: `OpenGTM/HGI Sync &mdash; HG technographic integration into Docusign's sales stack. Docusign leadership presentation tomorrow/Monday. G2 integration exploration long-term.` },
    ],
  };
}

function dayMeta_2026_09_03() {
  return {
    pills: [
      ['dot-teal',   '18 Calls'],
      ['dot-red',    '1 Concerning'],
      ['dot-amber',  '7 Expansion'],
      ['dot-green',  '18 Vitally Pulses'],
      ['dot-grey',   'Thu Sep 3 &middot; 101 scanned'],
    ],
    tabs: ['Overview', 'Calls (18)', 'Pulses (18)', 'Action Items (8)']
  };
}

function dayOverviewHTML_2026_09_03() {
  return `<div class="section-label">Team Activity &mdash; Thursday September 3, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Sep 3 &mdash; 101 recordings scanned</strong> via SFDC SOQL &middot; <strong>18 confirmed calls</strong> across 6 CSMs &middot; 1 concerning &middot; 7 expansion signals &middot; SFDC confirmed 5; Weflow fallback added 13 unique recoveries
  </div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> Hitachi Vantara Clay API (Rani) &mdash; data enrichment services disrupted due to Clay partnership/API change; Hitachi campaigns impacted. Bridge access needed through Oct 22 renewal expiration. Ops committee approval targeted by tomorrow.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>7 EXPANSION:</strong> OpenAI (NEW PROSPECT competitive intel initiative) &middot; Iron Mountain (renewal + ML PTB model + contract extension exploration) &middot; Docusign (technographic integration + leadership pitch) &middot; Omnissa (data feed contract expansion evaluation) &middot; ZoomInfo (TR CVP renewal) &middot; RSM (AI tools credit-model pricing pivot) &middot; Workday (SOW cont.)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 2 (75% no-transcript):</strong> Sept 3 = 101 recordings, 25 with transcripts, 76 without. SFDC speaker detection confirmed 5 customer calls; 13 additional confirmations recovered via Weflow &lsquo;participants&rsquo; fallback.
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
        <div><div class="metric-num m-red">1</div><div class="metric-lbl">Concerning</div></div>
        <div><div class="metric-num m-grey">75m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workday SOW cont. (&#x1F4C8;) &middot; Hitachi Clay API (&#x1F534; disruption + Oct 22 urgency) &middot; Hitachi Intent PO (SOW clarification) &middot; Docusign OpenGTM (&#x1F4C8; technographic integration + leadership pitch)</div>
    </div>

    <div class="csm-card has-calls" data-csm="riley">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-riley">RR</div>
        <div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">70m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Adobe MAX (event prep) &middot; Mailchimp (short) &middot; SAP SuccessFactors (SAP Connect + Precision Demand Leads Program) &middot; SAP Ariba+Fieldglass (Buyer&rsquo;s Choice Oct 16)</div>
    </div>

    <div class="csm-card has-calls" data-csm="atisha">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-grey">AW</div>
        <div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">108m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Kyndryl (intent data for digital campaigns) &middot; Insight Direct Shahbaz (56M DB + MCP + AI copilot) &middot; RSM (&#x1F4C8; credit-model pricing pivot) &middot; Insight Direct GGP-SoldTo (master data strategy)</div>
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
        <div><div class="metric-num m-grey">101m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lumen (login+export troubleshooting) &middot; Omnissa (&#x1F4C8; data feed evaluation) &middot; OpenAI (&#x1F4C8; NEW PROSPECT competitive intel)</div>
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
        <div><div class="metric-num m-grey">67m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Autodesk bi-weekly (DNB matching + white space + S3 delivery) &middot; Iron Mountain (&#x1F4C8; renewal + ML PTB model + Tuesday stakeholder meeting)</div>
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
        <div><div class="metric-num m-grey">32m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ZoomInfo (&#x1F4C8; TR CVP renewal opportunity discussion)</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Nick speaker in SFDC transcripts; no Weflow-participant hits on any Sept 3 recording.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Pure Storage biweekly (Evapure) event had no transcript synced; no Weflow-participant hits.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_03() {
  return `<div class="section-label">Confirmed Calls &mdash; Thursday September 3, 2026</div>
  <div style="background:#1c1117;border:1px solid #ef4444;border-left:3px solid #ef4444;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x1F534; <strong>1 CONCERNING:</strong> Hitachi Vantara Clay API disruption &mdash; data enrichment services impacted; bridge access needed through Oct 22 renewal expiration. Ops committee approval by tomorrow.
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>7 EXPANSION:</strong> OpenAI NEW PROSPECT &middot; Iron Mountain (ML PTB renewal) &middot; Docusign (technographic integration) &middot; Omnissa (data feed) &middot; ZoomInfo (TR CVP renewal) &middot; RSM (credit-model pivot) &middot; Workday (SOW cont.)
  </div>`;
}

function dayPulsesHTML_2026_09_03() {
  const cards = [
    { csm:'atisha', health:'Healthy', account:`Kyndryl`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Louise & HGI monthly &mdash; focus shifted from account-level to business + event performance. Intent data pushed to Louis's data feed for digital campaigns. HG DB expanded to 56M companies.` },
    { csm:'riley', health:'Healthy', account:`Adobe Systems Incorporated`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Adobe MAX + TR sync &mdash; event prep + Buyer&rsquo;s Choice Oct 16 deadline extension + Precision Demand Leads Program discussion.` },
    { csm:'atisha', health:'Healthy', account:`Insight Direct (Shahbaz)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Bi-weekly &mdash; HG DB expanded to 56M companies (target 100M EOY). AI sales copilot w/ agents + MCP integration w/ Microsoft Copilot + Claude. 360-plan strategic implementation guide demoed.` },
    { csm:'rani', health:'Healthy', account:`Workday Inc (SOW cont.)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Short SOW follow-up from Sept 2 &mdash; multi-year credit deal terms + 3-year cap (3% y2/y3 vs 5% annual on 1yr) + 50% credit rollover.` },
    { csm:'riley', health:'Healthy', account:`Mailchimp`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Short 7m bi-weekly TR success touchpoint. Riley confirmed via SFDC transcript speaker detection.` },
    { csm:'rani', health:'Concerning', account:`Hitachi Vantara (Clay API)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 3 &middot; Concerning`,
      excerpt:`Clay API disruption escalation &mdash; data enrichment services disrupted; Hitachi campaigns impacted. Bridge access needed through Oct 22 renewal expiration. Ops committee approval by tomorrow.` },
    { csm:'divyam', health:'Healthy', account:`Lumen Technologies`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Weekly sync &mdash; login troubleshooting (proof-point verification stuck). AT&T product export (4 products) via DP + US filter. Contact-data demo next week; Feb evaluation prep.` },
    { csm:'atisha', health:'Healthy', account:`RSM US`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Weekly &mdash; AI tools pricing pivot to credit-based model (from tech packages) for flexibility + scale. Governance for credit management. Target close by end of month for quarter-end forecasting.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (SuccessFactors)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 3 &middot; Healthy`,
      excerpt:`TR Progress &mdash; SAP Connect logistics + contractor registration. Buyer&rsquo;s Choice extended Oct 16. NEW HG Precision Demand Leads Program launched leveraging enhanced data for high-potential accounts.` },
    { csm:'varun', health:'Healthy', account:`Autodesk Inc`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Bi-weekly &mdash; data refresh cadence + DNB matching threshold + white space + subsidiaries handling + S3 delivery. Ameya providing MVP of minimum white-space info.` },
    { csm:'pam', health:'Healthy', account:`ZoomInfo`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 3 &middot; Healthy`,
      excerpt:`TR CVP renewal opportunity discussion. Confirmed via SFDC transcript speaker detection.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (Ariba + Fieldglass)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 3 &middot; Healthy`,
      excerpt:`TR sync &mdash; Buyer&rsquo;s Choice extended Oct 16 + SAP Connect reviews count. Ariba 30 reviews (qualified). Fieldglass 17. Finance profiles need more (Adv Financial Closing +4, CPQ +3, Treasury +9).` },
    { csm:'divyam', health:'Healthy', account:`Omnissa`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Continued sync &mdash; two use cases: platform download (25K/100K limits) vs data feed (broader + no limits + separate contract). Buyer intent exclusively via feed. Immediate download of firmographic + product install.` },
    { csm:'rani', health:'Healthy', account:`Hitachi Vantara (Intent PO)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Short SOW clarification &mdash; existing SOW template updated w/ new terms. Renewal expiration deadline critical for finalization + signing. Personnel change: Jason Heckler manages US strategic accounts.` },
    { csm:'atisha', health:'Healthy', account:`Insight Direct (GGP-SoldTo)`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Analysis session &mdash; data matching + franchise/subsidiary discrepancies. Select 5-10 companies for deeper analysis. Rebuild client master data consideration + strategic shift to GTM vs legal hierarchies.` },
    { csm:'divyam', health:'Healthy', account:`OpenAI`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 3 &middot; Healthy`,
      excerpt:`NEW PROSPECT &mdash; OpenAI/HGI Competitive Intelligence Initiative. Divyam confirmed via SFDC transcript speaker detection. Continue engagement + qualify opportunity + explore use cases.` },
    { csm:'varun', health:'Healthy', account:`Iron Mountain Incorporated`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 3 &middot; Healthy`,
      excerpt:`Renewal Meeting Alignment &mdash; Iron Mountain transitioning from static algorithmic to ML PTB model. Contract renewal + potential 2-month extension. Main stakeholder meeting Tuesday.` },
    { csm:'rani', health:'Healthy', account:`Docusign, Inc.`, opp:`Vitally Pulse &mdash; Sep 3 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 3 &middot; Healthy`,
      excerpt:`OpenGTM/HGI Sync &mdash; HG technographic data integrated into Docusign's sales stack (encoded ICP + FAI + scoring). Docusign leadership presentation tomorrow/Monday. G2 integration exploration long-term.` },
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
        <div class="action-title">&#x1F534; Hitachi Vantara Clay API &mdash; secure bridge access through Oct 22 by tomorrow</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar + Satish Grandhi &middot; Adrian + Rani to work w/ ops committee re API access approval through Oct 22 by tomorrow. Satish to provide info on available API data sets not available through native Clay actions immediately. Rani to send Umar API data sets info. Follow-up meeting next Wed 11 AM EST w/ Rebecca + Umar to discuss capabilities + long-term solutions + budgeting.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-2')?'done':''}" data-csm="divyam" id="action-0903-2">
      <div class="action-checkbox ${doneActions.has('0903-2')?'checked':''}" onclick="toggleAction('0903-2')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; OpenAI &mdash; NEW PROSPECT Competitive Intelligence Initiative follow-up</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan &middot; OpenAI/HGI Competitive Intelligence Initiative &mdash; NEW PROSPECT engagement. Divyam confirmed via SFDC transcript speaker detection. Continue engagement + qualify opportunity + explore specific competitive intel use cases + share HG capabilities matching OpenAI's needs.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-3')?'done':''}" data-csm="varun" id="action-0903-3">
      <div class="action-checkbox ${doneActions.has('0903-3')?'checked':''}" onclick="toggleAction('0903-3')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Iron Mountain &mdash; Tuesday main stakeholder meeting prep + Phoenix technical split</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Julian Rojas + Juan Camilo Carre&ntilde;o &middot; Juan to share detailed questions doc today. Julian + Varun to prep internally tomorrow. Schedule separate Phoenix call before Tuesday if needed. Kimberly to email market sizing answers today. Discuss contract extension options + fiscal year alignment at Tuesday meeting.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-4')?'done':''}" data-csm="rani" id="action-0903-4">
      <div class="action-checkbox ${doneActions.has('0903-4')?'checked':''}" onclick="toggleAction('0903-4')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Docusign &mdash; OpenGTM findings presented to Docusign leadership tomorrow/Monday</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Ziad Amira + Ben Salzman &middot; Ben + David to present findings + HG data value to Docusign leadership tomorrow/Monday. Ziad to share interactive data dictionary website today + reach out mid-next-week for further steps. Ben to confirm w/ stakeholders re Ziad intro to G2 owner + provide org chart. Long-term: explore G2 data integration + Docusign spend data integration + FAI utilization.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-5')?'done':''}" data-csm="atisha" id="action-0903-5">
      <div class="action-checkbox ${doneActions.has('0903-5')?'checked':''}" onclick="toggleAction('0903-5')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; RSM &mdash; revise credit-based pricing + close by end of month for quarter-end forecast</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela + Kristin Lewis + Ben Vollmer &middot; Atisha to revise pricing removing "universe technologies" + focus on credits by end of month. Kristin to review updated pricing + provide feedback + brainstorm w/ Kelly re project ownership + budget allocation. Ben to confirm budget ownership for credit model.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-6')?'done':''}" data-csm="divyam" id="action-0903-6">
      <div class="action-checkbox ${doneActions.has('0903-6')?'checked':''}" onclick="toggleAction('0903-6')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Omnissa &mdash; immediate platform downloads + data feed contract evaluation</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Srinivasan Rangarajan Muthu &middot; Srinivasan to download firmographic + product install files immediately. Divyam to (a) assist w/ downloads, (b) provide credit estimation for data feed based on requested points, (c) discuss data feed contract + costs, (d) clarify historical employee count data, (e) share regression analysis + apply search criteria for Veerappan's sales play, (f) provide product-collections setup details.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-7')?'done':''}" data-csm="riley" id="action-0903-7">
      <div class="action-checkbox ${doneActions.has('0903-7')?'checked':''}" onclick="toggleAction('0903-7')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAP Connect + Buyer&rsquo;s Choice Oct 16 push across Ariba + Fieldglass + SuccessFactors</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers + Cole + Mardigan + Ashleigh Riehl + Kristin Mestre &middot; SAP Connect logistics + contractor Caslin registration. Buyer&rsquo;s Choice extended Oct 16 &mdash; SAP Connect reviews now count. Ariba 30 reviews (qualified). Finance profiles need more (Adv Financial Closing +4, CPQ +3, Treasury +9). Precision Demand Leads Program decks to be shared w/ Kristin's team. Kristin to flag HG Insights license renewal w/ CMO.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0903-8')?'done':''}" data-csm="atisha" id="action-0903-8">
      <div class="action-checkbox ${doneActions.has('0903-8')?'checked':''}" onclick="toggleAction('0903-8')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Insight Direct &mdash; master data strategy analysis (5-10 companies) + leadership case for investment</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela + Daniel Gray + Augie Buettner + Clayton Cutbush &middot; Daniel to select 5-10 companies for deeper analysis (data gaps + HG coverage) by next working session. Augie + Clayton to dive into selected companies (e.g., 3M, AAA) within 90 days. Augie to set up strategy session w/ Clayton on master data cleanup + share updated SharePoint w/ match analysis today. Sergio to build leadership case for master data strategy improvements + investment.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Tuesday September 15, 2026
// ============================================================

function dayData_2026_09_15() {
  return {
    calls: [
      { ts: 'Sep 15 &middot; 2:00 AM', csm: 'nick', account: `Lenovo Group Ltd. (Secure PC PTB)`,
        note: `Secure PC PTB Model mapping w/ Batta Pruthvi + Ujjaini Mazumdar + Agniteja Matavalam + Adrian Escobar + Gavin Padden + Alexi Mouarkach + David Crossman. Mapped Sentinel One/Absolute/LDO keywords to HG product+intent catalogs. Sept 18 launch deadline.`,
        mins: 38, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Lenovo Secure PC PTB Model &mdash; keyword mapping from Sentinel One + Absolute + LDO documents to HG's product + intent catalogs to enrich data signals. Mapping methodology: closest matches + product IDs + overall analysis of match relevance + differentiating intent vs product matches. Adjacent signals included to broaden data story. Scoring grid: fit/need/intent factors + defined weightings + rules + direct data vs proxies transparency. Data-availability limits: no specific endpoint counts. Next: Gavin to share mapping document + scoring grid w/ Batta + Nick. Nick + Gavin to discuss internally + confirm if account list can be shared for 3 specific use cases. Follow-up call within an hour of current call. Batta to confirm w/ Johnny + extended team re account list sharing + mapping validation before stakeholder meeting. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 15 &middot; 2:00 AM', csm: 'rani', account: `Lenovo Group Ltd. (co-attend)`,
        note: `Rani co-attended Lenovo Secure PC PTB Model mapping session supporting Nick + Adrian + Gavin. Same content &mdash; keyword mapping + scoring grid + Sept 18 launch deadline urgency.`,
        mins: 38, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Rani co-attended Lenovo Secure PC PTB Model mapping session. Same content &mdash; Sentinel One/Absolute/LDO keyword mapping to HG product + intent catalogs + scoring grid methodology + Sept 18 launch deadline. Attendance via Weflow participants.`, source: 'weflow' },

      { ts: 'Sep 15 &middot; 7:30 AM', csm: 'varun', account: `Pegasystems, Inc`,
        note: `MCP Onboarding technical deep-dive w/ Frank Boudreau + Matt Taylor + Taylor Crosby + Francis Brero + Chlo&eacute; Portier + Julian Rojas + Erica Yim. MCP endpoint activation confirmed. Skills marketplace + workflows for efficient MCP utilization. Prompt engineering to manage credits.`,
        mins: 39, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Pegasystems MCP (Machine Control Protocol) Onboarding &mdash; technical deep-dive + alignment session. MCP endpoint activation confirmed (Matt Taylor successfully connected). Distinction between API data feed (raw data) vs MCP credits (specific AI-driven queries + analysis). Effective prompt engineering crucial to avoid unnecessary credit consumption. HG offering skills library + workflows: guidance on chaining tools + efficient contact recommendations. Pega defining use cases internally + determining optimal approach (API data feed vs MCP calls). Next: Pega team continues internal setup + testing. Varun/Julian to (a) follow up w/ MCP inclusion docs + changes, (b) provide 'hdata query' tool access if beneficial, (c) coordinate follow-up call in 1-1.5 weeks re data feed requirements based on new ICP definitions, (d) share meeting minutes + collateral. Matt/Taylor to reach out w/ questions during MCP testing. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 15 &middot; 8:00 AM', csm: 'divyam', account: `Globoforce / Workhuman`,
        note: `TR Buyer&rsquo;s Choice Query Meeting w/ Ethan Bukowiec. Buyer&rsquo;s Choice deadline extended Oct 16 &mdash; 4 reviews (3 qualifying). Top Rated 2026 achieved. Customer advocacy team targeted outreach + larger Q4/Q1 campaign planned.`,
        mins: 19, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Workhuman TR Buyer&rsquo;s Choice + Top Rated award discussion. Top Rated criteria: 10+ reviews last 12 months + 0.5% traffic volume + TR score 75+. Reviews April-Oct count toward both Top Rated + Buyer&rsquo;s Choice. Buyer&rsquo;s Choice deadline extended Oct 16 &mdash; 10 reviews needed where 75% mention "best in use", "best value for money", "price", or "customer relationship". Currently 4 reviews (3 qualifying). Top Rated 2026 already achieved. TR vendor portal has new UI + legacy version; new UI being updated. Diverse reviewer pool crucial for higher TR score. Next: Ethan to initiate targeted review campaign using customer advocacy team + known responsive customers by Oct 16 + provide instructions for diverse customer-segment pull + follow up on Q4/Q1 campaign list. Divyam to share Top Rated 2026 badges + marketing assets + run larger Q4/Q1 campaign. Recurring Thursday cadence confirmed. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 15 &middot; 10:00 AM', csm: 'rani', account: `Cisco (Isovalent)`,
        note: `Cisco Isovalent onboarding w/ Melmoff + Adrian Escobar + Margo Rey. Data studio + HubSpot integration + AI Sales Copilot discussion. Custom-object scoring approach preferred over company-level fields. Oct target for HubSpot scoring implementation.`,
        mins: 31, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Cisco Isovalent onboarding. Client did not initially pay for Data Studio (not in original contract) &mdash; would incur additional cost. HubSpot integration + AI Sales Copilot discussion &mdash; need to clarify latest versions + upgrade costs. Decision: explore custom objects in HubSpot for scoring system (more control + flexibility than company-level fields despite potential reporting complexity). Transparency + control over scoring prioritized (away from "black box"). Target: October completion for HubSpot scoring implementation, leveraging existing Salesforce setup as model. Next: Rani to follow up w/ Adrian re AI tool credits + potential migration mandates. Margo to send Salesforce scoring profile article to Tu-Anh + keep Melmoff + Tu-Anh updated on HubSpot integration progress. Tu-Anh to provide custom object data structure + architecture. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 15 &middot; 10:30 AM', csm: 'rani', account: `CloudFlare Inc (Data Proposal)`,
        note: `Data Proposal Discussion w/ Martin Kielczewski + Chandra Raju + Jarvis Schuckman + Kraig Kraning. Expanded technographic + traffic data matched to CF Salesforce universe. Traffic data (Cloud Dynamics) now in core offering. Blended rate from existing credit pricing.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Cloudflare expanded-scope data proposal. Focus on matched Salesforce accounts + essential data points; 'white space' excluded for immediate implementation (execution capacity + readiness). Traffic data (previously via Cloud Dynamics separate platform) integrated into core offering &mdash; simplifies access + only necessary data points for modeling. Pricing modeled on existing contract credit pricing (blended rate) &mdash; financially advantageous vs new standalone contract. 'White space' as potential 2027 pilot for digital native sellers to assess ROI. Need to clarify exact data points/fields Chandra requires for simplified delivery. Next: Martin to (a) involve procurement (Yang + Akash) for detailed contract discussions (1-yr vs multi-year), (b) connect w/ Jarvis re docs on data management + matching processes, (c) provide Chandra w/ specific fields for traffic data, (d) prepare detailed budget numbers + justification for incremental spend. Kraig to (i) provide docs on alternative data structuring approaches (internal ID vs Duns match), (ii) potentially provide itemized cost breakdown for traffic data vs technographics if requested by procurement. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 15 &middot; 10:30 AM', csm: 'riley', account: `SAP Inc (Business Network TR)`,
        note: `SAP Business Network TR bi-weekly w/ Kathryn Zwack + Adrien Sirolli + Stephanie Coupland. Buyer&rsquo;s Choice review threshold met, deadline Oct 16, announcement Nov 10. Top Rated April push (6 more reviews). Ratings-to-Review campaign launched today. SAP Connect booth prep.`,
        mins: 21, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP Business Network TR bi-weekly. Buyer&rsquo;s Choice review requirement MET; deadline extended Oct 16; announcement Nov 10. Top Rated by April: need 6 more reviews (reduces new-review need until January). Ratings-to-Review campaign launching today. SAP Connect strategies: dedicated booth staff + landing page for SAP products + QR codes/incentives. Next: Riley to (a) send media kit for Buyer&rsquo;s Choice promotion around end of October, (b) provide business cards w/ QR codes for review promotion before SAP Connect, (c) follow up w/ Stephanie on business card requirements, (d) alert research team to reach out re custom questions immediately after call, (e) send Alejandro Buyer&rsquo;s Choice status + other product info within 10 minutes. Stephanie + Kathryn to revisit + refine custom questions for profiles before conference. Kathryn to coordinate w/ Bob for distributing business cards at other demo pods before SAP Connect. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 15 &middot; 11:00 AM', csm: 'riley', account: `SAP Inc (Buyer's Choice Weekly)`,
        note: `TR Buyer&rsquo;s Choice Award Weekly Check-in w/ Alejandro Barajas + Cole Arutian + Mardigan Moffat. Alejandro emphasizing CENTRALIZED strategy for events + review sourcing (decentralized causes confusion). SEO/LLM results tied to investment + renewal.`,
        mins: 35, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP Buyer&rsquo;s Choice weekly check-in. Alejandro emphasized centralized strategy for all event-related activities (review sourcing + business card distribution) &mdash; decentralized efforts cause confusion + misallocation of resources + jeopardize future contract renewals. Contractors Tara + Becky ("superstars") crucial for driving review generation. TR success in LLM search results directly tied to investment + contract renewal &mdash; not ranking high enough currently; imperative to improve citation results + demonstrate ROI. Angel (new to role) needs clear guidance on coordinating w/ central strategy. Analytics needed for blog services + geo content reports (ROI demonstration + AI integration planning). Next: Riley + Alejandro to schedule recurring monthly call w/ Angel by Thu Sept 17. Riley to send calendar invite for Sept 17 10:30 AM PST meeting + provide Janessa proposed custom questions + connect w/ Janessa tomorrow to share blog analytics + investigate geo content report analytics + provide Alejandro w/ Becky + Tara contact info + facilitate BN team custom-questions comms. Alejandro to follow up w/ Ina + Christina Stamati re involvement + follow up w/ Cole re Integrated Business Planning contacts + advocate for blog service analytics access + send follow-up email to Connect organizer. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 15 &middot; 11:00 AM', csm: 'divyam', account: `BILL Operations`,
        note: `Weekly Sync w/ Charles Hawkins + Eric Nguyen. MQL scoring discrepancy w/ MadKudu (relies on Clearbit; not fully utilizing Salesforce). Potential Salesforce-primary or fallback logic. Explore direct HG API integration w/ Clearbit for cost savings.`,
        mins: 64, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `BILL weekly sync. MQL scoring discrepancy identified &mdash; MadKudu relies primarily on Clearbit data, not fully utilizing Salesforce's comprehensive data. Need to clarify which fields are sourced by Clearbit vs Salesforce. Potential solution: Salesforce data as primary source or fallback logic (Salesforce supplements Clearbit when incomplete). New product lines + unified revenue metric complicate current scoring + analysis. Refine ICP fit analysis by removing self-serve conversions to get clearer picture of sales-led motion performance. Exploring direct HG API integration w/ Clearbit (or other data sources) for better pricing + additional data points vs Clay intermediary. Next: Divyam to provide further inputs on MQL discussion thread. Eric to (a) share MQL field access thread link EoD, (b) investigate + define filtering out self-serve conversions + closed won/loss by product type by next week, (c) add HG-Clearbit direct API integration to discussion, (d) finalize self-serve leads analysis. Charles to (i) share AI-driven model explainability example by end of week, (ii) assist w/ MadKudu audience + conversion goals updates, (iii) explore MQL score lookup via MCP server. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 15 &middot; 1:30 PM', csm: 'varun', account: `BMC Software Inc`,
        note: `BMC Sales Copilot rollout w/ Louise Eekhof + Devin McCarthy + Lindsay Saunders + Mark Sweeney + Matt (Support) + Augie Buettner + Erica Yim. New Sales Copilot demo. Immediate usability without CRM integration. Salesforce integration parallel track. Enablement sessions next week.`,
        mins: 50, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `BMC Sales Copilot rollout / new platform demo. New Sales Copilot: immediate usability without waiting for full CRM integration &mdash; reps can start prospecting + researching accounts directly. Configuring company context (products + intent topics) crucial first step. Defining specific "offerings" or sales plays (Control M + ERP + data pipelines) essential for prospecting. Account prioritization remains significant challenge &mdash; Salesforce integration key to aligning tool w/ existing territories + BDR assignments. AI chat feature provides insights + generates artifacts (competitive battle cards) without consuming user credits (except contact reveals). Next: Varun to provide step-by-step setup guide by next week + work w/ Louise to set up admin portal + company context + offerings + account scoring + schedule parallel technical call for SFDC integration once POC identified + assist w/ CSV uploads if SFDC integration delayed. Louise to look into offerings + product relevance in admin hub + schedule enablement sessions for users next week + align w/ IT Ops + Noman's team re SFDC integration technicalities immediately. Lindsay + Devin to confirm single pilot user vs broader rollout + define 3 specific Control M sales plays (displacement + ERP + data) by next week. Matt to participate in call w/ relevant BMC person re SFDC integration ASAP. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'nick', account: `Lenovo Group Ltd. (Secure PC PTB)`, health: 'Healthy',
        note: `PTB Model mapping &mdash; Sentinel One/Absolute/LDO keywords mapped to HG product + intent catalogs. Sept 18 launch deadline. Account list decision + stakeholder meeting prep.` },
      { csm: 'rani', account: `Lenovo Group Ltd. (co-attend)`, health: 'Healthy',
        note: `Rani co-attended Lenovo Secure PC PTB Model mapping session supporting Nick + Adrian + Gavin. Same content &mdash; Sept 18 launch deadline urgency.` },
      { csm: 'varun', account: `Pegasystems, Inc`, health: 'Healthy',
        note: `MCP Onboarding technical deep-dive &mdash; MCP endpoint activation confirmed. Skills marketplace + workflows. Prompt engineering to manage credits. Follow-up in 1-1.5 weeks re data feed requirements.` },
      { csm: 'divyam', account: `Globoforce / Workhuman`, health: 'Healthy',
        note: `TR Buyer&rsquo;s Choice Query Meeting &mdash; deadline Oct 16, 4 reviews (3 qualifying). Top Rated 2026 achieved. Customer advocacy team targeted outreach + Q4/Q1 campaign planned.` },
      { csm: 'rani', account: `Cisco (Isovalent)`, health: 'Healthy',
        note: `Onboarding &mdash; data studio + HubSpot integration + AI Sales Copilot. Custom-object scoring approach preferred over company-level fields. Oct target for HubSpot scoring implementation.` },
      { csm: 'rani', account: `CloudFlare Inc (Data Proposal)`, health: 'Healthy',
        note: `Data Proposal &mdash; expanded technographic + traffic data matched to CF Salesforce universe. Traffic data now in core offering (from Cloud Dynamics separate platform). Blended rate + procurement handoff.` },
      { csm: 'riley', account: `SAP Inc (Business Network TR)`, health: 'Healthy',
        note: `TR bi-weekly &mdash; Buyer&rsquo;s Choice threshold met (Oct 16 deadline; Nov 10 announcement). Top Rated April push. Ratings-to-Review campaign launched today. SAP Connect booth prep.` },
      { csm: 'riley', account: `SAP Inc (Buyer's Choice Weekly)`, health: 'Healthy',
        note: `Weekly check-in &mdash; Alejandro emphasizing CENTRALIZED strategy for events + review sourcing. TR success in LLM search results tied to investment + renewal. Angel onboarding + analytics need.` },
      { csm: 'divyam', account: `BILL Operations`, health: 'Healthy',
        note: `Weekly Sync &mdash; MQL scoring discrepancy w/ MadKudu (Clearbit-only). Potential Salesforce-primary or fallback logic. Explore direct HG API integration w/ Clearbit for cost savings.` },
      { csm: 'varun', account: `BMC Software Inc`, health: 'Healthy',
        note: `Sales Copilot rollout &mdash; new platform demo + immediate usability without CRM integration. Salesforce integration parallel track. Enablement sessions next week. Pilot vs broader-rollout decision.` },
    ],
  };
}

function dayMeta_2026_09_15() {
  return {
    pills: [
      ['dot-teal',   '10 Calls'],
      ['dot-amber',  '5 Expansion'],
      ['dot-green',  '10 Vitally Pulses'],
      ['dot-grey',   'Tue Sep 15 &middot; 99 scanned'],
    ],
    tabs: ['Overview', 'Calls (10)', 'Pulses (10)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_15() {
  return `<div class="section-label">Team Activity &mdash; Tuesday September 15, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Tuesday Sep 15 &mdash; 99 recordings scanned</strong> via SFDC SOQL &middot; <strong>10 confirmed calls</strong> (9 unique + 1 co-attend on Lenovo) across 5 CSMs &middot; 0 concerning &middot; 5 expansion signals &middot; SFDC confirmed 4; Weflow fallback added 5 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Lenovo Secure PC PTB (Sept 18 launch deadline) &middot; Pegasystems (MCP endpoint activation + skills marketplace) &middot; Cisco Isovalent (HubSpot integration + Oct scoring implementation) &middot; Cloudflare (expanded data proposal + traffic data in core offering + procurement) &middot; BMC Sales Copilot (new platform rollout + immediate usability + SFDC integration parallel track)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Weflow SFDC-sync backlog Day 7 (79% no-transcript):</strong> Sept 15 = 99 recordings, 21 with transcripts, 78 without. SFDC speaker detection confirmed 4 customer calls; 5 additional confirmations recovered via Weflow &lsquo;participants&rsquo; fallback.
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
        <div><div class="metric-num m-grey">99m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo Secure PC PTB co-attend (&#x1F4C8; Sept 18 launch) &middot; Cisco Isovalent (&#x1F4C8; HubSpot integration + custom object scoring) &middot; Cloudflare Data Proposal (&#x1F4C8; expanded technographic + traffic data)</div>
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
        <div><div class="metric-num m-grey">56m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP Business Network TR (Buyer&rsquo;s Choice threshold met + Ratings-to-Review campaign) &middot; SAP Buyer&rsquo;s Choice Weekly (centralized strategy + LLM search + Angel onboarding)</div>
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
        <div><div class="metric-num m-grey">89m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Pega MCP Onboarding (&#x1F4C8; endpoint activation + skills marketplace) &middot; BMC Sales Copilot (&#x1F4C8; new platform rollout + SFDC integration parallel track)</div>
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
        <div><div class="metric-num m-grey">83m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Workhuman (Buyer&rsquo;s Choice Oct 16 + Top Rated 2026 achieved) &middot; BILL (MQL scoring discrepancy + Salesforce vs Clearbit + MCP integration exploration)</div>
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
        <div><div class="metric-num m-grey">38m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo Secure PC PTB Model (&#x1F4C8; Sept 18 launch deadline; account list decision + stakeholder meeting prep)</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Apple Strategy + PANW events had no transcript synced; no Weflow-participant hits.</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Team Sync w/ Mark Fell (Pam's SAP IBP-labeled event was internal HG). No Weflow-participant hits.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Andy speaker in SFDC transcripts; no Weflow-participant hits.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_15() {
  return `<div class="section-label">Confirmed Calls &mdash; Tuesday September 15, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Lenovo Secure PC PTB (Sept 18 launch) &middot; Pegasystems MCP &middot; Cisco Isovalent (HubSpot integration + Oct scoring) &middot; Cloudflare (data proposal + traffic data in core + procurement) &middot; BMC Sales Copilot rollout
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x26A0;&#xFE0F; <strong>Team Sync w/ Mark Fell Ops (Pam SAP IBP-labeled event) excluded as INTERNAL.</strong>
  </div>`;
}

function dayPulsesHTML_2026_09_15() {
  const cards = [
    { csm:'nick', health:'Healthy', account:`Lenovo Group Ltd. (Secure PC PTB)`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 15 &middot; Healthy`,
      excerpt:`Secure PC PTB Model mapping &mdash; Sentinel One/Absolute/LDO keywords to HG product + intent catalogs. Scoring grid: fit/need/intent factors w/ transparent proxies. Sept 18 launch deadline. Account list decision + stakeholder meeting prep.` },
    { csm:'rani', health:'Healthy', account:`Lenovo Group Ltd. (co-attend)`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 15 &middot; Healthy`,
      excerpt:`Rani co-attended Lenovo Secure PC PTB Model mapping session supporting Nick + Adrian + Gavin. Same content &mdash; keyword mapping + scoring grid + Sept 18 launch deadline.` },
    { csm:'varun', health:'Healthy', account:`Pegasystems, Inc`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 15 &middot; Healthy`,
      excerpt:`MCP Onboarding &mdash; MCP endpoint activation confirmed. API data feed (raw data) vs MCP credits (AI-driven queries). Skills marketplace + workflows. Prompt engineering to manage credits. Follow-up 1-1.5 weeks re data feed requirements.` },
    { csm:'divyam', health:'Healthy', account:`Globoforce / Workhuman`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 15 &middot; Healthy`,
      excerpt:`Workhuman TR Buyer&rsquo;s Choice Query Meeting &mdash; deadline extended Oct 16. 4 reviews (3 qualifying). Top Rated 2026 achieved. Customer advocacy team targeted outreach + larger Q4/Q1 campaign planned.` },
    { csm:'rani', health:'Healthy', account:`Cisco (Isovalent)`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 15 &middot; Healthy`,
      excerpt:`Onboarding &mdash; data studio + HubSpot integration + AI Sales Copilot. Custom-object scoring approach preferred over company-level fields (more control + flexibility). Oct target for HubSpot scoring implementation.` },
    { csm:'rani', health:'Healthy', account:`CloudFlare Inc (Data Proposal)`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 15 &middot; Healthy`,
      excerpt:`Expanded technographic + traffic data proposal matched to CF Salesforce universe. Traffic data (previously Cloud Dynamics separate) integrated into core offering. Blended rate from existing credit pricing. Procurement (Yang + Akash) handoff.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (Business Network TR)`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 15 &middot; Healthy`,
      excerpt:`TR bi-weekly &mdash; Buyer&rsquo;s Choice review threshold MET; deadline Oct 16; announcement Nov 10. Top Rated April: need 6 more reviews. Ratings-to-Review campaign launched today. SAP Connect booth prep + QR codes.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (Buyer's Choice Weekly)`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 15 &middot; Healthy`,
      excerpt:`Weekly check-in &mdash; Alejandro emphasizing CENTRALIZED strategy for events + review sourcing (decentralized causes confusion + resource misallocation). TR success in LLM search results tied to investment + renewal. Angel onboarding + analytics need.` },
    { csm:'divyam', health:'Healthy', account:`BILL Operations`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 15 &middot; Healthy`,
      excerpt:`Weekly Sync &mdash; MQL scoring discrepancy: MadKudu relies primarily on Clearbit, not fully utilizing Salesforce. Potential Salesforce-primary or fallback logic. Explore direct HG API integration w/ Clearbit for cost savings.` },
    { csm:'varun', health:'Healthy', account:`BMC Software Inc`, opp:`Vitally Pulse &mdash; Sep 15 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 15 &middot; Healthy`,
      excerpt:`BMC Sales Copilot rollout &mdash; new platform demo. Immediate usability without waiting for CRM integration. Configuring company context + offerings + account scoring. Salesforce integration parallel track. Enablement sessions next week.` },
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

function dayActionsHTML_2026_09_15() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('1501')?'done':''}" data-csm="nick" id="action-1501">
      <div class="action-checkbox ${doneActions.has('1501')?'checked':''}" onclick="toggleAction('1501')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Lenovo Secure PC PTB &mdash; Sept 18 launch deadline + account list decision</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson + Rani Guy + Gavin Padden &middot; Gavin to share mapping doc + scoring grid w/ Batta + Nick. Nick + Gavin to discuss internally + confirm if account list can be shared for 3 specific use cases. Follow-up call within an hour of current call. Batta to confirm w/ Johnny + extended team re account list sharing + mapping validation before stakeholder meeting. Sept 18 launch deadline.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1502')?'done':''}" data-csm="varun" id="action-1502">
      <div class="action-checkbox ${doneActions.has('1502')?'checked':''}" onclick="toggleAction('1502')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; BMC Sales Copilot &mdash; step-by-step setup guide by next week + enablement sessions</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Louise Eekhof + Devin McCarthy + Lindsay Saunders &middot; Varun to (a) provide step-by-step Sales Copilot setup + config guide by next week, (b) work w/ Louise on admin portal + company context + offerings + account scoring, (c) assist w/ CSV uploads if SFDC integration delayed, (d) schedule parallel technical call for SFDC integration once POC identified. Louise to look into offerings + product relevance in admin hub + schedule enablement sessions next week + align w/ IT Ops + Noman's team re SFDC integration immediately. Lindsay + Devin to confirm single pilot user vs broader rollout + define 3 Control M sales plays by next week.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1503')?'done':''}" data-csm="varun" id="action-1503">
      <div class="action-checkbox ${doneActions.has('1503')?'checked':''}" onclick="toggleAction('1503')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Pega MCP &mdash; internal setup + testing + follow-up in 1-1.5 weeks re data feed requirements</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Julian Rojas + Francis Brero + Chloe Portier &middot; Pega internal team to (a) continue internal setup + testing of MCP, (b) define specific use cases + decide API data feed vs MCP calls for each, (c) develop clear instructions + parameters for MCP usage to control credit consumption. Varun + Julian to (i) follow up w/ MCP inclusion docs, (ii) provide 'hdata query' tool access if beneficial, (iii) coordinate follow-up call in 1-1.5 weeks re data feed requirements based on new ICP definitions, (iv) share meeting minutes + collateral.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1504')?'done':''}" data-csm="rani" id="action-1504">
      <div class="action-checkbox ${doneActions.has('1504')?'checked':''}" onclick="toggleAction('1504')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cloudflare Data Proposal &mdash; procurement handoff + budget justification</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Kraig Kraning + Martin Kielczewski &middot; Martin to (a) involve Yang + Akash for detailed contract discussions (1-yr vs multi-year), (b) connect w/ Jarvis re docs on data management + matching, (c) provide Chandra w/ specific fields for traffic data, (d) prepare detailed budget numbers + justification. Kraig to provide docs on alternative data structuring approaches + potentially itemized cost breakdown for traffic vs technographics if requested. White space potential 2027 pilot for digital native sellers.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1505')?'done':''}" data-csm="rani" id="action-1505">
      <div class="action-checkbox ${doneActions.has('1505')?'checked':''}" onclick="toggleAction('1505')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Cisco Isovalent &mdash; HubSpot custom-object scoring implementation Oct target</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Adrian Escobar + Margo Rey &middot; Rani to follow up w/ Adrian re AI tool credits + potential migration mandates. Margo to (a) send Salesforce scoring profile article to Tu-Anh, (b) keep Melmoff + Tu-Anh updated on HubSpot integration progress, (c) investigate how to pause note-taker feature. Tu-Anh to provide custom object data structure + architecture. Implementation target October.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1506')?'done':''}" data-csm="riley" id="action-1506">
      <div class="action-checkbox ${doneActions.has('1506')?'checked':''}" onclick="toggleAction('1506')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAP Buyer&rsquo;s Choice + Business Network &mdash; Oct 16 deadline + Nov 10 announcement + centralized-strategy alignment</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers + Cole + Mardigan + Alejandro Barajas + Stephanie Coupland &middot; Riley + Alejandro to schedule recurring monthly call w/ Angel by Thu Sept 17. Riley to (a) send Sept 17 10:30 AM PST calendar invite, (b) provide Janessa proposed custom questions, (c) connect w/ Janessa tomorrow re blog analytics, (d) provide Alejandro w/ Becky + Tara contact info, (e) send media kit around end of Oct, (f) provide business cards w/ QR codes before SAP Connect. Alejandro to follow up w/ Ina + Christina Stamati + Cole re IBP contacts + advocate for blog service analytics access. Stephanie + Kathryn to revisit + refine custom questions before conference.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1507')?'done':''}" data-csm="divyam" id="action-1507">
      <div class="action-checkbox ${doneActions.has('1507')?'checked':''}" onclick="toggleAction('1507')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; BILL &mdash; MQL scoring + Salesforce fallback logic + direct HG-Clearbit API exploration</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Charles Hawkins + Eric Nguyen &middot; Divyam to provide further inputs on MQL discussion thread. Eric to (a) share MQL field access thread link EoD, (b) investigate + define filtering out self-serve conversions + closed won/loss by product type by next week, (c) add HG-Clearbit direct API integration to discussion, (d) finalize self-serve leads analysis. Charles to (i) share AI-driven model explainability example by end of week, (ii) assist w/ MadKudu audience + conversion goals updates, (iii) explore MQL score lookup via MCP server.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Thursday September 17, 2026
// ============================================================

function dayData_2026_09_17() {
  return {
    calls: [
      { ts: 'Sep 17 &middot; 12:15 AM', csm: 'divyam', account: `Xero`,
        note: `TR Monthly Sync (12:15 AM PT). Divyam confirmed via SFDC transcript speaker detection.`,
        mins: 29, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Xero TR Monthly Sync. Divyam confirmed via SFDC transcript speaker detection. Standard bi-weekly cadence.`, source: 'sfdc' },

      { ts: 'Sep 17 &middot; 6:00 AM', csm: 'andy', account: `SAS Institute Inc.`,
        note: `SAS + HG Pilot next steps w/ Neil Dover + Augie Buettner + Chlo&eacute; Portier. Pilot extension needed &mdash; $10K additional credits for mid-Oct extension. Broader business case in development for Gavin (Neil's boss) + CFO sign-off.`,
        mins: 22, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `SAS pilot extension discussion. Pilot's primary goal (proving automated scoring efficiency) largely achieved despite minor output variations. Jasper + Stephen want to extend until mid-October given Oct 9 internal deadlines. Challenge: quantify investment + return for broader rollout &mdash; requires detailed sizing of usage across teams + use cases. Strong positive feedback on tool potential to drive adoption + improve sales performance. New UI for BDRs/SDRs/sales reps being developed &mdash; license-based (does not consume AI tokens/credits). Next: Augie to put together paperwork for extended pilot + send to Neil today + provide credit consumption per action + usage metrics for Mike's model by Oct 16 + provide different options + order forms. Neil to speak w/ Gavin + CFO for sign-off + ask Mike about credit usage + model implementation by Oct 16. Stephen to continue business case (sizing + costing) by mid-October. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 6:34 AM', csm: 'varun', account: `DXC Technology Services`,
        note: `Renewal Planning + New Platform Walkthrough w/ Gabriella Aston + Augie Buettner. Old platform phasing out &mdash; must transition to new. Credit-based pricing. Luxoft to be set up as separate legal entity for licensing to streamline payments.`,
        mins: 26, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `DXC new-platform walkthrough + renewal planning. Existing platform phasing out &mdash; all users must transition to new (complete parity + new features). Credit-based pricing: pay upfront for credits deducted based on data-export volume. Integration possibilities: Claude + Copilot + AWS Quick Suite w/ pricing comparable to existing consumption. Decision: establish Luxoft as separate legal entity for licensing to simplify payment + manage credits (streamlines vs prior DXC/Luxoft payment system divide). Next: Augie to (a) complete vendor forms by Fri/Mon, (b) provide read-only access to new platform for Gabriella, (c) send pricing + usage info via email, (d) set up MSA to include "DXC and all affiliates" for Luxoft piggyback, (e) export data for 3 companies to demo credit deduction. Gabriella to review pricing + last-12-mo usage against budget + schedule follow-up week of the 5th (post-holiday). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 8:00 AM', csm: 'varun', account: `MongoDB Inc`,
        note: `Recurring Sync w/ Will Bracken + Ziad Amira. Short 15m &mdash; product list review + account matching for credit calculations. Multi-year deal (2-3yr) exploration for better credits + reduced annual admin. Varun analysis by Wed/Thu.`,
        mins: 15, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `MongoDB recurring sync &mdash; product list review + credit calculations. Current product list under review for removals + additions. Account list analysis (new vs existing) to determine total accounts + facilitate product layering. Credit calculations for matched accounts + layered products to understand buffer/deficit. Multi-year deal (2 or 3 years) potential strategy for better credit terms + avoid annual administrative hurdles. Next: Varun to complete analysis of product lists + account matching for credit estimations by Wed/Thu + prepare proposals for one-year OR multi-year deal + grant read-only platform access if requested. Will to investigate MongoDB openness to multi-year deals + potential credit adjustments by tomorrow + confirm final requirements. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 10:00 AM', csm: 'rani', account: `Google Inc.`,
        note: `Renewal Discussion (60m via SFDC / 38m via Weflow). Rani confirmed via SFDC transcript speaker detection. Credit-based consumption model transition continuation from Sept 8; follow-up on package + pricing after Natalia's internal analysis.`,
        mins: 60, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Google renewal continuation from Sept 8 credit-model discussion. Rani confirmed via SFDC transcript speaker detection. Follow-up on package + pricing after Natalia (Google decision maker) internal analysis w/ Lawrence + Sohana. FAI + Gen AI scope decision + finalized package terms being discussed. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 17 &middot; 10:30 AM', csm: 'pam', account: `ZoomInfo`,
        note: `Short 8m TR sync. Pam confirmed via SFDC transcript speaker detection.`,
        mins: 8, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short ZoomInfo TR sync. Pam confirmed via SFDC transcript speaker detection. Brief touchpoint &mdash; minimal content in 8m exchange.`, source: 'sfdc' },

      { ts: 'Sep 17 &middot; 11:00 AM', csm: 'divyam', account: `Globoforce / Workhuman`,
        note: `TR Monthly Cadence (27m). Continued from Sept 15 Buyer&rsquo;s Choice Query Meeting. Divyam confirmed via SFDC transcript speaker detection.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Workhuman TR Monthly Cadence. Continued from Sept 15 Buyer&rsquo;s Choice Query Meeting &mdash; Ethan initiating customer advocacy targeted outreach for Oct 16 deadline. Divyam confirmed via SFDC transcript speaker detection. Recurring Thursday cadence.`, source: 'sfdc' },

      { ts: 'Sep 17 &middot; 11:00 AM', csm: 'divyam', account: `Dynatrace`,
        note: `Bi-Weekly Sync w/ Ethan Bukowiec + Augie Buettner. TR Buyer&rsquo;s Choice vs Top Rated clarification. Internal review-campaign management to continue. Vendor portal walkthrough (profile mgmt + AI-crawl analytics + reference candidates).`,
        mins: 28, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Dynatrace TR bi-weekly. Internal management of review-outreach campaigns (Buyer&rsquo;s Choice) to continue &mdash; potential automated workflows via Pendo. Clear distinction reinforced: Buyer&rsquo;s Choice (product capabilities + value + relationships) vs Top Rated (review volume + recency + traffic). TR vendor portal walkthrough: profile views + intent companies + geographic/industry user data + review sentiment + AI crawl analytics. Ethan to (a) discuss w/ Director + CMO to define broader TR partnership goals ASAP, (b) set up new campaign link post current outreach, (c) discuss w/ Sophia's team re direct outreach vs Pendo campaigns, (d) review + update product listing (descriptions + pricing + media), (e) review TR reports (reference candidates + follow-ups), (f) investigate integrating TR w/ ZoomInfo + Sixsense + Salesforce via API key. Divyam to send campaign link "Buyer&rsquo;s Choice DC50" + TR support site + review campaign performance next week. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 11:00 AM', csm: 'riley', account: `SAP Inc (Ariba + Fieldglass)`,
        note: `TR sync (short 17m). Owned-account focus discussion. TVD upcoming renewal. SAP Connect financial-products alignment w/ Alejandro. PO through Ariba being processed.`,
        mins: 17, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short SAP Ariba + Fieldglass TR sync. Discussion on managing multiple accounts + desire to focus on owned accounts. Economic uncertainties + industry reorganizations impacting businesses. Anticipating SAP payment next month contingent on internal processes. TVD upcoming renewal key item. SAP Connect strategy: align w/ Alejandro on financial products. Next: Riley to (a) discuss SAP Connect maximization, (b) align w/ Alejandro on financial products focus. Mardigan to (i) get PO through Ariba, (ii) copy Edo. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 11:30 AM', csm: 'rani', account: `NetApp`,
        note: `Contract "termination for convenience" clause resolution w/ Adrian Escobar + James Tudway + Megan Santiago-Gould + Alain Ishiguro. Match rate as key metric &mdash; 61% baseline on full 40M records; higher expected on 2M licensed accounts. Target signature tomorrow.`,
        mins: 19, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `NetApp contract finalization. Outstanding issue: "termination for convenience" clause per leadership request. Decision: use match rate as key metric to anchor termination clause &mdash; reflects data performance + value. Baseline: 61% match rate across full 40M records as minimum. Aim for higher on 2M licensed accounts. Mutual understanding + trust partnership will drive match rate toward 80%+. Adrian to (a) draft revised contract language incorporating match rate baseline + termination clause + mitigation language for potential breaches by end of day. Alain + Megan to review drafted contract language tomorrow. Team aim: contract signatures once language finalized (tomorrow). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 11:30 AM', csm: 'divyam', account: `Lumen Technologies`,
        note: `Weekly Sync w/ Nathan Der + Julie Chalk + Max Shaw + Julian Rojas. Lookalike modeling for partner revenue. Fortune 500/Forbes 2000 list request. AT&T Switched Ethernet on Demand launching Sept 21. HG Insights virtual event Oct 6.`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Lumen weekly sync. Shift toward driving partner revenue via lookalike modeling + firmographic data analysis to identify aligned partners. Recurring need: dedicated Fortune 500 + Forbes 2000 company lists for media presentations + statistics. AT&T switched Ethernet on Demand feature confirmed live Sept 21. East West scoring model challenges (team misalignment + lack of shared methodology) requiring logic redo. Renewed interest in "white space" analysis &mdash; product-oriented, Fortune 500 + Forbes 2000 companies that fit specific scoring profile but not current Lumen customers. Next: Nathan to (a) send 3 more lookalike lists ASAP, (b) build scoring model for ITIQ + Blue Wave, (c) send 14 additional products (ATT + Vodafone + Zero + Comcast) for catalog. Divyam to (i) provide Fortune 500/Forbes 2000 lists if available, (ii) investigate direct platform filter, (iii) add 14 requested products to catalog, (iv) provide alternate billing contact, (v) explore adding TrustRadius intent data. Nathan/Eric to register for HG Insights virtual event Oct 6. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 12:00 PM', csm: 'riley', account: `SAP Inc (Concur Recurring)`,
        note: `TR SAP Concur Recurring w/ Stephanie Mair + Cole Arutian + Mardigan Moffat. Lead-gen feedback needed. Renewal Dec 31 &mdash; target October start to avoid year-end holidays. Both parties have December OOO windows &mdash; early renewal cadence crucial. Buyer&rsquo;s Choice Nov 10 announcement.`,
        mins: 17, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAP Concur TR recurring. Lead-gen campaigns ongoing &mdash; need to gather initial feedback from Kyle + Aiden re SMB new-business target + conversion rates. Renewal Dec 31 &mdash; preferred timeline to start October to avoid year-end holidays + potential disruptions. Both Riley + Stephanie have December OOO windows &mdash; early renewal processing crucial. Buyer&rsquo;s Choice deadline extended, announcement Nov 10, media kits provided in advance. Need to clarify if flat renewal includes buyer-intent lead campaigns added after last renewal (impacts total budget + scope). Next: Stephanie to sync w/ Kyle + Aiden for initial lead-gen feedback ASAP + confirm campaign inclusion in flat renewal w/ Cole via email + start procurement post-SOW + invite Kyle to next sync. Riley to ask Scott for lead metrics presentation + inform Scott about report + Martigan about kickstarting flat renewal. Cole to share SOW around October. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 12:00 PM', csm: 'rani', account: `Lenovo Group Ltd. (Nvidia targeting)`,
        note: `Lenovo sync w/ Ryan Warren + Adrian Escobar. New platform for GTM sales + targeting AI developers for Nvidia. Existing MDF (marketing development funds) leverageable. Proposed $400-500K year-long campaign. Demo w/ Ryan's boss Scott + Rob scheduled Thursday.`,
        mins: 33, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Lenovo new-opportunity: leveraging new platform to target AI developers for Nvidia using existing MDF (marketing development funds) from OEM partners. Platform's credit-based pricing model where users pay for consumed data points &mdash; cost-effective for targeted campaigns. Various data points + filtering capabilities to identify + target AI developer segment. Proposed $400-500K budget for year-long campaign. Next: Ryan to (a) schedule meeting w/ boss Scott + Rob to discuss platform + potential campaign by tomorrow, (b) prepare + send email outlining plan to target AI developers (categories + spend + workflows + FAI w/ contact info) by tomorrow. Adrian to (i) provide Ryan w/ platform rate card, (ii) schedule + prepare for demo w/ Ryan + Scott + Rob + potentially Gavin Thursday 11 AM Ryan's time, (iii) internal preparation w/ team few days before demo. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 17 &middot; 12:30 PM', csm: 'varun', account: `Iron Mountain Incorporated`,
        note: `Bi-weekly Sync (27m) w/ Juan Camilo Carre&ntilde;o + Karin Pindle + Leo Zunz + Max Shaw + Rishabh Wadhwa + Julian Rojas. Renewal scoping (Oct expiration). Additional data sets exploration (product name + vendor name + install time series + FAI). Follow-up Wed Sept 23 3 PM ET.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Iron Mountain bi-weekly &mdash; renewal scoping continued from Sept 3. Target expiration October &mdash; align renewal timeline. Juan Camilo exploring additional data sets to enhance predictive models: product name + vendor name + install time series + contract growth + functional area intelligence. Understanding data coverage + associated costs. Pricing options being explored w/ + w/o intent data + multi-year agreements for potentially better offerings. Data refresh: monthly for most, intent data weekly, account data quarterly. Next: Juan to share table w/ extra data sets for testing + market-sizing tab by tomorrow. Julian + KP + Varun to analyze account list + filters + prepare pricing early next week. Julian to send email to Peter re October alignment + send TR docs to Kimberly + Juan + schedule follow-up call Wed Sept 23 3 PM ET + send MSA + security docs + involve Holly + Mike in procurement once scope finalized. KP to send analyzed list of 158 products. Juan Camilo to discuss extending contract until December internally. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'divyam', account: `Xero`, health: 'Healthy',
        note: `TR Monthly Sync (12:15 AM PT). Standard bi-weekly cadence. Confirmed via SFDC transcript speaker detection.` },
      { csm: 'andy', account: `SAS Institute Inc.`, health: 'Healthy',
        note: `Pilot next steps &mdash; $10K credit extension to mid-Oct. Business case in development for Gavin + CFO sign-off. New BDR/SDR/rep UI (license-based, no AI tokens/credits).` },
      { csm: 'varun', account: `DXC Technology Services`, health: 'Healthy',
        note: `New Platform Walkthrough + Renewal Planning &mdash; old platform phasing out. Credit-based pricing. Luxoft as separate legal entity for licensing. Vendor forms Fri/Mon.` },
      { csm: 'varun', account: `MongoDB Inc`, health: 'Healthy',
        note: `Recurring sync &mdash; product list review + credit calculations. Multi-year deal (2-3yr) exploration for better credits + reduced annual admin. Analysis Wed/Thu.` },
      { csm: 'rani', account: `Google Inc.`, health: 'Healthy',
        note: `Renewal Discussion follow-up from Sept 8 &mdash; credit-based consumption package + pricing post Natalia internal analysis. Confirmed via SFDC transcript speaker detection.` },
      { csm: 'pam', account: `ZoomInfo`, health: 'Healthy',
        note: `Short 8m TR sync. Confirmed via SFDC transcript speaker detection.` },
      { csm: 'divyam', account: `Globoforce / Workhuman`, health: 'Healthy',
        note: `TR Monthly Cadence continued from Sept 15 Buyer&rsquo;s Choice Query Meeting. Recurring Thursday cadence.` },
      { csm: 'divyam', account: `Dynatrace`, health: 'Healthy',
        note: `TR Bi-Weekly &mdash; Buyer&rsquo;s Choice vs Top Rated clarification. Internal review campaigns continue (potential Pendo automation). Vendor portal walkthrough + AI crawl analytics.` },
      { csm: 'riley', account: `SAP Inc (Ariba + Fieldglass)`, health: 'Healthy',
        note: `Short 17m sync &mdash; owned-account focus + TVD upcoming renewal + SAP Connect financial products alignment. PO through Ariba being processed.` },
      { csm: 'rani', account: `NetApp`, health: 'Healthy',
        note: `Contract "termination for convenience" clause resolution &mdash; match rate as key metric (61% baseline on 40M records). Target signature tomorrow.` },
      { csm: 'divyam', account: `Lumen Technologies`, health: 'Healthy',
        note: `Weekly &mdash; lookalike modeling for partner revenue. Fortune 500/Forbes 2000 lists. AT&T Switched Ethernet Sept 21 launch. Product catalog additions (ATT + Vodafone + Zero + Comcast).` },
      { csm: 'riley', account: `SAP Inc (Concur Recurring)`, health: 'Healthy',
        note: `TR Recurring &mdash; renewal Dec 31; target October start. Both parties have December OOO windows. Buyer&rsquo;s Choice Nov 10 announcement.` },
      { csm: 'rani', account: `Lenovo Group Ltd. (Nvidia targeting)`, health: 'Healthy',
        note: `New opportunity &mdash; platform for GTM sales + AI developer targeting for Nvidia via MDF. Proposed $400-500K year-long campaign. Demo w/ Scott + Rob Thursday.` },
      { csm: 'varun', account: `Iron Mountain Incorporated`, health: 'Healthy',
        note: `Bi-weekly &mdash; renewal scoping (Oct expiration). Additional data sets exploration. Follow-up Wed Sept 23 3 PM ET. Multi-year agreement + intent data pricing options.` },
    ],
  };
}

function dayMeta_2026_09_17() {
  return {
    pills: [
      ['dot-teal',   '14 Calls'],
      ['dot-amber',  '6 Expansion'],
      ['dot-green',  '14 Vitally Pulses'],
      ['dot-grey',   'Thu Sep 17 &middot; 96 scanned'],
    ],
    tabs: ['Overview', 'Calls (14)', 'Pulses (14)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_17() {
  return `<div class="section-label">Team Activity &mdash; Thursday September 17, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Sep 17 &mdash; 96 recordings scanned</strong> via SFDC SOQL &middot; <strong>14 confirmed calls</strong> across 6 CSMs &middot; 0 concerning &middot; 6 expansion signals &middot; SFDC confirmed 4; Weflow fallback added 10 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>6 EXPANSION:</strong> NetApp (match-rate contract metric + target signature tomorrow) &middot; Lenovo Nvidia targeting ($400-500K year-long AI developer campaign via MDF) &middot; DXC (new platform migration + Luxoft legal entity for licensing) &middot; SAS Pilot ($10K credit extension + broader business case for CFO sign-off) &middot; MongoDB (multi-year deal exploration) &middot; Iron Mountain (renewal scoping + additional data sets)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F3E5; <strong>Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters.</strong> Andy attended one brief SAS pilot call before going out. Cross-coverage in effect for SAS + FactSet + Andy&rsquo;s other accounts.
  </div>
  <div class="overview-grid">

    <div class="csm-card has-calls" data-csm="divyam">
      <span class="call-badge">4 CALLS</span>
      <div class="csm-card-header">
        <div class="avatar av-divyam">DD</div>
        <div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div>
      </div>
      <div class="csm-metrics">
        <div><div class="metric-num m-teal">4</div><div class="metric-lbl">Calls</div></div>
        <div><div class="metric-num m-green">4</div><div class="metric-lbl">Pulses</div></div>
        <div><div class="metric-num m-grey">114m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Xero (TR monthly) &middot; Workhuman (TR monthly continued from Sept 15) &middot; Dynatrace (TR bi-weekly + vendor portal walkthrough) &middot; Lumen (lookalike modeling + AT&T Sept 21 launch)</div>
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
        <div><div class="metric-num m-grey">112m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Google (renewal cont.) &middot; NetApp (&#x1F4C8; match-rate metric + termination clause + target sign tomorrow) &middot; Lenovo Nvidia (&#x1F4C8; $400-500K AI developer campaign)</div>
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
        <div><div class="metric-num m-grey">68m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">DXC (&#x1F4C8; new platform migration + Luxoft legal entity) &middot; MongoDB (&#x1F4C8; multi-year deal exploration) &middot; Iron Mountain (&#x1F4C8; renewal scoping + data set exploration)</div>
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
        <div><div class="metric-num m-grey">34m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP Ariba + Fieldglass (owned-account focus + TVD renewal) &middot; SAP Concur (renewal Dec 31 &mdash; target Oct start; December OOO windows both parties)</div>
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
        <div><div class="metric-num m-grey">8m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">ZoomInfo (short 8m TR sync)</div>
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
        <div><div class="metric-num m-grey">22m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAS pilot next steps (&#x1F4C8; $10K credit extension). Andy out Sept 17-23 after this call.</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Nick covering for Andy's urgent matters. Intuit-Blackbaud sync event had no transcript synced.</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Insight Direct + Strada/Alight (4m Arben) events had no transcript synced; no substantive Weflow-participant hits.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_17() {
  return `<div class="section-label">Confirmed Calls &mdash; Thursday September 17, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>6 EXPANSION:</strong> NetApp (match-rate clause + sign tomorrow) &middot; Lenovo Nvidia AI developer campaign ($400-500K) &middot; DXC (platform migration + Luxoft entity) &middot; SAS Pilot ($10K credit extension) &middot; MongoDB (multi-year deal) &middot; Iron Mountain (renewal scoping)
  </div>
  <div style="background:#1c1f26;border:1px solid #f59e0b;border-left:3px solid #f59e0b;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fcd34d;">
    &#x1F3E5; <strong>Andy Lim out Sept 17-23; Nick Johnson (UK) covering for urgent matters.</strong> Andy attended one brief SAS pilot call before going out.
  </div>`;
}

function dayPulsesHTML_2026_09_17() {
  const cards = [
    { csm:'divyam', health:'Healthy', account:`Xero`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 17 &middot; Healthy`,
      excerpt:`TR Monthly Sync (12:15 AM PT). Standard bi-weekly cadence. Confirmed via SFDC transcript speaker detection.` },
    { csm:'andy', health:'Healthy', account:`SAS Institute Inc.`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Pilot extension &mdash; $10K credits until mid-Oct. Broader business case in development for Gavin (Neil's boss) + CFO sign-off. New BDR/SDR/rep UI (license-based, no AI tokens/credits).` },
    { csm:'varun', health:'Healthy', account:`DXC Technology Services`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 17 &middot; Healthy`,
      excerpt:`New Platform Walkthrough + Renewal Planning &mdash; old platform phasing out. Credit-based pricing. Luxoft as separate legal entity for licensing to streamline payments. Vendor forms Fri/Mon.` },
    { csm:'varun', health:'Healthy', account:`MongoDB Inc`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Recurring sync &mdash; product list review + credit calculations. Multi-year deal (2-3yr) exploration for better credits + reduced annual admin. Analysis Wed/Thu; proposals for one-year OR multi-year.` },
    { csm:'rani', health:'Healthy', account:`Google Inc.`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Renewal Discussion follow-up from Sept 8 &mdash; credit-based consumption package + pricing post Natalia internal analysis w/ Lawrence + Sohana. FAI + Gen AI scope decision. Confirmed via SFDC transcript speaker detection.` },
    { csm:'pam', health:'Healthy', account:`ZoomInfo`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Short 8m TR sync. Pam confirmed via SFDC transcript speaker detection. Brief touchpoint.` },
    { csm:'divyam', health:'Healthy', account:`Globoforce / Workhuman`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 17 &middot; Healthy`,
      excerpt:`TR Monthly Cadence continued from Sept 15 Buyer&rsquo;s Choice Query Meeting. Ethan initiating customer advocacy targeted outreach for Oct 16 deadline. Recurring Thursday cadence.` },
    { csm:'divyam', health:'Healthy', account:`Dynatrace`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 17 &middot; Healthy`,
      excerpt:`TR Bi-Weekly &mdash; Buyer&rsquo;s Choice vs Top Rated clarification. Internal review campaigns continue (potential Pendo automation). Vendor portal walkthrough + AI crawl analytics + reference candidates.` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (Ariba + Fieldglass)`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Short 17m sync &mdash; owned-account focus + TVD upcoming renewal. Anticipating SAP payment next month. SAP Connect financial products alignment w/ Alejandro. PO through Ariba being processed.` },
    { csm:'rani', health:'Healthy', account:`NetApp`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Contract "termination for convenience" clause resolution &mdash; match rate as key metric (61% baseline on 40M records; higher on 2M licensed). Target signature tomorrow. Adrian drafting revised language by EoD.` },
    { csm:'divyam', health:'Healthy', account:`Lumen Technologies`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Weekly &mdash; lookalike modeling for partner revenue. Fortune 500/Forbes 2000 lists. AT&T Switched Ethernet on Demand launching Sept 21. 14 additional product catalog additions (ATT + Vodafone + Zero + Comcast).` },
    { csm:'riley', health:'Healthy', account:`SAP Inc (Concur Recurring)`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 17 &middot; Healthy`,
      excerpt:`TR Recurring &mdash; renewal Dec 31; target October start to avoid year-end holidays. Both parties have December OOO windows &mdash; early renewal cadence crucial. Buyer&rsquo;s Choice Nov 10 announcement.` },
    { csm:'rani', health:'Healthy', account:`Lenovo Group Ltd. (Nvidia targeting)`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 17 &middot; Healthy`,
      excerpt:`New opportunity &mdash; platform for GTM sales + AI developer targeting for Nvidia. Existing MDF (marketing development funds) leverageable. Proposed $400-500K year-long campaign. Demo w/ Scott + Rob Thursday 11 AM Ryan's time.` },
    { csm:'varun', health:'Healthy', account:`Iron Mountain Incorporated`, opp:`Vitally Pulse &mdash; Sep 17 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 17 &middot; Healthy`,
      excerpt:`Bi-weekly &mdash; renewal scoping (Oct expiration). Additional data sets exploration (product name + vendor name + install time series + FAI). Follow-up Wed Sept 23 3 PM ET. Multi-year + intent-data pricing options.` },
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

function dayActionsHTML_2026_09_17() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('1701')?'done':''}" data-csm="rani" id="action-1701">
      <div class="action-checkbox ${doneActions.has('1701')?'checked':''}" onclick="toggleAction('1701')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; NetApp &mdash; contract termination-clause resolution + signature target tomorrow</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar + James Tudway + Megan Santiago-Gould &middot; Adrian to draft revised contract language incorporating match-rate baseline (61% on 40M records; higher on 2M licensed) + termination clause + mitigation for potential breaches by EoD. Alain + Megan to review drafted language tomorrow. Team aim: contract signatures once finalized tomorrow.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1702')?'done':''}" data-csm="rani" id="action-1702">
      <div class="action-checkbox ${doneActions.has('1702')?'checked':''}" onclick="toggleAction('1702')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Lenovo Nvidia AI developer targeting &mdash; $400-500K campaign demo Thursday</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Adrian Escobar + Ryan Warren &middot; Ryan to schedule meeting w/ boss Scott + Rob to discuss platform + potential campaign by tomorrow + prepare + send email outlining plan (categories + spend + workflows + FAI w/ contact info) by tomorrow. Adrian to provide rate card + schedule + prep demo w/ Ryan + Scott + Rob + potentially Gavin Thursday 11 AM Ryan's time + internal preparation w/ team.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1703')?'done':''}" data-csm="varun" id="action-1703">
      <div class="action-checkbox ${doneActions.has('1703')?'checked':''}" onclick="toggleAction('1703')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; DXC &mdash; vendor forms Fri/Mon + Luxoft legal entity setup for licensing</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Augie Buettner + Gabriella Aston &middot; Augie to (a) complete vendor forms by Fri/Mon, (b) provide read-only access to new platform for Gabriella, (c) send pricing + usage info via email, (d) set up MSA to include "DXC and all affiliates" for Luxoft piggyback, (e) export data for 3 companies to demo credit deduction. Gabriella to review pricing + last-12-mo usage against budget + schedule follow-up week of the 5th (post-holiday).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1704')?'done':''}" data-csm="andy" id="action-1704">
      <div class="action-checkbox ${doneActions.has('1704')?'checked':''}" onclick="toggleAction('1704')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; SAS Pilot extension &mdash; $10K credits + business case for Gavin/CFO sign-off by Oct 16</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim + Neil Dover + Augie Buettner + Chloe Portier &middot; Augie to put together paperwork for extended pilot + send to Neil today + provide credit consumption per action + usage metrics for Mike's model by Oct 16 + provide different options + order forms. Neil to speak w/ Gavin + CFO for sign-off + ask Mike about credit usage + model implementation by Oct 16. Stephen to continue business case (sizing + costing) by mid-October.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1705')?'done':''}" data-csm="varun" id="action-1705">
      <div class="action-checkbox ${doneActions.has('1705')?'checked':''}" onclick="toggleAction('1705')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; MongoDB &mdash; product list analysis Wed/Thu + multi-year deal exploration</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Will Bracken &middot; Varun to complete product-list + account-matching analysis for credit estimations by Wed/Thu + prepare proposals for one-year OR multi-year deal + grant read-only platform access if requested. Will to investigate MongoDB openness to multi-year deals + potential credit adjustments by tomorrow + confirm final requirements.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1706')?'done':''}" data-csm="varun" id="action-1706">
      <div class="action-checkbox ${doneActions.has('1706')?'checked':''}" onclick="toggleAction('1706')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Iron Mountain &mdash; renewal scoping analysis + Wed Sept 23 follow-up</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Julian Rojas + KP Pindle + Juan Camilo Carreno &middot; Juan to share table w/ extra data sets for testing + market-sizing tab by tomorrow. Julian + KP + Varun to analyze account list + filters + prepare pricing early next week. Julian to send email to Peter re Oct alignment + send TR docs to Kimberly + Juan + schedule follow-up Wed Sept 23 3 PM ET + send MSA + security docs. KP to send analyzed list of 158 products. Juan Camilo to discuss internally re extending contract until December.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1707')?'done':''}" data-csm="riley" id="action-1707">
      <div class="action-checkbox ${doneActions.has('1707')?'checked':''}" onclick="toggleAction('1707')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAP Concur &mdash; October renewal start + Nov 10 Buyer&rsquo;s Choice announcement + December OOO planning</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers + Stephanie Mair + Cole Arutian + Mardigan Moffat &middot; Stephanie to (a) sync w/ Kyle + Aiden for initial lead-gen feedback ASAP, (b) confirm buyer-intent lead campaigns inclusion in flat renewal w/ Cole via email, (c) start procurement post-SOW, (d) invite Kyle to next sync. Riley to ask Scott for lead metrics presentation + inform Scott about report + Martigan about kickstarting flat renewal. Cole to share SOW around October. Both parties have December OOO windows &mdash; expedite renewal cadence.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}




// ============================================================
// Thursday September 24, 2026
// ============================================================

function dayData_2026_09_24() {
  return {
    calls: [
      { ts: 'Sep 24 &middot; 3:00 AM', csm: 'varun', account: `IFS`,
        note: `HGI + IFS Bi-Weekly Connect. Varun confirmed via SFDC transcript speaker detection. Renewal - Intent + FAI + V2 Migration 2026. Short 17m sync.`,
        mins: 17, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `IFS bi-weekly connect. Varun confirmed via SFDC transcript speaker detection. Renewal - IFS - Intent & FAI and V2 Migration 2026. Standard cadence. Second longer IFS quarterly sync at 8 AM PT was CSM-owned but had no synced transcript.`, source: 'sfdc' },

      { ts: 'Sep 24 &middot; 6:00 AM', csm: 'nick', account: `Intuit`,
        note: `Intuit platform walkthrough w/ Ashutosh Singh. New user exploring HG capabilities for lead gen + sales enablement. Data enrichment + account intelligence + Sales Copilot demo. Ashutosh to test use cases (inbound team + new customer acquisition) by next week.`,
        mins: 36, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Intuit platform walkthrough. Ashutosh Singh (new to platform) exploring HG capabilities for lead gen + sales enablement. Nick provided comprehensive overview: account-level intelligence + technographic data enrichment + Sales Copilot in Salesforce for account briefs + contact info. Data access via BigQuery integration + APIs for backend flexibility beyond UI. Platform allows customization of models + scoring + adjusting predefined weights + incorporating additional data sources. Ashutosh drew parallels w/ Cognism + ZoomInfo experience. Next: Ashutosh to explore platform (model building + Sales Copilot) EoD today + test use cases for inbound team + new customer acquisition by end of next week + reach out to Nick w/ questions tomorrow/Monday + connect w/ Rachel (manager) to position piloting opportunities. Nick to provide support + answer follow-up questions. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 24 &middot; 6:45 AM', csm: 'andy', account: `SAS Institute Inc.`,
        note: `SAS + HG MCP scoring sync w/ Jesper Bank Jorgensen + Mike Turner + Augie Buettner + Chlo&eacute; Portier. Mike troubleshooting API integration issues (payload + domain call changes). HT data query tool recommended for intent topic querying. Business case for system modernization being built.`,
        mins: 16, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `SAS + HG MCP scoring sync. Mike troubleshooting API integration issues &mdash; changes in API payload + domain calls impacting ability to score data. Chloe clarified distinction between company intent tool + HT data query tool; advising HT data query for comprehensive intent topic querying while v2 developed. Team developing + demonstrating new features to support business case for system modernization &mdash; need buy-in from sales managers + sellers. Critical need to ensure proposed modernization works effectively to gain team buy-in; formal approval eventually from executive leadership. Next: Mike to troubleshoot API calls + payload changes. Mike + Andy + Chloe to sync tomorrow morning on API issues + potential solutions. Mike to incorporate additional IDs from Andy into API testing. Chloe to send v1 + v2 intent tool documentation ASAP. Team to demonstrate built features to leadership + gather feedback next week. Jesper + Mike to continue building modernization support case. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 24 &middot; 7:30 AM', csm: 'pam', account: `Cisco (TR Recurring)`,
        note: `Cisco TR recurring w/ Ross Marchant + Mellissa Jensen + Mardigan Moffat. UCS profile consolidation (2&rarr;1). New tagging strategy for granular review categorization. Widget reinstitution + baseline metrics capture. Review-refresh campaign planning.`,
        mins: 26, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Cisco TR recurring. UCS product profiles consolidation: merge 2 existing profiles into single comprehensive profile to simplify product representation + user experience. New granular tagging strategy for reviews: better categorization for quote retrieval + product info (marketing campaigns + sales support). Cleanup of existing review tags (remove outdated + irrelevant + align w/ current 13 product offerings). Widget reinstitution in flight + baseline metric capture before re-launch to measure engagement + content performance impact. Review-refresh campaign planned targeting specific themes + product categories. Next: Pam to (a) combine UCS profiles + switch Intersight for UCS + set up UCS in geo monitoring ASAP, (b) help team w/ tag cleanup after Ross's first pass, (c) send custom review-questions questionnaire ASAP, (d) review custom questions w/ Ross + potentially PMMs, (e) set up call w/ data team + relevant people re crawler data + citations + mentions, (f) double-check Bing clicks reporting + align w/ Ross's fiscal quarters, (g) provide quarter-end dates by Nov 2 report, (h) capture widget baseline stats before go-live. Ross to (i) first-pass tag cleanup (esp. Webex), (ii) fill out custom-questions questionnaire (~10 min per product) before Feb event, (iii) identify top 3 priority products for geo visibility + measurement. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 24 &middot; 7:30 AM', csm: 'varun', account: `Autodesk Inc`,
        note: `Data Feed Clarifications + Use Cases Activation w/ Ameya Kambli + Aleksandra Sadowska + Adrian Escobar + Rishabh Wadhwa. Spend data: absolute vs relative + parent hierarchy (DP/CP/GHQ). Projected spend ~90% accuracy. SolidWorks competitor analysis + whitespace prospecting.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Autodesk data-feed clarifications + use-cases activation session. Distinction between absolute spend (includes subsidiaries) + relative spend (excludes subsidiaries) crucial for accurate analysis. Spend data = forward-looking projection influenced by revenue + company size + tech used &mdash; component of prioritization vs sole ranking factor. Three parent IDs: domestic (country level) + corporate (aggregates DPs) + group HQ (ultimate global head). Data grain at HGID (child) level; sum child-level for aggregated parent-level spend if not directly provided. Projected spend models data-driven + demonstrated reliability ~90% accuracy (Fortune 100 territory allocation + time calculation). Next: Rishabh to (a) run query showing count of corporate parents + absolute/relative spend in delivered dataset today, (b) provide sample columns to analyze for SolidWorks competitor + associated opportunity spend today, (c) connect w/ data science team for spend model inputs + accuracy overview later. Varun to (i) share spend model calculations + accuracy doc, (ii) share updated draft of spend data incl. SMB + definitions, (iii) schedule follow-up next week for granular details. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 24 &middot; 8:30 AM', csm: 'divyam', account: `Lumen Technologies`,
        note: `Weekly Sync w/ Nathan Der + Julie Chalk + Max Shaw + Julian Rojas. Fortune 500/Forbes 2000 data available via RGI but needs platform feature integration (no timeline). 12 new products tracking (AT&T VPN + Vodafone MPLS live; 9 need URL re-verify). Nile scoring model on hold (DIA&rarr;Intelligent Internet phase-out).`,
        mins: 30, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Lumen weekly sync. Fortune 500 + Forbes 2000 data available via HG Insights RGI platform but specific feature needed for direct platform integration &mdash; no exact timeline yet. Client prefers waiting for actual feature vs workaround (need to upload own lists for matching + analysis). Tracking for 12 new products ongoing: AT&T VPN + Vodafone MPLS in production; URLs for other 9 need re-verification for accurate tracking. Separate ICPs needed for 3 partner lookalike lists (Transit OT3 + Lightyear) &mdash; provided as Excel + safe searches. Nile scoring model on hold due to DIA content dependency (being phased out in favor of "Intelligent Internet") &mdash; requires rework. Next: Divyam to (a) provide partner lookalike ICPs + safe searches via email by tomorrow, (b) chase product team on Fortune 500 feature update, (c) provide event registration link for Oct 6 event, (d) shift cadence meeting by 30 min + find new slot for 60-min meeting. Nathan to (i) double-check + send HG product URLs for untrackable products ASAP, (ii) follow up on billing inquiry if no response by Tuesday (Rika contact). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 24 &middot; 9:30 AM', csm: 'atisha', account: `Advanced Micro Devices, Inc.`,
        note: `AMD Bi-weekly Touchpoint w/ David Rockwell + Tyler Neubauer + Charles Hawkins + Ravi Sharma. New delivery mechanism + consumption-based tokenized pricing model. "Sales AI Hub" consolidating multiple AI tools. Baseline consumption estimate + follow-up working sessions to build sample use cases.`,
        mins: 31, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `AMD bi-weekly touchpoint. Transitioning to new delivery mechanism + consumption-based tokenized pricing model. Data + AI capabilities integrating into "Sales AI Hub" &mdash; unified interface consolidating multiple AI tools + chatbots; integrates w/ Salesforce + market intelligence. Complexity of channel sales + OEM relationships adds layers to deal management + revenue tracking. New AI-driven context signals being developed to proactively identify opportunities + risks (churn) + usage patterns within accounts. Next: Charles to (a) provide baseline estimate of moving to new platform (example use cases + baseline consumption) by next week's meeting, (b) schedule follow-up working sessions w/ relevant functional groups (e.g. Lenovo sales teams) to build sample use cases + validate POV. David to think about applying new data signals + context to AMD's sales motion + identify teams for follow-up by next meeting. Atisha to invite relevant AMD team members (BMO + Sales Ops) to overview session on new platform for Oct 6 conference or follow-up. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 24 &middot; 10:00 AM', csm: 'riley', account: `UKG`,
        note: `TR Monthly Success Call (short 6m). Riley confirmed via SFDC transcript speaker detection.`,
        mins: 6, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short UKG TR monthly success call. Riley confirmed via SFDC transcript speaker detection. Brief touchpoint &mdash; minimal content in 6m exchange.`, source: 'sfdc' },

      { ts: 'Sep 24 &middot; 11:30 AM', csm: 'divyam', account: `Cotality (CoreLogic)`,
        note: `TR Product Categories Query Meeting (Contd.) w/ Todd Detmold. Prioritizing new TR software categories: Insurance Suites + Data Management + Data Integration for competitive parity vs G2. Property Data identified as significant market gap.`,
        mins: 9, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Cotality TR product categories query meeting (continued). Identifying + prioritizing new TR categories for competitive differentiation vs G2. High-priority: Insurance Suites + Data Management + Data Integration. AI Governance + Data Governance + Privacy Management deemed more "watchdog" &mdash; less aligned w/ TR current offerings. Significant market gap: "Property Data" (real estate + property management services software) &mdash; currently underserved. Next: Todd to (a) evaluate addition of Insurance Suites + Data Management + Data Integration categories by end of week, (b) investigate feasibility of creating new "Property Data" category by end of week, (c) send email update on progress. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 24 &middot; 1:00 PM', csm: 'riley', account: `Zoom (Shani intro)`,
        note: `TrustRadius: Connect w/ Shani@Zoom (26m). Riley confirmed via SFDC transcript speaker detection. Introduction call w/ new Zoom contact.`,
        mins: 26, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Zoom introduction call w/ Shani. Riley confirmed via SFDC transcript speaker detection. Initial connection + relationship-building call.`, source: 'sfdc' },
    ],
    pulses: [
      { csm: 'varun', account: `IFS`, health: 'Healthy',
        note: `Bi-Weekly Connect &mdash; short 17m sync. Renewal - Intent + FAI + V2 Migration 2026. Second IFS quarterly sync 8 AM PT had no transcript.` },
      { csm: 'nick', account: `Intuit`, health: 'Healthy',
        note: `Platform walkthrough &mdash; Ashutosh Singh exploring HG capabilities for lead gen + sales enablement. Sales Copilot + BigQuery integration + model customization discussed. Testing use cases next week.` },
      { csm: 'andy', account: `SAS Institute Inc.`, health: 'Healthy',
        note: `MCP scoring sync &mdash; Mike troubleshooting API integration issues. HT data query tool recommended for intent topic querying. Business case for system modernization being built.` },
      { csm: 'pam', account: `Cisco (TR Recurring)`, health: 'Healthy',
        note: `TR Recurring &mdash; UCS profile consolidation (2&rarr;1). New tagging strategy for granular review categorization. Widget reinstitution + baseline metrics. Review-refresh campaign.` },
      { csm: 'varun', account: `Autodesk Inc`, health: 'Healthy',
        note: `Data Feed Clarifications &mdash; spend data absolute vs relative + DP/CP/GHQ hierarchy. Projected spend ~90% accuracy. SolidWorks competitor analysis + whitespace prospecting.` },
      { csm: 'divyam', account: `Lumen Technologies`, health: 'Healthy',
        note: `Weekly Sync &mdash; Fortune 500/Forbes 2000 platform feature integration pending. 12 new products tracking. Nile scoring model on hold (DIA&rarr;Intelligent Internet phase-out).` },
      { csm: 'atisha', account: `Advanced Micro Devices, Inc.`, health: 'Healthy',
        note: `Bi-weekly Touchpoint &mdash; new delivery mechanism + consumption-based tokenized pricing. "Sales AI Hub" consolidating AI tools. Baseline consumption estimate + working sessions.` },
      { csm: 'riley', account: `UKG`, health: 'Healthy',
        note: `TR Monthly Success Call (short 6m). Confirmed via SFDC transcript speaker detection.` },
      { csm: 'divyam', account: `Cotality (CoreLogic)`, health: 'Healthy',
        note: `TR Product Categories &mdash; prioritizing Insurance Suites + Data Management + Data Integration for competitive parity. Property Data identified as significant market gap.` },
      { csm: 'riley', account: `Zoom (Shani intro)`, health: 'Healthy',
        note: `TrustRadius intro call w/ new Zoom contact Shani. Confirmed via SFDC transcript speaker detection. Initial connection.` },
    ],
  };
}

function dayMeta_2026_09_24() {
  return {
    pills: [
      ['dot-teal',   '10 Calls'],
      ['dot-amber',  '3 Expansion'],
      ['dot-green',  '10 Vitally Pulses'],
      ['dot-grey',   'Thu Sep 24 &middot; 109 scanned'],
    ],
    tabs: ['Overview', 'Calls (10)', 'Pulses (10)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_24() {
  return `<div class="section-label">Team Activity &mdash; Thursday September 24, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Thursday Sep 24 &mdash; 109 recordings scanned</strong> via SFDC SOQL &middot; <strong>10 confirmed calls</strong> across 8 CSMs (all active) &middot; 0 concerning &middot; 3 expansion signals &middot; SFDC confirmed 4; Weflow fallback added 6 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>3 EXPANSION:</strong> Intuit (Ashutosh Singh platform walkthrough &mdash; new user exploring HG for lead gen + Sales Copilot) &middot; Autodesk (data feed clarifications + spend data + SolidWorks competitor analysis + whitespace prospecting) &middot; AMD (new delivery mechanism + Sales AI Hub + consumption-based tokenized pricing)
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
        <div><div class="metric-num m-grey">32m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">UKG (TR monthly &mdash; short) &middot; Zoom Shani intro (TR contact intro)</div>
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
        <div><div class="metric-num m-grey">47m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">IFS Bi-Weekly (renewal cadence) &middot; Autodesk (&#x1F4C8; data feed clarifications + spend data + SolidWorks competitor analysis)</div>
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
        <div><div class="metric-num m-grey">39m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lumen (Fortune 500/Forbes 2000 platform feature integration + Nile scoring model on hold) &middot; Cotality TR product categories (Insurance/Data/Property Data gap)</div>
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
        <div><div class="metric-num m-grey">36m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Intuit platform walkthrough (&#x1F4C8; Ashutosh Singh new user exploring HG for lead gen + Sales Copilot)</div>
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
        <div><div class="metric-num m-grey">16m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAS MCP scoring sync (Mike API integration issues + business case for modernization)</div>
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
        <div><div class="metric-num m-grey">26m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Cisco TR Recurring (UCS profile consolidation + tagging strategy + widget reinstitution)</div>
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
        <div><div class="metric-num m-grey">31m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">AMD Bi-weekly (&#x1F4C8; new delivery mechanism + Sales AI Hub + consumption-based pricing)</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Rani speaker in SFDC transcripts; no Weflow-participant hits on any Sept 24 recording.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_24() {
  return `<div class="section-label">Confirmed Calls &mdash; Thursday September 24, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>3 EXPANSION:</strong> Intuit (Ashutosh platform walkthrough) &middot; Autodesk (data feed clarifications + SolidWorks whitespace) &middot; AMD (Sales AI Hub + consumption-based pricing)
  </div>`;
}

function dayPulsesHTML_2026_09_24() {
  const cards = [
    { csm:'varun', health:'Healthy', account:`IFS`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 24 &middot; Healthy`,
      excerpt:`IFS Bi-Weekly Connect &mdash; short 17m sync. Renewal - Intent + FAI + V2 Migration 2026. Standard cadence. Second longer IFS quarterly sync at 8 AM PT was CSM-owned but had no synced transcript.` },
    { csm:'nick', health:'Healthy', account:`Intuit`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 24 &middot; Healthy`,
      excerpt:`Platform walkthrough w/ Ashutosh Singh (new user). HG account-level intelligence + technographic data enrichment + Sales Copilot demo. BigQuery integration + model customization. Testing inbound + new customer acquisition use cases next week.` },
    { csm:'andy', health:'Healthy', account:`SAS Institute Inc.`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 24 &middot; Healthy`,
      excerpt:`SAS + HG MCP scoring sync &mdash; Mike troubleshooting API integration (payload + domain call changes). HT data query tool recommended. Business case for system modernization being built. Mike + Andy + Chloe sync tomorrow AM.` },
    { csm:'pam', health:'Healthy', account:`Cisco (TR Recurring)`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 24 &middot; Healthy`,
      excerpt:`Cisco TR Recurring &mdash; UCS profile consolidation (2&rarr;1). New tagging strategy for granular review categorization. Widget reinstitution + baseline metrics before go-live. Review-refresh campaign planning + custom questions questionnaire.` },
    { csm:'varun', health:'Healthy', account:`Autodesk Inc`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 24 &middot; Healthy`,
      excerpt:`Data Feed Clarifications + Use Cases Activation. Spend data: absolute vs relative + DP/CP/GHQ hierarchy. Projected spend ~90% accuracy. SolidWorks competitor analysis + whitespace prospecting.` },
    { csm:'divyam', health:'Healthy', account:`Lumen Technologies`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 24 &middot; Healthy`,
      excerpt:`Weekly Sync &mdash; Fortune 500/Forbes 2000 data available via RGI but platform feature integration pending. 12 new products tracking (AT&T VPN + Vodafone MPLS live; 9 need URL re-verify). Nile scoring model on hold (DIA&rarr;Intelligent Internet phase-out).` },
    { csm:'atisha', health:'Healthy', account:`Advanced Micro Devices, Inc.`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 24 &middot; Healthy`,
      excerpt:`AMD Bi-weekly Touchpoint &mdash; new delivery mechanism + consumption-based tokenized pricing. "Sales AI Hub" consolidating multiple AI tools. Baseline consumption estimate + follow-up working sessions to build sample use cases.` },
    { csm:'riley', health:'Healthy', account:`UKG`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 24 &middot; Healthy`,
      excerpt:`TR Monthly Success Call (short 6m). Confirmed via SFDC transcript speaker detection.` },
    { csm:'divyam', health:'Healthy', account:`Cotality (CoreLogic)`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 24 &middot; Healthy`,
      excerpt:`TR Product Categories Query Meeting (Contd.) &mdash; prioritizing Insurance Suites + Data Management + Data Integration for competitive parity vs G2. Property Data identified as significant market gap.` },
    { csm:'riley', health:'Healthy', account:`Zoom (Shani intro)`, opp:`Vitally Pulse &mdash; Sep 24 Call`,
      arr:`Enterprise &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 24 &middot; Healthy`,
      excerpt:`TrustRadius intro call w/ new Zoom contact Shani (26m). Riley confirmed via SFDC transcript speaker detection. Initial connection + relationship-building.` },
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

function dayActionsHTML_2026_09_24() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('2401')?'done':''}" data-csm="nick" id="action-2401">
      <div class="action-checkbox ${doneActions.has('2401')?'checked':''}" onclick="toggleAction('2401')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Intuit &mdash; Ashutosh use-case testing + piloting positioning w/ manager Rachel</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson &middot; Ashutosh Singh to explore platform (model building + Sales Copilot) EoD today + test use cases for inbound team + new customer acquisition by end of next week + reach out to Nick w/ questions tomorrow/Monday + connect w/ Rachel (manager) to position piloting opportunities. Nick to provide support + answer follow-up questions.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2402')?'done':''}" data-csm="varun" id="action-2402">
      <div class="action-checkbox ${doneActions.has('2402')?'checked':''}" onclick="toggleAction('2402')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Autodesk &mdash; SolidWorks competitor analysis + spend data doc + follow-up next week</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Rishabh Wadhwa + Adrian Escobar &middot; Rishabh to (a) run query showing count of corporate parents + absolute/relative spend today, (b) provide sample columns for SolidWorks competitor + opportunity spend today, (c) connect w/ data science team for spend model inputs + accuracy overview. Varun to share spend model calculations + accuracy doc + updated spend data draft incl. SMB + definitions + schedule follow-up next week for granular details.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2403')?'done':''}" data-csm="atisha" id="action-2403">
      <div class="action-checkbox ${doneActions.has('2403')?'checked':''}" onclick="toggleAction('2403')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; AMD &mdash; new platform baseline consumption estimate + Oct 6 conference session</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Atisha Waghela + Charles Hawkins + David Rockwell &middot; Charles to provide baseline estimate of moving to new platform (example use cases + baseline consumption) by next week's meeting + schedule follow-up working sessions w/ relevant functional groups. David to think about applying new data signals + context to AMD's sales motion + identify teams for follow-up by next meeting. Atisha to invite AMD BMO + Sales Ops team members to overview session for Oct 6 conference or follow-up.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2404')?'done':''}" data-csm="pam" id="action-2404">
      <div class="action-checkbox ${doneActions.has('2404')?'checked':''}" onclick="toggleAction('2404')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Cisco &mdash; UCS profile consolidation + tag cleanup + widget baseline before go-live</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Pam Huck + Ross Marchant + Mardigan Moffat &middot; Pam to (a) combine UCS profiles + switch Intersight for UCS + set up UCS in geo monitoring ASAP, (b) help team w/ tag cleanup, (c) send custom review-questions questionnaire ASAP, (d) set up call w/ data team + relevant people re crawler data + citations + mentions, (e) double-check Bing clicks reporting + align w/ Ross's fiscal quarters, (f) capture widget baseline stats before go-live. Ross to (i) first-pass tag cleanup (esp. Webex), (ii) fill custom-questions questionnaire before Feb event, (iii) identify top 3 priority products for geo visibility.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2405')?'done':''}" data-csm="divyam" id="action-2405">
      <div class="action-checkbox ${doneActions.has('2405')?'checked':''}" onclick="toggleAction('2405')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Lumen &mdash; partner lookalike ICPs + Fortune 500 feature chase + billing follow-up</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Nathan Der &middot; Divyam to (a) provide partner lookalike ICPs + safe searches via email by tomorrow, (b) chase product team on Fortune 500 feature update, (c) provide event registration link for Oct 6 event, (d) shift cadence meeting by 30 min. Nathan to (i) double-check + send HG product URLs for untrackable products ASAP, (ii) follow up on billing inquiry (Rika contact) if no response by Tuesday.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2406')?'done':''}" data-csm="andy" id="action-2406">
      <div class="action-checkbox ${doneActions.has('2406')?'checked':''}" onclick="toggleAction('2406')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAS &mdash; MCP API troubleshooting + leadership modernization case</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim + Augie Buettner + Chloe Portier + Jesper + Mike Turner &middot; Mike to troubleshoot API calls + payload changes. Mike + Andy + Chloe to sync tomorrow morning on API issues + potential solutions. Mike to incorporate additional IDs from Andy into API testing. Chloe to send v1 + v2 intent tool documentation ASAP. Team to demonstrate built features to leadership + gather feedback next week. Jesper + Mike to continue building modernization support case.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2407')?'done':''}" data-csm="divyam" id="action-2407">
      <div class="action-checkbox ${doneActions.has('2407')?'checked':''}" onclick="toggleAction('2407')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; Cotality &mdash; TR category feasibility evaluation by end of week</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Todd Detmold &middot; Todd to (a) evaluate addition of Insurance Suites + Data Management + Data Integration categories by end of week, (b) investigate feasibility of creating new "Property Data" category by end of week, (c) send email update on progress by end of week.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_25() {
  return {
    calls: [
      { ts: 'Sep 25 &middot; 2:00 AM', csm: 'andy', account: `SAS Institute Inc.`,
        note: `SAS Sync w/ Mike Turner + Chlo&eacute; Portier. Sales territory planning tool development &mdash; API integrations, live score + revenue potential score. Bug fixes in intent + evaluation scoring in progress. Live test across 2,400 accounts planned post-lunch.`,
        mins: 21, health: 'Healthy',
        nature: 'Recurring', initiator: 'Customer', purpose: 'Check-in',
        detail: `SAS territory planning tool sync. Mike presented updates on new sales tool integrating APIs and delivering 'live scores' + 'revenue potential scores' for 2027 territory planning. Progress on bug fixes for API versions + scoring calculations; some intent + evaluation scoring bugs still to debug. 'Planning score' (HDI scores + revenue potential) will help sales managers allocate accounts + territories. Tiering system based on revenue potential for decisioning products simplifies prioritization. Next: Mike to debug remaining scoring issues + run live test across all 2,400 accounts post-lunch + share updated scores for team review. Andy + Mike to discuss significantly different or odd scores if needed. Mike to implement MCP integration for research tab (future). Jesper to review scores + confirm comfort level with system output. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 25 &middot; 2:00 AM', csm: 'nick', account: `NTT Data Corporation`,
        note: `NTT Data annual check-in w/ Naveen Mittal. D&amp;B DUNS not activated on this license (other-team parity); Nick to request activation. Platform data growth: ~68M companies now tracked. Confirmed install-base downloads + contact subscription included &mdash; no extra credits.`,
        mins: 30, health: 'Concerning',
        nature: 'Recurring', initiator: 'Customer', purpose: 'Mixed',
        detail: `NTT Data annual check-in. Naveen surfaced three items: (1) D&amp;B DUNS coverage &mdash; not currently activated on Naveen's license (aligned with other-team license), Nick to ask internal team about switching on (would require contract change); coverage limited to top ~700k accounts by size. (2) Platform changes over past year &mdash; growing dataset (now ~68M companies tracked); Naveen still on v2 platform (older, more cost-effective, same data as new platform). (3) Confirmed all contacts visible in the platform are part of subscription + install-base downloads with country filters don't consume extra credits. Nick offered to send install-base report by email so Naveen doesn't have to trigger downloads. Account pulse Poor; steady engagement continues but no expansion motion. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 25 &middot; 6:30 AM', csm: 'pam', account: `Epicor Software Corporation`,
        note: `Epicor account brief creation w/ Mark Roussin + Taylor Krumm + KP. ICP refined: $40M-$500M revenue range for upper mid-market manufacturing. Walmart pop-ins flagged. LLMs (ChatGPT connecting Outreach + SFDC) blocked by legal.`,
        mins: 12, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Epicor account brief creation. KP running research to build SDR account briefs; team honing ICP for manufacturing verticals. Taylor confirmed manufacturing territories are revenue-based (not employee-based): upper mid-market = $40M-$500M annual revenue as the sweet spot; anything above OK too. Walmart-scale accounts popping in flagged for filtering. Reps split ~60/40 between Salesforce (vetting + reports + territory follow-up) and Outreach (sequences + calls + emails). LLM connectivity (ChatGPT connecting both) blocked by internal legal concerns &mdash; hoping for green-light in ~5 days. Next: KP to iterate account brief with revenue-based ICP filter, then share back with Epicor team. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 25 &middot; 6:30 AM', csm: 'riley', account: `TeamViewer (TR)`,
        note: `TeamViewer TR geo coverage + review data analysis w/ Alvaro Padilla + Debottama Mukherjee + Wes Lawrence. Refining review questions for pricing nuance. Incentivized ($25) review campaign launching mid-October targeting 12-24 month volume.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `TeamViewer TR review-data + geo-engine analysis. Reviewed how TeamViewer's existing review content and profile feed AI crawlers &mdash; identified gaps in pricing transparency and branded vs unbranded content optimization. Pricing is a gap: simplistic answers ("very pricey", "half the cost") don't add nuance; refresh campaigns vs sales-quote redirect discussed given use-case-dependent pricing. Incentivized review campaign planned ($25/review, 12-24 month window) to boost volume + specificity. Custom prompt tracking a future capability &mdash; contingent on TeamViewer corporate vision alignment. Next: Debottama to share prompt-generation workflow + best practices for testimonials/case studies + create incentivized-review link. Alvaro to sync w/ SEO team on geo dashboard + brand content strategy + launch incentivized campaign mid-October. Expansion opp for AI Agents + Platform Outbound Scoring + Contact Email Deliverability still open. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 25 &middot; 8:00 AM', csm: 'nick', account: `Intuit`,
        note: `Intuit / Mailchimp BlackBaud whitespace w/ Eric McKnight + Julian Rojas. BlackBaud list export performing well; ~12,972 contacts additional export = ~12K credits. Klaviyo + Constant Contact competitor analysis. Contract + credits expire Nov 30.`,
        mins: 25, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: `Intuit/Mailchimp BlackBaud whitespace expansion sync. Existing BlackBaud list export outperforming other campaigns (good traction + conversion) &mdash; opportunity to export additional whitespace accounts. Estimated cost for ~12,972 contacts (phone + email) is ~12,000 credits. Competitor analysis is next-phase focus with Klaviyo + Constant Contact identified as key BlackBaud alternatives. Contract + remaining credits expire Nov 30; renewal decision routes through sales ops. Nick joining as coverage &mdash; Intuit's assigned CSM is Atisha Waghela; Intuit pulse Poor. Next: Eric to provide competitor list + ping Rachel re renewal budget + run payoff analysis on BlackBaud performance. Nick to pull contacts pre-Oct 1 meeting. Julian to analyze competitor list + provide credit-deduction estimate + export lists. Follow-up meeting Oct 1. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 25 &middot; 9:00 AM', csm: 'atisha', account: `Apple Inc. (Bi-weekly)`,
        note: `Apple bi-weekly sync w/ Roy + Adrian Escobar. Mac Mini + Mac Studio market analysis using AI maturity + time-series data. New team member Vedica onboarding to Edgy platform before virtual event. Cloud + AI maturity brief in flight.`,
        mins: 27, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Apple bi-weekly touchpoint focused on AI-driven data analysis for sales + market insights. Discussion on integrating external HG data into Apple's internal AI platforms (data security + licensing considerations). Strong Apple interest in Mac Mini + Mac Studio market opportunities via AI scoring + intent data; historical time-series data + AI maturity metrics valued for engagement timing + account targeting. New AI spend + maturity data points introduced. Next: Atisha to (a) provide brief for 5-10 accounts using historical time-series + AI maturity for Mac Mini targeting by next week, (b) set up read-only license for Vedica before her demo, (c) work with Roy on combined cloud + AI maturity brief for targeted accounts (ongoing). Roy to (i) email Vedica cc: Atisha + Adrian to coordinate demo before virtual event, (ii) explore Mac Studio market potential (immediate Q4 need). Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 25 &middot; 9:00 AM', csm: 'divyam', account: `Snowflake Inc.`,
        note: `Snowflake / Cloud Dynamics renewal 2028 w/ Alpesh Jain + Ziad Amira + Gavin Padden. China PaaS TAM analysis: CSP share, HQ segmentation (global MNCs, Chinese MNCs, domestic, government). Snowflake offering RGIP platform access temporarily in exchange for data science team introduction.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: `Snowflake renewal 2028 discussion. Alpesh (Snowflake) confirmed Snowflake will grant temporary access to their RGIP platform to allow custom TAM analysis, in exchange for introduction to Snowflake's data science team (to explore how HG data can improve their APS/FPS account prioritization). Alpesh's specific ask: China platform-as-a-service spend TAM by CSP share, further split by company type: global MNCs in China vs Chinese MNCs with international presence vs China-domestic vs government/state-owned. Second cut: spend by Chinese MNCs outside China (using HQ + entity geography). Gavin confirmed HG can deliver via relative-spend fabric using hierarchy assignments. Discussion of overall PaaS market view first (dominant vendor stack-rank) before granular account-level analysis. Renewal is 2028; this expansion touchpoint firms up strategic value ahead of renewal cycle. Next: Gavin to send screenshot of proposed TAM view. Alpesh to make data science team introduction. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 25 &middot; 11:00 AM', csm: 'atisha', account: `Apple Inc. (Weekly)`,
        note: `Apple weekly sync w/ Vivek Sundarbabu (Product Manager, Core Data Management, Worldwide Sales API) + Adrian Escobar. Platform walkthrough for new Apple stakeholder &mdash; IT spend + hierarchy mapping + install data sources + monthly S3 feed. Renewal - Apple - Market Intelligence 2027 opp.`,
        mins: 34, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Apple weekly syncup &mdash; expansion touchpoint bringing in Vivek Sundarbabu (Product Manager, Core Data Management, Worldwide Sales API team). Vivek's team consolidating clean customer list across multiple systems; sees HG Insights as natural expansion for consolidation + enrichment + opportunity generation. Atisha + Adrian walked through market intelligence + opportunity generator + granular IT spend data (categories: communication, hardware, services, software) + hierarchy mapping. Explained install-tech source methodology (job listings + resumes + publicly available info + verification process). Confirmed Apple already receives monthly S3 data feed w/ install + spend + firmographic data. Renewal - Apple - Market Intelligence 2027 opp anchoring. Next: Vivek to review activation email + explore platform (spend + install focus). Atisha to share data + documentation + capability links. Atisha + Bunny to provision Vivek with S3 data feed access. Follow-up sync next week. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'andy', account: `SAS Institute Inc.`, health: 'Healthy',
        note: `Territory planning tool dev sync &mdash; API integrations, live score + revenue potential score. Live test across 2,400 accounts + Mike incorporating additional IDs from Andy into API testing.` },
      { csm: 'nick', account: `NTT Data Corporation`, health: 'Concerning',
        note: `Annual check-in &mdash; DUNS not activated on this license (aligned to other-team parity); Nick chasing activation. ~68M companies tracked. Install-base downloads + contacts confirmed included. Pulse Poor.` },
      { csm: 'pam', account: `Epicor Software Corporation`, health: 'Healthy',
        note: `Account brief creation &mdash; ICP refined to $40M-$500M revenue manufacturing. Walmart pop-ins to filter. LLM connectivity blocked by legal (~5 days out).` },
      { csm: 'riley', account: `TeamViewer (TR)`, health: 'Healthy',
        note: `TR review data + geo coverage analysis &mdash; incentivized $25 review campaign launching mid-October. Custom prompt tracking future capability. Expansion opp AI Agents + Platform Outbound Scoring + Contact Email Deliverability open.` },
      { csm: 'nick', account: `Intuit`, health: 'Concerning',
        note: `Mailchimp BlackBaud whitespace &mdash; ~12,972 contact export = ~12K credits. Klaviyo + Constant Contact competitor analysis. Contract + credits expire Nov 30. Nick covering (Atisha is Intuit CSM). Pulse Poor.` },
      { csm: 'atisha', account: `Apple Inc. (Bi-weekly)`, health: 'Healthy',
        note: `Bi-weekly &mdash; Mac Mini + Mac Studio market analysis using AI maturity + time-series data. Vedica onboarding to Edgy before virtual event. Cloud + AI maturity brief in flight.` },
      { csm: 'divyam', account: `Snowflake Inc.`, health: 'Healthy',
        note: `Renewal 2028 &mdash; RGIP platform access in exchange for data science team intro. China PaaS TAM analysis by CSP share + HQ segmentation. Gavin sending screenshot of proposed view.` },
      { csm: 'atisha', account: `Apple Inc. (Weekly)`, health: 'Healthy',
        note: `Weekly &mdash; new stakeholder Vivek Sundarbabu (Core Data Management PM) onboarding. Platform walkthrough + monthly S3 feed access. Renewal - Apple - Market Intelligence 2027 opp anchoring.` },
    ],
  };
}

function dayMeta_2026_09_25() {
  return {
    pills: [
      ['dot-teal',   '8 Calls'],
      ['dot-amber',  '5 Expansion'],
      ['dot-red',    '2 Concerning'],
      ['dot-green',  '8 Vitally Pulses'],
      ['dot-grey',   'Fri Sep 25 &middot; 53 scanned'],
    ],
    tabs: ['Overview', 'Calls (8)', 'Pulses (8)', 'Action Items (6)']
  };
}

function dayOverviewHTML_2026_09_25() {
  return `<div class="section-label">Team Activity &mdash; Friday September 25, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Sep 25 &mdash; 53 recordings scanned</strong> via SFDC SOQL &middot; <strong>8 confirmed calls</strong> across 6 CSMs (Varun + Rani idle) &middot; 2 Concerning (NTT Data + Intuit pulses Poor) &middot; 5 expansion signals &middot; SFDC confirmed 3; Weflow fallback added 5 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Snowflake (China PaaS TAM + RGIP access + data science intro) &middot; TeamViewer TR (incentivized review campaign + custom prompt tracking) &middot; Intuit/Mailchimp (BlackBaud whitespace + Nov 30 renewal decision) &middot; Apple Bi-weekly (Mac Mini/Studio TAM w/ AI maturity + Vedica onboarding) &middot; Apple Weekly (new stakeholder Vivek Sundarbabu &mdash; Core Data Mgmt PM)
  </div>
  <div style="background:#2a1f1f;border:1px solid #b45309;border-left:3px solid #b45309;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>2 CONCERNING:</strong> NTT Data (pulse Poor &mdash; annual check-in surfaced DUNS license limitation, no expansion motion) &middot; Intuit (pulse Poor &mdash; Nick covering for Atisha on Mailchimp BlackBaud whitespace; Nov 30 contract expiry)
  </div>
  <div style="background:#1c2333;border:1px solid #7c3aed;border-left:3px solid #7c3aed;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#c4b5fd;">
    &#x1F91D; <strong>CROSS-COVERAGE:</strong> Nick Johnson covered Intuit (Atisha's account) for Mailchimp/BlackBaud whitespace expansion w/ Julian Rojas.
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
        <div><div class="metric-num m-grey">61m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Apple Bi-weekly (&#x1F4C8; Mac Mini/Studio TAM + Vedica onboarding) &middot; Apple Weekly (&#x1F4C8; new stakeholder Vivek &mdash; Core Data Mgmt PM)</div>
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
        <div><div class="metric-num m-grey">55m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">NTT Data annual check-in (&#x26A0;&#xFE0F; DUNS license limitation, pulse Poor) &middot; Intuit/Mailchimp (&#x1F4C8; BlackBaud whitespace + cross-coverage for Atisha, Nov 30 renewal)</div>
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
      <div class="csm-account-note">Snowflake renewal 2028 (&#x1F4C8; China PaaS TAM + RGIP access swap for data science team intro)</div>
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
        <div><div class="metric-num m-grey">21m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAS territory planning tool dev (live scores + revenue potential + 2,400-account test)</div>
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
      <div class="csm-account-note">TeamViewer TR (&#x1F4C8; incentivized $25 review campaign + custom prompt tracking)</div>
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
        <div><div class="metric-num m-grey">12m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Epicor account brief creation (manufacturing ICP $40M-$500M revenue)</div>
    </div>

    <div class="csm-card no-calls" data-csm="varun">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">VT</div><div><div class="csm-name">Varun Tiwari</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Varun speaker label in SFDC transcripts; no Weflow-participant hits on any Sept 25 recording.</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Rani speaker label in SFDC transcripts; no Weflow-participant hits on any Sept 25 recording.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_25() {
  return `<div class="section-label">Confirmed Calls &mdash; Friday September 25, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>5 EXPANSION:</strong> Snowflake (China PaaS TAM + RGIP swap) &middot; TeamViewer TR (incentivized reviews) &middot; Intuit/Mailchimp (BlackBaud whitespace + Nov 30 renewal) &middot; Apple Bi-weekly (Mac Mini/Studio TAM) &middot; Apple Weekly (new stakeholder Vivek Sundarbabu)
  </div>
  <div style="background:#2a1f1f;border:1px solid #b45309;border-left:3px solid #b45309;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>2 CONCERNING:</strong> NTT Data (pulse Poor) &middot; Intuit (pulse Poor &mdash; Nick covering for Atisha, Nov 30 contract expiry)
  </div>`;
}

function dayPulsesHTML_2026_09_25() {
  const cards = [
    { csm:'andy', health:'Healthy', account:`SAS Institute Inc.`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 25 &middot; Healthy`,
      excerpt:`SAS territory planning tool sync w/ Mike + Chlo&eacute;. API integrations + live score + revenue potential score. Live test across 2,400 accounts planned. Mike + Andy debugging intent + evaluation scoring bugs.` },
    { csm:'nick', health:'Concerning', account:`NTT Data Corporation`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`Strategic &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 25 &middot; Concerning`,
      excerpt:`Annual check-in &mdash; DUNS coverage not activated on this license (aligned to other-team parity). ~68M companies tracked. Install-base downloads + contacts confirmed included. Nick chasing DUNS activation. Pulse Poor; no expansion motion.` },
    { csm:'pam', health:'Healthy', account:`Epicor Software Corporation`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`Enterprise &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 25 &middot; Healthy`,
      excerpt:`Epicor account brief creation for SDR enablement. ICP refined: $40M-$500M revenue upper mid-market manufacturing. Walmart pop-ins to filter. LLM connectivity blocked by legal (~5 days out).` },
    { csm:'riley', health:'Healthy', account:`TeamViewer (TR)`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`TrustRadius &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 25 &middot; Healthy`,
      excerpt:`TeamViewer TR geo coverage + review data analysis. Incentivized $25 review campaign launching mid-October (12-24 month window). Refining pricing-review questions. Custom prompt tracking future capability. Expansion opp still open.` },
    { csm:'nick', health:'Concerning', account:`Intuit`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`Strategic &middot; Nick Johnson (cross-coverage for Atisha)`, csmlbl:`Nick Johnson`, change:`Sep 25 &middot; Concerning`,
      excerpt:`Mailchimp BlackBaud whitespace &mdash; ~12,972 contact export = ~12K credits. Klaviyo + Constant Contact competitor analysis. Contract + credits expire Nov 30 &mdash; renewal decision routes through sales ops. Pulse Poor.` },
    { csm:'atisha', health:'Healthy', account:`Apple Inc. (Bi-weekly)`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`Strategic &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 25 &middot; Healthy`,
      excerpt:`Apple bi-weekly &mdash; Mac Mini + Mac Studio market analysis using AI maturity + time-series data. Vedica onboarding to Edgy before virtual event. Cloud + AI maturity brief for targeted accounts.` },
    { csm:'divyam', health:'Healthy', account:`Snowflake Inc.`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`Strategic &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 25 &middot; Healthy`,
      excerpt:`Snowflake renewal 2028 &mdash; RGIP platform access swap for data science team intro. China PaaS TAM analysis by CSP share + HQ segmentation (global MNCs, Chinese MNCs, domestic, government). Gavin sending TAM view screenshot.` },
    { csm:'atisha', health:'Healthy', account:`Apple Inc. (Weekly)`, opp:`Vitally Pulse &mdash; Sep 25 Call`,
      arr:`Strategic &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 25 &middot; Healthy`,
      excerpt:`Apple weekly &mdash; new stakeholder Vivek Sundarbabu (Product Manager, Core Data Management, Worldwide Sales API) onboarding. Platform walkthrough: IT spend + hierarchy mapping + install sources + monthly S3 feed. Renewal - Apple - Market Intelligence 2027 opp anchoring.` },
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

function dayActionsHTML_2026_09_25() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('2501')?'done':''}" data-csm="divyam" id="action-2501">
      <div class="action-checkbox ${doneActions.has('2501')?'checked':''}" onclick="toggleAction('2501')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Snowflake &mdash; China PaaS TAM screenshot + data science team introduction</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Divyam Dewan + Gavin Padden + Alpesh Jain &middot; Gavin to send screenshot of proposed China PaaS TAM view (CSP share + HQ segmentation: global MNCs vs Chinese MNCs vs domestic vs government) + second cut for Chinese MNCs outside China. Alpesh to introduce HG to Snowflake's data science team to explore APS/FPS account prioritization improvements. Alpesh confirmed temporary RGIP platform access for custom analysis in exchange.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2502')?'done':''}" data-csm="atisha" id="action-2502">
      <div class="action-checkbox ${doneActions.has('2502')?'checked':''}" onclick="toggleAction('2502')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Apple &mdash; Vivek Sundarbabu onboarding + Mac Mini AI maturity brief + Vedica read-only license</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Atisha Waghela + Adrian Escobar &middot; Atisha to (a) share data + documentation + capability links w/ Vivek by email + provision S3 data feed access via Bunny, (b) provide brief for 5-10 accounts using historical time-series + AI maturity for Mac Mini targeting by next week, (c) set up read-only license for Vedica before her demo, (d) work with Roy on combined cloud + AI maturity brief. Vivek to review activation email + explore platform (spend + install focus).</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2503')?'done':''}" data-csm="nick" id="action-2503">
      <div class="action-checkbox ${doneActions.has('2503')?'checked':''}" onclick="toggleAction('2503')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Intuit &mdash; Mailchimp BlackBaud whitespace export + Nov 30 renewal decision (Oct 1 follow-up)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson (cross-coverage for Atisha) + Julian Rojas + Eric McKnight &middot; Nick to pull contacts for Eric before Oct 1 meeting. Julian to analyze competitor list (Klaviyo + Constant Contact) + provide credit-deduction estimate + export lists before Oct 1. Eric to provide competitor list + ping Rachel re renewal budget + run payoff analysis on BlackBaud performance. Follow-up Oct 1 to discuss use cases + credit utilization. Contract + credits expire Nov 30 &mdash; sales ops final call. Pulse Poor.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2504')?'done':''}" data-csm="riley" id="action-2504">
      <div class="action-checkbox ${doneActions.has('2504')?'checked':''}" onclick="toggleAction('2504')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; TeamViewer TR &mdash; incentivized $25 review campaign + SEO team engagement</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Riley Rogers + Debottama Mukherjee + Alvaro Padilla &middot; Debottama to share prompt-generation workflow + best practices for testimonials/case studies + create incentivized-review link for Alvaro's campaign. Alvaro to discuss w/ TeamViewer SEO team about geo dashboard + brand content strategy next week + launch incentivized review campaign mid-October + provide feedback on developing features. Explore custom prompt tracking if aligned with corporate vision.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2505')?'done':''}" data-csm="nick" id="action-2505">
      <div class="action-checkbox ${doneActions.has('2505')?'checked':''}" onclick="toggleAction('2505')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; NTT Data &mdash; DUNS activation request + install-base report by email</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson + Naveen Mittal &middot; Nick to (a) check w/ internal team about switching on D&amp;B DUNS on Naveen's license (requires contract change; coverage limited to ~700k top accounts), (b) send install-base report by email so Naveen avoids download friction. Pulse Poor; steady engagement continues but no expansion motion.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('2506')?'done':''}" data-csm="andy" id="action-2506">
      <div class="action-checkbox ${doneActions.has('2506')?'checked':''}" onclick="toggleAction('2506')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAS &mdash; live test across 2,400 accounts + intent + evaluation scoring debug</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim + Mike Turner + Chlo&eacute; Portier + Jesper Bank Jorgensen &middot; Mike to (a) continue debugging remaining intent + evaluation scoring bugs post-lunch, (b) run live test across all 2,400 accounts + share updated scores. Team to review scores for reasonableness. Andy + Mike to discuss significantly different or odd scores. Jesper to review scores + confirm comfort level. Mike to implement MCP integration for research tab (future).</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_04() {
  return {
    calls: [
      { ts: 'Sep 4 &middot; 6:00 AM', csm: 'nick', account: `SAP Inc`,
        note: `SAP renewal pricing pushback w/ James Tudway + Josephine Polzer. SAP flagged ~5&times; cost increase on existing contract scope as commercially unviable. Compromise proposed: lower revenue threshold from $50M to $20M. James to revise proposal by Monday.`,
        mins: 25, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Issue',
        detail: `SAP renewal pricing pushback &mdash; SAP flagged that the new credit-based pricing model represents a ~5&times; cost increase versus existing contract scope, deemed commercially unviable + hard to justify to leadership. Even a reduced-scope Proposal 2 at $450K remained above their expected level. James explained the pricing shift reflects data + product-catalog growth and the transition to credit-based monetization. Compromise: lower the revenue threshold from $50M to $20M, potentially expanding company coverage while landing at a price point closer to current spend. SAP reiterated desire to continue the partnership but warned they will explore alternatives absent a realistic proposal. James (with David) to work up a $20M-threshold proposal by Monday, possibly including additional credits for testing new data points. SAP team to include a covering colleague for immediate actions while Josephine is OOO the following week. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 4 &middot; 7:30 AM', csm: 'rani', account: `Hitachi Vantara`,
        note: `Hitachi/HG Follow-Up Sync w/ Nathan Ditton + Adrian Escobar + Mike Galyen + Gavin Padden + Alex Skowronek. HG + Microsoft Copilot MCP integration for TAM/SAM analysis + sales manager natural-language querying. Client evaluating cost models + timelines internally through late Sept.`,
        mins: 44, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Expansion',
        detail: `Hitachi Vantara follow-up sync focused on integrating HG Insights data with Microsoft Copilot to enhance sales team capabilities &mdash; TAM/SAM analysis + target-account scoring beyond basic firmographics + natural-language query for sales managers via Copilot. Discussion emphasized empowering sales managers with more autonomy vs relying on centralized data teams. Cost of stacking multiple AI tools (incl. Copilot) is a significant client consideration. Client weighing lightweight quick-deploy vs robust long-term integrations. Next: Nathan + client team to evaluate presented capabilities + cost models internally through late September + determine direction/budget/timelines. Rani to reconnect week of Sep 28 (post-Dreamforce). HG to send follow-up info + potential demos of specific capabilities as requested. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 4 &middot; 8:30 AM', csm: 'varun', account: `zScaler`,
        note: `Zscaler Account Market Analysis Review w/ Max Shaw + Julian Rojas + Zscaler LatAm team. Zscaler exploring MCP integration w/ Gemini for LatAm account briefs + prioritization. HG to send MCP access quote + data-accuracy details by Tuesday.`,
        mins: 30, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Zscaler account market analysis review focused on how HG's data + AI capabilities can power Zscaler's sales efforts in Latin America (region with limited local market knowledge). Zscaler expressed strong interest in leveraging HG data via an MCP integration with Gemini &mdash; account briefs + insights for targeted outreach + improved sales efficiency. Data accuracy + confidence rates highlighted as critical for less-familiar markets. Prior internal Zscaler data-analysis initiatives faced accuracy challenges &mdash; HG's reliable data seen as a key differentiator. Next: HG to send MCP-access quote + data-accuracy/confidence-rate details before Tuesday. Zscaler to provide estimated user count + accounts needing data before Tuesday. Pricing + scope discussion scheduled for Tuesday. HG to share CMI account brief post-meeting. Renewals: Zscaler IDL Expansion 2026-2027 + zScaler 2026 + TR Zscaler CVP/IDL/Cat Intent x6 auto-renewal open. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 4 &middot; 9:30 AM', csm: 'rani', account: `Hitachi Vantara`,
        note: `Hitachi sync w/ Adrian Escobar + Miguel Ortega. Deal pricing $157 approved (down from $210 initial ask). Data deletion clause: complete removal by Nov 1st (data usage ceases Oct 22nd). API access being explored as cheaper alternative for Rebecca's campaigns.`,
        mins: 19, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Hitachi Vantara sync (Renewal - Hitachi - FAI &amp; Intent 2026 + Renewal - Hitachi Vantara - Universe- XaaS 2026). Deal pricing approved at $157 (reduced from $210 by ops committee). Procurement needs clear visibility into applied discounts + rationale versus prior years. Contract change mandates a data deletion clause: complete removal by Nov 1st; data usage ceases Oct 22nd (term end). Data feed partnership changes (e.g. Clay) altered accessibility &mdash; moving from flat files to API calls, impacting existing users like Rebecca. API access being explored as a cheaper path for HG firmographics + technographics. Next: Adrian to add applied-discount column to pricing spreadsheet + send revised sheet to Miguel today. Rani to (a) send comms re data deletion clause Tue/Wed, (b) coordinate w/ engineering + legal on destruction/removal (Nov 1 deadline), (c) explore API access path for Rebecca's campaigns (meeting next week). Miguel to notify Anders + Ragu + start internal deletion process (visibility first, then destruction). Pulse Poor. Confirmed via Weflow participants (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 4 &middot; 10:30 AM', csm: 'divyam', account: `BILL Operations, LLC and its Affiliates`,
        note: `BILL renewal 2027 sync w/ Charles Hawkins + Eric Nguyen. Marketing MQL criteria + scoring model education. Documentation + joint marketing session planned. Weekly meeting rescheduled to Tue Sep 8 at 11:30 AM PT.`,
        mins: 41, health: 'Healthy',
        nature: 'Recurring', initiator: 'Customer', purpose: 'Check-in',
        detail: `BILL renewal 2027 sync focused on clarifying MQL criteria + underlying scoring model in response to marketing's questions correlating actions to MQLs. Current documentation is complex (three paths to MQL) and needs simplification. Model's statistical correlations can appear counterintuitive (e.g. white paper downloads showing negative correlation) &mdash; require transparent explanation. Need to distinguish between core ML model statistical findings and human overrides/criteria adjustments influencing MQLs. Decision: collaboratively build clearer documentation + potentially hold joint marketing session to demystify MQL process. Next: Divyam to reply to closed-one analysis ticket + post updates for Eric + complete open items from last meeting today. Charles to walk through model w/ Eric + prepare marketing deck + documentation spreadsheet + offer to join calls to explain model. Eric Nguyen to continue building marketing education content. Weekly meeting rescheduled to Tue Sep 8, 11:30 AM PT. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },
    ],
    pulses: [
      { csm: 'nick', account: `SAP Inc`, health: 'Concerning',
        note: `Renewal pricing pushback &mdash; SAP flagged ~5&times; cost increase as commercially unviable. Compromise: $20M revenue threshold (from $50M). James revising proposal by Monday. SAP warned they will explore alternatives absent a realistic proposal.` },
      { csm: 'rani', account: `Hitachi Vantara (Follow-Up Sync)`, health: 'Healthy',
        note: `Microsoft Copilot MCP integration for TAM/SAM + sales manager natural-language querying. Client evaluating cost models + timelines internally through late September. Reconnect week of Sep 28 (post-Dreamforce).` },
      { csm: 'varun', account: `zScaler`, health: 'Healthy',
        note: `Zscaler LatAm MCP + Gemini integration exploration. HG to send MCP access quote + data-accuracy details by Tuesday. Zscaler to provide user count + account count by Tuesday. Renewals for IDL Expansion + zScaler 2026 + TR CVP/IDL open.` },
      { csm: 'rani', account: `Hitachi Vantara (Sync)`, health: 'Concerning',
        note: `Deal pricing $157 approved (from $210). Data deletion clause: complete removal by Nov 1st (usage ceases Oct 22nd). API access for Rebecca's campaigns being explored. Pulse Poor.` },
      { csm: 'divyam', account: `BILL Operations, LLC and its Affiliates`, health: 'Healthy',
        note: `MQL criteria + scoring model education for marketing. Documentation + joint marketing session planned. Weekly meeting rescheduled to Tue Sep 8, 11:30 AM PT.` },
    ],
  };
}

function dayMeta_2026_09_04() {
  return {
    pills: [
      ['dot-teal',   '5 Calls'],
      ['dot-amber',  '3 Expansion'],
      ['dot-red',    '2 Concerning'],
      ['dot-green',  '5 Vitally Pulses'],
      ['dot-grey',   'Fri Sep 4 &middot; 55 scanned'],
    ],
    tabs: ['Overview', 'Calls (5)', 'Pulses (5)', 'Action Items (5)']
  };
}

function dayOverviewHTML_2026_09_04() {
  return `<div class="section-label">Team Activity &mdash; Friday September 4, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Sep 4 &mdash; 55 recordings scanned</strong> via SFDC SOQL &middot; <strong>5 confirmed calls</strong> across 4 CSMs (Pam + Riley + Atisha + Andy idle) &middot; 2 Concerning (SAP + Hitachi) &middot; 3 Expansion signals &middot; SFDC confirmed 1; Weflow fallback added 4 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>3 EXPANSION:</strong> Hitachi Vantara Follow-Up (Microsoft Copilot MCP integration for TAM/SAM + sales manager natural-language querying) &middot; zScaler (MCP + Gemini integration for LatAm account prioritization + Tuesday quote) &middot; Hitachi Vantara Sync (API access exploration for Rebecca's campaigns)
  </div>
  <div style="background:#2a1f1f;border:1px solid #b45309;border-left:3px solid #b45309;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>2 CONCERNING:</strong> SAP (pricing pushback &mdash; ~5&times; cost increase deemed commercially unviable; SAP warned of exploring alternatives) &middot; Hitachi Vantara Sync (pulse Poor; data deletion clause requires complete removal by Nov 1; usage ceases Oct 22)
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
        <div><div class="metric-num m-grey">63m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Hitachi Follow-Up (&#x1F4C8; Microsoft Copilot MCP + TAM/SAM) &middot; Hitachi Sync (&#x26A0;&#xFE0F; pricing $157 + data deletion Nov 1 + API expansion)</div>
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
        <div><div class="metric-num m-grey">25m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAP renewal pricing pushback (&#x26A0;&#xFE0F; ~5&times; cost jump; $20M threshold compromise; revised proposal by Monday)</div>
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
      <div class="csm-account-note">zScaler LatAm (&#x1F4C8; MCP + Gemini integration; MCP quote + data-accuracy details due Tuesday)</div>
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
        <div><div class="metric-num m-grey">41m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">BILL Operations renewal 2027 (MQL scoring model education for marketing; docs + joint session planned)</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Oracle "HG Data Files + ER Diagram Walkthrough" event owned by Pam had no recording synced; no Weflow-participant hit.</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. No Riley speaker label in SFDC transcripts; no Weflow-participant hits.</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. "HGI &amp; Intel" event owned by Atisha had no recording synced; no Weflow-participant hit.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. "ADP Workforce &lt;&gt; TrustRadius Monthly Success Call" event owned by Andy had no recording synced; no Weflow-participant hit.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_04() {
  return `<div class="section-label">Confirmed Calls &mdash; Friday September 4, 2026</div>
  <div style="background:#2a1f1f;border:1px solid #b45309;border-left:3px solid #b45309;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>2 CONCERNING:</strong> SAP (~5&times; pricing shock; SAP warned of exploring alternatives; $20M threshold compromise + revised proposal by Monday) &middot; Hitachi Vantara Sync (pulse Poor; data deletion clause complete removal by Nov 1)
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>3 EXPANSION:</strong> Hitachi Follow-Up (Microsoft Copilot MCP) &middot; zScaler (MCP + Gemini LatAm) &middot; Hitachi Sync (API access for Rebecca's campaigns)
  </div>`;
}

function dayPulsesHTML_2026_09_04() {
  const cards = [
    { csm:'nick', health:'Concerning', account:`SAP Inc`, opp:`Vitally Pulse &mdash; Sep 4 Call`,
      arr:`Strategic &middot; Nick Johnson`, csmlbl:`Nick Johnson`, change:`Sep 4 &middot; Concerning`,
      excerpt:`SAP renewal pricing pushback &mdash; ~5&times; cost increase deemed commercially unviable. Compromise: $20M revenue threshold (from $50M). James revising proposal by Monday. SAP warned of exploring alternatives absent a realistic proposal.` },
    { csm:'rani', health:'Healthy', account:`Hitachi Vantara (Follow-Up Sync)`, opp:`Vitally Pulse &mdash; Sep 4 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 4 &middot; Healthy`,
      excerpt:`Microsoft Copilot MCP integration for TAM/SAM + sales manager natural-language querying. Client evaluating cost models + timelines internally through late September. Rani to reconnect week of Sep 28 (post-Dreamforce).` },
    { csm:'varun', health:'Healthy', account:`zScaler`, opp:`Vitally Pulse &mdash; Sep 4 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 4 &middot; Healthy`,
      excerpt:`Zscaler LatAm MCP + Gemini integration exploration. HG to send MCP-access quote + data-accuracy details by Tuesday. Zscaler to provide user count + account count by Tuesday. Multiple renewals in play (IDL Expansion + zScaler 2026 + TR CVP/IDL Auto Renewal).` },
    { csm:'rani', health:'Concerning', account:`Hitachi Vantara (Sync)`, opp:`Vitally Pulse &mdash; Sep 4 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 4 &middot; Concerning`,
      excerpt:`Deal pricing $157 approved (down from $210). Data deletion clause: complete removal by Nov 1st (data usage ceases Oct 22nd). API access exploration for Rebecca's campaigns (cheaper alternative for HG firmographics + technographics). Pulse Poor.` },
    { csm:'divyam', health:'Healthy', account:`BILL Operations, LLC and its Affiliates`, opp:`Vitally Pulse &mdash; Sep 4 Call`,
      arr:`Enterprise &middot; Divyam Dewan`, csmlbl:`Divyam Dewan`, change:`Sep 4 &middot; Healthy`,
      excerpt:`BILL renewal 2027 &mdash; MQL criteria + scoring model education for marketing. Documentation + joint marketing session planned. Weekly meeting rescheduled to Tue Sep 8, 11:30 AM PT.` },
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
    <div class="action-item ${doneActions.has('0401')?'done':''}" data-csm="nick" id="action-0401">
      <div class="action-checkbox ${doneActions.has('0401')?'checked':''}" onclick="toggleAction('0401')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; SAP &mdash; revised $20M-threshold proposal by Monday (renewal risk)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Nick Johnson + James Tudway + David &middot; James (w/ David) to work up a $20M-threshold proposal by Monday, possibly including additional credits for testing new data points, that lands closer to SAP's current spend level. SAP team to include a covering colleague for immediate actions while Josephine is OOO next week. SAP warned they will explore alternatives absent a realistic proposal.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0402')?'done':''}" data-csm="rani" id="action-0402">
      <div class="action-checkbox ${doneActions.has('0402')?'checked':''}" onclick="toggleAction('0402')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Hitachi Vantara &mdash; data deletion clause (complete removal by Nov 1; usage ceases Oct 22)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Miguel Ortega + Adrian Escobar &middot; Adrian to add applied-discount column to pricing spreadsheet + send revised sheet to Miguel today. Rani to (a) send comms re data deletion clause Tue/Wed, (b) coordinate w/ engineering + legal on destruction/removal (Nov 1 deadline), (c) explore API access path for Rebecca's campaigns (meeting next week). Miguel to notify Anders + Ragu + start internal deletion process (visibility first, then destruction). Data usage ceases Oct 22.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0403')?'done':''}" data-csm="varun" id="action-0403">
      <div class="action-checkbox ${doneActions.has('0403')?'checked':''}" onclick="toggleAction('0403')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; zScaler &mdash; MCP-access quote + data-accuracy details by Tuesday (LatAm expansion)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Varun Tiwari + Max Shaw + Julian Rojas &middot; HG to send MCP-access quote + data-accuracy/confidence-rate details before Tuesday. Zscaler to provide estimated user count + accounts needing data before Tuesday. Pricing + scope discussion scheduled Tuesday. HG to share CMI account brief post-meeting.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0404')?'done':''}" data-csm="rani" id="action-0404">
      <div class="action-checkbox ${doneActions.has('0404')?'checked':''}" onclick="toggleAction('0404')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Hitachi Vantara &mdash; Microsoft Copilot MCP integration + late-Sept reconnect (post-Dreamforce)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Rani Guy + Nathan Ditton + Adrian Escobar + Mike Galyen + Gavin Padden &middot; Nathan + client team to evaluate presented HG capabilities + cost models internally through late September + determine direction/budget/timelines. Rani to schedule follow-up meeting week of Sep 28 (post-Dreamforce). HG to provide follow-up info + potential demos of specific capabilities as requested.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0405')?'done':''}" data-csm="divyam" id="action-0405">
      <div class="action-checkbox ${doneActions.has('0405')?'checked':''}" onclick="toggleAction('0405')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; BILL Operations &mdash; MQL scoring model documentation + joint marketing session</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Divyam Dewan + Charles Hawkins + Eric Nguyen &middot; Divyam to reply to closed-one analysis ticket + post updates for Eric + complete open items from last meeting today. Charles to walk through model w/ Eric + prepare marketing deck + documentation spreadsheet + offer to join calls to explain model. Eric to continue building marketing education content. Weekly meeting rescheduled to Tue Sep 8, 11:30 AM PT.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_07() {
  return {
    calls: [
      { ts: 'Sep 7 &middot; 9:00 AM', csm: 'varun', account: `zScaler`,
        note: `zScaler alignment w/ Manoj Parameswara &mdash; Q4 renewal planning kickoff. MCP + Phoenix walkthrough (Slack integration + multi-format data queries). Product catalog identification for sales planning. LATAM outreach touchpoint referenced (Gerardo Lastra follow-up).`,
        mins: 29, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: `zScaler alignment for Q4 renewal planning. Renewal timeline: scoping Sep/Oct + contract finalization Nov + signing early Dec + new contract starts Jan. Discussion of Zscaler's product catalog (55 products) &mdash; need to identify which are most applicable for their market + understand competitor footprints for sales planning. Zscaler receives significant value from HG spend data (>95% coverage on contracted accounts). Data accuracy work ongoing: Zscaler internal team improving DUNS-number quality; account matching to be re-run w/ updated Zscaler CRM list within a week. Varun demonstrated MCP + Phoenix capabilities: Slack integration + fetching multi-format data (account briefs, PDFs, PPTs); Phoenix's edgy database queryable via Claude. Reference to LATAM opp (Zscaler - HG Account Prioritization for LATAM Sales) &mdash; Gerardo Lastra (Director in Sales LATAM) engagement continuing; Manoj noted LATAM team will reach out organically as needs arise. Next: Varun to share product catalog by Dec 1 + re-perform account matching within a week + confirm data-feed timestamps/filenames. Manoj to compile internal metrics on how HG data aided sales planning + initiate leadership discussion (Dennis + Grisham) about last-year usage, next-year plan, budget for tools, and potential additions. Both to revisit account matching + DUNS reliance in ~1 month. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },
    ],
    pulses: [
      { csm: 'varun', account: `zScaler`, health: 'Healthy',
        note: `Q4 renewal alignment &mdash; MCP + Phoenix walkthrough + product catalog identification for sales planning. LATAM opp continuing (Gerardo Lastra). Timeline: scope Sep/Oct + contract Nov + sign early Dec + start Jan.` },
    ],
  };
}

function dayMeta_2026_09_07() {
  return {
    pills: [
      ['dot-teal',   '1 Call'],
      ['dot-amber',  '1 Expansion touchpoint'],
      ['dot-green',  '1 Vitally Pulse'],
      ['dot-grey',   'Mon Sep 7 &middot; 21 scanned &middot; US Labor Day'],
    ],
    tabs: ['Overview', 'Calls (1)', 'Pulses (1)', 'Action Items (2)']
  };
}

function dayOverviewHTML_2026_09_07() {
  return `<div class="section-label">Team Activity &mdash; Monday September 7, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Monday Sep 7 (US Labor Day) &mdash; 21 recordings scanned</strong> via SFDC SOQL &middot; <strong>1 confirmed call</strong> across 1 CSM &middot; Very light day &middot; SFDC confirmed 1; Weflow fallback added 0 unique
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>Expansion touchpoint:</strong> zScaler Q4 renewal alignment &mdash; scoping Sep/Oct + contract Nov + sign Dec + new contract starts Jan. MCP + Phoenix walkthrough. LATAM opp (Gerardo Lastra) continuing.
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
        <div><div class="metric-num m-grey">29m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">zScaler Q4 renewal alignment (MCP + Phoenix walkthrough; LATAM opp continuing; product-catalog identification)</div>
    </div>

    <div class="csm-card no-calls" data-csm="rani">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">RG</div><div><div class="csm-name">Rani Guy</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">US Labor Day &mdash; no confirmed customer calls.</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">US Labor Day &mdash; no confirmed customer calls.</div>
    </div>

    <div class="csm-card no-calls" data-csm="pam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">PH</div><div><div class="csm-name">Pam Huck</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">US Labor Day &mdash; no confirmed customer calls.</div>
    </div>

    <div class="csm-card no-calls" data-csm="riley">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-riley">RR</div><div><div class="csm-name">Riley Rogers</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">US Labor Day &mdash; no confirmed customer calls.</div>
    </div>

    <div class="csm-card no-calls" data-csm="nick">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">NJ</div><div><div class="csm-name">Nick Johnson</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">US Labor Day &mdash; no confirmed customer calls.</div>
    </div>

    <div class="csm-card no-calls" data-csm="atisha">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AW</div><div><div class="csm-name">Atisha Waghela</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">US Labor Day &mdash; no confirmed customer calls.</div>
    </div>

    <div class="csm-card no-calls" data-csm="andy">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-grey">AL</div><div><div class="csm-name">Andy Lim</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">US Labor Day &mdash; no confirmed customer calls.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_07() {
  return `<div class="section-label">Confirmed Calls &mdash; Monday September 7, 2026 (US Labor Day)</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; Very light day &mdash; only Varun took a call on the Labor Day holiday.
  </div>`;
}

function dayPulsesHTML_2026_09_07() {
  const cards = [
    { csm:'varun', health:'Healthy', account:`zScaler`, opp:`Vitally Pulse &mdash; Sep 7 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 7 &middot; Healthy`,
      excerpt:`Q4 renewal alignment w/ Manoj Parameswara. Timeline: scoping Sep/Oct + contract Nov + signing early Dec + new contract starts Jan. MCP + Phoenix walkthrough (Slack + multi-format data). Product-catalog identification for sales planning. LATAM opp (Gerardo Lastra) continuing.` },
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
    <div class="action-item ${doneActions.has('0701')?'done':''}" data-csm="varun" id="action-0701">
      <div class="action-checkbox ${doneActions.has('0701')?'checked':''}" onclick="toggleAction('0701')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; zScaler &mdash; product catalog + account matching + data-feed confirmations (Q4 renewal path)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Manoj Parameswara &middot; Varun to (a) share product catalog by Dec 1, (b) re-perform account matching w/ updated Zscaler CRM list within a week, (c) confirm data-feed timestamps + filenames if needed, (d) check w/ Gagandeep re data shared w/ Manoj's team (new accounts). Manoj to (i) compile internal metrics on how HG data aided sales planning, (ii) initiate leadership discussion (Dennis + Grisham) about last-year usage + next-year plan + budget + potential additions, (iii) check w/ Gagandeep re data shared w/ Varun's team.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('0702')?'done':''}" data-csm="varun" id="action-0702">
      <div class="action-checkbox ${doneActions.has('0702')?'checked':''}" onclick="toggleAction('0702')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; zScaler &mdash; revisit account matching + DUNS reliance in ~1 month</div>
        <div class="action-meta"><span class="urgency-badge urgency-low">LOW PRIORITY</span>Varun Tiwari + Manoj Parameswara &middot; Both to revisit the discussion on account matching + DUNS reliance in approximately one month, once Zscaler's internal DUNS quality work has progressed.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}

function dayData_2026_09_11() {
  return {
    calls: [
      { ts: 'Sep 11 &middot; 3:00 AM', csm: 'nick', account: `Lenovo Group Ltd.`,
        note: `HGI Propensity Model &mdash; Next Steps w/ Adrian Escobar + Gavin Padden + Alexi Mouarkach + David Crossman + Lenovo team (Agniteja Matavalam + Batta Pruthvi + Derek). LDO (Lenovo Device Orchestrator) prioritized alongside Sentinel One + Absolute. Account lists w/ scores + logic due Sep 15 (v1); refined Sep 17. Cross-coverage: Nick covering (Rani's account).`,
        mins: 23, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Lenovo propensity-model next-steps sync. LDO (Lenovo Device Orchestrator) prioritized alongside Sentinel One + Absolute &mdash; contrary to initial plan to put LDO on hold. Detailed LDO information + materials being shared for accurate scoring. Scoring criteria for LDO will consider: proportion of Lenovo devices within an account + presence of aging device fleets or competing products indicating upgrade cycles. Sales teams to receive account lists w/ scores + underlying logic: initial version Sep 15; refined version by Sep 17. Models built w/ less available information will be flagged for iteration. Gavin to (a) send meeting invite for Tuesday follow-up, (b) incorporate LDO factors into scoring model by Tuesday, (c) share account list w/ scores + logic (Sep 15 initial, Sep 17 refined). Batta Pruthvi to share LDO file + formatting details. Agniteja to inform Ujjayi about stakeholder concerns ASAP. HG team to address matching + news data queries ASAP. Cross-coverage: Nick covering Rani's Lenovo account for the propensity model work. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 11 &middot; 5:30 AM', csm: 'andy', account: `SAS Institute Inc.`,
        note: `SAS renewal + MCP pilot direction w/ Augie Buettner + Chlo&eacute; Portier + Neil Dover. Renewal ROI justification needed for finance. New AI sales copilot as potential alternative to current offerings. Business case finalization in next 1-2 weeks. Renewal - SAS-Max CI team 2027 + Renewal - SAS Team - MI Licenses 2027.`,
        mins: 36, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'Customer', purpose: 'Mixed',
        detail: `SAS renewal + MCP pilot direction sync. Demonstrating ROI is crucial for continued investment (finance requires direct revenue attribution). Discussion of a new AI sales copilot (potentially more streamlined + integrated for sellers; possibly reduced credit consumption) as an alternative to current offerings. Qualitative benefits (time savings + improved focus) valued but harder to quantify for finance. MCP pilot's future being debated: define scope + value to justify continuation or closure. Internal planning + segmentation processes underway will inform renewal investment/usage level. Next: Neil + Stephen to finalize business case for executive approval in next 1-2 weeks. Augie + Neil to discuss MCP pilot continuation + potential investment next week. Augie to clarify credit consumption for the AI sales copilot before next meeting. Neil to talk to Jasper re MCP pilot's status + discuss w/ Stephen to round out business case before next week's meeting. Neil to explore operationalizing the platform more effectively (ongoing). Andy + Chlo&eacute; may revise pilot prompt for better outcomes as needed. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 11 &middot; 9:00 AM', csm: 'riley', account: `Zoom Video Communications (TR CSM Sync)`,
        note: `Zoom &lt;&gt; TrustRadius CSM sync &mdash; short 9m touchpoint. Riley confirmed via SFDC transcript speaker detection. TR-side coordination (Zoom is Andy Lim's HG account).`,
        mins: 9, health: 'Healthy',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Check-in',
        detail: `Short Zoom TrustRadius CSM sync. Brief touchpoint. Riley confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 11 &middot; 9:00 AM', csm: 'varun', account: `MongoDB Inc`,
        note: `MongoDB renewal w/ Ziad Amira + Will Bracken + Steven Harbron. MongoDB aiming for flat renewal via tech-list refinement. Interest in Functional AI Intelligence + Geo-monitoring + RGIP platform + API access. Updated account list + product selections for credit estimation due early next week.`,
        mins: 33, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `MongoDB renewal discussion. MongoDB aiming to keep renewal flat via refining tracked technologies (manage costs effectively). Understanding credit consumption + overages a focus (identify cost-reduction opportunities). Will Bracken exploring integration of HG data into their surfaces for competitor analysis + interested in embedding-provider tracking. Interest in expanding to Functional AI Intelligence + Geo-monitoring features for enterprise penetration + strategic sales/marketing. API access for data export being explored (beyond current S3 bucket integrations). Next: Ziad + Varun to share file detailing tracked technologies + coverage + suggestions for other relevant technologies + file suggesting other relevant technologies in specific domains. Will + Varun to provide updated account list + product selections for credit estimation early next week. Varun to provision Steven access to new RGIP platform after the call + provide RGIP download next week + send follow-up email w/ required fields for input lists. Steven to sync w/ Ali re launching a POC for paid media when Ali is back. Ziad to confirm if API access for data export is free for RGIF customers. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 11 &middot; 9:30 AM', csm: 'rani', account: `Hitachi Vantara`,
        note: `Hitachi sync w/ Adrian Escobar + Miguel Ortega. Data retention refinement (bottom two data sets retained; others outside intent schemas to be destroyed). Rebecca bulk credits provisioned until Oct 9. Renewal uncertainty for install + spend + intent contracts. Legal engagement re Nov 1 platform usage.`,
        mins: 14, health: 'Concerning',
        nature: 'Recurring', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Hitachi Vantara sync following data-deletion clause work. Refined retention: bottom two data sets to be kept; others outside specific intent schemas to be destroyed &mdash; data-driven approach. Bulk API credits provisioned to Rebecca until Oct 9 as goodwill/partnership gesture (outside contractual obligation); renewal uncertain due to budget constraints. Renewal uncertainty across install + spend + intent contracts due to long sales cycles + potential budget limitations for Rebecca + Nathan. Rani working w/ legal re platform usage after Nov 1 (different system than initially discussed). Multiple communications sent re data changes; acknowledged stakeholders may not always retain the info. Next: Rani to share specific spile schema for intent + other schemas as needed + provide Rajiv's email to Miguel + continue Rebecca conversations re credit usage + budget + work w/ legal re Nov 1 platform usage + ensure Rajiv is copied on follow-up comms. Miguel to confirm data destruction/retention plan w/ his team + double-check + inform Rani. Pulse Poor. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 11 &middot; 10:00 AM', csm: 'rani', account: `Google Inc.`,
        note: `Google Contact POC + TrustRadius continued w/ Marianna Prodan + Mark Fell + KP Pindle + Mardigan Moffat. Three objectives: HG contact data POC for geo coverage gaps + TrustRadius (CVP + Geo + Intent + FAI intent). Introduction to Gemini Enterprise team requested for MCP integration.`,
        mins: 50, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Google POC + TrustRadius continued discussion. Three parallel streams: (1) HG contact data POC around specific geos w/ coverage gaps, (2) TrustRadius Customer Voice Platform + Geo concept + intent-driven leads, (3) FBI intent + context data. Rani mentioned prior week's meeting w/ Lawrence + ongoing conversations w/ procurement scoping business need. Team asked Marianna for her priority for the call. Mark to confirm Marianna's linkage to contacts follow / contacts-with-intent / CVP; if not, request intro. Team requested introduction to Gemini Enterprise team to integrate HG data via MCP (short window). Zoom Info contract clarified as Google (not Google Cloud) &mdash; Mariana working w/ it. Long sales-cycle + budget uncertainty context established. Pulse Concerning. Confirmed via SFDC transcript speaker detection.`, source: 'sfdc' },

      { ts: 'Sep 11 &middot; 12:30 PM', csm: 'riley', account: `Adobe Systems Incorporated`,
        note: `TrustRadius + Adobe renewal w/ Cole Arutian + Mardigan Moffat + Giacomo Pesaresi + Allison. Adobe budget constraint: 14 &rarr; 10-11 products. New offerings: Geo/AI summaries + Precision Demand + event support (Summit + MAX) budget integration. Revised proposals by Oct 1. Cross-coverage: Riley covering (Divyam's account).`,
        mins: 25, health: 'Concerning',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Mixed',
        detail: `Adobe TrustRadius renewal discussion. Adobe facing significant budget constraints ("do more with less") &mdash; product count likely dropping 14 &rarr; 10-11. Two package options discussed: Geo Customer Voice Platform (CVP; includes geo/market report) vs legacy HG Customer Voice (more streamlined). Adobe exploring integrating event-support budgets (Summit + MAX booths) into main package + quarterly billing (vs upfront) to increase "bang for buck". New Precision Demand program introduced (leveraging HG's technographic + install data for target-account insights + buying committees + sales plays) &mdash; may interest Adobe lead-gen team. Mardigan to provide revised package options based on 10-11 products + event support + potential package deal by Oct 1. Gpesaresi to conduct internal discussions w/ Allison + Erica re Precision Demand for lead gen + determine final product count/config by Oct 1 + explore cross-charging for event support inclusion. Mardigan to send package details + documentation ASAP for Adobe internal case-building. Cross-coverage: Riley (TrustRadius-side) covering Divyam's Adobe HG account. Pulse Concerning. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 11 &middot; 1:15 PM', csm: 'pam', account: `Microsoft`,
        note: `Microsoft Agent Engine + Collaboration Model alignment w/ Karin Pindle + Mark Fell + Cole Arutian + Mardigan Moffat + Francis Brero + Noah Alford + Microsoft team (Cesar Martinez + Abhay Sawhney + Sarani Roy + Sam Staudaher). SFTP access + Microsoft Fabric integration + potential Center of Excellence. Rapid prototyping/build cadence established.`,
        mins: 98, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `Microsoft strategic collaboration-model alignment. Streamlined development process: business discussions &rarr; mockups/prototypes within hours &rarr; iterate to build phase within a week or two &mdash; speed + quality emphasis. Data access: SFTP initially, then exploring Microsoft Fabric access; SFTP provides "a slice", MCP the "whole pie". Two collaboration points defined: initial intake/shaping + data validation/build sprint. Ongoing discussion re initiative evolving into a Center of Excellence (CoE) within Microsoft to coordinate + scale successful projects. Multiple Microsoft opps in play: Contract Consolidation (AIBS + CAIP + Security co-term 2027) + Hardware &amp; Devices Precision Demand Intel Pilot + M365 Copilot Precision Demand Intel Pilot + TR Microsoft CVP x6 + Mkt Report x6 + Event Support x2 (Written Renewal). Next: Karin to coordinate SFTP key provisioning for Microsoft team by Mon/Tue latest. Microsoft team (Abe + David + Caesar + Sarani) to use SFTP key + begin building Diana's project starting next week. Microsoft team to continue collaborating w/ HG (Karin + Rob + Francis) for data validation + build support. Mark to ensure sanitized portfolio updates to Jim shareable w/ HG monthly. Cesar to add sharing updates w/ HG to Jim calls. Microsoft team to continue Will Norris discussions re coordination + potential CoE. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },

      { ts: 'Sep 11 &middot; 1:30 PM', csm: 'atisha', account: `Databricks Inc.`,
        note: `TrustRadius &lt;&gt; Databricks w/ Charles Hawkins + Todd Detmold + Jessica Darnell + Estelle Hayes + Sara Steffen. AI crawler data + review-generation strategies. AI agent governance tools identified as growth area. Follow-up call Wed Sep 16, 1 PM PT (campaign operations demo).`,
        mins: 41, health: 'Healthy',
        nature: 'Ad-hoc', initiator: 'HG CS', purpose: 'Expansion',
        detail: `TrustRadius &lt;&gt; Databricks strategic discussion. Databricks has good foundation (existing traffic + ratings) but lacks review volume, especially for newer products &mdash; opportunity for TR. AI tools actively indexing TR content, significant portion of crawl requests are "grounding requests" (users seeking specific info for AI-driven queries). Competitor analysis: similar crawl patterns between Databricks + Snowflake (both researched + compared &mdash; strong TR presence important). AI agent governance tools = significant growth area where Databricks can establish third-party trust via listings + incentivized reviews. Sentiment: Databricks seen as comprehensive AI/ML solution; Snowflake faces some negative sentiment on pricing scalability. Next: Charles + CSM partner to demo day-to-day campaign operations Wed Sep 16, 1 PM PT. Databricks team to align product categories + listings w/ current market state + explore AI agent governance tool listing + investigate custom page creation for product narratives + SEO + access free TR platform to explore category alignment before next call. Charles to send presentation deck as follow-up. Attendance via Weflow (SFDC transcript not synced).`, source: 'weflow' },
    ],
    pulses: [
      { csm: 'nick', account: `Lenovo Group Ltd. (cross-coverage for Rani)`, health: 'Healthy',
        note: `LDO propensity model prioritized alongside Sentinel One + Absolute. Account lists w/ scores + logic due Sep 15 (v1) + Sep 17 (refined). Nick covering Rani's Lenovo account for propensity work.` },
      { csm: 'andy', account: `SAS Institute Inc.`, health: 'Healthy',
        note: `Renewal ROI justification for finance. New AI sales copilot as alternative to current offerings. MCP pilot's future under review. Business case in next 1-2 weeks. Renewals SAS-Max CI 2027 + SAS Team MI Licenses 2027.` },
      { csm: 'riley', account: `Zoom Video Communications (TR CSM Sync)`, health: 'Healthy',
        note: `Short 9m TrustRadius CSM sync. Riley confirmed via SFDC transcript speaker detection.` },
      { csm: 'varun', account: `MongoDB Inc`, health: 'Healthy',
        note: `Renewal aim: flat via tech-list refinement. Functional AI Intelligence + Geo-monitoring + RGIP + API access expansion interest. Updated account list + product selections due early next week.` },
      { csm: 'rani', account: `Hitachi Vantara`, health: 'Concerning',
        note: `Data retention refinement (bottom two data sets kept; others destroyed). Rebecca bulk credits until Oct 9. Renewal uncertainty for install + spend + intent contracts. Legal engagement re Nov 1 platform usage. Pulse Poor.` },
      { csm: 'rani', account: `Google Inc.`, health: 'Concerning',
        note: `Contact POC + TrustRadius CVP + Geo + Intent streams. Introduction to Gemini Enterprise team requested for MCP integration. Long sales-cycle + budget uncertainty. Pulse Concerning.` },
      { csm: 'riley', account: `Adobe (cross-coverage for Divyam)`, health: 'Concerning',
        note: `Budget constraint 14&rarr;10-11 products. Precision Demand + Geo/AI summaries + event-support integration explored. Revised proposals due Oct 1. Pulse Concerning. Riley covering Divyam's Adobe HG account for TR-side renewal.` },
      { csm: 'pam', account: `Microsoft`, health: 'Healthy',
        note: `Agent Engine collaboration model + SFTP + Microsoft Fabric integration + potential Center of Excellence. Rapid prototype/build cadence. Multiple opps in play (Contract Consolidation 2027 + Hardware/M365 Copilot Precision Demand Intel Pilots + TR CVP+Mkt Report+Event Support).` },
      { csm: 'atisha', account: `Databricks Inc.`, health: 'Healthy',
        note: `TrustRadius AI crawler + review-generation strategy. AI agent governance tools identified as growth area. Follow-up demo Wed Sep 16, 1 PM PT.` },
    ],
  };
}

function dayMeta_2026_09_11() {
  return {
    pills: [
      ['dot-teal',   '9 Calls'],
      ['dot-amber',  '6 Expansion'],
      ['dot-red',    '3 Concerning'],
      ['dot-green',  '9 Vitally Pulses'],
      ['dot-grey',   'Fri Sep 11 &middot; 52 scanned'],
    ],
    tabs: ['Overview', 'Calls (9)', 'Pulses (9)', 'Action Items (7)']
  };
}

function dayOverviewHTML_2026_09_11() {
  return `<div class="section-label">Team Activity &mdash; Friday September 11, 2026</div>
  <div style="background:#1c1f26;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C5; <strong>Friday Sep 11 &mdash; 52 recordings scanned</strong> via SFDC SOQL &middot; <strong>9 confirmed calls</strong> across 7 CSMs (Divyam idle) &middot; 3 Concerning &middot; 6 Expansion signals &middot; SFDC confirmed 2; Weflow fallback added 7 unique recoveries
  </div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>6 EXPANSION:</strong> Microsoft (SFTP + Microsoft Fabric integration + potential CoE + Precision Demand Intel Pilots) &middot; Databricks (TR AI agent governance tools growth area) &middot; Lenovo (LDO propensity model) &middot; MongoDB (Functional AI + Geo-monitoring + RGIP + API access) &middot; Adobe (Precision Demand + Geo/AI summaries) &middot; SAS (AI sales copilot + business case)
  </div>
  <div style="background:#2a1f1f;border:1px solid #b45309;border-left:3px solid #b45309;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>3 CONCERNING:</strong> Hitachi Vantara (pulse Poor; renewal uncertainty for install+spend+intent contracts; Rebecca bulk credits until Oct 9) &middot; Google Inc. (pulse Concerning; long sales-cycle + budget uncertainty; Gemini Enterprise intro requested) &middot; Adobe (pulse Concerning; 14&rarr;10-11 product downgrade under budget constraint)
  </div>
  <div style="background:#1c2333;border:1px solid #7c3aed;border-left:3px solid #7c3aed;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#c4b5fd;">
    &#x1F91D; <strong>2 CROSS-COVERAGE:</strong> Nick covered Lenovo (Rani's account) for LDO propensity model work &middot; Riley covered Adobe (Divyam's account) for TrustRadius-side renewal.
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
        <div><div class="metric-num m-grey">64m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Hitachi (&#x26A0;&#xFE0F; retention + Rebecca credits Oct 9 + Nov 1 legal) &middot; Google (&#x26A0;&#xFE0F; contact POC + TR streams + Gemini Enterprise intro)</div>
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
        <div><div class="metric-num m-grey">34m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Zoom (TR CSM sync - 9m) &middot; Adobe (&#x26A0;&#xFE0F; cross-coverage; 14&rarr;10-11 products; Precision Demand)</div>
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
        <div><div class="metric-num m-grey">98m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Microsoft (&#x1F4C8; Agent Engine + SFTP + Fabric + potential CoE; multiple opps)</div>
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
        <div><div class="metric-num m-grey">41m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Databricks TR (&#x1F4C8; AI crawler + review generation + AI agent governance)</div>
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
        <div><div class="metric-num m-grey">36m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">SAS (renewal ROI + AI sales copilot + MCP pilot future; business case 1-2 weeks)</div>
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
        <div><div class="metric-num m-grey">33m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">MongoDB (&#x1F4C8; flat renewal + Functional AI + Geo-monitoring + API access)</div>
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
        <div><div class="metric-num m-grey">23m</div><div class="metric-lbl">Duration</div></div>
      </div>
      <div class="csm-account-note">Lenovo (&#x1F91D; cross-coverage; LDO propensity model; scores Sep 15/17)</div>
    </div>

    <div class="csm-card no-calls" data-csm="divyam">
      <span class="no-call-badge">0 Calls</span>
      <div class="csm-card-header"><div class="avatar av-divyam">DD</div><div><div class="csm-name">Divyam Dewan</div><div class="csm-role">Enterprise CSM</div></div></div>
      <div class="csm-account-note" style="color:#94a3b8;font-size:11px;">No confirmed customer calls. Divyam's Adobe covered by Riley for TR renewal work.</div>
    </div>

  </div>`;
}

function dayCallsHTML_2026_09_11() {
  return `<div class="section-label">Confirmed Calls &mdash; Friday September 11, 2026</div>
  <div style="background:#1c2333;border:1px solid #0ea5e9;border-left:3px solid #0ea5e9;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#7dd3fc;">
    &#x1F4C8; <strong>6 EXPANSION:</strong> Microsoft (SFTP + Fabric + CoE) &middot; Databricks (AI agent governance) &middot; Lenovo (LDO propensity) &middot; MongoDB (Functional AI + API) &middot; Adobe (Precision Demand) &middot; SAS (AI sales copilot)
  </div>
  <div style="background:#2a1f1f;border:1px solid #b45309;border-left:3px solid #b45309;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#fca5a5;">
    &#x26A0;&#xFE0F; <strong>3 CONCERNING:</strong> Hitachi Vantara (renewal uncertainty; pulse Poor) &middot; Google Inc. (long sales-cycle + budget; pulse Concerning) &middot; Adobe (14&rarr;10-11 product downgrade; pulse Concerning)
  </div>
  <div style="background:#1c2333;border:1px solid #7c3aed;border-left:3px solid #7c3aed;border-radius:6px;padding:8px 14px;margin:0 0 10px 0;font-size:12px;color:#c4b5fd;">
    &#x1F91D; <strong>Cross-coverage:</strong> Nick covered Rani's Lenovo &middot; Riley covered Divyam's Adobe (TR-side).
  </div>`;
}

function dayPulsesHTML_2026_09_11() {
  const cards = [
    { csm:'nick', health:'Healthy', account:`Lenovo Group Ltd.`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Enterprise &middot; Nick Johnson (cross-coverage for Rani)`, csmlbl:`Nick Johnson`, change:`Sep 11 &middot; Healthy`,
      excerpt:`LDO (Lenovo Device Orchestrator) prioritized alongside Sentinel One + Absolute. Scoring criteria include Lenovo device proportion + aging fleets + competing products. Account lists w/ scores + logic: Sep 15 initial, Sep 17 refined.` },
    { csm:'andy', health:'Healthy', account:`SAS Institute Inc.`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Enterprise &middot; Andy Lim`, csmlbl:`Andy Lim`, change:`Sep 11 &middot; Healthy`,
      excerpt:`Renewal ROI justification needed. New AI sales copilot under review as potential alternative. MCP pilot's future under review. Business case finalization in next 1-2 weeks. Renewals SAS-Max CI 2027 + SAS Team MI Licenses 2027.` },
    { csm:'riley', health:'Healthy', account:`Zoom Video Communications (TR CSM Sync)`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`TrustRadius &middot; Riley Rogers`, csmlbl:`Riley Rogers`, change:`Sep 11 &middot; Healthy`,
      excerpt:`Short 9m TrustRadius CSM sync. Riley confirmed via SFDC transcript speaker detection.` },
    { csm:'varun', health:'Healthy', account:`MongoDB Inc`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Enterprise &middot; Varun Tiwari`, csmlbl:`Varun Tiwari`, change:`Sep 11 &middot; Healthy`,
      excerpt:`Renewal aim: flat via tech-list refinement + credit-consumption cleanup. Functional AI Intelligence + Geo-monitoring + RGIP + API access expansion interest. Updated account list + product selections early next week.` },
    { csm:'rani', health:'Concerning', account:`Hitachi Vantara`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Enterprise &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 11 &middot; Concerning`,
      excerpt:`Data retention refinement (bottom two datasets retained; others destroyed). Rebecca bulk credits until Oct 9. Renewal uncertainty for install + spend + intent contracts (long sales cycles + budget constraints for Rebecca + Nathan). Legal engagement re Nov 1 platform usage.` },
    { csm:'rani', health:'Concerning', account:`Google Inc.`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Strategic &middot; Rani Guy`, csmlbl:`Rani Guy`, change:`Sep 11 &middot; Concerning`,
      excerpt:`Contact POC + TrustRadius CVP + Geo + Intent streams. Introduction to Gemini Enterprise team requested for MCP integration (short window). Long sales-cycle + budget uncertainty.` },
    { csm:'riley', health:'Concerning', account:`Adobe Systems Incorporated`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Strategic &middot; Riley Rogers (cross-coverage for Divyam)`, csmlbl:`Riley Rogers`, change:`Sep 11 &middot; Concerning`,
      excerpt:`Budget constraint: 14&rarr;10-11 products. Precision Demand + Geo/AI summaries + event-support (Summit + MAX) budget integration explored. Revised proposals due Oct 1. Riley (TR-side) covering Divyam's Adobe HG account. Pulse Concerning.` },
    { csm:'pam', health:'Healthy', account:`Microsoft`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Strategic &middot; Pam Huck`, csmlbl:`Pam Huck`, change:`Sep 11 &middot; Healthy`,
      excerpt:`Agent Engine collaboration model + SFTP + Microsoft Fabric + potential Center of Excellence. Rapid prototype/build cadence. Multiple opps: Contract Consolidation 2027 + Hardware/M365 Copilot Precision Demand Pilots + TR CVP+Mkt Report+Event Support.` },
    { csm:'atisha', health:'Healthy', account:`Databricks Inc.`, opp:`Vitally Pulse &mdash; Sep 11 Call`,
      arr:`Strategic &middot; Atisha Waghela`, csmlbl:`Atisha Waghela`, change:`Sep 11 &middot; Healthy`,
      excerpt:`TR AI crawler data + review-generation strategy. AI agent governance tools identified as growth area. Sentiment analysis: Databricks comprehensive AI/ML; Snowflake pricing scalability concerns. Follow-up demo Wed Sep 16, 1 PM PT.` },
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

function dayActionsHTML_2026_09_11() {
  return `<div class="action-list">
    <div class="action-item ${doneActions.has('1101')?'done':''}" data-csm="pam" id="action-1101">
      <div class="action-checkbox ${doneActions.has('1101')?'checked':''}" onclick="toggleAction('1101')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Microsoft &mdash; SFTP key provisioning + Diana's project kickoff + CoE discussion</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Pam Huck + Karin Pindle + Microsoft team (Cesar + Abe + David + Sarani) &middot; Karin to coordinate SFTP key provisioning by Mon/Tue latest. Microsoft team to use SFTP key + begin building Diana's project starting next week. Microsoft team to continue collaborating w/ HG (Karin + Rob + Francis) for data validation + build support. Mark to ensure sanitized portfolio updates to Jim monthly. Microsoft team to continue Will Norris discussions re coordination + potential CoE.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1102')?'done':''}" data-csm="riley" id="action-1102">
      <div class="action-checkbox ${doneActions.has('1102')?'checked':''}" onclick="toggleAction('1102')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Adobe &mdash; revised 10-11 product package + Precision Demand internal discussion by Oct 1 (cross-coverage)</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Riley Rogers (cross-coverage for Divyam) + Mardigan Moffat + Giacomo Pesaresi &middot; Mardigan to provide revised package options based on 10-11 products + event support + potential package deal by Oct 1 + send package details + documentation ASAP. Gpesaresi to conduct internal discussions w/ Allison + Erica re Precision Demand for lead gen + determine final product count/config by Oct 1 + explore cross-charging for event support inclusion.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1103')?'done':''}" data-csm="rani" id="action-1103">
      <div class="action-checkbox ${doneActions.has('1103')?'checked':''}" onclick="toggleAction('1103')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Hitachi Vantara &mdash; retention schemas + Rebecca budget conversations + Nov 1 legal work</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Miguel Ortega &middot; Rani to share specific spile schema for intent + other schemas + provide Rajiv's email + continue Rebecca conversations re credit usage + budget + work w/ legal re Nov 1 platform usage + ensure Rajiv copied on follow-up comms. Miguel to confirm data destruction/retention plan w/ his team + double-check + inform Rani. Rebecca bulk credits provisioned until Oct 9. Pulse Poor.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1104')?'done':''}" data-csm="rani" id="action-1104">
      <div class="action-checkbox ${doneActions.has('1104')?'checked':''}" onclick="toggleAction('1104')"></div>
      <div class="action-body">
        <div class="action-title">&#x26A0;&#xFE0F; Google &mdash; Gemini Enterprise intro + contact POC + TrustRadius stream alignment</div>
        <div class="action-meta"><span class="urgency-badge urgency-high">HIGH PRIORITY</span>Rani Guy + Mark Fell + KP Pindle + Mardigan Moffat + Marianna Prodan &middot; Mark to confirm Marianna's linkage to contacts follow / contacts-with-intent / CVP. Team requested introduction to Gemini Enterprise team for MCP integration (short window). Rani + Mark to align on prioritization across three streams (contact POC / TrustRadius CVP-Geo-Intent / FBI intent + context data). Long sales-cycle + budget uncertainty.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1105')?'done':''}" data-csm="nick" id="action-1105">
      <div class="action-checkbox ${doneActions.has('1105')?'checked':''}" onclick="toggleAction('1105')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; Lenovo &mdash; LDO propensity model + Sep 15/17 account list delivery (cross-coverage)</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Nick Johnson (cross-coverage for Rani) + Adrian Escobar + Gavin Padden + Agniteja Matavalam &middot; Gavin to send Tuesday follow-up invite + incorporate LDO factors into scoring model by Tuesday + share account list w/ scores + logic (Sep 15 initial, Sep 17 refined). Batta Pruthvi to share LDO file + formatting details. Agniteja to inform Ujjayi about stakeholder concerns ASAP. HG team to address matching + news data queries ASAP.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1106')?'done':''}" data-csm="varun" id="action-1106">
      <div class="action-checkbox ${doneActions.has('1106')?'checked':''}" onclick="toggleAction('1106')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4C8; MongoDB &mdash; updated account list + product selections + RGIP provisioning</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Varun Tiwari + Ziad Amira + Will Bracken + Steven Harbron &middot; Ziad/Varun to share file detailing tracked technologies + coverage + suggestions for other relevant technologies. Will/Varun to provide updated account list + product selections for credit estimation early next week. Varun to provision Steven access to RGIP after the call + provide RGIP download next week + send follow-up email w/ required fields. Steven to sync w/ Ali re paid-media POC. Ziad to confirm if API access for data export is free for RGIF customers.</div>
      </div>
    </div>
    <div class="action-item ${doneActions.has('1107')?'done':''}" data-csm="andy" id="action-1107">
      <div class="action-checkbox ${doneActions.has('1107')?'checked':''}" onclick="toggleAction('1107')"></div>
      <div class="action-body">
        <div class="action-title">&#x1F4CB; SAS &mdash; business case for executive approval + MCP pilot continuation decision</div>
        <div class="action-meta"><span class="urgency-badge urgency-medium">MEDIUM PRIORITY</span>Andy Lim + Augie Buettner + Chlo&eacute; Portier + Neil Dover &middot; Neil + Stephen to finalize business case for executive approval in next 1-2 weeks. Augie + Neil to discuss MCP pilot continuation + potential investment next week. Augie to clarify credit consumption for AI sales copilot before next meeting. Neil to talk to Jasper re MCP pilot status + discuss w/ Stephen to round out business case + explore operationalizing platform effectively (ongoing). Andy + Chlo&eacute; may revise pilot prompt for better outcomes as needed.</div>
      </div>
    </div>
  </div>
  <div class="empty-state" id="actions-empty" style="display:none">No action items match the current filter.</div>`;
}
