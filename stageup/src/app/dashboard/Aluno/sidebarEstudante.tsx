import Image from "next/image";
import Link from "next/link";
import { RectangleGroupIcon, BookmarkIcon, UserIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SidebarEstudante() {
    return (
        <aside className="w-1/5 h-screen bg-astral-blue text-white p-6 flex flex-col justify-between border-r-3 border-border-blue">
            <div>
                {/* Logo */}
                <div className="flex items-center justify-center mb-8">
                    <Link href={"/"}>
                        <Image src="/logo_stageup.png" alt="Logo" width={150} height={150} />
                    </Link>
                </div>

                {/* Campo de busca */}
                <div className="p-4">
                    <div className="relative">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stardust-white" />
                        <input
                            type="text"
                            placeholder="O que você procura?"
                            className="w-full pl-10 pr-4 py-2 bg-astral-blue rounded-lg border border-stardust-white text-sm text-white placeholder-stardust-white focus:outline-none focus:ring-2 focus:ring-monlight-gray" 
                        />
                    </div>
                </div>

                {/* Menu principal */}
                <nav className="flex-1 px-4 space-y-3 font-outfit font-medium">
                    <Link href="/dashboard/Aluno" className="flex items-center px-4 py-3 text-stardust-white hover:text-stardust-white hover:bg-mid-blue rounded-lg border-2 border-mid-blue transition-colors">
                        <RectangleGroupIcon className="w-6 h-6 mr-3" />
                        Dashboard
                    </Link>
                    <Link href="/dashboard/Aluno/vagas-salvas" className="flex items-center px-4 py-3 text-stardust-white hover:text-stardust-white hover:bg-mid-blue rounded-lg border-2 border-mid-blue transition-colors">
                        <BookmarkIcon className="w-6 h-6 mr-3" />
                        Vagas salvas
                    </Link>
                </nav>
            </div>

            {/* Seção inferior - Ferramentas */}
            <div className="px-4 pb-4">
                <div className="space-y-2">
                    <Link href="/dashboard/Aluno/perfil" className="flex items-center px-2 py-2 text-stardust-white hover:text-stardust-white hover:bg-mid-blue rounded-lg transition-colors">
                        <UserIcon className="w-5 h-5 mr-3" />
                        Perfil
                    </Link>

                    <button className="flex items-center px-2 py-2 text-stardust-white hover:text-stardust-white hover:bg-red-600 rounded-lg transition-colors w-full text-left">
                        <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
                        Sair
                    </button>
                </div>
            </div>
        </aside>
    );
}