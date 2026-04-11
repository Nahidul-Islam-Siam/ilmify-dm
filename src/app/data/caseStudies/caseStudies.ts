export type CaseStudy = {
  href: string;
  title: string;
  excerpt: string;
  meta: string;
  image: string;
  featured: boolean;
  category: string;
  tags: string[];
  results: {
    label: string;
    value: string;
    change: "up" | "down";
  }[];
};

const demoCaseStudyImage = "/assets/case_study/demo_case_study.png";

export const caseStudies: CaseStudy[] = [
  {
    href: "/case-studies/google-ads-0-to-63-conversions",
    title: "From 0 Conversions to 63+ Conversions with Google Ads",
    excerpt:
      "Diagnosed and transformed a completely non-performing Google Ads account into a scalable, high-converting campaign system using structured optimisation and data-driven strategies.",
    meta: "5 min read | Jan 15, 2025",
    image: demoCaseStudyImage,
    featured: true,
    category: "Paid Advertising",
    tags: ["Google Ads", "PPC", "Performance Max", "Conversion Optimisation"],
    results: [
      { label: "Conversions", value: "63+", change: "up" },
      { label: "Impression Share", value: "High", change: "up" },
      { label: "Wasted Spend", value: "Reduced", change: "down" },
      { label: "Campaign Structure", value: "Scalable", change: "up" },
    ],
  },
  {
    href: "/case-studies/lno-boutique-seo-growth",
    title:
      "LNO Boutique Grows Organic Clicks by 219% and Impressions by 351% in Under Three Months",
    excerpt:
      "Through tailored SEO, website optimisation, Google Business Profile management, and local citation building, LNO Boutique improved visibility across local search and turned that visibility into stronger clicks, interactions, calls, and direction requests.",
    meta: "6 min read | Feb 10, 2025",
    image: "/assets/case_study/seo-1.png",
    featured: false,
    category: "Local SEO",
    tags: ["SEO", "Local SEO", "Google My Business", "Link Building"],
    results: [
      { label: "Organic Clicks", value: "+219%", change: "up" },
      { label: "Impressions", value: "+351%", change: "up" },
      { label: "GMB Clicks", value: "+1,218.6%", change: "up" },
      { label: "Profile Interactions", value: "+540.7%", change: "up" },
      { label: "Calls from GMB", value: "+455%", change: "up" },
      { label: "Direction Requests", value: "+349.5%", change: "up" },
    ],
  },
  {
    href: "/case-studies/google-ads-0-to-63-conversions",
    title: "From 0 Conversions to 63+ Conversions with Google Ads",
    excerpt:
      "Diagnosed and transformed a completely non-performing Google Ads account into a scalable, high-converting campaign system using structured optimisation and data-driven strategies.",
    meta: "5 min read | Jan 15, 2025",
    image: demoCaseStudyImage,
    featured: true,
    category: "Paid Advertising",
    tags: ["Google Ads", "PPC", "Performance Max", "Conversion Optimisation"],
    results: [
      { label: "Conversions", value: "63+", change: "up" },
      { label: "Impression Share", value: "High", change: "up" },
      { label: "Wasted Spend", value: "Reduced", change: "down" },
      { label: "Campaign Structure", value: "Scalable", change: "up" },
    ],
  },
  {
    href: "/case-studies/lno-boutique-seo-growth",
    title:
      "LNO Boutique Grows Organic Clicks by 219% and Impressions by 351% in Under Three Months",
    excerpt:
      "Through tailored SEO, website optimisation, Google Business Profile management, and local citation building, LNO Boutique improved visibility across local search and turned that visibility into stronger clicks, interactions, calls, and direction requests.",
    meta: "6 min read | Feb 10, 2025",
    image: "/assets/case_study/seo-1.png",
    featured: false,
    category: "Local SEO",
    tags: ["SEO", "Local SEO", "Google My Business", "Link Building"],
    results: [
      { label: "Organic Clicks", value: "+219%", change: "up" },
      { label: "Impressions", value: "+351%", change: "up" },
      { label: "GMB Clicks", value: "+1,218.6%", change: "up" },
      { label: "Profile Interactions", value: "+540.7%", change: "up" },
      { label: "Calls from GMB", value: "+455%", change: "up" },
      { label: "Direction Requests", value: "+349.5%", change: "up" },
    ],
  },
];
