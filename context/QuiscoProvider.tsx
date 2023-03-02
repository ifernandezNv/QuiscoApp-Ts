import {createContext, useState, useEffect, ReactNode} from 'react'
import { Producto } from 'prisma/data/productos'
import { Categoria } from 'prisma/data/categorias'

interface QuiscoProps{
    children: ReactNode
}

const QuiscoContext = createContext({})

function QuiscoProvider({children} : QuiscoProps){
    
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [productos, setProductos] = useState<Producto[]>([]);
    const [filtro, setFiltro] = useState('cafe');
    return (
        <QuiscoContext.Provider 
            value={{
                productos,
                setProductos,
                categorias,
                setCategorias,
                filtro,
                setFiltro,
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