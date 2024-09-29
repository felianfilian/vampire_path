const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const idleFrames = [
  "Idle1.png",
  "Idle2.png",
  "Idle3.png",
  "Idle4.png", // Add more frames as needed
];

let playerSprite = new Image();
let currentFrame = 0;
let frameCount = idleFrames.length;
let frameDelay = 10; // Control the speed of animation (higher is slower)
let frameTicker = 0; // Ticker to manage delay between frames

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
}

window.onload = function () {
  main();
};

function main() {
  player = new Player();
  AnimateSprite();
}

function AnimateSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update the sprite frame based on frameTicker
  frameTicker++;
  if (frameTicker > frameDelay) {
    currentFrame = (currentFrame + 1) % frameCount;
    playerSprite.src = idleFrames[currentFrame]; // Change to the next frame
    frameTicker = 0;
  }

  ctx.drawImage(
    playerSprite,
    player.position.x,
    player.position.y,
    player.size.width,
    player.size.height
  );
  requestAnimationFrame(AniamteSprite);
}
