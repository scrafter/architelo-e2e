Cypress.Commands.add('dataCy', (value: string, subSelector?: string) => {
    const selector = subSelector ? `[data-cy=${value}] ${subSelector}` : `[data-cy=${value}]`;
    return cy.get(selector);
});
