"use client";

import React, { useState } from "react";
import Image from 'next/image';
import { XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";

interface AreaInteresse {
    nome: string;
    id: number;
}

interface PerfilAlunoProps {
    nomeCompleto: string;
    email: string;
    dataNascimento: string;
    local: string;
    curso: string;
    fotoPerfil?: string;
    areasIniciais: AreaInteresse[];
}

export default function PerfilAluno({
    nomeCompleto,
    email,
    dataNascimento,
    local,
    curso,
    fotoPerfil,
    areasIniciais
}: PerfilAlunoProps) {
    const [areasInteresse, setAreasInteresse] = useState<AreaInteresse[]>(areasIniciais);
    const [novaArea, setNovaArea] = useState("");

    const removerArea = (id: number) => {
        setAreasInteresse(prev => prev.filter(area => area.id !== id));
    };

    const adicionarArea = () => {
        if (novaArea.trim()) {
            const novaAreaObj: AreaInteresse = {
                nome: novaArea.trim(),
                id: Date.now() 
            };
            setAreasInteresse(prev => [...prev, novaAreaObj]);
            setNovaArea("");
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            adicionarArea();
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header de boas-vindas */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Olá, {nomeCompleto.split(' ')[0]} {nomeCompleto.split(' ')[nomeCompleto.split(' ').length - 1]}!
                    </h1>
                    <p className="text-gray-600 max-w-2xl">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo in!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Seção Meu Perfil */}
                    <div className="bg-white rounded-xl p-6 border-2 border-astral-blue h-fit">
                        <div className="flex flex-col items-center mb-6">
                            <Image
                                src={fotoPerfil || "/assets/placeholder.jpg"}
                                alt="Foto do perfil"
                                width={200}
                                height={200}
                                className="w-48 h-48 rounded-lg object-cover mb-4"
                            />
                        </div>
                        
                        <div className="bg-astral-blue text-white p-4 rounded-lg">
                            <h2 className="text-xl font-semibold mb-4 text-center">Meu perfil</h2>
                            
                            <div className="space-y-3 text-sm">
                                <div>
                                    <span className="font-semibold">Nome: </span>
                                    <span>{nomeCompleto}</span>
                                </div>
                                
                                <div>
                                    <span className="font-semibold">Email: </span>
                                    <span>{email}</span>
                                </div>
                                
                                <div>
                                    <span className="font-semibold">Data de Nasc: </span>
                                    <span>{dataNascimento}</span>
                                </div>
                                
                                <div>
                                    <span className="font-semibold">Local: </span>
                                    <span>{local}</span>
                                </div>
                                
                                <div>
                                    <span className="font-semibold">Curso: </span>
                                    <span>{curso}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seção Áreas de Interesse */}
                    <div className="bg-white rounded-xl p-6 border-2 border-astral-blue">
                        <div className="bg-astral-blue text-white p-4 rounded-lg mb-4">
                            <h2 className="text-xl font-semibold text-center">Áreas de Interesse</h2>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                            {areasInteresse.map((area) => (
                                <div 
                                    key={area.id}
                                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border"
                                >
                                    <span className="text-gray-700 font-medium">{area.nome}</span>
                                    <button
                                        onClick={() => removerArea(area.id)}
                                        className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                        title="Remover área"
                                    >
                                        <XMarkIcon className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Adicionar nova área */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={novaArea}
                                onChange={(e) => setNovaArea(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Digite uma nova área de interesse..."
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-astral-blue focus:border-transparent"
                            />
                            <button
                                onClick={adicionarArea}
                                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                            >
                                <PlusIcon className="w-4 h-4" />
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}