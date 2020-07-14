class plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
this.r = r = 10;
     
      this.body = Bodies.circle(x,y,this.r,options);
      
    }
    display(){
      var pos =this.body.position;
      
      fill("brown");
      circle(pos.x, pos.y,this.r);
    }
  };
