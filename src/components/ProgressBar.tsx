import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Link from 'next/link'
function ProgressBar() {
  return (
    <>
      <div className='pt-2 pb-3 flex justify-between'>
          <Link href='/' className='font-bold text-xl '>Menú</Link>
          <Link href='/resumen' className='font-bold text-xl '>Resumen</Link>
          <Link href='/datos' className='font-bold text-xl '>Datos y Total</Link>
      </div>
      <div className='p-1 rounded bg-gray-300'></div>
      <div className='p-1 rounded bg-amber-500 w-1/12'></div>
    </>
  )
}

export default ProgressBar