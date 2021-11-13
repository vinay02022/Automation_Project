const puppeteer=require("puppeteer");

let browserOpenKaPromise=puppeteer.launch({headless:false})
browserOpenKaPromise.then(function(KuchBHi){
    console.log("your Nrowser Opened");
console.log("After")
})