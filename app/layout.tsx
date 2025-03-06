import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader";
import { ThemeProvider } from "@/components/theme-provider";


const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth", "GRAD", "slnt", "XTRA", "XOPQ", "YOPQ", "YTLC", "YTUC", "YTAS", "YTDE", "YTFI"],

});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "No Hesi",
  description: "Discover custom cars, unique highway maps, and unmatched cut-up competitions!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoFlex.variable} ${robotoMono.variable} antialiased`}
      >
        <Preloader/>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              // enableSystem
              disableTransitionOnChange
            >
              {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
