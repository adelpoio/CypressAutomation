/// <reference types="Cypress" />

//cypress - SPEC
describe('Test Suite', function()
{
    it('Test Suite - Case 4 - Alerts', function() {
    
      
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //window:alert
        cy.on('window:alert',(str)=>
        {
            //Mocha - compairing strings
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window:confirm - two options, confirm or cancel
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        




















                                                            }
        )
}
        )