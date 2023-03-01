import {useEffect, useState} from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { PrismaClient } from '@prisma/client'
import useQuiosco from '../../hooks/useQuiosco'

const inter = Inter({ subsets: ['latin'] })
const prisma = new PrismaClient();

export default function Home({categoriasQuery}) {
  const {categorias, setCategorias} = useQuiosco()
  useEffect(()=>{
    setCategorias(categoriasQuery)
  },[])
  return (
    <>
      <Head>
        <title>QuiscoApp - Home</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    await prisma.$connect()
    const categoriasQuery = await prisma.categoria.findMany();
    console.log(categoriasQuery);
    return {
      props: {
        categoriasQuery
      }
    }
  } catch (error) {
    
  }
}