// Scope Test

totalCount = 0

function testFNC(){
  tempCount = 0

  while (tempCount < 5){
    tempCount += 1
    console.log(tempCount)
  }

  totalCount = tempCount
}
testFNC()

console.log("last result" + totalCount)
