//Day 14
function showToView (argument) {
	setTimeout(function(){
			document.getElementById('showView').innerText = argument;
		},3000)
	}

var product = {
	name: 'mango',
	type: 'fruit',
	where: 'Pilipean'
};

product['name'] = 'apple';
console.log(product.name);
showToView(product.name);