import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import Layout from '@/components/Layout'
import ProductoCarrito from '@/components/ProductoCarrito'
import ModalConfirmacion from '@/components/ModalConfirmacion'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router'
function resumen() {
  
  const {orden, verModalConfirmacion, verModal, calcularTotal} = useQuiosco()
  const router = useRouter()
  return (
    <Layout
        title={'Resumen'}
        description='Visualiza el progreso del pedido que haz realizado'
    >
        <h1 className='font-black text-4xl my-4'>Resumen de tu Pedido</h1>
        {orden?.pedido.length ? (
          <>
            <p className='border-b py-2'>Revisa, administra y edita los productos agregados a tu pedido</p>
            <button onClick={()=>{
              router.push('/datos')
              calcularTotal()
            }} className='p-2 text-white text-center font-semibold rounded bg-indigo-700 hover:bg-indigo-900 transition-all mt-2'>Confrmar Pedido</button>
            <div className='w-2/3'></div>
            {verModalConfirmacion && <ModalConfirmacion/>}
            {verModal && <Modal/>}
            <div className='flex flex-col gap-4 mt-2 justify-center'>
              {orden?.pedido.map(productoState => <ProductoCarrito key={productoState.id} productoState={productoState}/> )}
            </div> 
          </>
        ): 
        <p className='border-b py-2'>No haz agregado productos a tu orden, comienza agregandolos</p>
        }
    </Layout>
  )
}

export default resumen