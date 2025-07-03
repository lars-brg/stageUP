import {ReactNode} from 'react'

type Props = {
  children: ReactNode
}

export function ContainerMenor(children: Props) {

  return (
    <div className="w-full max-w-[936px] mx-auto">
      {children.children}
    </div>
  )
}
