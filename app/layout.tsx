import type { Metadata } from "next";
import { Montserrat, Poppins ,Bowlby_One_SC} from "next/font/google";
import "./globals.css";
import { Footer, LoadingWrapper, Navbar } from "@/components";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bowlbyOneSC = Bowlby_One_SC({
  variable: "--font-bowlby-one-sc",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Petzania  | pet daycare",
  description:
    "Petzania is a pet daycare in Dubai that provides a safe and fun environment for your pet to play and socialize. We offer a range of services including dog daycare, boarding, training, and grooming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} ${bowlbyOneSC.variable} antialiased min-h-screen flex flex-col`}
      >
        <LoadingWrapper>
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  );
}
