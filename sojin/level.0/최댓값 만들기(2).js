import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-15
 * **/

/** 문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요. **/

function solution(numbers) {
  numbers.sort((a, b) => b - a);
  let max = numbers[0] * numbers[1];
  for (let i = 2; i < numbers.length; i++) {
    max = Math.max(max, numbers[i] * numbers[i - 1]);
  }
  return max;
}

/**
 * function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}
 */

function main() {
  const numbers = [1, 2, -3, 4, -5];
  const result = 15;

  checkAnswer(solution(numbers) === result);
}

main();
