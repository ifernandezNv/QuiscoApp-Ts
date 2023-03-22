import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Link from 'next/link'
function ProgressBar() {
  const {progreso} = useQuiosco()
  return (
    <div className='mb-4 sticky'>
      <div className='pt-2 pb-3 flex justify-between'>
          <Link href='/cafe' className='font-bold text-xl '>Menú</Link>
          <Link href='/resumen' data-cy='resumen' className='font-bold text-xl '>Resumen</Link>
          <Link href='/datos' data-cy='datos' className='font-bold text-xl '>Datos y Total</Link>
      </div>
      <div className='absolute w-full'>
        <div className='p-1 rounded bg-gray-300'></div>
        <div data-cy='progreso' className={`p-1 rounded w-${progreso} bg-amber-500 absolute left-0 top-0 transition-all`}></div>
      </div>
      
    </div>
  )
}

export default ProgressBar