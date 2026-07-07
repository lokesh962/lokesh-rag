import {
    Upload,
    MessageSquare,
    FileText
} from "lucide-react";

import { Link } from "react-router-dom";

const actions=[

    {

        title:"Upload PDF",

        icon:Upload,

        to:"/upload"

    },

    {

        title:"AI Chat",

        icon:MessageSquare,

        to:"/chat"

    },

    {

        title:"Documents",

        icon:FileText,

        to:"/documents"

    }

];

export default function QuickActions(){

    return(

        <div className="grid md:grid-cols-3 gap-6 mb-10">

            {actions.map((item)=>{

                const Icon=item.icon;

                return(

                    <Link

                        key={item.title}

                        to={item.to}

                        className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-3xl p-8 hover:scale-105 transition"

                    >

                        <Icon size={34}/>

                        <h2 className="mt-6 text-2xl font-semibold">

                            {item.title}

                        </h2>

                    </Link>

                )

            })}

        </div>

    )

}