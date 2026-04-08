// app/data/caseStudies/caseStudies.ts

// app/data/caseStudies/caseStudies.ts

export type CaseStudy = {
  slug: string;
  title: string;
  excerpt: string;
  meta: string;
  image: string;
  featured: boolean;
  category: string;
  tags: string[];
  overview: {
    client: string;
    service: string;
    timeline: string;
    result: string;
  };
  problem: {
    summary: string;
    points: string[];
  };
  challenges: string[];
  strategy: {
    title: string;
    description: string;
  }[];
  results: {
    label: string;
    value: string;
    change: "up" | "down";
  }[];
  conclusion: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "google-ads-0-to-63-conversions",
    title: "From 0 Conversions to 63+ Conversions with Google Ads",
    excerpt:
      "Diagnosed and transformed a completely non-performing Google Ads account into a scalable, high-converting campaign system using structured optimisation and data-driven strategies.",
    meta: "5 min read | Jan 15, 2025",
    image: "/images/case-studies/google-ads.jpg", // replace with actual image path
    featured: true,
    category: "Paid Advertising",
    tags: ["Google Ads", "PPC", "Performance Max", "Conversion Optimisation"],
    overview: {
      client: "Multi-location Service Business",
      service: "Google Ads Management",
      timeline: "Ongoing Optimisation",
      result: "63+ Conversions from 0",
    },
    problem: {
      summary:
        "The account had been running with zero results — no conversions, minimal visibility, and a budget that was being wasted without any strategic framework in place.",
      points: [
        "0 conversions recorded across all campaigns",
        "Low impression share (less than 10%)",
        "Poor keyword targeting with no intent alignment",
        "Budget not being fully utilised",
        "No structured campaign strategy or segmentation",
        "No scaling framework in place",
      ],
    },
    challenges: [
      "Rebuilding trust in paid ads after a prolonged period of zero results",
      "Allocating limited budget across multiple locations effectively",
      "Balancing automated Performance Max campaigns with manual Search control",
    ],
    strategy: [
      {
        title: "Campaign Restructuring",
        description:
          "Segmented campaigns by location (Chicago & Atlanta) and separated Search campaigns from Performance Max to give each channel a focused objective and budget.",
      },
      {
        title: "Keyword Optimisation",
        description:
          "Added high-intent keywords aligned with buyer intent, refined match types for precision targeting, and implemented a thorough negative keyword list to eliminate wasted spend.",
      },
      {
        title: "Performance Max Optimisation",
        description:
          "Leveraged Google's automation layer for broader reach and scaling. Improved asset groups with strong creative signals and focused conversion tracking.",
      },
      {
        title: "Budget Reallocation",
        description:
          "Shifted spend away from underperforming campaigns and towards proven winners, reducing wasted ad spend and improving overall account efficiency.",
      },
      {
        title: "Continuous Optimisation",
        description:
          "Monitored CTR, CPC, and conversion data weekly. Replaced underperforming ad elements and scaled campaigns that demonstrated consistent performance.",
      },
    ],
    results: [
      { label: "Conversions", value: "63+", change: "up" },
      { label: "Impression Share", value: "High", change: "up" },
      { label: "Wasted Spend", value: "Reduced", change: "down" },
      { label: "Campaign Structure", value: "Scalable", change: "up" },
    ],
    conclusion:
      "This case study demonstrates that a structured, data-driven approach to Google Ads management can transform a completely non-performing account into a scalable conversion machine. By combining intelligent campaign architecture with ongoing optimisation, we turned zero results into a repeatable, growing system.",
  },
  {
    slug: "lno-boutique-seo-growth",
    title: "LNO Boutique Grows Organic Clicks by 219% in Under 3 Months",
    excerpt:
      "Through a tailored local SEO strategy combining website optimisation, GMB management, and citation building, LNO Boutique achieved explosive growth in visibility, traffic, and customer engagement.",
    meta: "6 min read | Feb 10, 2025",
    image: "/images/case-studies/lno-boutique.jpg", // replace with actual image path
    featured: false,
    category: "Local SEO",
    tags: ["SEO", "Local SEO", "Google My Business", "Link Building"],
    overview: {
      client: "LNO Boutique",
      service: "Local SEO & GMB Optimisation",
      timeline: "Under 3 Months",
      result: "219% Organic Click Growth",
    },
    problem: {
      summary:
        "LNO Boutique had a functional website and a GMB profile but was virtually invisible in local search. Competitors with stronger online presence were capturing all nearby customer intent.",
      points: [
        "Not appearing at the top of local search results",
        "Low inbound website traffic despite a well-built site",
        "Underperforming and incomplete Google My Business profile",
        "No high-quality citations built across local directories",
        "Inconsistent NAP (Name, Address, Phone) across platforms",
        "Lack of structured data on the website",
      ],
    },
    challenges: [
      "Competing against well-established local businesses in a saturated market",
      "Fixing inconsistent business information scattered across multiple platforms",
      "Building authority in a short timeframe through quality citations and backlinks",
    ],
    strategy: [
      {
        title: "SEO Audit",
        description:
          "Conducted a thorough audit of both the website and GMB profile, identifying technical SEO gaps, content weaknesses, citation inconsistencies, and missed local ranking opportunities.",
      },
      {
        title: "GMB Optimisation",
        description:
          "Updated all business details for accuracy, added keyword-rich business descriptions, published regular engaging posts, and actively managed reviews to build trust and visibility.",
      },
      {
        title: "Website Optimisation",
        description:
          "Improved on-page SEO with geo-targeted local keywords, enhanced mobile performance, reduced page load speeds, refreshed content, and implemented structured data markup (Schema.org) for richer search results.",
      },
      {
        title: "Local Citation & Link Building",
        description:
          "Ensured consistent NAP across all major local directories and review platforms. Built relevant, authoritative backlinks to strengthen domain authority and local search ranking signals.",
      },
    ],
    results: [
      { label: "Organic Clicks", value: "+219%", change: "up" },
      { label: "Impressions", value: "+351%", change: "up" },
      { label: "GMB Website Clicks", value: "+1,218.6%", change: "up" },
      { label: "Profile Interactions", value: "+540.7%", change: "up" },
      { label: "Calls from GMB", value: "+455%", change: "up" },
      { label: "Direction Requests", value: "+349.5%", change: "up" },
    ],
    conclusion:
      "This project proves that a well-executed local SEO strategy — combining technical website improvements, GMB optimisation, and citation consistency — can produce dramatic results in a short time. LNO Boutique went from being invisible online to becoming a dominant local presence, with measurable growth across every key metric.",
  },
];
