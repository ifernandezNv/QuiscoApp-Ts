import React from 'react'
import Image from 'next/image'

function ProductoCarrito({producto}) {
    const {nombre, precio, cantidad, id, imagen} = producto
  return (
    <div className='flex gap-5'>
        <Image
            width={200}
            height={200}
            alt={`Imagen del producto ${nombre}`}
            src={`/assets/img/${imagen}.jpg`}
        />
        <div className=''>
          <p>{nombre}</p>
          <p>{cantidad}</p>
        </div>
        <div>
            <button type='button' className='bg-amber-500 p-2 my-3 text-center text-white font-semibold rounded'>Editar</button>
            <button type='button' className='bg-red-600 p-2 my-3 text-center text-white font-semibold rounded'>Editar</button>
        </div>
    </div>
  )
}

export default ProductoCarrito