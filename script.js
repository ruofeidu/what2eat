var restraunts = 
["Little Taipei", "Frying Fish", "Ori Cafe", "Macau Doulao Hotpot", "Dough Zone", "Kizuki Ramen", 
 "Szechuan Chef", "Tapioca Express", "Seoul Hot Pot", "Din Tai Fung", "La Bu La", "Hokkaido Ramen", 
 "Dong Lai", "Twilight 7", "Facing East Taiwanese", "Haiku Sushi & Seafood Buffet", "Boiling Point", "Ishoni Yakiniku",
 "Looking for Chai", "Looking for Chai"];

 var addresses = 
["2245 140th Ave NE, Bellevue", "1915 140th Ave NE, Bellevue", "14339 NE 20th St I, Bellevue", "14808 NE 24th St, Redmond", 
"15920 NE 8th St #3, Bellevue", "14845 Main St, Bellevue", 
 "15015 Main St, Bellevue", "15230 NE 24th St, Redmond", "2560 152nd Ave NE # N, Redmond", "700 Bellevue Way NE #280, Bellevue", 
 "288 106th Ave NE #200, Bellevue", "103 Bellevue Way NE, Bellevue", 
 "1075 Bellevue Way NE B2, Bellevue", "2217 140th Ave NE, Bellevue", "1075 Bellevue Way NE B2, Bellevue", 
 "7548 164th Ave NE, Redmond", "16118 NE 87th St, Redmond", "10630 NE 8th St, Bellevue",
 "12121 Northup Way Ste 205, Bellevue, WA 98005",
 "12121 Northup Way Ste 205, Bellevue, WA 98005",
 ];

 
var running = false;
var runTimes = 0; 

var run = function(){
	if (running){
		var e = document.getElementById("Event");
		var number = Math.floor(Math.random()* restraunts.length);
		e.innerHTML = restraunts[number];
		
		add = document.getElementById("Addr");
		add.innerHTML = addresses[number];
		
		runTimes++;
		if (runTimes > 30) running = false; 
	}
	setTimeout(function(){ run(); }, 30);
}

var shuffle = function(){
	running = true;
	runTimes = 0; 
}

setTimeout(function(){ run(); }, 30);