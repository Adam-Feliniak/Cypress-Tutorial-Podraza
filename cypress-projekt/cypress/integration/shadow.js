/// <reference types="cypress" />

describe("E2E - Shadow Dom", () => {
    it("Kliknięcie na element", () => {
        cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm")
        //cy.contains("File")
        cy.get(".smart-ui-component").shadow().contains("File").click() 
    })
})