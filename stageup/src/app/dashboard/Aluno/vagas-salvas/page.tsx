"use client";

import React, { useState } from "react";
import VagaSalvaCard from "./VagaSalvaCard";
import { BookmarkIcon } from "@heroicons/react/24/outline";

interface VagaSalva {
  id: number;
  empresa: string;
  vaga: string;
  modalidade: string;
  local: string;
  valor: string;
  data: string;
  imagem: string;
}

export default function VagasSalvasPage() {
  const [vagasSalvas, setVagasSalvas] = useState<VagaSalva[]>([
    {
      id: 1,
      empresa: "Nome da Empresa",
      vaga: "Nome da vaga",
      modalidade: "Remoto ou Presencial",
      local: "Local",
      valor: "R$700,00",
      data: "Hoje",
      imagem: "/assets/placeholder.jpg"
    },
    {
      id: 2,
      empresa: "Nome da Empresa",
      vaga: "Nome da vaga",
      modalidade: "Remoto ou Presencial",
      local: "Local",
      valor: "R$700,00",
      data: "Hoje",
      imagem: "/assets/placeholder.jpg"
    },
    {
      id: 3,
      empresa: "Nome da Empresa",
      vaga: "Nome da vaga",
      modalidade: "Remoto ou Presencial",
      local: "Local",
      valor: "R$700,00",
      data: "Hoje",
      imagem: "/assets/placeholder.jpg"
    },
    {
      id: 4,
      empresa: "Nome da Empresa",
      vaga: "Nome da vaga",
      modalidade: "Remoto ou Presencial",
      local: "Local",
      valor: "R$700,00",
      data: "Hoje",
      imagem: "/assets/placeholder.jpg"
    },
    {
      id: 5,
      empresa: "Nome da Empresa",
      vaga: "Nome da vaga",
      modalidade: "Remoto ou Presencial",
      local: "Local",
      valor: "R$700,00",
      data: "Hoje",
      imagem: "/assets/placeholder.jpg"
    }
  ]);

  const removerVaga = (id: number) => {
    setVagasSalvas(prev => prev.filter(vaga => vaga.id !== id));
  };

  const aplicarVaga = (vaga: VagaSalva) => {
    console.log('Aplicar para vaga:', vaga.empresa, '-', vaga.vaga);
    // Aqui você pode adicionar lógica para aplicar na vaga
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Card de resumo */}
        <div className="bg-white rounded-xl p-4 border-2 border-astral-blue mb-6 inline-block">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-astral-blue rounded-full">
              <BookmarkIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 font-outfit">Vagas salvas</p>
              <p className="text-3xl font-bold text-gray-900 font-geist">{vagasSalvas.length}</p>
            </div>
          </div>
        </div>

        {/* Lista de vagas salvas */}
        <div className="space-y-4">
          {vagasSalvas.map((vaga) => (
            <VagaSalvaCard
              key={vaga.id}
              empresa={vaga.empresa}
              vaga={vaga.vaga}
              modalidade={vaga.modalidade}
              local={vaga.local}
              valor={vaga.valor}
              data={vaga.data}
              imagem={vaga.imagem}
              onDeletar={() => removerVaga(vaga.id)}
              onAplicar={() => aplicarVaga(vaga)}
            />
          ))}
        </div>

        {/* Mensagem quando não há vagas */}
        {vagasSalvas.length === 0 && (
          <div className="text-center py-12">
            <BookmarkIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Nenhuma vaga salva</h3>
            <p className="text-gray-500">Você ainda não salvou nenhuma vaga.</p>
          </div>
        )}
      </div>
    </div>
  );
}