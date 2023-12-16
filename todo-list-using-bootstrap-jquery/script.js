var $addBtn = $(".btn-add");
var $userInput = $(".user-input");
var $ulEl = $(".ul-element");

var liArr = [];

$addBtn.on("click", function () {
  createElement($userInput.val());
  console.log("index",liArr);
});



function createElement(input,index) {
  var $liEl = $(`<li class="list-group-item">
  <div class="container">
    <div class="row">
      <div class="col-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
        </div>
      </div>
      <div class="col-9">${input}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger btn-delete">
          Delete
        </button>
      </div>
    </div>
  </div>
</li>`);
  $ulEl.append($liEl);
  $userInput.val("");
  liArr.push($liEl);

  var $deleteBtn = $liEl.find(".btn-delete");
  $deleteBtn.attr("data-index", input);

  $deleteBtn.on("click", function(){
    $liEl.remove();
    liArr.splice();
  });
  
}


