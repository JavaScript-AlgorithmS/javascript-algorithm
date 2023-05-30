import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-30
 * **/

/** 문제 설명
문자열 myString이 주어집니다. myString을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.
**/

function solution(myString) {
  const splitted = myString.split("x");
  return splitted.map((v) => v.length);
}

function main() {
  const myString = "oxooxoxxox";
  const result = [1, 2, 1, 0, 1, 0];

  checkAnswer(JSON.stringify(solution(myString)) === JSON.stringify(result));
}

main();
