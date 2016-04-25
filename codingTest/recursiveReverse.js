// Your objective is to complete a recursive function reverse() that receives str as String and returns the same string in reverse order

// Rules:

// reverse function should be executed only N times. N = length of the input string
// helper functions are not allowed
// changing the signature of the function is not allowed
// Examples:

// reverse("hello world") = "dlrow olleh" (N = 11)
// reverse("abcd") = "dcba" (N = 4)
// reverse("12345") = "54321" (N = 5)

function reverse(str) {
  return str.length > 0 ? reverse(str.slice(1)) + str.slice(0, 1) : "";
}

console.log(reverse("hello"));

var v = (str) => str.length > 0 ? slice(-1) + v(slice(0, -1)) : "" ;

console.log(v("god bless you"));