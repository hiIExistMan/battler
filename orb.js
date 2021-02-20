class Orb extends Sprite {
  constructor(x, y, w, h, ctx) {
    super(x, y, w, h, "sprites/magicorb.png", ctx);
    this.dx = 3;
  }

  update() {
    this.x += this.dx;
  }

  dead(enemys) {
    for(const enemy of enemys) {
      if(this.collides(enemy)) {
        console.log("boom!");
        score++;
        const index = enemys.indexOf(enemy);
        setTimeout(() => enemys.splice(index, 1), 0);
        return true;
      }
    }
    if(this.x > 700) {
      return true;
    }
  }
}