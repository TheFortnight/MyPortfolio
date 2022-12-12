

async function searchApple(){
const { Builder, By, Key, until, js, ChromeOptions } = require("selenium-webdriver");

var driver = new Builder().forBrowser("chrome").build();

await driver.manage().window().maximize();

await driver.get('https://www.apple.com/');
await driver.findElement(By.id('ac-gn-link-search')).click();
await driver.findElement(By.id('ac-gn-searchform-input')).sendKeys('AirPod', Key.RETURN);
await driver. navigate().back();
await driver.findElement(By.css('.ac-gn-link-support')).click();
await driver.findElement(By.css('.as-search-form-input')).sendKeys('Search text');

};


searchApple();
