describe('SignIn', () => {
    it('api sets httpOnly authToken cookie', () => {
       cy.request('POST', `${Cypress.env('apiUrl')}/auth/sign-in`, {
           email: 'mankatomek+e2e@gmail.com',
           password: 'Test123!',
       }).then((response: any) => {
           const setCookieHeader = response.headers['set-cookie'];
           expect(setCookieHeader).to.not.be.empty;
       })
   })
});