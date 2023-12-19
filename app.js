const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 0.9;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

}

window.addEventListener('load', ()=>{
    speak("Initializing Groud");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir, I'm Groad personal assistant How can I Help You?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...") 
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com/mashik.ur.31?mibextid=ZbWKwL", "_blank");
        speak("Opening Facebook...")
    }else if(message.includes('k tomi ')) {
    // Your custom action or response here
    const finalText = "Performing a custom action for your command";
    speak(finalText);
}
else if (message.includes('play music')) {
    // Your custom action for playing music
    const finalText = "Playing your favorite music";
    speak(finalText);
} else if (message.includes('tell joke')) {
    // Your custom action for telling a joke
    const finalText = "Sure, here's a joke for you: " + getJoke("fuck you");
    speak(finalText);
} else if (message.includes('open website')) {
    // Your custom action for opening a website
    const finalText = "Opening the requested website";
    speak(finalText);
} else if (message.includes('search')) {
    // Your custom action for performing a search
    const finalText = "Searching for your query";
    speak(finalText);
} else if (message.includes('who is your creator')) {
    // Your custom action for performing a search
    const finalText = "Md shishir i,m ";
    speak(finalText);
}
else if (message.includes('set reminder')) {
    // Your custom action for setting a reminder
    const finalText = "Reminder set successfully";
    speak(finalText);
} else if (message.includes('weather')) {
    // Your custom action for checking the weather
    const finalText = "Checking the current weather conditions";
    speak(finalText);
} else if (message.includes('send_email')) {
    // Your custom action for sending an email
    const finalText = "Sending the email as requested";
    speak(finalText);
} else if (message.includes('translate')) {
    // Your custom action for translating text
    const finalText = "Translating the provided text";
    speak(finalText);
}  else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}
