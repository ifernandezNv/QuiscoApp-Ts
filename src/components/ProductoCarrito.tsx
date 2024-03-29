import React from 'react'
import Image from 'next/image'
import { formatearDinero } from 'helpers/index'
import useQuiosco from 'hooks/useQuiosco'
import { Icon } from '@iconify/react'

function ProductoCarrito({productoState}) {
    const {nombre, precio, cantidad, id, imagen} = productoState
    const {mostrarModalConfirmacion, setProducto, mostrarModal} = useQuiosco()
  return (
    <div className='flex gap-5 my-3 w-5/6 items-center justify-between bg-white rounded shadow border-b py-5 px-2'>
      <div className='flex items-center gap-3'>
        <Image
            width={150}
            height={150}
            alt={`Imagen del producto ${nombre}`}
            src={`/assets/img/${imagen}.jpg`}
            className='rounded shadow-xl'
        />
        <div>
          <h3 data-cy='productoCarrito' className='font-bold text-xl'>{nombre}</h3>
          <p data-cy='cantidad' className='font-semibold'>Cantidad: {cantidad}</p>
          <p data-cy='precio' className='font-black text-xl text-amber-500'>Precio: {formatearDinero(precio)}</p>
          <p >Subtotal: {formatearDinero(Number(precio) * Number(cantidad))}</p>
        </div>
      </div>
        <div className='flex flex-col gap-2'>
            <button data-cy='editarProducto' onClick={()=>{
              mostrarModal()
              setProducto(productoState)
            }} type='button' className='flex gap-2 items-center bg-amber-500 hover:bg-amber-600 p-2 my-3 text-center text-white font-semibold rounded transition-all'><Icon icon="ph:pencil-simple" color="white" width="20" height="20" />Editar</button>
            <button data-cy='eliminarProducto' onClick={()=>{
              mostrarModalConfirmacion()
              setProducto(productoState)
            }} type='button' className='flex gap-2 items-center bg-red-600 hover:bg-red-800 p-2 my-3 text-center text-white font-semibold rounded transition-all'><Icon icon="mdi:trash-can-outline" color="white" width="20" height="20" />Eliminar</button>
        </div>
    </div>
  )
}

export default ProductoCarrito