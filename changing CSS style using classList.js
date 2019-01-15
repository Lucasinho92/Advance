function displayListOfCheckedItems(){
    var listOfSelectedValues='';
    var list = document.querySelectorAll('#fruits input:checked')
    list.forEach(function(elm){
        listOfSelectedValues += elm.value + '';

        var liParent = elm.parentNode;
        liParent.classList.add('checked');
    });

    document.body.append('You Selected :' + listOfSelectedValues);
}

function reset(){
    var list = document.querySelectorAll('#fruits input');
    list.forEach(function(elm){

        elm.checked = false;

        var liParent = elm.parentNode;
        liParent.classList.remove('checked')
    });
}

