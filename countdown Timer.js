// // function countdown(){
// //     var now = new Date();
// //     var eventDate = new Date(2019, 01, 01);
    
// //     currentTime = now.getTime;
// //     var eventTime = eventDate.getTime;
// //     var remTime = eventTime - currentTime;
// //     var s = math.floor (remTime / 1000);
// //     var m = math.floor (s / 60);
// //     var h = math.floor (m / 60);
// //     var d = math.floor (h / 24);

// //     h %= 24;
// //     m %= 60;
// //     s %= 60;

// //     h = (h < 10)? "0" + h : h;
// //     m = (m < 10)? "0" + m : m;
// //     s = (s < 10)? "0" + s : s;

// //     document.getElementById("Days").textContent = d;
// //     document.getElementById("Days").innerHTML = d;

// //     document.getElementById("Hours").textContent = h;
// //     document.getElementById("Minutes").textContent = m;
// //     document.getElementById("Seconds").textContent = s;

// //     setTimeout(countdown, 1000);


// // }

// function timer(){
//     var d = parseInt(document.getElementById("days").value, 0);
//     var h = parseInt(document.getElementById("hours").value, 0);
//     var m = parseInt(document.getElementById("minutes").value, 0);
//     var s = parseInt(document.getElementById("seconds").value, 0);

//     var current = ((d * 86400) + (h * 3600) + (m * 60) + s);  //the current time left in seconds
//     if (current > 0) {
//         //take one second away, and rerender the seconds split into d, h, m, and s in the html, which you will reuse next time timer() runs
//     } else {
//         //expired
//     }
// }
// var now = new Date();
// var date = now.getTime();

// addDay = now.setDate(now.getDate() + d);
// addHour = now.setHours(now.getHours() + h);
// addMinute = now.setMinutes(now.getMinutes() + m);
// addSecond = now.setSeconds(now.getSeconds() + s);

// var then = new Date(addHour + addMinute + addSecond);

// if(d > 0 || h > 0 || m > 0 || s > 0){
//   var final = then - date;
//   var dd = Math.floor(final/ (1000 * 60 * 60 * 24));
//   var hh = Math.floor((final / (1000 * 60 * 60)) % 24);
//   var mm = Math.floor((final / 1000 / 60) % 60);
//   var ss = Math.floor((final / 1000) % 60);

//   document.getElementById("display").innerHTML = "Time Remaining: " + dd + "D     " + hh + "H " + mm + "M " + ss + "S";

//   document.getElementById("message").innerHTML = then;

//   if (final < 0) {
//     clearInterval(countdownTimer);
//     do {nothing
//     }


// function myfunction(){
//     setInterval(function(){alert("Hello");},
//     3000);
// }

var myVar = setInterval(myTimer, 1000);

function myTimer(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.querySelector("#peter").innerHTML = t;
}
function myStopFunction(){
    clearInterval(myVar)
}
