import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Layout from '@/components/Layout'
import ProductoCarrito from '@/components/ProductoCarrito'
import { formatearDinero, formatearFecha } from 'helpers'
function resumen() {
  const {orden} = useQuiosco()
  console.log(formatearFecha(new Date()))
  
  return (
    <Layout
        title={'Resumen'}
        description='Visualiza el progreso del pedido que haz realizado'
    >
        <h1 className='font-black text-4xl my-4'>Resumen</h1>
        <p>{orden?.pedido.length ? 'Revisa, administra y edita los productos agregados a tu pedido' : 'No haz agregado productos a tu orden, comienza agregandolos'}</p>
        <div className='flex flex-col gap-4'>
          {orden?.pedido.map(productoState => <ProductoCarrito key={productoState.id} producto={productoState}/> )}
        </div>
    </Layout>
  )
}

export default resumen