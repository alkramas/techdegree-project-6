
// dom element selection
const qwerty = document.querySelector('div#qwerty');
const phrase = document.querySelector('div#phrase');
const scoreboard = document.querySelector('ol');
const btn = document.querySelector('.btn__reset');
const overlay = document.querySelector('#overlay');

// let typedletter;
let phraseArray;
let missed = 0;
let correctGuesses = 0;

// array of phrases
const phrases = ['I still havnt found what I am looking for', 'Vertigo', 'Man and Woman', 'Stuck in a moment', 'City of blinding lights', 'Joshua Tree', 'Sometimes You Cant Make It On Your Own'];

const allhearts = `
  <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
  <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
  <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
  <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
  <li class="tries"><img src="images/liveHeart.png" height="35px" width="30px"></li>
`;

function Timeout() {
  window.setTimeout((something) => {
    console.log(something);
  }, 200, 'timeout logged');
};

// get a random phrase and split array item into characters
function getRandomPhraseAsArray(arr) {
  let randomNumber = Math.floor((Math.random() * 7) + 0);
  let phrase = arr[randomNumber];
  phraseArray = phrase.split("");
  console.log(phraseArray);
};
// call ramdom phrase function returns array of characters
getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
  let x;
  for (x in phraseArray) {
    let li = document.createElement('li');
    li.innerText = phraseArray[x];
    let ul = phrase.children;
      if (phraseArray[x] !== " ") {
          li.className = "letter";
         }
    ul[0].appendChild(li);
  };
  return phrase;
};
addPhraseToDisplay(phraseArray);

//call timeout to load appended nodes to dom
// Timeout();

btn.addEventListener('click', (e) => {
    if (btn.textContent === 'Start Game') {
      overlay.style.display = 'none';
      missed = 0;
      correctGuesses = 0;
      overlay.classList.remove('lose');
      overlay.classList.remove('win');
    } else if (btn.textContent === 'Start over again') {
        //remove previous li's with phrase letters
        let ul = document.querySelector('ul');
        let ulChild = ul.children;

        // remove previous phrases li.letters
        while (ul.hasChildNodes()) {
          ul.removeChild(ul.firstChild);
        }
        // create and append new random phrase
        getRandomPhraseAsArray(phrases);
        addPhraseToDisplay(phraseArray);
        Timeout();

        overlay.style.display = 'none';
        overlay.classList.remove('lose');
        overlay.classList.remove('win');
        missed = 0;
        correctGuesses = 0;
        scoreboard.innerHTML = allhearts;
        const buttonsChosen = document.querySelectorAll('.chosen');
        // const ul = phrase.children;
        // const listShow = ul.querySelectorAll('.show');
        for (let i = 0; i < buttonsChosen.length; i += 1) {
          buttonsChosen[i].className = '';
          buttonsChosen[i].disabled = false;
        }
    }
});


// select appended li elements with class letter
// used in checkletter and checkwin functions
let phraseletters = document.querySelectorAll('.letter');
console.log('phraseletter is ' + phraseletters );
let phraselength = phraseletters.length;


// function: test typed letter with phrase, handle branches
function checkLetter(button) {
  // get selection of all li letters content for comparison
  const letterFound = button.innerText;
  console.log('Letter Found is '+ letterFound);
  const phraseString = phraseArray.toString();
  const phraseStringLower = phraseString.toLowerCase();

  // handle wrong guesses
  if (!phraseStringLower.includes(letterFound)) {
    missed += 1;
    const scoreboardItem = document.querySelector('.tries');
    console.log('you have ' + (5 - missed) + ' guess(es) left');
    scoreboard.removeChild(scoreboardItem);
  } else {
      // handle correct guesses
      phraseletters = '';
      phraselength = 0;
      Timeout();
      phraseletters = document.querySelectorAll('.letter');
      phraselength = phraseletters.length;

      for (let i = 0; i < phraseletters.length; i += 1) {
        let phraselettersItem = phraseletters[i];
        // console.log('phraselettersItem is ' + phraselettersItem)
        let phraselettersItemHTML = phraselettersItem.innerHTML;
        let phraselettersText = phraselettersItemHTML.toLowerCase();

        if (phraselettersText.includes(letterFound)) {
          // console.log('match occured with letter from keyboard: ' + letterFound);
          phraseletters[i].classList.add('show');
          correctGuesses += 1;
        }
      }
  }
};

function checkWin() {
  const btn = document.querySelector('a.btn__reset');
  // handle loose branch with if
  if (missed == 5) {
    console.log('you lost');
    overlay.style.display = '';
    overlay.classList.add('lose');
    const message = document.querySelector('.title');
    message.textContent = 'Sorry, you lost!';
    btn.textContent = 'Start over again';
  }
  // handle win branch with else
  else if (correctGuesses == phraselength) {
    console.log('you won');
    overlay.style.display = '';
    overlay.classList.add('win');
    const message = document.querySelector('.title');
    message.textContent = 'Congratulations, you won!';
    btn.textContent = 'Start over again';
  }
};

// Add an event listener to the keyboard container, call checkLetter function on event
qwerty.addEventListener('click', (event) => {
  // add class on typed letters
  if (event.target.tagName == 'BUTTON') {
      event.target.className = 'chosen';
      event.target.disabled = true;
      const targetbutton = event.target;
      checkLetter(targetbutton);
      checkWin();
  }
});
