import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { desconectarPrisma } from 'helpers'
import { TOrden } from 'helpers/types';
const prisma = new PrismaClient();


export default async function handler( req: NextApiRequest, res: NextApiResponse<TOrden[]>) {
    const ordenes = await prisma.orden.findMany({
        where: {
            completado: false
        }
    });
    res.status(200).json(ordenes)
    desconectarPrisma(prisma)
}
