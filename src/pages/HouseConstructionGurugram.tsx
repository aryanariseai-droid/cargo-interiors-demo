import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";
import { Phone, CheckCircle, ArrowRight, Hammer, HardHat, ClipboardCheck, Home, ShieldCheck } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "House Construction in Gurugram",
  provider: {
    "@type": "LocalBusiness",
    name: "Cargo Interior",
    address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
    telephone: "+919050656162",
  },
  areaServed: { "@type": "City", name: "Gurugram" },
  description: "End-to-end residential house construction services in Gurugram including civil work, structural engineering, finishing, and turnkey delivery.",
};

const processSteps = [
  { icon: ClipboardCheck, title: "Consultation & Site Assessment", desc: "We begin with a thorough understanding of your vision, budget, and site conditions to create a solid foundation for the project." },
  { icon: Home, title: "Architectural Planning", desc: "Our architects draft detailed floor plans, elevation designs, and structural layouts tailored to your family's lifestyle and future needs." },
  { icon: Hammer, title: "Design & Approvals", desc: "From 3D visualizations to municipal approvals, we handle every pre-construction requirement so you can proceed with confidence." },
  { icon: HardHat, title: "Construction & Execution", desc: "Skilled teams execute civil, structural, electrical, and plumbing work under strict quality supervision with weekly progress updates." },
  { icon: ShieldCheck, title: "Finishing & Handover", desc: "Premium finishing touches — flooring, painting, fixtures — followed by a thorough quality inspection before we hand over the keys." },
];

const services = [
  { title: "Turnkey House Construction", desc: "Complete end-to-end construction from foundation to finishing, managed entirely by our team so you don't have to coordinate multiple contractors." },
  { title: "Civil & Structural Work", desc: "RCC framing, brickwork, plastering, and waterproofing executed by experienced engineers using ISI-certified materials." },
  { title: "Finishing & Handover", desc: "Flooring, wall treatments, modular fittings, and electrical fixtures installed with precision for a move-in-ready home." },
];

export default function HouseConstructionGurugram() {
  return (
    <>
      <SEOHead
        title="House Construction in Gurugram | Residential Construction Services – Cargo Interior"
        description="End-to-end house construction services in Gurugram. From civil work to finishing, Cargo Interior delivers quality residential construction with transparent pricing and on-time delivery."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionLabel>Residential Construction</SectionLabel>
          <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            House Construction in Gurugram –<br className="hidden md:block" /> End-to-End Residential Construction Services
          </h1>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed mb-8">
            Building a house is one of life's most significant investments, and it deserves a team that values quality as much as you do. At Cargo Interior, we deliver complete residential construction services in Gurugram — from the first brick to the final coat of paint — with transparent timelines, honest pricing, and uncompromising structural integrity. Every project is backed by experienced engineers and a commitment to handing over your dream home exactly as promised.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton className="!px-8 !py-3">Get Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-3 !text-sm inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">Our House Construction Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="glass-card p-6 rounded-xl">
                <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-12">Our Construction Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, i) => (
              <div key={step.title} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Quality & Materials */}
      <Section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>Built to Last</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Quality & Materials</h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-8 max-w-3xl">
            Every structure we build is designed for decades of durability. We use only ISI-marked cement, TMT steel bars, and tested aggregates. Our site engineers conduct daily quality checks, and we maintain transparent material procurement records so you always know exactly what goes into your home.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["ISI-certified cement & TMT steel", "Daily on-site quality inspections", "Waterproofing at every critical junction", "Earthquake-resistant RCC design", "Transparent material sourcing", "Third-party structural audits on request"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-primary flex-shrink-0" />
                <span className="font-body text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose */}
      <Section className="py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionLabel>The Cargo Advantage</SectionLabel>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-10">Why Choose Cargo Interior</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "End-to-End Execution", desc: "One team handles architecture, construction, and interiors — no middlemen, no coordination headaches." },
              { title: "Transparent Pricing", desc: "Detailed cost breakdowns before construction begins. No hidden charges, no surprise escalations." },
              { title: "On-Time Delivery", desc: "Milestone-based scheduling with regular progress reports ensures your home is ready when promised." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6 rounded-xl text-center">
                <h3 className="font-display font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
              { to: "/our-portfolio", label: "Our Portfolio" },
              { to: "/services", label: "All Services" },
              { to: "/about-us", label: "About Cargo Interior" },
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
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Dream Home?</h2>
          <p className="text-muted-foreground font-body mb-8">Share your requirements and get a detailed construction estimate — completely free.</p>
          <CTAButton className="!px-10 !py-3">Get Free Consultation</CTAButton>
        </div>
      </section>
    </>
  );
}
