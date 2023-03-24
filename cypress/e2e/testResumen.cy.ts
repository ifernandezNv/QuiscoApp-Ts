describe('Test visitando la página, verificando el contenido del sidebar y la consulta de productos', () => {
    it('Probando el contenido que se muestra de manera condicional en el resumen', ()=>{
        cy.visit('/resumen')
        cy.get('p[data-cy=noProductos]').should('have.text', 'No haz agregado productos a tu orden, comienza agregandolos')
        cy.get('button[data-cy=confirmarPedido]').should('not.exist')
    })
    it('agregando un producto al pedido y verificando que se muestre en el resumen', ()=>{
        cy.visit('/')
        cy.get('button[data-cy=botonAgregar]').first().click()
        cy.wait(100)
        cy.get('button[data-cy=aumentar]').click()
        cy.get('button[data-cy=agregarAlPedido]').click()
        cy.get('a[data-cy=resumen]').click()
        cy.get('button[data-cy=confirmarPedido]').should('exist')
        cy.get('p[data-cy=noProductos]').should('not.exist')
        cy.get('h3[data-cy=productoCarrito]').should('have.text', 'Café Caramel con Chocolate')
        cy.get('p[data-cy=cantidad]').first().should('have.text', 'Cantidad: 1')
        cy.get('p[data-cy=precio]').last().should('have.text', 'Precio: $59.90')
    })
    

})