class Mage extends Sprite {
  constructor(x, y, ctx) {
    super(x, y, 75, 100, "sprites/pixelmage.png", ctx);
    this.orbs = [];
  }

  shoot() {
    this.orbs.push(new Orb(this.x+50, this.y+30, 50, 50, this.ctx));
  }

  update(enemys) {
    // /console.log(enemys);
    let move = 0;
    if(KEYS["ArrowUp"]) move += -5;
    if(KEYS["ArrowDown"]) move += 5;
    this.y += move;
    for(const orb of this.orbs) {
      orb.update();
      if(orb.dead(enemys)) {
        const index = this.orbs.indexOf(orb);
        setTimeout(() => this.orbs.splice(index, 1), 0);
      }
    }
    if(this.y < 0) this.y = 0;
    if(this.y > 260) this.y = 260;
  }

  show() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    for(const orb of this.orbs) {
      orb.show();
    }
  }
}