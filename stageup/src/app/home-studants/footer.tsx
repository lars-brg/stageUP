import React from 'react'
import Logo from '../../../public/assets/logo.svg'
import Image from 'next/image'

function Footer() {
  return (
    <div>
        <footer className='flex justify-between items-start py-[4rem]'>
            <div className='flex w-[50%]'>
                <Image
                    src={Logo}
                    alt="Logo"
                    width={250}
                    height={250}
                    className="rounded-xl"
                />
            </div>

            <div className='flex w-[50%] gap-10 font-outfit'>
                <div className='flex flex-col gap-2 w-full'>
                    <h3 className='text-shadow-midnight-navy text-md font-bold '>Para Empresas</h3>
                    <p className='text-md '>Dashboard</p>
                    <p className='text-md '>Lançar vagas</p>
                    <p className='text-md '>Analisar candidatos</p>
                    <p className='text-md '>Entrevistas</p>
                    <p className='text-md '>Perfil</p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <h3 className='text-shadow-midnight-navy text-md font-bold '>Para Alunos</h3>
                    <p className='text-md '>Dashboard</p>
                    <p className='text-md '>Vagas salvas</p>
                    <p className='text-md '>Perfil</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer