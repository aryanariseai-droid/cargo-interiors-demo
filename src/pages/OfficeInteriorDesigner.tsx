import { Link } from "react-router-dom";
import officeImage from "@/assets/office-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { CheckCircle, Phone, MessageCircle, Star, Shield, Clock, MapPin, Zap } from "lucide-react";

const testimonials = [
  { name: "Vikram Singh", role: "CTO, FinanceHub", text: "Cargo Interiors redesigned our 8000 sq ft office in Cyber City. The open-plan layout improved team collaboration dramatically. Truly the best office interior designer in Gurgaon.", rating: 5 },
  { name: "Neha Kapoor", role: "HR Director, MediaWorks", text: "Our employee satisfaction scores jumped 35% after the office makeover. The ergonomic design and breakout zones made a huge difference. On time, on budget.", rating: 5 },
  { name: "Amit Verma", role: "Founder, StartupGrid", text: "As a startup, budget was tight. Cargo Interiors gave us a premium-looking office at startup-friendly pricing. Their Gurgaon market knowledge helped us save on materials without compromising quality.", rating: 5 },
];

const faqs = [
  { q: "How much does an office interior designer in Gurgaon charge?", a: "Office interior design costs in Gurgaon range from ₹1,200-3,500 per sq ft for turnkey execution. Design consultation fees are typically ₹50-150 per sq ft. Cargo Interiors provides detailed cost breakdowns before work begins." },
  { q: "How long does office interior design take?", a: "A standard office project (2000-5000 sq ft) takes 45-60 days. Larger corporate offices may take 60-90 days. Our in-house team and local Gurgaon vendor network ensure faster delivery." },
  { q: "Do you handle office fit-outs for rented spaces?", a: "Yes, we specialize in fit-outs for leased office spaces in Gurgaon's commercial hubs — Cyber City, Udyog Vihar, Golf Course Road, Sohna Road. We design within landlord guidelines while maximizing your brand presence." },
  { q: "Can you design offices for remote/hybrid teams?", a: "Absolutely! We design hybrid-ready offices with hot desks, video conferencing rooms, quiet zones, and flexible layouts that adapt to varying daily occupancy." },
];

export default function OfficeInteriorDesigner() {
  return (
    <>
      <SEOHead
        title="Office Interior Designer Gurgaon | Modern Workspace"
        description="Hire the best office interior designer in Gurgaon. Modern workspaces for corporates, startups & co-working. Turnkey execution. Free consultation. Call now!"
        canonical="https://cargo-interiors-demo.lovable.app/office-interior-designer-gurgaon"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Office Interior Designer Gurgaon", "Top office interior designer in Gurgaon specializing in corporate offices, startup workspaces, and co-working spaces. Turnkey solutions with 100+ projects delivered.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={officeImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Office Interior Designer Gurgaon</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Office Interior Designer in <span className="text-gradient-gold">Gurgaon</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Your office is your brand's first impression. Don't leave it to amateurs. Cargo Interiors is Gurgaon's specialist office interior designer — building workspaces that boost productivity, impress clients, and retain top talent.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton className="!px-8 !py-4 !text-sm">Get Free Office Consultation</CTAButton>
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
            <SectionLabel>Common Office Design Problems</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Is Your Office <span className="text-gradient-gold">Holding You Back?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Low Productivity?", desc: "Poor layouts, bad lighting, and cramped desks kill focus. Our ergonomic designs are proven to increase productivity by up to 20%." },
              { title: "Clients Not Impressed?", desc: "A dated office signals a dated company. We design reception areas and meeting rooms that command respect from day one." },
              { title: "Losing Top Talent?", desc: "Today's professionals choose workplaces, not just jobs. Modern, well-designed offices attract and retain the best talent in Gurgaon." },
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
            <SectionLabel>What We Design</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Office Interior <span className="text-gradient-gold">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Corporate Headquarters & Executive Offices",
              "Startup & Tech Company Workspaces",
              "Co-Working & Shared Office Spaces",
              "Meeting & Conference Room Design",
              "Reception & Lobby Design",
              "Cafeteria & Breakout Zone Design",
              "Server Room & IT Infrastructure Planning",
              "Complete Office Fit-Out & Renovation",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3 p-4 bg-card border border-border">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="font-body text-sm">{s}</span>
              </div>
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
              Gurgaon's #1 Office <span className="text-gradient-gold">Interior Designer</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "100+ Office Projects", desc: "From 500 sq ft startups to 50,000 sq ft corporate HQs across Gurgaon." },
              { icon: Clock, title: "45-Day Delivery", desc: "Average project completion time. We respect your business timeline." },
              { icon: Shield, title: "Fixed-Price Contracts", desc: "What we quote is what you pay. Zero cost escalations guaranteed." },
              { icon: MapPin, title: "Gurgaon Specialists", desc: "We know every commercial hub — Cyber City, Udyog Vihar, Golf Course Rd." },
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
            <SectionLabel>Our Office Projects</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Office <span className="text-gradient-gold">Transformations</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { img: officeImage, title: "Corporate HQ, Cyber City", desc: "12,000 sq ft executive workspace" },
              { img: project1, title: "Tech Startup, Udyog Vihar", desc: "3,500 sq ft agile workspace" },
              { img: project2, title: "Co-Working Space, Sohna Road", desc: "8,000 sq ft shared office" },
            ].map((p) => (
              <div key={p.title} className="group">
                <img src={p.img} alt={`${p.title} - office interior designer Gurgaon`} className="w-full aspect-[4/3] object-cover mb-4" loading="lazy" />
                <h3 className="font-display text-sm font-bold">{p.title}</h3>
                <p className="text-muted-foreground font-body text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Client Testimonials</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Trusted by Gurgaon's <span className="text-gradient-gold">Best Companies</span>
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
                <p className="font-display text-sm font-bold">{t.name}</p>
                <p className="text-muted-foreground font-body text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Design Your Dream <span className="text-gradient-gold">Office Today</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Get a free office design consultation from Gurgaon's top office interior designer. Share your floor plan and get a 3D visualization within 72 hours.
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
              Office Design <span className="text-gradient-gold">Questions</span>
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
            Also explore: <Link to="/interior-designer-gurgaon" className="text-primary hover:underline">Interior Designer in Gurgaon</Link> · <Link to="/office-interior-design-gurgaon" className="text-primary hover:underline">Office Interior Design Guide</Link> · <Link to="/showroom-interior-designer-gurgaon" className="text-primary hover:underline">Showroom Interior Designer</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
