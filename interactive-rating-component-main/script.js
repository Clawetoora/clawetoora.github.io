const list = document.querySelector("ul");
const submit = document.querySelector(".submit");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const rating = document.querySelector(".rating");

let selection;
list.addEventListener("click", function (e) {
  [...list.children].forEach((c) => c.classList.remove("selected"));
  if (e.target.classList.contains("selection")) {
    e.target.classList.add("selected");
    selection = e.target.innerHTML;
    console.log(selection);
  }
});

submit.addEventListener("click", function () {
  if (!selection) alert("You need to select first");
  if (selection) {
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden");
    rating.innerHTML = `You selected ${selection} out of 5`;
  }
});
console.log(selection);
