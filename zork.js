const prompt = require('prompts');
async function name(){
   return await prompt ({
        type: 'text',
        name: 'value',
        message: 'What is your name?',
    });
}
name().then(function(response) {
   // console.log(`Hello ${response.value}, welcome to the game of idk yet, press enter to begin.`)
})

function gamestart(){
    console.log("You wake up in a daze, you do not know where you are or how you got there, upon looking around you notice the entrance to a cave and a path that leads to a forest, the cave has a torch but no means of lighting it except for a wet match in your pocket, the path that leads to the forest seems ominous but it could be your way out, what do you choose?")
    
}
setTimeout(gamestart, 5000);

/*function decide1() {
const prompts = require('prompts');
let response = prompts({
    type: 'text',
    name: 'value',
    message: 'Do you choose the forest or the cave? (simply type forest or cave to decide)',
});
}
decide1()
*/






/*
//Currently have this commented out so I can test indiivudal lines before allowing it all to execute to isolate errors.
if (decision1 === "forest".toLowerCase()) {
    console.log("You venture into the forest, not sure where to go next, along the path you encounter a bush filled with wild berries, your are terribly hungry");
var berries = prompt("Do you wish to eat the berries? yes or no");
if (berries === "yes") {
    console.log("You eat the berries and venture on, you notice your stomach is kind of queasy but you feel content so you shrug it off");
}
    else {
        console.log("You venture on into the path of the unkown forest, your stomach growls in agonizing hunger, you hope you find some food soon.");
    }
}
else {
    console.log("You walk up to the torch and grab your wet match, you attempt to strike it on a rock to ignite it but it breaks in half, you end up venturing into the cave in complete darkness.")
}
*/
