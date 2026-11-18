"use strict";

let userName = prompt("Who\'s there?");

if (userName === "Admin") {
  let passwd = prompt("Password?");

  if (passwd === "TheMaster") {
    alert("Welcome!");
  } else if (passwd === null || passwd === "") {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === null || userName === "") {
  alert("Canceled");
} else {
  alert("I don\'t know you");
}
