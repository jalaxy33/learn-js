"use strict";

let age = +prompt("输入年龄：");

const MIN = 14;
const MAX = 90;

if (age >= MIN && age <= MAX) {
  alert("符合要求");
} else {
  alert(`不符合要求！年龄需满足不小于 ${MIN} 不大于 ${MAX}！`);
}
