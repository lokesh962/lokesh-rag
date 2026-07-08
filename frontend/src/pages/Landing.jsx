import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import TechStack from "../components/landing/TechStack";
import Workflow from "../components/landing/Workflow";
// import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="bg-slate-950 text-white overflow-hidden">

      <Navbar />

      <Hero />

      <Features />

      <TechStack />

      <Workflow />

      <footer className=" border-t border-white/10 bg-slate-950/90 px-4 py-3 text-center text-sm text-slate-300 sm:px-6 fixed bottom-0 w-full">
        Developed by Lokesh Singh
      </footer>

      {/* <Footer /> */}

    </div>
  );
}