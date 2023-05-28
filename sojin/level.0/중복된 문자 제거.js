import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-28
 * **/

/** 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
**/

function solution(my_string) {
  const answer = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer.push(my_string[i]);
    }
  }
  return answer.join("");
}

function main() {
  const my_string = "people";
  const result = "peol";

  checkAnswer(solution(my_string) === result);
}

main();
