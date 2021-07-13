
'use strict'

const radbig = 220; //радиус циферблата
const radsm = 32;   //радиус круг с цифрами 
const centerX = 240; //центр окружности по X
const centerY = 250; //центр окружности по Y 
const arrowWidth = 4; //толщина стрелки базовая
var r = 172; // радиус расположения цифр
var doc = document;
var clock = doc.getElementById('cnv');
var ctx = clock.getContext('2d');
// приведение отоборажения времени к формату 00:00:00
function checkTime(i) {
    if (i < 10) {
        i += '0';
    }
    return i;
}

// функция перевода радиан к градусам
function getRadians(degrees) {
    return (Math.PI / 180) * degrees;
}

function setTime() {
    var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds(),
        h = checkTime(hours),
        m = checkTime(minutes),
        s = seconds;



    //рисуем циферблат
    ctx.beginPath();
    ctx.arc(centerX, centerY, radbig, 0, getRadians(360));
    ctx.fillStyle = '#fcca66';
    ctx.fill();

    // угол повоорота стрелки часов
    var hMotion = h / 12 * 360 + m * .5,
        mMotion = m / 60 * 360,
        sMotion = s / 60 * 360;

    // рисуем часовые стрелки

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineWidth = arrowWidth + 8;
    ctx.lineCap = 'round';
    ctx.lineTo(centerX + Math.sin(getRadians(hMotion)) * radbig * 0.4, centerY - Math.cos(getRadians(hMotion)) * radbig * 0.4)
    ctx.stroke();

    //рисуем минутные стрелки
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineWidth = arrowWidth + 4;
    ctx.lineCap = "round";
    ctx.lineTo(centerX + Math.sin(getRadians(mMotion)) * radbig * 0.5, centerY - Math.cos(getRadians(mMotion)) * radbig * 0.5);
    ctx.stroke();

    //рисуем секундные стрелки 
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineWidth = arrowWidth;
    ctx.lineCap = "round";
    ctx.lineTo(centerX + Math.sin(getRadians(sMotion)) * radbig * 0.6, centerY - Math.cos(getRadians(sMotion)) * radbig * 0.6);
    ctx.stroke();

    // рисуем электронные часы
    ctx.fillStyle = 'black'
    ctx.font = "47px Gill Sans, sans-serif";
    ctx.fillText((h + ":" + m + ":" + s), 150, 200);

    for (var h = 1; h <= 12; h++) {
        var a = h / 12 * Math.PI * 2;
        var x = centerX + Math.sin(a) * r;
        var y = centerY - Math.cos(a) * r;
        var numcenterX = centerX + r * Math.sin(a);
        var numcenterY = centerY - r * Math.cos(a);

        //добавляем контейнер для цифры 
        ctx.beginPath();
        ctx.arc(numcenterX, numcenterY, radsm, 0, Math.PI * 3, false);
        ctx.fillStyle = '#48b382';
        ctx.fill();

        //добавление цифры
        ctx.fillStyle = 'black'
        ctx.font = "35px Gill Sans, sans-serif";
        ctx.fillText(h, numcenterX - radsm / 3, numcenterY + radsm / 3);
    }

    //перезапуск функции
    var ms = time.getMilliseconds();
    var t = setInterval(setTime, 1010 - ms);
}
setTime();















