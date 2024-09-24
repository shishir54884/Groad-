function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, I'm Groad, your personal assistant. How can I help you?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com/mashik.ur.31?mibextid=ZbWKwL", "_blank");
        speak("Opening Facebook...");
    }
    else if(message.includes('k tomi ')) {
        speak("Performing a custom action for your command.");
    }
    else if(message.includes('play music')){
        speak("Playing your favorite music.");
    }
    else if(message.includes('tell joke')){
        const finalText = "Sure, here's a joke for you: " + getJoke();
        speak(finalText);
    }
    else if(message.includes('who is your creator')){
        speak("Md Shishir is my creator.");
    }
    else if(message.includes('set reminder')){
        speak("Reminder set successfully.");
    }
    else if(message.includes('weather')){
        speak("Checking the current weather conditions.");
    }
    else if(message.includes('send email')){
        speak("Sending the email as requested.");
    }
    else if(message.includes('translate')){
        speak("Translating the provided text.");
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')){
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("This is what I found on the internet regarding " + message);
    }
    else if(message.includes('wikipedia')){
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        speak("This is what I found on Wikipedia regarding " + message);
    }
    else if(message.includes('time')){
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        speak("The current time is " + time);
    }
    else if(message.includes('date')){
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"});
        speak("Today's date is " + date);
    }
    else if(message.includes('calculator')){
        window.open('Calculator:///');
        speak("Opening Calculator...");
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("I found some information on Google regarding " + message);
    }
}
recognition.onerror = (event) => {
    speak("Sorry, I didn't catch that. Could you please repeat?");
    content.textContent = "Error: " + event.error;
};
// Create a large list of questions and answers
const qaList = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet in the solar system?", answer: "Jupiter" },
    { question: "Who developed JavaScript?", answer: "Brendan Eich" },
    { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
    // You can add as many questions and answers as needed here
    // ...
];

// Function to search for a question
function findAnswer(userInput) {
    // Search for the question in the list
    const result = qaList.find(qa => userInput.toLowerCase().includes(qa.question.toLowerCase()));
    
    if (result) {
        speak(result.answer); // Speak the answer
        return result.answer;  // Optionally return the answer
    } else {
        speak("Sorry, I don't know the answer to that.");
        return null;
    }
}

btn.addEventListener('click', () => {
    content.textContent = "Listening....";
    recognition.start();
});

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
}

function takeCommand(message) {
    if (message.includes('question')) {
        findAnswer(message);
    } else {
        // Other commands can go here
        speak("I did not understand that command.");
    }
}

// Example of using the speak function
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 0.9;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}
[
    {"question": "What is the capital of France?", "answer": "Paris"},
    {"question": "Who invented the telephone?", "answer": "Alexander Graham Bell"},
    // 1000+ questions and answers
]
fetch('questions.json')
  .then(response => response.json())
  .then(data => {
    qaList = data;  // Assign the data to qaList
  })
  .catch(error => console.error('Error loading questions:', error));
