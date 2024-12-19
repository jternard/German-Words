const wordsFileLocation = './5000 german words - Words.tsv'
const wordCount = 2426; //to be manually updated
var wordFile;

const verbsFileLocation = './5000 german words - Verbs.tsv'
const verbCount = 900; //to be manually updated
var verbFile;

const otherFileLocation = './5000 german words - Other.tsv'
const otherCount = 1099; //to be manually updated
var otherFile;

const myHeading = document.querySelector("h1");
const myWordLocation = document.querySelector("p");
const mySkipButton = document.querySelector("#btnSkip");


function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function GetRandomWordID() {
  return getRandomInt(0, wordCount);
}
function GetRandomVerbID() {
  return getRandomInt(0, verbCount);
}
function GetRandomOtherID() {
  return getRandomInt(0, otherCount);
}

function SetGermanWord() {
  myWordLocation.textContent = GetRandomWordID();
}

function GetFile(fileName) {
  var client = new XMLHttpRequest();
  client.open('GET', fileName);
  client.onreadystatechange = function() {
    wordFile = client.responseText;
  }
  client.send();
}

function FetchFile(fileName) {
  fetch(fileName)
    .then(response => varFile = response.text());
}

const image = document.querySelector(".my-image");
fetch("flowers.jpg")
  .then((response) => response.blob())
  .then((blob) => {
    const objectURL = URL.createObjectURL(blob);
    image.src = objectURL;
  });


function GetGermanWord(rowID) {
  FetchFile('./5000 german words - Words.tsv'); //should only be loaded if not already loaded
  return wordFile.slice(rowID, wordFile.indexOf("\n"));
}


myHeading.textContent = "Hello world!";
myWordLocation.textContent = "Let's take word: " + GetRandomWordID() + " out of " + wordCount
mySkipButton.addEventListener("click", GetGermanWord(GetRandomWordID()));
