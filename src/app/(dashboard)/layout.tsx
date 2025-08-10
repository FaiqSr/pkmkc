import NavBarDashboard from "@/components/layout/NavBarDashboard";
import { ReactNode } from "react";
import "./globals.css";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="bg-slate-100">
        <NavBarDashboard />
        <main className="pt-5">{children}</main>
      </body>
    </html>
  );
}

export default DashboardLayout;
