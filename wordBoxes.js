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

var wordsInput = document.getElementById('words-input');
wordsInput.addEventListener('change', handleNewWordsEntered);
