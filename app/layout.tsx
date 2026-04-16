import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import LoadingScreen from "@/components/loading";
import { Inter, Sora } from "next/font/google";

export const metadata: Metadata = {
  title: "AutoDrive",
  description: "Jual Beli Mobil Sport",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body", // ✅ WAJIB
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading", // ✅ WAJIB
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={`
          ${inter.variable}
          ${sora.variable}
          min-h-full flex flex-col antialiased
        `}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
