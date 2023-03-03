import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco';
function Categoria() {
    const {filtro, setFiltro, categoriaSeleccionada} = useQuiosco()
    const router = useRouter();
    useEffect(()=>{
        setFiltro(router.query.categoria);
    },[router])
  return (
    <Layout
        title={`Menú ${categoriaSeleccionada}`}
        description={`Selecciona los productos de la categoria ${categoriaSeleccionada}, selecciona la cantidad deseada y disfruta tu comida`}
    >
      <h1 className='font-bold text-4xl my-2'>{categoriaSeleccionada}</h1>
      <p>Comienza seleccionando los productos que deseas</p>
      <p>Espera un momento y disfruta tu comida</p>
    </Layout>
  )
}

export default Categoria