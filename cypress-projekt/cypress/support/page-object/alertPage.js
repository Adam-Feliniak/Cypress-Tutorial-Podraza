class AlertPage {
    get btnAlert1() {
        return cy.get("#alert");
    }

    get btnAlert2() {
        return cy.get("#alert-confirm")
    }

    clickOnBtnAlert1() {
        this.btnAlert1.click();
    }

    clickOnBtnAlert2() {
        this.btnAlert2.click()
    }

    verifyAlertText(tekst) {
        cy.on("window:alert", tresc => {
            expect(tresc).to.equal(tekst)
        })
    }

    verifyAlertConfirmText() {
        cy.on("windows:confrim", tresc => {
            expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
        }) 
    }

    rejectAlert() {
        cy.on("#alert-confirm", () => false)
    }

    acceptAlert() {
        cy.on("#alert-confirm", () => true)
    }
}

export default new AlertPage();