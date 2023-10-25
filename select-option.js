function onclick_handler() {
    let selectedEL = document.querySelector("input[type=radio]:checked");
    if (selectedEL === null) {
        alert("Please Select from the Options!!");
    }

    else if (selectedEL.value === "MtSagarmatha") {
        alert("Correct!!");
    }
    else {
        alert("Incorrect!!");
    }

}
