import React from 'react'

type ButtonText = {
  text: string;
} 

function ButtonStroked({ text }: ButtonText) {
  return (
    <button className="px-4 py-2 border-2 border-main-blue hover:bg-astral-blue text-black rounded-md font-semibold">
          {text}
    </button>
  )
}

export default ButtonStroked