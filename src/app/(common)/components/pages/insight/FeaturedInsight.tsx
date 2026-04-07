"use client";

import { insightItems } from "@/app/data/insight/Insight";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export type FeaturedInsightcard = {
  slug: string;
  title: string;
  excerpt: string;
  meta: string;
  image: string;
  featured: boolean;
};

export default function FeaturedInsightCard() {
  const insight = insightItems.find(
    (item): item is FeaturedInsightcard => item.featured!,
  );
  if (!insight) return null;
  const [readTime, date] = insight.meta.split(" | ");
  const formattedDate = formatDate(date);

  return (
    <div className="group relative overflow-hidden  bg-gradient-to-br from-[#0A0A0A] to-[#111111]  ransition-all duration-500 hover:border-site-accent/30 hover:shadow-2xl hover:shadow-site-accent/5">
      <div className="absolute inset-0 bg-gradient-to-r from-site-accent/0 via-site-accent/0 to-site-accent/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col lg:flex-row gap-6 p-6 md:p-8 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="relative w-full lg:w-2/5 overflow-hidden rounded-2xl ">
          <div className="absolute inset-0  z-10 rounded-2xl" />
          <Image
            src={insight.image}
            alt={insight.title}
            width={400}
            height={300}
            className="h-full w-3/4 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-site-accent/20 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-site-accent border border-site-accent/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-site-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-site-accent" />
              </span>
              Featured Article
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center space-y-4">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-site-accent" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-site-accent" />
              <span>{formattedDate}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
            {insight.title}
          </h2>

          {/* Excerpt */}
          <p className="text-white/60 leading-relaxed text-base md:text-lg">
            {insight.excerpt}
          </p>

          {/* Read More Link */}
          <div className="pt-4">
            <Link
              href={`/insights/${insight.slug}`}
              className="group/link inline-flex items-center gap-2 text-site-accent font-semibold transition-all duration-300 hover:gap-3"
            >
              <span>Read full article</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative corner accent */}
      {/* <div className="absolute bottom-0 right-0 h-24 w-24 opacity-20">
        <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-site-accent blur-3xl" />
      </div> */}
    </div>
  );
}
