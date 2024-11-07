const EMAIL = 'mankatomek+e2e@gmail.com';
const USER_PASSWORD = 'Test123!'

describe('SignIn', () => {
    it('api sets httpOnly authToken cookie', () => {
       cy.request('POST', `${Cypress.env('apiUrl')}/auth/sign-in`, {
           email: EMAIL,
           password: USER_PASSWORD,
       }).then((response: any) => {
           const setCookieHeader = response.headers['set-cookie'];
           expect(setCookieHeader).to.not.be.empty;
       })
   });

    it('sign in form', () => {
        cy.visit(`${Cypress.env('panelFrontendUrl')}/sign-in`);
        cy.get('input[name="email"]').type(EMAIL);
        cy.get('input[name="password"]').type(USER_PASSWORD);
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/investor-dashboard');
    });
});