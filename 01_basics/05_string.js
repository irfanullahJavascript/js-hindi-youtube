//old school mean in old style code 
const name="irfanullah "
const repoCount=50
console.log(name + repoCount + " value")

// __________________________________________String interpulation______________________
//New codeing style with string is backtiks ->string interpulation 
//by using backtiks you make placeholder and in that placeholder you can inject your variables and use that var and also you can use its Method 

console.log(`Helo my name is ${name} and my repo cpunt is ${repoCount}`)


//__________________________________________string declaration____________________________ 
// 1-mehtod const firstName="kamran"
//2-method const gameName=new String("irfanullah")    |string declaration using javascript object and string value in its constructor.

// But by using 2-mathod string Declaration give you lots of string intermanupulation method

const gameName=new String("irfanullah")  //Store value in key:value and much more opts
console.log(gameName[0])   //print value at index 0

console.log(gameName.__proto__)  //give object {} |its not empty but consist lots of method you can use
// ojeect  methods.... you can method with . opt
console.log(gameName.length) //give string length

console.log(gameName.toUpperCase());  //IRFANULLAH   |its not chnage orignal value because its stack  memory.

console.log(gameName.charAt(0)); // i 

console.log(gameName.indexOf('i')); // 0 index 

//you can see evry thing about string method it browser y it proto methods ||practice all string methods and observe its result
const newStr=gameName.substring(0,4) //(-8,4) ignore youe negative value and start with 0
console.log(newStr); //0 ,1,2,3 index value print

//mostly used methods of string
const anotherString = gameName.slice(-8,4)  //you can also give negative value in slice but not in substring
console.log(anotherString ); //now strat from negative


const newStringOne= "     ifanullah.      "  //string with lost of spaces |mostly in input user put lost of thing which we dont need
console.log(newStringOne) //    irfanull
console.log(newStringOne.trim()) //irfanullah    |remove statring and ending spces with string
// -----> got trim javascript mdn and analyze all syntex


// ::note  urln code space=%20       |user type this url=https://irfanullah.com/irfan ullah |but browser convert space into https://irfanullah.com/irfan%20ullah

//you can chnage url by your own way
const url ="https://irfanullah.com/irfan%20ullah" //https://irfanullah.com/irfan_ullah

//You can also asked question to string like
console.log(url.includes("irfan")) //url man irfan hai k nhi.   true
console.log(url.includes("rizwan")) //url man irfan hai k nhi.   false

// _____________split() mathod use to convert string into array bases on the separetor_______
//How split method work.Go to  split javascript mdn or simple browser and see int prototype and explore the split method.
//split(saperator,limit)
const newstring="irfa_ullah_kahn"
console.log(newstring.split('_')) // [ 'irfa', 'ullah', 'kahn' ] convert into array on the basis of saperator
// ____________________________END Lecture___________________________________________________________________________________________
//-------------------------------------------now practice all string method