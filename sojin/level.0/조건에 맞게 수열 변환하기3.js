import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-25
 * **/

/** 문제 설명
정수 배열 arr와 자연수 k가 주어집니다.

만약 k가 홀수라면 arr의 모든 원소에 k를 곱하고, k가 짝수라면 arr의 모든 원소에 k를 더합니다.

이러한 변환을 마친 후의 arr를 return 하는 solution 함수를 완성해 주세요.**/

function solution(arr, k) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (k % 2 == 0) {
      answer.push(arr[i] + k);
    } else {
      answer.push(arr[i] * k);
    }
  }
  return answer;
}

/**
 * const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k)
 */

function main() {
  const arr = [1, 2, 3, 100, 99, 98];
  const k = 3;
  const result = [3, 6, 9, 300, 297, 294];

  checkAnswer(JSON.stringify(solution(arr, k)) === JSON.stringify(result));
}

main();
