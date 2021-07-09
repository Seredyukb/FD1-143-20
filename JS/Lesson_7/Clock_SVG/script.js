'use strict';
var doc = document;




// 'use strict'

// var doc  = document;
// const radbig = 220; //радиус циферблата
// const radsm = 32;   //радиус круг с цифрами 

// //отображаем часы линейно
// function setTime(){
// var time = new Date();
// var h = time.getHours();
// var m = time.getMinutes();
// var s = time.getSeconds();
// m=checkTime(m);
// s=checkTime(s);
// var timeShow = doc.getElementById('timer').innerHTML=h+":"+m+":"+s;

// //задаем движение стрелок сек - мин - часы
// var smotion = doc.getElementById('shand').setAttribute('transform', 'rotate('+s/60*360+')');
// var minutes = m/60*360;
// var mmotion = doc.getElementById('mhand').setAttribute('transform', 'rotate('+ minutes +')');
// var hmotion = doc.getElementById('hhand');
// var ha;
// h = h%12;
// ha = h/12*360+(360/12*m/60);
// hmotion.setAttribute('transform', 'rotate('+ ha +')');

// //перезапуск функции через пол секунды
// var ms = time.getMilliseconds();
// var t=setTimeout('setTime()', 1010-ms);
// }

// //если минута/ секунда - 1 цифра, добавляем "0"
// function checkTime(i)
// {
// if (i<10)
// {
// i="0" + i;
// }
// return i;
// }

// //контейнер для цифр
// var numcontainer = doc.getElementById('numbers');
// function numberSetting(){
//   var r=172; // радиус расположения цифр
//   var cX=220;
//   var cY=220; // координаты центра
//   var svgNS ='http://www.w3.org/2000/svg'

//   for ( var h=1; h<=12; h++ ) { 
//     var a=h/12*Math.PI*2; 
//     var x=cX+Math.sin(a)*r; 
//     var y=cY-Math.cos(a)*r;   
    
//     //console.log(a);
  
//     var numcenterX = cX + r * Math.sin(a);
//     var numcenterY = cY - r * Math.cos(a); 
    
//     //добавляем контейнер для цифры 
//     var numberContainer = doc.createElementNS(svgNS, 'circle')
//     numberContainer.setAttribute('cx', numcenterX);
//     numberContainer.setAttribute('cy', numcenterY);
//     numberContainer.setAttribute('r', radsm );
//     numberContainer.setAttribute('fill', '#48b382');
//     numcontainer.appendChild(numberContainer);

//     //добавление цифры
//     var number = doc.createElementNS(svgNS, 'text');
//     var text = doc.createTextNode( h );
//     number.setAttribute('x', (numcenterX-radsm / 2) )
//     number.setAttribute('y', (numcenterY+radsm / 2) )
//     number.style.cssText = 'font-size: 40px; font-family: Gill Sans, sans-serif';
//     number.appendChild(text);
//     numcontainer.appendChild(number);
    
//     if ( h > 9 ) {
//       number.setAttribute('x', (numcenterX- ( radsm - 10 )));   
//     }  
//   }
// }

// numberSetting();


