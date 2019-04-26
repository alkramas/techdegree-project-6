
// dom element selection
const qwerty = document.querySelector('div#qwerty');
const phrase = document.querySelector('div#phrase');
const scoreboard = document.querySelector('ol');

// let typedletter;
let phraseArray;
let missed = 0;

// array of phrases
const phrases = ['I still havnt found what I am looking for', 'Vertigo', 'Man and Woman', 'Stuck in a moment', 'City of blinding lights', 'Joshua Tree', 'Sometimes You Cant Make It On Your Own'];

// select overlay element and hide on click
const overlay = document.querySelector('div#overlay');
document.querySelector('a.btn__reset').addEventListener('click', function() {
  overlay.style.display = 'none';
});

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
};
addPhraseToDisplay(phraseArray);



//call timeout to load appended nodes to dom
window.setTimeout((something) => {
  console.log(something);
}, 0, 'timeout logged');


// function: test typed letter with phrase, handle branches
function checkLetter(button) {
  // get selection of all li letters content for comparison
  const phraseletters = document.querySelectorAll('.letter');
  const letterFound = button.innerText;
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
      for (let i = 0; i < phraseletters.length; i += 1) {
        let phraselettersItem = phraseletters[i];
        let phraselettersItemHTML = phraselettersItem.innerHTML;
        let phraselettersText = phraselettersItemHTML.toLowerCase();

        if (phraselettersText.includes(letterFound)) {
          console.log('found match with letter ' + letterFound);
          phraseletters[i].classList.add('show');
        }
      }
  }
};

function checkWin() {

  if () {

  } else if () {

  }
  console.log();
};

// Add an event listener to the keyboard container, call checkLetter function on event
qwerty.addEventListener('click', (event) => {
  // add class on typed letters
  if (event.target.tagName == 'BUTTON') {
      event.target.className = 'chosen';
      event.target.disabled = true;
      const targetbutton = event.target;

      checkLetter(targetbutton);

      //checkWin();
  }
});
