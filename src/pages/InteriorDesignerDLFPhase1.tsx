import LocationLandingPage from "@/components/LocationLandingPage";
import home from "@/assets/home-interior.jpg";
import showroom from "@/assets/showroom-interior.jpg";
import office from "@/assets/office-interior.jpg";

export default function InteriorDesignerDLFPhase1() {
  return (
    <LocationLandingPage
      data={{
        slug: "interior-designer-in-dlf-phase-1-gurgaon",
        location: "DLF Phase 1",
        metaTitle: "Interior Designer in DLF Phase 1, Gurgaon | Luxury Apartment Specialists",
        metaDescription: "Trusted interior designer in DLF Phase 1, Gurgaon for luxury apartments, villas and penthouses. Premium design + build by Cargo Interior. Free consultation.",
        h1: "Interior Designer in DLF Phase 1 Gurgaon – Modern Design & Execution Experts",
        intro:
          "DLF Phase 1 is one of the most established luxury residential pockets in Gurgaon, home to spacious independent floors, premium high-rise apartments and several boutique villas. Residents here expect interiors that quietly reflect status — restrained palettes, imported finishes and crafted detailing rather than loud statements. Cargo Interior is a Gurugram based design + build company that specialises in this exact sensibility. We work end-to-end across architecture, interiors and construction so DLF Phase 1 homeowners get a single accountable partner from concept to handover. Whether you are renovating a 3BHK floor or rebuilding a villa, our team brings drawings, finishes, costing and execution under one roof.",
        servicesIntro:
          "Most projects in DLF Phase 1 involve heritage layouts that need careful re-planning. Our scope is structured around what this neighbourhood actually demands — high-end residential remodels and the occasional studio-style workspace inside a builder floor.",
        services: [
          { title: "Luxury Apartment & Villa Interiors", desc: "Full home transformations for 3BHK and 4BHK floors, duplexes and standalone villas — including civil modifications, wardrobes, ceilings and lighting design tuned for premium living." },
          { title: "Boutique Office Fit-outs", desc: "Compact, founder-led offices and home-studio setups inside DLF Phase 1 floors that need a calm, hospitality-grade aesthetic rather than a corporate cubicle layout." },
          { title: "Showroom & Atelier Interiors", desc: "Selective retail and atelier projects on the inner roads, where lighting, material storytelling and elevated brand presentation directly drive footfall." },
          { title: "Modular Kitchens & Walk-in Storage", desc: "Imported-finish modular kitchens, butler pantries and walk-in wardrobes engineered to fit the deeper bays typical of DLF Phase 1 homes." },
        ],
        projectsIntro:
          "A snapshot of recent work delivered across DLF Phase 1 — each project documented with a before/after walkthrough during your consultation.",
        projects: [
          { title: "DLF Phase 1 Luxury Apartment Renovation", description: "A tired 4BHK builder floor reworked into a warm, gallery-style residence with travertine flooring and oak veneer joinery.", image: home },
          { title: "Independent Villa Redesign – U Block", description: "Full structural and interior overhaul of a 6,200 sq ft villa, including double-height living and a basement lounge.", image: showroom },
          { title: "Founder's Studio Office – E Block", description: "A 1,400 sq ft floor converted into a hybrid home-office for a fashion entrepreneur, with a private client viewing room.", image: office },
        ],
        portfolioContextLabel: "View Home Interiors",
        portfolioContextHref: "/our-portfolio/home-interior-designer-in-gurugram",
        whyChooseIntro:
          "DLF Phase 1 clients value discretion and finish quality more than speed. Our engagement model is built around exactly that.",
        whyChoose: [
          { title: "On-ground Familiarity", desc: "We have executed projects across U, J, E and F blocks and understand RWA approval cycles, lift constraints and parking logistics specific to DLF Phase 1." },
          { title: "Imported Material Sourcing", desc: "Direct relationships with Italian, Spanish and German finish suppliers means premium material access without inflated markups." },
          { title: "Locked-in Pricing", desc: "Every BoQ line is itemised and frozen before execution begins — no mid-project surprises, no inflated change-order culture." },
          { title: "Single-window Delivery", desc: "Architecture, interiors, MEP and finishing carpentry are all handled by Cargo Interior teams, not loose subcontractors." },
        ],
        nearbyIntro:
          "Beyond DLF Phase 1, our active project radius covers the surrounding luxury belt where many of our clients also own commercial space or second homes.",
        nearbyAreas: ["DLF Phase 2", "DLF Phase 3", "Sushant Lok 1", "Galleria Market", "MG Road", "Sector 26A", "Cyber Hub"],
        closingPara:
          "Renovating in DLF Phase 1 is rarely a cosmetic exercise — most homes here have decades-old layouts that need to be re-imagined for how families actually live now. Open-plan kitchens, dedicated work zones, smarter storage and quieter material palettes are the recurring themes we deliver. As a full design + build partner, Cargo Interior shortens the timeline between idea and move-in by removing the usual back-and-forth between architects, contractors and vendors.",
      }}
    />
  );
}
