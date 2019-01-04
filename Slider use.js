function doSomething(evt){
    var val = evt.target.value;
    var output = document.querySelector('#sliderValue')
    output.innerHTML = 'value selected: ' + val;
}