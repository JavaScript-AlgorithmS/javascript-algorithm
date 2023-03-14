import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-14
 * **/

/** 문제 설명
정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요. **/

function solution(num1, num2) {
  return parseInt((num1 / num2) * 1000);
}

function main() {
  const num1 = 3;
  const num2 = 2;
  const result = 1500;

  checkAnswer(result == solution(num1, num2));
}

main();
