$(document).ready(function(){

var clicks = 1;
var click1;
var click2;
var userInput = [];



 $(".cards").addClass("selected");
   $(".cards").click(function(event){

     if(clicks == 1) {
       $(this).removeClass("selected");

       click1 = event.target.children[0].src;
       console.log(click1);
       clicks++;
    } else if(clicks == 2) {
      $(this).removeClass("selected")
      click2 = event.target.children[0].src;
      console.log("click1 = "+click1);
      console.log("click after target"+click2);
      clicks = 1;

      if(click1===click2) {
        console.log("SNAP!");

        
      } else {
        console.log("NOT SNAP!");

      }

    }
    console.log(clicks);
    return clicks;
  });



$(".reset").click(function() {
  location.reload();
});


});







// As a user you will able to see 16 cards on screen when click on the 'Start again ' button.

    //create 16 divs in HTML with unique classes





// As a User if the correct match clicked, both will remove off deck and if incorrect, the cards will flip back

  //need to create loop through all cards
  //add click event listener
  //two classes of cards need to match
  // create if statement that if selected cards match remove off deck else stay in place and flip back


//As a user, on the first page will be displayed title, instructions to the game and start game
    // need to make instructions to the game in HTML and style with CSS also title and instructions
    // need to create a HTML button which links to page with game itself.
