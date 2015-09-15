var button;

(function(){

      counter = 0;
      initNum = 4;

  function Button() {
    this.status = undefined;
    this.id = "";
  }

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

  var tehBtns =  init(initNum);

  function checkResult(){
      
  }

  var clickResponse = function(){
    var btnId = this.id.slice(3);
    var status = counter%2==0?false:true;
    tehBtns[btnId].changeStatus(status);
    console.log(tehBtns[btnId].id);
    counter++;
  // get button to change status
  }




      for (var j=0;j<initNum*initNum;j++){
        document.getElementById("btn" + j).onclick = clickResponse;
      }

}());
