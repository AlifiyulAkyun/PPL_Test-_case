describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.vidio.com/users/login')
    cy.get('#user_login').type('lutfiyahmahmudah11@gmail.com')
    cy.get('#user_password').type('nadhifah2001')
    cy.get('#onboarding-login-form-submit').click()
  })
})
