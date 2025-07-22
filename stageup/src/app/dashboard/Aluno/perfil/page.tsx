"use client";

import React from "react";
import PerfilAluno from "@/components/perfilAluno";

export default function PerfilAlunoPage() {
    return (
        <PerfilAluno
            nomeCompleto="Juan Ramos"
            email="juanramos@gmail.com"
            dataNascimento="17/17/2001"
            local="Sobral"
            curso="Eng. de Computação"
            fotoPerfil="/assets/placeholder.jpg"
            areasIniciais={[
                { nome: "Sistemas Embarcados", id: 1 },
                { nome: "Programação Front - End", id: 2 },
                { nome: "Programação Back - End", id: 3 }
            ]}
        />
    );
}