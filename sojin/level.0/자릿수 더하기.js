import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-19
 * **/

/** 문제 설명
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요**/

function solution(n) {
  let sum = 0;
  let m = String(n);

  for (let i = 0; i < m.length; i++) {
    sum += Number(m[i]);
  }

  return sum;
}

function main() {
  const n = 1234;
  const result = 10;

  checkAnswer(solution(n) === result);
}

main();
