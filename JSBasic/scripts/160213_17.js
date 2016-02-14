function Student(name, korean, math, english, science) {
	this.name = name;
	this.korean = korean;
	this.math = math;
	this.english = english;
	this.science = science;

	// this.getSum = function() {
	// 	return this.korean + this.math + this.english + this.science;
	// };

	// this.getAverage = function() {
	// 	return this.getSum()/4;
	// };

	// this.toString = function() {
	// 	return this.name + '\t';
	// };

}

Student.prototype.getSum = function() {
	return this.korean + this.math + this.english + this.science;
}
Student.prototype.getAverage = function() {
	return this.getSum()/4;
}


var studentLee = new Student('Lee', 50, 50, 75, 100);
console.log(studentLee);
console.log(typeof studentLee);
console.log(studentLee.name, studentLee.korean, studentLee.science);  // JavaScript 에서는 
console.log(studentLee.getSum(), studentLee.getAverage());
console.log(studentLee instanceof Student);
console.log(studentLee instanceof String);
console.log(studentLee instanceof Array);

