var divElem;
function init(){
    console.log("Page is loaded and DOM is ready");

    divElem = document.querySelector("#theDiv");
}
function changeStyle(){
    console.log("add border");
    divElem.style.border = "5px dashed purple";
    divElem.style.backgroundColor = "lightGreen";
    divElem.style.padding = "10px";
}