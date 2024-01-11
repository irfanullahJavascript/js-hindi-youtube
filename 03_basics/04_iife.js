// Imediatly invoked function Expression(some time ap ko function ko forun call krvana hota hai.but ayse ap kun krat hai. avoide funtional scope with global scope poluide)
//eslye ap function forun execuit krva daita hai

//EX:
    // function chai(){
    //     console.log('DB Connection');
    // }
    // chai()
//Now invoked imediatly
//name IIFE 
   ( function chai(){
        console.log('DB Connection');
    })();  // (functiion defination)(fun-execuition)   | ()()

    //why we use iife ->imediatly invked,to avoid global varile polution in function we used iife to avoid polution

    // ::note iffe ko ap invoked to kr daita hai es stop bhi krna hota hai es k lye ap ; semi-colun lkhna prta hai


    // Now make arrow function invokable 
    ( ()=>(console.log("hellow")))(); //hellow


    // now if take aurgument give them in execution

    //simpe iffe with parameter
    ( (username)=>{
        console.log(`${username}`)
    })('fanullah');