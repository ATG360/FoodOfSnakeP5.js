class Snake {
  constructor() {
    this.Score = 0;
    this.speedX = 0;
    this.speedY = 0;
    this.body = [];
    this.body[0] = createVector(width/2,height/2);
    this.len = 0;
  }
  grow()
  {
    let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }
  update() {
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.speedX;
    head.y += this.speedY;
    this.body.push(head);
    // this.body[0].x += this.speedX;
    // this.body[0].y += this.speedY;
  }
  show() {
    for(let i = 0; i < this.body.length;i++){
    fill(0);
    noStroke();
    rect(this.body[i].x, this.body[i].y, 20, 20);
    }
  }
  move(X, Y) {
    this.speedX = X;
    this.speedY = Y;
  }
  eat(pos) {
    this.Score += 1;
    this.grow();
    pos.location();
  }
  dead(FR) {
    if (this.body[0].x > width - 1 || this.body[0].x < 0 || this.body[0].y < 0 || this.body[0].y > height - 1) {
      return true;
    }
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
      for(let i = 0;i <this.body.length-1;i++){
      let part = this.body[i];
        if(part.x == x && part.y == y)
          return true;
      }
  }
}
