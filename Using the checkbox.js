function dispalyListOfCheckedItems(){
    var listOfSelectedValues = '';
    var list = document.querySelectorAll('#fruits input:checked');
    list.forEach(function(elm){
        listOfSelectedValues += elm.value + '';
        elm.parentNode.style.color = 'green';
    });
    document.body.append('You have selected: ' + listOfSelectedValues);
}