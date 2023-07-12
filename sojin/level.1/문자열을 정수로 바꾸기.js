import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-12
 * **/

/** 문제 설명
문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요. **/

function solution(s) {
  return parseInt(s);
}

function main() {
  const s = "1234";
  const result = 1234;

  checkAnswer(solution(s) === result);
}

main();
