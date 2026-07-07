import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Input({
  name ,
  type = "text",
  label,
  value,
  onChange,
  placeholder,
}) {
  const [show, setShow] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">
      <label className="text-sm text-gray-300">{label}</label>

      <div className="relative">
        <input
          name={name}
          type={isPassword ? (show ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 outline-none focus:border-cyan-400 transition"
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {show ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    </div>
  );
}
