let questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    let answer = this.nextElementSibling;
    answer.classList.toggle("no-active");
    const img = this.querySelector("img");

    if (img.src.endsWith("icon-plus.svg")) {
      img.src = "assets/images/icon-minus.svg";
    } else {
      img.src = "assets/images/icon-plus.svg";
    }
  });
}
