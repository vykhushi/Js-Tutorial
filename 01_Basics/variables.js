const accountId=1234
let accountEmail="Khushivyas@gmail.com"
var accountPassword="123"
accountCity="Jaipur"

//accoutnId=3 not allowed const cant be changed 

accountEmail="khushi@gmail.com"
accountCity="pune"
accountPassword="2211"
//we can declare variable without using let const and var 

let accountState;

console.log(accountId);

/*
Prefer not to use var 
beacuse of issue in block scoope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

