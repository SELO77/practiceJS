//domControl00 style

testel =  document.getElementById('test');
console.log("hello",testel)

var viewFlag = true;
function toggleHidden() {
  ttt =  document.getElementById('test');
  console.log("hello",ttt);
  viewFlag = !viewFlag;
  viewFlag? ttt.style.display = "block": ttt.style.display = "none";ttt.style.color = "red";

  console.log("end");
}