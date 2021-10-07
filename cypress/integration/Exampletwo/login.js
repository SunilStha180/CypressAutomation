describe('Login', function()
{
    it('Login Scenario', function()
    {
        cy.visit("http://automationpractice.com/index.php")
        cy.get('.login').click()
        cy.get('#email').type('sunilshrestha123@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        cy.title().should('include','My account - My Store')

    })
  }) 