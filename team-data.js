/**
 * Axis Law Offices — Team Member Data
 * To add a new team member, add a new object to the TEAM array below.
 * Fields:
 *   id        : unique slug (used as anchor link)
 *   name      : full name
 *   role      : displayed role title
 *   photo     : path relative to site root (leave "" to show initials placeholder)
 *   initials  : shown if no photo
 *   bio       : array of paragraph strings
 *   courts    : brief note on forums appeared in (optional)
 *   education : educational background (optional)
 */

const TEAM = [
  {
    id: "sagar-chauhan",
    name: "Sagar Chauhan",
    role: "Founding Partner",
    photo: "assets/images/founder-profile.jpeg",
    initials: "SC",
    featured: true,
    bio: [
      "Sagar Chauhan is the Founding Partner of Axis Law Offices, bringing over a decade of distinguished legal practice with a strong focus on civil, commercial, and white-collar crime matters. He holds a deep specialisation in Alternate Dispute Resolution (ADR), making him a sought-after counsel for complex arbitration proceedings.",
      "His practice encompasses advisory and litigation services across consumer laws, banking laws, insurance laws, commercial laws, civil laws, and insolvency and bankruptcy matters. He has handled high-stakes domestic commercial arbitrations on behalf of major Public Sector Undertakings including GAIL (India) Ltd., Power Grid Corporation of India Ltd., and Oil and Natural Gas Corporation.",
      "Sagar is well-versed in cyber law, holding a Certificate Course in Cyber Law from the Indian Law Institute (ILI), and has provided contract management services to a multinational corporation. He is currently an empanelled advocate for Power Grid Corporation of India.",
      "His approach is client-centric, pragmatic, and solution-oriented — making him a trusted advisor in high-value and sensitive matters across industries."
    ],
    courts: "Regularly appears before the Hon'ble Supreme Court of India, the High Court of Delhi, and various tribunals including DRT, DRAT, NCLT, TDSAT, and NGT.",
    education: "Certificate Course in Cyber Law, Indian Law Institute (ILI)"
  },
  {
    id: "rohit-kathuria",
    name: "Rohit Kathuria",
    role: "Partner",
    photo: "",
    initials: "RK",
    featured: false,
    bio: [
      "Rohit Kathuria is a Partner at Axis Law Offices and a graduate of Amity Law School, Noida, having practised law since 2015. He has appeared before all forums and courts in Delhi NCR and gained valuable experience as a Legal Researcher for Hon'ble Justice Valmiki Mehta at the Delhi High Court, which gave him an exceptionally strong grounding in procedural law.",
      "He has worked with the Standing Counsel of the Government of NCT of Delhi, representing the Delhi Government in high-profile state matters before the Delhi High Court and the Supreme Court of India. He has also served as legal counsel with the Delhi High Court Arbitration Centre (DHCAC) and has been appointed Local Commissioner in various matters by the Delhi High Court.",
      "Rohit holds an integrated B.Com LL.B (Hons.) degree, bringing strong expertise in business and financial legal matters. He has previously worked with O.P. Khaitan & Co. and Remfry & Sagar, two of India's leading law firms. He also holds a Diploma in Cyber Law and handles cyber-crime related matters."
    ],
    courts: "All forums and courts in Delhi NCR, Delhi High Court, Supreme Court of India.",
    education: "B.Com LL.B (Hons.), Amity Law School, Noida; Diploma in Cyber Law"
  },
  {
    id: "dhruv-varma",
    name: "Dhruv Varma",
    role: "Partner",
    photo: "",
    initials: "DV",
    featured: false,
    bio: [
      "Dhruv Varma is a Partner at Axis Law Offices and a graduate of Amity Law School, Noida, with practice experience since 2018. He brings extensive expertise in commercial litigation and arbitration before various fora, with a primary focus on dispute resolution in commercial, banking, electricity, and consumer matters.",
      "He has handled disputes across diverse industry sectors involving arbitration law, contract law, and company law, and has conducted due diligence for banks, companies, commercial contracts, and arbitration agreements.",
      "Prior to joining the firm, Dhruv worked with Madan & Associates and with Senior Advocate Sushil Kumar Jain, gaining rich experience working under eminent judges and senior advocates of the Supreme Court of India and the High Court of Delhi."
    ],
    courts: "Supreme Court of India, High Court of Delhi, various commercial and arbitral tribunals.",
    education: "LL.B, Amity Law School, Noida"
  },
  {
    id: "sanjay-kumar-yadav",
    name: "Sanjay Kumar Yadav",
    role: "Partner",
    photo: "",
    initials: "SY",
    featured: false,
    bio: [
      "Sanjay Kumar Yadav is a Partner at Axis Law Offices with over five years of legal practice, primarily in writ jurisdiction, civil jurisdiction, criminal jurisdiction, consumer laws, service laws, and labour laws.",
      "He currently handles consumer litigation, labour law matters, civil suits, and criminal proceedings across a wide range of forums in and around Delhi. He is empanelled with BSES Rajdhani Power Ltd. and Apollo Hospital (Sarita Vihar)."
    ],
    courts: "High Court of Delhi; District Courts at Patiala House, Tis Hazari, Saket, Karkardooma, Dwarka, and Rohini; NCLT; NCDRC/SCDRC; CAT; RERA.",
    education: "LL.B"
  }
];
