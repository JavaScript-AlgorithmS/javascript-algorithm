import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-14
 * **/

/** 문제 설명
정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요. **/

function solution(num1, num2) {
  return num1 % num2;
}

function main() {
  const num1 = 3;
  const num2 = 2;
  const result = 1;

  checkAnswer(result == solution(num1, num2));
}

main();
