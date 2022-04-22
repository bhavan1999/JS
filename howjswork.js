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

// first GEC{Global Execution Context} is Created
//  Memory Component{Variable Enviroment}           Code Component{Thread of the Execution}
// n : undefined                                    ----> After Running Memory Phase Code Phase Will Work
// sq : sq{....}(Stores the Whole Code)                  n : 2   {line no vs code 17}
//  sq2 : undefined                                      function invocation will happens {line no vs code 22 and 18,19,20,21 will not not executed}
//  sq4 : undefined                                      Again new EC{Execution context will be created}
//                                                       Memory Component{Variable Enviroment}           Code Component{Thread of the Execution}
//                                                       num : undefined                                  num : 2
//                                                       ans : undefined                                  ans : 4
//  Call Stack :- The call stack is used by JavaScript to keep track of multiple function calls