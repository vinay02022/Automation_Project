const puppeteer=require("puppeteer");
let pages;
let browserOpenKaPromise=puppeteer.launch({headless:false});
browserOpenKaPromise.then(function(browser){
    //console.log("your Nrowser Opened");
    const pagesArrpromise=browser.pages();
    return pagesArrpromise;
}).then(function(browserPages){
    cPage=browserPages[0];
    let gotoPromise=cPage.goto("https://www.google.com/")
    return gotoPromise;
}).then(function(){
    console.log("Reached On Google.com");
})
