import {
    FileText,
    BrainCircuit,
    Search,
    Cloud,
    Zap,
    ShieldCheck
} from "lucide-react";

import { motion } from "framer-motion";

import GlassCard from "../ui/GlassCard";

const features = [

    {
        icon: FileText,
        title: "Upload Documents",
        desc: "Upload PDFs, DOCX and TXT files with drag & drop support.",
    },

    {
        icon: BrainCircuit,
        title: "AI Chat",
        desc: "Ask questions naturally and receive context-aware answers.",
    },

    {
        icon: Search,
        title: "Semantic Search",
        desc: "Find the exact paragraph instead of searching keywords.",
    },

    {
        icon: Cloud,
        title: "Cloud Storage",
        desc: "Securely store documents in Firebase Storage.",
    },

    {
        icon: Zap,
        title: "Lightning Fast",
        desc: "FastAPI backend with vector search for instant responses.",
    },

    {
        icon: ShieldCheck,
        title: "Private & Secure",
        desc: "Every user has an isolated and secure knowledge base.",
    },

];

export default function Features() {

    return (

        <section className="py-32">

            <div className="max-w-7xl mx-auto px-8">

                <motion.div

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    viewport={{once:true}}

                    transition={{duration:.8}}

                    className="text-center"

                >

                    <p className="text-cyan-400 font-semibold uppercase tracking-widest">

                        FEATURES

                    </p>

                    <h2 className="mt-5 text-5xl font-bold">

                        Why Choose DocuMind AI?

                    </h2>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">

                        Everything you need to build your own intelligent
                        knowledge assistant powered by Retrieval-Augmented
                        Generation.

                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

                    {features.map((feature, index) => {

                        const Icon = feature.icon;

                        return (

                            <GlassCard key={index}>

                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center mb-6">

                                    <Icon size={32}/>

                                </div>

                                <h3 className="text-2xl font-semibold">

                                    {feature.title}

                                </h3>

                                <p className="mt-5 text-gray-400 leading-8">

                                    {feature.desc}

                                </p>

                            </GlassCard>

                        )

                    })}

                </div>

            </div>

        </section>

    )

}