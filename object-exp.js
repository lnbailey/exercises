var greeting = "Hello and welcome!";

console.log(greeting[7])
console.log(greeting.match("Hello"))

console.log(greeting.match("welcme!"))
console.log(greeting.match("r"))

console.log(greeting.split(" "))

//can split on any index in the string

var startsWithM = [];
var starsWithMKeys = [];

var famous2 = {
  singer : 'amy whinehouse',
  actress : 'cameron diaz',
  actor : 'morgan freeman',
  athlete : 'alex rodriguez',
  ceo : 'mark zuckerberg',
  president : 'barrack obama',
  firstLady : 'michelle obama',
}
for (var job in famous2) {
  if (famous2[job][0] === 'm') {
  startsWithM.push(famous2[job]);
  starsWithMKeys.push(job);
  }
}
console.log(startsWithM);
console.log(starsWithMKeys);
