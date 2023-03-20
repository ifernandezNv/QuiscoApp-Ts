import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco'

function Categoria({categoria}) {
    const {id, nombre, icono, productos} = categoria
    const {setCategoriaSeleccionada} = useQuiosco();
    
    const router = useRouter();
    
    function cambiarCategoria(id: number) : void{
      setCategoriaSeleccionada(id);
    }

  return (
    <Link href={`/${icono}`} onClick={ () => cambiarCategoria(id)} data-cy={icono}
      className={`${router.asPath === `/${icono}` ? 'bg-yellow-500' : 'hover:bg-yellow-500 transition-all'} p-2 border-b rounded w-full flex gap-4 items-center justify-center my-2`} >
      <Image
        alt={`Imagen de la categoria ${nombre}`}
        width={50}
        height={100}
        src={`/assets/img/icono_${icono}.svg`}
      />
      <span className='font-semibold text-center w-1/2'>
        {nombre}
      </span>
        
    </Link>
    
  )
}

export default Categoria