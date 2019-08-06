$(document).ready(function() {

});


var gamestat = false;
$("#start").click(function() {
    if(gamestat == false)
    {
      gamestat = true;
      $("h2#status").text("Starting .....");
      $("div.boundary").css("background","#eeeeee");
      // $("div.boundary").addClass("boundary");
        maze.onmouseover  = maze.onmouseout = startHandler;
    }
});

$("#end").click(function() {
    if(gamestat == true)
    {
      finishgame("You win!");
    }
});


function handlerMout(event) {
    alert("Return to the box to continue")
}


function startHandler() {
   function str(el) {
     if (!el) return "null"
     return el.className || el.tagName;
   }
   if("boundary" == str(event.target)){
       lose(event);
   }
}

function lose(e) {
    $("div.boundary").css("background","#ff8888");
    // $("div.boundary").addClass("#ff8888");
    finishgame("You Loose");
}
function stop() {
 return false;
}

function finishgame(gametxt) {
    gamestat = false;
    $("h2#status").text(gametxt);
    maze.onmouseover  = maze.onmouseout = maze.onmouseleave =stop;
    setTimeout(function () {
        $("h2#status").text("Click the \"S\" to begin.");
    },1000);
}



