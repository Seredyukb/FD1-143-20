'use strict';
var doc = document;
const radbig = 220; // радицс циферблата
const radsm = 32; // радиус круга с цифрами

// Приводим электронные часы к стандартному виду 00:00:00

function getTime() {
    const time = new Date();
    let hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds()

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    var timeShow = doc.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;

    var hourArrowMotion = doc.getElementById('hourArrow').setAttribute('transform', `rotate(${hours * 30 + minutes * .5})`);
    var minuteArrowMotion = doc.getElementById('minuteArrow').setAttribute('transform', `rotate(${minutes * 6})`);
    var secondArrowMotion = doc.getElementById('secondArrow').setAttribute('transform', `rotate(${seconds * 6})`);

    var t = setTimeout(getTime, 1000);
}



//контейнер для цифр
var numcontainer = doc.getElementById('numbers');
function numberSetting() {
    var r = 172; // радиус расположения цифр
    var cX = 220;
    var cY = 220; // координаты центра
    var svgNS = 'http://www.w3.org/2000/svg'

    for (var h = 1; h <= 12; h++) {
        var a = h / 12 * Math.PI * 2;
        var x = cX + Math.sin(a) * r;
        var y = cY - Math.cos(a) * r;

        var numcenterX = cX + r * Math.sin(a);
        var numcenterY = cY - r * Math.cos(a);

        //добавляем контейнер для цифр
        var numberContainer = doc.createElementNS(svgNS, 'circle')
        numberContainer.setAttribute('cx', numcenterX);
        numberContainer.setAttribute('cy', numcenterY);
        numberContainer.setAttribute('r', radsm);
        numberContainer.setAttribute('fill', '#48b382');
        numcontainer.appendChild(numberContainer);

        //добавление цифр
        var number = doc.createElementNS(svgNS, 'text');
        var text = doc.createTextNode(h);
        number.setAttribute('x', (numcenterX - radsm / 2))
        number.setAttribute('y', (numcenterY + radsm / 2))
        number.style.cssText = 'font-size: 40px; font-family: Gill Sans, sans-serif';
        number.appendChild(text);
        numcontainer.appendChild(number);

        if (h > 9) {
            number.setAttribute('x', (numcenterX - (radsm - 10)));
        }
    }
}

numberSetting();


