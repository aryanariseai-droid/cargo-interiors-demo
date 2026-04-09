import { Link } from "react-router-dom";
import showroomImage from "@/assets/showroom-interior.jpg";
import officeImage from "@/assets/office-interior.jpg";
import commercialImage from "@/assets/commercial-interior.jpg";
import homeImage from "@/assets/home-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { CheckCircle, Phone, MessageCircle, ArrowRight, Star, Shield, Clock, MapPin } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", role: "CEO, TechVentures Pvt Ltd", text: "Cargo Interiors transformed our 5000 sq ft office in Golf Course Road. The design was exactly what we envisioned — modern, functional, and delivered 3 days ahead of schedule. Highly recommended interior designer in Gurgaon.", rating: 5 },
  { name: "Priya Malhotra", role: "Owner, Luxe Fashion Showroom", text: "We saw a 40% increase in walk-in conversions after Cargo Interiors redesigned our showroom in MG Road. Their understanding of retail psychology is unmatched. Best interior designer near me!", rating: 5 },
  { name: "Ankit Gupta", role: "Homeowner, DLF Phase 4", text: "From modular kitchen to complete living room makeover — Cargo Interiors handled everything within our budget. Zero stress, zero delays. The best home interior designer in Gurgaon we've worked with.", rating: 5 },
];

const faqs = [
  { q: "How much does an interior designer in Gurgaon charge?", a: "Interior designer fees in Gurgaon typically range from ₹50-150 per sq ft for design consultation, and ₹1,500-3,500 per sq ft for turnkey execution depending on scope, materials, and complexity. At Cargo Interiors, we offer transparent pricing with no hidden costs." },
  { q: "How long does an interior design project take in Gurgaon?", a: "A typical residential project takes 30-45 days, while commercial projects range from 45-90 days depending on size. Our streamlined process and in-house team ensure faster delivery than most designers in Gurgaon." },
  { q: "Do you provide turnkey interior design services?", a: "Yes! Cargo Interiors provides complete turnkey solutions — from initial design and 3D visualization to material procurement, execution, and final handover. You get a single point of contact for everything." },
  { q: "Which areas in Gurgaon do you serve?", a: "We serve all areas including Golf Course Road, MG Road, DLF Phase 1-5, Sushant Lok, Sohna Road, Cyber City, Udyog Vihar, Sector 29, Sector 56-57, and New Gurugram." },
  { q: "Can I see your previous projects before hiring?", a: "Absolutely! We have 100+ completed projects across Gurgaon. We provide detailed portfolio walkthroughs, 3D renders of your specific space, and can arrange visits to our completed sites." },
];

export default function InteriorDesignerGurgaon() {
  return (
    <>
      <SEOHead
        title="Interior Designer in Gurgaon | Modern & Luxury Interiors"
        description="Looking for the best interior designer in Gurgaon? Cargo Interiors delivers modern, luxury interiors for offices, showrooms & homes. Free consultation. Call now!"
        canonical="https://cargo-interiors-demo.lovable.app/interior-designer-gurgaon"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Interior Designer in Gurgaon", "Top-rated interior designer in Gurgaon offering modern, luxury interior design for offices, showrooms, homes, and commercial spaces. Turnkey solutions with 100+ projects delivered.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={showroomImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Top-Rated Interior Designer in Gurgaon</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Best Interior Designer in <span className="text-gradient-gold">Gurgaon</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Tired of confusing design options, unreliable contractors, and budget overruns? Cargo Interiors is Gurgaon's most trusted interior designer — delivering stunning, functional spaces on time and within budget. 100+ projects. 10+ years. Zero compromise.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton className="!px-8 !py-4 !text-sm">Get Free Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-6 !py-3 !text-xs inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Why You Need a Professional</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Struggling With Your <span className="text-gradient-gold">Interior Project?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Confused by Too Many Options?", desc: "Pinterest boards overflowing but no clarity? Our designers cut through the noise and give you a focused, personalized design plan that matches your vision and budget." },
              { title: "Burned by Contractors Before?", desc: "Missed deadlines, hidden costs, poor quality? Cargo Interiors provides a single point of accountability with transparent pricing and guaranteed timelines." },
              { title: "Worried About Going Over Budget?", desc: "Every project starts with a detailed cost breakdown. No surprises, no hidden charges. You approve every rupee before work begins." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border p-8 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Complete Interior Design <span className="text-gradient-gold">Solutions</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Office Interior Design", desc: "Corporate offices, startups, co-working spaces — designed for productivity and brand impact.", link: "/office-interior-design-gurgaon" },
              { title: "Showroom Interior Design", desc: "Retail environments engineered for conversions. From automobile to luxury fashion showrooms.", link: "/showroom-interior-design-gurgaon" },
              { title: "Home Interior Design", desc: "Modular kitchens, living rooms, bedrooms — bespoke residential design for modern families.", link: "/home-interior" },
              { title: "Turnkey Solutions", desc: "End-to-end execution from design to handover. Single point of contact, zero hassle.", link: "/commercial-interior-design-gurgaon" },
            ].map((s) => (
              <Link key={s.title} to={s.link} className="group bg-card border border-border p-8 hover:border-primary/30 transition-colors block">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Why Cargo Interiors</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Why We're Gurgaon's <span className="text-gradient-gold">Most Trusted</span> Designer
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "10+ Years Experience", desc: "A decade of delivering exceptional interiors across Gurgaon and Delhi NCR." },
              { icon: Clock, title: "On-Time Delivery", desc: "Guaranteed timelines with penalties for delays. Your project, on schedule." },
              { icon: Shield, title: "Budget Transparency", desc: "Detailed cost breakdowns upfront. No hidden charges, no surprises." },
              { icon: MapPin, title: "Local Gurgaon Experts", desc: "Deep knowledge of Gurgaon's real estate, regulations, and vendor network." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-sm font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Real Projects. Real <span className="text-gradient-gold">Transformations.</span>
            </h2>
            <p className="text-muted-foreground font-body mt-4 max-w-2xl mx-auto">
              Browse our portfolio of 100+ completed projects across Gurgaon — from corporate offices to luxury showrooms and modern homes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: officeImage, title: "Corporate Office, Cyber City", type: "Office Interior" },
              { img: showroomImage, title: "Luxury Showroom, MG Road", type: "Showroom Interior" },
              { img: homeImage, title: "Premium Home, DLF Phase 4", type: "Home Interior" },
              { img: project1, title: "Tech Startup, Udyog Vihar", type: "Office Interior" },
              { img: project2, title: "Fashion Retail, Galleria Market", type: "Showroom Interior" },
              { img: project3, title: "Executive Suite, Golf Course Rd", type: "Office Interior" },
            ].map((p) => (
              <div key={p.title} className="group relative overflow-hidden">
                <img src={p.img} alt={`${p.title} - interior designer Gurgaon`} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-primary text-xs font-body uppercase tracking-wider">{p.type}</p>
                    <p className="font-display text-sm font-bold text-foreground">{p.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Client Reviews</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              What Our Clients <span className="text-gradient-gold">Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <p className="font-display text-sm font-bold">{t.name}</p>
                  <p className="text-muted-foreground font-body text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-gradient-gold">Space?</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Get a free consultation with Gurgaon's top interior designer. Share your requirements and receive a customized design plan within 48 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton className="!px-8 !py-4 !text-sm">
              <MessageCircle size={18} /> WhatsApp Now
            </CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-8 !py-4 !text-xs inline-flex items-center gap-2">
              <Phone size={18} /> Call +91 90506 56162
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>FAQs</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-card border border-border p-6 cursor-pointer">
                <summary className="font-display text-sm font-bold list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-primary text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* INTERNAL LINKS */}
      <Section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-muted-foreground font-body text-sm">
            Explore our specialized services: <Link to="/office-interior-designer-gurgaon" className="text-primary hover:underline">Office Interior Designer Gurgaon</Link> · <Link to="/showroom-interior-designer-gurgaon" className="text-primary hover:underline">Showroom Interior Designer Gurgaon</Link> · <Link to="/home-interior-designer-gurgaon" className="text-primary hover:underline">Home Interior Designer Gurgaon</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
