import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-01
 * **/

/** 문제 설명
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.**/

function solution(n) {
  const sqrt = Math.floor(Math.sqrt(n));
  return n % sqrt === 0 ? 1 : 2;
}

/** Number.isInteger()은 값이 정수인지 판별하는 메서드
 * function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 :2;
}
 */

function main() {
  const n = 144;
  const result = 1;

  checkAnswer(solution(n) === result);
}

main();
