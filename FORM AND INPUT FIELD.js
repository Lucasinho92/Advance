// function validateName(field){
//     var name = field.value;
//     var output = document.querySelector('#nameTyped');
//     output.innerHTML = 'validname:' + name;
//     if (name.length < 5){
//         output.innerHTML = 'This is too short (at least 5 characters)'
//     }
// }

function validateName(evt){
    var key = evt.key;
    var output = document.querySelector('#keyTyped');
    output.innerHTML = 'valid key:' + key;
    if (key === '!'){
        output.innerHTML = 'This is character is forbidden!'
        var name = evt.target.value;
        // firstparameter = startIndex;
        // second = lastIndex
        evt.target.value = name.substring(0, name.length-1);
    }
}