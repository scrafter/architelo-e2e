describe('SignIn', () => {
   it('view is properly rendered', () => {
       cy.visit('sign-in')
       cy.get('h4').contains('Sign in');
   })
});