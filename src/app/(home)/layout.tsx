import { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="scroll-smooth">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
