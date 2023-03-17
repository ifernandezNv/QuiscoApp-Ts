import {useContext} from 'react'
import QuioscoContext from 'context/QuioscoProvider'
function useQuiosco() {
  return useContext(QuioscoContext)
}

export default useQuiosco