# JavascriptProject

To run any javascript file first we need to download node js.
Once we have node js in our system we can create a javascript file with the extension filename.js.
To run the javascript file simply go to the directory it is created on and type node filename.js and enter.

Here in this project, I have worked on various ways to reverse a string in javascript.

While working on various ways to reverse a string on javascript I found that in javascript the string is immutable, hence swapping a string within the same variable string cannot be done.
So the first method i used to reverse a string is to simply iterate through the string from back to front and put each character in a new empty string.

To understand it better let's take an example:

let's take a string "hello world"

when iterating through a loop the compiler indexes every character 

h  e  l  l  o    w  o  r  l  d

0  1  2  3  4  5  6  7  8  9  10

Now when we are iterating through the last index to first and putting it in an empty string we are taking it from index 10 to 0.

My second method to reverse a string is by using built in functions that are provied in javascript.

An example of it will be:

let's take a string "world"

split(''): would separate all characters as 'w','o','r','l','d'

reverse(): would reverse the characters as 'd','l','r','o','w'

join(''): would join each letter to form 'dlrow'

And the third method is to perform recursive function which calls itself several times during it's execution.

Let me explain the third method with an example:

We take a string "hello" 

1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"

2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"

3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"

4th call – reverseString("lo")      will return   reverseString("o")              + "l"

5th call – reverseString("o")       will return   reverseString("")               + "o"


Second part of the recursion method

The method hits the if condition and the most highly nested call returns immediately.


5th call will return reverseString("") + "o" = "o"

4th call will return reverseString("o") + "l" = "o" + "l"

3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"

2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"

1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
