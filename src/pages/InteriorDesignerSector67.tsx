import LocationLandingPage from "@/components/LocationLandingPage";
import home from "@/assets/home-interior.jpg";
import showroom from "@/assets/showroom-interior.jpg";
import office from "@/assets/office-interior.jpg";

export default function InteriorDesignerSector67() {
  return (
    <LocationLandingPage
      data={{
        slug: "interior-designer-in-sector-67-gurgaon",
        location: "Sector 67",
        metaTitle: "Interior Designer in Sector 67, Gurgaon | New-age Apartments & Retail",
        metaDescription: "Cargo Interior is a trusted interior designer in Sector 67, Gurgaon — full home interiors, modular kitchens and retail fit-outs delivered with single-window execution.",
        h1: "Interior Designer in Sector 67 Gurgaon – Modern Design & Execution Experts",
        intro:
          "Sector 67 has quietly become one of the most desirable new-age residential pockets in Gurgaon, anchored by upscale societies, well-designed builder floors and a fast-growing retail high street. Buyers here are mostly young professionals and families moving in from Cyber City and Golf Course Extension Road, and their interior briefs reflect that — clean lines, smart storage, work-from-home-ready layouts and a calm material palette. Cargo Interior is a Gurugram design + build firm built for exactly these projects. We take a Sector 67 home or shop from raw shell to fully styled handover under one contract, one project lead and one fixed timeline.",
        servicesIntro:
          "Our work in Sector 67 sits across two clear categories — modern residential interiors in society apartments and small-format commercial fit-outs along the high street.",
        services: [
          { title: "Modern Apartment Interiors", desc: "Full home design for 3BHK and 4BHK apartments in societies like M3M Woodshire, Adani Oyster Grande and BPTP Amstoria — kitchens, wardrobes, ceilings, lighting and painting in one scope." },
          { title: "Hybrid Work-from-home Setups", desc: "Dedicated study and work corners integrated into living and bedroom spaces, with acoustic and lighting design tuned for video calls and long focus blocks." },
          { title: "Showroom & Café-style Retail Interiors", desc: "Compact 600–1,500 sq ft retail fit-outs along the Sector 67 commercial strip — strong shopfront design, layered lighting and durable finishes." },
          { title: "Modular Kitchens & Smart Storage", desc: "Tall-unit modular kitchens, pull-out pantries and full-height wardrobes engineered for the slightly taller floor-to-ceiling heights typical of Sector 67 societies." },
        ],
        projectsIntro:
          "Snapshots of recent Sector 67 deliveries — every project comes with a detailed before/after walkthrough during the design discussion.",
        projects: [
          { title: "Sector 67 Society Apartment – 4BHK", description: "A 2,150 sq ft apartment redesigned for a young family with a dedicated kids' wing and a shared work-from-home study.", image: home },
          { title: "High-street Retail Showroom – Sector 67", description: "A 1,100 sq ft fashion-and-accessories store fit-out with feature wall, layered lighting and a curated trial-room experience.", image: showroom },
          { title: "Compact Office Fit-out – Sector 67", description: "A 1,600 sq ft 22-seat workspace for a digital agency, including a small studio, meeting pods and a casual lounge.", image: office },
        ],
        portfolioContextLabel: "View Office / Showroom Projects",
        portfolioContextHref: "/our-portfolio/office-interior-designer-in-gurugram",
        whyChooseIntro:
          "Sector 67 buyers tend to be detail-oriented and digital-first — they want documented proposals, 3D visualisation and a partner who respects their time.",
        whyChoose: [
          { title: "3D-first Design Conversations", desc: "Every proposal is shown in walkthrough-quality 3D before a rupee is committed, so you commit to a design you have actually seen." },
          { title: "Schedule Discipline", desc: "Sector 67 societies impose strict working hours and we plan our procurement and labour shifts around them so timelines do not slip." },
          { title: "Accountable Single-window Team", desc: "Designer, project manager and site supervisor all sit inside Cargo Interior — there is no third-party blame game when something needs fixing." },
          { title: "Post-handover Service", desc: "Six-month snag support after handover, with a single WhatsApp line for any service request — the kind of after-care most studios skip." },
        ],
        nearbyIntro:
          "Around Sector 67, our delivery zone covers the broader Golf Course Extension Road belt where many of our residential and small-commercial clients are based.",
        nearbyAreas: ["Sector 65", "Sector 66", "Sector 68", "Sector 69", "Sector 70", "Golf Course Extension Road", "Sohna Road"],
        closingPara:
          "Sector 67 is a corridor where good design genuinely shows. Apartments here have better ceiling heights, deeper balconies and more natural light than older Gurgaon stock, which means a thoughtful interior plan can punch noticeably above its weight. Cargo Interior leans into that opportunity — designing every Sector 67 home and shop to look intentional from day one and to age gracefully as the neighbourhood continues to mature.",
      }}
    />
  );
}
