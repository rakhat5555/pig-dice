function Player(diceRoll, roundScore, totalScore) {
  this.diceRoll= diceRoll;
  this.roundScore= roundScore;
  this.totalScore= totalScore;
}
var Player1;
Player.prototype.Rollone = function () {
  var number = Math.floor(6*Math.random())+1;
  console.log(number)
  if (number !== 1){

    return [number, (this.roundScore += number)]
  }  else if ( number === 1){

    // this.resetRound();
    alert("Ups! You got a ONE. Good luck next time!")
    $(".hide1").addClass('display1Hide');
    $(".hide2").removeClass('display1Hide');
    $(".roll1").hide();
    $(".roll2").show();

    return [this.roundScore= 0, this.diceRoll=1];
  }

}

var Player2;
Player.prototype.Rolltwo = function () {
  var number = Math.floor(6*Math.random())+1;
  console.log(number)
  if (number !== 1){

    return [number, (this.roundScore += number)]
  }  else if ( number === 1){

    // this.resetRound();
    alert("Ups! You got a ONE. Good luck next time!")
    $(".hide2").addClass('display1Hide');
    $(".hide1").removeClass('display1Hide');
    $(".roll2").hide();
    $(".roll1").show();

    return [this.roundScore= 0, this.diceRoll=1];
  }

}

Player.prototype.Hold = function (totalScore) {
 this.totalScore += this.roundScore
  if (this.totalScore >= 100) {
    $("#winner").show();
     $("#gameArea").hide();
     $(".hide1").removeClass('display1Hide');
     $(".hide2").removeClass('display1Hide');
    return  this.totalScore=0;

  }
  this.diceRoll= 0;
  this.roundScore= 0;
  return this.totalScore;



}
function resetRound() {

  var shows = [$("#dice-roll1"), $("#round-score1"),$("#dice-roll2"), $("#round-score2")]
 shows.forEach(function(show) {
   show.text(0);

 })
 $(".hide1").removeClass('display1Hide');
 $(".hide2").removeClass('display1Hide');
 $(".roll2").show();
 $(".roll1").show();
 this.totalScore = 0;
};
Player.prototype.resetGame = function() {
  var showResults = [$("#dice-roll1"), $("#round-score1"),$("#dice-roll2"), $("#round-score2"), $("#score1"), $("#score2")]
 showResults.forEach(function(showResult) {
   show.text(0);
 })
};


// interface logic
$(document).ready(function() {
  $(".rules").click(function() {
    $("#rules").toggle();

  });
  $("form").submit(function(event) {
    event.preventDefault();
    $("#rules").hide();
    $("#gameArea").show();
    $("#winner").hide();
    $("#score2").text(this.totalScore= 0);
    $("#score1").text(this.totalScore= 0);

    resetRound();


    var player1 = $("input#name1").val();
    $("#player1").text(player1);
    var player2 = $("input#name2").val();
    $("#player2").text(player2);
    Player1 =  new Player ( 0 , 0 , 0);
    Player2 =  new Player ( 0 , 0 , 0);
    $(".roll1").click(function(){
      Player1.diceRoll = Player1.Rollone();
      $("#dice-roll1").text(Player1.diceRoll[0]);
      $("#round-score1").text(Player1.roundScore);

    });
    $(".Hold1").click(function(){
      Player1.totalScore = Player1.Hold();
      $("#score1").text(Player1.totalScore);
      $("#dice-roll1").text(Player1.diceRoll=0);
      $("#round-score1").text(Player1.roundScore=0);
      $(".hide1").addClass('display1Hide');
      $(".hide2").removeClass('display1Hide');
      $(".roll1").hide();
      $(".roll2").show();
    });

    $(".roll2").click(function(){
      Player2.diceRoll = Player2.Rolltwo();
      $("#dice-roll2").text(Player2.diceRoll[0]);
      $("#round-score2").text(Player2.roundScore);
    });
    $(".Hold2").click(function(){
      Player2.totalScore = Player2.Hold(this.totalScore);
      $("#score2").text(Player2.totalScore);
      $("#dice-roll2").text(Player2.diceRoll=0);
      $("#round-score2").text(Player2.roundScore=0);
      $(".hide2").addClass('display1Hide');
      $(".hide1").removeClass('display1Hide');
      $(".roll2").hide();
      $(".roll1").show();

    });
  });
});
