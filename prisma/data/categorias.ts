export interface Categoria {
    icono: string,
    nombre: string
    productos?: []
}
const categorias: Categoria[] = [
    {
        icono: "cafe",
        nombre: "Café"
      },
      {
        icono: "hamburguesa",
        nombre: "Hamburguesas"
      },
      {
        icono: "pizza",
        nombre: "Pizzas"
      },
      {
        icono: "dona",
        nombre: "Donas"
      },
      {
        icono: "pastel",
        nombre: "Pasteles"
      },
      {
        icono: "galletas",
        nombre: "Galletas"
      }
]

export {
    categorias 
}