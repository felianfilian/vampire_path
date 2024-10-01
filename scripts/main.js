const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const playerSprite = new Image();
const playerIdlePath = "assets/vampire-lady/Idle1.png";
playerSprite.src = playerIdlePath;

let player;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.size = {
      width: 64,
      height: 80,
    };
  }

  PlayerMove() {
    console.log("move");
  }
}

function main() {
  player = new Player();
  AnimateSprite();
}

function AnimateSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    playerSprite,
    player.position.x,
    player.position.y,
    player.size.width,
    player.size.height
  );
  requestAnimationFrame(() => this.AnimateSprite());
}

main();
