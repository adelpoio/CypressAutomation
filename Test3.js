/// <reference types="Cypress" />

//cypress - SPEC
describe('Test Suite', function()
{
    it('Test Suite - Case 3 - Multiple Choices', function() {
    
      
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Radio Buttons
         cy.get('[for="radio1"] > .radioButton').check()
         cy.get('[for="radio1"] > .radioButton').should('be.checked')
         
         
        //test step single checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      
        //test step wrapping checkboxes
        //input[type="search"]
        cy.get('input[type="checkbox"]').check(['option2','option3'])


        //Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('Br')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

          if($el.text()==="Brazil")
          {
              $el.click()
          }

    }   )
        cy.get('#autocomplete').should('have.value', 'Brazil')

        //Visible and Invisible Elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.wait(2000)
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
}  )}) 