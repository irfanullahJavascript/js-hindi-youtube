//truthy and falsy values concept in flow-controll statments
//menaw some time you assumed that this values result come alwyas true or fasle


//Let assume database give userEmail and you  show message if email else show now email
//how its wokr

//Koch values ko ap assumed kr laita ho k ye values true hongi and koch ko fal


//falsy values.
//false , 0 ,-0, BigIn on , ""  ,null ,undefine ,NaN    These all values consider falsey values.


//Truthy Values

// "0" , 'false' , " " string space also true ,[] ,{} , function(){} these are all true values


//how check array is empty
const userEmail=[]
if(userEmail.length==0){
    console.log('Array is empth!')
}

//How check object is empty?
const emptyObject={}
if(Object.keys(emptyObject).length==0){   //Oject.key(object_name)  return you array now you can apply array properties
    console.log("Empty object")
}



//Nullish coalascing Operator (??): null undefine

    //ye Operator null aor undefine pr kam krta hai |es ko use kr k hum error ho handle kr skta hai.

    let val1;
    // val1= 5 ?? 10
    // val1=null ?? 10;  //agr value null hai val1 ko 10 assign kr do
    val1=undefined ?? 40 //agr value uundefine hai to val1 ko 40 assign kr do.

//Ternary Operator |short syntext of if else 
    //the purpose of thid operator is totaly different from nallish operator so pleaase dont mixed up these to.

    // condtion ? true : 'false'
    // Ex 
    const ictPrice= 100;
    ictPrice >=80 ? console.log(true) : console.log(false)







