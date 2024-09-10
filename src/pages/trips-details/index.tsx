import { Plus, Calendar, MapPin, Settings2, CircleCheck, Link2, UserCog, CircleDashed } from "lucide-react";

export function TripsDetails(){
    return (
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400"/>
                    <span className="text-lg text-zinc-100">Bobolandia, Bostil</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100">29 de Fevereiro</span>
                    </div>

                    <div className='w-px h-6 bg-zinc-800'/>

                    <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                        Alterar local/data
                        <Settings2 className='size-5'/>
                    </button>
                </div>
            </div>

            <main className="flex gap-16 px-4">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>

                        <button className="bg-emerald-400 text-emerald-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-emerald-500">
                            <Plus className='size-5 '/>
                            Cadastrar viagem
                        </button>



                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex items-baseline gap-2">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>
                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-emerald-600"/>
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">8:00h</span>
                                </div>
                            </div>

                            <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-emerald-600"/>
                                    <span className="text-zinc-100">Outra atividade</span>
                                    <span className="text-zinc-400 text-sm ml-auto">12:00h</span>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>

                <div className="w-80 space-y-6">
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

                    <div className='w-full h-px bg-zinc-800' />

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
                </div>
            </main>

        </div>
    )
}