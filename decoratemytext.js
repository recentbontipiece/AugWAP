
let timer = null;

window.onload = function(){
    // put all of your code here
    "use strict";
    var btclick =  document.getElementById("btclick");
    btclick.onclick = timerCall;

    var chck = document.getElementById("chck");
    chck.onchange =chColor;

}


function  chColor() {
   var x = document.getElementById("chck")
    if(x.checked){
        var txt = document.getElementById("idTxt");
        txt.style.fontWeight = "bold";
        txt.style.color= "green";
        txt.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('/Users/johnstyvesvallon/IdeaProjects/preparation/.idea/pattern/hundred_dollar.jpg')";
    }
    else{
        var txt = document.getElementById("idTxt").style.fontWeight = "normal";
        document.body.style.backgroundImage ="";

    }

}


function timerCall() {
    "use strict";
    if(timer === null){
        timer = setInterval(chSize,5000);
    }else{
        clearInterval(timer);
        timer = null;
    }
}
function chSize() {
    "use strict";
    var txt = document.getElementById("idTxt");
    if(!txt.style.fontSize){

       let compStyles = window.getComputedStyle(txt);
       txt.style.fontSize  = parseInt(compStyles.getPropertyValue("font-size"))*3/4+"px";
        console.log("FontSize if "+txt.style.fontSize);
    }
    txt.style.fontSize = parseInt(txt.style.fontSize)+2+"px";
}

function  callAlert(){
    "use strict";
    alert("Hello, Word");
}




