import React from 'react'
import Layout from '@/components/Layout'
import useQuiosco from 'hooks/useQuiosco'

function datos() {
  return (
    <Layout
        title={'Datos y Total del pedido'}
        description='Mira un desglose de tu pedido, el total del mismo y espera unos minutos para disfrutar tu pedido'
    >
        <h1 className='font-black text-4xl my-4'>Total y Confirmar Pedido</h1>
        <p>Confirma tu pedido a continuación</p>
    </Layout>
  )
}

export default datos