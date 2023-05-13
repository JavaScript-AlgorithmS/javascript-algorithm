/**
 * © DEV SSO 💻
 * Current date: 2023-05-13
 * **/

/** 문제 설명
두 정수 a, b가 주어질 때 다음과 같은 형태의 계산식을 출력하는 코드를 작성해 보세요.
**/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(
    `${input[0]} + ${input[1]} = ${Number(input[0]) + Number(input[1])} `
  );
});
