export interface Course {
  id: string;
  code: string;
  title: string;
  duration: string;
  certification: string;
  summary: string;
  description: string;
  coreCompetencies: string[];
  fieldApplicability: string;
  image: string;
}

export interface Approval {
  id: string;
  name: string;
  authority: string;
  category: "Government" | "Accreditation" | "Statutory";
  regNumber?: string;
  description: string;
}

export const ITF_DETAILS = {
  name: "International Technical Foundation",
  acronym: "ITF",
  tagline: "Skills for a better tomorrow",
  oneLineDescription:
    "A government-affiliated industrial safety training institute equipping engineering and operational workforces with internationally accredited HSE certifications and practical site competency.",
  address: {
    line1: "1st floor, Sanjeevini Eye Hospital",
    landmark: "Raghav Nagar",
    city: "Deoria",
    state: "Uttar Pradesh",
    country: "India",
    pin: "274001",
    full: "1st floor, Sanjeevini Eye Hospital, Raghav Nagar, Deoria, UP, India 274001",
  },
  contact: {
    primaryPhone: "+91 63074 90205",
    admissionsPhone: "+91 63074 90205",
    secondaryPhone: "+91 98380 12345",
    doubtHelpline: "+91 63074 90205",
    email: "admissions@itfindia.org.in",
    directorEmail: "director@itfindia.org.in",
    officeHours: "Open 24 Hours (Doubts & Admissions)",
    doubtDesk: {
      unitName: "WFSI (~World Fire Safety Institute)",
      number: "+91 63074 90205",
      whatsappUrl: "https://wa.me/916307490205?text=Hello%2C%20I%20have%20a%20doubt%20regarding%20ITF%20Safety%20Courses.",
      badge: "Open 24 Hours • Open Now",
      note: "Have any doubt? Instant counseling on WhatsApp & direct voice call.",
    },
  },
  founder: {
    name: "Sachin Kumar Singh",
    role: "Founder & Director",
    credentials: [
      "MBA",
      "ADIAS (Advanced Diploma in Industrial Safety)",
      "NEBOSH IGC (UK)",
      "30+ Professional Certifications",
    ],
    expertise: [
      "Health, Safety & Environment (HSE)",
      "Industrial Safety Engineering",
      "Regulatory Safety Training",
      "Worksite Risk Management & Audit",
    ],
    statement:
      "Workplace safety is not merely a statutory mandate; it is a profound moral commitment to every worker returning home uninjured. At ITF, we transform theoretical safety regulations into rigorous, site-ready practical reflexes.",
  },
};

export const APPROVALS: Approval[] = [
  {
    id: "mca",
    name: "Ministry of Corporate Affairs",
    authority: "Govt. of India",
    category: "Government",
    description: "Statutory central government incorporation ensuring institutional compliance and audited governance.",
  },
  {
    id: "msde",
    name: "Ministry of Skill Development & Entrepreneurship",
    authority: "Govt. of India",
    category: "Government",
    description: "Aligned with national vocational qualification frameworks (NVQF) and technical skilling benchmarks.",
  },
  {
    id: "msmed",
    name: "MSMED",
    authority: "Micro, Small & Medium Enterprises Development",
    category: "Government",
    description: "Registered under Udyam / MSME scheme fostering technical workforce capability development.",
  },
  {
    id: "mhrd",
    name: "MHRD Dept. of Higher Education",
    authority: "Govt. of India",
    category: "Government",
    description: "Recognized educational trust charter adhering to national technical pedagogy standards.",
  },
  {
    id: "iso",
    name: "ISO 9001:2015 / 29990:2010 Certified",
    authority: "International Standards Organization",
    category: "Accreditation",
    description: "Dual-certified Quality Management and Learning Services for Non-formal Education & Training.",
  },
  {
    id: "ncs",
    name: "National Career Service (NCS)",
    authority: "Ministry of Labour & Employment",
    category: "Government",
    description: "Integrated career center portal facilitating direct certified trainee placements across industrial plants.",
  },
  {
    id: "iao",
    name: "International Accreditation Organization (IAO)",
    authority: "IAO, USA",
    category: "Accreditation",
    description: "Global international accreditation validating cross-border recognition of safety credentials in Gulf & overseas markets.",
  },
  {
    id: "qci",
    name: "Quality Council of India (QCI)",
    authority: "Govt. of India / Apex Quality Body",
    category: "Accreditation",
    description: "Assessed training institutional framework maintaining continuous benchmark quality standards.",
  },
  {
    id: "niti",
    name: "NITI Aayog",
    authority: "Government of India NGO Darpan",
    category: "Government",
    description: "Registered public developmental institution contributing to industrial workforce empowerment.",
  },
  {
    id: "tax-exempt",
    name: "12A / 80G / e-Anudan Approved",
    authority: "Income Tax Dept. & Ministry of Social Justice",
    category: "Statutory",
    description: "Fully statutory tax-exempt and government portal verified non-profit institutional status.",
  },
];

export const COURSES: Course[] = [
  {
    id: "wpr",
    code: "ITF-WPR-01",
    title: "Work Permit Receiver",
    duration: "4 Weeks (Theory + Field Practical)",
    certification: "Govt.-Affiliated & Industry Validated",
    summary:
      "Mastery of Hot, Cold, Confined Space, and Work-at-Height statutory permit procedures, Job Safety Analysis (JSA), and multi-gas atmospheric verification.",
    description:
      "The Work Permit Receiver (WPR) is the pivotal link between plant operating authorities and field execution teams. Trainees undergo rigorous instruction in verifying permit authorizations, conducting joint site inspections, validating physical and electrical isolation (LOTO), and monitoring lower explosive limits (LEL) and toxic gas levels before any high-risk maintenance commences.",
    coreCompetencies: [
      "Cold Work, Hot Work & Radiography Permit Processing",
      "Atmospheric Gas Testing (O2, LEL, H2S, CO) Thresholds",
      "Job Safety Analysis (JSA) & Tool Box Talk (TBT) Delivery",
      "Lockout / Tagout (LOTO) Zero-Energy Verification",
      "Emergency Shutdown & Evacuation Coordination",
    ],
    fieldApplicability:
      "Oil & Gas Refineries, Petrochemical Plants, Cross-Country Pipelines, Heavy Engineering Construction.",
    image: "/images/course_wpr.jpg",
  },
  {
    id: "oil-gas",
    code: "ITF-OGS-02",
    title: "Oil & Gas Safety",
    duration: "6 Weeks (Comprehensive Core Program)",
    certification: "ISO 29990 Aligned HSE Credential",
    summary:
      "Specialized hydrocarbon process safety, H2S toxic defense, explosive atmospheres (ATEX/IECEx), and fire hazard containment.",
    description:
      "Engineered specifically for hazardous processing environments, this curriculum prepares candidates for operational safety across upstream drilling rigs, LNG liquefaction plants, and downstream pipeline complexes. Emphasis is placed on static electricity control, pressure vessel integrity, toxic H2S contingency plans, and permit adherence under international oil company standards.",
    coreCompetencies: [
      "Hydrocarbon Leak Prevention & Process Safety Management (PSM)",
      "H2S Toxic Gas Defense & SCBA (Self-Contained Breathing Apparatus)",
      "Hazardous Area Classification (Zone 0, Zone 1, Zone 2)",
      "Static Electricity Grounding & Explosion-Proof Tooling",
      "Blowout Contingency & Emergency Response Planning",
    ],
    fieldApplicability:
      "Upstream Exploration Rigs, Offshore Platforms, Refineries, LPG/LNG Bottling Units, Pipeline Terminals.",
    image: "/images/course_oil_gas.jpg",
  },
  {
    id: "fire-watcher",
    code: "ITF-FIW-03",
    title: "Fire Watcher",
    duration: "2 Weeks (Live Fire Ground Drills)",
    certification: "Certified Industrial Fire Sentry",
    summary:
      "Dedicated hot work surveillance, welding spark containment, portable fire extinguisher operation, and mandatory 30-minute post-job cool-down inspection.",
    description:
      "A certified Fire Watcher provides uninterrupted safety oversight during open flame, oxy-fuel torching, arc welding, and heavy grinding operations. This practical training trains the candidate to inspect combustible clearances, erect flame-resistant tarpaulins, continuously maintain pressurized fire suppression lines, and initiate instant firefighting if a flash fire erupts.",
    coreCompetencies: [
      "Sparks & Slag Containment Barrier Deployment (11-Meter Rule)",
      "Operation of DCP, CO2, Foam, and Water Fire Extinguishers",
      "Hot Work Area Gas Clearance Confirmation",
      "Continuous Vigilance & Uninterrupted Line of Sight",
      "Mandatory 30-Minute Smoldering Fire Post-Watch Protocol",
    ],
    fieldApplicability:
      "Structural Steel Fabrication, Shipyards, Piping Modification Hubs, Maintenance Turnarounds.",
    image: "/images/course_fire_watcher.jpg",
  },
  {
    id: "flagman",
    code: "ITF-FLG-04",
    title: "Flagman (Traffic Marshal)",
    duration: "2 Weeks (Site Simulation Drills)",
    certification: "Civil & Plant Traffic Controller",
    summary:
      "Heavy plant vehicle marshalling, blind-spot communication, STOP/SLOW paddle protocol, and high-visibility perimeter enforcement.",
    description:
      "Heavy machinery and continuous road logistics represent top-tier fatality hazards on modern infrastructure sites. The ITF Flagman program trains personnel in authoritative vehicle guidance, crane swing-radius exclusion zones, reversing escort maneuvers, standardized audible and hand signal codes, and proactive pedestrian protection.",
    coreCompetencies: [
      "Standard Hand Signals & Two-Way Radio Protocols",
      "STOP / SLOW Paddle Coordination at Plant Access Gates",
      "Heavy Earthmoving Machinery Blind Spot & Turning Radius Clearance",
      "Temporary Traffic Management (TTM) & Safety Cone Arrays",
      "Site Pedestrian Segregation & Safe Passage Enforcement",
    ],
    fieldApplicability:
      "Highway Corridors, Metro Rail Viaducts, Mining Quarry Haulage, Industrial Logistics Yards.",
    image: "/images/course_flagman.jpg",
  },
  {
    id: "hole-watcher",
    code: "ITF-HLW-05",
    title: "Hole Watcher (Confined Space Sentry)",
    duration: "3 Weeks (Confined Space Vessel Drills)",
    certification: "Confined Space Attendant Credential",
    summary:
      "Attendant duties at vessel manholes, continuous atmospheric monitoring, entrant tracking logs, and non-entry mechanical tripod rescue coordination.",
    description:
      "Stationed permanently at the entry portal of tanks, vessels, manholes, or subterranean conduits, the Hole Watcher safeguards personnel working in oxygen-deficient or hazardous atmospheres. Trainees learn to track real-time entrant counts, operate multi-gas diffusion detectors, maintain ventilation fans, and execute immediate mechanical winch retrievals without entering the dangerous space.",
    coreCompetencies: [
      "Continuous Entrant In/Out Roster & Time-Tracking Logs",
      "Real-Time Multi-Gas Detector Interpretation & Sniffer Probe Usage",
      "Forced Air Ventilation & Exhaust Duct Positioning",
      "Non-Entry Mechanical Tripod & Fall-Arrest Winch Operation",
      "Emergency Evacuation Horn Alarm Triggering & Rescuer Notification",
    ],
    fieldApplicability:
      "Storage Tanks, Underground Utility Vaults, Pressure Vessels, Boilers, Sewerage Interceptors.",
    image: "/images/course_hole_watcher.jpg",
  },
];
