import { motion } from "framer-motion";

import {
    UploadCloud,
    FileText,
    Scissors,
    BrainCircuit,
    Database,
    Search,
    Sparkles,
    CheckCircle2
} from "lucide-react";

const steps = [

    {
        icon: UploadCloud,
        title: "Upload Document",
        desc: "Upload PDF, DOCX or TXT files securely."
    },

    {
        icon: FileText,
        title: "Extract Text",
        desc: "Read and process document contents."
    },

    {
        icon: Scissors,
        title: "Chunk Documents",
        desc: "Split text into optimized chunks."
    },

    {
        icon: BrainCircuit,
        title: "Generate Embeddings",
        desc: "Convert chunks into vector embeddings."
    },

    {
        icon: Database,
        title: "Store in Qdrant",
        desc: "Persist vectors in the cloud database."
    },

    {
        icon: Search,
        title: "Semantic Search",
        desc: "Retrieve the most relevant document chunks."
    },

    {
        icon: Sparkles,
        title: "Grok AI",
        desc: "Generate an accurate answer using retrieved context."
    },

    {
        icon: CheckCircle2,
        title: "Answer with Citation",
        desc: "Respond with sources and confidence."
    }

];

export default function Workflow() {

    return (

        <section className="py-32 relative">

            <div className="max-w-5xl mx-auto px-8">

                <motion.div

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    transition={{duration:.8}}

                    viewport={{once:true}}

                    className="text-center"

                >

                    <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">

                        AI Workflow

                    </p>

                    <h2 className="text-5xl font-bold mt-5">

                        How DocuMind AI Works

                    </h2>

                    <p className="text-gray-400 mt-6 text-lg">

                        Every answer is generated using Retrieval-Augmented
                        Generation to reduce hallucinations and improve
                        factual accuracy.

                    </p>

                </motion.div>

                <div className="relative mt-24">

                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-indigo-500 -translate-x-1/2"/>

                    {steps.map((step,index)=>{

                        const Icon=step.icon;

                        const left=index%2===0;

                        return(

                            <motion.div

                                key={index}

                                initial={{
                                    opacity:0,
                                    x:left?-100:100
                                }}

                                whileInView={{
                                    opacity:1,
                                    x:0
                                }}

                                viewport={{once:true}}

                                transition={{
                                    duration:.6,
                                    delay:index*.08
                                }}

                                className={`relative flex mb-16 ${
                                    left
                                    ?"justify-start"
                                    :"justify-end"
                                }`}

                            >

                                <div className="w-[45%]">

                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                                        <div className="flex items-center gap-5">

                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 flex items-center justify-center">

                                                <Icon size={30}/>

                                            </div>

                                            <div>

                                                <h3 className="text-2xl font-semibold">

                                                    {step.title}

                                                </h3>

                                                <p className="text-gray-400 mt-2">

                                                    {step.desc}

                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-6 h-6 rounded-full bg-cyan-400 border-4 border-slate-950"/>

                            </motion.div>

                        )

                    })}

                </div>

            </div>

        </section>

    )

}