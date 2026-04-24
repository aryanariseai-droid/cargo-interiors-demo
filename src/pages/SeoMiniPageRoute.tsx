import { useParams } from "react-router-dom";
import SeoMiniPage from "@/components/SeoMiniPage";
import { seoMiniPages } from "@/data/seoMiniPages";
import NotFound from "./NotFound";

export default function SeoMiniPageRoute() {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? seoMiniPages[slug] : undefined;
  if (!data) return <NotFound />;
  return <SeoMiniPage data={data} />;
}
