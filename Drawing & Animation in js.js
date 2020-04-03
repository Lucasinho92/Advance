var canvas, ctx;
window.onload = function init(){
    canvas = document.querySelector('#myCanvas')
    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(10,10,30,30);

    // wireframe rectangle
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.strokeRect(100,40,40,40);

    // fill circle, will use current ctx.fillstyle
    ctx.beginPath();
    ctx.arc(60,60,10,0,2*Math.PI);
    ctx.fill();

    // some text
    ctx.fillStyle = 'purple';
    ctx.font ='20px Arial';
    ctx.fillText('Hello!', 60, 20);


}