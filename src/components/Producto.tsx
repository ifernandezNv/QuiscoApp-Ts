import React from 'react'
import Image from 'next/image'

function Producto({producto}) {
    const {nombre, precio, imagen, id} = producto
  return (
    <div className='border rounded shadow p-4 flex flex-col gap-3'>
        <Image
            src={`/assets/img/${imagen}.jpg`}
            width={200}
            height={200}
            alt={`Ìmagen producto ${nombre}`}
        />
        <div className='my-2'>
            <h3>{nombre}</h3>
        </div>
    </div>
  )
}

export default Producto