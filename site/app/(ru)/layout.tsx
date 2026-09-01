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
  title: "Глеб Стафоркин - DevOps-инженер",
  description:
    "Резюме DevOps-инженера: Jenkins, Kubernetes, OpenShift, автоматизация доступов и секретов.",
  icons: { icon: "/resume/favicon.ico" },
  openGraph: {
    title: "Глеб Стафоркин - DevOps-инженер",
    description: "Jenkins, Kubernetes, OpenShift, автоматизация доступов и секретов.",
    locale: "ru_RU",
    type: "profile",
  },
};

export default function RuRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
