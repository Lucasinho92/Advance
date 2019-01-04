function changePageBackgroundColor(color){
    document.body.style.backgroundColor = color;
    var output = document.querySelector('#changeColor');
    output.innerHTML = 'color selected: ' + color;

}