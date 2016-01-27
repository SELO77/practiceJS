// node 
// 문자열 자료형의 전역 변수

// console.log('filename :', __filename);
// console.log('dirname:', __dirname);

// 전역 객체
// console, exports, process


// Global Object Console
// console.time(label);
// console.timeEnd(label);
// 
// REPL console 창에서 직접 실행하는 코드
// %d number, %s String, %j JSON

// console.time('alpha');

// var output = 1;

// for (var i = 1; i <= 10; i++){
// 	output *= i;
// }
// console.log('Result :', output);

// console.timeEnd('alpha');

// 출력 글자에 색 적용
// ANSI Code 
// Syntax '\u001b[Number&m'
console.log('\u001b[31m','Hello World ..!');
console.log('\u001b[32m','Hello World ..!');
//console.log('\u001b[33m','Hello World ..!');


// Global Object Process
// 웹브라우저에서 작동하는 자바스크립트에 존재하지 않는 Node.js만이 갖는 객체
// 프로그램과 관련된 정보를 나타내는 객체

//console.log(process.env);
console.log(process.uptime());

console.log('Start==');
console.log(process.argv.length);
// process.argv 속성은 ? 실행매개변수를 나타냄
process.argv.forEach(function(item, index){
	console.log(index + ' : ' + typeof (item) + ' : ', item);

	if (item == '--exit') {
		// statement
		var exitTime = Number(process.argv[index + 1]);

		setTimeout(function(){
			process.exit();
		}, exitTime);
	}
});

