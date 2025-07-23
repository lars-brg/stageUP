<img width="3000" height="2250" alt="Billboards" src="https://github.com/user-attachments/assets/27a8afe6-1607-4863-9029-5fa1753f5fb2" />
<h1 align="center">Stage</h1>

## Descrição

A _Stage_ é uma plataforma projetada para facilitar processos de recrutamento de estagiários e gestão de candidatos para empresas, e processos seletivos e oportunidades de experiência profissional para estudantes universitários. O sistema permite que empresas publiquem vagas, analisem candidaturas e acompanhem o progresso de candidaturas, enquanto candidatos podem explorar oportunidades, enviar currículos e acompanhar o status de suas incrições. A plataforma também oferece funcionalidades como criação de vagas com critérios detalhados, análise individual e comparativa de perfis, e um dashboard completo para visualização de métricas de contratação. O sistema possui uma interface responsiva que oferta uma experiência otimizada para desktop e mobile.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/pt). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com)

### Iniciando o servidor
- Clone este repositório

```
git clone https://github.com/lars-brg/stageUP.git
```

- Acesse a pasta no terminal/CMD

```
cd stageup
```

- Instale as dependências

```
npm install
```

- Execute a aplicação em modo de desenvolvimento

```
npm run dev
```

- O servidor inciará na porta:3000: http://localhost:3000

### Website

- Algumas capturas de tela que mostram o fluxo de usuário

<table>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/69847723-5beb-487c-9b0b-d1c7ef499ccf" alt="Imagem 1" width="450px"><br />Imagem 1 - Cadastro</td>
   <td align="center"><img src="https://github.com/user-attachments/assets/ac63560c-a7c2-43e0-a7e1-916b75d9a7e3" alt="Imagem 1" width="450px"><br />Imagem 2 - Login</td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/ad707445-13b1-48d4-9944-3cb9c3685250" alt="Imagem 1" width="450px"><br />Imagem 3 - Dashboard Empresas</td>
    <td align="center"><img src="https://github.com/user-attachments/assets/191def08-5d36-4f73-9b12-3785c9bbc70b" alt="Imagem 1" width="450px"><br />Imagem 4 - Dashboard Alunos</td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/afdd8f09-64ac-4ace-b7e9-caa62bcb6f7e" alt="Imagem 1" width="450px"><br />Imagem 5 - Analisar Vagas</td>
    <td align="center"><img src="https://github.com/user-attachments/assets/32158a57-64e9-4006-ac6b-178d4a03b290" alt="Imagem 1" width="450px"><br />Imagem 6 - Analisar Candidatos</td>
  </tr>
  <tr>
    <td align="center"><img src="https://github.com/user-attachments/assets/2002fb05-0fc3-4961-8f4e-39bbbe6f8f33" alt="Imagem 1" width="450px"><br />Imagem 7 - Entrevistas</td>
  </tr>
</table>

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

### Para o front-end:
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://pt-br.reactjs.org/)
- [NextJS](https://reactnative.dev/)

### Para estilização e animações:
- [Tailwind CSS](https://tailwindcss.com)
- [Framer](https://www.framer.com/?utm_source=google&utm_medium=adwords&utm_campaign=22283959357_172357933861&utm_content=746821181190_framer_e_c_g&gad_source=1&gad_campaignid=22283959357&gclid=Cj0KCQjwyvfDBhDYARIsAItzbZG4ZpgI0_J8bQWIcdfzDVsSPvPXSlodd9egxcT9pVsK8FEa2hA0XRoaAswSEALw_wcB)
- [Heroicons](https://github.com/tailwindlabs/heroicons)

## Funcionalidades implementadas e futuras
- 🗸 Criar e acessar perfil (Empresa e aluno)
- 🗸 Painel administrativo para empresas
- 🗸 Cadastro de vagas, com separação entre presencial, híbrido e remoto
- 🗸 Cronograma de entrevistas
- 🗸 Visualizar vagas
- 🗸 Visualização de perfil do candidato
- 🗸 Status dos candidatos e quantidade de candidatos inscritos em vagas
- 🗸 Acompanhar detalhes da candidatura (Empresa e aluno)
- 🗸 Envio de curículo para análise dos avaliadores
- 🗸 Calendário de atividades e lembretes
- ⌛ Ferramentas de análise em tempo real de candidatos mais adequados à vaga
- ⌛ Relatórios de tempo médio de resposta dos candidatos e contratações
- ⌛ Módulo para gestão de entrevistas pelo Google Meet dentro da plataforma
- ⌛ Emissão de confirmações de seleção por e-mail
- ⌛ Comunicação integrada da empresa com o candidato (chat, notificações)
- ⌛ Sistema de envio de e-mails e notificações push para candidatos sobre novas vagas de interesse

## Autores
<table>
  <tr>
    <td align="center"><a href="https://github.com/lars-brg"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/118675951?v=4" width="100px;" alt=""/><br /><sub><b>Lara Braga</b></sub></a><br />🖱
    <td align="center"><a href="https://github.com/Miguel-Edson"><img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/v2/D4D03AQG1KpceYov5sQ/profile-displayphoto-shrink_400_400/B4DZbaCg22HQAg-/0/1747414820184?e=1756339200&v=beta&t=yTdi6qZWw4A_QUnZCU8Alg9OT2CG1Ux8trP8A3R5aQM" width="100px;" alt=""/><br /><sub><b>Miguel Edson Ramos</b></sub></a><br />🖱
    <td align="center"><a href="https://github.com/Miguel-Edson"><img style="border-radius: 50%;" src="https://github.com/user-attachments/assets/6fb68f33-9288-41eb-926b-98530c3ecd57" width="100px;" alt=""/><br /><sub><b>Àtila Fontenele</b></sub></a><br />🖱
  </tr>
</table>

<h4 align="start"> 
🚧 Em construção... 🚧  
</h4>
