const myHeading = document.querySelector("h1");

function rand(number) {
  return truncate(Math.random(number);
}

myHeading.textContent = "Hello world! " + rand(200);
