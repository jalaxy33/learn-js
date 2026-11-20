"use strict";

// 创建对象
let user = {};
console.log("刚创建：user =", user);

// 添加属性
user.name = "John";
user.surname = "Smith";
console.log("添加属性后：user = ", user)

// 修改属性
user.name = "Pete";
console.log("修改属性后：user =", user)

// 删除属性
delete user.name;
console.log("删除属性后，user =", user);
