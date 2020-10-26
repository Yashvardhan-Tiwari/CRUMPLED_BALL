class dustbin {

	constructor(x,y,width,height) {
		
		
			this.x = x;

			this.y = y;
			
			this.width = width;

			this.height = height;
		
			
		
	}

	display() {

			push()
			translate();
			rectMode(CENTER)
			strokeWeight(10);
			fill(10);
			stroke(10)
			rect(this.x,this.y,this.width,this.height);
			pop()

			

	}
	
}