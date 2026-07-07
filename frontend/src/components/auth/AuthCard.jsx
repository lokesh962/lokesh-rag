import { motion } from "framer-motion";

export default function AuthCard({

    children

}){

    return(

        <motion.div

            initial={{

                opacity:0,

                scale:.9

            }}

            animate={{

                opacity:1,

                scale:1

            }}

            transition={{

                duration:.6

            }}

            className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl"

        >

            {children}

        </motion.div>

    )

}