/// reference types = "cypress" />

describe('Should test at a function level', function (){
    let token
    before('', function (){
        cy.getToken('rpf.info@gmail.com', '123456')
            .then(tkn => {
                token = tkn
            })
    })

    beforeEach('', function (){
        cy.resetRest(token)
    })

    it('Should create an account', function (){
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'conta via rest'
            }
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'conta via rest')
        })
    })
    
    it('Should update an account', function (){
        cy.getContaByName('Conta para alterar', token)
        .then(contaId => {
            cy.request({
                url: `/contas/${contaId}`,
                method: 'PUT',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: 'conta alterada via rest'
                }
            }).as('response')

        })
        cy.get('@response').its('status').should('be.equal', 200)
    })

    it('SHould not create an account with same name', function (){
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false
        }).as('response')

        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })

    it('Should create a transaction', function (){
        cy.getContaByName('Conta com movimentacao', token)
            .then(contaId => {
                cy.request({
                    method: 'POST',
                    url: '/transacoes',
                    headers: { Authorization: `JWT ${token}` },
                    body: {
                        conta_id: contaId,
                        data_pagamento: Cypress.moment().add({days: 2}).format('DD/MM/YYYY'),
                        data_transacao: Cypress.moment().format('DD/MM/YYYY'),
                        descricao: 'testeERika',
                        envolvido: 'inter',
                        status: true,
                        tipo: 'REC',
                        tipo: "DESP",
                        transferencia_id: null,
                        usuario_id: 4678,
                        valor: '20'
                    }
                }).as('response')
        })
        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')

    })

})