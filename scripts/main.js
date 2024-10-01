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
    };
    this.velocity = {
      x: 0,
      y: 1,
    };
  }

  draw() {
    this.drawImage(
      playerSprite,
      player.position.x,
      player.position.y,
      player.size.width,
      player.size.height
    );
  }

  dlayerMove() {
    console.log("move");
  }
}

function main() {
  player = new Player();
  AnimateSprite();
}

function AnimateSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  requestAnimationFrame(() => this.AnimateSprite());
}

main();
