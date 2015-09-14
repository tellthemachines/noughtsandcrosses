var button;

(function(){

      counter = 0;
      initNum = 4;

  function Button() {
    this.status = undefined;
  }

  Button.prototype.buildSquare = function(id){
    var board = document.getElementById("gameBoard");
    var square = document.createElement("button");
    square.className = "square";
    square.setAttribute("id", id);
    board.appendChild(square);
  };

  Button.prototype.changeStatus = function(status){
    this.status = status;
  };

  function init(num){
    var allButtons = [],
        squared = num*num;
    for(var i=0;i<squared;i++){
      allButtons[i] = new Button;
      var buttonId = "btn" + i;
      allButtons[i].buildSquare(buttonId);
    }
    return allButtons;
  }



  var clickResponse = function(){
    var btnId = this.id.slice(2);
    var status = counter%2==0?false:true;

  // get button to change status 
  }

var tehBtns =  init(initNum);
console.log(tehBtns);

      for (var j=0;j<initNum*initNum;j++){
        document.getElementById("btn" + j).onclick = clickResponse;

      }

}());
