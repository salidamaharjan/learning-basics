var olEl = document.querySelector("ol");
var clearHighScoreButton = document.querySelector(".clear-highscore");
console.log(localStorage);

clearHighScoreButton.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  var li = document.createElement("li");
  var keyValue = key + ", " + value;
  //console.log(keyValue);
  olEl.appendChild(li);
  li.textContent = keyValue;
}
