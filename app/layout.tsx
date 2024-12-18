import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import SideNav from "./components/SideNav";
import { Inter } from "next/font/google";
import FooterNav from "./components/FooterNav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Your go to event tracker",
  icons: ["/icons/evently.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row min-h-screen">
            <SideNav />
            <section className="flex flex-col w-full">{children}</section>
          </div>
          <FooterNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
