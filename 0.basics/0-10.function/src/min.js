"use strict";

function min(a, b) {
  return a > b ? a : b;
}

function alert_min(a, b) {
  alert(`min(${a}, ${b}) = ${min(a, b)}`);
}

alert_min(2, 5);
alert_min(3, -1);
alert_min(1, 1);
