import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-14
 * **/

/** 문제 설명
정수 num1과 num2가 주어질 때, num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요. **/

function solution(num1, num2) {
  return num1 - num2;
}

function main() {
  const num1 = 2;
  const num2 = 3;
  const result = -1;

  checkAnswer(result == solution(num1, num2));
}

main();
