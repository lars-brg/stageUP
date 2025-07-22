import Image from "next/image";
import Link from "next/link";
import { RectangleGroupIcon, PencilSquareIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function SidebarEmpresa() {
    return (
        <aside className="w-1/5 h-screen bg-astral-blue text-white p-6 flex-col justify-between border-r-3 border-border-blue">
            <div className="flex items-center justify-center mb-8">
                <Link href={"/"}>
                    <Image src="/logo_stageup.png" alt="Logo" width={150} height={150} />
                </Link>
            </div>

            <div className="p-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="O que você procura?"
                        className="w-full pl-10 pr-4 py-2 bg-astral-blue rounded-lg border border-stardust-white text-sm text-white placeholder-stardust-white focus:outline-none focus:ring-2 focus:ring-monlight-gray" />
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-5 font-outfit font-medium">
                <a href="/dashboard" className="flex items-center px-4 py-3 text-stardust-white hover:text-stardust-white hover:bg-mid-blue rounded-lg border-2 border-mid-blue">
                    <RectangleGroupIcon className="w-6 h-6 mr-3" />
                    Dashboard
                </a>
                <a href="/dashboard/jobs" className="flex items-center px-4 py-3 text-stardust-white hover:text-stardust-white hover:bg-mid-blue rounded-lg border-2 border-mid-blue">
                    <PencilSquareIcon className="w-6 h-6 mr-3" />
                    Lançar Vagas
                </a>
                <a href="/dashboard/analysis" className="flex items-center px-4 py-3 text-stardust-white hover:text-stardust-white hover:bg-mid-blue rounded-lg border-2 border-mid-blue">
                    <UserGroupIcon className="w-6 h-6 mr-3" />
                    Analisar Candidatos
                </a>
                {/* <a href="/dashboard/interview" className="flex items-center px-4 py-3 text-stardust-white hover:text-stardust-white hover:bg-mid-blue rounded-lg border-2 border-mid-blue">
                    <DocumentDuplicateIcon className="w-6 h-6 mr-3" />
                    Entrevistas
                </a> */}


                <p className="text-md font-bold mt-10 mb-3">Ferramentas</p>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/dashboard/profile">Perfil</Link></li>
                    <li><Link href="/dashboard/settings">Configurações</Link></li>
                </ul>
                <button className="mt-6">Sair</button>
            </nav>
        </aside>
    );
}
