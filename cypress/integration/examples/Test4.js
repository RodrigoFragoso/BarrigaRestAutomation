/// <reference types="Cypress" />
 
describe('My Four Test Suite', function() {
 
    it('My FourTest case',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //alerts e confirms - alertas e confirmações são realizdas automaticamente pelo cypress.
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    //window:alert - para verificar o texto do alerta veja a função abaixo
    cy.on('window:alert', (String) =>{
        //funções do MOCHA
        expect(String).to.equal('Hello , share this practice page and share your knowledge')
    })
    //window:confirm -  para verificar o texto da confimação veja a função abaixo
    cy.on('window:confirm', (String) =>{
        expect(String).to.equal('Hello , Are you sure you want to confirm?')
    })

    //Aqui esta removendo a opção de abrir uma nova guia para outro site.
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','qaclickacademy')
    cy.go('back')

})
})