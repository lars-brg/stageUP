export default function JobsVacancies() {
    return (
        <div className="p-5 min-h-screen">
            <h1 className="text-2xl font-bold text-eclipse-black mb-10">
                Criar nova vaga de estágio
            </h1>

            <form className="max-w-1/2 mx-auto p-6 rounded-md space-y-4">
                <input
                    type="text"
                    placeholder="Nome da vaga"
                    className="w-full border-b border-astral-blue bg-transparent outline-none py-2 px-1"
                />
                <input
                    type="text"
                    placeholder="Local"
                    className="w-full border-b border-astral-blue bg-transparent outline-none py-2 px-1"
                />
                <input
                    type="text"
                    placeholder="Salário"
                    className="w-full border-b border-astral-blue bg-transparent outline-none py-2 px-1"
                />
                <input
                    type="date"
                    placeholder="Data de Início"
                    className="w-full border-b border-astral-blue bg-transparent outline-none py-2 px-1"
                />
                <input
                    type="url"
                    placeholder="Link do formulário"
                    className="w-full border-b border-astral-blue bg-transparent outline-none py-2 px-1"
                />
                <textarea
                    placeholder="Descrição"
                    className="w-full border-b border-astral-blue bg-transparent outline-none py-2 px-1 resize-none"
                    rows={3}
                />

                <div>
                    <label className="block mb-2 text-sm font-medium text-eclipse-black">Modalidade</label>
                    <div className="flex gap-8">
                        <label className="flex items-center gap-2 text-sm text-astral-blue">
                            <input type="radio" name="modalidade" value="Remoto" />
                            Remoto
                        </label>
                        <label className="flex items-center gap-2 text-sm text-astral-blue">
                            <input type="radio" name="modalidade" value="Presencial" />
                            Presencial
                        </label>
                        <label className="flex items-center gap-2 text-sm text-astral-blue">
                            <input type="radio" name="modalidade" value="Híbrido" />
                            Híbrido
                        </label>
                    </div>
                </div>

                <div className="justify-end flex -bottom-6 right-0">
                    <button
                        type="submit"
                        className="bg-astral-blue text-white px-6 py-3 rounded-xl font-semibold cursor-pointer hover:bg-midnight-navy transition"
                    >
                        Abrir para candidaturas
                    </button>
                </div>
            </form>
        </div>
    );
}