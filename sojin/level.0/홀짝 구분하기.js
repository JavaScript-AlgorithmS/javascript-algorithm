/**
 * © DEV SSO 💻
 * Current date: 2023-05-05
 * **/

/** 문제 설명
자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd."를 출력하는 코드를 작성해 보세요.**/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  if (n % 2 == 0) {
    console.log(`${n} is even`);
  } else {
    console.log(`${n} is odd`);
  }
});
