/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should visit google page', () => {
    cy.google()
    cy.url().should('include', 'google')
  })
})
