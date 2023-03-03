import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco'

function Categoria({categoria}) {
    const {id, nombre, icono, productos} = categoria
    const router = useRouter();
    const {setCategoriaSeleccionada} = useQuiosco();
    
    function cambiarCategoria(e) : void{
      setCategoriaSeleccionada(e.target.textContent)
    }

  return (
    <Link href={`/${icono}`} onClick={ e => cambiarCategoria(e)} 
      className={`${router.asPath === `/${icono}` ? 'bg-yellow-500' : 'hover:bg-yellow-500 transition-all'} p-2 border-b rounded w-full flex gap-4 items-center justify-center my-2`} >
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