import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <Image src="/logo_stageup.png" alt="Logo StageUp" width={120} height={120} className="mb-6" />

      <h1 className="text-4xl font-bold text-eclipse-black mb-4 font-geist">
        Bem-vindo ao <span className="text-astral-blue">StageUp</span>
      </h1>

      <p className="text-lg text-monlight-gray max-w-md mb-8 font-raleway">
        Conectamos estudantes e empresas com oportunidades de estágio de forma fácil, rápida e inteligente.
      </p>

      <Link
        href="/dashboard"
        className="px-6 py-3 rounded-xl bg-astral-blue text-white font-semibold font-raleway text-lg hover:bg-midnight-navy transition"
      >
        Entrar no Dashboard
      </Link>

      <footer className="absolute bottom-4 text-sm text-monlight-gray font-raleway">
        &copy; {new Date().getFullYear()} StageUp. Todos os direitos reservados.
      </footer>
    </div>
  );
}
