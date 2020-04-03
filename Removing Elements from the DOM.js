function displayListOfChecked(){
    var listOfValueSelected = '';
    var list = document.querySelectorAll("#fruits input:checked")
    list.forEach(function(elm){
         listOfValueSelected += elm.value + '';

         var liParent = elm.parentNode;
         liParent.classList.add('checked');

    });

    document.body.append('You selected: ' +  listOfValueSelected)

}

function reset(){
    var ul = document.querySelector('#fruits');
    ul.innerHTML ="";
    ul.innerHTML +="<li><input type='checkbox' name='fruit' value='apples'>Apples</li>";
    ul.innerHTML +="<li><input type='checkbox' name='fruit' value='oranges'>Oranges</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='citrus'>Citrus</li>";
    ul.innerHTML += "<li><input type='checkbox' name='fruit' value='banana'>Banana</li>";
}

function removeSelected(){
    var list = document.querySelectorAll('#fruits input:checked')
    var ul = document.querySelector('#fruits');
    list.forEach(function(elm){
        var li = elm.parentNode;
        ul.removeChild(li);
    });
}

