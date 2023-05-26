import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-26
 * **/

/** 문제 설명
문자열 배열 strArr가 주어집니다. 배열 내의 문자열 중 "ad"라는 부분 문자열을 포함하고 있는 모든 문자열을 제거하고 남은 문자열을 순서를 유지하여 배열로 return 하는 solution 함수를 완성해 주세요.
**/

function solution(strArr) {
  const answer = [];
  for (let i = 0; i < strArr.length; i++) {
    if (!strArr[i].includes("ad")) {
      answer.push(strArr[i]);
    }
  }
  return answer;
}

/**
 * const solution = strArr => strArr.filter(v => !v.includes('ad));
 */

function main() {
  const strArr = ["and", "notad", "abcd"];
  const result = ["and", "abcd"];

  checkAnswer(JSON.stringify(solution(strArr)) === JSON.stringify(result));
}

main();
