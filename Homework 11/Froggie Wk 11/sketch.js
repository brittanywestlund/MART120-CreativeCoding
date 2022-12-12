// JavaScript Document

// ladyBug - random sized eyes, random color shell, and random speed arrays. Normal body size.
var mySpeeds = [];
var myDiameter = [];
var myRcolor = [];
var myGcolor = [];
var myBcolor = [];
var mY = [];
var aXe = [];

// letter keycodes
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

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

// variables to storing if the mouse clicked and their x, y
var obstax = 0;
var obstay = 0;

function setup()
	{
    createCanvas(600, 600);
	
	// fill arrays for the ladybugs
	for (var i = 0; i < 9; i++)
		{
			mySpeeds[i] = getRandomNumber(5)
			
			myDiameter[i] = getRandomNumber(6)
			
			myRcolor[i] = getRandomNumber(255)
			
			myGcolor[i] = getRandomNumber(255)
			
			myBcolor[i] = getRandomNumber(255)
		}
	
	//starting array values to maintain multi-shape images
		//ladyBug1
		mY[0] = 450;
		aXe[0] = 480;
		mY[1] = 450;
		aXe[1] = 500;
		mY[2] = 450;
		aXe[2] = 500;
		mY[3] = 460;
		aXe[3] = 490;
		mY[4] = 435;
		aXe[4] = 500;
		mY[5] = 465;
		aXe[5] = 500;
		mY[6] = 440;
		aXe[6] = 490;
		mY[7] = 445;
		aXe[7] = 475;
		mY[8] = 455;
		aXe[8] = 475;
		
		//ladyBug2
		mY[9] = 375;//450;
		aXe[9] = 480;
		mY[10] = 375;//450;
		aXe[10] = 500;
		mY[11] = 375;//450;
		aXe[11] = 500;
		mY[12] = 385;//460;
		aXe[12] = 490;
		mY[13] = 360;//435;
		aXe[13] = 500;
		mY[14] = 390;//465;
		aXe[14] = 500;
		mY[15] = 365;//440;
		aXe[15] = 490;
		mY[16] = 370;//445;
		aXe[16] = 475;
		mY[17] = 380;//455;
		aXe[17] = 475;
		
		//ladyBug3
		mY[18] = 300;//450;
		aXe[18] = 480;
		mY[19] = 300;//450;
		aXe[19] = 500;
		mY[20] = 300;//450;
		aXe[20] = 500;
		mY[21] = 310;//460;
		aXe[21] = 490;
		mY[22] = 285;//435;
		aXe[22] = 500;
		mY[23] = 315;//465;
		aXe[23] = 500;
		mY[24] = 290;//440;
		aXe[24] = 490;
		mY[25] = 295;//445;
		aXe[25] = 475;
		mY[26] = 305;//455;
		aXe[26] = 475;
		
		//ladyBug4
		mY[27] = 225;
		aXe[27] = 480;
		mY[28] = 225;
		aXe[28] = 500;
		mY[29] = 225;
		aXe[29] = 500;
		mY[30] = 235;
		aXe[30] = 490;
		mY[31] = 210;
		aXe[31] = 500;
		mY[32] = 240;
		aXe[32] = 500;
		mY[33] = 215;
		aXe[33] = 490;
		mY[34] = 220;
		aXe[34] = 475;
		mY[35] = 230;
		aXe[35] = 475;
		
		//ladyBug5
		mY[36] = 150;
		aXe[36] = 480;
		mY[37] = 150;
		aXe[37] = 500;
		mY[38] = 450 - 300;
		aXe[38] = 500;
		mY[39] = 460 - 300;
		aXe[39] = 490;
		mY[40] = 435 - 300;
		aXe[40] = 500;
		mY[41] = 465 - 300;
		aXe[41] = 500;
		mY[42] = 440 - 300;
		aXe[42] = 490;
		mY[43] = 445 - 300;
		aXe[43] = 475;
		mY[44] = 455 - 300;
		aXe[44] = 475;
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
	
	// draws 5 wonky-eyed ladybugs of random speed, color, and individual eye size on the 5 enemy tracks.
	ladyBug1(myRcolor[0], myGcolor[0], myBcolor[0], myRcolor[1], myGcolor[1], myBcolor[1], myDiameter[0], myDiameter[1]);
	
	ladyBug2(myRcolor[2], myGcolor[2], myBcolor[2], myRcolor[3], myGcolor[3], myBcolor[3], myDiameter[2], myDiameter[3]);
	
	ladyBug3(myRcolor[4], myGcolor[4], myBcolor[4], myRcolor[5], myGcolor[5], myBcolor[5], myDiameter[4], myDiameter[5]);
	
	ladyBug4(myRcolor[6], myGcolor[6], myBcolor[6], myRcolor[7], myGcolor[7], myBcolor[7], myDiameter[6], myDiameter[7]);
	
	ladyBug5(myRcolor[8], myGcolor[8], myBcolor[8], myRcolor[9], myGcolor[9], myBcolor[9], myDiameter[8], myDiameter[9]);
		
	// froggie movement
	frogMove();
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
		{
			// flower
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

function getRandomNumber(number)
{
			return Math.floor(Math.random()*number)+1;
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

function ladyBug1(shellColorR, shellColorG, shellColorB, eyeColorR, eyeColorG, eyeColorB, eyeSizeR, eyeSizeL)
{	
		//ladybug movement
		for(var i = 0; i <= 8; i++)
			{
				aXe[i] -= mySpeeds[0];
			}
		
		//ladybug restart on other side
		if(aXe[0] <= boundaryminx)
			{
				for(var i = 0; i <= 8; i++)
					{
						aXe[i] += boundarymaxx;
					}
			}
		//ladybug draw
		fill(0);
		circle(aXe[0],mY[0],20);
		circle(aXe[1],mY[1],40);
		fill(shellColorR, shellColorG, shellColorB);
		arc(aXe[2],mY[2],45,45,1,PI + PI/1.3,PIE); 
		fill(0);
		circle(aXe[3],mY[3],5);
		circle(aXe[4],mY[4],5);
		circle(aXe[5],mY[5],5);
		circle(aXe[6],mY[6],5);
		fill(eyeColorR, eyeColorG, eyeColorB);
		circle(aXe[7],mY[7],1 + eyeSizeR);
		circle(aXe[8],mY[8],1 + eyeSizeL);
	}

function ladyBug2(shellColorR2, shellColorG2, shellColorB2, eyeColorR2, eyeColorG2, eyeColorB2, eyeSizeR2, eyeSizeL2)
{	
		//ladybug movement
		for(var i = 9; i <= 17; i++)
			{
				aXe[i] -= mySpeeds[1];
			}
		
		//ladybug restart on other side
		if(aXe[9] <= boundaryminx)
			{
				for(var i = 9; i <= 17; i++)
					{
						aXe[i] += boundarymaxx;
					}
			}
		//ladybug draw
		fill(0);
		circle(aXe[9],mY[9],20);
		circle(aXe[10],mY[10],40);
		fill(shellColorR2, shellColorG2, shellColorB2);
		arc(aXe[11],mY[11],45,45,1,PI + PI/1.3,PIE); 
		fill(0);
		circle(aXe[12],mY[12],5);
		circle(aXe[13],mY[13],5);
		circle(aXe[14],mY[14],5);
		circle(aXe[15],mY[15],5);
		fill(eyeColorR2, eyeColorG2, eyeColorB2);
		circle(aXe[16],mY[16],1 + eyeSizeR2);
		circle(aXe[17],mY[17],1 + eyeSizeL2);
	}

function ladyBug3(shellColorR3, shellColorG3, shellColorB3, eyeColorR3, eyeColorG3, eyeColorB3, eyeSizeR3, eyeSizeL3)
{	
		//ladybug movement
		for(var i = 18; i <= 26; i++)
			{
				aXe[i] -= mySpeeds[2];
			}
		
		//ladybug restart on other side
		if(aXe[18] <= boundaryminx)
			{
				for(var i = 18; i <= 26; i++)
					{
						aXe[i] += boundarymaxx;
					}
			}
		//ladybug draw
		fill(0);
		circle(aXe[18],mY[18],20);
		circle(aXe[19],mY[19],40);
		fill(shellColorR3, shellColorG3, shellColorB3);
		arc(aXe[20],mY[20],45,45,1,PI + PI/1.3,PIE); 
		fill(0);
		circle(aXe[21],mY[21],5);
		circle(aXe[22],mY[22],5);
		circle(aXe[23],mY[23],5);
		circle(aXe[24],mY[24],5);
		fill(eyeColorR3, eyeColorG3, eyeColorB3);
		circle(aXe[25],mY[25],1 + eyeSizeR3);
		circle(aXe[26],mY[26],1 + eyeSizeL3);
	}

function ladyBug4(shellColorR4, shellColorG4, shellColorB4, eyeColorR4, eyeColorG4, eyeColorB4, eyeSizeR4, eyeSizeL4)
{	
		//ladybug movement
		for(var i = 27; i <= 35; i++)
			{
				aXe[i] -= mySpeeds[3];
			}
		
		//ladybug restart on other side
		if(aXe[27] <= boundaryminx)
			{
				for(var i = 27; i <= 35; i++)
					{
						aXe[i] += boundarymaxx;
					}
			}
		//ladybug draw
		fill(0);
		circle(aXe[27],mY[27],20);
		circle(aXe[28],mY[28],40);
		fill(shellColorR4, shellColorG4, shellColorB4);
		arc(aXe[29],mY[29],45,45,1,PI + PI/1.3,PIE); 
		fill(0);
		circle(aXe[30],mY[30],5);
		circle(aXe[31],mY[31],5);
		circle(aXe[32],mY[32],5);
		circle(aXe[33],mY[33],5);
		fill(eyeColorR4, eyeColorG4, eyeColorB4);
		circle(aXe[34],mY[34],1 + eyeSizeR4);
		circle(aXe[35],mY[35],1 + eyeSizeL4);
	}

function ladyBug5(shellColorR5, shellColorG5, shellColorB5, eyeColorR5, eyeColorG5, eyeColorB5, eyeSizeR5, eyeSizeL5)
{	
		//ladybug movement
		for(var i = 36; i <= 44; i++)
			{
				aXe[i] -= mySpeeds[4];
			}
		
		//ladybug restart on other side
		if(aXe[36] <= boundaryminx)
			{
				for(var i = 36; i <= 44; i++)
					{
						aXe[i] += boundarymaxx;
					}
			}
		//ladybug draw
		fill(0);
		circle(aXe[36],mY[36],20);
		circle(aXe[37],mY[37],40);
		fill(shellColorR5, shellColorG5, shellColorB5);
		arc(aXe[38],mY[38],45,45,1,PI + PI/1.3,PIE); 
		fill(0);
		circle(aXe[39],mY[39],5);
		circle(aXe[40],mY[40],5);
		circle(aXe[41],mY[41],5);
		circle(aXe[42],mY[42],5);
		fill(eyeColorR5, eyeColorG5, eyeColorB5);
		circle(aXe[43],mY[43],1 + eyeSizeR5);
		circle(aXe[44],mY[44],1 + eyeSizeL5);
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