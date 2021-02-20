const c = document.querySelector("canvas").getContext("2d")
const mage = new Mage(
  0,
  160,
  c
);
let score = 0;
const grass = new Sprite(0, 0, 640, 360, "sprites/grass.jpg", c);
const enemys = [];
mage.img.width = 50;
mage.img.height = 100;
let frames = 120;

function animate() {
  let id = requestAnimationFrame(animate);
  grass.show();
  c.font = "bold 16pt comic-sans"
  c.fillText(`score:
${score}`, 20, 20);
  c.fill();
  mage.show();
  mage.update(enemys);
  for(const enemy of enemys) {
    enemy.update();
    enemy.show();
  }
  if(id % Math.round(frames) == 0) {
    enemys.push(new Enemy(700, c));
    frames -= frames/50;
    frames++;
  }
  console.log(frames);
}
animate();

