//  [1.] How JavaScript Works?

//  "Everything in JS happens inside an Execution Context. "

// Execution Context content of two components :-
// 1. Memory Component {Variable Enviroment} :- All Variables and Functions are stored in the form of Key Value Pairs.
//  Ex:- a:1;
// b:2;
// fn() : {....};
// 2. Code Component {Thread of the Execution} :- This the place where code is get executed one at a line.
// "JavaScript is a synchronous single threaded language" [Synchronous mean at a specific order]

// ---------------------------------------------------------------------

//  [2.] What happens when you run JavaScript Code.....

var n = 2;
function sq (num) {
    var ans = num*num;
    return ans;
}
var sq2 = sq(n);
var sq4 = sq(4);
console.log(sq2);
console.log(sq4);