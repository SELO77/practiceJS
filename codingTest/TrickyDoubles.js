// # Create a function that returns twice the supplied value unless it is a tricky double.
// #
// # The trick: if the number passed in is a double, simply return the value that was passed.
// # 
// # Examples of a double number include:
// #
// # 44
// # 77
// # 3333
// # 8787
// # 100100
// #
// # trickyDoubles(15)   // should return 30
// # trickyDoubles(100)  // should return 200
// # trickyDoubles(4343) // should return 4343

function trickyDoubles(n){
 let strNum = n.toString();
 console.log(typeof strNum);
 
 if(strNum.length%2 === 0){
   let sliceLength = strNum.length/2;
   let firstPart = strNum.substr(0, sliceLength);
   let secondPart = strNum.substr(sliceLength, sliceLength);
   
   if(firstPart === secondPart){
     return Number(strNum);
   }
 }
 return strNum * 2;
}

console.log(answer1, answer2);


function cleverAnswer(){
  let s = n.toString(), sh = s.slice(s.length/2);
  return sh + sh == s ? n : n * 2;
}

const trickyDoubles = n => /^(\d+)\1$/.test(n) ? n : 2 * n;
