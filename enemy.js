class Enemy extends Sprite {
  constructor(x, ctx) {
    const y = Math.random()*260;
    super(x, y, 100, 100, "sprites/demon.png", ctx);
    this.dx = -3
  }

  update() {
    this.x += this.dx;
  }
}