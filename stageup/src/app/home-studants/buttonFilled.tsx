import React from 'react'

type ButtonText = {
  text: string;
} 

function ButtonFilled({ text }: ButtonText) {
  return (
    <button className="px-4 py-2 bg-main-blue hover:bg-astral-blue text-white rounded-md font-semibold">
          {text}
    </button>
  )
}

export default ButtonFilled