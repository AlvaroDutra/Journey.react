import { CircleDashed, CircleCheck, UserCog } from "lucide-react";
import { Button } from "../../components/button";

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

                <Button variant="secundary" size="full">
                    <UserCog className='size-5'/>
                    Gerenciar convidados
                </Button>

            </div>
        </div>
    )
}