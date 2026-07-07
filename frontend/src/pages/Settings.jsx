import { useAuthContext } from "../context/AuthContext";

import {
  User,
  Mail,
  Shield,
  Calendar,
  Database,
  BrainCircuit,
  Cloud,
  HardDrive,
} from "lucide-react";

export default function Settings() {
  const { user } = useAuthContext();

  return (
    <div className="min-h-full bg-transparent p-3 sm:p-4 md:p-8 lg:p-10">
      <div className="mx-auto max-w-5xl space-y-4 sm:space-y-6">
        <div className="px-1 sm:px-0">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            View your account information.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-xl backdrop-blur-xl sm:p-6 md:p-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-6 sm:text-left">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-3xl font-bold text-white shadow-lg sm:h-28 sm:w-28 sm:text-4xl">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                user?.displayName?.charAt(0).toUpperCase() ||
                user?.email?.charAt(0).toUpperCase() ||
                "U"
              )}
            </div>

            <div className="w-full sm:w-auto">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {user?.displayName || "Anonymous User"}
              </h2>
              <p className="mt-2 break-all text-sm text-slate-400 sm:text-base">
                {user?.email || "No Email"}
              </p>
              <span className="mt-4 inline-block rounded-full bg-green-500/20 px-4 py-1 text-sm font-medium text-green-400">
                ● Active
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl sm:p-6">
            <h3 className="mb-4 text-lg font-semibold text-white sm:mb-6 sm:text-xl">
              Personal Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <Info
                icon={<User size={18} />}
                title="Full Name"
                value={user?.displayName || "Anonymous User"}
              />
              <Info
                icon={<Mail size={18} />}
                title="Email"
                value={user?.email || "Not Available"}
              />
              <Info
                icon={<Shield size={18} />}
                title="Role"
                value="Authenticated User"
              />
              <Info
                icon={<Calendar size={18} />}
                title="Member Since"
                value={
                  user?.metadata?.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : "N/A"
                }
              />
              <Info
                icon={<User size={18} />}
                title="Login Provider"
                value={
                  user?.providerData?.[0]?.providerId === "google.com"
                    ? "Google"
                    : "Email & Password"
                }
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl sm:p-6">
            <h3 className="mb-4 text-lg font-semibold text-white sm:mb-6 sm:text-xl">
              Application Information
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <Info
                icon={<BrainCircuit size={18} />}
                title="AI Model"
                value="Groq Llama 3.3 70B"
              />
              <Info
                icon={<Database size={18} />}
                title="Vector Database"
                value="Qdrant Cloud"
              />
              <Info
                icon={<Cloud size={18} />}
                title="Storage"
                value="Supabase Storage"
              />
              <Info
                icon={<HardDrive size={18} />}
                title="Application"
                value="Lexora AI v1.0.0"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl sm:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Profile Management
              </h3>
              <p className="mt-1 text-sm text-slate-400 sm:text-base">
                Profile editing functionality will be available in a future update.
              </p>
            </div>

            <button
              disabled
              className="w-full cursor-not-allowed rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white opacity-60 sm:w-auto"
            >
              Edit Profile (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl bg-slate-800/50 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-cyan-500/20 p-2 text-cyan-400">
          {icon}
        </div>
        <span className="text-sm text-slate-300 sm:text-base">{title}</span>
      </div>

      <span className="break-words text-sm font-medium text-white sm:max-w-[55%] sm:text-right">
        {value}
      </span>
    </div>
  );
}