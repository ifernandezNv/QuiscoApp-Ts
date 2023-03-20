import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { desconectarPrisma } from 'helpers'

const prisma = new PrismaClient()


export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    const ordenes = await prisma.orden.findMany({
        where: {
            completado: false
        }
    });
    res.status(200).json(ordenes)
    desconectarPrisma(prisma)
}
