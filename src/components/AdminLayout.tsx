import React from 'react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Image from 'next/image'
interface LayoutProps {
    children: ReactNode
}
function AdminLayout({children} : LayoutProps) {
  return (
    <>
        <Head>
            <title>QuiscoApp - Admin</title>
            <meta name='description' content='Panel de administración de QuiscoApp que permite al personal administrar los pedidos recibidos durante la jornada'/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex flex-col md:flex-row gap-4 lg:gap-8'>
            <aside className='w-full overflow-hidden h-screen bg-white md:w-1/3 py-10 px-4 flex flex-col gap-4 items-center justify-center'>
              <Image
                    alt='Logo de QuiscoApp'
                    src={'/assets/img/logo.svg'}
                    width={150}
                    height={150}
                />
            </aside>
            <main className='h-screen overflow-y-scroll w-full p-10'>
                {children}
            </main>
        </div>
    </>
  )
}

export default AdminLayout