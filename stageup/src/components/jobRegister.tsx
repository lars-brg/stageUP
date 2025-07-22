"use client";

import { useState } from "react";

interface JobRegisterProps {
    nomeBotao: string;
}

export default function JobModal() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Vaga cadastrada!");
        setIsOpen(false);
    };

    return (
        <>
            <div className="justify-end flex -bottom-6 right-0">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-astral-blue text-white p-3 rounded-xl font-semibold cursor-pointer hover:bg-midnight-navy transition"
                >
                    <div className="flex items-center gap-2 text-base">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Criar nova vaga
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-4 text-gray-500 hover:text-gray-800"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4">Cadastrar nova vaga</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Título da Vaga</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-blue"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Descrição</label>
                                <textarea
                                    required
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-astral-blue"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Local</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-astral-blue"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-astral-blue text-white py-2 px-4 rounded-md hover:bg-midnight-navy transition"
                            >
                                Cadastrar Vaga
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
