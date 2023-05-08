import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-08
 * **/

/** 문제 설명
정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.
**/

function solution(n, numlist) {
  let answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}

/**
 * function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}
 */

function main() {
  const n = 3;
  const numlist = [4, 5, 6, 7, 8, 9, 10, 11, 12];
  const result = [6, 9, 12];

  checkAnswer(JSON.stringify(solution(n, numlist)) === JSON.stringify(result));
}

main();
