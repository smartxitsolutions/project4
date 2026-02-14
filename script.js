function updateGreeting() {
    // Get the value from the input field
    const name = document.getElementById("userName").value;
    const greetingElement = document.getElementById("greeting");

    // Check if the name is not empty
    if (name.trim() !== "") {
        greetingElement.innerText = "Hello, " + name + "!";
    } else {
        greetingElement.innerText = "Please enter a name.";
    }
}
// Function to change the background of the clicked box
        function changeBoxColor(element, color) {
            element.style.backgroundColor = color;
            
            // Adjust text color for visibility on darker backgrounds
            if (color === 'blue' || color === 'green' || color === 'red') {
                element.style.color = 'white';
            } else {
                element.style.color = 'black';
            }
        }