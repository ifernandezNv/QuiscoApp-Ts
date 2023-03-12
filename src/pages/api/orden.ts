import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
interface TOrden {
    id: number
    pedido: unknown
    fecha: string
    total: number
    nombre: string
}
const prisma = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse<TOrden>) {
    const ordenDatos: TOrden = req.body
    console.log(req.body)
    // const orden = await prisma.orden.create({
    //     data: ordenDatos
    // });
    // res.status(200).json(orden)
}
