/// <reference types="Cypress" />

describe('My Three Test Suite', function() {
    it('My FirstTest Suite', function() {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      // forma 1 de marcar ou desmarcar um checkbox
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

      // forma 2 de marcar ou desmarcar um checkbox
      cy.get('input[type="checkbox"]').check(['option2','option3'])
      cy.get('input[type="checkbox"]').uncheck(['option2','option3']).should('not.be.checked')
    
    // static dropdown
    cy.get('select').select('option2').should('have.value','option2')
    
    // dynamics dropdown
    cy.get('#autocomplete').type('india')
    
    })
})