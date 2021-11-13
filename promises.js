const fs=require("fs");
//ye hai call back methed of read any file data
/* fs.readFile("f1.txt",function(err,data){
    console.log(data);
})
console.log(after);*/

/*************************************** */
let promise1=fs.promises.readFile("f.txt");//Ye Hai Promise Kr rha ki aao tension na lo hum aapka kaam kr denge aap aage jaaye maharaj
let promise2=fs.promises.readFile("f2.txt");
console.log(promise1)//Pending[1. state  2. value]
console.log("after")//after
//if promise fullfilled
/*promise1.then(function(data){
    console.log(""+data);
})
promise2.then(function(data){
    console.log(""+data);
})
//if failed
promise.all().catch(function(err){
    console.log()
})*/
/*------------------------------------------------------- */
//jb multiple promises ho aur sbka result ek hi dena ho to 
Promise.all([promise1, promise2]).then((values) => {
    console.log(" "+values);
  });
