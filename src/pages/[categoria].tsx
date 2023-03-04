import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco';

function Categoria() {
    const {categoriaInfo, categorias, setCategorias, productos, setProductos, getCategorias} = useQuiosco()
    
    const router = useRouter();

    useEffect(()=>{
      getCategorias();
    },[])
  
    

  return (
    <Layout
        title={`Menú ${categoriaInfo?.nombre}`}
        description={`Selecciona los productos de la categoria ${categoriaInfo?.nombre}, selecciona la cantidad deseada y disfruta tu comida`}
    >
      <h1 className='font-bold text-4xl my-2'>{categoriaInfo?.nombre}</h1>
      <p>Comienza seleccionando los productos que deseas</p>
      <p>Espera un momento y disfruta tu comida</p>
    </Layout>
  )
}


export default Categoria