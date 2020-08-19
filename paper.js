class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Matter.Bodies.circle(x,y,radius);
    }
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    }
}