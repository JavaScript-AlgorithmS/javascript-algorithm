import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-06
 * **/

/** 문제 설명
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.**/

function solution(my_string, alp) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i].includes(alp)) {
      answer += alp.toUpperCase();
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}

/**
 * function solution(my_string, alp) {
    if (!my_string.includes(alp)) {
        return my_string;
    }
    return my_string.replaceAll(alp, alp.toUpperCase());
}
 */

function main() {
  const my_string = "programmers";
  const alp = "p";
  const result = "Programmers";

  checkAnswer(solution(my_string, alp) === result);
}

main();
