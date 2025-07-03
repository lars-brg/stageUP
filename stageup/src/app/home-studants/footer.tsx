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
                    <p className='text-md '>Opção 1</p>
                    <p className='text-md '>Opção 2</p>
                    <p className='text-md '>Opção 3</p>
                    <p className='text-md '>Opção 4</p>
                    <p className='text-md '>Opção 5</p>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <h3 className='text-shadow-midnight-navy text-md font-bold '>Para Alunos</h3>
                    <p className='text-md '>Opção 1</p>
                    <p className='text-md '>Opção 2</p>
                    <p className='text-md '>Opção 3</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer