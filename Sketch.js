    var possibleChoice = ["rock","paper","scissor"];
    var currentSelection;
    var playerOneScore = 0;
    var playerTwoScore = 0;
    var c;

    function setup() {
      createCanvas(windowWidth, windowHeight);
      frameRate(90);
      angleMode(DEGREES);
    }

    function draw() {
      fill(180);
      noStroke();
      textSize(20);
      text("1 = Rock",10,30);
      text("2 = Paper",10,60);
      text("3 = Scissor",10,90);
      c = color(28,120,230);
      fill(c);
      text("Player One: "+playerOneScore,10,150);
      c = color(230,20,68);
      fill(c);
      text("Player Two: "+playerTwoScore,10,180);
      translate(windowWidth / 2 , windowHeight / 2);
    }

    function keyPressed() {
      if (keyCode === 49) {
        currentSelection = possibleChoice[0];
        createAI();
      }
      else if (keyCode === 50) {
        currentSelection = possibleChoice[1];
        createAI();
      }
      else if (keyCode === 51) {
        currentSelection = possibleChoice[2];
        createAI();
      }
    }

    function createAI(){
      background(240);

      var rsp = new RSP(0,0,currentSelection,1);
      rsp.show();

      var randomChoice = Math.floor(Math.random() * possibleChoice.length);
      var ai = new RSP(0,0,possibleChoice[randomChoice],2);
      ai.show();

      var winner = Logic(currentSelection, possibleChoice[randomChoice]);
      if (winner == 1){
        rsp.show(winner);
      }
      else{
        ai.show(winner);
      }
    }


    function Logic(a,b){
      console.log(a + " " + b);
      //rock
      if(a==possibleChoice[0]){
        if(b == possibleChoice[1]){
          console.log("paper wraps rock");
          playerTwoScore += 1;
          return 2;
        }
        else if(b == possibleChoice[2]){
          console.log("rock breaks scissor");
          playerOneScore += 1;
          return 1;
        }
        else {
          console.log("draw");
          return null;
        }
      }
      //paper
      if (a == possibleChoice[1]){
        if(b == possibleChoice[0]){
          console.log("paper wraps rock");
          playerOneScore += 1;
          return 1;
        }
        else if(b == possibleChoice[2]){
          console.log("scissor cuts paper");
          playerTwoScore += 1;
          return 2;
        }
        else {
          console.log("draw");
          return null;
        }
      }
      //scissor
      if(a == possibleChoice[2]){
        if(b == possibleChoice[0]){
          console.log("rock breaks scissor");
          playerTwoScore += 1;
          return 2;
        }
        else if(b == possibleChoice[1]){
          console.log("scissor cuts paper");
          playerOneScore += 1;
          return 1;
        }
        else {
          console.log("draw");
          return null;
        }
      }
    }

    function RSP(x,y,rsp,player) {
      var rock = false;
      var paper = false;
      var scissor = false;
      var bias = windowWidth / 4;
      var c;

      if (player == 1){
        bias = -bias;
        c = color(28,120,230);
      }

      else{
        bias = bias;
        c = color(230,20,68);
      }


      this.show = function(winner) {
        if(rsp == possibleChoice[0]){
          fill(c);
          if(!winner){
            noStroke();
          }
          else{
            strokeWeight(6);
            stroke(50);
          }
          ellipse(x + bias,y, 120, 120);
          rock = true;
        }
        else if(rsp == possibleChoice[1]){
          fill(c);
          if(!winner){
            noStroke();
          }
          else{
            strokeWeight(6);
            stroke(50);
          }
          rect(x + bias,y, 80, 120);
          paper = true;
        }
        else if(rsp == possibleChoice[2]){
          fill(c);
          if(!winner){
            noStroke();
          }
          else{
            strokeWeight(6);
            stroke(50);
          }
          push();
          rotate(-45);
          translate(100,-300);
          rect(x + bias,y, 20, 120);
          rect(x + bias - 20,y + 20, 120, 20);
          pop();
          scissor = true;
        }
      }


    }

    