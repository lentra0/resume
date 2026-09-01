import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lentra0.github.io/resume/"),
  title: "Gleb Staforkin - DevOps Engineer",
  description:
    "DevOps engineer resume: Jenkins, Kubernetes, OpenShift, access and secret automation.",
  icons: { icon: "/resume/favicon.ico" },
  openGraph: {
    title: "Gleb Staforkin - DevOps Engineer",
    description: "Jenkins, Kubernetes, OpenShift, access and secret automation.",
    locale: "en_US",
    type: "profile",
  },
};

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
