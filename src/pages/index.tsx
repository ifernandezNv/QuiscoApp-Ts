import {useEffect} from 'react'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  
  useEffect(()=>{
    router.push('/cafe')
  },)

  return (
    <>
      <Layout
        title='Inicio'
        description = 'QuiscoApp es una paltaforma que permite al negocio N levantar pedidos de manera dinámica y eficiente'
      >
      </Layout>
    </>
  )
}
