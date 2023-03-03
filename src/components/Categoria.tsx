import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Categoria({categoria}) {
    const {id, nombre, icono, productos} = categoria
    const router = useRouter();
    
  return (
    <Link href={`/${icono}`} className={router.asPath === `/${icono}` ? 'bg-yellow-500 p-2 rounded w-full flex gap-4 items-center justify-center my-2' :  'w-full p-2 rounded flex gap-4 items-center justify-center hover:bg-yellow-500 transition-all my-2'} >
      <Image
        alt={`Imagen de la categoria ${nombre}`}
        width={50}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
      />
      <p className='font-semibold text-center w-1/2'>
        {nombre}
      </p>
        
    </Link>
    
  )
}

export default Categoria