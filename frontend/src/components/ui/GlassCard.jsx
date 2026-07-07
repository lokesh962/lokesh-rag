import { motion } from "framer-motion";

export default function GlassCard({
    children,
    className = "",
}) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            transition={{
                duration: .25,
            }}
            className={`
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                shadow-xl
                hover:border-cyan-400/40
                hover:shadow-cyan-500/20
                transition-all
                duration-300
                ${className}
            `}
        >
            {children}
        </motion.div>
    );
}