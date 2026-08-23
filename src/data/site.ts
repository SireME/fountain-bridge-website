import type { Metadata } from "next";
import {
  BookOpen,
  HandCoins,
  HandHeart,
  Handshake,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const asset = (path: string) => `/uploads/foun/${path.replace(/^images\//, "")}`;

/** Canonical origin, shared by metadata, sitemap, robots, and schema markup. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://ftnbridge.org").replace(/\/$/, "");

export const facebook = {
  handle: "fountainbridge1",
  pageUrl: "https://www.facebook.com/fountainbridge1/",
  shareUrl: "https://www.facebook.com/share/r/1FBRh41iH6/",
};

export const linkedin = {
  pageUrl: "https://www.linkedin.com/company/fountainbridge/",
};

export const site = {
  name: "Fountain Bridge",
  shortName: "Fountain Bridge",
  acronym: "FB",
  logo: asset("images/branding-logo/1782458548509-5afaca6c-3ac9-42df-9f65-88bc4d2ab609.jpg"),
  heroImage: asset("images/hero-heroimage/1782410695452-c299b4aa-f274-476a-87f3-c380725da169.jpg"),
  tagline: "Transforming life and ensuring healthy living for all",
  headline: "Empowering communities through health, education, and inclusion.",
  subheadline:
    "We work locally to deliver education support, health outreach, and community development to underserved families and youth.",
  type: "Community-based nonprofit organization",
  founded: "2022",
  location: "Mile 16, Buea, South West Region, Cameroon",
  whereWeWork:
    "Headquartered in Buea, Fountain Bridge carries out outreach activities in communities across Cameroon, extending support to underserved rural and conflict-affected areas.",
  mapQuery: "Fountain Bridge Buea Cameroon",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Fountain%20Bridge%20Buea%20Cameroon&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Fountain%20Bridge%20Buea%20Cameroon",
  // Structured form of `location`, used for the organization schema markup.
  address: {
    street: "Mile 16",
    locality: "Buea",
    region: "South West Region",
    country: "Cameroon",
    countryCode: "CM",
  },
  phone: "+237 672 073 459",
  emails: ["fountainbridge21@gmail.com", "lengouhhilda@gmail.com"],
  summary:
    "Fountain Bridge promotes the wellbeing of vulnerable populations by providing health information, linking people to quality healthcare, empowering women and youth through education, and lighting up the future of orphans for sustainable development.",
  aboutIntro:
    "Founded by a local changemaker, Fountain Bridge responds to urgent community needs with practical programs shaped by lived experience and local partnerships.",
  mission:
    "To build sustainable cities and communities where everyone lives healthy lives and shoulders responsibility for others for a better tomorrow.",
  vision:
    "To promote the wellbeing of vulnerable people by giving them health information, linking them to quality healthcare, empowering women and youth through quality education, and lighting up the future of orphans for sustainable development.",
  history:
    "The initiative began in 2020 after the founder identified recurring gaps in school support, food security, access to healthcare, and basic health information.",
  values: [
    "Integrity",
    "Inclusion",
    "Empowerment",
    "Transparency",
    "Equity",
  ],
  audiences: ["Vulnerable populations", "Women", "Youth", "Children and orphans"],
  officeHours: "Monday to Sunday. Field visits are scheduled by project.",
  responseTime: "We usually respond within 24-48 hours.",
  footerDescription:
    "A nonprofit committed to building healthier, safer, and more hopeful communities through practical action.",
  transparencyPromise:
    "We document donations, report how funds are used, and share updates with supporters through photos, receipts, and activity summaries.",
  donationIntro:
    "Donations help fund school materials, outreach logistics, emergency support, training sessions, and community events.",
  donationHelpContact: "+237 672 073 459",
};

/**
 * Per-page metadata.
 *
 * Next.js merges metadata field by field, so a page that sets only `title` and
 * `description` still inherits the root layout's `openGraph` and `twitter`
 * blocks whole. Every inner page therefore advertised the homepage's title and
 * `og:url`, and a shared /donate link previewed — and deduplicated — as `/`.
 * Deriving both blocks from the page's own title, description, and path is what
 * keeps a shared link pointing at the page that was actually shared.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const shareTitle = `${title} | ${site.name}`;
  const preview = "/fountain-bridge-preview.jpg";

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: shareTitle,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: preview, width: 1200, height: 630, alt: `${site.name} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [preview],
    },
  };
}

/** Click-to-chat link for the public organisation number. */
export const whatsappUrl = `https://wa.me/${site.phone.replace(/\D/g, "")}`;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Impact" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];

// The donate route is promoted to a standing call to action in the header, so
// the inline link row renders every other destination.
export const primaryNavItems = navItems.filter((item) => item.href !== "/donate");

export const donateNavItem = navItems.find((item) => item.href === "/donate")!;

export const proofStats = [
  { value: "500+", label: "children supported" },
  { value: "25", label: "communities reached" },
  { value: "40", label: "volunteers mobilized" },
  { value: "2022", label: "formal nonprofit start" },
];

// Single source of truth for the contact form options and the API validation.
export const contactTopics = [
  "Volunteer application",
  "Donation support",
  "Partnership inquiry",
  "Media request",
  "Beneficiary referral",
] as const;

// Three routes into the work, mirroring the topics the contact form accepts.
export const waysToHelp = [
  {
    title: "Give",
    description:
      "Fund school materials, outreach logistics, emergency support, training sessions, and community events.",
    href: "/donate",
    action: "See how giving works",
    icon: HandCoins,
  },
  {
    title: "Volunteer",
    description:
      "Join field outreach, health education, mentoring, fundraising support, or media and documentation work.",
    href: "/contact",
    action: "Send a volunteer request",
    icon: HandHeart,
  },
  {
    title: "Partner",
    description:
      "Work with us as a school, health facility, council, faith-based group, sponsor, or technical partner.",
    href: "/contact",
    action: "Start a partnership inquiry",
    icon: Handshake,
  },
];

export const partners = [
  "Ministry of Public Health",
  "Local councils",
  "Community schools",
  "Faith-based partners",
  "Community leaders",
  "Health facilities",
  "Local government",
];

export const programs = [
  {
    title: "A World Without Inclusiveness Is a Dead World",
    summary:
      "Fountain Bridge supports inclusive education and introduces families to the importance of sign language, dignity, and communication access for children and the deaf community.",
    icon: Sparkles,
    image: asset("images/programs-coreprograms-0-image/1782459559688-5e18fc9b-f8c2-4b1d-bc7d-768b51d65f75.jpg"),
  },
  {
    title: "Operation No Child Is to Be Left Behind",
    summary:
      "In partnership with Operation CARE, Fountain Bridge supports orphaned and less privileged children with school items, basic food support, and education-focused follow-up.",
    icon: BookOpen,
    image: asset("images/programs-coreprograms-1-image/1782460010195-f7cf1b66-0745-4cce-a61b-c18bf8d7dc6b.jpg"),
  },
  {
    title: "Health and Nutrition Relief",
    summary:
      "Community-based screening, prevention education, nutrition support, referrals, and direct assistance for families, mothers, children, and elderly people.",
    icon: HeartPulse,
    image: asset("images/impact-impactareas-0-image/1782456416498-b28c2a10-9de4-4b59-ab63-09ec3a21ec1b.jpg"),
  },
  {
    title: "Community Empowerment and Livelihoods",
    summary:
      "Practical support for vulnerable women, youth, and families through dignity-centered outreach, education, mentoring, and partnership.",
    icon: UsersRound,
    image: asset("images/impact-impactareas-1-image/1782457114664-51d1e262-6869-44f0-96d7-c1b12e0dfd2d.jpg"),
  },
];

export const impactAreas = [
  {
    title: "Early Detection Saves Lives: Community Malaria Screening in Bambalang",
    summary:
      "Fountain Bridge carried out community malaria screening in Bambalang, testing children and adults with rapid diagnostic tests. Positive cases were linked to immediate treatment and health education, strengthening prevention and reducing avoidable deaths.",
    image: asset("images/impact-impactareas-0-image/1782456416498-b28c2a10-9de4-4b59-ab63-09ec3a21ec1b.jpg"),
  },
  {
    title: "Caring for Our Elders: Food and Health Screening",
    summary:
      "The team provided elderly women with essential food supplies and screened for non-communicable diseases such as hypertension and diabetes. Women with health concerns received counseling and referrals to local health facilities.",
    image: asset("images/impact-impactareas-1-image/1782457114664-51d1e262-6869-44f0-96d7-c1b12e0dfd2d.jpg"),
  },
  {
    title: "A Period-Friendly World for All",
    summary:
      "Fountain Bridge distributes sanitary pads, teaches menstrual hygiene, and breaks stigma through community dialogue and youth education so menstruation does not block school, work, dignity, or opportunity.",
    image: asset("images/impact-impactareas-2-image/1782457321913-f5352a4e-6c7c-427d-839f-decdabbc81d4.jpg"),
  },
  {
    title: "Clean Environment, Healthy Lives",
    summary:
      "The organization improves living conditions through practical home support, food assistance, and environmental-health awareness because health starts where people live.",
    image: asset("images/impact-impactareas-3-image/1782458900117-21f9296e-70ce-45df-9265-ffa19e9798b3.jpg"),
  },
];

export const achievements = [
  {
    title: "Safe Motherhood: Supporting Mothers from Pregnancy to Childbirth",
    summary:
      "Fountain Bridge equips pregnant women with delivery bags and baby blankets, provides education on antenatal care, skilled delivery, and postnatal support, and helps ensure no mother faces childbirth alone or unprepared.",
    image: asset("images/impact-achievements-0-image/1782455878076-a25561c2-59d0-4fc3-ba16-c5658ef4cb4d.jpg"),
  },
  {
    title: "Community Health and Wellness Award",
    summary:
      "In 2023, Fountain Bridge received a Community Health and Wellness Award recognizing its community-centered health work.",
    image: asset("images/impact-achievements-1-image/1782455947962-55809951-e4df-441b-8d6c-666833933e6b.jpg"),
  },
];

export const operatingModel = [
  {
    step: "Listen",
    title: "Community needs first",
    summary:
      "Fountain Bridge works with families, schools, community leaders, health facilities, and local partners so support responds to real needs.",
  },
  {
    step: "Link",
    title: "Bridge people to support",
    summary:
      "The organization connects vulnerable people to health information, education support, referrals, volunteers, and practical assistance.",
  },
  {
    step: "Sustain",
    title: "Build long-term wellbeing",
    summary:
      "Programs are designed around dignity, prevention, inclusion, accountability, and shared responsibility for healthier communities.",
  },
];

export const homepageHighlights = [
  "Health and nutrition relief",
  "Education support for vulnerable children",
  "Sickle cell awareness and care",
  "HIV prevention, testing, and support",
  "Inclusive communication and sign language awareness",
  "Leadership development",
  "Community empowerment and livelihoods",
];

export const projects = [
  {
    title: "Back-to-School Support Campaign",
    year: "2026-2027",
    location: "Buea, Bamenda, and surrounding communities",
    status: "Ongoing",
    target: "200 children",
    progress: "60% funded or XAF 1,200,000 raised",
    progressPercent: 60,
    summary:
      "Provides books, uniforms, fee support, and mentoring for children at risk of dropping out.",
    image: asset("images/projects-projects-0-image/1782460648793-d050daa3-5e37-4f61-afd1-fd281b934a98.jpg"),
    highlights: [
      "School materials and fee support",
      "Focus on children in Buea and Bamenda",
      "Built on the belief that no child should be left behind",
    ],
  },
];

export const team = [
  {
    name: "Ngwanjoh Lengouh Njeunui",
    role: "Founder and Public Health Lead",
    bio:
      "Founder of Fountain Bridge and Fountain Bridge Healthcare Foundation, leading community health outreach and inclusive development initiatives in Cameroon.",
    character: "female",
  },
  {
    name: "Maimo Amstrong Ghakanyuy",
    role: "Project Coordinator",
    bio: "Registered nurse, tutor, youth coach, and project coordinator supporting Fountain Bridge field implementation.",
    character: "male",
    photo: asset("images/leadership-leaders-1-photo/1782461243398-fd3dca2f-2b02-4488-9859-a6d473bcb759.jpg"),
  },
  {
    name: "LENGOUH HILDA",
    role: "Community Data and Coordination Contact",
    bio:
      "Supports site information, documentation, coordination, and communication for the organization's public presence.",
    character: "female",
  },
];

export const gallery = [
  ...impactAreas.map((item) => ({
    title: item.title,
    caption: item.summary,
    image: item.image,
  })),
  ...achievements.map((item) => ({
    title: item.title,
    caption: item.summary,
    image: item.image,
  })),
  {
    title: "Inclusive education outreach",
    caption: "Education support paired with awareness on sign language, communication access, and inclusion.",
    image: asset("images/programs-coreprograms-0-image/1782459559688-5e18fc9b-f8c2-4b1d-bc7d-768b51d65f75.jpg"),
  },
  {
    title: "Back-to-school support",
    caption: "School items and basic support for children at Rhema Grace Orphanage Ombe.",
    image: asset("images/programs-coreprograms-1-image/1782460010195-f7cf1b66-0745-4cce-a61b-c18bf8d7dc6b.jpg"),
  },
  {
    title: "Program field image",
    caption: "Field documentation from Fountain Bridge program activity.",
    image: asset("images/programs-programimages/1782460497903-83c90f02-f6e7-4efe-807e-ecc371e02566.jpg"),
  },
  {
    title: "Community action",
    caption: "Photos from program visits, outreach, and community support activities.",
    image: asset("images/programs-programimages/1782460501306-3c04cbfc-353d-4d0e-8c4a-5fd33a9162a6.jpg"),
  },
  {
    title: "Program support",
    caption: "Fountain Bridge field images collected for public communication and reporting.",
    image: asset("images/programs-programimages/1782460504844-062dd2cb-9945-4179-a5f4-21e8f190a943.jpg"),
  },
  {
    title: "Outreach documentation",
    caption: "Community-centered work documented through local program photos.",
    image: asset("images/programs-programimages/1782460506490-9631e7c2-6ee5-4b55-8f5f-702352fb1f90.jpg"),
  },
];

export const updates = [
  {
    title: "Back-to-School Support Campaign 2026-2027",
    date: "Upcoming campaign",
    summary:
      "Fountain Bridge hopes to support 200 children in Buea and Bamenda with school materials and fees.",
  },
  {
    title: "Community malaria screening in Bambalang",
    date: "Health outreach",
    summary:
      "Children and adults were screened with rapid diagnostic tests, with positive cases linked to treatment and health education.",
  },
  {
    title: "Community Health and Wellness Award",
    date: "2023",
    summary:
      "Fountain Bridge was recognized with a Community Health and Wellness Award for its community health work.",
  },
];

export const events = [
  {
    title: "Health Outreach Field Visit",
    date: "Scheduled by project",
    location: "Buea, Bambalang, and partner communities",
    summary:
      "Field-based education, referrals, screening, and nutrition support coordinated with community leaders and volunteers.",
  },
  {
    title: "Back-to-School Campaign Drive",
    date: "2026-2027 school year",
    location: "Buea and Bamenda",
    summary:
      "Donation and volunteer mobilization for school materials, fee support, mentoring, and follow-up support.",
  },
  {
    title: "Period-Friendly World Outreach",
    date: "Scheduled by project",
    location: "Schools and communities",
    summary:
      "Menstrual hygiene education, sanitary pad support, and stigma-reduction dialogue for girls and young women.",
  },
];

export const donationTiers = [
  {
    tier: "School Kit Sponsor",
    amount: "XAF 25,000 / USD 40",
    description:
      "Supports a school bag, exercise books, pens and pencils, uniform assistance, and follow-up for one child.",
  },
  {
    tier: "Health Outreach Partner",
    amount: "Custom",
    description:
      "Supports screening materials, transport, volunteer coordination, food support, and health education logistics.",
  },
  {
    tier: "Community Program Builder",
    amount: "Custom",
    description:
      "Helps expand programs through institutional partnerships, grants, recurring sponsorship, and technical support.",
  },
];

export const paymentMethods = [
  {
    type: "Mobile Money / bank transfer / PayPal / cash",
    provider: "Mobile Money: +237 672 073 459",
    accountName: "Fountain Bridge Healthcare Foundation",
    accountNumber: "Bank account: 00069 00000115515",
    instructions: 'Use reason "Donation" and send confirmation by WhatsApp.',
  },
];

export const trustBadges = [
  { label: "Registered nonprofit", icon: ShieldCheck },
  { label: "Community-led", icon: HandHeart },
  { label: "Transparent reporting", icon: Leaf },
  { label: "Volunteer supported", icon: UsersRound },
];
