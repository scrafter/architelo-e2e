declare namespace Cypress {
    interface Chainable {
        dataCy(selector: string, subSelector?: string): Chainable;
    }
}