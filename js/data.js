// ─── CSM_ACCOUNTS ─────────────────────────────────────────────────────
// Source: HG GTM Tools — snapshot Apr 25, 2026; AM/segment corrections May 14, 2026; opp pulse/notes updated from SFDC May 23, 2026; Vitally refresh May 29, 2026
// DO NOT EDIT when adding new daily reports. Only update when account data changes.
// ──────────────────────────────────────────────────────────────────────

// ─── CSM ACCOUNT BOOKS ─────────────────────────────────────────
// Source: HG GTM Tools — get_book_of_accounts (snapshot Apr 25, 2026)
const CSM_ACCOUNTS = {
  riley: [
    {name:"Concur", seg:"Enterprise", arr:105000, pulse:"Some Risk", renewal:"2026-12-31"},
    {name:"Paycom Software Inc", seg:"Enterprise", arr:91500, pulse:"Extremely Satisfied", renewal:"2026-07-07"},
    {name:"Paylocity", seg:"Enterprise", arr:66275, pulse:"Very Satisfied", renewal:"2026-06-30"},
    {name:"RingCentral", seg:"Enterprise", arr:68000, pulse:"Extremely Satisfied", renewal:"2026-07-27"},
    {name:"TriNet Group Inc", seg:"Enterprise", arr:78189, pulse:"Extremely Satisfied", renewal:"2027-01-19"},
    {name:"Zoom Video Communications", seg:"Enterprise", arr:72000, pulse:"—", renewal:"2026-07-07"}
  ],
  varun: [
    {name:"Akamai Technologies, Inc.", seg:"Enterprise", arr:44750, pulse:"Some Risk", renewal:"2027-04-19"},
    {name:"Alight Solutions LLC", seg:"Enterprise", arr:49990, pulse:"Some Risk", renewal:"2026-12-30"},
    {name:"Autodesk Inc", seg:"Enterprise", arr:573000, pulse:"Extremely Satisfied", renewal:"2027-02-15"},
    {name:"BMC Software Inc", seg:"Enterprise", arr:284750, pulse:"Severe Risk", renewal:"2026-06-30"},
    {name:"Capital One Services LLC", seg:"Strategic", arr:57500, pulse:"Extremely Satisfied", renewal:"2027-02-23"},
    {name:"CIENA Corporation", seg:"Enterprise", arr:10000, pulse:"Extremely Satisfied", renewal:"2026-12-30"},
    {name:"Datadog", seg:"Enterprise", arr:328838, pulse:"Extremely Satisfied", renewal:"2027-04-11"},
    {name:"Dayforce US, Inc.", seg:"Enterprise", arr:136373, pulse:"Extremely Satisfied", renewal:"2026-12-30"},
    {name:"DXC Technology Services LLC", seg:"Strategic", arr:311999, pulse:"Some Risk", renewal:"2026-11-30"},
    {name:"Exclusive Networks", seg:"Enterprise", arr:125000, pulse:"Extremely Satisfied", renewal:"2026-12-22"},
    {name:"Five9 Inc", seg:"Enterprise", arr:105000, pulse:"Extremely Satisfied", renewal:"2027-05-30"},
    {name:"Hyland", seg:"Enterprise", arr:211000, pulse:"Extremely Satisfied", renewal:"2027-09-29"},
    {name:"IFS", seg:"Enterprise", arr:357750, pulse:"Extremely Satisfied", renewal:"2026-12-05"},
    {name:"Iron Mountain Incorporated", seg:"Enterprise", arr:190000, pulse:"Extremely Satisfied", renewal:"2026-10-27"},
    {name:"MongoDB Inc", seg:"Enterprise", arr:65000, pulse:"Extremely Satisfied", renewal:"2026-10-22"},
    {name:"Open Text Corporation", seg:"Enterprise", arr:226575, pulse:"Extremely Satisfied", renewal:"2026-09-30"},
    {name:"Pegasystems Inc", seg:"Enterprise", arr:190675, pulse:"Extremely Satisfied", renewal:"2026-08-31"},
    {name:"ServiceNow Inc's", seg:"Strategic", arr:545000, pulse:"Extremely Satisfied", renewal:"2027-02-27"},
    {name:"CBTS", seg:"Enterprise", arr:140445, pulse:"—", renewal:"2027-05-11"},
    {name:"Unum", seg:"Strategic", arr:88852, pulse:"Some Risk", renewal:"2028-04-30"},
    {name:"Zendesk, Inc.", seg:"Enterprise", arr:402232, pulse:"Some Risk", renewal:"2026-08-26"},
    {name:"zScaler", seg:"Enterprise", arr:424915, pulse:"Extremely Satisfied", renewal:"2026-07-31"}
  ],
  divyam: [
    {name:"Adobe Systems Incorporated", seg:"Strategic", arr:612847, pulse:"Some Risk", renewal:"2026-07-31"},
    {name:"Airtel Africa", seg:"Enterprise", arr:22000, pulse:"Some Risk", renewal:"2027-05-28"},
    {name:"BILL Operations, LLC and its Affiliates", seg:"Enterprise", arr:103000, pulse:"Some Risk", renewal:"2027-02-01"},
    {name:"Blackbaud, Inc.", seg:"Enterprise", arr:61825, pulse:"Extremely Satisfied", renewal:"2026-06-28"},
    {name:"CrowdStrike", seg:"Enterprise", arr:400000, pulse:"Some Risk", renewal:"2027-03-16"},
    {name:"Dynatrace", seg:"Enterprise", arr:165124, pulse:"Some Risk", renewal:"2028-03-03"},
    {name:"Genesys", seg:"Enterprise", arr:30000, pulse:"Extremely Satisfied", renewal:"2027-03-31"},
    {name:"Globoforce / Workhuman", seg:"Enterprise", arr:27000, pulse:"Extremely Satisfied", renewal:"2028-01-31"},
    {name:"HubSpot", seg:"Enterprise", arr:42822, pulse:"Extremely Satisfied", renewal:"2027-03-18"},
    {name:"Informatica LLC", seg:"Enterprise", arr:257775, pulse:"Some Risk", renewal:"2026-08-07"},
    {name:"Lumen Technologies", seg:"Strategic", arr:60000, pulse:"Some Risk", renewal:"2026-06-27"},
    {name:"Omnissa, LLC", seg:"Enterprise", arr:74995, pulse:"Extremely Satisfied", renewal:"2027-10-20"},
    {name:"OpenAI", seg:"Enterprise", arr:72600, pulse:"Extremely Satisfied", renewal:"2026-12-29"},
    {name:"Paychex, Inc.", seg:"Enterprise", arr:42000, pulse:"Some Risk", renewal:"2027-04-29"},
    {name:"Procore Technologies Inc", seg:"Enterprise", arr:77000, pulse:"Extremely Satisfied", renewal:"2026-07-09"},
    {name:"Quadient Software, Inc", seg:"Enterprise", arr:320000, pulse:"Extremely Satisfied", renewal:"2026-09-07"},
    {name:"Safaricom Limited", seg:"Enterprise", arr:50000, pulse:"Extremely Satisfied", renewal:"2026-08-31"},
    {name:"Snowflake Inc.", seg:"Enterprise", arr:120750, pulse:"Some Risk", renewal:"2028-04-15"},
    {name:"Thomson Reuters", seg:"Enterprise", arr:153750, pulse:"Extremely Satisfied", renewal:"2026-07-30"},
    {name:"Xero Limited", seg:"Enterprise", arr:32400, pulse:"Extremely Satisfied", renewal:"2027-03-19"}
  ],
  nick: [
    {name:"Accel4", seg:"Commercial", arr:30000, pulse:"—", renewal:"2027-02-11"},
    {name:"Accenture", seg:"Strategic", arr:301875, pulse:"Some Risk", renewal:"2026-06-29"},
    {name:"Argano LLC", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-12"},
    {name:"Check Point Software", seg:"Enterprise", arr:150000, pulse:"Extremely Satisfied", renewal:"2027-11-21"},
    {name:"Dintec LLC", seg:"Commercial", arr:30000, pulse:"Some Risk", renewal:"2026-11-10"},
    {name:"E-Strategy International", seg:"Commercial", arr:30000, pulse:"Some Risk", renewal:"2026-11-23"},
    {name:"HCL America Inc.", seg:"Enterprise", arr:188333, pulse:"Some Risk", renewal:"2026-11-03"},
    {name:"IBM", seg:"Enterprise", arr:3331538, pulse:"Extremely Satisfied", renewal:"2026-12-31"},
    {name:"Infor (US), LLC", seg:"Enterprise", arr:882666, pulse:"Extremely Satisfied", renewal:"2026-10-01"},
    {name:"Kaar Technologies", seg:"SMB", arr:30000, pulse:"Some Risk", renewal:"2026-10-12"},
    {name:"Korcomptenz", seg:"SMB", arr:30000, pulse:"Some Risk", renewal:"2026-11-30"},
    {name:"KPMG LLP", seg:"Strategic", arr:264967, pulse:"Extremely Satisfied", renewal:"2026-07-31"},
    {name:"LTIMindtree Limited", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-16"},
    {name:"NTT Data Corporation", seg:"Strategic", arr:120450, pulse:"Extremely Satisfied", renewal:"2028-09-14"},
    {name:"Phoenix Business Consulting", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-11-30"},
    {name:"Protiviti Inc", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-19"},
    {name:"Red Hat Inc", seg:"Enterprise", arr:450500, pulse:"Extremely Satisfied", renewal:"2026-12-31"},
    {name:"SAP Inc", seg:"Strategic", arr:3051889, pulse:"Extremely Satisfied", renewal:"2026-07-21"},
    {name:"Siemens AG", seg:"Strategic", arr:888500, pulse:"Extremely Satisfied", renewal:"2026-09-09"},
    {name:"Softcat Ltd", seg:"Enterprise", arr:211667, pulse:"Extremely Satisfied", renewal:"2027-08-31"},
    {name:"Sopra Steria", seg:"Enterprise", arr:28000, pulse:"Some Risk", renewal:"2027-06-29"},
    {name:"Syskoplan Reply LLC", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-16"},
    {name:"Telefónica S.A", seg:"Strategic", arr:81000, pulse:"Some Risk", renewal:"2026-11-13"},
    {name:"UKG (Ultimate Kronos)", seg:"Enterprise", arr:447433, pulse:"Extremely Satisfied", renewal:"2026-12-31"},
    {name:"VASS", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-12"},
    {name:"Veeam Software AG", seg:"Enterprise", arr:822500, pulse:"Some Risk", renewal:"2027-12-31"},
    {name:"Westcon", seg:"Strategic", arr:535000, pulse:"Extremely Satisfied", renewal:"2028-10-31"}
  ],
  rani: [
    {name:"Amazon Web Services (AWS)", seg:"Strategic", arr:4622796, pulse:"Extremely Satisfied", renewal:"2026-06-30"},
    {name:"CloudFlare Inc", seg:"Enterprise", arr:697318, pulse:"Some Risk", renewal:"2026-07-13"},
    {name:"Docusign, Inc.", seg:"Enterprise", arr:205000, pulse:"Some Risk", renewal:"2026-12-31"},
    {name:"Elastic.co", seg:"Enterprise", arr:329525, pulse:"Some Risk", renewal:"2026-10-01"},
    {name:"Google Inc.", seg:"Strategic", arr:3380938, pulse:"Some Risk", renewal:"2026-12-31"},
    {name:"Hewlett Packard Enterprise", seg:"Strategic", arr:1188272, pulse:"High Risk", renewal:"2028-10-31"},
    {name:"Hitachi Vantara", seg:"Enterprise", arr:622400, pulse:"Some Risk", renewal:"2026-09-29"},
    {name:"Lenovo Group Ltd.", seg:"Strategic", arr:695733, pulse:"High Risk", renewal:"2026-12-29"},
    {name:"NetApp", seg:"Enterprise", arr:840680, pulse:"Some Risk", renewal:"2026-08-31"},
    {name:"Workday Inc", seg:"Enterprise", arr:815250, pulse:"Some Risk", renewal:"2026-09-14"}
  ],
  pam: [
    {name:"Cisco", seg:"Strategic", arr:2297646, pulse:"Some Risk", renewal:"2026-07-15"},
    {name:"Epicor Software Corporation", seg:"Enterprise", arr:216572, pulse:"Extremely Satisfied", renewal:"2027-03-22"},
    {name:"F5", seg:"Enterprise", arr:144000, pulse:"Extremely Satisfied", renewal:"2026-09-30"},
    {name:"Microsoft", seg:"Strategic", arr:1954167, pulse:"Extremely Satisfied", renewal:"2026-06-30"},
    {name:"NetSuite Inc", seg:"Enterprise", arr:35000, pulse:"Extremely Satisfied", renewal:"2026-09-30"},
    {name:"Oracle", seg:"Strategic", arr:1000000, pulse:"Extremely Satisfied", renewal:"2026-11-30"},
    {name:"ZoomInfo", seg:"Enterprise", arr:114000, pulse:"Severe Risk", renewal:"2026-06-30"}
  ],
  atisha: [
    {name:"Advanced Micro Devices, Inc.", seg:"Strategic", arr:157500, pulse:"Very Satisfied", renewal:"2026-12-31"},
    {name:"Apple Inc.", seg:"Strategic", arr:357600, pulse:"Very Satisfied", renewal:"2027-07-31"},
    {name:"Cognizant", seg:"Strategic", arr:45000, pulse:"Very Satisfied", renewal:"2026-06-10"},
    {name:"Databricks Inc.", seg:"Enterprise", arr:663284, pulse:"Very Satisfied", renewal:"2027-01-27"},
    {name:"Digital Realty Trust L.P.", seg:"Enterprise", arr:350000, pulse:"Very Satisfied", renewal:"2027-11-07"},
    {name:"Equinix, Inc.", seg:"Enterprise", arr:817500, pulse:"Some Risk", renewal:"2026-12-31"},
    {name:"Insight Direct USA Ltd", seg:"Enterprise", arr:260000, pulse:"Very Satisfied", renewal:"2026-11-30"},
    {name:"Intel Corporation", seg:"Strategic", arr:115021, pulse:"Extremely Satisfied", renewal:"2026-12-11"},
    {name:"Intuit", seg:"Strategic", arr:245000, pulse:"Very Satisfied", renewal:"2026-10-20"},
    {name:"Kyndryl", seg:"Strategic", arr:709748, pulse:"Very Satisfied", renewal:"2027-03-31"},
    {name:"Optiv Security Inc", seg:"Enterprise", arr:685997, pulse:"Very Satisfied", renewal:"2028-12-31"},
    {name:"RSM US", seg:"Enterprise", arr:115000, pulse:"Very Satisfied", renewal:"2026-09-07"},
    {name:"Salesforce Inc.", seg:"Strategic", arr:25000, pulse:"Very Satisfied", renewal:"2026-08-07"},
    {name:"Strada U.S. Professional Services, LLC", seg:"Mid-Market", arr:49350, pulse:"Very Satisfied", renewal:"2026-12-31"},
    {name:"TD Synnex", seg:"Strategic", arr:150000, pulse:"Severe Risk", renewal:"2027-01-31"}
  ],
  andy: [
    {name:"ADP, Inc", seg:"Strategic", arr:298800, pulse:"Some Risk", renewal:"2027-01-31"},
    {name:"ALIBABA.COM CHINA LIMITED", seg:"Strategic", arr:119700, pulse:"Some Risk", renewal:"2027-04-14"},
    {name:"Colt Technology Services", seg:"Enterprise", arr:514555, pulse:"Extremely Satisfied", renewal:"2027-03-30"},
    {name:"Cvent", seg:"Enterprise", arr:40000, pulse:"Very Satisfied", renewal:"2027-01-30"},
    {name:"Deloitte", seg:"Strategic", arr:365908, pulse:"High Risk", renewal:"2027-05-19"},
    {name:"FactSet Research Systems Inc", seg:"Enterprise", arr:40000, pulse:"Some Risk", renewal:"2026-07-15"},
    {name:"Fastly Inc", seg:"Mid-Market", arr:60000, pulse:"Some Risk", renewal:"2027-04-15"},
    {name:"Pure Storage", seg:"Enterprise", arr:225000, pulse:"Very Satisfied", renewal:"2027-11-09"},
    {name:"Sage Global Services", seg:"Enterprise", arr:223250, pulse:"High Risk", renewal:"2026-10-31"},
    {name:"SAS Institute Inc.", seg:"Enterprise", arr:460250, pulse:"Very Satisfied", renewal:"2027-01-01"},
    {name:"Tech Data Advanced Solutions (ANZ)", seg:"Strategic", arr:20000, pulse:"—", renewal:"2027-04-30"},
    {name:"Toast", seg:"Enterprise", arr:84000, pulse:"Extremely Satisfied", renewal:"2027-03-07"},
    {name:"Trintech (UK) Limited", seg:"SMB", arr:45000, pulse:"Very Satisfied", renewal:"2027-03-31"}
  ]
};
const CSM_NAME_MAP = {riley:'Riley Rogers',varun:'Varun Tiwari',divyam:'Divyam Dewan',nick:'Nick Johnson',rani:'Rani Guy',pam:'Pam Huck',atisha:'Atisha Waghela',andy:'Andy Lim'};
// INGESTION RULE: When rebuilding ACCOUNTS_DATA from Vitally or SFDC, exclude any opportunity
// where arr is 0, null, or missing. Zero-ARR entries are cleanup/closed placeholders that skew
// pulse rollups and latestPulseDate. Filter before writing: opps.filter(o => (o.arr || 0) > 0)
const ACCOUNTS_DATA = [
  {
    "accountId": "001d000001uHkYwAAK",
    "accountName": "Amazon Web Services (AWS)",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Mark Fell",
    "segment": "Strategic",
    "arr": 4622796,
    "lastOutbound": "2026-06-30",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "0063o000019kLTZAA2",
        "csm": "Rani Guy",
        "name": "AWS - HG Core and CD Renewal - MDM Team. Multi-Year Renewal 2024+",
        "arr": 4559796,
        "contract_end": "2027-06-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "May 15, 2026 | RG — AWS: File Review & Cloud Adoption Metrics (Weflow confirmed + 2 no-transcript calls)\n\nRani Guy facilitated 3 calls with AWS on May 15:\n\n1. 9:00 AM PT — HG Insights / AWS file review (30 min, Zoom, transcript confirmed): Rishabh Wadhwa presented cloud adoption metrics analysis (AWS/Azure/GCP penetration rates, AI maturity scores, enterprise/SMB distributions) to Madhavi Mallajoshyula and Luis Garcia. Discussion on AI maturity score definitions and future propensity indicators.\n\n2. 7:00 AM PT — Re: Manufacturing Execution System (no transcript)\n3. 10:00 AM PT — Bryce / Nick (no transcript)\n\nAccount remains Healthy. High-frequency engagement continues — 3 AWS calls in one day. Data actively powering competitive intelligence and cloud adoption analysis across multiple AWS go-to-market teams.",
        "pulseDate": "2026-05-16"
      }
    ]
  },
  {
    "accountId": "001d000001atpk3AAA",
    "accountName": "Google Inc.",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Mark Fell",
    "segment": "Strategic",
    "arr": 3380937.51,
    "lastOutbound": "2026-06-26",
    "pulse": "Concerning",
    "pulseNote": "",
    "pulseColor": "yellow",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000FrQRzYAN",
        "csm": "Rani Guy",
        "name": "Renewal - Google - GenAI and FAI - 12 Month Extension of POC for 2025 2026",
        "arr": 500000,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "GenAI Navigator will churn. We are fighting to showcase the value of FAI, if Noah's account briefs show the value we are halfway there. We are also engaged with Marianna and the FAI + Contact mapping is of keen interest to her. If we can prove this out than we have a chance to save FAI",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "0063o000019kQBgAAM",
        "csm": "Rani Guy",
        "name": "Google Base HG & Cloud Dynamic Renewal + Expansion - 3 Year Term",
        "arr": 2880937.51,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Based on emails and call recordings since January:\n\nEngagement is active and improving. Matt Harb (our 4th POC in 3 years) is responsive and engaged — he replied promptly to agenda prep ahead of our March 11 sync, added his own topics, and is actively working with us on the Cloud Dynamics V2 data fabric migration field prioritization exercise alongside Abhishek Varma.\n\nA new strategic layer of engagement has opened up: Mark Fell and Rohini Kasturi connected with Jessica Lane (Global Startup Practice Lead) and Laurence Fahey (Director of Revenue Acceleration, the decision-maker for 3P data) in early March. A leadership alignment meeting has been confirmed for March 17, which is a significant opportunity to reinforce the partnership at a senior level ahead of renewal discussions.\n\nPlatform adoption activity is a positive signal — multiple new GCP users were provisioned in early March (Hanna Harris, Dan Sivanovic, Benjie Wolf, Rick Avery, Sercan Tokdemir), and this week Sundar Hariharan (Director, Partner Services CoE) reached out directly to request access for another team member, indicating organic spread across Google Cloud teams.\n\nKey risk: The Cloud Dynamics/HGCD data fabric migration needs to be completed cleanly. Google's current usage of CD data is still not fully mapped — we don't yet know which fields Matt's team actually relies on vs. what's redundant with V2. This needs to be resolved before renewal architecture conversations begin.\n\nNext steps: March 17 leadership call with Laurence Fahey / Jessica Lane team; field prioritization exercise with Matt and Abhishek; QBR deck to be sent to Matt ahead of next session for tailoring.",
        "pulseDate": "2026-03-13"
      }
    ]
  },
  {
    "accountId": "001d000000E7MCiAAN",
    "accountName": "IBM",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 3331538.25,
    "lastOutbound": "2026-07-15",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-07-15",
    "opportunities": [
      {
        "opp_id": "006RN00000WORccYAH",
        "csm": "Nick Johnson",
        "name": "TR - IBM - CVP x2 CoTerm (Hashicorp)",
        "arr": 136320,
        "contract_end": "2026-12-31",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Confirming Concerning — last pulsed Apr 17. Export license restriction continues to block IBM Infra team from downloading data. Nick and Augie working on license reallocation across IBM teams but no resolution confirmed yet. Data hierarchy and subsidiary deduplication gaps also flagged. CDO office engagement (Bill O'Nesty, Peter Her, Ed Lovely) still required for enterprise alignment. Positive signal: IBM overall engagement remains strong with recent meetings. Next step: Resolve export license issue as P0, schedule CDO office introduction.",
        "pulseDate": "2026-05-11"
      },
      {
        "opp_id": "006RN00000Oq7eiYAB",
        "csm": "Riley Rogers",
        "name": "TR - IBM - CVP  Intent Data - 01.01.2026 (Written Renewal)",
        "arr": 1298884.92,
        "contract_end": "2027-12-31",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Pulse update\n\nBuyer’s Choice is the urgent focus. The team said IBM is currently tracking at 3–4 qualified products, versus 14–15 last year, and agreed current pacing will not be enough without new tactics. Tech Exchange will not help for Buyer’s Choice because it happens after the September 26 cutoff, though TrustRadius can allow a short grace period through September 30.\n\nTo close the gap, the team aligned on several immediate tactics. They discussed raising incentives from $25 to $50 for priority review campaigns, updating community banners, pushing user-group outreach, exploring business partner review sourcing, and continuing to test additional targeted campaigns such as LinkedIn. Data and AI products were the main priority set, with a few products described as close to qualifying.\n\nThe clearest next step was execution discipline. Riley said they would post the action summary in Slack, share the Buyer’s Choice product list/CSV, and pull a 2025 vs. 2026 review source comparison to identify what is underperforming this year. IBM-side owners also took follow-ups around banners, user groups, business partners, and identifying the right CSR owner for the separate Tech Cares nomination.\n\nThe team also agreed to move up the next sync and hold a 30-minute check-in next week so owners can review progress before Riley is out the week of July 29, 2026.",
        "pulseDate": "2026-07-15"
      },
      {
        "opp_id": "006RN00000OTEkvYAH",
        "csm": "Nick Johnson",
        "name": "IBM - Spend for Marketing",
        "arr": 1896333.33,
        "contract_end": "2028-11-29",
        "deal_type": "Amendment",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — active executive engagement through June with GenAI pricing and walkthrough sessions Jun 9-11 and CAC feedback call Jun 5. CDO office collaboration with Clayton and Augie remains strong; spend ingestion workstream in progress. Previous pulse (May 14) was Healthy. 0 open Jira tickets. Risk to watch: export license reallocation across IBM teams remains unresolved and could limit adoption metrics ahead of next review. Contract runs to Nov 2028 ($1.9M ARR) — no near-term renewal pressure.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d000000E7MkhAAF",
    "accountName": "SAP Inc",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Strategic",
    "arr": 3051888.7,
    "lastOutbound": "2026-06-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-21",
    "latestPulseDate": "2026-07-14",
    "opportunities": [
      {
        "opp_id": "006RN00000PzVWjYAN",
        "csm": "Riley Rogers",
        "name": "TR - SAP Finance CVP x3 11.3.25 - 7.21.26",
        "arr": 86904.12,
        "contract_end": "2026-07-21",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000RJuwbYAD",
        "csm": "Riley Rogers",
        "name": "TR - SAP America - CVP x5",
        "arr": 150692.74,
        "contract_end": "2026-07-27",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp6GYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP - CVP x 11, Mktg Report Bundle x19, Internationalization x13, Cat Intent Data x10, RMP x26  IDL - 07.28.2025",
        "arr": 1232100,
        "contract_end": "2026-07-27",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Oq7e2YAB",
        "csm": "Nick Johnson",
        "name": "TR - SAP S.4HANA - CVP - 02.17.2026 (Written Renewal) - Bridge to 7.28.26",
        "arr": 24701.38,
        "contract_end": "2026-07-28",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000OpukbYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Field Glass - CVP - 07.31.2025",
        "arr": 28000,
        "contract_end": "2026-07-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000OpukaYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Workforce Intent - Cat Intent Data Tier 1 - 07.31.2025",
        "arr": 22000,
        "contract_end": "2026-07-30",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000OpukZYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Ariba - Intent Data - 07.31.2025",
        "arr": 22000,
        "contract_end": "2026-07-30",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000OpukYYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Ariba - CVP - 07.31.2025",
        "arr": 28000,
        "contract_end": "2026-07-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "### Overall\n\n-   **Moderately healthy, with execution still in progress.**\n\n### What looks good\n\n-   Product profile updates are moving: Ashleigh already sent completed updates, with three more still in progress.\n    \n-   Review generation is producing results: **29 reviews** have been driven across new products since the program started.\n    \n-   The team is actively pushing additional review volume, including a review generation workshop over the next two days.\n    \n-   Ashleigh appears engaged and informed across both review generation and amplification efforts.\n    \n\n### Watchouts\n\n-   Three product profiles are still pending because Ashleigh is waiting to track down product managers.\n    \n-   Global Trade Services has only added **one review** since new leads were introduced, so progress is uneven across products.\n    \n-   Renewal timing is slowed by SAP’s 2027 budget planning process not being open yet.\n    \n\n### Risk level\n\n-   **Yellow**\n    \n    -   Engagement is solid.\n        \n    -   Delivery is moving.\n        \n    -   A few operational blockers remain around pending profiles and renewal structure.",
        "pulseDate": "2026-06-25"
      },
      {
        "opp_id": "006RN00000OpukKYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Ariba - Market Report - 08.01.2025",
        "arr": 7500,
        "contract_end": "2026-07-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp6DYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Fieldglass - Market Report - 08.01.2025",
        "arr": 7500,
        "contract_end": "2026-07-31",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opp6LYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Migration - Market Report - 08.01.2025",
        "arr": 7500,
        "contract_end": "2026-07-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp6KYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP - Competitive Report  Internationalization x7 - 08.01.2025",
        "arr": 15900,
        "contract_end": "2026-07-31",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opp6JYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP - Internationalization x7  Mktg Report Bundle - 08.01.2025",
        "arr": 15900,
        "contract_end": "2026-07-31",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opp6IYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP - Internationalization x8 - 08.01.2025",
        "arr": 9600,
        "contract_end": "2026-07-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp64YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Fieldglass - Internationalization - 08.30.2025",
        "arr": 1400,
        "contract_end": "2026-08-29",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opp65YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Ariba - Internationalization x2 - 08.30.2025",
        "arr": 2800,
        "contract_end": "2026-08-29",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opuk4YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP SuccessFactors - IDL(300) - 09.24.2025",
        "arr": 30000,
        "contract_end": "2026-09-23",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opp62YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Business Data Cloud - IDL (902) - 09.24.2025",
        "arr": 90168.54,
        "contract_end": "2026-09-23",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp60YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP - Internationalization x7 - 09.29.2025",
        "arr": 8400,
        "contract_end": "2026-09-28",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000OpujwYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP SPM - CVP  Market Report - 10.01.2025",
        "arr": 28000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN000008rZr3YAE",
        "csm": "Nick Johnson",
        "name": "Renewal - SAP Install Subscription 2024",
        "arr": 432600,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy for the SAP Install Subscription ($432K ARR, Sept 30, 2026 renewal). Sentiment across the HG platform relationship remains strongly positive: as of June 9, 2026, Adriana Aguiar (Crystal Ball team) is actively using the HG portal for product mapping uploads, and Franklin Herbas has confirmed attendance at the HG Executive Summit July 20–22, signaling continued executive-level commitment to the partnership. The Phoenix MCP trial (approved May 2026, 10,000 credits) generated visible enthusiasm from key stakeholders — Alejandro Barajas described pilot features as \"exactly what I wanted to see\" — and a $100K expansion opportunity is in Stage 3 Validation with a September close date. The data feed product allocation dispute (SAP requesting 325 product additions/removals beyond the 1,200-product limit) was marked resolved in the March 6 pulse note, and renewal discussions are booked for July per the same update. No open CPF Jira tickets exist for this account. This pulse is consistent with the prior \"Extremely Satisfied\" SFDC pulse (last updated March 6, 2026) and reaffirms Healthy status heading into the July renewal conversation.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "006RN00000PrjOnYAJ",
        "csm": "Riley Rogers",
        "name": "TR Market Report 10.23",
        "arr": 14700,
        "contract_end": "2026-10-23",
        "deal_type": "Periodic",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Py0y1YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Concur - IDL (750 Leads)",
        "arr": 60000,
        "contract_end": "2026-10-26",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "## SAP Concur Pulse Check\n\n### Overall\n\n-   Relationship appears healthy and engaged.\n    \n-   Stephanie was receptive, conversational, and interested in upcoming reporting enhancements.\n    \n-   No escalations or urgent risks surfaced in this call.\n    \n\n### What’s going well\n\n-   **AI visibility / GEO dashboard interest:** Stephanie engaged on the upcoming dashboard and connected it to internal SEO/AI reporting work.\n    \n-   **Pricing transparency progress:** She shared that SAP Concur finally published pricing publicly and updated view-site listings with specific dollar amounts.\n    \n-   **Campaign traction:** She said the current campaign is too early to judge, but they saw a “chunk of pipeline” from Q4 campaigns, which was encouraging.\n    \n-   **Operational expansion:** A new team member, Ella, is starting and will help with reporting, which creates an opportunity to deepen adoption of TrustRadius reporting workflows.\n    \n\n### Risks / watchouts\n\n-   **Access timing:** The new dashboard is not live yet, so value is still being shown through a Looker preview rather than in-platform access.\n    \n-   **Call logistics:** This meeting had invite/link confusion at the start, which could create a poor customer experience if it repeats.\n    \n-   **Internal readiness:** The team noted they have not been consistently doing pre-call prep, despite multiple SAP-related customer calls in a day.\n    \n\n### Customer priorities / signals\n\n-   **AI and LLM performance:** Stephanie is paying attention to branded/category search behavior across tools like ChatGPT and Gemini, including geographic differences.\n    \n-   **Measurement and reporting:** She wants stronger reporting around review-site performance and AI-related changes, and Ella will likely own part of that moving forward.\n    \n-   **Lead quality / ROI:** She was interested in improving the HG Insights program toward more qualified, contextualized lead delivery rather than raw lead flow.\n    \n\n### Suggested account sentiment\n\n-   **Status:** Green\n    \n-   **Reason:** Positive engagement, strategic interest, no active dissatisfaction, and concrete future enablement opportunities.\n    \n\n### Recommended follow-up\n\n-   Add Ella to future calls and train her on vendor portal reporting once the dashboard is live.\n    \n-   Reconfirm the July rollout timing and use the July meeting to onboard SAP Concur to the new dashboard/report scheduling flow.",
        "pulseDate": "2026-06-25"
      },
      {
        "opp_id": "006RN00000R6s7qYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Joule for Consultants - Worked with LEO IDL",
        "arr": 40000,
        "contract_end": "2026-10-26",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000PzWcTYAV",
        "csm": "Riley Rogers",
        "name": "TR - SAP Event Support",
        "arr": 69300,
        "contract_end": "2026-11-03",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Pz0r9YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Market Report(15), Competitive Report(15), Translation",
        "arr": 225000,
        "contract_end": "2026-11-09",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000PynNhYAJ",
        "csm": "Riley Rogers",
        "name": "TR - SAP SuccessFactors IDL (330)",
        "arr": 33000,
        "contract_end": "2026-11-10",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Oq7euYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Sales, Service, Commerce Cloud - CVPx3 - 01.01.2026 (Written Renewal)",
        "arr": 47500,
        "contract_end": "2026-12-02",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   **Urgent execution items:** SAP needs **two review-generation newsletter links** for upcoming sends: **Commerce Cloud ASAP/today** and **Sales & Service by end of week**, with the latter allowing the customer to choose Sales vs. Service once they click. A **Service Cloud reviewer** reported not receiving an incentive; review source was checked and it came in **organically**, so TrustRadius will still send a **$25 gift card**.\n    \n-   **Renewal is progressing:** SAP said the **renewal is in process** and a **consolidated PO** covering **Sales, Service, Commerce, and SBM** should be shared soon.\n    \n-   **Content/report usage is real and cross-channel:** SAP said the existing TrustRadius market reports are being used in **paid social**, **LinkedIn retargeting**, **content syndication emails**, and **sales content syndication/email initiatives**. They want costs/options for keeping current assets live through the rest of the year and evaluating refreshed versions.\n    \n-   **Commercial framing discussed:** Current ballpark shared was **$7.5k per report**, **$1.2k per translation** at volume, and **+$5k per report** for **GEO-hosted** versions. TrustRadius also offered a temporary extension of current reports while new ones are in progress.\n    \n-   **Strategic theme:** SAP showed interest in **GEO / AI-search visibility**, including crawler analytics, hosted report discoverability, and how gated vs. ungated content could support both demand gen and LLM presence. Merrill also raised a key **lead-gen pilot concern**: understanding the split between **install-base vs. net-new** leads.\n    \n-   **Recommended internal focus:** Close the loop fast on the **link delivery**, **gift card**, and **pricing email**, then use the next touchpoint to deepen the **GEO dashboard walkthrough** and clarify **lead-gen targeting/reporting**.",
        "pulseDate": "2026-07-14"
      },
      {
        "opp_id": "006RN00000SCBXRYA5",
        "csm": "Riley Rogers",
        "name": "TR - SAP IDL Content $25k",
        "arr": 25000,
        "contract_end": "2026-12-03",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Oq7eyYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP SuccessFactors - CVP  Event Support x2 - 01.01.2026 (Written Renewal)",
        "arr": 44000,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Oq7bmYAB",
        "csm": "Nick Johnson",
        "name": "TR - SAP Business Technology Platform - CVP - 04.04.2026 (Written Renewal)",
        "arr": 8821.92,
        "contract_end": "2027-03-22",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Met with SAP BTP team on **May 26**. Main discussion centered on SAP’s transition from **BTP to the new “Business AI Platform.”** SAP shared that **BTP will no longer be customer-facing externally**, though it’s still used internally as the technical foundation. They’re now evaluating how this should map on TrustRadius: whether to create a **single Business AI Platform listing** or maintain **separate product/category listings** for the underlying solutions. A key concern is making sure reviews flow to the right **IDP/content teams**, since the current BTP setup lacks IDP alignment and limits downstream content value. They also flagged concern around **competitive positioning** if the platform is too broadly categorized.\n\nEvent-wise, **Sapphire Orlando and Madrid generated strong review volume**, and SAP is planning for a solid **H2 event pipeline** including **SAP Connect Las Vegas, SAP TechEd Berlin, SAP Insider New Orleans, ASUG Tech Connect Fort Worth, SAP Insider Copenhagen, and SAP Collaborate Sydney**. Chris also shared that the **Customer Identity Management team is interested**, but **does not currently have H2 budget**, so they may need to explore inclusion through the **July enterprise renewal structure** or separate funding.\n\n**Next steps**\n\n-   Chris to align internally with Alejandro on the **BTP / Business AI Platform strategy**.\n    \n-   After internal alignment, schedule a session with the **TrustRadius research team** to evaluate listing/taxonomy options.\n    \n-   Team is still **waiting on Mark for event numbers** tied to the **2:30 PM deadline**.",
        "pulseDate": "2026-05-26"
      },
      {
        "opp_id": "006RN00000Oq7bJYAR",
        "name": "TR - SAP Business Data Cloud - CVP - 05.14.2026 (Written Renewal)",
        "arr": 28000.0,
        "renewalDate": "2026-07-28",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Oq7bLYAR",
        "name": "TR - SAP Integration Suite - CVP - 05.12.2026 (Written Renewal)",
        "arr": 28000.0,
        "renewalDate": "2026-07-28",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Oq7bMYAR",
        "name": "TR - SAP Digital Manufacturing - CVP - 05.12.2026 (Written Renewal)",
        "arr": 28000.0,
        "renewalDate": "2026-07-28",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Oq7bSYAR",
        "name": "TR - SAP - Integrated Business Planning - CVP  Market Report - 05.02.2026 (Written Renewal)",
        "arr": 28000.0,
        "renewalDate": "2026-07-28",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Oq7bUYAR",
        "name": "TR - SAP Business Network - CVP - 05.01.2026 (Written Renewal)",
        "arr": 28000.0,
        "renewalDate": "2026-07-28",
        "pulse": "Healthy",
        "pulseDate": "2026-06-25",
        "pulseNote": "### Overall\n\n-   Relationship appears **healthy and engaged**. Kathryn was collaborative, asked detailed product questions, and responded positively to support offered in the portal walkthrough.\n    \n-   Main risk is **operational, not strategic**: invoice/vendor-name mismatch is creating procurement friction across roughly **8–10 invoices**.\n    \n\n### What’s going well\n\n-   Kathryn is actively using the vendor portal and is interested in getting more value from reviews and quotes for content use.\n    \n-   SAP was receptive to TrustRadius/HG handling review tagging on their behalf once tags are cleaned up.\n    \n-   New portal analytics landed well; Kathryn reacted positively to Crawl Analytics and export/scheduled delivery options.\n    \n-   Renewal conversation tone was constructive; advanced AI tracking packaging was framed as an upgrade path, not a point of tension.\n    \n\n### Risks / friction\n\n-   SAP’s system blocked an invoice because the **PO names TrustRadius** while the **invoice came from HG Insights**.\n    \n-   The same vendor mismatch may affect the **market report invoice** and additional invoices.\n    \n-   There is portal confusion around **review tagging UX** and a likely bug where **“only selected products”** appears to populate all SAP products instead of Business Network only.\n    \n\n### Customer signals\n\n-   Kathryn said she wants to use review quotes in a **blog**, which suggests active interest in advocacy/content activation.\n    \n-   She also showed interest in **reference candidates** and **revealing verified users**, indicating openness to broader customer proof use cases.\n    \n\n### Recommended status\n\n-   **Status:** Green with a yellow operational flag\n\n### Immediate follow-up\n\n-   Resolve invoice path and confirm whether TrustRadius can resend under the matching vendor name.\n    \n-   Investigate and report the tag-group product-selection bug.\n    \n-   Help Kathryn finalize review tags, then run tagging for her team.",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Oq7bVYAR",
        "name": "TR - SAP Build - CVP - 05.01.2026 (Written Renewal)",
        "arr": 28000.0,
        "renewalDate": "2026-07-28",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Oq7bcYAB",
        "name": "TR - SAP Joule - CVP - 04.28.2026 (Written Renewal)",
        "arr": 28000.0,
        "renewalDate": "2026-07-28",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Pz9IJYAZ",
        "name": "TR - SAP Joule for Consultants - Worked with LEO - Buyer Intent ONLY",
        "arr": 0.0,
        "renewalDate": "2026-07-21",
        "pulse": "Healthy",
        "pulseDate": "2026-05-06",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000WXgKeYAL",
        "name": "TR - SAP SuccessFactors - Competitive Report vs Workday + Translations(9)",
        "arr": 18300.0,
        "renewalDate": "2026-12-31",
        "pulse": "Healthy",
        "pulseDate": "2026-05-11",
        "pulseNote": "First pulse for SAP SuccessFactors Competitive Report, establishing baseline at Healthy. Contract won Apr 28, 2026 — very recent. In onboarding phase. Org pulse Extremely Satisfied. No risks flagged. Next step: Ensure competitive report delivery and translation work are on track.",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000WXn9EYAT",
        "name": "TR - SAP SuccessFactors - HCM Core HR + Translations(8)",
        "arr": 17100.0,
        "renewalDate": "2026-12-31",
        "pulse": "Healthy",
        "pulseDate": "2026-06-25",
        "pulseNote": "### Content & Reports Pipeline\n\n-   **Cross-suite install base report** (2 versions: enterprise + mid-market): first batch delivered to Janessa & Katie; Corey Char batch following\n    \n-   **Workday competitive report**: complete & invoiced; being used in a Workday compete nurture stream and H2 ABM pilot — SuccessFactors Top Rated badges featured (Workday earned none)\n    \n-   **Cloud migration report**: received, minimal feedback, awaiting team sign-off\n    \n-   **Customer story one-pagers**: Kristin finalizing review candidate list; cons sections confirmed excluded from assets\n    \n-   **Multiple SOWs** (install base, cloud migration, Corey Char) were in procurement as of Apr 30\n    \n\n---\n\n### 🎯 GEO / AI Search\n\n-   SuccessFactors flagged as a **pilot candidate** for HTML-hosted market reports (~$7,500) for LLM crawlability\n    \n-   Workday report unlikely to be gated — good fit for GEO hosting\n    \n-   HR category on TrustRadius is one of the largest → SuccessFactors may receive extra GEO reporting\n    \n-   SAP internally working on consistent AI/LLM presence across all solutions\n    \n\n---\n\n### 📅 Events\n\n-   **SAP Connect (October)**: shared floor presence confirmed — 1 TrustRadius rep + 1 G2 rep; Kristin wants more SuccessFactors-specific activity (needs events team approval)\n    \n-   **HR Connect London video reviews** (captured April): still not live on platform — flagged for follow-up\n    \n-   **HR Connect New York**: severely underperformed (only 3–4 reviews from 100+ attendees); TrustRadius offered a makeup event at no cost\n    \n\n---\n\n### 💰 Budget & Renewal\n\n-   Tim confirmed SuccessFactors LOB budget is in good shape for now\n    \n-   Broader SAP-wide 2027 renewal scope to be addressed by end of year\n    \n-   36–37 products under active subscription; 5–6 on bridge agreements pending RFP\n    \n\n---\n\n### ⚠️ Open Items / Watch\n\n-   Contractor list for events still outstanding from Alejandro (requested 2+ years ago)\n    \n-   SAP content team restructuring creating friction — Samantha Twardowski flagged as a challenging stakeholder\n    \n-   SmartRecruiters (acquired by SAP) integration with SuccessFactors delayed due to org changes\n    \n-   Intent lead program: SuccessFactors likely to break away for independent campaign in Q2–Q3",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000We3hZYAR",
        "name": "TR SAP Cloud for: EHS Environmental Mgmnt, EHS Workplace Safety,Product Compliance CVP+ Rev Accel",
        "arr": 172750.68,
        "renewalDate": "2026-07-28",
        "pulse": "Healthy",
        "pulseDate": "2026-07-14",
        "pulseNote": "SAP is exploring how TrustRadius content can improve SAP Cloud ERP visibility in AI search and LLM-generated answers, with strong interest in GEO-ready hosted reports and prompt-level tracking for branded vs. unbranded terms.\n\nVictoria raised two immediate priorities: a UK/Ireland-only report to support a workshop this week, and better understanding of how SAP’s shifting product names like RISE, Grow, SAP Grow, and S/4HANA are surfacing in AI prompts.\n\nTrustRadius shared that SAP’s product profile pages are already being optimized with industry and firmographic slices for both buyers and LLMs, while GEO-hosted reports remain an add-on option that could be timed around campaign windows to preserve lead capture.\n\n**Near-term signal:** SAP appears engaged and curious, but still early in evaluating the GEO-hosting value proposition and will likely need a follow-up conversation next week to absorb the details and decide how to proceed.",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000YMEvCYAX",
        "name": "TR - SAP SuccessFactors Cloud Migration Market Report (Refresh)",
        "arr": 13066.67,
        "renewalDate": "2026-12-31",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000YawBbYAJ",
        "name": "TR - SAP SuccessFactors Cross Suite Install-Base Market Report (2) + Translations (10)",
        "arr": 15000.0,
        "renewalDate": "2026-12-31",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      },
      {
        "opp_id": "006RN00000Yb75NYAR",
        "name": "TR - SAP Business Network - Market Report Refresh",
        "arr": 0.0,
        "renewalDate": "2026-12-31",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      }
    ]
  },
  {
    "accountId": "0013o00002eIHxhAAG",
    "accountName": "Cisco",
    "csm": "Pam Huck",
    "csmKey": "pam",
    "am": "Adrian Escobar",
    "segment": "Strategic",
    "arr": 2297645.56,
    "lastOutbound": "2026-07-14",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-25",
    "latestPulseDate": "2026-07-11",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukyYAB",
        "csm": "Pam Huck",
        "name": "TR - Cisco - Intent Driven Leads - 07.16.2025",
        "arr": 222560,
        "contract_end": "2026-07-15",
        "deal_type": "Renewal",
        "pulse": "Poor",
        "pulseNote": "For Cisco IDL opportunities, we are working to satisfy their new initiative of more sales ready leads and adopting their quarterly buy method if necessary. Currently proposing a workshop and pilot as proof of concept. Target date for workshop in Raleigh, end of June or early July",
        "pulseDate": "2026-06-12"
      },
      {
        "opp_id": "006RN00000Opp6AYAR",
        "csm": "Pam Huck",
        "name": "TR - Cisco Duo Pilot - IDL - 08.06.2025",
        "arr": 25000,
        "contract_end": "2026-08-05",
        "deal_type": "Expansion",
        "pulse": "Poor",
        "pulseNote": "For Cisco IDL opportunities, we are working to satisfy their new initiative of more sales ready leads and adopting their quarterly buy method if necessary. Currently proposing a workshop and pilot as proof of concept. Continuing to drive Cisco for a date for workshop in Raleigh, in July",
        "pulseDate": "2026-07-01"
      },
      {
        "opp_id": "006RN00000OpukzYAB",
        "csm": "Pam Huck",
        "name": "TR - Cisco - Intent Driven Leads - 09.13.2025",
        "arr": 500000,
        "contract_end": "2026-09-12",
        "deal_type": "Renewal",
        "pulse": "Poor",
        "pulseNote": "For Cisco IDL opportunities, we are working to satisfy their new initiative of more sales ready leads and adopting their quarterly buy method if necessary. Currently proposing a workshop and pilot as proof of concept. Target date for workshop in Raleigh, end of June or early July",
        "pulseDate": "2026-06-12"
      },
      {
        "opp_id": "006RN00000CIY9BYAX",
        "csm": "Rani Guy",
        "name": "Renewal - Cisco WarRoom: 12-month Data 2025",
        "arr": 300000,
        "contract_end": "2026-10-06",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "we met with Roy and discussed the renewal. Cisco's FY is at the end of July so we won't have a clear path until the end of this month. We are encouraging Roy to start the procurement process soon as this is a painfully long process. Partnership is strong but Cisco is unpredictable.",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN000001rwLRYAY",
        "csm": "Rani Guy",
        "name": "Cisco - New Business - Observability - 1 Opp Gen + SF connector",
        "arr": 105000,
        "contract_end": "2026-10-18",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Ginette our main POC is attending EBR and will have some of her colleagues join remotely. This is a critical opportunity to convince her boss Nicole or the additional value they can get from their current investment. We are not a budgeted line item since they inherited HG contract from AppDynamics. I am working on the agenda for EBR which Adrian will lead since I will be at the Workday EBR",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000Opul0YAB",
        "csm": "Pam Huck",
        "name": "TR - Cisco - IDL - 11.04.2025",
        "arr": 500000,
        "contract_end": "2026-11-03",
        "deal_type": "Renewal",
        "pulse": "Poor",
        "pulseNote": "For Cisco IDL opportunities, we are working to satisfy their new initiative of more sales ready leads and adopting their quarterly buy method if necessary. Currently proposing a workshop and pilot as proof of concept. Target date for workshop in Raleigh, end of June or early July",
        "pulseDate": "2026-06-12"
      },
      {
        "opp_id": "006RN00000Oq5RUYAZ",
        "name": "TR(Opportunity Cleanup) - Cisco - Q1 Additional(1750) - CLOSED IN TR",
        "arr": 0.0,
        "renewalDate": "2026-10-05",
        "pulse": "Healthy",
        "pulseDate": "2026-06-12",
        "pulseNote": "CLean Up opp",
        "csm": "Pam Huck"
      },
      {
        "opp_id": "006RN00000Oq7bGYAR",
        "name": "TR - Cisco - CVP ELA , Premium Content Assets x30,  SSO Connection - 05.15.2026 (Written Renewal)",
        "arr": 1359256.62,
        "renewalDate": "2026-07-25",
        "pulse": "Poor",
        "pulseDate": "2026-07-11",
        "pulseNote": "Downgrading to Poor — highest risk of churn. The June 10 call, attended by exec sponsor James Tudway, was Cisco informing us of procurement pressure to consolidate vendor spend onto their existing PeerSpot contract (covering Security and Collaboration), driven by PeerSpot's AWS Marketplace review showcase — a clear ROI path TrustRadius doesn't currently match. Mellissa Jensen anticipates her budget being cut to $600K–$800K annually via quarterly buys (down from the current $1.3M), and was explicit that this has nothing to do with the level of service we've provided — engagement remains strong, and we've cleared both the GEO Security Assessment and AI visibility data/methodology review. Contract ends July 24 (13 days out); needs continued executive engagement and a competitive response to PeerSpot.",
        "csm": "Pam Huck"
      },
      {
        "opp_id": "006RN00000YvarBYAR",
        "name": "Cisco - Marimuthu MK Platform and Data 05.27.2026",
        "arr": 40000.0,
        "renewalDate": "2027-05-26",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Rani Guy"
      }
    ]
  },
  {
    "accountId": "001d000001imTiOAAU",
    "accountName": "Microsoft",
    "csm": "Pam Huck",
    "csmKey": "pam",
    "am": "Mark Fell",
    "segment": "Strategic",
    "arr": 1954167,
    "lastOutbound": "2026-07-15",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "2026-07-07",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukIYAR",
        "csm": "Pam Huck",
        "name": "TR - Microsoft - CVP x6, Mkt Report x6  Event Support x2 - 08.01.2025",
        "arr": 105000,
        "contract_end": "2026-07-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "July 7, 2026 | PH — Microsoft Security TR Renewal. Confirming Healthy, no change from the June 3 pulse. Today's call with Maryann Okonkwo and the HG events team locked in Black Hat planning: target of 40 reviews (matching RSA), audio as the primary collection format with 1-2 video reviews to test on social, and product focus shifting to the new FY27 AI narrative pillars (Security with AI, Defend with AI, Readiness for AI across Sentinel, Entra, Purview, Copilot, Defender). Execution is moving forward with clear next steps on both sides (custom question revisions, attendee logistics, event team kickoff). One forward-looking item to watch: Maryann flagged early concern about FY28 continuation, citing low PMM utilization of review assets and possible budget reprioritization toward Gartner. Not an immediate risk to the Aug 1 renewal, but worth a dedicated brainstorm session (already proposed) on driving more visible usage of the program's output.",
        "pulseDate": "2026-07-07"
      },
      {
        "opp_id": "006RN00000V70hOYAR",
        "name": "Microsoft - Contract Consolidation. AIBS, CAIP, Security. One co-term agreement. ntent, FAI and Spend expansion.",
        "arr": 3155846.0,
        "renewalDate": "2027-06-30",
        "pulse": "Healthy",
        "pulseDate": "2026-06-30",
        "pulseNote": "Confirming Healthy, no change from the June 26 pulse (initial consolidated-renewal data delivery completed). The June 30 deep-dive with Microsoft's Global CX/CE&S team (Shireen Asous, Tom Mowat, Mike Friday, Namrata Karnam, Will Norris) covered data methodology and use cases as the team onboards to the data, including their SMB scope under the FY27 renewal, with the team eager for short-term platform access ahead of their mid-August SMB executive reviews. Trajectory is positive, with platform-access follow-up and the July 1 matching deep-dive as near-term momentum.",
        "csm": "Pam Huck"
      }
    ]
  },
  {
    "accountId": "001d0000024EtocAAC",
    "accountName": "Hewlett Packard Enterprise Co",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Adrian Escobar",
    "segment": "Strategic",
    "arr": 1188272,
    "lastOutbound": "2026-07-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-05-31",
    "latestPulseDate": "2026-03-13",
    "opportunities": [
      {
        "opp_id": "006RN000002vQHZYA2",
        "csm": "Rani Guy",
        "name": "HPE - HG Universe Renewal (Install + Account and Relative Spend File) - Year 3 Opt Out Deci2025",
        "arr": 1010772,
        "contract_end": "2028-10-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Status: TrustRadius buyer intent data is under active evaluation by Dies Varghese, Aswin Govindaraj, and Tarun Agarwal. The current agreement (three intent categories, two customer voice programs) runs through June 30, 2026. HPE has not yet gained sufficient understanding of the methodology, scoring, or integration options to make a renewal decision.",
        "pulseDate": "2026-03-13"
      }
    ]
  },
  {
    "accountId": "001d000001iAMyJAAW",
    "accountName": "Oracle",
    "csm": "Pam Huck",
    "csmKey": "pam",
    "am": "Mark Fell",
    "segment": "Strategic",
    "arr": 1000000,
    "lastOutbound": "2026-07-16",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-07-16",
    "opportunities": [
      {
        "opp_id": "0063o000019RefTAAS",
        "csm": "Pam Huck",
        "name": "Oracle - Renewal - 100 vendors and NA IT spend only",
        "arr": 1000000,
        "contract_end": "2026-11-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Contract ownership on the $1M ARR renewal (Nov 30, 2026) is still unresolved as of today's call (7/16) — seven weeks past the \"dust should settle within a month\" estimate from the May 28 call. Joe now reports to John Malone as of yesterday and doesn't expect his team to own the contract; however they do own the data and continue to rely heavily on it. Joe's escalating to John tomorrow. Paulette's V2 migration security approvals are done but migration has stalled, potentially due to ownership issue.  EOL October 1 — meaning data could go stale during renewal negotiations if this isn't resolved  Mitigating factors: Joe remains constructive and is pushing internally, and adjacent workstreams (NetSuite MCP trial kickoff 7/20, Unity interest from Bert and Bence show real expansion motion elsewhere in the account.",
        "pulseDate": "2026-07-16"
      }
    ]
  },
  {
    "accountId": "001d000001aQssxAAC",
    "accountName": "Siemens AG",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Strategic",
    "arr": 888499.76,
    "lastOutbound": "2026-07-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-09",
    "latestPulseDate": "2026-06-29",
    "opportunities": [
      {
        "opp_id": "006RN00000NZfkcYAD",
        "csm": "Nick Johnson",
        "name": "Siemens - MCP & Agent Opp. MK",
        "arr": 50000,
        "contract_end": "2026-09-09",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Siemens team are utilising the consumption strongly and hitting the consumption limits.",
        "pulseDate": "2026-06-29"
      },
      {
        "opp_id": "006RN00000NcIGPYA3",
        "csm": "Nick Johnson",
        "name": "Siemens Corporate Strategy / Market Intelligence",
        "arr": 50000,
        "contract_end": "2026-12-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — Corp Strategy/MI expansion ($50K) in onboarding; Celeste Blythe engaged as champion with platform trial arranged by Angus Hyams. Org-level sentiment \"Thriving\" with biweekly sync confirmed Jun 4. Previous pulse (Apr 8) Healthy. 0 open Jira tickets. Newer opp (won Sep 2025) with Dec 2026 end date; focus is demonstrating MI value for market intelligence and data consolidation workflows before renewal discussions. No risk signals — aligned with broader positive Siemens AG relationship.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "0063o000019TLy3AAG",
        "csm": "Nick Johnson",
        "name": "Renewal - Siemens AG- DISW Global 2024",
        "arr": 546000.01,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Supporting wide use cases - will come under main contract",
        "pulseDate": "2026-06-29"
      },
      {
        "opp_id": "006RN00000Him8oYAB",
        "csm": "Nick Johnson",
        "name": "SIemens - Time Series for Churn Mitigation",
        "arr": 242499.75,
        "contract_end": "2026-12-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Continued good usage and activity around HG's data. Likely F2F in September to align on 2027 approaches and confirm the renewal",
        "pulseDate": "2026-06-29"
      }
    ]
  },
  {
    "accountId": "001d000000YylE3AAJ",
    "accountName": "Infor (US), LLC",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 882665.67,
    "lastOutbound": "2026-06-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-01",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN000001HfpNYAS",
        "csm": "Nick Johnson",
        "name": "Infor - Bain Money Mapping Universe Expansion",
        "arr": 690000,
        "contract_end": "2026-10-01",
        "deal_type": "Amendment",
        "pulse": "Concerning",
        "pulseNote": "As of mid-June 2026, Infor's $690K Bain Money Mapping Universe contract — the largest single HG engagement for this account — is in active pre-renewal evaluation with an October 2, 2026 expiry and a September 1 close target less than 90 days out. Recent signals are mixed: the Snowflake pipeline is fully operational and delivering monthly data drops (1.4M install + 321K spend signals as of June 11), Nicole Morgan attended the London CAC and GTM dinner on June 9 and confirmed on June 1 that \"your data tells us more than what we have in Salesforce — this helps the DMF and purchase decision,\" and Ben Beadle described HG as \"the only external signal that validates what Salesforce claims about our install base.\" However, Infor's ELT raised a concern in April 2026 about moving to a 2+ year data refresh cycle, a validation dataset was only delivered May 27 and is still being evaluated internally, Zach Dunlevy (a key stakeholder for the propensity modeling use case) deferred his Market Analyzer walkthrough on May 22 citing \"fire drills\" with no rescheduled date confirmed, and the $850K renewal quote (for 250 products across 1M companies) is framed against options ranging from $850K to $8M with Infor's scope decision still pending. There are 0 open Jira tickets. The account is rated Concerning given the high-stakes renewal timeline, unresolved ELT objection on refresh frequency, and pending internal alignment — strong champion language and operational data delivery are real mitigating factors, but insufficient to rate Healthy until the scope and renewal decision are confirmed.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "006RN000004pPdEYAU",
        "csm": "Nick Johnson",
        "name": "Infor - Salesforce Connector",
        "arr": 62666.67,
        "contract_end": "2026-10-01",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "As of mid-June 2026, the Infor Salesforce Connector opportunity ($62,667 ARR, expiring October 2, 2026) carries a meaningful renewal risk that warrants a Concerning pulse. Salesforce Connector usage dropped from over 300,000 records enriched per month in December 2025 to zero by March 2026 — Nick Johnson flagged this on April 10 but no root cause has been documented, and internal commentary from the prior pulse (April 16) notes Infor made an explicit decision to drop the SF Connector and reallocate that budget. The account's broader engagement is positive — Infor's Snowflake pipeline is operational, the product tracking list expanded to 275 products as of June 11, and Nicole Morgan attended the London CAC on June 9 — but these signals all point to the Snowflake/data feed track rather than the Salesforce Connector. There are 0 open Jira tickets. The Connector is likely to be cut at renewal given zero active usage and explicit budget reallocation intent; this opportunity should be monitored but is at material risk of churn unless a reactivation use case is identified before the Q3 renewal conversation.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "006RN00000Oq7fUYAR",
        "csm": "Nick Johnson",
        "name": "TR - Infor - CVP, Lead Acceleration, Intent Data Trial - 11.07.2025 (Auto Renewal)",
        "arr": 30000,
        "contract_end": "2026-11-06",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Establishing first pulse for the TR CVP, Lead Acceleration, and Intent Data Trial opportunity ($30K ARR, auto-renewed November 2025, expiring November 6, 2026). The TrustRadius program has seen minimal traction to date: a prior IDL campaign (200 leads, August–October 2025) cycled through standard 5–6 email nurture sequences with no documented wins, and the primary TR point of contact (Kenny Gudmundson, Supply Chain Marketing Manager) was unreachable when chased on the April 26, 2026 Top Rated badge deadline — outcome of that deadline is unconfirmed. The broader account is actively engaged through the HG data feed and Snowflake workstream (last touch June 11, 2026), and Nicole Morgan attended the London CAC on June 9, but those signals are specific to the Universe/data product and do not indicate TrustRadius program health. There are 0 open Jira tickets. The TR CVP renewal is Concerning given no documented wins from the lead program, unconfirmed Top Rated badge status, and an unresponsive marketing contact — proactive outreach to reactivate Kenny Gudmundson or identify an alternative TR champion is needed before the November renewal cycle begins.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "006RN00000S6757YAB",
        "csm": "Nick Johnson",
        "name": "Ben Beadle - MK Expansion Dec 25",
        "arr": 69999,
        "contract_end": "2027-01-16",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — MK Expansion ($70K) closed Dec 2025, currently in onboarding with Sales Copilot. Ben Beadle as exec sponsor; Leo demoed and shared contract options. Org-level engagement \"Stable\" with active cadence through Jun 2026. Previous pulse (Apr 8) Healthy. 0 open Jira tickets. Infor confirmed as a high-priority vendor post-EBR; MK copilot supporting new initiative (Mind Map). Risk: onboarding pace dependent on new POC Nicole Morgan (MOPs Manager) building internal adoption momentum. Renewal Jan 2027.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "006RN00000SErIsYAL",
        "csm": "Nick Johnson",
        "name": "TR - Infor - CVP 11.07.2026",
        "arr": 30000,
        "contract_end": "2027-11-06",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — TR CVP renewal ($30K) in adoption; org-level engagement is strong with multiple inbound requests week of Jun 3-11 including product tracking discussion, onsite debrief follow-ups, and active SMB data pull requests. Org-level sentiment \"Stable.\" Previous pulse (Apr 8) Healthy. 0 open Jira tickets. No IDL wins yet on this opp but pipeline moving. Renewal end Nov 2026 — need to confirm CVP campaign performance and review velocity with Jillian before next renewal cycle begins Q3 2026.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d000000FzlBkAAJ",
    "accountName": "NetApp",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Adrian Escobar",
    "segment": "Enterprise",
    "arr": 840680.33,
    "lastOutbound": "2026-07-16",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-08-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "0063o000019kdvRAAQ",
        "csm": "Rani Guy",
        "name": "NetApp - Renewal of FY'23 Bridge Agreement",
        "arr": 840680.33,
        "contract_end": "2026-08-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "We are able to improve matching by 10% from 52% to 62%. Team is working with Openprise to see how much this can be improved. Elise is back next Tuesday. We are coming prepared with a renewal contract when we meet with her and will push on her for direction on when Rohini can engage with Gabriel",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001qroJtAAI",
    "accountName": "Veeam Software AG",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 822500,
    "lastOutbound": "2026-06-02",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-09-10",
    "latestPulseDate": "2026-06-29",
    "opportunities": [
      {
        "opp_id": "006RN00000Opuk9YAB",
        "csm": "Nick Johnson",
        "name": "TR - Veeam - IDL, Cat Intent Data Trial,  Market Report - 09.11.2025",
        "arr": 12500,
        "contract_end": "2026-09-10",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "0063o000019kzzUAAQ",
        "csm": "Nick Johnson",
        "name": "Veeam - Global Platform + Universe Feed Expansion",
        "arr": 750000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Still concerning due to the amount of changes needed/happened",
        "pulseDate": "2026-06-29"
      },
      {
        "opp_id": "006RN00000Oq7ejYAB",
        "csm": "Nick Johnson",
        "name": "TR - Veeam - CVP x 2 - 01.01.2026 (Written Renewal)",
        "arr": 60000,
        "contract_end": "2027-12-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      }
    ]
  },
  {
    "accountId": "001d000001ReCdBAAV",
    "accountName": "Equinix, Inc.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Ravi Sharma",
    "segment": "Enterprise",
    "arr": 817500.02,
    "lastOutbound": "2026-05-29",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000ExoqLYAR",
        "csm": "Atisha Waghela",
        "name": "Renewal - Equinix - Cloud dynamics renewal",
        "arr": 157500.02,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "0063o00001731v3AAA",
        "name": "Equinix - 2021 Flat File Expansion (2,000 products). Consolidated Agreement. Three-Year Contract Term. Year 2 2023",
        "arr": 660000.0,
        "renewalDate": "2027-06-30",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Atisha Waghela"
      }
    ]
  },
  {
    "accountId": "001d000001exVLNAA2",
    "accountName": "Workday Inc",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Ravi Sharma",
    "segment": "Enterprise",
    "arr": 815250,
    "lastOutbound": "2026-06-04",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-13",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000BwbCFYAZ",
        "csm": "Rani Guy",
        "name": "Renewal - Workday - WW Data Feed 2025",
        "arr": 740250,
        "contract_end": "2026-09-14",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "We are active conversation with procurement. We first need to explain the new credit model with the team. Once they have a clear understanding then we can discuss what additional items they want to include. We will meet with them next week and I answered a bunch of questions after our call this week. Rana is attending EBR. Rohini did an Exec to Exec outreach to Rani Johnson CIO and contract Executive sponsor. Rana is joining EBR, Winston is not traveling to the Bay Area in July but nominated Phoenix to join the session remotely. Contract scope is currently 1 year but we are still in negotiations and we aim for a 3 year contract.",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000Oq7axYAB",
        "name": "TR - Workday Adaptive Planning - CVP, Cat. Pulse, Intent Data Trial,  IDL - 06.14.2026 (Auto Renewal)",
        "arr": 73000.0,
        "renewalDate": "2027-06-13",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Rani Guy"
      }
    ]
  },
  {
    "accountId": "001d000001He27lAAB",
    "accountName": "Palo Alto Networks Inc",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Tyler Neubauer",
    "segment": "Enterprise",
    "arr": 747928,
    "lastOutbound": "2026-07-01",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-05-03",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000JD7APYA1",
        "name": "Renewal-PANW-Central Analy2026",
        "arr": 747928.0,
        "renewalDate": "2027-05-03",
        "pulse": "Healthy",
        "pulseDate": "2026-07-10",
        "pulseNote": "Data feed: PANW is still using the legacy V1 FTP endpoint (no successful V1 delivery since Apr'26), despite being provisioned on V2/SFTP in Aug'25. A recent SFTP authentication failure was traced to an expired FTP password, but the priority is completing the migration to V2/SFTP, confirming delivery with Kumar, and cleaning up admin ownership.\n\nSales Workbench / MCP: Re-engaged with new POC Rachna Agrawal, including enablement on HG spend data and a working session on PANW's Sales Workbench. Discussions are progressing toward an MCP pilot, currently pending PANW's InfoSec review. The security questionnaire was misrouted and is being redirected.\n\nRenewal risk: Sweta Vyas raised concerns that HG insights are perceived as too generic, particularly around competitive intelligence, and emphasized this as a renewal risk. Need to demonstrate differentiated value ahead of the QBR.\n\nNext steps: Complete V2 migration and validate delivery, unblock the InfoSec review to scope the MCP pilot, align leadership to address value concerns before the QBR, and establish a single data feed admin owner with a recurring delivery cadence.",
        "csm": "Atisha Waghela"
      }
    ]
  },
  {
    "accountId": "0013o00002XaiwwAAB",
    "accountName": "Kyndryl",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 709747.8,
    "lastOutbound": "2026-07-02",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2027-03-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN000006mXmEYAU",
        "csm": "Atisha Waghela",
        "name": "Renewal - Kyndryl File shrinkage  2026",
        "arr": 709747.8,
        "contract_end": "2027-03-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      }
    ]
  },
  {
    "accountId": "001d0000026EM20AAG",
    "accountName": "CloudFlare Inc",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Ravi Sharma",
    "segment": "Enterprise",
    "arr": 697317.96,
    "lastOutbound": "2026-07-16",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-09",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Aq8YQYAZ",
        "csm": "Rani Guy",
        "name": "Cloudflare renewal + 10% Get Cur2025",
        "arr": 286405.47,
        "contract_end": "2026-07-13",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "We have a meeting on Monday with the team on the renewal Wednesday I sent build-vs-buy process: API access history since 2020, so you can confirm who's still active and at Cloudflare, and map each person to their use case (you own identifying these, including anything on Chandra's team beyond the scoring models).\n\nUsage data: User on with webapp access. Important to highlight that these seats were included in the contract at no additional cost, and as a way to help Cloudflare unlock more use cases to realize additional value. Similar to the 100 reader licenses we included in the HG Core contract.\nHow we access and collect our data, for the build-vs-buy comparison.\nROI benchmarks from other Cloud Dynamics customers.\nSecurity review. We are connected with Ying who is handling the procurement side of things. Robert triggered a PII Security review. Working to get this time shortened and asked Rajat to try to help with this since he has a meeting with Mark Anderson who helped us move through security faster last year. We still have an expansion opportunity that we will explore once we can get the renewal in. This process can take 4-6 weeks. The RIFT in May has had rippling implications, the delay and uncertainty of this renewal is one of them.",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN000006KvOTYA0",
        "csm": "Rani Guy",
        "name": "Cloudflare HG Expansion",
        "arr": 333000,
        "contract_end": "2028-08-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Executive Onsite requested. Following up with Rob on location, and time to schedule 1 1/2 data session to discuss all the new capabilities we have to offer to provide solutions and be the top vendor for Cloudflare. Expansion",
        "pulseDate": "2026-03-13"
      },
      {
        "opp_id": "006RN00000Oq7b7YAB",
        "name": "TR - Cloudflare - Ultimate+, Intent Data x5,  Key Claims Report - 06.10.2026 (Written Renewal)",
        "arr": 77912.49,
        "renewalDate": "2027-07-07",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Rani Guy"
      }
    ]
  },
  {
    "accountId": "001d000000E7LnLAAV",
    "accountName": "Lenovo Group Ltd.",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Adrian Escobar",
    "segment": "Strategic",
    "arr": 695733.34,
    "lastOutbound": "2026-07-16",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-29",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000OF76fYAD",
        "csm": "Rani Guy",
        "name": "Lenovo - LATAM (Gianmarco, Olivia and Grant)CMO Americas",
        "arr": 120000,
        "contract_end": "2026-12-29",
        "deal_type": "Expansion",
        "pulse": "Poor",
        "pulseNote": "Yan our contract owner said that the model is not using any of HG data. They are not seeing value. I shared ways they could leverage the data from their current investment and will check in next week for an update. Once the larger Lenovo contract is singed we will engage with the art of the possible and see if we can secure this renewal. Right now, I am flagging this to churn unless something changes in their model. Best case scenario, we sell them different data points that they will use and secure the renewal and showcase value.",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000IwXShYAN",
        "csm": "Rani Guy",
        "name": "Renewal - Lenovo - New License for Mktg Team (Shante) 2026",
        "arr": 169400,
        "contract_end": "2027-03-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Opportunity renewed. Shante has her own budget. She spends it on HG and IDC. For now we are in a good position, driving value for her Nvidia Campaigns. Strong partnership",
        "pulseDate": "2026-04-29"
      },
      {
        "opp_id": "006RN00000Vy5NxYAJ",
        "csm": "Rani Guy",
        "name": "Lenovo - SSG (RGIP)",
        "arr": 121333.34,
        "contract_end": "2029-02-27",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "0063o000019lguSAAQ",
        "name": "Renewal - Lenovo - Global Expansion 2024",
        "arr": 285000.0,
        "renewalDate": "2027-07-30",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Rani Guy"
      }
    ]
  },
  {
    "accountId": "001d0000026GTzaAAG",
    "accountName": "Optiv Security Inc",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 685997.15,
    "lastOutbound": "2026-04-16",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2028-12-31",
    "latestPulseDate": "2026-06-19",
    "opportunities": [
      {
        "opp_id": "006RN00000GhtPrYAJ",
        "csm": "Atisha Waghela",
        "name": "Renewal - Optiv - 2026",
        "arr": 685997.15,
        "contract_end": "2028-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "\"June 19, 2026 – AW: Weekly sync cadence with Roger Conarroe and Nick Smith — Roger is currently on paternity leave; Nick is the active point of contact. Syncs have had mixed attendance (Nick cancelled May 13 and May 27, June 10 meeting fell off Nick's calendar). Key platform activity: Jared Guidoboni is the active day-to-day user — he raised an export issue in May (grayed-out export box due to credits being depleted) which was resolved same day. License provisioning for Jared (covering Roger's leave) was completed via Jira. Rakshanda Chauhan also flagged a credits confusion issue — team saw only 10K credits on the new portal vs. expected 200K — confirmed and resolved. Security taxonomy expansion announced to the team on May 27 with webinar invite for June 2. Contract change is still pending signature due to Optiv legal delays. Relationship is stable — no churn signals, but engagement is light with Roger out. Key next steps: re-engage Nick on the security category updates and get contract signed.\"",
        "pulseDate": "2026-06-19"
      }
    ]
  },
  {
    "accountId": "001d000001yPN2KAAW",
    "accountName": "Databricks Inc.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Tyler Neubauer",
    "segment": "Enterprise",
    "arr": 663284,
    "lastOutbound": "2026-07-15",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-27",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000FrgZxYAJ",
        "csm": "Atisha Waghela",
        "name": "Renewal - Databricks 2025 Ren2026",
        "arr": 663284,
        "contract_end": "2027-01-27",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Custom spend call (7/8) — Rory wants transformational AI-consumption signals (LLM/token usage, self-hosted models), while Ryan/Tomas flagged the risk of over-rotating on AI vs. the core lakehouse. Live expansion scoping. Next: HG to share the AI-spend approach and sample data for a few DBX accounts, then a follow-up with our AI lead Doug to validate the heuristic.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d0000024EtoPAAS",
    "accountName": "Hitachi Vantara",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Adrian Escobar",
    "segment": "Enterprise",
    "arr": 622400,
    "lastOutbound": "2026-07-17",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-09-29",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000C6rifYAB",
        "csm": "Rani Guy",
        "name": "Renewal - Hitachi - FAI & Intent 2025",
        "arr": 122400,
        "contract_end": "2026-09-29",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Adrian is reaching out to Anders next week to share times to connect on the renewal. Anders remit expanded and I am concerned that there will be a reduction in investment. We need to align both contracts into 1 contract. Goal is a multi-year contract",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "0063o000019Sj7OAAS",
        "csm": "Rani Guy",
        "name": "Renewal - Hitachi Vantara - Universe- XaaS 2023",
        "arr": 500000,
        "contract_end": "2026-10-23",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "They had layoffs and very short staffed. RGIF pricing ticket complete and will work with Adrian to start the conversation early with Anders to combine both renewal and ideally bring it in before any other changes happen that could impact the renewal. Adrian will reach out next week to connect with Anders and start the commercial conversations.",
        "pulseDate": "2026-06-27"
      }
    ]
  },
  {
    "accountId": "001d000001FlpaHAAR",
    "accountName": "Adobe Systems Incorporated",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Mark Fell",
    "segment": "Strategic",
    "arr": 612847.22,
    "lastOutbound": "2026-06-16",
    "pulse": "Concerning",
    "pulseNote": "",
    "pulseColor": "yellow",
    "renewalDate": "2026-07-31",
    "latestPulseDate": "2026-06-30",
    "opportunities": [
      {
        "opp_id": "006RN00000Opp6HYAR",
        "csm": "Riley Rogers",
        "name": "TR - Adobe - Market Report x6 - 08.01.2025",
        "arr": 45000,
        "contract_end": "2026-07-31",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000EMvE6YAL",
        "csm": "Divyam Dewan",
        "name": "Adobe - Renewal 2024, Platform Professional 2025",
        "arr": 147500,
        "contract_end": "2026-11-06",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Summary:\nTwo active talk tracks, both stalled. India greenfield pilot (Abhishek + Sumit) ran 45+ days with no field feedback — delayed by QBRs and leadership transitions (Pratibha/Justin). Abhishek's 1:1 with Gill (key unlock) was penciled for mid-June; outcome unknown. APC expansion (Simant + Clark Jackson) had a strong June 9 kickoff but Mark's two follow-ups (June 15, 22) went unanswered. No senior sponsor above Abhishek engaged ahead of November $147.5K renewal.\n\n\nTimeline (last 3 months):\nApril: Abhishek presents PTB scoring to Sales Ops — well received | Leadership deck in progress combining HG + internal GTM data | DC flags expansion data points outside current license\nMay: India leadership presentation (May 6) — positive reception | 30-day field test starts with Sumit | Simant confirms move to APC | Bob Yang + Rehman Rashid at HG CDAO dinner (no confirmed follow-up) | Divyam flags no senior sponsor above Abhishek to Mark\nJune: APC kickoff call (Jun 9) with Simant + Clark Jackson — scope: ~15K PE portcos | Mark follows up twice (Jun 15, 22) — no APC response | Abhishek skips biweekly (QBRs) | Man Hon Ding declines GTM Tool Review | July 8 next sync\n\n\nNext Steps (HG side):\nDivyam: July 8 sync — confirm Gill 1:1 outcome | get India renewal direction | weave in TR GEO value for Adobe marketingMark: Unblock APC — third outreach or alternate channel (LinkedIn/phone) to Clark Jackson | confirm Bob Yang meeting post-CDAO dinnerMark: Direct outreach to Jill Glendinning — no exec sponsor above Abhishek heading into Nov renewal\n\n\nNext Steps (CX side):\nAbhishek: Share Sumit's field feedback post-QBR | confirm Gill 1:1 outcome + direction for wider consolidationAbhishek: Intro Mark/Divyam to Gill ahead of November renewalSimant/Clark: Respond to Mark's APC follow-ups | share Pitchbook universe + data elements + budget\n\n\nOpen Jira / Products / Solutions:\n HG-4570 (Epic — active) | HG-14706 (India ICP rematch — resolved) | No open CPF tickets | APC data sample request pending (Pitchbook universe not yet submitted)",
        "pulseDate": "2026-06-30"
      },
      {
        "opp_id": "006RN00000Oq7eqYAB",
        "csm": "Riley Rogers",
        "name": "TR - Adobe - CVP x5 - 01.01.2026 (Written Renewal)",
        "arr": 420347.22,
        "contract_end": "2026-12-09",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "## Pulse update\n\nAdobe reacted positively to the GEO update and engaged deeply on measurement. In the walkthrough, TrustRadius showed two upcoming dashboard views: crawler analytics and prompt-based GEO monitoring. Giacomo focused most of the discussion on how Adobe can use the data operationally, especially around raw citation visibility, prompt selection quality, and automated access to reporting. He also shared that Adobe is moving off Profound toward Semrush and internal tooling, and offered to connect TrustRadius with the Semrush team. The team also reviewed new GEO-oriented product profile enhancements designed to make TrustRadius content easier for LLMs to parse and cite.\n\n**What matters most**\n\n-   Adobe wants measurement that goes beyond prompt-based reporting and is pushing for **raw citation volume** as a directional benchmark.\n    \n-   Giacomo is thinking strategically about **automation and system integration**, asking about MCP-style delivery and broader reporting ingestion into Adobe systems.\n    \n-   Adobe appears bought into GEO as a real evaluation area internally, with investment decisions increasingly tied to **citation impact and GEO performance**.\n    \n-   TrustRadius positioned its GEO value around **structured, crawlable content** on live pages rather than gated assets, which landed as relevant to Adobe’s goals.\n    \n\n**Risks / watchouts**\n\n-   Adobe is calibrating TrustRadius against other vendors and tools, especially around how GEO metrics are defined, which means reporting methodology will be scrutinized closely.\n    \n-   Giacomo explicitly noted that the current prompt set may miss what buyers are actually searching, so Adobe may see prompt-based reporting as incomplete unless broader citation visibility is added.\n    \n\n**Next moves**\n\n-   Follow up with Giacomo on **MCP / automated data delivery** options.\n    \n-   Expect scheduling on the **Megan meeting / exec-level strategic session** after **July 7, 2026**, due to Giacomo being out next week and Adobe’s shutdown period.\n    \n-   Continue framing GEO value in Adobe terms: **measurement rigor, workflow integration, and optimization impact by product**.",
        "pulseDate": "2026-06-25"
      }
    ]
  },
  {
    "accountId": "001d000001saEqwAAE",
    "accountName": "ServiceNow Inc's",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "James Tudway",
    "segment": "Strategic",
    "arr": 545000,
    "lastOutbound": "2026-06-25",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-02-27",
    "latestPulseDate": "2026-05-27",
    "opportunities": [
      {
        "opp_id": "006RN00000GEZESYA5",
        "csm": "Varun Tiwari",
        "name": "ServiceNow - Break Rewrite",
        "arr": 545000,
        "contract_end": "2027-02-27",
        "deal_type": "Amendment",
        "pulse": "Healthy",
        "pulseNote": "27th May'26 : VT\n\nSpend Data Mapping Review\n\n- Reviewed mapping of HG Insights spend columns to ServiceNow requirements\n\n- New models requiring spend data:\n  - Raptor DB: One-to-one mapping available, can proceed immediately\n  - S2P Ops & WDF: Need custom spend category development\n\nMissing Coverage & Custom Categories\n\n- Three categories with no current coverage:\n  1. FSM (Field Service Management)\n  2. Workplace Platform Ops\n  3. Legal spend categories\n\n- Custom spend column creation process:\n  - SME (Doug) aligns definitions between taxonomies\n  - Creates custom categories using format: snow_[category]_spend\n  - Doug returns Monday, can start immediately\n- Historical spend data confirmed available through monthly snapshots\n \n\nNext Steps:\n\n- Varun’s team actions:\n  1. Review existing black font mappings for accuracy (Sheet shared by Anwesha)\n  2. Develop custom categories for red-flagged items (S2P Ops, WDF, etc.)\n  3. Investigate coverage options for three missing categories\n\n- Follow-up meeting: Tuesday June 2nd, 8:00 AM PST\n  - Doug (SME) will join for technical discussion\n  - Review custom category proposals\n\n- Future strategic discussion planned for July:\n  - Explore credit-based consumption model transition\n  - Review AI spend and SMB spend integration potential\n  - Include ServiceNow strategy team (Bill Sena)\n  - Assess data uplift opportunities from newer HG Insights datasets",
        "pulseDate": "2026-05-27"
      }
    ]
  },
  {
    "accountId": "0010V00002MSCvJQAX",
    "accountName": "Westcon",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 535000,
    "lastOutbound": "2026-06-10",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2028-10-31",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000DkFcWYAV",
        "csm": "Nick Johnson",
        "name": "Renewal  2024 - WG Serv2025",
        "arr": 535000,
        "contract_end": "2028-10-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — active engagement through June with a GenAI optimization session scheduled today (Jun 15) with Augie, a Westcon/HG follow-up items thread progressing through Jun 3, product selection (1,600 products) discussion Jun 1, and regular platform and intent deliveries. Last meeting sentiment \"Thriving\" with Victoria confirming intent expansion as near-certain. Previous pulse (Apr 8) Healthy. 0 open Jira tickets. 3-year renewal secured flat at $535K ARR through Oct 2028. Continued data taxonomy issues around product classifications remain the primary blocker to expansion but do not threaten the base contract. Technical workstream to resolve unspecified product issues is the key near-term milestone.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d000001Oa2EoAAJ",
    "accountName": "Autodesk Inc",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Adrian Escobar",
    "segment": "Enterprise",
    "arr": 521000,
    "lastOutbound": "2026-06-11",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-02-15",
    "latestPulseDate": "2026-07-08",
    "opportunities": [
      {
        "opp_id": "006RN00000OrQHAYA3",
        "csm": "Varun Tiwari",
        "name": "MK - Autodesk 2026 Renewal",
        "arr": 171000,
        "contract_end": "2027-02-15",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "9th July '26 : VT\n\nDavid is on Paternity leave so nothing to report till Aug:\n\nMadKudu continues to perform well within Autodesk Construction, with scoring models live for 4+ weeks and no major operational concerns. Automated workflows are delivering 50–200 qualified leads daily, and outbound teams are actively requesting additional lead volume during the Salesforce transition. The primary risk to renewal is organizational strategy—not performance—as Autodesk evaluates a long-term lead-scoring platform consolidation initiative.\n\nKey Updates:\nMadKudu models stable and operational for 4+ weeks.\nTwo automated outbound use cases delivering 50–200 leads/day.\nNo significant user complaints or support escalations.\nConstruction team recognized internally as a best-practice HG/MadKudu implementation.\nDavid on paternity leave (June 9 – Aug 31); Ana will provide coverage.\nNo major model enhancements or new initiatives planned during the summer period.\n\nDecision Points:\nMaintain a business-as-usual approach during David's leave.\nContinue supporting existing use cases and demonstrating business value.\nMonitor Autodesk's lead-scoring consolidation efforts and assess renewal implications.\nPosition HG's install base and software budget data as strategic assets independent of the scoring platform.\n\nRisks:\nPlatform Consolidation: Autodesk is exploring a unified AWS SageMaker-based scoring solution within the next 6–12 months.\n\nStakeholder Coverage: David's leave temporarily removes a key champion during an important planning period.\n\nRenewal Dynamics: Future decisions may be influenced more by enterprise strategy than current solution performance.\n\nOpportunities:\nStrong adoption and positive user feedback create a compelling success story.\nIncreased outbound demand during the Salesforce transition provides expansion opportunities.\nHG remains strategically relevant regardless of scoring platform decisions due to its differentiated data assets.\n\nNext Steps:\nComplete David-to-Ana transition and establish support coverage.\nContinue monitoring lead delivery and platform health.\nMaintain operational stability through the summer period.\nTrack Autodesk's internal scoring platform initiative and key stakeholders.\nBegin shaping the renewal narrative around adoption, business impact, and HG's unique data value.\n\nOverall Assessment\nProduct Performance\t🟢 Strong\nUser Adoption\t🟢 Strong\nOperational Stability\t🟢 Strong\nRenewal Outlook\t🟡 Moderate Risk\nStrategic Platform Risk\t🔴 High\nHG Expansion Opportunity\t🟢 Strong\n\nBottom Line: Delivery and adoption remain strong. The key focus over the coming months is maintaining operational success while navigating Autodesk's broader platform consolidation strategy and reinforcing HG's long-term strategic value.",
        "pulseDate": "2026-07-08"
      },
      {
        "opp_id": "006RN00000JCw8aYAD",
        "name": "Autodesk Inc",
        "arr": 402000.0,
        "renewalDate": "2029-04-29",
        "pulse": "Healthy",
        "pulseDate": "2026-07-08",
        "pulseNote": "9th Jul '26 : VT\n\nCompleted product mapping analysis on Autodesk's wishlist:\n-Mapped 1,100 of 1,228 products (90% match rate) using exact and fuzzy matching.\n-Added comments for rebranded products and documented all unmatched products in a separate sheet.\n-Validated four additional products during the customer call (Bexel, Visileen, Range Solutions, and Cube).\n-Received Autodesk's password-protected account file and aligned on using D&B -Organization Name as the primary matching key instead of the Salesforce Account Name to improve match quality.\n-Confirmed the analysis deliverables will include:\nProduct-level match type (exact/fuzzy)\nInstall coverage and detection count\n-Account-level spend availability flag\nOne-page summary to support Autodesk's internal review\n\n\n\n\nCustomer Alignment:\n\n-Autodesk agreed with the recommendation not to select the full product catalog or the entire entity universe, preserving opportunities for whitespace analysis.\n-Customer requested upfront documentation as the team will be onsite next week and have limited availability for working sessions.\n-Reviewed the legacy feed migration timeline and confirmed there is no impact to ongoing deliveries. HG will continue parallel delivery during migration to avoid any disruption.\n\n\n\n\nRisks / Watch Items:\n\n-Autodesk's internal review and final product/entity selection will begin only after the analysis package is delivered.\n-Custom spend category requests have been deferred until late Q3/Q4.\n\n\n\n\nNext Steps:\n\n-Varun: Complete the analysis across ~4M Autodesk records and deliver the analysis package (match rates, fill rates, spend availability, and one-pager) by July 15–17.\n-Varun: Validate and include the Cube product in the final mapping analysis.\n-Autodesk (Trishna/John/Scott): Review the analysis and finalize the shortlist of ~350 products and ~1.2M entities.\n-Ola: Share the proposed timeline on Slack and coordinate a 15-minute follow-up session after the onsite to align on final product and account selection.",
        "csm": "Varun Tiwari"
      }
    ]
  },
  {
    "accountId": "0010V00002MRRRZQA5",
    "accountName": "Colt Technology Services",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 514555,
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-30",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000XWKJzYAP",
        "csm": "Andy Lim",
        "name": "Colt - Bombora Intent",
        "arr": 150000,
        "contract_end": "2027-03-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Bombora Intent delivery is executing reliably on a weekly cadence — deliveries recorded May 21, 28, June 4, 11, 18, 25, and July 2. No delivery issues, no friction. Holding Healthy.",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN00000EbDPfYAN",
        "csm": "Andy Lim",
        "name": "Renewal - Colt - renewal 2023-2024 - Logins 2026",
        "arr": 364555,
        "contract_end": "2028-12-16",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Meaningful new expansion signal: Colt inquired about \"Information on Trustradius & AI-driven evaluation\" June 22-July 2 — a fresh workstream. Supriya and Arkadiusz registered for July HG Insider. Executive Summit invitation sent June 12. Platform usage grew from 39K to 84K entities. Monthly sync rescheduled to July 24. May 22 sync transcript recorded. Holding Healthy with expansion signals.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001ReCbpAAF",
    "accountName": "SAS Institute Inc.",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 460250,
    "lastOutbound": "2026-07-10",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-01",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000LD4L5YAL",
        "csm": "Andy Lim",
        "name": "SAS Team - MI Licenses",
        "arr": 56250,
        "contract_end": "2027-01-01",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "MI continuing to serve Steven White's team. Bala Dhakshnamoorthy (SAS) engaged at the June HG Insider on Contact Intelligence in Fabric + Data Feeds (\"Ready to get it set up in my data feed!\") — potential new user surface. HGI Platform query answered July 1. Neil Dover registered for July HG Insider. Holding Healthy.",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN000004BD65YAG",
        "csm": "Andy Lim",
        "name": "Renewal - SAS-Max CI team 2025",
        "arr": 404000,
        "contract_end": "2027-01-01",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Significant uplift in the last 6 weeks. Phoenix MCP + SAS CI MCP work in flight (call July 7, agentic demo scheduled). SAS I / HGi Agent POC June 23-24. HG Intent Analysis Chat June 29-July 1. AI Intent topics follow-up July 1. New SAS Institute EMEA / HG Insights Weekly Sync established July 8. SaSi HGi Commercial discussion scheduled July 10. Customer sharing internal FIT score methodology June 26. Platform usage grew from 400K to 465K entities. Neil Dover engaged directly and registered for July HG Insider. This is a customer accelerating, not stalling. Holding Healthy.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001Uaju4AAB",
    "accountName": "Red Hat Inc",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 450500,
    "lastOutbound": "2026-07-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000G26uZYAR",
        "csm": "Nick Johnson",
        "name": "Red Hat Global Spend Files  2026",
        "arr": 200000,
        "contract_end": "2028-11-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "6/15 NJ — Red Hat's 3-year renewal closed March 18, 2026 ($584K total, $200K ARR), with PO received and contract fully executed. Monthly data delivery is running on schedule (June 1: 141M+ install signals, 10.5M spend signals), and 12 Top Rated TrustRadius Awards were announced June 10 — a strong brand ROI moment. Champion Julia Schwartz remains active, with a Time Series POC scoping session last engaged May 28, 2026, and an Ansible Market Report approved June 11. Zero open Jira tickets and no escalations. Account is in strong health with a long contracted runway through November 2028.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "006RN00000W4LZlYAN",
        "name": "TR - Red Hat - CVP x1 - OpenShift Virtualization",
        "arr": 34093.16,
        "renewalDate": "2026-12-31",
        "pulse": "",
        "pulseDate": "2026-07-10",
        "pulseNote": "Let me pull up all the Red Hat meetings across both folders.\n\nThought for 1s\n\nListed 4 meetingsin\n\nRed Hat <> TrustRadius\n\nListed 7 meetingsin\n\nRed Hat | TrustRadius (biweekly)\n\nLooked deeper into 7 notes\n\nHere's a full pulse on Red Hat across all 7 meetings (Feb–May 2026):\n\n---\n\n## 🔴 Red Hat | TrustRadius — Pulse Update\n\n### 🏆 Review Performance & Badges\n\n-   **Summit was a major win**: OpenShift, Ansible, and RHEL all hit mid-60s to 70s in reviews; OpenShift Virtualization reached 27 reviews as a brand-new product\n    \n-   **All four products now qualify** for Buyers Choice (fall) and Top Rated (next year)\n    \n-   **OpenShift Virtualization hit #1** in the virtualization management tools category — a significant win for a new product launch\n    \n-   The separate OpenShift Virtualization TrustRadius profile was created in late March, with reviews migrated from the main OpenShift page\n    \n\n### 🎯 Lead Generation Program\n\n-   Program **pivoted from net-new** to focus on renewals/cross-sell/upsell and developer targeting after internal demand gen pushback\n    \n-   ICP confirmed across all three products (Ansible, RHEL, OpenShift): Director+ decision makers + developers\n    \n-   Lead cap refined to 7–8 per company (down from 10) to avoid oversaturation\n    \n-   **Developer leads require special handling** — MDRs should not touch developer conversations; self-serve model preferred\n    \n-   Original pipeline target: **$1M marketing-sourced pipeline**\n    \n\n### 📊 Market Reports & Content\n\n-   **Ansible**: Draft ready, awaiting final feedback\n    \n-   **OpenShift & RHEL**: Teams pushed to complete post-Memorial Day; can launch campaigns separately as content is ready\n    \n-   Social posts in Q1 drove strong engagement: **2.6% engagement rate, 32K impressions, 400+ clicks per post**\n    \n\n### 🔗 Data & Integration\n\n-   **Snowflake integration** in progress — moving to monthly CSV exports (two files: April-to-April baseline + Summit reviews) to resolve mixed API pull numbers\n    \n\n### ⚠️ Open Items / Watch Points\n\n-   Lead nurturing process for developers still needs a dedicated follow-up meeting\n    \n-   PIA account targeting: Brianna to get additional company IDs from Skyler, exhaust priority list before moving to tier two\n    \n-   No meetings recorded since **May 19** — the account has been quiet for ~7 weeks",
        "csm": "Riley Rogers"
      }
    ]
  },
  {
    "accountId": "001d000001ce1sQAAQ",
    "accountName": "UKG (Ultimate Kronos Group)",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 447433.33,
    "lastOutbound": "2026-06-16",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-06-29",
    "opportunities": [
      {
        "opp_id": "006RN00000Be9O1YAJ",
        "csm": "Nick Johnson",
        "name": "Renewal - UKG_2024_Data-feed_Addition",
        "arr": 178500,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Healthy but change needed",
        "pulseDate": "2026-06-29"
      },
      {
        "opp_id": "006RN00000G9DpdYAF",
        "csm": "Nick Johnson",
        "name": "4 read only licences",
        "arr": 7333.33,
        "contract_end": "2027-03-02",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ — Read-only licence expansion ($7,333 ARR, 4 seats, ends March 2027) is a small but strategically important footprint expansion signed by Barbie Espinosa in March 2026. However, in the context of UKG's broader account risk — 1,250 layoffs in 2026, \"year of no spend\" budget posture, primary champion Jez Allen-Dann sidelined, and ICP work stalled since Vicki Zimmerman's May 2025 departure — the risk of these read-only licences being questioned at renewal is elevated. Jez Allen-Dann (champion on this opp) was actively using the EMEA expansion and territory planning use cases that justified this expansion, including market sizing that drove direct sales launches in Spain and Italy. Current status: Jez expressed strong interest in Whitespace Analysis and GCS integration at March 2026 HG Insider but has three overdue follow-up tasks (GCS integration, Sales Copilot, Whitespace Analysis — all past due since May 2026). Zero open Jira tickets.",
        "pulseDate": "2026-06-15"
      },
      {
        "opp_id": "006RN00000Oq1L8YAJ",
        "csm": "Riley Rogers",
        "name": "TR - UKG - Ultimate, Category Intent Data, Event Support,  Customer Stories - 10.22.2024",
        "arr": 261600,
        "contract_end": "2027-10-21",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   UKG is evaluating how TrustRadius insights can be compared side-by-side with G2, especially around pipeline influence and attribution.\n    \n-   Litz is drafting an internal summary of TrustRadius ROI/reporting capabilities for the broader team.\n    \n-   Key takeaway: the **Box folder intent data** is more useful than vendor portal data for comparison work because it includes broader category-level activity and competitor research, not just visits to UKG product pages.\n    \n-   Riley shared Box folder access during the call and walked through the major dashboards: multi-product, competitor, and feature scorecards.\n    \n-   A new GEO dashboard is expected around **July 15, 2026**, giving UKG visibility into AI/LLM crawl activity on TrustRadius pages.\n    \n-   Review generation remains in focus: UKG Pro needs **9** more reviews and UKG Ready needs **8** by **September 26, 2026**. Litz expects to launch a review push in the next 2–3 weeks.\n    \n-   No direct Pendo integration exists today, but Riley can create a labeled TrustRadius review link for use in a Pendo flow.",
        "pulseDate": "2026-06-25"
      }
    ]
  },
  {
    "accountId": "001d000001uIOJDAA4",
    "accountName": "zScaler",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 424915,
    "lastOutbound": "2026-07-07",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-31",
    "latestPulseDate": "2026-07-15",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukJYAR",
        "csm": "Riley Rogers",
        "name": "TR - Zscaler - CVP x4, IDL,  Cat Intent Data x6 - 08.01.2025",
        "arr": 300000,
        "contract_end": "2026-07-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "### Status\n\n-   Renewal is **at risk on timing**, not on value. Zscaler said the proposal looks good, but key stakeholders were missing, so no decision was made yet.\n    \n-   Current contract expires **August 1**.\n    \n\n### What Zscaler said\n\n-   Sarah said they likely need to **reschedule with Vivian, Max, and ideally Christian** present.\n    \n-   Max said Zscaler is in its **formal annual planning process** and most vendor renewals happen in **August/September**, so this July timing is awkward.\n    \n-   Zscaler asked whether a **short extension or bridge agreement** could align the renewal to that broader cycle.\n    \n-   Sarah said Christian is **out next week**, so they will try to get clarity **this week**.\n    \n\n### Commercials discussed\n\n-   Proposal increases volume from **3,500 to 6,000 leads** and lowers CPL from **$80 to $75**.\n    \n-   Prior spend was about **$375k**; new one-year option is about **$500k**, with multi-year options also included.\n    \n-   Legal, billing, and payment structure are intended to stay materially the same as last year.\n    \n\n### Risks\n\n-   Missing decision-makers: **Vivian and Christian** were not on the call.\n    \n-   Internal Zscaler alignment appears incomplete; Sarah said she still needs to connect with Vivian and Christian on where things stand.\n    \n-   Proposal has a **data accuracy issue** before broader internal sharing: pipeline figure should be **1.03M**, not **1,030**.\n    \n\n### Next actions\n\n-   Update the proposal with the corrected **1.03M pipeline** figure and confirm **MQL/SAL** numbers before wider circulation.\n    \n-   Check internally whether finance can support a **contract extension / bridge option**.\n    \n-   Regroup with **Vivian, Max, and Christian** as soon as Zscaler confirms next steps.",
        "pulseDate": "2026-07-15"
      },
      {
        "opp_id": "006RN00000CGRF5YAP",
        "csm": "Varun Tiwari",
        "name": "zScaler",
        "arr": 124915,
        "contract_end": "2026-12-30",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "3rd July '26 : VT\n\n\nMatching Methodology Clarification:\n-HGI Company Dataset(Current): ~37M entities total, ~750k with DUNS numbers\n-Matching uses DUNS + company name + account name + country + URL in combination\n-Where DUNS matched: all 76.5k entities have exact DUNS alignment (input = output)\n\nURL Matching Concerns:\n-ZScaler not comfortable with URL-only matches (~2,886 records affected)\n-Domain data updated manually by data stewardship/support teams, considered unreliable\nPrimary and secondary domains sometimes swapped across fields\n-Decision: likely to remove URL-only matches from final dataset\n\nUpcoming Matching Enhancements from HG's side:\n-City and state being added as matching criteria (already tested and live, finalizing last pieces)\n-In ~2 months, can re-evaluate match confidence with reduced reliance on URL\n\n125k Account List and Refresh:\n-Manoj finalizing priority account list from the full sheet (filtering by geo and segment)\n-Will prioritize HQ accounts over subsidiaries before handoff (can pull HQ flag internally)\n-Once final file confirmed, refresh turnaround: 24–48 hours minimum, 3–4 working days maximum\n-Spend data currently available for 167k matched entities (exceeds the 125k contract limit)\n\nContract Expansion Discussion:\n-Matched accounts (167k) exceed contracted 125k limit; eliminating records risks blind spots in modeling\n-ZScaler building two initiatives that make full spend data critical:\n\nTotal Addressable Spend model(Zscaler):\n-Seller Hub (consolidating data streams for sellers)\n-Proposed path: break/rewrite contract in Oct (renewal due Dec), pro-rate remaining credits into new cycle\n-Manoj to raise with Denise and Gresham when planning cycle slows (targeting next week)\nNo decision needed now; revisit in August/September\n\nNext Steps:\n-Finalize and send 125k priority account list (Manoj)\n-Filter by HQ vs. subsidiary, geo, and segment; confirm file so refresh can begin.\n-Raise contract expansion with Denise and Gresham (Manoj)\n-Discuss covering all 167k matched accounts ahead of December renewal; target next week.\n-Include city and state in next input file (Manoj)\nRequired for upcoming matching refresh that adds city/state as criteria.",
        "pulseDate": "2026-07-03"
      },
      {
        "opp_id": "006RN00000aTqTBYA0",
        "name": "Zscaler - IDL Expansion - 2026",
        "arr": 45000.0,
        "renewalDate": "2027-06-09",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      }
    ]
  },
  {
    "accountId": "001d000001tMdHtAAK",
    "accountName": "Zendesk, Inc.",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Ravi Sharma",
    "segment": "Enterprise",
    "arr": 402231.59,
    "lastOutbound": "2026-05-29",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-08-26",
    "latestPulseDate": "2026-07-20",
    "opportunities": [
      {
        "opp_id": "006RN000008eV3hYAE",
        "csm": "Varun Tiwari",
        "name": "Zendesk - U.S. Data Feed",
        "arr": 319999.99,
        "contract_end": "2026-08-26",
        "deal_type": "Expansion",
        "pulse": "Poor",
        "pulseNote": "21st Jul '26 : VT\n\n-Charles has created a like-like renewal for Andrew and Leo has shared it with him\n-Though Andrew didn't acknowledge the renewal email but he reached out asking for resolving his API user access on V2 platform (resolved within 30 mins)\n-Looks like Andrew has been really busy in last few months and hasn't got any chance to review any of the emails Varun/Leo sent\n-Leo has followed up again with Andrew and sent a placeholder invite for Wednesday(Andrew is yet to accept it)\n\n\nNext Step:\n- Call with Andrew to align on the renewal sentiments\n-Ask Andrew to connect with his procurement team if he doesn't have time to connect with us directly",
        "pulseDate": "2026-07-20"
      },
      {
        "opp_id": "006RN00000OpukMYAR",
        "csm": "Varun Tiwari",
        "name": "TR - Zendesk Suite - CVP - 08.28.2025",
        "arr": 30000,
        "contract_end": "2026-08-27",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "21st Jul'26: VT\n\n Zendesk Context & Priorities\n• Joyce and Tiana are part of the Performance Marketing team, with Tiana leading Inbound Marketing (SEM, review sites, and affiliate programs).\n\nThree key priorities are driving the renewal discussion:\n  • Trackable pipeline and lead generation (primary objective for the Performance Marketing team).\n  • Brand and reputation management.\n  • AI citation optimization, now managed internally by the AEO team as a cross-functional initiative\n.\n• Zendesk is currently using ProFound for AI citation tracking and already has broad visibility into citation sources.\n• The CMO is focused on consolidating vendors and ensuring every investment demonstrates measurable pipeline impact.\n\n●Product Updates & Opportunities\n• Zendesk has been granted early access to the GEO Dashboard, with General Availability expected around late July/August.\n• Varun will provide a detailed walkthrough of the GEO Dashboard during the next meeting.\n• Zendesk previously evaluated intent-driven leads in 2024 but did not achieve the expected outcomes.\n• With HG Insights' technographic data, intent signals can now be combined with technology adoption to improve targeting (e.g., Intercom or Fin users likely to evaluate Salesforce).\n• Intent data is not part of Zendesk's current subscription but can be added as an enhancement.\n• Zendesk uses Sixth Sense for ABM, creating an opportunity to leverage HG Intent data for audience targeting.\n• Current product profile coverage is limited to Zendesk Suite.\n• AI-related products have been identified as a priority for profile enhancements and review generation.\n• Zendesk Sell is no longer a strategic focus, while Chat and Sell are positioned as add-on products.\n\nNext Steps\n• Charles to share a renewal proposal covering both the base subscription and Intent Data add-on options.\n• Varun to conduct a detailed walkthrough of the GEO Dashboard, including crawler activity and GEO metrics.\n• Joyce to explore scheduling a dedicated session with the internal AEO team before renewal(doubtful)\n• Confirm or reschedule next week's meeting (currently scheduled for 9:30 AM PST) to review feedback and align on renewal decisions ahead of the August 1st timeline.\n\nAfter the renewal options are shared Joyce is going to discuss with his teams if they really need to keep the TR subscription for 2027 as there priorities have changed and may no longer need it(more chances they'll renew unless their internal team says otherwise)",
        "pulseDate": "2026-07-20"
      },
      {
        "opp_id": "006RN00000EMx2zYAD",
        "csm": "Varun Tiwari",
        "name": "Renewal - Zendesk - MI Team Opp Gen 2025",
        "arr": 52231.6,
        "contract_end": "2027-11-24",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "18th June'26 : VT\n\nAs requested by Rodrigo -Retail industry and install analysis was done and the report was shared by Varun \n\n-The report was generated using MCP and Rodrigo really liked it\n\n-Did a live walkthrough of how can they do the same level of research if they subscribe to MCP\n\n-Rodrigo is keen for a product roadmap session by July \n\n\nNext steps :\n-Share MCP collateral (Varun)\n-Schedule a product QBR and roadmap session( Varun ) -July '26",
        "pulseDate": "2026-06-18"
      }
    ]
  },
  {
    "accountId": "001RN00000ELH7WYAX",
    "accountName": "CrowdStrike",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 400000,
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-03-16",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000BoWhWYAV",
        "csm": "Divyam Dewan",
        "name": "CrowdStrike - Marketing Ops",
        "arr": 400000,
        "contract_end": "2027-03-16",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Summary:\n$400K ARR, renewal Mar '27. Dark since Feb 3 re-engagement — 5+ months no inbound. Kyle confirmed HG strategic (ICP scoring, competitive displacement) but new champion handoff never materialized. Zero platform adoption: 0 exports, 0 entity consumption. SFDC integration stuck in CrowdStrike security queue since mid-2025; monthly Snowflake refresh too slow for same-day campaigns. HG Insider invites (Apr + May '26) to Adam Hogan + Ali Zia — all unanswered. Exec re-entry via Vibhu → Gautam Mehandru needed before Q3 ends.\n\n\nTimeline (May – July 2026):\nMay: HG Insider June 2 invite → Adam Hogan + Ali Zia | No reply | 0 platform activityJun: No inbound | #customer-crowdstrike silent since Nov 2025 | Outbound sequences runningJul: Email sequences re-launched Jul 8–10 (\"competitive signal\" + \"buying committee intelligence\") | No replies | SFDC still in security review | 0 exports\n\n\nNext Steps (HG Side):\nExec re-entry — Vibhu Pratap → Gautam Mehandru (attended HG Seattle dinner Oct '25) to unblock engagementChampion confirmation — follow up with Kyle on growth/analytics handoff promised Feb 3SFDC security review — escalate timeline internally; explore export-based bridge to demonstrate ROI in interim\n\n\nNext Steps (CX Side):\nKyle McCormick — reconfirm ownership transfer + intro to new growth/analytics ownerNew champion — schedule discovery call to rebuild use case alignmentSnowflake refresh cadence — raise internally whether monthly SLA is viable for same-day competitive campaigns\n\n\nOpen Jira / Products / Solutions:\n CPF-88 (Universe Feed tech visibility on platform — Backlog, no ETA) | SFDC connector blocked — security review queue | Snowflake refresh frequency escalation pending | No HG Insider registrations — Kyle McCormick, Adam Hogan, Ali Zia all invited (Apr + May '26), none attended June or July sessions.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001tMgWJAA0",
    "accountName": "ADP, Inc",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Leo Zunz",
    "segment": "Strategic",
    "arr": 396000,
    "lastOutbound": "2026-06-04",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-31",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000Opul7YAB",
        "csm": "Brett Castonguay",
        "name": "TR - ADP - Ultimate x3 - 02.01.2025",
        "arr": 194400,
        "contract_end": "2027-01-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "TR relationship strengthening across all three product lines. Patrick Swisher and Heather Shankwiler registered for July HG Insider. SmartCompliance monthly resumed June 29 after rescheduling. RUN monthly success call back on cadence (June 26/29). TR/ADP Workforce Now projections thread active with Pam through June. LLM/GEO Overview shared with ADP HRO June 12. Holding Healthy.",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN000001IGqbYAG",
        "csm": "Andy Lim",
        "name": "ADP Renewal+ Upside  2025",
        "arr": 201600,
        "contract_end": "2027-09-07",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Active WFS SSO SAML live session sync-ups with Samuel Vargas scheduled July 1/8. \"Two ideas for the WFS team | Competitor Whitespace + New HR Intent Topics\" sent June 25 opening expansion angle. Vantage thread active June 24-July 1. Meeting sentiment tagged \"🙂 Stable.\" Data feed 2-year renewal locked through Sep 2027. Holding Healthy.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001nESpFAAW",
    "accountName": "Deloitte",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 365908,
    "lastOutbound": "2026-07-08",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-05-19",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000JoDtZYAV",
        "name": "Renewal - Deloitte - G500 Alliance Strategic Intel 2026",
        "arr": 365908.0,
        "renewalDate": "2027-05-19",
        "pulse": "Healthy",
        "pulseDate": "2026-07-10",
        "pulseNote": "Weekly sync (7/8) advanced the noise-reduction work — agreed exclusions (office productivity, hardware CPE, legacy) and a rebuild of intent topics from Ecosystem & Alliances partners up. Steady, value-additive cadence. Next: send the second exclusion iteration with noise-reduction stats Rajesh can take to leadership, before next week's call and the monthly data drop.\"",
        "csm": "Atisha Waghela"
      }
    ]
  },
  {
    "accountId": "001d0000026EQQ6AAO",
    "accountName": "IFS",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 357749.5,
    "lastOutbound": "2026-04-17",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-05",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN0000073G5pYAE",
        "csm": "Varun Tiwari",
        "name": "IFS - Intent & FAI and V2 Migration",
        "arr": 357749.5,
        "contract_end": "2026-12-05",
        "deal_type": "Amendment",
        "pulse": "Concerning",
        "pulseNote": "21st Jul'25 : VT\n\n-The ownership of the contract has changed and now Sara's team(Marketing Ops) would own HG's contract as Timon's focus would on R&D\n\n-Sara requested copy of our HG contract and order forms from the latest renewal, so IFS procurement team can renew well ahead of time.\n\n-Sara also requested for a call to review IFS usage of the product.(Call to be scheduled in the week of Aug as Sara is PTO in second half of July)\n\n-Timon is still at IFS but Marketing Ops are taking over management of the product(HG). \n\n\nDaria from Procurement reached asking few clarification:\n\nAs part of our renewal governance process and given the terms are ~7 years old, this request will require a legal review. To support that review, could you please confirm:\n\n-Whether the renewal will continue under the existing 2019 MSA and Order Form structure, or whether any new contractual documents are being proposed.\n-Whether your MSA, standard terms, DPA, privacy policy or other contractual documents have changed since execution of our current agreement. If so, please provide copies or redlines of the changes.\n-Whether there have been any material changes to your data processing activities, subprocessors, data hosting locations or international data transfer arrangements.\n-Whether any AI, machine learning or generative AI functionality is used within the services and \n\n-Whether any customer data may be used for model training, product improvement or similar purposes.\n-Whether there have been any material changes to your information security controls, certifications or compliance posture.\n-Whether there are any other material commercial, operational or legal changes associated with this renewal that differ from the current service arrangement.\nOnce we receive the above information, we will complete our review and revert with any follow-up questions.\n\n\n\nEduardo has responded with:\n\n-We have made a few changes to our legal terms over these years. Rather than we re-do the whole MSA, we would prefer to execute an amendment with the changes. We have also shared an amendment with the sections that require a revision. \n-Shared a copy of our DPA. \n-Yes, various AI functionalities are available depending on the product purchased. We don't train any internal or third-party models with Customer Data. \n-If anything, our security controls have expanded and improved. HG is still SOC 2 certified, more information on our security controls are available on https://trust.hginsights.com/.\n\n\nNext steps :\n-Feedback from procurement is they need any more clarity on MSA changes\n-Lock a call with Sara in first week of April after she's back after the PTO for introduction and product usage discussion",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001ZwWXiAAN",
    "accountName": "Apple Inc.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Adrian Escobar",
    "segment": "Strategic",
    "arr": 357600,
    "lastOutbound": "2026-07-17",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2027-07-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000BaG39YAF",
        "csm": "Atisha Waghela",
        "name": "Renewal - Apple - Market Intelligence 2025",
        "arr": 357600,
        "contract_end": "2027-07-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "Email deliverability broke this week (team wasn't receiving my emails; resolved 7/10 via Adrian) and the 7/7 session flagged displacement risk — HG may be used for firmographics only, not technographics. Fragile comms + weak stickiness on a complex account. Next: confirm the deliverability root cause, reconfirm the account list with Simone/RJ, and run technographic-usage discovery to counter displacement.\n\nFocus in more on getting the additonal data delivered and focus on building ROI story",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d0000026GUggAAG",
    "accountName": "Digital Realty Trust L.P.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 350000,
    "lastOutbound": "2026-04-29",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-11-07",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000K0PVyYAN",
        "csm": "Atisha Waghela",
        "name": "DRT - 12 month converstion - opX",
        "arr": 350000,
        "contract_end": "2027-11-07",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "No call; third follow-up to Suhel (7/8) still unanswered. The ~35K CRM-to-HGID mapping blocker gates all spend/technographic enrichment — the entire value of the engagement is stuck and ownership is unconfirmed. Next: escalate beyond Suhel to Stuart Wang, offer HG-side mapping help, and set a hard decision date for mapping ownership.\"",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d0000026EJtLAAW",
    "accountName": "Elastic.co",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Adrian Escobar",
    "segment": "Enterprise",
    "arr": 329525,
    "lastOutbound": "2026-06-25",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-10-01",
    "latestPulseDate": "2026-05-21",
    "opportunities": [
      {
        "opp_id": "006RN00000OmMV3YAN",
        "csm": "Rani Guy",
        "name": "Elastic - Additional Licenses",
        "arr": 5000,
        "contract_end": "2026-10-01",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "this was part of the March renewal",
        "pulseDate": "2026-05-21"
      },
      {
        "opp_id": "006RN00000RmLfLYAV",
        "csm": "Rani Guy",
        "name": "Elastic - HG Universe Feed (David + MKTG)",
        "arr": 158625,
        "contract_end": "2027-03-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "22nd Apr '26 : RG\n\nApr 22 call (Elastic // HG Insights — TAM/SAM alignment): Productive working session focused on bridging Elastic's IDC market categories with HG taxonomy to build a unified market and account view. Strong multi-stakeholder engagement from Elastic's revenue ops, marketing, and data teams.\n\nKey Highlights:\n- TAM/SAM alignment identified as near-term priority: Sydney (Elastic) to share IDC category mappings; Doug Oliver-Watts (HG) to map to HG taxonomy\n- Sriraman Narayanan flagged API matching improvements as a key request for bulk/batch operations at scale\n- Collaborative tone across participants (David Adamson, Sydney Johnson, Sriraman Narayanan, Noelle Nelson)\n- HG + Elastic partnership continues to deepen with Phoenix engagement and cross-functional alignment\n\nSentiment: Healthy and engaged. Customer team is proactively driving the integration roadmap and sees HG data as core to their GTM data stack. No churn signals.",
        "pulseDate": "2026-04-23"
      },
      {
        "opp_id": "006RN00000I15EfYAJ",
        "csm": "Rani Guy",
        "name": "Renewal - Elastic - Opp Gen / MI / SFDC (Int. Ops - Brian and Chris) 2026",
        "arr": 165900,
        "contract_end": "2027-03-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Renewal is at Stage 4 (Justify) with procurement applying pricing pressure, no confirmed decision maker mapped, and marketing remaining a largely unactivated stakeholder heading into the contract end date.\nThe $153K renewal opportunity (Brian Calvanese as champion, Chris Blaisure engaged) is in active negotiation; as of March 10, procurement is pushing back on pricing and the deal is projected to come in flat.\nChris Blaisure (Sr. Director Field Technology) and Rich Boote are engaged on MCP/AI agent integration via Project Phoenix, but adoption is blocked by licensing restrictions, internal data quality issues, and unresolved credit framework confusion raised directly by Rich.\nMarketing (Khushboo Bhatia) re-engaged in February 2026 after an absence, but contracted assets including the data feed and 50 intent topics remain unused, and no formal engagement cadence exists for that team.",
        "pulseDate": "2026-03-13"
      }
    ]
  },
  {
    "accountId": "001d0000024EtmAAAS",
    "accountName": "Datadog",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 328837.51,
    "lastOutbound": "2026-05-20",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-04-11",
    "latestPulseDate": "2026-07-20",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7bzYAB",
        "csm": "Pam Huck",
        "name": "TR - Datadog - Lead Acceleration, CVP,  Intent Data Trial - 03.28.2026",
        "arr": 78837.51,
        "contract_end": "2027-04-11",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st May'26 : VT\n\nMet with Caio from Datadog to review early performance of the new TrustRadius/ICP lead flow. \nDatadog noted the leads look good so far, but their evaluation cycle is ~90 days due to longer deal timelines; they are currently tracking one meeting from the new batch. \n\nWe also aligned on updating the market report questionnaire/content, with Datadog targeting completion by June so content can be refreshed and approved by end of July. \n\nNext steps: \n-resend the kickoff checklist(Done)\n-confirm the TrustRadius awards publication timing\n -Revisit historical lead performance (906 prior leads) plus broader quality feedback in the coming months.",
        "pulseDate": "2026-05-21"
      },
      {
        "opp_id": "006RN00000IFT0zYAH",
        "csm": "Varun Tiwari",
        "name": "Datadog Cloud Dynamics (FKA Intricately) + Universe 150 products + S2026",
        "arr": 250000,
        "contract_end": "2027-04-11",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "21st Jul'26 : VT\n\nAugie reached to DD team on to schedule a call :\n-Starting in August, all CD data will be refreshed every 2 months.\n\n--Spend should not be treated as literal spend\n--HG is debating rebranding this dataset to avoid confusion on interpretation\n--The Spend is a “usage rating” to be used to compare like companies – ie Target v Walmart, not Target v Boeing\n \nWe're pushing for a call with Bradley to discuss this roadmap to improve the usage of HG's data and answer all pending Q's from DD",
        "pulseDate": "2026-07-20"
      }
    ]
  },
  {
    "accountId": "0013o00002TzRSpAAN",
    "accountName": "Quadient Software, Inc",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 320000,
    "lastOutbound": "2026-06-03",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-09-07",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Lm7BCYAZ",
        "csm": "Divyam Dewan",
        "name": "TR.Dan Goss - Quadient - Marketing Leadership",
        "arr": 180000,
        "contract_end": "2026-09-07",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Summary:\nRenewal September 7, 2026 — ~60 days away. HG data feed is live in Quadient's Google BigQuery (installs + buyer intent, automated deliveries confirmed). However, no scoring/prioritization layer applied — Quadient still runs a \"shotgun\" approach off raw volume. TR intent data only just added to the feed (July 9). Angus sent pre-renewal outreach July 9 to Joan + Abdur — no response yet. Platform at 86% export usage.\n\n\nTimeline (last 3 months):\nMay: Data feed automated into BigQuery confirmed | former user Melvin's access revoked — ownership gap internally | Mar/May syncs: Joan prefers ad-hoc over recurring\nJune: Jun 23 — BigQuery test delivery (35K buyer intent signals) | Jul 2 — July automated delivery confirmed (279K installs + 41K buyer intent) | TR intent data added to feed (July 9, confirmed by Angus email to Joan + Abdur)\nJuly: Jul 9 — Angus sends pre-renewal email to Joan + Abdur — no response | CPF-1815 (TR intent in RGIF feed) flagged \"Waiting on Requestor\" | HG-15060 (add TR buyer intent to Quadient RGIF feed) open | No HG Insider registrations from Joan or Abdur\n\n\nNext Steps (HG side):\nAngus/Divyam: Chase Joan + Abdur response to July 9 pre-renewal outreach — 60 days to Sep 7; need to get a value review + renewal conversation on the calendar this monthAngus: Schedule TR intent data enablement session with Joan/Abdur — data is flowing but no one at Quadient has been trained to act on it; this is the core adoption gap before renewal\n\n\nNext Steps (CX side):\nJoan Fabregat / Abdur Butt: Respond to Angus's pre-renewal email | attend enablement session on TR intent data + scoring layerQuadient (internal): Identify who replaced Melvin as internal HG data champion — power user continuity risk\n\n\nOpen Jira / Products / Solutions:\nCPF-746 (export reimbursement — Assigned, open) | CPF-573 (filter + scoring buckets — Backlog) | CPF-1815 (TR intent in RGIF feed — Waiting on Requestor) | HG-15060 (TR buyer intent add to Quadient feed — open) | Platform at 86% exports (86K/100K) — upsell ceiling visible | No HG Insider registrations",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000Oq4VOYAZ",
        "csm": "Divyam Dewan",
        "name": "TR - HG.Ziad Amira.Quadient 2025 IDL co-sell",
        "arr": 120000,
        "contract_end": "2026-10-31",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "Summary:\nRenewal October 31, 2026 — ~4 months away. Six IDL campaigns live since May 11; H1 largely delivered but two campaigns still paused (AR UMM UKI, CXM UKI) and one active dispute: Quadient was surprised by the CXM NORAM \"complete\" status — DemandView and Scott Stater reconciling lead counts. Lia Holmes submitted new UKI ICP June 26 to unblock paused campaigns. TR scores: Inspire 9.3 ✅, AR 8.7 ✅, AP 7.1 — AP below competitive benchmark. 16 stale premium content tasks from May need clearing.\n\n\nTimeline (last 3 months):\nMay: IDL campaigns go live May 11 (6 campaigns across NORAM, UKI, DACH) | May 5 — DACH query session (German landing page corrected from Portuguese) | May 22/26 — biweekly syncs | AP review strategy session — Katie review specialist meeting planned | Germany CXM rejections (phone validation) fixed Jun 11\nJune: Jun 3 — TrustQuotes/TrustCodes session with Ashlin + Lia | Jun 23 — monthly sync: full AI crawler deck presented (809 requests/30 days) | Jun 25 — Scott confirms \"many campaigns delivered in full\"; two still paused | Jun 26 — Lia submits new UKI ICP to unblock AR UMM UKI + CXM UKI | CXM NORAM dispute flagged (Quadient disputes \"complete\" status vs. DemandView's 4 customer returns) | H1 wrap-up: DemandView + Scott scheduled reconciliation call\nJuly: Jul 22 — next monthly sync confirmed | No HG Insider registrations | 16 premium content tasks stale/overdue from May | DACH $10K pilot active (Apr 2026–Apr 2027)\n\n\nNext Steps (HG side):\nScott/Divyam: Resolve CXM NORAM dispute — reconcile lead files with DemandView + Lia urgently; client trust at risk if H1 ends on a disputed deliveryScott: Re-launch two paused campaigns (AR UMM UKI + CXM UKI) using Lia's new June 26 ICP — confirm implementation timeline before Jul 22 syncDivyam: Clear 16 stale premium content Vitally tasks — confirm asset delivery status with Ashlin; drive TrustQuotes widget go-live (JS snippet implementation still pending Lia/Ashlin internal alignment)\n\n\nNext Steps (CX side):\nLia Holmes: Confirm paused campaign re-launch green light (ICP submitted Jun 26 — awaiting HG confirmation) | resolve CXM NORAM disputeAshlin Haley: Align with content team on website widget requirements (pixels, format) → TrustQuotes implementation | confirm Inspire customer story naming with content teamLia/Ashlin: Discuss H2 IDL scope, new regions, ICP updates ahead of October renewal\n\n\nOpen Jira / Products / Solutions:\nNA",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000WpAsYYAV",
        "csm": "Divyam Dewan",
        "name": "TR IDL Pilot - Germany Quadient",
        "arr": 10000,
        "contract_end": "2027-04-20",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Apr 21 call with Divyam Dewan: Quadient team actively engaged on review generation strategy for the Germany IDL Pilot, with Ashlin coordinating submission cadence and targeting to hit Top Rated thresholds. No churn or dissatisfaction signals; onboarding is progressing with clear next steps on campaign timing and suppression lists. First pulse reflecting active program management and on-track IDL onboarding.",
        "pulseDate": "2026-04-22"
      },
      {
        "opp_id": "006RN00000Xov89YAB",
        "csm": "Divyam Dewan",
        "name": "TR IDL Pilot - DACH Quadient",
        "arr": 10000,
        "contract_end": "2027-04-20",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Apr 21 call with Divyam Dewan: DACH IDL Pilot onboarding progressing with active stakeholder coordination — Lia/Lauren engaged on suppression lists and SFDC routing/webhook setup for regional lead delivery. No friction or dissatisfaction signals; the 70%/30% NA/UK&I targeting split is being finalized. First pulse reflecting healthy onboarding momentum and clear program direction for the DACH region.",
        "pulseDate": "2026-04-22"
      }
    ]
  },
  {
    "accountId": "0010V00002JKBbFQAX",
    "accountName": "DXC Technology Services LLC",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 311999.2,
    "lastOutbound": "2026-07-06",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "0063o000019StW1AAK",
        "csm": "Varun Tiwari",
        "name": "DXC - Global Platform Renewal 2023",
        "arr": 271999.2,
        "contract_end": "2026-11-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26 : VT\n\n-Augie has prepared few renewal options for Preethi and a call is rescheduled for next week for a quick discussion on the options.\n\n-Preethi said in the previous call while usage is positive with the change of ownership, she would need to coordinate internally with her leadership and it could take some efforts and time on her end.(Best to start the renewal discussions early)\n\n-Usage report shared with Preethi and all of the members from team are active on HG's platform\n\n\nNext Steps:\n-Call scheduled next week to walkthrough Preethi on the renewal options and gather her feedback",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN00000CNrEQYA1",
        "csm": "Varun Tiwari",
        "name": "DXC - Add Platform (Manohar)",
        "arr": 40000,
        "contract_end": "2026-11-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26 : VT\n\n Invoice & Procurement on current cycle:\n• Outstanding invoice was routed to Prithi's team in error and was not processed correctly within DXC's procurement system.\n• Gabriella is now coordinating with Prithi's Finance team to resolve the issue.\n• Approval from Prithi's manager is required before the invoice can be processed.\n• Gabriella will confirm whether she will manage the approval directly or if HG should reach out.\n• Future renewals will be separated from Prithi's contract to prevent similar issues.\n• As a Luxoft employee, Gabriella follows a separate procurement process.\n• Gabriella will verify whether HG Insights is already set up as a vendor within Luxoft's procurement system.\n\n Credit Model & Platform Updates:\n• Renewal will transition from the legacy user-based model to the credit-based pricing model.\n• One credit is approximately equal to $1, with lower per-credit pricing available at higher credit volumes.\n• Credits are only consumed when new data is exported; unchanged records can be re-exported without consuming additional credits.\n• Current $40K subscription is equivalent to approximately 40,000 credits, although an exact one-to-one mapping is not required.\n• Market Sizing/TAM capabilities are included and do not consume credits.\n• Custom geographic regions can be configured to support internal territory definitions.\n• Credit consumption is visible within the new platform, including overall usage and per-user visibility where applicable.\n• System Integrator data is currently limited to publicly announced contracts and does not yet provide full install-base coverage.\n\n\n Renewal Outlook:\n• Renewal is scheduled for December 1.\n• Gabriella's budget of approximately $40K has been approved in principle, subject to final financial approval closer to renewal.\n• Vendor onboarding should begin early to accommodate procurement timelines.\n•Gabriella requested her individual usage statistics separately.\n\nNext Steps\n• Varun to share Gabriella's individual usage statistics.(Shared by Augie)\n• Augie to share the standard renewal packages and pricing options.\n• Augie to provide the standard vendor onboarding terms and documentation.\n• Gabriella to confirm whether HG Insights is registered as a vendor within Luxoft's procurement system.\n• Gabriella to confirm the best approach for obtaining approval on the outstanding invoice from Prithi's manager.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001Tt05IAAR",
    "accountName": "BMC Software Inc",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 284750,
    "lastOutbound": "2026-05-26",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-12",
    "latestPulseDate": "2026-07-20",
    "opportunities": [
      {
        "opp_id": "006RN00000OzFFdYAN",
        "csm": "Varun Tiwari",
        "name": "BMC - MK Add on - Anderson Duncan, Hayden Anderson",
        "arr": 32000,
        "contract_end": "2026-10-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26 : VT\n\nThis opp is not relevant as it's already been merged with 143K contract renewal for BMC\n\nTicket open to merge it\n\nhttps://hgdata.atlassian.net/browse/CSO-471",
        "pulseDate": "2026-07-20"
      },
      {
        "opp_id": "006RN00000OpsY3YAJ",
        "csm": "Riley Rogers",
        "name": "TR - BMC - CVP x4, Event Support x2, Premium Content x8 - 11.30.2023",
        "arr": 112750,
        "contract_end": "2026-11-29",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "-   **Top Rated launched:** BMC announced today, with external promotion scheduled for Friday. Internal teams are already aligned, with executive social posts expected next week. Slides and email signatures have also been updated for rollout.\n    \n-   **Review generation:** BMC is now at 5 reviews for Buyer’s Choice. Claire said they’re still interested in a partner campaign, pending internal coordination.\n    \n-   **Campaign support needed:** Claire flagged that prior multi-product links were returning 404s and asked for a refreshed landing page covering all four products. They aligned on a $50 incentive, labeled **FY27**, with a **3/31/27** expiration.\n    \n-   **AI prompt follow-up:** Claire said she had not seen a follow-up from last week’s Leslie conversation. Riley confirmed no follow-up had gone out and committed to sending the slides and recording so Claire can review examples and prioritize prompts against current review coverage.\n    \n-   **Immediate next steps:** Riley to send the refreshed multi-product page by early next week, plus the Leslie call slides and recording. Claire noted she would be away from **June 21 to July 1**.",
        "pulseDate": "2026-06-25"
      },
      {
        "opp_id": "006RN00000LRNR7YAP",
        "name": "Renewal - BMC - Competitive Takeout Campaigns 2026",
        "arr": 143000.0,
        "renewalDate": "2027-06-30",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Varun Tiwari"
      }
    ]
  },
  {
    "accountId": "0010V00002Jv6mdQAB",
    "accountName": "KPMG LLP",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Strategic",
    "arr": 264967.23,
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-31",
    "latestPulseDate": "2026-06-29",
    "opportunities": [
      {
        "opp_id": "006RN000008inDJYAY",
        "csm": "Nick Johnson",
        "name": "Renewal - KPMG - US Renewal 2025",
        "arr": 264967.23,
        "contract_end": "2026-07-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Contract change",
        "pulseDate": "2026-06-29"
      }
    ]
  },
  {
    "accountId": "001d00000244e0gAAA",
    "accountName": "Insight Direct USA Ltd",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 260000.32,
    "lastOutbound": "2026-07-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000EgOh1YAF",
        "csm": "Atisha Waghela",
        "name": "Renewal - Insight - MI Add on 2025",
        "arr": 20000,
        "contract_end": "2026-11-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "We are engaged with the champion & the team but we do not strong engagement with decision makers, also we are yet to confirm the budget holder for this contract. \n\nThe core reason for concerning pulse is that the teams at Insight work in Silos leading to no strong expansion and risking retention.",
        "pulseDate": "2026-04-27"
      },
      {
        "opp_id": "0063o000019V9r7AAC",
        "csm": "Atisha Waghela",
        "name": "Renewal - Insight - Platform US - 2 Year Deal - Davo + DGT 2025",
        "arr": 240000.32,
        "contract_end": "2027-03-04",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "June 19, 2026 – AW: Engagement with Insight Direct remains active across multiple tracks. Rakesh (Analytics) is running VMware displacement campaigns using HG data, has onboarded 22 new analysts, and is driving adoption via a central data warehouse. He's benchmarking HG contact coverage against ZoomInfo — contact data is not in the current contract, making this both an expansion opportunity and a watch item. Shahbaz (EMEA/global) is using HG for competitor benchmarking; UK SIC code gaps are blocking EMEA use cases and have been escalated to product. On the strategic side, Raghav Puranmalka (BCG) is engaged as a partner helping Insight operationalize HG data as part of their broader business intelligence strategy — targeting ~1,500 accounts with HG as the core data layer. Stephan Kuiper is handling the technical data pipeline work (Databricks integration), and a CSV formatting issue was resolved in May. Leadership is mandating HG usage for campaigns and renewal is targeted for March. Key next steps: complete the contact data coverage analysis for Rakesh's 100 ICP accounts, resolve the UK SIC code limitation for Shahbaz, and keep the BCG/Raghav engagement tight to reinforce HG's position ahead of renewal.",
        "pulseDate": "2026-06-19"
      },
      {
        "opp_id": "006RN00000Xru2fYAB",
        "name": "EMEA SFTP feed 3-4000 accounts",
        "arr": 0.0,
        "renewalDate": "2026-11-30",
        "pulse": "Concerning",
        "pulseDate": "2026-07-10",
        "pulseNote": "expansion discussion in motion — Rakesh bi-weekly (7/2) opened a 114-account contacts eval vs. ZoomInfo, an MCP-connector demo for leadership, and an EMEA AI sales coach (100+ use cases) with a warm intro to CIO Paul Erhard. Real multi-product upside. Next: send the 114-account contacts match + MCP setup/webinar link, and get the DPA moving (gates contact data). Shared awaiting rakesh's response.",
        "csm": "Atisha Waghela"
      }
    ]
  },
  {
    "accountId": "001d000001SOJJKAA5",
    "accountName": "Informatica LLC",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 257775,
    "lastOutbound": "2026-06-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-08-07",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "0063o000019lpEgAAI",
        "csm": "Divyam Dewan",
        "name": "Informatica 2 Year Renewal - 2024",
        "arr": 257775,
        "contract_end": "2026-08-07",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Renewal is August 7 — 28 days away. Positive procurement signal: Heather submitted the HG vendor intake request into Salesforce's procurement portal July 8 and it's in the approvals queue. Flat renewal at $257,775 agreed in principle. Big parallel development: an active Salesforce RFP for technographics/intent (replacing Demandbase) — Informatica + Bluebirds are both recommending HG; Ziad has a follow-up with the RFP contact July 11.\n\n\nTimeline (last 3 months):\nMay: Weekly syncs | May 22 pricing call — Murali pushes back on 9M → 278K scope | Heather confirms hard budget cap $257K | May 26 Heather cancels sync + sends 3 pre-meeting questions | May 29 Ziad answers; confirms no extra work for RGIF\nJune: Jun 5 reconnect (Tom, Heather, Murali, Hemraj, Kevin, David Connors) — flat renewal agreed | Jun 9 Heather: HG not active in Salesforce procurement portal | Jun 10 data feed sync — Sep delivery confirmed as first RGIF batch | Jun 24 biweekly (short) — order form confirmed received; Zayn Elmasry delivers partial AOV/ICP analysis | Jun 26 Heather requests sample invoice for vendor setup | Ziad sends invoice same day | INC1211422 opened (new platform access issue)\nJuly: Jul 7 Ziad nudges Heather | Jul 8 Heather confirms: procurement intake submitted, in approvals queue ✅ | Jul 8 biweekly — Heather, Hemraj, Murali all declined | Jul 9 Salesforce RFP surfaced (#customer-bombora) — Informatica + Bluebirds recommending HG; Clay flagged as main threat | Jul 11 Ziad meeting with RFP contact (tomorrow)\n\n\nNext Steps (HG side):\nZiad/Divyam: Chase Heather on procurement approval timeline — Aug 7 is 28 days away; standalone vendor approval + contract sign could take weeks; need a hard date from Heather this weekZiad: July 11 Salesforce RFP meeting — lead with technographic differentiation (date first/last verified, confidence indicator) | FAI + time series as scope add-ons | prepare Clay counter-positionDivyam: Get Murali's explicit acceptance of RGIF scope (377K accounts vs. 9M universe) in writing before contract is signed\n\n\nNext Steps (CX side):\nHeather: Drive procurement approval through Salesforce system | flag any blockers to Ziad immediately | confirm EBR invite response (Jul 20–22, Palo Alto)Hemraj: Confirm September feed prep — updated account list needed by mid-to-late August | resolve INC1211422 (platform access, June 18, unresolved)Murali: Re-engage on RGIF scope confirmation — no written acknowledgment of the 9M → 377K change on record\n\n\nOpen Jira / Products / Solutions:\nNA",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001wivKZAAY",
    "accountName": "Open Text Corporation",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 226575,
    "lastOutbound": "2026-07-16",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-09-30",
    "latestPulseDate": "2026-07-20",
    "opportunities": [
      {
        "opp_id": "0063o000017SvSKAA0",
        "csm": "Varun Tiwari",
        "name": "OpenText Year 2 Renewal and Expansion 2024",
        "arr": 226575,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "21st Jul'26 -VT\n\nContext & Timing:\n• Sujay joined the call while driving to work, so the discussion was kept brief.\n• OpenText's new financial year began on July 1.\n• Regional GTM kickoffs are currently underway, replacing the previous single US kickoff event.\n• Canada kickoff is taking place this week (David attending all SKO's).\n• Berlin kickoff is scheduled for next week (Sujay attending).\n• Singapore kickoff will take place the following week (end of July).\n\n●GTM Kickoff:\n• The new regional format includes approximately 300 attendees per event, allowing for more interactive discussions.\n• The audience includes Sales, Presales, Customer Success/Post-Sales, Professional Services, and Marketing teams.\n• Customer 360 will be showcased as a breakout training session during the Berlin kickoff.\n\nCustomer 360 for Open text:\n• HG Insights data is embedded within Customer 360 as a dedicated view.\n• The dashboard includes competitor installs, software spend by category, and location insights.\n• Parent groups are mapped to HG Company IDs to build the Customer 360 view.\n• The current implementation focuses on firmographic and technographic data rather than intent signals.\n• The rollout is intentionally phased to avoid overwhelming users with too many new capabilities at once.\n• OpenText is also standardizing its broader technology stack, resulting in significant enablement and training efforts.\n\nRenewal Discussion\n• David is the budget owner, while Sujay was unsure of the current approval status.\n• The renewal discussion will resume after the regional GTM kickoffs are completed at the end of July.\n• Sujay will discuss the HG Insights renewal budget with David during the Berlin kickoff.\n  \nNext Steps:\n• Sujay to discuss the HG Insights renewal budget with David during the Berlin kickoff.\n• Schedule a renewal discussion and platform demonstration after July 31 to review the new platform experience and renewal scope.",
        "pulseDate": "2026-07-20"
      }
    ]
  },
  {
    "accountId": "001d000001uHLmbAAG",
    "accountName": "Pure Storage",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 225000,
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-11-09",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000Af0b0YAB",
        "csm": "Andy Lim",
        "name": "Renewal - Pure Storage - Portworx Technographic Enrichment 2025",
        "arr": 225000,
        "contract_end": "2027-11-09",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Consistent working-level engagement. Ever Pure / HG Insights syncs held May 20 (transcript), June 1, June 22; ICP Follow Up thread June 22-23; Product Catalog discussion June 4; Check in June 17-19. \"A few slides on Installs & spend\" shared May 15-19. Data Review sessions with Charlie Morgans on May 14 recorded. Engagement steady across the rebrand. Holding Healthy.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001XYEC8AAP",
    "accountName": "Sage Global Services",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 223250.08,
    "lastOutbound": "2026-06-30",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-31",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7fXYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Sage Intacct - CVP - 11.01.2025 (Written Renewal)",
        "arr": 34000,
        "contract_end": "2026-10-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Sage won 2026 TrustRadius Top Rated (June 3-4) across multiple listings. Bi-weekly sync with Brock held June 11 (recap sent) and June 25 (deck shared). Latest review lists sent May 28-June 3. Brock registered for both June and July HG Insider sessions. Consistent execution. Holding Healthy.",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN000003v2rOYAQ",
        "csm": "Andy Lim",
        "name": "Renewal - Sage - Data Strategy 2025",
        "arr": 155250,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Still Concerning but with meaningful progress. Sage x HG Insights support call held June 5 specifically to reconnect the Production Salesforce integration (ticket 10643). \"Missing Salesforce fields and permissions\" thread June 2-4 is actively being worked. New Sage AME Switcher Campaign work initiated June 22 requesting HG intel. ICP development call held June 18. Intent analysis exchanges with Sage June 15-18. Bi-weekly cadence rescheduled to July 9. Connector permission issue is now being actively resolved but until it is back online and export credits move off zero, this stays Concerning.",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN00000Oq7eIYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Sage Accounting - CVP - 01.26.2026 (Written Renewal)",
        "arr": 34000.08,
        "contract_end": "2027-01-25",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Same as Intacct — Sage Top Rated 2026 wins landed early June, review list delivery cadence with Brock steady, bi-weekly TR sync held June 11 and June 25. Contract renewed cleanly Jan 2026. Holding Healthy.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d00000244dzYAAQ",
    "accountName": "Epicor Software Corporation",
    "csm": "Pam Huck",
    "csmKey": "pam",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 216572,
    "lastOutbound": "2026-07-15",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-10",
    "latestPulseDate": "2026-06-17",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7f2YAB",
        "csm": "Pam Huck",
        "name": "TR - Epicor - Lead Acceleration Annualized Plan (cc: Christian Arce) - 12.31.2025 (Written Renewal)",
        "arr": 166572,
        "contract_end": "2027-03-22",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "June 17, 2026 | PH — Confirming Healthy. Bi-weekly call held with Sam Malecek (Anderson Duncan joined). Strong forward motion across FY27 renewal planning, performance metrics, and expansion signals.\n\nFY27 renewal motion is locking in. Customer-initiated by Shreyasi on 6/15, upgraded to in-person business review by Pam + Anderson. Target week of July 6 (Mon-Wed; Sam out Friday). Shreyasi coordinating with Michelle Graham. Sam directly tied the visit to renewal timing: \"really good to go before contract renewal\" (Oct 1). Rachel surfaced as the subscription decision-maker — needs to be in the room. Sam asked to be looped into the budget conversation Pam plans to have with Scott Olson and Michelle.\n\nBudget holder context. Stephanie Parker (Principal, Demand Generation – ABM) is the Propello budget holder; provisioned for intent-data access on 6/9 after a portal login issue. Pam re-sent the portal invite and shared intent files via secure Box folder.\n\nHard performance signals. Kinetic page views +172% over last 30 days, intent-company traffic up, rating moved from 7 to 8, Buyer's Choice qualified for Kinetic and P21. Sam reaction: \"everything is headed in the right direction.\"\n\nPremium content workstream in flight. Market reports for Kinetic and P21 (replacing previous customer story and generic category report) being built off the new review base. Pam cited the SAP comparison (\"performs better than any of their other content\"); Sam: \"that sounds so wonderful.\" Reports will be available for Sam's team to use in other marketing efforts.\n\nEMEA expansion opportunity surfaced. Past inbound from Anish Chandran (Julia's team, based in UAE) for Kinetic and possibly P21. Sam confirmed independent conversations are fine. Anderson's play: lead with premium content as the foot in the door, raise at the in-person once we have Nathan Schiller in the room.\n\nPropello event scouting underway. Sam looping in Brianna Hughes (Propello demand gen) for upcoming events; mid-July customer panel webinar identified as a possible QR/link review-collection opportunity. Two events remain under the agreement (used 1 of 3).\n\nWidget rollout staged. Sam's meeting with Epicor web/content managers is set for first week of July to scope the implementation lift. Pam committed to sending widget docs to prep him.\n\nClosed loops: Sam submitted the TechCares nomination 6/12.\n\nNext: Lock in-person dates and agenda with Michelle, Rachel, and Stephanie; deliver detailed review extract to Sam; send widget docs; build market reports for Kinetic and P21; scout Propello event with Brianna; raise EMEA play at the in-person.",
        "pulseDate": "2026-06-17"
      }
    ]
  },
  {
    "accountId": "001d0000026GUxdAAG",
    "accountName": "Softcat Ltd",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 211666.67,
    "lastOutbound": "2026-07-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-08-31",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "0063o000019lVuqAAE",
        "csm": "Nick Johnson",
        "name": "Renewal - Softcat - Platform - HGSCPGLH0909 2025",
        "arr": 211666.67,
        "contract_end": "2027-08-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — the June 12 EBR with James Wingham, Shelley Helling, and Sara Ewen was productive, with all three customer budget holders engaged and multiple follow-up actions assigned to David Garcia Thomas (like-for-like UK&I pricing for Shelley's FY27 budget planning, US state-by-state org counts). Last meeting sentiment is Stable, and the long-term commercial relationship remains strong with renewal not due until August 2027. The primary risk is internal bandwidth: Softcat's D365 CRM migration has consumed Luke Herridge's team throughout H1 2026, delaying HG data activation, and three multinational expansion opportunities have been qualified out since mid-2025. Sara Ewen (new data management lead since December 2025) received her platform license in May 2026 and is still being onboarded to the relationship. There are 0 open Jira support tickets; export consumption remains well within limits at 8,250 entities used against the 50,000 cap.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d000001Oa3XkAAJ",
    "accountName": "Hyland",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Bryson Littlejohn",
    "segment": "Enterprise",
    "arr": 211000,
    "lastOutbound": "2026-04-17",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-09-29",
    "latestPulseDate": "2026-06-18",
    "opportunities": [
      {
        "opp_id": "0063o000015d4QdAAI",
        "csm": "Varun Tiwari",
        "name": "Renewal with Expansion - Hyland Opp - Sales Team - 3 year deal 2024",
        "arr": 211000,
        "contract_end": "2027-09-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "18th June'26 : VT\n\nJoe is currently working on the scoring mechanism on how they he build few scoring profiles on his own \n\n-He is on PTO so prefers to connect in July instead\n\n-Overall the account is in good shape after the SFDC connector was setup \n\nNext Steps :\n-Understand the business priorities and how can HG support it\n-Account scoring handholding to Joe",
        "pulseDate": "2026-06-18"
      }
    ]
  },
  {
    "accountId": "001d00000244cZxAAI",
    "accountName": "Docusign, Inc.",
    "csm": "Rani Guy",
    "csmKey": "rani",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 205000.01,
    "lastOutbound": "2026-07-01",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-06-27",
    "opportunities": [
      {
        "opp_id": "006RN00000DvmjaYAB",
        "csm": "Rani Guy",
        "name": "Renewal - Docusign - CEO Referral - Platform 2026",
        "arr": 75000.01,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Team is very independent, knows the data, see's the value. Ziad and I need to introduce RGIP to get them migrated. I will meet with Andrew and start laying the foundation for the larger conversation with Keith who is the budget holder. I am checking with Jodi to see if the new advancements we are making to track new products will improve our coverage of the list share late last year to drive a value add conversation. Will continue to share HG Insider webinar to get them excited about the migration",
        "pulseDate": "2026-06-27"
      },
      {
        "opp_id": "006RN00000RnzXSYAZ",
        "csm": "Rani Guy",
        "name": "Docusign - Better Together Pilot - 2025 (cc: Anderson Duncan, Hayden Anderson)",
        "arr": 130000,
        "contract_end": "2027-01-05",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Better together onboarding has been slow. Very little value realization. We delivered 2 ICPs, one for IAM and CLM. But there is already an ICP built out and used internally by the marketing team so we are working with the DocuSign team to help improve and guide the existing framework to get alignment that can we shared across departments. Delivered file on 2/5/26. We did a TR demo two weeks ago and have a Copilot demo scheduled for this Friday 2/27/26. Goal is to then regroup and onboard Copilot, data feed and build out CVP, although no one want to own this internally since it is a lot of work.",
        "pulseDate": "2026-02-24"
      }
    ]
  },
  {
    "accountId": "001d000001X6U64AAF",
    "accountName": "Pegasystems Inc",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 190674.99,
    "lastOutbound": "2026-06-03",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-08-31",
    "latestPulseDate": "2026-07-20",
    "opportunities": [
      {
        "opp_id": "006RN00000BwBeHYAV",
        "csm": "Varun Tiwari",
        "name": "Renewal - Pegasystems- Americas Sales 2025",
        "arr": 180674.99,
        "contract_end": "2026-08-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26: VT\n\n-Frank has requested an option combining MCP+Platform+Data Feed\n-KP is working internally to create multiple options for Frank\n-Frank wants a clear reasoning behind every credit calculated across offerings \n-Varun is connecting regularly internally with Leo and KP to help create a proposal which is solid and doesn't give any down-sell room to frank(perfect positioning is required)\n\nNext Steps:\n-Share the proposal with Frank by 24th July(Varun)\n- Call on 29th July with Frank to lock the changes and align on the scope of the renewal(Varun/Leo/KP)",
        "pulseDate": "2026-07-20"
      },
      {
        "opp_id": "006RN00000QDuIMYA1",
        "csm": "Varun Tiwari",
        "name": "PegaSystems - Users",
        "arr": 10000,
        "contract_end": "2026-10-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26: VT\n\n-Frank has requested an option combining MCP+Platform+Data Feed\n-KP is working internally to create multiple options for Frank\n-Frank wants a clear reasoning behind every credit calculated across offerings \n-Varun is connecting regularly internally with Leo and KP to help create a proposal which is solid and doesn't give any down-sell room to frank(perfect positioning is required)\n\nNext Steps:\n-Share the proposal with Frank by 24th July(Varun)\n- Call on 29th July with Frank to lock the changes and align on the scope of the renewal(Varun/Leo/KP)",
        "pulseDate": "2026-07-20"
      }
    ]
  },
  {
    "accountId": "001d0000026GUB3AAO",
    "accountName": "Iron Mountain Incorporated",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 190000.08,
    "lastOutbound": "2026-05-29",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-10-27",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN000008osWtYAI",
        "csm": "Varun Tiwari",
        "name": "IronMountain - Global RevOps",
        "arr": 190000.08,
        "contract_end": "2026-10-27",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26 : VT\n\n\nModel Accuracy Assessment and Intent Score Updates:\n\n- Iron Mountain running a QRC accuracy assessment of the current propensity model\n  - Evaluating variables from both HG data and internal Salesforce data\n  - Adjustments to the model will follow based on results\n- Intent topics need updating: key reason scores are declining(Varun said it)\n  - Topics selected long ago may no longer be surfacing, driving intent scores to zero (Varun said it)\n  - 33 current intent topics vary wildly in coverage (e.g., Colocation: 128K accounts vs. IT Asset Management: 2.1K accounts)\n- HG shared account analysis (sent 1st July) covering the full Iron Mountain account list\n  - ~6M accounts received, ~4.2M unique matched entities (healthy match rate)\n  - Breakdown includes revenue/employee totals, segmentation (Enterprise, Mid, SMB), and intent topic coverage\n  - Juan confirmed Iron Mountain will review the analysis by next week and respond on intent topic\n- HG also recommended ~100 intent topics across 15 categories based on Iron Mountain's business\n  - Iron Mountain to review and either confirm the list or flag missing/irrelevant categories\n  - Once shortlisted, HG will run a coverage/fill-rate analysis against the account list\n\nPropensity Model 2.0 and Broader Strategic Alignment:\n\n- Iron Mountain targeting September to begin scoping the next-generation propensity model\n  - Until then, continuing with the current 100K account scope\n- Peter flagged in last call interest in Iron Mountain building its own internal scoring model\n  - HG can supply install data, spend data, and firmographics for the 100K accounts to train it\n  - Needs a broader call to align: Leo, Max, Varun, Solutions team + Peter and relevant Iron Mountain stakeholders\n- Contract expires in October; procurement lead time needs to be confirmed with Peter\n  - If 60 days are required, renewal scoping should start by the end of August or first week of September\n  - Scope changes for 2.0 (different datasets, expanded accounts) will require scoping on HG's side and approvals on Iron Mountain's side\n\nSalesforce Connector (Unused Entitlement):\n\n- Iron Mountain is not currently using the Salesforce Managed Package connector\n  - Already included in the current contract scope: ~200 technologies available for CRM enrichment\n  - Varun to share the full Managed Package documentation today for IT review(Done)\n\n\n Next Steps:\n\n- Share Salesforce Managed Package documentation (Varun) Done\n  - Send today for Iron Mountain's IT team to review capabilities and installation steps (Done)\n- Review account analysis and respond on intent topics (Juan)\n  - Iron Mountain to review the 1st July analysis and confirm or revise the recommended intent topic categories by next week\n- Coordinate broader alignment call with Peter(Juan/Leo)\n  - Leo, Max, Varun + Peter and Iron Mountain stakeholders to align on Model 2.0 next steps, data scope, and renewal timing\n  - Target: Next two weeks\n- Check procurement lead time with Peter\n  - Contract expires in October; need to confirm whether 30 or 60 days are required to determine when renewal scoping must start (Juan/Peter)",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "0013o00002cxub7AAA",
    "accountName": "HCL America Inc.",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 188333.33,
    "lastOutbound": "2026-05-05",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-05-31",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq4VTYAZ",
        "csm": "Nick Johnson",
        "name": "TR - HCL - Leads",
        "arr": 55000,
        "contract_end": "2026-11-03",
        "deal_type": "New Subscription",
        "pulse": "Poor",
        "pulseNote": "The HCL Software platform contract expired May 31 2026 with no signed renewal in place as of June 15 2026, leaving the account in a contractually exposed state; all users are currently read-only due to exhausted export credits (43,625 consumed against a 25,000 limit). A final renewal proposal ($788K recommended package, $408K entry tier) was delivered to Poonam Fotedar on June 3 and approved for internal circulation, but final budget authority rests with CRO Will Ellse who has not been directly briefed by the HG team. The HCL Canada contract ($250K ARR) was lost on May 22 2026, and a concurrent general sales enablement RFP selected a competitor over HG on the same date, signaling active multi-vendor evaluation. There are 0 open Jira support tickets; the IDL campaign for HCL Unica is live and delivering leads (50/month), which provides near-term value leverage, but no EBR has been completed and three Vitally tasks remain significantly overdue (EBR due Feb 12, ATL check-ins due Feb 11, RGIP positioning due Apr 7).",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d000001fkMDCAA2",
    "accountName": "Dynatrace",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 165124.09,
    "lastOutbound": "2026-06-25",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2028-03-03",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN000005m7tyYAA",
        "csm": "Divyam Dewan",
        "name": "Renewal - Dynatrace - Platform Renewal 2025",
        "arr": 165124.09,
        "contract_end": "2028-03-03",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\n$165K ARR (36-mo), renewal Mar '28. Data feed expansion in scoping since April — stalled; Roger Steffen's use case (ICP/whitespace vs. CRM enrichment) undefined after 3+ months. Biweekly cadence fragile — Jessica canceled May 28, Jun 11, Jul 9; Jul 9 call happened anyway (Weflow recording, Stable sentiment). MCP pilot not started — gated on Dynatrace identifying internal SA. DevOps headcount is the active live thread (Jun 17–25 + Jun 25 call with Vaishali Pathak). Former champion Tyler Brantingham departed. Two CPF tickets awaiting triage. No HG Insider attendance.\n\n\nTimeline (May – July 2026):\nMay: Data ingestion strategy call May 19 (3 options walked: Data Feed / API / MCP; Snowflake confirmed as preferred endpoint) | May 28 biweekly canceled (Jessica waiting on Roger re: MCP follow-up)Jun: Jun 11 biweekly canceled (Jessica: \"no clear path forward for integration\") | DevOps headcount thread Jun 17–22 | Jun 25 call — Vaishali Pathak joined, Roger use case still undefined | CPF-1834 filed Jun 1Jul: Jul 9 calendar-canceled by Augie but 45-min call happened (Stable sentiment) | No inbound from Dynatrace post-call\n\n\nNext Steps (HG Side):\nPin Roger's use case in writing before next call — ICP/whitespace vs. CRM enrichment distinction blocks the data feed proposalMCP pilot — push complimentary credits + pre-built agents path (Chuck is ready; needs internal SA from Dynatrace)DevOps headcount pilot — scope with Augie as a fast-path expansion hook; custom pilot agreed on Jun 25\n\n\nNext Steps (CX Side):\nRoger — formally define and share data feed use case (Jun 25 action item, still open)Chuck Houston — identify internal solutions architect for MCP integrationJessica — confirm next biweekly date; cadence has slipped 3 consecutive weeks\n\n\nOpen Jira / Products / Solutions:\n CPF-1834 (data quality — awaiting triage) | CPF-1501 (credit estimation bug — awaiting triage) | CPF-937 (AI chat/search — in progress) | \nHG Insider | No attendance — 5 contacts invited Jun 2 session, none registered",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d0000026ELtXAAW",
    "accountName": "Advanced Micro Devices , Inc.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Ravi Sharma",
    "segment": "Strategic",
    "arr": 157500,
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000FOYkmYAH",
        "csm": "Atisha Waghela",
        "name": "Renewal - AMD - Universe Feed Renewal 2026",
        "arr": 157500,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Migration discussion in progress. No call this week; July data feed delivered 7/8 and David Rockwell declined the bi-weekly (OOO 7/17 and 7/24). Engagement is delivery-driven, risking passive-feed status. Next: confirm the July file was ingested and use the next live touch to tie the feed to a pipeline/coverage outcome.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001lrLcMAAU",
    "accountName": "Thomson Reuters",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 153750,
    "lastOutbound": "2026-04-21",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-07-30",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN000006c9gOYAQ",
        "csm": "Divyam Dewan",
        "name": "Thomson Reuters - LexisNexis Displacement - Data Feed",
        "arr": 153750,
        "contract_end": "2026-07-30",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Renewal is July 30 — 20 days away — with zero commercial progress to date. First formal renewal meeting with Anushree + Vibhuti is today at 8:30 PM IST, confirmed July 2. RGIF consumption model has never been formally presented; HG-14976 uplift numbers (companies +11.2%, sector uplifts up to +66%) are ready. Blake Way (commercial/budget owner) has been OOO since April 29 and is not on today's invite. Hayden Smith is departing — Augie Buettner taking over mid-renewal with no TR introduction yet.\n\n\nTimeline (last 3 months):\nMay: May 13 data review call — LexisNexis/Westlaw gap deck presented to Anushree + Vibhuti | HG-14976 delivered (V2 → RGIF uplift: +11.2% companies, +46–66% in key sectors) | HG-15080 (renewal prep) closed | Anushree + Vibhuti + Olga register for June HG Insider\nJune: Jun 10 — Divyam sends renewal outreach — no response | Jun 15 — Gavin Padden flags CDAO dinner TR follow-up (outcome unknown) | Jun 23 — second outreach — no response | Jun 30 — Hayden sends AE-weight email; Blake OOO auto-reply fires again\nJuly: Jul 1 — Anushree replies: \"let's connect after July 9\" | Jul 2 — 8:30 PM IST July 10 confirmed | Hayden Smith departure announced (Augie Buettner incoming) | Hayden tentative on today's call | Jul 10 (today) — first formal renewal meeting scheduled\n\n\nNext Steps (HG side):\nDivyam: Today's call — present RGIF consumption model + HG-14976 uplift numbers | anchor on LexisNexis/Westlaw gap (23K vs 13K) + sector uplifts | push for Blake Way's involvement on a follow-up before July 30Divyam/Augie: Introduce Augie as AE replacement on or immediately after today's call — mid-renewal AE change needs to be handled proactively before customer noticesDivyam: Sync with Gavin Padden on CDAO dinner TR follow-up (June 15 Slack) before or after today's call — understand if there's an exec thread to pull\n\n\nNext Steps (CX side):\nAnushree: Attend today's 8:30 PM meeting | bring Blake Way into a follow-up commercial conversation before July 30Blake Way: Re-engage post-OOO — 20 days to renewal; commercial/budget sign-off neededVibhuti: Validate RGIF uplift numbers against OLI churn model use case — confirm consumption model scope aligns with her 116-product list\n\n\nOpen Jira / Products / Solutions:\nNA",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001ReRdkAAF",
    "accountName": "Check Point Software Technologies, Inc.",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Steve Hamilton",
    "segment": "Enterprise",
    "arr": 150000,
    "lastOutbound": "2026-07-13",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-11-21",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000FPAtBYAX",
        "csm": "Nick Johnson",
        "name": "Renewal - Check Point Platform 2025",
        "arr": 150000,
        "contract_end": "2027-11-21",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — the 24-month $150K/year renewal (signed March 4, 2026, ends November 2027) is tracking well with broad multi-team adoption across Sales Ops, Channel, ABM, and SASE Marketing. Active engagement through June 14: the Salesforce connector authentication was restored June 10 with 63K accounts selectively enriched, competitive export requests were delivered to Dan Bavli on June 11, and an intent scoring model was configured June 9. Uri Nishry outlined a unified data strategy (HG + 6sense + Snowflake) on June 4, signaling strategic intent for expansion. The export overconsumption crisis from May 2026 has been resolved — HG wrote off approximately 150K credits from the prior period and committed to monthly usage reports for Uri, Tal, and Denise. Risks to monitor: platform bug CPF-2175 (Dan Bavli's Opportunity Generator showing 270K vs. expected 37M+ companies) remains unresolved as of June 14; an EBR is scheduled for the HG Summit July 20-22 with Uri Nishry and Ariel Keinan but attendance is not yet confirmed. There are 0 open Jira support tickets.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d000001aROoRAAW",
    "accountName": "TD Synnex",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 150000,
    "lastOutbound": "2026-07-07",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-01-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Tnkc8YAB",
        "csm": "Atisha Waghela",
        "name": "TDS EMEA IBM/Automation",
        "arr": 50000,
        "contract_end": "2027-01-31",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Montse call (7/8) drove a Cloud Dynamics 'aha' and refined IBM intent topics (450→232), but exposed a real gap — near-zero European intent signals just as the US model weights intent at 65%. Data-quality risk to EU value story with renewal being weighed. Next: investigate EU/Spain intent quality, share the 232 topics, build an IBM Cloud Dynamics use case, and raise contacts as a renewal upsell with Augie.",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000O6Q6uYAF",
        "csm": "Atisha Waghela",
        "name": "NA IBM MCP Server by Francis - MK rep Charles Hawkins",
        "arr": 100000,
        "contract_end": "2027-12-31",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Montse call (7/8) drove a Cloud Dynamics 'aha' and refined IBM intent topics (450→232), but exposed a real gap — near-zero European intent signals just as the US model weights intent at 65%. Data-quality risk to EU value story with renewal being weighed. Next: investigate EU/Spain intent quality, share the 232 topics, build an IBM Cloud Dynamics use case, and raise contacts as a renewal upsell with Augie.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "0013o00002egVj4AAE",
    "accountName": "Intuit Mailchimp",
    "csm": "Riley Rogers",
    "csmKey": "riley",
    "am": "Hayden Smith",
    "segment": "Enterprise",
    "arr": 145000,
    "lastOutbound": "2026-06-16",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-10-20",
    "latestPulseDate": "2026-07-14",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq5ykYAB",
        "csm": "Riley Rogers",
        "name": "TR - Intuit - CVP x2 - 10.21.2025 (Written Renewal)",
        "arr": 50000,
        "contract_end": "2026-10-20",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   **Campaigns/live status:** Intuit confirmed two active campaigns: **QBO Advanced** and **IES**. QBO Advanced launched **June 11** and already has reviews coming in; IES launched **July 7**. Current YTD review status: **IES = 11 reviews**, **QBO Advanced = 5 more needed**.\n    \n-   **What Intuit cared about most:** Natalie and Amy focused on **how QBO Advanced is being positioned in AI/product comparisons**. They called out that QBO Advanced is being compared to **NetSuite** and **Sage Intacct**, which they see as unfair because **QBO Advanced is not an ERP**, while **IES is**. Their longer-term goal is to shape profile language so AI/comparison experiences better distinguish the two products and ideally point ERP buyers toward IES.\n    \n-   **Product/value discussion:** Riley demoed the new **GEO / AI metrics dashboard**, including crawl activity, competitor share, top crawled pages, category monitoring, and scheduled delivery. Riley also introduced a **premium content** option (market report, competitive report, or customer story), including a **GEO-crawlable** version priced around **$15K**. Amy asked for more documentation before deciding.\n    \n-   **Commercial signal:** Intuit raised **FY27 renewal timing** as a live priority. **QBO Advanced is up now** and **IES is up in October**; Natalie said she would coordinate a call with Mardigan and Riley to discuss a **holistic renewal** approach across both.\n    \n-   **Operational asks / follow-ups:** Natalie said she would connect Riley with **Sandpath** on intent data. Riley committed to sending the **Tech Cares Award** application, sending **premium content documentation** to Amy, confirming campaign status in **Asana**, and exploring whether profile/category changes could better support QBO vs. ERP positioning.\n    \n-   **Reference / advocacy nuance:** Riley confirmed that **anonymous reviews cannot be attributed**, except where a reviewer opted in as a **reference candidate**; those can appear as **verified users** if they meet the threshold.",
        "pulseDate": "2026-07-14"
      },
      {
        "opp_id": "006RN00000Oq7fcYAB",
        "csm": "Riley Rogers",
        "name": "TR - Intuit Enterprise Suite - CVP + Cat Intent Data x6 - 10.24.2025 (Written Renewal)",
        "arr": 50000,
        "contract_end": "2026-10-23",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   Intuit is managing **award announcement coordination** ahead of the June 10 launch, with Natalie trying to tighten internal distribution after an early badge post.\n    \n-   There is still **ownership flux across Mailchimp and adjacent teams** following layoffs. Spencer is picking up Mailchimp work, Annabelle was impacted, and Probas is currently a useful bridge between Mailchimp and IES.\n    \n-   Natalie is trying to **centralize review-related contacts across Intuit**, which should make future coordination easier once the contact map is in place.\n    \n-   A **QuickBooks Online Advanced campaign** is moving forward through TrustRadius, pending confirmation on invoice status and Natalie sending the customer email list for execution.\n    \n-   A separate **Sydney-led campaign** tied to Omnicom/MBWW appears to be **running about a week behind** its stated timeline, and Hayden is waiting on follow-up to keep launch planning on track.\n    \n-   Intuit is also still working through **intent data / Demandbase + data lake planning**, but details are not yet settled.",
        "pulseDate": "2026-06-25"
      }
    ]
  },
  {
    "accountId": "0013o00002ehIzzAAE",
    "accountName": "F5",
    "csm": "Pam Huck",
    "csmKey": "pam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 144000,
    "lastOutbound": "2026-06-01",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-30",
    "latestPulseDate": "2026-06-26",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7fkYAB",
        "csm": "Pam Huck",
        "name": "TR - F5 - CVP x5 + Event Support - 10.01.2025 (Written Renewal)",
        "arr": 144000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Strong presence at events in Cancun and Singapore. Working to schedule meeting with VP.",
        "pulseDate": "2026-06-26"
      }
    ]
  },
  {
    "accountId": "001d0000026GU2zAAG",
    "accountName": "Dayforce US, Inc.",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 136372.5,
    "lastOutbound": "2026-05-21",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-30",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000DkHrDYAV",
        "csm": "Varun Tiwari",
        "name": "Renewal - Ceridian Renewal + 8 Seats, FAI and Intent2025",
        "arr": 136372.5,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st July'26 : VT\n\n### Right-to-Win Analysis: Coverage Gaps\n\n- Dayforce running win/loss analysis using HG data; initial results didn't pass the sniff test\n  - Coverage for specific payroll vendors (ADP, UKG, Workday, Ceridian) was low vs. broader HCM coverage\n  - Concern: 90% of technographic insights blank for some teams\n- Two likely root causes flagged\n  - Account matching methodology may be introducing errors at step one\n  - Filtering to payroll-specific products and named competitors may be too narrow\n- Dayforce also mapping Gong conversation data to wins/losses\n  - 32% new logo win rate overall (1.5 years of data)\n  - 3+ engaged contacts correlates with wins; fewer than 2 is a negative signal\n  - Gong adoption itself is patchy, limiting coverage\n\n### Three Lost Accounts: Postmortem Deep Dive\n\n- Dayforce wants a signal-based postmortem on three accounts they lost at RFP: Chipotle, LSG Group, AMD\n  - All multi-million dollar deals; winning even one would be material\n  - Goal: determine if HG data could have surfaced buying signals before they went to market\n- Agreed approach: run HG MCP via Claude against all three accounts\n  - Prompt without naming competitors first, to see what Claude surfaces organically\n  - Then drill in with ADP, UKG, and Workday as the three target competitors\n  - Output: a quick summary per account showing what HG can detect, then map back to what's in Dayforce's current contract vs. what isn't\n- Also flagged TrustRadius buyer intent data as a potential supplementary signal\n  - Example: Chipotle employees researching pricing/features six months prior\n\n### Data Refresh and Time Series Access\n\n- Varun provided a 10K-account data dump ~2 months ago (Spend, Install, FAI); Dayforce used it partially\n  - New refresh needed, scoped to payroll-only installs rather than all categories\n  - Payas to send a revised account list; Varun will repopulate the install file filtered to payroll vendors\n- Time series data (intensity trends over time) is platform-only, not exportable\n  - Varun demoed it live using Amazon with ADP, UKG, and Workday, showing five-year intensity trends\n  - Limitation: crests and troughs make it hard to pinpoint incumbent changes; offline data with exact timestamps gives a cleaner picture\n  - Agreed to produce a sample time series file for the three Chipotle, LSG Group, and AMD accounts with 1-1.5 years of data, scoped to 2-3 payroll products, so Dayforce can validate quality and provide feedback\n- Kory also flagged account propensity modeling for 2027 planning\n  - Current tech data is a \"dirty marriage\" of human-entered CRM fields and HG data\n  - Goal: determine which signals are strong enough to include in the model, even if HG coverage is incomplete\n\n### Next Steps\n\n- Send revised account list to Varun (Payas)\n  - Varun/KP will repopulate the install file filtered to payroll vendors only\n- Produce sample time series file for Chipotle, LSG Group, and AMD (Varun, Augie, KP)\n  - Cover ~1.5 years, scoped to ADP, UKG, and Workday\n  - Dayforce to validate data quality and provide feedback\n- Run HG MCP via Claude on the three lost accounts (KP)\n  - Query without competitor names first, then drill in with ADP, UKG, and Workday\n  - Include any non-install signals (e.g., buyer intent) that surface",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "0013o00002PhIhYAAV",
    "accountName": "Exclusive Networks",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 125000,
    "lastOutbound": "2026-07-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-22",
    "latestPulseDate": "2026-07-06",
    "opportunities": [
      {
        "opp_id": "006RN000004CjS7YAK",
        "csm": "Varun Tiwari",
        "name": "Renewal - Exclusive Networks 2024 NEW 2024 - Renewal/Upsell",
        "arr": 125000,
        "contract_end": "2026-12-22",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "6th June'26 : VT\n\n\nMet with the customer to align on the proposed API integration, commercial approach, and next steps for the XBI initiative.\n\n-Shared HG API documentation with the customer to support technical discovery and connector design. Engineering team will review the integration approach, connector logic, refresh cadence, and data configuration. We offered a technical deep-dive session with our Product/Engineering team if needed.\n-Customer to share their contracted vendor list, upcoming portfolio additions, and priority technology categories. HG will map these to our technology taxonomy and create an initial shortlist for modelling.\n-Once the scope is finalized, we'll build an initial credit consumption model across Enterprise, Mid-Market, and SMB segments, with regional assumptions, to help estimate the budget required for the next fiscal year.\n-Customer requested a sandbox environment. Following up internally with our technical team to determine feasibility and available options.\n-Discussed the commercial framework, including a central credit commitment with regional/country-level top-ups and the flexibility to scale as XBI adoption grows. Customer will confirm the internal status of the existing $125K budget allocation before commercial discussions progress.\n\nNext Steps:\n\nCustomer:\n\n-Share contracted vendor list and upcoming additions.\n-Review API documentation with the engineering team.\n-Confirm priority categories, regions, and segments for initial modelling.\n-Clarify the internal status of the existing $125K budget allocation.\n\nHG Insights:\n\n-Review the vendor list and map it to HG technology categories.\n-Build an initial credit consumption model by segment.\n-Provide sandbox options after internal review.\nSchedule a technical working session if required.",
        "pulseDate": "2026-07-06"
      }
    ]
  },
  {
    "accountId": "001d000001uGzrOAAS",
    "accountName": "Snowflake Inc.",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 120750,
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2028-04-15",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000IyC7DYAV",
        "csm": "Divyam Dewan",
        "name": "Cloud Dynamics - Snowflake Renewal 2026",
        "arr": 120750,
        "contract_end": "2028-04-15",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\n$120.75K ARR (24-mo), renewal Apr '28. Renewal closed April 15, 2026. Champion Matt departed at renewal; Bek Madden stepped in as primary POC. May 28 expansion meeting surfaced two ex-Microsoft stakeholders — Nick (Liftoff/migration program) and Olga Karpman (product-field interlock) — with active interest in migration targeting (SQL Server, Redshift, Oracle, Databricks → Snowflake) and SAP BDC. Data pipeline break May 7–13 resolved (CPF-2013). CPF-1116 (Copilot integration) open. EBR invite sent ~June 12 — no RSVP confirmed. Intricately admin contract dates + consumption data unresolved since May 13.\n\n\nTimeline (May – July 2026):\nMay: Data pipeline break May 7–13 (SNOW_COMPANIES view) — resolved CPF-2013 | Expansion meeting May 28 — Nick + Olga (ex-Microsoft) engaged on migration targeting + SAP BDC | Bek registered June HG Insider (OOO Jun 2)Jun: Bek OOO Jun 2 — said she'd review HG Insider recording | EBR invite sent ~Jun 12 (James Tudway request) — no RSVP | Outbound marketing sequences activeJul: Marketing emails active Jul 6–9 | One email bounced Jul 8 (contact unclear) | No inbound from Snowflake team\n\n\nNext Steps (HG Side):\nZiad — schedule solutions team follow-up with Nick + Olga: SAP BDC data availability + migration targeting demo (May 28 action item, still open)EBR July — confirm whether Snowflake team accepted invite; no RSVP as of todayIntricately admin — confirm contract dates corrected + consumption data visible (open since May 13)\n\n\nNext Steps (CX Side):\nNick + Olga — connect internally with Bek's org; share migration use case with Anuth (May 28 action item)Bek — review June 2 HG Insider recording + confirm EBR attendanceDS team (MJ Lee) — confirm current data usage plan and any Q3 priorities\n\n\nOpen Jira / Products / Solutions:\n CPF-2013 Done (data pipeline break) | CPF-1116 Open — Copilot integration with Snowflake (assigned Margo Rey) | Intricately admin: contract dates + consumption data unresolved since May 13\nHG Insider | Bek Madden registered June 2026 — OOO during session; said she'd review recording. No live attendance confirmed.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "0010V00002PAU4xQAH",
    "accountName": "NTT Data Corporation",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Strategic",
    "arr": 120450,
    "lastOutbound": "2026-05-06",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2028-09-14",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000MoBRqYAN",
        "csm": "Nick Johnson",
        "name": "NTT - NA Value Creation Team Platform Access",
        "arr": 120450,
        "contract_end": "2028-09-14",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "NTT Data's EMEA/Global contract ($150K ARR) was lost in March 2026 when NTT selected competitor \"Rocks\" for their AI copilot use case, representing a significant revenue and strategic relationship setback. The remaining North America contract ($120,450 through September 2028) shows critically low platform consumption at 7,012 of 50,000 available records, and the most recent meeting sentiment is recorded as \"At Risk.\" Positive signals include an active DACH expansion discussion with Boris (June 8) and a France opportunity with Gaspard (June 2), with a 20-seat add-on order form sent June 9. There are 0 open Jira support tickets, and an executive restructure at NTT on June 12 adds additional stakeholder uncertainty that requires monitoring ahead of the next renewal.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "0013o00002TRcw6AAD",
    "accountName": "ALIBABA.COM CHINA LIMITED",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Angus Hyams",
    "segment": "Strategic",
    "arr": 119700,
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-04-14",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000Ft1NpYAJ",
        "csm": "Andy Lim",
        "name": "alibaba cloud - Maggie",
        "arr": 119700,
        "contract_end": "2027-04-14",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Concerning due to lack of engagement despite attempted outreach. The May 20 Reconnect call was the only live conversation in the last 60 days, and the June HG Insider email bounced with a delivery failure. Cloud Dynamics adoption remains at 691 of 100,000 credits consumed (0.7%) with 1 of 2 APIs configured. Following up directly with Han and Flora this week to request a working session on how they are actually using the data. Holding Concerning until we get a live meeting on the calendar.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001ZwWTiAAN",
    "accountName": "Intel Corporation",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Adrian Escobar",
    "segment": "Strategic",
    "arr": 115021,
    "lastOutbound": "2026-06-11",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-11",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000IFmoLYAT",
        "csm": "Atisha Waghela",
        "name": "Renewal - Intel - Enterprise Territory Building 2026: Anderson Duncan",
        "arr": 115021,
        "contract_end": "2026-12-11",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Weekly sync (7/6) recording was empty, but 776,075 credits sit unused against a December renewal. Utilization is the top renewal risk. Next: build a credit-burn plan tied to 2–3 concrete use cases and walk Fernanda through it at the next sync; confirm any action items from the 7/6 call directly with her.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "0010V00002KigTJQAZ",
    "accountName": "RSM US",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 114999.99,
    "lastOutbound": "2026-07-09",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-09-07",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000NXwXpYAL",
        "csm": "Atisha Waghela",
        "name": "RSM - MS Advisory Services",
        "arr": 20000,
        "contract_end": "2026-09-07",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Weekly sync (7/9) confirms adoption is stalled — Aaron still isn't in the MCP, target accounts for briefs aren't shared, and the dashboard Ellis built isn't adopted with no backfill hired. Time-to-value slipping. Next: Ben to call Aaron this week to get the account list; we build the J&J brief and use RSM's current scoring model to start briefs if the dashboard lags.",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000HNNa2YAH",
        "csm": "Atisha Waghela",
        "name": "RSM US- Microsoft",
        "arr": 74999.99,
        "contract_end": "2026-09-21",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Weekly sync (7/9) confirms adoption is stalled — Aaron still isn't in the MCP, target accounts for briefs aren't shared, and the dashboard Ellis built isn't adopted with no backfill hired. Time-to-value slipping. Next: Ben to call Aaron this week to get the account list; we build the J&J brief and use RSM's current scoring model to start briefs if the dashboard lags.",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000SlBmJYAV",
        "csm": "Atisha Waghela",
        "name": "RSM - MCP Data: Anderson Duncan",
        "arr": 20000,
        "contract_end": "2026-12-30",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Weekly sync (7/9) confirms adoption is stalled — Aaron still isn't in the MCP, target accounts for briefs aren't shared, and the dashboard Ellis built isn't adopted with no backfill hired. Time-to-value slipping. Next: Ben to call Aaron this week to get the account list; we build the J&J brief and use RSM's current scoring model to start briefs if the dashboard lags.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "0013o00002eiOukAAE",
    "accountName": "ZoomInfo",
    "csm": "Pam Huck",
    "csmKey": "pam",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 114000,
    "lastOutbound": "2026-06-11",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7acYAB",
        "name": "TR - ZoomInfo - CVP x4 - 07.01.2026 (Written Renewal)",
        "arr": 79000.0,
        "renewalDate": "2028-06-30",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Pam Huck"
      }
    ]
  },
  {
    "accountId": "0013o00002UnFqIAAV",
    "accountName": "Concur",
    "csm": "Riley Rogers",
    "csmKey": "riley",
    "am": "Mardigan Moffat",
    "segment": "Enterprise",
    "arr": 105000,
    "lastOutbound": "2026-06-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-06-25",
    "opportunities": [
      {
        "opp_id": "006RN00000VmSpoYAF",
        "csm": "Riley Rogers",
        "name": "TR - SAP Concur - IDL x 1500 + Market Report",
        "arr": 105000,
        "contract_end": "2026-12-31",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "IDL leads pilot deferred to H2 2026 due to customer-side budget constraints (confirmed by Ryan Oliver, 2/27). DIY threat via Demandbase flagged as active competitive risk. Riley not yet formally introduced to SAP stakeholders responsible for this engagement as of the 3/3 pulse. No new positive signals since last check. Next step: secure intro to SAP stakeholders and confirm H2 pilot timeline.",
        "pulseDate": "2026-04-07"
      },
      {
        "opp_id": "006RN00000Oq7efYAB",
        "name": "TR - Concur Tech, Inc. (SAP Concur) - Ultimate+, Mktg Report Bundle,  01.04.2026",
        "arr": 0.0,
        "renewalDate": "2026-12-31",
        "pulse": "Healthy",
        "pulseDate": "2026-06-25",
        "pulseNote": "## SAP Concur Pulse Check\n\n### Overall\n\n-   Relationship appears healthy and engaged.\n    \n-   Stephanie was receptive, conversational, and interested in upcoming reporting enhancements.\n    \n-   No escalations or urgent risks surfaced in this call.\n    \n\n### What’s going well\n\n-   **AI visibility / GEO dashboard interest:** Stephanie engaged on the upcoming dashboard and connected it to internal SEO/AI reporting work.\n    \n-   **Pricing transparency progress:** She shared that SAP Concur finally published pricing publicly and updated view-site listings with specific dollar amounts.\n    \n-   **Campaign traction:** She said the current campaign is too early to judge, but they saw a “chunk of pipeline” from Q4 campaigns, which was encouraging.\n    \n-   **Operational expansion:** A new team member, Ella, is starting and will help with reporting, which creates an opportunity to deepen adoption of TrustRadius reporting workflows.\n    \n\n### Risks / watchouts\n\n-   **Access timing:** The new dashboard is not live yet, so value is still being shown through a Looker preview rather than in-platform access.\n    \n-   **Call logistics:** This meeting had invite/link confusion at the start, which could create a poor customer experience if it repeats.\n    \n-   **Internal readiness:** The team noted they have not been consistently doing pre-call prep, despite multiple SAP-related customer calls in a day.\n    \n\n### Customer priorities / signals\n\n-   **AI and LLM performance:** Stephanie is paying attention to branded/category search behavior across tools like ChatGPT and Gemini, including geographic differences.\n    \n-   **Measurement and reporting:** She wants stronger reporting around review-site performance and AI-related changes, and Ella will likely own part of that moving forward.\n    \n-   **Lead quality / ROI:** She was interested in improving the HG Insights program toward more qualified, contextualized lead delivery rather than raw lead flow.\n    \n\n### Suggested account sentiment\n\n-   **Status:** Green\n    \n-   **Reason:** Positive engagement, strategic interest, no active dissatisfaction, and concrete future enablement opportunities.\n    \n\n### Recommended follow-up\n\n-   Add Ella to future calls and train her on vendor portal reporting once the dashboard is live.\n    \n-   Reconfirm the July rollout timing and use the July meeting to onboard SAP Concur to the new dashboard/report scheduling flow.\n    \n-   Tighten pre-call prep and fix meeting-link hygiene for recurring syncs.",
        "csm": "Riley Rogers"
      }
    ]
  },
  {
    "accountId": "001d0000026ELq1AAG",
    "accountName": "Five9 Inc",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 105000,
    "lastOutbound": "2026-07-01",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-05-30",
    "latestPulseDate": "2026-07-06",
    "opportunities": [
      {
        "opp_id": "0063o000019kciFAAQ",
        "csm": "Varun Tiwari",
        "name": "Renewal - FIVE9 - Global License Opp Gen 2024",
        "arr": 105000,
        "contract_end": "2027-05-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "6th June'26 : VT\n\n\nMet with Jordan to review the partner analysis deliverable and discuss Five9's evolving product data strategy.\n\nReviewed the analysis of 373 Five9 partners:\n---371 identified as active and 2 confirmed inactive.\n---50 companies flagged for merger/acquisition activity.\n---Corrected Global HQ mappings and updated HG Company IDs where applicable:\n---Jordan requested additional context on the methodology used to determine active vs. inactive businesses. Will provide the methodology in the delivery email to support stakeholder discussions.\n\n-Discussed Five9's decision to leverage Clay for product detection as part of its new segmentation strategy. While not positioning HG as a replacement, highlighted the opportunity to avoid duplicate spend, as much of the product intelligence available through Clay already exists within Five9's HG subscription with significantly broader coverage and attributes.\n-Identified Simon Kettle (Head of Strategy) as the key stakeholder for a follow-up discussion around the HG vs. Clay value proposition. Jordan will facilitate an introduction. Since Ziad is on PTO until 12 August, we'll involve HG leadership if an earlier discussion is required.\n\nNext Steps:\n\nHG Insights:\n\n-Share the partner analysis workbook with Jordan.\n-Provide the methodology used to classify companies as active/inactive in the delivery email.\n-Prepare positioning and supporting material comparing HG capabilities with Clay ahead of the discussion with Simon.\n\nCustomer:\n\n-Review the partner analysis and share any feedback.\n-Facilitate an introduction to Simon Kettle for a strategic discussion on product intelligence and cost optimisation.",
        "pulseDate": "2026-07-06"
      }
    ]
  },
  {
    "accountId": "001d0000026GUhHAAW",
    "accountName": "BILL Operations, LLC and its Affiliates",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "James Tudway",
    "segment": "Enterprise",
    "arr": 103000,
    "lastOutbound": "2026-06-30",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-02-01",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000SmRKNYA3",
        "csm": "Divyam Dewan",
        "name": "BILL-",
        "arr": 103000,
        "contract_end": "2027-02-01",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "Summary:\nMadKudu officially went live July 8 after a long implementation — a significant milestone. Eric Nguyen ran Q&A sessions with the sales team July 8–9. However, account engagement scoring still has a ~11% backfill gap (down from 42%), CPF-2337 (MQA scores not backfilling post-launch) is open, and Eric is on vacation all of next week. Peter Kirk (Smooth Operator, primary model builder) winds down his retainer end of July with no replacement confirmed. Renewal is January 2027 — the next 60–90 days of sales adoption will define the renewal conversation.\n\n\nTimeline (last 3 months):\nMay: May 14 — lead scoring review with Vivian Chu + Charles Hawkins — models too company-oriented, new tailored model decided | May 15 — Jeremiah Clark last day confirmed (~May 22); SFDC connection down; Marketo → Inflection/Segment migration flagged | May 18 — Segment touchbase | Model 17 (Customer Fit v1.3) deployed by Eric (Apr 9, confirmed live) | CPF-1965 (fit model inflation to 30K records) resolved\n\n\nJune: Jun 4 — Salesforce OAuth/PKCE break — reconnection required | Jun 8 — final model stages + API throttling flagged | Jun 13 — Eric deploys Model 17 ✅ | Jun 22 — 80% unscored leads identified as primary blocker | Jun 22 — BILL layoffs (week of Jun 22) | Jun 30 — unscored records resolved (<1%) | Account engagement still 42% gap (SFDC validation rules) | Launch delayed from Jul 1 → Jul 8\n\n\nJuly: Jul 2 — Account engagement model deployed | Jul 6 — CPF-2337 expedited as RGI-1604 (MQA scores not backfilling) | Jul 7 — weekly sync: backfill at 11%, API quota alert triggered, Claire aborts scoring queue | Jul 8 — MadKudu goes live ✅ | Eric runs Q&A sessions Jul 8–9 | Jul 13 — Eric OOO (vacation, full week)\n\n\nNext Steps (HG side):\nDivyam/Claire: Resolve CPF-2337 (MQA account scores not backfilling — \"Waiting on Requestor\") + confirm weekend rescore completed before Eric returns Jul 20 — account engagement gap must be closed before sales team digs inDivyam: Confirm Eric named a point-person for the week of Jul 13 (asked on Jul 7, no confirmation captured) | hold the weekly Jul 14 sync regardless with whoever is coveringDivyam: Begin scoping Peter Kirk replacement before his retainer ends Jul 31 — he's the primary model builder; no successor identified; Smooth Operator is winding down across all accounts\n\n\nNext Steps (CX side):\nEric Nguyen: Identify point person for Jul 13 week | share sales enablement materials (1-pager + deck + video) post-vacation | monitor sales team adoption signals from Jul 8–9 Q&A sessionsKristen Malkovich (Exec Sponsor): Engage on account engagement scoring readiness — this is the outbound use case; 11% gap needs to close before she can report on KRsJaymee Parson / Ishan: Confirm SFDC validation rules fully resolved for account engagement writes\n\n\nOpen Jira / Products / Solutions:\nCPF-2337 (MQA account scores not backfilling — Waiting on Requestor, High) | CPF-2188 (Estimate Deployment feature broken — Awaiting Triage) | CPF-2323 closed ✅ | CPF-1965 closed ✅ | MadKudu live Jul 8 ✅ | Account engagement backfill at ~11% gap — not yet fully closed | Peter Kirk retainer ends Jul 31 — no replacement | Common Room competitive eval (BDR team) — status unknown since Mar 2026 | Renewal Jan 31, 2027 — $103K → $113K target | No EBR on record | No HG Insider attendance from any BILL contact",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d00000244e0vAAA",
    "accountName": "Intuit",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Hayden Smith",
    "segment": "Strategic",
    "arr": 100000,
    "lastOutbound": "2026-07-16",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-20",
    "latestPulseDate": "2026-04-27",
    "opportunities": [
      {
        "opp_id": "006RN00000N6ndVYAR",
        "csm": "Atisha Waghela",
        "name": "Intuit || HG Insights - Mailchimp BU",
        "arr": 100000,
        "contract_end": "2026-11-30",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Engagement with Annabelle remains strong across both the Mailchimp BU (onboarding) and Phase 2 expansion ($500K, Stage 4). Annabelle is an active champion and the key decision maker on Phase 2. Current focus is on data matching quality — Batch 1 match rates have improved after removing dead domains and filtering non-US accounts; Batch 2/3 refinement is ongoing. Deal momentum is positive but contingent on matching confidence before full sign-off. CSM transition in progress (Nick Johnson replacing Atisha) — being managed carefully to maintain Annabelle's confidence. Multi-threading across Intuit stakeholders remains a watch item. Overall health: Healthy.",
        "pulseDate": "2026-04-27"
      },
      {
        "opp_id": "006RN00000Oq7dvYAB",
        "csm": "Atisha Waghela",
        "name": "TR - Intuit - CVP x2 - 03.01.2026 (Auto Renewal)",
        "arr": 76590.5,
        "contract_end": "2027-02-28",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "$76.59K auto-renewal due 3/1/2026 is now 37+ days overdue with no countersignature. GEO tracking is not yet live and SSO delays continue to block full platform activation. Downgrade signal from prior Extremely Satisfied health rating. Unsigned renewal is the immediate priority — represents direct ARR exposure. Needs escalation if not resolved by EOW.",
        "pulseDate": "2026-04-07"
      },
      {
        "opp_id": "006RN00000a2FZLYA2",
        "name": "Intuit IES",
        "arr": 25000.0,
        "renewalDate": "2027-06-14",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Atisha Waghela"
      }
    ]
  },
  {
    "accountId": "001d0000021zcr4AAA",
    "accountName": "Paycom Software Inc",
    "csm": "Riley Rogers",
    "csmKey": "riley",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 91500,
    "lastOutbound": "2026-06-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-07",
    "latestPulseDate": "2026-04-07",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukQYAR",
        "csm": "Riley Rogers",
        "name": "TR - Paycom - Ultimate+, Cat Intent Data,  SSO Connection - 08.10.2025",
        "arr": 67500,
        "contract_end": "2026-08-09",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Core Ultimate+ opp with strong multi-product engagement — Category Intent Data and SSO adoption underway. Multiple stakeholders actively involved. Expansion close (TR Premium Content Bundle, 3/31) signals high satisfaction with the broader TrustRadius relationship. Confirming Healthy. Watch for SSO rollout completion as an upsell enabler heading into the August renewal.",
        "pulseDate": "2026-04-07"
      },
      {
        "opp_id": "006RN00000XDnSxYAL",
        "csm": "Riley Rogers",
        "name": "Paycom - TR Premium Content Bundle x 3 - 2026",
        "arr": 21000,
        "contract_end": "2027-03-30",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "Let me pull all the Paycom meetings now.\n\nThought for 1s\n\nListed 4 meetingsin\n\nPaycom / TrustRadius syncs\n\nLooked deeper into 4 notes\n\n## 💼 Paycom | TrustRadius — Pulse Update\n\n---\n\n### 🏆 Review Performance & Badges\n\n-   **Top Rated won** — official announcement June 10; press kit/badges delivered mid-to-late May\n    \n-   **Rating trajectory**: 7.4 → 7.8 → **8.5** (post-SHRM engagement)\n    \n-   **Primary goal**: Achieve #1 in payroll category — currently behind Rippling; review volume is the key lever\n    \n\n### 📣 Review Generation\n\n-   Running **3rd cycle** of automated email campaign — 3% standard conversion rate across 30–40 contacts; no reviews generated yet from current cycle\n    \n-   **Events remain the highest-converting channel** — SHRM is the primary review collection opportunity\n    \n-   In-app review generation discussed — TrustRadius would provide a unique tracking link (no native iframe like G2/TrustPilot); flagged as a product feature request\n    \n\n### 🎪 SHRM Event\n\n-   Colby and Becky returning on-site for TrustRadius booth support; **Angel** (new events coordinator) replacing Mark\n    \n-   Preference for **written reviews over audio** (cleaner output)\n    \n-   Contract redlines sent to Anderson, matching renewal terms\n    \n-   Pre-SHRM call to be scheduled once contract is finalized\n    \n\n### 💡 Expansion Opportunities\n\n-   **Premium content bundle** ($10k/year): market report, competitive report, customer stories — powers Intent Driven Leads at $100/lead\n    \n-   **HG Insights listicles/sponsored content** under consideration post-acquisition; Anderson working on internal feasibility\n    \n-   **Quarterly executive recap** planned for mid-July to early August, potentially an on-site visit to Oklahoma\n\n2026 renewal came in early for June",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000Zv3g9YAB",
        "name": "TR - Event Support - SHRM - Paycom - 2026",
        "arr": 0.0,
        "renewalDate": "2027-05-29",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Riley Rogers"
      }
    ]
  },
  {
    "accountId": "0010V00002MQiwuQAD",
    "accountName": "Unum",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 88852,
    "lastOutbound": "2026-04-07",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2028-04-30",
    "latestPulseDate": "2026-06-18",
    "opportunities": [
      {
        "opp_id": "0063o000019kHwKAAU",
        "csm": "Varun Tiwari",
        "name": "3Yr Renewal - Unum 2025-2028",
        "arr": 88852,
        "contract_end": "2028-04-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "18th June'26 : VT\n\nJoey & Chris not attending any monthly cadence so need a strategy to engage with them \n\n3 year contract is a good sign so we have time to engage them",
        "pulseDate": "2026-06-18"
      }
    ]
  },
  {
    "accountId": "001d0000026GU59AAG",
    "accountName": "Toast",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 84000,
    "lastOutbound": "2026-07-13",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-07",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000OrQHNYA3",
        "csm": "Andy Lim",
        "name": "MK - Toast Renewal",
        "arr": 84000,
        "contract_end": "2027-03-07",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Changing from Concerning back to Healthy. Reconnected with Dan — Toast is mid-stage refreshing their inbound lead scoring model with MadKudu, and we have a roadmap call scheduled to demo the AI offering via RGIP. Contract stepped up from $74K to $84K last renewal, ROI narrative (~$1.6M AR from non-MQL, 1-5 wins/week sustained 2 years) intact. Moving to Healthy.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d0000026GUSjAAO",
    "accountName": "Telefónica S.A",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Strategic",
    "arr": 81000,
    "lastOutbound": "2026-04-03",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-11-13",
    "latestPulseDate": "2026-06-29",
    "opportunities": [
      {
        "opp_id": "006RN00000DE5A1YAL",
        "csm": "Nick Johnson",
        "name": "Renewal - Telefonica Win Back 2025",
        "arr": 81000,
        "contract_end": "2026-11-13",
        "deal_type": "Renewal",
        "pulse": "Poor",
        "pulseNote": "Team restructure",
        "pulseDate": "2026-06-29"
      }
    ]
  },
  {
    "accountId": "0013o00002TyTJ3AAN",
    "accountName": "Cvent",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 80000,
    "lastOutbound": "2026-04-29",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-30",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000UohN6YAJ",
        "csm": "Andy Lim",
        "name": "Cvent - IDL - 2026",
        "arr": 40000,
        "contract_end": "2027-01-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Cvent won 2026 TrustRadius Top Rated (announced June 3) — tangible ROI anchor. Active \"TrustRadius Subscription | Attention Needed\" thread June 1-30 and Cvent listings on TrustRadius review June 18-24 — engaged conversations, not stalled. IDL contract signed and delivering. Holding Healthy.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001jec8sAAA",
    "accountName": "TriNet Group Inc",
    "csm": "Riley Rogers",
    "csmKey": "riley",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 78189,
    "lastOutbound": "2026-07-14",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-19",
    "latestPulseDate": "2026-07-14",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq1KEYAZ",
        "csm": "Riley Rogers",
        "name": "TR - TriNet - CVP, Cat Intent Data,  Mkt Report - 01.20.2025",
        "arr": 78189,
        "contract_end": "2027-01-19",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   TriNet is in a healthy spot on review-based awards: **16 Buyers Choice reviews collected** and **only 3 more needed for Top Rated**.\n    \n-   A near-term action is the **Tech Cares application**, which is open now, **due August 12**, with announcements on **September 1**. Riley said he would send the nomination form to Ashley and Kenyatta.\n    \n-   The main customer question was about **SSO**. TriNet said their tech team is exploring SSO across vendors, including TrustRadius.\n    \n-   Riley said **SSO costs $2,000 per year** and said there is **no flexibility** on that pricing.\n    \n-   Kenyatta said SSO is likely a **low security priority** because TriNet does not really handle data with TrustRadius, and said a **new team lead** will now manage budget decisions for her and Ashley.\n    \n-   Next step: Riley will send the **Tech Cares form** and mention the **SSO quote**, with an offer to bring Anderson into a deeper follow-up call if needed.\n    \n\n**Overall pulse:** positive and steady. Awards progress is on track, while SSO is exploratory rather than urgent.",
        "pulseDate": "2026-07-14"
      }
    ]
  },
  {
    "accountId": "001d000001EuKaDAAV",
    "accountName": "Procore Technologies Inc",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 77000,
    "lastOutbound": "2026-05-14",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-04",
    "latestPulseDate": "2026-06-30",
    "opportunities": [
      {
        "opp_id": "006RN00000Opuk5YAB",
        "csm": "Divyam Dewan",
        "name": "TR - Procore - CVP  SSO - 09.20.2025",
        "arr": 32000,
        "contract_end": "2026-09-19",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\nCVP renewal ($30K) signed June 25 — early and clean. Michael Beahm is an engaged, proactive contact; June 17 sync went well with strong reception on LLM/GEO story. Main watch items: two IDL opps ($15K ended June 5, $30K ending July 10) need disposition — original IDL pilot underperformed and no active renewal conversation is open. Platform export limit at 98.1% — upsell hook available. Review demographic gap (reviews skewing small-company vs. Procore's enterprise customer base) needs addressing before next TR renewal cycle.\n\n\nTimeline (last 3 months):\nApril: Monthly TR sync | Anderson shares competitive displacement data with Michael — GTM angle explored\nMay: Monthly TR sync | Procore wins 7 TrustRadius 2026 Top Rated Awards (BIM, Construction Mgmt, etc.) | Congrats email sent to Jessica Schieck (Jun 3) | CVP renewal pre-notice sent after Michael declines June 11 sync\nJune: CVP renewal signed June 25 — early ✅ | June 17 monthly sync — LLM/GEO presentation landed well (\"smashing\") | Michael registered for July HG Insider | Action items open: Michael to intro Anderson to Jessica (procurement) + customer contact list for review campaign + TR product page content | IDL opp ($30K) expiring July 10 — no renewal conversation started\n\n\nNext Steps (HG side):\nDivyam: Chase Michael on 3 open items from June 17 — Jessica procurement intro | enterprise contact list for review campaign | TR product page content (885 queries/month, no pricing)Divyam/Anderson: Disposition the two IDL opps ($15K expired Jun 5, $30K expiring Jul 10) — assess renewal appetite given prior underperformance | explore \"Better Together\" pilot angleDivyam: Flag platform export ceiling (98.1% of 20K limit) to Anderson — upsell conversation opportunity before July 10 IDL expiry\n\n\nNext Steps (CX side):\nMichael Beahm: Intro Anderson to Jessica (procurement) | share enterprise/mid-market customer contact list for review outreachMichael Beahm: Check with pricing team on TR product page content (885 queries/month, zero content = missed AI visibility)Michael Beahm: Attend July HG Insider — follow-up conversation booked with Divyam\n\n\nOpen Jira / Products / Solutions:\n No open CPF tickets",
        "pulseDate": "2026-06-30"
      }
    ]
  },
  {
    "accountId": "001RN000009BB4cYAG",
    "accountName": "Omnissa, LLC",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 74995,
    "lastOutbound": "2026-06-25",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-10-20",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000CmjolYAB",
        "csm": "Divyam Dewan",
        "name": "Renewal - Omnissa (former Vmware EUC) - Opp Gen - Global 2025",
        "arr": 74995,
        "contract_end": "2027-10-20",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\n$75K ARR (24-mo), renewal Oct '27. Deeply engaged — Srini, Raymond, Dana, and KKR PE owner Julian all active across multiple workstreams. RGIF data feed solutioning underway (L2→L3 migration, 48,695 accounts, ~86% V2 match); ICP walkthrough delivered Jun 23 (Dana + Julian); churn mitigation and ZoomInfo/GTM Studio integration in scope. CPF-2301 export bug fixed Jul 3; Srini confirmation of retry pending (emailed Jul 6). Veera's IT spend scope input overdue (expected Jun 30) — blocking data feed proposal. Cloud centricity refresh also overdue for Raymond. HG Exec Summit invites sent (Jul 20-22, Palo Alto) — RSVPs unknown. 45.6% export utilization.\n\n\nTimeline (May – July 2026):\nMay: Quarterly sync May 12 — ZoomInfo/Clay/MadKudu/churn mitigation/ICP discussed | TR overview session May 26Jun: ICP walkthrough Jun 23 (Dana + Julian/KKR) | Data feed solutioning call Jun 25 — RGIF migration + export error raised (CPF-2301) | User seat swap completed (HDH-17481 Jun 29) | Exec Summit invites sent Jun 24Jul: CPF-2301 fixed Jul 3 | Divyam emailed Srini Jul 6 (export retry + fix confirmed) | Veera IT spend input overdue since Jun 30 | No inbound from Omnissa since Jun 29\n\n\nNext Steps (HG Side):\nConfirm Srini retried export successfully post CPF-2301 fix — no reply to Jul 6 email yetRGIF data feed proposal (delivery architecture + pricing) — blocked on Veera's IT spend scope (overdue Jun 30)Cloud/hypervisor centricity refresh for Raymond — overdue since ~Jun 12; deliver before next sync\n\n\nNext Steps (CX Side):\nVeera — send IT spend data scope for RGIF feed (overdue Jun 30)Srini — confirm export retry worked (Jul 6 email)Confirm HG Exec Summit RSVPs (Jul 20-22, Palo Alto) — Veera, Dana, Srini, Julian all invited\n\n\nOpen Jira / Products / Solutions:\nCPF-2301 Done (export bug) | HDH-17481 Done (seat swap) | RGIF data feed expansion ~$50K (flagged by Gavin, pre-SS3) | ZoomInfo/GTM Studio integration — follow-up collateral outstanding | TrustRadius overview done — no subscription yet | MadKudu intro done — Dana wants ZoomInfo/Clay integrations first\nHG Insider - No attendance | invite sent May 28 for Jun 2 session; Srini and Raymond non-responsive",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001tQ7qxAAC",
    "accountName": "Akamai Technologies , Inc.",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 73000,
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-03-28",
    "latestPulseDate": "2026-04-28",
    "opportunities": [
      {
        "opp_id": "006RN00000I7id8YAB",
        "name": "Intricately - New - Akamai (Edge Tech) - Enterprise GTM - 2026",
        "arr": 44750.0,
        "renewalDate": "2027-04-19",
        "pulse": "Healthy",
        "pulseDate": "2026-04-28",
        "pulseNote": "28th Apr' 26 : VT\n\nRenewal closed (PO received yesterday) after multiple follow-ups\n\nEngagement Health:\nChampion (Veer) remains supportive of the platform, but renewal process was difficult due to budget constraints and internal org changes (new BDR leadership).\n\nKey Risks:\nBudget pressure leading to down-sell\nMisalignment between Marketing (heavy users) vs. BDR leadership (budget control)\nChampion (Veer) hard to navigate during renewal decisions\nPreference for CD dataset over HG dataset → limits expansion potential\n\nCustomer Dynamics:\n\nMarketing drives majority of usage and value\nBDR leadership influencing budget decisions despite lower usage alignment\nVeer continues as advocate but with clear product preference bias\n\nOpportunities / Next Steps:\n\nRe-align stakeholders (Marketing vs. BDR) on value realization\nReinforce HG vs. CD differentiation and use-case fit\nExpand engagement beyond Veer to reduce dependency\nRebuild expansion narrative post-renewal with clearer ROI proof\n\nOutlook:\nShort-term retention secured but at reduced scope. Future growth depends on shifting stakeholder alignment and strengthening HG value perception beyond CD dataset.",
        "csm": "Varun Tiwari"
      }
    ]
  },
  {
    "accountId": "0013o00002U1skmAAB",
    "accountName": "OpenAI OpCo, LLC",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 72600,
    "lastOutbound": "2026-05-07",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-29",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Exig5YAB",
        "csm": "Divyam Dewan",
        "name": "Renewal - OpenAI - Sales Ops 2025",
        "arr": 72600,
        "contract_end": "2026-12-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\nSales Ops renewal ($72,600, renews Dec 29, 2026) is stable — Keith + Allie are the buyers, Larry Liu runs Clay-based enrichment on top of the HG data feed, healthy adoption. The bigger story is the $254K GTM Innovation expansion (Nickhil) that closed May 28 after a near-miss with ZoomInfo — data delivered to Databricks Delta Share May 29. Onboarding still in progress with no confirmed go-live date. New IT contact Sadaaf introduced by Keith July 8, purpose unknown, no response yet.\n\n\nTimeline (last 3 months):\nMay: Apr 29 — Nickhil explores cloud technographics (AWS Bedrock, Azure, Anthropic, Gemini) | May 12 — Nickhil threatens ZoomInfo at 4-5x price gap; requests full validation pull | May 13–15 — DC + KP build 26K OpenAI detection file + Lovable demo | May 21 — Nickhil confirms $254K deal | May 28 — signed ✅ | May 29 — 424K install signals delivered to Databricks Delta Share | OpenAI = Clay's highest-spending client (flagged internally)\nJune: Weekly syncs Jun 18 (no transcripts) | James Tudway twice asks if OpenAI invited to July EBR — No confirmation from OpenAI | CPF-1680 (Anthropic/Claude tracking) closed | CPF-1970 (OpenAI misclassified as Education) closed Jul 9\nJuly: Jul 2/9 — weekly syncs (no transcripts) | Jul 8 — Keith introduces Sadaaf (IT) to Divyam — purpose unknown, no response yet | Jul 10 — Scott Yow (Senior VP) surfaced in HG daily opportunities | Vitally \"At Risk\" sentiment field stale (reflects pre-signing May tension — not current state)\n\n\nNext Steps (HG side):\nDivyam: Follow up with Sadaaf — understand what IT needs (onboarding? procurement? new use case?) before it goes coldDivyam: Set a go-live milestone for GTM Innovation onboarding (Nickhil/Databricks) — data delivered May 29 but no go-live date, no joint impact plan; 6 weeks of weekly calls with no transcripts is a blind spot\n\n\nNext Steps (CX side):\nSadaaf (IT): Respond to Divyam's July 8 reply — clarify what information she needs on HG InsightsNickhil: Confirm GTM Innovation go-live and initial data activation — 6+ weeks since data delivery, onboarding progress unclearKeith/Larry: Attend July EBR if invited | continue Sales Ops adoption; flag any data gaps via Clay orchestration layer\n\n\nOpen Jira / Products / Solutions:\nNA",
        "pulseDate": "2026-07-10"
      },
      {
        "opp_id": "006RN00000Xm5wrYAB",
        "name": "OpenAI - GTM Innovation",
        "arr": 254013.0,
        "renewalDate": "2027-05-14",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Divyam Dewan"
      }
    ]
  },
  {
    "accountId": "001d0000024EtvGAAS",
    "accountName": "Zoom Video Communications",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 72000,
    "lastOutbound": "2026-06-16",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-07",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000BwjZVYAZ",
        "csm": "Andy Lim",
        "name": "Renewal - Zoom EMEA Midmarket POC 2025",
        "arr": 15000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "No specific EMEA POC-side friction signals in the last 60 days. Overall Zoom relationship steady with active TR/CSM cadence and Camille registered for July HG Insider. Holding Healthy.",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN00000Oq7eKYAR",
        "csm": "Riley Rogers",
        "name": "TR - Zoom - CVP x2 - 01.24.2026 (Written Renewal)",
        "arr": 55000,
        "contract_end": "2027-01-23",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Zoom <> TrustRadius CSM Sync held May 19 (transcript recorded). Custom Questions workflow completed June 11 with full researcher-to-customer approval cycle. Camille Shortridge and Travis Sterne both registered for June and July HG Insider sessions. Recurring engagement holding steady. Holding Healthy.",
        "pulseDate": "2026-07-21"
      },
      {
        "opp_id": "006RN00000Oq7aYYAR",
        "name": "TR - Zoom - SSO Connection - 07.08.2026 (Auto Renewal)",
        "arr": 0.0,
        "renewalDate": "2027-07-07",
        "pulse": "Healthy",
        "pulseDate": "2026-07-10",
        "pulseNote": "REnewal for SSO closed.  Zoom overall a healthy account",
        "csm": "Riley Rogers"
      }
    ]
  },
  {
    "accountId": "001d000001gQtM0AAK",
    "accountName": "RingCentral",
    "csm": "Riley Rogers",
    "csmKey": "riley",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 68000,
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-27",
    "latestPulseDate": "2026-06-25",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukkYAB",
        "csm": "Riley Rogers",
        "name": "TR - RingCentral - CVP x3 - 07.28.2025",
        "arr": 68000,
        "contract_end": "2026-07-27",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   enewal is still in procurement and moving toward close; the team discussed it as on track, with a **three-year contract** confirmed.\n    \n-   RingCentral **won Top Rated** for **Ring Contact Center**.\n    \n-   Buyer’s Choice progress looks solid:\n    \n    -   **Ring Contact Center:** 10 reviews YTD, **3 more needed**\n        \n    -   **Ring CX:** **12 reviews** and qualified\n        \n    -   **Ring Air:** still needs **10 reviews**\n        \n-   A negative Ring Contact Center review came in, but it **still counts toward volume qualification**.\n    \n-   One support issue is open: **Daniella says she never received her $30 Mastercard gift card**, but records show it was sent on **June 20** and claimed **47 minutes later**. If she pushes back again, the plan is to resend a second $30 card and close it out.\n    \n\n**Next steps**\n\n-  Madi to send Riley the gift card claim screenshot for backup if Daniella escalates.\n    \n-   Riley to update the meeting link, which is still pointing to the old Carol invite.\n    \n-   Riley to flag renewal progress to Anderson.",
        "pulseDate": "2026-06-25"
      }
    ]
  },
  {
    "accountId": "001d00000244cltAAA",
    "accountName": "Paylocity",
    "csm": "Riley Rogers",
    "csmKey": "riley",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 66275,
    "lastOutbound": "2026-07-15",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "2026-06-25",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukGYAR",
        "csm": "Riley Rogers",
        "name": "TR - Paylocity - CVP - 08.12.2025",
        "arr": 37500,
        "contract_end": "2026-08-11",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Verbally confirmed renewal\n\n-   **Top Rated launch is on track.** Matt said they’re ready for the June 10 announcement, with the blog in progress, badges downloaded, and business cards already in the Chicago office.\n    \n-   **Renewal looks low-risk.** The expectation is a similar structure to last year: roughly $37.5K base plus a $10K incentives add-on, with current base pricing looking closer to ~$39K and no major increase expected.\n    \n-   **Main open item is renewal coordination.** Anderson still needs to join the renewal conversation, and the sync moved from July 1 to **June 24**.\n    \n-   **Review generation should pick up soon.** Matt said they’ve fallen behind on review campaigns and plans to restart one so reviews should trickle in through June and July.\n    \n\n### Watchouts\n\n-   Incentive funds are currently sitting unused, so renewal packaging may matter more than net-new spend.\n    \n-   Final renewal number still depends on whether additional incentive dollars are added.",
        "pulseDate": "2026-06-25"
      }
    ]
  },
  {
    "accountId": "001d000001yQfrEAAS",
    "accountName": "MongoDB Inc",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 65000,
    "lastOutbound": "2026-06-11",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-10-22",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000CfViUYAV",
        "csm": "Varun Tiwari",
        "name": "Renewal - Mon2025",
        "arr": 65000,
        "contract_end": "2026-10-22",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26: VT\n\n\n\nCredit Overage and Data Feed Status:\n\nJuly data feed restored after credit overrun:\n\n-MongoDB hit 303K credits in May, now at ~311.5K (limit: 300K)\n-Incremental installs growing ~9K-10K/month against locked account list\n-Growth driven by expanding detection methods, so overage will continue\n\nTwo options discussed:\nOption 1: Continue full delivery through October, pursue early renewal\nOption 2: Freeze incremental installs to stay within credits (risks stale data)\n\n-Will leaned toward Option 2, but Varun committed to seeking internal approval for Option 1\n\n-Goal: deliver full install data for August, September, October without compromise\nRationale: 3 months of frozen data could have outsized long-term impact\n\n-Varun shared June/July incremental install files during the call\n~20.9K installs in June; credits don’t map 1:1 (approx. 7.6K credits for that batch)\n-Products in the incremental are all existing tracked products (no new additions)\n-Will noted Postgres likely inflates volume but is still a signal MongoDB wants\n\nRenewal and Expansion Intent:\n-Will confirmed MongoDB intends to renew\n-Varun needs this assurance to petition leadership to continue full data delivery\nExpansion scope unknown on both sides; to be discussed when Zia returns (mid-August)\n\n-Annual contract expires in October; renewal discussions to begin then\n\n-Will noted intent is to do more, not less, with HG data\n\nCurrently using technographics for account prioritization and footprint sizing\nNew Products and Next Steps\n\n-Contact-level data: HG has begun delivering this to customers\nWill flagged it as a leadership priority; will loop in Ale\n\n-Varun to share a demo/overview; separate call needed to address feasibility of marrying contact + install data\n\n-Time series data: sample sent by Zia; Will acknowledged it slipped in his inbox, will review\n-HG Copilot: Salesforce-integrated tool for account-level intelligence (recent hires, contacts, activity)\n-Will interested in a walkthrough to assess gaps vs. in-house tooling\n-Varun to share a Loom video/live call; product demo session proposed for July or August\n\nNext Steps:\n-Share June/July incremental install files, order form, and Loom video (Varun)\n\n-Covers credit calculation table, install composition, and Copilot overview for Will to review.\n\n-Petition leadership to continue full data delivery through October (Varun)\n\n-Will confirmed renewal intent; use this to justify no freeze on incremental installs.\n\n-Schedule contact data demo with Will and Ali\n-Separate call needed to walk through methodology, waterfall, and feasibility of contact + install data marriage.\n\n-Schedule product/Copilot walkthrough for July or August\n\n-Will to review time series sample and Loom first; demo to cover platform changes and gather product feedback.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "0013o00002TzCfNAAV",
    "accountName": "Lumen Technologies",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Hayden Smith",
    "segment": "Strategic",
    "arr": 60000,
    "lastOutbound": "2026-07-06",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-27",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000LIbrUYAT",
        "name": "Renewal - Lumen Technologies 2026",
        "arr": 175000.0,
        "renewalDate": "2027-06-26",
        "pulse": "Healthy",
        "pulseDate": "2026-07-10",
        "pulseNote": "Summary:\nDeal fully closed — PO received July 1 (from Stacy Larson), SFDC updated to Invoiced Won, $175K ARR confirmed. RGIP access provisioned July 7 — Nathan and Kunal live, 17 saved searches + 3 collections + scoring profiles all migrated. Nathan attended July 7 HG Insider and flagged interest in MCP Connection and AI Spend data — two warm expansion signals. Key watch items: AE transition (Hayden departing, Augie Buettner + Leo Zunz taking over) and Lumen internal reorg (Akira acquisition, voice/comms lines defocused — core connectivity use case intact).\n\n\nTimeline (last 3 months):\nMay: Weekly syncs ongoing | BCG recommends HG to 2 SVPs + VP internally | Credits/consumption model scoped | CPF-2226 resolved (Jun 25)\nJune: 1yr/$175K terms confirmed (Jun 12) | 5 free read-only seats negotiated | Order form signed by both parties Jun 27 | PO delayed — Rica Dawkins handoff to Stacy Larson (Lumen AP) | Hayden invokes auto-renewal Jun 30\nJuly: PO received Jul 1 (Stacy Larson) ✅ | SFDC updated to Invoiced Won ✅ | RGIP tenant live Jul 6 | Nathan + Kunal provisioned Jul 7 — 17 searches + 3 collections migrated | Nathan attends HG Insider Jul 7 — MCP + AI Spend interest signals | Lumen reorg disclosed (Akira acquisition; voice/comms defocused; core connectivity intact) | Hayden Smith departing — Augie Buettner + Leo Zunz incoming | Onboarding session scheduled Jul 10 (Rodolfo + Thairon)\n\n\nNext Steps (HG side):\nDivyam: Finalize remaining 7 user provisioning (Eric Mulvin, Julie, Christan, Patrick, Eric Bailey, Yatin + 2 TBDs) | schedule RGIP Market Analyzer onboarding series next week (2–3 sessions)Divyam: Follow up on HG Insider interest signals — MCP Connection (Francis) + AI Spend (Tracy) — tasks due July 16Divyam: Brief Augie Buettner + Leo Zunz on account context before Nathan is formally notified of AE change | update SFDC account owner\n\n\nNext Steps (CX side):\nNathan: Attend RGIP onboarding sessions next week | confirm use of credit dashboard for team consumption trackingNathan: Follow up with Augie/Leo once AE transition is communicated | share Akira acquisition implications for HG use cases when clearerJulie Chalk: Engage on RGIP — declined last weekly sync; full-access seat provisioned but she hasn't connected yet\n\n\nOpen Jira / Products / Solutions:\nNA",
        "csm": "Divyam Dewan"
      }
    ]
  },
  {
    "accountId": "001d0000026GUgaAAG",
    "accountName": "Capital One Services LLC",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 57500.01,
    "lastOutbound": "2026-05-14",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-02-23",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN00000GyAbFYAV",
        "csm": "Varun Tiwari",
        "name": "Renewal - Capital One - Snowflake/Databricks GTM - Platform 2026",
        "arr": 57500.01,
        "contract_end": "2027-02-23",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Varun Tiwari led a 30-min Zoom intro and RGIP walkthrough with Capital One (6:30 PM PT). New stakeholder intro + RGIP product demonstration. Strong onboarding and expansion engagement.",
        "pulseDate": "2026-05-15"
      }
    ]
  },
  {
    "accountId": "0010V00002KOW8uQAH",
    "accountName": "Safaricom Limited",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 50000,
    "lastOutbound": "2026-05-28",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-08-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000IJTVQYA5",
        "csm": "Divyam Dewan",
        "name": "Safaricom - Kgolo",
        "arr": 50000,
        "contract_end": "2026-08-31",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Renewal is August 31 — 52 days away — with a critical new risk: Kgolo is leaving Safaricom Kenya for Vodacom South Africa in August, the same month as renewal. No successor identified or briefed. Renewal path requires Kgolo to complete an internal benefit realization doc and convince Franklin Okata (Head of Sales, budget owner) — Kgolo rated his own renewal odds \"50/50\" on June 29. SLA self-assessment sent (95/105). ROI doc never sent to Kgolo despite being committed May 28. Kgolo no-showed again July 9 (OOO).\n\n\nTimeline (last 3 months):\nMay: Kgolo no-shows May 14 + May 28 biweeklies | Divyam + Angus agree to draft ROI doc | HG Insider invite sent to 6 contacts including Franklin Okata (forwarded by Emily)\nJune: Jun 2 — SLA self-assessment (95/105) sent to Emily ✅ | Jun 3 — Angus introduces renewal in writing to Emily | Jun 11 — Kgolo no-shows again | Jun 17 — ZKaranja (procurement): \"I have sought benefits for this service to no success\" — risk signal | Jun 23 — Emily confirms team intact, renewal subject to benefit realization | Jun 29 — Kgolo attends for first time in months | Reveals he's leaving Safaricom → Vodacom SA in August | Renewal \"50/50\", budget with Franklin Okata | Vodacom expansion interest noted by Angus\nJuly: Jul 4 — automated renewal notification sent to Kgolo | Jul 7 — Divyam builds 10-slide deck for July 9 session (pivots from spend to technographic use cases; \"Value Story for Franklin\" slide included) | Jul 9 — Kgolo no-shows (OOO); Divyam + Angus only | Platform still at 15% export usage (1,514/10,000)\n\n\nNext Steps (HG side):\nDivyam/Angus: Send ROI doc + 10-slide deck to Kgolo immediately post-OOO — this is the tool he needs to build the Franklin case; 52 days left and he's leaving in AugustDivyam/Angus: Identify and engage Kgolo's successor at Safaricom before he leaves — ask Kgolo directly on his return to intro the replacement; without this, renewal knowledge dies with his departureAngus: Progress the Vodacom South Africa angle with Kgolo — positive signal from June 29; could offset the Safaricom renewal risk with a new expansion opp\n\n\nNext Steps (CX side):\nKgolo: Complete internal Supply Chain report on HG | drive Franklin conversation on renewal budget this month — running out of time before his August exitKgolo: Intro Divyam/Angus to his successor at Safaricom before departureFranklin Okata / Lilian: Progress benefit realization internally — ZKaranja flagged \"no success\" on benefits; Franklin's approval is the gating factor for renewal\n\n\nOpen Jira / Products / Solutions:\nNA",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d0000026EITVAA4",
    "accountName": "Alight Solutions LLC",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Augie Buettner",
    "segment": "Enterprise",
    "arr": 49990,
    "lastOutbound": "2026-06-16",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-30",
    "latestPulseDate": "2026-07-20",
    "opportunities": [
      {
        "opp_id": "006RN00000Dvp1VYAR",
        "csm": "Varun Tiwari",
        "name": "Renewal - Alight- Global  2025",
        "arr": 49990,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26: VT\n\n Go-to-Market Planning Timeline:\n• Alight will begin building its 2027 GTM model in Fall 2026, incorporating lessons learned from last year's planning cycle(Varun to help here)\n• Sales Kickoff is planned for the first week of January (approximately January 5–7).\n• Goal is to have foundational GTM data ready before Sales Kickoff, with territory assignments completed afterward.\n• Data preparation will begin in October/November, with execution and finalization planned for December.\n• Alight plans to expand its target account definition to include organizations with >$100K in annual revenue (previously >$500K).\n• Expansion will require deeper market and account-level analysis and increase the overall GTM scope.\n\n\nHG Insights Data Usage in Salesforce:\n• HG Insights data is available within Salesforce, providing firmographic, technographic, and account intelligence.\n• Payroll technographics are no longer a priority, while HCM system data remains highly relevant.\n• HG Insights hierarchy data is used alongside D&B, particularly for privately held organizations.\n• Key data points include North America benefit-eligible employees, total North America employees, estimated benefit-eligible employees, and NAICS codes (via D&B).\n\nCompetitor Product List & Salesforce Enrichment:\n• Varun created a refined competitor product list from Betsy's original list of \n• Competitors have been mapped to Alight's six key solution categories (Benefits Administration, Defined Contribution, Leave Management, etc.).\n• Updated Excel file will be shared following one final data refresh.(shared)\n• Carolyn will update Salesforce enrichment by adding relevant competitor products and removing outdated products (e.g., Payroll).\n• Betsy will help validate the products before they are updated in Salesforce.\n• Changes will first be validated in UAT before being moved to production(Betsy)\n• HG Insights coverage for this market segment is currently limited but continues to expand, with additional product coverage planned by year-end.\n• Varun can work with the Data team to prioritize additional coverage for this segment.\n\nWhite Space Analysis:\n• Alight is looking to identify competitor penetration across target accounts by product category.\n• Objective is to understand which competitors support accounts for solutions such as Benefits Administration, Leave Administration, and Navigation Services.\n• HG Insights can generate whitespace opportunities by product after excluding existing Alight customers.\n• Analysis can be performed using Salesforce account data or a customer-provided account list.\n• Once priority products are confirmed, Varun will prepare an initial whitespace analysis for review.\n\n\nNext Steps:\n• Varun to share the updated competitor product list (Excel) with Betsy and Carolyn after the final data refresh.(Done)\n• Carolyn to update Salesforce with the approved competitor products and remove obsolete products.\n• Betsy to review and confirm the priority products for whitespace analysis.\n• Varun to prepare a whitespace analysis for the selected products.\n• Varun to begin preparing the 2027 GTM account analysis ahead of Alight's October planning cycle.\n• Full hierarchy and account matching analysis (11K+ accounts) will be prepared to support GTM planning(Oct)",
        "pulseDate": "2026-07-20"
      }
    ]
  },
  {
    "accountId": "001RN00000I2YkoYAF",
    "accountName": "Strada U.S. Professional Services, LLC",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Leo Zunz",
    "segment": "Enterprise",
    "arr": 49350,
    "lastOutbound": "2026-05-14",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000F4tlGYAR",
        "csm": "Atisha Waghela",
        "name": "Renewal - Jordana - Strada Global (Alight 2026",
        "arr": 49350,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Discovery call (7/8) showed low data maturity but strong intent — new GTM leadership, Pedro owning territory planning, and interest in HG contacts + TrustRadius. Watch item: Arben is evaluating Clay as an alternative. Next: Augie sends the HG-vs-Clay positioning and I share account briefs ahead of the 7/11 follow-up on contacts and TrustRadius.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001yQmGgAAK",
    "accountName": "Cognizant",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Augie Buettner",
    "segment": "Strategic",
    "arr": 45000,
    "lastOutbound": "2026-06-09",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-06-10",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Kg3AsYAJ",
        "name": "Renewal - Cognizant direct buy 2026",
        "arr": 50000.0,
        "renewalDate": "2027-06-11",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Atisha Waghela"
      }
    ]
  },
  {
    "accountId": "001d0000021zq4VAAQ",
    "accountName": "HubSpot",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 42822,
    "lastOutbound": "2026-06-18",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-18",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7c9YAB",
        "csm": "Divyam Dewan",
        "name": "TR - HubSpot - Ultimate - 03.19.2026 (Written Renewal)",
        "arr": 42822,
        "contract_end": "2027-03-18",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\n$42.8K ARR, renewal Mar '27. Renewal closed March '26; Jordan Montgomery engaged and proactive — submitted updated product descriptions live minutes before June 18 sync. TR Score 83; 5,400+ reviews; Top Rated won; Buyer Choice next (Oct 27). AI crawler data resonating strongly (\"what me and everyone else will care about most\"). AI crawler portal access (July commitment) pending delivery. India RGIF/RGIP $30K pilot missed May 31 close — status unclear. Lisa Zimmermann (EB) effectively disengaged; Jordan sole POC. July 6 crawler report email awaiting reply.\n\n\nTimeline (May – July 2026):\nMay: Monthly sync | Jordan registered for June HG Insider ✓ | India RGIF/RGIP pilot in progress (May 31 close target)Jun: Monthly sync Jun 18 — descriptions submitted pre-call | AI crawler stats 12,987 requests | Quote-to-Cash removed | Product activated on platform (3mo post-renewal) | AI portal July commitment made | Lisa removed from required attendeesJul: AI crawler report sent Jul 6 (5,857 requests, ClaudeBot 4x surge) | Jordan reply pending | AI portal delivery due this month\n\n\nNext Steps (HG Side):\nAI crawler vendor portal — confirm access live + loop Jordan in (promised twice: Jun 18 + Jun 19 email)India RGIF/RGIP pilot — get status from Anderson/Hayden (missed May 31 close, no confirmation)Buyer Choice prep (Oct 27 announcement) — build review campaign list with Jordan; increase written reviews before Oct cycle\n\n\nNext Steps (CX Side):\nJordan — reply to Jul 6 AI crawler email + answer custom profile questions (outstanding since Apr 22)Identify internal stakeholder for broader HG capabilities conversation (agreed Apr 22, no follow-through)Confirm live TR listing looks correct post–Jun 18 description updates\n\n\nOpen Jira / Products / Solutions:\nNA | Jordan Montgomery registered and attended June 2026 HG Insider session ✓",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000001nGK6mAAG",
    "accountName": "FactSet Research Systems Inc",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 40000,
    "lastOutbound": "2026-04-29",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-07-15",
    "latestPulseDate": "2026-07-21",
    "opportunities": [
      {
        "opp_id": "006RN00000OpsWyYAJ",
        "csm": "Andy Lim",
        "name": "TR - FactSet - CVP, Lead Acceleration, Form BANT Leads - 07.16.2025",
        "arr": 40000,
        "contract_end": "2026-07-15",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Changing from Healthy to Concerning based on renewal-window compression, not lost intent. Aidan has given verbal confirmation of intent to renew, but a new procurement process on their side is delaying order form signing and a PO is also required. We have been persistent — the renewal 1:1 with Anderson has been rescheduled three times (June 24 → July 2 → July 7) and is now on the calendar for tomorrow. Top Rated 2026 win landed June 18. Holding Concerning until the signed order form and PO are in.",
        "pulseDate": "2026-07-21"
      }
    ]
  },
  {
    "accountId": "001d000001whr8WAAQ",
    "accountName": "NetSuite Inc",
    "csm": "Pam Huck",
    "csmKey": "pam",
    "am": "Mark Fell",
    "segment": "Enterprise",
    "arr": 35000,
    "lastOutbound": "2026-03-01",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-30",
    "latestPulseDate": "2026-06-26",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7fjYAB",
        "csm": "Brett Castonguay",
        "name": "TR(Opportunity Cleanup) - Oracle NetSuite - CVP - 10.01.2025 (Written Renewal) _ CLOSED IN TR",
        "arr": 35000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Engaged client. Working to fan out and across the organization to become more multi-threaded.",
        "pulseDate": "2026-06-26"
      }
    ]
  },
  {
    "accountId": "0010V00002CUcMDQA1",
    "accountName": "Xero Limited",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Hayden Smith",
    "segment": "Enterprise",
    "arr": 32400,
    "lastOutbound": "2026-05-27",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-19",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7c6YAB",
        "csm": "Divyam Dewan",
        "name": "TR - Xero - CVP - 03.20.2026 (Written Renewal)",
        "arr": 32400,
        "contract_end": "2027-03-19",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\n$32.4K ARR, renewal Mar '27 (closed). Andrea Gonzalez engaged with clear 2026 goals — TR as primary review engine over G2, Buyer's Choice repeat (Sep target). Top Rated 2026 won; monthly cadence established and accepted Jun 26. Jul 7 sync — Andrea no-showed (prior meeting ran over) but apologized and confirmed deck review before Aug 12. Billing discrepancy + portal tech issue flagged in Vitally, both unresolved. OneTrust Supplier Security Assessment assigned Jun 26 — past due Jul 1. Single-threaded on Andrea; Ian (approver) never engaged.\n\n\nTimeline (May – July 2026):\nMay: AM ownership resolved (Angus confirmed) | May 27 first real sync with Andrea — Buyer Intent/IDL interest flagged | Andrea registered June HG Insider ✓Jun: Monthly sync (2nd Wed) | Top Rated 2026 won | Recurring cadence accepted Jun 26 | OneTrust security assessment issued Jun 26 (due Jul 1)Jul: Andrea rescheduled Jul 8 → Jul 7 | No-showed (prior meeting ran over) | AI crawler deck sent post-call | Andrea confirmed Aug 12 next meeting Jul 9\n\n\nNext Steps (HG Side):\nOneTrust Supplier Security Assessment — complete and return (past due Jul 1)Buyer's Choice review campaign — design campaign list with Andrea before Sep deadline (8 reviews gap as of Feb)Exec/BTL engagement — Angus to engage Ian (approver) before next renewal cycle starts\n\n\nNext Steps (CX Side):\nAndrea — review July AI crawler deck before Aug 12 syncResolve billing discrepancy + portal tech issue (both unresolved, no ticket open)Event review collection details — follow up with Angus (flagged May 27, never sent)\n\n\nOpen Jira / Products / Solutions:\nNA | Andrea Gonzalez registered for June 2026 HG Insider session ✓",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "0013o00002ehXpwAAE",
    "accountName": "Genesys",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 30000,
    "lastOutbound": "2026-05-26",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7bqYAB",
        "csm": "Divyam Dewan",
        "name": "TR - Genesys - CVP - 04.01.2026 (Written Renewal)",
        "arr": 30000,
        "contract_end": "2027-03-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\n$30K ARR, renewal Apr '27 (closed; CVP-only — downgrade from 2025 Ultimate+ with IDL). Account strong — Erica Heil attended both June and July HG Insider. Top Rated 2026 won (10 awards, Jun 10). Last sync May 26; June 23 cancelled (Erica OOO, Tech Cares award app). No July sync yet scheduled. Incentive budget 97% unused ($970/$1K). Custom questions stale since May 27 — Sam asked to hold, no update since. R2R re-run + LLM crawler report committed May 26 — delivery unconfirmed. Buyer Choice deadline Sep 26.\n\n\nTimeline (May – July 2026):\nMay: Sync May 26 — incentive links created | R2R re-run + LLM report committed | Custom questions: Sam asked to hold May 27 | Erica registered June HG Insider ✓Jun: June 23 sync cancelled (Erica OOO — Tech Cares award) | Top Rated 2026 won — 10 awards Jun 10 | Profile consolidation complete (Genesys IVR + Cloud AI + Pointillist merged) | Erica registered July HG InsiderJul: Erica attended July 8 HG Insider ✓ | Follow-up task due Jul 16 | No July sync scheduled\n\n\nNext Steps (HG Side):\nHG Insider follow-up by Jul 16 — thank Erica, hook on GEO Dashboard preview (TrustRadius LLM visibility)Confirm R2R campaign re-run + LLM crawler report delivered (both committed May 26, status unconfirmed)Nudge Sam/Erica on custom questions — stale 6+ weeks, unblock Neva Sjule for publishing\n\n\nNext Steps (CX Side):\nCustom questions — Sam/Erica to review and approve (overdue since May 27)Schedule July/August monthly sync — cadence at risk (no call since May 26)Buyer Choice prep — activate review campaign targeting best value/relationship ratings (Sep 26 deadline)\n\n\nOpen Jira / Products / Solutions:\nErica Heil | HG Insider - June 2026 registered ✓ | July 8, 2026 attended ✓",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "0013o00002aww1VAAQ",
    "accountName": "Argano LLC",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 30000,
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-12",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000P045IYAR",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds",
        "arr": 30000,
        "contract_end": "2026-10-12",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Rajan Kumar's access was removed June 4–5, with two new users (Apeksha, Rakesh) provisioned but not yet onboarded — a net negative on adoption continuity. Platform utilization remains at 8.6% (2,150/25,000 entities) with no exports recorded. Last meaningful touchpoint was June 5 (user access change); last group session was May 26 cohort. No Jira tickets open. Renewal is in Stage 2 (Oct 12, 2026). User turnover without structured reonboarding is the primary risk driver; dedicated 1:1 session needed for Apeksha and Rakesh before the team loses institutional knowledge of the platform.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d0000026EJFFAA4",
    "accountName": "Dintec LLC",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Commercial",
    "arr": 30000,
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-11-10",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Qtg2tYAB",
        "csm": "Nick Johnson",
        "name": "SAP Partner Program: Dintec",
        "arr": 30000,
        "contract_end": "2026-11-10",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Zero platform exports with only 1 active user confirmed; no dedicated 1:1 session has been completed despite the account being live. Last touchpoint was the May 26 group cohort session with no direct 1:1 engagement since onboarding. No Jira tickets open. Renewal is Nov 10, 2026. The combination of a single user, zero exports, and no confirmed individual training session represents a structural adoption risk; a 1:1 outreach to Federico Lozano is the priority action before June ends.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001RN00000ZeXtxYAF",
    "accountName": "E-Strategy International Inc.",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Commercial",
    "arr": 30000,
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-11-23",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000RnsULYAZ",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds: E-Strategy",
        "arr": 30000,
        "contract_end": "2026-11-23",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Platform utilization is less than 1% (204/25,000 entities, 0 exports) — the lowest in the SAP partner cohort. No confirmed 1:1 session has taken place; all engagement has been via the group cohort model. Last touchpoint was the May 26 group session with no direct response from the E-Strategy team since. No Jira tickets open. Renewal is Nov 23, 2026. Near-zero adoption with no direct 1:1 investment signals a high churn risk at renewal if usage does not materially improve in the next 90 days.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d0000026EwMDAA0",
    "accountName": "Kaar Technologies Pvt Ltd",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "SMB",
    "arr": 30000,
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-12",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Oo7uwYAB",
        "csm": "Nick Johnson",
        "name": "Kaar Technologies Pvt Ltd",
        "arr": 30000,
        "contract_end": "2026-10-12",
        "deal_type": "New Subscription",
        "pulse": "Poor",
        "pulseNote": "6/15 NJ | Pulse downgraded to Poor (prior: Some Risk). Near-zero platform adoption at 0.004% utilization (1 entity/25,000 export limit) with no internal champion identified and no workflow integration achieved. An unresolved HubSpot integration request remains open with no traction. Kaar Technologies raised an $11M Series B in 2025, signaling internal resource constraints may be limiting bandwidth for HG activation. All engagement has been via the May 26 group cohort only — no direct 1:1 session completed. No Jira tickets open. Renewal is Oct 12, 2026. With no champion, no adoption, and a 4-month engagement window remaining, this account is at critical churn risk absent immediate executive-level outreach and a structured activation plan.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001RN00000CXdCGYA1",
    "accountName": "Korcomptenz Incorporated",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "SMB",
    "arr": 30000,
    "lastOutbound": "2026-04-28",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000RUUCQYA5",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds: Korcomptenz",
        "arr": 30000,
        "contract_end": "2026-11-30",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Korcomptenz is the strongest adopter in the SAP partner cohort at 84.4% utilization (21,100/25,000 entities) with multiple 1:1 sessions completed — a meaningful positive signal. However, an outstanding unpaid invoice and no confirmed additional export credit decision remain open risk items. Last touchpoint was the May 26 group cohort session; no direct outreach since. No Jira tickets open. Renewal is Nov 30, 2026. Strong adoption provides a solid foundation for renewal, but the invoice status and export limit ceiling must be resolved to avoid disruption to the team's active workflows.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001RN00000Vg7kpYAB",
    "accountName": "LTIMindtree Limited",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 30000,
    "lastOutbound": "2026-06-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-16",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000QEZi6YAH",
        "csm": "Nick Johnson",
        "name": "SAP Partner MDF Funds",
        "arr": 30000,
        "contract_end": "2026-10-16",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Rajan Kumar's access was removed June 4 with two new users requiring onboarding — mirroring the same user transition risk seen at Argano. Platform utilization is at 16.3% (4,069/25,000 entities) — moderate for the cohort but with no export activity confirmed. Last meaningful touchpoint was June 4–5 (user access change); last group session was May 26. No Jira tickets open. Renewal is Oct 16, 2026. The user transition without a structured handoff creates knowledge continuity risk; a dedicated 1:1 for the new users (Surya Khoday/team) is the priority action in the next two weeks.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001RN000001R17dYAC",
    "accountName": "phoenix business consulting",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 30000,
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000RJN6GYAX",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds: Phoenix Team",
        "arr": 30000,
        "contract_end": "2026-11-30",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Richard Haugen (rhaugen@phoenixteam.com) is the cohort's top individual exporter; the account has consumed 139.996% of its 25,000 entity limit (34,999 entities) — the only account in the cohort in an active overage situation. Sentiment from cohort sessions (Apr 21, May 26) has been constructive, with Richard providing substantive product feedback. However, no dedicated 1:1 session has been completed and the export overage has not been formally addressed with the customer. No Jira tickets open. Renewal is Nov 30, 2026. The overage conversation and a formal 1:1 to align on FY2027 workflows represent the key near-term actions to convert positive sentiment into a strong renewal.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001d0000026GU5XAAW",
    "accountName": "Protiviti Inc",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 30000,
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-19",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Oo2bxYAB",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds",
        "arr": 30000,
        "contract_end": "2026-10-19",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Protiviti has 80 provisioned users but platform utilization remains at 5.04% (1,260/25,000 entities), indicating engagement is concentrated among a small subset rather than distributed across the team. All touchpoints have been via the group cohort model — no individual 1:1 engagement recorded since January 2026. Last touchpoint was the May 26 group cohort session. No Jira tickets open. Renewal is Oct 19, 2026. With a large user base and low aggregate adoption, a targeted outreach to the managing director–level champions identified in January 2026 (who were previously engaged on scoring and territory planning use cases) is the critical next step before Q3 renewal conversations begin.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001RN00000WvffAYAR",
    "accountName": "Syskoplan Reply LLC",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 30000,
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-16",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Pl7E9YAJ",
        "csm": "Nick Johnson",
        "name": "Syskoplan SAP MDM",
        "arr": 30000,
        "contract_end": "2026-10-16",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "6/15 NJ | Pulse maintained at Concerning (prior: Some Risk). Platform utilization is at 7.34% (1,835/25,000 entities) with a user transition underway — Sofia Di Stefano (so.distefano@reply.com) is handing off to Paige Harrison, introducing champion continuity risk. All engagement has been via the May 26 group cohort session; no dedicated 1:1 has been confirmed. No Jira tickets open. Renewal is Oct 16, 2026. The user transition creates an immediate window to re-engage with a formal 1:1 onboarding for Paige Harrison and drive adoption before the October renewal; this should be prioritized in the next 30 days.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "001RN000003u2ThYAI",
    "accountName": "VASS",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Enterprise",
    "arr": 30000,
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-12",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Oo6Z4YAJ",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds VAAS",
        "arr": 30000,
        "contract_end": "2026-10-12",
        "deal_type": "New Subscription",
        "pulse": "Poor",
        "pulseNote": "6/15 NJ | Pulse downgraded to Poor (prior: Some Risk). VASS announced an ERE restructuring on June 10, 2026 affecting up to 13% of its Spanish workforce — a material company-level event that directly threatens renewal funding and internal bandwidth. The original platform champion departed in November 2025 and no replacement executive sponsor has been identified. Platform utilization is at 14.34% (3,585/25,000 entities) with all engagement via the May 26 group cohort only — no direct 1:1 has taken place. No Jira tickets open. Renewal is Oct 12, 2026. The combination of a major restructuring, no executive sponsor, and 4-month renewal horizon requires immediate escalation to establish whether SAP MDF funds will be reallocated and whether there is an internal champion willing to advocate for renewal.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "0010V00002MSCv9QAH",
    "accountName": "Sopra Steria",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 28000,
    "lastOutbound": "2026-06-04",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-06-29",
    "latestPulseDate": "2026-06-15",
    "opportunities": [
      {
        "opp_id": "006RN00000GQ4unYAD",
        "csm": "Nick Johnson",
        "name": "Sopra Steria - Alan - BD",
        "arr": 28000,
        "contract_end": "2027-06-29",
        "deal_type": "New Subscription",
        "pulse": "Poor",
        "pulseNote": "6/15 NJ | Pulse downgraded to Poor (prior: Some Risk). Sopra Steria explicitly stated they are not using the platform regularly (May 13 cadence attempt); the team has declined all 6+ scheduled cadence attempts since onboarding with no direct 1:1 engagement. The last substantive touchpoint was a data methodology call on June 4. Open Vitally tasks have remained unexecuted since November 2025. Significant data quality complaints were raised by Ivy Tun in December 2025 (entity selection, financial total inconsistencies, industry misclassifications, duplicate entries) — these remain partially unresolved and are eroding confidence in the platform. 2 CS interventions recorded. No Jira tickets open. Renewal is June 29, 2027. The combination of explicit non-use statement, cadence refusal, and unresolved data concerns makes this account a high churn risk; executive re-engagement and a data quality resolution plan are required urgently.",
        "pulseDate": "2026-06-15"
      }
    ]
  },
  {
    "accountId": "0010V00002LliO8QAJ",
    "accountName": "Globoforce Limited trading as Workhuman",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Hayden Smith",
    "segment": "Enterprise",
    "arr": 27000,
    "lastOutbound": "2025-12-02",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2028-01-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7e9YAB",
        "csm": "Divyam Dewan",
        "name": "TR - Globoforce Workhuman - CVP - 01.31.2026 (Written Renewal)",
        "arr": 27000,
        "contract_end": "2028-01-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Summary:\n$27K ARR (24-mo), renewal Jan '28. Written renewal closed Jan 31, 2026 — strong runway. TR metrics solid: trScore 9.2, #1 in category, Top Rated 2026 won (3 awards: Digital Rewards, Employee Recognition, Employee Engagement). However, no meetings on record since Dec 2025 (6+ months). CSM intro sent May 21 — no reply. HG Insider + Buyer's Choice \"double credit\" emails (May 28) — no engagement. 4 contact emails bouncing. No meeting cadence established. TrustQuotes + Trusted Seller badge in progress since Feb 2026. Buyer's Choice window open May–Sep — no review campaign started.\n\n\nTimeline (May – July 2026):\nMay: CSM intro email May 21 — no reply | HG Insider June 2 invite May 28 — no registration | Buyer's Choice \"double credit\" email May 28 — no reply | Hayden confirmed no meeting cadence on calendar (May 22)Jun: Top Rated congrats sent Jun 2–3 (9 recipients) — 4 bounced, Brianna OOO | No inbound from Workhuman | Buyer's Choice window activeJul: No contact — zero meetings, zero inbound from Workhuman team\n\n\nNext Steps (HG Side):\nRe-engage Ethan Bukowiec — no reply to May 21 intro; try via Hayden's relationship or LinkedIn to get meeting on calendarBuyer's Choice prep — window closes Sep 2026; design review campaign with Ethan (only 12 reviews in past year)Activate TrustQuotes widgets + Trusted Seller badge — both in progress since Feb 2026, no update in 5 months\n\n\nNext Steps (CX Side):\nEthan — respond to CSM intro + confirm meeting cadenceReview open action items from last syncBuyer's Choice campaign — act before Sep 2026 window closes\n\n\nOpen Jira / Products / Solutions:\nHG Insider | No attendance - invite sent May 28; Ethan auto-OOO'd; no registrations",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d000000Ct5hiAAB",
    "accountName": "Salesforce Inc.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Ziad Amira",
    "segment": "Strategic",
    "arr": 25000,
    "lastOutbound": "2026-07-01",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-01-31",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000SEK3ZYAX",
        "csm": "Atisha Waghela",
        "name": "SFDC - ASEAN",
        "arr": 25000,
        "contract_end": "2027-01-31",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Technical syncup (7/7) diagnosed the platform-loading failures for India users (core hours 11am–4pm IST) as a network/DNS issue on Salesforce's side, not an HG platform fault — Zscaler ruled out as the sole cause. Since Salesforce India has no network SPOC (decisions are US-driven), we asked them to engage their internal technical/network team to resolve it. Active technical relationship, but adoption is blocked until their network team acts. Next: Salesforce to loop in their network team; in parallel Rafael sends log-capture steps and runs a ~2pm IST debug call, and I share credit screenshots to unblock the stalled 600-account export.",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d0000026GTwLAAW",
    "accountName": "Paychex , Inc.",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 42000,
    "lastOutbound": "2026-06-10",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-04-29",
    "latestPulseDate": "2026-06-30",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7bXYAR",
        "name": "TR - Paychex - CVP - 4.30.2026 (Auto Renewal)",
        "arr": 42000.0,
        "renewalDate": "2027-04-29",
        "pulse": "Healthy",
        "pulseDate": "2026-06-30",
        "pulseNote": "Summary:\nTwo contracts live ($42K CVP renewal + $60K Paycor IDL expansion, total $102K ARR). CVP renewed April 30 — MSA alignment resolved May 26. Paycor IDL kicked off June 10 but 0 leads delivered — blocked on content approval (sent to Eli June 29, awaiting feedback). HG data activation at Paychex stalled — Aroon personally sold but no sales leadership sponsorship; David Nitsch spinning wheels. Paychex brand still below TR 7.5 Top Rated threshold. Paycor at exactly 7.5 — fragile.\n\n\nTimeline (last 3 months):\nApril: CVP auto-renewal invoiced ($42K) | MSA addendum needed (old 2021 boilerplate) | IDL contract in legal review | Paycor reviews sync — replicating Paychex playbook discussed\nMay: IDL $60K expansion contract finalized + signed (May 26) | Eli emailed asking IDL next steps (May 28) | Max + Aroon explore HG data commercial POC (minimal viable offer) | Double-count window email sent — delivery failure to one Paychex contact\nJune: IDL kickoff (Jun 10) — Eli confirmed | ICP set: 100–1K employees, HR Mgmt, Manager+ | Premium content drafted + sent to Eli (Jun 29) — awaiting approval | Paychex team no-showed Jun 9 monthly sync | Aroon + David Nitsch call (Jun 16) — HG activation paused, no sales sponsorship | SHRM QR code campaign — 2 reviews resolved | SurePayroll TR access set up\n\n\nNext Steps (HG side):\nAnderson/Divyam: Chase Eli for content asset approval — IDL launch is blocked | also follow up on suppression list + ADP displacement angleHayden/KP: Build HG vs ZoomInfo/6sense differentiation doc + scale magnitude deck for Beaumont + Jason — unlock sales sponsorship for HG data at PaychexDivyam: Re-anchor Paychex brand on TR — Justin Doyle is the contact | score still below 7.5 Top Rated threshold; push review campaign before next renewal cycle\n\n\nNext Steps (CX side):\nEli Cassis: Review + approve Paycor content assets (ASAP) | provide suppression listDavid Nitsch: Follow up with enterprise sales team — gauge interest in HG data activation | bring Beaumont/Jason into conversationPaychex team (Andrea/Justin): Re-engage on combined monthly sync — no-showed June 9\n\n\nOpen Jira / Products / Solutions:\n No open CPF tickets",
        "csm": "Divyam Dewan"
      },
      {
        "opp_id": "006RN00000Zlir3YAB",
        "name": "Paychex - IDL Expansion - 2026",
        "arr": 60000.0,
        "renewalDate": "2027-05-31",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Divyam Dewan"
      }
    ]
  },
  {
    "accountId": "0013o00002TzRgSAAV",
    "accountName": "Airtel Africa",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Angus Hyams",
    "segment": "Enterprise",
    "arr": 22000,
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-05-28",
    "latestPulseDate": "2026-07-10",
    "opportunities": [
      {
        "opp_id": "006RN00000J41dmYAB",
        "csm": "Divyam Dewan",
        "name": "Africa Airtel - Anicet",
        "arr": 22000,
        "contract_end": "2027-05-28",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Summary:\n$22K ARR (24-mo), renewal May '27. Zero platform utilization since contract start; Salesforce connector never set up. Champion Bossia Anicet departed — email hard-bounces. Deji Ilesanmi also bouncing. Only reachable contacts: Mary Wambua (DM status unclear) and Mark Rono (no reply since Apr 15). Jul 14 meeting with Mary confirmed — first customer call in ~2.5 months. Core value gap persists: spend data coverage in African markets remains limited. No HG Insider attendance. Re-engagement trajectory entirely dependent on Jul 14 outcome.\n\n\nTimeline (May – July 2026):\nMay: May 7 meeting with Mary — no recording/notes found (likely no-showed) | HG Insider Jun 2 invites sent to all contacts | Mark OOO May 28–Jun 2Jun: Internal 1:1 (Angus + Divyam Jun 2) — sent fresh outreach directly to Mark Rono | Deji Ilesanmi email confirmed hard-bounce Jun 2 | No reply from MarkJul: Jul 14 meeting with Mary Wambua confirmed (Angus organizing) | Zero platform activity | No inbound contact\n\n\nNext Steps (HG Side):\nJul 14 meeting prep — updated match analysis + spend coverage story; clarify Mary's DM status + identify champion successorPost-Jul 14 follow-up to Mark Rono — no follow-up sent after Jun 2 email; loop him in with recapDrive platform activation — walk Mary through exports + SFDC connector on call; 0% utilization is the renewal killer\n\n\nNext Steps (CX Side):\nMary Wambua — attend Jul 14 meeting; introduce budget owner/champion successor to HG teamConfirm current platform access (login credentials, SFDC connector still unconfigured)Mark Rono — respond to Jun 2 outreach or route to correct stakeholder\n\n\nOpen Jira / Products / Solutions:\nNA",
        "pulseDate": "2026-07-10"
      }
    ]
  },
  {
    "accountId": "001d0000026EKIiAAO",
    "accountName": "CIENA Corporation",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 10000,
    "lastOutbound": "2026-06-29",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-30",
    "latestPulseDate": "2026-06-29",
    "opportunities": [
      {
        "opp_id": "006RN00000Br4f4YAB",
        "csm": "Varun Tiwari",
        "name": "Ciena Renewal - Opp Gen - 2023/2025",
        "arr": 30000,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "29th June'26 : VT\n\n## Summary\n\nReviewed Capital One’s potential migration from the legacy 10K export model to the RGIP credit-based platform, including available datasets, role changes, and credit packaging. Salesforce sync is now operational after SSL rotation. Capital One also discussed user access cleanup, including vacant read-only seats and moving export access off Mason.\n\n Customer asks:\n\n-   Becca asked for documentation on the new credit model and package summary.(Augie to work on it)\n    \n-   Josemateo and Marie want clarity on who should receive the vacant read-only seats and longer-term export ownership.\n    \n-   The team asked for more detail on admin vs. standard user provisioning and module-level access in the new platform.(document shared)\n    \n-   Josemateo agreed to receive read-only access to the new platform for evaluation. (access granted)\n    \n\nNext steps:\n\n-   Varun to send Josemateo a welcome email for read-only RGIP access.(Done)\n    \n-   Josemateo to open an IAM ticket to remove Mason’s export entitlement and temporarily take over that access.\n    \n-   Augie to confirm how Salesforce connector usage maps to credits and send the package specs / summary sheet.\n    \n-   Varun to share additional detail on admin vs. standard role provisioning.\n    \n-   Capital One to align internally on seat allocation and migration evaluation with Lewis and sales.",
        "pulseDate": "2026-06-29"
      }
    ]
  },
  {
    "accountId": "001d0000021yklFAAQ",
    "accountName": "CBTS",
    "csm": "Varun Tiwari",
    "csmKey": "varun",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 140004,
    "lastOutbound": "2026-07-15",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2029-04-14",
    "latestPulseDate": "2026-07-20",
    "opportunities": [
      {
        "opp_id": "006RN00000RaePDYAZ",
        "csm": "Varun Tiwari",
        "name": "CBTS",
        "arr": 140004,
        "contract_end": "2029-04-14",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "21st Jul'26 : VT\n\n Contact Data Feedback\n• Contact data has been delivered for nearly two months, and Mitchell has successfully ingested it.\n• Data has been loaded into the Microsoft Fabric environment, transformed, and promoted to a queryable analytics layer.\n• Mitchell is enriching existing CBTS datasets by joining them with HG Insights data.\n• No issues or negative feedback have been reported, and the data quality has been well received.\n• Current use cases include propensity model development within the CBTS team and supporting marketing campaigns with ad hoc data requests.\n\nData Activation Guidance\n• Mitchell confirmed that the HG Insights data dictionaries are regularly referenced.\n• Mitchell is currently joining datasets using the Account ID from the spend file.\n• Varun recommended using the HG Company ID instead of domain matching.\n• HG Company ID provides a unified key across spend, installs, time series, and mentions, while domain matching can introduce one-to-many mapping issues.\n• July data delivery included approximately 1.7K records across Absolute Spend, Installs, Time Series, and Mentions.\n\n\n Mutual Success Planning:\n• Varun proposed establishing quarterly KPIs and a Mutual Success Plan to measure adoption and business outcomes.\n• Mitchell agreed and confirmed that defining success metrics is already on the team's roadmap.\n• It was agreed to allow another 1–2 months for the team to become familiar with the data before formalizing KPIs.\n\nNext Steps\n• Mitchell to share Zachary King's email address so he can be included in future bi-weekly meetings.\n• Schedule a detailed data walkthrough during the next bi-weekly meeting (July 29), with all relevant stakeholders in attendance.\n• Mitchell to draft proposed success KPIs, with a follow-up discussion planned in approximately one month.",
        "pulseDate": "2026-07-20"
      },
      {
        "opp_id": "006RN00000YADYJYA5",
        "name": "CBTS",
        "arr": 441.0,
        "renewalDate": "2027-05-11",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Varun Tiwari"
      }
    ]
  },
  {
    "accountId": "001d000001yQmH0AAK",
    "accountName": "Ernst & Young LLP",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "",
    "segment": "Enterprise",
    "arr": 25000.0,
    "lastOutbound": "",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2027-06-30",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000QVUdxYAH",
        "name": "Renewal - EY P- strategy and transactions - new batch 2026",
        "arr": 25000.0,
        "renewalDate": "2027-06-30",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Atisha Waghela"
      }
    ]
  },
  {
    "accountId": "001d000001VdEgeAAF",
    "accountName": "iCIMS",
    "csm": "Riley Rogers",
    "csmKey": "riley",
    "am": "",
    "segment": "Enterprise",
    "arr": 50000.0,
    "lastOutbound": "",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-03-03",
    "opportunities": [
      {
        "opp_id": "006RN00000TsUYHYA3",
        "name": "TR - iCIMS - IDL Opp",
        "arr": 50000.0,
        "renewalDate": "2026-12-31",
        "pulse": "Healthy",
        "pulseDate": "2026-03-03",
        "pulseNote": "",
        "csm": "Riley Rogers"
      }
    ]
  },
  {
    "accountId": "001RN00000dJyGcYAK",
    "accountName": "CoreLogic Solutions, LLC",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "",
    "segment": "Enterprise",
    "arr": 42240.0,
    "lastOutbound": "",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-05-31",
    "latestPulseDate": "2026-07-15",
    "opportunities": [
      {
        "opp_id": "006RN00000VMQWgYAP",
        "name": "Cotality - CVP + intent",
        "arr": 42240.0,
        "renewalDate": "2027-05-31",
        "pulse": "Healthy",
        "pulseDate": "2026-07-15",
        "pulseNote": "Summary:\n$42.2K ARR, 12-mo, renewal May '27. New subscription (signed June 5 — only 6 weeks in). 6sense intent integration live Jun 24; Box intent reports deployed Jun 15. Strong multi-stakeholder engagement: Shannon + 4 others (Lori, Jolene, Micah, Christopher). Profile at 7/100 completeness — Shannon updated Jul 8 but draft NOT formally submitted for publishing. Customer outreach list (\"still gathering\" since Jun 17) — primary blocker to all review activity. Legal consent framework blocks TR-managed outreach until ~Dec 2026. Shannon's EOY KPI: 15 reviews. Jul 8 + Jul 13 both cancelled; no confirmed next meeting.\n\nTimeline (May – July 2026):\nMay: Legal redlines finalized May 18 | Contract signed June 5\nJun: Pre-kickoff Jun 5 | Kickoff Jun 17 — 6sense setup initiated, customer list target set | 6sense live Jun 24 | Jun 25 sync — profile walkthrough, legal consent blocker confirmed, weekly cadence established\nJul: Weekly Jul 8 canceled (still gathering list; profile draft saved but not published) | Weekly Jul 13 canceled (Shannon at conference) | No confirmed next touchpoint\n\nNext Steps (HG Side):\nRe-establish weekly cadence — two consecutive cancellations; confirm next meeting date with Shannon\nCustomer list — get a committed delivery date; 15-review EOY KPI is blocked without it (legal bars TR-managed outreach until ~Dec)\nProfile publishing — nudge Shannon to formally submit draft edits (saved in portal since Jul 8, not submitted per Divyam's confirmation to Kevin Smith)\n\nNext Steps (CX Side):\nShannon — submit customer outreach list (stale since Jun 17 kickoff)\nShannon — formally submit vendor portal profile draft for publishing\nLori Garza — send insurance competitors list + property restoration category suggestion (committed Jun 25, not sent)\n\nOpen Jira / Products / Solutions:\nHG Insider: No attendance",
        "csm": "Divyam Dewan"
      }
    ]
  },
  {
    "accountId": "001d0000023mIPAAA2",
    "accountName": "Zycus Inc",
    "csm": "Andy Lim",
    "csmKey": "andy",
    "am": "",
    "segment": "Enterprise",
    "arr": 20000.0,
    "lastOutbound": "2026-06-24",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2028-06-04",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000VaEHBYA3",
        "name": "APAC Marketing & Clay",
        "arr": 20000.0,
        "renewalDate": "2028-06-04",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Andy Lim"
      }
    ]
  },
  {
    "accountId": "0010V00002Nc8lTQAR",
    "accountName": "Nozomi Networks Inc.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "",
    "segment": "Enterprise",
    "arr": 100000.0,
    "lastOutbound": "",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2027-03-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000WdLOjYAN",
        "name": "Renewal - Nozomi - CMO - Michael Plante 2026",
        "arr": 45000.0,
        "renewalDate": "2027-03-31",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Atisha Waghela"
      },
      {
        "opp_id": "006RN00000Ze1qtYAB",
        "name": "Nozomi HG expansion",
        "arr": 55000.0,
        "renewalDate": "2027-03-31",
        "pulse": "",
        "pulseDate": "",
        "pulseNote": "",
        "csm": "Atisha Waghela"
      }
    ]
  }
];
