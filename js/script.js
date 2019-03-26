function Player(diceRoll, roundScore, totalScore) {
  this.diceRoll= diceRoll;
  this.roundScore= roundScore;
  this.totalScore= totalScore;
}
Player.prototype.Roll = function () {
  var number = Math.floor(Math.random()*6)+1;
  if (number !== 1){
    return [number, (this.roundScore += number)]
  }  else {

    alert("Ups! You got a ONE. Good luck next time!")
      this.roundScore = 0;

  }
}
Player.prototype.Hold = function (totalScore) {
  return this.totalScore += this.roundScore
  if (this.totalScore >= 15) {
    alert("You reached 100 points. Congratulations, you are a winner!")
  }
}
// interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var player1 = $("input#name1").val();
    $("#player1").text(player1);
    var player2 = $("input#name2").val();
    $("#player2").text(player2);
    var Player1 =  new Player ( 0 , 0 , 0);
    var Player2 =  new Player ( 0 , 0 , 0);
    $(".roll1").click(function(){
      Player1.diceRoll = Player1.Roll();
      $("#dice-roll1").text(Player1.diceRoll[0]);
      $("#round-score1").text(Player1.roundScore);
    });
    $(".Hold1").click(function(){
      Player1.totalScore = Player1.Hold();
      $("#score1").text(Player1.totalScore);
    });

    $(".roll2").click(function(){
      Player2.diceRoll = Player2.Roll();
      $("#dice-roll2").text(Player2.diceRoll[0]);
      $("#round-score2").text(Player2.roundScore);
    });
    $(".Hold2").click(function(){
      Player2.totalScore = Player2.Hold(this.totalScore);
      $("#score2").text(Player2.totalScore);
    });
  });
});
