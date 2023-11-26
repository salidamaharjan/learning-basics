var $addBtn = $(".add-btn");
var $ulEl = $(".list-group.list-group-flush");
var $input = $(".user-input-area");

var listOfTodo = ["My First Item", "My Second Item", "My Third Item"];
for(var i = 0; i < listOfTodo.length; i++){
    createLiElAndAppend(listOfTodo[i]);
  }
$addBtn.on("click", function () {
  if ($input.val().trim() === "") {
    return;
  }
  createLiElAndAppend($input.val());
});


function createLiElAndAppend (todo){
    var $liEl = $(` <li class="list-group-item">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <div class="form-check">
            <input class="form-check-input" type="radio" />
          </div>
        </div>
        <div class="col-7">${todo.trim()}</div>
        <div class="col-4 d-flex justify-content-end">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  </li>`);
  $ulEl.append($liEl);
}
