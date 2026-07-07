import useAuth from "../../hooks/useAuth";

export default function ProfileMenu({ user }) {
  const { logout } = useAuth();

  return (
    <div className="flex items-center gap-4">

      <img
        src={
          user?.photoURL ||
          "https://ui-avatars.com/api/?name=" +
            encodeURIComponent(user?.displayName || "User")
        }
        alt="avatar"
        className="w-11 h-11 rounded-full"
      />

      <div>

        <p className="font-medium">

          {user?.displayName || "User"}

        </p>

        <p className="text-xs text-gray-400">

          {user?.email}

        </p>

      </div>

      <button
        onClick={logout}
        className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600"
      >
        Logout
      </button>

    </div>
  );
}