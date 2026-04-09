import { Link } from "react-router-dom";
import showroomImage from "@/assets/showroom-interior.jpg";
import commercialImage from "@/assets/commercial-interior.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel, WA_LINK } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { CheckCircle, Phone, MessageCircle, Star, Shield, Clock, MapPin, TrendingUp } from "lucide-react";

const testimonials = [
  { name: "Rohit Khanna", role: "Owner, AutoWorld Showroom", text: "Our car showroom footfall-to-conversion ratio improved by 45% after Cargo Interiors redesigned the customer journey. The lighting and display platforms make every vehicle look stunning. Best showroom interior designer in Gurgaon.", rating: 5 },
  { name: "Simran Bhatia", role: "Director, Luxe Home Décor", text: "Cargo Interiors understood our brand DNA perfectly. The showroom layout guides customers naturally and our average ticket size increased significantly. Professional, creative, and reliable.", rating: 5 },
  { name: "Manish Jain", role: "Partner, TechMart Electronics", text: "We needed an electronics showroom that could handle high footfall while keeping products organized. Cargo Interiors delivered a space that's both beautiful and functional. Completed in just 40 days!", rating: 5 },
];

const faqs = [
  { q: "How much does a showroom interior designer in Gurgaon charge?", a: "Showroom interior design costs range from ₹1,500-4,000 per sq ft for turnkey execution in Gurgaon, depending on the industry (automobile, fashion, electronics), materials, and display complexity. Contact us for a free customized quote." },
  { q: "How can showroom design increase my sales?", a: "Strategic layout design guides customer flow, premium lighting highlights products, and psychological design elements increase dwell time and purchase intent. Our clients typically see 25-45% improvement in conversion rates." },
  { q: "Do you design showrooms for specific industries?", a: "Yes! We specialize in automobile, fashion & lifestyle, electronics, furniture, jewellery, and luxury brand showrooms. Each industry has unique requirements that we address with specialized design approaches." },
  { q: "What's your showroom design process?", a: "Our 4-step process: 1) Brand & product analysis, 2) Customer journey mapping & layout design, 3) 3D visualization & material selection, 4) Turnkey execution & handover. The entire process takes 45-75 days." },
];

export default function ShowroomInteriorDesigner() {
  return (
    <>
      <SEOHead
        title="Showroom Interior Designer Gurgaon | Retail Spaces"
        description="Top showroom interior designer in Gurgaon. Conversion-focused retail design for automobile, fashion & luxury showrooms. Boost sales with smart design. Call now!"
        canonical="https://cargo-interiors-demo.lovable.app/showroom-interior-designer-gurgaon"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema("Showroom Interior Designer Gurgaon", "Specialist showroom interior designer in Gurgaon creating conversion-focused retail environments for automobile, fashion, electronics, and luxury brand showrooms.")) }} />

      {/* HERO */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-card border-b border-border overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={showroomImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <SectionLabel>Showroom Interior Designer Gurgaon</SectionLabel>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Showroom Interior Designer in <span className="text-gradient-gold">Gurgaon</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            A beautiful showroom is good. A showroom that sells is better. Cargo Interiors is Gurgaon's conversion-focused showroom interior designer — we design retail spaces that turn walk-ins into buyers using psychology-driven layouts and premium aesthetics.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton className="!px-8 !py-4 !text-sm">Get Free Showroom Consultation</CTAButton>
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
            <SectionLabel>Showroom Design Challenges</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Is Your Showroom <span className="text-gradient-gold">Losing Sales?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "High Footfall, Low Sales?", desc: "People walk in but walk out without buying. Your layout isn't guiding them to purchase decisions. We fix that with conversion-focused design." },
              { title: "Brand Not Coming Through?", desc: "Your showroom should scream your brand identity. Generic interiors confuse customers. We build brand-immersive environments." },
              { title: "Products Lost in the Crowd?", desc: "When everything looks the same, nothing stands out. Strategic lighting and display hierarchy make hero products impossible to miss." },
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
              Showroom Design <span className="text-gradient-gold">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Automobile & Vehicle Showrooms",
              "Fashion & Lifestyle Retail Stores",
              "Electronics & Appliance Showrooms",
              "Furniture & Home Décor Showrooms",
              "Jewellery & Luxury Brand Showrooms",
              "Multi-Brand Retail Outlets",
              "Customer Experience Zone Design",
              "Visual Merchandising & Display Strategy",
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
              Gurgaon's Showroom <span className="text-gradient-gold">Design Experts</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Sales-Driven Design", desc: "Every design decision aims to increase conversions and customer engagement." },
              { icon: Clock, title: "Fast Execution", desc: "Most showrooms delivered in 45-60 days. Open for business sooner." },
              { icon: Shield, title: "Transparent Pricing", desc: "Detailed material and labor cost breakdowns. No hidden charges." },
              { icon: MapPin, title: "Gurgaon Retail Experts", desc: "Deep understanding of MG Road, DLF Mall areas, and retail hubs." },
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
            <SectionLabel>Our Showroom Projects</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Showroom <span className="text-gradient-gold">Transformations</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { img: showroomImage, title: "Luxury Auto Showroom, MG Road", desc: "Premium vehicle display environment" },
              { img: commercialImage, title: "Fashion Retail, Galleria", desc: "High-conversion lifestyle store" },
              { img: project3, title: "Electronics Hub, Sector 29", desc: "Interactive product experience center" },
            ].map((p) => (
              <div key={p.title} className="group">
                <img src={p.img} alt={`${p.title} - showroom interior designer Gurgaon`} className="w-full aspect-[4/3] object-cover mb-4" loading="lazy" />
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
            <SectionLabel>Client Reviews</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Retail Brands Trust <span className="text-gradient-gold">Cargo Interiors</span>
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
            Design a Showroom That <span className="text-gradient-gold">Sells</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10 leading-relaxed">
            Get a free showroom design consultation. Share your space details and receive a conversion-focused layout plan within 48 hours.
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
              Showroom Design <span className="text-gradient-gold">Questions</span>
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
            Also explore: <Link to="/interior-designer-gurgaon" className="text-primary hover:underline">Interior Designer in Gurgaon</Link> · <Link to="/showroom-interior-design-gurgaon" className="text-primary hover:underline">Showroom Interior Design Guide</Link> · <Link to="/office-interior-designer-gurgaon" className="text-primary hover:underline">Office Interior Designer</Link>
          </p>
        </div>
      </Section>
    </>
  );
}
