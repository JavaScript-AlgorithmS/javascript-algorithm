import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-17
 * **/

/** 문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.**/

function solution(array) {
  const max = Math.max(...array); // 전개구문 사용하여 요소들을 개별적인 인수로 전달
  const maxIndex = array.indexOf(max);

  return [max, maxIndex];
}

function main() {
  const array = [1, 8, 3];
  const result = [8, 1];

  checkAnswer(JSON.stringify(solution(array)) === JSON.stringify(result));
}

main();
