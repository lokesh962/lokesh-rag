import { motion } from "framer-motion";
import {
  UploadCloud,
  Database,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Button from "../ui/Button";

const steps = [
  {
    icon: UploadCloud,
    title: "Upload PDF",
  },
  {
    icon: Database,
    title: "Generate Embeddings",
  },
  {
    icon: Search,
    title: "Semantic Search",
  },
  {
    icon: Sparkles,
    title: "Grok AI Response",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full top-10 left-20 animate-pulse"/>

        <div className="absolute w-96 h-96 bg-indigo-500/20 blur-[150px] rounded-full bottom-10 right-20 animate-pulse"/>

      </div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity:0, x:-60 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.8 }}
        >

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8">

            <Sparkles className="text-cyan-400" size={18}/>

            <span className="text-sm">
              AI Powered RAG Assistant
            </span>

          </div>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">

            Chat with

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">

              Your Documents

            </span>

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">

            Upload PDFs, search intelligently,
            retrieve relevant information,
            and receive accurate AI answers
            powered by Retrieval-Augmented Generation.

          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <Button>

              Get Started

            </Button>

            <Button variant="secondary">

              Live Demo

            </Button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-14">

            <div>

              <h2 className="text-3xl font-bold">

                100+

              </h2>

              <p className="text-gray-400">

                Documents

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                5000+

              </h2>

              <p className="text-gray-400">

                Questions

              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                99%

              </h2>

              <p className="text-gray-400">

                Accuracy

              </p>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity:0, x:60 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.9 }}
          className="relative"
        >

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <div>

                <h2 className="text-xl font-semibold">

                  AI Workflow

                </h2>

                <p className="text-gray-400">

                  Retrieval-Augmented Generation

                </p>

              </div>

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"/>
            </div>

            <div className="space-y-5">

              {steps.map((item,index)=>{

                const Icon=item.icon;

                return(

                  <motion.div

                    key={index}

                    whileHover={{scale:1.03}}

                    className="flex items-center justify-between bg-slate-900/60 border border-white/10 rounded-2xl p-5"

                  >

                    <div className="flex items-center gap-4">

                      <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 p-3 rounded-xl">

                        <Icon size={22}/>

                      </div>

                      <span>

                        {item.title}

                      </span>

                    </div>

                    <ArrowRight/>

                  </motion.div>

                )

              })}

            </div>

            <div className="mt-10 bg-cyan-500/10 rounded-2xl border border-cyan-400/20 p-5">

              <div className="flex items-center gap-3">

                <CheckCircle2 className="text-green-400"/>

                <span>

                  Ready to answer questions from your uploaded documents.

                </span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}