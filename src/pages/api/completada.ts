import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import { desconectarPrisma } from 'helpers';
const prisma = new PrismaClient();


export default async function handler( req: NextApiRequest, res: NextApiResponse) { 
    const {id, completado} = JSON.parse(req.body)
    
    const ordenes = await prisma.orden.update({
        where: {id},
        data: {
            completado,
        }
    })
    res.status(200).json({msg: 'Orden completada correctamente'})
    desconectarPrisma(prisma)
}
