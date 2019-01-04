window.onload = init;
var menu, menuIsVisible;

function init(){
    menu = document.querySelector('#context-menu')
    menuIsVisible = false;
    var div1 = document.querySelector('#div1');
    addContextMenu(div1);

    window.addEventListener('click', toggleMenuOff);
}

function addContextMenu(elem){
    elem.addEventListener('contextmenu', function(e){
        e.preventDefault();
        toggleMenuOn();
        positionMenu(e);
    });
}

function toggleMenuOn(){
    if (!menuIsVisible){
        menuIsVisible = true;
        menu.classList.add('context-menu--active');

    }
}

function toggleMenuOff(){
    if (menuIsVisible){
        menuIsVisible = false;
        menu.classList.remove('context-menu--active');
        
    }
}

function positionMenu(e){
    var clickCoordsX = e.pageX;
    var clickCoordsY = e.pageY;

    var menuWidth = menu.offsetWidth + 1;
    var menuHeight = menu.innerHeight + 1;
    var elementWidth = e.target.offsetWidth;
    var elementHeight = e.target.offsetHeight;
    if((elementWidth - clickCoordsX) < menuWidth){
        menu.style.left = elementWidth - menuWidth + 'px';
    }
    else {
        menu.style.left = clickCoordsX + 'px';
    }
    if ((elementHeight - clickCoordsY) < menuHeight){
        menu.style.top = elementHeight - menuHeight + 'px';
    }
    else {
        menu.style.top = clickCoordsY + 'px';
    }

}

function menuItem1(){
    console.log('learn');
    toggleMenuOff();
}

function menuItem2(){
    console.log('clear');
    toggleMenuOff();
}


