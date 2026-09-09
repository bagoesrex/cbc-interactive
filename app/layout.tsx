import type { Metadata } from "next";
import {
  Dancing_Script,
  Geist,
  Geist_Mono,
  Architects_Daughter,
} from "next/font/google";
import { SITE } from "@/config/site";
import { cn } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Satu-satunya instansiasi: di root layout (server component) agar font
// diunduh + di-preload sekali untuk seluruh app. Mode `variable` (bukan
// `className`) supaya bisa digabung dengan font lain via CSS variable.
const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-architects-daughter",
});

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        dancingScript.variable,
        architectsDaughter.variable,
        "h-full antialiased",
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
