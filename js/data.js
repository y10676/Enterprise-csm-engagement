// ─── CSM_ACCOUNTS ─────────────────────────────────────────────────────
// Source: HG GTM Tools — snapshot Apr 25, 2026; AM/segment corrections May 14, 2026; opp pulse/notes updated from SFDC May 23, 2026; Vitally refresh May 29, 2026
// DO NOT EDIT when adding new daily reports. Only update when account data changes.
// ──────────────────────────────────────────────────────────────────────

// ─── CSM ACCOUNT BOOKS ─────────────────────────────────────────
// Source: HG GTM Tools — get_book_of_accounts (snapshot Apr 25, 2026)
const CSM_ACCOUNTS = {
  riley: [
    {name:"Concur", seg:"Enterprise", arr:105000, pulse:"Some Risk", renewal:"2026-12-31"},
    {name:"Paycom Software Inc", seg:"Enterprise", arr:91500, pulse:"Extremely Satisfied", renewal:"2027-03-30"},
    {name:"Paylocity", seg:"Enterprise", arr:66275, pulse:"Very Satisfied", renewal:"2026-08-11"},
    {name:"RingCentral", seg:"Enterprise", arr:68000, pulse:"Extremely Satisfied", renewal:"2026-07-27"},
    {name:"TriNet Group Inc", seg:"Enterprise", arr:78189, pulse:"Extremely Satisfied", renewal:"2027-01-19"},
    {name:"Zoom Video Communications", seg:"Enterprise", arr:72000, pulse:"—", renewal:"2027-01-23"}
  ],
  varun: [
    {name:"Akamai Technologies, Inc.", seg:"Enterprise", arr:44750, pulse:"Some Risk", renewal:"2027-04-19"},
    {name:"Alight Solutions LLC", seg:"Enterprise", arr:49990, pulse:"Some Risk", renewal:"2026-12-30"},
    {name:"Autodesk Inc", seg:"Enterprise", arr:573000, pulse:"Extremely Satisfied", renewal:"2029-04-29"},
    {name:"BMC Software Inc", seg:"Enterprise", arr:284750, pulse:"Severe Risk", renewal:"2026-11-29"},
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
    {name:"Pegasystems Inc", seg:"Enterprise", arr:190675, pulse:"Extremely Satisfied", renewal:"2026-10-31"},
    {name:"ServiceNow Inc's", seg:"Strategic", arr:545000, pulse:"Extremely Satisfied", renewal:"2027-02-27"},
    {name:"CBTS", seg:"Enterprise", arr:140445, pulse:"—", renewal:"2029-04-14"},
    {name:"Unum", seg:"Strategic", arr:88852, pulse:"Some Risk", renewal:"2028-04-30"},
    {name:"Zendesk, Inc.", seg:"Enterprise", arr:402232, pulse:"Some Risk", renewal:"2027-11-24"},
    {name:"zScaler", seg:"Enterprise", arr:424915, pulse:"Extremely Satisfied", renewal:"2026-07-31"}
  ],
  divyam: [
    {name:"Adobe Systems Incorporated", seg:"Strategic", arr:612847, pulse:"Some Risk", renewal:"2026-12-09"},
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
    {name:"OpenAI", seg:"Enterprise", arr:72600, pulse:"Extremely Satisfied", renewal:"2027-05-14"},
    {name:"Paychex, Inc.", seg:"Enterprise", arr:42000, pulse:"Some Risk", renewal:"2027-05-31"},
    {name:"Procore Technologies Inc", seg:"Enterprise", arr:77000, pulse:"Extremely Satisfied", renewal:"2026-09-19"},
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
    {name:"IBM", seg:"Enterprise", arr:3331538, pulse:"Extremely Satisfied", renewal:"2028-11-29"},
    {name:"Infor (US), LLC", seg:"Enterprise", arr:882666, pulse:"Extremely Satisfied", renewal:"2026-11-06"},
    {name:"Kaar Technologies", seg:"SMB", arr:30000, pulse:"Some Risk", renewal:"2026-10-12"},
    {name:"Korcomptenz", seg:"SMB", arr:30000, pulse:"Some Risk", renewal:"2026-11-30"},
    {name:"KPMG LLP", seg:"Strategic", arr:264967, pulse:"Extremely Satisfied", renewal:"2026-07-31"},
    {name:"LTIMindtree Limited", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-16"},
    {name:"NTT Data Corporation", seg:"Strategic", arr:120450, pulse:"Extremely Satisfied", renewal:"2028-09-14"},
    {name:"Phoenix Business Consulting", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-11-30"},
    {name:"Protiviti Inc", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-19"},
    {name:"Red Hat Inc", seg:"Enterprise", arr:450500, pulse:"Extremely Satisfied", renewal:"2028-11-29"},
    {name:"SAP Inc", seg:"Strategic", arr:3051889, pulse:"Extremely Satisfied", renewal:"2026-07-28"},
    {name:"Siemens AG", seg:"Strategic", arr:888500, pulse:"Extremely Satisfied", renewal:"2026-12-30"},
    {name:"Softcat Ltd", seg:"Enterprise", arr:211667, pulse:"Extremely Satisfied", renewal:"2027-08-31"},
    {name:"Sopra Steria", seg:"Enterprise", arr:28000, pulse:"Some Risk", renewal:"2027-06-29"},
    {name:"Syskoplan Reply LLC", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-16"},
    {name:"Telefónica S.A", seg:"Strategic", arr:81000, pulse:"Some Risk", renewal:"2026-11-13"},
    {name:"UKG (Ultimate Kronos)", seg:"Enterprise", arr:447433, pulse:"Extremely Satisfied", renewal:"2027-10-21"},
    {name:"VASS", seg:"Enterprise", arr:30000, pulse:"Some Risk", renewal:"2026-10-12"},
    {name:"Veeam Software AG", seg:"Enterprise", arr:822500, pulse:"Some Risk", renewal:"2027-12-31"},
    {name:"Westcon", seg:"Strategic", arr:535000, pulse:"Extremely Satisfied", renewal:"2028-10-31"}
  ],
  rani: [
    {name:"Amazon Web Services (AWS)", seg:"Strategic", arr:4622796, pulse:"Extremely Satisfied", renewal:"2027-06-30"},
    {name:"CloudFlare Inc", seg:"Enterprise", arr:697318, pulse:"Some Risk", renewal:"2028-08-30"},
    {name:"Docusign, Inc.", seg:"Enterprise", arr:205000, pulse:"Some Risk", renewal:"2027-01-05"},
    {name:"Elastic.co", seg:"Enterprise", arr:329525, pulse:"Some Risk", renewal:"2027-03-31"},
    {name:"Google Inc.", seg:"Strategic", arr:3380938, pulse:"Some Risk", renewal:"2026-12-31"},
    {name:"Hewlett Packard Enterprise", seg:"Strategic", arr:1188272, pulse:"High Risk", renewal:"2028-10-31"},
    {name:"Hitachi Vantara", seg:"Enterprise", arr:622400, pulse:"Some Risk", renewal:"2026-10-23"},
    {name:"Lenovo Group Ltd.", seg:"Strategic", arr:695733, pulse:"High Risk", renewal:"2026-12-29"},
    {name:"NetApp", seg:"Enterprise", arr:840680, pulse:"Some Risk", renewal:"2026-08-31"},
    {name:"Workday Inc", seg:"Enterprise", arr:815250, pulse:"Some Risk", renewal:"2026-09-14"}
  ],
  pam: [
    {name:"Cisco", seg:"Strategic", arr:2297646, pulse:"Some Risk", renewal:"2026-11-03"},
    {name:"Epicor Software Corporation", seg:"Enterprise", arr:216572, pulse:"Extremely Satisfied", renewal:"2027-03-22"},
    {name:"F5", seg:"Enterprise", arr:144000, pulse:"Extremely Satisfied", renewal:"2026-09-30"},
    {name:"Microsoft", seg:"Strategic", arr:1954167, pulse:"Extremely Satisfied", renewal:"2027-03-31"},
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
    {name:"Insight Direct USA Ltd", seg:"Enterprise", arr:260000, pulse:"Very Satisfied", renewal:"2027-03-04"},
    {name:"Intel Corporation", seg:"Strategic", arr:115021, pulse:"Extremely Satisfied", renewal:"2026-12-11"},
    {name:"Intuit", seg:"Strategic", arr:245000, pulse:"Very Satisfied", renewal:"2027-03-09"},
    {name:"Kyndryl", seg:"Strategic", arr:709748, pulse:"Very Satisfied", renewal:"2027-03-31"},
    {name:"Optiv Security Inc", seg:"Enterprise", arr:685997, pulse:"Very Satisfied", renewal:"2028-12-31"},
    {name:"RSM US", seg:"Enterprise", arr:115000, pulse:"Very Satisfied", renewal:"2026-12-30"},
    {name:"Salesforce Inc.", seg:"Strategic", arr:25000, pulse:"Very Satisfied", renewal:"2027-01-31"},
    {name:"Strada U.S. Professional Services, LLC", seg:"Mid-Market", arr:49350, pulse:"Very Satisfied", renewal:"2026-12-31"},
    {name:"TD Synnex", seg:"Strategic", arr:150000, pulse:"Severe Risk", renewal:"2027-12-31"}
  ],
  andy: [
    {name:"ADP, Inc", seg:"Strategic", arr:298800, pulse:"Some Risk", renewal:"2027-09-07"},
    {name:"ALIBABA.COM CHINA LIMITED", seg:"Strategic", arr:119700, pulse:"Some Risk", renewal:"2027-04-14"},
    {name:"Colt Technology Services", seg:"Enterprise", arr:514555, pulse:"Extremely Satisfied", renewal:"2028-12-16"},
    {name:"Cvent", seg:"Enterprise", arr:40000, pulse:"Very Satisfied", renewal:"2027-01-30"},
    {name:"Deloitte", seg:"Strategic", arr:365908, pulse:"High Risk", renewal:"2027-05-19"},
    {name:"FactSet Research Systems Inc", seg:"Enterprise", arr:40000, pulse:"Some Risk", renewal:"2026-07-15"},
    {name:"Fastly Inc", seg:"Mid-Market", arr:60000, pulse:"Some Risk", renewal:"2027-04-15"},
    {name:"Pure Storage", seg:"Enterprise", arr:225000, pulse:"Very Satisfied", renewal:"2027-11-09"},
    {name:"Sage Global Services", seg:"Enterprise", arr:223250, pulse:"High Risk", renewal:"2027-01-25"},
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "2026-06-01",
    "opportunities": [
      {
        "opp_id": "006RN00000I38zeYAB",
        "csm": "Rani Guy",
        "name": "AWS - APO, Partner Activation. Project Rubicon.",
        "arr": 63000,
        "contract_end": "2026-06-30",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Met with Raquel today. She is meeting with her counterpart at Accenture tomorrow. we positioned her access HG through Amazon Quick this will also move other partners to adopt AQuick. Following up with her on Thursday to schedule a call next week to discuss what she wants to renew.",
        "pulseDate": "2026-06-01"
      },
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
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-06-02",
    "opportunities": [
      {
        "opp_id": "006RN00000FrQRzYAN",
        "csm": "Rani Guy",
        "name": "Renewal - Google - GenAI and FAI - 12 Month Extension of POC for 2025 2026",
        "arr": 500000,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "FAI is being used by Noah in the account plans he is building. Still need visibility on GenAI Navigator. We have a weekly meeting scheduled with Laurence who is the first sign off on the renewal. He will be our POC until Matt gets back from Paternity leave or they find a replacement. Focus is credit pricing migration, identifying the right marketing person for TR, and meeting scheduled with Marianna who is the person RevOp busy contact data for to have her part of early conversations around mapping contact data and FAI data. Meeting scheduled for Friday with me and Tracy.",
        "pulseDate": "2026-06-02"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-05-15",
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
        "pulse": "Healthy",
        "pulseNote": "May 6 RR - -   **Dashboard integration moving forward:** IBM shared the Conversion dashboard requirements for category/product performance, competitor comparisons, sentiment, feature-level analysis, and reviewer demographics. TrustRadius can support with review content via email automation or web scraping, but category traffic still requires a manual or CSV-based workflow. Next step is a technical working session with Conversion, Mihaela, and Aidan to finalize the integration path.\n    \n-   **Review volume is the main risk:** IBM is at **117 reviews against a 762 annual target** and called out the need to increase pace materially. They noted **18 priority products qualified** while **8 did not**, and highlighted **Bob** in particular as a concern with only **3 reviews** so far.\n    \n-   **Awards reset creates an immediate opportunity:** With the May 1 cutoff passed, the team is now focused on building toward next year’s Top Rated and this fall’s Buyer’s Choice. Products already over 10 YTD reviews are in a good position for Buyer’s Choice, while products below that threshold need immediate attention.\n    \n-   **Event-driven review generation is the biggest near-term experiment:** The team aligned on testing a **business card + QR code motion** for field events, starting with **500 cards**, distributed through Chaitali and the Americas events team, using a **$25 incentive** and a trackable event-specific link.\n    \n-   **Other pipeline levers are being layered in:** IBM also wants to test **GPI follow-up campaigns**, continue planned activities around **Tech Exchange / Champions Lounge**, and use **IBM Communities** more intentionally to drive review volume.\n    \n-   **Support / follow-up from TrustRadius:** Riley to finish and send pending reports, order the event business cards, create a business-card-specific tracking link, and coordinate follow-up discussions on both event strategy and dashboard integration.\n\nApr 17 NJ | HG platform sync. Export license block preventing IBM Infra team from accessing contracted data including intent data — adoption risk across this renewal. License reallocation in progress (NJ + Augie Buettner). CDO office introduction required to align enterprise-level data access strategy and prevent further siloing. Risk: if license issue not resolved before next review cycle, intent data utilization metrics will decline and weaken renewal justification. Next steps: Resolve license reallocation as P0; engage CDO office (Bill O'Nesty, Peter Her, Ed Lovely); set firm timeline for adoption review with Riley Rogers.",
        "pulseDate": "2026-04-17"
      },
      {
        "opp_id": "006RN00000OTEkvYAH",
        "csm": "Nick Johnson",
        "name": "IBM - Spend for Marketing",
        "arr": 1896333.33,
        "contract_end": "2028-11-29",
        "deal_type": "Amendment",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Nick Johnson participated in a 30-min Zoom call with IBM (1:00 PM PT). Session: helping the office of the CDO with AI data strategy. Augie Buettner (AM) and Clayton also present. Strong executive-level engagement.",
        "pulseDate": "2026-05-15"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-21",
    "latestPulseDate": "2026-05-26",
    "opportunities": [
      {
        "opp_id": "006RN00000Opul9YAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Joule - CVP - 04.28.2025",
        "arr": 28000,
        "contract_end": "2026-04-27",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000OpulTYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Business Network - CVP - 05.01.2025",
        "arr": 28000,
        "contract_end": "2026-04-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000OpuksYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Build - CVP - 05.01.2025",
        "arr": 28000,
        "contract_end": "2026-04-30",
        "deal_type": "Renewal",
        "pulse": null,
        "pulseNote": null,
        "pulseDate": null
      },
      {
        "opp_id": "006RN00000OpulJYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP - Intergrated Business Planning - CVP  Market Report - 05.02.2025",
        "arr": 35500,
        "contract_end": "2026-05-01",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opp6YYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Digital Manufacturing - CVP - 05.12.2025",
        "arr": 28000,
        "contract_end": "2026-05-11",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp6XYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Integration Suite - CVP - 05.12.2025",
        "arr": 28000,
        "contract_end": "2026-05-11",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp6UYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Business Data Cloud - CVP - 05.14.2025",
        "arr": 28000,
        "contract_end": "2026-05-13",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp6cYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Sales Cloud - Market Report + Internationalization - 05.15.2025",
        "arr": 14700,
        "contract_end": "2026-05-14",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000Opp6aYAB",
        "csm": "Riley Rogers",
        "name": "TR - SAP Business Network - Market Report Bundle  Internationalization - 05.15.2025",
        "arr": 14700,
        "contract_end": "2026-05-14",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
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
        "pulse": null,
        "pulseNote": null,
        "pulseDate": null
      },
      {
        "opp_id": "006RN00000OpukYYAR",
        "csm": "Riley Rogers",
        "name": "TR - SAP Ariba - CVP - 07.31.2025",
        "arr": 28000,
        "contract_end": "2026-07-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
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
        "pulse": null,
        "pulseNote": null,
        "pulseDate": null
      },
      {
        "opp_id": "006RN000008rZr3YAE",
        "csm": "Nick Johnson",
        "name": "Renewal - SAP Install Subscription 2024",
        "arr": 432600,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — last pulsed May 6. Extended 2-hour working session with SAP team (Franklin Herbas and team) covering product taxonomy mapping, data feed updates, and MCP/Copilot roadmap. Renewal discussions confirmed for July. Franklin (champion) highly engaged. Org pulse Extremely Satisfied. Next step: Prepare renewal proposal for July discussions.",
        "pulseDate": "2026-05-11"
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
        "pulseNote": "### 🟡 SAP SuccessFactors\n\n**Contact:** Kristin Mestre\n\n-   **Review health:** Actively collecting — targeting HR Connect London (800 registered customers) as makeup event after NYC severely underperformed (only 3–4 reviews from 100+ attendees)\n    \n-   **SOWs in flight:** 4 active SOWs — Workday report (complete, invoice approved), install base cross-suite report (in procurement, May 11 meeting set), cloud migration report (processing), Corey Char report (submitted)\n    \n-   **Content:** IDP team requesting 5 reports (2 refreshes, 3 net new); big payroll announcement at Sapphire needs positive positioning content\n    \n-   **Risks:** Content team restructuring — budget shifted to content strategy teams; Sam Towardowski (new contact) responding with AI-generated replies, lacks HCM expertise . Intent lead program delays; SuccessFactors may break away for independent campaign Q2–Q3\n    \n-   **Badge issue:** Top Rated badge appeared prematurely due to new page layout — flagged and noted\n    \n\n---\n\n### 🟢 SAP BTP (Business Technology Platform)\n\n**Contact:** Chris Grundy\n\n-   **Review health:** Strong — 300+ reviews, 30x the Top Rated requirement\n    \n-   **Strategy:** Chris proposing centralized management model — acting as single POC for Integration Suite, SAP Build, and Customer Identity Management (CIM)\n    \n-   **Gap:** CIM has zero reviews; Chris exploring ~$25K investment to build profile\n    \n-   **Contract:** Enterprise Agreement in final stages with Alejandro Barahas — late July deadline, consolidating ~20 contracts\n    \n-   **Upcoming:** Post-Sapphire landing page updates; HG Insights data integration on product listings rolling out\n    \n\n---\n\n### 🟡 SAP Build\n\n**Contact:** Samuel Gorski\n\n-   **Structure change:** Build is part of BTP; moving from individual product calls to 12–13 monthly business unit calls covering 40+ products\n    \n-   **Risk:** Consolidation model risks reduced engagement — bi-weekly touchpoints currently drive renewals through personal relationships\n    \n-   **Lead quality concern:** Current lead conversion ~1 in 10; Demand Science offering competing lead products at lower cost/flexibility — HG+TR combined lead solution proposed Aug 2025 still not implemented\n    \n\n---\n\n### 🟡 SAP Business Network\n\n**Contact:** Kathryn Zwack\n\n-   **Review health:** 14 new reviews collected; previous market report expires July 2026\n    \n-   **Contract:** Bridge funding needed (~$7,400) to cover May 1–July 28 gap while consolidating under Alejandro's umbrella\n    \n-   **Decision pending:** Traditional market report (~$7,500) vs. AI-optimized version ($15,000)\n    \n-   **Risk:** Alejandro no-showed scheduled alignment meeting with Kathryn — follow-up needed\n    \n\n---\n\n### 🟢 SAP CX (Sales Cloud, Service Cloud, Commerce Cloud)\n\n**Contact:** Erica Vialardi (new CX solution lead)\n\n-   **Review health:** Sales Cloud 33, Service Cloud 31, Commerce Cloud 18 — all qualified for Top Rated\n    \n-   **Gap:** All products short of ~40-review target by 7–22 reviews; strategy relies heavily on global events\n    \n-   **Content:** Market reports completed Sept 2025 for all three products, available in multiple languages\n    \n-   **Next:** Binod joining May 12 call for full team alignment; Erica aligning internally with manager on responsibilities\n    \n\n---\n\n### 🔴 SAP Ariba + Fieldglass (Finance Products)\n\n**Contact:** Ashleigh Riehl\n\n-   **Review health:** Weak — new products added end of 2025 with limited review base. Last 60 days: Advanced Financial Closing (3 reviews), CPQ (4 reviews), Document Reporting Compliance (3 reviews), Treasury & Risk Mgmt (1 review), Subscription Billing (0)\n    \n-   **Target:** 15 reviews per product by end of July (prorated for 6-month bridge)\n    \n-   **Sapphire strategy:** TrustRadius booth presence with guided review collection; concern that finance products may get lost among 36+ SAP products on landing page\n    \n-   **Profile updates:** Ashleigh pulling content from SAP.com before Sapphire\n    \n\n---\n\n### 🔑 Account-Wide Themes\n\n-   **Contract consolidation:** ~20 separate contracts moving to single Enterprise Agreement under Alejandro Barahas; late July deadline\n    \n-   **CSM transition:** Riley taking over day-to-day from Cole across all products\n    \n-   **Sapphire (Orlando):** Key event for review collection and relationship building across multiple product lines\n    \n-   **HG Insights integration:** Install data now enhancing TrustRadius product pages across the account",
        "pulseDate": "2026-05-06"
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
        "pulseNote": "",
        "pulseDate": "2026-04-22"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-25",
    "latestPulseDate": "2026-06-12",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq1OTYAZ",
        "csm": "Pam Huck",
        "name": "TR - Cisco - CVP ELA , Premium Content Assets x30,  SSO Connection - 05.15.2023",
        "arr": 453085.56,
        "contract_end": "2026-05-14",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Continuing discussions with Mellissa. Mardigan has provided tiered pricing based upon number of profiles requiring support. AI audit form has been submitted and we are waiting response. Still forecasting a down sell but anticipate but not a full churn ",
        "pulseDate": "2026-05-29"
      },
      {
        "opp_id": "006RN00000OpukxYAB",
        "csm": "Pam Huck",
        "name": "TR - Cisco - Intent Driven Leads - 06.26.2025",
        "arr": 192000,
        "contract_end": "2026-06-25",
        "deal_type": "Renewal",
        "pulse": "Poor",
        "pulseNote": "For Cisco IDL opportunities, we are working to satisfy their new initiative of more sales ready leads and adopting their quarterly buy method if necessary. Currently proposing a workshop and pilot as proof of concept. Target date for workshop in Raleigh, end of June or early July",
        "pulseDate": "2026-06-12"
      },
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
        "pulse": "Concerning",
        "pulseNote": "As with the other Cisco IDL opportunities, we are working to satisfy their new initiative of more sales ready leads and adopting their quarterly buy method. ",
        "pulseDate": "2026-06-10"
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
        "pulseNote": "Meeting Stef at Cisco live tomorrow. Also going to meet with Angela from the TrustRadius partnership. This is the end of Cisco's fiscal year so budgets are still unclear and everyone is settling after the layoffs. Meeting with Stef will provide more clarity and the opportunity to talk about what the upcoming renewal and possible expansion will be.",
        "pulseDate": "2026-06-02"
      },
      {
        "opp_id": "006RN000001rwLRYAY",
        "csm": "Rani Guy",
        "name": "Cisco - New Business - Observability - 1 Opp Gen + SF connector",
        "arr": 105000,
        "contract_end": "2026-10-18",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Splunk team continues to find value. But no clear path to expansion or renewal since budgets are up in the air. our champion has been on vacation for two weeks so will work to get an update from her to see if her boss has clarity yet on the renewal and expansion that we have been discussing to migrate them to Fabric data feed.",
        "pulseDate": "2026-06-02"
      },
      {
        "opp_id": "006RN00000Opul0YAB",
        "csm": "Pam Huck",
        "name": "TR - Cisco - IDL - 11.04.2025",
        "arr": 500000,
        "contract_end": "2026-11-03",
        "deal_type": "Renewal",
        "pulse": "Poor",
        "pulseNote": "Continuing to have win back discussions with primary POCs. Mardigan is setting up a workshop session with executives to review how we can provide a better sales ready lead based upon HG scoring data. Mardigan has provided intent data pricing and there will be some level of win back for our IDL program as they saw value in our contacts. Solving Ana's new problem (sales ready leads) is the play for winning back the lost revenue",
        "pulseDate": "2026-05-29"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "2026-06-12",
    "opportunities": [
      {
        "opp_id": "006RN00000FtNoAYAV",
        "csm": "Pam Huck",
        "name": "Microsoft Americas - Consolidate Modern Work and Security",
        "arr": 574167,
        "contract_end": "2026-06-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "This will renew but level of expansion in question. Consumption based renewal being worked through procurement. 35% Budget cuts impacting Microsoft. Mark continues to push why they should expand the business as part of renewing.  Rohini is also having executive conversations.",
        "pulseDate": "2026-06-12"
      },
      {
        "opp_id": "006RN00000FtXU9YAN",
        "csm": "Pam Huck",
        "name": "Microsoft - BizApps - Install (400), Spend (Absolute), Contract, Intent (200), Platform with MI (5)",
        "arr": 600000,
        "contract_end": "2026-06-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "This will renew but level of expansion in question. Consumption based renewal being worked through procurement. 35% Budget cuts impacting Microsoft. Mark continues to push why they should expand the business as part of renewing.  Rohini is also having executive conversations.",
        "pulseDate": "2026-06-12"
      },
      {
        "opp_id": "006RN00000OpukIYAR",
        "csm": "Pam Huck",
        "name": "TR - Microsoft - CVP x6, Mkt Report x6  Event Support x2 - 08.01.2025",
        "arr": 105000,
        "contract_end": "2026-07-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "June 3, 2026 | PH — Microsoft Security TR Renewal. Changing from Concerning back to Healthy. Maryann Okonkwo secured funding approval and has requested SOW paperwork to complete the $105K flat renewal (6x CVP + 6x Market Reports + 2x Event Support) with new GEO/AI features. Budget-cut downscope risk identified on May 29 is resolved. Mitigating signals still in place: all 5 subscribed Security products qualified for Top Rated 2026 (May 21), Security Copilot #1 in Security Analytics, market report drafts delivered to PMMs May 13-15, bi-weekly reporting cadence with Lakshmi running smoothly. Next: execute SOW paperwork ahead of August 1 renewal date.",
        "pulseDate": "2026-06-03"
      },
      {
        "opp_id": "006RN00000HtoAUYAZ",
        "csm": "Pam Huck",
        "name": "Renewal - Microsoft - Americas Region - CAIP Install  + Time Series 2026",
        "arr": 675000,
        "contract_end": "2027-03-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "On the May 20 HG/Microsoft Pricing Discussion, Mark Fell presented pricing options including annual and multi-year (3-year and 5-year) terms, with a credit carryforward mechanism to roll unused Azure CAIP value into a consolidated contract. Paulina Mayorga (Procurement) is open to a multi-year contract and signaled clear preference: \"let's invest better, let's do better decisions.\" She is actively tin-cupping budget across the BUs (Deb, Nick, Ralph, Mala, Kim, plus Takeshi in marketing) to assemble how the consolidated renewal and Fully Frontier expansion will be funded across the organization. Mitigating concern: ongoing reorgs and budget compression make her cautious on out-year risk; HG committed to creative multi-year structuring. Next steps: Mark to share recording + deck; Paulina to bring recommendation back to business stakeholders; close before June 30.",
        "pulseDate": "2026-05-29"
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
    "lastOutbound": "2026-04-25",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-05-31",
    "latestPulseDate": "2026-06-02",
    "opportunities": [
      {
        "opp_id": "0063o000019U3i0AAC",
        "csm": "Rani Guy",
        "name": "HG Cloud Consumption - Kumar / Aswin / Dies",
        "arr": 97500,
        "contract_end": "2026-05-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Got a positive indicator from Aswin, our decision maker that he kicked of the procurement process internally at HPE for the renewal. Adrian share a 3 year contract which will where we start our negotiations. We will know more once the first procurement meeting is scheduled. Will follow up on Wed or Thursday with the HPE team",
        "pulseDate": "2026-06-02"
      },
      {
        "opp_id": "006RN00000OpsX2YAJ",
        "csm": "Rani Guy",
        "name": "TR - Juniper Networks - CVP x2  Lead Acceleration x2 - 06.30.2025",
        "arr": 80000,
        "contract_end": "2026-06-29",
        "deal_type": "New Subscription",
        "pulse": "Poor",
        "pulseNote": "Leads were never delivered. Juniper no longer exists. CVP never set up. This will churn",
        "pulseDate": "2026-06-01"
      },
      {
        "opp_id": "006RN000002vQHZYA2",
        "csm": "Rani Guy",
        "name": "HPE - HG Universe Renewal (Install + Account and Relative Spend File) - Year 3 Opt Out Deci2025",
        "arr": 1010772,
        "contract_end": "2028-10-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Status: TrustRadius buyer intent data is under active evaluation by Dies Varghese, Aswin Govindaraj, and Tarun Agarwal. The current agreement (three intent categories, two customer voice programs) runs through June 30, 2026. HPE has not yet gained sufficient understanding of the methodology, scoring, or integration options to make a renewal decision.\n",
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
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-05-29",
    "opportunities": [
      {
        "opp_id": "0063o000019RefTAAS",
        "csm": "Pam Huck",
        "name": "Oracle - Renewal - 100 vendors and NA IT spend only",
        "arr": 1000000,
        "contract_end": "2026-11-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 29, 2026 | PH — Oracle Renewal Update\n\nExecutive Summary:\nProductive May sync with Karin and Joe — strategy unchanged (OCI, on-prem-to-cloud, GTM analytics) but Oracle still working through post-layoff org churn, and internal vendor ownership of external data. Karin/Joe have a value drivers + investment recommendations memo sent internally and are strong sponsors of HG. Karin requested a QBR within the next month (reuse Dec framework + additional value add convo on contact data and TAM/relative IT spend),  Karin will circulate the July 20 Bay Area EBR to the right Oracle execs. Paulette approved V2 migration; she wants to understand file structure before Gaurav builds consumption architecture, Pam to coordinate planning call. Unity conversations continue — Mark shared the Anthropic/OpenAI marketplace launches (~1k signups in 72 hrs on Anthropic). ",
        "pulseDate": "2026-05-29"
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
    "lastOutbound": "2026-04-25",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-09",
    "latestPulseDate": "2026-05-13",
    "opportunities": [
      {
        "opp_id": "006RN00000NZfkcYAD",
        "csm": "Nick Johnson",
        "name": "Siemens - MCP & Agent Opp. MK",
        "arr": 50000,
        "contract_end": "2026-09-09",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — last pulsed Apr 8. MCP/Agent pilot at $50K likely to be rolled into the main DISW opportunity at renewal. Positive experimentation around agents and programmatic data access. Contract ends Sep 2026. Next step: Confirm rollup plan with Siemens team ahead of Sep renewal.",
        "pulseDate": "2026-05-11"
      },
      {
        "opp_id": "006RN00000NcIGPYA3",
        "csm": "Nick Johnson",
        "name": "Siemens Corporate Strategy / Market Intelligence",
        "arr": 50000,
        "contract_end": "2026-12-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "First pulse for Siemens Corp Strategy/MI, establishing baseline at Healthy. Expansion won Sep 2025 ($50K), in onboarding. Celeste Blythe (champion) engaged. Platform trial arranged by Angus Hyams. Org-level pulse is Extremely Satisfied. Contract ends Dec 2026. Next step: Follow up on platform trial outcomes; ensure MI use case is delivering value.",
        "pulseDate": "2026-05-11"
      },
      {
        "opp_id": "0063o000019TLy3AAG",
        "csm": "Nick Johnson",
        "name": "Renewal - Siemens AG- DISW Global 2024",
        "arr": 546000.01,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Nick Johnson held a 60-min Teams RGIP onboarding session on May 12 (16:00 PT) with Siemens DISW team. Session covered Market Analyzer, Sales Copilot, AI-driven account prioritization, and CRM integration. Next steps include scoring model setup sessions with Pat Loftus, Kaden Muneer, and Christina Villar.",
        "pulseDate": "2026-05-13"
      },
      {
        "opp_id": "006RN00000Him8oYAB",
        "csm": "Nick Johnson",
        "name": "SIemens - Time Series for Churn Mitigation",
        "arr": 242499.75,
        "contract_end": "2026-12-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "First pulse for Siemens Time Series, establishing baseline at Healthy. Expansion won Sep 2025 ($242K), in onboarding. Jeff Wymer (champion) engaged. Scoped pilot proposal reviewed with Colin and Mitchell. Org-level engagement is strong with multiple recent touchpoints. Contract ends Dec 2026. Next step: Ensure time series data delivery is meeting expectations; check in on churn mitigation use case progress.",
        "pulseDate": "2026-05-11"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-10-01",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "006RN000001HfpNYAS",
        "csm": "Nick Johnson",
        "name": "Infor - Bain Money Mapping Universe Expansion",
        "arr": 690000,
        "contract_end": "2026-10-01",
        "deal_type": "Amendment",
        "pulse": "Healthy",
        "pulseNote": "5/15 NJ: Infor — HG onsite debrief check-in (5:00 AM PT, 30 min). SFDC calendar event confirmed; no Weflow recording captured. Nick Johnson held an internal/onsite debrief session with the Infor team. Ongoing engagement following TAM modeling work and Snowflake integration progress. Account remains in an active, collaborative phase ahead of Oct 2026 renewal.",
        "pulseDate": "2026-05-16"
      },
      {
        "opp_id": "006RN000004pPdEYAU",
        "csm": "Nick Johnson",
        "name": "Infor - Salesforce Connector",
        "arr": 62666.67,
        "contract_end": "2026-10-01",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "First pulse for Infor SF Connector, establishing baseline at Healthy. Expansion won Jul 2024, contract ends Oct 2026. Champion Nancy Tonelli engaged. Decision made to drop SF connector and reallocate budget per Apr 16 pulse on main opp — this may affect this specific opportunity at renewal. Worth monitoring but no immediate risk. Next step: Clarify impact of SF connector budget reallocation on this contract's renewal.",
        "pulseDate": "2026-05-11"
      },
      {
        "opp_id": "006RN00000Oq7fUYAR",
        "csm": "Nick Johnson",
        "name": "TR - Infor - CVP, Lead Acceleration, Intent Data Trial - 11.07.2025 (Auto Renewal)",
        "arr": 30000,
        "contract_end": "2026-11-06",
        "deal_type": "Renewal",
        "pulse": null,
        "pulseNote": null,
        "pulseDate": null
      },
      {
        "opp_id": "006RN00000S6757YAB",
        "csm": "Nick Johnson",
        "name": "Ben Beadle - MK Expansion Dec 25",
        "arr": 69999,
        "contract_end": "2027-01-16",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "First pulse for Infor MK Expansion, establishing baseline at Healthy. Expansion closed Dec 2025, in onboarding. Org-level engagement is strong. No risks flagged on this opportunity. Leo demoed and shared contract options with Ben and wider team. Next step: Continue onboarding and ensure value realization against expansion goals.",
        "pulseDate": "2026-05-11"
      },
      {
        "opp_id": "006RN00000SErIsYAL",
        "csm": "Nick Johnson",
        "name": "TR - Infor - CVP 11.07.2026",
        "arr": 30000,
        "contract_end": "2027-11-06",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "First pulse for Infor CVP, establishing baseline at Healthy. Contract won Jan 2026, in onboarding phase. Org-level pulse is Extremely Satisfied. No risks flagged. Renewal not until Nov 2027 — plenty of runway. Org recently had HG onsite debrief (Apr 6 note). Next step: Ensure CVP campaign launch and review collection are on track.",
        "pulseDate": "2026-05-11"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-08-31",
    "latestPulseDate": "2026-06-02",
    "opportunities": [
      {
        "opp_id": "0063o000019kdvRAAQ",
        "csm": "Rani Guy",
        "name": "NetApp - Renewal of FY'23 Bridge Agreement",
        "arr": 840680.33,
        "contract_end": "2026-08-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "NetApp is engaged. They have been heads down with planning to get accounts assigned to sellers. List of accounts not matched and matched shared by Ryan and team. Ticket submitted and Tracy, Yuan and Vibhu all tagged on ticket and in slack channel for help. Methodology shared. Once we determine how we can improve matching from 30% to 50% and ideal match is 80% we can then move to wallet share and 15K account list match improvements",
        "pulseDate": "2026-06-02"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-10",
    "latestPulseDate": "2026-04-30",
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
        "pulse": "Healthy",
        "pulseNote": "29 Apr '26 : NJ | Veeam - HG Insights - Databricks Ingestion (30 min, Zoom)\n\nTechnical session focused on transitioning Veeam's HG data delivery from S3 to Databricks Delta Sharing. Architecture committee approval required internally; ETA for implementation is week of May 11–18. Nick and Angus Hyams coordinating with Veeam's Joel and Victor. Positive engagement — customer proactively driving the integration upgrade.",
        "pulseDate": "2026-04-30"
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
    "lastOutbound": "2026-04-17",
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
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-13",
    "latestPulseDate": "2026-06-02",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukRYAR",
        "csm": "Rani Guy",
        "name": "TR - Workday Adaptive Planning - CVP, Cat. Pulse, Intent Data Trial,  IDL - 06.14.2025",
        "arr": 30000,
        "contract_end": "2026-06-13",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Good feedback from Rasmi on the leads and we identified the actual decision maker, Andrea. Mardigan is trying to schedule a call with her to discuss the renewal. I continue to follow up on a different thread. ",
        "pulseDate": "2026-06-02"
      },
      {
        "opp_id": "006RN00000Opp6EYAR",
        "csm": "Rani Guy",
        "name": "TR - Workday Adaptive Planning - Form BANT with Callback Leads + Cat Intent Data - 06.14.2025",
        "arr": 45000,
        "contract_end": "2026-06-13",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "Good feedback from Rasmi on the leads and we identified the actual decision maker, Andrea. Mardigan is trying to schedule a call with her to discuss the renewal. I continue to follow up on a different thread. ",
        "pulseDate": "2026-06-02"
      },
      {
        "opp_id": "006RN00000BwbCFYAZ",
        "csm": "Rani Guy",
        "name": "Renewal - Workday - WW Data Feed 2025",
        "arr": 740250,
        "contract_end": "2026-09-14",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Good momentum across Workday. FAI sample file is being considered to include to improve the ML models for the team that sits under Winston. ED&A team are engaged and leveraging the data from the platform and the Snowflake delivery of the data. Also identified the right person to buy contacts. Engaged with a new part of the org. Sales\nAndrea Poljakovic-Rozran, Senior Manager, North America Medium Enterprise & Strategic Demand Operations\nAlexa Brown, Senior Regional Manager\nCaitlin Taylor Wolfenden, Principal Regional Marketing Manager\nKyle Hillstead, Director, Regional Marketing. Databricks data feed delivery currently being scoped with solutions and Engineering team from Workday and HG Insights. Next step, schedule call with Tracy and Workday to answer their technical questions around the FAI data set.",
        "pulseDate": "2026-06-02"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-05-03",
    "latestPulseDate": "2026-04-27",
    "opportunities": [
      {
        "opp_id": "0063o000019l7eyAAA",
        "csm": "Atisha Waghela",
        "name": "Renewal-PANW-Central Analytics",
        "arr": 747928,
        "contract_end": "2026-05-03",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Customer is engaging but we have been facing the time crunch. \nSweta who was supposed to be evaluating MCP for sales workbench is not available until after renewal date. Therefore, we are pushing for a call with Prasanna to ensure we get the renewal through as per the contract end date.",
        "pulseDate": "2026-04-27"
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
    "lastOutbound": "2026-04-24",
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
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-09",
    "latestPulseDate": "2026-06-04",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukjYAB",
        "csm": "Rani Guy",
        "name": "TR - Cloudflare - Ultimate+, Intent Data x5,  Key Claims Report - 06.10.2025",
        "arr": 77912.49,
        "contract_end": "2026-06-09",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Brooke confirmed she will pushing the PO through Cloudflare's new system soon.",
        "pulseDate": "2026-06-04"
      },
      {
        "opp_id": "006RN00000Aq8YQYAZ",
        "csm": "Rani Guy",
        "name": "Cloudflare renewal + 10% Get Cur2025",
        "arr": 286405.47,
        "contract_end": "2026-07-13",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "We had good momentum before the RIF 3 weeks ago. Robert has not responded to my emails to reschedule the onsite in NYC. My next step is to put together a renewal contract and include the growth in credits that they need to expand their data feed. I emailed Robert twice last week and will follow up with him again on Thursday.",
        "pulseDate": "2026-06-02"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-29",
    "latestPulseDate": "2026-06-02",
    "opportunities": [
      {
        "opp_id": "006RN00000OF76fYAD",
        "csm": "Rani Guy",
        "name": "Lenovo - LATAM (Gianmarco, Olivia and Grant)CMO Americas",
        "arr": 120000,
        "contract_end": "2026-12-29",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Liam from solutions did not set up their data feed before he left. Luckily I reached out to check in with them and they flagged this to me. We have their feed up and running and are now back on track. Next step is to schedule a check in QBR at the end of July to get an update from the OneSix team working on the scoring model. ",
        "pulseDate": "2026-06-02"
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
        "opp_id": "0063o000019ldZdAAI",
        "csm": "Rani Guy",
        "name": "Lenovo - Data Feed \"Sphere\" Project",
        "arr": 2500000,
        "contract_end": "2029-05-15",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2028-12-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000GhtPrYAJ",
        "csm": "Atisha Waghela",
        "name": "Renewal - Optiv - 2026",
        "arr": 685997.15,
        "contract_end": "2028-12-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "lastOutbound": "2026-04-17",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-27",
    "latestPulseDate": "2026-04-27",
    "opportunities": [
      {
        "opp_id": "006RN00000FrgZxYAJ",
        "csm": "Atisha Waghela",
        "name": "Renewal - Databricks 2025 Ren2026",
        "arr": 663284,
        "contract_end": "2027-01-27",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Working with Tyler to get a call scheduled for Databricks internally and then with customer",
        "pulseDate": "2026-04-27"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-29",
    "latestPulseDate": "2026-06-02",
    "opportunities": [
      {
        "opp_id": "006RN00000C6rifYAB",
        "csm": "Rani Guy",
        "name": "Renewal - Hitachi - FAI & Intent 2025",
        "arr": 122400,
        "contract_end": "2026-09-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Good EBR with Anders but we need more engagement across Hitachi. Shared an overview of RGIP so that Anders will share with Nathan who is in Sales and the right persona for the RGIP Copilot. Will follow up with Anders on the feedback from Nathan and ask for intro on Friday. Still challenges around the V3 intent file with Alexi from solutions is involved in helping solve the issues.",
        "pulseDate": "2026-06-02"
      },
      {
        "opp_id": "0063o000019Sj7OAAS",
        "csm": "Rani Guy",
        "name": "Renewal - Hitachi Vantara - Universe- XaaS 2023",
        "arr": 500000,
        "contract_end": "2026-10-23",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Good EBR with Anders but we need more engagement across Hitachi. Shared an overview of RGIP so that Anders will share with Nathan who is in Sales and the right persona for the RGIP Copilot. Will follow up with Anders on the feedback from Nathan and ask for intro on Friday. Still challenges around the V3 intent file with Alexi from solutions is involved in helping solve the issues.",
        "pulseDate": "2026-06-02"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-31",
    "latestPulseDate": "2026-06-08",
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
        "pulse": "Healthy",
        "pulseNote": "Two active HG talk tracks with Adobe in progress. India Greenfield scoring (Abhishek) is at the feedback stage post-leadership presentation — Sumit (India Sales Ops) has the top 10 accounts and has been asked to respond within 30 days; this is now slightly overdue due to quarter-end. Adobe Private Capital (Simant) is a fresh expansion track — Simant formally moved to a new APC role and the scoping meeting for PE portfolio data (15K portcos across ~100 GPs) is happening today, June 9. Mark has also made contact with Bob Yang (VP AI Transformation) and Glenn Denning outside these two tracks.\n\nTimeline (last 3 months):\n- Apr 14: GTM Tool Review — Greenfield scoring methodology session; Man Hon Ding joined for the first time (Divyam, David Crossman, Abhishek, Simant)\n- May 5: GTM Tool Review — data scoring discrepancies addressed (Paytm, Aditya Birla); Simant first mentioned Adobe Private Capital interest\n- May 6–7: India leadership presentation to marketing + BDR leadership; Sumit (India Sales Ops) asked to return top 10 accounts within 30 days\n- May 13: Monthly Strategic Sync — Simant confirmed he formally moved to APC; Abhishek confirmed India Sales Ops now holds the list; Mark disclosed Bob Yang + Rehman Rashid attended HG CDAO dinner May 14\n- May 19: Mark shared India scoring Lovable app (adobe-india.lovable.app) with Adobe-side team for visibility\n- May 28–29: Abhishek flagged quarter-end is slowing India Sales Ops response; Sumit feedback still outstanding\n- Jun 2: Simant \"New Role Discussion\" call — APC scope defined (RGIF + Pitchbook → Databricks, PE portco targeting); KP Pindle + David Crossman + Rob Nute + Mark briefed and building sample\n- Jun 4: KP Pindle delivered APC Lovable deck (hg-adobe-private-capital.lovable.app) to Mark\n- Jun 8: Simant cancelled the existing GTM Tool Review cadence — to be reset post June 9 APC call\n- Jun 9 (today): Adobe Private Capital meeting — Simant + cljackso@adobe.com; Divyam, Mark, David Crossman, Rob Nute attending\n\nPositives:\n- India Greenfield scoring presented to leadership and well-received; positive outcome will secure platform renewal + open expansion\n- Adobe Private Capital is a net-new expansion track — Simant's new role opens up PE portco targeting use case (15K companies, RGIF + Pitchbook fit) with today's APC meeting as the formal scoping kick-off\n- Mark has successfully multi-threaded: Bob Yang (VP AI Transformation) + Rehman Rashid (Head GTM Finance) attended HG CDAO dinner; HG CEO meeting with Glenn Denning + Man Hon Ding offered for June 10 in London\n\nNegatives:\n- India Sales Ops (Sumit) feedback on top 10 accounts is overdue — 30-day window has passed with quarter-end cited as reason; no confirmed response date\n- No senior sponsor above Abhishek formally briefed on HG — Jill (EMEA head, new structure) and Glenn Denning not yet engaged\n- Bob Yang (VP AI Transformation) still unresponsive — Ravi texted June 2, no reply; Americas engagement broadly stalled per Mark\n\nNext Steps:\n- HG (Divyam): Post June 9 APC call — document next steps with Simant/cljackso on data sample, cadence, and commercial path\n- HG (Divyam): Chase Abhishek for Sumit feedback on India top 10 accounts; propose a mid-June milestone check\n- HG (Mark/Divyam): Follow up on HG CEO London meeting (June 10) with Glenn Denning + Man Hon Ding — no response confirmed yet\n- Adobe (Abhishek): Get Sumit's feedback on top 10 India accounts and feed back into the scoring refinement cycle\n- Adobe (Simant + cljackso): Confirm APC data requirements, delivery format (RGIF → Databricks), and timeline post today's call\n\nSolutions/Product/Jira:\n- SE David Crossman and Rob Nute actively supporting the APC data sample build and India scoring methodology\n- KP Pindle built both the India scoring Lovable app and the APC deck/Lovable\n- HG integrating into Microsoft Sales Agent / Azure Marketplace — Stage 3-4 of 5 complete; blog announcement expected July 2026 (relevant as Adobe runs Copilot/Sales Agent in beta)\n- No open Jira tickets (confirmed via search)\n- Jira Epic: HG-4570",
        "pulseDate": "2026-06-08"
      },
      {
        "opp_id": "006RN00000Oq7eqYAB",
        "csm": "Riley Rogers",
        "name": "TR - Adobe - CVP x5 - 01.01.2026 (Written Renewal)",
        "arr": 420347.22,
        "contract_end": "2026-12-09",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   Awards work is on track. Top Rated badges should be ready to send in 1–2 weeks, with June 10 as the announcement prep deadline. Most products were described as being in a good spot after Adobe Summit.\n    \n-   Adobe is deprioritizing review-driving for now because Alyson’s team is focused on campaign execution across LinkedIn, Meta, and Google Ads. Review work is staying in maintenance mode unless resourcing changes.\n    \n-   Adobe Experience Manager analysis is still in progress on Riley’s side, with a plan to discuss it in two weeks.\n    \n-   A new internal contact, Garrett Ruiz, is taking over content updates at Adobe and already has access to what he needs.\n    \n-   Overall pulse: stable account, positive on awards, but limited near-term capacity for new review initiatives.\n    \n\nSay more",
        "pulseDate": "2026-05-13"
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
    "lastOutbound": "2026-04-22",
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2028-10-31",
    "latestPulseDate": "2026-05-11",
    "opportunities": [
      {
        "opp_id": "006RN00000DkFcWYAV",
        "csm": "Nick Johnson",
        "name": "Renewal  2024 - WG Serv2025",
        "arr": 535000,
        "contract_end": "2028-10-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Confirming Healthy — last pulsed May 6. Continued cadence with Victoria and Atul. Account satisfied with HG data and service. 3-year renewal secured (flat). Data feed taxonomy and product classification issues remain the primary blocker to expansion but do not threaten the base contract. MCP session still being planned. Next milestone: Technical workstream scheduled for next week per May notes.",
        "pulseDate": "2026-05-11"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-02-15",
    "latestPulseDate": "2026-06-01",
    "opportunities": [
      {
        "opp_id": "006RN000008SYjjYAG",
        "csm": "Varun Tiwari",
        "name": "Autodesk - Renewal  2025",
        "arr": 350000,
        "contract_end": "2026-04-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st May'26 : VT\n\nRenewal Update:\nOrder form signed for 402K ,PO awaited \n3 year deal +52K expansion\n\n\nAutodesk is evaluating HG’s operating hierarchy to understand the gap vs their current hierarchy and use it for hierarchy buildout and sales portfolio design. They asked whether HG can support account-level matching at scale across ~4M CRM records, requested more transparency into the matching methodology and confidence grading, and wanted clarity on the difference between the parent-rollup file vs the entity-level matching file. They also asked for GHQ/global company name visibility on matched entities so they can compare HG’s groupings against their current hierarchy and assess disruption if they change groupings. Address-based matching was discussed as possible, but with the tradeoff that it can reduce match volume and requires fuzzy matching. Autodesk also confirmed they still use D&B, mainly for risk-related use cases, while HG’s value is more around operational/account hierarchy.\n\n Next steps:\n\n-   Send updated matching file for 50 sample accounts with added data points\n    \n-   Add GHQ / global company name and fuller hierarchy detail\n    \n-   Add clearer matching-grade / confidence detail\n    \n-   Share official matching logic / confidence guide\n    \n-   Reanalyze the files, including whether address should be used as an added matching signal\n    ",
        "pulseDate": "2026-05-21"
      },
      {
        "opp_id": "006RN00000OrQHAYA3",
        "csm": "Varun Tiwari",
        "name": "MK - Autodesk 2026 Renewal",
        "arr": 171000,
        "contract_end": "2027-02-15",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "2nd June'26 : VT\n\nExecutive Summary:\n\nMadKudu continues to perform well within Autodesk Construction, with scoring models live for 4+ weeks and no major operational concerns. Automated workflows are delivering 50–200 qualified leads daily, and outbound teams are actively requesting additional lead volume during the Salesforce transition. The primary risk to renewal is organizational strategy—not performance—as Autodesk evaluates a long-term lead-scoring platform consolidation initiative.\n\nKey Updates:\nMadKudu models stable and operational for 4+ weeks.\nTwo automated outbound use cases delivering 50–200 leads/day.\nNo significant user complaints or support escalations.\nConstruction team recognized internally as a best-practice HG/MadKudu implementation.\nDavid on paternity leave (June 9 – Aug 31); Ana will provide coverage.\nNo major model enhancements or new initiatives planned during the summer period.\n\nDecision Points:\nMaintain a business-as-usual approach during David's leave.\nContinue supporting existing use cases and demonstrating business value.\nMonitor Autodesk's lead-scoring consolidation efforts and assess renewal implications.\nPosition HG's install base and software budget data as strategic assets independent of the scoring platform.\n\nRisks:\nPlatform Consolidation: Autodesk is exploring a unified AWS SageMaker-based scoring solution within the next 6–12 months.\n\nStakeholder Coverage: David's leave temporarily removes a key champion during an important planning period.\n\nRenewal Dynamics: Future decisions may be influenced more by enterprise strategy than current solution performance.\n\nOpportunities:\nStrong adoption and positive user feedback create a compelling success story.\nIncreased outbound demand during the Salesforce transition provides expansion opportunities.\nHG remains strategically relevant regardless of scoring platform decisions due to its differentiated data assets.\n\nNext Steps:\nComplete David-to-Ana transition and establish support coverage.\nContinue monitoring lead delivery and platform health.\nMaintain operational stability through the summer period.\nTrack Autodesk's internal scoring platform initiative and key stakeholders.\nBegin shaping the renewal narrative around adoption, business impact, and HG's unique data value.\n\nOverall Assessment\nProduct Performance\t🟢 Strong\nUser Adoption\t🟢 Strong\nOperational Stability\t🟢 Strong\nRenewal Outlook\t🟡 Moderate Risk\nStrategic Platform Risk\t🔴 High\nHG Expansion Opportunity\t🟢 Strong\n\nBottom Line: Delivery and adoption remain strong. The key focus over the coming months is maintaining operational success while navigating Autodesk's broader platform consolidation strategy and reinforcing HG's long-term strategic value.",
        "pulseDate": "2026-06-01"
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
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000XWKJzYAP",
        "csm": "Andy Lim",
        "name": "Colt - Bombora Intent",
        "arr": 150000,
        "contract_end": "2027-03-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Expansion contract signed, PO received, Bombora intent delivery cadence running smoothly (April 29 delivery confirmed). Onboarding in adoption stage with no friction signals. Confirming Healthy.",
        "pulseDate": "2026-06-10"
      },
      {
        "opp_id": "006RN00000EbDPfYAN",
        "csm": "Andy Lim",
        "name": "Renewal - Colt - renewal 2023-2024 - Logins 2026",
        "arr": 364555,
        "contract_end": "2028-12-16",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Just renewed Jan 2026 as a 3-year deal, SFDC pulse \"Extremely Satisfied,\" monthly sync with Shishir established. Four warm leads from Supriya at the March HG Insider session (Sales Copilot, RGIP Whitespace, Account Targeting, Install Overview file) — all \"🤩 Excited! Would love to use it\" — are in active follow-up. SSO implementation progressing in parallel. Account is stable with multiple expansion threads building. Confirming Healthy.",
        "pulseDate": "2026-06-10"
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
    "lastOutbound": "2026-04-15",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-01",
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000LD4L5YAL",
        "csm": "Andy Lim",
        "name": "SAS Team - MI Licenses",
        "arr": 56250,
        "contract_end": "2027-01-01",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "MI contract closed Oct 2025 ($75K, 15-month term) — customer chose to invest more mid-contract. Steven White driving active TAM/SAM/SOM use case for Fraud/Risk and synthetic data markets. Third MI license activated for Alex Moore (Feb 11). Weekly cadence with Adrian and Steven held through April 29. Confirming Healthy.",
        "pulseDate": "2026-06-10"
      },
      {
        "opp_id": "006RN000004BD65YAG",
        "csm": "Andy Lim",
        "name": "Renewal - SAS-Max CI team 2025",
        "arr": 404000,
        "contract_end": "2027-01-01",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Weekly cadence has held continuously through April 29 with Adrian Carr and Steven White actively engaged. Adrian reported on April 1 that he's \"getting a little bit of traction\" with multiple SAS teams requesting ICP-based whitespace lists. Platform usage at 178% of baseline (400K entities consumed) — strong organic adoption signal. SAS Innovate 2026 announcements on Viya Copilot and agentic AI create direct alignment opportunity for the MountKudu co-pilot pitch already in motion. Third-party security re-assessment completed Dec 2025 with all documentation accepted. Confirming Healthy.",
        "pulseDate": "2026-06-10"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7elYAB",
        "csm": "Nick Johnson",
        "name": "TR - Red Hat - CVP x3, IDL, Market Report, Intent - 01.01.2026",
        "arr": 250500,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   **Summit is the immediate priority.** Link delivery is still pending; Riley committed to get Brianna what she needs by **end of day tomorrow**. Brianna said they need the link before pre-Summit web pages and email nurtures go out.\n    \n-   **Buyer’s Choice tracking is in motion.** Brianna confirmed the team is focused on four products only, and Summit should drive a meaningful batch of reviews. Current timing is favorable since new reviews can support both **Buyer’s Choice 2026** and **Top Rated 2027**.\n    \n-   **OpenShift Virt is unlikely to qualify this cycle, but positioning is manageable.** Brianna said the team had pushed hard because she wanted to avoid “all but one” messaging in announcements, but they can work around it this year and package it more cleanly next year.\n    \n-   **Lead gen looks unblocked.** Brianna said Red Hat approved use of the PAI account list after earlier overlap concerns with other teams, which she sees as a big factor for moving the program forward.\n    \n-   **Campaign sequencing is becoming clearer.** Brianna said Ansible is furthest along, and the working approach is to launch there first, then roll OpenShift and RHEL out as those reports are completed.\n    \n-   **Near-term risk is mostly timing, not strategy.** Summit prep is slowing feedback and approvals, but Brianna sounded aligned on the plan and expects momentum to pick up once Summit is behind them.",
        "pulseDate": "2026-05-06"
      },
      {
        "opp_id": "006RN00000G26uZYAR",
        "csm": "Nick Johnson",
        "name": "Red Hat Global Spend Files  2026",
        "arr": 200000,
        "contract_end": "2028-11-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 15, 2026 | NJ — Red Hat Inc: Time Series & Cross-Sell Strategy (Weflow confirmed)\n\nNick Johnson held a 30-min Zoom call at 7:30 AM PT with Julia (Red Hat data science team). Augie Buettner (AM) also participated.\n\nKey topics:\n- Time series data use cases: approximating competitor renewal windows for OpenShift cross-sell motion\n- Churn prevention use cases for OpenShift leveraging install time series\n- HG spend data discussed as leading indicator for competitive displacement\n\nAccount remains Healthy. Biweekly cadence solid, Red Hat data science team actively developing new use cases with HG time series data. PO received in March, 3-year renewal secured. Strong strategic engagement continues.",
        "pulseDate": "2026-05-16"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Be9O1YAJ",
        "csm": "Nick Johnson",
        "name": "Renewal - UKG_2024_Data-feed_Addition",
        "arr": 178500,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Nick Johnson participated in a 60-min Teams automation discussion with UKG (5:00 PM PT). No transcript available; attributed to account CSM. Longer-form strategic session covering HG automation capabilities.",
        "pulseDate": "2026-05-15"
      },
      {
        "opp_id": "006RN00000G9DpdYAF",
        "csm": "Nick Johnson",
        "name": "4 read only licences",
        "arr": 7333.33,
        "contract_end": "2027-03-02",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "First pulse for UKG Read-Only Licences, establishing baseline at Healthy. Small expansion ($7K ARR) closed Mar 2026 to provide greater visibility within the organization. Barbie signed off. Aligns with broader strategy to expand HG footprint across UKG teams. No risks. Next step: Ensure read-only users are onboarded and actively using the platform.",
        "pulseDate": "2026-05-11"
      },
      {
        "opp_id": "006RN00000Oq1L8YAJ",
        "csm": "Riley Rogers",
        "name": "TR - UKG - Ultimate, Category Intent Data, Event Support,  Customer Stories - 10.22.2024",
        "arr": 261600,
        "contract_end": "2027-10-21",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "",
        "pulseDate": "2026-04-23"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-31",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukJYAR",
        "csm": "Riley Rogers",
        "name": "TR - Zscaler - CVP x4, IDL,  Cat Intent Data x6 - 08.01.2025",
        "arr": 300000,
        "contract_end": "2026-07-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "-   **New owner / transition:** Riley is taking over the Intuit QB Desktop Enterprise relationship from Heidi. Andrew Lum is the main contact and owns Desktop Enterprise, while also helping move suitable customers into IES and QBO Advanced.\n    \n-   **What Andrew cares about:** His goals are customer retention, new customer acquisition, and migration of desktop customers to online products. He does **not** have direct KPI targets tied to review volume or sentiment.\n    \n-   **Award / review status:** Desktop Enterprise qualified for the 2026 Top Rated award with 19 reviews by the April 26 cutoff. Next milestone is **10 new reviews by September 26** for Buyer’s Choice eligibility. May–September is the key window because reviews count toward both programs.\n    \n-   **Campaign readiness:** There is at least **$500** in review campaign budget available, though Riley should confirm whether the renewal reset restored it closer to **$1,000**. Standard campaign flow is a 3-email sequence using a customer list and typical incentives of **$25 / $25 / $50**.\n    \n-   **Risk / hesitation:** Andrew is cautious about launching a campaign immediately because Intuit customers have recently received heavy communications, including pricing increases. His concern is message fatigue and negative reaction to more outreach.\n    \n-   **Best near-term path:** Revisit campaign timing in **mid-summer**, when current communication pressure may ease. If they move forward, likely targeting options are recent onboarding cohorts, specific industries, or lookalike audiences from adjacent Intuit products.\n    \n-   **Scale / feasibility:** Andrew said the Desktop Enterprise base is **200,000+ active customers**, so sourcing enough contacts should not be the issue. Using the rough **3% response rate**, the review goal appears achievable with a well-targeted sample.\n    \n-   **Operating cadence:** They set a **bimonthly sync**, with the next meeting scheduled for **July 8 at 9:30 AM PT / 12:30 PM ET**.\n    \n-   **Forward-looking value:** Riley previewed upcoming **AEO/GEO-style citation tracking** capabilities, which Andrew was interested in as a way to understand how review content is being surfaced and cited.\n    \n\nSay more",
        "pulseDate": "2026-05-13"
      },
      {
        "opp_id": "006RN00000CGRF5YAP",
        "csm": "Varun Tiwari",
        "name": "zScaler",
        "arr": 124915,
        "contract_end": "2026-12-30",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Riley Rogers (cross-coverage) participated in a 30-min Zoom contract conversation with ZScaler (1:30 PM PT). Anderson Duncan (AM) also present. Discussion focused on TrustRadius product split and contract structure. Note: ZScaler is assigned to Varun Tiwari; Riley provided cross-coverage support.",
        "pulseDate": "2026-05-15"
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
    "lastOutbound": "2026-04-15",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-08-26",
    "latestPulseDate": "2026-06-05",
    "opportunities": [
      {
        "opp_id": "006RN000008eV3hYAE",
        "csm": "Varun Tiwari",
        "name": "Zendesk - U.S. Data Feed",
        "arr": 319999.99,
        "contract_end": "2026-08-26",
        "deal_type": "Expansion",
        "pulse": "Poor",
        "pulseNote": "5th Jun'26 : VT\n\nDespite multiple outreach attempted by Me,Ravi and James there is not much responses from Andrew Kirby which puts the renewal at high risk.\n\nThough Andrew Kirby has confirmed the usage of HG's data to Bulls eye project after that he went dark to Ravi as well.\n\nJames is trying to invite Andrew to an event in London and Ravi is also attempting to map more stakeholders from Zendesk who can speak to us directly regarding the data feed value and renewal ",
        "pulseDate": "2026-06-05"
      },
      {
        "opp_id": "006RN00000OpukMYAR",
        "csm": "Varun Tiwari",
        "name": "TR - Zendesk Suite - CVP - 08.28.2025",
        "arr": 30000,
        "contract_end": "2026-08-27",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "23rd Ap'26 : VT\n\nExecutive Summary\n\nDiscussion focused on enabling Forethought profile access, and preparing for the August renewal cycle. Review momentum from recent HGI outreach campaigns was noted, supporting eligibility for Top Rated and Buyer’s Choice awards. \nAgreed to align early on Forethought positioning (integrated vs. standalone) and involve the new Account Manager and leadership ahead of renewal planning.\n\nKey Highlights\n-Joyce requested access to the Forethought profile; Riley to enable access. (Done)\n\n-Zendesk currently eligible for Top Rated & needs 3 more reviews before Sep '26 to become eligible for Buyer’s Choice awards\n\nHGI Recent outreach campaign activity driving incremental reviews(6)\n\nAugust renewal approaching; early alignment needed on services scope.\n\n\nNext Steps:\n-Provide Forethought profile access to Joyce(Done)\n -Coordinate early access discussion for geo-tracking feature (Q2 launch). Varun to check internally at HGI\nVarun Tiwari: Invite James (VP) and new Account Manager to upcoming renewal alignment call.\nJoyce: Confirm Forethought positioning (Zendesk-integrated vs standalone) before June.\nVarun Tiwari: Present renewal options + roadmap discussion ahead of renewal conversation.\nJoyce: Check with community team on outreach program relaunch timing (suggested to launch after May 1).",
        "pulseDate": "2026-04-23"
      },
      {
        "opp_id": "006RN00000EMx2zYAD",
        "csm": "Varun Tiwari",
        "name": "Renewal - Zendesk - MI Team Opp Gen 2025",
        "arr": 52231.6,
        "contract_end": "2027-11-24",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "5/15 VT: Zendesk — Bi-Weekly Sync (9:00 AM PT, 30 min). SFDC calendar event confirmed; no Weflow recording captured. Varun Tiwari held the bi-weekly sync with Zendesk (Rodrigo/Stephen — MI team). This is a positive engagement signal on the smaller platform contract (renewed Dec 2025, 2-year). However, the larger data feed contract with Andrew Kirby remains dark since the Q4 QBR — Andrew not responding. Maintaining Concerning on this opportunity given stalled engagement on the larger contract and unclear 2026 direction.",
        "pulseDate": "2026-05-16"
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
    "latestPulseDate": "2026-05-04",
    "opportunities": [
      {
        "opp_id": "006RN00000BoWhWYAV",
        "csm": "Divyam Dewan",
        "name": "CrowdStrike - Marketing Ops",
        "arr": 400000,
        "contract_end": "2027-03-16",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Account has had limited engagement on the HG platform over the past few months. A re-engagement effort was made earlier in the year to reconnect with the team, but follow-through has been inconsistent. Core HG use cases (ICP, product propensity, AI model inputs) remain relevant to their GTM, but there is no active cadence in place and platform adoption has been minimal.\n\nQ4 2025: Champion transition; engagement declined\nQ1 2026: Re-engagement initiated by team; use cases confirmed as relevant\nApr 2026: No confirmed active cadence or follow-up meeting\n\nPositives:\n\nHG data confirmed as relevant for ICP scoring, product propensity, and AI model inputs\nMonthly data feed running without issue\n\nNegatives:\n\nNo regular meeting cadence established; engagement is inconsistent\nSFDC integration still pending — a key capability not yet activated\nPlatform export activity minimal\n\nNext Steps:\n\nHG: Re-establish contact and book a working session to review active use cases\nHG: Get status update on SFDC integration and propose a path to activation\nCrowdStrike: Confirm point of contact for ongoing HG engagement",
        "pulseDate": "2026-05-04"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-31",
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Opul7YAB",
        "csm": "Brett Castonguay",
        "name": "TR - ADP - Ultimate x3 - 02.01.2025",
        "arr": 194400,
        "contract_end": "2027-01-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Three active TR product lines (RUN, WFN, SmartCompliance) under contract through Jan 2027 with strong rankings — SmartCompliance qualified for Top Rated 2026 at TR 8.4, RUN holding TR 9.1. Monthly cadence with Patrick Swisher is consistent and Jeff Livingston joined the April 2 WFN call. CSM transition is on track with Brett walking me into the account end of April. Confirming Healthy.",
        "pulseDate": "2026-06-10"
      },
      {
        "opp_id": "006RN000001IGqbYAG",
        "csm": "Andy Lim",
        "name": "ADP Renewal+ Upside  2025",
        "arr": 201600,
        "contract_end": "2027-09-07",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "ADP committed to a 2-year renewal at $403K/year in Sep 2025, locking in the data feed relationship through 2027. V2 SFTP migration is progressing — Lukasz confirmed connection working May 6, test files placed May 11, automated 2-hour pulls staged. SSO configuration ready to activate (May 7). ADP has described HG as their \"preferred vendor\" and \"foundation of GTM,\" and corporate financial health is strong (Q3 FY2026 +7% revenue). New account team forming on both sides creates an opportunity to reset the relationship around AI use cases. Confirming Healthy.",
        "pulseDate": "2026-06-10"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-05-19",
    "latestPulseDate": "2026-04-30",
    "opportunities": [
      {
        "opp_id": "006RN000008ilHyYAI",
        "csm": "Atisha Waghela",
        "name": "Renewal - Deloitte - G500 Alliance Strategic Intel 2025",
        "arr": 365908,
        "contract_end": "2026-05-19",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "29 Apr '26 : AW | Deloitte - Renewal Terms Discussion (30 min, Teams)\n\nAugie Buettner and Leo Zunz led renewal negotiation call. Terms under discussion: 10% credit buffer, Net 60 payment terms, 25K complimentary credits, no surprise invoices clause. Renewal still in negotiation — current risk is maintaining multithreading and leadership visibility amid global reorg and vendor consolidation pressure. Active deal but cautious given ongoing risk signals.",
        "pulseDate": "2026-04-30"
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
    "latestPulseDate": "2026-04-14",
    "opportunities": [
      {
        "opp_id": "006RN0000073G5pYAE",
        "csm": "Varun Tiwari",
        "name": "IFS - Intent & FAI and V2 Migration",
        "arr": 357749.5,
        "contract_end": "2026-12-05",
        "deal_type": "Amendment",
        "pulse": "Concerning",
        "pulseNote": "14th Apr'26 : VT\n\nKey Risk Signals:\n\n---Data confidence concerns remain unresolved\nTimon flagged ~50% of matched records (31K of 62K) were not DUNS-based matches\nTimon also doesn't want any CRM flags in the monthly delivery file :\n-Matched on: Name\n-Matched on: Name, URL\n-Matched on: URL\n\n---Activation gaps across key stakeholders\nJulia Soens and Federico Tondi remain in early onboarding stages (DGT & me lead couple of calls and even pitched the export license option -Federico is going to align internally first )\n\n---Competitive overlap and cost pressure\n---IFS currently evaluating overlap across multiple vendors: D&B, Demandbase, and HG Insights\nActive like-for-like comparison underway between HG and D&B technographics\nBudget scrutiny introduces renewal sensitivity ahead of Dec 5 renewal window\n---POC continuity risk\nTimon indicated potential transition away from primary ownership role\n---Creates stakeholder continuity risk during a critical pre-renewal alignment period\n\nPositive Signals:\n\n---Strong engagement cadence\n---Multiple walkthrough sessions completed\n---Quarterly sync cadence established\n---Ongoing active email engagement with stakeholders\n---Team acknowledged they are getting into a working rhythm with HG Insights\n---Growing stakeholder interest in expanding usage\n---Federico and Julia showing intent to operationalize workflows further\n---Active discussion underway around enabling export functionality\n---Data strategy optimization discussion initiated (DGT–Federico call)\n---Alignment on shifting from 10.2M broad firmographic records → focused 40K–150K higher-quality accounts(this may result in downsell)\n\nProposal includes reallocating existing budget toward:\n---deeper technographic coverage\n---improved data quality\n---export functionality enablement\n---Timon exploring expansion of technology coverage within the feed, pending IFS guidance on priority technologies\n\nClear next steps defined toward amendment scenario:\n---Federico to prepare internal requirements document covering adds/removals/changes\nDavid to prepare contract amendment options once requirements are finalized\n---Follow-up working session planned to align quickly on amendment path\n----Renewal alignment already initiated\n---Strategic renewal positioning conversation started\n---Target alignment window identified for June–July(as requested by Timon +product roadmap session )\n\nSummary Assessment:\n\nDespite strong engagement momentum and encouraging movement toward a higher-value data strategy realignment, the combination of unresolved data confidence concerns, active vendor comparison pressure, and potential champion transition risk supports maintaining a Concerning classification until matching quality confirmation and amendment alignment progress further.",
        "pulseDate": "2026-04-14"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-07-31",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "006RN00000BaG39YAF",
        "csm": "Atisha Waghela",
        "name": "Renewal - Apple - Market Intelligence 2025",
        "arr": 357600,
        "contract_end": "2027-07-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "5/15 AW: Apple — Market Intelligence Training + Platform Training Team Call (11:00 AM PT + 12:00 PM PT). SFDC calendar events confirmed; no Weflow recordings captured. Atisha Waghela ran two sequential Apple training sessions: an MI platform walkthrough and a broader platform training for the Apple team. Multi-team engagement (Product Managers, Sales Ops, Strategy) ongoing. Account scoring, wallet share, and TAM sizing workstreams active. Strong strategic account health maintained.",
        "pulseDate": "2026-05-16"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-11-07",
    "latestPulseDate": "2026-04-30",
    "opportunities": [
      {
        "opp_id": "006RN00000K0PVyYAN",
        "csm": "Atisha Waghela",
        "name": "DRT - 12 month converstion - opX",
        "arr": 350000,
        "contract_end": "2027-11-07",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "29 Apr '26 : AW | HGI & DRT: API Syncup (30 min, Zoom)\n\nBCG/DRT team exploring HG API integration via Clay for prospecting workflows. Atisha walked through the credit consumption model and intent data capabilities. Customer requested consolidated API documentation — Atisha committed to share. Active interest in expanding HG usage beyond current platform motion into API-driven prospecting.",
        "pulseDate": "2026-04-30"
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
    "lastOutbound": "2026-04-25",
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-04-11",
    "latestPulseDate": "2026-05-21",
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
        "pulseNote": "Apr 21 call with Varun Tiwari: Datadog reps are pulling back usage of Cloud Dynamics data due to data trust and accuracy concerns, specifically around SMB firmographic matching. Customer raised questions about data freshness and validation methodology that were not fully resolved on the call. Risk of reduced engagement with the Cloud Dynamics + Universe 150 package if accuracy concerns are not addressed proactively with a technical follow-up.",
        "pulseDate": "2026-04-22"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-07",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "006RN00000Lm7BCYAZ",
        "csm": "Divyam Dewan",
        "name": "TR.Dan Goss - Quadient - Marketing Leadership",
        "arr": 180000,
        "contract_end": "2026-09-07",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "5/15 DD: Quadient — Bi-Weekly Sync (7:30 AM PT, 30 min). SFDC calendar event confirmed; no Weflow recording captured. Divyam Dewan held the regular bi-weekly sync with Quadient (Ashlin, Lia/Lauren, Melvin). Review campaigns and IDL programs actively in flight. Data feed/Salesforce/Snowflake integration scoping ongoing. Strong multi-stakeholder engagement maintained.",
        "pulseDate": "2026-05-16"
      },
      {
        "opp_id": "006RN00000Oq4VOYAZ",
        "csm": "Divyam Dewan",
        "name": "TR - HG.Ziad Amira.Quadient 2025 IDL co-sell",
        "arr": 120000,
        "contract_end": "2026-10-31",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "Apr 21 call with Divyam Dewan: IDL co-sell program is advancing with active stakeholder engagement from Lia/Lauren on campaign setup and SFDC integration. Quadient's demand gen team is leaning in on IDL as a key pipeline channel, with regional splits and webhook routing being finalized. First pulse reflecting strong onboarding momentum and cross-functional alignment across Quadient's marketing and RevOps teams.",
        "pulseDate": "2026-04-22"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-04-23",
    "opportunities": [
      {
        "opp_id": "0063o000019StW1AAK",
        "csm": "Varun Tiwari",
        "name": "DXC - Global Platform Renewal 2023",
        "arr": 271999.2,
        "contract_end": "2026-11-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "22nd Apr '26 : VT\n\nApr 22 call (HGI + DXC — Intent): Productive engagement with Preethi (SalesOps) and Sunil. Discussion centered on integrating buying intent data into DXC's AI-driven account planning workflow (built on AWS QuickSight/AQS). Contract amendment discussions progressing — AWS Marketplace emerging as primary funding path. Sunil trial intent access confirmed; follow-up scoring session scheduled.\n\nKey Highlights:\n- Intent data integration into AWS Quick Suite (AQS/MCP environment) validated as priority use case\n- Contract amendment and alternative funding paths (AWS Marketplace, new business units) actively being explored\n- Preethi coordinating internally on budget approval and contract ownership transition\n- Sunil trial license active; deeper intent enablement session in progress\n\nSentiment: Positive and productive. Customer team is engaged and actively working internal blockers to sustain the HG partnership.",
        "pulseDate": "2026-04-22"
      },
      {
        "opp_id": "006RN00000CNrEQYA1",
        "csm": "Varun Tiwari",
        "name": "DXC - Add Platform (Manohar)",
        "arr": 40000,
        "contract_end": "2026-11-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "23rd Apr'26 : VT\n\nAccount Status:\n\n--Gabriella back from PTO; platform access reactivated \nCurrently catching up; no major changes during absence\n\nStrategy & Data Discussions:\n---Preethi evaluating AI agent workflow with AWS QuickSight integration (native integration expected soon) -Larger contract \n-Intent data under evaluation; DXC not currently subscribed -Larger contract \nDecision on intent expected by renewal timeframe (year-end) -Larger contract \n\nContract / Renewal:\n-Current setup: Gabriella’s $40K license under DXC (Luxoft budget cross-charge)\nExploring shift to direct Luxoft contract vs. DXC amendment to include subsidiaries\n\n\nCoverage Update:\nAugie OOO end of May (wedding); Max Shaw covering during absence as AM along with Varun \n\nNext Steps:\n\n--Gabriella: Review procurement path (DXC vs Luxoft contract structure)\n--Share intent comparison doc + Customer Insider webinar recordings\n--Team: Follow up with Prithi on AI agent strategy progress\n\nNext Checkpoint:\n\nNext quarterly touchpoint scheduled for July",
        "pulseDate": "2026-04-23"
      }
    ]
  },
  {
    "accountId": "001d000001jfEBtAAM",
    "accountName": "Accenture",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "David Garcia Thomas",
    "segment": "Strategic",
    "arr": 301875,
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-29",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN000009FKE9YAO",
        "csm": "Nick Johnson",
        "name": "Renewal - Accenture - John Walsh (Direct Use Case) 2025",
        "arr": 301875,
        "contract_end": "2026-06-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Nick Johnson led a 30-min Teams call with Accenture (9:00 AM PT). Focus: AI data points and HG capabilities. David Garcia Thomas (AM) also present. Active renewal negotiation in progress.",
        "pulseDate": "2026-05-15"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-12",
    "latestPulseDate": "2026-05-14",
    "opportunities": [
      {
        "opp_id": "006RN00000Opp6OYAR",
        "csm": "Riley Rogers",
        "name": "TR - BMC - Form BANT Leads, IDL, Cat Intent Data,  Mkt Report - 06.13.2025",
        "arr": 50000,
        "contract_end": "2026-06-12",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "May 12 '26 · RR — Customer call logged (no transcript available). Riley engaged with BMC on TrustRadius opportunity. Cadence maintained.",
        "pulseDate": "2026-05-13"
      },
      {
        "opp_id": "006RN00000JbxW3YAJ",
        "csm": "Varun Tiwari",
        "name": "BMC - Competitive Takeout Campaigns",
        "arr": 90000,
        "contract_end": "2026-06-30",
        "deal_type": "New Subscription",
        "pulse": "Poor",
        "pulseNote": "14th May '26: VT\n\n-Introductory/re-alignment session completed with David and team focused on renewal planning, -Snowflake data feed activation, and migration to the new HG platform experience.\n\nRenewal sentiment remains unclear as of now, with BMC actively evaluating how HG can support broader competitive intelligence and GTM automation initiatives(with change of economic buyer)\n\nSnowflake setup already completed and approved by BMC compliance; monthly flat-file delivery ready once final account list and 25 product selections are shared.(David and Veg has confirmed the 7 vendors but final shortlisting yet to be done)\n\nCurrent focus areas:\n-Propensity-to-migrate model (on-prem → SaaS)\n-Competitive takeout program targeting 7 competitors\n-New logo acquisition and technology discovery\n-Goal is to automate technographic insights into -Salesforce/dashboards instead of current manual OneNote tracking.\n\n-BMC also wants visibility into net-new accounts outside the current CRM using competitor install data.\n\nDavid flagged beta/new UI issues:\n-Competitive takeout copilot seen as valuable\n-Export and URL redirect functionality currently unreliable\n-Team still dependent on legacy V2 platform for exports\n-HG offered coverage analysis support to optimize final 25-product selection from a broader 100-product test set.\n-Current UI contract expires end of June; separate new UI agreement runs through October via marketing\n\nNext Steps\n-BMC to send updated account list + final 25 products\n-Augie to share commercial/pricing overview and migration details(done ) Follow up call on 15th May with David \n-Varun to share documentation and sample datasets with Vegi’s team(Done)\nFollow-up call scheduled Friday to review pricing, renewal alignment, and activation next steps\nRenewal Sentiment\n\nOverall renewal sentiment is currently unclear, with active engagement across strategic use cases and platform expansion discussions.\n",
        "pulseDate": "2026-05-14"
      },
      {
        "opp_id": "006RN00000OzFFdYAN",
        "csm": "Varun Tiwari",
        "name": "BMC - MK Add on - Anderson Duncan, Hayden Anderson",
        "arr": 32000,
        "contract_end": "2026-10-31",
        "deal_type": "Expansion",
        "pulse": "Poor",
        "pulseNote": "14th May '26: VT\n\n-Introductory/re-alignment session completed with David and team focused on renewal planning, -Snowflake data feed activation, and migration to the new HG platform experience.\n\nRenewal sentiment remains unclear as of now, with BMC actively evaluating how HG can support broader competitive intelligence and GTM automation initiatives(with change of economic buyer)\n\nSnowflake setup already completed and approved by BMC compliance; monthly flat-file delivery ready once final account list and 25 product selections are shared.(David and Veg has confirmed the 7 vendors but final shortlisting yet to be done)\n\nCurrent focus areas:\n-Propensity-to-migrate model (on-prem → SaaS)\n-Competitive takeout program targeting 7 competitors\n-New logo acquisition and technology discovery\n-Goal is to automate technographic insights into -Salesforce/dashboards instead of current manual OneNote tracking.\n\n-BMC also wants visibility into net-new accounts outside the current CRM using competitor install data.\n\nDavid flagged beta/new UI issues:\n-Competitive takeout copilot seen as valuable\n-Export and URL redirect functionality currently unreliable\n-Team still dependent on legacy V2 platform for exports\n-HG offered coverage analysis support to optimize final 25-product selection from a broader 100-product test set.\n-Current UI contract expires end of June; separate new UI agreement runs through October via marketing\n\nNext Steps\n-BMC to send updated account list + final 25 products\n-Augie to share commercial/pricing overview and migration details(done ) Follow up call on 15th May with David \n-Varun to share documentation and sample datasets with Vegi’s team(Done)\nFollow-up call scheduled Friday to review pricing, renewal alignment, and activation next steps\nRenewal Sentiment\n\nOverall renewal sentiment is currently unclear, with active engagement across strategic use cases and platform expansion discussions.",
        "pulseDate": "2026-05-14"
      },
      {
        "opp_id": "006RN00000OpsY3YAJ",
        "csm": "Riley Rogers",
        "name": "TR - BMC - CVP x4, Event Support x2, Premium Content x8 - 11.30.2023",
        "arr": 112750,
        "contract_end": "2026-11-29",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "BMC’s main blocker is still review generation volume, not award eligibility visibility.\n\n-   **Buyer’s Choice status:** Ctrl M already qualifies, while other BMC products still need more reviews to reach the 10-review threshold before **September 26**. Reviews submitted after **May 1** also count toward next year’s Top Rated program.\n    \n-   **Primary challenge:** Claire said BMC has trouble identifying actual users for outreach because many products are on-premise, so they lack login and usage visibility. They often know business owners, but not end users.\n    \n-   **Partner friction:** BMC’s partner ecosystem is also limiting access to customer information. Claire said partners such as Vodafone, Infosys, and Accenture can sit between BMC and the customer, making direct outreach harder.\n    \n-   **Plan in motion:** Claire is meeting with the partner team later this month to explore both direct partner reviews and having partners help generate reviews on BMC’s behalf. Partner reviews are considered usable here.\n    \n-   **Support from TR/HG:** Riley offered to keep updating Buyer’s Choice tracking and help supplement outreach with customer data. Claire is reviewing Augie’s account list and filtering likely non-customers.\n    \n-   **Next checkpoint:** Riley, Augie, Claire, and Katie Marino are set to meet **May 22 at 10:00 AM** to discuss review quality standards, upcoming changes, and Augie’s list.",
        "pulseDate": "2026-05-13"
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
    "latestPulseDate": "2026-04-10",
    "opportunities": [
      {
        "opp_id": "006RN000008inDJYAY",
        "csm": "Nick Johnson",
        "name": "Renewal - KPMG - US Renewal 2025",
        "arr": 264967.23,
        "contract_end": "2026-07-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Good activity",
        "pulseDate": "2026-04-10"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-05-13",
    "opportunities": [
      {
        "opp_id": "006RN00000EgOh1YAF",
        "csm": "Atisha Waghela",
        "name": "Renewal - Insight - MI Add on 2025",
        "arr": 20000,
        "contract_end": "2026-11-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "We are engaged with the champion & the team but we do not strong engagement with decision makers, also we are yet to confirm the budget holder for this contract. \n\nThe core reason for concerning pulse is that the teams at Insight work in Silos leading to no strong expansion and risking retention.\n",
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
        "pulseNote": "Atisha Waghela held a 30-min Teams sync on May 12 (11:00 PT) with Insight Direct contacts. Session focused on VMware customer segmentation (SMB/Enterprise/Public Sector), ICP mapping, and using first/last verified dates as contract renewal proxies. Active engagement with upcoming renewal context.",
        "pulseDate": "2026-05-13"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-08-07",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "0063o000019lpEgAAI",
        "csm": "Divyam Dewan",
        "name": "Informatica 2 Year Renewal - 2024",
        "arr": 257775,
        "contract_end": "2026-08-07",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "5/15 DD: Informatica — Weekly Partnership Sync (10:00 AM PT, 30 min). SFDC calendar event confirmed; no Weflow recording captured. Divyam Dewan held the weekly sync with Thomas Mirrione and team. Engagement cadence is strong but Aug 2026 renewal remains at risk — Salesforce acquisition driving supplier rationalization, no completed ROI study, Thomas cannot push renewal through alone. Working with Ravi on revised pricing model. Maintaining Concerning pulse until multi-stakeholder buy-in is secured and ROI proof is delivered.",
        "pulseDate": "2026-05-16"
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
    "lastOutbound": "2026-04-17",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-30",
    "latestPulseDate": "2026-05-18",
    "opportunities": [
      {
        "opp_id": "0063o000017SvSKAA0",
        "csm": "Varun Tiwari",
        "name": "OpenText Year 2 Renewal and Expansion 2024",
        "arr": 226575,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "18th May'26 : VT\n\nTechnical Updates & File Changes\n\n- Removed product count data from install file, added to account file\n- Sujay needs to update scripts accordingly\n  - Will require some work on their end as he's ben busy in last 2 weeks as financial tear closure \n  - Will confirm completion or reach out if issues arise\n- File ready within 1-2 days once changes confirmed\n\nDavid Meeting & Renewal Planning\n\n- David unavailable due to year-end close and financial year transition\n  - Canceled internal  one-on-ones, extremely busy\n  - Sujaywill work to schedule discussion on upcoming renewals\n- Leo to join renewal planning call from HGI side\n- Timeline: Need conclusion by June for September renewal\n- In-person/virtual workshop proposed to showcase new capabilities\n\n\nAccount Planning & Data Strategy\n\n- Field teams now have data for planning exercise\n  - Operations, marketing, pre-sales teams involved\n  - Waiting for feedback on market analysis and quota planning\n  - Next month and half for team input on key customers and data needs\n- Tech consolidation discussion needed\n  - Currently subscribe to multiple vendors (Zoominfo, HGI, others)\n  - Need to evaluate which data sources provide most value\n  - HGI strengths: technographics data, spend data coverage\n\n### Next Steps\n\n- Sujay: Review and update file changes, update scripts\n- Sujay : Schedule meeting with David for renewal discussions\n- Varun: Available for ad-hoc analysis support before financial year end\n- Team: Provide feedback from field teams on planning exercise",
        "pulseDate": "2026-05-18"
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
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Af0b0YAB",
        "csm": "Andy Lim",
        "name": "Renewal - Pure Storage - Portworx Technographic Enrichment 2025",
        "arr": 225000,
        "contract_end": "2027-11-09",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Strong senior engagement reinforced by the April 30 Nobu London dinner with Ian Rutherford, Jack Morris, and senior HG attendees. Snowflake data feed for Strategic Pursuits live since Jan 27 and being used in sales proposals as of late March. New analyst Charlie Morgans onboarded mid-April with May 14 Data Review scheduled — signals continuity through the Everpure rebrand. Bank of America case study established as ROI reference. 28,289 of 50,000 entities consumed indicates healthy platform engagement. Confirming Healthy.",
        "pulseDate": "2026-06-10"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-10-31",
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7fXYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Sage Intacct - CVP - 11.01.2025 (Written Renewal)",
        "arr": 34000,
        "contract_end": "2026-10-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Sage Intacct ranked #1 in Accounting on TrustRadius, clean Dec 2025 renewal, bi-weekly cadence between Divyam and Brock Faucette holding (most recent April 16). Budget healthy at $11,475 remaining heading into the next campaign cycle. April annual report scheduled. Confirming Healthy.",
        "pulseDate": "2026-06-10"
      },
      {
        "opp_id": "006RN000003v2rOYAQ",
        "csm": "Andy Lim",
        "name": "Renewal - Sage - Data Strategy 2025",
        "arr": 155250,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Changing pulse from Healthy to Concerning. The Salesforce connector remains disabled (since 2025-12-16, now ~6 months) due to permission issues on Sage's side and unresolved API/governance concerns — Sage IT remains reluctant to re-enable in its current form. This is the primary data delivery mechanism for the Data Strategy investment, and with 0 of 250,000 platform export credits consumed, value realization is effectively stalled. Mitigating factors remain in play (ABX results at 5X penetration/300% switcher uplift, Maria Quin's three warm leads from the March HG Insider session, agreed direction on HG→Snowflake architecture, and Sam Levan engaged at the VP Product level) — but the connector permission block needs to be resolved before the 2026-12-31 renewal conversation can land cleanly.",
        "pulseDate": "2026-06-10"
      },
      {
        "opp_id": "006RN00000Oq7eIYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Sage Accounting - CVP - 01.26.2026 (Written Renewal)",
        "arr": 34000.08,
        "contract_end": "2027-01-25",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Clean Jan 2026 renewal, March 10 review campaign live with three batches of 1,500 contacts ($25/$25/$50 incentive structure), budget topped up $5K April 8. Active TR relationship managed by Brock Faucette with steady cadence. Confirming Healthy.",
        "pulseDate": "2026-06-10"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-10",
    "latestPulseDate": "2026-06-03",
    "opportunities": [
      {
        "opp_id": "006RN00000Opp6PYAR",
        "csm": "Pam Huck",
        "name": "TR - Epicor Kinetic - IDL - 06.11.2025",
        "arr": 50000,
        "contract_end": "2026-06-10",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Opportunity in error - needs to be removed",
        "pulseDate": "2026-05-29"
      },
      {
        "opp_id": "006RN00000Oq7f2YAB",
        "csm": "Pam Huck",
        "name": "TR - Epicor - Lead Acceleration Annualized Plan (cc: Christian Arce) - 12.31.2025 (Written Renewal)",
        "arr": 166572,
        "contract_end": "2027-03-22",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "June 3, 2026 | PH — Confirming Healthy. Bi-weekly call today with Sam Malecek (Sr. Corporate Marketing Analyst, Epicor Champion Circle). Sam debriefed positively on Insights Nashville — called Becky and Colby \"fantastic\", praised engagement with customers, said review generation \"blew it out of the water\". Strong forward motion across multiple workstreams:\n\n- Sam committed to owning tagging — will work with product marketing to build tag library, then tag the review base. Plans to bring in web team to embed Trust Quotes widgets on epicor.com (cited 20–27% page lift data point from Pam).\n- Sam building a Copilot agent to analyze review sentiment for YoY tracking and review-response templates — sophisticated use case, sticky.\n- Eclipse expansion signal: not yet subscribed, but Pam pre-positioned reviews from Insights as \"anticipation of growth into subscribing another product\" — Sam tracking, will revisit at renewal or with Michelle.\n- TechCares award submission — Sam will own (easy badge win for Epicor company page).\n- Premium content workstream — new review base unlocks third-party market reports and customer stories. Sam's team owns customer success stories at Epicor, so workstream lands in his lane.\n- 3rd event still available under current agreement (2 of 3 used); Sam to raise with Scott and Michelle next week.\n- Pam previewed GEO-optimization add-on beta — expansion pipeline seed.\n\nAsks from Sam: detailed review extract with comments + measures (Pam to deliver). Sam joining the Scott Olson / Michelle Graham call next week.\n\nNo risks. No churn signals. Multi-stakeholder engagement deepening; champion development with Sam in addition to Shreyasi, Michelle, Scott. Strongest pulse signal of the quarter to date.\n\nNext: Pam delivers detailed review extract; Sam builds tag library + submits TechCares; Pam updates Scott/Michelle on tagging progress next week; identify 3rd event; continue GEO beta conversation.",
        "pulseDate": "2026-06-03"
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
    "lastOutbound": "2026-04-24",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2027-08-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "0063o000019lVuqAAE",
        "csm": "Nick Johnson",
        "name": "Renewal - Softcat - Platform - HGSCPGLH0909 2025",
        "arr": 211666.67,
        "contract_end": "2027-08-31",
        "deal_type": "Renewal",
        "pulse": null,
        "pulseNote": null,
        "pulseDate": null
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
    "latestPulseDate": "2026-04-09",
    "opportunities": [
      {
        "opp_id": "0063o000015d4QdAAI",
        "csm": "Varun Tiwari",
        "name": "Renewal with Expansion - Hyland Opp - Sales Team - 3 year deal 2024",
        "arr": 211000,
        "contract_end": "2027-09-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "9th Apr '26 : VT\n\nData Studio Budget Status & Positioning :\n---Joe’s initial reaction to the Data Studio demo with Sam was very positive\n---Described the platform as powerful and compelling\n---Confirmed interest but not feasible for 2026 budget cycle\n---Current internal budget constraints remain a blocker\n---Approval for $45K currently requires escalation\nAdditional complexity due to absence of a CMO(not related to HG component -Internal)\n\n---Position for potential inclusion in 2027 budget planning\n\nPlatform Scoring Capabilities Exploration:\n---Joe evaluating ability to build holistic account scoring models\n---Combining firmographics + technographics + cloud adoption + IT spend signals\n---Example use cases discussed\n\nNext Steps & Engagement Plan\n---Joe to continue hands-on scoring exploration ahead of next working session\nObjective: understand current platform coverage vs Data Studio needs\nHG Insights exploration included within personal goals planning\n\n---Additional documentation and enablement collateral to be shared\n---Refresher walkthrough planned following initial experimentation\n---May 14: dedicated session scheduled to review learnings and scoring progress",
        "pulseDate": "2026-04-09"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-06-02",
    "opportunities": [
      {
        "opp_id": "006RN00000DvmjaYAB",
        "csm": "Rani Guy",
        "name": "Renewal - Docusign - CEO Referral - Platform 2026",
        "arr": 75000.01,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Nate Moya and Andrew and champions of HG. Ziad and I need to connect with Keith Hamrick so we can start discussing the changes to the pricing at HG and the move to a credit model. Andrew is on vacation and invite to Nate for EBR in SF was sent last week. The use case for this contract is very different that the use case that the contract with Sapna is solving for.",
        "pulseDate": "2026-06-02"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-08-31",
    "latestPulseDate": "2026-06-03",
    "opportunities": [
      {
        "opp_id": "006RN00000BwBeHYAV",
        "csm": "Varun Tiwari",
        "name": "Renewal - Pegasystems- Americas Sales 2025",
        "arr": 180674.99,
        "contract_end": "2026-08-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "3rd June'26 : VT\n\n\nExecutive Summary\nProgress continues on account matching and feed activation readiness. A 1.5K-account list has been received for analysis, with results expected this week or early next week. Product selection remains the primary blocker to feed activation, prompting discussions around coverage analysis and a broader competitive intelligence framework. Strategic conversations also explored evolving market dynamics driven by AI, interest in GSI visibility, and potential integration opportunities through HG's MCP capabilities. Additionally, contact data capabilities were introduced, with Pega expressing interest in a proof-of-concept to evaluate coverage and quality.\n\nKey Updates:\n-Received 1.5K accounts from Pega for matching analysis; results expected this week or early next week.(Varun to share it)\n-Hierarchy mapping will be expanded to include global, corporate, and domestic parent relationships.\n-Feed activation remains dependent on finalising product selection.(Varun to also help with the analysis on wishlist product selection for Frank)\n\nPega shared growing interest in:\n-AI-driven competitive intelligence.\n-GSI relationships and partner visibility.\n-Contract and transformation-related buying signals.\n-Introduced HG Contact Data capabilities and discussed a potential POC for quality validation.\n-Separate MCP/AI discussion planned with Chloe and Francis.\n\nDecision Points:\n-Finalize product selection required for feed activation.(Varun to help with the product shortlisting)\n-Determine whether to proceed with a coverage-based product recommendation or a broader competitive wishlist framework.\n-Define scope and success criteria for the contact data POC.\n-Evaluate MCP access and AI integration opportunities with Pega's internal agent strategy.\n\nRisks\n-Feed Activation Dependency: Product selection remains the primary blocker to launching the feed.\n-Data Quality Evaluation: Contact data adoption will depend on validation of coverage, freshness, sourcing transparency, and compliance standards.\n-Evolving Market Dynamics: Rapid AI-driven shifts in the competitive landscape may require broader tracking beyond traditional software competitors.\n\nOpportunities:\n-Expand account intelligence through enhanced hierarchy mapping.\n-Position HG as a strategic source for competitor, GSI, and transformation intelligence.\n-Leverage contact data as an incremental value-add through a targeted POC.\n-Explore MCP integration opportunities as Pega advances its internal AI and agent initiatives.\n-Build a more comprehensive competitive framework encompassing software vendors, AI-native competitors, and consulting partners.\n\nNext Steps\nHG Insights\n\n-Complete and deliver account matching analysis this week or early next week.(Varun)\nDevelop product coverage recommendations and competitive wishlist framework (Varun)\nSchedule MCP/AI discussion with Chloe and Francis.(Leo)\n-Support contact data POC planning and stakeholder engagement.(Ishan)\n\nPega(Frank)\n-Review and finalize product selection for feed activation.\n-Provide sample account list for contact data POC testing.\n-Include contact data stakeholders in future discussions.\n\nOverall Assessment\nArea\tStatus\nAccount Matching Progress\t🟢 On Track\nProduct Selection\t🟡 Pending\nFeed Activation Readiness\t🟡 Blocked\nStrategic Engagement\t🟢 Strong\nContact Data Opportunity\t🟢 Emerging\nAI/MCP Expansion Opportunity\t🟢 High\n\nBottom Line: Engagement remains positive with strong strategic discussions underway. The immediate priority is completing product selection to activate the feed, while longer-term opportunities exist around competitive intelligence, contact data, and MCP-enabled AI initiatives.",
        "pulseDate": "2026-06-03"
      },
      {
        "opp_id": "006RN00000QDuIMYA1",
        "csm": "Varun Tiwari",
        "name": "PegaSystems - Users",
        "arr": 10000,
        "contract_end": "2026-10-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "3rd June'26 : VT\n\n\nExecutive Summary\nProgress continues on account matching and feed activation readiness. A 1.5K-account list has been received for analysis, with results expected this week or early next week. Product selection remains the primary blocker to feed activation, prompting discussions around coverage analysis and a broader competitive intelligence framework. Strategic conversations also explored evolving market dynamics driven by AI, interest in GSI visibility, and potential integration opportunities through HG's MCP capabilities. Additionally, contact data capabilities were introduced, with Pega expressing interest in a proof-of-concept to evaluate coverage and quality.\n\nKey Updates:\n-Received 1.5K accounts from Pega for matching analysis; results expected this week or early next week.(Varun to share it)\n-Hierarchy mapping will be expanded to include global, corporate, and domestic parent relationships.\n-Feed activation remains dependent on finalising product selection.(Varun to also help with the analysis on wishlist product selection for Frank)\n\nPega shared growing interest in:\n-AI-driven competitive intelligence.\n-GSI relationships and partner visibility.\n-Contract and transformation-related buying signals.\n-Introduced HG Contact Data capabilities and discussed a potential POC for quality validation.\n-Separate MCP/AI discussion planned with Chloe and Francis.\n\nDecision Points:\n-Finalize product selection required for feed activation.(Varun to help with the product shortlisting)\n-Determine whether to proceed with a coverage-based product recommendation or a broader competitive wishlist framework.\n-Define scope and success criteria for the contact data POC.\n-Evaluate MCP access and AI integration opportunities with Pega's internal agent strategy.\n\nRisks\n-Feed Activation Dependency: Product selection remains the primary blocker to launching the feed.\n-Data Quality Evaluation: Contact data adoption will depend on validation of coverage, freshness, sourcing transparency, and compliance standards.\n-Evolving Market Dynamics: Rapid AI-driven shifts in the competitive landscape may require broader tracking beyond traditional software competitors.\n\nOpportunities:\n-Expand account intelligence through enhanced hierarchy mapping.\n-Position HG as a strategic source for competitor, GSI, and transformation intelligence.\n-Leverage contact data as an incremental value-add through a targeted POC.\n-Explore MCP integration opportunities as Pega advances its internal AI and agent initiatives.\n-Build a more comprehensive competitive framework encompassing software vendors, AI-native competitors, and consulting partners.\n\nNext Steps\nHG Insights\n\n-Complete and deliver account matching analysis this week or early next week.(Varun)\nDevelop product coverage recommendations and competitive wishlist framework (Varun)\nSchedule MCP/AI discussion with Chloe and Francis.(Leo)\n-Support contact data POC planning and stakeholder engagement.(Ishan)\n\nPega(Frank)\n-Review and finalize product selection for feed activation.\n-Provide sample account list for contact data POC testing.\n-Include contact data stakeholders in future discussions.\n\nOverall Assessment\nArea\tStatus\nAccount Matching Progress\t🟢 On Track\nProduct Selection\t🟡 Pending\nFeed Activation Readiness\t🟡 Blocked\nStrategic Engagement\t🟢 Strong\nContact Data Opportunity\t🟢 Emerging\nAI/MCP Expansion Opportunity\t🟢 High\n\nBottom Line: Engagement remains positive with strong strategic discussions underway. The immediate priority is completing product selection to activate the feed, while longer-term opportunities exist around competitive intelligence, contact data, and MCP-enabled AI initiatives.",
        "pulseDate": "2026-06-03"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-10-27",
    "latestPulseDate": "2026-06-05",
    "opportunities": [
      {
        "opp_id": "006RN000008osWtYAI",
        "csm": "Varun Tiwari",
        "name": "IronMountain - Global RevOps",
        "arr": 190000.08,
        "contract_end": "2026-10-27",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "5th June'26 : VT\n\nA data quality review identified significant mismatches between fit and intent scoring profiles following the transition from a single master scoring file to separate business unit files. As a result, only 47K accounts currently have complete fit and intent coverage, impacting the effectiveness of the scoring framework. HG Insights will work with Iron Mountain to refresh the scoring model using an updated account list and prioritize high-value Enterprise accounts. The discussion also highlighted the need for intent topic modernization and introduced a new AI-driven scoring approach combining fit, need, and intent signals.\n\nKey Updates:\n-Data quality analysis identified persona mismatches across business unit scoring files.(old scoring models built and needs a revision )\n-Previous model used a single scoring file; current model separates scoring by business unit.\n-Accounts are receiving fit scores from one business unit and intent scores from another, reducing usable coverage.(HG will check on this)\n\nCurrent matching results(as per Sanya ) HG will verify this :\n-590K total accounts analyzed.\n-77K accounts matched to SFDC.\n-47K accounts have complete fit + intent + firmographic coverage.\n-Enterprise segment coverage is lower than expected (18K of 50K Enterprise accounts).\n-HG will refresh scoring using Iron Mountain's updated account list.(this is better approach rather than trying to rectify the old scoring logics ,refresh the intent topics as well)\n-Intent topics have not been refreshed for several quarters and may be impacting intent signal quality.\n\nDecision Points:\n-Refresh scoring using the updated account list and prioritize Enterprise account coverage.\n-Determine the optimal 100K account selection strategy based on data quality and coverage metrics.\n-Refresh and modernize intent topics to improve signal quality.\n-Evaluate adoption of the new AI-driven scoring framework once available.(after the call on 24th June with leadership team of IRM - Project 2.0)\n\nRisks:\n-Data Quality Risk: Persona mismatches are reducing the number of accounts with complete scoring profiles.\n-Enterprise Coverage Gap: Only 18K of 50K Enterprise accounts currently have complete profile coverage.\n-Intent Accuracy Risk: Stale intent topics may be generating low or zero intent scores despite active buying behavior.\n-Selection Constraints: The 100K annual scoring limit increases the importance of accurate account prioritization.(contract limitation -can be used as upsell point too)\n\nOpportunities:\n-Improve scoring coverage through refreshed account matching and hierarchy alignment.\n-Optimize the 100K scored account allocation toward high-value Enterprise accounts.\n-Increase intent accuracy through topic refreshes and quarterly review cycles.\n-Leverage the upcoming AI scoring model to provide more actionable prioritization based on fit, need, and intent.\n\nProduct Support Required: \nNA\n\n\n\nNext Steps:\n\nHG Insights\n\n-Provide detailed matching analysis within 2–3 working days after the new accoint file is received from Sanya on 8th June  (Varun).\n-Refresh scoring using the updated account list.(Rishabh)\n-Present the new AI scoring approach to Peter's team on June 24th(Leo & KP)\n-Configure SFTP folder for automated file delivery (Rishabh).\n-Share active platform user details for potential deactivation/reassignment (Varun).\n\nIron Mountain\n-Share refreshed account list by Monday (Sanya Seth).\n\n\nOverall Assessment\nArea\t            Status\nData Quality\t🟡 Needs Improvement\nAccount Matching\t🟡 In Progress\nEnterprise Coverage\t🔴 Below Target\nIntent Signal Quality\t🟡 Requires Refresh\nAI Scoring Opportunity\t🟢 High\nCustomer Engagement\t🟢 Strong\n\n\nBottom Line:\n\nThe primary challenge is data quality rather than platform performance. Refreshing account mappings, modernizing intent topics, and prioritizing Enterprise coverage should significantly improve scoring effectiveness. The upcoming AI-driven scoring model presents a strong opportunity to enhance account prioritization and overall program value.",
        "pulseDate": "2026-06-05"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-05-31",
    "latestPulseDate": "2026-05-13",
    "opportunities": [
      {
        "opp_id": "0063o000017auttAAA",
        "csm": "Nick Johnson",
        "name": "HCL - Canada",
        "arr": 83333.33,
        "contract_end": "2026-05-31",
        "deal_type": "New Subscription",
        "pulse": "Poor",
        "pulseNote": "Confirming Poor — no improvement since Aug 2025. Platform adoption remains minimal with the SPARK team sharing login credentials instead of provisioning individual users. Export entitlements fully consumed but usage concentrated in pre-sales only. Deepanker Tilak continues to defer engagement. Account management transition (Augie to Angus, Jan 2026) had minimal customer acknowledgment. HG is currently part of an RFP process. Contract ends Oct 2026 — renewal risk is high without executive re-engagement. Next step: Push for meeting with procurement team.",
        "pulseDate": "2026-05-11"
      },
      {
        "opp_id": "006RN000008W6bxYAC",
        "csm": "Nick Johnson",
        "name": "Renewal - HCL Software 2025",
        "arr": 50000,
        "contract_end": "2026-05-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Nick Johnson held a 30-min Google Meet on May 12 (14:30 PT) with Hariharan Pandarathil to identify ITSM intent data for BigFix Service Management. Nick agreed to get provisioning sign-off for data exports and share the intent topic spreadsheet. Active CSM engagement with a time-sensitive customer need — positive signal given the account's recent risk flags around engagement and adoption.",
        "pulseDate": "2026-05-13"
      },
      {
        "opp_id": "006RN00000Oq4VTYAZ",
        "csm": "Nick Johnson",
        "name": "TR - HCL - Leads",
        "arr": 55000,
        "contract_end": "2026-11-03",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "First pulse for TR-HCL-Leads, establishing baseline at Concerning. IDL and CVP products are in onboarding but dependent on review volume which hasn't started — IDL delivery cannot begin until reviews are collected. Risk categories flagged: ATL Support & Multi-threading, Champion & BTL Support. No champion identified. Org-level engagement is low with the account team struggling to get responses from budget holders. Next milestone: review campaign launch to unblock IDL delivery.",
        "pulseDate": "2026-05-11"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2028-03-03",
    "latestPulseDate": "2026-05-04",
    "opportunities": [
      {
        "opp_id": "006RN000005m7tyYAA",
        "csm": "Divyam Dewan",
        "name": "Renewal - Dynatrace - Platform Renewal 2025",
        "arr": 165124.09,
        "contract_end": "2028-03-03",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Dynatrace has always been a data feed-type customer rather than a heavy platform user — this is understood and not a concern. The current priority is working with Augie to scope a more scalable data feed arrangement for Roger Steffen (who joined the conversation today and is asking about automating white space pulls). Meanwhile, day-to-day work continues well with Jessica and Chuck. Contract runs through March 2028 — renewal is not an immediate pressure.\n\nFeb 19: Platform overview with Jessica; biweekly cadence established (Divyam + Augie)\nMar 13 / Mar 17 / Mar 31: Data dictionary, ICP refinement, and onboarding sessions with Jessica and Chuck\nMay 4: Roger Steffen joined — inquiring about automating data feed pulls and scoping investment; Augie working to define the right model for their needs\n\nPositives:\n\nGood working relationship with Jessica and Chuck; biweekly cadence running smoothly\nRoger's interest in data feed automation is an expansion signal — appetite to scale usage\nContract through Mar 2028; no renewal pressure\n\nNegatives:\n\nScoring profiles not yet finalized; investment scope and delivery model still being defined with Roger/Augie\nPlatform self-service adoption low — not a surprise given their data feed preference, but worth monitoring\n\nNext Steps:\n\nHG (Augie): Finalize data feed scoping with Roger — confirm volume, delivery model, and pricing\nHG (Divyam): Continue biweekly cadence with Jessica and Chuck; deliver data dictionary\nDynatrace (Roger): Share scoring profile direction so Augie can complete the scoping",
        "pulseDate": "2026-05-04"
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
    "latestPulseDate": "2026-04-27",
    "opportunities": [
      {
        "opp_id": "006RN00000FOYkmYAH",
        "csm": "Atisha Waghela",
        "name": "Renewal - AMD - Universe Feed Renewal 2026",
        "arr": 157500,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Productive call focused on data for account insights and new AI capabilities. Rockwell agreed to provide sample accounts for analysis and expressed interest in trialling the new MCP tool (expanded data points + agentic capabilities). Both sides acknowledged AI-driven market dynamics, particularly in semiconductors, with Rockwell flagging interest in AI-related data for future initiatives.\nNext steps:\n\nRockwell to provide sample accounts for data analysis\nAW to explore MCP trial options for Rockwell\nWebinar on new RGI platform scheduled Apr 21 — Rockwell sending reps\nAW to build an account brief showcasing practical data/tool application\n\nLonger term, Rockwell will track market shifts (on-prem to cloud, AMD AI accelerators, Helios) and plans to dedicate more resource to ingesting new data sets in H2 once their customer master data management focus eases.",
        "pulseDate": "2026-04-27"
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
    "latestPulseDate": "2026-05-04",
    "opportunities": [
      {
        "opp_id": "006RN000006c9gOYAQ",
        "csm": "Divyam Dewan",
        "name": "Thomson Reuters - LexisNexis Displacement - Data Feed",
        "arr": 153750,
        "contract_end": "2026-07-30",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Aroon Jham — our primary champion — has left. The new POCs (Blake Way, Anushree Goyal, Vibhuti Verma) is still getting oriented and does not feel they are making full use of the platform or data feed. We have met with all three individually over April and early May, and the picture that's emerging is basic usage (time series for churn/retention) with significant gaps in contract data utilization and competitive intelligence coverage. We have an internal meeting planned to work through a recovery plan. Renewal is nearby — this needs urgent attention.\n\nApr 7: Met Blake Way (Commercial Excellence) — introductory session; current usage overview\nApr 13: Met Anushree + Vibhuti — flagged limited data usage; contract data not fully mapped to customer base\nApr 21: Working session with Vibhuti on OLI churn model — time series for LexisNexis mindshare tracking\nApr 29: Anushree flagged contract data ROI issue — insufficient competitor mapping; match rate assessment needed\nMay 13: Next call confirmed with Anushree/Vibhuti — prioritized topics sent by Anushree\n\nPositives:\n\nActive re-engagement with new team; three meetings held in April; good access to Blake/Anushree/Vibhuti\nOLI churn model using time series is a concrete use case showing some value delivery\n\nNegatives:\n\nAroon's departure removed a highly engaged champion; new team lacks context and confidence in the data\nContract data ROI in question — team not finding sufficient competitor mapping coverage\nRenewal is approaching with a team that doesn't yet feel fully invested in the platform\n\nNext Steps:\n\nHG: Internal meeting to define recovery plan — address contract data gaps and prove ROI to new team\nHG: Run match rate assessment on Anushree's competitor list before May 13 call\nHG: Confirm renewal status and timeline; escalate internally given champion departure + approaching renewal\nTR (Anushree/Blake): Send competitor list before May 5; engage on May 13 call with open feedback",
        "pulseDate": "2026-05-04"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-11-21",
    "latestPulseDate": "2026-05-08",
    "opportunities": [
      {
        "opp_id": "006RN00000FPAtBYAX",
        "csm": "Nick Johnson",
        "name": "Renewal - Check Point Platform 2025",
        "arr": 150000,
        "contract_end": "2027-11-21",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "7th May '26 : NJ | Check Point — \"Check Point - HGi sync\" 30 min Zoom at 12:30 PT\n\nCredit reconciliation resolved: 149K credits previously assigned to former employee Toma written off as goodwill by HG. Account team appreciative of the resolution.\n\nRenewal context: Snowflake renewal coming up in November; HG supporting renewal narrative.\n\nUpcoming activity: Snowflake and SixSense integration call planned for mid-May — Nick to facilitate.\n\nSentiment: Healthy — Active engagement, credits issue cleanly resolved, near-term collaboration planned.",
        "pulseDate": "2026-05-08"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-01-31",
    "latestPulseDate": "2026-05-05",
    "opportunities": [
      {
        "opp_id": "006RN00000Tnkc8YAB",
        "csm": "Atisha Waghela",
        "name": "TDS EMEA IBM/Automation",
        "arr": 50000,
        "contract_end": "2027-01-31",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Montse has been using the platform well. \nCurrently focusing on Qlik competitors and its market space.",
        "pulseDate": "2026-04-27"
      },
      {
        "opp_id": "006RN00000O6Q6uYAF",
        "csm": "Atisha Waghela",
        "name": "NA IBM MCP Server by Francis - MK rep Charles Hawkins",
        "arr": 100000,
        "contract_end": "2027-12-31",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "May 4, 2026 | AW — HGI &lt;&gt; TDSynnex (Weflow confirmed, Atisha verified as speaker)\n\nActive call focused on two issues: (1) A significant credit discrepancy — customer ran an export expecting 11,000 credits consumed but 44,000 were charged. Atisha has escalated internally for same-day root cause investigation and assured the customer they will not be penalized. Customer to share export files and credit log via SharePoint folder for the investigation. (2) Competitive intelligence build-out for Confluent and Turbonomics — Atisha sharing updated intent topic list (453 topics, accounting removed) and competitor analysis from HG's internal CI tool. Steve driving the Confluent/Turbonomics use case.\n\nMaintaining Concerning pulse. Account remains in Severe Risk health following RFP loss to ZoomInfo (Dec 2025). CSM engagement is active and responsive, but the credit billing issue adds friction to an already challenged account. Credit investigation is highest priority before EOD today.",
        "pulseDate": "2026-05-05"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Concerning",
    "pulseNote": "",
    "pulseColor": "yellow",
    "renewalDate": "2026-10-20",
    "latestPulseDate": "2026-05-19",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq5ykYAB",
        "csm": "Riley Rogers",
        "name": "TR - Intuit - CVP x2 - 10.21.2025 (Written Renewal)",
        "arr": 50000,
        "contract_end": "2026-10-20",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Apr 21 call with Riley Rogers: Positive engagement from Bianca Gause around GEO dashboard early access resets prior adoption-gap risk for this written renewal. Account-level momentum has improved — champion re-engaged and actively coordinating with HG on upcoming campaigns. Updating to Healthy in alignment with today's call signals; SSO resolution and review campaign execution remain watch items.",
        "pulseDate": "2026-04-22"
      },
      {
        "opp_id": "006RN00000Oq7fcYAB",
        "csm": "Riley Rogers",
        "name": "TR - Intuit Enterprise Suite - CVP + Cat Intent Data x6 - 10.24.2025 (Written Renewal)",
        "arr": 50000,
        "contract_end": "2026-10-23",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Apr 21 call with Riley Rogers: Bianca Gause engaged and excited about GEO dashboard early access, signaling active product adoption across the Intuit Mailchimp account. Category Intent Data component is aligned with in-flight demand gen plans. Expansion trajectory intact; downgrading from Concerning to Healthy based on today's champion re-engagement and product adoption signals.",
        "pulseDate": "2026-04-22"
      },
      {
        "opp_id": "006RN00000Oq7ewYAB",
        "csm": "Nandini Yamdagni",
        "name": "TR - Intuit Mailchimp - Ultimate - 01.01.2026 (Written Renewal)",
        "arr": 45000,
        "contract_end": "2026-12-04",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "**Customer goal**\n\n-   Mailchimp is using TrustRadius to increase AI/LLM citations for key category terms like email marketing, marketing automation, and SMS. They are focused on maintaining fresh, high-quality reviews to improve how AI references the brand.\n\n**Current status**\n\n-   Bianca flagged a major drop in May page views and share of primary category traffic, with views falling from roughly 67,000 to around 1,000. This is a clear concern because Mailchimp tracks this weekly for leadership reporting.\n    \n-   The new AI crawler dashboard is built and available in the backend, but not yet live in the vendor portal. Rollout is expected before the end of May.\n    \n\n**Business context**\n\n-   Mailchimp is reporting internally on review quality, recency, third-party site performance, and AI citation trends. Klaviyo is the main competitor they are trying to outperform in AI references.\n\n**Risks / concerns**\n\n-   Sudden traffic decline may undermine confidence in program ROI and review-site visibility. Cause is still unknown.\n    \n-   Billing visibility is still slightly unsettled: Mailchimp sees the January payment as paid, but Riley still needs internal confirmation.\n    \n\n**Next steps**\n\n-   Riley to send Bianca downloadable AI crawler dashboard data today.\n    \n-   Riley to investigate the page-view drop with the technical team and follow up.\n    \n-   Riley to verify payment status with Mardigan.\n    \n-   Bianca to send the next campaign list for review outreach, targeting launch next week.",
        "pulseDate": "2026-05-19"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-09-30",
    "latestPulseDate": "2026-05-29",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7fkYAB",
        "csm": "Pam Huck",
        "name": "TR - F5 - CVP x5 + Event Support - 10.01.2025 (Written Renewal)",
        "arr": 144000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 29, 2026 | PH — Confirming Healthy. Renewal is closed won (Stage 7 - Invoiced Won, contract through Sep 30, 2026). Sherry Arnold remains highly engaged across the AppWorld roadshow series — Singapore (May 20) delivered 35 reviews and 13 advocates per the May 27 sync. HG Insider Program invites sent to F5 contacts on May 29.\n\nWatch items (not risk-grade): (1) TR widget embed code blocker raised by Laura Santoki on May 26 — escalated, awaiting resolution; (2) three stale Vitally tasks open on this org (Events Team Sync, Multi-Product Link, March Reporting) need triage.\n\nNext milestones: NGINX listing meeting June 1, LATAM roadshow June 3–4, AppWorld Seoul June 24.",
        "pulseDate": "2026-05-29"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-30",
    "latestPulseDate": "2026-05-21",
    "opportunities": [
      {
        "opp_id": "006RN00000DkHrDYAV",
        "csm": "Varun Tiwari",
        "name": "Renewal - Ceridian Renewal + 8 Seats, FAI and Intent2025",
        "arr": 136372.5,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "21st May'26 :  VT\n\nMAIN DISCUSSION POINTS\n\n• Kory wants to better prove and expand the value of HG Insights ahead of renewal in December 2026.\n\n• The group focused on two immediate use cases:\n  - Salesforce enrichment to fill gaps such as payroll provider / incumbent data.\n  - ICP / win analysis to identify patterns in won business using technographic, intent, and related signals.\n\n• Kory wants to validate value first through spreadsheets / sample analysis, rather than starting with a large Salesforce integration.\n\n• HG shared newer capabilities including:\n  - Technographic enrichment\n  - Three layers of intent data\n  - Win/loss and competitive displacement analysis\n  - Newer platform workflows for analysis and activation\n\n\nRISKS:\n\n• A full Salesforce integration is likely a longer-term effort and may not be realistic to complete this year.\n\n• Match rates and field coverage will not be perfect, so outputs should be treated as directional for analytics, not absolute truth for seller-level actioning.\n\n• There is a risk of focusing too much on tooling before proving business value with a smaller sample.\n\n\nOPPORTUNITIES:\n\n• Use a 10K account sample to compare what HG can match/enrich versus what already exists in Salesforce.\n\n• Use 250+ won deals by product to run an ICTP  win analysis and identify what strong-fit wins look like.\n\n• Identify net-new signals Dayforce is not using today, especially:\n  - Technographics\n  - Intent\n  - Competitive install / displacement patterns\n  - Renewal-timing proxies\n\n• Build toward a longer-term approach for automating enrichment and analysis once the value is proven.\n\n\nNEXT STEPS:\n\n• Dayforce to send HG a 10K account list with:\n  - Company name\n  - URL\n  - CRM ID\n  - DUNS (if available)\n  - Country\n\n• HG will match and enrich those accounts with subscribed datapoints and show what additional enrichment could be added.\n\n• Dayforce to send at least 250 won deals and specify the relevant product(s).\n\n• HG will run an ICTP analysis and show how that can later be done in the UI.\n\n• Include Anthony Sweet and Andrew Drake in future discussions; Emily Doubt may be involved for Salesforce / technical integration topics.\n\n• Augie to work with Effie to find a 60-minute sync next month for the five participants and move to a monthly cadence.\n\n\nCadences :\n\nKory agreed for 60 mins call every month on align on these initiatives and keep a track of the progress",
        "pulseDate": "2026-05-21"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-22",
    "latestPulseDate": "2026-06-03",
    "opportunities": [
      {
        "opp_id": "006RN000004CjS7YAK",
        "csm": "Varun Tiwari",
        "name": "Renewal - Exclusive Networks 2024 NEW 2024 - Renewal/Upsell",
        "arr": 125000,
        "contract_end": "2026-12-22",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "3rd June'26 : VT\n\nExecutive Summary\n\nHG Insights approved waiving the 25K export overage incurred by the Exclusive Networks marketing team, removing operational constraints for the remainder of the contract term and providing greater flexibility ahead of renewal discussions. Strategic discussions around a potential data feed migration have been deferred to July, when Ben's team will take ownership of evaluating future contract and delivery options.\n\nKey Updates:\n-HG leadership approved forgoing the 25K export overage from the marketing team.\n-Matt welcomed the decision, noting it significantly simplifies planning for the remaining 6 months before renewal.\n-New user Jonas has been provisioned with read-only access.\n-Export access for Jonas is currently on hold due to licensing and user allocation considerations.\n-Export governance communication has been shared with all full-access users.\n-Live export tracking document will continue to provide visibility and self-service monitoring.\n\nDecision Points:\n-Determine whether to pursue a data feed model or continue with the current platform-based engagement during renewal discussions.\n-Define expected account volumes, product coverage, regional requirements, and overall data volumes to support future data feed scoping.\n-Assess commercial implications of any potential migration strategy.\n\nRisks\n-Data Feed Scope Uncertainty: Requirements for a potential data feed migration have not yet been defined and could impact renewal planning timelines.\n-User Access Constraints: Additional export-enabled users may require license reallocation or commercial review.\n\nOpportunities:\n-Removal of export restrictions improves customer experience and adoption through the remainder of the contract term.\n-Increased transparency through live usage tracking reduces operational overhead.\n-July planning discussions provide an opportunity to align future data delivery requirements and expand strategic engagement.\n-Potential data feed migration could create a more scalable long-term solution depending on business requirements.\n\nNext Steps:\nHG Insights\n\n-Update and maintain the live export tracking document (Varun).\n-Support July discussions around data feed requirements and commercial scoping.(Angus)\n\nExclusive Networks:\n\n-Continue monitoring export usage through the shared tracking document (Matt).\n-Define future data feed requirements, including account volumes, products, regional coverage, and expected data consumption.\n0Prepare for July strategic discussions regarding renewal and delivery model options.(Ben)\n\nOverall Assessment:\nArea\t                         Status\nCustomer Satisfaction\t🟢 Strong\nExport Governance\t🟢 Under Control\nExport Usage\t🟡 Monitoring\nUser Access Management\t🟢 Stable\nRenewal Planning\t🟡 Upcoming\nData Feed Opportunity\t🟢 Emerging\n\n\nBottom Line:\n\nThe export overage relief removes a key operational concern and strengthens customer goodwill ahead of renewal. Focus now shifts to monitoring usage, maintaining governance, and preparing for July discussions that will shape the future delivery model and renewal strategy.",
        "pulseDate": "2026-06-03"
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
    "latestPulseDate": "2026-06-08",
    "opportunities": [
      {
        "opp_id": "006RN00000IyC7DYAV",
        "csm": "Divyam Dewan",
        "name": "Cloud Dynamics - Snowflake Renewal 2026",
        "arr": 120750,
        "contract_end": "2028-04-15",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "",
        "pulseDate": "2026-06-08"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2028-09-14",
    "latestPulseDate": "2026-05-13",
    "opportunities": [
      {
        "opp_id": "006RN00000MoBRqYAN",
        "csm": "Nick Johnson",
        "name": "NTT - NA Value Creation Team Platform Access",
        "arr": 120450,
        "contract_end": "2028-09-14",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "12th May '26 : NJ | NTT Data Corporation — 30 min Teams demo (10:30 UTC / 3:30 AM PT).\n\nNick attended as CSM alongside David Garcia Thomas (AE) and Francis Brero (Head of AI &amp; Analytics) for a strategic demo with Roli Agrawal (CEO's Office, Sales Transformation &amp; AI Strategy Lead), Saurabh Batra, and Naveen Mittal.\n\nCall focused on NTT's 2026 sales play alignment initiative: 16 sales plays scored against target accounts using HG's technographic data fabric, AI agents, and configurable ICP models. David demoed the full pipeline — propensity scoring (e.g. Nestle edge compute play), contact sequencing, and dynamic prospect landing pages. Francis explained the open-box AI agent architecture.\n\nRoli responded positively, confirmed the outcomes-first framing was what she needed, and raised back-end CRM integration as a key next step. NTT sales kickoff (Las Vegas, mid-May) is a critical milestone.\n\nNext steps: Share demo deliverables (account briefs, scoring outputs, contact sequences) with Roli Agrawal. Scope back-end integration methodology with Francis Brero and Saurabh.\n\nSentiment: Healthy — Strong executive-level engagement with HG's AI-driven sales play solution. Expansion opportunity active (50–200 accounts).\n\nWeflow rec: a76RN0000002QrFYAU.",
        "pulseDate": "2026-05-13"
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
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000Ft1NpYAJ",
        "csm": "Andy Lim",
        "name": "alibaba cloud - Maggie",
        "arr": 119700,
        "contract_end": "2027-04-14",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Cloud Dynamics adoption remains critically low — 691 of 100,000 credits consumed (0.7%) seven months into a 2-year deal — and only 1 of 2 APIs is configured. The team has remained email-only and declined live meetings on the existing contract. Angus's parallel AI upsell motion is producing real momentum (April 30 scoping, 9 reference accounts submitted May 5, 3 approved May 8, sentiment tagged \"🙂 Stable\"), but value realization on the contract Alibaba is already paying for hasn't materialized. Holding at Concerning to drive activation focus before the April 2027 renewal.",
        "pulseDate": "2026-06-10"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-11",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "006RN00000IFmoLYAT",
        "csm": "Atisha Waghela",
        "name": "Renewal - Intel - Enterprise Territory Building 2026: Anderson Duncan",
        "arr": 115021,
        "contract_end": "2026-12-11",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "5/15 AW: Intel — Platform Training session (5:30 AM PT, 60 min). SFDC calendar event confirmed; no Weflow recording captured. Atisha Waghela led an Intel & HGI platform training session. Ongoing training and enablement engagement with Intel team (Cui Ting, Megan Liu). Data feed setup in progress per renewal agreement. Account health positive and engaged.",
        "pulseDate": "2026-05-16"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-09-07",
    "latestPulseDate": "2026-05-27",
    "opportunities": [
      {
        "opp_id": "006RN00000NXwXpYAL",
        "csm": "Atisha Waghela",
        "name": "RSM - MS Advisory Services",
        "arr": 20000,
        "contract_end": "2026-09-07",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Working on discussion on partnership of 20206/27 as next steps with Kristin. Plans to discussing MCP integration with Microsoft co-pilot \nWorking with Ellis/Ben on data feed. They have utilised all their entity limit for data feed. Good progress. pushing for adoption of dat across sales team.\n\nConcerning pulse because the implementation process took a long time and showcasing ROI is a concern.\n\nWorking with Kristin on showcasing the progress and ROI derivation along with Leo",
        "pulseDate": "2026-05-27"
      },
      {
        "opp_id": "006RN00000HNNa2YAH",
        "csm": "Atisha Waghela",
        "name": "RSM US- Microsoft",
        "arr": 74999.99,
        "contract_end": "2026-09-21",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Working on discussion on partnership of 20206/27 as next steps with Kristin. Plans to discussing MCP integration with Microsoft co-pilot \nWorking with Ellis/Ben on data feed. They have utilised all their entity limit for data feed. Good progress. pushing for adoption of dat across sales team.\n\nConcerning pulse because the implementation process took a long time and showcasing ROI is a concern.\n\nWorking with Kristin on showcasing the progress and ROI derivation along with Leo",
        "pulseDate": "2026-05-27"
      },
      {
        "opp_id": "006RN00000SlBmJYAV",
        "csm": "Atisha Waghela",
        "name": "RSM - MCP Data: Anderson Duncan",
        "arr": 20000,
        "contract_end": "2026-12-30",
        "deal_type": "Expansion",
        "pulse": "Concerning",
        "pulseNote": "As updated in last opp. \n\nSlow adoption and delayed ROI.",
        "pulseDate": "2026-04-27"
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
    "lastOutbound": "2026-04-08",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "2026-06-09",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukoYAB",
        "csm": "Pam Huck",
        "name": "TR - ZoomInfo - CVP x4 - 07.01.2025",
        "arr": 114000,
        "contract_end": "2026-06-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "6/9/26 PH — Confirming Concerning from 5/11. Renewal is actively progressing toward the 7/1 deadline. On the 6/5 call, Russell Martin confirmed the profile consolidation (ZoomInfo Sales→GTM Workspace, Marketing renamed, Operations + Chorus merged into new GTM Studio; Engage reviews to migrate; Chat, Comparably, NeverBounce to be discontinued) and confirmed openness to a multi-year deal. Downsize is now confirmed: dropping from 4 CVPs to 3. Anderson sent options 6/8 — 1-yr at $90K ($30K/pkg) or 3-yr at $75K/yr ($25K/pkg). Russell looped in procurement (Sylvia Livingston) to finalize (positive buying signal) and moved himself to BCC. Procurement sync being scheduled this week. No churn risk — engagement strong and champion intact — but pulse stays Concerning given confirmed ARR contraction (~$114K→$90K on a 1-yr) and an unsigned deal against a tight 7/1 deadline with a new procurement stakeholder now involved. Taxonomy team being prepped to execute profile changes on signature; Tech Cares award info sent to Russell.",
        "pulseDate": "2026-06-09"
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
    "lastOutbound": "2026-02-27",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-04-07",
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
    "lastOutbound": "2026-04-17",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-05-30",
    "latestPulseDate": "2026-06-05",
    "opportunities": [
      {
        "opp_id": "0063o000019kciFAAQ",
        "csm": "Varun Tiwari",
        "name": "Renewal - FIVE9 - Global License Opp Gen 2024",
        "arr": 105000,
        "contract_end": "2027-05-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "5th June'25 : VT\n\nExecutive Summary:\n\nFive9 is looking to validate ~373 existing paid partner accounts to determine whether they remain active businesses and whether any ownership changes have occurred through mergers or acquisitions. While HG Insights currently provides directional indicators for business activity and ownership hierarchy, certain limitations exist around definitive active/inactive status determination and recent M&A visibility. A priority assessment will be conducted by Tracy to support Five9's partner review process for June'26 , with enhanced M&A capabilities expected to become available within the next month.\n\nKey Updates:\n-Jordan Curtis requested validation of ~373 current paid partner accounts.\nPrimary objective is to determine whether partner companies remain active businesses and should continue to receive partner investment.\nSecondary objective is to identify ownership changes and parent-child relationships resulting from mergers and acquisitions.\n-Current M&A coverage has a 4–6 month visibility gap.(Tracy)\n-A new real-time M&A feed is expected to launch within the next 3–4 weeks, significantly improving coverage and accuracy(Tracy)\n-Matching methodology and export logic were reviewed to clarify differences between total matches, unique matches, and filtered outputs.\n\nDecision Points:\n-Determine the level of confidence required for active/inactive business validation.\n-Review partner accounts identified with potential ownership changes or M&A activity.\n-Assess whether a second validation exercise should be conducted once the new M&A feed becomes available.\n\nRisks:\nBusiness Status Validation: HG currently cannot provide a definitive active/inactive company flag.\n\nM&A Visibility Gap: Recent acquisitions from the last 4–6 months may not yet be reflected in the platform.\n\nPartnership Decisions: Incomplete business activity or ownership data could impact partner investment decisions.\n\nOpportunities:\n-Improve partner program efficiency by identifying inactive or low-value partner relationships.\n-Enhance partner hierarchy visibility through ownership and parent-company mapping.\n-Leverage upcoming real-time M&A capabilities to strengthen partner account management.\n-Establish a repeatable partner validation process for ongoing governance.\n\nProduct Support Required:\n\n-Assess available business activity signals to identify potentially inactive organizations.\n-Review ownership hierarchy and notable M&A changes across partner accounts.\n\n\nNext Steps\n\nHG Insights\n\n-Run priority analysis on the 373 partner accounts.\nValidate business activity signals where available.\nReview notable ownership and M&A changes.\nDeliver initial assessment by next week (Tracy/Varun).\nCoordinate detailed follow-up analysis with Tracy.\n\nFive9\n-Review assessment results and identify partners requiring additional investigation.\n-Evaluate potential follow-up analysis once enhanced M&A coverage becomes available.\n\nOverall Assessment:\nArea\t                               Status\nPartner Validation Project\t🟢 In Progress\nBusiness Activity Visibility\t🟡 Partial Coverage\nM&A Intelligence\t🟡 Improving\nHierarchy Mapping\t🟢 Strong\nCustomer Engagement\t🟢 Strong\nFuture Data Enhancement\t🟢 High\nBottom Line\n\nFive9 is leveraging HG Insights to validate the health and ownership structure of its partner ecosystem. While current capabilities provide useful directional insights, the upcoming real-time M&A enhancements will significantly improve accuracy and make future partner validation exercises more effective.",
        "pulseDate": "2026-06-05"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-02-01",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "006RN00000SmRKNYA3",
        "csm": "Divyam Dewan",
        "name": "BILL-",
        "arr": 103000,
        "contract_end": "2027-02-01",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "May 15, 2026 | DD — BILL Operations: MadKudu Handover & Implementation Status (Weflow confirmed)\n\nDivyam Dewan held a 30-min Zoom call at 10:30 AM PT with Jeremiah Clark (departing stakeholder from Smooth Operator). This is a handover call as Jeremiah is leaving.\n\nKey topics:\n- BuildCom account has Salesforce disconnected, causing Model 5 data issues — Divyam learning full account status\n- Monday meeting scheduled with Eric (GTM Ops) and Kristen Malkovich (exec sponsor) to review implementation state\n- Concurrent Marketo→Inflection migration remains ongoing\n\nAccount remains Concerning. Implementation is mid-flight with a key contact departing, Salesforce data issues blocking Model 5, and the aggressive FY27 launch timeline still in effect. Monday's call with Eric and Kristen is the critical next milestone.",
        "pulseDate": "2026-05-16"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Concerning",
    "pulseNote": "",
    "pulseColor": "yellow",
    "renewalDate": "2026-10-20",
    "latestPulseDate": "2026-05-19",
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
        "opp_id": "006RN00000UXoG5YAL",
        "csm": "Atisha Waghela",
        "name": "Intuit Phase 2",
        "arr": 500159.04,
        "contract_end": "2027-03-09",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "5/11/26 — 30-min Zoom call (15:30 PT). Riley Rogers on Atisha Waghela's Intuit IES account (cross-coverage). Topics covered: TrustRadius Top Rated badge status and review sourcing update; intent data strategy discussion including operationalizing HG intent signals through Salesforce and ZoomInfo integrations. Riley confirmed as active speaker; Atisha not present. Customer team engaged and receptive. [Auto-logged by Enterprise CSM daily engagement scan]",
        "pulseDate": "2026-05-12"
      },
      {
        "opp_id": "006RN00000OpulRYAR",
        "csm": "Riley Rogers",
        "name": "TR - Intuit - CVP x2 - 03.01.2025",
        "arr": 76590.5,
        "contract_end": "2026-02-28",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "-   **New owner / transition:** Riley is taking over the Intuit QB Desktop Enterprise relationship from Heidi. Andrew Lum is the main contact and owns Desktop Enterprise, while also helping move suitable customers into IES and QBO Advanced.\n    \n-   **What Andrew cares about:** His goals are customer retention, new customer acquisition, and migration of desktop customers to online products. He does **not** have direct KPI targets tied to review volume or sentiment.\n    \n-   **Award / review status:** Desktop Enterprise qualified for the 2026 Top Rated award with 19 reviews by the April 26 cutoff. Next milestone is **10 new reviews by September 26** for Buyer’s Choice eligibility. May–September is the key window because reviews count toward both programs.\n    \n-   **Campaign readiness:** There is at least **$500** in review campaign budget available, though Riley should confirm whether the renewal reset restored it closer to **$1,000**. Standard campaign flow is a 3-email sequence using a customer list and typical incentives of **$25 / $25 / $50**.\n    \n-   **Risk / hesitation:** Andrew is cautious about launching a campaign immediately because Intuit customers have recently received heavy communications, including pricing increases. His concern is message fatigue and negative reaction to more outreach.\n    \n-   **Best near-term path:** Revisit campaign timing in **mid-summer**, when current communication pressure may ease. If they move forward, likely targeting options are recent onboarding cohorts, specific industries, or lookalike audiences from adjacent Intuit products.\n    \n-   **Scale / feasibility:** Andrew said the Desktop Enterprise base is **200,000+ active customers**, so sourcing enough contacts should not be the issue. Using the rough **3% response rate**, the review goal appears achievable with a well-targeted sample.\n    \n-   **Operating cadence:** They set a **bimonthly sync**, with the next meeting scheduled for **July 8 at 9:30 AM PT / 12:30 PM ET**.\n    \n-   **Forward-looking value:** Riley previewed upcoming **AEO/GEO-style citation tracking** capabilities, which Andrew was interested in as a way to understand how review content is being surfaced and cited.\n    \n\nSay more",
        "pulseDate": "2026-05-13"
      },
      {
        "opp_id": "006RN00000Oq7fcYAB",
        "csm": "Riley Rogers",
        "name": "TR - Intuit Enterprise Suite - CVP + Cat Intent Data x6 - 10.24.2025",
        "arr": 50000,
        "contract_end": "2026-10-23",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Apr 21 call with Riley Rogers: Bianca Gause engaged and excited about GEO dashboard early access, signaling active product adoption across the Intuit Mailchimp account. Category Intent Data component is aligned with in-flight demand gen plans. Expansion trajectory intact; downgrading from Concerning to Healthy based on today's champion re-engagement and product adoption signals.",
        "pulseDate": "2026-04-22"
      },
      {
        "opp_id": "006RN00000Oq5ykYAB",
        "csm": "Riley Rogers",
        "name": "TR - Intuit - CVP x2 - 10.21.2025",
        "arr": 50000,
        "contract_end": "2026-10-20",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Apr 21 call with Riley Rogers: Positive engagement from Bianca Gause around GEO dashboard early access resets prior adoption-gap risk for this written renewal. Account-level momentum has improved — champion re-engaged and actively coordinating with HG on upcoming campaigns. Updating to Healthy in alignment with today's call signals; SSO resolution and review campaign execution remain watch items.",
        "pulseDate": "2026-04-22"
      },
      {
        "opp_id": "006RN00000Oq7ewYAB",
        "csm": "Nandini Yamdagni",
        "name": "TR - Intuit Mailchimp - Ultimate - 01.01.2026",
        "arr": 45000,
        "contract_end": "2026-12-04",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "**Customer goal**\n\n-   Mailchimp is using TrustRadius to increase AI/LLM citations for key category terms like email marketing, marketing automation, and SMS. They are focused on maintaining fresh, high-quality reviews to improve how AI references the brand.\n\n**Current status**\n\n-   Bianca flagged a major drop in May page views and share of primary category traffic, with views falling from roughly 67,000 to around 1,000. This is a clear concern because Mailchimp tracks this weekly for leadership reporting.\n    \n-   The new AI crawler dashboard is built and available in the backend, but not yet live in the vendor portal. Rollout is expected before the end of May.\n    \n\n**Business context**\n\n-   Mailchimp is reporting internally on review quality, recency, third-party site performance, and AI citation trends. Klaviyo is the main competitor they are trying to outperform in AI references.\n\n**Risks / concerns**\n\n-   Sudden traffic decline may undermine confidence in program ROI and review-site visibility. Cause is still unknown.\n    \n-   Billing visibility is still slightly unsettled: Mailchimp sees the January payment as paid, but Riley still needs internal confirmation.\n    \n\n**Next steps**\n\n-   Riley to send Bianca downloadable AI crawler dashboard data today.\n    \n-   Riley to investigate the page-view drop with the technical team and follow up.\n    \n-   Riley to verify payment status with Mardigan.\n    \n-   Bianca to send the next campaign list for review outreach, targeting launch next week.",
        "pulseDate": "2026-05-19"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-07",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Opp6NYAR",
        "csm": "Riley Rogers",
        "name": "TR - Paycom - Customer Stories - 07.08.2025",
        "arr": 3000,
        "contract_end": "2026-07-07",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "Customer Stories opp with active content production. Content engagement is strong across the Paycom account and the $21K expansion close (3/31) confirms broad satisfaction. Confirming Healthy consistent with broader Paycom account health.",
        "pulseDate": "2026-04-07"
      },
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
        "pulse": "Healthy",
        "pulseNote": "May 14 — Riley Rogers participated in a 30-min Zoom call with Paycom (3:30 PM PT). Session: TrustRadius & Paycom SHRM event support planning. Mark Fell (AM) also present. Collaborative event strategy for SHRM June conference.",
        "pulseDate": "2026-05-15"
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
    "latestPulseDate": "2026-05-14",
    "opportunities": [
      {
        "opp_id": "0063o000019kHwKAAU",
        "csm": "Varun Tiwari",
        "name": "3Yr Renewal - Unum 2025-2028",
        "arr": 88852,
        "contract_end": "2028-04-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "14th May'26 : VT\n\nThis month's cadence got cancelled as both Chris and Joey were unavailable .\nDespite sharing the alternate slots Joey requested to rather connect next month\n\nThey're lock in 3 years deal ,despite having the open conversations they don't take any actions. \n\n\nMore than Chris we would need to align with Joey on the next steps to drive strategic value to this account ",
        "pulseDate": "2026-05-14"
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
    "lastOutbound": "2026-03-31",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-07",
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000OrQHNYA3",
        "csm": "Andy Lim",
        "name": "MK - Toast Renewal",
        "arr": 84000,
        "contract_end": "2027-03-07",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Renewal stepped up from $74K to $84K in Dec 2025 — customer paying more into Year 2. Dan Pacifico reported strong ROI: \"$1.6M in AR for new biz just from non-MQL\" using behavioral MQL scores and \"at least one to five wins a week\" consistently for two years. Monthly sync cadence accepted April 1. Dan proactively shared a 2026 expansion roadmap on March 31 covering account-based scoring, international expansion (Ireland/UK), and retail segment entry. Toast Q1 2026 financial strength (+22% YoY revenue, ~7,000 net new locations) supports continued investment. Confirming Healthy.",
        "pulseDate": "2026-06-10"
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-11-13",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000DE5A1YAL",
        "csm": "Nick Johnson",
        "name": "Renewal - Telefonica Win Back 2025",
        "arr": 81000,
        "contract_end": "2026-11-13",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-30",
    "latestPulseDate": "2026-05-12",
    "opportunities": [
      {
        "opp_id": "006RN00000OpuklYAB",
        "csm": "Andy Lim",
        "name": "TR - Cvent - CVP, IDL, Intent Data Trial,  Mktg Report Bundle - 04.30.2025",
        "arr": 40000,
        "contract_end": "2026-04-29",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": "2026-05-01"
      },
      {
        "opp_id": "006RN00000UohN6YAJ",
        "csm": "Andy Lim",
        "name": "Cvent - IDL - 2026",
        "arr": 40000,
        "contract_end": "2027-01-30",
        "deal_type": "Expansion",
        "pulse": "Healthy",
        "pulseNote": "IDL campaign live and pacing well — 151 of 500 leads delivered as of May 4. Kenny O'Connor confirmed lead value directly (\"the leads have been useful on my end\") and stated this is \"a big piece of our Q2 plan.\" 2026 IDL closed won March 3 with budget pre-approved post late-2025 results analysis. Blackstone-backed Cvent in aggressive growth mode ($700M+ M&A) signals strong budget environment. Anderson proactively filed a 30-day extension on the supporting renewal to protect service continuity. First pulse establishing baseline at Healthy.",
        "pulseDate": "2026-05-12"
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
    "lastOutbound": "2026-04-14",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-19",
    "latestPulseDate": "2026-05-13",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq1KEYAZ",
        "csm": "Riley Rogers",
        "name": "TR - TriNet - CVP, Cat Intent Data,  Mkt Report - 01.20.2025",
        "arr": 78189,
        "contract_end": "2027-01-19",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 12 '26 · RR — Customer call logged (no transcript available). Riley engaged with TriNet on TrustRadius opportunity. Cadence maintained.",
        "pulseDate": "2026-05-13"
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
    "lastOutbound": "2026-04-16",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-04",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN00000Opp6RYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Procore - IDL - 06.05.2025",
        "arr": 15000,
        "contract_end": "2026-06-04",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opp6MYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Procore - IDL - 07.10.2025",
        "arr": 30000,
        "contract_end": "2026-07-09",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000Opuk5YAB",
        "csm": "Divyam Dewan",
        "name": "TR - Procore - CVP  SSO - 09.20.2025",
        "arr": 32000,
        "contract_end": "2026-09-19",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Divyam Dewan participated in a 30-min Zoom monthly sync with Procore TrustRadius (5:30 PM PT). No transcript available; attributed to account CSM. Regular monthly engagement maintained.",
        "pulseDate": "2026-05-15"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-10-20",
    "latestPulseDate": "2026-05-13",
    "opportunities": [
      {
        "opp_id": "006RN00000CmjolYAB",
        "csm": "Divyam Dewan",
        "name": "Renewal - Omnissa (former Vmware EUC) - Opp Gen - Global 2025",
        "arr": 74995,
        "contract_end": "2027-10-20",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 12 '26 · DD — Customer call logged (no transcript available). Divyam engaged with Omnissa on platform renewal and data delivery cadence. Cadence maintained.",
        "pulseDate": "2026-05-13"
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-03-28",
    "latestPulseDate": "",
    "opportunities": []
  },
  {
    "accountId": "0013o00002U1skmAAB",
    "accountName": "OpenAI OpCo, LLC",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 72600,
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-29",
    "latestPulseDate": "2026-04-30",
    "opportunities": [
      {
        "opp_id": "006RN00000Exig5YAB",
        "csm": "Divyam Dewan",
        "name": "Renewal - OpenAI - Sales Ops 2025",
        "arr": 72600,
        "contract_end": "2026-12-29",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "29 Apr '26 : DD | OAI / HG Insights Technographics (30 min, Google Meet)\n\nOpenAI GTM Innovation team exploring technographic data for cloud stack analysis — specifically mapping AWS Bedrock, Azure, GCP, Anthropic, and Gemini adoption. Divyam agreed to provide data samples and pricing for 50k, 500k, and 3M account tiers. Strong new use case interest from GTM Innovation team as a secondary engagement beyond the primary Sales Ops relationship.",
        "pulseDate": "2026-04-30"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-07",
    "latestPulseDate": "2026-06-10",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukNYAR",
        "csm": "Riley Rogers",
        "name": "TR - Zoom - SSO Connection - 07.08.2025",
        "arr": 2000,
        "contract_end": "2026-07-07",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "SSO connection executed July 2025, in adoption stage. No new friction signals. Confirming Healthy.",
        "pulseDate": "2026-06-10"
      },
      {
        "opp_id": "006RN00000BwjZVYAZ",
        "csm": "Andy Lim",
        "name": "Renewal - Zoom EMEA Midmarket POC 2025",
        "arr": 15000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Renewal processed and signed (October 2025), enablement session held Oct 10 with Laura, Nikhil sees use case and confirmed Laura as budget holder. Working with Alexander Group partner on enrichment requirements. Engagement steady. First pulse establishing baseline at Healthy.",
        "pulseDate": "2026-05-12"
      },
      {
        "opp_id": "006RN00000Oq7eKYAR",
        "csm": "Riley Rogers",
        "name": "TR - Zoom - CVP x2 - 01.24.2026 (Written Renewal)",
        "arr": 55000,
        "contract_end": "2027-01-23",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Written renewal executed Jan 24, 2026. Camille (Zoom POC) described as positive and collaborative — extra 2,500 credits already approved with intent to add more, Buyer's Choice qualified across Workplace, Contact Center, and Revenue Accelerator. Camille proactively invited an in-person QBR/working session in Denver, signaling openness to deeper partnership. Confirming Healthy.",
        "pulseDate": "2026-06-10"
      }
    ]
  },
  {
    "accountId": "001d000001TsgyFAAR",
    "accountName": "LogicMonitor, Inc.",
    "csm": "Atisha Waghela",
    "csmKey": "atisha",
    "am": "Tyler Neubauer",
    "segment": "SMB",
    "arr": 70000,
    "lastOutbound": "2026-04-08",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-07-28",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukPYAR",
        "csm": "Brett Castonguay",
        "name": "TR - LogicMonitor - CVP + Mktg Report Bundle - 07.29.2025",
        "arr": 30000,
        "contract_end": "2026-07-28",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      },
      {
        "opp_id": "006RN00000ITZUhYAP",
        "csm": "Brett Castonguay",
        "name": "Renewal - LogicMonitor - Platform and SFDC  2026",
        "arr": 40000,
        "contract_end": "2027-03-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "latestPulseDate": "2026-05-22",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukkYAB",
        "csm": "Riley Rogers",
        "name": "TR - RingCentral - CVP x3 - 07.28.2025",
        "arr": 68000,
        "contract_end": "2026-07-27",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Ringcentral agreed to 3 year deal for 4 subscribed products.  Anderson sending over docusign.",
        "pulseDate": "2026-05-22"
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
    "lastOutbound": "2026-03-04",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-06-30",
    "latestPulseDate": "2026-04-07",
    "opportunities": [
      {
        "opp_id": "006RN000009Ay4AYAS",
        "csm": "Riley Rogers",
        "name": "Renewal - airbase 2025",
        "arr": 28775,
        "contract_end": "2026-06-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "Airbase renewal opp carrying the same account-level risk signals as the CVP opp — zero usage metrics, expansion declination by Luke Riegert (2/9), and AM transition instability (3 transitions in 6 months). No independent positive signals for this record. Maintaining Concerning in alignment with broader Paylocity trajectory.",
        "pulseDate": "2026-04-07"
      },
      {
        "opp_id": "006RN00000OpukGYAR",
        "csm": "Riley Rogers",
        "name": "TR - Paylocity - CVP - 08.12.2025",
        "arr": 37500,
        "contract_end": "2026-08-11",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "FY27 HG platform expansion explicitly declined by Luke Riegert on 2/9 — a clear contraction signal. Platform usage metrics at zero indicating no active engagement with TrustRadius tools. Three account manager transitions in the past 6 months have created relationship continuity risk. Downgrading from Very Satisfied. Recovery requires reestablishing stakeholder relationships post-transition and demonstrating ROI before the August renewal.",
        "pulseDate": "2026-04-07"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-10-22",
    "latestPulseDate": "2026-06-11",
    "opportunities": [
      {
        "opp_id": "006RN00000CfViUYAV",
        "csm": "Varun Tiwari",
        "name": "Renewal - Mon2025",
        "arr": 65000,
        "contract_end": "2026-10-22",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "12TH June'26: VT\n\n\n MongoDB Marketing Team Introductions\n\n- Daniel Ayub: leads Digital Ops, manages tracking, attribution, web analytics, and audience activation for Hunter’s team\n- Hunter McLaughlin: Digital Acquisition, runs paid ads and executes ABM initiatives with regional teams\n- Sean Flynn: Group Marketing (Dublin), focused on telemetry to identify high-potential companies\n\n\nExecutive Summary:\n\nMet with MongoDB's marketing leadership team to introduce HG Insights capabilities and explore potential marketing use cases. Currently, HG data is primarily leveraged by sales teams(by Will), with limited awareness and adoption within marketing. The discussion focused on identifying a focused pilot use case that can demonstrate value before expanding into broader ABM, audience targeting, and campaign optimization initiatives.\n\nKey Updates:\n-Introduced HG Insights capabilities to Daniel -Ayub, Hunter McLaughlin, and Sean Flynn.\n-HG data is currently used only within sales workflows; marketing relies primarily on Clearbit and ZoomInfo.\n-MongoDB acknowledged limitations in existing technographic data and expressed interest in exploring HG's technology install intelligence.\n-Hunter highlighted two potential opportunities:\nAccount prioritization and ranking for ABM programs.\n-Audience creation and testing for paid acquisition campaigns.\n-Daniel confirmed HG data already exists within MongoDB's data warehouse and is mapped to Salesforce IDs.\n-Agreed to focus on a single high-impact use case before broader activation.\n\n\nRisks:\n-Limited awareness and adoption of HG data within marketing teams.\n-Existing campaign planning is largely driven by regional sales input rather than data-driven prioritization.\n-Attempting multiple use cases simultaneously could dilute focus and slow adoption.\n\n-Opportunities\n-Introduce objective account prioritization into ABM planning.\n-Enhance paid campaign targeting through technographic and install-base intelligence.\n-Leverage existing Salesforce and warehouse integrations to accelerate activation.\n-Expand HG adoption beyond sales into broader marketing operations.\n\nProduct Support Required:\nNA\n\n\nNext Steps:\nHG Insights\n\n-Send meeting recap and recommendations (Ziad).\nPrepare tailored enablement materials based on the selected use case (Varun/Ziad).\n\nMongoDB:\n-Align internally and nominate one priority use case (Hunter, Daniel, Sean).\n-Identify success criteria and stakeholders for the initial pilot.\n\nOverall Assessment\nArea\tStatus\nCustomer Engagement\t🟢 Strong\nMarketing Adoption\t🟡 Early Stage\nData Accessibility\t🟢 Available\nPOC Readiness\t🟢 High\nExpansion Opportunity\t🟢 High\nBottom Line\n\nMongoDB's marketing team sees potential value in HG data but has not yet operationalized it within their workflows. A focused POC around ABM account prioritization or audience targeting presents a strong opportunity to demonstrate impact and drive broader adoption across marketing.",
        "pulseDate": "2026-06-11"
      }
    ]
  },
  {
    "accountId": "001d0000026EKBVAA4",
    "accountName": "Blackbaud, Inc.",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 61824.6,
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-28",
    "latestPulseDate": "2026-05-04",
    "opportunities": [
      {
        "opp_id": "006RN00000OpukXYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Blackbaud Raiser's Edge NXT  Financial Edge NXT - Ultimate+ x2, Intent Data x2,  IDL - 06.29.2025",
        "arr": 61824.6,
        "contract_end": "2026-06-28",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Strong, strategic TR partnership with Jaelon as a highly engaged program owner. RE/FE IDL campaigns are actively running — RE leads delivered April 20, FE in progress. Biweekly cadence consistently maintained. June 2026 renewal planning should begin.\n\nJan 26: Divyam introduced as new CSM\nFeb 10: IDL kickoff prep for RE/FE campaigns\nMar 25: Product launch support session — Raiser's Edge NXT update\nApr 6 / Apr 8: IDL progress review and recommendation review; RE leads delivered Apr 20\n\nPositives:\n\nIDL campaigns live and delivering (RE leads sent Apr 20; FE in progress); biweekly cadence solid\nLeadership investing in 3rd-party reviews for LLM/AI visibility — strong strategic alignment\n\nNegatives:\n\nG2 relationship is an active competitive risk; review gen volume still below program potential\nExec Brad (sponsor) only mildly engaged — limited depth at leadership level\n\nNext Steps:\n\nHG: Drive FE IDL delivery and performance review; build a leadership value 1-pager on TR + AI/LLM review impact\nHG: Initiate June 2026 renewal conversation with Jaelon\nBlackbaud (Jaelon): Share FE IDL feedback; explore YourCause expansion potential",
        "pulseDate": "2026-05-04"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-27",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN00000KVHnRYAX",
        "csm": "Divyam Dewan",
        "name": "Lumen Technologies",
        "arr": 60000,
        "contract_end": "2026-06-27",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Divyam Dewan led a 30-min Zoom weekly sync with Lumen Technologies (7:30 PM PT). Renewal discussion took place; Hayden Smith (AM) also present. Active renewal conversation underway.",
        "pulseDate": "2026-05-15"
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
    "lastOutbound": "2026-04-20",
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
    "lastOutbound": "2026-04-20",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-08-31",
    "latestPulseDate": "2026-06-08",
    "opportunities": [
      {
        "opp_id": "006RN00000IJTVQYA5",
        "csm": "Divyam Dewan",
        "name": "Safaricom - Kgolo",
        "arr": 50000,
        "contract_end": "2026-08-31",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "",
        "pulseDate": "2026-06-08"
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
    "lastOutbound": "2026-04-21",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-30",
    "latestPulseDate": "2026-05-07",
    "opportunities": [
      {
        "opp_id": "006RN00000Dvp1VYAR",
        "csm": "Varun Tiwari",
        "name": "Renewal - Alight- Global  2025",
        "arr": 49990,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "6th May '26 : VT | Alight Solutions LLC — 30 min Teams call at 18:30 PT.\n\nCall with Alight team (Betsy / Ally and team). Account remains in concerning health following organizational restructuring and leadership transition. Salesforce connector activation pending — category and vendor shortlist approval needed from Betsy and Nadine before Carolyn can proceed. Benefits-focused tracking configuration in progress.\n\nKey risks: slow internal alignment due to org changes; Betsy's availability inconsistent; 6sense prioritized over HG by some internal stakeholders. Recent renewal at reduced ARR (~$50K) reflects budget constraints.\n\nSentiment: Concerning — Account stabilized at reduced scope but activation progress slow; maintaining engagement with Ally is critical for demonstrating value ahead of next renewal.",
        "pulseDate": "2026-05-07"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-12-31",
    "latestPulseDate": "2026-05-15",
    "opportunities": [
      {
        "opp_id": "006RN00000F4tlGYAR",
        "csm": "Atisha Waghela",
        "name": "Renewal - Jordana - Strada Global (Alight 2026",
        "arr": 49350,
        "contract_end": "2026-12-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 14 — Atisha Waghela led a 30-min Zoom call with Strada U.S. Professional Services (1:30 PM PT). Session titled \"HGI & Strada Global\" — ongoing engagement and account sync.",
        "pulseDate": "2026-05-15"
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
    "lastOutbound": "2026-04-22",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-06-10",
    "latestPulseDate": "2026-05-27",
    "opportunities": [
      {
        "opp_id": "006RN00000AABu5YAH",
        "csm": "Atisha Waghela",
        "name": "Renewal - Cognizant resell 2025",
        "arr": 45000,
        "contract_end": "2026-06-10",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Almost close to completing the vendor registration and have initiated discussion on renewal order form too. Engagement is ongoing.",
        "pulseDate": "2026-05-27"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-18",
    "latestPulseDate": "2026-05-04",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7c9YAB",
        "csm": "Divyam Dewan",
        "name": "TR - HubSpot - Ultimate - 03.19.2026 (Written Renewal)",
        "arr": 42822,
        "contract_end": "2027-03-18",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Renewal closed through March 2027. Active India RGIF/RGIP expansion pilot ($30K ARR) targeting a May 31 close. Jordan Montgomery engaged on review gen toward Top Rated for 4 products. Separately, we are working to get introductions to other HubSpot teams to explore HG cross-sell opportunities.\n\nJan 2026: Jordan targeting Top Rated across 4 products; Better Together pilot info shared\nMar 27: LLM Optimization & TrustRadius Strategy session\nApr 2026: Written renewal confirmed through March 2027\n\nPositives:\n\nRenewal secured through 2027; India pilot in progress with May 31 target close\nCross-sell intros to other HubSpot teams being pursued — potential HG expansion\n\nNegatives:\n\nIndia pilot timeline is tight — May 31 close needs active follow-through\nEB Lisa Zimmerman on maternity leave — executive coverage gap\n\nNext Steps:\n\nHG: Confirm India RGIF/RGIP pilot status ahead of May 31 close; identify interim EB coverage\nHG: Progress intro requests to other HubSpot teams for HG cross-sell conversations\nHubSpot (Jordan): Confirm pilot reaction from DG team; advance Top Rated review targets",
        "pulseDate": "2026-05-04"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2026-07-15",
    "latestPulseDate": "2026-05-12",
    "opportunities": [
      {
        "opp_id": "006RN00000OpsWyYAJ",
        "csm": "Andy Lim",
        "name": "TR - FactSet - CVP, Lead Acceleration, Form BANT Leads - 07.16.2025",
        "arr": 40000,
        "contract_end": "2026-07-15",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "IDL delivered 100/100 leads ahead of schedule (March 23), with Aidan describing lead quality as exceeding expectations: \"we're kind of all surprised by the quality of the leads with the market report.\" FactSet won Buyer's Choice 2026 and qualified for Top Rated 2026 (announcing June 10). Aidan responded positively to the $62K Bloomberg displacement upsell — \"really does match up very well.\" June 10 renewal meeting confirmed (3pm BST). FactSet financially strong with raised FY2026 guidance. First pulse establishing baseline at Healthy.",
        "pulseDate": "2026-05-12"
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
    "latestPulseDate": "2026-05-29",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7fjYAB",
        "csm": "Brett Castonguay",
        "name": "TR(Opportunity Cleanup) - Oracle NetSuite - CVP - 10.01.2025 (Written Renewal) _ CLOSED IN TR",
        "arr": 35000,
        "contract_end": "2026-09-30",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "May 29, 2026 | PH — Confirming Healthy pulse following first sync with David Kearney (Sr. Demand Gen, NetSuite) on May 21. Relationship is strong: warm, easy rapport, monthly cadence locked in (3rd Thursday), and we're planning an in-person Durham meetup. David clearly stated intent to continue the CVP/IDL program at current levels.\n\nCustomer sentiment is positive on TrustRadius value — Top Rated 2025 announcement landed well, ~7 LLM crawler hits in last 30 days resonated, and David is actively interested in the LLM/GEO dashboards landing in 4-6 weeks. He acknowledged IDL demand-gen performance is \"not that strong\" (3 SQLs from 255 leads) but framed TrustRadius as a brand/reviews play, not a pipeline driver — no churn signal. SFDC Pulse remains \"Extremely Satisfied\" and this is the 4th consecutive year at $35K ARR.\n\nWatch items (not yet risk-level): (1) $35K invoice #104470 stuck in Oracle supplier portal — Sanjeev working the supplier support desk workaround as of 5/27, need to confirm resolution; (2) Renewal opp still Stage 2 with Sept 30 close — Mardigan needs to advance; (3) Lauren Dattilo and Danielle (NetSuite reviews leads) not yet engaged on Top Rated promotion; (4) Nia out on mat leave ~June 8 — Scott Stater not yet introduced to David; (5) Oracle \"better together\" HG+TR data story warm but needs Mark Fell to drive.\n\nNote: Vitally automated health score is 10/100, which contradicts the manual Healthy categorization and SFDC \"Extremely Satisfied\" — flagging separately for ops review; not driving pulse.",
        "pulseDate": "2026-05-29"
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
    "lastOutbound": "2026-04-23",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-19",
    "latestPulseDate": "2026-06-03",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7c6YAB",
        "csm": "Divyam Dewan",
        "name": "TR - Xero - CVP - 03.20.2026 (Written Renewal)",
        "arr": 32400,
        "contract_end": "2027-03-19",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "",
        "pulseDate": "2026-06-03"
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
    "lastOutbound": "",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-03-31",
    "latestPulseDate": "2026-05-04",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7bqYAB",
        "csm": "Divyam Dewan",
        "name": "TR - Genesys - CVP - 04.01.2026 (Written Renewal)",
        "arr": 30000,
        "contract_end": "2027-03-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Flagship TrustRadius account — #1 category rank, 8.9 TRScore, exec sponsor Sam Bader consistently engaged. CVP renewal was approved and pricing sent in January; written renewal date was April 1. Confirm paperwork is executed. Strong 2-year runway post-renewal.\n\nJan 22 / Jan 27: Sam Bader requested renewal kickoff; CVP approved, leads not re-purchased; pricing sent to procurement\nFeb 19: Confirmed very healthy — biweekly meetings, KPIs being met, TrustQuotes and Trusted Seller active\nApr 1: Written renewal date — confirm execution status\n\nPositives:\n\n#1 category, 8.9 score, Trusted Seller, 54 tagged TrustQuotes; exec engagement biweekly\nRenewal approved and in procurement; strong account runway through April 2028\n\nNegatives:\n\nWritten renewal date passed (Apr 1) — paperwork confirmation needed\nIntent leads not re-purchased this cycle; premium content not yet activated\n\nNext Steps:\n\nHG: Confirm April renewal paperwork received and executed\nHG: Advance TrustQuotes widget and profile optimization; revisit intent data with a case study\nGenesys (Sam/Ethan): Confirm renewal execution; share TrustQuotes performance feedback",
        "pulseDate": "2026-05-04"
      }
    ]
  },
  {
    "accountId": "001RN00000dg5ZZYAY",
    "accountName": "Accel4",
    "csm": "Nick Johnson",
    "csmKey": "nick",
    "am": "Angus Hyams",
    "segment": "Commercial",
    "arr": 30000,
    "lastOutbound": "2026-04-23",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2027-02-11",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000VL62BYAT",
        "csm": "Nick Johnson",
        "name": "SAP Partner Program: Accel4",
        "arr": 30000,
        "contract_end": "2027-02-11",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-10-12",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000P045IYAR",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds",
        "arr": 30000,
        "contract_end": "2026-10-12",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-11-10",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Qtg2tYAB",
        "csm": "Nick Johnson",
        "name": "SAP Partner Program: Dintec",
        "arr": 30000,
        "contract_end": "2026-11-10",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-11-23",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000RnsULYAZ",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds: E-Strategy",
        "arr": 30000,
        "contract_end": "2026-11-23",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-10-12",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Oo7uwYAB",
        "csm": "Nick Johnson",
        "name": "Kaar Technologies Pvt Ltd",
        "arr": 30000,
        "contract_end": "2026-10-12",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "lastOutbound": "2026-04-22",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "2026-05-16",
    "opportunities": [
      {
        "opp_id": "006RN00000RUUCQYA5",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds: Korcomptenz",
        "arr": 30000,
        "contract_end": "2026-11-30",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "5/15 NJ: Korcomptenz — Platform matching and uploads session (8:30 AM PT, 30 min). SFDC calendar event confirmed; no Weflow recording captured. Nick Johnson held a platform matching/uploads call with Korcomptenz. Account is part of the SAP Partner programme managed on a 1:many cohort basis. Maintaining Concerning pulse — limited direct CSM relationship depth under the SAP MDF model; renewal visibility still limited despite continued engagement activity.",
        "pulseDate": "2026-05-16"
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
    "lastOutbound": "2026-04-23",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-10-16",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000QEZi6YAH",
        "csm": "Nick Johnson",
        "name": "SAP Partner MDF Funds",
        "arr": 30000,
        "contract_end": "2026-10-16",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-11-30",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000RJN6GYAX",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds: Phoenix Team",
        "arr": 30000,
        "contract_end": "2026-11-30",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-10-19",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Oo2bxYAB",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds",
        "arr": 30000,
        "contract_end": "2026-10-19",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-10-16",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Pl7E9YAJ",
        "csm": "Nick Johnson",
        "name": "Syskoplan SAP MDM",
        "arr": 30000,
        "contract_end": "2026-10-16",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-10-12",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Oo6Z4YAJ",
        "csm": "Nick Johnson",
        "name": "SAP MDF Funds VAAS",
        "arr": 30000,
        "contract_end": "2026-10-12",
        "deal_type": "New Subscription",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "lastOutbound": "2026-04-24",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2027-06-29",
    "latestPulseDate": "2026-05-11",
    "opportunities": [
      {
        "opp_id": "006RN00000GQ4unYAD",
        "csm": "Nick Johnson",
        "name": "Sopra Steria - Alan - BD",
        "arr": 28000,
        "contract_end": "2027-06-29",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "First pulse for Sopra Steria, establishing baseline at Concerning. Org health is Concerning with multiple CS interventions (2). Team is unresponsive to regular cadence requests — last pulse notes (Mar 6) state 'chased the team but no response.' Using platform but no exports. Significant data quality complaints raised by Ivy Tun in Dec 2025 around entity selection, financial totals, industry misclassifications, and duplicate entries. Sales Process risk flagged. Next step: Re-engage Alan and team; address outstanding data quality concerns with Engineering/Data Ops.",
        "pulseDate": "2026-05-11"
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
    "latestPulseDate": "2026-05-04",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7e9YAB",
        "csm": "Divyam Dewan",
        "name": "TR - Globoforce Workhuman - CVP - 01.31.2026 (Written Renewal)",
        "arr": 27000,
        "contract_end": "2028-01-31",
        "deal_type": "Renewal",
        "pulse": "Healthy",
        "pulseNote": "Account is in good health. Renewal was confirmed as a written renewal in January 2026, providing a strong runway through early 2028. Engagement has been progressing well with the customer's team on their review program and TrustRadius objectives.\n\nNov 2025 – Jan 2026: New POC engagement; SEO TR report conducted; TrustQuotes and Trusted Seller in progress\nJan 31: Written renewal executed\n\nPositives:\n\nRenewal secured through 2028; strong program performance with active POC\nGood TRScore and category ranking with clear ROI signals\n\nNegatives:\n\nJan 31 renewal date has passed — confirm paperwork is in Vitally records\n\nNext Steps:\n\nHG: Confirm renewal is logged and active in Vitally\nHG: Progress profile optimization, SEO report delivery, and TrustQuotes activation\nWorkhuman: Review open action items from last sync and provide feedback",
        "pulseDate": "2026-05-04"
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
    "lastOutbound": "2026-04-24",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2027-01-31",
    "latestPulseDate": "2026-04-27",
    "opportunities": [
      {
        "opp_id": "006RN00000SEK3ZYAX",
        "csm": "Atisha Waghela",
        "name": "SFDC - ASEAN",
        "arr": 25000,
        "contract_end": "2027-01-31",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "Strong engagement with the team\nThey do have few negative feedbacks about the data leading to trust issues but we are working through it.\nThey are the verge of exhaustion of credits but data issues are hindering the expansion opp.",
        "pulseDate": "2026-04-27"
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
    "lastOutbound": "2026-04-24",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-04-29",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000OpulDYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Paychex - CVP - 4.30.2025",
        "arr": 22050,
        "contract_end": "2026-04-29",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
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
    "latestPulseDate": "2026-01-12",
    "opportunities": [
      {
        "opp_id": "006RN00000J41dmYAB",
        "csm": "Divyam Dewan",
        "name": "Africa Airtel - Anicet",
        "arr": 22000,
        "contract_end": "2027-05-28",
        "deal_type": "New Subscription",
        "pulse": "Concerning",
        "pulseNote": "Customer in dark",
        "pulseDate": "2026-01-12"
      }
    ]
  },
  {
    "accountId": "001d000001imbDeAAI",
    "accountName": "Paycor Inc.",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Anderson Duncan",
    "segment": "Enterprise",
    "arr": 20000,
    "lastOutbound": "2026-04-24",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-04-30",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7eVYAR",
        "csm": "Divyam Dewan",
        "name": "TR - Paycor - CVP + Cat Intent Data - 01.15.2026 (Written Renewal)",
        "arr": 20000,
        "contract_end": "2026-04-30",
        "deal_type": "Renewal",
        "pulse": null,
        "pulseNote": null,
        "pulseDate": null
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
    "lastOutbound": "2026-04-17",
    "pulse": "Poor",
    "pulseNote": "",
    "pulseColor": "red",
    "renewalDate": "2026-12-30",
    "latestPulseDate": "2026-04-27",
    "opportunities": [
      {
        "opp_id": "006RN00000Br4f4YAB",
        "csm": "Varun Tiwari",
        "name": "Ciena Renewal - Opp Gen - 2023/2025",
        "arr": 30000,
        "contract_end": "2026-12-30",
        "deal_type": "Renewal",
        "pulse": "Concerning",
        "pulseNote": "27th Apr'26 : VT\n\nEngagement Update:  Received a response after multiple outreach attempts from Calum\nCurrent Status: Customer is largely self-sufficient with the platform\nUsage Trend: Lower platform usage/exports in March–April due to paternity leave\n\nNext Steps:\nAgreed to a monthly check-in cadence\nNext touchpoint to be scheduled post return (after 28th May)\n\nCustomer Interest Areas:\nWants better visibility into consumption metrics\nOpen to joining future product roadmap sessions if aligned with interests\n\nLargely, Ciena has been a low-touch customer and has remained unresponsive despite multiple outreach attempts. Their primary business is driven through partners, so their main need is exporting data to share with them. As a result, it’s been challenging to engage them in conversations around new capabilities.(I managed to retain this account in Dec 2025 after churn notice after agreeing to few changes in contract and down-sell)",
        "pulseDate": "2026-04-27"
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
    "lastOutbound": "2026-05-12",
    "pulse": "Healthy",
    "pulseNote": "",
    "pulseColor": "green",
    "renewalDate": "2029-04-14",
    "latestPulseDate": "2026-06-03",
    "opportunities": [
      {
        "opp_id": "006RN00000RaePDYAZ",
        "csm": "Varun Tiwari",
        "name": "CBTS",
        "arr": 140004,
        "contract_end": "2029-04-14",
        "deal_type": "New Subscription",
        "pulse": "Healthy",
        "pulseNote": "3rd June'26 : VT\n\n\nExecutive Summary\nData delivery is largely on track, with 9 data files successfully prepared and uploaded to the S3 bucket today. The only outstanding dependency is the contact file delivery, which is pending execution of a SOC2/PII data-sharing agreement. A file format compatibility issue was identified during the call and is being addressed through a test delivery before the full dataset is refreshed.\n\nKey Updates:\n-9 data files are available in the S3 bucket.\n-Contact file delivery remains on hold pending SOC2/PII agreement execution( to be delivered by next week)\n\nFile format issue identified:\nCurrent format: Parquet with gzip compression.\nCBTS requires Parquet with gz compression for Apache PySpark processing.\nTest file to be delivered by end of day for validation.\nCBTS plans to ingest data into Microsoft Fabric and process it using Apache PySpark before creating queryable tables.\n\nDecision Points:\nValidate test file compatibility before rerunning the full delivery.\nExecute the SOC2/PII agreement to enable contact data delivery.\nConfirm legal approval on CBTS side for process and expected turnaround time for contract review.\n\nNext Steps:\n\nHG Insights\n\n-Deliver test file with updated compression format by EOD.\n-Share SOC2/PII agreement (Varun to locate; otherwise Zia to send upon return tomorrow).\n-Refresh and deliver the full dataset once format validation is complete.(Omkar)\n\nCBTS:\n-Validate test file compatibility within the Microsoft Fabric/PySpark environment.(Tim)\n-Route the SOC2 agreement through legal review.(Tim)\n-Remove outdated gzip test files from the S3 bucket.(once the GZ files are uploaded and approved) (Tim)\n\nExpected Timeline:\n\n-SOC2 agreement signature target: Monday.\n-Contact file delivery target: Tuesday–Wednesday next week.\n\nOverall Assessment\nArea\tStatus\nData Delivery Progress\t🟢 On Track\nFile Format Validation\t🟡 In Progress\nContact Data Delivery\t🟡 Pending Contract\nTechnical Readiness\t🟢 Strong\n\n\nBottom Line: The engagement remains on track, with the primary dependency being execution of the SOC2/PII agreement. Once file format validation is completed and the agreement is signed, full data delivery should proceed as planned.",
        "pulseDate": "2026-06-03"
      }
    ]
  },
  {
    "accountId": "0013o00002dARmaAAG",
    "accountName": "Okta Ventures",
    "csm": "Divyam Dewan",
    "csmKey": "divyam",
    "am": "Ziad Amira",
    "segment": "Enterprise",
    "arr": 103900,
    "lastOutbound": "2026-05-14",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2028-03-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Oq7bpYAB",
        "csm": "",
        "name": "TR - Okta - CVP  Buyer Intel x 6 - 04.01.2026",
        "arr": 103900,
        "contract_end": "2028-03-31",
        "deal_type": "Renewal",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      }
    ]
  },
  {
    "accountId": "001d000001yQmH0AAK",
    "accountName": "Ernst Young LLP",
    "csm": "",
    "csmKey": "",
    "am": "David Garcia Thomas",
    "segment": "Strategic",
    "arr": 25000,
    "lastOutbound": "2026-05-13",
    "pulse": "",
    "pulseNote": "",
    "pulseColor": "gray",
    "renewalDate": "2026-10-31",
    "latestPulseDate": "",
    "opportunities": [
      {
        "opp_id": "006RN00000Pa2bBYAR",
        "csm": "",
        "name": "EY P- strategy and transactions - new batch",
        "arr": 25000,
        "contract_end": "2026-10-31",
        "deal_type": "Expansion",
        "pulse": "",
        "pulseNote": "",
        "pulseDate": ""
      }
    ]
  }
];

