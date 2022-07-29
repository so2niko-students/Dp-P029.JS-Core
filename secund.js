// //M - Model - logic, business logic
// //V - View - css, DOM, event-listener, render
// //C - Controller - Mediator between M and V



// //V
// // const timer = document.querySelector('.timer');
// // const startBtn = document.querySelector('.start');
// // const stopBtn = document.querySelector('.stop');
// // const circleBtn = document.querySelector('.circle');
// // const pauseBtn = document.querySelector('.pause');
// // const secondsElm = document.querySelector('#seconds');
// // const minutesElm = document.querySelector('#minutes');
// // const millisecondsElm = document.querySelector('#milliseconds');
// // const circleResult = document.querySelector('.circle-result');

// //M
// // let interval;
// // let milliseconds = 0;
// // let seconds = 0;
// // let minutes = 0;

// //C
// startBtn.addEventListener('click', () => {

// //   clearInterval(interval);

//   interval = setInterval(() => {
//     //M
//     milliseconds++;

//     if (milliseconds <= 9) {
//         //V
//       millisecondsElm.innerText = '0' + milliseconds;
//     } else {
//         //V
//       millisecondsElm.innerText = milliseconds;
//     }

//     //V
//     if (milliseconds > 99) {
//       millisecondsElm.innerText = '00';
//       //M
//       milliseconds = 0;
//       seconds++;
//     }

//     //V
//     if (seconds <= 9) {
//       secondsElm.innerText = '0' + seconds;
//     } else {
//       secondsElm.innerText = seconds;
//     }

//     //V
//     if (seconds > 59) {
//       secondsElm.innerText = '00';
//       //M
//       seconds = 0;
//       minutes++;
//     }

//     //V
//     if (minutes <= 9) {
//       minutesElm.innerText = '0' + minutes;
//     } else {
//       minutesElm.innerText = minutes;
//     }
//   }, 10);
// });

// //C
// // pauseBtn.addEventListener('click', () => {
// //   clearInterval(interval);
// // });

// //C
// // stopBtn.addEventListener('click', () => {
// //   clearInterval(interval);
//   //M
// //   minutes = 0;
// //   seconds = 0;
// //   milliseconds = 0;
//   //V
// //   minutesElm.innerText = '00';
// //   secondsElm.innerText = '00';
// //   millisecondsElm.innerText = '00';
// // });

// //C
// circleBtn.addEventListener('click', () => {
//     //M
//     if (minutes <= 9) {minutes = '0' + minutes;}
//     if (seconds <= 9) {seconds = '0' + seconds;}
//     if (milliseconds <= 9) {milliseconds = '0' + milliseconds   ;}

//     //V
//     // circleResult.innerHTML = `${minutes}:${seconds}:${milliseconds}`
// });


import Controller from "./controller.js";
const t = new Controller();