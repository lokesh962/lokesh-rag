// import { Chrome } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({

    onClick,

    loading

}){

    return(

        <button

            onClick={onClick}

            disabled={loading}

            className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"

        >

            <FcGoogle size={20}/>

            Continue with Google

        </button>

    )

}