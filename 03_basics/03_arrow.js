// Suppose you register User in your website so you make this Object 
//When ever you refer current context Means insdie scope use This key word
//like i want to wellcome user it different at any case 
const user={
    username:'irfan',
    price:300,
    welcomeMessage:funtion(){
        console.console.log(`${this.username}, welcome to the website`) //not directly use username but use keyword this.username  for current context
    }

}