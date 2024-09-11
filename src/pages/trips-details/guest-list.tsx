import { CircleDashed, CircleCheck, UserCog } from "lucide-react";

export function GuestList(){
    return (
        <div>
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Convidados</h2>
                            
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium text-zinc-100">Nome convidado</span>
                            <span className="block text-sm text-zinc-400 truncate">
                            email@convidado.com
                            </span>
                        </div>
                        <CircleDashed className="size-5 text-zinc-600"/>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                            <span className="block font-medium text-zinc-100">Nome convidado</span>
                            <span className="block text-sm text-zinc-400 truncate">
                                email@convidado.com
                            </span>
                        </div>
                    <CircleCheck className="size-5 text-emerald-600"/>
                    </div>
                </div>

                <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700 w-full justify-center">
                    <UserCog className='size-5'/>
                    Gerenciar convidados
                </button>
            </div>
        </div>
    )
}