import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco';

function Categoria() {
    const {categoriaSeleccionada, categorias, setCategorias, productos, setProductos, getCategorias} = useQuiosco()
    
    const router = useRouter();

    useEffect(()=>{
      getCategorias();
      // getInfoCategoria();
    },[])
  
    useEffect(()=>{
        if(categoriaSeleccionada?.productos){
          setProductos(categoriaSeleccionada.productos)
        }
    },[router])
    
  return (
    <Layout
        title={`Menú ${categoriaSeleccionada?.nombre}`}
        description={`Selecciona los productos de la categoria ${categoriaSeleccionada?.nombre}, selecciona la cantidad deseada y disfruta tu comida`}
    >
      <h1 className='font-bold text-4xl my-2'>{categoriaSeleccionada}</h1>
      <p>Comienza seleccionando los productos que deseas</p>
      <p>Espera un momento y disfruta tu comida</p>
    </Layout>
  )
}


export default Categoria