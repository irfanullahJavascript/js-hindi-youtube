//As we know when we want to do some thing with array we used froeach loop but acctullay foreach loop dosent return any thign so its only used to just print the values inside the forach loop but not used it anothe rfunction and return to some other function
//so lets how its worked in forach |forach take callback inside that call back i can pass val,index and complete array so lets see how its worked.


const coding=['php','java','cpp','python','javascript']
    // coding.forEach((item)=>{
    //     console.log(item)
    // })
    //but insted of print that values i want to return that forach and want to store in some other varibale what if
        // const values=coding.forEach((item)=>{
        //         console.log(item)
        //     })
        // console.log(values) //return you undefine


        //but what if we retuen it manullay 
        const values=coding.forEach((item)=>{
            return item
        })
        console.log(values) //in this case it also retuen you undefine which measn that foreach will not retuen you values what ever you want but its nit return you any values.



//Filters

    // _____________________So Now what we do if we want to retuen values ofr array beacuse in forach loop case dosent return any values 
            //For that type of senario javascript developer used filter methods/property/proto-type of array by using that method you can simply return array values and store it another varibale
            //so lets see how it worked.

            // * just like forEach filters als o take callback function 
            //* filters work on true false value
            //it retunr values on the bases of true and false

            //lets seee...
            const myNums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
            //i want values greater that 4 and store it in variables
            myNums.filter( (num)=>(num>4))