import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { desconectarPrisma } from 'helpers'
const prisma = new PrismaClient()


export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    const ordenDatos = req.body
    const orden = await prisma.orden.create({
        data: JSON.parse(ordenDatos)
    });
    res.status(200).json(orden)
    desconectarPrisma(prisma)
}
