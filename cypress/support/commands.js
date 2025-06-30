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

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://katalon-demo-cura.herokuapp.com');
    cy.get("#menu-toggle.btn.btn-dark.btn-lg.toggle").click();
    cy.get("a[href='profile.php#login']").contains('Login').click();

    cy.get("[name='username']").type(username);
    cy.get("[name='password']").type(password);
    cy.get('#btn-login[type="submit"]').contains("Login").click();
    cy.url().should('include', '/#appointment'); // Assert login success
});