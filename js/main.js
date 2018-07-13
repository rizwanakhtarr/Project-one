$(document).ready(function(){

var clicks = 1;
var click1;
var click2;
var modal = $("#simpleModal")[0];
var modalBtn = $("#modalBtn")[0];
var closeBtn = $(".closeBtn")[0];
var winningCondition = 0;

var sec = 60;


$(window).on('load', function(){
    $("#instructionsModal").slideDown().show();
    $(".closeBtn").click(function(){

    $("#instructionsModal").slideUp().hide();
  });

 });


var timer = setInterval(function() {
   $('#sec').text(sec--);
     $("#GameOver").hide();
   if (sec == -1) {

      $('#Timer').fadeOut('fast');
      clearInterval(timer);
      $("#GameOver").show();


   }
}, 1000);


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
             $("."+click1).addClass("matched");
          },500);

          if(winningCondition == 8) {
            setTimeout(function(){
              modal.style.display = "block";
            },500)

          }

      } else {

          setTimeout(function(){

            $("." +click1).flip(false);
            $("." +click2).flip(false);


          },500);



      }

    }
    return clicks;
  });


function reset(){
  $(".reset").click(function(){

    location.reload();

  });
}

$(closeBtn).on("click", closeModal);
$(modalBtn).on("click", openModal);
  function closeModal() {

    modal.style.display = "none";
  }

  function openModal() {

    modal.style.display = "block";
  }

  $(".cards").flip();

});
