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
    id?: number
    nombre: string
    productos: Producto[]
}

interface TOrden {
    id?: number
    pedido: unknown
    fecha: string
    total: number
    nombre: string
}
interface TAlerta {
    mensaje: string
    tipo: string
}
const InitialValue : '1/6' | '2/3' | 'full' = '1/6'

const QuiscoContext = createContext({})

function QuiscoProvider({children} : QuiscoProps){
    
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [productos, setProductos] = useState<Producto[]>([])
    const [producto, setProducto] = useState<Producto>({nombre: '', precio: 0, imagen: '', categoriaId: 0, cantidad: 0})
    const [productoBuscar, setProductoBuscar] = useState<number>(0)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number>(0)
    const [categoriaInfo, setCategoriaInfo] = useState<TCategoria>({nombre: '', productos: []})
    const [verModal, setVerModal] = useState<boolean>(false)
    const [cantidad, setCantidad] = useState<number>(0)
    const [cargando, setCargando] = useState<boolean>(false)
    const [progreso, setProgreso] = useState<string>(InitialValue)
    const [orden, setOrden] = useState<TOrden>({pedido: [], fecha: '', total: 0, nombre: ''})
    const [ordenes, setOrdenes] = useState<TOrden[]>([])
    const [alerta, setAlerta] = useState<TAlerta>({mensaje: '', tipo: ''})

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
        getOrdenes()
    },[])

    useEffect(()=>{
        if(router?.pathname){
            mostrarProgreso()
        }
    },[router.pathname])

    function eliminarAlerta(): void{
        setTimeout(() => {
            setAlerta({mensaje: '', tipo: ''})    
        }, 3000)
    }

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

    async function getOrdenes(){   
        setCargando(true)     
        try {
          const ordenesQuery = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ordenes`)
          const ordenesData = await ordenesQuery.json()
          setOrdenes(ordenesData)
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

    function agregarProductoPedido(producto: {}): void{
        if(producto.cantidad === 0){
            setAlerta({mensaje: 'Cantidad no válida', tipo: 'error'})
            return 
        }
        const ordenCopia = orden
        const productosCopia = orden.pedido
        const productoRepetido = productosCopia.find(productoState => productoState.id === producto.id)
        if(productoRepetido){
            const productosFiltrado = productosCopia.map( productoState => productoState.id === producto.id ? producto : productoState)
            ordenCopia.pedido = productosFiltrado
            setOrden(ordenCopia)
            setAlerta({mensaje: 'Producto agregado correctamente', tipo: 'success'})
            setTimeout(() => {
                esconderModal()
            }, 2000)
            return
        }
        productosCopia.push(producto)
        ordenCopia.pedido = productosCopia
        setOrden(ordenCopia)
        setAlerta({mensaje: 'Producto agregado correctamente', tipo: 'success'})
        setTimeout(() => {
            esconderModal()    
        }, 2000)
    }

    function eliminarProducto(id: number): void{
        const copiaOrden = orden
        const productosFiltrados = orden.pedido.filter(producto => producto.id !== id)
        copiaOrden.pedido = productosFiltrados
        setOrden(copiaOrden)
    }

    function esconderModal(): void{
        setVerModal(!verModal)
        setCantidad(0)
    }

    function aumentarCantidad(): void{
        if(cantidad < 10){
            setCantidad(cantidad +1)
        }
    }
    function disminuirCantidad(): void{
        if(cantidad >0){
            setCantidad(cantidad-1)
        }
    }
    
    function mostrarProgreso(): void{
        switch(router.pathname){
            case '/resumen':
                setProgreso('2/3')
                break;
            case '/datos':
                setProgreso('full')
                break;
            default:
                setProgreso('1/6')
                break;
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
                ordenes,
                orden,
                getCategorias,
                getInfoCategoria,
                getInfoProducto,
                getOrdenes,
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
                agregarProductoPedido,
                alerta,
                eliminarAlerta
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