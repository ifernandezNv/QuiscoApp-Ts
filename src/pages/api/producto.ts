import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import {Producto} from 'prisma/data/productos';
const prisma = new PrismaClient();

export default async function handler( req: NextApiRequest, res: NextApiResponse<Producto[]>) {
    const {id} = req.query
    
    const productoQuery = await prisma.producto.findMany({
        where: {id : Number(id)},
    });
    res.status(200).json(productoQuery)
}
