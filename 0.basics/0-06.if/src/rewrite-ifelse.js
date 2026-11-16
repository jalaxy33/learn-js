"use strict";

let login = prompt("Who login?", "");

/**
用 ? 重写以下代码：
let message;
if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
 */

// prettier-ignore
let message =
  login == "Employee" ? "Hello" : 
  login == "Director" ? "Greetings" : 
  login == "" ? "No login" : 
  "";

alert(message);
