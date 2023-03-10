import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
function Alerta() {
    const {alerta} = useQuiosco()
  return (
    <div className={`${alerta.tipo === 'error' ? 'bg-red-600' : 'bg-green-600'} text-center text-white font-bold text-xl p-3 rounded shadow`}>
      <p>{alerta.mensaje}</p>
    </div>
  )
}

export default Alerta