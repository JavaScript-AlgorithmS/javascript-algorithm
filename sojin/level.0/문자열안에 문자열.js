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

/** split을 사용한 풀이
 * function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}
 */

/**  indexOf는 특정 문자열이 처음으로 나타나는 인덱스를 반환, 재하지 않는다면-1을 반환하는 특징을 이용한 풀이
 * function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}
 */

function main() {
  const str1 = "ab6CDE443fgh22iJKlmn1o";
  const str2 = "6CD";
  const result = 1;

  checkAnswer(solution(str1, str2) === result);
}

main();
