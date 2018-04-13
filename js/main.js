// JavaScript Document
(() => {

  console.log('game stuff ready!');

//set up variables
  const theCanvas = document.querySelector('canvas'),
    ctx = theCanvas.getContext('2d'),
    playerImg = document.querySelector('.tank'),

    player = { x: 280, y: 550, width: 50, height: 50, speed: 8, lives: 3}, //variables that describe the player

		playButton = document.querySelector('.play'),
    pauseButton = document.querySelector('.pause'),
    resetButton = document.querySelector('.reset');



function draw() {
ctx.clearRect(0, 0, theCanvas.width, theCanvas.height);
ctx.drawImage(playerImg, player.x, player.y, player.width, player.height);

 window.requestAnimationFrame(draw);
}

  function moveTank(e) {
  	//check the keycode of the key you're pressing
   switch (e.keyCode) {
       //left arrow key
       case 37:
       console.log('move the ship left');
       if (player.x > 0){ //don't allow the player to go past the left edge
       player.x -= player.speed; //move ship left
    }
       break;
  //
  //     //right arrow key
       case 39:
       console.log('move the ship right');
      if (player.x + player.width < theCanvas.width) {//don't allow the player to go past the right edge
         player.x += 5; //move ship right
  			 window.requestAnimationFrame(draw);


      break;
  	}
  //
//

    //do nothing
  }
 }


function resumeGame() {
  playState = true;
  window.requestAnimationFrame(draw);
}

function pauseGame() {
  playState = false;
}



window.requestAnimationFrame(draw); //everytime we do a key press , we want another one

window.addEventListener('keydown', moveTank);
playButton.addEventListener('click', resumeGame);
pauseButton.addEventListener('click', pauseGame);

})();
