import Image from "next/image";
import ButtonFilled from "./buttonFilled";
import ButtonStroked from "./buttonStroked";

type JobCardProps = {
  empresa: string;
  vaga: string;
  modalidade: string; // Ex: "Remoto" ou "Presencial"
  local: string;
  valor: string;
  data: string;
  imagem: string;
};

export default function JobCard({
  empresa,
  vaga,
  modalidade,
  local,
  valor,
  data,
  imagem,
}: JobCardProps) {
  return (
    <div className="p-4 rounded-lg flex justify-between items-center w-full">
      {/* Esquerda */}
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

      {/* Direita - Botões */}
      <div className="flex gap-4">
        <ButtonStroked text="Salvar"/>
        <ButtonFilled text="Aplicar"/>
      </div>
    </div>
  );
}
