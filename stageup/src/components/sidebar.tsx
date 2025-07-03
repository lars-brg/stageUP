import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-1/5 h-screen bg-astral-blue text-white p-6 flex-col justify-between">
            <div>
                <Link href={"/"}>
                    <Image src="/logo_stageup.png" alt="Logo" width={150} height={150} />
                </Link>
            </div>
            <nav className="mt-10">
                <p className="text-md font-bold mb-3">Gerencie suas vagas</p>
                <ul className="space-y-2 text-sm">
                    <li><Link href="/dashboard/jobs">Lançar Vagas</Link></li>
                    <li><Link href="/dashboard/analysis">Análise de Candidatos</Link></li>
                    <li><Link href="/dashboard/calendar">Agendamento de Entrevistas</Link></li>
                </ul>
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
