import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-14
 * **/

/** 문제 설명
정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요. **/

function solution(num1, num2) {
  return num1 * num2;
}

function main() {
  const num1 = 3;
  const num2 = 4;
  const result = 12;

  checkAnswer(result == solution(num1, num2));
}

main();
