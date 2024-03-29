import {createContext, useState, useEffect, ReactNode, SetStateAction, Dispatch} from 'react'
import { useRouter } from 'next/router'
import { TAlerta, TCategoria, TOrden, TProducto } from 'helpers/types'
/*
    Porcentajes de la barra de progreso
    Menu = 16.6667% (w-1/6)
    Resumen: 66.6667% (w-4/6)
    Datos y Total: 100% (w-full)
*/
interface QuioscoProps{
    children: ReactNode
}
type TQuiosco = {
    [key: string]: any;
}
const InitialValue : '1/6' | '2/3' | 'full' = '1/6'

const QuioscoContext = createContext<TQuiosco>({})

function QuioscoProvider({children} : QuioscoProps){
    
    const [categorias, setCategorias] = useState<TCategoria[]>([])
    const [productos, setProductos] = useState<TProducto[]>([])
    const [producto, setProducto] = useState<TProducto>({id: 0, nombre: '', precio: 0, imagen: '', categoriaId: '0', cantidad: 0})
    const [productoBuscar, setProductoBuscar] = useState<number>(0)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number>(1)
    const [categoriaInfo, setCategoriaInfo] = useState<TCategoria>({id:0, nombre: '', productos: []})
    const [verModal, setVerModal] = useState<boolean>(false)
    const [verModalConfirmacion, setVerModalConfirmacion] = useState<boolean>(false)
    const [cantidad, setCantidad] = useState<number>(0)
    const [cargando, setCargando] = useState<boolean>(false)
    const [progreso, setProgreso] = useState<string>(InitialValue)
    const [orden, setOrden] = useState<TOrden>({pedido: [], fecha: new Date(), total: 0, nombre: '', completado: false})
    const [ordenes, setOrdenes] = useState<TOrden[]>([])
    const [alerta, setAlerta] = useState<TAlerta>({mensaje: '', tipo: ''})
    const [total, setTotal] = useState<number>(0)
    const [nombre, setNombre] = useState<string>('')
    const router = useRouter()

    useEffect(()=>{
        getInfoCategoria()
        async function getInfoCategoria(){
            setCargando(true)
            try {
              const categoriaQuery = await fetch(`/api/categoria/${Number(categoriaSeleccionada)}`)
              const categoriaData = await categoriaQuery.json()
              setCategoriaInfo(categoriaData[0])
              setProductos(categoriaData[0].productos)
            } catch (error) {
              console.log(error)
            }
            finally{
                setCargando(false)
            }
        }
    },[categoriaSeleccionada])

    useEffect(()=>{
        
        async function getInfoProducto(){
            setCargando(true)
            try {
                const productoQuery = await fetch(`/api/producto/${Number(productoBuscar)}`)
                const productoData = await productoQuery.json()
                setProducto(productoData[0])
            } catch (error) {
                console.log(error)
            }
            finally{
                setCargando(false)
            }
            
        }
        getInfoProducto()
    },[productoBuscar])
    
    useEffect(()=>{
        if(!categorias.length){
            getCategorias() 
        }
    },[categorias])

    useEffect(()=>{
        if(router?.pathname){
            mostrarProgreso()
        }
    },)

    async function getCategorias(){
        setCargando(true)
        try {
          const categoriasQuery = await fetch(`/api/categorias`)
          const categoriasData = await categoriasQuery.json()
          setCategorias(categoriasData)
        } catch (error) {
          console.log(error)
        }
        finally{
            setCargando(false)
        }
    }

    async function getOrdenes(){   
        setCargando(true)     
        try {
          const ordenesQuery = await fetch(`/api/ordenes`)
          const ordenesData = await ordenesQuery.json()
          setOrdenes(ordenesData)
        } catch (error) {
          console.log(error)
        }
        setCargando(false)
    }    

    async function guardarOrden(){
        if(nombre === '' || orden?.pedido.length === 0){
            setAlerta({mensaje: 'Faltan datos', tipo: 'error'})
            return;
        }
        try {
            const consulta = await fetch(`/api/orden`, {
                method: 'POST',
                body: JSON.stringify(orden)
            })
            setAlerta({mensaje: 'Orden creada correctamente', tipo: 'success'})
            setTimeout(() => {
                setNombre('')
                router.push('/cafe')
            }, 3000);
        } catch (error) {
            console.log(error)
        }
    }

    async function completarOrden(orden: TOrden){
        try {
            const consulta = await fetch(`/api/completada`, {
                method: 'POST',
                body: JSON.stringify(orden)
            })
            const resultado = await consulta.json()
            setAlerta({mensaje: resultado.msg, tipo: 'success'})
        } catch (error) {
            console.log(error);
        }
    }

    function agregarProductoPedido(producto: TProducto): void{
        if(producto.cantidad === 0){
            setAlerta({mensaje: 'Cantidad no válida', tipo: 'error'})
            return 
        }
        const ordenCopia: TOrden = orden
        const productosCopia:TProducto[] = orden.pedido
        const productoRepetido = productosCopia.find((productoState: TProducto) => productoState.id === producto.id)
        if(productoRepetido){
            const productosFiltrado: TProducto[] = productosCopia.map( (productoState: TProducto) => productoState.id === producto.id ? producto : productoState)
            ordenCopia.pedido = productosFiltrado
            setOrden(ordenCopia)
            setAlerta({mensaje: 'Producto editado correctamente', tipo: 'success'})
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
        const copiaOrden: TOrden = orden
        const productosFiltrados: TProducto[] = orden.pedido.filter((producto: TProducto) => producto.id !== id)
        copiaOrden.pedido = productosFiltrados
        setProductos(productosFiltrados)
        setAlerta({mensaje: 'Producto eliminado correctamente', tipo: 'success'})
        setOrden(copiaOrden)
        setTimeout(() => {
            esconderModalConfirmacion()    
        }, 2000);
        
        eliminarAlerta()
    }

    function calcularTotal(){
        const sumaTotal = orden.pedido.reduce((total: number, producto: TProducto) => Number(total) + (producto.cantidad * producto.precio), 0)
        setTotal(Number(sumaTotal))
        setTimeout(() => {
            setOrden({...orden, total: sumaTotal})
        }, 1000);
    }

    function eliminarAlerta(): void{
        setTimeout(() => {
            setAlerta({mensaje: '', tipo: ''})    
        }, 2000)
    }

    function mostrarModal():void{
        setVerModal(true)
    }

    function esconderModal(): void{
        setVerModal(false)
        setCantidad(0)
        setAlerta({mensaje: '', tipo: ''})
    }
    
    function mostrarModalConfirmacion():void{
        setVerModalConfirmacion(true)
    }
    function esconderModalConfirmacion():void{
        setVerModalConfirmacion(false)  
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
        <QuioscoContext.Provider 
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
                setOrdenes,
                orden,
                setOrden,
                getCategorias,
                getOrdenes,
                categoriaInfo,
                verModal,
                esconderModal,
                mostrarModal,
                verModalConfirmacion,
                esconderModalConfirmacion,
                mostrarModalConfirmacion,
                cantidad,
                setCantidad,
                aumentarCantidad,
                disminuirCantidad,
                cargando, 
                setCargando,
                progreso,
                eliminarProducto,
                agregarProductoPedido,
                alerta,
                eliminarAlerta,
                calcularTotal,
                total,
                setTotal,
                nombre,
                setNombre,
                guardarOrden,
                completarOrden
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}
export {
    QuioscoProvider
}
export default QuioscoContext