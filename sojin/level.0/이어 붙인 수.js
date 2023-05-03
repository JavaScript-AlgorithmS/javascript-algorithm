import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-03
 * **/

/** 문제 설명
정수가 담긴 리스트 num_list가 주어집니다. num_list의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.**/

function solution(num_list) {
  let evenSum = 0;
  let oddSum = 0;
  for (const num of num_list) {
    if (num % 2 === 0) {
      evenSum += num.toString();
    } else {
      oddSum += num.toString();
    }
  }
  return parseInt(oddSum) + parseInt(evenSum);
}

function main() {
  const num_list = [5, 7, 8, 3];
  const result = 581;

  checkAnswer(solution(num_list) === result);
}

main();
