import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-05
 * **/

/** 문제 설명
정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [i, j] 꼴입니다.
각 query마다 순서대로 arr[i]의 값과 arr[j]의 값을 서로 바꿉니다.
위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.
 **/

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let [index1, index2] = queries[i];
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  return arr;
}

/**
 * function solution(arr, queries) {
 *  queries.forEach(([a,b]) => {
 *    [arr[a],arr[b]] = [arr[b], arr[a]];
 * })
 * return arr;
 * }
 */

function main() {
  const arr = [0, 1, 2, 3, 4];
  const queries = [
    [0, 3],
    [1, 2],
    [1, 4],
  ];
  const result = [3, 4, 1, 0, 2];

  checkAnswer(
    JSON.stringify(solution(arr, queries)) === JSON.stringify(result)
  );
}

main();
