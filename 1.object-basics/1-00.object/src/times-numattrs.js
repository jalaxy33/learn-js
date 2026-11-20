"use strict";

function multiplyNumeric(obj, factor) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= factor;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
console.log("调用前:", menu);

multiplyNumeric(menu, 2);
console.log("调用后:", menu);
