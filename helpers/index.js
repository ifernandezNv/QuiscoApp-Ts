export function formatearDinero(dinero){
    return dinero.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}