import { Link } from "react-router-dom";
import showroomImage from "@/assets/showroom-interior.jpg";
import commercialImage from "@/assets/commercial-interior.jpg";
import project3 from "@/assets/project-3.jpg";
import SEOHead from "@/components/SEOHead";
import { Section, CTAButton, SectionLabel } from "@/components/Layout";
import { serviceSchema } from "@/data/schemaMarkup";
import { CheckCircle, Phone, MessageCircle, Star, Shield, Clock, MapPin, TrendingUp, ArrowRight } from "lucide-react";

// Reusable styled inline link for aggressive contextual backlinking.
// Underlined + primary color + hover glow per SEO brief.
const IL = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-primary underline underline-offset-4 decoration-primary/50 hover:decoration-primary hover:text-primary/80 transition-colors"
  >
    {children}
  </Link>
);

const trustedBrands = [
  "Oracle",
  "Bain & Company",
  "Zara",
  "Sagar Ratna",
  "Tata",
  "ICICI",
  "Reliance",
  "Apollo",
];

const showroomTypes = [
  { title: "Retail Showrooms", desc: "High-footfall stores designed around shopper psychology, dwell time and conversion-focused layouts." },
  { title: "Fashion & Apparel Showrooms", desc: "Mannequin staging, layered lighting and trial-room journeys built for premium fashion brands across Gurgaon." },
  { title: "Electronics Showrooms", desc: "Interactive product zones, demo bays and durable display systems for high-traffic electronics retail." },
  { title: "Luxury Brand Showrooms", desc: "Material-driven, gallery-grade environments engineered for jewellery, automobile and luxury lifestyle brands." },
];

const designElements = [
  { title: "Product Display", desc: "Hero zones, sightline planning and modular display systems that put the right product in the customer's eye-line." },
  { title: "Showroom Lighting", desc: "Layered ambient, accent and task lighting tuned to product finish and brand mood — the single biggest sales lever in retail." },
  { title: "Customer Flow", desc: "Entry, browse, decision and checkout zones mapped from heat-map data so footfall converts instead of leaking." },
  { title: "Brand Experience", desc: "Material palette, sound, scent and signage that turn a transaction into a brand memory worth repeating." },
];

const processSteps = [
  { step: "01", title: "Consult", desc: "Brand discovery, footfall study, competitor walk-through and a written design brief signed off before any drawing begins." },
  { step: "02", title: "Design", desc: "Concept boards, 3D walkthroughs and BOQ with material samples — you approve the showroom on screen before it is built." },
  { step: "03", title: "Execution", desc: "Single-window turnkey build: civil, electrical, joinery, lighting, AV and MEP delivered by one accountable project lead." },
  { step: "04", title: "Delivery", desc: "Snag-free handover, brand-launch support and a 12-month service warranty on workmanship." },
];

const faqs = [
  {
    q: "What is showroom interior design cost in Gurgaon?",
    a: "Showroom interior design in Gurgaon typically ranges from ₹1,800–₹4,500 per sq ft depending on category, finish level and lighting spec. Luxury and automobile showrooms sit at the upper end. We share a fixed-line BoQ before signing — and you can also estimate your cost using our interior cost calculator.",
  },
  {
    q: "How long does showroom design and execution take?",
    a: "A standard 1,500–3,000 sq ft showroom in Gurgaon is delivered in 45–75 days from drawing sign-off. Larger flagship showrooms with custom joinery and AV integration take 90–120 days. Timelines are committed in writing in the contract.",
  },
  {
    q: "What types of showrooms do you design?",
    a: "We design retail, fashion, electronics, furniture, jewellery, automobile and luxury brand showrooms across Gurgaon and Gurugram. Each category has a dedicated design playbook covering layout, lighting and material strategy.",
  },
  {
    q: "Why is showroom interior design important for sales?",
    a: "Strategic layout, lighting and visual merchandising directly influence dwell time, basket size and conversion rate. Our retail clients typically see a 25–45% improvement in walk-in to billing conversion within the first quarter after launch.",
  },
  {
    q: "Do you handle end-to-end execution or only design?",
    a: "We deliver fully turnkey — design, civil, MEP, joinery, lighting, AV, branding and snagging under one contract. There is one project lead, one timeline and one number to call.",
  },
];

export default function ShowroomInteriorDesigner() {
  return (
    <>
      <SEOHead
        title="Showroom Interior Designer in Gurgaon | Cargo Interiors"
        description="Looking for showroom interior design in Gurgaon? 10+ years experience, 100+ projects. We design retail, fashion, and luxury showrooms with complete execution."
        canonical="https://cargo-interiors-demo.lovable.app/showroom-interior-designer-in-gurgaon"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Showroom Interior Designer in Gurgaon",
              "Specialist showroom interior designer in Gurgaon designing retail, fashion, electronics and luxury brand showrooms with full turnkey execution.",
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

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
            Cargo Interiors is a specialist showroom interior designer in Gurgaon delivering retail, fashion, electronics and luxury showrooms with end-to-end execution. With 10+ years in the field and 100+ projects shipped, we design spaces that convert footfall into sales.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <CTAButton className="!px-8 !py-4 !text-sm">Get Free Showroom Consultation</CTAButton>
            <a href="tel:+919050656162" className="btn-glow-outline !px-6 !py-3 !text-xs inline-flex items-center gap-2">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* INTRO + WHY IT MATTERS */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 space-y-6 font-body text-base md:text-lg leading-relaxed text-muted-foreground">
          <p>
            A showroom is not a warehouse with shelves — it is a sales engine. As a dedicated showroom interior designer in Gurgaon, Cargo Interiors plans every square foot around the customer journey, the brand promise and the bottom line. From MG Road and Galleria to Cyber Hub, Sector 29 and the new luxury corridors of Gurugram, we design showrooms that perform on day one.
          </p>
          <p>
            Why does showroom design matter so much? Because retail is the only category where the building itself is the salesperson. Strong <IL to="/product-display-zone-interior-design-in-gurgaon">product display zones</IL> guide the eye to the hero SKU, while smart <IL to="/customer-flow-optimization-in-showroom-design-gurgaon">customer flow optimization</IL> keeps shoppers moving toward the till instead of toward the door. Get either wrong and a beautiful showroom can still bleed revenue.
          </p>
          <p>
            Our work as an <IL to="/experienced-interior-designer-in-gurgaon">experienced interior designer in Gurgaon</IL> spans more than a decade of retail builds. That depth shows up in the small things — sightlines, lux levels, finish durability — that decide whether a customer buys today or "thinks about it." If you are also evaluating <IL to="/blog/office-interior-design-cost-gurgaon">cost</IL> benchmarks for the build, we share transparent BoQs upfront, no surprises later.
          </p>
        </div>
      </Section>

      {/* SHOWROOM TYPES */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Showroom Categories</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Types of Showrooms <span className="text-gradient-gold">We Design</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {showroomTypes.map((s) => (
              <div key={s.title} className="bg-card border border-border p-8 hover:border-primary/40 transition-colors">
                <h3 className="font-display text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-10 text-center font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Beyond retail, we also work as an <IL to="/office-interior-designer-in-gurgaon">office interior designer in Gurgaon</IL> for clients who run combined showroom-plus-HQ formats, with a parallel practice in <IL to="/corporate-office-interior-design-in-gurgaon">corporate office interior design</IL> for enterprise floors.
          </div>
        </div>
      </Section>

      {/* DESIGN ELEMENTS */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Design Elements</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              The Four Levers of <span className="text-gradient-gold">Showroom Performance</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {designElements.map((el) => (
              <div key={el.title} className="bg-card border border-border p-8">
                <h3 className="font-display text-lg font-bold mb-3">{el.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{el.desc}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto space-y-5 font-body text-base leading-relaxed text-muted-foreground">
            <p>
              The right <IL to="/lighting-and-visual-merchandising-in-showroom-interior-design-gurgaon">lighting and visual merchandising</IL> can lift sales by double digits without changing a single SKU — which is why every Cargo Interiors showroom starts with a lighting plan, not a moodboard.
            </p>
            <p>
              Equally critical are immersive <IL to="/brand-experience-area-interior-design-in-gurgaon">brand experience areas</IL>: signature walls, demo zones and storytelling pockets that turn a transactional store into a destination customers come back to.
            </p>
          </div>
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Consult → Design → <span className="text-gradient-gold">Execution → Delivery</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((p) => (
              <div key={p.step} className="bg-card border border-border p-8">
                <div className="text-primary font-display text-3xl font-bold mb-3">{p.step}</div>
                <h3 className="font-display text-base font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="max-w-3xl mx-auto mt-10 text-center font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Want to estimate your cost before booking a consult? Use our <IL to="/interior-cost-calculator">interior cost calculator</IL> for an instant ballpark, then talk to a <IL to="/trusted-interior-designer-in-gurgaon">trusted interior designer in Gurgaon</IL> for a fixed quote.
          </p>
        </div>
      </Section>

      {/* TRUST + STATS */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Why Cargo Interiors</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Gurgaon's Showroom <span className="text-gradient-gold">Design Authority</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: TrendingUp, title: "10+ Years Experience", desc: "Over a decade of retail interior delivery across Gurgaon and Delhi NCR." },
              { icon: Shield, title: "100+ Projects", desc: "From boutique stores to flagship showrooms — proven, photographed and live." },
              { icon: Clock, title: "Single-Window Build", desc: "Design, civil, MEP, joinery and lighting under one contract and one project lead." },
              { icon: MapPin, title: "Gurgaon Retail Experts", desc: "Deep knowledge of MG Road, Galleria, DLF Cyber Hub and luxury retail corridors." },
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
          <p className="max-w-3xl mx-auto text-center font-body text-base text-muted-foreground leading-relaxed">
            With <IL to="/interior-designer-with-100-projects-in-gurgaon">100+ projects completed</IL>, our team has refined a category-by-category playbook for showroom design — so you are not paying us to learn on your store.
          </p>
        </div>
      </Section>

      {/* TRUSTED BY LEADING BRANDS */}
      <Section className="py-20 md:py-28 border-b border-border bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionLabel>Trusted by Leading Brands</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Brands That Have Worked <span className="text-gradient-gold">With Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="bg-background border border-border p-6 text-center hover:border-primary/40 transition-colors"
              >
                <span className="font-display text-base md:text-lg font-bold tracking-wide">{brand}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground font-body text-xs mt-8 italic">
            Brand mentions reflect commercial interior projects executed by Cargo Interiors and partners across Gurgaon and Delhi NCR.
          </p>
        </div>
      </Section>

      {/* PORTFOLIO */}
      <Section className="py-20 md:py-28 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel>Our Showroom Projects</SectionLabel>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Recent <span className="text-gradient-gold">Showroom Builds</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { img: showroomImage, title: "Luxury Auto Showroom, MG Road", desc: "Premium vehicle display environment" },
              { img: commercialImage, title: "Fashion Retail, Galleria", desc: "High-conversion lifestyle store" },
              { img: project3, title: "Electronics Hub, Sector 29", desc: "Interactive product experience center" },
            ].map((p) => (
              <div key={p.title} className="group">
                <img
                  src={p.img}
                  alt={`${p.title} — showroom interior designer Gurgaon`}
                  className="w-full aspect-[4/3] object-cover mb-4"
                  loading="lazy"
                />
                <h3 className="font-display text-sm font-bold">{p.title}</h3>
                <p className="text-muted-foreground font-body text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/our-portfolio/showroom-interior-designer-in-gurugram"
              className="inline-flex items-center gap-2 text-primary underline underline-offset-4 decoration-primary/50 hover:decoration-primary font-body text-sm"
            >
              View Full Showroom Portfolio <ArrowRight size={16} />
            </Link>
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
            {[
              { name: "Rohit Khanna", role: "Owner, AutoWorld Showroom", text: "Footfall-to-conversion improved by 45% after Cargo Interiors redesigned our customer journey. Best showroom interior designer in Gurgaon.", rating: 5 },
              { name: "Simran Bhatia", role: "Director, Luxe Home Décor", text: "They understood our brand DNA perfectly. Layout guides customers naturally and our average ticket size jumped significantly.", rating: 5 },
              { name: "Manish Jain", role: "Partner, TechMart Electronics", text: "We needed a high-footfall electronics showroom. Cargo delivered a beautiful, functional store in just 40 days.", rating: 5 },
            ].map((t) => (
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
      <Section className="py-20 md:py-28 border-b border-border">
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

      {/* RELATED LINKS HUB */}
      <Section className="py-16 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <SectionLabel>Explore More</SectionLabel>
            <h3 className="font-display text-2xl md:text-3xl font-bold">Showroom Design Hub</h3>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm font-body">
            {[
              { to: "/product-display-zone-interior-design-in-gurgaon", label: "Product Display Zones" },
              { to: "/brand-experience-area-interior-design-in-gurgaon", label: "Brand Experience Areas" },
              { to: "/customer-flow-optimization-in-showroom-design-gurgaon", label: "Customer Flow Optimization" },
              { to: "/lighting-and-visual-merchandising-in-showroom-interior-design-gurgaon", label: "Lighting & Visual Merchandising" },
              { to: "/our-portfolio/showroom-interior-designer-in-gurugram", label: "Showroom Portfolio" },
              { to: "/office-interior-designer-in-gurgaon", label: "Office Interior Designer" },
              { to: "/corporate-office-interior-design-in-gurgaon", label: "Corporate Office Design" },
              { to: "/interior-cost-calculator", label: "Interior Cost Calculator" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block bg-card border border-border px-4 py-3 hover:border-primary/50 hover:text-primary transition-colors underline underline-offset-4 decoration-primary/40"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
