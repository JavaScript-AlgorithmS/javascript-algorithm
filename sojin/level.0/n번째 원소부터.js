import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-27
 * **/

/** 문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, n 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.**/

function solution(num_list, n) {
  return num_list.slice(n - 1);
}

function main() {
  const num_list = [2, 1, 6];
  const n = 3;
  const result = [6];

  checkAnswer(JSON.stringify(solution(num_list, n)) === JSON.stringify(result));
}

main();
