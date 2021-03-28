window.onscroll = function () { myFunction() };

var menuBlockLeftBar = document.getElementById("MymenuBlockLeftBar");
var sticky = menuBlockLeftBar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        menuBlockLeftBar.classList.add("sticky");
    } else {
        menuBlockLeftBar.classList.remove("sticky");
    }
}