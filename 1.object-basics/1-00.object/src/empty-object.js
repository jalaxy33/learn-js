"use strict";

function isEmpty(obj) {
  for (let _ in obj) {
    return false;
  }
  return true;
}

let schedule = {};
console.log("before:", schedule, ", isEmpty(schedule) =", isEmpty(schedule));

schedule["8:30"] = "get up";
console.log("after:", schedule, ", isEmpty(schedule) =", isEmpty(schedule));
