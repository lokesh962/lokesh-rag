import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

export default function DashboardLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-950 text-white">
      <div className="relative flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        {mobileSidebarOpen && (
          <button
            type="button"
            aria-label="Close sidebar"
            className="fixed inset-0 z-30 bg-slate-950/70 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden">
          <Topbar onMenuToggle={() => setMobileSidebarOpen((prev) => !prev)} />

          <main className="flex h-full min-h-0 overflow-hidden bg-slate-950/80 p-2 sm:p-4 lg:p-8">
            <div className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-slate-950/90 px-4 py-3 text-center text-sm text-slate-300 sm:px-6">
        Developed by Lokesh Singh
      </footer>
    </div>
  );
}