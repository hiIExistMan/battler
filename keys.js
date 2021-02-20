const KEYS = {};

addEventListener("keydown", e => {
  KEYS[e.key] = true;
  if(e.key == " ") {
    mage.shoot();
  }
});
addEventListener("keyup", e => {
  KEYS[e.key] = false;
});