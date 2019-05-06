var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  console.log("== textContent", event.currentTarget.textContent);
  var text = event.currentTarget.value;
  allWords = text.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '')
    .toLowerCase().split(' ');
  currentWord = 0;
  console.log("== New words:", allWords);
}

function generateWordElement(word, highlight) {
  var wordElement = document.createElement('span');
  wordElement.classList.add('word');
  wordElement.textContent = word;

  if (highlight) {
    wordElement.classList.add('highlight');
  }

  return wordElement;
}

function getEveryNth() {
  var everyNthSelect = document.getElementById('every-nth-select');
  return parseInt(everyNthSelect.value);
}

function handleAddWordButtonClick(event) {
  var word = allWords[currentWord];
  console.log("== word:", word);
  if (word) {
    var everyNth = getEveryNth();
    var highlight = !((currentWord + 1) % everyNth);

    var wordElement = generateWordElement(word, highlight);
    console.log("== wordElement:", wordElement);

    var container = event.currentTarget.parentNode.parentNode;
    var wordsContainer = container.querySelector('.words-container');
    wordsContainer.appendChild(wordElement);

    currentWord = (currentWord + 1) % allWords.length;
  }
}

var wordsInput = document.getElementById('words-input');
wordsInput.addEventListener('change', handleNewWordsEntered);

var buttons = document.getElementsByClassName('add-word-button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleAddWordButtonClick);
}
