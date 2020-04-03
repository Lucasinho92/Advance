var canvas, ctx, w, h;
var ball = {
    x:100, 
    y:100,
    radius:15,
    color:'green',
    speedX: 2,
    speedY: 1

}

var player ={
    x:10,
    y:10,
    width: 20,
    height:20,
    color: 'red'
}
window.onload= function init(){
    canvas = document.querySelector('#myCanvas')

    // also useful
    h = canvas.height;
    w = canvas.width;

    // 2d transformation
    ctx = canvas.getContext('2d');
    
    // ready to go!
    mainLoop();
};
function mainLoop(){
    // 1-clear the canvas
    ctx.clearRect(0,0,w,h);
    // 2-draw the ball and the player
    drawFilledRectangle(player);
    drawFilledCircle(ball);
    // animate the ball that is bouncing all over the place
    moveBall(ball);
    // request the animation frame
    requestAnimationFrame(mainLoop);
};

function moveBall(b){
    b.x += b.speedX;
    b.y += b.speedY;
    testCollisionBallWithWalls(b)
}

function testCollisionBallWithWalls(b){
    // collision with vertical walls
    if((b.x + b.radius) >w){
        // ball hit the right wall change horizontal direction
        b.speedX = -b.speedX;

        // put the ball at the collision point
        b.x = w - b.radius;
    }else if((b.x - b.radius) < 0){
        // the ball hit the left wall change horizontal direction
        b.speedX = -b.speedX;
        // put the ball at the collision point
        b.x = b.radius; 
    }
    // collision with the horizontal ball walls
    // not in the else as the ball can touch both vertical
    // walls in the corners
    if((b.y + b.radius) > h){
        // the ball hits the right wall,
        // change horizontal direction;
        b.speedY = -b.speedY;
        // put the ball at the collision point
        b.y = h - b.radius;
    }else if((b.y-b.radius) < 0){
        // the ball hit the left wall
        // change horizontal direction;
        b.speedY = -b.speedY;
        // put the ball at the collision point
        b.y = b.radius 
    }
}

    // drawFilledRect(10, 10, 20, 20, 'red');
    // drawFilledCircle(100, 100, 15, 'green');


function drawFilledRectangle(r){
    // its good practice to always save;
    ctx.save();

    // translate the coordinate system, relative to it
    ctx.translate(r.x,r.y);

    // the fill color
    ctx.fillStyle = r.color;
    ctx.fillRect(0,0, r.width,r.height);
    // Good practice: To restore;
    ctx.restore();

}

function drawFilledCircle(c){
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.fillStyle = c.color;
    ctx.beginPath();
    ctx.arc(0,0, c.radius, 0, 2*Math.PI);
    ctx.fill();

    // Good practice: to restore:
    ctx.restore();
}