// // var i = 0;
// // while(i > 0){
// //     i += 1;
// //     console.log('i is greater than 0' + i)
// // }


// function sum(a,b) {
//     return(a + b);
// }

// function displayInPage(message, value) {
//     console.log (message + value)
// }

// var result = sum(10, 12);
// displayInPage('Result:', result);

// displayInPage('Result:', sum(10, 30));

var sum = function (a,b){
    return (a + b);
};
var displayInPage = function (message, value){
    document.body.innerHTML += (message + value + "<br>")
}

var result = sum(5,8);
displayInPage = ('Result:', result);
displayInPage = ('Result:', sum(40,50));

window.addEventListener('click', processClick);
function processClick(event){
    document.body.innerHTML += 'You clicked here <br>'

}

window.addEventListener('click', function(evt){
    document.body.innerHTML += 'You clicked on this second.<br>'
})