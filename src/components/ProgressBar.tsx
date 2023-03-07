import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Link from 'next/link'
function ProgressBar() {
  return (
    <div className='pt-2 pb-3 flex justify-between border-b'>
        <Link href='/' className='font-bold text-xl '>Menú</Link>
        <Link href='/' className='font-bold text-xl '>Resumen</Link>
        <Link href='/' className='font-bold text-xl '>Datos y Total</Link>
    </div>
  )
}

export default ProgressBar