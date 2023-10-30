import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-30
 * **/

/** 문제 설명
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요. **/

function solution(arr, queries) {
  for (let [s, e] of queries) {
    for (let j = s; j <= e; j++) {
      arr[j] += 1;
    }
  }
  return arr;
}

function main() {
  const arr = [0, 1, 2, 3, 4];
  const queries = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];
  const result = [1, 3, 4, 4, 4];

  checkAnswer(
    JSON.stringify(solution(arr, queries)) === JSON.stringify(result)
  );
}

main();
