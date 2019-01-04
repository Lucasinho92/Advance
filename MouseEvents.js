window.onclick = processClick;
function processClick(evt){
    var clicks = document.querySelector('#clicks');
    var target = evt.target.id;
    if (target === ''){
        clicks.innerHTML += 'You clicked on Window not on a particular element' + '<br>'
    }
    else{
        clicks.innerHTML += 'Element clicked id: ' + target + '<br>'
    }

evt.stopPropagation();

}