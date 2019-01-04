var divElem;
function init(){
    console.log("page is loaded and ready");
    divElem = document.querySelector("#theDiv");
}

// function addImageBackground(){
//     divElem.innerHTML = "";
//     divElem.style.width ="100%";
//     divElem.style.height = "300px";
//     divElem.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)"
// }

var currentImage = 0;
var leftPos = 0;
function AnimateMario(){
    drawMario (currentImage);
    currentImage = (currentImage + 1) % 3;
    leftPos += 5;
    if(leftPos >= 100);
        leftPos = 0;

}
function drawMario (indexImage){
    divElem.style.marginLeft = leftPos + "px";

    divElem.style.height = "32px";
    divElem.style.width = "22px";

    divElem.innerHTML = ""
    divElem.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)"
    
    divElem.style.backgroundColor = "transparent";
    var offset = indexImage * 24;
    divElem.style.backgroundPosition = offset + "px"
}