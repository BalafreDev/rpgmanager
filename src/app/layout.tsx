import type { Metadata } from "next";
import { Inter, Averia_Serif_Libre } from "next/font/google";
import "./globals.css";


import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const averia = Averia_Serif_Libre({ weight: ["300", "400", "700"], subsets: ["latin"] });



export const metadata: Metadata = {
  title: {
    default: "RPGManager. Homepage",
    template: "%s | RPGManager.",
  },
  description: "Just play !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={averia.className}>
        <div className="container">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="r-block">
            <div className="header">
              <Header />
            </div>
            <div className="content">
              {children}
            </div>
          </div>
            <div className="footer">
              <Footer />
            </div>
        </div>
      </body>
    </html>
  );
}
