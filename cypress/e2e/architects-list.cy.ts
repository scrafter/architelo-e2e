describe('architects list', () => {
    it('list should be displayed under 5 seconds', () => {
        cy.visit('https://www.architelo.com/architects');
        cy.get('[class*="ArchitectListItem"]').should('exist')
    });
});
