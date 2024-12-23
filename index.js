const wordsFileLocation = './5000 german words - Words.tsv'
const wordCount = 2426; //to be manually updated

const verbsFileLocation = './5000 german words - Verbs.tsv'
const verbCount = 900; //to be manually updated

const otherFileLocation = './5000 german words - Other.tsv'
const otherCount = 1099; //to be manually updated

const myHeading = document.querySelector("h1");
//const myWordLocation = document.querySelector("p"); //for testing purpose only
//const mySkipButton = document.querySelector("#btnSkip");

const germanWordInHTML = document.getElementById("inputGerman");
const englishWordInHTML = document.getElementById("inputTranslation");

var id;
var mainString;
var mainWord;
var mainTranslation;
var mainArticle;

var denom = 0;
var num = 0;
var currentAttemptsAtWord = 0;



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
      mainString = text.split("\n")[rowID];
      //myWordLocation.textContent = mainString;
      var mySplit = mainString.split("\t");
      mainWord = mySplit[0];
      mainTranslation = mySplit[1];
      //germanWordInHTML.textContent = mySplit[0];
      //englishWordInHTML.textContent = mySplit[1];
      mainArticle = mySplit[2].substr(0,3);
      /*
      myWordLocation.textContent = text.split("\n")[rowID];
      germanWordInHTML.textContent = myWordLocation.textContent.split("\t")[0];
      englishWordInHTML.textContent = myWordLocation.textContent.split("\t")[1];
      */
      renderWord();
      document.getElementById("btnDER").className = "btn btn-outline-primary";
      document.getElementById("btnDIE").className = "btn btn-outline-primary";
      document.getElementById("btnDAS").className = "btn btn-outline-primary";
    })
    .catch((error) => {
      //return `Error: ${error.message}`;
      myWordLocation.innerText = `Error: ${error.message}`;
    });
}

const getMainString = (wordsFileLocation, id) => {
  getData(wordsFileLocation, id).then((txt) => {
    mainString = txt;
  });
}

function getGermanWord() {
  id = getRandomWordID();
  getData(wordsFileLocation, id);
  currentAttemptsAtWord = 0;
}

//mySkipButton.addEventListener("click", GetGermanWord(GetRandomWordID()));

//click on the next button --> init all variables and set the fields
/*
async function setNewWord() {
  id = getRandomWordID();
  mainString = await getData(wordsFileLocation, id);
  mainWord = mainString.split("\t")[0];
  mainTranslation = mainString.split("\t")[1];
  mainArticle = mainString.split("\t")[2]; //this exists only for words, not for verbs or other
}
*/

function renderWord() {
  //myWordLocation.textContent = id + ' : ' + mainString; //for testing purpose only
  germanWordInHTML.textContent = mainWord;
  englishWordInHTML.textContent = mainTranslation;
}

function newWord() {
  setNewWord();
  renderWord();
}

function checkArticle(caller) {    
  var btnArticle = caller.id.substr(-3).toLowerCase();
  if (btnArticle === mainArticle) {
    caller.className = "btn btn-success";
    if (currentAttemptsAtWord == 0) {
      num++;
    }
  } else {
    caller.className = "btn btn-danger";
  }
  
  if (currentAttemptsAtWord == 0) {
    currentAttemptsAtWord++;
    denom++;
  }

  document.getElementById("pct").textContent = num + ' / ' + denom + ' (' + Math.round(100 * num / denom, 0)+'%)';
}
