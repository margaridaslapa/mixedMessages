 //palavras random
 const colours = ['red', 'yellow', 'blue','brown', 'orange', 'green', 'violet', 'black', 'pink', 'white', 'gray'];
 const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
 const animals = ['lion', 'tiger', 'shark', 'whale', 'snake', 'bear', 'crocodile', 'wolf', 'penguin', 'raccoon', 'rhinoceros', 'hippopotamus', 'panda', 'tortoise'];

 // função para dar a messagem toda
 function clickButton () {
    var randomColours = colours[Math.floor(Math.random() * colours.length)];
    var randomNumbers = numbers [Math.floor(Math.random() * numbers.length)];
    var randomAnimals = animals[Math.floor(Math.random() * animals.length)];
    var message = 'If you were born on the ' + randomNumbers + ' of the month, your color is ' + randomColours + ' and there\'s definitly a ' + randomAnimals + ' inside you!';
    return message;
 }

console.log(clickButton())

newCommit