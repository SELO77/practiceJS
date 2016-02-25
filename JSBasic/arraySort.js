function arraySort() {
	console.log("arraySort function");
	var array = [];
	
	for( i = 0; i < 10 ; i++) {
		array.push(makeRandomNum());
	}
	return array;
}

function makeRandomNum() {
	var randomNum =  (Math.random() * 100);
	return Math.round(randomNum);
}

clickToShow = function() {
	var button = document.getElementById('button');
	console.log(button);
	button.onclick = function() {
		console.log('button CLick');
		console.log(arraySort());
		var newArray = arraySort().sort(function( left, right) {
			return right - left;
		});
		console.log(newArray);
	};
}

window.onload = clickToShow;

