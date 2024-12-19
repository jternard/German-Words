const wordCount = 2426;
const verbCount = 900;
const otherCount = 1099;

const myHeading = document.querySelector("h1");
const myWordLocation = document.querySelector("p");

function rand(number) {
  return Math.trunc(Math.random(number));
}

function GetRandomWordID() {
  return rand(wordCount);
}
function GetRandomVerbID() {
  return rand(verbCount);
}
function GetRandomOtherID() {
  return rand(otherCount);
}
*/

myHeading.querySelector("h1").textContent = "Hello world!";
myWordLocation.textContent = "ok"
