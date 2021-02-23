class Hero {
    constructor(x, y,width,height,angle) {
      var options = {
          
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("images/superhero-01.png");
      this.width =width;
      this.height= height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };