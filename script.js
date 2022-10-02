
function drawLine() {
    var allElements = document.getElementsByTagName("*");
    for (var i = 0, len = allElements.length; i < len; i++) {
        var element = allElements[i];
        element.style.outline = "1px solid red !important";
}
}

document.getElementById("button").addEventListener("click", drawLine);