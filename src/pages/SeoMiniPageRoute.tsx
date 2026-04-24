import { useLocation } from "react-router-dom";
import SeoMiniPage from "@/components/SeoMiniPage";
import { seoMiniPages } from "@/data/seoMiniPages";
import NotFound from "./NotFound";

export default function SeoMiniPageRoute() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
  const data = seoMiniPages[slug];
  if (!data) return <NotFound />;
  return <SeoMiniPage data={data} />;
}
