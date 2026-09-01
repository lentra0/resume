// Print-only route - see app/(ru)/ru/pdf/page.tsx.
import Resume from "@/components/Resume";
import { en } from "@/content/en";

export default function EnPdfPage() {
  return <Resume data={en} variant="pdf" />;
}
