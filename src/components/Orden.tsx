import React from 'react'
import { TProducto } from 'helpers/types'
import { formatearDinero, formatearFecha } from 'helpers'
import ProductoOrden from './ProductoOrden'
import useQuiosco from 'hooks/useQuiosco'
function Orden({ordenState}: TProducto) {
    const {nombre, id, pedido, total, fecha} = ordenState
    const {completarOrden} = useQuiosco()
  return (
    <div className='border rounded shadow p-3'>
        <h3 className='font-semibold text-2xl'>Orden {id}</h3>
        <p className='font-bold'>Cliente: <span>{nombre}</span></p>
        <p>Fecha de solicitud: {formatearFecha(new Date(fecha))}</p>
        <div className='mt-4'>
            {pedido.map((productoState: TProducto) => <ProductoOrden key={productoState.id} productoState={productoState}/>)}
        </div>
        <div className='flex justify-between items-center'>
          <p className='text-4xl text-amber-500 font-black'>Total a pagar: {formatearDinero(total)}</p>
          <button onClick={()=>completarOrden({...ordenState, completado: true})} className='bg-indigo-700 hover:bg-indigo-900 transition-all p-2 rounded text-white text-center uppercase font-semibold'>Completar Orden</button>
        </div>
        
    </div>
  )
}

export default Orden