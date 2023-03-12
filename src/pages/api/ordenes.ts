import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { desconectarPrisma } from 'helpers'
interface TOrden {
    id: number
    pedido: unknown
    fecha: string
    total: number
    nombre: string
}
const prisma = new PrismaClient();


export default async function handler( req: NextApiRequest, res: NextApiResponse<TOrden[]>) {
    const ordenes = await prisma.orden.findMany();
    res.status(200).json(ordenes)
    desconectarPrisma(prisma)
}
