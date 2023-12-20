describe('set de pruebas', () => {
  it('prueba 1', () => {
    //visitar
    cy.visit('https://www.saucedemo.com/v1/')
    //buscar input de usuario y escribir standard_user
    .get('#user-name').type('standard_user')
    //buscar input de password y escribir secret_sauce
    .get('#password').type('secret_sauce')
    //buscar boton de login y hacer click
    .get('#login-button').click()
  })
})