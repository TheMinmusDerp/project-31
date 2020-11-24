class Plinko {
  constructor(x,y,r)
  {
    var options={
      isStatic:true
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    World.add(world, this.body);
    //this.image = loadImage("sprites/ball.png");

  }
  display()
  {
      var plinkopos=this.body.position;		

      push()
      translate(plinkopos.x, plinkopos.y);
      rectMode(CENTER);
      strokeWeight(3);
      //image(this.image, 0,this.r,this.r,this.r);
      fill(255,0,255)
      ellipse(0,0,this.r, this.r);
      pop()
      
  }

}