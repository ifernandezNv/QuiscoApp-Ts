import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
import AdminLayout from '@/components/AdminLayout'
function admin() {
    const {ordenes} = useQuiosco()
    console.log(ordenes);
  return (
    <AdminLayout>
        <h1>desde admin</h1>
    </AdminLayout>
  )
}

export default admin