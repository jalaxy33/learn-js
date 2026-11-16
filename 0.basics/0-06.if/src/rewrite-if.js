"use strict";

let a = +prompt("input 'a'");
let b = +prompt("input 'b'");

/* 
 * 改写以下代码：
let result;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

let result = a + b < 4 ? "Below" : "Over";

alert(`result = ${result}`);
