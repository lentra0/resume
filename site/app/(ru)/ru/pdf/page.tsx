// Print-only route: identical to /ru/ but includes contacts marked pdfOnly.
// scripts/deploy.mjs strips it from the published site so the phone number
// never appears on a public page.
import Resume from "@/components/Resume";
import { ru } from "@/content/ru";

export default function RuPdfPage() {
  return <Resume data={ru} variant="pdf" />;
}
