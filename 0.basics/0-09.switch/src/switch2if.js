"use strict";

/*
 *重写以下 switch 语句：
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
 */

function isin(query, lst) {
  let flag = false;
  for (let x of lst) {
    if (x === query) {
      flag = true;
      break;
    }
  }
  return flag;
}

let browser = prompt("browser", "");

if (browser === "Edge") {
  alert("You\'ve got the Edge!");
} else if (isin(browser, ["Chrome", "Firefox", "Safari", "Opera"])) {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}
