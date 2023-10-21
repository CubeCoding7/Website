// Get the line numbers div and the window element
var lineNumbers = document.querySelector(".line-numbers");
var win = window;
var body = document.body;

// Define a function to update the line numbers
function updateLineNumbers() {
  // Get the number of lines in the window
  var lines = win.innerHeight / parseInt(getComputedStyle(body).fontSize);

  // Clear the line numbers div
  lineNumbers.innerHTML = "";

  // Loop through each line and append a span element with the line number
  for (var i = 1; i <= lines; i++) {
    var span = document.createElement("span");
    span.innerText = i + "\n";
    lineNumbers.appendChild(span);
  }
}

// Call the function initially
updateLineNumbers();

// Add an event listener to the window to update the line numbers on resize
win.addEventListener("resize", updateLineNumbers);