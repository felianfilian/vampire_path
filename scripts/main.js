const canvas = document.getElementById("main-canvas");
const ctx = canvas.getContext("2d");

const playerSprite = new Image();
const vampLadySpritePath = "Idle1.png";
playerSprite.src = vampLadySpritePath;

AniamteSprite();

function AniamteSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(spriteSheet, 100, 100, 64, 80);
  requestAnimationFrame(AniamteSprite);
}
