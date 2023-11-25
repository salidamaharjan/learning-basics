var projectsH2El = document.querySelector("#projects h2");
projectsH2El.textContent = "Projects Vanilla JS";
console.log("JS", projects);

// $(string);
var $test = $("#projects > h2");
$test.text("Projects JQuery");
console.log("jQuery", $test);

var project1H3 = document.querySelector(".project h3");
project1H3.setAttribute("class", "highlight");

var $project2H3 = $(".project2 h3");
$project2H3.attr("class", "highlight");

project1H3.style.color = "red";
$project2H3.css("color", "red");

var contactMeH2 = document.querySelector("#contact h2");
var dataAttribute = contactMeH2.getAttribute("data-value");
console.log(dataAttribute);

var $jqueryH3 = $("#contact h2");
console.log($jqueryH3.attr("data-value"));

// var liVanilla = document.querySelectorAll("#hobby-list li");
// for (var i = 0; i < liVanilla.length; i++) {
//   liVanilla[i].setAttribute("class", "highlight");
// }

// var $liJquery = $("#hobby-list li");
// console.log($liJquery);
// $liJquery.attr("class", "highlight");
// for (var i = 0; i < $liJquery.length; i++) {
//   //   $liJquery.eq(i) - returns q jquery object of index i
//   //   $liJquery.get(i) - returns a DOM element (Vanilla JS Element) of index i
//   $($liJquery.get(i)).attr("class", "highlight");
// }

// using children property vanilla js
// var hobbyList = document.querySelector("#hobby-list");
// for (var i = 0; i < hobbyList.children.length; i++) {
//   hobbyList.children[i].setAttribute("class", "highlight");
// }

// var $hobbyList = $("#hobby-list");
// $hobbyList.children().attr("class", "highlight");

// var about = document.querySelector("#about");
// var divEl = document.createElement("div");
// divEl.setAttribute("class", "tagline-container");
// divEl.textContent = "This is the tagline";
// about.appendChild(divEl);

// var $about = $("#about");
// var $divEl = $("<div></div>");
// $divEl.attr("class", "tagline-container");
// $divEl.text("This is the tagline");
// $about.append($divEl);

// document.querySelector("#click-me").addEventListener("click", function () {
//   alert("You clicked me!");
// });

var $button = $("#click-me");
$button.on("click", function (event) {
  console.log(event.target);
  alert("You clicked me");
});
