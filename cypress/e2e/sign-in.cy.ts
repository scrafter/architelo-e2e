describe('SignIn', () => {
   it('view is properly rendered', () => {
       cy.visit('https://example.cypress.io/todo');
       cy.get('.todo-list li').should('have.length', 2);
   })
});