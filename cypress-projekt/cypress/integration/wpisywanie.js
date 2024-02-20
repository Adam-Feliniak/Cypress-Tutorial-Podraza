/// <reference types="cypress" />

describe("E2E - Akcje wpisywania", () => {
    it("Wpisywanie wartości w pole", () => {
        cy.visit("/")
        cy.get("#search_query_top").type("Przykładowy produkt{backspace}", {delay: 500})
    })

    it("Czyszczenie wartości z pola input", () => {
        cy.get("#search_query_top").clear();
   })
})