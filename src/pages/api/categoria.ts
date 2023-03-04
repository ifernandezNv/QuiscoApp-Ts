import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import {Categoria} from 'prisma/data/categorias';
const prisma = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse<Categoria[]>) {
    const {icono} = req.query
    
    const categoriaQuery = await prisma.categoria.findMany({
        where: {icono: icono},
        include: {
            productos: true
        }
    });
    res.status(200).json(categoriaQuery)
}
