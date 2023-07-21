import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-29
 * **/

/** 문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요. **/

function solution(numbers) {
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  return sum / numbers.length;
}

/**
 * function solution(numbers) {
 * return numbers.reduce((a,b)=> a+b, 0) / numbers.length;
 * }
 */

function main() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = 5.5;

  checkAnswer(solution(numbers) === result);
}

main();
