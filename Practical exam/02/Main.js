function init() {
    checkList()
 } 
 window.addEventListener("load", init)

function createElem(index) {

    var parent = document.getElementsByTagName("ul");
    var element = document.createElement("li");

        element.innerHTML = index;

        parent[0].appendChild(element);
}

function checkList() {

    var element = document.getElementsByTagName("li");

    if (element.length < 10) {
        createElem(element.length)
    }

    checkList();
}