import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-24
 * **/

/** 문제 설명
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.
각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1을 더합니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요. **/

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];

    for (let j = s; j <= e; j++) {
      if (j % k === 0) {
        arr[j] += 1;
      }
    }
  }
  return arr;
}

/**
 * function solution(arr, queries) {
    for(let [s, e, k] of queries) {
        for(let i = s; i <= e; i++) {
            if(i % k === 0) arr[i]++;
        }
    }
    return arr;
}
 */

function main() {
  const arr = [0, 1, 2, 4, 3];
  const queries = [
    [0, 4, 1],
    [0, 3, 2],
    [0, 3, 3],
  ];
  const result = [3, 2, 4, 6, 4];

  checkAnswer(
    JSON.stringify(solution(arr, queries)) === JSON.stringify(result)
  );
}

main();
