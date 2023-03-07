import React from 'react'
import Image from 'next/image'
import {formatearDinero} from '/helpers'
import useQuiosco from 'hooks/useQuiosco'
function Producto({producto}) {
    const {nombre, precio, imagen, id} = producto
    const {esconderModal, getInfoProducto, setProductoBuscar} = useQuiosco()
  return (
    <div className='border rounded shadow p-4 flex flex-col gap-3'>
        <Image
            src={`/assets/img/${imagen}.jpg`}
            width={250}
            height={250}
            alt={`Ìmagen producto ${nombre}`}
        />
        <div className='p-4'>
            <h3 className='text-xl font-bold'>{nombre}</h3>
            <p className='text-amber-500 font-black text-4xl'>{formatearDinero(precio)}</p>
            <button type='submit' onClick={()=> {
              esconderModal()
              setProductoBuscar(id)
              // getInfoProducto()
            }} className='w-full bg-indigo-700 hover:bg-indigo-900 text-center text-white font-bold p-2 mt-5 rounded transition-all'>Añadir al Pedido</button>
        </div>
    </div>
  )
}

export default Producto