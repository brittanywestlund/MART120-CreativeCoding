// JavaScript Document

var fillr = 60
var fillg = 140
var fillb = 215

var rbuny = 30
var rbunmove = 2
var rbunboundup = 20
var rbunbounddwn = 50

var lbuny = 30
var lbunmove = 1
var lbunboundup = 20
var lbunbounddwn = 50

var speeda = 2
var handLx = 240
var handLy = 270
var lhandmovement = speeda * -1
var handboundxla = 200 
var handboundxlb = 280

var speedb = 2
var handRx = 300
var handRy = 270
var rhandmovement = speedb
var handboundxra = 260
var handboundxrb = 340

var bodyxa = 180
var bodyxb = 270
var bodyxc = 320
var bodyxup = 173
var bodyxdwn = 187
var bodymove = .5

var bodyya = 380
var bodyyb = 185
var bodyyc = 380

var titlesize = 20
var titlegrowth = 1

var namex = 5
var namey = 400
var namemovex = 0
var namemovey = -1

var headsize = 125
var headmove = 1

function setup()
{
    createCanvas(500, 410);
	/*
	fillr = floor(random() * 256);
	fillg = floor(random() * 256);
	fillb = floor(random() * 256);
	*/
	speeda = floor(random() * 5) + 1;
	speedb = floor(random() * 5) + 1;
	lhandmovement = speeda * -1
	rhandmovement = speedb
	
	lbunmove = floor(random() * 5) + 1;
	rbunmove = floor(random() * 5) + 1;
	
}

function draw()
{
    background(195, 201, 200);	
	
	// head
	strokeWeight(0);
    fill(255, 231, 199);
	
	for (i = 0; i <= 1; i++)
		{
			headsize = headsize += headmove;
			ellipse(271,100,headsize);
			if (headsize <= 125 || headsize >= 175)
				{
				headmove *= -1;
				}
		}
	
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
    
	if(lbuny >= lbunbounddwn || lbuny <= lbunboundup)
		{
			lbunmove *= -1;
		}
		
	lbuny += lbunmove;
	
	point(210,lbuny);
	
	strokeWeight(25);
	
	if(rbuny >= rbunbounddwn || rbuny <= rbunboundup)
		{
			rbunmove *= -1;
		}
		
	rbuny += rbunmove;
	
	point(330,rbuny);
	
	rect(235, 37, 75, 4);
   
	// right arm
	stroke(10, 24, 120);
	strokeWeight(20);
	point(handRx,handRy);
	
	if(handRx <= handboundxra || handRx >= handboundxrb)
		{
			rhandmovement *= -1;
		}
		
		handRx += rhandmovement;
	
	// right foot
    point(300,390);
	
    // body
    fill(10, 24, 120);
	strokeWeight(0);
    fill(fillr, fillg, fillb);
	triangle(bodyxa,bodyya,bodyxb,bodyyb,bodyxc,bodyyc);
		
			if(bodyxa >= bodyxdwn || bodyxa <= bodyxup)
				{
					bodymove *= -1;
				}

			bodyxa += bodymove;
			bodyxb += bodymove;
			bodyxc += bodymove;
			bodyya += bodymove;
			bodyyb += bodymove;
			bodyyc += bodymove;
   
	// left arm
    stroke(10, 24, 120);
	strokeWeight(20);
    point(handLx,handLy);
   
	if(handLx <= handboundxla || handLx >= handboundxlb)
		{
			lhandmovement *= -1;
		}
		
		handLx += lhandmovement;
   
	// left foot
    point(220,390);
	
	//Title
    if(titlesize >= 25 || titlesize <= 15)
		{
			titlegrowth *= -1;	
		}
	titlesize += titlegrowth;
	strokeWeight(0);
    textSize(titlesize);
    text("Self Portrait",10,30);
	
    //Signature
	for (i = 0; i <= 1; i++)
		{
			strokeWeight(0);
    		textSize(20);
			text("Brittany Westlund",namex,namey);
			namex = namex + namemovex;
			namey = namey + namemovey;
			
			if(namey == 380 && namex == 5)
				{
					namemovey = 0;
					namemovex = 1;
				}
			if(namex == 20 && namey == 380)
				{
					namemovey = 1;
					namemovex = 0;
				}
			if(namey == 405 && namex == 20)
				{
					namemovey = 0;
					namemovex = -1;
				}
			if(namex == 5 && namey == 405)
				{
					namemovey = -1;
					namemovex = 0;
				}
		}
}