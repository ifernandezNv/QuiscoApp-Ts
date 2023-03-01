import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Categoria} from 'prisma/data/categorias'
import { useRouter } from 'next/router'

function Categoria({categoria} : Categoria) {
    const {id, nombre, icono, productos} = categoria
    const router = useRouter();

  return (
    <div className={router.pathname === `/${icono}` ? 'bg-yellow-500 p-2 rounded w-full' : 'p-2 rounded flex gap-4 items-center hover:bg-yellow-500 transition-all w-full'} >
      <Image
        alt={`Imagen de la categoria ${nombre}`}
        width={50}
        height={50}
        src={`/assets/img/icono_${icono}.svg`}
      />
      <Link href='si' className='font-semibold '>
          {nombre}
      </Link>
    </div>
    
  )
}

export default Categoria