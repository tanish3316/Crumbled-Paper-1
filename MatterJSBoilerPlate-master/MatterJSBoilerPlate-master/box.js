class Box{
    constructor(x , y , width , height)
    {
        var options = {restitution:0.5,density:0.5,friction:0.5}
        this.body = Matter.Bodies.rectangle(x , y , width , height , options)
        this.width = width
        this.height = height
        Matter.World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}