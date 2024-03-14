/// <reference types="Cypress" />

//cypress - SPEC
describe('Test Suite', function()
{
    it('Test Suite - Case 4 - Alerts', function() {
    
      
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list) => {
            const text=$el.text()
            if(text.includes('Python'))
            {   //Find the table and columm child and provide next to retrieve the value of the next columm
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceText=price.text()
                    expect(priceText).to.equal('25')
                })
                
            }







        })
 }
        )})
