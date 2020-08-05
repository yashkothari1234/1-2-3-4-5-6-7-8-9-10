class Paper{
    constructor(x,y,width,height){
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 5,
            density :6
        }
        this.body = Matter.Bodies.circle(x,y,5,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
ellipseMode(CENTER);
fill("white");
ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
  }