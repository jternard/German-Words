const wordCount = 2426;
const verbCount = 900;
const otherCount = 1099;

const myHeading = document.querySelector("h1");
const myWordLocation = document.querySelector("p");

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

myHeading.textContent = "Hello world!";
myWordLocation.textContent = "Let's take word: " + GetRandomWordID() + " out of " + wordCount
