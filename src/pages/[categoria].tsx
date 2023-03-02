import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import useQuiosco from 'hooks/useQuiosco';
function Categoria() {
    const {filtro, setFiltro} = useQuiosco()
    const router = useRouter();
    useEffect(()=>{
        setFiltro(router.query.categoria);
    },[router])
  return (
    <Layout
        title={filtro}
        description=''
    >

    </Layout>
  )
}

export default Categoria