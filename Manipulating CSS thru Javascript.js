function firstLiClassRedInUl(){
    var elm = document.querySelector('ul li.red');
    elm.style.color='red';
}

function allListInUlClassNav(){
    var list = document.querySelectorAll('ul.nav > li');
    list.forEach(function(elm){
        elm.style.textDecoration = 'underline';
    });
}