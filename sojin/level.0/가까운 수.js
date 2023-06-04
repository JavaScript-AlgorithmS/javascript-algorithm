import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-06
 * **/

/** 문제 설명
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요. **/

function solution(array, n) {
  array.sort((a, b) => a - b); // 인접한 요소들끼리의 차이를 비교하기 위해 정렬헤줌
  let a = 0;
  let b = 0;
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    answer.push(Math.abs(array[i] - n)); // n과 요소 사이의 차이의 절대값을 저장
    a = Math.min(...answer); // 가장 작은 절대값 찾기
    b = answer.indexOf(a); // 가장 작은 절대값의 인덱스 찾기
  }
  return array[b];
}

function main() {
  const array = [3, 10, 28];
  const n = 20;
  const result = 28;

  checkAnswer(solution(array, n) === result);
}

main();
