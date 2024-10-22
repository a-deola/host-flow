import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import SideNav from "./components/SideNav";

import { Inter } from "next/font/google";
import NavTrigger from "./components/NavTrigger";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Host Flow",
  description: "Your go to event tracker",
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
          <div className="flex h-screen">
            <SideNav />
            <section className="flex-grow">
              <NavTrigger />
              {children}
            </section>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
