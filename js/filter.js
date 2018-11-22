filterType("all")

function filterType(filter) {
    var x, i;
    x = document.getElementsByClassName("project-box");
    if (filter == "all") filter = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "content-show");
        if (x[i].className.indexOf(filter) > -1) addClass(x[i], "content-show");
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("buttons-container");
var buttons = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}