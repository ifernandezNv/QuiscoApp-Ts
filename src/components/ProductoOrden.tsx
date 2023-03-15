import React from 'react'
import Image from 'next/image'
function ProductoOrden({productoState})  {
    const {imagen, nombre, cantidad} = productoState
  return (
    <div className='flex gap-3 items-center mb-10'>
        <Image
            width={100}
            height={100}
            alt={`Imagen producto ${nombre}`}
            src={`/assets/img/${imagen}.jpg`}
        />
        <div className='flex flex-col'>
            <p className='mb-2 text-amber-500 font-black text-xl'>{nombre}</p>
            <p className='font-bold text-lg'>Cantidad: {cantidad}</p>
        </div>
    </div>
  )
}

export default ProductoOrden