const marvelHeroes=["thor","ironman","spiderman"]
const dcHeroes=["superman","flash","batman"]

//marvelHeroes.push(dcHeroes)// push in existing array (array in array ) 
//console.log(marvelHeroes[3])

const allheroes=marvelHeroes.concat(dcHeroes)
console.log(allheroes) //create a new array 

const all_new_heroes=[...marvelHeroes,...dcHeroes]
console.log(all_new_heroes) //seprate all the values in new array 

const another_array=[1,2,3,[4,5,6,],7,[6,7,[4,5]]]
  
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Khushi"))//checking it is array or not, true or false

console.log(Array.from("Khushi"))//convert khushi into array

console.log(Array.from({name:"Khushi"}))//empty array error 

 let score1=100
 let score2=200
 let score3=300

 console.log(Array.of(score1,score2,score3))
