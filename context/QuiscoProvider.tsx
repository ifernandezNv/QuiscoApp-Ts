import {createContext, useState, useEffect, ReactNode} from 'react'
import { Producto } from 'prisma/data/productos'
import { Categoria } from 'prisma/data/categorias'
import { useRouter } from 'next/router'
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
    
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [productos, setProductos] = useState<Producto[]>([])
    const [producto, setProducto] = useState<Producto>({nombre: '', precio: 0, imagen: '', categoriaId: 0})
    const [productoBuscar, setProductoBuscar] = useState<number>(0)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number>(0)
    const [categoriaInfo, setCategoriaInfo] = useState<TCategoria>({id: 0, nombre: '', productos: []})
    const [verModal, setVerModal] = useState<boolean>(false);

    const router = useRouter()
    useEffect(()=>{
        if(categoriaSeleccionada != 0){
            getInfoCategoria()
        }
    },[categoriaSeleccionada])

    async function getCategorias(){        
        try {
          const categoriasQuery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias`)
          const categoriasData = await categoriasQuery.json();
          setCategorias(categoriasData);
          router.push('/cafe')
        } catch (error) {
          console.log(error);
        }
    }

    async function getInfoCategoria(){
        try {
          const categoriaQuery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categoria?id=${Number(categoriaSeleccionada)}`);
          const categoriaData = await categoriaQuery.json()
          setCategoriaInfo(categoriaData[0])          
          setProductos(categoriaData[0].productos)
        } catch (error) {
          console.log(error);
        }
    }
    
    async function getInfoProducto(){
        try {
            const productoQuery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto?id=${Number(productoBuscar)}`);
            const productoData = await productoQuery.json();
            setProductos(productoData[0]);
        } catch (error) {
            console.log(error);
            
        }
    }

    function esconderModal(){
        setVerModal(!verModal);
    }
    return (
        <QuiscoContext.Provider 
            value={{
                productos,
                setProductos,
                producto,
                setProducto,
                productoBuscar,
                setProductoBuscar,
                categorias,
                setCategorias,
                categoriaSeleccionada,
                setCategoriaSeleccionada,
                getCategorias,
                getInfoCategoria,
                getInfoProducto,
                categoriaInfo,
                verModal,
                esconderModal
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