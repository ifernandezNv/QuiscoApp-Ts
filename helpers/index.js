export function formatearDinero(dinero = 0){
    return dinero.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}