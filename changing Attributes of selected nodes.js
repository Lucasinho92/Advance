function resetName(){
    var inputField = document.querySelector('#name')
    inputField.value = '';
}

function setToGreen(){
    var color = document.querySelector('#color')
    color.value = '#00FF00'
}

function changeStep(){
    var number = document.querySelector('#number')
    number.value =10;
    number.step = '0.1';
    number.max = 11;
}

function changeAndResize(img){
    img.src = 'dubai.jpg';
    img.width = 200;
    img.style.border = '4px solid red';
    
}