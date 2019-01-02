"use strict"; // enables >=ES5 functionality

// Semicolons are auto-inserted in most cases, when newline exists

alert("Hello, ")
alert("World!")

// ...is equivalent to

alert("Hello, ");
alert("World!");

// ...and

alert("Hello, "); alert("World!");

/* General Rule: ALWAYS USE SEMICOLONS!

In some cases, this auto-insertion of semicolons will not work as expected!
*/

// Leaving out the semicolong here will result in an error, as ";" are not inserted before square brackets!

alert("There would be an error without semicolon at the end of this line!");
[1, 2].forEach(alert)