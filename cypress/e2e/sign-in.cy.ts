describe('SignIn', () => {
   it('view is properly rendered', () => {
       cy.visit('http://localhost:4173/sign-in');
       cy.get('h4').should('exist');
   })
});