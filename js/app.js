
// dom element selection
const qwerty = document.querySelector('div#qwerty');
const phrase = document.querySelector('div#phrase');
// let typedletter;
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
          li.className = "letter";
         }
    ul[0].appendChild(li);
    // console.log(phrase);
  };
};
addPhraseToDisplay(phraseArray);



//call timeout to load appended nodes to dom
window.setTimeout((something) => {
  console.log(something);
}, 0, 'timeout logged');


function checkLetter(button) {
  // get selection of all li letters content for comparison
  let phraseletters = document.querySelectorAll('.letter');
  const letterFound = button.innerText;
  const phraseArrayString = phraseArray.toString();

  // console.log(letterFound);
  for (let i = 0; i <   phraseletters.length; i += 1) {
    let phraselettersTextValue = phraseletters[i].innerText;
    let phraselettersText = phraselettersTextValue.toLowerCase();
    // console.log(phraselettersText);
    if (phraselettersText.includes(letterFound)) {
      // phraselettersText[i].parentNode.addClass('show');
      console.log('found match');
      phraseletters[i].classList.add('show');
    }
  }
};

// Add an event listener to the keyboard container, call checkLetter function on event
qwerty.addEventListener('click', (event) => {
  // add class on typed letters
  if (event.target.tagName == 'BUTTON') {
      event.target.className = 'chosen';
      event.target.disabled = true;
      const targetbutton = event.target;
      // console.log(targetbutton);
      checkLetter(targetbutton);
  }
});
