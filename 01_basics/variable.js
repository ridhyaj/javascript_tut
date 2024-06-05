const accountId=11221;
let accountEmail="xyz@gmail.com"
var accountPass="12345"
accountCity="Pune"

// these  are the ways to declare variables

//making change to them


// accountId=3;   //not allowed because it is declared const and the variable which is declared const cannot be changed.
// console.log(accountId);


accountEmail="abc@gmail.com"
accountPass="238389"
accountCity="Delhi"

console.table([accountId,accountEmail,accountPass,accountCity])  //to print all once in a table.


//all can be changed except const.
//prefer not to use var because of issue in block scope and functional scope.

let accountState  //prefered is let
console.log(accountState);  //if not given any value then it will give 'undefined';