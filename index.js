// index.js

// Array of random subjects
const subjects = [
    'You',
    'Your potential',
    'Your hard work',
    'Your creativity',
    'Your determination'
];

// Array of random actions
const actions = [
    'will lead you to success.',
    'is limitless.',
    'is admired by everyone.',
    'will open new doors.',
    'can change the world.'
];

// Array of random additional phrases
const extras = [
    'Keep going!',
    'Believe in yourself.',
    'Never give up.',
    'Stay focused and stay positive.',
    'You are unstoppable!'
];

// Function to generate a random message
function generateMessage() {
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomExtra = extras[Math.floor(Math.random() * extras.length)];

    return `${randomSubject} ${randomAction} ${randomExtra}`;
}

// Output the generated message
console.log(generateMessage());