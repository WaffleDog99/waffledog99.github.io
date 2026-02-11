const myName = document.getElementById("Text");

function onMouseOver(){
    myName.style.fontSize = "105px";
    myName.style.marginTop = "22.5px";
}

function onMouseLeave(){
    myName.style.fontSize = "100px";
    myName.style.marginTop = "25px";
}

myName.addEventListener("mouseover", onMouseOver);
myName.addEventListener("mouseleave", onMouseLeave);