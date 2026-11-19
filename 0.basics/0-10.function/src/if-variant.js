"use strict";

/*
 * 重写以下函数
 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
 */

// 方式一：用 ? 重写
function checkAge1(age) {
  return age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
}

// 方式二：用 || 重写
function checkAge2(age) {
  return (
    age > 18 ??
    confirm("Do you have your parents permission to access this page?")
  );
}

let age;

age = +prompt("How old are you? (first)");
checkAge1(age);

age = +prompt("How old are you? (second)");
checkAge2(age);
