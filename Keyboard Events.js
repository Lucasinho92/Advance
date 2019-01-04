// window.onkeyup =  processKeyUp;
// window.onkeydown = processKeyDown;

// function processKeyUp(evt){
//     var keys = document.querySelector('#keys');
//     keys.innerHTML += 'keyup: ' + evt.key + ' code: ' + evt.keyCode + '<br>';
// }

// function processKeyDown(evt){
//     var keys = document.querySelector('#keys');
//     keys.innerHTML += 'keydown: ' + evt.key + ' code: ' + evt.keyCode + '<br>';
// }
window.onkeydown = processKeyDown;
function processKeyDown (evt){
    var keys = document.querySelector('#keys');
    keys.innerHTML += 'keypress: ' + evt.key + ' code:' + evt.keyCode + ' Modifiers:';
    var Modifiers = ""
    if(event.shiftkey)
    Modifiers += 'SHIFT';
    if(event.altkey)
    Modifiers += 'ALT';
    if(event.ctrl)
    Modifiers += 'CTRL';
    if(Modifiers === '')
    Modifiers = 'NONE';
    keys.innerHTML += modifiers + '<br>';
}