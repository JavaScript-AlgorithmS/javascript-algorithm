import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-12
 * **/

/** 문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요. **/

function solution(numbers) {
  const array = numbers.sort((a, b) => b - a);
  return array[0] * array[1];
}

function main() {
  const numbers = [1, 2, 3, 4, 5];
  const result = 20;

  checkAnswer(solution(numbers) === result);
}

main();
