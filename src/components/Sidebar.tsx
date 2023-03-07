import React, {useEffect} from 'react'
import Image from 'next/image'
import Categoria from './Categoria'
import useQuiosco from 'hooks/useQuiosco'
import {Categoria as TCategorias} from 'prisma/data/categorias';
import {Producto as TProductos} from 'prisma/data/productos';
function Sidebar() {
  const {categorias} : TCategorias[] = useQuiosco()
  const {productos} : TProductos[] = useQuiosco()
  const {setProductos} = useQuiosco()


  return (
    <aside className='w-full overflow-hidden h-screen bg-white md:w-2/5 py-10 px-4 flex flex-col gap-4 items-center justify-center'>
        <Image
            alt='Logo de QuiscoApp'
            src={'/assets/img/logo.svg'}
            width={150}
            height={150}
        />
        <nav className='w-full'>
            {categorias?.map(categoria => <Categoria key={categoria.id} categoria = {categoria}/>)}
        </nav>
    </aside>
  )
}

export default Sidebar