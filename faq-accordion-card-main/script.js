const arrow = document.querySelectorAll(".arrow");

const questions = document.querySelectorAll(".question-container");

// helper function to get all siblings of element, so the selected class would be only on one element at the time

let getSiblings = function (e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

questions.forEach((q) =>
  q.addEventListener("click", function (e) {
    let siblings = getSiblings(this);
    siblings.forEach((sibling) => sibling.classList.remove("selected"));
    console.log(this.parentNode);
    this.classList.toggle("selected");
  })
);
