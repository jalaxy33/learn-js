"use strict";

if (-1 || 0) alert("first"); // 这个会打印
if (-1 && 0) alert("second"); // 这个不打印
if (null || (-1 && 1)) alert("third"); // 这个会打印
