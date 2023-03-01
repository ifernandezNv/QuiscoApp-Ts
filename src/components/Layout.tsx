import React from 'react'
import Sidebar from './Sidebar'
import Head from 'next/head'
import { ReactNode } from 'react'

interface LayoutProps {
    title: string,
    description: string
    children: ReactNode
}
function Layout({title, description, children} : LayoutProps) {
  return (
    <>
        <Head>
            <title>QuiscoApp - {title}</title>
            <meta name='description' content={description}/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className='flex flex-col md:flex-row gap-4 lg:gap-8'>
            <Sidebar/>
            <main className='overflow-y-scroll w-full p-10'>
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout