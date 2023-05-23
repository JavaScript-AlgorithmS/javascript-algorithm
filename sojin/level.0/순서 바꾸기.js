import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-23
 * **/

/** 문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
**/

function solution(num_list, n) {
  const perfix = num_list.slice(n);
  const suffix = num_list.slice(0, n);
  return perfix.concat(suffix);
}

function main() {
  const num_list = [2, 1, 6];
  const n = 1;
  const result = [1, 6, 2];

  checkAnswer(JSON.stringify(solution(num_list, n)) === JSON.stringify(result));
}

main();
