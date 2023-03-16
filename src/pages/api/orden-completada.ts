import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import { desconectarPrisma } from 'helpers';
const prisma = new PrismaClient();


export default async function handler( req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.body
    const ordenes = await prisma.orden.delete({
        where: {id}
    })
    res.status(200).json({msg: 'Orden completada correctamente'})
    desconectarPrisma(prisma)
}
