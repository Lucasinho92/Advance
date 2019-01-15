window.onload = init;
function init(){
    var listImages = document.querySelectorAll('img');
    listImages.forEach(function(img){
        img.style.boxShadow = '5px 5px 15px 5px grey';
        img.style.margin = '10px';    
});
}

function addBorderToFirstImage(){
    var img1 = document.querySelector('#img1')
    img1.style.border = '3px solid red';
}

function resizeAllImages(){
    var listImages = document.querySelectorAll('img')
    listImages.forEach(function(img){
        img.width = 100;
    });

}

