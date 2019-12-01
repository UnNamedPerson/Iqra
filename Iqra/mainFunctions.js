function showTab(tabName, element, color){

var tab = document.getElementsByClassName("tab");

for(var i =0; i < tab.length; i++){
    tab[i].style.display = "none";
    // tab[i].style.backgroundColor = "";
}

var buttons = document.getElementsByClassName("button");
for(var j = 0; j<buttons.length; j++){
    buttons[j].style.backgroundColor = "";
}

document.getElementById(tabName).style.display = "block";
element.style.backgroundColor = color;

}

window.onload = function(){
    document.getElementById("HomeButton").click();
}
