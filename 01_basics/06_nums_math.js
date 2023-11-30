// _________________________Numbers__________________________
// we have tow way to declare numbers
// 1-mathod 
const score=400
// but if you want deticaticayy want number using javascript object 


// 2-mathod in this way it will give you multiple protp meathod so that you can intermanipulate that number
const balance=new Number(100)
console.log(balance) // [Number:100]
console.log(score) //400


//Note :: youe can also see difference in broser by doing above where you can see multiple proto methods 

// Number proto-methods 
console.log(balance.toString().length) //1st convert into string that aply string pro length

//mostly use in e-comerce website where you fixed .decimal valeu
console.log(balance.toFixed(2)) //tow value after decimal=?100.00


const otherNumber=123.8996
console.log(otherNumber.toPrecision(5)) //user for round of the float number.


//number representaion of umer using proto-methods
const hundreds=1000000
console.log(hundreds.toLocaleString()) //1,000,000 //able your number representaion US standur 
//but if you want your own standard that write code like this 
console.log(hundreds.toLocaleString('en-PK'))
console.log(hundreds.toLocaleString('en-IN'))  //YOU Can check all other en-* using mdn javascript



//DSA competitive programming point of view max,min value in number 
// write Number in console broeser and after Number. write you can see multiple property you can apply on this numbe ryou can manipulate that Number.
// ___________________________________________________________Number End_________________________________________________________


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++library
console.log(Math)  //object [Math] {}    =>object inside that having multiple values you cannt see details veiew in here but if you want to see detail we apply this in browser console and apply all its property there.
//where you can exploer its property as well as it method using . operator

//Mostly used Math peorperty/Mathods::

//abs absoluit convert (-) value into possitive |convert negative value into possitive
console.log(Math.abs(-4))  //4

//round  use for round of
console.log(Math.round(4.4))  //4


//ceil   agr zara sa bhii 4 so zyede hova to upper vali value select kro like 4.4=>5 5.1=>6 etc
console.log(Math.ceil(5.1))  //6

//floor  select lower value if any chanse
console.log(Math.floor(4.4)) //4
console.log(Math.floor(4.5)) //4
console.log(Math.floor(4.9)) //4

//Find array max and min value
console.log(Math.min(2,3,4,5,6,7)) //2
console.log(Math.max(2,3,4,5,6,7)) //7

// ***mostly used Math library
console.log(Math.random()) //retne you value between 0 and 1
//but if you want some rage for your random number that you multiply with that numer in my case i use 10
console.log(Math.random()*10) // shift on digit form write to left but as we know value range between 0-1 so it possible that some time we received value like 0.0344 so in that case we add 1 with random() value and multiply with our range what we want.
console.log(Math.random()*10+1) //but this is not valid way to do that thing so use parenthises
console.log((Math.random()*10)+1) //that is correct way.
console.log(Math.floor((Math.random()*10))+1) //that is correct way.   //give you lower value

//but we can form this generic formula for abive we dit
const min=10
const max=20
// Math.random()*(max-min+1) ovide 0 value es trha ab 0 value kubhii bhi nhi aye gii.
Math.random()*(max-min+1) //but now i want atleast give minimum value so add min value with that
Math.random()*(max-min+1)+min  //but in this way i received points value also with that value so how a=avoid that and 
console.log(Math.floor(Math.random()*(max-min+1))+min) //now 1st round of with lower value and than add min to get atleast min value in result




