import React, { useEffect } from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Image from 'next/image'
import {formatearDinero} from 'helpers/index.ts'
import Alerta from './Alerta'
function Modal() {
    const {esconderModal, producto, cantidad, aumentarCantidad, disminuirCantidad, cargando, agregarProductoPedido, alerta} = useQuiosco()
  return (
    <div className='block fixed z-index-1 left-0 top-0 w-full h-screen bg-black bg-opacity-50'>
        <div className='fixed left-1/3 top-1/4 bg-white rounded shadow p-3 w-2/5'>
          <div className='flex justify-end'>
            <button type='button' onClick={() => esconderModal()} className='flex justify-end font-bold text-xl -mt-3 py-1 px-3 cursor-pointer'>&times;</button>
          </div>
            {cargando ? 'Cargando...' : (
              <>
                {alerta.mensaje && <Alerta/>}
                <div className='flex gap-3 items-center p-4'>
                  
                  <Image
                    src={`/assets/img/${producto?.imagen}.jpg`}
                    width={200}
                    height={200}
                    alt={`Imagen producto ${producto?.nombre}`}
                    className='rounded'
                  />
                  <div>
                    <p className='font-bold text-xl'>{producto?.nombre}</p>
                    <p className='text-amber-500 font-black text-4xl my-1'>{formatearDinero(producto?.precio)}</p>
                    <p>Cantidad:</p>
                    <div className='flex gap-2 my-2'>
                      <button type='button' className='text-xl' onClick={()=>disminuirCantidad()}>-</button>
                      <p className='font-semibold text-xl'>{cantidad}</p>
                      <button type='button' className='text-xl' onClick={()=>aumentarCantidad()}>+</button>
                    </div>
                    <button type='button' className='w-full text-center font-semibold text-white bg-indigo-700 hover:bg-indigo-900 py-2 rounded'
                      onClick={()=>agregarProductoPedido({...producto, cantidad})}
                      >Agregar al Pedido
                    </button>                  
                  </div>
                </div>
              </>
            )}
        </div>
    </div>
  )
}

export default Modal