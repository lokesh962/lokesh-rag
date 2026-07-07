import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400 text-sm">

            {title}

          </p>

          <h2 className="text-4xl font-bold mt-3">

            {value}

          </h2>

        </div>

        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${color}`}
        >

          <Icon size={30} />

        </div>

      </div>
    </motion.div>
  );
}