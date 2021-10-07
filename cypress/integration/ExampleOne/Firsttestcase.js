///  <reference types ="cypress" />
describe('Amazon test', function()
{
    it('Matching book', function()
    {
        cy.visit("https://amazon.com")
        cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Books',{force: true})
        cy.wait(10000)
        cy.reload()
        cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Automotive',{force: true})
        
    })
  })    