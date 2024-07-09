describe('general', () => {
    it('backend health check', () => {
        cy.request('GET', Cypress.env('apiUrl'))
            .then((response: Response) => {
                expect(response.status).to.equal(200);
            });
    });
});
