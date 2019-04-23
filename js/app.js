
// dom element selection
const qwerty = document.querySelector('div#qwerty');
const phrase = document.querySelector('div#phrase');
let typedletter;
let phraseArray;
let missed = 0;

// array of phrases
const phrases = ['I still havnt found what I am looking for', 'Stuck in a moment', 'City of blinding lights', 'Joshua Tree', 'Sometimes You Cant Make It On Your Own'];

// select overlay element and hide on click
const overlay = document.querySelector('div#overlay');
document.querySelector('a.btn__reset').addEventListener('click', function() {
  overlay.style.display = 'none';
});

// get a random phrase and split array item into characters
function getRandomPhraseAsArray(arr) {
  let randomNumber = Math.floor((Math.random() * 5) + 0);
  // console.log(randomNumber);
  let phrase = arr[randomNumber];
  // console.log(phrase);
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
          li.classList.add("letter");
         }
    ul[0].appendChild(li);
    console.log(phrase);
  };
};

addPhraseToDisplay(phraseArray);



//The checkLetter function should get all of the
// elements with a class of “letter” (remember that we added the letter class to all of the letters and none of the spaces when we made the game display).

// The function should loop over the letters and check if they match the letter in the button the player has chosen.

// If there’s a match, the function should add the “show” class to the list item containing that letter,

// store the matching letter inside of a variable, and return that letter.

// If a match wasn’t found, the function should return null:

function checkLetter(button) {
  // get selection of all li letters content for comparison
  const phraseletters = document.querySelector('.letter');
  const phraselettersText = phraseletters.innerText;
  // console.log(letters);

  // check each letter for match with typed letter
  for (let i = 0; i < phraselettersText.length; i += 1) {
    if (phraselettersText[i].includes(typedletter)) {
      phraselettersText[i].parentNode.addClass('show');
    }
  };
};

// Add an event listener to the keyboard.
qwerty.addEventListener('click', function() {
  // console.log(event.target);
  let eventTar = event.target;
  // eventTar.addClass('chosen');
});

// Use event delegation to listen only to button events from the keyboard. When a player chooses a letter, add the “chosen” class to that button so the same letter can’t be chosen twice.
// Note that button elements have an attribute you can set called “disabled” that when set to true will not respond to user clicks. See the MDN documentation for more details.
// Pass the button to the checkLetter function, and store the letter returned inside of a variable called letterFound. At this point, you can open the index.html file, click any of the letters on the keyboard, and start to see the letters appear in the phrase.
