import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Layout from '@/components/Layout'
function resumen() {
  
  return (
    <Layout
        title={'Resumen'}
        description='Visualiza el progreso del pedido que haz realizado '
    >
        <h1 className='font-black text-4xl my-4'>Resumen</h1>
        <p>Revisa tu pedido</p>
    </Layout>
  )
}

export default resumen