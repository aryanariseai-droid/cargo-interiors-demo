import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";
import { Phone, ArrowRight, Building2, HomeIcon, Castle, Layers } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cargo-interiors-demo.lovable.app/home-builders-and-constructions-in-gurugram",
  name: "Cargo Interior – Home Builders in Gurugram",
  description: "Trusted home builders and construction company in Gurugram specializing in independent homes, villas, duplexes, and custom residential builds.",
  address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
  telephone: "+919050656162",
  areaServed: { "@type": "City", name: "Gurugram" },
};

const capabilities = [
  { icon: HomeIcon, title: "Independent Homes", desc: "Custom-designed standalone homes built from scratch with complete architectural freedom and personalized layouts." },
  { icon: Castle, title: "Villas & Farmhouses", desc: "Spacious villa construction with premium aesthetics, landscaped exteriors, and luxury-grade finishing throughout." },
  { icon: Layers, title: "Duplex Houses", desc: "Intelligently designed multi-level residences that maximize space while maintaining an open, airy feel." },
  { icon: Building2, title: "Custom Builds", desc: "Unconventional floor plans, mixed-use structures, or heritage-inspired designs — we bring unique visions to life." },
];

export default function HomeBuildersGurugram() {
  return (
    <>
      <SEOHead
        title="Trusted Home Builders & Construction Company in Gurugram – Cargo Interior"
        description="Cargo Interior is a trusted home builder and construction company in Gurugram. We build independent homes, villas, duplexes & custom residences with quality craftsmanship."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>Home Builders</SectionLabel>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            Trusted Home Builders and<br className="hidden md:block" /> Construction Company in Gurugram
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed mb-8">
            Choosing the right builder shapes the home you'll live in for decades. Cargo Interior is a Gurugram-based construction company that combines architectural expertise with interior design sensibility — delivering residences that are structurally sound, aesthetically refined, and built with complete transparency. From independent plots to luxury villas, we've earned the trust of homeowners across the city through honest timelines, quality materials, and craftsmanship that speaks for itself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-8 !py-3">Book Free Site Visit</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-3 !text-sm inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Leading Builder */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">A Leading Home Builder in Gurugram</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground font-body leading-relaxed mb-4">
                With years of experience delivering residential projects across Gurugram, Cargo Interior has grown into a name that homeowners associate with reliability. Our in-house team of architects, civil engineers, and interior designers works under one roof — meaning your project benefits from unified planning rather than fragmented coordination.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                We specialize in modern residential construction that balances contemporary design with practical living. Every project begins with understanding how you want to live, and ends with a home that exceeds those expectations.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl space-y-4">
              {["Experienced in diverse residential projects", "In-house architecture + interior team", "Modern designs tailored to your lifestyle", "End-to-end solutions — no subcontracting headaches"].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="font-body text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section className="py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">Our Construction Capabilities</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {capabilities.map((c) => (
              <div key={c.title} className="glass-card p-6 rounded-xl flex gap-4 items-start">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <c.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-2">{c.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>The Difference</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Complete Transparency", desc: "Itemized estimates, no hidden costs, and real-time project dashboards so you're always in control of your investment." },
              { title: "Uncompromised Quality", desc: "ISI-certified materials, daily site inspections, and structural engineering by qualified professionals — not shortcuts." },
              { title: "Architecture + Interiors", desc: "Unlike standalone builders, we integrate interior design from day one, resulting in homes that are beautiful inside and out." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-display font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section className="py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Our Projects</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-3xl">
            From compact independent homes on 150-sq-yard plots to sprawling farmhouse estates, our portfolio reflects the diversity of Gurugram's residential landscape. Each project showcases our commitment to structural excellence and design finesse — blending modern architecture with the practical demands of everyday living.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-3xl">
            We invite you to explore our completed work and speak with past clients. The quality of our construction is best judged by those who live in it every day.
          </p>
          <Link to="/our-portfolio" className="inline-flex items-center gap-2 text-primary font-body text-sm hover:underline">
            View Our Portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Internal Links */}
      <Section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-xl font-bold mb-6">Explore More</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/home-interior", label: "Home Interior Design" },
              { to: "/our-portfolio", label: "Portfolio" },
              { to: "/services", label: "Our Services" },
              { to: "/about-us", label: "About Us" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="inline-flex items-center gap-1 text-sm font-body text-primary hover:underline">
                {l.label} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Let's Build Your Home Together</h2>
          <p className="text-muted-foreground font-body mb-8">Tell us about your plot and vision — we'll handle everything from architecture to move-in.</p>
          <CTAButton className="!px-10 !py-3">Book Free Site Visit</CTAButton>
        </div>
      </section>
    </>
  );
}
