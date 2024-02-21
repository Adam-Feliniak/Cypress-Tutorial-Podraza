/// <reference types="cypress" />

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        cy.get('#alert').click();
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal("Przykładowa treść alertu")
        })
    })

    it("Alert confrim", () =>{
        cy.get("#alert-confirm").click();
        cy.on("windows:confrim", tresc => {
            expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        }) 

        cy.on("#alert-confirm", () => false)
    })
})