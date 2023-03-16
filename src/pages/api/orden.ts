import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { desconectarPrisma } from 'helpers'
import { TOrden } from 'helpers/types'
const prisma = new PrismaClient();


export default async function handler( req: NextApiRequest, res: NextApiResponse<TOrden>) {
    const ordenDatos: TOrden = req.body
    const orden = await prisma.orden.create({
        data: JSON.parse(ordenDatos)
    });
    res.status(200).json(orden)
    desconectarPrisma(prisma)
}
