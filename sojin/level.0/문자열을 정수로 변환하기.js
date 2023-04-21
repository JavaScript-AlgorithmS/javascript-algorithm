import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-21
 * **/

/** 문제 설명
숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.**/

function solution(n_str) {
  return Number(n_str);
}

function main() {
  const n_str = "10";
  const result = 10;

  checkAnswer(solution(n_str) === result);
}

main();
