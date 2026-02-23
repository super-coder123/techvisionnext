export interface ServiceContent {
  title: string;
  heroDescription: string;
  features: string[];
  docsRequired: string[];
  mainParagraph: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
}

export const serviceData: Record<string, ServiceContent> = {
  // === BUSINESS REGISTRATIONS ===
  "private-limited-company-registration": {
    title: "Private Limited Company Registration",
    heroDescription: "Incorporate your business as a Private Limited Company (Pvt Ltd) to enjoy limited liability and a global corporate status.",
    features: ["Digital Signature (DSC) Included", "MOA & AOA Drafting", "Dedicated Account Manager", "Free PAN & TAN"],
    docsRequired: ["Director PAN & Aadhaar", "Passport Size Photos", "Rent Agreement/Utility Bill", "NOC from Owner"],
    mainParagraph: "A Private Limited Company is the most popular legal structure for startups in India. It offers a separate legal identity and limits the liability of shareholders, making it easier to raise capital.",
    benefits: ["Limited Liability Protection", "Separate Legal Entity", "Higher Credibility", "Ease of Raising Capital"],
    faqs: [{ q: "Minimum directors required?", a: "A minimum of 2 directors are required." }]
  },
  "public-limited-company-registration": {
    title: "Public Limited Company Registration",
    heroDescription: "Scale your business to the maximum level with a Public Limited Company, allowing for public fundraising and stock exchange listing.",
    features: ["Stock Exchange Readiness", "Unlimited Shareholders", "Transparency & Trust", "Enhanced Capital Base"],
    docsRequired: ["7 Shareholders Info", "3 Directors Info", "DIN & DSC for all Directors", "Office Address Proof"],
    mainParagraph: "Public Limited Companies are suitable for large enterprises. They can raise funds from the general public and have more stringent compliance requirements to ensure transparency.",
    benefits: ["Unlimited Capital Raising", "Brand Visibility", "Easy Transferability of Shares", "Growth Potential"],
    faqs: [{ q: "How many shareholders are needed?", a: "A minimum of 7 shareholders are required." }]
  },
  "one-person-company-registration": {
    title: "One Person Company (OPC) Registration",
    heroDescription: "Perfect for solo entrepreneurs who want the status of a company with full control.",
    features: ["Single Owner Control", "Corporate Legal Status", "Limited Liability", "Lower Compliances"],
    docsRequired: ["Owner's PAN & Aadhaar", "Nominee's Consent", "Office Rent Agreement", "Electricity Bill"],
    mainParagraph: "OPC allows a single person to manage a corporate entity while protecting their personal assets from business liabilities.",
    benefits: ["Sole Control", "Limited Liability", "No Minimum Capital", "Perpetual Succession"],
    faqs: [{ q: "Is a nominee required?", a: "Yes, a nominee must be appointed in case the owner is unable to act." }]
  },
  "limited-liability-partnership": {
    title: "LLP Registration",
    heroDescription: "Combine the benefits of a partnership and a company with Limited Liability Partnership.",
    features: ["Low Compliance Cost", "No Minimum Capital", "Flexible Agreement", "No Audit up to 40L Turnover"],
    docsRequired: ["Partner PAN & Aadhaar", "Address Proof of Partners", "LLP Agreement", "Office Address Proof"],
    mainParagraph: "LLP is an alternative corporate business form that gives the benefits of limited liability of a company and the flexibility of a partnership.",
    benefits: ["Limited Liability", "Operational Flexibility", "Lower Taxes", "Easy to Manage"],
    faqs: [{ q: "Can a company be a partner?", a: "Yes, a corporate body can be a partner in an LLP." }]
  },
  "farmer-producer-company-registration": {
    title: "Farmer Producer Company (FPC) Registration",
    heroDescription: "Empower agricultural producers with a corporate structure to improve income and sustainability.",
    features: ["Farmer Ownership", "Tax Exemptions", "Access to Govt Subsidies", "Better Market Linkage"],
    docsRequired: ["10+ Producer Members info", "Farmer Certificate/7-12 Extract", "Director KYC", "Address Proof"],
    mainParagraph: "An FPC combines the efficiency of a company with the spirit of a cooperative, specifically for those engaged in primary agriculture activities.",
    benefits: ["Collective Bargaining", "Govt Funding Access", "Tax Benefits", "Professional Management"],
    faqs: [{ q: "Minimum members?", a: "A minimum of 10 individuals or 2 producer institutions." }]
  },
  "section-8-ngo-registration": {
    title: "Section-8 NGO Registration",
    heroDescription: "Form a non-profit organization to promote arts, science, commerce, or charity with limited liability.",
    features: ["No Dividend Distribution", "Tax Exemptions (12A/80G)", "Govt Grants Eligibility", "High Social Credibility"],
    docsRequired: ["Director KYC", "Drafted MOA/AOA", "Future Vision Plan", "Office Address Proof"],
    mainParagraph: "Section 8 companies are registered for charitable or non-profit objectives. Profits are reinvested into the cause rather than distributed to members.",
    benefits: ["Tax Benefits", "No Suffix (Pvt Ltd) Required", "Legal Standing", "Grant Access"],
    faqs: [{ q: "Can it be converted to a company?", a: "Yes, but with specific ROC approvals and restrictions." }]
  },
  "section-8-microfinance-company-registration": {
    title: "Section-8 Microfinance Company Registration",
    heroDescription: "Operate a microfinance institution legally as a non-profit entity to provide small loans.",
    features: ["No RBI Capital Requirement", "Legal Money Lending", "Social Impact", "Exemption from NBFC norms"],
    docsRequired: ["Director KYC", "Credit Report", "Business Plan", "Office Proof"],
    mainParagraph: "Section 8 Microfinance is an affordable way to start a lending business for small amounts (Micro-credit) without the huge capital required for an NBFC.",
    benefits: ["Lower Capital Entry", "Legal Lending", "Trust & Transparency", "Exemptions"],
    faqs: [{ q: "Maximum loan amount?", a: "RBI guidelines for micro-credit apply to Section 8 MFIs." }]
  },
  "non-banking-company-registration": {
    title: "NBFC Registration (RBI)",
    heroDescription: "Obtain an RBI license to operate a full-scale Non-Banking Financial Company for lending and investment.",
    features: ["RBI License Support", "Net Owned Fund Compliance", "Asset-Liability Management", "Full Financial Status"],
    docsRequired: ["Certificate of Incorporation", "2 Crore NOF Proof", "Director Professional Background", "Fixed Deposit Proof"],
    mainParagraph: "Starting an NBFC requires a mandatory registration with the RBI. It allows you to perform banking activities like lending, leasing, and investments.",
    benefits: ["High Financial Leverage", "Market Credibility", "Scalable Business", "Structured Lending"],
    faqs: [{ q: "What is the NOF requirement?", a: "Currently, a minimum Net Owned Fund of ₹2 Crores is required." }]
  },
  "nbfc-for-sale": {
    title: "NBFC for Sale / Acquisition",
    heroDescription: "Save 6-12 months of waiting by acquiring an existing RBI-registered NBFC.",
    features: ["Due Diligence Support", "Clean History Check", "RBI Transfer Process", "Ready-to-operate license"],
    docsRequired: ["KYC of New Directors", "Source of Funds", "Share Purchase Agreement", "Board Resolutions"],
    mainParagraph: "Buying an existing NBFC is the fastest way to enter the financial market. We help with the due diligence and the legal transfer of the RBI license.",
    benefits: ["Zero Setup Time", "Immediate Operations", "Established License", "Expert Guidance"],
    faqs: [{ q: "Is RBI approval needed?", a: "Yes, any change in management of an NBFC requires prior RBI approval." }]
  },
  "society-registration": {
    title: "Society Registration",
    heroDescription: "Register a society for charitable, educational, or religious purposes under the Societies Registration Act.",
    features: ["State-level Registration", "Governing Body Formation", "By-laws Drafting"],
    docsRequired: ["7 Members KYC", "Memorandum of Association", "Rules and Regulations", "NOC of Address"],
    mainParagraph: "Societies are commonly used for sports clubs, housing associations, and charitable trusts. It requires a minimum of 7 members.",
    benefits: ["Legal Protection", "Asset Ownership", "Govt Grants", "Tax Exemptions"],
    faqs: [{ q: "Can a society operate nationally?", a: "Usually, it is registered at the state level but can expand its activities." }]
  },
  "political-party-registration": {
    title: "Political Party Registration",
    heroDescription: "Register your political party with the Election Commission of India (ECI) for legal standing.",
    features: ["ECI Compliance", "Constitution Drafting", "Public Notice Support"],
    docsRequired: ["100+ Members Affidavit", "Party Constitution", "Bank Account Details", "Office Address"],
    mainParagraph: "Registering with the ECI allows a party to participate in elections and avail of symbol allotment and tax benefits on donations.",
    benefits: ["Legal Recognition", "Tax Exemption on Donations", "Symbol Allotment", "Electoral Rights"],
    faqs: [{ q: "Minimum members needed?", a: "100 registered electors are required to sign the application." }]
  },
  "nidhi-company-registration": {
    title: "Nidhi Company Registration",
    heroDescription: "Start a mutual benefit financial institution that allows lending and borrowing among its members.",
    features: ["No RBI License Needed", "Low Capital Requirement", "Internal Member Focus"],
    docsRequired: ["3 Directors KYC", "7 Members KYC", "MOA/AOA", "Office Proof"],
    mainParagraph: "Nidhi Companies are a type of NBFC that is exempt from RBI registration, focusing on the habit of thrift and savings among members.",
    benefits: ["Easy to Register", "Internal Lending", "High Interest on Savings", "Safe Investment"],
    faqs: [{ q: "Can it lend to non-members?", a: "No, Nidhi companies can only deal with their registered members." }]
  },
  "fieo-rcmc-registration": {
    title: "FIEO RCMC Registration",
    heroDescription: "Get registered with the Federation of Indian Export Organisations to unlock export benefits.",
    features: ["Export Incentives Access", "Global Trade Exposure", "Duty Drawback Claims"],
    docsRequired: ["IEC Code", "PAN Card", "Aadhaar Card", "MoA/AoA"],
    mainParagraph: "RCMC (Registration Cum Membership Certificate) from FIEO is mandatory for exporters wishing to claim benefits under India’s Foreign Trade Policy.",
    benefits: ["Incentive Schemes", "Trade Fair Access", "Legal Compliance", "Global Networking"],
    faqs: [{ q: "Is IEC mandatory for FIEO?", a: "Yes, you must have an Importer Exporter Code first." }]
  },

  // === LICENSES & CERTIFICATION ===
  "msme-registration": {
    title: "MSME / Udyam Registration",
    heroDescription: "Register as a Micro, Small, or Medium Enterprise to avail of various government schemes and subsidies.",
    features: ["Paperless Registration", "Lifetime Validity", "Priority Sector Lending"],
    docsRequired: ["Aadhaar Card", "PAN Card", "Business Address", "Bank Details"],
    mainParagraph: "Udyam registration is the official recognition by the Govt of India for small businesses. It is essential for getting collateral-free loans.",
    benefits: ["Collateral Free Loans", "Subsidy on Patent/ISO", "Electricity Concessions", "Delayed Payment Protection"],
    faqs: [{ q: "Is there any renewal fee?", a: "No, Udyam registration is free and has lifetime validity." }]
  },
  "digital-signature-certificate": {
    title: "Digital Signature Certificate (DSC)",
    heroDescription: "Obtain Class 3 DSC for secure online filing of government forms, tenders, and tax returns.",
    features: ["Class 3 DSC", "2-Year Validity", "Secure USB Token", "Video KYC support"],
    docsRequired: ["PAN Card", "Aadhaar Card", "Email & Phone", "Photo"],
    mainParagraph: "A DSC is the digital equivalent of a physical signature, used to sign electronic documents on MCA, GST, and Income Tax portals.",
    benefits: ["High Security", "Legal Validity", "Saves Time", "Authentication"],
    faqs: [{ q: "How long is it valid?", a: "Standard validity is 2 years, after which it must be renewed." }]
  },
  "fssai-registration": {
    title: "FSSAI Registration (Food License)",
    heroDescription: "Ensure food safety and compliance with a mandatory FSSAI license for any food-related business.",
    features: ["Basic/State/Central License", "Quality Assurance", "Consumer Trust"],
    docsRequired: ["Photo", "Identity Proof", "Address Proof of Premises", "List of Food Items"],
    mainParagraph: "Any business dealing with food—be it manufacturing, packaging, or serving—must have an FSSAI license to operate legally in India.",
    benefits: ["Legal Safety", "Brand Identity", "Customer Confidence", "Food Safety Awareness"],
    faqs: [{ q: "Is it required for home kitchens?", a: "Yes, if you are selling food products commercially." }]
  },
  "importer-exporter-code-registration": {
    title: "IEC Registration",
    heroDescription: "Essential 10-digit code required for any business importing or exporting goods and services from India.",
    features: ["One-time Registration", "No Renewals", "Mandatory for Customs"],
    docsRequired: ["PAN Card", "Cancel Cheque", "Aadhaar", "Photo"],
    mainParagraph: "IEC (Importer Exporter Code) is mandatory for anyone starting an import-export business in India. It is issued by the DGFT.",
    benefits: ["Global Market Reach", "No Compliance Filings", "Government Subsidies", "Customs Clearance"],
    faqs: [{ q: "Does it require annual filing?", a: "No, but the details must be updated on the DGFT portal annually." }]
  },
  "apeda-rcmc-registration": {
    title: "APEDA Registration",
    heroDescription: "Register with APEDA for the export of scheduled agricultural and processed food products.",
    features: ["Export Incentives", "Global Quality Standards", "Market Development Support"],
    docsRequired: ["IEC Code", "Bank Certificate", "PAN Card", "MOA/AOA"],
    mainParagraph: "APEDA RCMC is required for exporters of fruits, vegetables, meat products, and other processed foods to avail of central government schemes.",
    benefits: ["Financial Assistance", "Export Promotion", "Quality Training", "Market Access"],
    faqs: [{ q: "Which products come under APEDA?", a: "Agricultural and processed foods like dairy, honey, meat, and fruits." }]
  },
  "spice-board-registration": {
    title: "Spice Board Registration (CRES)",
    heroDescription: "Mandatory registration for exporters of Indian spices to ensure quality and authenticity.",
    features: ["Certificate of Registration (CRES)", "Spices Promotion", "Quality Checks"],
    docsRequired: ["IEC Code", "PAN", "Banker's Certificate", "Address Proof"],
    mainParagraph: "The Spices Board of India issues CRES to exporters. It is mandatory to export any of the 52 scheduled spices from India.",
    benefits: ["Brand Indian Spices", "Market Expansion", "Export Statistics", "Trade Assistance"],
    faqs: [{ q: "Validity of the license?", a: "The registration is generally valid for 3 years." }]
  },
  "iso-registration": {
    title: "ISO Certification",
    heroDescription: "Boost your brand value and operational quality with International Organization for Standardization (ISO) certification.",
    features: ["ISO 9001:2015", "ISO 14001", "ISO 27001", "Audit Support"],
    docsRequired: ["Business Registration Proof", "Scope of Work", "Internal Audit Reports", "Invoices"],
    mainParagraph: "ISO certification ensures that your products or services meet international standards for quality, safety, and efficiency.",
    benefits: ["International Credibility", "Operational Efficiency", "Competitive Advantage", "Customer Satisfaction"],
    faqs: [{ q: "Is ISO mandatory?", a: "No, it is voluntary but often required for government tenders." }]
  },
  "lmpc-certificate": {
    title: "LMPC Certificate (Legal Metrology)",
    heroDescription: "Registration required for importers of pre-packed commodities to comply with packaging standards.",
    features: ["Legal Metrology Compliance", "Import Clearance", "Packaging Norms"],
    docsRequired: ["IEC Code", "PAN", "Product Label Sample", "Address Proof"],
    mainParagraph: "LMPC registration ensures that the importer or packer adheres to the Legal Metrology (Packaged Commodities) Rules regarding declarations on labels.",
    benefits: ["Legal Compliance", "Smooth Imports", "Avoid Penalties", "Accurate Labelling"],
    faqs: [{ q: "When should I apply?", a: "Registration should be done within 90 days of the start of imports." }]
  },
  "hallmark-registration": {
    title: "Hallmark Registration (BIS)",
    heroDescription: "Certification for jewellers to sell hallmarked gold and silver jewelry in India.",
    features: ["Gold Purity Assurance", "Consumer Trust", "BIS Compliance"],
    docsRequired: ["Aadhar/PAN", "Proof of Outlet", "Logo of Jeweller", "Sale Deed/Rent Agreement"],
    mainParagraph: "Hallmarking is now mandatory for certain gold jewellery. It protects consumers from adulteration and ensures the purity of precious metals.",
    benefits: ["Brand Purity", "Legal Compliance", "Market Value", "Customer Trust"],
    faqs: [{ q: "Is it mandatory for all gold?", a: "Yes, mandatory hallmarking has been implemented in many districts across India." }]
  },
  "bis-registration-certification": {
    title: "BIS Registration / CRS Certification",
    heroDescription: "Obtain BIS certification for electronics and IT products to sell in the Indian market.",
    features: ["ISI Mark Support", "CRS Registration", "Product Testing Coordination"],
    docsRequired: ["Test Report from BIS Lab", "Manufacturing Unit details", "Brand Authorization", "KYC of Signatory"],
    mainParagraph: "BIS certification ensures that electronic and manufactured goods meet Indian safety and quality standards before reaching the consumer.",
    benefits: ["Legal Market Access", "Product Safety", "Quality Assurance", "Consumer Confidence"],
    faqs: [{ q: "How long does it take?", a: "Typically 15-30 days after testing reports are received." }]
  },
  "liquor-license": {
    title: "Liquor License Consultancy",
    heroDescription: "Professional assistance for obtaining L-1, L-17, or other liquor licenses for bars, hotels, and retail.",
    features: ["State-specific guidance", "Documentation help", "Renewal services"],
    docsRequired: ["Police Clearance", "Fire Safety NOC", "Premises Ownership", "Medical Certificate"],
    mainParagraph: "Obtaining a liquor license involves strict state-level regulations. We help you navigate the complex documentation and eligibility criteria.",
    benefits: ["Legal Sales", "Safe Operations", "Expert Advisory", "Penalty Avoidance"],
    faqs: [{ q: "Is it the same for all states?", a: "No, liquor laws and fees vary significantly by state." }]
  },
  "clra-registration": {
    title: "CLRA Registration and Licensing",
    heroDescription: "Registration for principal employers and licenses for contractors under the Contract Labour Act.",
    features: ["Principal Employer Reg.", "Contractor Licensing", "Compliance Records"],
    docsRequired: ["Form 1", "Certificate of Establishment", "Contractor Details", "PAN/Aadhaar"],
    mainParagraph: "The Contract Labour (Regulation and Abolition) Act requires establishments employing 20 or more contract workers to be registered.",
    benefits: ["Legal Protection", "Workforce Management", "Audit Readiness", "Compliance Safety"],
    faqs: [{ q: "Is it required for all contractors?", a: "It is required if 20 or more contract labourers are employed." }]
  },
  "ad-code-registration": {
    title: "AD Code Registration",
    heroDescription: "Authorized Dealer (AD) Code registration with customs to facilitate international bank transfers for exports.",
    features: ["Customs EDI Registration", "Bank Authorization", "EDPMS link"],
    docsRequired: ["Bank AD Code Letter", "IEC Code", "PAN", "GST Reg."],
    mainParagraph: "An AD Code is essential for every port from which you intend to export. Without it, the shipping bill will not be generated.",
    benefits: ["Smooth Payments", "Customs Clearance", "Direct Benefit Transfers", "Legal Banking"],
    faqs: [{ q: "Is one AD code enough?", a: "You need to register the AD code separately at every port of export." }]
  },
  "gst-registration": {
    title: "GST Registration",
    heroDescription: "Get your GSTIN quickly to start collecting tax and claiming Input Tax Credit (ITC).",
    features: ["ARN Tracking", "Expert Review", "100% Online", "GSTIN within 3-7 days"],
    docsRequired: ["PAN Card", "Aadhaar Card", "Electricity Bill/Rent Agreement", "Bank Statement"],
    mainParagraph: "GST registration is mandatory for businesses with turnover exceeding the limit or those doing interstate business.",
    benefits: ["Legal Compliance", "Input Tax Credit", "Ease of Trade", "E-commerce Eligibility"],
    faqs: [{ q: "What is the threshold?", a: "Generally 40 Lakhs for Goods and 20 Lakhs for Services." }]
  },

  // === TRADEMARK & IP ===
  "trademark-assignment": {
    title: "Trademark Assignment",
    heroDescription: "Transfer ownership of a trademark from one entity to another legally.",
    features: ["Assignment Deed Drafting", "Form TM-P Filing", "Ownership Transfer"],
    docsRequired: ["Original TM Cert.", "Assignment Agreement", "ID Proofs", "NOC"],
    mainParagraph: "A trademark can be assigned to another person or company, allowing them to use and own the brand name legally.",
    benefits: ["Monetize your brand", "Business Sale support", "Legal transfer", "Brand growth"],
    faqs: [{ q: "Can a pending TM be assigned?", a: "Yes, pending applications can also be assigned." }]
  },
  "trademark-registration": {
    title: "Trademark Registration",
    heroDescription: "Protect your brand name, logo, or slogan with the ® symbol.",
    features: ["TM Class Selection", "Search Report", "24hr Filing", "Class tracking"],
    docsRequired: ["Logo/Wordmark", "ID Proof", "User Affidavit", "Authorization"],
    mainParagraph: "Trademark registration gives you exclusive rights to use your brand identity and prevents others from copying it.",
    benefits: ["Brand Protection", "Asset Creation", "Legal Power", "Global Recognition"],
    faqs: [{ q: "How long is it valid?", a: "It is valid for 10 years and renewable." }]
  },
  "trademark-renewal": {
    title: "Trademark Renewal",
    heroDescription: "Extend the protection of your trademark for another 10 years before it expires.",
    features: ["Timely Filing", "Status Tracking", "Renewal Cert."],
    docsRequired: ["TM Application Number", "Power of Attorney", "ID Proof"],
    mainParagraph: "If you don't renew your trademark, it is removed from the registry and becomes available for others to register.",
    benefits: ["Continued Protection", "Brand Asset Safety", "No Legal Gap", "Market Trust"],
    faqs: [{ q: "When to renew?", a: "You can renew within 6 months before the expiry date." }]
  },
  "trademark-opposition": {
    title: "Trademark Opposition",
    heroDescription: "Defend your trademark or oppose a similar mark being registered by someone else.",
    features: ["Counter Statement", "Evidence Filing", "Legal Arguments"],
    docsRequired: ["Opposition Notice", "Evidence of Usage", "Prior Registration details"],
    mainParagraph: "Trademark opposition occurs after a mark is advertised in the journal. It is a critical stage to stop competitors from stealing your brand.",
    benefits: ["Brand Integrity", "Block Competitors", "Legal Strength", "Market Clarity"],
    faqs: [{ q: "Time limit to oppose?", a: "Opposition must be filed within 4 months of journal publication." }]
  },
  "trademark-rectification": {
    title: "Trademark Rectification",
    heroDescription: "Correct errors in the trademark register or remove a mark that is not being used.",
    features: ["Register Correction", "Removal of Non-used marks", "Legal petition"],
    docsRequired: ["Rectification Petition", "Evidence of Non-use", "Supporting docs"],
    mainParagraph: "Rectification is used to clean up the register or fix mistakes made during the registration process.",
    benefits: ["Clean Records", "Clearance of dead marks", "Legal Accuracy", "Brand Strength"],
    faqs: [{ q: "Who can file?", a: "Any person 'aggrieved' by the entry in the register." }]
  },
  "trademark-hearing": {
    title: "Trademark Hearing",
    heroDescription: "Expert representation before the Registrar of Trademarks to resolve objections.",
    features: ["Legal Representation", "Argument Preparation", "Show-cause resolution"],
    docsRequired: ["Hearing Notice", "Written Submission", "Supporting Evidence", "Case Laws"],
    mainParagraph: "If your TM application is objected to, a hearing allows us to present the case personally to the examiner to get the mark approved.",
    benefits: ["Expert Advocacy", "Higher Approval Rate", "Legal Clarity", "Application Save"],
    faqs: [{ q: "Is physical presence required?", a: "Hearings are now mostly conducted via Video Conferencing." }]
  },
  "trademark-infringement-notice": {
    title: "Trademark Infringement Notice",
    heroDescription: "Stop unauthorized use of your trademark with a formal legal cease and desist notice.",
    features: ["Legal Notice Drafting", "Damage Claims", "Litigation Support"],
    docsRequired: ["TM Cert.", "Evidence of Infringement", "Proof of Usage"],
    mainParagraph: "If someone copies your brand, a legal notice is the first step to stop them and claim damages for brand loss.",
    benefits: ["Stop Copycats", "Brand Protection", "Legal Redress", "Damage Recovery"],
    faqs: [{ q: "What if they don't stop?", a: "The next step is to file an Infringement Suit in court." }]
  },
  "patent-registration": {
    title: "Patent Registration",
    heroDescription: "Secure exclusive rights for your inventions and technical innovations.",
    features: ["Patent Search", "Drafting Specifications", "Filing & Examination"],
    docsRequired: ["Invention Disclosure", "Drawings", "Inventor Details", "Power of Attorney"],
    mainParagraph: "A patent gives you a 20-year monopoly over your invention, preventing others from making, using, or selling it.",
    benefits: ["Invention Monopoly", "High Asset Value", "Investor Interest", "Licensing Income"],
    faqs: [{ q: "Validity of a patent?", a: "A patent is valid for 20 years from the date of filing." }]
  },
  "patent-infringement": {
    title: "Patent Infringement Services",
    heroDescription: "Protect your patented technology from unauthorized use by competitors.",
    features: ["Infringement Analysis", "Legal Notices", "Litigation Support"],
    docsRequired: ["Patent Grant Cert.", "Infringing Product Sample", "Comparison Report"],
    mainParagraph: "We help you identify if your patent is being violated and take legal action to protect your intellectual property rights.",
    benefits: ["Protect R&D", "Market Monopoly", "Legal Remedy", "Compensation"],
    faqs: [{ q: "What is an injunction?", a: "A court order to stop the infringer from selling the product." }]
  },
  "patent-opposition": {
    title: "Patent Opposition",
    heroDescription: "Challenge the grant of a patent that is not novel or inventive.",
    features: ["Pre-grant Opposition", "Post-grant Opposition", "Prior-art Search"],
    docsRequired: ["Patent App Number", "Evidence of Prior Art", "Technical Arguments"],
    mainParagraph: "Opposition ensures that only truly innovative and unique inventions receive patent protection, preventing unfair monopolies.",
    benefits: ["Freedom to Operate", "Public Interest", "Technical Accuracy", "Legal Defense"],
    faqs: [{ q: "When to file?", a: "Pre-grant can be filed anytime before the patent is granted." }]
  },
  "patent-provisional": {
    title: "Provisional Patent Application",
    heroDescription: "Get an early priority date for your invention before it's fully developed.",
    features: ["Quick Priority Date", "Cost Effective", "12-month window"],
    docsRequired: ["Title of Invention", "Brief Description", "Inventor Info"],
    mainParagraph: "A provisional application allows you to claim 'Patent Pending' status while you finish the final details of your invention.",
    benefits: ["Early Filing Date", "Lower Initial Cost", "Patent Pending status", "Testing Window"],
    faqs: [{ q: "How long does it last?", a: "You must file the Complete Specification within 12 months." }]
  },

  // === TAX SERVICES ===
  "itr-1-filing": {
    title: "ITR-1 (Sahaj) Filing",
    heroDescription: "Online income tax filing for individuals having income from salary and one house property.",
    features: ["Maximized Savings", "Accurate Calculation", "Form 16 Analysis"],
    docsRequired: ["Form 16", "Aadhaar Card", "PAN Card", "Investment Proofs"],
    mainParagraph: "ITR-1 is the simplest form for resident individuals with income up to 50 Lakhs from basic sources.",
    benefits: ["Refund Claim", "Loan Approval", "Address Proof", "Avoid Penalties"],
    faqs: [{ q: "Who can file?", a: "Resident individuals with salary and interest income." }]
  },
  "itr-2-filing": {
    title: "ITR-2 Filing",
    heroDescription: "Tax filing for individuals and HUFs having capital gains or multiple house properties.",
    features: ["Capital Gains Calc.", "Foreign Income handling", "HUF Support"],
    docsRequired: ["Sale Deed of Property", "Stock Statements", "Aadhaar/PAN", "Bank Statement"],
    mainParagraph: "ITR-2 is for those who have complex income sources but no business or professional income.",
    benefits: ["Loss Carry Forward", "Capital Gain Adjustment", "Legal Compliance", "Detailed Reporting"],
    faqs: [{ q: "Is it for businesses?", a: "No, businesses should file ITR-3 or ITR-4." }]
  },
  "business-itr-filing": {
    title: "Business ITR Filing",
    heroDescription: "Income tax filing for small businesses, professionals, and freelancers (ITR-3 / ITR-4).",
    features: ["Audit Support", "Presumptive Taxation", "Balance Sheet Prep."],
    docsRequired: ["P&L Statement", "Balance Sheet", "GST Returns", "Bank Statements"],
    mainParagraph: "Whether you are a freelancer or a shop owner, filing your business ITR correctly is crucial for building financial credibility.",
    benefits: ["Bank Loans", "Visa Support", "Business Credibility", "Loss Offset"],
    faqs: [{ q: "What is Section 44AD?", a: "It is a presumptive tax scheme for small businesses to simplify filing." }]
  },
  "gst-return-filing": {
    title: "GST Return Filing",
    heroDescription: "Monthly and quarterly GST compliance for GSTR-1 and GSTR-3B.",
    features: ["B2B Reconciliation", "ITC Optimization", "Late Fee Avoidance"],
    docsRequired: ["Sales Invoices", "Purchase Invoices", "GST Portal Access"],
    mainParagraph: "Regular filing of GST returns is mandatory to avoid cancellation of your GSTIN and heavy late fees.",
    benefits: ["Continuous ITC Flow", "Good Compliance Rating", "No Notices", "Business Continuity"],
    faqs: [{ q: "Frequency of filing?", a: "Depends on whether you are in the Monthly or QRMP scheme." }]
  },
  "gstr-9": {
    title: "GSTR-9 Annual Return",
    heroDescription: "Consolidated annual GST return filing for regular taxpayers.",
    features: ["Year-end Reconciliation", "Data Audit", "Final Tax Adjustment"],
    docsRequired: ["All monthly GSTR-1/3B", "Books of accounts", "Audit Report (if any)"],
    mainParagraph: "GSTR-9 is a summary of all your monthly/quarterly filings done during the entire financial year.",
    benefits: ["Error Correction", "Final Compliance", "Audit Ready", "Clear Records"],
    faqs: [{ q: "Is it mandatory?", a: "Mandatory for taxpayers above a certain turnover threshold." }]
  },

  // === LEGAL SERVICES ===
  "court-marriage": {
    title: "Court Marriage Registration",
    heroDescription: "Legal solemnization of marriage under the Special Marriage Act.",
    features: ["Witness Support", "Application Filing", "Certificate Issuance"],
    docsRequired: ["Age Proof", "Address Proof", "Photos", "3 Witnesses"],
    mainParagraph: "Court marriage provides a legal certificate that is globally recognized and valid across all religions and castes.",
    benefits: ["Legal Proof", "Passport/Visa support", "Social Security", "Simple Process"],
    faqs: [{ q: "Is there a notice period?", a: "Yes, a 30-day public notice is mandatory." }]
  },
  "mutual-divorce": {
    title: "Mutual Consent Divorce",
    heroDescription: "Fastest and least painful way to end a marriage when both parties agree.",
    features: ["Petition Drafting", "Counseling Support", "Quick Disposal"],
    docsRequired: ["Marriage Cert.", "Address Proof", "Photographs", "Settlement Deed"],
    mainParagraph: "Mutual divorce allows couples to separate with dignity by settling terms like alimony and custody outside of court.",
    benefits: ["Saves Time", "Lower Legal Cost", "Emotional Peace", "Private Settlement"],
    faqs: [{ q: "Time required?", a: "Usually takes 6 to 18 months, depending on the cooling-off period." }]
  },
  "cheque-bounce-cases": {
    title: "Cheque Bounce (Sec 138) Legal Help",
    heroDescription: "Recover your money from dishonored cheques with expert legal action.",
    features: ["Legal Notice within 30 days", "Complaint Filing", "Money Recovery"],
    docsRequired: ["Original Cheque", "Return Memo", "Invoice/Proof of Debt", "ID Proof"],
    mainParagraph: "Cheque bounce is a criminal offense under Section 138 of the NI Act. We help you send notices and file cases for recovery.",
    benefits: ["Quick Recovery", "Criminal Liability on Debtor", "Legal Pressure", "Professional Handling"],
    faqs: [{ q: "Time limit to send notice?", a: "A legal notice must be sent within 30 days of the cheque return." }]
  },
  "rera-cases": {
    title: "RERA Legal Services",
    heroDescription: "Protect homebuyers' rights against builder delays and fraud under RERA.",
    features: ["Delayed Possession claims", "Refund with Interest", "Builder Compliance Check"],
    docsRequired: ["Allotment Letter", "Payment Receipts", "BBA Agreement", "Builder Communication"],
    mainParagraph: "RERA provides a dedicated platform for homebuyers to get justice against developers for non-delivery or poor construction quality.",
    benefits: ["Guranteed Refund/Interest", "Strict Builder Accountability", "Fast Track Courts", "Homeowner Rights"],
    faqs: [{ q: "Can I get a full refund?", a: "Yes, RERA allows for a full refund with interest for long delays." }]
  },
  
  // === LEARNING ===
  "learning": {
    title: "Business & Legal Learning Center",
    heroDescription: "Expand your knowledge on Indian compliances, taxation, and business laws.",
    features: ["Expert Articles", "Webinars", "Compliance Calendar", "Guide Books"],
    docsRequired: ["No documents needed"],
    mainParagraph: "Stay updated with the latest changes in GST, Income Tax, and Companies Act through our curated learning resources.",
    benefits: ["Stay Updated", "Expert Insights", "Compliance Mastery", "Better Business Decisions"],
    faqs: [{ q: "Is this free?", a: "Most of our blogs and calendars are free for our clients." }]
  },
  "website-development" :{
    title: "Website Development",
    heroDescription: "Get a professional website for your business with our expert development services.",
    features: ["Custom Design", "Responsive Layout", "SEO Optimization", "E-commerce Support"],
    docsRequired: ["Business Logo", "Content for Pages", "Domain & Hosting Details"],
    mainParagraph: "A well-designed website is crucial for establishing your online presence and attracting customers. We offer end-to-end website development services tailored to your business needs.",
    benefits: ["Professional Online Presence", "Increased Customer Engagement", "Higher Search Engine Rankings", "E-commerce Capabilities"],
    faqs: [{ q: "How long does it take?", a: "Typically, a basic website can be developed in 2-4 weeks depending on the complexity." }]
  },
  "mobile-app-development" :{
    title: "Mobile App Development",
    heroDescription: "Expand your business reach with a custom mobile app developed by our expert team.",
    features: ["Cross-platform Support", "User-friendly Interface", "Push Notifications", "App Store Optimization"],
    docsRequired: ["Business Logo", "App Functionality Requirements", "Content for App Pages"],
    mainParagraph: "In today's mobile-first world, having a mobile app can significantly enhance customer engagement and loyalty. We provide comprehensive mobile app development services to help you connect with your audience on their preferred devices.",
    benefits: ["Enhanced Customer Engagement", "Increased Brand Loyalty", "Direct Communication Channel", "Higher Conversion Rates"],
    faqs: [{ q: "What platforms do you develop for?", a: "We develop for both iOS and Android platforms." }],
   },

   "e-commerce-development":{
    title: "E-commerce Development",
    heroDescription: "Launch your online store with our comprehensive e-commerce development services.",
    features: ["Custom Store Design", "Secure Payment Integration", "Inventory Management", "SEO Optimization"],
    docsRequired: ["Product Catalog", "Business Logo", "Payment Gateway Details", "Domain & Hosting Information"],
    mainParagraph: "Our e-commerce development services help you create a seamless online shopping experience for your customers. From custom store design to secure payment integration, we provide everything you need to succeed in the online marketplace.",
    benefits: ["Increased Sales", "Broader Customer Reach", "24/7 Availability", "Data Analytics"],
    faqs: [{ q: "Do you provide ongoing support?", a: "Yes, we offer maintenance and support packages to ensure your e-commerce store runs smoothly." }]
   },

  "software-development":{
    title: "Software Development",
    heroDescription: "Custom software solutions tailored to your business needs.",
    features: ["Custom Software Design", "Integration Services", "Cloud Solutions", "Maintenance & Support"],
    docsRequired: ["Business Requirements Document", "Existing System Details (if any)", "User Stories/Use Cases"],
    mainParagraph: "Our software development services are designed to provide you with custom solutions that enhance your business operations. Whether you need a new application or want to integrate existing systems, we have the expertise to deliver high-quality software tailored to your needs.",
    benefits: ["Improved Efficiency", "Scalability", "Competitive Advantage", "Ongoing Support"],
    faqs: [{ q: "What development methodologies do you use?", a: "We primarily use Agile methodologies to ensure flexibility and timely delivery of projects." }]
    
  },

  "ui-ux-design":{
    title: "UI/UX Design",
    heroDescription: "Create intuitive and engaging user interfaces with our expert UI/UX design services.",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    docsRequired: ["Business Goals", "Target Audience Details", "Brand Guidelines"],
    mainParagraph: "Our UI/UX design services focus on creating user-centered designs that enhance the overall user experience. We conduct thorough research and testing to ensure that your digital products are not only visually appealing but also easy to use.",
    benefits: ["Enhanced User Experience", "Increased User Engagement", "Higher Conversion Rates", "Brand Consistency"],
    faqs: [{ q: "Do you provide design for mobile apps?", a: "Yes, we offer UI/UX design services for both web and mobile applications." }]
  }

  };