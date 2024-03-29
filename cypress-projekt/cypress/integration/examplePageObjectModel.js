/// <reference types="cypress" />

describe("E2E - Akcja wybrania opcji select", () => {
    it("Wybieranie opcji", () => {
        cy.visit("/index.php?id_category=3&controller=category")
        
        //Po nazwie
        cy.get("#selectProductSort").select("In stock")

        //Po value
        cy.get("#selectProductSort").select("price:asc")

        //Po indeksach
        cy.get("#selectProductSort").select(7)
    })
    it.only("Wybieranie wszystkich opcji", () => {
        cy.visit("/index.php?id_category=3&controller=category")
        SelectPage.selectAllOption();
    
    })
})