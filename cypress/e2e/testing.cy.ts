describe('Test visitando la página, verificando el contenido del sidebar y la consulta de productos', () => {
  it('Revisando el contenido del sidebar', () => {
    cy.visit('/')
    cy.get('[data-cy=cafe]').should('have.text', 'Café')
    cy.get('[data-cy=hamburguesa]').should('have.text', 'Hamburguesas')
    cy.get('[data-cy=pizza]').should('have.text', 'Pizzas')
    cy.get('[data-cy=dona]').should('have.text', 'Donas')
  })
  it('Filtrando los productos de la categoría Hamburguesas', ()=>{
    cy.visit('/')
    cy.get('a[data-cy=hamburguesa]').should('have.text', 'Hamburguesas').click()
    cy.get('a[data-cy=hamburguesa]').should('have.class', 'bg-yellow-500')
    cy.url().should('include', '/hamburguesa')
    cy.get('h1[data-cy=headingCategoria]').should('have.text', 'Hamburguesas')
    cy.get('h3[data-cy=hamburguesa]').should('contain.text', 'Hamburguesa Sencilla')
    cy.get('p[data-cy=precio]').should('contain.text', '$59.90')
  })
  it('Verificando la funcionalidad y el correcto redireccionamiento del progress bar', ()=>{
    cy.visit('/')
  })
})