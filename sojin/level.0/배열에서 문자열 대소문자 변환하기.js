import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-06
 * **/

/** 문제 설명
문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.**/

function solution(strArr) {
  return strArr.map((str, idx) => {
    if (idx % 2 == 0) {
      return str.toLowerCase();
    } else {
      return str.toUpperCase();
    }
  });
}

function main() {
  const strArr = ["AAA", "BBB", "CCC", "DDD"];
  const result = ["aaa", "BBB", "ccc", "DDD"];

  checkAnswer(JSON.stringify(solution(strArr)) === JSON.stringify(result));
}

main();
