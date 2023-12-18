//function defination 
function sayMyName() {
    console.log("i");
console.log("r")
console.log("f");
console.log("a")
console.log("n");
console.log("u")
console.log("l");
console.log("l")
console.log("a");
console.log("h")
}

// call funciton      sayMyName |=>this is function reference    |=>() and this is function exexutons i you want to execuite that function
sayMyName()
sayMyName   //this is just reference |wo function wahan rhta hai but not execuite that.

// ________________________________________________________________________________________________________________________________________________
// Add tow numbers functions
function addTowNumbers(number1,number2){
   console.log( number1+number2)
}
//but it create issue when we not give them a number
addTowNumbers() //NaN s
// addTowNumbers(3,4) //7

// Note:: so its very important to us that number 1st convert into desired arguemnt and than used it in yor function 


// _________________________________________NOTE::________________________Parameters/arguemnts__________________
// function defination man jo values hum pass krta  hai esa hum parameters Kehta hai.| jub k function call k wqt jo values hum pass krta hai ena hum arguemnts keta hai.

//return type function ki value ko kise dosra variable man hold kr sktahai but you cant store value of function just console or print value

function addTowNumbers(number1,number2){
//    let result =number1+number2
   return number1+number2
   console.log("irfanullah") //this is unreachable code.
 }
const result= addTowNumbers(4,6)
console.log("Result",result)

















// ______________________________________________________________________________________________________________________________________________________________
// ________________________________________________________________________________________________________________________________________________________ 
// function logInUserMessage(username){
//     return `${username} just loged In`
// }
// console.log(logInUserMessage("irfanullah")) //but we cannot give any values than.? 

// console.log(logInUserMessage()) //undefined just loged In |so ovide this situations?

// so 1st of all check the value and than use that value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
function logInUserMessage(username){
    // if(username===undefined){
        if(!username){
        console.log("Pleas Enter a User Name")
        return 
    }
    return `${username} just loged In`
}
console.log(logInUserMessage())
//but we can also define default values in that way values alway return some thing