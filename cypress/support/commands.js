// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: 'rpf.info@gmail.com',
            redirionar: false,
            senha: '123456'
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            return token
    })
})

Cypress.Commands.add('resetRest', (recebeToken) => {
    cy.request({
        method: 'GET',
        url: '/reset',
        headers: { Authorization: 'JWT '+recebeToken }
    }).its('status').should('be.equal', 200)
})

Cypress.Commands.add('getContaByName', (name, recebeToken) => {
    cy.request({
        method: 'GET',
        url: '/contas',
        headers: { Authorization: 'JWT '+recebeToken },
        qs: {
            nome: name
        }
    }).then(res => {
        return res.body[0].id
    })
})