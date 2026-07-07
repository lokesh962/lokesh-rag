import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

import AuthCard from "./AuthCard";
import Input from "./Input";
import GoogleButton from "./GoogleButton";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //   const { login, register, googleLogin } = useAuth();
  const { login, register, googleLogin, resetPassword } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  async function handleForgotPassword() {
    if (!form.email) {
      toast.error("Enter your email first");
      return;
    }

    try {
      await resetPassword(form.email);

      toast.success("Password reset email sent.");
    } catch (error) {
      toast.error(error.message);
    }
  }

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      if (isLogin) {
        await login(form.email, form.password);

        toast.success("Welcome back!");
      } else {
        if (!form.name.trim()) {
          toast.error("Please enter your name");
          return;
        }

        if (form.password !== form.confirmPassword) {
          toast.error("Passwords do not match");
          return;
        }

        if (form.password.length < 6) {
          toast.error("Password must be at least 6 characters");
          return;
        }

        await register(form.name, form.email, form.password);

        toast.success("Account created successfully!");
      }

      navigate("/dashboard");
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("User not found");
          break;

        case "auth/wrong-password":
          toast.error("Wrong password");
          break;

        case "auth/email-already-in-use":
          toast.error("Email already exists");
          break;

        case "auth/invalid-email":
          toast.error("Invalid email");
          break;

        case "auth/weak-password":
          toast.error("Weak password");
          break;

        case "auth/invalid-credential":
          toast.error("Invalid email or password");
          break;

        default:
          toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  async function handleGoogleLogin() {
    setLoading(true);

    try {
      await googleLogin();

      toast.success("Welcome!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthCard>
      <div className="space-y-8">
        <div className="text-center">
          <motion.h2
            key={isLogin ? "login" : "register"}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold"
          >
            {isLogin ? "Welcome Back 👋" : "Create Account"}
          </motion.h2>

          <p className="mt-3 text-gray-400">
            {isLogin
              ? "Login to continue chatting with your documents."
              : "Create your free account."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Input
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@gmail.com"
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
          />

          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-cyan-400 hover:text-cyan-300"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <Input
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-slate-900 px-4 text-gray-400">OR</span>
          </div>
        </div>

        {/* <GoogleButton loading={loading} onClick={handleGoogleLogin} /> */}

        <div className="text-center">

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-cyan-400 hover:text-cyan-300 transition"
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </div>
    </AuthCard>
  );
}
