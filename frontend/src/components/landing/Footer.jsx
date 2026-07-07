import {
  BrainCircuit,
  Github,
  Linkedin,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px] left-10 top-0" />

        <div className="absolute w-72 h-72 bg-indigo-500/10 rounded-full blur-[120px] right-10 bottom-0" />

      </div>

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 p-3 rounded-xl">

                <BrainCircuit size={28} />

              </div>

              <div>

                <h2 className="text-2xl font-bold">

                  DocuMind AI

                </h2>

                <p className="text-sm text-gray-400">

                  Intelligent RAG Assistant

                </p>

              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-7">

              Chat with your documents using
              Retrieval-Augmented Generation,
              Grok AI and Semantic Search.

            </p>

          </div>

          {/* Product */}

          <div>

            <h3 className="font-semibold text-lg mb-6">

              Product

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-cyan-400 cursor-pointer transition">

                Features

              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">

                AI Chat

              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">

                Dashboard

              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">

                Upload

              </li>

            </ul>

          </div>

          {/* Technologies */}

          <div>

            <h3 className="font-semibold text-lg mb-6">

              Technologies

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>React</li>

              <li>FastAPI</li>

              <li>Firebase</li>

              <li>Qdrant</li>

              <li>LangChain</li>

              <li>Grok AI</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="font-semibold text-lg mb-6">

              Connect

            </h3>

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">

                <Github />

              </div>

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">

                <Linkedin />

              </div>

              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition cursor-pointer">

                <Mail />

              </div>

            </div>

            <p className="text-gray-400 mt-6">

              Made with

              <Heart
                size={16}
                className="inline text-red-500 mx-2"
              />

              using React & FastAPI

            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">

            © 2026 DocuMind AI. All rights reserved.

          </p>

          <p className="text-gray-500 mt-4 md:mt-0">

            Built by <span className="text-cyan-400 font-medium">Lokesh Singh</span>

          </p>

        </div>

      </div>

    </footer>
  );
}