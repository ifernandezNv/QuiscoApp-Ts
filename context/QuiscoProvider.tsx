import {createContext, useState, useEffect, ReactNode} from 'react'
import { Producto } from 'prisma/data/productos'
import { Categoria } from 'prisma/data/categorias'

interface QuiscoProps{
    children: ReactNode
}
const QuiscoContext = createContext({})

function QuiscoProvider({children} : QuiscoProps){
    return (
        <QuiscoContext.Provider 
            value={{

            }}
        >
            {children}
        </QuiscoContext.Provider>
    )
}
export {
    QuiscoProvider
}
export default QuiscoContext