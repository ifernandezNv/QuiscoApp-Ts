import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco'
import Producto from '@/components/Producto'
import Modal from '@/components/Modal'
function Categoria() {
    const {categoriaInfo, productos, getCategorias, verModal, cargando} = useQuiosco()
    const router = useRouter()
    useEffect(()=>{
      getCategorias()
    },[])

  return (
    <Layout
        title={`Menú ${categoriaInfo?.nombre}`}
        description={`Selecciona los productos de la categoria ${categoriaInfo?.nombre}, selecciona la cantidad deseada y disfruta tu comida`}
    >
      {cargando ? 'Cargando...' : (
        <>
          <div className='w-1/6 hidden'></div>
          <h1 className='font-bold text-4xl my-2'>{categoriaInfo?.nombre}</h1>
          <p>Comienza seleccionando los productos que deseas</p>
          <p className='border-b py-2'>Espera un momento y disfruta tu comida</p>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-3'>
            {productos?.map(producto => <Producto key={producto.id} producto={producto}/>)}
          </div>
          {verModal && 
            <Modal
            />
          }
        </>
      )}
    </Layout>
  )
}


export default Categoria