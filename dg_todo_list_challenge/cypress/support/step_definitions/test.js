/// <reference types="cypress" />
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { homePg } from '../pages/homePage';
import { gen } from '../utilities/generic';
import { editPg } from '../pages/editPage';



Given('Open the assignemnt application', () => {
    cy.visit('/')
});

Then('Check for the title of page : {string}', (title) => {
    homePg.getTitle(title);
});

Then('Check for the available fields on Home Page', () => {
    homePg.getFieldValidated();
});

Given('Enter the details in {string} input fields from {string} file', (fieldType, dataFile) => {
    gen.enterInputDetails(fieldType, dataFile);
});

When('I click on the {string} button', (btn) => {
    gen.clickButton(btn);
});


Then('I can see a record is present with value {string}', (testData) => {
    homePg.getRecordDetails(testData)
});

When('I click on the {string} icon having value {string}', (button, inputField) => {
    homePg.iconClick(button, inputField)
});

Then('I cannot see a single record with {string}', (value) => {
    homePg.noRecordsPresent(value);
});

Then('Check for the available fields on Edit Page', () => {
    editPg.getEditFieldsValidated();
});
