import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-21
 * **/

/** 문제 설명
실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.**/

function solution(flo) {
  return Math.floor(flo);
}

function main() {
  const flo = 1.42;
  const result = 1;

  checkAnswer(solution(flo) === result);
}

main();
