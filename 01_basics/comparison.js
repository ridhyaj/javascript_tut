//simple comaprisons
console.log(2>1);
console.log(2<=1);
console.log(2!=1);

//comapring different datatypes
console.log("2">1);  //true
console.log("02">1)  //true

console.log(null>0)  //false
console.log(null==0);  //false
console.log(null>=0);  //true

//the equality check (==) and comaprison (<,>,>=,<=) works differently. The comparison convert null to a number, treating it as 0, that's why it gave true.
//same as undefined

//=== also checks the datatypes
console.log("hello");
console.log("2"===2);  //false