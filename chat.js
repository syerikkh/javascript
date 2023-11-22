// Array of messages to display
const messages = [
    "Hello!",
    "How are you?",
    "I hope you're doing well.",
    "Let me know if you have any questions!",
];

// Function to display messages with a delay
function displayMessages() {
    // Iterate through the messages using a for loop
    for (let i = 0; i < messages.length; i++) {
        // Use setTimeout to create a delay for each message
        setTimeout(() => {
            console.log(messages[i]); // Display the current message
        }, i * 1000); // The delay is multiplied by i to create a staggered effect
    }
}

// Call the function to start displaying messages
displayMessages();
