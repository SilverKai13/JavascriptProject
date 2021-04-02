//method 2 to reverse a string
//this method to reverse the string is by using built in functions
let string = 'hello sivasagar'; //predefined string.

let reverseString = string.split('').reverse().join('');
//split function splits the string into substring defined by the parameter given . 
//if nothing is given it splits the string to characters.
//reverse() is used to reverse the letters from end to begining.
//join() is used to join the substrings created when the string was splitted into substrings.
console.log(reverseString) //to display the given variable.