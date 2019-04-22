
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

//
function checkLetter(button) {
  let letters = document.querySelector('.letter').innerText;
  for (let i = 0; i < letters.length; i += 1) {
    if (letters[i].includes(typedletter)) {
        
    } else
  };
};
