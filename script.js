// This line stores a REFERENCE to the element with id "topDisplay"
const topDisplay = document.getElementById("topDisplay");
// This line gets all elements that are "button" elements and stores them as a NodeList
const buttons = document.querySelectorAll("button");

/*
    this is the function that gets activated when a button is clicked.
    "this" refers to the button being clicked.
    "textContent" gets the content of an element.
    Then set the content of topDisplay to the button pressed.
*/
function buttonClick()
{
    const buttonValue = this.textContent;
    topDisplay.textContent += buttonValue;
}

/* 
    Loop through each button in the "buttons" NodeList
    For each button, add an event listener for a click event.
    When it's triggerd, do the function.
*/
buttons.forEach(function(button) {
    button.addEventListener("click", buttonClick);
});
