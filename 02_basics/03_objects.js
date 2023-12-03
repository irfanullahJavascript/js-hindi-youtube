// +_________________________________________+There are tow ways to declare javascript object+_________________________________________
// 1-litral
//2-constructor   |make singleton object | object.create in this way singleton made 

// ::note singleton  when you make object using constructor its caled singleton object | ye apna trha ka ak he obejcet hota hai.but
//litral trha sa ju koi object bnata hai to sinle objecet nhi hota but es trha k bht sara oject hota hai.


//Litral way to make object  || store key value pair |

// ::note key agr string ho to hum esa double quotes man nhii lkhta kun bydefault javascipr es string he treat krta hai.
    const jsUser={
        name:"irfanullah",
        "fullName":"irfan ullah kahn",
        age:25,
        email:"irfanullah6537@gmail.com",
        isLogin:false,
        lastLogin:["monday","saturday"]

    }
    //how to access object value
    // console.log(jsUser.email)  //not bad 
    // console.log(jsUser["email"]) //now you   //bec key is string so when you try to accses tha you must write it in double quotes

    //now you cant access fullname through dot you must use brakets

    // console.log(jsUser."fullName") //not allow you
    // console.log(jsUser["fullName"]) //so  thats why you can use this method some time 

//declare symbole and assign as ky in object and print that   :: symobl use for unique identification
    // const mysym=Symbol("key1")
    // const jsUser2={
    //     [mysym]:"irfanullah" //this is sytext use symol as a key in object
    // }
    // console.log(jsUser2[mysym])

//how chage object value
    //jsUser.email="irfanullahkhan@gmail.com"  //by using = opt you can change object value 
    //but if you want to locked the  object so that no bidy can change the object value youe can do that but object.freez mathod after that you can chage object value
    
    //now freez object and try to change its value
    // Object.freeze(jsUser)
    // jsUser.email="kamranbungash@gmail.com"
    // console.log(jsUser["email"]) //so it will not chage the email after freezing objects
    
//Now how add function in object |in javascript functions are treat as normal varibale just like other variable work in javascripts

    //function in javascript object 
    jsUser.greeeting=function(){
        console.log("Hellow Js User!")
    }
    // now how you access function in object
    console.log(jsUser.greeeting)
    //if you want to use that oject value into function use in that object as entity you can do that by this way
    //agr ap this key word ko use j=kra gye to es object k andr ki tmam property ko ap use kr skta hai 
    jsUser.greeetingTow=function(){
        console.log(`Hellow Js User ${this.fullName}`)
    }
    console.log(jsUser.greeetingTow())
// Note:: Now Agr ap kise object man kam kr rha hai aor es same object ki properties ko ,function ko use krna chhta hai to es k lye pa ***"this" reference key ka use kr skta hai 

// ________________________________------Note____________________________
//mostly ap . k through value ko acess kra gye but in some cases ap ko brakets ka use krna prta hai.


