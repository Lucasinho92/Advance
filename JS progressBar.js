// function move(){
//     var elem = document.querySelector("#myBar");
//     var width = 0;
//     var id = setInterval(frame, 10);
//     function frame(){
//         if (width == 100){
//             clearInterval(id);
//         }else{
//             width++;
//         elem.style.width= width + "%";}
//     }
// }

// var myVar = setInterval(setColor, 300);
// function setColor(){
//     var x = document.body;
//     x.style.backgroundColor = x.style.backgroundColor == "yellow"? "pink": "yellow"
// }
// function stopColor(){
//     setInterval(myVar);
// }

var myVar;
function myStartFunction(){
    myVar = setInterval(function(){ alertFunc("First parameter",
    "Second parameter"); }, 2000);
}
function alertFunc(param1, param2) {
    document.querySelector("#Sam").innerHTML += "Hello";
    document.querySelector("#Sam2").innerHTML = 
    "Parameters passed to alertFunc(): <br>" + param1 + "<br>" + para2 + "<br>";
}
function myStopFunction(){
    clearInterval(myVar);
}