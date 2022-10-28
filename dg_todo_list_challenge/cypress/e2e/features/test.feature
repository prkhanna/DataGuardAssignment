Feature: Technical Assignment for DataGuard

    Background: Open the application
        Given Open the assignemnt application

    Scenario: Check for the fields in home page
        Given Check for the title of page : 'DataGuard'
        Then Check for the available fields on Home Page

    Scenario: Validation of addition and deletion of a task
        Given Enter the details in 'new' input fields from 'testData' file
        When I click on the 'Add' button
        Then I can see a record is present with value 'Data'
        # rollback
        When I click on the 'delete' icon having value 'Data'
        Then I cannot see a single record with 'Data'

    Scenario: Validation fo update and deletion of task
        Given Enter the details in 'new' input fields from 'testData' file
        When I click on the 'Add' button
        Then I can see a record is present with value 'Data'
        When I click on the 'edit' icon having value 'Data'
        Then Check for the title of page : "Edit"
        And  Check for the available fields on Edit Page
        When Enter the details in 'edit' input fields from 'testData' file
        And I click on the 'Save' button
        Then I can see a record is present with value 'Guard'
        #rollback
        When I click on the 'delete' icon having value 'Guard'
        Then I cannot see a single record with 'Guard'
      



