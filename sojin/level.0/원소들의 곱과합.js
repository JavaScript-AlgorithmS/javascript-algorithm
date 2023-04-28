import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-28
 * **/

/** 문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.**/

function solution(num_list) {
  let sum = 0;
  let multi = 1;

  for (let i = 0; i < num_list.length; i++) {
    sum += num_list[i];
    multi *= num_list[i];
  }

  const sumSquare = sum ** 2;

  if (sumSquare < multi) {
    return 0;
  } else {
    return 1;
  }
}

function main() {
  const num_list = [3, 4, 5, 2, 1];
  const result = 1;

  checkAnswer(solution(num_list) === result);
}

main();
