// 1-mathod array declaration 
const myArray=[0,1,2,3,4] //same data array
// 2-method array declaratiom  using new key word means through object in this way no need to add squir brakets
const myArray2=new Array(1,2,3,4,5,6,7)  //this no need to add brakets it automatically convert into arrays

// Note:: when we cosole this array like this const number =[1,3,5,6,7,8] =>This well give properties and proto type you can used 


//Array Methods

    // add/remove value at last 
        // myArray.push(6) //add value at last 
        // myArray.pop() ///remove value from last

    //add remove value at start in array
        // myArray.unshift(9) //add value at start |||but this increase load becasue it unshift all value of array 
        // myArray.shift() //remove value at start |||but this increase load becasue it shift all value of array 

    // Question answer from array.
        // console.log(myArray.includes(9))  //is that array contain value 9 or not   true/false
        // console.log(myArray.indexOf(3)) //index 3 pr kia value hai

    // convert array into string with coma saprated
        // const myArr=myArray.join() //convert array into string with comma saperated.
        // console.log(myArr)
        // console.log(myArray)
    //slice and splice 
        console.log("A",myArray)   //   A [ 0, 1, 2, 3, 4 ]
        const myNew1=myArray.slice(1,3) //1 TO 3 ki range man value ko lo aor last index (range include n kro) and dont manipulate the orignal aray
        console.log(myNew1)  // [ 1, 2 ]
        console.log("B",myArray)  //no affect on origanl arry bby using slice   ||   B [ 0, 1, 2, 3, 4 ]

        const myNew2=myArray.splice(1,3) //take rage from 1 to 3 indes value with last range(3) but also manipulate the orignal array
        console.log(myNew2)   //   [ 1, 2, 3 ]
        console.log("C",myArray) //affetc the orignal array splice subtrcat that value from orignal array ||   C [ 0, 4 ]  


// console.log(myArray)
