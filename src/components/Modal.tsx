import React, { use } from 'react'
import useQuiosco from 'hooks/useQuiosco'
function Modal() {
    const {esconderModal} = useQuiosco()
  return (
    <div className='block fixed z-index-1 left-1/3 top-1/2 w-full h-screen bg-black bg-opacity-10'>
        <div className='bg-white rounded shadow p-3 w-1/3'>
            <p onClick={() => esconderModal()} className='justify-right font-bold text-xl text-right py-1 px-3 cursor-pointer'>&times;</p>
            
        </div>
    </div>
  )
}

export default Modal