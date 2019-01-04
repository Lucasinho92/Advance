// var m =['client', 'page', 'screen'];
// $(document).mousemove(function(evt){
//     for(var i= 0; i<3; i++){
//         $('#' +m[i]).text((e[m[i] +'X'])+ ' ' + (e[m[i] + 'Y']));
//     }
//     $('#scrollTop').text(
//         $('html,body').scrollTop()
//     );
// });


// window.onmousemove = processMouseMove;
// function processMouseMove(evt){
//     var mousePositions = document.querySelector('#mousePositions')
//     mousePositions.innerHTML = 'client X: ' + evt.clientX + 'client Y: ' + evt.clientY
//     + '<br>'                    
//                                 +'pageX: ' +evt.pageX + 'pageY: ' + evt.pageY + '<br>';
   
                                
//     var mouseScreenPositions =  document.querySelector('#mouseScreenPositions')
//     mouseScreenPositions.innerHTML = 'Screen X: ' + evt.screenX + 'Screen Y: ' + evt.screenY +'<br>';                            
// }


window.onload = init;
function init(){
    canvas = document.querySelector('#myCanvas');
    canvas.addEventListener('mousemove', processMouseMove)
}

function processMouseMove(evt) {
    var mousePositions = document.querySelector('#mousePositions')
    var rect = evt.target.getBoundingClientRect()
    var mouseX = evt.clientX - rect.left;
    var mouseY = evt.clientY - rect.top;
    mousePositions.innerHTML = 'mouse Pos X: ' + 
    mouseX + 
                                'mouse Pos Y: ' +
     mouseY +
                                    '<br>';
}