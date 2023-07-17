import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-15
 * **/

/** 문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
-> a와b의 대소관계가 정해져있지 않은 부분이 포인트!
**/

function solution(a, b) {
  let answer = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

/** 가우스 합 공식 활용
 * function solution(a, b) {
 * let answer = 0;
 * answer = (a+b) * (Math.abs(b-a)+1) / 2;
 * return answer;
 * }
 */

function main() {
  const a = 3;
  const b = 5;
  const result = 12;

  checkAnswer(solution(a, b) === result);
}

main();
