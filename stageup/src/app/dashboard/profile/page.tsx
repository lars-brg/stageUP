export default function CompanyProfile() {
  return (
    <div>
      <div className="flex items-center gap-6 mb-10">
        <div className="w-24 h-24 rounded-full bg-gray-200" />
        <div>
          <h1 className="text-xl font-semibold text-eclipse-black">Nome da empresa</h1>
          <p className="text-lg text-eclipse-black">Área de atuação</p>
        </div>
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-6 text-eclipse-black">Vagas abertas</h2>
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 rounded-lg p-4 mb-4 shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-eclipse-black">Nome da vaga</p>
              <p className="text-sm text-monlight-gray">
                Data * Tipo * Local * R$700,00 * Hoje
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-astral-blue text-white font-bold rounded hover:bg-midnight-navy">
                Apagar
              </button>
              <button className="px-4 py-2 border border-gray-300 text-midnight-navy font-bold rounded hover:bg-gray-100">
                Editar
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
