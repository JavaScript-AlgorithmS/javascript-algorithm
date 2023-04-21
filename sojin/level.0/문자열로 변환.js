import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-21
 * **/

/** 문제 설명
정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.**/

function solution(n) {
  return String(n);
}

function main() {
  const n = 123;
  const result = "123";

  checkAnswer(solution(n) === result);
}

main();
