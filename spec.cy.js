describe('login-spotify', () => {
  it('login spotify correctly', () => {
    cy.visit('https://accounts.spotify.com/en/login?continue=https')
    cy.get('[data-testid="login-username"]').type('rofikanuraini30@gmail.com')
    cy.get('[data-testid="login-password"]').type('nuraini30')
    cy.get('.Indicator-sc-1airx73-0').click()
    cy.get('.ButtonInner-sc-14ud5tc-0').click()
  })
  it('login spotify incorrectly', () => {
    cy.visit('https://accounts.spotify.com/en/login?continue=https')
    cy.get('[data-testid="login-username"]').type('rofika')
    cy.get('[data-testid="login-password"]').type('rofika')
    cy.get('.Indicator-sc-1airx73-0').click()
    cy.get('.ButtonInner-sc-14ud5tc-0').click()
  })
})