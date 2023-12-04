// Now in this lecture we will discuss how we define object using constructor way.

//singleton way.
    const tinderUser=new Object()  //now this is singleton objeect but when you console it will also return you empty object
    console.log(tinderUser) // {}
//Now create object through Literal way 
    const anOtherUser={} //Now this will also return empty object so no usch big difference BTw singleton and Literal way
    console.log(anOtherUser)  // {}


//How assign avalue to our objects
    anOtherUser.id="123abc"
    anOtherUser.email="irfankhan@gmail.com"
    anOtherUser.logedin=false
    console.log(anOtherUser)   // { id: '123abc', email: 'irfankhan@gmail.com', logedin: false }



//How define object within object of javascript
    const regularUser={
        email:"irfan@gmail.com",
        fullname:{
            userfullname:{
                firstname:"irfan",
                lastname:"ullah"
            }
        }
    }
    //now how to access object
    console.log(regularUser.fullname.userfullname.firstname) //irfan
    //sometime you use this syntext when data come from  API like if fullname than userfullname if userfullname than firstname because some time data nhii aa rha hota aor hum es ki enner value ko access krta hai to error ata hai.
        console.log(regularUser.fullname?.userfullname?.firstname) //irfan



    //Combine Or merrage tow more than tow ojects
    const object1={1:'a',2:'b'}
    const object2={3:'a',4:'b'}
    //const object3={object1,object2}   //{ object1: { '1': 'a', '2': 'b' }, object2: { '3': 'a', '4': 'b' } }

    //but we want all value in single object  so we do that??
        // const obj3=Object.assign(object1,object2) //noe that give you desired result  which is { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
            //but for prper syntext in which we tell that all value store in object by extra parameter {} like this .In this way we tell the assign method all valye placed int {} which means in object.

            //proper syntext        object.assign(Target,resources)
            //const obj3= Object.assign({},object1,object2)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } this is the correct way to combine tow objects
            // console.log(obj3) 
            //             ||object assign mdn|| practice this againand again so that you go through all syntext 





            //90% use ______________________but mostly used in lates is seprade operator to saperate more than one oject etc
                const obj3={...object1,...object2}  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } this will give you fine result

                //when values come from database use this syntex. all come in array of object |means array man objects aye gye.
                



    console.log(obj3)