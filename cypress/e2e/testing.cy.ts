describe('Test visitando la página y verificando el contenido del sidebar', () => {
  it('Visitando la página', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Revisando el contenido del sidebar', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy=cafe]').should('have.text', 'Café')
    cy.get('[data-cy=hamburguesa]').should('have.text', 'Hamburguesas')
    cy.get('[data-cy=pizza]').should('have.text', 'Pizzas')
    cy.get('[data-cy=dona]').should('have.text', 'Donas')
  })
  it('Filtrando los productos de la categoría Hamburguesas', ()=>{
    cy.visit('http://localhost:3000/')
    cy.get('a[data-cy=hamburguesa]').should('have.text', 'Hamburguesas').click()
    cy.get('a[data-cy=hamburguesa]').should('have.class', 'bg-yellow-500')
    cy.get('h1[data-cy=headingCategoria]').should('have.text', 'Hamburguesas')
    cy.get('h3[data-cy=hamburguesa]').should('contain.text', 'Hamburguesa Sencilla')
    cy.get('p[data-cy=precio]').should('contain.text', '$59.90')
  })
})