import React from 'react'
import Link from 'next/link'
import Layout from '@/components/Layout'
function Error() {
  return (
    <Layout
        title='Error'
        description=''
    >
        <p>La página a la que intentaste entrar no existe</p>
        <Link href='/'>Volver al inicio</Link>
    </Layout>
  )
}

export default Error