import { motion } from "framer-motion";

const tech = [
  {
    name: "React",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "FastAPI",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Firebase",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Grok",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "LangChain",
    color: "from-indigo-500 to-violet-500",
  },
  {
    name: "Qdrant",
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Render",
    color: "from-sky-500 to-cyan-500",
  },
  {
    name: "Python",
    color: "from-blue-600 to-yellow-400",
  },
];

export default function TechStack() {
  return (
    <section className="py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold">

          Powered by Modern AI Stack

        </h2>

        <p className="text-center text-gray-400 mt-6 text-lg">

          Built with industry-standard technologies.

        </p>

        <div className="relative mt-20 overflow-hidden">

          <motion.div

            animate={{
              x: ["0%", "-50%"],
            }}

            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}

            className="flex gap-8 w-max"

          >

            {[...tech, ...tech].map((item, index) => (

              <div

                key={index}

                className="w-56 h-32 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col justify-center items-center"

              >

                <div

                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color}`}

                />

                <h3 className="mt-5 font-semibold text-xl">

                  {item.name}

                </h3>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}