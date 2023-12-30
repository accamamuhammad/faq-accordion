const toggleMinus = document.getElementById("toggle-minus");
const togglePlus = document.getElementById("toggle-plus");
const displayText = document.getElementById("display-text");
const mainContainer = document.getElementById("main");

togglePlus.style.display = "none";
toggleMinus.addEventListener("click", () => {
  mainContainer.style.marginBottom = "15px";
  displayText.style.display = "none";
  togglePlus.style.display = "block";
  toggleMinus.style.display = "none";
});
togglePlus.addEventListener("click", () => {
  mainContainer.style.marginBottom = "5px";
  displayText.style.display = "block";
  toggleMinus.style.display = "block";
  togglePlus.style.display = "none";
});
