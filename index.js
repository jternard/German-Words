const wordsFileLocation = './5000 german words - Words.tsv'
const wordCount = 2426; //to be manually updated

const verbsFileLocation = './5000 german words - Verbs.tsv'
const verbCount = 900; //to be manually updated

const otherFileLocation = './5000 german words - Other.tsv'
const otherCount = 1099; //to be manually updated

const myHeading = document.querySelector("h1");
const myWordLocation = document.querySelector("p");
//const mySkipButton = document.querySelector("#btnSkip");

const germanWordInHTML = document.getElementById("inputGerman");
const englishWordInHTML = document.getElementById("inputTranslation");

var id;
var mainString;
var mainWord;
var mainTranslation;
var mainArticle;



function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomWordID() {
  return getRandomInt(0, wordCount);
}
function getRandomVerbID() {
  return getRandomInt(0, verbCount);
}
function getRandomOtherID() {
  return getRandomInt(0, otherCount);
}


//https://github.com/mdn/dom-examples/blob/main/fetch/fetch-text/index.html
function getData(fileName, rowID) {
  const myRequest = new Request(fileName);
  fetch(myRequest)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error, status = ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      return text.split("\n")[rowID];
      /*
      myWordLocation.textContent = text.split("\n")[rowID];
      GermanWordInHTML.textContent = myWordLocation.textContent.split("\t")[0];
      EnglishWordInHTML.textContent = myWordLocation.textContent.split("\t")[1];
      */
    })
    .catch((error) => {
      return `Error: ${error.message}`;
      //myWordLocation.innerText = `Error: ${error.message}`;
    });
}

function getGermanWord(rowID) {
  console.log(rowID);
  getData(wordsFileLocation, rowID);
}

//mySkipButton.addEventListener("click", GetGermanWord(GetRandomWordID()));

//click on the next button --> init all variables and set the fields
function setNewWord() {
  id = getRandomWordID();
  mainString = async () => await getData(wordsFileLocation, id);
  mainWord = mainString.split("\t")[0];
  mainTranslation = mainString.split("\t")[1];
  mainArticle = mainString.split("\t")[2]; //this exists only for words, not for verbs or other
}

function renderWord() {
  myWordLocation.textContent = id + ' : ' + mainString;
  germanWordInHTML.textContent = mainWord;
  englishWordInHTML.textContent = mainTranslation;
}

function newWord() {
  setNewWord();
  renderWord();
}
