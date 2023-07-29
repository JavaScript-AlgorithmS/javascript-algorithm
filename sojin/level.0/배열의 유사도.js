import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-19
 * **/

/** 문제 설명
두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.**/

function solution(s1, s2) {
  let answer = 0;
  for (let i of s1) {
    for (let j of s2) {
      if (i === j) answer++;
    }
  }
  return answer;
}

/**
 * function solution(s1, s2) {
 * const answer = s1.filter((x) => s2.includes(x));
 * return answer.length;
 * }
 */

function main() {
  const s1 = ["a", "b", "c"];
  const s2 = ["com", "b", "d", "p", "c"];
  const result = 2;

  checkAnswer(solution(s1, s2) === result);
}

main();
