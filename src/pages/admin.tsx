import { useEffect } from 'react'
import useQuiosco from 'hooks/useQuiosco'
import AdminLayout from '@/components/AdminLayout'
import Orden from '@/components/Orden'
import { TOrden, TAlerta } from 'helpers/types'
import Alerta from '@/components/Alerta'
import useSWR from 'swr'

function Admin() {
    const {ordenes, setOrdenes}: TOrden[] = useQuiosco()
    const {alerta}: TAlerta = useQuiosco()
    const fetcher = ()=> fetch(`/api/ordenes`).then(datos => datos.json())
    const {data, error, isLoading} = useSWR(`/api/ordenes`, fetcher, {
      refreshInterval: 100 //Configuración que ejecuta la consulta de datos cada 100 ms
    })
    useEffect(()=>{
      setOrdenes(data)
    })
  return (
    <AdminLayout>
        <h1 className='font-black text-4xl my-4 capitalize'>Administrar órdenes recibidas</h1>
        <p className='border-b pb-2'>Marca como completadas las órdenes que hayan sido finalizadas por Cocina</p>
        <div className='flex flex-col gap-4 mt-4'>
          {alerta.mensaje !== '' && <Alerta/>}
          {ordenes?.length > 0 ? 
            ordenes?.map((ordenState: TOrden) => <Orden key={ordenState.id} ordenState={ordenState}/>)
          :
            (<p>No hay ordenes pendientes</p>)}
        </div>
    </AdminLayout>
  )
}

export default Admin