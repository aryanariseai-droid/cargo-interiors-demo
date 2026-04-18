import LocationLandingPage from "@/components/LocationLandingPage";
import home from "@/assets/home-interior.jpg";
import office from "@/assets/office-interior.jpg";
import commercial from "@/assets/commercial-interior.jpg";

export default function InteriorDesignerSohnaRoad() {
  return (
    <LocationLandingPage
      data={{
        slug: "interior-designer-in-sohna-road-gurgaon",
        location: "Sohna Road",
        metaTitle: "Interior Designer on Sohna Road, Gurgaon | New Homes & Mixed-use",
        metaDescription: "Cargo Interior is a reliable interior designer on Sohna Road, Gurgaon — designing new apartments, builder floors and mixed-use commercial spaces with full execution.",
        h1: "Interior Designer in Sohna Road Gurgaon – Modern Design & Execution Experts",
        intro:
          "Sohna Road has emerged as one of the fastest-evolving corridors in Gurgaon, with a strong mix of new residential launches, builder floors, business parks and neighbourhood retail. Most homeowners here are first-time buyers moving into raw possession flats, while business owners are setting up clinics, studios and small commercial outlets. The need is for a partner who can convert a developer-handover shell into a complete, lived-in space without dragging on for months. Cargo Interior is a Gurugram design + build company that takes Sohna Road projects from possession to handover in a single, structured engagement.",
        servicesIntro:
          "Sohna Road projects usually start from a near-blank slate — that means we focus on the practical building blocks first and elevate the aesthetic on top.",
        services: [
          { title: "New-possession Apartment Interiors", desc: "Complete fit-out of fresh-handover 2BHK and 3BHK flats including civil work, electrical augmentation, kitchens, wardrobes, painting and false ceilings." },
          { title: "Independent Builder Floor Design", desc: "Floor-by-floor design for the many builder floors in Sectors 48–49 and along Sohna Road — including duplex layouts and rental-ready upper floors." },
          { title: "Clinics, Studios & Mixed-use Commercial", desc: "Functional, code-compliant interiors for clinics, salons, fitness studios and neighbourhood retail inside Sohna Road commercial complexes." },
          { title: "Storage, Kitchens & Lighting Design", desc: "Smart modular kitchens, full-height storage and layered lighting plans tailored for the typical floor heights of Sohna Road developments." },
        ],
        projectsIntro:
          "A snapshot of recently delivered Sohna Road projects — full before/after walkthroughs shared during the consultation call.",
        projects: [
          { title: "Sohna Road 3BHK New-possession Fit-out", description: "1,750 sq ft fresh handover apartment converted into a fully furnished home in 55 days — civil, modular, painting and styling included.", image: home },
          { title: "Builder Floor Interior – Sector 49", description: "A 2,200 sq ft independent floor designed as an owner-plus-rental duplex with two distinct interior languages.", image: office },
          { title: "Wellness Studio Mixed-use Interior", description: "950 sq ft wellness studio inside a Sohna Road commercial tower with reception, two treatment rooms and a movement studio.", image: commercial },
        ],
        portfolioContextLabel: "View Home Interiors",
        portfolioContextHref: "/our-portfolio/home-interior-designer-in-gurugram",
        whyChooseIntro:
          "Sohna Road clients want clarity above everything — clarity on cost, clarity on timeline and a single team that owns the outcome. That is exactly how we are set up.",
        whyChoose: [
          { title: "Possession-to-Move-in in One Contract", desc: "One scope, one BoQ, one timeline. You do not need to chase a separate civil contractor, modular vendor and painter." },
          { title: "Realistic Budget Ladders", desc: "We help you choose between good, better and best on every category so you can scale spec to your actual budget — not someone else's brochure." },
          { title: "Execution-first Design", desc: "Every drawing is reviewed for buildability before it leaves the studio, which is why our Sohna Road sites have minimal rework." },
          { title: "Documented Progress Updates", desc: "Weekly photo updates and a shared schedule mean you always know what is happening on site even if you live elsewhere in NCR." },
        ],
        nearbyIntro:
          "Our active Sohna Road delivery footprint covers the connected mid-Gurgaon and South Gurgaon belt where residential possessions are at their peak.",
        nearbyAreas: ["Sector 47", "Sector 48", "Sector 49", "Sector 50", "Sector 67", "Subhash Chowk", "Badshahpur"],
        closingPara:
          "Sohna Road is still a corridor in motion — new towers are handing over every quarter and the surrounding infrastructure is maturing fast. That makes it one of the smartest places in Gurgaon to invest meaningfully in interiors, because well-designed homes here genuinely command higher rentals and resale. Cargo Interior approaches every Sohna Road project as a long-term asset, not a short-term cosmetic exercise — designed for how you live today and how you might monetise the space tomorrow.",
      }}
    />
  );
}
