"use strict";

const THRESH = 100;
let num;

// 终止条件：大于100的数字，esc取消输入或空行
do {
  num = prompt(`Enter a number greater than ${THRESH}.`);
} while ((num == 0 || num <= THRESH) && num);

