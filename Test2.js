/// <reference types="Cypress" />

//cypress - SPEC
describe('Test Suite', function()
{
    it('Test Suite - Case 2', function() {
        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //cy.wait(1500)
        cy.get('.search-keyword').type('ca');
        //cy.wait(1500)
        //Parent-Child
        cy.get('.products').as('productLocator')
        //cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(($el, index, $list) => {
          const textVeg=$el.find('h4.product-name').text()
          if(textVeg.includes('Cashews'))
          {
            cy.wrap($el).find('button').click()
          }
        })
        cy.get('.cart-icon > img').click()
        //cy.wait(1500)
        cy.contains('PROCEED TO CHECKOUT').click()
        //cy.wait(1500)
        cy.contains('Place Order').click()
        //cy.wait(1500)
        cy.get('select').select('Brazil').should('have.value', 'Brazil')
        cy.get('.chkAgree').check().should('be.checked')
        cy.wait(1500)
        cy.get('button').click()
        //cy.wait(10000)

        
        //Utilizando CSS
        //cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
        //cy.get('.cart-preview > .action-block > button').click()
        

    }   )
    
}   )