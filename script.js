`use strict`;
//selected message element (by using querySelector) then selected .textContent to actually read the content
/*console.log(document.querySelector(".message").textContent); //reading the content

// now lets set content of element
document.querySelector(`.message`).textContent = `Correct Number!`; // read it again now saying: `Correct number!` (DOM manipualtion- we edited the content)

document.querySelector(`.number`).textContent = 13; // specifically editing the `textContent` meaning just the number text not the whole element
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value); //using `.value` bc we're editing the actual input not an element of the document
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; // we want the random number between 1 and 20, Math.trunc: cuts off decimal part
let score = 20;
let highscore = 0; //0 bc the first score will always be the highscore bc its bigger than 0

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = 20;
  displayMessage(`Start guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ` `;
});
//addEventListener is a method, so we need to pass in the type of event and what it should do (hence a function)
document.querySelector(`.check`).addEventListener(`click`, function () {
  //functions are just values, so we can pass these 'values' as an argument here
  // storing it in a variable so we can retrieve it
  //JS will call the function only when event happens, we don't call the function
  // We only define function and then pass it in to eventHandler & JS will call this function as soon as event happens

  let guess = Number(document.querySelector(".guess").value); //in the function: whatever value gets typed in the input box will get stored in console
  console.log(guess, typeof guess);
  // with an input box, we have to make sure there even is an input first.
  if (!guess) {
    //says 'its not a guess' so output No Number! (not a guess has to be true in order for first code block to execute otherwise it'll say NaN)
    // document.querySelector(`.message`).textContent = `❌ No Number!`; //since no value inputed = false bc 0 is falsey, so guess is false and we use the "Not"(!) operator to convert it to true so we can execute the `No number` code block
    displayMessage(`❌ No Number!`);
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage(` 🎉 Correct Number!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    //   when guess is wrong (DRY code version)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(`.message`).textContent =
      //     guess > secretNumber ? `📈 Too high!` : `📉 Too low!`;
      //   score--;
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      //   document.querySelector(`.message`).textContent = `💥 You lost the game!`;
      displayMessage(`💥 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
  //     // when guess is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `📈 Too high!`; // this should only happen if score is above 0
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `💥 You lost the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }

  // when guess is too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(`.message`).textContent = `📉 Too low!`;
  //       score--;
  //       document.querySelector(`.score`).textContent = score;
  //     } else {
  //       document.querySelector(`.message`).textContent = `💥 You lost the game!`;
  //       document.querySelector(`.score`).textContent = 0;
  //     }
  //   }
});
