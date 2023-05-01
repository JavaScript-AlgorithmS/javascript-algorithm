import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-01
 * **/

/** 문제 설명
어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.

문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.**/

function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

function main() {
  const str1 = "abc";
  const str2 = "aabcc";
  const result = 1;

  checkAnswer(solution(str1, str2) === result);
}

main();
