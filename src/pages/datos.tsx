import React from 'react'
import Layout from '@/components/Layout'
import useQuiosco from 'hooks/useQuiosco'
function datos() {
  return (
    <Layout
        title={'Datos y Total del pedido'}
        description='Mira un desglose de tu pedido, el total del mismo y espera unos minutos para disfrutar tu pedido'
    >
        <h1>Datos y Total</h1>
    </Layout>
  )
}

export default datos