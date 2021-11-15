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
    //waiting for element to be visible on page
    let elemWaitPromise=page.waitForSelector("input[type='text']",{visible:true})
    return elemWaitPromise;
})
.then(function(){
    //console.log("Reached On Google.com");
    //type any element on the page -> selector 
    let keyWillSendPromise=page.type("input[type='text']","pepcoding")
    return keyWillSendPromise;
}).then(function(){
    let enterWillBePressed=page.keyboard.press("Enter");
    return enterWillBePressed;
}).then(()=>{
    let elementWaitPromise=page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible:true})
    return elementWaitPromise;
}).then(()=>{
    let keyWillSendPromise=page.click("h3.LC20lb.MBeuO.DKV0Md")
    return keyWillSendPromise;
})
.catch((err)=>console.log("Error Bro"+"  "+err));
