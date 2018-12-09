var player = prompt("What is your name?");
console.log(`Hello ${player}, welcome to the game of idk yet, prepare yourself.`);
console.log("You wake up in a daze, you do not know where you are or how you got there, upon looking around you notice the entrance to a cave and a path that leads to a forest, the cave has a torch but no means of lighting it except for a wet match in your pocket, the path that leads to the forest seems ominous but it could be your way out, what do you choose?");
var decision1 = window.prompt("Do you choose the forest or the cave? simply type forest or cave to decide");
if (decision1 === "Forest") {
    console.log("You venture into the forest, not sure where to go next, along the path you encounter a bush filled with wild berries, your are terribly hungry");
var berries = window.prompt("Do you wish to eat the berries? yes or no");
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
