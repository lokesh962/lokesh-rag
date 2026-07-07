import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Topbar from "../dashboard/Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen flex-col bg-slate-950 text-white overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex h-full flex-1 flex-col overflow-hidden">
          <Topbar />

          <main className="flex h-full min-h-0 bg-slate-950/80 p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div className="mx-auto flex h-full min-h-0 w-full max-w-7xl flex-col">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-3 text-center text-sm text-slate-300">
        Developed by Lokesh Singh
      </footer>
    </div>
  );
}