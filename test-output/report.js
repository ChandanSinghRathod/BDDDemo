$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ckumarsi/workspace/PDC/CRMBDDFrameworkJG/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Free Crm Login Test_Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "Use enters username and User enters password",
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
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_already_on_login_page()"
});
formatter.result({
  "duration": 7511470906,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.titile_of_login_page_freecrm()"
});
formatter.result({
  "duration": 18032894,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.use_enters_username_and_User_enters_password()"
});
formatter.result({
  "duration": 308802839,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 12930879792,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_home_page()"
});
formatter.result({
  "duration": 11973621,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 92445061,
  "status": "passed"
});
});