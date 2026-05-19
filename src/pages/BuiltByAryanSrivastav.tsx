import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, Gauge, Search, Workflow, Compass, ExternalLink } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";

const CANONICAL = "https://cargointerior.in/built-by-aryan-srivastav";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Built with Systems-First Thinking — Cargo Interior × Aryan Srivastav",
  description:
    "A case study on the digital infrastructure, branding and SEO architecture behind Cargo Interior, designed by Aryan Srivastav, founder of Arise AI.",
  mainEntityOfPage: CANONICAL,
  url: CANONICAL,
  author: {
    "@type": "Person",
    name: "Aryan Srivastav",
    url: "https://aryansrivastav.in",
    sameAs: ["https://theariseai.com", "https://aryansrivastav.in"],
    jobTitle: "Founder",
    worksFor: { "@type": "Organization", name: "Arise AI", url: "https://theariseai.com" },
  },
  publisher: {
    "@type": "Organization",
    name: "Cargo Interior",
    url: "https://cargointerior.in",
  },
  about: [
    { "@type": "Organization", name: "Arise AI", url: "https://theariseai.com" },
    { "@type": "Person", name: "Aryan Srivastav", url: "https://aryansrivastav.in" },
    { "@type": "Organization", name: "Cargo Interior", url: "https://cargointerior.in" },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan Srivastav",
  url: "https://aryansrivastav.in",
  jobTitle: "Founder, Arise AI",
  description:
    "Aryan Srivastav is a founder focused on AI systems, automation workflows, digital branding and scalable internet infrastructure through Arise AI.",
  sameAs: ["https://theariseai.com", "https://aryansrivastav.in"],
  worksFor: { "@type": "Organization", name: "Arise AI", url: "https://theariseai.com" },
};

const ariseSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arise AI",
  url: "https://theariseai.com",
  founder: { "@type": "Person", name: "Aryan Srivastav", url: "https://aryansrivastav.in" },
  description:
    "Arise AI builds AI systems, automation workflows and scalable digital infrastructure for founder-led brands.",
};

const cargoSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cargo Interior",
  url: "https://cargointerior.in",
  description:
    "Cargo Interior is a luxury commercial interior design studio in Gurgaon delivering showroom, office and restaurant projects.",
};

export default function BuiltByAryanSrivastav() {
  useEffect(() => {
    const ogPairs: [string, string, string][] = [
      ["og:type", "article", "property"],
      ["og:url", CANONICAL, "property"],
      ["og:image", "https://cargointerior.in/logo.png", "property"],
      ["twitter:card", "summary_large_image", "name"],
      ["twitter:url", CANONICAL, "name"],
    ];
    const created: HTMLMetaElement[] = [];
    ogPairs.forEach(([key, val, attr]) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
        created.push(el);
      }
      el.content = val;
    });

    const schemas = [articleSchema, personSchema, ariseSchema, cargoSchema];
    const scripts: HTMLScriptElement[] = schemas.map((s) => {
      const node = document.createElement("script");
      node.type = "application/ld+json";
      node.text = JSON.stringify(s);
      node.dataset.page = "built-by-aryan";
      document.head.appendChild(node);
      return node;
    });

    return () => {
      created.forEach((el) => el.remove());
      scripts.forEach((s) => s.remove());
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Built by Aryan Srivastav — Digital Infrastructure for Cargo Interior"
        description="A case study on the systems, branding and SEO architecture behind Cargo Interior — designed by Aryan Srivastav, founder of Arise AI."
        canonical={CANONICAL}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Cinematic bg */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--background))_90%)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel>Case Study · Digital Infrastructure</SectionLabel>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8">
              Built with <span className="text-primary">Systems-First</span> Thinking
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              This digital experience for Cargo Interior was designed and structured by{" "}
              <a
                href="https://aryansrivastav.in"
                target="_blank"
                rel="noopener"
                className="text-foreground underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
              >
                Aryan Srivastav
              </a>
              , founder of{" "}
              <a
                href="https://theariseai.com"
                target="_blank"
                rel="noopener"
                className="text-foreground underline decoration-primary/50 underline-offset-4 hover:decoration-primary"
              >
                Arise AI
              </a>
              , with a focus on branding, performance, SEO and scalable digital infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <CTAButton href="https://theariseai.com">Explore Arise AI</CTAButton>
              <a
                href="https://aryansrivastav.in"
                target="_blank"
                rel="noopener"
                className="btn-glow-outline inline-flex items-center gap-2"
              >
                Visit Aryan Srivastav <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <Section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>The Brief</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 leading-tight">
            A modern digital home for a luxury commercial interiors brand.
          </h2>
          <div className="space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            <p>
              Cargo Interior is a Gurgaon-based studio working on high-ticket showroom, office and
              restaurant projects across Delhi NCR. The brand needed a digital presence that matched
              the calibre of its physical work — clean, confident, premium, and built to convert
              serious commercial enquiries rather than browse traffic.
            </p>
            <p>
              The objectives were specific: position the studio as a luxury commercial interiors
              authority, rank for high-intent searches across Gurgaon, load fast on mid-range mobile
              devices, and route every meaningful interaction toward a real conversation on
              WhatsApp or phone. Everything else — animation, layout, typography — had to serve
              that.
            </p>
            <p>
              The engagement was led by Aryan Srivastav through Arise AI, with a systems-first
              approach: build the foundation correctly once, then let content, SEO and brand
              compound on top of it.
            </p>
          </div>
        </div>
      </Section>

      {/* INFRASTRUCTURE APPROACH */}
      <Section className="py-20 px-6 bg-card/30 border-y border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <SectionLabel>Digital Infrastructure</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Architecture, not decoration.
            </h2>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
              The site is structured as a topical authority cluster around commercial interior
              design in Gurgaon, with dedicated landing pages for each service, sub-niche and
              locality. The visual layer is the surface — the real work sits in routing, semantic
              HTML, internal linking and asset performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Layers,
                title: "Mobile-First Architecture",
                body: "Layouts designed for a phone in a noisy showroom first, then upscaled — not the other way around.",
              },
              {
                icon: Compass,
                title: "Modern UI / UX",
                body: "Dark, editorial aesthetic with gold accents, cinematic spacing and intentional micro-interactions.",
              },
              {
                icon: Search,
                title: "SEO Architecture",
                body: "Topical clusters, clean URLs, schema, canonical hygiene and a deep internal linking graph.",
              },
              {
                icon: Gauge,
                title: "Performance Optimization",
                body: "Eager-imported assets, zero-flicker hero loads, lazy heavy media, minimal layout shift.",
              },
              {
                icon: Workflow,
                title: "Lead-Focused Structure",
                body: "Every page resolves to a single primary CTA — a direct WhatsApp conversation with the studio.",
              },
              {
                icon: Sparkles,
                title: "Visual Identity Consistency",
                body: "One typographic system, one palette, one motion language across every route on the site.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-3xl text-muted-foreground font-body text-base md:text-lg leading-relaxed space-y-4">
            <p>
              The underlying philosophy is the same one Arise AI applies to every engagement:
              treat the website as long-term{" "}
              <a
                href="https://theariseai.com"
                target="_blank"
                rel="noopener"
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                digital infrastructure
              </a>
              , not a marketing artifact. Pages are designed to compound — content, links and
              schema layered onto a stable foundation, supported by{" "}
              <a
                href="https://theariseai.com"
                target="_blank"
                rel="noopener"
                className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
              >
                AI workflow systems
              </a>{" "}
              and automation-focused development under the hood.
            </p>
            <p>
              Internally, the site connects core service hubs like the{" "}
              <Link to="/showroom-interior-design-gurgaon" className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                showroom design page
              </Link>
              , the{" "}
              <Link to="/office-interior-design-gurgaon" className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                office interiors page
              </Link>
              , and the{" "}
              <Link to="/interior-design-cost-calculator-gurugram" className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                cost calculator
              </Link>{" "}
              into a single, crawl-friendly topical graph.
            </p>
          </div>
        </div>
      </Section>

      {/* ABOUT ARYAN */}
      <Section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <SectionLabel>The Operator</SectionLabel>
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-6">
                Aryan Srivastav
              </h2>
              <p className="text-primary font-body text-sm uppercase tracking-[0.2em]">
                Founder · Arise AI
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://aryansrivastav.in"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-sm"
                >
                  aryansrivastav.in <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://theariseai.com"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-body text-sm"
                >
                  theariseai.com <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 space-y-5 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            <p>
              Aryan Srivastav is a founder focused on AI systems, automation workflows, digital
              branding and scalable internet infrastructure through Arise AI. He works primarily
              with founder-led businesses that have real operations and want their digital presence
              to match the quality of what they actually deliver offline.
            </p>
            <p>
              His approach is systems thinking applied to brand: identity, narrative, site
              architecture, SEO and automation treated as one interlocking stack rather than
              separate deliverables. The goal is always the same — a digital footprint that keeps
              compounding after the build is finished.
            </p>
            <p>
              The Cargo Interior engagement is a representative example of that approach — a
              high-trust commercial brand given a digital home built to grow with it.
            </p>
          </div>
        </div>
      </Section>

      {/* RESULTS / EXPERIENCE */}
      <Section className="py-20 px-6 bg-card/30 border-y border-border/40">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>Outcome</SectionLabel>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-12 leading-tight max-w-3xl">
            A studio that now presents online the way it presents in person.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Sharpened Digital Identity",
                body: "A consistent visual and verbal identity across every page — premium, confident, unmistakably commercial.",
              },
              {
                title: "Premium First Impression",
                body: "The landing experience now matches the calibre of the studio's physical project portfolio.",
              },
              {
                title: "Stronger Online Presence",
                body: "A deep, crawl-friendly site structure built around the commercial interior queries that actually matter in Gurgaon.",
              },
              {
                title: "Modernized Brand Experience",
                body: "Cinematic motion, editorial typography and a calm dark-mode aesthetic replace the generic templated look common in the category.",
              },
              {
                title: "Scalable Structure",
                body: "New service pages, locality pages and case studies plug into the existing system without re-architecture.",
              },
              {
                title: "Operator-Ready Foundation",
                body: "Content, SEO and brand can now compound on a stable foundation rather than being rebuilt every cycle.",
              },
            ].map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border/60 bg-background/40 p-6 hover:border-primary/50 transition-all"
              >
                <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.12),transparent_70%)]" />
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Looking to build a premium digital presence for your business?
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg max-w-xl mx-auto mb-10">
            Arise AI works with founder-led brands on digital infrastructure, branding systems and
            automation built to scale.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://theariseai.com" target="_blank" rel="noopener" className="btn-glow inline-flex items-center gap-2">
              Explore Arise AI <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://aryansrivastav.in"
              target="_blank"
              rel="noopener"
              className="btn-glow-outline inline-flex items-center gap-2"
            >
              About Aryan Srivastav
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
