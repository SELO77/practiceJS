console.log("Day19 Date Object");

//즉시실행함수
// (function() {
// 	console.log("() onload function");
// 	console.log("=============");
// 	var date = new Date();
// 	console.log(date);
// 	console.log(date instanceof Date);
// 	//date.setDate(date.getDate + 7);
// 	//console.log(date.getDate());
// 	console.log("=============");
	
// 	console.log(date.getTime());
// 	var Xmas99 = new Date("December 25, 1999");
// 	console.log("Xmas99",Xmas99);
// 	console.log(Xmas99.getMonth(), Xmas99.getFullYear()); 
// 	//Xmas99 Sat Dec 25 1999 00:00:00 GMT+0900 (KST)

// 	console.log("=============");
// 	var today = new Date();
// 	console.log("today : " + today, today.getTime());
// 	var endDate = new Date(2016, 3, 13, 23, 59, 59, 999);
// 	console.log("endDate : " + endDate, endDate.getTime());
// 	endDate.setFullYear(today.getFullYear());
// 	var millisecondePerDay = 24 * 60 * 60 * 1000; // 144 86400000
// 	console.log("millisecondePerDay : " + millisecondePerDay);

// 	var daysLeft = (endDate.getTime() - today.getTime()) / millisecondePerDay;
// 	console.log(daysLeft);
// 	//console.log("daysLeft : " + Math.round(daysLeft)); // 오늘기준 48일
// 	console.log("daysLeft : " + Math.floor(daysLeft));


// })();

// calculation DDay Module
// argument format : "December 25, 1999"
function calDDay(firstDay, lastDay) {
	console.log("==calDDay function start==");
	
	for (index in arguments) {
		console.log("argumet[ %d ] : %d", index, arguments[index]);
	}

	if (arguments.length === 2) {

		console.log("1. arguments.length %d", arguments.length);
		var firstDay = makeFromDateToTime(firstDay);
		var lastDay = makeFromDateToTime(lastDay);

	} else if(arguments.length === 1) {
		console.log("  ");
		console.log("2. arguments.length %d", arguments.length);
		console.log(arguments[0]);
		//var firstDay = Date.getTime();
		//var firstDay =
		var lastDay = makeFromDateToTime(arguments[0]);
		console.log(firstDay);
		console.log(lastDay); //1456369692495

	} else {		

		console.log("arguments.length %d", arguments.length);
		return alert(" Input 1ea, 2ea Argument");

	}

	console.log("firstDay %d lastDay %d", firstDay, lastDay);
	var millisecondPerDay = 24 * 60 * 60 * 1000;

	var dDay = Math.floor((lastDay - firstDay)/millisecondPerDay);

	console.log("==calDDay function end==");
	return console.log("*** dDay : " + dDay + " ***");
}

function makeFromDateToTime(targetDate) {
	console.log("==makeFromDateToTime strart with %d ==", targetDate);
	var timeFormat = new Date(targetDate).getTime();
	console.log("==makeFromDateToTime end==");
	return timeFormat;
}

window.onload = function() {
	console.log("window onload function");
	//calDDay("February 25, 2016", "April 13, 2016"); // 1456326000000 1460473200000
	calDDay("April 13, 2016");
	//calDDay();
}

