export function formatearDinero(dinero = 0){
    return dinero.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
export function formatearFecha(fecha){
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
}