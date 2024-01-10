// Suppose you register User in your website so you make this Object 
//When ever you refer current context Means insdie scope use This key word
//like i want to wellcome user it different at any case 
const user={
    username:'irfan',
    price:300,
    welcomeMessage:function(){

         console.log(`${this.username}, welcome to the website`); //not directly use username but use keyword this.username  for current context
        console.log(this) //give you all properties of obj
        }
}
//so this refer to current context in this context username is irfan
user.welcomeMessage()

//But i want to chage username from irfan to irfanullah now in this case i want this value so i use 'this'->keyword for current syntext
user.username='irfanullah'
user.welcomeMessage() //npw for current co text usernaem values is irfanullah so irfaull wel be used in function



// Notes::::------------------))Now if i print log($this) in objecy it will return me all properties of that object  /,Mean current values  ap ko return kra ga
//Notes:::::-------------------))Now if i just console.log(this)in node envirment it wil show me empty object {}
console.log(this) //return empty object |because we are in empty space  {}
// But in Browser when we console.log(this) it return window and its feature because in browser window is global object so that why this return it
// ___________________________________________________________________________________________________________________________________________________________________
// Arrow Function:   ("this" key word only used in object but not with functions) mean you can refer context with object but not with functions
// ____________________________________________________________________________________________________________________________________________________________________________

// function chai(){
//     let username='irfan'
//     //  console.log(this.username) //i cant do that because this key word not used in functions |undefine
// }
// chai()

//2nd way to define function
// const chai=function(){
//           let username='irfan'
//           console.log(this) //it return some values 
//           console.log(this.username) //This will also give you |undefine
// }
// chai()
//ES-6 Introduce arrow function basicall its normal function but in new way 
//remove function keyword and add arrow after parenthisis 
const chai=()=>{
          let username='irfan'
          console.log(this) //if i console "this" in arrow function it also return me {} empty array
          console.log(this.username) //Arrow also give you undfine means you cant used this-keyword in arrow function
}
chai()

// _________whats difference between Arrow function and normal function
// When i console this in arrow function it return me empty object but when i console this in normal function it return me some values but both not allow to use this for reference 



// Now inDepth Arrow Function 

// Explicet way return value in arrow function 
    // const addTwo=(num1,num2)=>{
    //     return num1+num2
    // }
    // console.log(addTwo(2,3)) //5


//Emplicet way in this way we remove bracec(block scope because of one line statement) and alsoe remove return because we now you return some thing
    //   const addTwo=(num1,num2)=> (num1+num2)  //so we not return when we use parenthis but with curly-bracec we use keyword return |we can also not use parenthis some time
    //     console.log(addTwo(2,3)) //5


//Now how when we return object so for that we use parenthisi otherwise we can return with paranthis
const addTwo=(num1,num2)=> ({
    name:'irfa',
    age:26
    
})  //so we not return when we use parenthis but with curly-bracec we use keyword return |we can also not use parenthis some time
    console.log(addTwo(2,3)) //5


