class Sprite {
  constructor(x, y, w, h, img, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = document.createElement("img");
    this.img.src = img;
    document.body.appendChild(this.img);
    this.img.style.display = "none"
    this.ctx = ctx;
  }

  collides(other) {
    return (this.x < other.x + other.w &&
      this.x + this.w > other.x &&
      this.y < other.y + other.h &&
      this.y + other.h > other.y)
  }

  show() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}