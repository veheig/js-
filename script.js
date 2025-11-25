// const form = document.getElementById("myForm");
const textInput = document.getElementById("text");
const sentence = document.querySelector(".submitted-sentence");
const button = document.querySelector(".button");

const swearWords = [
  "fuck",
  "bitch",
  "crazy",
  "insane",
  "werey",
  "oloshi",
  "dimwit",
  "dullard",
  "idiot",
  "fool",
  "bastard",
];

button.addEventListener("click", function (e) {
  let text = textInput.value;

  swearWords.forEach((word) => {
    if (text.includes(word)) {
      text = text.replaceAll(word, "***");
    }
  });

  sentence.innerHTML = text;
  textInput.value = "";

  console.log("submitted");
});

// logic: i type in a sentence, and submit it.
// it displays the submitted sentence and clear the inside of the input. and
// if the submitted sentence has a swearword,it censors it
