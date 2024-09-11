import { Link2, Plus } from "lucide-react";

export function ImportantLinks(){
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
                        
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-300">
                                https://airbnb.com.br/rooms/135000588600000000000000000000000000000000
                            </a>
                        </div>
                        <Link2 className="size-5 text-zinc-400"/>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium text-zinc-100">Link misterioso</span>
                            <a href="https://www.youtube.com/watch?v=NzishIREebw" className="block text-xs text-zinc-400 truncate hover:text-zinc-300">
                                https://www.youtube.com/watch?v=NzishIREebw
                            </a>
                        </div>
                        <Link2 className="size-5 text-zinc-400"/>
                    </div>
                </div>

                <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center">
                    <Plus className='size-5'/>
                    Cadastrat novo link
                </button>
        </div>
    )
}