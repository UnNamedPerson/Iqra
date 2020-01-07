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
element.style.fontColor = "rgb(68, 187, 241)"

// removes the elements that existed from Home tab
// var firstContainer = document.getElementById("description");
// var secondContainer = document.getElementById("descriptionLearner");

var body = document.getElementById("HomePage");
body.removeChild(document.getElementById("description"));
body.removeChild(document.getElementById("descriptionLearner"));
// body.removeChild(document.getElementById("contactDiv"));
body.removeChild(document.getElementById("aboutDiv"));
body.removeChild(document.getElementById("space"));
body.removeChild(document.getElementById("contactDiv"));

// here we create elements related to "achievements" tab

var headingG1 = document.createElement("h2");
headingG1.appendChild(document.createTextNode("What you have done so far..."));
headingG1.style.top = "20%";
var headingG1div = document.createElement("div");
// headingG1div.id = "goalsTabDiv1";
headingG1div.appendChild(headingG1);

if(document.getElementById("goalsTabDiv1") == null){
    headingG1div.id = "goalsTabDiv1";
    body.appendChild(headingG1div);
    
}

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

    var body = document.getElementById("HomePage");
// remove elemnts from previous tabs

    var heading1Div = document.getElementById("goalsTabDiv1");
    if(heading1Div != null){
        body.removeChild(heading1Div);
    }
    if(document.getElementById("goalsTabDiv1") != null){
        body.removeChild(document.getElementById("goalsTabDiv1") );
    }

// code before this point is to set up the color for the backgournd. Copy and paste parts of the 'show 
// tab' function here.
 

    var containerDiv = document.createElement("div");
    containerDiv.style.position = "relative";
    containerDiv.style.textAlign = "center";

    // headings text and div
    var heaind3 = document.createElement("h1");
    var heading1 = document.createElement("h2");
    heading1.appendChild(document.createTextNode("We all have different goals that make us unique when we achieve them"));
    heading1.style.color = "white";
    var heading1Div = document.createElement("div");
    heading1Div.appendChild(heading1);
    heading1Div.style.position = "absolute";
    heading1Div.style.top = "10%";

    // describtion text and div
    var text1Paragraph = document.createElement("p");
    text1Paragraph.appendChild(document.createTextNode("Track your current achievements and let your friends and others take a look at your previous achivements so they can learn from you!"));
    text1Paragraph.style.color = "white";
    text1Paragraph.className = "parFont";
    var text1Div = document.createElement("div");
    text1Div.appendChild(text1Paragraph);
    text1Div.style.position = "absolute";
    text1Div.style.top = "30%";
    text1Div.style.right = "20%";
    text1Div.style.left = "20%";

 

    // button
    var signupButton2 = document.createElement("button");
    signupButton2.appendChild(document.createTextNode("share yours today!"));
    signupButton2.link = "LogIn.html";
     // link
    var link = document.createElement("a");
    link.href = "LogIn.html";
    // signupButton2.appendChild(link);
    link.appendChild(signupButton2);
    link.className = "button12";

    signupButton2.className = "button12";
    var signupButtonDiv2 = document.createElement("div");
    signupButtonDiv2.appendChild(link);
    // signupButtonDiv2.appendChild(signupButton2);
    signupButtonDiv2.style.position = "absolute";
    signupButtonDiv2.style.bottom = "20%";
    signupButtonDiv2.style.left = "50%";
    

    // signupButtonDiv.style.marginBottom = "20px";


    var backgroundimg1 = document.createElement("img");
    backgroundimg1.src = "Stars.JPG"; 
    backgroundimg1.style.width = "100%";

    if (document.getElementById("description") == null){ // in case the button was pressed again. this 

        containerDiv.appendChild(heaind3);
        containerDiv.appendChild(backgroundimg1);
        containerDiv.appendChild(heading1Div);
        containerDiv.appendChild(text1Div);
        // containerDiv.appendChild(link);
        containerDiv.appendChild(signupButtonDiv2);
        containerDiv.id = "description";
        body.appendChild(containerDiv);
        // LearnerdivTag.id = "descriptionLearner";
    }

    // create a container div that hold both the image and the paragraph

    // the div that will contain the heading, paragraph, and button.
    var container2Div = document.createElement("div");
    container2Div.style.position = "relative";
    container2Div.style.textAlign = "center";

    // heading with heading's div creation.
    var heading1 = document.createElement("h2");
    heading1.appendChild(document.createTextNode("let others couch you and help you get to your goals"));
    heading1.style.color = "white";
    var heading1Div = document.createElement("div");
    heading1Div.appendChild(heading1);
    heading1Div.style.position = "absolute";
    heading1Div.style.top = "10px";
    heading1Div.style.right = "50%";

     // textParagraph and paragraph's div creation 
    var text1Paragraph = document.createElement("p");
    text1Paragraph.appendChild(document.createTextNode("We all need help in getting what we want. Achieving goals can be easier when asking others for help on how to achieve them. Try the app now and see who shares your goals with you!"));
    text1Paragraph.style.color = "white";
    text1Paragraph.className = "parFont";
    var text1Div = document.createElement("div");
    text1Div.appendChild(text1Paragraph);
    text1Div.style.position = "absolute";
    text1Div.style.top = "30%";
    text1Div.style.right = "60%";

    // button and button's div creation 
    var signupButton = document.createElement("button");
    signupButton.appendChild(document.createTextNode("learn more here"));
    signupButton.className = "button12";
    var signupButtonDiv = document.createElement("div");
    signupButtonDiv.appendChild(signupButton);
    signupButtonDiv.style.position = "absolute";
    signupButtonDiv.style.bottom = "20%";
    // signupButtonDiv.style.marginBottom = "20px";
    signupButtonDiv.style.left = "10%";

    var backgroundimg2 = document.createElement("img");
    backgroundimg2.src = "Rocks.JPG"; 
    backgroundimg2.style.width = "100%";
    // backgroundimg2.style.height = "auto";

    // if the element didin't exist (home tab wasn't created) add the elements to the body. We need this check to prevenet any kind of dubplications in the elements.
    if (document.getElementById("descriptionLearner") == null){ // in case the button was pressed again

        container2Div.appendChild(backgroundimg2);
        container2Div.appendChild(heading1Div);
        container2Div.appendChild(text1Div);
        // containerDiv.appendChild(signupButtonDiv);
        container2Div.id = "descriptionLearner";
        container2Div.style.backgroundColor = "gray";
   
        body.appendChild(container2Div);
 
    }


    // ////////////////////

    var spaceDiv = document.createElement("div");
    spaceDiv.style.backgroundColor = "rgb(14, 158, 224)";
    spaceDiv.style.width = "100%";
    // spaceDiv.style.padding = "20px";
    
    var aboutHeading = document.createElement("h2");
    aboutHeading.appendChild(document.createTextNode("About Hi10"));
    aboutHeading.style.padding = "10px";
    aboutHeading.style.alignContent ="center";
    aboutHeading.style.color = "white";

    if (document.getElementById("space") == null){
        spaceDiv.id = "space";
        spaceDiv.appendChild(aboutHeading);

        body.appendChild(spaceDiv);
    }

///////////////////////

    var aboutParentDiv = document.createElement("div");
    aboutParentDiv.style.width = "100%";
    aboutParentDiv.style.float = "left";
    // aboutParentDiv.style.padding = "7px";

    var firstDiv = document.createElement("div");
    firstDiv.style.backgroundColor = "gray";
    firstDiv.style.width = "50%";

    var secondDiv = document.createElement("div");
    secondDiv.style.backgroundColor = "white";
    secondDiv.style.width = "50%";

    // about div
    var aboutDiv = document.createElement("div");
    aboutDiv.style.backgroundColor = "white";
    aboutDiv.style.width = "90%";
    // var form = document.createElement("form");
    // var aboutHeading = document.createElement("h2");
    // aboutHeading.appendChild(document.createTextNode("About Hi10"));
    aboutHeading.style.padding = "10px";

    var aboutParagraph = document.createElement("p");
    aboutParagraph.className = "parFont";
    aboutParagraph.appendChild(document.createTextNode("Hi10 was is a website that was created by a startup located in Saudi Arabia. The website was created to help build a network of people helping each other achieve their goals and dreams, and they can save those accomplismnets on Hi10 to show to their friends and family."));

    if (document.getElementById("aboutDiv") == null){
        aboutParentDiv.id = "aboutDiv";
        // aboutHeading.appendChild(aboutParagraph);
        aboutDiv.appendChild(aboutParagraph);

        aboutParentDiv.appendChild(firstDiv);
        aboutParentDiv.appendChild(aboutDiv);
        // aboutParentDiv.appendChild(aboutHeading);
        // aboutParentDiv.appendChild(secondDiv);

        body.appendChild(aboutParentDiv);
    }



    var QandSHeading = document.createElement("h2");
    QandSHeading.appendChild(document.createTextNode("Questions or suggestions?"));
    QandSHeading.style.backgroundColor = "rgb(14, 158, 224)";
    QandSHeading.style.color = "white";
    QandSHeading.style.padding = "10px";

    var space2 = document.createElement("h2");
    space2.appendChild(document.createTextNode(" "));

    // var contactDiv = document.createElement("div");
    // contactDiv.id = "contact";
    // var lists = document.createElement("ul");

    // var emailList = document.createElement("li");
    // var messageList = document.createElement("li");
    // var buttonList = document.createElement("li");
    // buttonList.className = "emailButton";
    // var emailForm = document.createElement("form");

    // emailForm.action = "https://www.heelo.com"; // use a url to handel the data.
    // emailForm.method = "GET";
   
    // var emailLabel = document.createElement("label");
    // emailLabel.appendChild(document.createTextNode("Your email: "));
    // var emailInput = document.createElement("input");
    // // emailInput.style.padding = "10px";
    // emailInput.type = "email"; emailInput.id = "emailAddress";
    // emailInput.style.width = "350px";
    // emailList.appendChild(emailLabel); emailList.appendChild(emailInput);

    // var messageLabel = document.createElement("label");
    // messageLabel.appendChild(document.createTextNode("Message to send: "));
    // var messageInput = document.createElement("textarea");
    // messageInput.style.height = "100px";
    // messageInput.style.width = "350px";
    // messageInput.style.padding = "40px";
    // messageInput.id = "message"; 
    // messageList.appendChild(messageLabel); messageList.appendChild(messageInput);

    // var subButton = document.createElement("button");
    // subButton.type = "submit"
    // subButton.appendChild(document.createTextNode("send Email")); 
    // buttonList.appendChild(subButton);

    // lists.appendChild(emailList);
    // lists.appendChild(messageList);
    // lists.appendChild(buttonList);

    // emailForm.appendChild(lists);

    // contactDiv.appendChild(QandSHeading);
    // contactDiv.appendChild(space2);
    // contactDiv.appendChild(emailForm);


    var emailLink = document.createElement("a");
    emailLink.href = "mailto:abdulla.sayari1@gmail.com";
    emailLink.className = "parFont";
    emailLink.appendChild(document.createTextNode("send us an email with all your questions and suggestions."));
    
    var contactDiv = document.createElement("div");
    contactDiv.appendChild(QandSHeading);
    contactDiv.appendChild(space2);
    contactDiv.appendChild(emailLink);


    if(document.getElementById("contactDiv") == null){
        contactDiv.id = "contactDiv";
        body.appendChild(contactDiv); 
    }

    }

    // load the window to have the home tab working as a default.

window.onload = function(){
    document.getElementById("HomeButton").click();
}

// window.onscroll = function() {scroll()};

// function scroll(){
//     console.log("scroll function activated");

//     var heading = document.getElementById("mainHeading");

//     // Get the offset position of the navbar
//     var sticky = heading.offsetTop;
    
//     if (window.pageYOffset > sticky) {
//         // heading.style.height = "30px";
//         heading.classList.add("stick");
//       } else {
//         heading.classList.remove("stick");
//       }
// }