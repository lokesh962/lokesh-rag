import { Bell, Menu, Search } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import ProfileMenu from "./ProfileMenu";

export default function Topbar({ onMenuToggle }) {
  const { user } = useAuth();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 bg-slate-900/90 px-3 sm:h-20 sm:px-6 lg:px-8">
      <div className="flex flex-1 items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onMenuToggle}
          className="rounded-xl p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>

        <div className="mr-2 flex-1 max-w-xl sm:mr-4">
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              placeholder="Search..."
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-12 pr-4 text-sm text-white outline-none transition focus:border-cyan-400 sm:py-3"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
        <button className="relative rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">
          <Bell size={18} />
          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>

        <ProfileMenu user={user} />
      </div>
    </header>
  );
}