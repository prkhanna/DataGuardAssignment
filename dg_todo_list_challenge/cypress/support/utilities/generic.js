export class generic {

    getTitle(title) {
        return cy.title().should('contains', title);
    };

    enterInputDetails(fieldType, dataFile) {
        var newLocator = '#' + fieldType + "todo"
        var editLocator = '#' + fieldType + "Todo"
        cy.fixture(dataFile).then((testData) => {
            if (fieldType == "new") {
                cy.get(newLocator).should('be.visible').type(testData.firstName)
            } else {
                cy.get(editLocator).should('be.visible').type(testData.lastName)
            }
        })

    };


    clickButton(btn) {
        var btnLocator = 'input[value="' + btn + '"]';
        cy.get(btnLocator).should('be.visible').click();
    };


}
export const gen = new generic();