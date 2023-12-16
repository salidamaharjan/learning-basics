var $addBtn = $(".add-btn");
var $ulEl = $(".list-group.list-group-flush");
var $input = $(".user-input-area");

var listOfTodo = ["My First Item", "My Second Item", "My Third Item"];
generateListUi();

$addBtn.on("click", function () {
  if ($input.val().trim() === "") {
    return;
  }
  listOfTodo.push($input.val());
  generateListUi();
});

function generateListUi() {
  $ulEl.empty();
  for (var i = 0; i < listOfTodo.length; i++) {
    createLiElAndAppend(i, listOfTodo[i]);
  }
}

function createLiElAndAppend(index, todo) {
  var $liEl = $(`<li class="list-group-item">
    <div class="container">
      <div class="row">
        <div class="col-1">
          <div class="form-check">
            <input class="form-check-input" type="radio" />
          </div>
        </div>
        <div class="col-7">${todo.trim()}</div>
        <div class="col-4 d-flex justify-content-end">
          <button data-todo-index=${index} type="button" class="btn btn-danger btn-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  </li>`);
  $ulEl.append($liEl);

  // $liEl.find(".btn-delete").on("click", function (event) {
  //   var todoIndex = $(event.target).attr("data-todo-index");
  //   listOfTodo.splice(todoIndex, 1);
  //   generateListUi();
  // });
}
$ulEl.on("click", function(event){
  if(event.target.matches(".btn-delete")) {
    
  }
});