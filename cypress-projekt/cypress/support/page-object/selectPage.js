class SelectPage {
    get select() {
        return cy.get("#selectProductSort");
    }
    selectAllOption() {
        this.select.then(select1 => {
            cy.get(select1).find("option").each(opcja => {
                this.select.select(opcja.text())
            
            })
        })
    }

}

export default new SelectPage();