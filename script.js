// This line stores a REFERENCE to the element with id "topDisplay"
const topDisplay = document.getElementById("topDisplay");

// This line gets all elements that are "button" elements and stores them as a NodeList
const buttons = document.querySelectorAll("button");

const symbolList = ["+", "-", "%", "x"];
let symbol = "a";
let currentValue = 0;

/*
    this is the function that gets activated when a button is clicked.
    "this" refers to the button being clicked.
    "textContent" gets the content of an element.
    Then set the content of topDisplay to the button pressed.
*/

// When a button on the calculator is clicked, this function starts
// It checks what kind of button it was and will do the correct action
function buttonClick()
{
    const buttonValue = this.textContent;
    // Checks if user what's to finish calculation
    if (buttonValue == "=")
    {
        currentValue = eval(currentValue);
        topDisplay.textContent = currentValue;
    }
    // Checks if user wants to do an operation
    else if (symbolList.includes(buttonValue))
    {
        symbol = buttonValue;
        currentValue += symbol
        topDisplay.textContent += symbol;
    }
    else
    {
        currentValue += buttonValue;
        topDisplay.textContent += buttonValue;
    }
    alert("button " + buttonValue);
    alert("current " + currentValue);
    
}

/* 
    Loop through each button in the "buttons" NodeList
    For each button, add an event listener for a click event.
    When it's triggerd, do the function.
*/
buttons.forEach(function(button) {
    button.addEventListener("click", buttonClick);
});
