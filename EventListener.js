// addEventListener('click', proceessClick) 
// function proceessClick(evt){
//     alert('clicked')

// }

// window.onkeyup = processKeyUp;
// function processKeyUp(evt){
//     var keys = document.querySelector('#keys');
//     keys.innerHTML += 'KeyUp:' + evt.key + ' code:' + evt.keyCode;
// }

window.onkeydown = function(evt){
    document.body.innerHTML +='key = ' + evt.key +'<br>';
    document.body.innerHTML +='code = ' + evt.code + '<br>';
}