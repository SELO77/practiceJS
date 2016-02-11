(function clickTest(){
	var buttonElement = document.getElementsByTagName('input')[0];
	console.log(buttonElement);

	buttonElement.addEventListener('click', function(){
		showView();
		console.log(buttonElement.value);
		buttonElement.value = "Hello";
	});
	//var buttonElement1 = document.getElementsByTagName('input')[showView: input];
	//console.log(buttonElement1);
	// var button2 = document.getElementsByTagName('input:showView');
	// console.log(button2);

	var students = [];
	students.push(makeStudent('Kim', 10, 15, 20, 15));
	students.push(makeStudent('Lee', 50, 70, 50, 70));

	var output = 'name\tsum\tavg\n';
	for (var i in students) {
		output += students[i].toString() + '\n';
	}

	console.log(typeof prompt(output));
	console.log('onLoad Function');
})();

function makeStudent(name, korean, math, english, science) {
	var willReturn = {
		name : name,
		korean : korean,
		math : math,
		english : english,
		science : science,

		getSum : function() {
			return this.korean + this.math + this.english + this.science;
		},
		getAverage : function() {
			return this.getSum() / 4;
		},
		toString : function() {
			return this.name + '\t' + this.getSum() + '\t' + this.getAverage();
		}, function() {
			console.log('in Object');
		}
	}
	return willReturn;
}

function showView() {
	var showView = document.getElementById('showView');
	var sum = makeStudent('이새로찬', 50, 100, 50, 100).getSum();
	showView.innerHTML = sum;
	console.log('showView()');
}