import React from "react";
import SidebarEmpresa from "./sidebarEmpresa";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarEmpresa />
      <main className="flex-1 bg-white">
        {children}
      </main>
    </div>
  );
}
