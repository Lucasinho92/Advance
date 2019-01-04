function doSomething(evt){
    var val = evt.target.value
    var output = document.querySelector('#numberValue');
    output.innerHTML = 'value selected: ' + val;
}