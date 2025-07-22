import React from 'react'
import { ContainerMenor } from './components/container_menor'
import { Container } from './components/container'
import JobCard from './home-studants/cards'
import Footer from './home-studants/footer'
import NavBar from './home-studants/NavBar'

import Image from 'next/image'
import Borda1 from '../../public/assets/borda1.svg'



function page() {
  return (
    <div className='bg-stardust-white'>
      <NavBar/>
    <div className='flex h-fit w-full top-0'>
      <Image src={Borda1} alt='teste' width={350} height={350} />
        <Container>
            <div className='flex flex-col w-full h-full items-center justify-center px-[8rem] gap-2'>
              <p className='font-outfit text-center'>Mais de 100 empresas ofertando vagas</p>              
              <h1 className='font-geist text-[48px] text-center font-bold text-[#2065A2]'>Encontre seu próximo estágio:</h1>
            </div>
        </Container>
      <Image src={Borda1} alt='teste' width={350} height={350} className='pr-2' />
    </div>
      <div>
        <ContainerMenor >
          {/* bloco 1 */}
          <h1 className='my-[2rem] text-geist text-2xl font-bold'>Empresas com maior quantidade de contratações</h1>
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />

          {/* bloco 2 */}
          <h1 className='mb-[2rem] mt-[4rem] text-geist text-2xl font-bold'>Estágios - Engenharia</h1>
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />


          {/* bloco 3 */}
          <h1 className='mb-[2rem] mt-[4rem] text-geist text-2xl font-bold'>Estágios - Designer</h1>
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />
            <JobCard
              empresa="Nome da Empresa"
              vaga="Desenvolvedor Front-end"
              modalidade="Remoto"
              local="São Paulo"
              valor="R$700,00"
              data="Hoje"
              imagem="/assets/placeholder.jpg"
            />
             <hr className="my-8 border-t-2 border-gray-300" />
            <Footer />
            <div className='w-full flex justify-center items-center py-4'>
              <p className='font-outfit text-sm text-black'>Copyright © 2025 Stage Up. All rights reserved.</p>
            </div>
        </ContainerMenor> 
      </div>
    </div>
  )
}

export default page