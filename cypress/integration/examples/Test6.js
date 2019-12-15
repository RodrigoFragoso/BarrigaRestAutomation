/// <reference types="Cypress" />

describe('My Five Test Suite', function() {
    it('My FiveTest Suite', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        /*comando abaixo server para abrir um dropdow */
        cy.get('.div.mouse-houver-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('inblude','top')

    })
})        