/// <reference types="Cypress" />

//cypress - SPEC
describe('Test Suite', function()
{
    it('Test Suite - Case 7 - Mouse Hover', function() {
    
      
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()//Can use {force : true} to force click on invisible elements
        cy.url().should('include','top')        




















                                                            }
        )
}
        )