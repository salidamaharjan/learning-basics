var body = document.querySelector("body");


for(var repeat = true; repeat; repeat) {
  var userInput = prompt("Select a tag from: (h1, h2, p, div)");
  if (
    userInput === "h1" ||
    userInput === "h2" ||
    userInput === "p" ||
    userInput === "div"
  ) {
    var el = document.createElement(userInput);
    document.body.append(el);                                                                                  
    var elementContent = "You created " + userInput + " element.";
    el.textContent = elementContent;
    console.log(elementContent);
  } else {
    alert("Please enter select a tag from: (h1, h2, p, div)!!");
  }
  repeat = confirm("Do you want to add more element?");
}
