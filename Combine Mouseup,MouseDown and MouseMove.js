window.onmousemove = moveElem;
window.onmouseup = stopMovingElem;
window.onload = init;

var selected = null;
var oldMouseX, oldMouseY;

var elemX, elemY;
function init(){
    document.querySelector(".draggable").onmousedown =
    function (evt){
            dragInit(evt);
    };
}
function dragInit(evt){
    selected = evt.target
    elemX = selected.offsetLeft;
    elemY = selected.offsetTop;
    oldMouseX = evt.clientX;
    oldMouseY = evt.clientY;
}

function moveElem(e){
    var newMouseX = e.clientX;
    var newMouseY = e.clientY;

    if (oldMouseX !== undefined){
        var dx = newMouseX - oldMouseX;
        var dy = newMouseY - oldMouseY;
    }

    if (selected !== null){
    changePosOfSelectedElement(dx,dy);
}

    oldMouseX = newMouseX;
    oldMouseY = newMouseY;
}

function changePosOfSelectedElement(dx,dy) {
    elemX += dx;
    elemY += dy;

    selected.style.left = elemX + 'px';
    selected.style.top = elemY + 'px';
}

function stopMovingElem(){
  selected = null;
}


    

   
