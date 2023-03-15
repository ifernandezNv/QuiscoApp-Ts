import useQuiosco from 'hooks/useQuiosco'
import AdminLayout from '@/components/AdminLayout'
import Orden from '@/components/Orden'
import { TOrden } from 'helpers/types'
function Admin() {
    const {ordenes} = useQuiosco()
  return (
    <AdminLayout>
        <h1 className='font-black text-4xl my-4 capitalize'>Administrar órdenes recibidas</h1>
        <p className='border-b pb-2'>Marca como completadas las órdenes que hayan sido finalizadas por Cocina</p>
        <div className='flex flex-col gap-4 mt-4'>
          {ordenes.map((ordenState: TOrden) => <Orden key={ordenState.id} ordenState={ordenState}/>)}
        </div>
    </AdminLayout>
  )
}

export default Admin