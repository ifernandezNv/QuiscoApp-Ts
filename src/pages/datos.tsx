import React from 'react'
import Layout from '@/components/Layout'
import useQuiosco from 'hooks/useQuiosco'
import Alerta from '@/components/Alerta'
import { formatearDinero } from 'helpers'
function datos() {
  const {nombre, setNombre, guardarOrden, alerta, orden, setOrden, total} = useQuiosco()
  return (
    <Layout
        title={'Datos y Total del pedido'}
        description='Mira un desglose de tu pedido, el total del mismo y espera unos minutos para disfrutar tu pedido'
    >
        <h1 className='font-black text-4xl my-4'>Total y Confirmar Pedido</h1>
        <p className='border-b py-2'>Confirma tu pedido a continuación</p>
        {alerta.mensaje && <Alerta/>}
        <p>Ingresa tu nombre:</p>
        <input type="text" className='rounded bg-gray-200 p-2 w-1/4' placeholder='Tu nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)} />
        <p className='text-xl font-bold my-2'>Total: {formatearDinero(total)}</p>
        <button type='button' onClick={()=>{
          setOrden({...orden, nombre})
          guardarOrden()
        }} className={`${nombre !=='' && nombre.length > 3 ? 'bg-indigo-700 hover:bg-indigo-900 transition-all' : 'bg-indigo-400 cursor-not-allowed' } block rounded p-2 my-2 text-center text-white font-semibold`}>Confirmar Pedido</button>
    </Layout>
  )
}

export default datos