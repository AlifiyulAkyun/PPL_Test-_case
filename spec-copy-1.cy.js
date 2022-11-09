describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.gramedia.com/sign-up')
    cy.get('#mat-input-0').type('AlifiyulAkyun')
    cy.get('#mat-input-1').type('alifiyula@gmail.com')
    cy.get('#mat-input-2').type('Gramedia2021')
    cy.get('.mat-checkbox-inner-container').click()
    cy.get('.submit').click()

  })
  it('passes', () => {
    cy.visit('https://www.gramedia.com/login')
    cy.get('#mat-input-0').type('alifiyula@gmail.com')
    cy.get('#mat-input-1').type('Gramedia2021')
    cy.get('.submit')

  })

})



















































