import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-14
 * **/

/** 문제 설명
정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요. **/

function solution(num1, num2) {
  return parseInt(num1 / num2);
}

function main() {
  const num1 = 10;
  const num2 = 5;
  const result = 2;

  checkAnswer(result == solution(num1, num2));
}

main();
