import React from 'react'
import Link from 'next/link'

type ButtonText = {
  text: string;
} 

function ButtonFilled({ text }: ButtonText) {
  return (
    <Link href="/register">
      <button
        className="px-4 py-2 bg-main-blue hover:bg-astral-blue text-white rounded-md font-semibold"
      >
        {text}
      </button>
    </Link>
  )
}

export default ButtonFilled