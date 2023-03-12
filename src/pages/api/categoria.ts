import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import {Categoria} from 'prisma/data/categorias';
import { desconectarPrisma } from 'helpers';
const prisma = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse<Categoria[]>) {
    const {id} = req.query
    
    const categoriaQuery = await prisma.categoria.findMany({
        where: {id : Number(id)},
        include: {
            productos: true
        }
    });
    res.status(200).json(categoriaQuery)
    desconectarPrisma(prisma)
}
