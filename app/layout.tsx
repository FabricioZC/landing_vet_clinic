import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy Paw",
  description: "The leading veterinary clinic in London: top specialists, modern equipment, proven medicines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
