import { productos } from "./data/productos";
import { categorias } from "./data/categorias";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(): Promise<void>{
    try {
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error);
        
    }
}
main()
.then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })