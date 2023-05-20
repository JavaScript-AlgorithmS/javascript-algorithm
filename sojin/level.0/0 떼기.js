import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-20
 * **/

/** 문제 설명
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
**/

function solution(n_str) {
  return n_str.replace(/^0+/, "");
  // (^)은 문자열의 시작, 0이 한 개 이상(+)을 빈 문자열로 치환
}

function main() {
  const n_str = "0010";
  const result = "10";

  checkAnswer(solution(n_str) === result);
}

main();
