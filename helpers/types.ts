export interface TProducto{
    id?: number
    nombre: string
    precio: number
    imagen: string
    categoriaId: string
    cantidad: number
}
export interface TCategoria {
    nombre: string
    productos: TProducto[]
}

export interface TOrden {
    id?: number
    pedido: TProducto[]
    fecha: Date
    total: number
    nombre: string
    completado: boolean
}
export interface TAlerta {
    mensaje: string
    tipo: string
}