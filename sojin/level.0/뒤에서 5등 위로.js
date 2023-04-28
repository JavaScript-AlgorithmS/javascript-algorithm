import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-28
 * **/

/** 문제 설명
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.**/

function solution(num_list) {
  let answer = [];
  const list = num_list.sort((a, b) => a - b);
  return (answer = list.slice(5));
}

function main() {
  const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];
  const result = [15, 32, 38, 46, 56];

  checkAnswer(JSON.stringify(solution(num_list)) === JSON.stringify(result));
}

main();
