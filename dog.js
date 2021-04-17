class Dog {
constructor(x,y,width,height,color){
var option = {
isStatic: true
}
this.dog = Bodies.rectangle(x,y,width,height,color, option);
this.width=width
this.height=height
num=Math.round(random(1,3))
this.image=loadImage("dog"+num+".png")
World.add(world,this.dog);

}
display(){
var pos = this.dog.position
var angle= this.dog.angle
translate(pos.x,pos.y)
rotate(angle)
image(this.image,0,0,this.width,this.height)
}
}




