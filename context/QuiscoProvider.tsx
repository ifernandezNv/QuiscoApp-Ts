import {createContext, useState, useEffect, ReactNode} from 'react'
import { Producto } from 'prisma/data/productos'
import { Categoria } from 'prisma/data/categorias'
import { useRouter } from 'next/router'
/*
    Porcentajes de la barra de progreso
    Menu = 16.6667% (w-1/6)
    Resumen: 66.6667% (w-4/6)
    Datos y Total: 100% (w-full)
*/
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
    pedido: unknown
    fecha: string
    total: number
    nombre: string
}
const InitialValue : '1/6' | '2/3' | 'full' = '1/6'

const QuiscoContext = createContext({})

function QuiscoProvider({children} : QuiscoProps){
    
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [productos, setProductos] = useState<Producto[]>([])
    const [producto, setProducto] = useState<Producto>({nombre: '', precio: 0, imagen: '', categoriaId: 0, cantidad: 0})
    const [productoBuscar, setProductoBuscar] = useState<number>(0)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number>(0)
    const [categoriaInfo, setCategoriaInfo] = useState<TCategoria>({id: 0, nombre: '', productos: []})
    const [verModal, setVerModal] = useState<boolean>(false)
    const [cantidad, setCantidad] = useState<number>(0)
    const [cargando, setCargando] = useState<boolean>(false)
    const [progreso, setProgreso] = useState<string>(InitialValue)
    const [orden, setOrden] = useState<TOrden>({id: 0, pedido: [], fecha: '', total: 0, nombre: ''})
    const [ordenes, setOrdenes] = useState<TOrden[]>([])
    
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
        const url = router.asPath.split('/')
        switch(url[1]){
            case 'resumen':
                setProgreso('2/3')
                break
            case 'datos':
                setProgreso('full')
                break
            default:
                setProgreso('1/6')
                break
        }
        
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
    function agregarProductoPedido(){

    }
    function eliminarProducto(id){
        const copiaOrden = orden
        const productosFiltrados = orden.pedido.filter(producto => producto.id !== id)
        copiaOrden.pedido = productosFiltrados;
        setOrden(copiaOrden)
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
                setCargando,
                progreso,
                eliminarProducto,
                agregarProductoPedido
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