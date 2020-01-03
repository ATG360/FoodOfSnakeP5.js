class Food {
  constructor() {
    this.x = random(20, 580);
    this.y = random(20, 580);
  }
  show() {
    noStroke();
    fill(240, 0, 0);
    rect(this.x, this.y, 20, 20)
  }
  location() {
    this.x = random(20, 580);
    this.y = random(20, 580);
  }
}
  
