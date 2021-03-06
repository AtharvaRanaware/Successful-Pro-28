class Stone {

    constructor(x, y, radius, options) {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:1,
            density:1.2
    
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
       
        this.image = loadImage("stone.png");
       
        World.add(world, this.body);
      }

     
       
      

      display(){
        var pos =this.body.position;
     
        push();
        
       // ellipseMode(RADIUS);
       
        imageMode(RADIUS);
        image(this.image,pos.x, pos.y, this.radius,this.radius);
        
       // circle(pos.x, pos.y, this.radius);
        pop();
       
       
       
      }
    }