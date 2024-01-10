// Scope Story start with this three keywords=> let,const,var 

// let a=5
// const b=25
// var c=30
// console.log(a)
// console.log(b)
// console.log(c)

    // what actully need of other type like let and const if var is already use Because var not workes on block scope
    // what is scope  basically curly braces {} is scope 

    // Now if we define the variable in scope and use out side the scope 
//     var c=40;
// if(true){
//     let a=5
//     const b=25
//     var c=30 //you can also write this c=30

// }

//  console.log(a) //give your scope error
// console.log(b) //scope error
// console.log(c)//but noe give you scope error |30 which is wrong because that value only useale in that scope but not outside the scope
//  now if some one write var c=40 out side the scope now what but give you 30 so avoid this


// so dont use var 
let b=500;
if(true){
    let a=5
    const b=25
    console.log('Inner:',b) //block scope
}
console.log(b); //500 global 






//////////////////Global scope____________________
// In Global scope value are access able at any place inside and out side the function but block scope only used inside the block but not outside the block 










// +++++++______________________________What is Nested Scope /closure_____________________+++++++++++++++

function One(){
    const userName="irfanullah";
    function tow(){
        const website="youtube"
        console.log(userName)
    }
    // console.log(website) your cant use websit outside its Scope
    tow()
}
One() //after one execuit it creat tow oject and vise versa


// Note:: Child can access their parent properties now see in if els
if(true){
    const userName="irfan"
    if(userName==='irfan')
    {
        const websit="youtube"
        console.log(userName+' '+websit)
    }
    // console.log(websit) you cant access outside the scope
}
// console.log(userName) you cant access outside the scope










// ++++++++++++++++++++++++++++++INeresting+++++++++++++++++++++++++++mini hoisting in javascript

// function  addone(num){
//     return num+1
// }
// addone(5)

// const addTwo=function addtwo(num){
//     return num+2
// }
// addTwo(6)
//Both worked same but i f we use that like this way the 2nd method show us error 
addone(5)
function  addone(num){
    return num+1
}

addTwo(6) //Cannot access 'addTwo' before initialization  |this hiosting in javascript
const addTwo=function addtwo(num){
    return num+2
}

