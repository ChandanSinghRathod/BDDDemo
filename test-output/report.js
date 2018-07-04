$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ckumarsi/workspace/PDC/CRMBDDFrameworkJG/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Free Crm Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Use enters \"\u003cusername\u003e\" and  \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters again \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 13,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;1"
    },
    {
      "cells": [
        "chand1",
        "Tester@123",
        "chandan",
        "singh",
        "QA"
      ],
      "line": 14,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2"
    },
    {
      "cells": [
        "chand1",
        "Tester@123",
        "David",
        "kambli",
        "fighter"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free Crm Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Use enters \"chand1\" and  \"Tester@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters again \"chandan\" and \"singh\" and \"QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 20748151612,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.titile_of_login_page_freecrm()"
});
formatter.result({
  "duration": 11795854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chand1",
      "offset": 12
    },
    {
      "val": "Tester@123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.use_enters_username_and_User_enters_password(String,String)"
});
formatter.result({
  "duration": 262666728,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 39298200857,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 12568505,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 2608975556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chandan",
      "offset": 19
    },
    {
      "val": "singh",
      "offset": 33
    },
    {
      "val": "QA",
      "offset": 45
    }
  ],
  "location": "LoginStepDefination.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 2570806123,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 92364594,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Free Crm Create a new contact scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-create-a-new-contact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Use enters \"chand1\" and  \"Tester@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user move to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user enters again \"David\" and \"kambli\" and \"fighter\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 6166817406,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.titile_of_login_page_freecrm()"
});
formatter.result({
  "duration": 11411171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chand1",
      "offset": 12
    },
    {
      "val": "Tester@123",
      "offset": 26
    }
  ],
  "location": "LoginStepDefination.use_enters_username_and_User_enters_password(String,String)"
});
formatter.result({
  "duration": 306325595,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9743492307,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 6127012,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_move_to_new_contact_page()"
});
formatter.result({
  "duration": 1901409451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 19
    },
    {
      "val": "kambli",
      "offset": 31
    },
    {
      "val": "fighter",
      "offset": 44
    }
  ],
  "location": "LoginStepDefination.user_enters_contacts_details(String,String,String)"
});
formatter.result({
  "duration": 2006117570,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 86546724,
  "status": "passed"
});
});