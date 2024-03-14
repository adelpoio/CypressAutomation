/// <reference types="Cypress" />

//cypress - SPEC
describe('Test Suite', function()
{
    it('Test Suite - Case 5 - New Tab page', function() {
    
      
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //removeAttr - Remove o atributo (JQuery) de abrir numa nova guia
        cy.get('#opentab').invoke('removeAttr','target').click();

        //Especifica a nova origem, dado que saiu do dominio anterior
        cy.origin('https://www.qaclickacademy.com', ()=>
        {
            cy.get('#navbarSupportedContent a[href="about.html"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academy')
        })
        
        
        




















                                                            }
        )
}
        )