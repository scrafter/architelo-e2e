const { v4: uuidv4 } = require('uuid');

const PASSWORD = 'Test123!'

describe('SignUp', () => {
    it('form works properly', () => {
        const uniqueEmail = `e2e-user-${uuidv4()}@architelo.com`;
        cy.visit(`${Cypress.env('panelFrontendUrl')}/sign-up`);

        cy.get('input[name="email"]').type(uniqueEmail);
        cy.get('input[name="password"]').type(PASSWORD);
        cy.get('input[name="confirmPassword"]').type(PASSWORD);
        cy.get('input[type="checkbox"]').type(PASSWORD);
        cy.get('button[type="submit"]').click();

        cy.contains("Your account has been successfully created, please check your e-mail inbox").should('exist');
        cy.url().should('include', '/sign-in');
    });
});
