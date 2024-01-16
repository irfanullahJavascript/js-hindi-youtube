// as we see we cant itrate object usig for of loop so we used forin loop to ittrate object
const myObject={
    js:'javascript',
    cpp:'C++',
    swift:'swift for apple',
    php:'personal home page',
}

//for in loop ittrate object
    for (const key in myObject) {
        // console.log(key) //return you all keys
        console.log(`${key} shortcut is for ${myObject[key]} `)
    }

//now lets check can we use for in loop to itrate array or not
    // const programming=['c++','java','javascript','py','php'];
    // for (const key in programming) {
    //    console.log(programming[key])
    // }

    // yess you can ittrate on Array using forin loop
    
//cam we ittrate on map using forin loop

    //no maps are not ittrateble you cant ittarte map using forin loop

    //forof give direct values but forin give you key and values