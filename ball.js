class Ball 
{
  constructor(x, y, radius) 
  {
    let options = {
      restitution:1
    };
    
    this.body = Bodies.circle(x, y, radius, options);
    this.radius=radius;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill(127);
    ellipse(pos.x, pos.y,this.radius);
    pop();
  }
  
}


