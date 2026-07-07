import { useEffect, useState } from "react";
import { Menu, X, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Features", "How It Works", "Pricing", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-slate-900/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 p-2 rounded-xl">
            <BrainCircuit size={28} />
          </div>

          <div>
            <h2 className="font-bold text-xl">DocuMind AI</h2>

            <p className="text-xs text-gray-400">AI Document Assistant</p>
          </div>
        </motion.div>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}

        <div className="hidden lg:flex gap-4">
          <Link to="/login">
            <Button variant="ghost">Login</Button>
          </Link>

          <Button>Get Started</Button>
        </div>

        {/* Mobile */}

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-slate-900 border-t border-white/10"
        >
          <div className="flex flex-col p-6 gap-5">
            {links.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}

            <Button variant="secondary">Login</Button>

            <Button>Get Started</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
