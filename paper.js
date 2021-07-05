class paper
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.paperWidth=50;
		this.paperHeight=50;
		
		
		this.image=loadImage("paper.png")
		this.bottomBody=Bodies.circle(this.x, this.y, this.paperWidth, {isStatic:true})
		this.leftWallBody=Bodies.circle(this.x-this.paperWidth/2, this.y-this.paperHeight/2, this.paperHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.circle(this.x+this.paperWidth/2, this.y-this.paperHeight/2,  this.paperHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;
             
            this.body.position.x = mouseX;
            this.body.position.y = mouseY;
    }
}