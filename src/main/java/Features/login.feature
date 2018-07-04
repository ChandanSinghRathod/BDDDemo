Feature: Free CRM Login Feature
#Without example keyword
#Scenario: Free Crm Login Test_Scenario
#Given User is already on login page
#When title of login page is Free CRM
#Then Use enters "chand1" and  "Tester@123"
#Then User clicks on login button
#Then user is on home page
#Then close the browser

#With examples keyword
#WHAT IS DIFFERENCE BETEWEEN SCENARIO AND SCENARIO OUTLINE :when we use data driven approac we use scenario outline

Scenario Outline: Free Crm Login Test_Scenario
Given User is already on login page
When title of login page is Free CRM
Then Use enters "<username>" and  "<password>"
Then User clicks on login button
Then user is on home page
Then close the browser
Examples:
	| username	| password   |
	| chand1	| Tester@123 |
	| Tom		| Tester@456 |


