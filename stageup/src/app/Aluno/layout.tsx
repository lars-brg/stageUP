import React from "react";
import SidebarEstudante from "./sidebarEstudante";

export default function DashboardAlunoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarEstudante />
      <main className="flex-1 bg-white">
        {children}
      </main>
    </div>
  );
}