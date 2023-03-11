import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Layout from '@/components/Layout'
import ProductoCarrito from '@/components/ProductoCarrito'
import ModalConfirmacion from '@/components/ModalConfirmacion'
import Modal from '@/components/Modal'
function resumen() {
  const {orden, verModalConfirmacion, verModal} = useQuiosco()
  
  return (
    <Layout
        title={'Resumen'}
        description='Visualiza el progreso del pedido que haz realizado'
    >
        <h1 className='font-black text-4xl my-4'>Resumen de tu Pedido</h1>
        <p>{orden?.pedido.length ? 'Revisa, administra y edita los productos agregados a tu pedido' : 'No haz agregado productos a tu orden, comienza agregandolos'}</p>
        <div className='w-2/3'></div>
        {verModalConfirmacion && <ModalConfirmacion/>}
        {verModal && <Modal/>}
        <div className='flex flex-col gap-4 mt-5 justify-center'>
          {orden?.pedido.map(productoState => <ProductoCarrito key={productoState.id} productoState={productoState}/> )}
        </div>
    </Layout>
  )
}

export default resumen