import React, {useEffect} from 'react'
import Image from 'next/image'
import Categoria from './Categoria'
import useQuiosco from 'hooks/useQuiosco'
import { TCategoria } from 'helpers/types'

function Sidebar() {
  const {categorias} = useQuiosco()

  return (
    <aside className='w-full overflow-hidden h-screen bg-white md:w-1/3 py-10 px-4 flex flex-col gap-4 items-center justify-center'>
        <Image
            alt='Logo de QuiscoApp'
            src={'/assets/img/logo.svg'}
            width={150}
            height={150}
        />
        <nav className='w-full'>
            {categorias?.map((categoria: TCategoria) => <Categoria key={categoria.id} categoria = {categoria}/>)}
        </nav>
    </aside>
  )
}

export default Sidebar