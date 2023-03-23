describe('Test visitando la página, verificando el contenido del sidebar y la consulta de productos', () => {
    it('Probando el contenido que se muestra de manera condicional en el resumen', ()=>{
        cy.visit('/resumen')
        cy.get('p[data-cy=noProductos]').should('have.text', 'No haz agregado productos a tu orden, comienza agregandolos')
        
    })
    

})