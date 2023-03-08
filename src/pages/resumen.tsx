import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Layout from '@/components/Layout'
function resumen() {

  return (
    <Layout
        title={'Resumen'}
        description='Visualiza el progreso del pedido que haz realizado '
    >
        <h1>Resumen</h1>
    </Layout>
  )
}

export default resumen