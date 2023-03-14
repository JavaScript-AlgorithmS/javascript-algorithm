import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-14
 * **/

/** 문제 설명
정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요. **/

function solution(num1, num2) {
  return num1 == num2 ? 1 : -1;
}

function main() {
  const num1 = 2;
  const num2 = 3;
  const result = -1;

  checkAnswer(result == solution(num1, num2));
}

main();
