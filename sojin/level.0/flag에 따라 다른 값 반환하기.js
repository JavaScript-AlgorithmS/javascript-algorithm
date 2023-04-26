import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-26
 * **/

/** 문제 설명
문제 설명
두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.**/

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

function main() {
  const a = -4;
  const b = 7;
  const flag = true;
  const result = 3;

  checkAnswer(solution(a, b, flag) === result);
}

main();
