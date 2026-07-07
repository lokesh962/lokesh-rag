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

      {/* <Footer /> */}

    </div>
  );
}