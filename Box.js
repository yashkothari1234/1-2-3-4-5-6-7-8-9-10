class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution : 0.1,
            friction : 3,
            density : 4
        }
        this.body = Matter.Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height =height;
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x,pos.y,this.width,this.height);

    }
}