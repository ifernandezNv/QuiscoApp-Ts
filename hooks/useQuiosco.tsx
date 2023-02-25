import {useContext} from 'react'
import QuiscoContext from 'context/QuiscoProvider'
function useQuiosco() {
  return useContext(QuiscoContext)
}

export default useQuiosco