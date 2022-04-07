'use strict';

let score = 0;

//welcome message
alert('Welcome to my webpage! Consider this my greeting to you! I hope you enjoy your visit!');

//establishes siteVisitor value
let siteVisitor = prompt(`Let's get to know each other, What is your name?`);

alert(`Welcome ${siteVisitor}, lets play a guessing game. But you gotta answer yes, no, y, or n. Cool? Cool.`);

//question game
let questionOne = prompt('Have I ever tended bar before?').toLowerCase();

if(questionOne === 'yes' || questionOne === 'y'){
  //console.log('q 1 correct');
  score = score + 1;
  alert(`Correct ${siteVisitor}, I have in fact tended a couple bars in my day. Maybe I even served you before!`);
} else if(questionOne === 'no' || questionOne === 'n'){
  alert(`Sorry ${siteVisitor}, but I've spent many a year behind the stick at a couple places in the Bellingham area.`);
} else alert(`Hold your horses there ${siteVisitor}. I thought I was pretty clear I needeed a yes, no, y, or n answer from you. This game is a lot more fun if you do`);

let questionTwo = prompt('Have I ever gone skydiving before?').toLowerCase();

if(questionTwo === 'yes' || questionTwo ==='y'){
  //console.log('question 2 correct');
  alert(`That is also correct ${siteVisitor}, I have gone skydiving before. I only had three panic attacks on the flight up`);
  score = score + 1;
} else if(questionTwo === 'no' || questionTwo === 'n'){
  alert(`Sorry ${siteVisitor}, but I have jumped out of a perfectly good airplane.`);
} else alert(`Hold your horses there ${siteVisitor}. I thought I was pretty clear I needeed a yes, no, y, or n answer from you. This game is a lot more fun if you do`);

let questionThree = prompt('Have I ever ridden an elephant before?').toLowerCase();

if(questionThree === 'yes' || questionThree ==='y'){
  //console.log('q 3 correct');
  alert(`Nope. Sorry to disappoint you ${siteVisitor}, but this site isn't me just bragging, it's also about asking the hard hitting questions like this next one.`);
} else if(questionThree === 'no' || questionThree === 'n'){
  alert(`You're right ${siteVisitor}! I wouldn't try them either way, but I feel like elephant taste terrible for some reason`);
  score = score + 1;
} else alert(`Hold your horses there ${siteVisitor}. I thought I was pretty clear I needeed a yes, no, y, or n answer from you. This game is a lot more fun if you do`);

let questionFour = prompt('Did the act of googling if it was legal to eat elephant make me sad while writing this codeblock?').toLowerCase();

if(questionFour === 'yes' || questionFour ==='y'){
  //console.log('q 4 correct');
  alert(`Good call, ${siteVisitor}. But apparently elephant tastes like veal. Troubling stuff.`);
  score = score + 1;
} else if(questionFour === 'no' || questionFour === 'n'){
  alert(`Do you think I'm heartless, ${siteVisitor}? Shame on you.`);
} else alert(`Hold your horses there ${siteVisitor}. I thought I was pretty clear I needeed a yes, no, y, or n answer from you. This game is a lot more fun if you do`);

let questionFive = prompt('Should I lay off the elephant material?').toLowerCase();

if(questionFive === 'yes' || questionFive ==='y'){
  //console.log('q 5 correct');
  alert('Agreed');
  score = score + 1;
} else if(questionFive === 'no' || questionFive === 'n'){
  alert('Have I not done enough?');
} else alert(`Hold your horses there ${siteVisitor}. I thought I was pretty clear I needeed a yes, no, y, or n answer from you. This game is a lot more fun if you do`);

//6th question with 4 max guesses

//Katharine, Guy, Elizabeth all helped out with the 6th question, and I used a lot of the same code from q6 in q 7

for(let i = 0; i <= 4; i++){

  let questionSix = parseInt(prompt('What is the magic number?'));
  let south = 3;

  if((questionSix > south) && (i <= 3)){
    alert('Too high');
  } else if((questionSix < south) && (i <= 3)){
    alert('Too low');
  } else if((questionSix === south) && (i <= 3)){
    alert('You got it!');
    score = score + 1;
    break;
  } else {
    alert('Better luck next time. It was three');
    break;
  }
}

let myArray = ['daiquiri ', 'old fashioned ', 'manhattan'];

for(let i = 0; i <= 5; i++){

  let questionSeven = prompt('What is one of my three favorite cockatails?').toLowerCase();

  if(questionSeven === myArray[0]){
    alert('Daiquiris are one of my favorites!');
    score = score + 1;
    break;
  } else if(questionSeven === myArray[1]){
    alert('Old fashioneds are one of my favorites!');
    score = score + 1;
    break;
  } else if(questionSeven === myArray[2]){
    alert('Manhattans are one of my favorites!');
    score = score + 1;
    break;
  } else if((questionSeven !== myArray) && (i <= 5)){
    alert(`That's not one of my favorite drinks.`);
  } else{
    alert('None of those were my favorites. Better luck next time.');
  }
}

alert(`The list of my favorite drinks are ${myArray}`);

alert(`Congratulations ${siteVisitor}! You got ${score} of 7 questions correct!`);
