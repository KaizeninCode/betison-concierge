import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const garamond = Cormorant_Garamond({
  variable: "--font-geist-garamond",
  subsets: ["latin"],
});

const poppins = Poppins({
  // variable: "--font-poppins",
  weight: ["100", '200', '300', '400', '500', '600', '700', '800', '900' ],
});

export const metadata: Metadata = {
  title: "Betison Homebridge Concierge",
  description: "Your Trusted Hands Back Home",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${garamond.variable} ${poppins} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <Header/>
        {children}
      </body>
    </html>
  );
}
