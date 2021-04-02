//third method to reverse a string 
//this method is using recursive programming to reverse the string
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello sivasagar"));
