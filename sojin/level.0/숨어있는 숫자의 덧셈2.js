import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-11-17
 * **/

/** 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요. **/

function solution(my_string) {
  let num = my_string.match(/\d+/g).map(Number); // d는 숫자를 의미하는 메타문자. [0-9]와 동일하다. +는 연속된 숫자를 의미한다.
  let sum = num.reduce((a, b) => a + b, 0); // Number는 내장 생성자 함수로, 숫자 문자열을 숫자 데이터 유형으로 변환할 때 사용한다. -> 문자열 배열을 숫자 배열로 변환한다.
  return sum;
}

function main() {
  const my_string = "aAb1B2cC34oOp";
  const result = 37;

  checkAnswer(solution(my_string) === result);
}

main();
