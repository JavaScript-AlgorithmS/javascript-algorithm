import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-10
 * **/

/** 문제 설명
정수 배열 arr과 정수 n이 매개변수로 주어집니다. arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 return 하는 solution 함수를 작성해 주세요.**/

function solution(arr, n) {
  const answer = [];
  for (let i = 0; arr.length > i; i++) {
    if (arr.length % 2 == 0) {
      if (i % 2 !== 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    } else {
      if (i % 2 == 0) {
        answer.push(arr[i] + n);
      } else {
        answer.push(arr[i]);
      }
    }
  }
  return answer;
}

/**
 * function solution(arr, n) {
    return arr.length % 2 === 0 ? arr.map((v,i)=> i%2 !==0 ? v+n : v) : arr.map((v,i)=> i%2===0 ? v+n : v)
}
 */

function main() {
  const arr = [49, 12, 100, 276, 33];
  const n = 27;
  const result = [76, 12, 127, 276, 60];

  checkAnswer(JSON.stringify(solution(arr, n)) === JSON.stringify(result));
}

main();
