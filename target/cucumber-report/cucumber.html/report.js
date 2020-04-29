$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/xyzbank/resources/featurefile/bankmanager.feature");
formatter.feature({
  "line": 2,
  "name": "Bank manager feature",
  "description": "As a user I want to check bank manager functionality on xyz bank website",
  "id": "bank-manager-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BankManager"
    }
  ]
});
formatter.before({
  "duration": 15437764100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Bank manager should add customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on add customer tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter first name \"LAMEERTHA\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter last name \"THEVARAJAH\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter post code \"UB2 5LJ\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on add customer button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see customer added successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "customerpageStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1130125500,
  "status": "passed"
});
formatter.match({
  "location": "bankmanagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 276731500,
  "status": "passed"
});
formatter.match({
  "location": "bankmanagerStepdefs.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 545855800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LAMEERTHA",
      "offset": 20
    }
  ],
  "location": "bankmanagerStepdefs.iEnterFirstName(String)"
});
formatter.result({
  "duration": 344081500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THEVARAJAH",
      "offset": 19
    }
  ],
  "location": "bankmanagerStepdefs.iEnterLastName(String)"
});
formatter.result({
  "duration": 225269100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UB2 5LJ",
      "offset": 19
    }
  ],
  "location": "bankmanagerStepdefs.iEnterPostCode(String)"
});
formatter.result({
  "duration": 206501500,
  "status": "passed"
});
formatter.match({
  "location": "bankmanagerStepdefs.iClickOnAddCustomerButton()"
});
formatter.result({
  "duration": 829850500,
  "status": "passed"
});
formatter.match({
  "location": "bankmanagerStepdefs.iShouldSeeCustomerAddedSuccessfullyMessage()"
});
formatter.result({
  "duration": 26509300,
  "status": "passed"
});
formatter.after({
  "duration": 996243000,
  "status": "passed"
});
formatter.before({
  "duration": 12815588300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Bank manager should delete customer successfully",
  "description": "",
  "id": "bank-manager-feature;bank-manager-should-delete-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on bank manager login tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on customers tab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I search customer by name \"LAMEERTHA THEVARAJAH\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.match({
  "location": "customerpageStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 8440100,
  "status": "passed"
});
formatter.match({
  "location": "bankmanagerStepdefs.iClickOnBankManagerLoginTab()"
});
formatter.result({
  "duration": 756629600,
  "status": "passed"
});
formatter.match({
  "location": "bankmanagerStepdefs.iClickOnCustomersTab()"
});
formatter.result({
  "duration": 1025823000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LAMEERTHA THEVARAJAH",
      "offset": 27
    }
  ],
  "location": "bankmanagerStepdefs.iSearchCustomerByName(String)"
});
formatter.result({
  "duration": 557494000,
  "status": "passed"
});
formatter.match({
  "location": "bankmanagerStepdefs.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 101112695400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//tr[@class\u003d\u0027ng-scope\u0027]//td//button\"}\n  (Session info: chrome\u003d81.0.4044.129)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-O8EH5PF\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.129, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\rakul\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59949}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: db16a3d328a7af00415fab4449375ed9\n*** Element info: {Using\u003dxpath, value\u003d//tr[@class\u003d\u0027ng-scope\u0027]//td//button}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat uk.co.xyzbank.utility.Utility.clickOnElement(Utility.java:39)\r\n\tat uk.co.xyzbank.pages.CustomerPage.deleteCustomer(CustomerPage.java:29)\r\n\tat uk.co.xyzbank.cucumber.Stepdefs.bankmanagerStepdefs.iClickOnDeleteButton(bankmanagerStepdefs.java:70)\r\n\tat ✽.And I click on delete button(src/test/java/uk/co/xyzbank/resources/featurefile/bankmanager.feature:20)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1771446200,
  "status": "passed"
});
formatter.uri("src/test/java/uk/co/xyzbank/resources/featurefile/customerpage.feature");
formatter.feature({
  "line": 3,
  "name": "Customer page feature",
  "description": "As a user I customer page functionality on xyz bank website",
  "id": "customer-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Customer"
    }
  ]
});
formatter.before({
  "duration": 12815301200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "customer-page-feature;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I select customer name \"Harry Potter\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify logout button is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see your name lable is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "customerpageStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 7731000,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 254179500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 24
    }
  ],
  "location": "customerpageStepdefs.iSelectCustomerName(String)"
});
formatter.result({
  "duration": 1180225200,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 140291800,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iVerifyLogoutButtonIsDisplayed()"
});
formatter.result({
  "duration": 323687300,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 50112315200,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iShouldSeeYourNameLableIsDisplayed()"
});
formatter.result({
  "duration": 94376100,
  "status": "passed"
});
formatter.after({
  "duration": 799128000,
  "status": "passed"
});
formatter.before({
  "duration": 11937349200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "customer-page-feature;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I click on customer login tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I select customer name \"Harry Potter\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on deposit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter amount \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on deposit wihtdraw button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verifty depsit successful message displayed on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "customerpageStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 10190000,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iClickOnCustomerLoginTab()"
});
formatter.result({
  "duration": 219012500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harry Potter",
      "offset": 24
    }
  ],
  "location": "customerpageStepdefs.iSelectCustomerName(String)"
});
formatter.result({
  "duration": 957261100,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 152172500,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iClickOnDepositButton()"
});
formatter.result({
  "duration": 956979500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 16
    }
  ],
  "location": "customerpageStepdefs.iEnterAmount(String)"
});
formatter.result({
  "duration": 350796100,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iClickOnDepositWihtdrawButton()"
});
formatter.result({
  "duration": 223938200,
  "status": "passed"
});
formatter.match({
  "location": "customerpageStepdefs.iVeriftyDepsitSuccessfulMessageDisplayedOnTheScreen()"
});
formatter.result({
  "duration": 216055800,
  "status": "passed"
});
formatter.after({
  "duration": 2040420000,
  "status": "passed"
});
});