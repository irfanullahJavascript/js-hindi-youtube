//ForEeach loop is used for specially array


//Ex:
    //const coding=['js','ruby','java','python','cpp'];
        //some loop directly add with array properties and one of them is foreach loop which is directly used as array property/method

        //bydefault inject as prototyp/proerties/methods  so with dot you can access all mathod
    
    // coding.forEach( function (val){
    //     console.log(item)
    // } )       

    //callback function ka name nhi hota  

                    //forEach take callback function  means foreach pochta hai k ap mujha function dye do k mujha kia krna hai.
                    //so you just give function and method all knoe about array/object

//Now use arrow function as callback pass pram wich on each itration equal to array values
    // const coding=['php','java','cpp','python','javascript']
    // coding.forEach( (item)=>{
    //     console.log(item)
    // })
    //use implicet way with arrow fnction
        // const coding=['php','java','cpp','python','javascript']
        //     coding.forEach( (item)=>(console.log(item)))

//Can we pass function to for each loop yes you can pass
const coding=['php','java','cpp','python','javascript']
function printMe(item){
    console.log()
}

