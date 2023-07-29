import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-10
 * **/

/** 문제 설명
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요. **/

function solution(my_string, letter) {
  return my_string.replace(letter, "");
}

/**function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
} */

function main() {
  const my_string = "abcdef";
  const letter = "f";
  const result = "abcde";

  checkAnswer(solution(my_string, letter) === result);
}

main();
