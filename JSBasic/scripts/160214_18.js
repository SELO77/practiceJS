console.log("160214_18_Encapsulation");
function Rectangle(w, h) {
	var width = w;
	var height = h;

	this.getWidth = function () { return w; };
	this.getHeight = function () { return h; };
	this.setWidth = function() {
		if(w < 0) {
			throw "Width can't be minus.";
		} else {
			width = w;
		}		
	};
	this.setHeigth = function() {
		if(h < 0) {
			throw "Heigth can't be minus.";
		} else {
			height = h;
		}
	};
}

Rectangle.prototype.getArea = function() {
	return this.getWidth() * this.getHeigth();
};

var rectangle = new Rectangle(5, 7);
rectangle.setWidth(-2);
console.log(rectangle.width);
console.log(rectangle.getWidth());


// Object Property types
console.log("===Obejct get, set===");
var person1 = {
	_name: "Selo",
	readCount: 0,
	get name() {
		this.readCount ++;
		console.log('reading name %n',this.readCount);
		return this._name;
	},
	set name(val) {
		console.log("setting name to %s", val);
		this._name = val;
	}
};

console.log(person1.name);
// console.log(person1._name);
person1.name = "Leo";
console.log(person1.name);