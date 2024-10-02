const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const playerSprite = new Image();
const playerIdlePath = "assets/vampire-lady/Idle1.png";
playerSprite.src = playerIdlePath;

let player;

class Drawable {
  drawImage(sprite, posX, posY, width, height) {
    ctx.drawImage(sprite, posX, posY, width, height);
  }
}

class Player extends Drawable {
  constructor() {
    super();
    this.position = {
      x: 100,
      y: 100,
    };
    this.size = {
      width: 64,
      height: 80,
      scale: 1,
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
  }

  draw() {
    this.drawImage(
      playerSprite,
      this.position.x,
      this.position.y,
      this.size.width * this.size.scale,
      this.size.height * this.size.scale
    );
  }

  dlayerMove() {
    console.log("move");
  }
}

function main() {
  player = new Player();
  player.position.y = canvas.height - 200;
  player.size.scale = 1.5;
  AnimateSprite();
}

function AnimateSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  requestAnimationFrame(AnimateSprite);
}

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 87: // up
      jump();
      break;
    case 65: // left
      keys.left.pressed = true;
      break;
    case 83: // down
      break;
    case 68: // right
      keys.right.pressed = true;
      break;
    case 32: // space
      jump();
      break;
  }
});

window.onload = main();
//main();
