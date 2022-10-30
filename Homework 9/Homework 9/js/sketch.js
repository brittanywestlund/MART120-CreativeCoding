// JavaScript Document

function setup()
{
    createCanvas(500, 410);
}

function draw()
{
    background(195, 201, 187);
	 
	// head
	strokeWeight(0);
    fill(255, 231, 199);
    ellipse(271,100,150);
	
	// glasses
	stroke(232, 181, 227);
	strokeWeight(3)
	circle(250, 90, 50)
	circle(311, 90, 37)
	line(226,100,190,100);
	line(327,100,345,100);
	line(276,89,290,89);
   
    // eyes
    strokeWeight(10);
    point(240,90);
	strokeWeight(8);
    point(305,90);

    // nose
	strokeWeight(0)
	fill(212, 193, 180);
    triangle(283,97,283,138,295,138);
    
    // mouth
	strokeWeight(6);
   	point(270,145);

    // hair
	stroke(240, 46, 220);
	strokeWeight(37);
    point(210,30);
	strokeWeight(25);
	point(330,30);
	rect(235, 37, 75, 4);
   
    // body
    fill(10, 24, 120);
	strokeWeight(0);
    fill(137, 139, 171);
    triangle(180,380,270,185,320,380)
   
	// right arm
    stroke(10, 24, 120);
	strokeWeight(20);
    point(300,270);
   
	// left arm
	stroke(10, 24, 120);
	strokeWeight(20);
    point(220,270);
	
	// right foot
    stroke(10, 24, 120);
	strokeWeight(20);
    point(300,390);
   
	// left foot
	stroke(10, 24, 120);
	strokeWeight(20);
    point(220,390);
	
	//Title
    strokeWeight(0);
    textSize(20);
    text("Self Portrait",10,30);
	
    //Signature
    strokeWeight(0);
    textSize(20);
    text("Brittany Westlund",10,400);

}
