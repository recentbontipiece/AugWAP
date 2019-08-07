
(function () {
    "use stric"
   let timer      =null;
   let element    =$("#cicle");
   let container  =$("#circleContainer");
   let backg      =["yellow","darkgray","darkslategrey","blueviolet","aqua"]
   let widtd;
   let growth;
   let vrate;
   let grointervale;


   $("body").on('click','.circlesnew',remove);

    $("#btSize").on("click",function () {

      let newContainer = $("<div>");

       widtd          =$("#vwidth").val();
       growth         =$("#vamount").val();
       vrate          =$("#vrate").val();
       grointervale   =$("#grointervale").val();

       console.log("widtd "+widtd);
       console.log("growth "+growth);
       console.log("vrate "+vrate);
       console.log("grointervale "+grointervale);

       while(grointervale > 0){
           newContainer.append($("<div>",{
               "class":"circlesnew",
               "css": {
               "width": widtd+"px",
               "height":widtd+"px",
               "border-radius": "50%",
               "background": backg[getRandomArbitrary(0,backg.length)],
               "position": "absolute",
               "bottom"  :getRandomArbitrary(0,30),
               "left"    :getRandomArbitrary(30,70)+"%",
             }
           }));

           grointervale--;

       }
       container.append(newContainer);
       element.remove();



        console.log("Answer "+vrate);
        if(timer !=null){
            clearInterval(timer);
            timer = null;
        }
        timer = setInterval(resize,vrate)

   });

    function remove() {
        console.log("Remove");
       $(this).remove();
    }

   function getRandomArbitrary(min, max) {
     return Math.floor(Math.random() * (max - min) + min);
   }

    function resize(){
     $(".circlesnew").css("width",function (idx, old) {
         console.log(parseInt(old) +parseInt(growth));
        return parseInt(old) +parseInt(growth)+"px";
     }).css("height",function (idx, old) {
         console.log(parseInt(old) +parseInt(growth));

         return parseInt(old) +parseInt(growth)+"px";
     });
   }





})();


