/// <reference types="cypress" />

describe("E2E - Akcje wpisywania", () => {
    it("Wpisywanie wartości w pole", () => {
        cy.visit("/")
        cy.searchPhrase("Nowy tekst{backspace}", 1200); 
    })

    it("Czyszczenie wartości z pola input", () => {
        cy.get("#search_query_top").clear();
   })
})