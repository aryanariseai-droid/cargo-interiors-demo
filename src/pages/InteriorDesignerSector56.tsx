import LocationLandingPage from "@/components/LocationLandingPage";
import home from "@/assets/home-interior.jpg";
import commercial from "@/assets/commercial-interior.jpg";
import showroom from "@/assets/showroom-interior.jpg";

export default function InteriorDesignerSector56() {
  return (
    <LocationLandingPage
      data={{
        slug: "interior-designer-in-sector-56-gurgaon",
        location: "Sector 56",
        metaTitle: "Interior Designer in Sector 56, Gurgaon | Apartments & Retail",
        metaDescription: "Cargo Interior is a leading interior designer in Sector 56, Gurgaon — apartment interiors, modular kitchens and retail fit-outs delivered on time. Book a visit.",
        h1: "Interior Designer in Sector 56 Gurgaon – Modern Design & Execution Experts",
        intro:
          "Sector 56 sits at a unique crossroads in Gurgaon — a dense residential belt of mid-to-large apartment societies, an active retail high street near Hong Kong Bazaar, and a steady flow of new families moving in from nearby corporate hubs. The brief here is rarely about excess; it is about getting more out of every square foot. Cargo Interior is a Gurugram-headquartered design + build firm that helps Sector 56 homeowners and small business owners turn standard builder layouts into thoughtful, future-proof spaces. We handle interiors, light architectural changes and full execution under one team so you do not have to coordinate between five different vendors.",
        servicesIntro:
          "Our service mix in Sector 56 reflects what residents actually request — sharp residential makeovers in society apartments and clean retail fit-outs on the main road.",
        services: [
          { title: "2BHK & 3BHK Apartment Interiors", desc: "End-to-end interiors for societies like Hibiscus, Suncity, Belaire and Magnolias — false ceilings, wardrobes, TV units, kitchens and painting in one package." },
          { title: "Compact Office Interiors for Startups", desc: "20-to-50 seat workspaces inside Sector 56 commercial complexes designed around hybrid work, focus zones and small client-meeting areas." },
          { title: "Retail & High-Street Showroom Design", desc: "Storefronts, salons and specialty retail along the Sector 56 market with a sharp focus on shopfront visibility and customer flow." },
          { title: "Smart Modular Kitchens & Wardrobes", desc: "L, U and parallel-shaped modular kitchens engineered for typical society kitchen sizes, plus floor-to-ceiling wardrobes with internal organisers." },
        ],
        projectsIntro:
          "A few recently completed projects from Sector 56 — each one captured in detailed before/after photography we can walk you through in person.",
        projects: [
          { title: "Sector 56 Society Apartment – 3BHK Makeover", description: "Full interior reset of a 1,650 sq ft apartment in a leading society, including wall removal, modular kitchen and master suite redesign.", image: home },
          { title: "Sector 56 Retail Showroom Design", description: "Re-fit of a 900 sq ft fashion store on the high street — feature lighting, modular displays and a refreshed shopfront.", image: showroom },
          { title: "Boutique Coworking Studio Fit-out", description: "A 2,200 sq ft commercial unit converted into a 38-seat coworking floor with breakout, phone booths and a café corner.", image: commercial },
        ],
        portfolioContextLabel: "View Office / Showroom Projects",
        portfolioContextHref: "/our-portfolio/office-interior-designer-in-gurugram",
        whyChooseIntro:
          "Sector 56 projects move faster when the team understands society approvals, parking restrictions and weekend-only material movement — and that is where we add real value.",
        whyChoose: [
          { title: "Society Approval Know-how", desc: "We file NOCs, manage move-in/out windows and coordinate with maintenance teams across all major Sector 56 societies." },
          { title: "Tight Timeline Delivery", desc: "Most Sector 56 apartments are owner-occupied, so we plan work in shifts to keep your handover dates realistic and predictable." },
          { title: "Honest Cost Conversations", desc: "We tell you what is genuinely worth spending on (kitchens, wardrobes, false ceilings) and where you can save without regret." },
          { title: "Strong Local Vendor Network", desc: "Carpenters, polishers, electricians and plumbers we have worked with for years — not random freelancers found on apps." },
        ],
        nearbyIntro:
          "Apart from Sector 56, our active project zone extends across the South Gurgaon residential belt where families regularly upgrade homes or open small retail outlets.",
        nearbyAreas: ["Sector 55", "Sector 57", "Sector 53", "South City 2", "Sushant Lok 3", "Ardee City", "Uppal Southend"],
        closingPara:
          "What separates a great interior project in Sector 56 from an average one is rarely the sofa or the wallpaper — it is the planning that happens behind the walls. Concealed wiring, water-proofing in wet zones, properly sized kitchen ducting and disciplined site supervision are what make a home feel premium five years later. Cargo Interior treats every Sector 56 project, big or small, with the same engineering-led rigour, so you get a space that holds its value long after the last coat of paint dries.",
      }}
    />
  );
}
