import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-21
 * **/

/** 문제 설명
이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.
**/

function solution(arr1, arr2) {
  const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
  if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length > arr2.length) {
    return 1;
  } else {
    if (sum1 === sum2) {
      return 0;
    } else {
      return sum1 > sum2 ? 1 : -1;
    }
  }
}

function main() {
  const arr1 = [49, 13];
  const arr2 = [70, 11, 2];
  const result = -1;

  checkAnswer(solution(arr1, arr2) === result);
}

main();
