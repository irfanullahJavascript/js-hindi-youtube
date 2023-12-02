const politisan =['imrankhan','nawazsharief','zardari']
const genrals =['musharf','raheel','bajwa'] 
//arry accept all type of data number string object another object etc
// so when we push one array into another array it take it as single value and store that whole array into another aray 
    // politisan.push(genrals)
    // console.log(politisan) //so it add array at index 3 so that arry inside arry we access it 0 index than we that console.log(politisan[3][0])
    // console.log(politisan[3][0])  // musharf

    //concate  combine more than on arrays and return now array
        // const allPolGen=politisan.concat(genrals)
        // console.log(allPolGen);

//but mergging arry in above is not correct if you want to merge the arry you follow bellow m    
    //but in most cases we used seprade istead of conact  saperade means arrsy ki value ko bykhair daina so by using ... with no istead of array we receive direct its value
    // const new_array=[...politisan,...genrals]
    // console.log(new_array) // ['imrankhan','nawazsharief','zardari','musharf','raheel','bajwa'] so that fine .


//some time you have nested arry but you single flat array include all values 

    // const another_array=[1,2,3,[4,5,6],7,8,[1,2,3,4],6,[1,2,3,[2,3,4],4],8] //but you want a flate array included all arrays
    // const another_array2=another_array.flat(Infinity)  //insode flate brakets you define depth =>infinity ,1,2,4, ..etc
    // console.log(another_array2) //[ 1, 2, 3, 4, 5, 6, 7,8, 1, 2, 3, 4, 6, 1, 2, 3, 2, 3, 4, 4, 8]

//convert into array from string to array|from object to array atec

    //1st check is that array
    //console.log(Array.isArray(["irfanullah"])); //return /true false

    //conert string to array
    //console.log(Array.from("irfanullah"))  //convert to Array  | ['i', 'r', 'f', 'a','n', 'u', 'l', 'l','a', 'h']

    //Convert object inot array **intersting case it return you [] empty array becase for that you must tell that create associative array
    console.log(Array.from({name:"irfanullah"}))   // it will return you [] empty array because we not define which array you cinvert taht object


    //if you have multiple variable and you want to convert that variable into array you use Array.of()  =>return new array with all variable or anything you give them
    const score1 = 100
    const score2=200
    const score3=300
    console.log(Array.of(score1,score2,score3))  // [ 100, 200, 300 ] 


    // ::important for deep analyses      Array.from() |Array.of() |Array.isArray()   =>so practice these and research on that methods.
    









