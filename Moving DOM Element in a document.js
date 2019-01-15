function move(elem){
    var targetList = document.querySelector('#coolBrowsers')
    targetList.append(elem);

    elem.onclick = null;
}


  