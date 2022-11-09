
describe('empty spec', () => {
  it('berhasil login', () => {
    cy.visit('https://www.instagram.com/accounts/emailsignup/?hl=id')
    cy.get(':nth-child(4) > .xnz67gz > ._aa48 > ._aa4b').type('gpolinema@gmail.com')
    cy.get(':nth-child(5) > .xnz67gz > ._aa48 > ._aa4b').type('rofiqohwahyuningtyas')
    cy.get(':nth-child(6) > .xnz67gz > ._aa48 > ._aa4b').type('fifirofiqoh')
    cy.get(':nth-child(7) > .xnz67gz > ._aa48 > ._aa4b').type('fifi123')
    cy.get(':nth-child(9) > ._ab8w')
    
  })  
  })