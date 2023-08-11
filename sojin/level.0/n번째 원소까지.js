import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-23
 * **/

/** 문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.**/

// slice 메서드는 종료 인덱스는 포함시키지 않는다.
function solution(num_list, n) {
  return num_list.slice(0, n);
}

function main() {
  const num_list = [2, 1, 6];
  const n = 1;
  const result = [2];

  checkAnswer(JSON.stringify(solution(num_list, n)) === JSON.stringify(result));
}

main();
