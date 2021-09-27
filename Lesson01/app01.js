require("./instantHello.js");
const goodbye = require("./goodbye.js");
goodbye();

const talk = require("./talk");
talk.greeting();
talk.intro();

const question = require("./talk/question");
const answer = question.ask("What is the meaning of life?");
console.log(answer);