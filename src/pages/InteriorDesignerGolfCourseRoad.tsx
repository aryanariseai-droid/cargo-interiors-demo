import LocationLandingPage from "@/components/LocationLandingPage";
import office from "@/assets/office-interior.jpg";
import commercial from "@/assets/commercial-interior.jpg";
import home from "@/assets/home-interior.jpg";

export default function InteriorDesignerGolfCourseRoad() {
  return (
    <LocationLandingPage
      data={{
        slug: "interior-designer-in-golf-course-road-gurgaon",
        location: "Golf Course Road",
        metaTitle: "Interior Designer on Golf Course Road, Gurgaon | Premium Offices & Homes",
        metaDescription: "Premium interior designer on Golf Course Road, Gurgaon. Cargo Interior delivers corporate offices, luxury condos and high-street retail design. Book a meeting.",
        h1: "Interior Designer in Golf Course Road Gurgaon – Modern Design & Execution Experts",
        intro:
          "Golf Course Road is arguably the most prestigious commercial-residential corridor in Gurgaon, lined with grade-A office towers, ultra-luxury condominiums and flagship retail. Brands and homeowners along this stretch expect interior design that performs at a global standard — clean architectural language, premium specification and zero compromise on execution. Cargo Interior is a Gurugram design + build firm that has delivered offices, condos and showroom spaces across this corridor. We bring architects, interior designers, MEP consultants and an in-house execution team into one accountable structure so projects open on time and on brief.",
        servicesIntro:
          "Golf Course Road demands a slightly different palette of services than the rest of Gurgaon — heavy on corporate fit-outs and ultra-premium residences.",
        services: [
          { title: "Corporate Office Fit-outs", desc: "5,000 to 50,000 sq ft headquarters and Indian-office setups inside DLF Cyber Park, Two Horizon Centre, Vatika Towers and similar grade-A buildings." },
          { title: "Ultra-luxury Condominium Interiors", desc: "Full-home interiors for residences in Magnolias, Aralias, Camellias, Park Place, The Crest and other super-premium towers — with bespoke joinery and curated finish libraries." },
          { title: "Flagship Showroom & Brand Spaces", desc: "Premium retail experiences for fashion, jewellery, automotive and lifestyle brands launching their flagship outlets on the corridor." },
          { title: "Hospitality-grade Modular Kitchens", desc: "European modular kitchens with integrated appliances, butler zones and wine storage built to match the residences they sit inside." },
        ],
        projectsIntro:
          "A few recent assignments from the Golf Course Road corridor — full case studies with before/after imagery shared during your discovery call.",
        projects: [
          { title: "Golf Course Road Corporate Office Fit-out", description: "A 22,000 sq ft Indian-office headquarters inside a grade-A tower, including reception, boardroom suite and 180-seat workfloor.", image: office },
          { title: "Magnolias Condominium Full-home Interior", description: "5,400 sq ft 4BHK residence with imported stone, custom millwork and a private bar lounge overlooking the golf course.", image: home },
          { title: "Premium Brand Flagship Showroom", description: "1,800 sq ft fashion flagship near Sector 42 with sculptural lighting, custom brass detailing and a private styling room.", image: commercial },
        ],
        portfolioContextLabel: "View Office / Showroom Projects",
        portfolioContextHref: "/our-portfolio/office-interior-designer-in-gurugram",
        whyChooseIntro:
          "On Golf Course Road, schedules and specifications are non-negotiable. Our delivery model is built to operate at that standard.",
        whyChoose: [
          { title: "Grade-A Building Compliance", desc: "We are pre-empanelled or experienced with most building managements on the corridor, which means faster fit-out approvals and snag-free handover." },
          { title: "International Specification Standards", desc: "Our drawings, BoQs and material submittals are prepared to a level that international tenants and ultra-premium homeowners are comfortable signing off on." },
          { title: "Senior Project Leadership", desc: "Every Golf Course Road project is led by a senior architect or designer — not handed off to a junior site team after kick-off." },
          { title: "Predictable Cost Engineering", desc: "Detailed value-engineering at the start saves typically 8–15% without diluting design intent — and protects you from open-ended change orders." },
        ],
        nearbyIntro:
          "Beyond Golf Course Road itself, our delivery zone covers the connected high-value belt where most of our corporate and HNI clients live and work.",
        nearbyAreas: ["Sector 42", "Sector 43", "Sector 53", "DLF Phase 5", "Sushant Lok 1", "Cyber Hub", "MG Road"],
        closingPara:
          "Working on Golf Course Road is as much a logistics exercise as a design one. Building managements have strict working hours, lift slots are shared, and material movement happens under tight windows. A studio that has not done this before will leak time and money into coordination overheads. Cargo Interior runs a dedicated site supervision layer for every corridor project, which is why our offices and homes here typically open ahead of schedule — and stay sharp years later.",
      }}
    />
  );
}
