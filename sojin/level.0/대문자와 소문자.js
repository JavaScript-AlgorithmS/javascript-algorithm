import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-08
 * **/

/** 문제 설명
문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
**/

function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    const txt = my_string[i];
    if (txt.toUpperCase() === txt) {
      answer += txt.toLowerCase();
    } else {
      answer += txt.toUpperCase();
    }
  }
  return answer;
}

/**
 * function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}
 */

function main() {
  const my_string = "cccCCC";
  const result = "CCCccc";

  checkAnswer(solution(my_string) === result);
}

main();
