// Identifier Rules in JavaScript
// 1. An identifier must start with a letter (a-z or A-Z), an underscore (_), or a dollar sign ($).
// 2. After the first character, identifiers can also include digits (0-9).
// 3. Identifiers cannot be the same as reserved keywords in JavaScript.
// 4. JavaScript is case-sensitive, so 'myVariable' and 'MyVariable' are considered different identifiers.


// • Must begin with a letter (a–z, A–Z), underscore (_), or dollar sign ($).
// • Subsequent characters may also include digits (0–9).
// • Cannot start with a digit.
// • Cannot be a reserved keyword.
// • Are case-sensitive.
// • May contain Unicode letters and Unicode escape sequences.
// • Cannot contain spaces, hyphens, or special characters (except _ and $).


var A = 1;
var a = 2;
var _a = 3;
var $a = 4;
var a1 = 5; // Valid identifier

console.log(A); // Output: 1
console.log(a); // Output: 2
console.log(_a); // Output: 3
console.log($a); // Output: 4
console.log(a1); // Output: 5

// unicode example
var café = "Coffee";
console.log(café); // Output: Coffee

var \u0061 = 10; // Unicode escape sequence for 'a'
console.log(a); // Output: 10



// Invalid identifiers (uncommenting these lines will cause errors)
// var 1a = 5; // Cannot start with a digit
// var a-b = 6; // Cannot contain hyphens
// var var = 7; // Cannot use reserved keywords

// Note: JavaScript is case-sensitive, so 'A' and 'a' are different identifiers.

