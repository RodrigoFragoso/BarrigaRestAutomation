/// <reference types="Cypress" />

describe('My First Test Suite', function() {
    it('Does not do much!', function() {
      cy.
        visit('https://rahulshettyacademy.com/seleniumPractise/');
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        console.log('testando aqui')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
          //cy.log($el)
          const textVeg = $el.find('.product-name').text()
          if(textVeg.includes('Cashews')){
            $el.find('button').click()
          }
        })
        
        cy.get('.brand').then(function(logoelemnt){
          cy.log(logoelemnt.text())
        })
        //const logo=get('.brand')
        //cy.log(cy.get('.brand').text())

  })

})
