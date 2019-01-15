function add(){
    var n = document.querySelector('#newNumber').value;
    
    // n exists and non empty
    // get the list of numbers. its a ul
    
    if((n!== undefined) &&(n!=='')){
        var ul = document.querySelector('#numbers')

        //add to the list
        var newNumber = document.createElement('li')
        newNumber.textContent = n;
        ul.append(newNumber);
    }

}

function reset(){
    var ul = document.querySelector('#numbers')

    //reset no child
    ul.textContent = '';
}