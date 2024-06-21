// Initialize an empty string to store the full name
let fullName = "";

// Array of prompts for first name and last name
let nameParts = ["first name", "last name"];

// Use a for loop to prompt the user for each part of the name
for (let i = 0; i < nameParts.length; i++) {
    // Prompt the user for the current part of the name
    let part = prompt("Please enter your " + nameParts[i] + ":");

    // Ensure the first letter of first and last name is capitalized
    if (i === 0 || i === 1) {
        if (part) {
            // Capitalize the first letter and concatenate with the rest of the string
            part = part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }
    }

    // Append the input to the fullName string with a space separator
    if (part) {
        fullName += part + " ";
    }
}

// Trim any extra whitespace from the final fullName
fullName = fullName.trim();

// Log the full name to the console
console.log(fullName);
