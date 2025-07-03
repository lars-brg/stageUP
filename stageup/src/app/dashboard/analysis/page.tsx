export default function CandidateAnalysis() {
    const vagas = [
        {
            titulo: "Candidatos a vaga 1",
            candidatos: [1, 2, 3, 4],
        },
        {
            titulo: "Candidatos a vaga 2",
            candidatos: [1, 2],
        },
    ];

    return (
        <div className="p-10 bg-gray-50 min-h-screen font-raleway">
            <h1 className="text-2xl font-bold text-eclipse-black mb-8">Analisar Vagas</h1>

            {vagas.map((vaga, idx) => (
                <div key={idx} className="mb-12">
                    <h2 className="text-xl font-semibold text-eclipse-black mb-6">{vaga.titulo}</h2>

                    <div className="space-y-6">
                        {vaga.candidatos.map((_, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                                    <div>
                                        <p className="font-semibold text-eclipse-black">Nome do aluno</p>
                                        <p className="text-sm text-monlight-gray">
                                            Idade * Formação * Interesse 1 * Interesse 2
                                        </p>
                                    </div>
                                </div>
                                <button className="bg-astral-blue text-white px-4 py-2 rounded-md font-semibold hover:bg-midnight-navy cursor-pointer">
                                    Acessar Perfil
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
