import { Link } from "react-router-dom";
import homeImage from "@/assets/home-interior.jpg";
import showroomImage from "@/assets/showroom-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { CheckCircle, Phone, MessageCircle, Star, Shield, Clock, MapPin, Heart } from "lucide-react";

const testimonials = [
  { name: "Kavita Sharma", role: "Homeowner, DLF Phase 3", text: "Cargo Interiors transformed our 3BHK into a magazine-worthy home. The modular kitchen is a dream and the wardrobe storage solutions are genius. Best home interior designer in Gurgaon, hands down!", rating: 5 },
  { name: "Suresh & Meena Patel", role: "Villa Owners, Sushant Lok", text: "We were nervous about renovating our 15-year-old villa, but Cargo Interiors made it completely stress-free. From 3D visualization to final handover — everything was exactly as promised. No cost overruns.", rating: 5 },
  { name: "Deepak Arora", role: "Homeowner, Golf Course Road", text: "The team understood our lifestyle perfectly. They designed a home that works for our kids, our entertaining needs, and our daily routines. Practical luxury at its finest.", rating: 5 },
];

const faqs = [
  { q: "How much does a home interior designer in Gurgaon charge?", a: "Home interior design costs in Gurgaon range from ₹1,000-3,000 per sq ft for turnkey execution. A 2BHK typically costs ₹4-8 lakhs, a 3BHK ₹8-15 lakhs, and villas ₹15-40 lakhs+. We offer transparent, itemized quotes." },
  { q: "How long does home interior design take?", a: "A standard 2-3BHK project takes 30-45 days. Complete villa renovations may take 60-90 days. We provide a detailed timeline before work begins and stick to it." },
  { q: "Do you provide modular kitchen design?", a: "Yes! We specialize in modular kitchens with European hardware, granite/quartz countertops, soft-close mechanisms, and smart storage solutions designed specifically for Indian cooking needs." },
  { q: "Can you work within my budget?", a: "Absolutely. We design across budget ranges — from smart, value-oriented designs to ultra-premium luxury interiors. Every project starts with your budget, and we optimize within it." },
  { q: "Do you handle complete home renovation?", a: "Yes, we provide end-to-end home renovation services including civil work, electrical, plumbing, false ceiling, flooring, painting, furniture, and décor. One team, one point of contact." },
];

export default function HomeInteriorDesigner() {
  return (
    <>
      <SEOHead
        title="Home Interior Designer Gurgaon | Modern Home Design"
        description="Best home interior designer in Gurgaon. Modular kitchens, living rooms, bedrooms & complete renovation. Budget-friendly luxury. Free consultation. Call now!"
        canonical="https://cargo-interiors-demo.lovable.app/home-interior-designer-gurgaon"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Home Interior Designer Gurgaon", "Premium home interior designer in Gurgaon offering modular kitchens, living room design, bedroom makeovers, and complete home renovation with turnkey execution.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={homeImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Home Interior Designer Gurgaon</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Home Interior Designer in <span className="text-gradient-gold">Gurgaon</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Your home deserves more than a Pinterest board and a local carpenter. Cargo Interiors is Gurgaon's trusted home interior designer — creating beautiful, functional living spaces that reflect your personality and lifestyle. No shortcuts, no compromises.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton className="!px-8 !py-4 !text-sm">Get Free Home Consultation</CTAButton>
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
            <SectionLabel>Common Home Design Frustrations</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Tired of Interior Design <span className="text-gradient-gold">Nightmares?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Carpenter vs Designer?", desc: "Local carpenters can't visualize. They build what they know, not what you dream. A professional designer creates a complete vision — then executes it perfectly." },
              { title: "Hidden Cost Surprises?", desc: "Every homeowner's worst fear: the final bill being 2x the quote. We provide itemized cost breakdowns and fixed-price contracts. What you see is what you pay." },
              { title: "Endless Delays?", desc: "3 months turns into 6 months with unreliable contractors. Our in-house team and Gurgaon vendor network ensures your home is ready when promised." },
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
              Home Interior <span className="text-gradient-gold">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Modular Kitchen Design & Installation",
              "Living Room & TV Unit Design",
              "Master Bedroom & Wardrobe Design",
              "Kids Room & Study Area Design",
              "Bathroom Remodeling & Renovation",
              "Balcony & Outdoor Space Design",
              "Complete Home Renovation (Turnkey)",
              "False Ceiling & Lighting Design",
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
              Gurgaon's Trusted Home <span className="text-gradient-gold">Interior Designer</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Personalized Design", desc: "Every home is unique. We design around your family's lifestyle, not templates." },
              { icon: Clock, title: "30-Day Delivery", desc: "Standard 2-3BHK projects completed in just 30 days. Move in on time." },
              { icon: Shield, title: "10-Year Warranty", desc: "Premium materials backed by warranty. Quality that lasts a decade." },
              { icon: MapPin, title: "All Gurgaon Areas", desc: "DLF, Sushant Lok, Golf Course Rd, Sohna Rd, Sector 56-57 & more." },
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
            <SectionLabel>Our Home Projects</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Home <span className="text-gradient-gold">Transformations</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { img: homeImage, title: "3BHK Makeover, DLF Phase 4", desc: "Complete home interior transformation" },
              { img: project1, title: "Villa Renovation, Sushant Lok", desc: "Luxury villa with modular kitchen" },
              { img: showroomImage, title: "Premium Apartment, Golf Course", desc: "Modern minimalist living design" },
            ].map((p) => (
              <div key={p.title} className="group">
                <img src={p.img} alt={`${p.title} - home interior designer Gurgaon`} className="w-full aspect-[4/3] object-cover mb-4" loading="lazy" />
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
            <SectionLabel>Happy Homeowners</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Families Who Trust <span className="text-gradient-gold">Cargo Interiors</span>
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
            Design Your Dream <span className="text-gradient-gold">Home Today</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Get a free home design consultation. Share your floor plan and budget — receive a personalized 3D design within 72 hours.
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
              Home Design <span className="text-gradient-gold">Questions</span>
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
            Also explore: <Link to="/interior-designer-gurgaon" className="text-primary hover:underline">Interior Designer in Gurgaon</Link> · <Link to="/home-interior" className="text-primary hover:underline">Home Interior Design Guide</Link> · <Link to="/office-interior-designer-gurgaon" className="text-primary hover:underline">Office Interior Designer</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
