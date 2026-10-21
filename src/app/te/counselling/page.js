import CounsellingPage, { buildMetadata } from "../../components/counselling/CounsellingPage";
import te from "../../components/counselling/content.te";

export const metadata = buildMetadata(te);

export default function Page() {
  return <CounsellingPage t={te} />;
}
