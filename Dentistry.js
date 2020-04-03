window.onload = init;
function init(){
    var progressBar = document.querySelector('.progress div');
    window.addEventListener('scroll', function(){
        var max = document.body.scrollHeight - window.innerHeight;
        var percent = (window.pageYOffset/ max) * 100;
        progressBar.style.width = percent + '%';
    })
    
}

function validateName(field){
    // this is the input text comment
    var name = field.value;

    // get the output div

    var output = document.querySelector('#form');
    // display the value of the typed in the div
    output.innerHTML += 'Valid Name :' + name;

    if(name.length < 5){
        output.innerHTML = 'This name is too short(at least 5 characters';
    }
}
