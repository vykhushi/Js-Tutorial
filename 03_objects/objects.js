//singleton
//Object.create //constructor method

const mySym = Symbol("Key1")

//object literals 
//(key-value)
const JsUser={
    name:"khushi",
   "full name": "Khushi Vyas", // cant access this value through dot 
    age:18,
    [mySym]:"Key1", //creating a symbol
    location:"Udaipur",
    email:"khushi@gmail.com",
    isLogin: false,
    lastLoginDays: ["monday","saturday"]
} 

// //accessing the value of object
//  console.log(JsUser.email)
//  console.log(JsUser["email"])
// //  console.log(JsUser.full name)
//  console.log(JsUser["full name"])

 //console.log(JsUser[mySym])

 JsUser.email = "khushivy@gmail.com"

 //Object.freeze(JsUser) //values cant be changed after that 
 JsUser.email = "khushivy@chatgpt.com"
// console.log(JsUser)

 JsUser.greetings=function(){
    console.log("Hello JsUser");

 }
 
 JsUser.greetingsTwo=function(){
    console.log(`Hello Js User,${this.name}`);

 }
 console.log(JsUser.greetings());
 console.log(JsUser.greetingsTwo());



