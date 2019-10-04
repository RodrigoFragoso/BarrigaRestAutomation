/// <reference types="Cypress" />

describe('My Second Test Suite', function() {
    it('My FirstTest Suite', function() {
      cy.
        visit('https://rahulshettyacademy.com/seleniumPractise/');
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)

        //parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
          //cy.log($el)
          const textVeg = $el.find('.product-name').text()
          if(textVeg.includes('Cashews')){
            $el.find('button').click()
          }
        })

        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('select').select('Brazil')
        cy.get('.chkAgree').click()
        cy.contains('Proceed').click()
        cy.contains('Thank you, your order has been placed successfully')
        cy.contains('You\'ll be redirected to Home page shortly!!')
  })

})
