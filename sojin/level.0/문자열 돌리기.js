import { checkAnswer } from "../../common.js";
import readline from "readline";

/**
 * © DEV SSO 💻
 * Current date: 2023-06-03
 * **/

/** 문제 설명
문자열 str이 주어집니다.
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.**/

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  const str = input[0];
  for (const s of str) {
    console.log(s);
  }
});
