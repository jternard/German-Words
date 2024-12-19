const myHeading = document.querySelector("h1");

function rand(number) {
  return Math.trunc(Math.random(number);
}

myHeading.textContent = "Hello world! " + rand(200);
