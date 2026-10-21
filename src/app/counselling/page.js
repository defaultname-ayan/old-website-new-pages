import CounsellingPage, { buildMetadata } from "../components/counselling/CounsellingPage";
import en from "../components/counselling/content.en";

export const metadata = buildMetadata(en);

export default function Page() {
  return <CounsellingPage t={en} />;
}
