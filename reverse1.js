// method 1 to reverse a string
let string = 'hello sivasagar'; //predfined string. 
//let is a keyword that allows a variable to change it's value inside it's scope.
//next we create a function to reverse the string simply by traversing from 
//end to beginning by creating a loop and assigning each character traversed 
// to an empty string
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const result = reverseString(string); 
//const is a keyword that does not allow variable to change at any point inside the scope 
//the variable.
console.log(result);