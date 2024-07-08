describe('SignIn', () => {
   it('view is properly rendered', () => {
       cy.visit('http://localhost:4173/sign-in');
       cy.get('h4').should('exist');
   });

   it('backend health check', () => {
       cy.request('GET', 'http://localhost:3001')
           .then((response: Response) => {
               expect(response.status).to.equal(200);
           });
   })
});