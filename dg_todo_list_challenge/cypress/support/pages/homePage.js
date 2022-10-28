import { generic } from "../utilities/generic";

export class homePage extends generic {

    getFieldValidated() {
        cy.get('label[for="newtodo"]').should('be.visible');
        cy.get('#newtodo').should('be.visible');
        cy.get('input[value="Add"]').should('be.enabled');
    }

    getRecordDetails(testData) {
        cy.contains('li', testData).should('be.visible')
    }


    noRecordsPresent(value) {
        cy.contains('li', value).should('not.exist');
    };
    iconClick(button, inputfield) {
        cy.get('li').contains(inputfield).children('a').as('btn')
        if (button == 'delete') {
            cy.get('@btn').first().click()
        } else {
            cy.get('@btn').last().click()
        }
    };


}
export const homePg = new homePage();