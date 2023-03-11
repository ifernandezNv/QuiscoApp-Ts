import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
function ModalConfirmacion() {
    const {esconderModalConfirmacion, eliminarProducto} = useQuiosco()
  return (
    <div className='block fixed z-index-1 left-0 top-0 w-full h-screen bg-black bg-opacity-50'>
        <div className='fixed left-1/3 top-1/4 bg-white rounded shadow p-3 w-2/5'>
          <div className='flex justify-end'>
            <button type='button' onClick={() => esconderModalConfirmacion()} className='flex justify-end font-bold text-xl -mt-3 py-1 px-3 cursor-pointer'>&times;</button>
          </div>
            <div className='flex gap-3 items-center p-4'>
                <p>¿Estás seguro de eliminar este producto?</p>
                <button onClick={()=>eliminarProducto(0)} type='button'>Sí, eliminar</button>
                <button onClick={()=>esconderModalConfirmacion()} type='button'>Cancelar</button>
            </div>
        </div>
    </div>
  )
}

export default ModalConfirmacion