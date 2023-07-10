import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-10
 * **/

/** 문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요. **/

function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// reduce 메서드를 사용한 풀이
function solution(arr) {
  const answer = arr.reduce((acc, num) => acc + num, 0);
  return answer / arr.length;
}

function main() {
  const arr = [1, 2, 3, 4];
  const result = 2.5;

  checkAnswer(solution(arr) === result);
}

main();
