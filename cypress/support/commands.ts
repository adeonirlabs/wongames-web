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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('google', () => cy.visit('https://google.com'))

Cypress.Commands.add('renderBanner', () => {
  cy.get('.slick-slider').within(() => {
    cy.findByRole('heading', { name: 'Cyberpunk 2077' })
    cy.findByRole('link', { name: 'Buy now' })

    cy.get('.slick-dots > :nth-child(2) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: 'Ghostrunner' })
    cy.findByRole('link', { name: 'Buy now' })

    cy.get('.slick-dots > :nth-child(3) > button').click()
    cy.wait(500)

    cy.findByRole('heading', { name: 'Mad Max' })
    cy.findByRole('link', { name: 'Buy now' })
  })
})
