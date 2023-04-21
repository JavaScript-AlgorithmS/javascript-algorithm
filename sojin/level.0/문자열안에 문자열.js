import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-21
 * **/

/** 문제 설명
문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요..**/

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

function main() {
  const str1 = "ab6CDE443fgh22iJKlmn1o";
  const str2 = "6CD";
  const result = 1;

  checkAnswer(solution(str1, str2) === result);
}

main();
