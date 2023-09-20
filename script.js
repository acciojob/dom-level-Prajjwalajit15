//your JS code here. If required.
// Find the element with id "level"
const element = document.getElementById("level");

// Initialize a counter to keep track of the DOM level
let domLevel = 0;

// Traverse the DOM tree by repeatedly moving to the parent node until the root html element is reached
while (element && element !== document.documentElement) {
    element = element.parentNode;
    domLevel++;
}

// Display the DOM level using alert()
alert("The level of the element is: " + domLevel);
