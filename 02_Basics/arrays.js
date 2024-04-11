const myArr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]
const myArr2=new Array(1,23,34,3)
//array is object=collection of multiple datatypes in a single element 
//array is resizeable in js 
// array in array

//console.log(myArr[2])//accessing via index 

//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //added in the starting in the array
myArr.shift() //9 removed

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(20))//-1  not exist 

const newArr=myArr.join();
//console.log(myArr);//Array output
//console.log(newArr);//converted into string

//slice,splice 

console.log( "A",myArr);

const myn1= myArr.slice(1,3)//1 included 3 not -->[1,2]

console.log(myn1);
console.log("B",myArr)

const myn2= myArr.splice(1,3)
console.log("C",myArr) //1 2 3 is removed from original array -->[0,4,5,6]
console.log(myn2);// 1 2 3 is output 









