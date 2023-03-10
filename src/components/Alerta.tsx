import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
function Alerta() {
    const {alerta, eliminarAlerta} = useQuiosco()
    if(alerta.mensaje){
      eliminarAlerta()
    }
  return (
    <div className={`${alerta.tipo === 'error' ? 'bg-red-600' : 'bg-green-600'} text-center text-white font-bold text-xl capitalize py-1 rounded shadow mx-5 my-3`}>
      <p>{alerta.mensaje}</p>
    </div>
  )
}

export default Alerta