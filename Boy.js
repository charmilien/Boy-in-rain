class Boy{
    constructor()
    {
        this.body=Bodies.circle(310,185,100,{isStatic: true});
        World.add(world,this.body) 
    }

    display()
    {
        ellipseMode(RADIUS)
        fill("blue")
      //  ellipse(this.body.position.x,this.body.position.y,100,90)
       
    }

}