"use strict";

var doc = document;
var imgAll = doc.getElementsByTagName("IMG");
var dragImg = null;
var shiftX = null;
var shiftY = null;

window.onload = function () {
    for (let i = imgAll.length - 1; i >= 0; i--) {
        let img = imgAll[i];
        let left = img.offsetLeft;
        let top = img.offsetTop;
        img.style.position = 'absolute';
        img.style.left = left + 'px';
        img.style.top = top + 'px';
    }
}
window.onmousedown = mouseDown;

function mouseDown(EO) {
    EO = EO || window.event;
    const isImage = EO.target.tagName === "IMG";
    if (isImage) {
        dragImg = EO.target;
        console.log(dragImg);
        let mouseX = EO.pageX;
        let mouseY = EO.pageY;
        let positionX = dragImg.offsetLeft;
        let positionY = dragImg.offsetTop
        shiftX = mouseX - positionX;
        shiftY = mouseY - positionY;
        doc.body.appendChild(dragImg);

        window.onmousemove = mouseMove;

        function mouseMove(EO) {
            let mouseX = EO.pageX;
            let mouseY = EO.pageY;
            console.log(mouseX + " " + mouseY);
            dragImg.style.left = (mouseX - shiftX) + 'px';
            dragImg.style.top = (mouseY - shiftY) + 'px';

        }
        window.onmouseup = mouseUp;
        function mouseUp(EO) {
            window.onmousemove = null;
            window.onmouseup = null;
        }
        dragImg.ondragstart = function () {
            return false;
        };
    }
}


