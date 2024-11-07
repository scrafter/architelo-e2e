describe('architect review form', () => {
    it('review displays properly for not logged user', () => {
        cy.visit(`${Cypress.env('panelFrontendUrl')}/add-review/e638d7e0-89c3-492b-bc4c-c558a26b5ac8`);
        cy.contains('Leave an opinion about cooperation').should('exist');
    })
});
