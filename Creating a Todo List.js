function add(){
    var val = document.querySelector('#newText').value;
    if((val!==undefined) &&(val !=='')){
        // val exists and non empty
        // get the list of text. It's a <ul>
        var ul = document.querySelector('#texts')


        var newTexts = document.createElement('li')

        newTexts.textContent = val;

        ul.append(newTexts)
    }

}

function reset(){
    //get the list of texts. Its a <ul>

    var ul = document.querySelector('#texts')
    // reset it :no children
    ul.textContent = ''
}