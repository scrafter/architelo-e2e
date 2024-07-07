describe('SignIn', () => {
   it('view is properly rendered', () => {
       cy.visit('/sign-in')
       cy.dataCy('sign-in-view').should('exist');
   })
});