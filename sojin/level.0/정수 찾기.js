import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-24
 * **/

/** 문제 설명
정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.**/

function solution(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

function main() {
  const num_list = [1, 2, 3, 4, 5];
  const n = 3;
  const result = 1;

  checkAnswer(solution(num_list, n) === result);
}

main();
