import React from 'react'
import { Container } from '../components/container'
import Image from 'next/image'
import Logo from '../../../public/assets/logoVersion2.svg'
import ButtonFilled from './buttonFilled'
import ButtonStroked from './buttonStroked'

function NavBar() {
  return (
    <div className='w-full bg-eclipse-black h-[5rem] flex items-center justify-between'>
        <Container>
            <div className='flex w-full justify-between'>
                <Image
                src={Logo}
                alt={Logo}
                width={150}
                height={150}
                />
            <div className='flex gap-4 items-center'>
                <button className="px-4 py-2 border-2 border-main-blue hover:bg-astral-blue text-white rounded-md font-semibold">
                    Entrar
                </button>

                <ButtonFilled
                    text='Cadastrar-se'
                />

            </div>
        </div>
        </Container>
        
    </div>
  )
}

export default NavBar