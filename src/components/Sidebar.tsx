import React from 'react'
import Image from 'next/image'
import Categoria from './Categoria'
import useQuiosco from 'hooks/useQuiosco'
function Sidebar() {
  const {categorias} = useQuiosco();
  return (
    <aside className='w-full md:min-h-screen bg-white md:w-1/5 p-10 flex flex-col gap-4 items-center justify-center'>
        <Image
            alt='Logo de QuiscoApp'
            src={'/assets/img/logo.svg'}
            width={300}
            height={300}
        />
        <nav>
            {categorias.map(categoria => <Categoria key={categoria.id} categoria = {categoria}/>)}
        </nav>
    </aside>
  )
}

export default Sidebar