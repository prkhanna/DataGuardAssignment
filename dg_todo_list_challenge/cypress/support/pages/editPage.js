import { generic } from "../utilities/generic";

export class editPage extends generic {

    getEditFieldsValidated() {
        cy.get('label[for="editTodo"]').should('be.visible');
        cy.get('#editTodo').should('be.visible');
        cy.get('input[value="Save"]').should('be.enabled');
    };

};


export const editPg = new editPage();