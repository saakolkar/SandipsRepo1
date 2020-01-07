$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Test Selenium Easy WebSite",
  "description": "",
  "id": "test-selenium-easy-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Title of Selenium Easy WebSite",
  "description": "",
  "id": "test-selenium-easy-website;title-of-selenium-easy-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I launch Selenium Easy WebSite",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I get the title of selenium",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I validate the title",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 12506607874,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_launch_Selenium_Easy_WebSite()"
});
formatter.result({
  "duration": 6815384077,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_get_the_title_of_selenium()"
});
formatter.result({
  "duration": 29694022,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_validate_the_title()"
});
formatter.result({
  "duration": 4317060,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Lanuching of Selenium Easy WebSite",
  "description": "",
  "id": "test-selenium-easy-website;lanuching-of-selenium-easy-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I launch Selenium Easy WebSite",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 21027641879,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_launch_Selenium_Easy_WebSite()"
});
formatter.result({
  "duration": 11911753165,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_close_the_browser()"
});
formatter.result({
  "duration": 2472483873,
  "status": "passed"
});
});