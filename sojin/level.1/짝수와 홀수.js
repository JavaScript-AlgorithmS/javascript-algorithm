import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-10
 * **/

/** 문제 설명
정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요. **/

function solution(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function main() {
  const num = 3;
  const result = "Odd";

  checkAnswer(solution(num) === result);
}

main();
