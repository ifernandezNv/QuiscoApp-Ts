import {createContext, useState, useEffect, ReactNode} from 'react'
import { Producto } from 'prisma/data/productos'
import { Categoria } from 'prisma/data/categorias'

interface QuiscoProps{
    children: ReactNode
}

interface TCategoria {
    id: number
    nombre: string
    productos: Producto[]
}

const QuiscoContext = createContext({})

function QuiscoProvider({children} : QuiscoProps){
    
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [productos, setProductos] = useState<Producto[]>([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<TCategoria>({id: 0, nombre: '', productos: []});
    
    async function getCategorias(){
        try {
          const categoriasQuery = await fetch(`${process.env.API_URL}/categorias`)
          const categoriasData = await categoriasQuery.json();
          setCategorias(categoriasData);
        } catch (error) {
          console.log(error);
        }
    }
    
    async function getInfoCategoria(){
        try {
          const data = await fetch(`${process.env.API_URL}/categoria`);
          
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <QuiscoContext.Provider 
            value={{
                productos,
                setProductos,
                categorias,
                setCategorias,
                categoriaSeleccionada,
                setCategoriaSeleccionada,
                getCategorias,
                getInfoCategoria
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