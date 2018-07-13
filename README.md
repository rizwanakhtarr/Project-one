# Project-one
### Avengers Snap game

### Description

The goal was to make a snap game where if you match an avengers card with another you will gain a point and need to find 8 in total to win the game. under a 60 seconds timer. if you go over the timer you lose.

### Installation
Cloned github link into my local machine
	git@github.com:rizwanakhtarr/Project-one.git

and then created a repo on github which then I could push my work up to and merge into the master branch once I completed it.

### Challenges
the main challenge was to make the modals match the timer so when the timer is 0 it shows up with game over and when you win it shows up with the congratulations screen.

Another challenge was to use JQuery to identify which card was a match and apply the winning condition.

### code snippet
```

.congratz {
  margin: auto;
  width: auto;
  height: 100px;
  padding-top: 50px;
  padding-bottom: 67px;
}

.back {
  background:black;
  border: 1px solid #B8B8B8;
  border-radius: 4px;
}

.instructions {
  width: auto;
  height: 73px;
  margin:auto;
  padding:45px;

}

```

```
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

```
