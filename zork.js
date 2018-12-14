const prompt = require('prompts');

// abstract the prompt a bit to simplify the interface
const askQuestion = async message => (await prompt({
    type: 'text',
    name: 'value',
    message
})).value;

// this asks a question, and if the response is invalid, asks the question again
const multipleChoiceQuestion = async (question, possibleAnswers) => {

    // ask the question and store the answer here
    const answer = await askQuestion(question);

    // check the answer matches one of the possible answers
    if (!possibleAnswers.includes(answer)){

        // if the answer doesnt match one of the allowed answers, ask again
        console.log(`Invalid answer: ${answer}`);
        return multipleChoiceQuestion(question, possibleAnswers);
    } 

    return answer;
}

const gamestart = async () => {

    // ask the first question and await the response, storing the answer in the playerName constant
    const playerName = await askQuestion("What is your name");
    
    console.log(`Hi ${playerName}`);

    console.log("You wake up in a daze, you do not know where you are or how you got there, upon looking around you notice the entrance to a cave and a path that leads to a forest, the cave has a torch but no means of lighting it except for a wet match in your pocket, the path that leads to the forest seems ominous but it could be your way out, what do you choose?")

    // ask the second question and await the response, storing the answer in the answer1 constant
    const answer1 = await multipleChoiceQuestion("Do you choose the forest or the cave? (simply type forest or cave to decide)", ["cave", "forest"]);

    console.log(`You chose the ${answer1}`);
}

// start the game
gamestart();
