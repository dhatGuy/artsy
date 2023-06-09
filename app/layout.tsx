import {
  Baskervville,
  Bellefair,
  Cardo,
  STIX_Two_Text,
} from "next/font/google";
import localFont from "next/font/local";
import Footer from "~/components/Footer";
import Navbar from "~/components/ui/Navbar";
import "./globals.css";

const bellefair = Bellefair({
  weight: "400",
  display: "swap",
  variable: "--font-bellefair",
  subsets: ["latin"],
});

const stixTwo = STIX_Two_Text({
  display: "swap",
  variable: "--font-stix-two",
  subsets: ["latin"],
});

const cardo = Cardo({
  weight: "400",
  display: "swap",
  variable: "--font-cardo",
  subsets: ["latin"],
});

const baskervville = Baskervville({
  weight: "400",
  display: "swap",
  variable: "--font-baskervville",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  variable: "--font-clash-display",
  src: [
    {
      path: "../public/fonts/ClashDisplay-Extralight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/ClashDisplay-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/ClashDisplay-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/ClashDisplay-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/ClashDisplay-Semibold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/ClashDisplay-Bold.ttf",
      weight: "700",
    },
  ],
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    {
      path: "../public/fonts/Satoshi-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Satoshi-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Satoshi-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Satoshi-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Satoshi-Black.ttf",
      weight: "900",
    },
  ],
});

export const metadata = {
  title: "Artsy",
  description: "A marketplace for digital art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bellefair.variable} ${stixTwo.variable} ${baskervville.variable} ${satoshi.variable} ${clashDisplay.variable} ${cardo.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
