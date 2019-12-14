function showTab(tabName, element, color){

var tab = document.getElementsByClassName("tab");

for(var i =0; i < tab.length; i++){
    tab[i].style.display = "none";
    // tab[i].style.backgroundColor = "";
}

// 2Do: change only the color of the text, not the background
var buttons = document.getElementsByClassName("button");
for(var j = 0; j<buttons.length; j++){
    buttons[j].style.backgroundColor = "";
}

document.getElementById(tabName).style.display = "block";
element.style.backgroundColor = color;

var firstContainer = document.getElementById("description");
var secondContainer = document.getElementById("descriptionLearner");

var body = document.getElementById("HomePage");
body.removeChild(firstContainer);
body.removeChild(secondContainer);


}



function HomeTab(tabName, element, color){

    var tab = document.getElementsByClassName("tab");

    for(var i =0; i < tab.length; i++){
        tab[i].style.display = "none";
        // tab[i].style.backgroundColor = "";
    }
    
    // 2Do: change only the color of the text, not the background
    var buttons = document.getElementsByClassName("button");
    for(var j = 0; j<buttons.length; j++){
        buttons[j].style.backgroundColor = "";
    }
    
    document.getElementById(tabName).style.display = "block";
    element.style.backgroundColor = color;

// code before this point is to set up the color for the backgournd. Copy and paste parts of the 'show 
// tab' function here.
 

    var body = document.getElementById("HomePage");

    var containerDiv = document.createElement("div");
    containerDiv.style.position = "relative";
    containerDiv.style.textAlign = "center";

    // headings text and div

    var heading1 = document.createElement("h2");
    heading1.appendChild(document.createTextNode("We all have different goals that make us unique when we achieve them"));
    heading1.style.color = "white";

    var heading1Div = document.createElement("div");
    heading1Div.appendChild(heading1);
    heading1Div.style.position = "absolute";
    heading1Div.style.top = "15px";
    // heading1Div.style.right = "20%";

    // describtion text and div

    var text1Paragraph = document.createElement("p");
    text1Paragraph.appendChild(document.createTextNode("Track your current achievements and let your friends and others take a look at your previous achivements so they can learn from you!"));
    text1Paragraph.style.color = "white";
    text1Paragraph.style.fontSize = "18px";

    var text1Div = document.createElement("div");
    text1Div.appendChild(text1Paragraph);
    text1Div.style.position = "absolute";
    text1Div.style.top = "30%";
    text1Div.style.right = "20%";
    text1Div.style.left = "20%";


    var backgroundimg1 = document.createElement("img");
    backgroundimg1.src = "Stars.JPG"; 
    backgroundimg1.style.width = "100%";

    // var TutordivTag = document.createElement("div");
    // var heading3 = document.createElement("h3");
    // heading3.appendChild(document.createTextNode("We all have different skills that make us unique in our achievements"))
    // var paragraph = document.createElement("paragraph");
    // paragraph.appendChild(document.createTextNode("Track your current achievements and let your friends and others take a look at your previous achivements!"));
    // var backgroundImage =document.createElement("img");
    // backgroundImage.src = "Stars.JPG"; 
    // // setting the size of the image according to widht and height
    // backgroundImage.style.height = "auto";
    // backgroundImage.style.width = "100%";
    // // define a div for each element and a flex-container
    // var sectionTag = document.createElement("div");
    // var articleTag = document.createElement("div");
    // var containerFlex = document.createElement("flex-container");
    // containerFlex.style.display = "display";
    // containerFlex.style.flexDirection = "row";

    // containerFlex.style.flexWrap = "wrap";
    // backgroundImage.style.resize = "400px 400px";
    if (document.getElementById("description") == null){ // in case the button was pressed again. this 
        // TutordivTag.appendChild(heading3);              // makes sure the effect happnes once.
        // TutordivTag.appendChild(paragraph); 
        // // TutordivTag.appendChild(backgroundImage);  
        // articleTag.appendChild(backgroundImage);
        // sectionTag.appendChild(TutordivTag);
        // sectionTag.appendChild(articleTag);
        // containerFlex.appendChild(sectionTag);
        // // TutordivTag.style.backgroundImage = 'url(FirstPhoto.png)';
        // // TutordivTag.style.backgroundSize= "800px 400px";
        // body.appendChild(sectionTag);
        // TutordivTag.id = "description";
        // document.getElementById("description").style.backgroundColor = "white";
        // document.getElementById("description").style.padding = "170px";

        containerDiv.appendChild(backgroundimg1);
        containerDiv.appendChild(heading1Div);
        containerDiv.appendChild(text1Div);

        body.appendChild(containerDiv);
        // LearnerdivTag.id = "descriptionLearner";
        containerDiv.id = "description";
    }
    // divTag.appendChild(heading3);
    // divTag.appendChild(paragraph);
    // body.appendChild(divTag);

    // var LearnerdivTag = document.createElement("div");
    // var heading3_learner = document.createElement("h3");
    // heading3_learner.appendChild(document.createTextNode("Let others help you on the process of achieving those goals."))
    // var paragraphLearner = document.createElement("paragraph");
    // paragraphLearner.appendChild(document.createTextNode("We all need help in getting what we want. Achieving goals can be easier when asking others for help on how to achieve them."));
    // var sectionTag2 = document.createElement("section");
    // var articleTag2 = document.createElement("article");

    // create a container div that hold both the image and the paragraph

    var containerDiv = document.createElement("div");
    containerDiv.style.position = "relative";
    containerDiv.style.textAlign = "center";

    var heading1 = document.createElement("h2");
    heading1.appendChild(document.createTextNode("let others couch you and help you get to your goals"));
    heading1.style.color = "white";

    var heading1Div = document.createElement("div");
    heading1Div.appendChild(heading1);
    heading1Div.style.position = "absolute";
    heading1Div.style.top = "10px";
    heading1Div.style.right = "50%";

    var text1Paragraph = document.createElement("p");
    text1Paragraph.appendChild(document.createTextNode("We all need help in getting what we want. Achieving goals can be easier when asking others for help on how to achieve them. Try the app now and see who shares your goals with you!"));
    text1Paragraph.style.color = "white";
    text1Paragraph.style.fontSize = "17px";

    var text1Div = document.createElement("div");
    text1Div.appendChild(text1Paragraph);
    text1Div.style.position = "absolute";
    text1Div.style.top = "30%";
    text1Div.style.right = "60%";


    var backgroundimg2 = document.createElement("img");
    backgroundimg2.src = "Rocks.JPG"; 
    backgroundimg2.style.width = "100%";
    // backgroundimg2.style.height = "auto";

    if (document.getElementById("descriptionLearner") == null){ // in case the button was pressed again
        // LearnerdivTag.appendChild(heading3_learner);           // this makes sure the effect happnes once.
        // LearnerdivTag.appendChild(paragraphLearner);  
        // articleTag2.appendChild(backgroundimg2);
        // sectionTag2.appendChild(articleTag2);
        // sectionTag2.appendChild(LearnerdivTag);

        // LearnerdivTag.appendChild(sectionTag2);

        // LearnerdivTag.style.backgroundImage = 'url(SecondPhoto.png)';
        // LearnerdivTag.style.backgroundSize= "800px 400px";

        containerDiv.appendChild(backgroundimg2);
        containerDiv.appendChild(heading1Div);
        containerDiv.appendChild(text1Div);

        body.appendChild(containerDiv);
        // LearnerdivTag.id = "descriptionLearner";
        containerDiv.id = "descriptionLearner";
        document.getElementById("descriptionLearner").style.backgroundColor = "gray";
        // document.getElementById("descriptionLearner").style.padding = "170px";
    }

    // user inputs here for email and message.

    }

window.onload = function(){
    document.getElementById("HomeButton").click();
}
