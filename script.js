document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let textarea = document.querySelector("textarea");
  let keywords = document.querySelector(".keywords");

  textarea.addEventListener("keydown", (e) => {
    keywordCreate(e.target.value);
  });

  function keywordCreate(i) {
    let choices = i
      .split(",")
      .map((choice) => choice.trim())
      .filter((choice) => choice.trim() !== "");
    console.log(choices);

    choices.forEach((choice) => {
      let key = document.createElement("span");
      key.classList.add("keyword");
      key.innerHTML = choice;
      keywords.appendChild(key);
    });
  }
});
