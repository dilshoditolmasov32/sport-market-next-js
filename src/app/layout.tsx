import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components";


export const metadata: Metadata = {
  title: "next js",
  description: "Final Exam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Fira Sans">
        <header>
          <Header />
        </header>

        <main>{children}</main>

        <footer>

          <Footer />
        </footer>
      </body>
    </html>
  );
}
