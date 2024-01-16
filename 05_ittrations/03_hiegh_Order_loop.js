//there are several type of itteraion used for arrays like forof loop , forin loop ,foreach loop etc not lets see one by one


 //youe can all these loop on string ,array objects etc.what you want ot apply so lets see thse loops one by one.



 //for of loop   ||array specific loop


 
    //  const arr=[1,2,3,4,5,6];
    //  for (const num of arr) {    //object ka mutlb javascript object  nhii bulk object(string ,array,Object etc)
    //     console.log(num)
    //  }
//for of loop on string

    // const greetings="Helo World"
    // for (const greet of greetings) {
    //     console.log(`Each char of ${greet}`)
        
    //}

//Maps 
    //map is javascript object you can set and get values by using its different vslues.
    const map=new Map();
    //by using dot you can used its all property. \\contain unique values

    //set  value in map   |store only unique values and alway remeber order what you insert in it.

    map.set( 'IN',"INDIA")
    map.set('PK',"Pakistan")
    map.set('FR',"France")
    map.set( 'IN',"INDIA")  //not print this 
//now apply for of loop
    // console.log(map)
        // for (const key of map) {
        //     console.log(key)
        // }    //return you key value arrays 
        
        // now destructure arrays
        // for (const [key ,value] of map) { //destructre values and key now you can print key and values seprately
        //     console.log(key +':-'+value)
        // }
    
//for of loop Object
const myObject={
    'game1':'NFS',
    'game2':'spiderMan'
}

for (const [key, value] of myObject) {
    console.log(key +':-'+value)
}
  //myObject is not iterable
  //you cant ittrate object like that ways 
  //lets see another file 04 and discus objects ittrations