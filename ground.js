class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            friction:20
        }
        this.body=Bodies.rectangle(x,y,width,height)
    }
}