import React from 'react'
import Image from 'next/image'
import { formatearDinero, formatearFecha } from 'helpers/index'
function ProductoCarrito({producto}) {
    const {nombre, precio, cantidad, id, imagen, fecha} = producto
    
  return (
    <div className='flex gap-5 my-3 w-5/6 items-center justify-between bg-white rounded shadow border-b p-5'>
      <div className='flex items-center gap-3'>
        <Image
            width={150}
            height={150}
            alt={`Imagen del producto ${nombre}`}
            src={`/assets/img/${imagen}.jpg`}
            className='rounded shadow-xl'
        />
        <div className=''>
          <h3 className='font-bold text-xl'>{nombre}</h3>
          <p>Cantidad: <span className='font-black text-lg text-amber-500'>{cantidad}</span></p>
          <p>Subtotal: {formatearDinero(Number(precio) * Number(cantidad))}</p>
        </div>
      </div>
        <div className='flex flex-col gap-2'>
            <button type='button' className='bg-amber-500 hover:bg-amber-600 p-2 my-3 text-center text-white font-semibold rounded transition-all'>Editar</button>
            <button type='button' className='bg-red-600 hover:bg-red-800 p-2 my-3 text-center text-white font-semibold rounded transition-all'>Eliminar</button>
        </div>
    </div>
  )
}

export default ProductoCarrito