import { Link } from "react-router-dom";
import { Phone, MessageCircle, MapPin, ArrowRight, CheckCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";

export interface LocationProject {
  title: string;
  description: string;
  image: string;
  href?: string;
}

export interface LocationPageData {
  slug: string;
  location: string;          // e.g. "DLF Phase 1"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;             // 100-150 words
  servicesIntro: string;
  services: { title: string; desc: string }[];
  projectsIntro: string;
  projects: LocationProject[];
  portfolioContextLabel: string;   // e.g. "View Home Interiors"
  portfolioContextHref: string;
  whyChooseIntro: string;
  whyChoose: { title: string; desc: string }[];
  nearbyIntro: string;
  nearbyAreas: string[];
  closingPara: string;       // helps reach 800-1000 words uniquely
}

const SOCIALS = [
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: MessageCircle, href: WA_LINK, label: "WhatsApp" },
];

export default function LocationLandingPage({ data }: { data: LocationPageData }) {
  const canonical = `https://cargo-interiors-demo.lovable.app/${data.slug}`;
  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} canonical={canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema(`Interior Designer in ${data.location}, Gurgaon`, data.metaDescription)),
        }}
      />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={data.projects[0]?.image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>
            <span className="inline-flex items-center gap-2"><MapPin size={12} /> {data.location}, Gurgaon</span>
          </SectionLabel>
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {data.h1.split(data.location)[0]}
            <span className="text-gradient-gold">{data.location}</span>
            {data.h1.split(data.location)[1]}
          </h1>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {data.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton className="!px-8 !py-4 !text-sm">Get Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-6 !py-3 !text-xs inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section className="py-20 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Interior Design Services in {data.location}</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Complete Design + Build for <span className="text-gradient-gold">{data.location}</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">{data.servicesIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {data.services.map((s) => (
              <div key={s.title} className="bg-card border border-border p-7 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                  <CheckCircle className="text-primary" size={18} /> {s.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section className="py-20 md:py-24 border-b border-border bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Our Work in {data.location}</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Projects Delivered Across <span className="text-gradient-gold">{data.location}</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">{data.projectsIntro}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {data.projects.map((p) => {
              const inner = (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={`Before and after — ${p.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary font-body">
                      Before / After
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold mb-2">{p.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.description}</p>
                    {p.href && (
                      <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-body uppercase tracking-widest">
                        View Case Study <ArrowRight size={12} />
                      </span>
                    )}
                  </div>
                </>
              );
              const baseCls = "group block border border-border bg-background overflow-hidden transition-all duration-300";
              return p.href ? (
                <Link
                  key={p.title}
                  to={p.href}
                  className={`${baseCls} hover:border-primary/50 hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.35)] hover:-translate-y-0.5`}
                >
                  {inner}
                </Link>
              ) : (
                <article key={p.title} className={baseCls}>{inner}</article>
              );
            })}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/our-portfolio" className="btn-glow !px-7 !py-3 !text-xs inline-flex items-center gap-2">
              View Full Portfolio <ArrowRight size={14} />
            </Link>
            <Link to={data.portfolioContextHref} className="btn-glow-outline !px-7 !py-3 !text-xs inline-flex items-center gap-2">
              {data.portfolioContextLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section className="py-20 md:py-24 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionLabel>Why Cargo Interior</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
              Why Choose Cargo Interior in <span className="text-gradient-gold">{data.location}</span>
            </h2>
            <p className="text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">{data.whyChooseIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {data.whyChoose.map((w) => (
              <div key={w.title} className="border border-border p-6">
                <h3 className="font-display text-base font-bold mb-2 text-primary">{w.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* NEARBY */}
      <Section className="py-16 md:py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Service Coverage</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">
            Areas Near {data.location} We Serve
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6">{data.nearbyIntro}</p>
          <div className="flex flex-wrap gap-2">
            {data.nearbyAreas.map((a) => (
              <span key={a} className="border border-border px-3 py-1.5 text-xs font-body text-muted-foreground">
                {a}
              </span>
            ))}
          </div>

          <div className="mt-10 text-muted-foreground font-body text-sm leading-relaxed border-t border-border pt-8">
            <p>{data.closingPara}</p>
            <p className="mt-4">
              Looking for the <Link to="/interior-designer-gurgaon" className="text-primary hover:underline">best interior designer in Gurgaon</Link>? Planning a self-build? Explore our <Link to="/house-construction-in-gurugram" className="text-primary hover:underline">house construction services in Gurugram</Link> or get clarity on <Link to="/construction-cost-in-gurugram" className="text-primary hover:underline">construction cost in Gurugram</Link> before you begin.
            </p>
          </div>
        </div>
      </Section>

      {/* BLOG LINKS */}
      <Section className="py-16 md:py-20 border-b border-border bg-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Read More</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Explore Interior Design Insights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog" className="border border-border p-5 hover:border-primary/40 transition-colors block">
              <h3 className="font-display text-sm font-bold mb-1">Modular Kitchen Cost in Gurgaon</h3>
              <p className="text-muted-foreground font-body text-xs">Latest pricing benchmarks and material guidance.</p>
            </Link>
            <Link to="/blog" className="border border-border p-5 hover:border-primary/40 transition-colors block">
              <h3 className="font-display text-sm font-bold mb-1">Office Interior Trends 2025</h3>
              <p className="text-muted-foreground font-body text-xs">What modern Gurgaon workplaces are getting right.</p>
            </Link>
            <Link to="/blog" className="border border-border p-5 hover:border-primary/40 transition-colors block">
              <h3 className="font-display text-sm font-bold mb-1">Home Design Tips for Apartments</h3>
              <p className="text-muted-foreground font-body text-xs">Smart space planning ideas for high-rise living.</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* SOCIAL */}
      <Section className="py-14 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Stay Connected</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Connect With Cargo Interior</h2>
          <div className="flex justify-center gap-4">
            {SOCIALS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Looking for the Best <span className="text-gradient-gold">Interior Designer in Gurgaon?</span>
          </h2>
          <p className="text-muted-foreground font-body mb-8">
            Get a personalised design strategy for your {data.location} property — no obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <CTAButton className="!px-7 !py-3 !text-xs">Get Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-6 !py-3 !text-xs inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow-outline !px-6 !py-3 !text-xs inline-flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp Now
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
