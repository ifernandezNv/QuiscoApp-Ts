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

interface TOrden {
    id: number
    pedido: []
    fecha: string
    total: number
    nombre: string
}
const InitialValue : 'menu' | 'resumen' | 'total' = 'menu';

const QuiscoContext = createContext({})

function QuiscoProvider({children} : QuiscoProps){
    
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [productos, setProductos] = useState<Producto[]>([])
    const [producto, setProducto] = useState<Producto>({nombre: '', precio: 0, imagen: '', categoriaId: 0})
    const [productoBuscar, setProductoBuscar] = useState<number>(0)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number>(0)
    const [categoriaInfo, setCategoriaInfo] = useState<TCategoria>({id: 0, nombre: '', productos: []})
    const [verModal, setVerModal] = useState<boolean>(false)
    const [cantidad, setCantidad] = useState<number>(0)
    const [cargando, setCargando] = useState<boolean>(false)
    const [progreso, setProgreso] = useState<string>(InitialValue)
    const [orden, setOrden] = useState<TOrden[]>([])
    
    const router = useRouter()

    useEffect(()=>{
        if(categoriaSeleccionada != 0){
            getInfoCategoria()
        }
    },[categoriaSeleccionada])

    useEffect(()=>{
        getInfoProducto()
    },[productoBuscar])
    
    useEffect(()=>{
        getCategorias()
    },[])
    useEffect(()=>{
        const url = router.asPath.split('/');
        if(url[1] === 'menu' || url[1] === 'resumen' || url[1] === 'datos'){
            setProgreso(url[1])
        }
        console.log(progreso);
        
    },[router])

    async function getCategorias(){   
        setCargando(true)     
        try {
          const categoriasQuery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categorias`)
          const categoriasData = await categoriasQuery.json()
          setCategorias(categoriasData)
          router.push('/cafe')
        } catch (error) {
          console.log(error)
        }
        setCargando(false)
    }

    async function getInfoCategoria(){
        setCargando(true)
        try {
          const categoriaQuery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categoria?id=${Number(categoriaSeleccionada)}`)
          const categoriaData = await categoriaQuery.json()
          setCategoriaInfo(categoriaData[0])          
          setProductos(categoriaData[0].productos)
        } catch (error) {
          console.log(error)
        }
        setCargando(false)
    }
    
    async function getInfoProducto(){
        setCargando(true)
        try {
            const productoQuery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/producto?id=${Number(productoBuscar)}`)
            const productoData = await productoQuery.json()
            setProducto(productoData[0])
        } catch (error) {
            console.log(error)
            
        }
        setCargando(false)
    }

    function esconderModal(){
        setVerModal(!verModal)
    }

    function aumentarCantidad(){
        if(cantidad < 10){
            setCantidad(cantidad +1)
        }
    }
    function disminuirCantidad(){
        if(cantidad >0){
            setCantidad(cantidad-1)
        }
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
                esconderModal,
                cantidad,
                aumentarCantidad,
                disminuirCantidad,
                cargando, 
                setCargando
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