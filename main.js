window.onload = function () {
//var greeting;
//var element = document.getElementById("intro");

var button = document.querySelector("button");
button.addEventListener("click", addText);

//element.insertAdjacentHTML ("afterbegin", "<h1>" + greeting + "<h1>")

function addText(){
	var textField = document.getElementById("textfield");
	var msg = "<h1> This text was added! <h1>";
	textField.innerHTML =msg;

}


var greeting;
var element = document.getElementById("intro");

var button = document.querySelector("button");
button.addEventListener("Hover", addText);

//element.insertAdjacentHTML ("afterbegin", "<h1>" + greeting + "<h1>")

function addText (){
	var textField = document.getElementById("textfield");
	var msg = "<h1> I also like to watch Tiktok and read! <h1>";
	textField.innerHTML =msg;

}


/**

var dayofWeek = prompt("What is today?");


if (dayofWeek == "Monday"){
	alert("Go to Design");
}

else if (dayofWeek == "Tuesday"){
	alert("Go to Lakeshore");
}

function addTwoNumbers ( x, y) {
	if x = 0 {
		return ("Try Again");
	} else {
	return x+y;
	}
}

var answer = addTwoNumbers (2,4);
console.log (answer);

else{
	alert("Go Home!")
}

var giftcard = 100
while(giftcard >= 0) {
	console.log ("You have a balance of: $" + giftcard );
	giftcard = giftcard - 10;
	if (giftcard == 50) {
		console.log ("You have 50 dollars left. You should consider saving!");
	}
}

console.log ("You are out of money!");

for (var giftcard = 100; giftcard >=0; giftcard--) {
	console.log (giftcard);
	if (giftcard == 50){
		console.log ("You now have enough money to buy a bike");
	}
}

var modelX = {
	make; "Tesla",
	model: "Model X",
	cost: 100000,
	preowned: true,
	miles, 50000,
	finalCost: function(discount){
		this.cost = thia.cost - (this.cost * (disount/100));
		return this.cost
	}

};


var updatedMiles = modelX.miles + 1000;

console.log (modelS.make);
console.log (modelS.model);




var


/*
var student = "Ariel Kessler"; 
var age = 15;
var isEnrolled = true;
var testscore = 96
var testscore2 = 94
var averagescore = (testscore + testscore2)/2;
console.log("Student: " + student );



var roster = ["Bowen", "Ariel", "Noah K.", "Diego", "Noah G." "Jordan", "Varun", "Addie"];
student = roster [0];
console.log ("Student " + student);

roster.push("Varun");
console.log(roster);


var today = new Date ();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
	greeting = 'Good Evening!';
} else if (hourNow > 12 ){
	greeting = 'Good Afternoon!';
} else if (hourNow > 0 ) {
	greeting = 'Welcome!'
}

var Shoes = {
	type, "Sneakers",
	Size, "8.5",
	Cost, 500,
	Location, "Stadium Goods Store",
	Color, "Pink",
	Preowned "false", 
	finalCost: function(discount){
		this.cost +this.cost - (this.cost * (Discount/100))
		"returnThis.cost"
	}
}


document.write ('<h1>' + greeting + '<h1>' )
*/
}