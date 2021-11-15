const puppeteer=require("puppeteer");
let page;
let browserOpenKaPromise=puppeteer.launch({headless:false});
browserOpenKaPromise.then(function(browser){
    //console.log("your Nrowser Opened");
    const pagesArrpromise=browser.pages();
    return pagesArrpromise;
}).then(function(browserPages){
    page=browserPages[0];
    let gotoPromise=page.goto("https://www.google.com/")
    return gotoPromise;
}).then(()=>{
    let elemWaitPromise=page.waitForSelector("input[type='text']",{visible:true})
    return elemWaitPromise;
})
.then(function(){
    //console.log("Reached On Google.com");
    let keyWillSendPromise=page.type("input[type='text']","pepcoding.com")
    return keyWillSendPromise;
}).then(function(){
    let enterWillBePressed=page.keyboard.press("Enter");
    return enterWillBePressed;
}).catch((err)=>console.log("Error Bro"+"  "+err));
