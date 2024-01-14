

//for loop
    // for (let i = 0; i <10; i++) {
    //     const element = i;
    //     console.log(element)
        
    // }
//use if in for loop
    // for (let i = 0; i < 10; i++) {
    //     if(i==5){
    //         console.log('5 is tha best Nubmer')
    //     }
    //     console.log(i)
        
    // }
//Nested for loop |loop within loop
    // for (let i = 1; i < 10; i++) {
    //     console.log(`Table: ${i}`)
    //     for (let j = 1; j < 10; j++) {
    //        console.log(i+'*'+j+'='+i*j)
            
    //     }
        
    // }


//Print array using for loop. /trivers array 
    // const myArray=['A','B','C','D','E']
    // for (let i = 0; i < myArray.length; i++) {
    //     const element = myArray[i];
    //     console.log(element)
        
    // }


//Break and continue
    //break control flow and jumped outside the block
        // for (let i = 1; i <= 20; i++) {
        //     if(i==5){
        //         console.log('Detected 5');
        //         break //jumped outside the loop
        //     }
        //     console.log(i)
            
        // }
    //Continue skipt that itration and jumped to the next ittration
        for (let i = 1; i <= 20; i++) {
            if(i==5){
                console.log('Detected 5');
                continue //skiped that ittration and jumped to next ittration
            }
            console.log(i)
            
        }