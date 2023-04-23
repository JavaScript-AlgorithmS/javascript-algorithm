import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-23
 * **/

/** 문제 설명
정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.**/

function solution(number, n, m) {
  return number % n == 0 && number % m == 0 ? 1 : 0;
}

function main() {
  const number = 60;
  const m = 3;
  const n = 2;
  const result = 1;

  checkAnswer(solution(number, n, m) === result);
}

main();
