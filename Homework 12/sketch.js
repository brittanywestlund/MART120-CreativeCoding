// JavaScript Document

// letter keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// ladyBug starting speeds
var lbspeed = -1
var lbiispeed = -1
var lbiiispeed = -1

// ladyBug1 shapes starting points
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

// ladyBug2 shapes starting points
var lbiicax = 480
var lbiicay = 300//450
var lbiicbx = 500
var lbiicby = 300//450
var lbiiarcx = 500
var lbiiarcy = 300//450
var lbiiccx = 490
var lbiiccy = 310//460
var lbiicdx = 500
var lbiicdy = 285//435
var lbiicex = 500
var lbiicey = 315//465
var lbiicfx = 490
var lbiicfy = 290//440
var lbiicgx = 475
var lbiicgy = 295//445
var lbiichx = 475
var lbiichy = 305//455

// ladyBug3 shapes starting points
var lbiiicax = 480
var lbiiicay = 150//450
var lbiiicbx = 500
var lbiiicby = 150//450
var lbiiiarcx = 500
var lbiiiarcy = 150//450
var lbiiiccx = 490
var lbiiiccy = 160//460
var lbiiicdx = 500
var lbiiicdy = 135//435
var lbiiicex = 500
var lbiiicey = 165//465
var lbiiicfx = 490
var lbiiicfy = 140//440
var lbiiicgx = 475
var lbiiicgy = 145//445
var lbiiichx = 475
var lbiiichy = 155//455

// level boundaries
var boundaryminy = 20
var boundarymaxy = 580
var boundaryminx = 20
var boundarymaxx = 580

// froggie shapes starting points
var c1x = 62 + 50
var c1y = 120 + 35
var c2x = 138 + 50
var c2y = 120 + 35
var c3x = 53 + 50
var c3y = 133 + 35
var c4x = 60 + 50
var c4y = 133 + 35
var c5x = 67 + 50
var c5y = 133 + 35
var c6x = 133 + 50
var c6y = 133 + 35
var c7x = 140 + 50
var c7y = 133 + 35
var c8x = 147 + 50
var c8y = 133 + 35
var e1x = 100 + 50
var e1y = 100 + 35
var e2x = 100 + 50
var e2y = 115 + 35
var c9x = 75 + 50
var c9y = 70 + 35
var c10x = 125 + 50
var c10y = 70 + 35
var e3x = 73.5 + 50
var e3y = 70 + 35
var e4x = 126.5 + 50
var e4y = 70 + 35
var e5x = 98.5 + 50
var e5y = 78 + 35
var e6x = 101.5 + 50
var e6y = 78 + 35
var a1x = 100 + 50
var a1y = 82 + 35
var c12x = 73 + 50
var c12y = 90 + 35
var c13x = 127 + 50
var c13y = 90 + 35
var a2x = 100 + 50
var a2y = 84 + 35
var c14x = 85 + 50
var c14y = 130 + 35
var c15x = 115 + 50
var c15y = 130 + 35
var c16x = 107 + 50
var c16y = 140 + 35
var c17x = 115 + 50
var c17y = 140 + 35
var c18x = 123 + 50
var c18y = 140 + 35
var c19x = 77 + 50
var c19y = 140 + 35
var c20x = 85 + 50
var c20y = 140 + 35
var c21x = 93 + 50
var c21y = 140 + 35

var lbcolorr
var lbcolorg
var lbcolorb

var lbsize

var lbiicolorr
var lbiicolorg
var lbiicolorb

var lbiisize

var lbiiicolorr
var lbiiicolorg
var lbiiicolorb

var lbiiisize

var obstax = 0;
var obstay = 0;

function setup()
{
    createCanvas(600, 600);
	
	//ladybug randomizers (speed, color, size)
	lbspeed = lbspeed *= floor(random() * 5) + 1;
	lbiispeed = lbiispeed *= floor(random() * 5) + 1;
	lbiiispeed = lbiiispeed *= floor(random() * 5) + 1;
	
	lbcolorr = floor(random() * 255);
	lbcolorg = floor(random() * 255);
	lbcolorb = floor(random() * 255);
	
	lbiicolorr = floor(random() * 255);
	lbiicolorg = floor(random() * 255);
	lbiicolorb = floor(random() * 255);
	
	lbiiicolorr = floor(random() * 255);
	lbiiicolorg = floor(random() * 255);
	lbiiicolorb = floor(random() * 255);
	
	lbsize = floor(random() * 50) + 1;
	lbiisize = floor(random() * 50) + 1;
	lbiiisize = floor(random() * 50) + 1;
}

function draw()
{
    background(200,250,240);
	
	// win condition check/load
	winCheck();
	
	// exit sign
	exitSign();
	
	// lilypad platforms 3x3
	lilyPads();
	
	// froggie player character
	froggie(c1x, c1y, c2x, c2y, c3x, c3y, c4x, c4y, c5x, c5y, c6x, c6y, c7x, c7y, c8x, c8y, e1x, e1y, e2x, e2y, c9x, c9y, c10x, c10y, e3x, e3y, e4x, e4y, e5x, e5y, e6x, e6y, a1x, a1y, c12x, c12y, c13x, c13y, a2x, a2y, c14x, c14y, c15x, c15y, c16x, c16y, c17x, c17y, c18x, c18y, c19x, c19y, c20x, c20y, c21x, c21y);
	
	// check for click; draw obstacle
	obstacleClick();
	
	// draw three ladybug enemies with randomly changing size/color/speed
	ladyBug1(lbcax, lbcay, lbcbx, lbcby, lbcolorr, lbcolorg, lbcolorb, lbarcx, lbarcy, lbccx, lbccy, lbcdx, lbcdy, lbcex, lbcey, lbcfx, lbcfy, lbcgx, lbcgy, lbchx, lbchy, lbsize);
	
	ladyBug2(lbiicax, lbiicay, lbiicbx, lbiicby, lbiicolorr, lbiicolorg, lbiicolorb, lbiiarcx, lbiiarcy, lbiiccx, lbiiccy, lbiicdx, lbiicdy, lbiicex, lbiicey, lbiicfx, lbiicfy, lbiicgx, lbiicgy, lbiichx, lbiichy, lbiisize);
	
	ladyBug3(lbiiicax, lbiiicay, lbiiicbx, lbiiicby, lbiiicolorr, lbiiicolorg, lbiiicolorb, lbiiiarcx, lbiiiarcy, lbiiiccx, lbiiiccy, lbiiicdx, lbiiicdy, lbiiicex, lbiiicey, lbiiicfx, lbiiicfy, lbiiicgx, lbiiicgy, lbiiichx, lbiiichy, lbiiisize);
	
	//froggie movement
	frogMove();
	
	//ladyBugs auto move and return	
	bugMove();
}
function obstacleClick()
		{
			if (obstax == 1)
				{
					frogObstacle();
				}
			else if (obstay == 1)
				{
					frogObstacle();
				}
		}

function exitSign()
		{
			strokeWeight(0);
			textSize(20);
			fill(0)
			text("Exit",435,535);
		}

function winCheck()
		{
			if (c1x >= 400 && c1y >= 535)
				{
					winScreen();
				}
		}

function winScreen()
	//flower character
	{
		
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

		//Signature
		strokeWeight(0);
		textSize(30);
		text("Blossom job!",215,65);

		noLoop();
	}


function frogMove()
		{
			if(keyIsDown(w) && c10y >= boundaryminy)
				{
				c1y -= 5;
				c2y -= 5;
				c3y -= 5; 
				c4y -= 5;
				c5y -= 5;
				c6y -= 5;
				c7y -= 5;
				c8y -= 5;
				e1y -= 5;
				e2y -= 5;
				c9y -= 5;
				c10y -= 5; 
				e3y -= 5;
				e4y -= 5;
				e5y -= 5;
				e6y -= 5;
				a1y -= 5;
				c12y -= 5;
				c13y -= 5;
				a2y -= 5;
				c14y -= 5;
				c15y -= 5;
				c16y -= 5;
				c17y -= 5;
				c18y -= 5;
				c19y -= 5;
				c20y -= 5;
				c21y -= 5;
			}
			else if(keyIsDown(s) && c10y <= boundarymaxy)
				{
				c1y += 5;
				c2y += 5;
				c3y += 5; 
				c4y += 5;
				c5y += 5;
				c6y += 5;
				c7y += 5;
				c8y += 5;
				e1y += 5;
				e2y += 5;
				c9y += 5;
				c10y += 5; 
				e3y += 5;
				e4y += 5;
				e5y += 5;
				e6y += 5;
				a1y += 5;
				c12y += 5;
				c13y += 5;
				a2y += 5;
				c14y += 5;
				c15y += 5;
				c16y += 5;
				c17y += 5;
				c18y += 5;
				c19y += 5;
				c20y += 5;
				c21y += 5;

			}
			else if(keyIsDown(a) && c9x >= boundaryminx)
				{
				c1x -= 5;
				c2x -= 5;
				c3x -= 5;
				c4x -= 5;
				c5x -= 5;
				c6x -= 5;
				c7x -= 5;
				c8x -= 5;
				e1x -= 5;
				e2x -= 5;
				c9x -= 5;
				c10x -= 5; 
				e3x -= 5;
				e4x -= 5;
				e5x -= 5;
				e6x -= 5;
				a1x -= 5;
				c12x -= 5;
				c13x -= 5;
				a2x -= 5;
				c14x -= 5;
				c15x -= 5;
				c16x -= 5;
				c17x -= 5;
				c18x -= 5;
				c19x -= 5;
				c20x -= 5;
				c21x -= 5;
			}
			else if(keyIsDown(d) && c10x <= boundarymaxx)
				{
				c1x += 5;
				c2x += 5;
				c3x += 5;
				c4x += 5;
				c5x += 5;
				c6x += 5;
				c7x += 5;
				c8x += 5;
				e1x += 5;
				e2x += 5;
				c9x += 5;
				c10x += 5; 
				e3x += 5;
				e4x += 5;
				e5x += 5;
				e6x += 5;
				a1x += 5;
				c12x += 5;
				c13x += 5;
				a2x += 5;
				c14x += 5;
				c15x += 5;
				c16x += 5;
				c17x += 5;
				c18x += 5;
				c19x += 5;
				c20x += 5;
				c21x += 5;
			}	
		}

function mousePressed()
	{
		obstax = 1;
		obstay = 1;
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
			
// ------------------------------------------------------ ENEMIES
function bugMove()
		{
			if (lbcax >= 51)
				{
					lbcax += lbspeed;
					lbcbx += lbspeed;
					lbarcx += lbspeed;
					lbccx += lbspeed;
					lbcdx += lbspeed;
					lbcex += lbspeed;
					lbcfx += lbspeed;
					lbcgx += lbspeed;
					lbchx += lbspeed;
				}
			else if (lbcax <= 50)
				{
					lbcax += 500;
					lbcbx += 500;
					lbarcx += 500;
					lbccx += 500;
					lbcdx += 500;
					lbcex += 500;
					lbcfx += 500;
					lbcgx += 500;
					lbchx += 500;
				}
			if (lbiicax >=51)
				{
					lbiicax += lbiispeed;
					lbiicbx += lbiispeed;
					lbiiarcx += lbiispeed;
					lbiiccx += lbiispeed;
					lbiicdx += lbiispeed;
					lbiicex += lbiispeed;
					lbiicfx += lbiispeed;
					lbiicgx += lbiispeed;
					lbiichx += lbiispeed;
				}
			else if (lbiicax <= 50)
				{
					lbiicax += 500;
					lbiicbx += 500;
					lbiiarcx += 500;
					lbiiccx += 500;
					lbiicdx += 500;
					lbiicex += 500;
					lbiicfx += 500;
					lbiicgx += 500;
					lbiichx += 500;
				}
			if (lbiiicax >=51)
				{
					lbiiicax += lbiiispeed;
					lbiiicbx += lbiiispeed;
					lbiiiarcx += lbiiispeed;
					lbiiiccx += lbiiispeed;
					lbiiicdx += lbiiispeed;
					lbiiicex += lbiiispeed;
					lbiiicfx += lbiiispeed;
					lbiiicgx += lbiiispeed;
					lbiiichx += lbiiispeed;
				}
			else if (lbiiicax <= 50)
				{
					lbiiicax += 500;
					lbiiicbx += 500;
					lbiiiarcx += 500;
					lbiiiccx += 500;
					lbiiicdx += 500;
					lbiiicex += 500;
					lbiiicfx += 500;
					lbiiicgx += 500;
					lbiiichx += 500;
				}
		}

function ladyBug1(lbcax, lbcay, lbcbx, lbcby, lbcolorr, lbcolorg, lbcolorb, lbarcx, lbarcy, lbccx, lbccy, lbcdx, lbcdy, lbcex, lbcey, lbcfx, lbcfy, lbcgx, lbcgy, lbchx, lbchy, lbsize)
	{
	fill(0);
	circle(lbcax,lbcay,20 + lbsize);
	circle(lbcbx,lbcby,40 + lbsize);
	fill(lbcolorr, lbcolorg, lbcolorb); //(230,100,130);
	arc(lbarcx,lbarcy,45 + lbsize,45 + lbsize,1,PI + PI/1.3,PIE); 
	fill(0);
	circle(lbccx,lbccy,5 + lbsize);
	circle(lbcdx,lbcdy,5 + lbsize);
	circle(lbcex,lbcey,5 + lbsize);
	circle(lbcfx,lbcfy,5 + lbsize);
	fill(255);
	circle(lbcgx,lbcgy,3 + lbsize);
	circle(lbchx,lbchy,3 + lbsize);
	}

function ladyBug2(lbiicax, lbiicay, lbiicbx, lbiicby, lbiicolorr, lbiicolorg, lbiicolorb, lbiiarcx, lbiiarcy, lbiiccx, lbiiccy, lbiicdx, lbiicdy, lbiicex, lbiicey, lbiicfx, lbiicfy, lbiicgx, lbiicgy, lbiichx, lbiichy, lbiisize)
	{
	fill(0);
	circle(lbiicax,lbiicay,20 + lbiisize);
	circle(lbiicbx,lbiicby,40 + lbiisize);
	fill(lbiicolorr, lbiicolorg, lbiicolorb);
	arc(lbiiarcx,lbiiarcy,45 + lbiisize,45 + lbiisize,1,PI + PI/1.3,PIE); 
	fill(0);
	circle(lbiiccx,lbiiccy,5 + lbiisize);
	circle(lbiicdx,lbiicdy,5 + lbiisize);
	circle(lbiicex,lbiicey,5 + lbiisize);
	circle(lbiicfx,lbiicfy,5 + lbiisize);
	fill(255);
	circle(lbiicgx,lbiicgy,3 + lbiisize);
	circle(lbiichx,lbiichy,3 + lbiisize);
	}

function ladyBug3(lbiiicax, lbiiicay, lbiiicbx, lbiiicby, lbiiicolorr, lbiiicolorg, lbiiicolorb, lbiiiarcx, lbiiiarcy, lbiiiccx, lbiiiccy, lbiiicdx, lbiiicdy, lbiiicex, lbiiicey, lbiiicfx, lbiiicfy, lbiiicgx, lbiiicgy, lbiiichx, lbiiichy, lbiiisize)
	{
	fill(0);
	circle(lbiiicax,lbiiicay,20 + lbiiisize);
	circle(lbiiicbx,lbiiicby,40 + lbiiisize);
	fill(lbiiicolorr, lbiiicolorg, lbiiicolorb);
	arc(lbiiiarcx,lbiiiarcy,45 + lbiiisize,45 + lbiiisize,1,PI + PI/1.3,PIE); 
	fill(0);
	circle(lbiiiccx,lbiiiccy,5 + lbiiisize);
	circle(lbiiicdx,lbiiicdy,5 + lbiiisize);
	circle(lbiiicex,lbiiicey,5 + lbiiisize);
	circle(lbiiicfx,lbiiicfy,5 + lbiiisize);
	fill(255);
	circle(lbiiicgx,lbiiicgy,3 + lbiiisize);
	circle(lbiiichx,lbiiichy,3 + lbiiisize);
	}

function frogObstacle()
	{
// ------------------------------------------------------ Obstacle
	// starting by adding 200 to the x
	// now adding 150 more
	// now adding 30 to the y
// --------------------------------------------- Feet
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(115,175,140);
	circle(262+150,120+35,27);
	// ------------------ Right
	circle(338+150,120+35,27);
	
// --------------------------------------------- Toes
// ------------------------------- L foot	
	// ------------------ Left
	fill(230,100,130);
	circle(253+150,133+35,6.2);
	// ------------------ Middle
	circle(260+150,133+35,6.2);
	// ------------------ Right
	circle(267+150,133+35,6.2);
	
	// ------------------ Toes 
	fill(230,100,130);
	circle(333+150,133+35,6.2);
	// ------------------ Middle 
	circle(340+150,133+35,6.2);
	// ------------------ Right
	circle(347+150,133+35,6.2);

// ---------------------------------------------Body
	fill(123,189,153);
	ellipse(300+150,100+35,75,85);
	
// ---------------------------------------------Chest
	stroke(255,255,255);
	strokeWeight(7);
	fill(0);
	ellipse(300+150,115+35,55,40);
	
// ---------------------------------------------Eyes
	// ------------------ Left
	stroke(123,189,153);
	strokeWeight(4);
	fill(230,100,130);
	circle(275+150,70+35,30);
	// Eye Right
	circle(325+150,70+35,30);
	// Pupil Left
	stroke(0);
	strokeWeight(0);
	fill(80,100,100);
	ellipse(273.5+150,70+35,8,15);
	// Pupil Right
	ellipse(326.5+150,70+35,8,15);
		
//---------------------------------------------- Nose
	// ------------------ Left
	ellipse(298.5+150,78+35,1.5,5);
	// ------------------ Right
	ellipse(301.5+150,78+35,1.5,5);
	
// --------------------------------------------- Mouth
	moveTo(100,80);
	arc(300+150,82+35,21,9,0,PI,CHORD); 
		
// --------------------------------------------- Cheeks
	// ------------------ Left
	fill(230,203,203);
	circle(273+150,90+35,11);
	// ------------------ Right
	circle(327+150,90+35,11);
// --------------------------------------------- Tongue
	fill(244,165,177);
	moveTo(100,80);
	arc(300+150,84+35,12,8,0,PI,CHORD); 
// --------------------------------------------- Hands
// ------------------------------- R hand
	stroke(0);
	strokeWeight(0);
	fill(123,189,153);
	circle(285+150,130+35,20);
// ------------------------------- L hand
	circle(315+150,130+35,20);
	
// ---------------------------------------------Fingers	
// ------------------------------- R hand
	// ------------------ Left
	fill(246,108,140);
	circle(307+150,140+35,7.2);
	// ------------------ Middle
	circle(315+150,140+35,7.2);
	// ------------------ Right
	circle(323+150,140+35,7.2);
	
// ------------------------------- L hand
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(246,108,140);
	circle(277+150,140+35,7.2);
	// ------------------ Middle
	circle(285+150,140+35,7.2);
	// ------------------ Right
	circle(293+150,140+35,7.2);	
	
	
	
	
	
	
	
   
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
 
function froggie(c1x, c1y, c2x, c2y, c3x, c3y, c4x, c4y, c5x, c5y, c6x, c6y, c7x, c7y, c8x, c8y, e1x, e1y, e2x, e2y, c9x, c9y, c10x, c10y, e3x, e3y, e4x, e4y, e5x, e5y, e6x, e6y, a1x, a1y, c12x, c12y, c13x, c13y, a2x, a2y, c14x, c14y, c15x, c15y, c16x, c16y, c17x, c17y, c18x, c18y, c19x, c19y, c20x, c20y, c21x, c21y)
	{
// ------------------------------------------------------ CHARACTER

 
		
// ---------------------------------------------Feet
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(115,175,140);
	circle(c1x,c1y,27);
	// ------------------ Right
	circle(c2x,c2y,27);
	
// --------------------------------------------- Toes
// ------------------------------- L foot	
	// ------------------ Left
	fill(230,100,130);
	circle(c3x,c3y,6.2);
	// ------------------ Middle
	circle(c4x,c4y,6.2);
	// ------------------ Right
	circle(c5x,c5y,6.2);
	
	// ------------------ Toes 
	fill(230,100,130);
	circle(c6x,c6y,6.2);
	// ------------------ Middle 
	circle(c7x,c7y,6.2);
	// ------------------ Right
	circle(c8x,c8y,6.2);

// ---------------------------------------------Body
	fill(123,189,153);
	ellipse(e1x,e1y,75,85);
	
// ---------------------------------------------Chest
	stroke(115,210,250);
	strokeWeight(7);
	fill(255,255,255);
	ellipse(e2x,e2y,55,40);
	
// ---------------------------------------------Eyes
	// ------------------ Left Red
	stroke(123,189,153);
	strokeWeight(4);
	fill(230,100,130);
	circle(c9x,c9y,30);
	// ------------------ Right Red
	circle(c10x,c10y,30);
	// Pupil Left
	stroke(0);
	strokeWeight(0);
	fill(80,100,100);
	ellipse(e3x,e3y,8,15);
	// Pupil Right
	ellipse(e4x,e4y,8,15);
		
//---------------------------------------------- Nose
	// ------------------ Left
	ellipse(e5x,e5y,1.5,5);
	// ------------------ Right
	ellipse(e6x,e6y,1.5,5);
	
// --------------------------------------------- Mouth
	moveTo(100,80);
	arc(a1x,a1y,21,9,0,PI,CHORD); 
		
// --------------------------------------------- Cheeks
	// ------------------ Left
	fill(230,203,203);
	circle(c12x,c12y,11);
	// ------------------ Right
	circle(c13x,c13y,11);
// --------------------------------------------- Tongue
	fill(244,165,177);
	moveTo(100,80);
	arc(a2x,a2y,12,8,0,PI,CHORD); 
// --------------------------------------------- Hands
// ------------------------------- R hand
	stroke(0);
	strokeWeight(0);
	fill(123,189,153);
	circle(c14x,c14y,20);
// ------------------------------- L hand
	circle(c15x,c15y,20);
	
// ---------------------------------------------Fingers	
// ------------------------------- R hand
	// ------------------ Left
	fill(246,108,140);
	circle(c16x,c16y,7.2);
	// ------------------ Middle
	circle(c17x,c17y,7.2);
	// ------------------ Right
	circle(c18x,c18y,7.2);
	
// ------------------------------- L hand
	// ------------------ Left
	stroke(0);
	strokeWeight(0);
	fill(246,108,140);
	circle(c19x,c19y,7.2);
	// ------------------ Middle
	circle(c20x,c20y,7.2);
	// ------------------ Right
	circle(c21x,c21y,7.2);	
	
   
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