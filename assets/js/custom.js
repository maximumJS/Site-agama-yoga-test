function changeSize (divId, newWidth, newHeight, numCours){
    if ( document.getElementsByClassName(divId) != null ){
        console.log("hello" + numCours);
        document.getElementsByClassName(divId)[numCours].style.width = newWidth;
        document.getElementsByClassName(divId)[numCours].style.height = newHeight;
        document.getElementsByClassName('plus')[numCours].style.visibility = "visible";
        document.getElementsByClassName('plus')[numCours].style.display = "block";
    }
    return;
}
function normalSize (divId, numCours){
    if ( document.getElementsByClassName(divId) != null ){
        console.log("hello" + numCours);
        document.getElementsByClassName(divId)[numCours].style.width = "12%";
        document.getElementsByClassName(divId)[numCours].style.height = "12%";
        document.getElementsByClassName('plus')[numCours].style.visibility = "hidden";
        document.getElementsByClassName('plus')[numCours].style.display = "none";
    }
    return;
}
function moreAbout(numCours){
    document.getElementsByClassName('modalCours')[numCours].style.visibility = "visible";
    document.getElementsByClassName('modalCours')[numCours].style.display = "block";
}
function closeModal(numCours){
    document.getElementsByClassName('modalCours')[numCours].style.visibility = "hidden";
    document.getElementsByClassName('modalCours')[numCours].style.display = "none";
}


/* window.open("infoCours.html", "infoCours", "scrollbars=yes,resizable=yes,top=50%,left=50%,width=5%,height=5%;"); */