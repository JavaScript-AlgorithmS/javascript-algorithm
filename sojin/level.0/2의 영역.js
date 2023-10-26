import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-24
 * **/

/** 문제 설명
정수 배열 arr가 주어집니다. 배열 안의 2가 모두 포함된 가장 작은 연속된 부분 배열을 return 하는 solution 함수를 완성해 주세요.
단, arr에 2가 없는 경우 [-1]을 return 합니다. **/

// indexOf() 메서드는 배열의 주어진 값을 발견할 수 있는 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환한다.
function solution(arr) {
  const start = arr.indexOf(2);
  const end = arr.lastIndexOf(2);
  if (start === -1 || end === -1) return [-1];
  else return arr.slice(start, end + 1);
}

function main() {
  const arr = [1, 2, 1, 4, 5, 2, 9];
  const result = [2, 1, 4, 5, 2];

  checkAnswer(JSON.stringify(solution(arr)) === JSON.stringify(result));
}

main();
