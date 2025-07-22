import Image from "next/image";

type VagaSalvaCardProps = {
  empresa: string;
  vaga: string;
  modalidade: string;
  local: string;
  valor: string;
  data: string;
  imagem: string;
  onDeletar?: () => void;
  onAplicar?: () => void;
};

export default function VagaSalvaCard({
  empresa,
  vaga,
  modalidade,
  local,
  valor,
  data,
  imagem,
  onDeletar,
  onAplicar,
}: VagaSalvaCardProps) {
  return (
    <div className="p-4 rounded-lg flex justify-between items-center w-full bg-white border border-gray-200">
      {/* Esquerda - Igual ao JobCard original */}
      <div className="flex gap-4 items-start">
        <Image
          src={imagem}
          alt={empresa}
          width={80}
          height={80}
          className="rounded-xl"
        />
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-lg font-semibold">{empresa}</h2>
          <p className="text-gray-500 text-sm">
            {vaga} * {modalidade} * {local} * {valor} * {data}
          </p>
        </div>
      </div>

      {/* Direita - Botões específicos para vagas salvas */}
      <div className="flex gap-4">
        <button 
          onClick={onDeletar}
          className="px-4 py-2 bg-gray-500 text-white rounded-md font-semibold hover:bg-gray-600 transition-colors"
        >
          Deletar
        </button>
        <button 
          onClick={onAplicar}
          className="px-4 py-2 bg-astral-blue text-white rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}