class Girl {
    constructor(x,y,width,height){
    var option = {
    isStatic: true
    }
    this.girl = Bodies.rectangle(x,y,width,height, option);
    this.width=width
    this.height=height
    this.image=loadImage("girl.jpeg")
    World.add(world,this.girl);
    
    }
    display(){
    var pos = this.girl.position
    var angle= this.girl.angle
    translate(pos.x,pos.y)
    rotate(angle)
    image(this.image,0,0,this.width,this.height)
    }
    }
    