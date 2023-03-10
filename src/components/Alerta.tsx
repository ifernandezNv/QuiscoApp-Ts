import React from 'react'
import useQuiosco from 'hooks/useQuiosco'
function Alerta() {
    const {alerta, eliminarAlerta} = useQuiosco()
  return (
    <div>Alerta</div>
  )
}

export default Alerta