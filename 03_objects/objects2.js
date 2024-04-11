//const tinderUser=new Object()=--singleton object 
const tinderUser={}  //--non singleton

tinderUser.id="123abc"
tinderUser.name="khushi"
tinderUser.isLogin=false

//console.log(tinderUser)
const regularUser={
    email:"chinu@gmail.com",
    fullname:{
        userfullname:{
             firstname:"khushi",
             lastname:"vyas"
        }
    }
}

//console.log(regularUser.fullname?.userfullname.lastname)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

///const obj4=Object.assign({},obj1,obj2,obj3)

// const obj3={obj1,obj2}
//console.log(obj4)
const obj4={...obj1,...obj2,...obj3}
//console.log(obj4)

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //output is in array form
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('logged')) //true or false value return