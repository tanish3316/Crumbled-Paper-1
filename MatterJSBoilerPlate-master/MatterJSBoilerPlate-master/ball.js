class Ball{
    constructor(x , y , radius)
    {
        var options = {restitution:0.5,density:0.5,friction:0.5}
        this.body = Matter.Bodies.circle(x , y , radius , options)
        this.radius = radius
        Matter.World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }
}