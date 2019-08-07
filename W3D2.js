
(function () {
   let timer   = null;
   let element = $("#cicle");


   function resize(){
       let size = parseInt(element.css("font-size"));
       element.css("font-size",(size+10)+"px");
       console.log("Info "+size);
   }
   timer = setInterval(resize, 250);

    element.onclick(function () {

        $(this).remove();
    });



})();


