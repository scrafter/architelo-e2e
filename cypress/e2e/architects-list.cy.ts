describe('architects list', () => {
    it('list should be displayed under 5 seconds', () => {
        cy.visit('https://www.architelo.com/architects');
        cy.get('[class*="ArchitectListItem"]').should('exist')
    });

    it("each item opens architect page", () => {
        cy.visit('https://www.architelo.com/architects');
        cy.get('[class*="ArchitectListItem"]').first().click();
        cy.dataCy('architect-page').should('exist');
    });
});
