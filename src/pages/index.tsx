import {useEffect, useState} from 'react'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import useQuiosco from '../../hooks/useQuiosco'

const inter = Inter({ subsets: ['latin'] })

export default function Home({categoriasData}) {
  const {categorias, setCategorias} = useQuiosco()
  useEffect(()=>{
    setCategorias(categoriasData)
  },[])
  console.log(categorias);
  return (
    <>
      <Layout
        title='Inicio'
        description = 'QuiscoApp es una paltaforma que permite al negocio N levantar pedidos de manera dinámica y eficiente'
      >
        
        <p className='p-4'>párrafo de ejemplo</p>
        <h1 className='s'>heading de ejemplo</h1>
      </Layout>
    </>
  )
}

export async function getServerSideProps(){
  try {
    const categoriasQuery = await fetch(`${process.env.API_URL}/categorias`)
    const categoriasData = await categoriasQuery.json();
    return {
      props: {
        categoriasData
      }
    }
  } catch (error) {
    console.log(error);
  }
}