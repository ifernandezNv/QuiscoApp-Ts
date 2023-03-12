import React from 'react'
import Layout from '@/components/Layout'
import useQuiosco from 'hooks/useQuiosco'

function datos() {
  const {nombre, setNombre} = useQuiosco()
  return (
    <Layout
        title={'Datos y Total del pedido'}
        description='Mira un desglose de tu pedido, el total del mismo y espera unos minutos para disfrutar tu pedido'
    >
        <h1 className='font-black text-4xl my-4'>Total y Confirmar Pedido</h1>
        <p className='border-b py-2'>Confirma tu pedido a continuación</p>
        <p>Inserta tu nombre:</p>
        <input type="text" placeholder='Tu nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)} />
        <button type='button' className={`${nombre !=='' && nombre.length > 3 ? 'bg-indigo-700 hover:bg-indigo-900 transition-all' : 'bg-indigo-400 cursor-not-allowed' } block rounded p-2 my-2 text-center text-white font-semibold`}>Registrar Pedido</button>
    </Layout>
  )
}

export default datos