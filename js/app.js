// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';

var nouns1 = ['The turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in the spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

var speakButton = document.querySelector('#speakButton');
var resetButton = document.querySelector('#resetButton');
var nounButton = document.querySelector('#nounButton');
var verbButton = document.querySelector('#verbButton');
var adjectiveButton = document.querySelector('#adjectiveButton');
var noun2Button = document.querySelector('#noun2Button');
var placeButton = document.querySelector('#placeButton');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
    // Create a new speech object, attaching the string of text to speak
    var utterThis = new SpeechSynthesisUtterance(string);
    // Actually speak the text
    synth.speak(utterThis);
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function resetText() {
    textToSpeak = '';
}

function addNoun() {
    textToSpeak += getRandomElement(nouns1) + ' ';
}

function addVerb() {
    textToSpeak += getRandomElement(verbs) + ' ';
}

function addAdjective() {
    textToSpeak += getRandomElement(adjectives) + ' ';
}

function addNoun2() {
    textToSpeak += getRandomElement(nouns2) + ' ';
}

function addPlace() {
    textToSpeak += getRandomElement(places) + ' ';
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
    speakNow(textToSpeak);
};

resetButton.onclick = function() {
    resetText();
};

nounButton.onclick = function() {
    addNoun();
};

verbButton.onclick = function() {
    addVerb();
};

adjectiveButton.onclick = function() {
    addAdjective();
};

noun2Button.onclick = function() {
    addNoun2();
};

placeButton.onclick = function() {
    addPlace();
};
