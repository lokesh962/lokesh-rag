import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20",

    secondary:
      "border border-white/20 bg-white/5 backdrop-blur-lg text-white",

    ghost:
      "text-white hover:bg-white/10",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className={`
      px-6
      py-3
      rounded-full
      font-medium
      transition-all
      duration-300
      ${styles[variant]}
      ${className}
      `}
    >
      {children}
    </motion.button>
  );
}