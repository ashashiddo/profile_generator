const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
    "What's your name? Nicknames are also acceptable :)",
    "What's an activity you like doing?",
    "What do you listen to while doing that?",
    "Which meal is your favourite (eg: dinner, brunch, etc.)",
    "What's your favourite thing to eat for that meal?",
    "Which sport is your absolute favourite?",
    "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = {};

const askQuestion = (index) => {
  rl.question(questions[index] + ' ', (answer) => {
    answers[questions[index]] = answer;
    if (index === questions.length - 1) {
      generateProfile();
    } else {
      askQuestion(index + 1);
    }
  });
};

const generateProfile = () => {
  const profile = `
    Name: ${answers[questions[0]]}
    Activity: ${answers[questions[1]]}
    Listening to: ${answers[questions[2]]}
    Favorite meal: ${answers[questions[3]]}
    Favorite food: ${answers[questions[4]]}
    Favorite sport: ${answers[questions[5]]}
    Superpower: ${answers[questions[6]]}
  `;

  console.log('\nProfile Generated:');
  console.log(profile);

  rl.close();
};

askQuestion(0);
