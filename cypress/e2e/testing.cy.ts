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
})