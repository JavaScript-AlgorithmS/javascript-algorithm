import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-05
 * **/

/** 문제 설명
boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
(x1 ∨ x2) ∧ (x3 ∨ x4)
 **/

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

function main() {
  const x1 = false;
  const x2 = true;
  const x3 = true;
  const x4 = true;
  const result = true;

  checkAnswer(solution(x1, x2, x3, x4) === result);
}

main();
