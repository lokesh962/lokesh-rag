import {
  LayoutDashboard,
  MessageSquare,
  Upload,
  FileText,
  Settings,
  BrainCircuit,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  // {
  //   title: "AI Chat",
  //   icon: MessageSquare,
  //   path: "/chat",
  // },
  // {
  //   title: "Upload",
  //   icon: Upload,
  //   path: "/upload",
  // },
  // {
  //   title: "Documents",
  //   icon: FileText,
  //   path: "/documents",
  // },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar({ isOpen = true, onClose }) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 shrink-0 flex-col border-r border-white/10 bg-slate-900/95 px-4 py-6 transition-transform duration-200 md:static md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 p-3">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white">RagNove AI</h1>
              <p className="text-xs text-gray-400">RAG Assistant</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => onClose?.()}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                <Icon size={18} />
                {item.title}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
