import {
  ArrowDownUp,
  ArrowLeftRight,
  Award,
  BadgeCheck,
  BadgeDollarSign,
  Banknote,
  BookOpen,
  Building2,
  Calculator,
  CalendarCheck,
  CircleDollarSign,
  ClipboardList,
  Coins,
  FileSpreadsheet,
  FileText,
  Fingerprint,
  Globe,
  HandCoins,
  Handshake,
  Headphones,
  HeartHandshake,
  Hourglass,
  Keyboard,
  Landmark,
  Layers,
  LineChart,
  ListChecks,
  Mail,
  MoonStar,
  Percent,
  PieChart,
  Receipt,
  Route,
  Scale,
  Send,
  ShieldCheck,
  UserCog,
  Users,
  Wallet,
  WalletCards,
  Activity,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Personal details                                                   */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Mohammed Shabeer E",
  firstLine: "Mohammed",
  secondLine: "Shabeer E",
  title: "Branch Accountant | Cashier | Exchange House Operations",
  summary:
    "Experienced accounting and exchange house operations professional with 4+ years of experience in UAE financial services, foreign currency exchange, remittance processing, WPS operations, cash management and financial reporting.",
  email: "shabeermohd68@gmail.com",
  phone: "+971 50 147 7390",
  phoneHref: "tel:+971501477390",
  altPhone: "+971 55 186 2790",
  altPhoneHref: "tel:+971551862790",
  location: "Satwa, Dubai, UAE",
  linkedin: "https://www.linkedin.com/in/mohammed-shabeer-edakkat-/",
  company: "Deniba International Exchange",
  designation: "Branch Accountant, Supervisor & Cashier",
  experience: "4+ Years",
  photo: "/images/mohammed-shabeer-e.jpg",
  cv: "/Mohammed-Shabeer-E-CV.pdf",
  cvFileName: "Mohammed-Shabeer-E-CV.pdf",
} as const;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

/* ------------------------------------------------------------------ */
/*  About                                                              */
/* ------------------------------------------------------------------ */

export type IconItem = { label: string; icon: LucideIcon };

export const expertise: IconItem[] = [
  { label: "Exchange House Operations", icon: Building2 },
  { label: "Branch Accounting", icon: Calculator },
  { label: "Foreign Currency Exchange", icon: CircleDollarSign },
  { label: "Remittance Processing", icon: Route },
  { label: "WPS Processing", icon: BadgeDollarSign },
  { label: "Cash Management", icon: WalletCards },
  { label: "Financial Reporting", icon: PieChart },
  { label: "AML/KYC Compliance", icon: Fingerprint },
  { label: "Accounts Payable and Receivable", icon: ArrowDownUp },
  { label: "Bank Reconciliation", icon: ListChecks },
  { label: "Customer Relationship Management", icon: Users },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  highlights: string[];
};

export const experience: Role[] = [
  {
    title: "Branch Accountant, Supervisor & Cashier",
    company: "Deniba International Exchange",
    location: "Satwa, Dubai, UAE",
    period: "February 2023 – Present",
    current: true,
    highlights: [
      "Foreign currency exchange and remittance processing",
      "Retail and corporate customer transactions",
      "WPS services",
      "80+ daily customer transactions",
      "Cash float management and till balancing",
      "AML/KYC compliance",
      "Daily branch reporting",
      "End-of-day closing",
      "Customer relationship management",
      "Branch operations and business development",
    ],
  },
  {
    title: "Accountant cum Data Entry Officer",
    company: "City Baba Group",
    location: "Dubai, UAE",
    period: "April 2022 – December 2022",
    current: false,
    highlights: [
      "Tally ERP accounting transactions",
      "Monthly financial reporting",
      "Accounts payable and receivable",
      "Bank and account reconciliation",
      "Invoice and payment documentation",
      "Payroll and salary reports",
      "Microsoft Excel reporting",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Achievements (verified figures only)                               */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: 80, suffix: "+", label: "Daily customer transactions", icon: Activity },
  { value: 8, suffix: "", label: "Remittance and exchange partners", icon: Handshake },
  { value: 4, suffix: "+", label: "Years of professional experience", icon: Hourglass },
  {
    value: 3,
    suffix: "",
    label: "Combined responsibilities: accounting, supervision and cashier operations",
    icon: Layers,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Core competencies — every skill has its own icon                   */
/* ------------------------------------------------------------------ */

export type SkillGroup = "Exchange & Remittance" | "Cash & Branch" | "Accounting" | "Clients & Compliance";

export const skillGroups: { name: SkillGroup; tint: string }[] = [
  { name: "Exchange & Remittance", tint: "from-cyan to-indigo" },
  { name: "Cash & Branch", tint: "from-teal to-cyan" },
  { name: "Accounting", tint: "from-indigo to-violet" },
  { name: "Clients & Compliance", tint: "from-violet to-teal" },
];

export const competencies: { label: string; icon: LucideIcon; group: SkillGroup }[] = [
  { label: "Foreign Currency Exchange", icon: ArrowLeftRight, group: "Exchange & Remittance" },
  { label: "Remittance Processing", icon: Send, group: "Exchange & Remittance" },
  { label: "WPS Processing", icon: CalendarCheck, group: "Exchange & Remittance" },
  { label: "Money Transfer", icon: Globe, group: "Exchange & Remittance" },
  { label: "Cash Handling", icon: Banknote, group: "Cash & Branch" },
  { label: "Till Balancing", icon: Scale, group: "Cash & Branch" },
  { label: "Cash Float Management", icon: Coins, group: "Cash & Branch" },
  { label: "End-of-Day Closing", icon: MoonStar, group: "Cash & Branch" },
  { label: "Branch Reporting", icon: ClipboardList, group: "Cash & Branch" },
  { label: "Branch Supervision", icon: UserCog, group: "Cash & Branch" },
  { label: "Bank Reconciliation", icon: Landmark, group: "Accounting" },
  { label: "Accounts Payable", icon: Wallet, group: "Accounting" },
  { label: "Accounts Receivable", icon: HandCoins, group: "Accounting" },
  { label: "Ledger Maintenance", icon: BookOpen, group: "Accounting" },
  { label: "Financial Reporting", icon: LineChart, group: "Accounting" },
  { label: "Invoice Processing", icon: Receipt, group: "Accounting" },
  { label: "Data Entry", icon: Keyboard, group: "Accounting" },
  { label: "AML/KYC Compliance", icon: ShieldCheck, group: "Clients & Compliance" },
  { label: "Customer Service", icon: Headphones, group: "Clients & Compliance" },
  { label: "Customer Relationship Management", icon: HeartHandshake, group: "Clients & Compliance" },
];

/* ------------------------------------------------------------------ */
/*  Software & technology — text monograms, no imitation logos         */
/* ------------------------------------------------------------------ */

export type Tool = { name: string; mark: string; icon?: LucideIcon };

export const accountingSoftware: Tool[] = [
  { name: "Tally ERP 9", mark: "T9" },
  { name: "Tally Prime", mark: "TP" },
  { name: "QuickBooks", mark: "QB" },
  { name: "Peachtree", mark: "PT" },
];

export const microsoftTools: Tool[] = [
  { name: "Advanced Microsoft Excel", mark: "XL", icon: FileSpreadsheet },
  { name: "Microsoft Word", mark: "WD", icon: FileText },
  { name: "Microsoft Outlook", mark: "OL", icon: Mail },
];

export const remittancePlatforms: Tool[] = [
  { name: "Symex Online", mark: "SO" },
  { name: "Worldwide Cash Express", mark: "WC" },
  { name: "Transfast", mark: "TF" },
  { name: "Uremit", mark: "UR" },
  { name: "MoneyGram", mark: "MG" },
  { name: "Western Union", mark: "WU" },
  { name: "Xpress Money", mark: "XM" },
  { name: "Hello Paisa", mark: "HP" },
  { name: "Blue Remit", mark: "BR" },
];

export const partners: Tool[] = [
  { name: "Instant Cash", mark: "IC" },
  { name: "Al Ansari Exchange", mark: "AA" },
  { name: "Prabhu", mark: "PR" },
];

/* ------------------------------------------------------------------ */
/*  Education, certifications, languages                               */
/* ------------------------------------------------------------------ */

export const education = [
  { degree: "Master of Commerce (M.Com)", school: "Madurai Kamaraj University", period: "June 2023" },
  { degree: "Bachelor of Commerce (B.Com)", school: "University of Calicut", period: "2016 – 2019" },
  { degree: "Higher Secondary – Commerce", school: "Government of Kerala", period: "2014 – 2016" },
  { degree: "Professional Diploma in Computerized Accounting", school: "", period: "" },
];

export const certifications: IconItem[] = [
  { label: "AML / Compliance Training", icon: ShieldCheck },
  { label: "UAE VAT Course", icon: Percent },
  { label: "Tally Prime Certification", icon: BadgeCheck },
];

export const languages = ["English", "Arabic", "Hindi", "Malayalam", "Tamil"];

/* Strip of services shown under the hero */
export const serviceStrip: IconItem[] = [
  { label: "Foreign currency exchange", icon: ArrowLeftRight },
  { label: "Remittance processing", icon: Send },
  { label: "WPS operations", icon: CalendarCheck },
  { label: "Cash management", icon: Banknote },
  { label: "AML/KYC compliance", icon: ShieldCheck },
  { label: "Financial reporting", icon: LineChart },
  { label: "Bank reconciliation", icon: Landmark },
  { label: "Branch supervision", icon: Award },
];
