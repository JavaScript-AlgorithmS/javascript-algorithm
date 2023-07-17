import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-17
 * **/

/** 문제 설명
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
**/

function solution(n) {
  return n
    .toString()
    .split("")
    .map((v) => parseInt(v))
    .reverse();
}

function main() {
  const n = 12345;
  const result = [5, 4, 3, 2, 1];

  checkAnswer(JSON.stringify(solution(n)) === JSON.stringify(result));
}

main();
