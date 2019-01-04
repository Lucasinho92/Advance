// window.onload = init;
// function init(){
//     var status = document.querySelector('#pageStatus');
//     status.innerHTML = 'Loaded!';
// }

// window.onload = resize;
// window.onresize = resize;

// function resize(evt){
//     console.log('resize');
//     var pageSizeSpan = document.querySelector('#pageSize');
//     pageSizeSpan.innerHTML = 'Width:' + window.innerWidth + 'Height:' + innerHeight;

//     // Screen size
//     var screenSizeSpan = document.querySelector('#screenSize');
//     screenSizeSpan.innerHTML = 'Width:' + screen.width + 'Height:' + screen.height;
// }
window.onload = init;
var progressBar;

function init(){
    progressBar = document.querySelector('.progress div');
    window.addEventListener('scroll', function (){
        var max = document.body.scrollHeight-this.window.innerHeight;
        var percent = (window.pageYOffset / max) * 100;
        progressBar.style.width = percent + '%';

});
}