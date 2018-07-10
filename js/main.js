$(document).ready(function(){

var clicks = 1;
var click1;
var click2;
var modal = $("#simpleModal")[0];
var modalBtn = $("#modalBtn")[0];
var closeBtn = $(".closeBtn")[0];
var winningCondition = 0;
var sec = 30

var timer = setInterval(function() {
   $('#Timer span').text(sec--);
   if (sec == -2) {
     alert("better luck next time!");
      $('#Timer').fadeOut('fast');

      clearInterval(timer);
   }
}, 1000);

$(".cards").addClass("selected");
  $(".cards").click(function(event){
    if(clicks == 1) {
      $(this).removeClass("selected");
       click1 = $(this).attr('class').split(' ')[1];
       clicks++;

     } else if(clicks == 2) {
      $(this).removeClass("selected")
      click2 = $(this).attr('class').split(' ')[1];
      clicks = 1;

        if(click1===click2) {
          winningCondition++;

          console.log(winningCondition);
          setTimeout(function(){
             $("."+click1).remove();
          },500);

          if(winningCondition == 8) {
            setTimeout(function(){
              modal.style.display = "block";
            },500)

          }

      } else {

          setTimeout(function(){
            $("."+click1).addClass("selected");
            $("."+click2).addClass("selected");
          },500);

          console.log("not the right match");

      }

    }
    return clicks;
  });




  $(".reset").click(function(){

  location.reload();

  });




$(closeBtn).on("click", closeModal);
$(modalBtn).on("click", openModal);
  function closeModal() {

    modal.style.display = "none";
  }

  function openModal() {

    modal.style.display = "block";
  }


});
