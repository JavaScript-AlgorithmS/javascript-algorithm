import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-04
 * **/

/** 문제 설명
머쓱이네 피자가게는 피자를 일곱 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 주어질 때, 모든 사람이 피자를 한 조각 이상 먹기 위해 필요한 피자의 수를 return 하는 solution 함수를 완성해보세요. **/

function solution(n) {
  return Math.ceil(n / 7);
}

function main() {
  const n = 7;
  const result = 1;

  checkAnswer(solution(n) === result);
}

main();
