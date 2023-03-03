import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import {Categoria} from 'prisma/data/categorias';
const prisma = new PrismaClient();


export default async function handler( req: NextApiRequest, res: NextApiResponse<Categoria[]>) {
    const categorias = await prisma.categoria.findMany({
        include: {
            productos: true
        }
    });
    console.log(categorias);
    res.status(200).json(categorias)
}
