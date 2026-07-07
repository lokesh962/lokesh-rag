import {
    LayoutDashboard,
    MessageSquare,
    FileText,
    Settings,
    LogOut
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar(){

    const menus=[

        {
            icon:<LayoutDashboard size={20}/>,
            name:"Dashboard",
            path:"/dashboard"
        },

        {
            icon:<MessageSquare size={20}/>,
            name:"AI Chat",
            path:"/dashboard"
        },

        {
            icon:<FileText size={20}/>,
            name:"Documents",
            path:"/dashboard"
        },

        {
            icon:<Settings size={20}/>,
            name:"Settings",
            path:"/settings"
        }

    ];

    return(

        <div className="w-64 bg-[#0F172A] border-r border-slate-800 flex flex-col">

            <div className="p-6">

                <h1 className="text-2xl font-bold text-white">

                    🤖 DocuMind AI

                </h1>

                <p className="text-slate-400 text-sm">

                    RAG Assistant

                </p>

            </div>

            <div className="flex-1 px-4">

                {

                    menus.map(menu=>(

                        <NavLink

                        key={menu.name}

                        to={menu.path}

                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-300 mb-2 transition">

                            {menu.icon}

                            {menu.name}

                        </NavLink>

                    ))

                }

            </div>

            <div className="p-5">

                <button

                className="w-full bg-red-500 hover:bg-red-600 text-white rounded-xl py-3">

                    <div className="flex justify-center items-center gap-2">

                        <LogOut size={18}/>

                        Logout

                    </div>

                </button>

            </div>

        </div>

    )

}