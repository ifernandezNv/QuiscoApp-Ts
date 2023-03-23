describe('Test visitando la página, verificando el contenido del sidebar y la consulta de productos', () => {
  it('Revisando el contenido del sidebar', () => {
    cy.visit('/')
    cy.get('[data-cy=Café]').should('have.text', 'Café')
    cy.get('[data-cy=Hamburguesas]').should('have.text', 'Hamburguesas')
    cy.get('[data-cy=Pizzas]').should('have.text', 'Pizzas')
    cy.get('[data-cy=Donas]').should('have.text', 'Donas')
  })
  it('Filtrando los productos de la categoría Hamburguesas', ()=>{
    cy.visit('/')
    
    // cy.get('a[data-cy=Hamburguesas]').as('btn').click()
    cy.get('[data-cy=Hamburguesas]').click()
    // cy.get('@btn').should('have.class', 'bg-yellow-500')
    // cy.url().should('include', '/hamburguesa')
    cy.get('h1[data-cy=headingCategoria]').should('have.text', 'Hamburguesas')
    cy.get('h3[data-cy=Hamburguesas]').should('contain.text', 'Hamburguesa Sencilla')
    cy.get('p[data-cy=precio]').should('contain.text', '$59.90')
  })
  it('Verificando la funcionalidad y el correcto redireccionamiento del progress bar', ()=>{
    cy.visit('/')
    cy.get('a[data-cy=resumen]').click()
    cy.url().should('include', '/resumen')
    cy.get('div[data-cy=progreso]').should('have.class', 'w-2/3')
    cy.get('h1[data-cy=headingResumen]').should('have.text', 'Resumen de tu Pedido')
    cy.get('a[data-cy=datos]').click()
    cy.url().should('include', '/datos')
    cy.get('div[data-cy=progreso]').should('have.class', 'w-full')
    cy.get('h1[data-cy=headingDatos]').should('have.text', 'Total y Confirmar Pedido')
  })
  it('Escribiendo el nombre del cliente, sin llenar el pedido, y verificando el contenido de la alerta', ()=>{
    cy.visit('/')
    cy.get('a[data-cy=datos]').click()
    cy.get('input[data-cy=nombre]').type('Isaac')
    cy.get('button[data-cy=confirmar]').click()
    cy.get('div[data-cy=alerta]').should('have.class', 'bg-red-600')
    cy.get('p[data-cy=alertaMensaje]').should('have.text', 'Faltan datos')
  })
  it('Intentando registrar un pedido sin información y verificando el contenido de la alerta', ()=>{
    cy.visit('/')
    cy.get('a[data-cy=datos]').click()
    cy.get('button[data-cy=confirmar]').click()
    cy.get('div[data-cy=alerta]').should('have.class', 'bg-red-600')
    cy.get('p[data-cy=alertaMensaje]').should('have.text', 'Faltan datos')
  })
  it('Llenando el pedido, indicando el nombre de cliente y verificando clase y contenido de la alerta', ()=>{
    cy.visit('/')
    //Agregando un producto
    cy.get('button[data-cy=botonAgregar]').first().click()
    cy.get('button[data-cy=aumentar]').click()
    cy.get('button[data-cy=agregarAlPedido]').click()
    cy.get('button[data-cy=cerrarModal]').click()
    //Agregando un segundo producto
    cy.get('button[data-cy=botonAgregar]').first().click()

    cy.get('button[data-cy=aumentar]').dblclick()
    cy.get('button[data-cy=agregarAlPedido]').should('have.text', 'Guardar Cambios')
    
    cy.get('button[data-cy=agregarAlPedido]').click()
    cy.get('button[data-cy=cerrarModal]').click()
    //Viendo el resumen del pedido y confirmándolo
    cy.get('a[data-cy=resumen]').click()
    cy.get('button[data-cy=confirmarPedido]').click()

    cy.url().should('include', '/datos')
    cy.get('input[data-cy=nombre]').type('Isaac Fernández Navarro')
    cy.get('button[data-cy=confirmar]').click()
    cy.get('div[data-cy=alerta]').should('have.class', 'bg-green-600')
    cy.get('p[data-cy=alertaMensaje]').should('have.text', 'Orden creada correctamente')
  })
})