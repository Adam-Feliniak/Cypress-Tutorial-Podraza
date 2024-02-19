/// <reference types ="cypress"/>

describe("E2E - Lesson", () =>{
    it("Lokalizatorach", () => {
       cy.visit("/") 


       //Po znaczniku
       cy.get("a");

       //Identyfikator
       cy.get("#search_query_top")

       //Po klasie
       cy.get(".form-control")

       //Po atrybutach
       cy.get('[name="search_query"]')
       cy.get('[placeholder="Search"]')

       //Dokładniejszy atrybut wraz z podaniem znacznika
       cy.get('input[placeholder="Search"]')

       //Pobieranie elementów po kilku atrybutach
       cy.get('[src="http://www.automationpractice.pl/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]')

       //Zalecana praktyka pobierania dokumentów
       cy.get('[data-cy="wyszukiwarka"]')
    
    })

    it.only("Lokalizatory część 2", () =>{
        cy.visit("/") 
        cy.contains("Shop now !")
        cy.contains('[title="Contact us"]', 'Contact us')

        cy.get("li").parents("#home-page-tabs").find("li").first() //może być eq(0)
        cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers")
    })
})