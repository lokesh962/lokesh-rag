import { Bell } from "lucide-react";

export default function Topbar(){

    return(

        <div className="h-20 border-b border-slate-800 flex items-center justify-between px-8 bg-[#111827]">

            <input

            placeholder="Search documents..."

            className="w-80 bg-[#1F2937] rounded-xl px-5 py-3 text-white outline-none"

            />

            <div className="flex items-center gap-5">

                <Bell className="text-white"/>

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white">

                        LS

                    </div>

                    <div>

                        <p className="text-white font-semibold">

                            Lokesh Singh

                        </p>

                        <p className="text-slate-400 text-xs">

                            AI Developer

                        </p>

                    </div>

                </div>

            </div>

        </div>

    )

}