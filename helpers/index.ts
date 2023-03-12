export function formatearDinero(dinero: number = 0): string{
    return dinero.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
export function formatearFecha(fecha: Date): string{
    return fecha.toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })
}

export async function desconectarPrisma(prisma: unknown ){
    try {
        await prisma.$disconnect()
    } catch (error) {
        console.error(error)   
    }
}