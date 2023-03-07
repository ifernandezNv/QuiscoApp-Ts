import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco'
import Producto from '@/components/Producto'
import Modal from '@/components/Modal'
function Categoria() {
    const {categoriaInfo, productos, getCategorias, verModal} = useQuiosco()
    const router = useRouter()
    useEffect(()=>{
      getCategorias()
      console.log(productos)
    },[])

  return (
    <Layout
        title={`Menú ${categoriaInfo?.nombre}`}
        description={`Selecciona los productos de la categoria ${categoriaInfo?.nombre}, selecciona la cantidad deseada y disfruta tu comida`}
    >
      <h1 className='font-bold text-4xl my-2'>{categoriaInfo?.nombre}</h1>
      <p>Comienza seleccionando los productos que deseas</p>
      <p>Espera un momento y disfruta tu comida</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
        {productos?.map(producto => <Producto key={producto.id} producto={producto}/>)}
      </div>
      {verModal && 
        <Modal
        />
      }
    </Layout>
  )
}


export default Categoria