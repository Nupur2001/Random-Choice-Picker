document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let textarea = document.querySelector("textarea");
  let keywords = document.querySelector(".keywords");

  textarea.addEventListener("keyup", (e) => {
    let enterClickCount = 0;
    keywords.innerHTML = "";
    keywordCreate(e.target.value);

    if (e.key === "Enter") {
      randomKeywordSelect();
      textarea.value = "";
    }
    if (enterClickCount === 2) {
      keywordsRemove();
    }
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

  function randomKeywordSelect() {
    let allKeywords = document.querySelectorAll(".keyword");
    if (allKeywords === "") {
      return;
    }
    let randomKeyword =
      allKeywords[Math.floor(Math.random() * allKeywords.length)];
    let selectedKeyword = document.createElement("span");
    selectedKeyword.classList.add("highlight");

    function flash() {
      let allKeywords = document.querySelectorAll(".keyword");
      allKeywords.forEach((k) => {
        k.classList.add("flash");
      });
    }

    function highlight() {
      flash();
      randomKeyword.classList.add("highlight");
    }
    setTimeout(highlight(), 500);
    console.log(randomKeyword);
  }

  function keywordsRemove() {
    let allKeywords = document.querySelectorAll(".keyword");
    allKeywords.remove();
  }
});
//   allKeywords,nokeywords,randomKeywords
