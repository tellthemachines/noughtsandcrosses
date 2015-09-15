(function(){

    var  counter = 0;
    var  initNum = 6;

  // define button constructor

  function Button() {
    this.status = undefined;
    this.id = "";
  }

  // add methods to button prototype

  Button.prototype.buildSquare = function(id){
      this.id = id;
    var board = document.getElementById("gameBoard");
    var square = document.createElement("button");
    square.className = "square";
    square.setAttribute("id", id);
    board.appendChild(square);
  };

  Button.prototype.changeStatus = function(status){
    this.status = status;
    var figure = status==false?"O":"X";
    var tehBtn = document.getElementById(this.id);
    tehBtn.innerHTML = figure;
  };

  // init function uses the constructor to generate buttons & returns button array

  function init(num){
    var allButtons = [],
        squared = num*num;
    for(var i=0;i<squared;i++){
      allButtons[i] = new Button;
      var buttonId = "btn" + i;
      allButtons[i].buildSquare(buttonId);
    }
    var styles = "<style>.square:nth-child(" + num + "n+" + (num + 1) + "){clear:both;}</style>"
    document.getElementsByTagName("head")[0].innerHTML += styles;
    return allButtons;
  }

  // then we call init and store the returned button array for further use

  var tehBtns =  init(initNum);

  // the result checking function checks each column, row and diagonal for wins (all noughts or all crosses)

  function checkResult(){

      //columns
      for(var i=0;i<initNum;i++){
        var currCol = i,
            colScore = 0;
        for(var j=0;j<initNum;j++){
          colScore += tehBtns[currCol].status;
          currCol += initNum;
          if(j == initNum-1) {
            if(colScore == 0) {
              document.getElementById("score").innerHTML = "noughts win!";
            }
            else if(colScore == initNum) {
              document.getElementById("score").innerHTML = "crosses win!";
            }
          }
        }
      }

      //rows
      var currRow = 0;
      for(var k=0;k<initNum;k++){
        var rowScore = 0;
        for(var l=0;l<initNum;l++){
          rowScore += tehBtns[currRow+l].status;
          if(l == initNum-1) {
            if(rowScore == 0) {
              document.getElementById("score").innerHTML = "noughts win!";
            }
            else if(rowScore == initNum) {
              document.getElementById("score").innerHTML = "crosses win!";
            }
          }
        }
        currRow += initNum;
      }
      // back slash
      var currBack = 0;
      var backScore = 0;
      for (var m=0;m<initNum;m++) {
        backScore += tehBtns[currBack].status;
        currBack += initNum + 1;
        if(m == initNum-1) {
          if(backScore == 0) {
            document.getElementById("score").innerHTML = "noughts win!";
          }
          else if(backScore == initNum) {
            document.getElementById("score").innerHTML = "crosses win!";
          }
        }
      }
      // forward slash
      var currFwd = initNum-1;
      var fwdScore = 0;
      for(var n=0;n<initNum;n++){
        fwdScore += tehBtns[currFwd].status;
        currFwd += initNum-1;
        if(n == initNum-1) {
          if(backScore == 0) {
            document.getElementById("score").innerHTML = "noughts win!";
          }
          else if(backScore == initNum) {
            document.getElementById("score").innerHTML = "crosses win!";
          }
        }
      }
  }

  // function for what happens when we click a box

  var clickResponse = function(){
    var btnId = this.id.slice(3);
    var status = counter%2==0?false:true;
    tehBtns[btnId].changeStatus(status);
    counter++;
    checkResult();
  }

  // adding click event function to all the boxes

  for (var j=0;j<initNum*initNum;j++){
    document.getElementById("btn" + j).onclick = clickResponse;
  }

}());
