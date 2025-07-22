import React from 'react'
import Link from 'next/link'

type ButtonText = {
  text: string;
} 

function ButtonStroked({ text }: ButtonText) {
  return (
    <Link href="/signin">
      <button className="px-4 py-2 border-2 border-main-blue hover:bg-astral-blue text-black rounded-md font-semibold">
        {text}
      </button>
    </Link>
  )
}

export default ButtonStroked