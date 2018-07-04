Feature: Free CRM create Contacts
Scenario Outline: Free Crm Create a new contact scenario
Given User is already on login page
When title of login page is Free CRM
Then Use enters "<username>" and  "<password>"
Then User clicks on login button
Then user is on home page
Then user move to new contact page
Then user enters again "<firstname>" and "<lastname>" and "<position>"
Then close the browser

Examples:
	| username | password | firstname | lastname | position |
    | chand1   |Tester@123| chandan | singh | QA |
    | chand1   |Tester@123| David | kambli | fighter |
    