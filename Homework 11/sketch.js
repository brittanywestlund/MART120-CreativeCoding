// JavaScript Document
// Letter keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// ladybug shapes starting coordinates
var lbcax = 480
var lbcay = 450
var lbcbx = 500
var lbcby = 450
var lbarcx = 500
var lbarcy = 450
var lbccx = 490
var lbccy = 460
var lbcdx = 500
var lbcdy = 435
var lbcex = 500
var lbcey = 465
var lbcfx = 490
var lbcfy = 440
var lbcgx = 475
var lbcgy = 445
var lbchx = 475
var lbchy = 455

function setup()
{
    createCanvas(600, 600);
}

function draw()
{
    background(200,250,240);
	
	lilyPads();
	
	frogObstacle();
	
	froggie();
	
	ladyBug(lbcax, lbcay, lbcbx, lbcby, lbarcx, lbarcy, lbccx, lbccy, lbcdx, lbcdy, lbcex, lbcey, lbcfx, lbcfy, lbcgx, lbcgy, lbchx, lbchy);
	
}

// ------------------------------------------------------ PLAYING FIELD
function lilyPads()
	{
// --------------------------------------------- Lilypads
	stroke(0);
	strokeWeight(0);
	// Left Top
	fill(80,120,100);
	arc(150,150,100,100,0,PI + PI/1.1,PIE); 
	fill(200,250,240);
	circle(125,190-40,18);
	// Left Middle
	fill(80,120,100);
	arc(150,300,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(125,340,18);
	// Left Bottom
	fill(80,120,100);
	arc(150,450,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(125,490-40,18);
	// Middle Top
	fill(80,120,100);
	arc(300,150,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(275,190,18);
	// Center	
	fill(80,120,100);
	arc(300,300,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(275,340-40,18);
	// Middle Bottom	
	fill(80,120,100);
	arc(300,450,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(275,490,18);
	// Right Top	
	fill(80,120,100);
	arc(450,150,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(425,190-40,18);
	// Right Middle	
	fill(80,120,100);
	arc(450,300,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(425,340,18);
	// Right Bottom	
	fill(80,120,100);
	arc(450,450,100,100,0,PI + PI/1.1,PIE);
	fill(200,250,240);
	circle(425,490-40,18);
		
	}
			
// ------------------------------------------------------ ENEMY

function ladyBug(lbcax, lbcay, lbcbx, lbcby, lbarcx, lbarcy, lbccx, lbccy, lbcdx, lbcdy, lbcex, lbcey, lbcfx, lbcfy, lbcgx, lbcgy, lbchx, lbchy)
	{
	fill(0);
	circle(lbcax,lbcay,20);
	circle(lbcbx,lbcby,40);
	fill(230,100,130);
	arc(lbarcx,lbarcy,45,45,1,PI + PI/1.3,PIE); 
	fill(0);
	circle(lbccx,lbccy,5);
	circle(lbcdx,lbcdy,5);
	circle(lbcex,lbcey,5);
	circle(lbcfx,lbcfy,5);
	fill(255);
	circle(lbcgx,lbcgy,3);
	circle(lbchx,lbchy,3);
	
	lbcax = lbcax -= 1;
	lbcbx = lbcbx -= 1;
	lbarcx = lbarcx -= 1;
	lbccx = lbccx -= 1;
	lbcdx = lbcdx -= 1;
	lbcex = lbcex -= 1;
	lbcfx = lbcfx -= 1;
	lbcgx = lbcgx -= 1;
	lbchx = lbchx -= 1;
		
	for (var i = 0; i < 1; i++)
		{
			if (lbcax <= 1);
				{
					lbcax = lbcax += 600;
					lbcbx = lbcbx += 600;
					lbarcx = lbarcx += 600;
					lbccx = lbccx += 600;
					lbcdx = lbcdx += 600;
					lbcex = lbcex += 600;
					lbcfx = lbcfx += 600;
					lbcgx = lbcgx += 600;
					lbchx = lbchx += 600;
				}
		}
	}

// ------------------------------------------------------ ON CLICK OBSTACLE

function frogObstacle()
	{
// ------------------------------------------------------ Obstacle
	
// --------------------------------------------- Feet
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(115,175,140);
	circle(62,120,27);
	// ------------------ Right
	circle(138,120,27);
	
// --------------------------------------------- Toes
// ------------------------------- L foot	
	// ------------------ Left
	fill(230,100,130);
	circle(53,133,6.2);
	// ------------------ Middle
	circle(60,133,6.2);
	// ------------------ Right
	circle(67,133,6.2);
	
	// ------------------ Toes 
	fill(230,100,130);
	circle(133,133,6.2);
	// ------------------ Middle 
	circle(140,133,6.2);
	// ------------------ Right
	circle(147,133,6.2);

// ---------------------------------------------Body
	fill(123,189,153);
	ellipse(100,100,75,85);
	
// ---------------------------------------------Chest
	stroke(115,210,250);
	strokeWeight(7);
	fill(255,255,255);
	ellipse(100,115,55,40);
	
// ---------------------------------------------Eyes
	// ------------------ Left
	stroke(123,189,153);
	strokeWeight(4);
	fill(230,100,130);
	circle(75,70,30);
	// Eye Right
	circle(125,70,30);
	// Pupil Left
	stroke(0);
	strokeWeight(0);
	fill(80,100,100);
	ellipse(73.5,70,8,15);
	// Pupil Right
	ellipse(126.5,70,8,15);
		
//---------------------------------------------- Nose
	// ------------------ Left
	ellipse(98.5,78,1.5,5);
	// ------------------ Right
	ellipse(101.5,78,1.5,5);
	
// --------------------------------------------- Mouth
	moveTo(100,80);
	arc(100,82,21,9,0,PI,CHORD); 
		
// --------------------------------------------- Cheeks
	// ------------------ Left
	fill(230,203,203);
	circle(73,90,11);
	// ------------------ Right
	circle(127,90,11);
// --------------------------------------------- Tongue
	fill(244,165,177);
	moveTo(100,80);
	arc(100,84,12,8,0,PI,CHORD); 
// --------------------------------------------- Hands
// ------------------------------- R hand
	stroke(0);
	strokeWeight(0);
	fill(123,189,153);
	circle(85,130,20);
// ------------------------------- L hand
	circle(115,130,20);
	
// ---------------------------------------------Fingers	
// ------------------------------- R hand
	// ------------------ Left
	fill(246,108,140);
	circle(107,140,7.2);
	// ------------------ Middle
	circle(115,140,7.2);
	// ------------------ Right
	circle(123,140,7.2);
	
// ------------------------------- L hand
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(246,108,140);
	circle(77,140,7.2);
	// ------------------ Middle
	circle(85,140,7.2);
	// ------------------ Right
	circle(93,140,7.2);	
	
	
	
	
	
	
	
   
 /*  // Hand Left
	stroke(0);
	strokeWeight(0);
	fill(230,100,130);
	circle(83,130,20);
	
	// Hand Right
	stroke(0);
	strokeWeight(0);
	fill(230,100,130);
	circle(117,130,20); */

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    /* Flower Character
	fill(248, 131, 121);
	circle(32,50,18);
	circle(68,50,18);
	circle(59,34,18);
	circle(41,34,18);
	circle(59,66,18);
	circle(41,66,18);
	fill(250, 200, 142);
	circle(50,50,30);
	fill(255, 245, 250);
	circle(50,50,18);
   
    // body
	strokeWeight(0);
    fill(137, 139, 171);
    triangle(30, 80, 40, 95, 50, 80)
   
	// Enemy
    stroke(10, 24, 120);
	strokeWeight(20);
    point(300,270);
   
	//Exit
    strokeWeight(0);
    textSize(20);
    text("Exit",555,590);
	
    //Signature
    strokeWeight(0);
    textSize(30);
    text("Blossom job!",220,300);
	
	ellipse(100,87,30,7);

 */ }

// ------------------------------------------------------ PLAYER

function froggie()
	{
// ------------------------------------------------------ CHARACTER

// ---------------------------------------------Feet
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(115,175,140);
	circle(62,120,27);
	// ------------------ Right
	circle(138,120,27);
	
// --------------------------------------------- Toes
// ------------------------------- L foot	
	// ------------------ Left
	fill(230,100,130);
	circle(53,133,6.2);
	// ------------------ Middle
	circle(60,133,6.2);
	// ------------------ Right
	circle(67,133,6.2);
	
	// ------------------ Toes 
	fill(230,100,130);
	circle(133,133,6.2);
	// ------------------ Middle 
	circle(140,133,6.2);
	// ------------------ Right
	circle(147,133,6.2);

// ---------------------------------------------Body
	fill(123,189,153);
	ellipse(100,100,75,85);
	
// ---------------------------------------------Chest
	stroke(115,210,250);
	strokeWeight(7);
	fill(255,255,255);
	ellipse(100,115,55,40);
	
// ---------------------------------------------Eyes
	// ------------------ Left
	stroke(123,189,153);
	strokeWeight(4);
	fill(230,100,130);
	circle(75,70,30);
	// Eye Right
	circle(125,70,30);
	// Pupil Left
	stroke(0);
	strokeWeight(0);
	fill(80,100,100);
	ellipse(73.5,70,8,15);
	// Pupil Right
	ellipse(126.5,70,8,15);
		
//---------------------------------------------- Nose
	// ------------------ Left
	ellipse(98.5,78,1.5,5);
	// ------------------ Right
	ellipse(101.5,78,1.5,5);
	
// --------------------------------------------- Mouth
	moveTo(100,80);
	arc(100,82,21,9,0,PI,CHORD); 
		
// --------------------------------------------- Cheeks
	// ------------------ Left
	fill(230,203,203);
	circle(73,90,11);
	// ------------------ Right
	circle(127,90,11);
// --------------------------------------------- Tongue
	fill(244,165,177);
	moveTo(100,80);
	arc(100,84,12,8,0,PI,CHORD); 
// --------------------------------------------- Hands
// ------------------------------- R hand
	stroke(0);
	strokeWeight(0);
	fill(123,189,153);
	circle(85,130,20);
// ------------------------------- L hand
	circle(115,130,20);
	
// ---------------------------------------------Fingers	
// ------------------------------- R hand
	// ------------------ Left
	fill(246,108,140);
	circle(107,140,7.2);
	// ------------------ Middle
	circle(115,140,7.2);
	// ------------------ Right
	circle(123,140,7.2);
	
// ------------------------------- L hand
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(246,108,140);
	circle(77,140,7.2);
	// ------------------ Middle
	circle(85,140,7.2);
	// ------------------ Right
	circle(93,140,7.2);	
	
	
	
	
	
	
	
   
 /*  // Hand Left
	stroke(0);
	strokeWeight(0);
	fill(230,100,130);
	circle(83,130,20);
	
	// Hand Right
	stroke(0);
	strokeWeight(0);
	fill(230,100,130);
	circle(117,130,20); */

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
    /* Flower Character
	fill(248, 131, 121);
	circle(32,50,18);
	circle(68,50,18);
	circle(59,34,18);
	circle(41,34,18);
	circle(59,66,18);
	circle(41,66,18);
	fill(250, 200, 142);
	circle(50,50,30);
	fill(255, 245, 250);
	circle(50,50,18);
   
    // body
	strokeWeight(0);
    fill(137, 139, 171);
    triangle(30, 80, 40, 95, 50, 80)
   
	// Enemy
    stroke(10, 24, 120);
	strokeWeight(20);
    point(300,270);
   
	//Exit
    strokeWeight(0);
    textSize(20);
    text("Exit",555,590);
	
    //Signature
    strokeWeight(0);
    textSize(30);
    text("Blossom job!",220,300);
	
	ellipse(100,87,30,7);

 */ }

