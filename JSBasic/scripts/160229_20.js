console.log(" regular expression ");
//var re = /ab+c/;
// var re = new RegExp('ab+c');
// \b 단어경계 문자의 형태
console.log('\/ \* hello /it');

var myRe = /d(b+)d/g;
console.log(myRe);
var myArray = myRe.exec("cdbbdbsbz");
console.log(myRe.lastIndex);

var myStr = "heel eeleee e";
var myStr2 = myStr.replace("/e\g/", "a");
console.log(myStr2);

var re2 = /(\w+)\s(\w+)/;
var myStrr = "Selo Chan";
var newMyStrr = myStrr.replace(re2, "$2, $1");
console.log(newMyStrr);