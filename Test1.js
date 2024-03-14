/// <reference types="Cypress" />

//cypress - SPEC
describe('Test Suite', function()
{
    it('Test Suite Case', function() {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.wait(3000)
        cy.get('.search-keyword').type('ca');
        cy.wait(3000)
        cy.get('.product:visible').should('have.length',4)
        //Parent-Child
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
          const textVeg=$el.find('h4.product-name').text()
          if(textVeg.includes('Cashews'))
          {
            cy.wrap($el).find('button').click()
          }
        })
        //assert if the logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function(logoElement)
        {
          cy.log(logoElement.text())
        })

   
        //fixtures

    }   )
    
}   )